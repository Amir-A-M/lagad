import { getAuthenticatedGithubUser, github, google, lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { OAuth2RequestError } from "arctic";
import { generateId } from "lucia";
import { db, userTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getUserWithEmail, getUserWithGithubId, getUserWithUsername } from "@/lib/db";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies().get("github_oauth_state")?.value ?? null;
  const storedCodeVerifier  = cookies().get("github_oauth_code_verifier")?.value ?? null;
  if (!code || !storedState || !storedCodeVerifier || state !== storedState) {
    return new Response(null, {
      status: 400
    });
  }

  try {
    const tokens = await google.validateAuthorizationCode(code, storedCodeVerifier);
    console.log(tokens);
    throw new Error("");
    // FIX THIS LATER
    // Set up a host and Domain —— Invalid scheme: URIs must use "https".
    

    const githubUser = await getAuthenticatedGithubUser(tokens.accessToken)

    // login User
    const [existingGithubUser] = await getUserWithGithubId(githubUser.id);
    if (existingGithubUser)
      return handleCookieAndRedirect(existingGithubUser.id)


    // OR Connect User to Github account
    const [existingUser] = await getUserWithEmail(githubUser.email)

    if (existingUser) {
      await updateUser(existingUser, githubUser)
      return handleCookieAndRedirect(existingUser.id)
    }

    // OR Create new User
    const userId = await createUser(githubUser)
    return handleCookieAndRedirect(userId)
  } catch (e) {
    console.log(e);

    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400
      });
    }
    return new Response(null, {
      status: 500
    });
  }
}

async function handleCookieAndRedirect(userId: string) {
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/"
    }
  });
}

async function updateUser(user: any, githubUser: any) {
  return await db.update(userTable).set({
    githubId: githubUser.id,
    avatarUrl: user.avatarUrl || githubUser.avatar_url,
    nickname: (user.nickname === user.username) ? githubUser.name : user.nickname,
    fullName: user.name || githubUser.name,
  }).where(eq(userTable.email, githubUser.email));
}

/**
 * @param githubUser 
 * @returns userId
 */
async function createUser(githubUser: any) {
  const userId = generateId(15);

  const [duplicateUsername] = await getUserWithUsername(githubUser.login);

  // Replace this with your own DB client.
  await db.insert(userTable).values({
    id: userId,
    githubId: githubUser.id,
    email: githubUser.email,
    username: duplicateUsername ? generateId(8) : githubUser.login,
    nickname: githubUser.name,
    fullName: githubUser.name,
    avatarUrl: githubUser.avatar_url,
  });
  return userId
}
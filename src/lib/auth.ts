import { Lucia, generateId } from "lucia";
import { adapter, db, passwordResetTokenTable } from "../db/schema";
import { TimeSpan, createDate } from "oslo";
import { sha256 } from "oslo/crypto";
import { encodeHex } from "oslo/encoding";
import { eq } from "drizzle-orm";
import { cache } from "react";
import { cookies } from "next/headers";
import { GitHub, Google } from "arctic";

export const lucia = new Lucia(adapter, {
  sessionExpiresIn: new TimeSpan(2, "w"),
  sessionCookie: {
    // this sets cookies with super long expiration
    // since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
    expires: true,
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === "production"
    }
  },
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      githubId: attributes.githubId,
      nickname: attributes.nickname,
      username: attributes.username,
      avatarUrl: attributes.avatarUrl,
      fullName: attributes.fullName,
      email: attributes.email,
    };
  },
});

// IMPORTANT!
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  githubId: number;
  nickname: string;
  username: string;
  avatarUrl: string;
  fullName: string;
  email: string;
}

export async function createPasswordResetToken(userEmail: string, username?: string): Promise<string> {
  // optionally invalidate all existing tokens
  await db.delete(passwordResetTokenTable).where(eq(passwordResetTokenTable.userEmail, userEmail));
  const tokenId = generateId(40);
  const tokenHash = encodeHex(await sha256(new TextEncoder().encode(tokenId)));
  await db.insert(passwordResetTokenTable).values({
    tokenHash,
    userEmail,
    username,
    expiresAt: createDate(new TimeSpan(15, "m"))
  });
  return tokenId;
}

export const getUser = cache(async () => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
  if (!sessionId) return null;
  const { user, session } = await lucia.validateSession(sessionId);
  try {
    if (session && session.fresh) {
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
    if (!session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
  } catch {
    // Next.js throws error when attempting to set cookies when rendering page
  }
  return user;
});

//
// Github OAuth stuff...
//
export const github = new GitHub(process.env.GITHUB_CLIENT_ID!, process.env.GITHUB_CLIENT_SECRET!);

/**
 * @param accessToken 
 * @returns interface AuthenticatedGithubUser
 */
export async function getAuthenticatedGithubUser(accessToken: string): Promise<AuthenticatedGithubUser> {
  const fetchOptions = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
  const [githubUser, userEmails]: [GitHubUser, GitHubUserEmails] = await Promise.all([
    fetch("https://api.github.com/user", fetchOptions).then((githubUserResponse) => githubUserResponse.json()),
    fetch("https://api.github.com/user/emails", fetchOptions).then((userEmailsResponse) => userEmailsResponse.json()),
  ])
  return {
    ...githubUser,
    email: githubUser.email || userEmails.find(({ primary }: GitHubUserEmail) => primary).email
  }
}

interface AuthenticatedGithubUser extends GitHubUser {
  email: string;
}

interface GitHubUser {
  id: string;
  login: string;
  name: string;
  avatar_url: string;
  email: string | null;
}

interface GitHubUserEmail {
  email: string;
  verified: boolean;
  primary: boolean;
  visibility: string;
}
interface GitHubUserEmails extends Array<GitHubUserEmail> { }


//
// Google OAuth stuff...
//
export const google =
  new Google(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, 'https://localhost:3000/auth/oauth/google/callback');

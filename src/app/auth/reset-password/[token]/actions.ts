
"use server";

import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";
import { redirect } from "next/navigation";
import { generateId } from "lucia";
import { db } from "@/db/schema";
import { passwordSchema } from "@/lib/ValidationSchemes";
import { type ActionResult } from "@/components/auth/form";
import { userTable } from "@/db/schema";
import { encodeHex } from "oslo/encoding";
import { sha256 } from "oslo/crypto";
import { eq } from "drizzle-orm";
import { isWithinExpirationDate } from "oslo";
import { Argon2id } from "oslo/password";
import { deletePasswordToken, getPasswordToken, getUserWithEmail } from "@/lib/db";
import { isRateLimited } from "@/lib/helper";

export async function setNewPassword(verificationToken: string, _: any, formData: FormData): Promise<ActionResult> {
  
  const error = await isRateLimited()
  if (error) return { error }

  let data;

  try {
    data = await passwordSchema.validate({
      password: formData.get("password"),
    });
  } catch ({ errors }) {
    return {
      error: errors[0],
    };
  }

  const tokenHash = encodeHex(await sha256(new TextEncoder().encode(verificationToken)));
  const [token] = await getPasswordToken(tokenHash);

  if (token) {
    await deletePasswordToken(tokenHash);
  }

  if (!token || !isWithinExpirationDate(token.expiresAt)) {
    return {
      error: 'توکن نامعتبر یا منقضی شده است.',
    };
  }

  let [user] = await getUserWithEmail(token.userEmail);

  const hashedPassword = await new Argon2id().hash(data.password);

  if (!user) {
    const userId = generateId(15);
    user = await db.insert(userTable).values({
      id: userId,
      email: token.userEmail,
      username: token.username,
      nickname: token.username,
      password: hashedPassword,
    });
  }
  else {
    await lucia.invalidateUserSessions(user.id);
    await db.update(userTable).set({
      password: hashedPassword,
    }).where(eq(userTable.id, user.id));
  }

  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  return redirect("/");
}

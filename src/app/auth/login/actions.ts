
"use server";

import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";
import { redirect } from "next/navigation";
import { type ActionResult } from "@/components/auth/form";
import { getUserWithEmail } from "@/lib/db";
import { isRateLimited } from "@/lib/helper";

export async function login(_: any, formData: FormData): Promise<ActionResult> {
  const error = await isRateLimited()
  if (error) return { error }

  const [existingUser] = await getUserWithEmail(formData.get("email") as string);
  const password = formData.get("password") as string;

  if (!existingUser) {
    // NOTE:
    // Returning immediately allows malicious actors to figure out valid usernames from response times,
    // allowing them to only focus on guessing passwords in brute-force attacks.
    // As a preventive measure, you may want to hash passwords even for invalid usernames.
    // However, valid usernames can be already be revealed with the signup page among other methods.
    // It will also be much more resource intensive.
    // Since protecting against this is non-trivial,
    // it is crucial your implementation is protected against brute-force attacks with login throttling etc.
    // If usernames are public, you may outright tell the user that the username is invalid.

    await new Argon2id().hash(password);

    return {
      error: "ایمیل یا رمز عبور اشتباه است."
    };
  }

  const validPassword = await new Argon2id().verify(existingUser.password, password);

  if (!validPassword) {
    return {
      error: "ایمیل یا رمز عبور اشتباه است."
    };
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  return redirect("/");
}

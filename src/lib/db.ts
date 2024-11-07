import { db, passwordResetTokenTable, userTable } from "@/db/schema";
import { eq } from "drizzle-orm";

//
// User
//
export function getUserWithGithubId(githubId: string) {
  return db.select().from(userTable).where(eq(userTable.githubId, githubId));
}

export function getUserWithId(id: string) {
  return db.select().from(userTable).where(eq(userTable.id, id));
}

export function getUserWithEmail(email: string) {
  return db.select().from(userTable).where(eq(userTable.email, email));
}

export function getUserWithUsername(username: string) {
  return db.select().from(userTable).where(eq(userTable.username, username));
}

//
// Password
//
export function getPasswordToken(tokenHash: string) {
  return db.select().from(passwordResetTokenTable).where(eq(passwordResetTokenTable.tokenHash, tokenHash));
}

export function deletePasswordToken(tokenHash: string) {
  return db.delete(passwordResetTokenTable).where(eq(passwordResetTokenTable.tokenHash, tokenHash));
}
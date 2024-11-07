import 'dotenv/config'
import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';
import { integer } from "drizzle-orm/pg-core";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
const { pgTable, text, timestamp } = require("drizzle-orm/pg-core");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

export const db = drizzle(pool)

export const userTable = pgTable("user", {
  id: text("id").primaryKey(),
  githubId: integer('github_id'),
  nickname: text('nickname'),
  username: text('username').unique(),
  password: text('password'),
  fullName: text('full_name'),
  phone: text('phone').unique(),
  email: text('email').notNull().unique(),
  avatarUrl: text('avatar_url'),
});

export const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date"
  }).notNull()
});

export const passwordResetTokenTable = pgTable("password_reset_token", {
  tokenHash: text("token_hash").unique(),
  userEmail: text("user_email"),
  username: text("username"),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date"
  })
});


export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);

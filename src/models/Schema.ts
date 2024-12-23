import { boolean, mysqlTable, serial, text, timestamp, varchar } from 'drizzle-orm/mysql-core';

// This file defines the structure of your database tables using the Drizzle ORM.

// To modify the database schema:
// 1. Update this file with your desired changes.
// 2. Generate a new migration by running: `npm run db:generate`.

// The generated migration file will reflect your schema changes.
// Apply migrations to ensure the database aligns with this schema.

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 50 }).notNull(),
  email: varchar('email', { length: 100 }).notNull().unique(),
  phoneNumber: varchar('phone_number', { length: 15 }),
  passwordHash: text('password_hash'),
  googleLogin: boolean('google_login').default(false),
  microsoftLogin: boolean('microsoft_login').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

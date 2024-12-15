import {
  boolean,
  mysqlTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';

// This file defines the structure of your database tables using the Drizzle ORM.

// To modify the database schema:
// 1. Update this file with your desired changes.
// 2. Generate a new migration by running: `npm run db:generate`.

// The generated migration file will reflect your schema changes.
// Apply migrations to ensure the database aligns with this schema.

export const usersSchema = mysqlTable('users', {
  id: serial('id').primaryKey(), // Auto-increment primary key
  username: varchar('username', { length: 50 }).notNull(), // Username (required)
  email: varchar('email', { length: 100 }).notNull().unique(), // Email (unique, required)
  phoneNumber: varchar('phone_number', { length: 15 }), // Phone number (optional)
  passwordHash: text('password_hash'), // Password hash (optional)
  googleLogin: boolean('google_login').default(false), // Indicates Google login
  microsoftLogin: boolean('microsoft_login').default(false), // Indicates Microsoft login
  createdAt: timestamp('created_at').defaultNow().notNull(), // Creation timestamp
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(), // Update timestamp
});

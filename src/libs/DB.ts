import type { MySql2Database } from 'drizzle-orm/mysql2';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

class Database {
  private static instance: MySql2Database | null = null;

  static async getInstance() {
    if (!this.instance) {
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });

      this.instance = drizzle(connection);
    }
    return this.instance;
  }
}

export const db = Database;

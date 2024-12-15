// Import required modules

import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

// Load environment variables from .env file
dotenv.config();

async function testConnection() {
  try {
    // Check if DATABASE_URL is defined
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not defined in the environment variables.');
    }

    // Establish a connection to the database
    const connection = await mysql.createConnection(process.env.DATABASE_URL);

    // Close the connection
    await connection.end();
  } catch (error) {
    console.error('Database connection failed:', error.message);
  }
}

// Run the connection test
testConnection();

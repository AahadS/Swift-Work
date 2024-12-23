import { getAuth } from '@clerk/nextjs/server';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req); // Extract userId from Clerk

  if (!userId) {
    return res.status(401).json({ error: 'Not authenticated' }); // Handle unauthenticated users
  }

  return res.status(200).json({ userId }); // Return userId if authenticated
}

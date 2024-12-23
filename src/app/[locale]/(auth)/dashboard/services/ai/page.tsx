import { redirect } from 'next/navigation';

export default async function AIPage() {
  redirect('/dashboard/services/ai/overview');
}

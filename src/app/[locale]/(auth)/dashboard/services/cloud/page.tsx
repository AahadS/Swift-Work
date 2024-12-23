import { redirect } from 'next/navigation';

export default async function CloudPage() {
  redirect('/dashboard/services/cloud/overview');
}

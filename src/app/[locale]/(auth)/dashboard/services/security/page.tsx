import { redirect } from 'next/navigation';

export default async function SecurityPage() {
  redirect('/dashboard/services/security/overview');
}

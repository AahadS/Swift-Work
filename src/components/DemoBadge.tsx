import Link from 'next/link';

export const DemoBadge = () => (
  <div className="fixed bottom-0 right-20 z-10">
    <Link href="/sign-up">
      <div className="rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground transition hover:bg-primary/90">
        Sign Up!
      </div>
    </Link>
  </div>
);

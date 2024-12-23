'use client';

import Link from 'next/link';

type ContactAgencyButtonProps = {
  href: string;
};

export default function ContactAgencyButton({ href }: ContactAgencyButtonProps) {
  return (
    <Link
      href={href}
      className="hover:bg-primary-dark rounded-lg bg-[#0F172A] px-6 py-2 text-white"
    >
      Contact Agency
    </Link>
  );
}

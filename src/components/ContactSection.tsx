'use client';

import ContactAgencyButton from './ContactAgencyButton';

type ContactSectionProps = {
  href: string;
};

export default function ContactSection({ href }: ContactSectionProps) {
  return (
    <div>
      <ContactAgencyButton href={href} />
    </div>
  );
}

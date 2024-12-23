import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import ContactSection from '@/components/ContactSection';

const companies = [
  {
    id: 'hirevity-security',
    name: 'Hirevity Security',
    rating: 5.0,
    reviews: 378,
    location: 'Global',
    completedProjects: 534,
    description: 'Leading cybersecurity firm providing enterprise-grade security solutions and consulting. Our team of certified security experts specializes in comprehensive security assessments, penetration testing, and implementing robust security architectures.',
    expertise: [
      'Security Assessments',
      'Penetration Testing',
      'Security Architecture',
      'Incident Response',
      'Compliance & Governance',
      'Security Training',
    ],
    image: '/images/hirevity-security.png',
  },
  {
    id: 'secureguard-solutions',
    name: 'SecureGuard Solutions',
    rating: 4.9,
    reviews: 312,
    location: 'Global',
    completedProjects: 489,
    description: 'Premier cybersecurity provider specializing in advanced threat protection and security automation. We deliver innovative security solutions that protect organizations from evolving cyber threats.',
    expertise: [
      'Threat Detection',
      'Security Automation',
      'Cloud Security',
      'Network Security',
      'Identity Management',
      'Security Operations',
    ],
    image: '/images/secureguard.png',
  },
  {
    id: 'cyberdefense-pro',
    name: 'CyberDefense Pro',
    rating: 4.8,
    reviews: 287,
    location: 'Global',
    completedProjects: 445,
    description: 'Expert cybersecurity firm focused on proactive defense and security intelligence. Our team specializes in advanced threat detection and enterprise security architecture.',
    expertise: [
      'Threat Intelligence',
      'Security Architecture',
      'Vulnerability Management',
      'Compliance Management',
      'Security Analytics',
      'Incident Response',
    ],
    image: '/images/cyberdefense.png',
  },
];

export default async function SecurityOverviewPage() {
  const t = await getTranslations('Services.Security');

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-3 text-2xl font-bold">{t('title')}</h1>
      <p className="mb-8 max-w-3xl text-gray-600">{t('description')}</p>

      <div className="space-y-6">
        {companies.map(company => (
          <Link
            key={company.id}
            href={`/dashboard/services/security/${company.id}`}
            className="block transition-shadow hover:shadow-lg"
          >
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-start gap-6">
                <div className="relative size-24 shrink-0">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                <div className="grow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">{company.name}</h2>
                      <div className="mt-1 flex items-center gap-2">
                        <div className="flex text-yellow-400">
                          {'★'.repeat(Math.floor(company.rating))}
                        </div>
                        <span className="text-gray-600">{company.rating}</span>
                        <span className="text-gray-400">
                          (
                          {company.reviews}
                          )
                        </span>
                      </div>
                    </div>
                    <ContactSection href={`/dashboard/services/security/${company.id}`} />
                  </div>

                  <p className="mt-4 text-gray-700">{company.description}</p>

                  <div className="mt-4">
                    <h3 className="mb-2 font-semibold">Core Expertise:</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {company.expertise?.map((skill: string) => (
                        <div key={skill} className="flex items-center">
                          <span className="mr-2 text-primary">✓</span>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-6 border-t pt-4 text-sm text-gray-600">
                    <div>
                      📍
                      {company.location}
                    </div>
                    <div>
                      🏆
                      {company.completedProjects}
                      {' '}
                      projects completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

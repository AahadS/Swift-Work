import Image from 'next/image';
import { notFound } from 'next/navigation';

import ContactSection from '@/components/ContactSection';

const companies = {
  'hirevity-security': {
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
    services: [
      {
        title: 'Security Assessment',
        price: 7500,
        description: 'Comprehensive security evaluation',
        features: [
          'Vulnerability Assessment',
          'Risk Analysis',
          'Security Gap Analysis',
          'Compliance Review',
          '3-month Support',
        ],
      },
      {
        title: 'Advanced Security',
        price: 15000,
        description: 'Enhanced security implementation',
        features: [
          'Everything in Assessment',
          'Penetration Testing',
          'Security Hardening',
          'Incident Response Plan',
          '6-month Support',
        ],
      },
      {
        title: 'Enterprise Security',
        price: 28000,
        description: 'Full-scale enterprise security',
        features: [
          'Everything in Advanced',
          '24/7 Monitoring',
          'Advanced Threat Protection',
          'Security Architecture',
          '12-month Support',
        ],
      },
      {
        title: 'Custom Security',
        price: null,
        description: 'Tailored security solutions',
        features: [
          'Custom Implementation',
          'Specialized Solutions',
          'Dedicated Team',
          'Custom SLA',
          'Flexible Terms',
        ],
      },
    ],
    image: '/images/hirevity-security.png',
  },
  'secureguard-solutions': {
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
    services: [
      {
        title: 'Security Assessment',
        price: 7500,
        description: 'Comprehensive security evaluation',
        features: [
          'Vulnerability Assessment',
          'Risk Analysis',
          'Security Gap Analysis',
          'Compliance Review',
          '3-month Support',
        ],
      },
      {
        title: 'Advanced Security',
        price: 15000,
        description: 'Enhanced security implementation',
        features: [
          'Everything in Assessment',
          'Penetration Testing',
          'Security Hardening',
          'Incident Response Plan',
          '6-month Support',
        ],
      },
      {
        title: 'Enterprise Security',
        price: 28000,
        description: 'Full-scale enterprise security',
        features: [
          'Everything in Advanced',
          '24/7 Monitoring',
          'Advanced Threat Protection',
          'Security Architecture',
          '12-month Support',
        ],
      },
      {
        title: 'Custom Security',
        price: null,
        description: 'Tailored security solutions',
        features: [
          'Custom Implementation',
          'Specialized Solutions',
          'Dedicated Team',
          'Custom SLA',
          'Flexible Terms',
        ],
      },
    ],
    image: '/images/secureguard.png',
  },
  'cyberdefense-pro': {
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
    services: [
      {
        title: 'Security Assessment',
        price: 7500,
        description: 'Comprehensive security evaluation',
        features: [
          'Vulnerability Assessment',
          'Risk Analysis',
          'Security Gap Analysis',
          'Compliance Review',
          '3-month Support',
        ],
      },
      {
        title: 'Advanced Security',
        price: 15000,
        description: 'Enhanced security implementation',
        features: [
          'Everything in Assessment',
          'Penetration Testing',
          'Security Hardening',
          'Incident Response Plan',
          '6-month Support',
        ],
      },
      {
        title: 'Enterprise Security',
        price: 28000,
        description: 'Full-scale enterprise security',
        features: [
          'Everything in Advanced',
          '24/7 Monitoring',
          'Advanced Threat Protection',
          'Security Architecture',
          '12-month Support',
        ],
      },
      {
        title: 'Custom Security',
        price: null,
        description: 'Tailored security solutions',
        features: [
          'Custom Implementation',
          'Specialized Solutions',
          'Dedicated Team',
          'Custom SLA',
          'Flexible Terms',
        ],
      },
    ],
    image: '/images/cyberdefense.png',
  },
};

export default async function CompanyDetailPage({ params }: { params: { companyId: string } }) {
  const company = companies[params.companyId as keyof typeof companies];

  if (!company) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
        <div className="flex items-start gap-8">
          <div className="relative size-32 shrink-0">
            <Image
              src={company.image}
              alt={company.name}
              fill
              className="rounded-lg object-cover"
            />
          </div>

          <div>
            <h1 className="mb-2 text-3xl font-bold">{company.name}</h1>
            <div className="mb-4 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {'★'.repeat(Math.floor(company.rating))}
                </div>
                <span className="font-semibold">{company.rating}</span>
                <span className="text-gray-500">
                  (
                  {company.reviews}
                  {' '}
                  reviews)
                </span>
              </div>
              <div className="text-gray-600">
                📍
                {company.location}
              </div>
              <div className="text-gray-600">
                🏆
                {company.completedProjects}
                {' '}
                projects
              </div>
            </div>
            <p className="text-gray-700">{company.description}</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Core Expertise</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {company.expertise.map(skill => (
            <div key={skill} className="flex items-center rounded-lg bg-white p-4 shadow">
              <span className="mr-2 text-primary">✓</span>
              {skill}
            </div>
          ))}
        </div>
      </div>

      <h2 className="mb-6 text-2xl font-bold">Service Packages</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {company.services.map(service => (
          <div key={service.title} className="flex flex-col rounded-lg bg-white p-6 shadow-lg">
            <div className="grow">
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              {service.price
                ? (
                    <p className="mb-4 text-3xl font-bold">
                      $
                      {service.price.toLocaleString()}
                    </p>
                  )
                : (
                    <p className="mb-4 text-2xl font-bold">Custom Quote</p>
                  )}
              <p className="mb-4 text-gray-600">{service.description}</p>
              <ul className="mb-6 space-y-2">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <ContactSection href={`/dashboard/services/security/${params.companyId}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

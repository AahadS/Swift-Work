import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import ContactAgencyButton from '@/components/ContactAgencyButton';

export default async function CloudOverviewPage() {
  const t = await getTranslations('Services.Cloud');

  const companies = [
    {
      id: 'hirevity-cloud',
      name: 'Hirevity Cloud',
      rating: 5,
      reviews: 345,
      location: 'Global',
      completedProjects: 512,
      description: 'Premier cloud architecture firm with extensive experience in enterprise-scale cloud solutions. Our team of certified cloud architects specializes in designing and implementing scalable, secure cloud infrastructures across AWS, Azure, and GCP platforms. We deliver comprehensive cloud solutions that drive digital transformation and business growth.',
      expertise: [
        'AWS/Azure/GCP Solutions',
        'Cloud Migration',
        'Infrastructure as Code',
        'Cloud Security',
        'Serverless Architecture',
        'Multi-Cloud Strategy',
      ],
      image: '/images/hirevity-cloud.png',
    },
    {
      id: 'cloudscape-systems',
      name: 'Cloudscape Systems',
      rating: 4.9,
      reviews: 289,
      location: 'Global',
      completedProjects: 467,
      description: 'Leading cloud infrastructure provider focusing on modern cloud-native solutions. Our expert team delivers comprehensive cloud services from migration to optimization, helping organizations leverage cloud technologies for maximum business value. We specialize in building scalable, resilient cloud architectures that ensure operational excellence.',
      expertise: [
        'Cloud Native Development',
        'Kubernetes Solutions',
        'Cloud Cost Optimization',
        'DevOps Integration',
        'Container Orchestration',
        'Cloud Monitoring',
      ],
      image: '/images/cloudscape-systems.png',
    },
    {
      id: 'skybridge-tech',
      name: 'Skybridge Tech',
      rating: 4.8,
      reviews: 312,
      location: 'Global',
      completedProjects: 423,
      description: 'Specialized in cloud architecture design, hybrid solutions, and security governance. Our team excels in creating robust cloud environments that seamlessly integrate with existing infrastructure. We focus on delivering secure, scalable cloud solutions that ensure operational excellence and business continuity through innovative approaches.',
      expertise: [
        'Cloud Architecture',
        'Hybrid Cloud Solutions',
        'Cloud Optimization',
        'Managed Services',
        'Cloud Security',
        'DevOps Automation',
      ],
      image: '/images/skybridge-tech.png',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-2 text-3xl font-bold">{t('title')}</h1>
      <p className="mb-8 text-gray-600">{t('description')}</p>

      <div className="space-y-6">
        {companies.map(company => (
          <div key={company.id} className="rounded-lg bg-white p-6 shadow">
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
                  <ContactAgencyButton
                    href={`/dashboard/services/cloud/${company.id}`}
                  />
                </div>

                <p className="mt-4 text-gray-700">{company.description}</p>

                <div className="mt-4">
                  <h3 className="mb-2 font-semibold">Core Expertise:</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {company.expertise.map(skill => (
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
        ))}
      </div>
    </div>
  );
}

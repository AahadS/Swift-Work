import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

type Agency = {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  completedProjects: number;
  description: string;
  expertise: string[];
  image: string;
};

export default async function ITFreelancingPage() {
  const t = await getTranslations('Services.ITFreelancing');

  const agencies: Agency[] = [
    {
      id: 'hirevity-enterprise',
      name: 'Hirevity Enterprise Solutions',
      rating: 5.0,
      reviews: 368,
      location: 'Global',
      completedProjects: 621,
      description: 'Enterprise-level IT solutions with a focus on scalable software development and digital transformation. Our team of 50+ certified developers delivers end-to-end solutions for businesses worldwide.',
      expertise: [
        'Enterprise Software Development',
        'Legacy System Modernization',
        'Cloud Infrastructure',
        'DevOps Implementation',
        '24/7 Technical Support',
        'Digital Transformation',
      ],
      image: '/images/hirevity-enterprise.png',
    },
    {
      id: 'techforge-global',
      name: 'TechForge Global',
      rating: 4.8,
      reviews: 285,
      location: 'Global',
      completedProjects: 437,
      description: 'Industry-leading software development and IT consulting firm specializing in enterprise solutions. Their team of 50+ certified developers delivers end-to-end solutions for businesses worldwide.',
      expertise: [
        'Custom Software Development',
        'Cloud Solutions',
        'Enterprise Integration',
        'Digital Transformation',
        'IT Strategy Consulting',
        'Mobile App Development',
      ],
      image: '/images/techforge.png',
    },
    {
      id: 'quantum-systems',
      name: 'Quantum Systems International',
      rating: 4.9,
      reviews: 412,
      location: 'Global',
      completedProjects: 589,
      description: 'Innovative IT solutions provider with a focus on cutting-edge technologies and enterprise systems. Their team of 50+ certified developers delivers end-to-end solutions for businesses worldwide.',
      expertise: [
        'Enterprise Architecture',
        'System Integration',
        'Cloud Migration',
        'DevOps Solutions',
        '24/7 Support',
        'Infrastructure Design',
      ],
      image: '/images/quantum.png',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-2 text-3xl font-bold">{t('title')}</h1>
      <p className="mb-8 max-w-3xl text-gray-600">{t('description')}</p>

      <div className="grid grid-cols-1 gap-8">
        {agencies.map(agency => (
          <Link
            href={`/dashboard/services/it-freelancing/${agency.id}`}
            key={agency.name}
            className="block transition-shadow hover:shadow-xl"
          >
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="relative size-24 shrink-0">
                  <Image
                    src={agency.image}
                    alt={agency.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                <div className="grow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">{agency.name}</h2>
                      <div className="mt-1 flex items-center gap-2">
                        <div className="flex text-yellow-400">
                          {'★'.repeat(Math.floor(agency.rating))}
                        </div>
                        <span className="text-gray-600">{agency.rating}</span>
                        <span className="text-gray-400">
                          (
                          {agency.reviews}
                          )
                        </span>
                      </div>
                    </div>
                    <button
                      className="hover:bg-primary-dark rounded-lg bg-primary px-6 py-2 text-white"
                      type="button"
                    >
                      Contact Agency
                    </button>
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-700">{agency.description}</p>
                  </div>

                  <div className="mt-4">
                    <h3 className="mb-2 font-semibold">Core Expertise:</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {agency.expertise.map(skill => (
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
                      {agency.location}
                    </div>
                    <div>
                      🏆
                      {agency.completedProjects}
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

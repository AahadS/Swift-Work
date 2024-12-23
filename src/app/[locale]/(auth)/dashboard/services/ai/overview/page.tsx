import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function AIOverviewPage() {
  const t = await getTranslations('Services.AI');

  const companies = [
    {
      id: 'neural-dynamics',
      name: 'Neural Dynamics Labs',
      rating: 4.9,
      reviews: 275,
      location: 'Global',
      completedProjects: 392,
      description: 'Innovative AI research and development firm with cutting-edge expertise in neural networks and deep learning. Our team of PhDs and AI researchers specializes in developing advanced machine learning solutions and custom neural architectures. With a focus on pushing the boundaries of AI technology, we\'ve helped organizations implement state-of-the-art AI solutions across various domains.',
      expertise: [
        'Neural Network Design',
        'AI Model Training',
        'Predictive Analytics',
        'Deep Learning Research',
        'Time Series Analysis',
        'AI Model Deployment',
      ],
      image: '/images/neural-dynamics.png',
    },
    {
      id: 'cognitive-systems',
      name: 'Cognitive Systems Global',
      rating: 4.8,
      reviews: 298,
      location: 'Global',
      completedProjects: 445,
      description: 'Enterprise AI solutions provider specializing in cognitive computing and intelligent automation. Our team combines deep technical expertise with business acumen to deliver AI solutions that drive operational efficiency and innovation. We focus on creating practical, scalable AI implementations that deliver measurable business value.',
      expertise: [
        'Cognitive Computing',
        'AI Automation',
        'Intelligent Analytics',
        'Process Automation',
        'Knowledge Graphs',
        'AI Strategy',
      ],
      image: '/images/cognitive-systems.png',
    },
    {
      id: 'hirevity-ai',
      name: 'Hirevity AI Solutions',
      rating: 5.0,
      reviews: 342,
      location: 'Global',
      completedProjects: 487,
      description: 'Leading AI solutions provider with over a decade of experience in delivering cutting-edge artificial intelligence solutions. Our team of expert data scientists and ML engineers specializes in developing custom AI models, implementing machine learning solutions, and integrating AI capabilities into existing systems.',
      expertise: [
        'Machine Learning Development',
        'Deep Learning Solutions',
        'Natural Language Processing',
        'Computer Vision',
        'AI Model Optimization',
        'Neural Networks',
      ],
      image: '/images/hirevity-ai.png',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-2 text-3xl font-bold">{t('title')}</h1>
      <p className="mb-8 text-gray-600">{t('description')}</p>

      <div className="space-y-6">
        {companies.map(company => (
          <Link
            key={company.id}
            href={`/dashboard/services/ai/${company.id}`}
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
                    <button
                      className="hover:bg-primary-dark rounded-lg bg-[#0F172A] px-6 py-2 text-white"
                      type="button"
                    >
                      Contact Agency
                    </button>
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
          </Link>
        ))}
      </div>
    </div>
  );
}

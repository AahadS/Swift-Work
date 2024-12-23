import Image from 'next/image';

const companies = {
  'hirevity-ai': {
    name: 'Hirevity AI Solutions',
    rating: 5.0,
    reviews: 342,
    location: 'Global',
    completedProjects: 487,
    fullDescription: 'Leading AI solutions provider with over a decade of experience in delivering cutting-edge artificial intelligence solutions. Our team of expert data scientists and ML engineers specializes in developing custom AI models, implementing machine learning solutions, and integrating AI capabilities into existing systems. We\'ve successfully delivered transformative AI projects for Fortune 500 companies across multiple industries.',
    expertise: [
      'Machine Learning Development',
      'Deep Learning Solutions',
      'Natural Language Processing',
      'Computer Vision',
      'AI Model Optimization',
      'Neural Networks',
      'Predictive Analytics',
      'AI Infrastructure',
      'MLOps',
      'AI Consulting',
    ],
    services: [
      {
        title: 'AI Starter Package',
        price: 6500,
        description: 'Perfect for businesses starting their AI journey',
        features: [
          'AI feasibility assessment',
          'Basic ML model development',
          'Data preparation & cleaning',
          'Model training & validation',
          '3-month support',
        ],
      },
      {
        title: 'AI Professional Package',
        price: 12500,
        description: 'Comprehensive AI solutions for growing needs',
        features: [
          'Everything in Starter',
          'Advanced ML model development',
          'Custom AI pipeline setup',
          'Model optimization',
          '6-month support',
        ],
      },
      {
        title: 'AI Enterprise Package',
        price: 25000,
        description: 'Enterprise-grade AI solutions',
        features: [
          'Everything in Professional',
          'Enterprise AI architecture',
          'MLOps implementation',
          '24/7 model monitoring',
          '12-month support',
        ],
      },
      {
        title: 'Custom AI Solution',
        price: null,
        description: 'Tailored AI solutions for unique requirements',
        features: [
          'Custom AI architecture',
          'Dedicated AI team',
          'Full MLOps setup',
          'Custom model development',
          'Flexible support terms',
        ],
      },
    ],
    image: '/images/hirevity-ai.png',
  },
  'neural-dynamics': {
    name: 'Neural Dynamics Labs',
    rating: 4.9,
    reviews: 275,
    location: 'Global',
    completedProjects: 392,
    fullDescription: 'Innovative AI research and development firm with cutting-edge expertise in neural networks and deep learning. Our team of PhDs and AI researchers specializes in developing advanced machine learning solutions and custom neural architectures. With a focus on pushing the boundaries of AI technology, we\'ve helped organizations implement state-of-the-art AI solutions across various domains.',
    expertise: [
      'Neural Network Design',
      'AI Model Training',
      'Predictive Analytics',
      'AI Infrastructure',
      'MLOps Implementation',
      'Deep Learning Research',
      'Time Series Analysis',
      'Reinforcement Learning',
      'Transfer Learning',
      'AI Model Deployment',
    ],
    services: [
      {
        title: 'Research Package',
        price: 8500,
        description: 'Initial AI research and prototype development',
        features: [
          'AI feasibility research',
          'Neural architecture design',
          'Prototype development',
          'Initial model training',
          '4-month research support',
        ],
      },
      {
        title: 'Development Package',
        price: 15000,
        description: 'Full neural network development and deployment',
        features: [
          'Everything in Research',
          'Custom neural architecture',
          'Advanced model training',
          'Performance optimization',
          '8-month development support',
        ],
      },
      {
        title: 'Enterprise AI Package',
        price: 28000,
        description: 'Complete enterprise AI implementation',
        features: [
          'Everything in Development',
          'Enterprise-scale deployment',
          'Distributed training setup',
          'Production optimization',
          '12-month enterprise support',
        ],
      },
      {
        title: 'Research Partnership',
        price: null,
        description: 'Custom AI research and development',
        features: [
          'Dedicated research team',
          'Custom research goals',
          'IP rights management',
          'Publication support',
          'Flexible engagement terms',
        ],
      },
    ],
    image: '/images/neural-dynamics.png',
  },
  'cognitive-systems': {
    name: 'Cognitive Systems Global',
    rating: 4.8,
    reviews: 298,
    location: 'Global',
    completedProjects: 445,
    fullDescription: 'Enterprise AI solutions provider specializing in cognitive computing and intelligent automation. Our team combines deep technical expertise with business acumen to deliver AI solutions that drive operational efficiency and innovation. We focus on creating practical, scalable AI implementations that deliver measurable business value.',
    expertise: [
      'Cognitive Computing',
      'AI Automation',
      'Intelligent Analytics',
      'AI Integration',
      'Machine Learning Ops',
      'Process Automation',
      'Knowledge Graphs',
      'Natural Language Understanding',
      'Computer Vision',
      'AI Strategy Consulting',
    ],
    services: [
      {
        title: 'Cognitive Starter',
        price: 7500,
        description: 'Entry-level cognitive computing solutions',
        features: [
          'Business process analysis',
          'Basic cognitive system setup',
          'Data integration',
          'Initial automation',
          '3-month support',
        ],
      },
      {
        title: 'Enterprise Cognitive',
        price: 18000,
        description: 'Full-scale cognitive computing implementation',
        features: [
          'Everything in Starter',
          'Advanced process automation',
          'Custom cognitive models',
          'Integration with existing systems',
          '6-month support',
        ],
      },
      {
        title: 'Intelligent Enterprise',
        price: 32000,
        description: 'Complete intelligent enterprise solution',
        features: [
          'Everything in Enterprise',
          'Full cognitive architecture',
          'Enterprise-wide automation',
          'Advanced analytics',
          '12-month support',
        ],
      },
      {
        title: 'Custom Cognitive',
        price: null,
        description: 'Tailored cognitive computing solutions',
        features: [
          'Custom implementation',
          'Specialized automation',
          'Full system integration',
          'Dedicated support team',
          'Flexible terms',
        ],
      },
    ],
    image: '/images/cognitive-systems.png',
  },
};

export default async function CompanyDetailPage({ params }: { params: { companyId: string } }) {
  const company = companies[params.companyId as keyof typeof companies];
  if (!company) {
    return <div>Company not found</div>;
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
            <p className="text-gray-700">{company.fullDescription}</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Core Expertise</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {company.expertise.map(skill => (
            <div key={skill} className="flex min-h-[80px] items-center rounded-lg bg-white p-4 shadow">
              <div>
                <span className="mr-2 text-primary">✓</span>
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="mb-6 text-2xl font-bold">Service Packages</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {company.services.map(service => (
          <div key={service.title} className="flex h-full flex-col rounded-lg bg-white p-6 shadow-lg">
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
              <p className="mb-4 min-h-[48px] text-gray-600">{service.description}</p>
              <ul className="mb-6 min-h-[200px] space-y-2">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="hover:bg-primary-dark mt-auto w-full rounded-lg bg-primary py-3 text-white transition-colors"
            >
              {service.price ? 'Get Started' : 'Contact for Quote'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from 'next/image';

const companies = {
  'hirevity-cloud': {
    name: 'Hirevity Cloud',
    rating: 5.0,
    reviews: 345,
    location: 'Global',
    completedProjects: 512,
    fullDescription: 'Premier cloud architecture firm with extensive experience in enterprise-scale cloud solutions. Our team of certified cloud architects specializes in designing and implementing scalable, secure cloud infrastructures across AWS, Azure, and GCP platforms. We deliver comprehensive cloud solutions that drive digital transformation and business growth.',
    expertise: [
      'AWS/Azure/GCP Solutions',
      'Cloud Migration',
      'Infrastructure as Code',
      'Cloud Security',
      'Serverless Architecture',
      'Multi-Cloud Strategy',
      'Cloud Cost Optimization',
      'Cloud Governance',
      'Cloud Monitoring',
      'Cloud Automation',
    ],
    services: [
      {
        title: 'Starter',
        price: 5000,
        description: 'Essential cloud services for small businesses',
        features: [
          'AWS/Azure/GCP Solutions',
          'Cloud Migration',
          'Cloud Security',
        ],
      },
      {
        title: 'Professional',
        price: 10000,
        description: 'Advanced cloud solutions for growing businesses',
        features: [
          'Infrastructure as Code',
          'Serverless Architecture',
          '24/7 Support',
        ],
      },
      {
        title: 'Enterprise',
        price: 25000,
        description: 'Comprehensive cloud solutions for large organizations',
        features: [
          'Multi-Cloud Strategy',
          'Custom Architecture Design',
          'Dedicated Support Team',
        ],
      },
      {
        title: 'Custom',
        price: null,
        description: 'Tailored solutions for unique requirements',
        features: [
          'Custom Implementation',
          'Specialized Solutions',
          'Flexible Pricing',
        ],
      },
    ],
    image: '/images/hirevity-cloud.png',
  },
  'cloudscape-systems': {
    name: 'Cloudscape Systems',
    rating: 4.9,
    reviews: 289,
    location: 'Global',
    completedProjects: 467,
    fullDescription: 'Leading cloud infrastructure provider focusing on modern cloud-native solutions. Our expert team delivers comprehensive cloud services from migration to optimization, helping organizations leverage cloud technologies for maximum business value. We specialize in building scalable, resilient cloud architectures that ensure operational excellence.',
    expertise: [
      'Cloud Native Development',
      'Kubernetes Solutions',
      'Cloud Cost Optimization',
      'DevOps Integration',
      'Container Orchestration',
      'Cloud Monitoring',
      'Cloud Security',
      'Hybrid Cloud Solutions',
      'Serverless Computing Solutions',
      'Cloud Governance',
    ],
    services: [
      {
        title: 'Starter',
        price: 7500,
        description: 'Basic cloud-native infrastructure',
        features: [
          'Container setup',
          'Basic Kubernetes',
          'CI/CD pipeline',
          'Monitoring setup',
          '3-month support',
        ],
      },
      {
        title: 'Professional',
        price: 14500,
        description: 'Comprehensive cloud-native solution',
        features: [
          'Everything in Starter',
          'Service mesh',
          'Advanced orchestration',
          'Auto-scaling',
          '6-month support',
        ],
      },
      {
        title: 'Enterprise',
        price: 25000,
        description: 'Enterprise cloud-native platform',
        features: [
          'Everything in Advanced',
          'Multi-cluster setup',
          'Advanced security',
          'Full automation',
          '12-month support',
        ],
      },
      {
        title: 'Custom',
        price: null,
        description: 'Custom cloud-native solution',
        features: [
          'Custom architecture',
          'Specialized setup',
          'Full automation',
          'Dedicated support',
          'Custom terms',
        ],
      },
    ],
    image: '/images/cloudscape-systems.png',
  },
  'skybridge-tech': {
    name: 'Skybridge Tech',
    rating: 4.8,
    reviews: 312,
    location: 'Global',
    completedProjects: 423,
    fullDescription: 'Specialized in cloud architecture design, hybrid solutions, and security governance. Our team excels in creating robust cloud environments that seamlessly integrate with existing infrastructure. We focus on delivering secure, scalable cloud solutions that ensure operational excellence and business continuity through innovative approaches.',
    expertise: [
      'Cloud Architecture Design',
      'Hybrid Cloud Solutions',
      'Cloud Security',
      'Performance Optimization',
      'Disaster Recovery',
      'Cloud Governance',
      'Multi-Cloud Strategy and Integration',
      'Serverless Computing Solutions',
      'Cloud Cost Optimization',
      'Cloud Migration and Modernization',
    ],
    services: [
      {
        title: 'Starter',
        price: 6800,
        description: 'Basic cloud infrastructure setup',
        features: [
          'Architecture design',
          'Basic setup',
          'Security config',
          'Monitoring',
          '3-month support',
        ],
      },
      {
        title: 'Professional',
        price: 13500,
        description: 'Advanced cloud infrastructure',
        features: [
          'Everything in Essentials',
          'Load balancing',
          'Auto-scaling',
          'Advanced security',
          '6-month support',
        ],
      },
      {
        title: 'Enterprise',
        price: 24000,
        description: 'Enterprise cloud platform',
        features: [
          'Everything in Pro',
          'Multi-region setup',
          'Disaster recovery',
          '24/7 monitoring',
          '12-month support',
        ],
      },
      {
        title: 'Custom',
        price: null,
        description: 'Tailored cloud solution',
        features: [
          'Custom design',
          'Specialized setup',
          'Full integration',
          'Dedicated team',
          'Custom terms',
        ],
      },
    ],
    image: '/images/skybridge-tech.png',
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
              type="button"
            >
              {service.price ? 'Get Started' : 'Contact for Quote'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

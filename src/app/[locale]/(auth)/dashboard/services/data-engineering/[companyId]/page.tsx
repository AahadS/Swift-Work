import Image from 'next/image';

type Service = {
  title: string;
  price: number | null;
  description: string;
  features: string[];
};

type Company = {
  name: string;
  rating: number;
  reviews: number;
  location: string;
  completedProjects: number;
  fullDescription: string;
  expertise: string[];
  services: Service[];
  image: string;
};

const companies: Record<string, Company> = {
  'hirevity-data': {
    name: 'Hirevity Data Engineering',
    rating: 5.0,
    reviews: 356,
    location: 'Global',
    completedProjects: 534,
    fullDescription: 'Premier data engineering firm with extensive experience in building scalable data infrastructure. Our team of expert data engineers specializes in designing and implementing robust data pipelines, warehouses, and lakes that enable organizations to harness the full potential of their data assets.',
    expertise: [
      'ETL Pipeline Development',
      'Data Warehouse Design',
      'Big Data Solutions',
      'Data Lake Architecture',
      'Stream Processing',
      'Data Modeling',
      'Database Optimization',
      'Data Integration',
      'Data Quality Management',
      'Real-time Analytics',
    ],
    services: [
      {
        title: 'Data Foundation',
        price: 7500,
        description: 'Essential data infrastructure setup',
        features: [
          'Data architecture assessment',
          'Basic ETL pipeline setup',
          'Data warehouse design',
          'Performance optimization',
          '3-month support',
        ],
      },
      {
        title: 'Data Scale-up',
        price: 15000,
        description: 'Advanced data engineering solution',
        features: [
          'Everything in Foundation',
          'Advanced ETL workflows',
          'Data lake implementation',
          'Real-time processing',
          '6-month support',
        ],
      },
      {
        title: 'Enterprise Data',
        price: 28000,
        description: 'Enterprise-grade data infrastructure',
        features: [
          'Everything in Scale-up',
          'Distributed processing',
          'Multi-source integration',
          'Advanced monitoring',
          '12-month support',
        ],
      },
      {
        title: 'Custom Data Solution',
        price: null,
        description: 'Tailored data engineering services',
        features: [
          'Custom architecture design',
          'Specialized pipelines',
          'Full infrastructure setup',
          'Dedicated team',
          'Custom SLA',
        ],
      },
    ],
    image: '/images/hirevity-data.png',
  },
  'dataflow-systems': {
    name: 'DataFlow Systems',
    rating: 4.9,
    reviews: 298,
    location: 'Global',
    completedProjects: 445,
    fullDescription: 'Innovative data engineering company focused on building next-generation data infrastructure. We specialize in creating scalable, efficient data pipelines and processing systems that handle complex data requirements while maintaining high performance and reliability.',
    expertise: [
      'Streaming Analytics',
      'Data Pipeline Design',
      'Cloud Data Platform',
      'Data Migration',
      'Data Governance',
      'Schema Design',
      'Data Processing',
      'Data Security',
      'Performance Tuning',
      'Data Architecture',
    ],
    services: [
      {
        title: 'Pipeline Essentials',
        price: 6800,
        description: 'Basic data pipeline setup',
        features: [
          'Data flow assessment',
          'Pipeline architecture',
          'Basic integrations',
          'Monitoring setup',
          '3-month support',
        ],
      },
      {
        title: 'Advanced Pipeline',
        price: 13500,
        description: 'Comprehensive data solution',
        features: [
          'Everything in Essentials',
          'Stream processing',
          'Advanced integrations',
          'Performance optimization',
          '6-month support',
        ],
      },
      {
        title: 'Enterprise Pipeline',
        price: 25000,
        description: 'Enterprise data infrastructure',
        features: [
          'Everything in Advanced',
          'Distributed processing',
          'Full automation',
          'Custom integrations',
          '12-month support',
        ],
      },
      {
        title: 'Custom Pipeline',
        price: null,
        description: 'Custom data engineering solution',
        features: [
          'Tailored architecture',
          'Custom workflows',
          'Specialized processing',
          'Dedicated support',
          'Flexible terms',
        ],
      },
    ],
    image: '/images/dataflow-systems.png',
  },
  'data-forge': {
    name: 'Data Forge Solutions',
    rating: 4.8,
    reviews: 312,
    location: 'Global',
    completedProjects: 478,
    fullDescription: 'Enterprise data engineering firm specializing in building robust and scalable data infrastructure. Our expertise spans modern data stack implementation, real-time processing systems, and advanced data integration solutions for organizations of all sizes.',
    expertise: [
      'Data Infrastructure',
      'ETL/ELT Solutions',
      'Data Warehousing',
      'Data Lakes',
      'Real-time Processing',
      'Data Pipelines',
      'Data Modeling',
      'Data Integration',
      'Data Quality',
      'Data Ops',
    ],
    services: [
      {
        title: 'Data Core',
        price: 7200,
        description: 'Core data infrastructure setup',
        features: [
          'Infrastructure design',
          'Basic pipeline setup',
          'Data modeling',
          'Quality checks',
          '3-month support',
        ],
      },
      {
        title: 'Data Pro',
        price: 14500,
        description: 'Professional data engineering',
        features: [
          'Everything in Core',
          'Advanced pipelines',
          'Real-time processing',
          'Advanced modeling',
          '6-month support',
        ],
      },
      {
        title: 'Data Enterprise',
        price: 27000,
        description: 'Enterprise data solution',
        features: [
          'Everything in Pro',
          'Full infrastructure',
          'Custom integrations',
          'Advanced automation',
          '12-month support',
        ],
      },
      {
        title: 'Custom Data Engineering',
        price: null,
        description: 'Tailored data solutions',
        features: [
          'Custom architecture',
          'Specialized solutions',
          'Full customization',
          'Dedicated team',
          'Custom terms',
        ],
      },
    ],
    image: '/images/data-forge.png',
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

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
  'hirevity-bi': {
    name: 'Hirevity BI Solutions',
    rating: 5.0,
    reviews: 356,
    location: 'Global',
    completedProjects: 534,
    fullDescription: 'Leading business intelligence provider with extensive experience in delivering data-driven insights and analytics solutions. Our team of BI experts specializes in transforming complex data into actionable business intelligence, helping organizations make informed decisions through advanced analytics and visualization.',
    expertise: [
      'Data Visualization',
      'Business Analytics',
      'Performance Metrics',
      'Dashboard Development',
      'KPI Monitoring',
      'Data Modeling',
      'ETL Processes',
      'Report Automation',
      'Predictive Analytics',
      'Data Governance',
    ],
    services: [
      {
        title: 'BI Starter Package',
        price: 5500,
        description: 'Essential BI setup for small businesses',
        features: [
          'Basic dashboard setup',
          'Data source integration',
          'Key metrics tracking',
          'Basic reporting',
          '3-month support',
        ],
      },
      {
        title: 'BI Professional Package',
        price: 9500,
        description: 'Comprehensive BI solution for growing companies',
        features: [
          'Everything in Starter',
          'Advanced dashboards',
          'Custom metrics setup',
          'Automated reporting',
          '6-month support',
        ],
      },
      {
        title: 'BI Enterprise Package',
        price: 18000,
        description: 'Full-scale BI implementation for enterprises',
        features: [
          'Everything in Professional',
          'Enterprise data modeling',
          'Real-time analytics',
          'Advanced visualizations',
          '12-month support',
        ],
      },
      {
        title: 'Custom BI Solution',
        price: null,
        description: 'Tailored BI solutions for unique requirements',
        features: [
          'Custom analytics setup',
          'Dedicated BI team',
          'Full system integration',
          'Custom reporting',
          'Flexible support terms',
        ],
      },
    ],
    image: '/images/hirevity-bi.png',
  },
  'insight-analytics': {
    name: 'Insight Analytics Global',
    rating: 4.9,
    reviews: 298,
    location: 'Global',
    completedProjects: 445,
    fullDescription: 'Premier analytics firm specializing in transforming raw data into strategic business insights. Our innovative approach combines cutting-edge technology with deep industry expertise to deliver comprehensive business intelligence solutions that drive growth and efficiency.',
    expertise: [
      'Advanced Analytics',
      'Statistical Analysis',
      'Data Mining',
      'Machine Learning',
      'Real-time Analytics',
      'Big Data Processing',
      'Interactive Dashboards',
      'Custom Reporting',
      'Data Strategy',
      'Analytics Training',
    ],
    services: [
      {
        title: 'Analytics Essentials',
        price: 6500,
        description: 'Foundational analytics setup',
        features: [
          'Data assessment',
          'Basic analytics setup',
          'Standard reporting',
          'Performance tracking',
          '3-month guidance',
        ],
      },
      {
        title: 'Advanced Analytics',
        price: 11500,
        description: 'Comprehensive analytics solution',
        features: [
          'Everything in Essentials',
          'Advanced data modeling',
          'Predictive analytics',
          'Custom dashboards',
          '6-month support',
        ],
      },
      {
        title: 'Enterprise Analytics',
        price: 22000,
        description: 'Enterprise-grade analytics platform',
        features: [
          'Everything in Advanced',
          'AI-powered analytics',
          'Real-time processing',
          'Full integration',
          '12-month support',
        ],
      },
      {
        title: 'Custom Analytics',
        price: null,
        description: 'Tailored analytics solutions',
        features: [
          'Custom analytics design',
          'Specialized models',
          'Full customization',
          'Dedicated team',
          'Custom SLA',
        ],
      },
    ],
    image: '/images/insight-analytics.png',
  },
  'datavision-pro': {
    name: 'DataVision Pro',
    rating: 4.8,
    reviews: 312,
    location: 'Global',
    completedProjects: 478,
    fullDescription: 'Innovative data visualization and business intelligence firm focused on creating intuitive, actionable insights. We specialize in transforming complex data sets into clear, compelling visual stories that enable better decision-making at all organizational levels.',
    expertise: [
      'Visual Analytics',
      'Interactive Dashboards',
      'Data Storytelling',
      'Business Metrics',
      'Performance Analytics',
      'Custom Visualizations',
      'Mobile BI',
      'Embedded Analytics',
      'Self-service BI',
      'Data Discovery',
    ],
    services: [
      {
        title: 'Visualization Starter',
        price: 4800,
        description: 'Essential data visualization setup',
        features: [
          'Basic visualizations',
          'Standard dashboards',
          'Data integration',
          'Basic training',
          '3-month support',
        ],
      },
      {
        title: 'Pro Visualization',
        price: 8800,
        description: 'Advanced visualization solutions',
        features: [
          'Everything in Starter',
          'Interactive dashboards',
          'Custom visualizations',
          'Advanced training',
          '6-month support',
        ],
      },
      {
        title: 'Enterprise Vision',
        price: 16500,
        description: 'Enterprise visualization platform',
        features: [
          'Everything in Pro',
          'Real-time visualizations',
          'Advanced interactivity',
          'Full platform access',
          '12-month support',
        ],
      },
      {
        title: 'Custom Visualization',
        price: null,
        description: 'Custom visualization solutions',
        features: [
          'Bespoke visualizations',
          'Custom platform',
          'Full customization',
          'Dedicated support',
          'Custom terms',
        ],
      },
    ],
    image: '/images/datavision-pro.png',
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

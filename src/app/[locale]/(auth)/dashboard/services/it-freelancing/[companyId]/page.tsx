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
  'hirevity-enterprise': {
    name: 'Hirevity Enterprise Solutions',
    rating: 5.0,
    reviews: 368,
    location: 'Global',
    completedProjects: 621,
    fullDescription: 'Enterprise-level IT solutions provider with a proven track record spanning over a decade in delivering scalable, secure, and innovative solutions. Our team of 50+ certified developers and architects brings extensive experience in digital transformation, cloud migration, and enterprise software development. We specialize in helping large organizations modernize their legacy systems while ensuring business continuity. Our comprehensive approach combines technical expertise with strategic consulting to deliver solutions that drive real business value.',
    expertise: [
      'Enterprise Software Development',
      'Legacy System Modernization',
      'Cloud Infrastructure',
      'DevOps Implementation',
      '24/7 Technical Support',
      'Digital Transformation',
      'System Integration',
      'Agile Development',
      'Quality Assurance',
      'Security Implementation',
    ],
    services: [
      {
        title: 'Essential Package',
        price: 4500,
        description: 'Perfect for small to medium-sized projects',
        features: [
          'Project scoping and planning',
          'Basic system architecture',
          'Development team (2-3 developers)',
          'Project management',
          '3-month support',
        ],
      },
      {
        title: 'Professional Package',
        price: 8500,
        description: 'Ideal for medium to large enterprises',
        features: [
          'Everything in Essential',
          'Advanced architecture planning',
          'Larger team (4-6 developers)',
          'DevOps implementation',
          '6-month support',
        ],
      },
      {
        title: 'Enterprise Package',
        price: 13500,
        description: 'Comprehensive solution for large enterprises',
        features: [
          'Everything in Professional',
          'Enterprise architecture design',
          'Full development team',
          '24/7 priority support',
          '12-month support',
        ],
      },
      {
        title: 'Custom Solution',
        price: null,
        description: 'Tailored to your specific needs',
        features: [
          'Custom team composition',
          'Flexible scope',
          'Specialized expertise',
          'Custom support terms',
          'Dedicated account manager',
        ],
      },
    ],
    image: '/images/hirevity-enterprise.png',
  },
  'techforge-global': {
    name: 'TechForge Global',
    rating: 4.8,
    reviews: 285,
    location: 'Global',
    completedProjects: 437,
    fullDescription: 'Industry-leading software development and IT consulting firm specializing in enterprise solutions. Our innovative approach combines cutting-edge technology with proven methodologies to deliver scalable and robust solutions for businesses of all sizes. With over 8 years of experience in digital transformation, we\'ve helped hundreds of companies achieve their technological goals. Our team excels in creating custom software solutions that address complex business challenges while maintaining the highest standards of code quality and security.',
    expertise: [
      'Custom Software Development',
      'Cloud Solutions Architecture',
      'Enterprise Integration',
      'Digital Transformation',
      'IT Strategy Consulting',
      'Mobile App Development',
      'API Development',
      'Database Design',
      'UI/UX Design',
      'Performance Optimization',
    ],
    services: [
      {
        title: 'Starter Package',
        price: 3500,
        description: 'Ideal for startups and small businesses looking to establish their digital presence',
        features: [
          'Requirements analysis and planning',
          'Solution architecture design',
          'Development team (2 developers)',
          'Basic project management',
          '2-month technical support',
        ],
      },
      {
        title: 'Growth Package',
        price: 7500,
        description: 'Perfect for growing businesses needing comprehensive solutions',
        features: [
          'Everything in Starter Package',
          'Technical architecture design',
          'Development team (3-4 developers)',
          'Advanced project management',
          '4-month extended support',
        ],
      },
      {
        title: 'Scale Package',
        price: 12000,
        description: 'For enterprises seeking scalable and robust solutions',
        features: [
          'Everything in Growth Package',
          'Enterprise architecture design',
          'Full development team access',
          'DevOps setup and configuration',
          '8-month premium support',
        ],
      },
      {
        title: 'Custom Enterprise',
        price: null,
        description: 'Tailored enterprise solutions for complex requirements',
        features: [
          'Custom team structure and size',
          'Enterprise architecture design',
          'Full system integration',
          'Dedicated support team',
          'Custom SLA and support terms',
        ],
      },
    ],
    image: '/images/techforge.png',
  },
  'quantum-systems': {
    name: 'Quantum Systems International',
    rating: 4.9,
    reviews: 412,
    location: 'Global',
    completedProjects: 589,
    fullDescription: 'Leading provider of innovative IT solutions with a focus on emerging technologies and enterprise-scale implementations. Our team specializes in delivering high-performance, secure, and scalable solutions that drive digital transformation and business growth. With a global presence and over 15 years of industry experience, we\'ve established ourselves as trusted technology partners for businesses ranging from ambitious startups to Fortune 100 enterprises. Our approach combines deep technical expertise with agile methodologies to deliver solutions that not only meet current needs but are also future-ready.',
    expertise: [
      'Enterprise Architecture',
      'Cloud Computing',
      'DevOps & Automation',
      'Cybersecurity',
      'AI/ML Integration',
      'Microservices',
      'Containerization',
      'Big Data Solutions',
      'IoT Development',
      'Blockchain Solutions',
    ],
    services: [
      {
        title: 'Foundation Package',
        price: 5500,
        description: 'Essential enterprise solutions with cutting-edge technology integration',
        features: [
          'Comprehensive architecture planning',
          'Core development team setup',
          'Basic DevOps implementation',
          'Security assessment & setup',
          '3-month technical support',
        ],
      },
      {
        title: 'Advanced Package',
        price: 9500,
        description: 'Comprehensive enterprise solutions with advanced features',
        features: [
          'Everything in Foundation Package',
          'Advanced system architecture',
          'Extended development team',
          'Full DevOps implementation',
          '6-month premium support',
        ],
      },
      {
        title: 'Premium Package',
        price: 13000,
        description: 'Full-scale enterprise transformation with premium support',
        features: [
          'Everything in Advanced Package',
          'Enterprise-wide integration',
          'Complete technical team',
          '24/7 DevOps support',
          '12-month enterprise support',
        ],
      },
      {
        title: 'Enterprise Custom',
        price: null,
        description: 'Fully customized enterprise solutions for unique requirements',
        features: [
          'Custom solution architecture',
          'Dedicated technical teams',
          'Full-scale system integration',
          'Premium 24/7 support',
          'Custom maintenance terms',
        ],
      },
    ],
    image: '/images/quantum.png',
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

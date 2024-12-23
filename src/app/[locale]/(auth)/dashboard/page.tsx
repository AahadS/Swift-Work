import { getTranslations } from 'next-intl/server';

import ContactBanner from '@/components/ContactBanner';

import ServiceCard from './ServiceCard';

export default async function DashboardPage() {
  const t = await getTranslations('DashboardIndex');

  const services = [
    {
      key: 'it_freelancing',
      href: '/dashboard/services/it-freelancing',
    },
    {
      key: 'ai',
      href: '/dashboard/services/ai',
    },
    {
      key: 'bi',
      href: '/dashboard/services/business-intelligence',
    },
    {
      key: 'data_engineering',
      href: '/dashboard/services/data-engineering',
    },
    {
      key: 'cloud',
      href: '/dashboard/services/cloud',
    },
    {
      key: 'security',
      href: '/dashboard/services/security',
    },
    {
      key: 'web_development',
      href: '/dashboard/services/web-development',
    },
    {
      key: 'mobile_development',
      href: '/dashboard/services/mobile-development',
    },
    {
      key: 'devops',
      href: '/dashboard/services/devops',
    },
    {
      key: 'blockchain',
      href: '/dashboard/services/blockchain',
    },
    {
      key: 'iot',
      href: '/dashboard/services/iot',
    },
    {
      key: 'qa_testing',
      href: '/dashboard/services/qa-testing',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-2 text-2xl font-bold">{t('title_bar')}</h1>
      <p className="mb-6 text-gray-600">{t('subtitle')}</p>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(service => (
          <ServiceCard
            key={service.key}
            title={t(`services.${service.key}.title`)}
            description={t(`services.${service.key}.description`)}
            features={t(`services.${service.key}.features`) as unknown as string[]}
            buttonText={t(`services.${service.key}.button`)}
            href={service.href}
          />
        ))}
      </div>

      <ContactBanner />
    </div>
  );
}

import { useTranslations } from 'next-intl';

import { PricingCard } from '@/features/billing/PricingCard';

export const PricingInformation = (props: {
  buttonList: Record<string, React.ReactNode>;
}) => {
  const t = useTranslations('PricingPlan');

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <PricingCard
        planId="free"
        price={t('free_plan_price')}
        description={t('free_plan_description')}
        interval="month"
        button={props.buttonList.free}
      >
        <ul className="mb-6 space-y-3 text-left">
          <li className="flex items-start">
            <span className="mr-2 font-bold text-primary">✔</span>
            <span className="text-sm text-gray-700">Post up to 3 projects</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-bold text-primary">✔</span>
            <span className="text-sm text-gray-700">Access to vetted freelancers</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-bold text-primary">✔</span>
            <span className="text-sm text-gray-700">Basic support</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-bold text-primary">✔</span>
            <span className="text-sm text-gray-700">Payment tracking</span>
          </li>
        </ul>
      </PricingCard>

      <PricingCard
        planId="premium"
        price={t('premium_plan_price')}
        description={t('premium_plan_description')}
        interval="month"
        button={props.buttonList.premium}
      >
        <ul className="mb-6 space-y-3 text-left">
          <li className="flex items-start">
            <span className="mr-2 font-bold text-primary">✔</span>
            <span className="text-sm text-gray-700">Unlimited projects</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-bold text-primary">✔</span>
            <span className="text-sm text-gray-700">Priority access to top freelancers</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-bold text-primary">✔</span>
            <span className="text-sm text-gray-700">Advanced analytics</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-bold text-primary">✔</span>
            <span className="text-sm text-gray-700">Team collaboration tools</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-bold text-primary">✔</span>
            <span className="text-sm text-gray-700">Dedicated account manager</span>
          </li>
        </ul>
      </PricingCard>

      <PricingCard
        planId="enterprise"
        price={t('enterprise_plan_price')}
        description={t('enterprise_plan_description')}
        interval="month"
        button={props.buttonList.enterprise}
      >
        <ul className="mb-6 space-y-3 text-left">
          <li className="flex items-start">
            <span className="mr-2 font-bold text-primary">✔</span>
            <span className="text-sm text-gray-700">Custom solutions for enterprises</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-bold text-primary">✔</span>
            <span className="text-sm text-gray-700">White-label options</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-bold text-primary">✔</span>
            <span className="text-sm text-gray-700">Detailed performance reporting</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-bold text-primary">✔</span>
            <span className="text-sm text-gray-700">Premium support 24/7</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 font-bold text-primary">✔</span>
            <span className="text-sm text-gray-700">Multi-user management</span>
          </li>
        </ul>
      </PricingCard>
    </div>
  );
};

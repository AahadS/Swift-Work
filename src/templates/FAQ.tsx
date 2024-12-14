import { useTranslations } from 'next-intl';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Section } from '@/features/landing/Section';

export const FAQ = () => {
  const t = useTranslations('FAQ');

  // Generate the FAQ items dynamically
  const faqItems = [
    { key: 'question1' },
    { key: 'question2' },
    { key: 'question3' },
    { key: 'question4' },
    { key: 'question5' },
    { key: 'question6' },
  ];

  return (
    <Section>
      <Accordion type="multiple" className="w-full">
        {faqItems.map(item => (
          <AccordionItem key={item.key} value={item.key}>
            <AccordionTrigger>{t(`${item.key}.question`)}</AccordionTrigger>
            <AccordionContent>{t(`${item.key}.answer`)}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

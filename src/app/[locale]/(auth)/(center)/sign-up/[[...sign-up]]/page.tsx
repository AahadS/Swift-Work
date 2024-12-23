// src/app/[locale]/(auth)/(center)/sign-up/[[...sign-up]]/page.tsx
import { getTranslations } from 'next-intl/server';

import SignUpClient from './signupclient';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'SignUp',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function SignUpPage(props: { params: { locale: string } }) {
  return <SignUpClient locale={props.params.locale} />;
}

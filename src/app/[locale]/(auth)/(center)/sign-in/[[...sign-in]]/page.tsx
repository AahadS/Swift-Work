import { SignIn } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';

import { getI18nPath } from '@/utils/Helpers';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignInPage = (props: { params: { locale: string } }) => (
  <SignIn
    path={getI18nPath('/sign-in', props.params.locale)}
    routing="path"
    appearance={{
      elements: {
        formField: 'mt-4',
        buttonPrimary: 'mt-6 bg-primary hover:bg-primary-dark',
      },
    }}
  />
);

export default SignInPage;

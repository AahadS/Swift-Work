// src/app/[locale]/(auth)/(center)/sign-up/[[...sign-up]]/SignUpClient.tsx
'use client';

import { SignUp } from '@clerk/nextjs';

import { getI18nPath } from '@/utils/Helpers';

const SignUpClient = ({ locale }: { locale: string }) => (
  <SignUp
    path={getI18nPath('/sign-up', locale)}
    routing="path"
    appearance={{
      elements: {
        formField: 'mt-4',
        buttonPrimary: 'mt-6 bg-primary hover:bg-primary-dark',
      },
    }}
    signInUrl={getI18nPath('/sign-in', locale)}
  />
);

export default SignUpClient;

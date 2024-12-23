import { enUS } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';

export default function AuthLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const signInUrl = '/sign-in';
  const signUpUrl = '/sign-up';
  const dashboardUrl = '/dashboard';
  const afterSignOutUrl = '/';

  return (
    <ClerkProvider
      localization={enUS}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      signInFallbackRedirectUrl={dashboardUrl}
      signUpFallbackRedirectUrl={dashboardUrl}
      afterSignOutUrl={afterSignOutUrl}
    >
      {props.children}
    </ClerkProvider>
  );
}

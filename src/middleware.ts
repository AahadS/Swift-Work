import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { AllLocales, AppConfig } from './utils/AppConfig';

const intlMiddleware = createMiddleware({
  locales: AllLocales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

export default clerkMiddleware(async (auth, req) => {
  // Handle locale middleware first
  const response = intlMiddleware(req);

  const authData = await auth();
  // If user isn't authenticated and trying to access protected routes
  if (!authData.userId && !req.url.match(/(sign-in|sign-up|\/$)/)) {
    const locale = req.nextUrl.pathname.split('/')[1];
    return NextResponse.redirect(new URL(`/${locale}/sign-in`, req.url));
  }

  return response;
});

export const config = {
  matcher: ['/((?!.*\\.[\\w]+$|_next|monitoring|_vercel|favicon.ico).*)', '/'],
};

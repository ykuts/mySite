import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';

const middleware = createMiddleware({
  locales: ['en', 'fr', 'de'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});

export default function(request: NextRequest) {
  console.log('Middleware - request URL:', request.nextUrl.pathname);
  const response = middleware(request);
  console.log('Middleware - response:', response?.headers?.get('location') || 'no redirect');
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|favicon.ico|.*\\.).*)'
  ]
};
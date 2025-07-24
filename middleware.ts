import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'fr', 'de'],
  defaultLocale: 'en',
  localePrefix: 'as-needed' // Не показывать префикс для defaultLocale
});

export const config = {
  matcher: [
    // Включить все пути кроме файлов с расширениями и служебных папок
    '/((?!api|_next|_vercel|favicon.ico|.*\\.).*)'
  ]
};
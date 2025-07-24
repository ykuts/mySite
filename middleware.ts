import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/i18n/request';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});

export const config = {
  // Исключаем API routes, статические файлы, и внутренние файлы Next.js
  matcher: [
    // Включаем все пути кроме исключений
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Включаем корневой путь
    '/'
  ]
};
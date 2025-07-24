import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const defaultLocale = 'en';
export const locales = ['en', 'fr', 'de'] as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Проверяем, что locale существует и валиден
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale: locale as string, // Явно кастим к string после проверки
    messages: (await import(`./locales/${locale}.json`)).default
  };
});
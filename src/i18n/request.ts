import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  console.log('request.ts: locale =', locale);
  
  // Если locale undefined, используем en по умолчанию
  const currentLocale = locale || 'en';
  console.log('request.ts: using locale =', currentLocale);

  try {
    const messages = (await import(`./locales/${currentLocale}.json`)).default;
    console.log('Successfully loaded messages for locale:', currentLocale);
    return {
      locale: currentLocale,
      messages
    };
  } catch (error) {
    console.error('Error loading messages for locale:', currentLocale, error);
    // Fallback к en
    const fallbackMessages = (await import(`./locales/en.json`)).default;
    return {
      locale: 'en',
      messages: fallbackMessages
    };
  }
});
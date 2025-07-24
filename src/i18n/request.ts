import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  console.log('=== request.ts called ===');
  console.log('Requested locale:', locale);
  
  // Если locale все еще undefined, пытаемся извлечь из headers
  let currentLocale = locale;
  
  if (!currentLocale) {
    console.log('Locale is undefined, trying to get from other sources...');
    // Можно попробовать получить из headers, но пока fallback на en
    currentLocale = 'en';
  }
  
  console.log('Using locale:', currentLocale);

  try {
    const messages = (await import(`./locales/${currentLocale}.json`)).default;
    console.log('Successfully loaded messages for:', currentLocale);
    console.log('Sample message keys:', Object.keys(messages));
    
    return {
      locale: currentLocale,
      messages
    };
  } catch (error) {
    console.error('Error loading messages for locale:', currentLocale, error);
    
    // Fallback к en
    const fallbackMessages = (await import(`./locales/en.json`)).default;
    console.log('Using fallback messages (en)');
    
    return {
      locale: 'en',
      messages: fallbackMessages
    };
  }
});
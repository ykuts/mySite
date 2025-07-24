import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  console.log('LocaleLayout: locale =', locale);
  
  try {
    const messages = await getMessages();
    console.log('LocaleLayout: messages loaded successfully');

    return (
      <NextIntlClientProvider messages={messages}>
        <div style={{ padding: '20px', border: '2px solid green' }}>
          <h2 style={{ color: 'green' }}>✅ Layout works! Locale: {locale}</h2>
          {children}
        </div>
      </NextIntlClientProvider>
    );
  } catch (error) {
    console.error('LocaleLayout error:', error);
    return (
      <div style={{ padding: '20px', border: '2px solid red' }}>
        <h2 style={{ color: 'red' }}>❌ Layout error for locale: {locale}</h2>
        {children}
      </div>
    );
  }
}
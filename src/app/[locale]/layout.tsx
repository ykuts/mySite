import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const validLocales = ['en', 'fr', 'de'];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  console.log('LocaleLayout: locale =', locale);
  
  if (!validLocales.includes(locale)) {
    notFound();
  }
  
  try {
    // Загружаем сообщения напрямую - минуя проблемный request.ts
    const messages = (await import(`@/i18n/locales/${locale}.json`)).default;
    console.log('LocaleLayout: direct import success for', locale);

    return (
      <NextIntlClientProvider messages={messages} locale={locale}>
        <div className="min-h-screen bg-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </NextIntlClientProvider>
    );
  } catch (error) {
    console.error('LocaleLayout error:', error);
    
    // Fallback на английский
    const fallbackMessages = (await import(`@/i18n/locales/en.json`)).default;
    return (
      <NextIntlClientProvider messages={fallbackMessages} locale="en">
        <div className="min-h-screen bg-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </NextIntlClientProvider>
    );
  }
}
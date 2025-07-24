import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

// Генерируем статические параметры для всех локалей
export function generateStaticParams() {
  return locales.map((locale) => ({
    locale
  }));
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Загружаем сообщения
  let messages;
  try {
    messages = (await import(`@/i18n/locales/${locale}.json`)).default;
  } catch (error) {
    console.error(`Could not load messages for locale: ${locale}`, error);
    messages = {};
  }

  return (
    <html lang={locale}>
      <head />
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="min-h-screen bg-white">
            <header className="bg-gray-100 py-4">
              <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-xl font-bold">YK Portfolio ({locale.toUpperCase()})</h1>
              </div>
            </header>
            <main>{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
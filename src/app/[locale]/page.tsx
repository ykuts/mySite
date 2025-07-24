import { locales } from '@/i18n/request';

// Генерируем статические параметры для всех локалей
export function generateStaticParams() {
  return locales.map((locale) => ({
    locale
  }));
}

export default function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'green', fontSize: '32px' }}>
        ✅ SUCCESS! Locale page works!
      </h1>
      <p>You are on the locale-specific page!</p>
    </div>
  );
}
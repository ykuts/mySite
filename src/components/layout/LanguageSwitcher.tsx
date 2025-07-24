'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', name: 'EN', flag: '🇺🇸' },
  { code: 'fr', name: 'FR', flag: '🇫🇷' },
  { code: 'de', name: 'DE', flag: '🇩🇪' },
];

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={cn(
            'flex items-center space-x-1 px-2 py-1 rounded-md text-sm font-medium transition-all duration-200',
            locale === lang.code
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
          )}
        >
          <span className="text-xs">{lang.flag}</span>
          <span>{lang.name}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
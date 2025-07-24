'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', name: 'EN' },
  { code: 'fr', name: 'FR' },
  { code: 'de', name: 'DE' },
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
    <div className="flex items-center space-x-1 text-sm">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={cn(
            'px-2 py-1 rounded transition-colors',
            locale === lang.code
              ? 'bg-gray-900 text-white'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          )}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
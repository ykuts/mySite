'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useTransition, useEffect } from 'react';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', name: 'EN', flag: '🇺🇸', label: 'English' },
  { code: 'fr', name: 'FR', flag: '🇫🇷', label: 'Français' },
  { code: 'de', name: 'DE', flag: '🇩🇪', label: 'Deutsch' },
];

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  
  // Отладка
  useEffect(() => {
    console.log('LanguageSwitcher render:');
    console.log('  - useLocale():', locale);
    console.log('  - pathname:', pathname);
    console.log('  - window.location.pathname:', typeof window !== 'undefined' ? window.location.pathname : 'server');
  }, [locale, pathname]);

  // Определяем текущий язык из URL как fallback
  const urlLocale = pathname.split('/')[1] || 'en';
  const currentLocale = locale || urlLocale;
  
  console.log('Current locale resolved to:', currentLocale);

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    
    console.log('Switching language from', currentLocale, 'to', newLocale);
    
    startTransition(() => {
      const segments = pathname.split('/');
      segments[1] = newLocale;
      const newPath = segments.join('/');
      
      console.log('Navigating to:', newPath);
      router.push(newPath);
    });
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      {languages.map((lang) => {
        const isActive = currentLocale === lang.code;
        
        return (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            disabled={isPending}
            title={`${lang.label} ${isActive ? '(active)' : ''}`}
            className={cn(
              'flex items-center space-x-1 px-2 py-1 rounded-md text-sm font-medium transition-all duration-200',
              isActive
                ? 'bg-white text-gray-900 shadow-sm cursor-default'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200 cursor-pointer',
              isPending && 'opacity-50 cursor-not-allowed'
            )}
          >
            {/* <span className="text-xs">{lang.flag}</span> */}
            <span>{lang.name}</span>
            {/* Показываем текущий статус для отладки */}
            {isActive && <span className="text-xs text-green-600">●</span>}
          </button>
        );
      })}
      
    </div>
  );
};

export default LanguageSwitcher;
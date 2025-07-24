'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

const LocaleTest = () => {
  const locale = useLocale();
  const t = useTranslations('nav');
  const pathname = usePathname();
  
  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-xs opacity-75 z-50">
      <div>useLocale(): {locale}</div>
      <div>pathname: {pathname}</div>
      <div>t('home'): {t('home')}</div>
      <div>URL locale: {pathname.split('/')[1]}</div>
    </div>
  );
};

export default LocaleTest;
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HeroClient from './HeroClient';

const HeroSection = () => {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="pt-16 pb-20 px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <HeroClient>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 leading-tight mb-8">
            {t('title')}
            <span className="block font-normal bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('titleAccent')}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${locale}/contact`}
              className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
            >
              {t('cta1')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/portfolio`}
              className="border border-gray-300 text-gray-900 px-8 py-4 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              {t('cta2')}
            </Link>
          </div>
        </HeroClient>
      </div>
    </section>
  );
};

export default HeroSection;
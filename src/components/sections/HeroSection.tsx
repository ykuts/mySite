'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('hero');
  const locale = useLocale();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/40"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl hidden lg:block"
      />
      
      <motion.div
        animate={{ 
          y: [0, 25, 0],
          rotate: [0, -10, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 right-32 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-15 blur-lg hidden lg:block"
      />
      
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-10 w-8 h-8 bg-yellow-300 rounded-full opacity-30 hidden lg:block"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                <Sparkles className="w-4 h-4" />
                {locale === 'en' ? '👋 Available for new projects' : 
                 locale === 'fr' ? '👋 Disponible pour nouveaux projets' : 
                 '👋 Verfügbar für neue Projekte'}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight mb-8"
            >
              {t('title')}
              <span className="block font-normal bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                {t('titleAccent')}
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-600 leading-relaxed mb-10"
            >
              {t('subtitle')}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href={`/${locale}/contact`}
                className="btn-primary group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('cta1')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                href={`/${locale}/portfolio`}
                className="btn-secondary group"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:text-blue-600 transition-colors" />
                {t('cta2')}
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap items-center gap-6 text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Based in Geneva</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-500" />
                <span className="text-sm">5+ years experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="text-sm">50+ projects delivered</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
              >
                <div className="space-y-6">
                  {/* Code Preview */}
                  <div className="bg-gray-900 rounded-xl p-4 text-green-400 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {'function createAwesome() {'}
                      <br />
                      {'  return "🚀 Modern Web Solutions";'}
                      <br />
                      {'}'}
                    </motion.div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-blue-50 rounded-xl"
                    >
                      <div className="text-2xl font-bold text-blue-600">5+</div>
                      <div className="text-sm text-gray-600">Years</div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-purple-50 rounded-xl"
                    >
                      <div className="text-2xl font-bold text-purple-600">50+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </motion.div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind'].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-lg"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-4 shadow-lg"
              >
                <Target className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
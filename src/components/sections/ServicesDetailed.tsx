// src/components/sections/ServicesDetailed.tsx
'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Database, Check, ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';

const ServicesDetailed = () => {
  const [activeTab, setActiveTab] = useState(0);
  const locale = useLocale();

  const iconMap = {
    Globe: Globe,
    ShoppingCart: ShoppingCart,
    Database: Database,
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-gray-900 mb-6"
          >
            Complete Solutions for
            <span className="block font-normal text-blue-600">
              Your Business Needs
            </span>
          </motion.h2>
        </div>

        {/* Service Tabs */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              const isActive = activeTab === index;
              
              return (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    'flex-1 p-6 rounded-2xl border-2 transition-all duration-300 text-left',
                    isActive
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center transition-colors',
                      isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                    )}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={cn(
                        'text-lg font-semibold mb-2 transition-colors',
                        isActive ? 'text-blue-600' : 'text-gray-900'
                      )}>
                        {service.title[locale as 'en' | 'fr' | 'de']}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description[locale as 'en' | 'fr' | 'de']}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Active Service Details */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {services[activeTab].title[locale as 'en' | 'fr' | 'de']}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {services[activeTab].description[locale as 'en' | 'fr' | 'de']}
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {services[activeTab].features[locale as 'en' | 'fr' | 'de'].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <button className="btn-primary group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Visual */}
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
                className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 h-80 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 mx-auto">
                    {(() => {
                      const IconComponent = iconMap[services[activeTab].icon as keyof typeof iconMap];
                      return <IconComponent className="w-12 h-12 text-blue-600" />;
                    })()}
                  </div>
                  <div className="text-gray-600 font-medium">
                    Professional {services[activeTab].title.en} Solutions
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDetailed;
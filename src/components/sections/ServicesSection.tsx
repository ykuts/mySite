'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Globe, ShoppingCart, Database, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '@/lib/data';

const iconMap = {
  Globe: Globe,
  ShoppingCart: ShoppingCart,
  Database: Database,
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const t = useTranslations('services');

  const getColorClasses = (color: string, active: boolean) => {
    const colors = {
      blue: active 
        ? 'text-blue-600 bg-blue-50 border-blue-200' 
        : 'text-gray-400 hover:text-blue-600',
      purple: active 
        ? 'text-purple-600 bg-purple-50 border-purple-200' 
        : 'text-gray-400 hover:text-purple-600',
      green: active 
        ? 'text-green-600 bg-green-50 border-green-200' 
        : 'text-gray-400 hover:text-green-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-light text-gray-900 mb-6"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer group"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={`mb-6 transition-colors duration-300 ${
                  activeService === index ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title.en}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description.en}
                </p>

                 {/* Features */}
                <ul className="space-y-2">
                  {service.features.en.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Need a custom solution? Let's discuss your project
          </p>
          <button className="btn-primary">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
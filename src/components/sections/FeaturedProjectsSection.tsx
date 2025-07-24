'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';

const FeaturedProjectsSection = () => {
  const t = useTranslations('portfolio');
  const locale = useLocale();
  
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="portfolio" className="py-20 px-6">
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-500">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-lg group-hover:bg-blue-200 transition-colors"></div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title.en}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description.en}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href={`/${locale}/portfolio`}
            className="border border-gray-300 text-gray-900 px-8 py-4 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors inline-flex items-center"
          >
            {t('viewAll')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
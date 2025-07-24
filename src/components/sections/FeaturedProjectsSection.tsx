'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

const FeaturedProjectsSection = () => {
  const t = useTranslations('portfolio');
  const locale = useLocale();
  
  const featuredProjects = projects.filter(project => project.featured);

  // Мапинг категорий для цветов
  const getCategoryColor = (category: string) => {
    const colors = {
      'ecommerce': 'from-blue-400 to-cyan-400',
      'web': 'from-purple-400 to-pink-400',
      'automation': 'from-green-400 to-emerald-400'
    };
    return colors[category as keyof typeof colors] || 'from-gray-400 to-gray-500';
  };

  // Мапинг категорий для переводов
  const getCategoryName = (category: string) => {
    const categoryNames = {
      'ecommerce': t('categories.ecommerce'),
      'web': t('categories.web'), 
      'automation': t('categories.automation')
    };
    return categoryNames[category as keyof typeof categoryNames] || category;
  };

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Recent Work
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-gray-900 mb-6"
          >
            {t('title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image/Preview */}
              <div className={`relative h-48 bg-gradient-to-br overflow-hidden ${getCategoryColor(project.category)}`}>
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/30 rounded-lg"></div>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.url || '#'}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
                    title="View Project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
                    title="View Code"
                  >
                    <SiGithub className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-900 rounded-full text-xs font-medium">
                    {getCategoryName(project.category)}
                  </span>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title[locale as keyof typeof project.title]}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description[locale as keyof typeof project.description]}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.url || '#'}
                    className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-1"
                  >
                    {t('viewProject')}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    title="View Code"
                  >
                    <SiGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href={`/${locale}/portfolio`}
            className="btn-secondary group"
          >
            {t('viewAll')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Calendar, Users } from 'lucide-react';
import { projects } from '@/lib/data';
import { cn } from '@/lib/utils';

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const t = useTranslations('portfolio');
  const locale = useLocale();

  // Фильтрация проектов
  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const filters = [
    { id: 'all', label: t('categories.all') },
    { id: 'web', label: t('categories.web') },
    { id: 'ecommerce', label: t('categories.ecommerce') },
    { id: 'automation', label: t('categories.automation') }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'ecommerce': 'from-blue-400 to-cyan-400',
      'web': 'from-purple-400 to-pink-400',
      'automation': 'from-green-400 to-emerald-400'
    };
    return colors[category as keyof typeof colors] || 'from-gray-400 to-gray-500';
  };

  const getCategoryName = (category: string) => {
    const categoryNames = {
      'ecommerce': t('categories.ecommerce'),
      'web': t('categories.web'), 
      'automation': t('categories.automation')
    };
    return categoryNames[category as keyof typeof categoryNames] || category;
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Filter Section - теперь встроена в этот компонент */}
        <div className="mb-16">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light text-gray-900 mb-4"
            >
              Browse by Category
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600"
            >
              Filter projects by type to find exactly what you're looking for
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'px-6 py-3 rounded-full font-medium transition-all duration-300',
                  activeFilter === filter.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 shadow-sm'
                )}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Project Count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <span className="text-sm text-gray-500">
              Showing {filteredProjects.length} {activeFilter === 'all' ? 'projects' : `${activeFilter} projects`}
            </span>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >
                  {/* Project Image/Preview */}
                  <div className={`relative h-64 bg-gradient-to-br overflow-hidden ${getCategoryColor(project.category)}`}>
                    {/* Mock Project Preview */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="w-full h-full bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 flex flex-col justify-between p-4">
                        {/* Mock Browser Bar */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        
                        {/* Mock Content */}
                        <div className="space-y-3">
                          <div className="h-4 bg-white/40 rounded"></div>
                          <div className="h-3 bg-white/30 rounded w-3/4"></div>
                          <div className="h-3 bg-white/30 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <motion.a
                        href={project.url || '#'}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
                        title="View Source Code"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-gray-900 rounded-full text-xs font-medium">
                        {getCategoryName(project.category)}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-medium">
                          ⭐ Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {project.title[locale as 'en' | 'fr' | 'de']}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description[locale as 'en' | 'fr' | 'de']}
                    </p>

                    {/* Project Meta */}
                    <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>2024</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>Solo Project</span>
                      </div>
                    </div>

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
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-1 group"
                      >
                        {t('viewProject')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <div className="flex items-center gap-2">
                        <a
                          href="#"
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          title="Source Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.url || '#'}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-secondary group">
            Load More Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
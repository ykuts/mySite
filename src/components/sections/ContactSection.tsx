'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Mail, Github, Linkedin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const t = useTranslations('contact');
  const locale = useLocale();

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-light text-white mb-6"
        >
          {t('title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          {t('subtitle')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="mailto:hello@yuliakuts.dev"
            className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            {t('email')}
          </a>
          <Link
            href={`/${locale}/contact`}
            className="border border-gray-600 text-white px-8 py-4 rounded-full hover:border-gray-400 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            {t('schedule')}
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6"
        >
          <a
            href="mailto:hello@yuliakuts.dev"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/yuliakuts"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yuliakuts"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
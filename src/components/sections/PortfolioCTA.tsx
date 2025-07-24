'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Eye } from 'lucide-react';

const PortfolioCTA = () => {
  const locale = useLocale();

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-cyan-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light text-white mb-6"
        >
          Inspired by
          <span className="block font-normal text-cyan-300">
            What You See?
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Every project in this portfolio started with a conversation. 
          Let's talk about how we can bring your vision to life.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <Link
            href={`/${locale}/contact`}
            className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
          >
            <MessageCircle className="w-5 h-5" />
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href={`/${locale}/services`}
            className="border border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Eye className="w-5 h-5" />
            View Services
          </Link>
        </motion.div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <blockquote className="text-lg text-gray-300 italic mb-4">
            "Yulia transformed our outdated website into a modern, high-performing platform 
            that exceeded all our expectations. The attention to detail and professionalism 
            was outstanding."
          </blockquote>
          <div className="text-sm text-cyan-300">
            — Sarah Johnson, CEO at TechStart Solutions
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioCTA;
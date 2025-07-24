'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Download } from 'lucide-react';

const AboutCTA = () => {
  const locale = useLocale();

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light text-white mb-6"
        >
          Ready to Work
          <span className="block font-normal text-purple-300">
            Together?
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          I'm always excited to take on new challenges and help bring your ideas to life. 
          Let's discuss how we can work together to achieve your goals.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          <Link
            href={`/${locale}/contact`}
            className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
          >
            <MessageCircle className="w-5 h-5" />
            Let's Talk
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="/resume.pdf"
            download
            className="border border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          
          <Link
            href={`/${locale}/portfolio`}
            className="border border-purple-300/30 text-purple-300 px-8 py-4 rounded-full hover:bg-purple-300/10 transition-colors flex items-center justify-center"
          >
            View My Work
          </Link>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">☕</div>
            <div className="text-sm text-gray-300">Cups of coffee</div>
            <div className="text-lg font-semibold text-purple-300">1000+</div>
          </div>
          
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">💻</div>
            <div className="text-sm text-gray-300">Lines of code</div>
            <div className="text-lg font-semibold text-blue-300">50K+</div>
          </div>
          
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">😊</div>
            <div className="text-sm text-gray-300">Happy clients</div>
            <div className="text-lg font-semibold text-green-300">25+</div>
          </div>
          
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">🚀</div>
            <div className="text-sm text-gray-300">Projects launched</div>
            <div className="text-lg font-semibold text-yellow-300">50+</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar, Mail } from 'lucide-react';

const ServicesContact = () => {
  const locale = useLocale();

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light text-white mb-6"
        >
          Let's Build Something
          <span className="block font-normal text-blue-300">
            Amazing Together
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Ready to transform your ideas into reality? Let's discuss your project 
          and find the perfect solution for your business needs.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <a
            href="mailto:hello@yuliakuts.dev"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <Mail className="w-8 h-8 text-blue-300 mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-semibold mb-2">Send Email</h3>
            <p className="text-gray-300 text-sm">Quick questions or project inquiries</p>
          </a>
          
          <Link
            href={`/${locale}/contact`}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <MessageCircle className="w-8 h-8 text-purple-300 mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-semibold mb-2">Contact Form</h3>
            <p className="text-gray-300 text-sm">Detailed project discussions</p>
          </Link>
          
          <a
            href="#"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <Calendar className="w-8 h-8 text-green-300 mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-semibold mb-2">Schedule Call</h3>
            <p className="text-gray-300 text-sm">Free consultation session</p>
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={`/${locale}/contact`}
            className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={`/${locale}/portfolio`}
            className="border border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesContact;
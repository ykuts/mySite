'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const ContactHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('contact');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center px-6 bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Contact Icons */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-30 hidden lg:flex items-center justify-center"
      >
        <Mail className="w-8 h-8 text-blue-600" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 left-20 w-16 h-16 bg-green-200 rounded-full opacity-30 hidden lg:flex items-center justify-center"
      >
        <Phone className="w-8 h-8 text-green-600" />
      </motion.div>

      <div className="max-w-6xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
              <MessageCircle className="w-4 h-4" />
              Let's Start a Conversation
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-light text-gray-900 leading-tight mb-8"
          >
            Get in
            <span className="block font-normal bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Ready to bring your ideas to life? I'd love to hear about your project and discuss 
            how we can work together to create something amazing.
          </motion.p>

          {/* Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <a
              href="mailto:hello@yuliakuts.dev"
              className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <Mail className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-gray-700">Email Me</span>
            </a>
            
            <a
              href="tel:+41123456789"
              className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <Phone className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-gray-700">Call Me</span>
            </a>
            
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl shadow-sm">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-gray-700">Geneva, CH</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
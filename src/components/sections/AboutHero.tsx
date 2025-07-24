'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Coffee, Heart, Code } from 'lucide-react';

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('about');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-20 h-20 bg-purple-200 rounded-full opacity-30 hidden lg:block"
      />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                👋 Nice to meet you!
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-6">
              I'm
              <span className="block font-normal bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Yulia Kuts
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed mb-8"
            >
              A passionate web developer and automation expert based in Geneva, Switzerland. 
              I transform complex business challenges into elegant digital solutions that drive growth and efficiency.
            </motion.p>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">Geneva, Switzerland</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <Coffee className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700">Coffee Enthusiast</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-red-600" />
                <span className="text-gray-700">Clean Code Lover</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary">
                Let's Work Together
              </button>
              <button className="btn-secondary">
                Download Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image/Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Profile Picture Placeholder */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-80 h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-3xl mx-auto flex items-center justify-center relative overflow-hidden"
              >
                {/* Photo placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-purple-300/50 to-blue-300/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/30 rounded-full mx-auto mb-4"></div>
                    <div className="text-purple-800 font-medium">Your Photo Here</div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/30 rounded-full"></div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4"
              >
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4"
              >
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
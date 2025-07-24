'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const ContactMap = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-gray-900 mb-4"
          >
            Find Me in
            <span className="block font-normal text-blue-600">
              Geneva
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Located in the heart of Europe, perfectly positioned to serve clients 
            across different time zones with excellent connectivity worldwide.
          </motion.p>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl overflow-hidden shadow-lg"
        >
          {/* Map placeholder content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 mx-auto">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Geneva, Switzerland</h3>
              <p className="text-gray-600 mb-4">Central European Time Zone</p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Navigation className="w-4 h-4" />
                <span>Interactive map would be here</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-8 left-8 w-24 h-24 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/30 rounded-full"></div>
          <div className="absolute top-1/2 right-12 w-8 h-8 bg-blue-300 rounded-full"></div>
        </motion.div>

        {/* Location Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-sm text-gray-600">Perfect timezone for working with both US and Asian clients</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏔️</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Quality of Life</h3>
            <p className="text-sm text-gray-600">Peaceful environment that fosters creativity and focus</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Business Hub</h3>
            <p className="text-sm text-gray-600">Access to international markets and multicultural expertise</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
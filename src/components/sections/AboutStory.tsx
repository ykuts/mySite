'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Target } from 'lucide-react';

const AboutStory = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-gray-900 mb-6"
          >
            My
            <span className="block font-normal text-purple-600">
              Journey
            </span>
          </motion.h2>
        </div>

        {/* Story Content */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How It All Started</h3>
                <p className="text-gray-600 leading-relaxed">
                  My journey into web development began during my university years when I discovered 
                  the power of code to solve real-world problems. What started as curiosity quickly 
                  became a passion for creating digital solutions that make a difference.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Growing & Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Over the years, I've worked with startups and established companies, helping them 
                  scale their digital presence. Each project taught me something new and reinforced 
                  my belief that technology should be accessible, efficient, and beautiful.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">My Mission Today</h3>
                <p className="text-gray-600 leading-relaxed">
                  Today, I focus on helping businesses leverage technology to achieve their goals. 
                  Whether it's building a stunning website, developing a complex web application, 
                  or automating business processes, I'm here to turn your vision into reality.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
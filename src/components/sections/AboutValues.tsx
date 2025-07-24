// src/components/sections/AboutValues.tsx
'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Lightbulb, Target, Clock, Shield } from 'lucide-react';

const AboutValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "I genuinely love what I do. Every project is an opportunity to create something meaningful and impactful."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is my success. I work closely with clients to understand their needs and exceed expectations."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "I stay current with the latest technologies and best practices to deliver cutting-edge solutions."
    },
    {
      icon: Target,
      title: "Results-Oriented",
      description: "Every line of code serves a purpose. I focus on delivering measurable results and business value."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Deadlines matter. I pride myself on delivering projects on time and maintaining clear communication."
    },
    {
      icon: Shield,
      title: "Quality First",
      description: "Clean, maintainable code and thorough testing ensure your project stands the test of time."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
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
              Values
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            The principles that guide my work and shape how I approach every project and client relationship.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <IconComponent className="w-8 h-8 text-purple-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
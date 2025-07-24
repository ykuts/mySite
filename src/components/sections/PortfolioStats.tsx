'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, Award, Target } from 'lucide-react';

const PortfolioStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      title: "Success Rate",
      value: "100%",
      description: "Projects delivered successfully",
      color: "green"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      value: "95%",
      description: "Projects completed on schedule",
      color: "blue"
    },
    {
      icon: Award,
      title: "Client Satisfaction",
      value: "5.0",
      description: "Average rating from clients",
      color: "yellow"
    },
    {
      icon: Target,
      title: "Project Scope",
      value: "Zero",
      description: "Scope creep incidents",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color as keyof typeof colors];
  };

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
            Proven
            <span className="block font-normal text-indigo-600">
              Results
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Numbers don't lie. Here's what consistent quality and dedication achieve over time.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform ${getColorClasses(stat.color)}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.title}
                </h3>
                
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioStats;
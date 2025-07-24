'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Analysis",
      description: "Understanding your business needs, target audience, and project requirements",
      color: "blue"
    },
    {
      icon: Lightbulb,
      title: "Strategy & Planning",
      description: "Creating a comprehensive roadmap with timeline, architecture, and design approach",
      color: "purple"
    },
    {
      icon: Code,
      title: "Development & Testing",
      description: "Building your solution with clean code, regular testing, and progress updates",
      color: "green"
    },
    {
      icon: Rocket,
      title: "Launch & Optimization",
      description: "Deploying your project and providing ongoing support and optimization",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200'
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
            My Development
            <span className="block font-normal text-green-600">
              Process
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            A proven methodology that ensures your project is delivered on time, 
            within budget, and exceeds expectations.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-px h-96 bg-gradient-to-b from-blue-200 via-purple-200 via-green-200 to-orange-200"></div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center ${getColorClasses(step.color)}`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-600 z-10">
                    {index + 1}
                  </div>

                  {/* Mobile step number */}
                  <div className="lg:hidden w-12 h-12 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-600 mr-4">
                    {index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Let's discuss your requirements and create something amazing together.
            </p>
            <button className="btn-primary">
              Schedule a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
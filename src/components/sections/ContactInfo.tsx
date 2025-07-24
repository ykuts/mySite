'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, Globe } from 'lucide-react';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@yuliakuts.dev",
      description: "Best for detailed project discussions",
      href: "mailto:hello@yuliakuts.dev",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+41 (0) 123 456 789",
      description: "Available Mon-Fri, 9AM-6PM CET",
      href: "tel:+41123456789",
      color: "green"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Quick Questions",
      description: "For urgent inquiries",
      href: "https://wa.me/41123456789",
      color: "emerald"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      value: "Book a Meeting",
      description: "Free 30-minute consultation",
      href: "#",
      color: "purple"
    }
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      emerald: 'bg-emerald-100 text-emerald-600 border-emerald-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600">
            Choose the communication method that works best for you.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="space-y-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            
            return (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center group-hover:scale-110 transition-transform ${getColorClasses(method.color)}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-gray-900 font-medium mb-1">
                      {method.value}
                    </p>
                    <p className="text-sm text-gray-600">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Working Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 shadow-sm mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Working Hours</h3>
          </div>
          
          <div className="space-y-3">
            {workingHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <span className="text-gray-700 font-medium">{schedule.day}</span>
                <span className="text-gray-600">{schedule.hours}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <Globe className="w-4 h-4 inline mr-1" />
              All times are in Central European Time (CET/CEST)
            </p>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-900">Location</h3>
          </div>
          
          <div className="text-gray-600">
            <p className="font-medium text-gray-900 mb-2">Geneva, Switzerland</p>
            <p className="text-sm">
              I'm based in beautiful Geneva and work with clients worldwide. 
              Remote collaboration is my specialty, but I'm also available for 
              in-person meetings in the Geneva area.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
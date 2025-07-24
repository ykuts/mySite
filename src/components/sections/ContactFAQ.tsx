'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's your typical response time?",
      answer: "I aim to respond to all inquiries within 24 hours on business days. For urgent matters, feel free to call me directly or send a WhatsApp message."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I work with clients worldwide. Being based in Geneva gives me excellent access to different time zones, and I'm comfortable with remote collaboration using modern tools."
    },
    {
      question: "What information should I include in my project inquiry?",
      answer: "Please include: project goals, target audience, preferred timeline, budget range, and any specific requirements or inspirations. The more details you provide, the better I can understand your needs."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, I offer a free 30-minute consultation call to discuss your project needs, timeline, and how I can help. This helps us both determine if we're a good fit before moving forward."
    },
    {
      question: "What's your payment structure?",
      answer: "I typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, we can arrange milestone-based payments. All details are clearly outlined in the project contract."
    },
    {
      question: "Can you help with ongoing maintenance?",
      answer: "Yes! I offer ongoing maintenance packages for websites and applications. This includes security updates, content changes, performance optimization, and technical support."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Have questions? I have answers! Check out these common inquiries.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: openIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className="border-b border-gray-200"
            >
              <div
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
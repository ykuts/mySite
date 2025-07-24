'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Database, Zap, Globe, Shield } from 'lucide-react';

const AboutSkills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "blue"
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
      color: "green"
    },
    {
      icon: Zap,
      title: "Automation & Tools",
      skills: ["Web Scraping", "Data Processing", "CI/CD", "Docker", "AWS"],
      color: "purple"
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Responsive Design", "Accessibility"],
      color: "pink"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "SEO", "Performance Optimization"],
      color: "orange"
    },
    {
      icon: Shield,
      title: "Best Practices",
      skills: ["Clean Code", "Testing", "Security", "Documentation", "Version Control"],
      color: "gray"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      green: 'bg-green-50 border-green-200 text-green-600',
      purple: 'bg-purple-50 border-purple-200 text-purple-600',
      pink: 'bg-pink-50 border-pink-200 text-pink-600',
      orange: 'bg-orange-50 border-orange-200 text-orange-600',
      gray: 'bg-gray-50 border-gray-200 text-gray-600'
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
            Skills &
            <span className="block font-normal text-blue-600">
              Expertise
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            A comprehensive toolkit built through years of hands-on experience 
            and continuous learning in the ever-evolving world of web development.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center mb-6 ${getColorClasses(category.color)}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
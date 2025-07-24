'use client';

import { motion } from 'framer-motion';

const TechnologiesSection = () => {
  const technologies = {
    "Frontend": [
      { name: "React", level: 95, color: "blue" },
      { name: "Next.js", level: 90, color: "purple" },
      { name: "TypeScript", level: 85, color: "green" },
      { name: "Tailwind CSS", level: 90, color: "cyan" }
    ],
    "Backend": [
      { name: "Node.js", level: 85, color: "green" },
      { name: "Python", level: 90, color: "blue" },
      { name: "PostgreSQL", level: 85, color: "purple" },
      { name: "MongoDB", level: 80, color: "emerald" }
    ],
    "Tools & Others": [
      { name: "Git/GitHub", level: 95, color: "gray" },
      { name: "Docker", level: 75, color: "blue" },
      { name: "AWS/Vercel", level: 80, color: "orange" },
      { name: "Figma", level: 85, color: "pink" }
    ]
  };

  const getColorClass = (color: string) => {
    const colors = {
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      green: 'bg-green-500',
      cyan: 'bg-cyan-500',
      emerald: 'bg-emerald-500',
      orange: 'bg-orange-500',
      pink: 'bg-pink-500',
      gray: 'bg-gray-500'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-6">
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
            Technologies &
            <span className="block font-normal text-purple-600">
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
            I work with modern technologies and frameworks to deliver 
            cutting-edge solutions that scale with your business.
          </motion.p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category}
              </h3>
              
              <div className="space-y-6">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{tech.name}</span>
                      <span className="text-sm text-gray-500">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${getColorClass(tech.color)}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
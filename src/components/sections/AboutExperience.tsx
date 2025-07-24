'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const AboutExperience = () => {
  const experiences = [
    {
      period: "2022 - Present",
      title: "Senior Full-Stack Developer",
      company: "Freelance & Contract Work",
      location: "Geneva, Switzerland",
      description: "Building custom web solutions for startups and established businesses across Europe. Specializing in React/Next.js applications, e-commerce platforms, and business automation tools.",
      achievements: [
        "Delivered 25+ successful projects",
        "Achieved 100% client satisfaction rate",
        "Reduced client operational costs by 40% on average"
      ]
    },
    {
      period: "2020 - 2022",
      title: "Web Developer",
      company: "Tech Solutions AG",
      location: "Zurich, Switzerland",
      description: "Developed and maintained enterprise web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver scalable solutions.",
      achievements: [
        "Led frontend development for 5 major projects",
        "Improved application performance by 60%",
        "Mentored 3 junior developers"
      ]
    },
    {
      period: "2019 - 2020",
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "Remote",
      description: "Created responsive websites and web applications for various clients. Focused on user experience and modern design principles.",
      achievements: [
        "Built 15+ responsive websites",
        "Implemented modern design systems",
        "Improved mobile performance by 50%"
      ]
    }
  ];

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
            Professional
            <span className="block font-normal text-green-600">
              Experience
            </span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-blue-200 to-green-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-white border-4 border-purple-400 rounded-full hidden md:block"></div>

                {/* Content Card */}
                <div className="md:ml-20 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-purple-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {exp.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5"></div>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExperience;
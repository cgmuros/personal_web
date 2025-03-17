'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FaDatabase, FaCode, FaCloud, FaTools, FaChartLine } from 'react-icons/fa';

const skills = [
  {
    category: 'Data Engineering',
    icon: FaDatabase,
    items: ['Data Warehousing', 'ETL/ELT', 'Data Modeling', 'Data Quality']
  },
  {
    category: 'Programming',
    icon: FaCode,
    items: ['Python', 'SQL', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Cloud & DevOps',
    icon: FaCloud,
    items: ['AWS', 'Docker', 'CI/CD', 'Infrastructure as Code']
  },
  {
    category: 'Tools & Platforms',
    icon: FaTools,
    items: ['Snowflake', 'dbt', 'Airflow', 'Git']
  },
  {
    category: 'Analytics',
    icon: FaChartLine,
    items: ['Data Analysis', 'Business Intelligence', 'Data Visualization']
  }
];

export default function TechnicalSkills() {
  const t = useTranslations('TechnicalSkills');

  return (
    <section id="skills" className="w-full py-12 md:py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl md:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
            {t('description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg transform transition-transform duration-300 group-hover:scale-105" />
              <div className="relative p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                    <skill.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2 text-gray-400 group-hover:text-gray-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-gray-400 transition-colors" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
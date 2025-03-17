'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Projects() {
  const t = useTranslations('Projects');

  const projects = [
    {
      title: t('project1.title'),
      description: t('project1.description'),
      technologies: ['Python', 'Apache Airflow', 'AWS', 'Snowflake'],
      image: '/images/project1.jpg',
    },
    {
      title: t('project2.title'),
      description: t('project2.description'),
      technologies: ['Python', 'Apache Spark', 'Azure', 'Databricks'],
      image: '/images/project2.jpg',
    },
    {
      title: t('project3.title'),
      description: t('project3.description'),
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      image: '/images/project3.jpg',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          {t('title')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
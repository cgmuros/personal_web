'use client';

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="w-full py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
            <p>
              I am a passionate Data Engineer with expertise in building robust data pipelines,
              implementing data warehousing solutions, and developing ETL processes. My focus is
              on transforming complex data challenges into efficient, scalable solutions.
            </p>
            <p>
              With a strong foundation in both engineering and analytics, I bridge the gap between
              raw data and actionable insights. I'm particularly interested in big data technologies,
              cloud platforms, and modern data stack implementations.
            </p>
            <p>
              I believe in the power of data to drive decision-making and am committed to
              implementing best practices in data engineering to help organizations leverage their
              data assets effectively.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
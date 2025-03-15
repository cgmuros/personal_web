'use client';

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Data Engineer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Transforming Data into Actionable Insights
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-600 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
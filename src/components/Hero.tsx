'use client';

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaStrava } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Cristian Muñoz Rosenfeld
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            {t('title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            {t('subtitle')}
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/cgmuros"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/cgmuros/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/cgmuros"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400 transition-colors"
              aria-label="Twitter/X"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.strava.com/athletes/cgmuros"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-orange-500 transition-colors"
              aria-label="Strava"
            >
              <FaStrava />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
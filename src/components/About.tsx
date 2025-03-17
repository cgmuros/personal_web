'use client';

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function About() {
  const [imageError, setImageError] = useState(false);
  const t = useTranslations('About');

  return (
    <section className="w-full py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">{t('title')}</h2>
          
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-64 relative rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(0,0,0,0.3)] transition-shadow duration-300 flex-shrink-0 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-2"
            >
              {!imageError ? (
                <div className="relative rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 z-10"></div>
                  <Image
                    src="/images/profile.jpg"
                    alt="Cristian Muñoz Rosenfeld"
                    width={300}
                    height={400}
                    className="object-cover w-full hover:scale-105 transition-transform duration-300 rounded-xl"
                    priority
                    onError={() => setImageError(true)}
                  />
                </div>
              ) : (
                <div className="w-full h-64 flex items-center justify-center text-gray-500 dark:text-gray-400 p-4 text-center">
                  <p>Guarda tu foto como &quot;profile.jpg&quot; en la carpeta &quot;public/images/&quot;</p>
                </div>
              )}
            </motion.div>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <p>{t('description1')}</p>
              <p>{t('description2')}</p>
              <p>{t('description3')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
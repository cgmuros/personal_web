'use client';

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function About() {
  const [imageError, setImageError] = useState(false);

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
          <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
          
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-64 relative rounded-lg overflow-hidden shadow-xl flex-shrink-0 bg-gray-200 dark:bg-gray-700"
            >
              {!imageError ? (
                <Image
                  src="/images/profile.jpg"
                  alt="Cristian Muñoz Rosenfeld"
                  width={300}
                  height={400}
                  className="object-contain w-full"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-64 flex items-center justify-center text-gray-500 dark:text-gray-400 p-4 text-center">
                  <p>Guarda tu foto como &quot;profile.jpg&quot; en la carpeta &quot;public/images/&quot;</p>
                </div>
              )}
            </motion.div>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <p>
                For over 16 years, I&apos;ve been immersed in the world of data engineering and analytics, 
                building expertise across diverse industries and technological landscapes. My journey 
                has been defined by transforming complex data challenges into efficient, scalable solutions 
                that drive business value.
              </p>
              <p>
                Throughout my career, I&apos;ve had the privilege of collaborating with exceptional teams 
                and organizations, each contributing to my professional growth and allowing me to make 
                meaningful contributions to innovative data projects. From data warehousing to ETL processes 
                and modern data architectures, I&apos;ve embraced the evolving data ecosystem.
              </p>
              <p>
                I created this platform to share my expertise, connect with like-minded professionals, 
                and explore new opportunities. Whether you&apos;re looking for a data engineering consultant, 
                a collaborator on an exciting project, or simply want to exchange ideas, I welcome you 
                to reach out through the contact section.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
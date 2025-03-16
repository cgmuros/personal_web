'use client';

import { motion } from 'framer-motion'

const skills = [
  {
    category: "Data Engineering",
    items: ["Apache Spark", "Airflow", "Databricks", "ETL/ELT", "Data Modeling", "dbt", "Snowflake", "BigQuery", "Redshift"]
  },
  {
    category: "Data Architecture",
    items: ["Data Warehousing", "Data Lakes", "Data Mesh", "Lakehouse", "Modern Data Stack", "Data Governance"]
  },
  {
    category: "Cloud Platforms",
    items: ["AWS", "Google Cloud", "Azure", "Terraform", "Infrastructure as Code"]
  },
  {
    category: "Programming",
    items: ["Python", "SQL", "Scala", "Java", "JavaScript", "TypeScript", "Shell Scripting"]
  },
  {
    category: "Big Data",
    items: ["Hadoop", "Hive", "Kafka", "Delta Lake", "Iceberg", "Streaming Data"]
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "Kubernetes", "CI/CD", "Linux", "Jenkins", "GitHub Actions"]
  },
  {
    category: "Analytics & BI",
    items: ["Looker", "Tableau", "Power BI", "Data Visualization", "Metrics Definition"]
  },
  {
    category: "Methodologies",
    items: ["Agile", "Scrum", "Data Mesh", "DataOps", "MLOps"]
  }
]

export default function Skills() {
  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
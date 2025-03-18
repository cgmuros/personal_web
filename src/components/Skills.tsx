'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Skills() {
  const t = useTranslations('Skills');

  const skillCategories = [
    {
      category: "Programming & Languages",
      items: ["Python", "SQL", "Java", "Pyspark", "Pandas", "Bash", "JSON", "XML"]
    },
    {
      category: "Data Engineering",
      items: ["Data Engineering", "ETL", "ELT", "Data Pipelines", "Data Modeling", "Data Warehousing", "Real Time Data", "Data Quality", "Unit testing"]
    },
    {
      category: "Data Architecture",
      items: ["Data Architecture", "Data Warehousing", "Microservices", "REST", "APIs"]
    },
    {
      category: "Big Data Technologies",
      items: ["Spark", "Kafka", "Spark Streaming", "Hadoop", "Hive", "DataBricks"]
    },
    {
      category: "AWS Ecosystem",
      items: ["AWS", "AWS Glue", "AWS Lambdas", "AWS Step Functions", "AWS S3", "AWS Redshift", "AWS Athena", "AWS EMR", "AWS EC2", "AWS CloudWatch", "AWS CloudFormation", "AWS IAM", "AWS DynamoDB"]
    },
    {
      category: "Cloud & Infrastructure",
      items: ["Snowflake", "Terraform", "Docker", "Jenkins", "Git", "Linux", "Schedulers"]
    },
    {
      category: "Workflow & Process",
      items: ["Airflow", "CI/CD", "Agile Methodologies", "Jira", "Confluence"]
    },
    {
      category: "Professional Skills",
      items: ["Technical Leadership", "Teamwork", "Communication", "Problem Solving", "Critical Thinking"]
    },
    {
      category: "Frameworks",
      items: ["FastAPI", "Reflex"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
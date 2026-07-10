'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'AI/ML Engineer',
      company: 'Joshnik AI Labs',
      location: 'Bangalore, India',
      period: '03/2025 – Present',
      type: 'Full-time',
      color: 'from-primary-500 to-primary-600',
      description: [
        'Engineered a data pipeline to crawl, classify, and index 50K+ business profiles across 48 categories, improving classification coverage through hierarchical fallback routing.',
        'Optimized a DSPy-powered fashion intelligence agent serving 16K+ brands by parallelizing retrieval, replacing LLM pre-filtering with regex ranking, and limiting retrieval context, reducing end-to-end latency from 18s to 4s (78%).',
        'Developed an asynchronous real estate data platform where FastAPI orchestrates Celery workers via RabbitMQ to crawl listings, extract structured property data using LLMs, persist results to MongoDB, and stream processing status to a live dashboard.',
        'Built an LLM-powered extraction pipeline using Crawl4AI and DSPy to convert raw HTML into structured property data, supporting multiple LLM providers through a unified inference interface.',
        'Architected multi-tenant marketplace infrastructure integrating payments, real-time slot reservations, and meeting scheduling for consumer and professional workflows.'
      ],
      technologies: ['FastAPI', 'DSPy', 'Celery', 'RabbitMQ', 'MongoDB', 'Crawl4AI', 'LLMs', 'Regex', 'Data Pipelines'],
    },
    {
      title: 'Machine Learning Intern',
      company: 'Alemeno Private Limited',
      location: 'Mumbai, India',
      period: '04/2024 – 10/2024',
      type: 'Internship',
      color: 'from-accent-500 to-accent-600',
      description: [
        'Developed an LCD defect detection system covering 17 defect classes using an ensemble of CNN and LLM models, improving production accuracy from 34% to 92% while reducing false positives.',
        'Constructed and manually annotated a 10K+ image dataset with bounding-box labels, enabling training of production-grade defect detection models deployed via Vertex AI and Dockerized TensorFlow Serving.',
        'Improved difficult-class detection accuracy from 54% to 81% through targeted hard-negative mining and iterative model retraining.'
      ],
      technologies: ['Python', 'TensorFlow', 'Vertex AI', 'Docker', 'TensorFlow Serving', 'CNNs', 'LLMs', 'Computer Vision'],
    },
    {
      title: 'Applied AI Intern',
      company: 'Atria University',
      location: 'Bangalore, India',
      period: '08/2023 – 03/2024',
      type: 'Internship',
      color: 'from-secondary-500 to-secondary-600',
      description: [
        'Designed an LLM-as-a-Judge evaluation framework for a RAG-based agricultural assistant, improving retrieval precision by 25–35% while reducing hallucinations through retrieval and prompt optimization.'
      ],
      technologies: ['LLaMA', 'RAG', 'Prompt Engineering', 'LLM Evaluation', 'NLP'],
    },
    {
      title: 'Machine Learning Intern',
      company: 'Cheslab Private Limited',
      location: 'Bangalore, India',
      period: '04/2023 – 06/2023',
      type: 'Internship',
      color: 'from-green-500 to-emerald-600',
      description: [
        'Developed a CNN-based skin disease classifier across 12 disease categories using 100K+ images, leading the end-to-end data pipeline and integrating the model into a production diagnosis workflow.'
      ],
      technologies: ['Python', 'TensorFlow', 'CNN', 'Data Processing', 'Computer Vision'],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <Briefcase className="w-4 h-4" />
            Work Experience
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Professional
            <span className="gradient-text"> Journey</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Hands-on experience building production AI systems across startups and research
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/30 to-transparent hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <div className={`absolute left-3.5 top-6 w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} border-2 border-dark-950 shadow-lg hidden md:flex items-center justify-center z-10`} />

              <div className="md:ml-16">
                <div className="card group hover:border-white/10 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-primary-400 font-medium text-sm">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1.5 text-sm text-dark-400 flex-shrink-0">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 mb-5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-dark-300 text-sm leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
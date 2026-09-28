'use client'

import { motion } from 'framer-motion'
import { Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI / ML',
      color: 'border-primary-500/40 bg-primary-500/5',
      titleColor: 'text-primary-400',
      skills: ['LLMs', 'RAG', 'DSPy', 'LangChain', 'LangGraph', 'Hugging Face', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'CNNs', 'NLP', 'Computer Vision', 'LoRA'],
    },
    {
      title: 'Backend & Data',
      color: 'border-accent-500/40 bg-accent-500/5',
      titleColor: 'text-accent-400',
      skills: ['FastAPI', 'REST APIs', 'Async Python', 'WebSockets', 'Celery', 'RabbitMQ', 'Redis', 'PostgreSQL', 'MongoDB', 'MySQL', 'FAISS', 'BM25', 'Qdrant'],
    },
    {
      title: 'MLOps & Cloud',
      color: 'border-green-500/40 bg-green-500/5',
      titleColor: 'text-green-400',
      skills: ['MLflow', 'Langfuse', 'Prometheus', 'Grafana', 'Vertex AI', 'Docker', 'TensorFlow Serving', 'GitHub Actions'],
    },
    {
      title: 'Languages',
      color: 'border-orange-500/40 bg-orange-500/5',
      titleColor: 'text-orange-400',
      skills: ['Python', 'SQL'],
    },
  ]

  const topSkills = [
    { name: 'Python (Async)', level: 95 },
    { name: 'LLMs & RAG', level: 93 },
    { name: 'DSPy / LangGraph / LangChain', level: 88 },
    { name: 'PyTorch / TensorFlow', level: 90 },
    { name: 'FastAPI', level: 92 },
    { name: 'Vector Search & Retrieval', level: 90 },
    { name: 'MLflow / Langfuse / LLMOps', level: 85 },
    { name: 'Docker & Cloud (GCP/Vertex AI)', level: 85 },
  ]

  return (
    <section id="skills" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <Wrench className="w-4 h-4" />
            Skills & Tools
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Technical
            <span className="gradient-text"> Expertise</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            The full stack of tools and technologies I use to build intelligent systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl font-bold text-white mb-6">Core Proficiencies</h3>
            <div className="space-y-5">
              {topSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-dark-200 text-sm font-medium">{skill.name}</span>
                    <span className="text-dark-500 text-xs font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-dark-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: index * 0.07, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="font-heading text-xl font-bold text-white mb-6">Full Tech Stack</h3>
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.07 }}
                viewport={{ once: true }}
                className={`p-4 rounded-xl border ${category.color}`}
              >
                <h4 className={`font-heading font-semibold text-sm mb-3 ${category.titleColor}`}>
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: catIndex * 0.05 + i * 0.03 }}
                      viewport={{ once: true }}
                      className="skill-badge text-xs"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills

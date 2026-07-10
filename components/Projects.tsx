'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, FolderOpen } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      title: 'Curalink — AI Medical Research Assistant',
      description:
        '3rd Place Winner, AI Hackathon (800+ Participants). Fine-tuned Flan-T5 using LoRA on 8K medical examples to translate natural-language queries into PubMed MeSH Boolean searches, publishing the model to Hugging Face. Built a hybrid RAG pipeline over PubMed, OpenAlex, and ClinicalTrials.gov, reranking candidates using MiniLM embeddings before synthesizing grounded responses with Llama-3.3-70B.',
      technologies: ['FastAPI', 'Flan-T5', 'LoRA', 'Llama-3.3-70B', 'MiniLM', 'React', 'MongoDB'],
      githubUrl: 'https://github.com/PratikJadhav27/Curalink-Assistant',
      liveUrl: 'https://curalink-assistant.vercel.app',
      category: ['featured', 'ai-ml'],
      badge: 'Hackathon Winner',
      badgeColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
      gradient: 'from-secondary-500/20 to-primary-500/10',
      borderHover: 'hover:border-secondary-500/40',
    },
    {
      title: 'Facial Emotion-Based Music Recommendation',
      description:
        'Developed an facial emotion recognition system on 35K+ images, achieving 69.2% test accuracy across 7 emotion classes while improving minority-class recall by 20 percentage points. Engineered a real-time recommendation engine using probabilistic emotion fusion, confidence-based filtering, and feedback-driven personalization to deliver adaptive music recommendations.',
      technologies: ['TensorFlow', 'Keras', 'OpenCV', 'Streamlit', 'WebRTC', 'Grad-CAM', 'iTunes API'],
      githubUrl: 'https://github.com/PratikJadhav27/Music-Recommendation-System-Using-Facial-Emotion-Recognition',
      liveUrl: 'https://pratikjadhav27-music-recommendation-system-using-fac-app-bfderb.streamlit.app',
      category: ['featured', 'ai-ml'],
      badge: 'Live Demo',
      badgeColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
      gradient: 'from-green-500/20 to-accent-500/10',
      borderHover: 'hover:border-green-500/40',
    },
    {
      title: 'AI Defect Detection System (Alemeno)',
      description:
        'Developed an LCD defect detection system covering 17 defect classes using an ensemble of CNN and LLM models, improving production accuracy from 34% to 92% while reducing false positives. Deployed via Vertex AI and Dockerized TensorFlow Serving.',
      technologies: ['Python', 'TensorFlow', 'Vertex AI', 'Docker', 'CNNs', 'LLMs'],
      githubUrl: 'https://github.com/PratikJadhav27',
      liveUrl: null,
      category: ['featured', 'ai-ml'],
      badge: 'Production',
      badgeColor: 'text-green-400 bg-green-400/10 border-green-400/20',
      gradient: 'from-primary-500/20 to-accent-500/10',
      borderHover: 'hover:border-primary-500/40',
    },
    {
      title: 'Real Estate Data Platform (Joshnik AI Labs)',
      description:
        'Developed an asynchronous real estate data platform where FastAPI orchestrates Celery workers via RabbitMQ to crawl listings, extract structured property data using LLMs, and persist results to MongoDB. Built an LLM-powered extraction pipeline using Crawl4AI and DSPy.',
      technologies: ['FastAPI', 'Celery', 'RabbitMQ', 'DSPy', 'Crawl4AI', 'LLMs', 'MongoDB'],
      githubUrl: 'https://github.com/PratikJadhav27',
      liveUrl: null,
      category: ['featured', 'web', 'ai-ml'],
      badge: 'Production',
      badgeColor: 'text-green-400 bg-green-400/10 border-green-400/20',
      gradient: 'from-accent-500/20 to-secondary-500/10',
      borderHover: 'hover:border-accent-500/40',
    },
    {
      title: 'Audio Caption Generation for Visually Impaired',
      description:
        'Developed a real-time platform generating spoken image descriptions using VGG-16 and Transformer models. Achieved 87% accuracy on benchmark captioning datasets. Integrated Pyttsx3 for Text-to-Speech and deployed with Flask API for accessibility.',
      technologies: ['Python', 'VGG-16', 'Transformers', 'Flask', 'Pyttsx3', 'TTS'],
      githubUrl: 'https://github.com/PratikJadhav27/audio-caption-generation',
      liveUrl: null,
      category: ['ai-ml'],
      badge: 'Open Source',
      badgeColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
      gradient: 'from-purple-500/20 to-pink-500/10',
      borderHover: 'hover:border-purple-500/40',
    },
    {
      title: 'Agricultural LLM Assistant (Atria University)',
      description:
        'Designed an LLM-as-a-Judge evaluation framework for a RAG-based agricultural assistant, improving retrieval precision by 25–35% while reducing hallucinations through retrieval and prompt optimization.',
      technologies: ['LLaMA', 'RAG', 'Prompt Engineering', 'LLM Evaluation'],
      githubUrl: 'https://github.com/PratikJadhav27',
      liveUrl: null,
      category: ['ai-ml', 'research'],
      badge: 'Research',
      badgeColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
      gradient: 'from-yellow-500/20 to-orange-500/10',
      borderHover: 'hover:border-yellow-500/40',
    },
    {
      title: 'Skin Disease Classifier (Cheslab)',
      description:
        'Developed a CNN-based skin disease classifier across 12 disease categories using 100K+ images, leading the end-to-end data pipeline and integrating the model into a production diagnosis workflow.',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Data Processing'],
      githubUrl: 'https://github.com/PratikJadhav27',
      liveUrl: null,
      category: ['ai-ml'],
      badge: 'Production',
      badgeColor: 'text-green-400 bg-green-400/10 border-green-400/20',
      gradient: 'from-rose-500/20 to-red-500/10',
      borderHover: 'hover:border-rose-500/40',
    },
    {
      title: 'AI Task Management System',
      description:
        'An AI-powered task management system built with JavaScript. Leverages AI to intelligently organize, prioritize, and track tasks. Features a modern UI with real-time updates and smart task categorization.',
      technologies: ['JavaScript', 'AI', 'Task Management', 'Frontend'],
      githubUrl: 'https://github.com/PratikJadhav27/aI-task-system',
      liveUrl: null,
      category: ['web'],
      badge: 'Open Source',
      badgeColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
      gradient: 'from-indigo-500/20 to-blue-500/10',
      borderHover: 'hover:border-indigo-500/40',
    },
    {
      title: 'MNIST Classification — ML Fundamentals',
      description:
        'Comprehensive implementation of ML algorithms on the MNIST dataset (60k train / 10k test). Covers Naive Bayes, Decision Trees, SVM, kNN — comparing preprocessing techniques, Normal and Bernoulli distributions, and prediction accuracy.',
      technologies: ['Python', 'Scikit-Learn', 'Naive Bayes', 'SVM', 'kNN', 'Decision Trees'],
      githubUrl: 'https://github.com/PratikJadhav27/Classifying-MNIST-Dataset-Machine-Learning-',
      liveUrl: null,
      category: ['ai-ml'],
      badge: 'Educational',
      badgeColor: 'text-dark-400 bg-dark-700 border-dark-600',
      gradient: 'from-dark-700/50 to-dark-800/30',
      borderHover: 'hover:border-dark-500/50',
    },
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: '⭐ Featured' },
    { id: 'ai-ml', label: '🧠 AI / ML' },
    { id: 'research', label: '🔬 Research' },
    { id: 'web', label: '🌐 Web' },
  ]

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter))

  return (
    <section id="projects" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-tag">
            <FolderOpen className="w-4 h-4" />
            Projects
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Things I've
            <span className="gradient-text"> Built</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Production deployments, research experiments, and open-source contributions
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              id={`filter-${filter.id}`}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${
                activeFilter === filter.id
                  ? 'bg-primary-500/20 border-primary-500/50 text-primary-300'
                  : 'bg-dark-800/60 border-white/5 text-dark-400 hover:text-dark-200 hover:border-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative card border border-white/5 ${project.borderHover} transition-all duration-300 overflow-hidden flex flex-col`}
              >
                {/* Gradient top strip */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient.replace('/20', '').replace('/10', '')}`} />

                {/* Content */}
                <div className="flex-1">
                  {/* Badge + links row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                        className="w-8 h-8 rounded-lg bg-dark-700/80 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-600 transition-all duration-200"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live demo"
                          className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400 hover:text-white hover:bg-primary-500/40 transition-all duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-white text-base mb-3 group-hover:text-primary-300 transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-dark-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span key={i} className="tech-pill text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-dark-500 text-xs flex items-center">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/PratikJadhav27"
            target="_blank"
            rel="noopener noreferrer"
            id="view-all-github"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-dark-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300 text-sm font-medium"
          >
            <Github className="w-5 h-5" />
            View All Repositories on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
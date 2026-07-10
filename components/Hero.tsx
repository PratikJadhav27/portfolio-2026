'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink, Cpu, Brain, Code2 } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  const roles = [
    'AI/ML Engineer',
    'LLM Systems Builder',
    'Computer Vision Expert',
    'RAG & NLP Specialist',
    'MLOps Engineer',
  ]

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentRole = roles[currentIndex]
    let charIndex = 0
    let isDeleting = false

    const type = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, charIndex + 1))
        charIndex++
        if (charIndex === currentRole.length) {
          isDeleting = true
          timeout = setTimeout(type, 2000)
        } else {
          timeout = setTimeout(type, 60)
        }
      } else {
        setDisplayText(currentRole.slice(0, charIndex - 1))
        charIndex--
        if (charIndex === 0) {
          isDeleting = false
          setCurrentIndex((prev) => (prev + 1) % roles.length)
          timeout = setTimeout(type, 300)
        } else {
          timeout = setTimeout(type, 30)
        }
      }
    }

    timeout = setTimeout(type, 500)
    return () => clearTimeout(timeout)
  }, [currentIndex])

  const stats = [
    { value: '92%', label: 'Defect Detection Accuracy', icon: <Cpu className="w-4 h-4" /> },
    { value: '78%', label: 'LLM Latency Reduction', icon: <Brain className="w-4 h-4" /> },
    { value: '4+', label: 'AI Roles & Internships', icon: <Code2 className="w-4 h-4" /> },
  ]

  const socialLinks = [
    {
      href: 'https://github.com/PratikJadhav27',
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      id: 'hero-github',
    },
    {
      href: 'https://www.linkedin.com/in/pratik-jadhav07/',
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      id: 'hero-linkedin',
    },
    {
      href: 'mailto:pratikja13@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      id: 'hero-email',
    },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary-600 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent-600 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary-700 blur-[150px]"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container-max section-padding text-center py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="section-tag">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities · Pune, Maharashtra
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
        >
          Pratik Vijay
          <br />
          <span className="gradient-text">Jadhav</span>
        </motion.h1>

        {/* Typing animation role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-xl md:text-2xl text-dark-300 font-medium mb-6 h-8"
        >
          <span className="gradient-text-blue">{displayText}</span>
          <span className="animate-pulse text-primary-400">|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-dark-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building <span className="text-primary-400 font-medium">production-ready AI systems</span> — LLM pipelines,
          computer vision, distributed ML backends. B.Tech CS @ Atria University{' '}
          <span className="text-accent-400 font-medium">(CGPA: 9.02/10.0)</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="hero-view-projects"
            className="btn-primary flex items-center justify-center gap-2 text-base"
          >
            <ExternalLink className="w-5 h-5" />
            View My Projects
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="hero-download-resume"
            className="btn-secondary flex items-center justify-center gap-2 text-base"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex justify-center gap-4 mb-16"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.id}
              id={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.label}
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-dark-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 + i * 0.1 }}
              className="card-glass p-4 rounded-2xl text-center border border-white/10"
            >
              <div className="flex items-center justify-center gap-1.5 text-primary-400 mb-1">
                {stat.icon}
              </div>
              <div className="font-heading font-bold text-2xl md:text-3xl gradient-text">{stat.value}</div>
              <div className="text-dark-400 text-xs mt-1 leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-500 hover:text-primary-400 transition-colors duration-300"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  )
}

export default Hero
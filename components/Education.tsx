'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      specialization: 'Digital Transformation',
      university: 'Atria University',
      location: 'Bengaluru, India',
      period: '11/2021 - 08/2025',
      grade: 'CGPA: 8.53 / 10.0',
      coursework: [
        'Machine Learning',
        'Deep Learning',
        'NLP',
        'Computer Vision',
        'Big Data',
        'MLOps',
        'Cloud Computing',
        'DSA'
      ],
      isPrimary: true
    },
    {
      degree: '12th Grade (HSC)',
      specialization: 'Science',
      university: 'State Board',
      location: 'Pune, India',
      period: 'Graduated 2021',
      grade: 'Score: 83.50%',
      coursework: [],
      isPrimary: false
    },
    {
      degree: '10th Grade (SSC)',
      specialization: 'General',
      university: 'State Board',
      location: 'Pune, India',
      period: 'Graduated 2019',
      grade: 'Score: 82.80%',
      coursework: [],
      isPrimary: false
    }
  ]

  const certificates = [
    {
      title: 'Natural Language Processing',
      provider: 'Coursera',
      date: 'February 2025',
      color: 'from-primary-500 to-primary-600',
    },
    {
      title: 'MLOps | Machine Learning Operations',
      provider: 'Coursera',
      date: 'October 2024',
      color: 'from-accent-500 to-accent-600',
    },
    {
      title: 'Cloud Security',
      provider: 'Palo Alto Networks Cybersecurity Academy',
      date: 'June 2024',
      color: 'from-secondary-500 to-secondary-600',
    },
  ]

  return (
    <section id="education" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <GraduationCap className="w-4 h-4" />
            Education
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Academic
            <span className="gradient-text"> Foundation</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Building expertise through rigorous coursework and continuous learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card border transition-all duration-300 ${
                  edu.isPrimary ? 'border-primary-500/20 bg-dark-800/80' : 'border-white/5 bg-dark-800/40'
                } hover:border-primary-500/30`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {edu.isPrimary && (
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/20 hidden sm:flex">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className={`font-heading font-bold text-white mb-1 ${edu.isPrimary ? 'text-xl' : 'text-lg'}`}>
                          {edu.degree}
                        </h3>
                        {edu.specialization !== 'General' && edu.specialization !== 'Science' && (
                          <p className="text-primary-400 font-medium mb-1 text-sm">
                            Specialization: {edu.specialization}
                          </p>
                        )}
                        <p className="text-dark-200 font-semibold text-base mt-1">
                          {edu.university}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 text-sm text-dark-400 lg:items-end flex-shrink-0">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="mt-1">
                          <span className={`px-3 py-1.5 rounded-full border text-sm font-bold ${
                            edu.isPrimary
                              ? 'bg-green-500/15 border-green-500/30 text-green-400'
                              : 'bg-accent-500/15 border-accent-500/30 text-accent-400'
                          }`}>
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    </div>

                    {edu.coursework.length > 0 && (
                      <div className="pt-2 border-t border-white/5 mt-2">
                        <h4 className="font-semibold text-dark-300 text-sm mb-3">Relevant Coursework</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, idx) => (
                            <span key={idx} className="tech-pill">{course}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-8 text-center">
              Professional Certifications
            </h3>

            <div className="grid md:grid-cols-3 gap-5">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="card border border-white/5 hover:border-white/10 text-center group transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>

                  <h4 className="font-heading font-bold text-white mb-2 text-sm leading-snug">
                    {cert.title}
                  </h4>

                  <p className="text-primary-400 font-medium text-sm mb-2">
                    {cert.provider}
                  </p>

                  <p className="text-dark-500 text-xs">
                    Completed: {cert.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education

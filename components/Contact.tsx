'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoUrl = `mailto:pratikja13@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.open(mailtoUrl)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      value: 'pratikja13@gmail.com',
      link: 'mailto:pratikja13@gmail.com',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      value: '+91 9021130978',
      link: 'tel:+919021130978',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'Pune, Maharashtra, India',
      link: '#',
      color: 'from-secondary-500 to-secondary-600',
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: 'GitHub',
      url: 'https://github.com/PratikJadhav27',
      id: 'contact-github',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pratik-jadhav07/',
      id: 'contact-linkedin',
    },
  ]

  const inputClass = `w-full px-4 py-3 bg-dark-800/60 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 text-sm`

  return (
    <section id="contact" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl" />
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
            <MessageSquare className="w-4 h-4" />
            Contact
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Let's
            <span className="gradient-text"> Connect</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Open to new opportunities, collaborations, and interesting AI projects. Let's talk!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-8">Get In Touch</h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/60 border border-white/5 hover:border-white/10 transition-all duration-300 group"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-dark-400 text-xs font-medium mb-0.5">{info.title}</p>
                    <p className="text-white text-sm font-medium group-hover:text-primary-300 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <h4 className="font-semibold text-dark-300 text-sm mb-4">Find me on</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.id}
                    id={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-800/60 border border-white/10 text-dark-300 hover:text-white hover:border-white/20 hover:bg-dark-700/60 transition-all duration-300 text-sm font-medium"
                  >
                    {social.icon}
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Available for opportunities</span>
              </div>
              <p className="text-dark-400 text-xs mt-1.5 leading-relaxed">
                Open to ML/AI engineering roles, internships, research collaborations, and freelance projects.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-dark-400 text-xs font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-dark-400 text-xs font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-dark-400 text-xs font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-dark-400 text-xs font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                id="contact-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  submitted
                    ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                    : 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40'
                }`}
              >
                {submitted ? (
                  <>✓ Opening your email client...</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
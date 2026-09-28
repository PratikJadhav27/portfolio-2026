'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github className="w-4 h-4" />,
      url: 'https://github.com/PratikJadhav27',
      name: 'GitHub',
      id: 'footer-github',
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      url: 'https://www.linkedin.com/in/pratik-jadhav07/',
      name: 'LinkedIn',
      id: 'footer-linkedin',
    },
    {
      icon: <Mail className="w-4 h-4" />,
      url: 'mailto:pratikja13@gmail.com',
      name: 'Email',
      id: 'footer-email',
    },
  ]

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-dark-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent" />

      <div className="relative z-10 container-max section-padding py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/logo.jpg"
                  alt="Pratik Jadhav Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading font-bold text-white text-lg">
                Pratik<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed mb-5">
              AI/ML Engineer building production-ready LLM agents, multimodal AI systems, and evaluation/observability infrastructure.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  id={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-lg bg-dark-800 border border-white/5 flex items-center justify-center text-dark-400 hover:text-white hover:border-primary-500/40 hover:bg-primary-500/10 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">Contact</h4>
            <div className="space-y-2.5 text-sm">
              <a
                href="mailto:pratikja13@gmail.com"
                className="block text-dark-400 hover:text-primary-400 transition-colors duration-200"
              >
                pratikja13@gmail.com
              </a>
              <a
                href="tel:+919021130978"
                className="block text-dark-400 hover:text-primary-400 transition-colors duration-200"
              >
                +91 9021130978
              </a>
              <p className="text-dark-500">Pune, Maharashtra, India</p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-primary-400 hover:text-primary-300 font-medium text-xs transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-xs">
            &copy; {currentYear} Pratik Vijay Jadhav. All rights reserved.
          </p>
          <p className="text-dark-500 text-xs">
            Built with Next.js &middot; TailwindCSS &middot; Framer Motion
          </p>
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            id="back-to-top"
            className="w-8 h-8 rounded-lg bg-dark-800 border border-white/5 flex items-center justify-center text-dark-400 hover:text-white hover:border-primary-500/40 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

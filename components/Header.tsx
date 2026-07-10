'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Zap } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Track active section
      const sections = navLinks.map(link => link.id)
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max section-padding h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-heading font-bold text-white text-lg">
            Pratik<span className="gradient-text">.</span>
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? 'text-white'
                  : 'text-dark-400 hover:text-dark-200'
              }`}
            >
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/10 rounded-lg"
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                />
              )}
              <span className="relative">{link.name}</span>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-dark-300 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-950/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="container-max section-padding py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeSection === link.id
                      ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                      : 'text-dark-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-semibold mt-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiArrowUpRight } from 'react-icons/fi';

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-50px' });
  const currentYear = new Date().getFullYear();

  const services = [
    'Frontend Development',
    'Backend Development',
    'CRM & Enterprise Systems',
    'SEO Engineering',
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills-section' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="relative bg-dark text-white overflow-hidden"
      style={{ minHeight: '50vh' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        {/* Top Section - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20 md:mb-32">
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 font-mono mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm font-mono text-white/60 tracking-wide hover:text-white transition-colors cursor-default"
                >
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-center"
          >
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 font-mono mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-mono text-white/60 tracking-wide hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:text-right"
          >
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 font-mono mb-6">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:developwithhabiba@gmail.com"
                className="block text-sm font-mono text-white/60 hover:text-white transition-colors"
              >
                developwithhabiba@gmail.com
              </a>
              <a
                href="https://wa.me/923064222367"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-mono text-white/60 hover:text-white transition-colors"
              >
                +92 306 4222367
              </a>
              <a
                href="https://www.facebook.com/share/187JfBX5dV/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono text-white/60 hover:text-white transition-colors group"
              >
                <span className="relative">
                  Facebook
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/40 group-hover:bg-white transition-colors" />
                </span>
                <FiArrowUpRight className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
            <div className="flex items-center md:justify-end gap-2 mt-6">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/40 font-mono">Wazirabad, Pakistan</span>
            </div>
          </motion.div>
        </div>

        {/* Giant Branding Text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-20 md:mb-28 select-none"
        >
          <h2 className="text-[clamp(3rem,13vw,12rem)] font-black tracking-tighter lowercase leading-none text-white/[0.04]">
            habiba
          </h2>
        </motion.div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/[0.06]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-xs text-white/20 font-mono">
              © {currentYear} Habiba Asghar. All rights reserved.
            </p>
            <p className="text-xs text-white/20 font-mono mt-1">
              Built with ❤️
            </p>
          </motion.div>

          {/* Center */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="md:text-center"
          >
            <p className="text-xs text-white/20 font-mono">
              Full Stack Development · CRM Systems · Next.js
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="md:text-right"
          >
            <p className="text-xs text-white/20 font-mono">
              Australia · USA · India · Saudi Arabia
            </p>
          </motion.div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group"
        aria-label="Back to top"
      >
        <svg
          className="w-4 h-4 text-white/40 group-hover:text-white transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mailto with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.open(`mailto:developwithhabiba@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setFormData({ name: '', email: '', message: '' });
  };

  const socials = [
    { Icon: FaFacebookF, href: 'https://www.facebook.com/share/187JfBX5dV/', label: 'Facebook' },
    { Icon: FaWhatsapp, href: 'https://wa.me/923064222367', label: 'WhatsApp' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-primary py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-black/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-black/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-black/20 text-xs font-mono text-black/60 mb-6">
              Get in Touch
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
              Let's build<br />
              something <span className="text-white">amazing</span>
            </h2>

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Have a project in mind? Let's discuss how I can help bring your vision to life. 
              I'm always excited to collaborate on new projects.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              <a href="mailto:developwithhabiba@gmail.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <FiMail className="text-black group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-black/50 font-mono uppercase tracking-wider">Email</p>
                  <p className="text-white font-medium group-hover:text-black transition-colors">
                    developwithhabiba@gmail.com
                  </p>
                </div>
              </a>

              <a href="https://wa.me/923064222367" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <FaWhatsapp className="text-black group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-black/50 font-mono uppercase tracking-wider">WhatsApp</p>
                  <p className="text-white font-medium group-hover:text-black transition-colors">
                    +92 306 4222367
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-black/10 flex items-center justify-center">
                  <FiMapPin className="text-black" />
                </div>
                <div>
                  <p className="text-[10px] text-black/50 font-mono uppercase tracking-wider">Location</p>
                  <p className="text-white font-medium">Wazirabad, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Specialization */}
            <div className="mb-8">
              <p className="text-[10px] text-black/50 font-mono uppercase tracking-wider mb-2">Specialization</p>
              <p className="text-sm text-white/80">Full Stack Development · CRM Systems · Next.js</p>
            </div>

            {/* Clients from */}
            <div className="mb-8">
              <p className="text-[10px] text-black/50 font-mono uppercase tracking-wider mb-2">Clients From</p>
              <p className="text-sm text-white/80">Australia · USA · India · Saudi Arabia</p>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full bg-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <label
                  className={`absolute left-0 transition-all duration-300 font-mono text-xs uppercase tracking-wider pointer-events-none ${
                    focused === 'name' || formData.name
                      ? '-top-5 text-black/60 text-[10px]'
                      : 'top-4 text-white/50'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                  required
                  className="w-full bg-transparent border-b-2 border-black/20 focus:border-black py-4 text-white text-lg font-medium outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label
                  className={`absolute left-0 transition-all duration-300 font-mono text-xs uppercase tracking-wider pointer-events-none ${
                    focused === 'email' || formData.email
                      ? '-top-5 text-black/60 text-[10px]'
                      : 'top-4 text-white/50'
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                  required
                  className="w-full bg-transparent border-b-2 border-black/20 focus:border-black py-4 text-white text-lg font-medium outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  className={`absolute left-0 transition-all duration-300 font-mono text-xs uppercase tracking-wider pointer-events-none ${
                    focused === 'message' || formData.message
                      ? '-top-5 text-black/60 text-[10px]'
                      : 'top-4 text-white/50'
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="contact-message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-black/20 focus:border-black py-4 text-white text-lg font-medium outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-10 py-4 bg-black text-white rounded-full font-semibold text-sm tracking-wide hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300 mt-4"
                id="submit-contact-btn"
              >
                Send Message
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

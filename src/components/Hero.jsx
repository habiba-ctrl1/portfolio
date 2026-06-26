import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiPause, FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayback = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const scrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-image-1.png"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65 z-[1]" />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent z-[2]" />
        {/* Side vignette */}
        <div className="absolute inset-0 z-[2]" style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)'
        }} />
      </div>

      {/* Floating particles decoration */}
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 font-mono mb-4">
              Portfolio — 2026
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6"
          >
            <span className="block text-white">Hi, I'm a</span>
            <span className="block text-stroke mt-2">Full Stack</span>
            <span className="block text-stroke">Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg text-white/60 max-w-lg mb-10 leading-relaxed"
          >
            Full-Stack Developer building <span className="text-white font-medium">real booking websites</span> and web apps
            that businesses actually run on — from <span className="text-white font-medium">taxi &amp; event platforms</span> in
            Saudi Arabia to custom CRM dashboards. <span className="text-white font-medium">2+ years</span>,{' '}
            <span className="text-white font-medium">12+ projects</span> shipped end-to-end with React, Next.js &amp; Node.js —
            ready to build for your team or your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            {/* Primary CTA */}
            <button
              onClick={scrollToWork}
              className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-sm tracking-wide hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)] transition-all duration-300 relative overflow-hidden"
              id="view-work-btn"
            >
              <span className="relative z-10">See My Work →</span>
              <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 z-20">
                See My Work →
              </span>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full font-semibold text-sm tracking-wide glass-dark hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
              id="contact-me-btn"
            >
              Hire Me
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex gap-8 mt-12 pt-8 border-t border-white/10"
          >
            {[
              { value: '12+', label: 'Projects Delivered' },
              { value: '4+', label: 'Countries Served' },
              { value: '2+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-black text-white">{stat.value}</p>
                <p className="text-[10px] md:text-xs text-white/40 font-mono uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Play Reel Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={togglePlayback}
            className="group relative w-32 h-32 md:w-40 md:h-40 rounded-full glass-dark flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-[0_0_60px_rgba(255,42,42,0.4)]"
            id="play-reel-btn"
          >
            {/* Animated rotating ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-white/20 group-hover:border-primary/50 transition-colors duration-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                borderStyle: 'dashed',
                borderWidth: '1px',
              }}
            />
            <div className="absolute inset-3 rounded-full border border-white/10 group-hover:border-primary/30 transition-colors duration-500" />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle, rgba(255,42,42,0.15) 0%, transparent 70%)',
              }}
            />

            {/* Icon */}
            {isPlaying ? (
              <FiPause className="text-3xl md:text-4xl text-white relative z-10" />
            ) : (
              <FiPlay className="text-3xl md:text-4xl text-white ml-1 relative z-10" />
            )}
          </button>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-mono">
            {isPlaying ? 'PAUSE' : 'PLAY REEL'}
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 bounce-arrow z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono">
            Scroll
          </span>
          <FiChevronDown className="text-white/30 text-xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

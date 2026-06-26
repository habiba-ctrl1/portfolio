import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const stars = [
    { top: '10%', left: '5%', size: 24, delay: 0 },
    { top: '20%', right: '8%', size: 32, delay: 0.5 },
    { top: '60%', left: '3%', size: 20, delay: 1 },
    { top: '75%', right: '5%', size: 28, delay: 1.5 },
    { top: '40%', right: '12%', size: 18, delay: 0.8 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-primary overflow-hidden torn-paper-divider"
      style={{ paddingBottom: '100px' }}
    >
      {/* Decorative Stars */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute text-black/20 pointer-events-none"
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: star.delay,
          }}
        >
          <svg width={star.size} height={star.size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
          </svg>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - ID Badge */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="flex justify-center"
          >
            <div className="relative pt-32">
              {/* Lanyard */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex flex-col items-center">
                {/* Strap from top */}
                <div className="w-8 h-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-sm" />
                <div className="w-1.5 h-24 bg-gradient-to-b from-gray-900 to-black" />
                {/* Metal clip */}
                <div className="relative">
                  <div className="w-8 h-5 bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm shadow-lg" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-gray-600 rounded-b-sm" />
                </div>
              </div>

              {/* Badge Card */}
              <motion.div
                className="relative bg-dark rounded-2xl p-6 md:p-8 w-72 md:w-80 shadow-2xl cursor-pointer"
                style={{ transform: 'rotate(-3deg)' }}
                whileHover={{ rotate: 0, scale: 1.03, y: -5 }}
                transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
              >
                {/* Hole punch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary/30 border-2 border-gray-600 shadow-inner" />

                {/* Badge content */}
                <div className="mt-8">
                  {/* Profile Image */}
                  <div className="w-40 h-48 md:w-48 md:h-56 mx-auto rounded-xl overflow-hidden mb-6 border-2 border-white/10 shadow-xl">
                    <img
                      src="/images/hero-image-2.png"
                      alt="Habiba Asghar - Full Stack Developer"
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-wide">HABIBA ASGHAR</h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary font-mono">
                      Full Stack Developer
                    </p>
                    <p className="text-[10px] text-white/30 font-mono">
                      BS Computer Science · 2023–2027
                    </p>
                    <div className="flex items-center justify-center gap-2 pt-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-white/50 font-mono">Available for work</span>
                    </div>
                  </div>

                  {/* Barcode decoration */}
                  <div className="mt-6 flex items-center justify-center gap-[2px]">
                    {[...Array(30)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-white/20"
                        style={{
                          width: Math.random() > 0.5 ? '2px' : '1px',
                          height: '20px',
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-center text-[8px] text-white/20 font-mono mt-2 tracking-[0.2em]">
                    DEV-2026-HABIBA
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <h2 className="text-6xl md:text-8xl font-black text-black mb-8 leading-none">
              Hello!
            </h2>

            <div className="space-y-6 text-base md:text-lg leading-relaxed">
              <p className="text-white">
                I'm{' '}
                <span className="font-bold text-black uppercase tracking-wide">HABIBA ASGHAR</span>,
                a results-driven{' '}
                <span className="text-black font-semibold">Full Stack Developer</span>{' '}
                and SEO Engineer with 2+ years of hands-on experience building 
                production-grade web applications for international clients.
              </p>

              <p className="text-red-100/80">
                I architect scalable CRM systems, high-performance Next.js/React frontends, 
                and robust Node.js backends — owning every project end-to-end and shipping 
                independently. I've delivered <span className="text-white font-medium">12+ projects</span> across 
                security, automotive, healthcare, energy, SaaS, and event management.
              </p>

              <p className="text-red-100/80">
                I combine enterprise-level engineering with deep technical SEO to build digital 
                products that <span className="text-white font-medium">rank, convert, and scale</span> — 
                serving clients from{' '}
                <span className="text-white font-medium">Australia, USA, India & Saudi Arabia</span>.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-10">
              {[
                { value: '12+', label: 'Projects' },
                { value: '2+', label: 'Years Exp.' },
                { value: '4+', label: 'Countries' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                >
                  <p className="text-3xl md:text-4xl font-black text-black">{stat.value}</p>
                  <p className="text-xs text-white/70 font-mono uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technology Logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-12 md:gap-20 mt-24 flex-wrap"
          id="skills"
        >
          {[
            { Icon: FaReact, label: 'React' },
            { Icon: FaNodeJs, label: 'Node.js' },
            { Icon: SiMongodb, label: 'MongoDB' },
          ].map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center gap-3 cursor-pointer"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.2 }}
            >
              <Icon className="text-5xl md:text-7xl text-black/20 drop-shadow-lg" />
              <span className="text-xs font-mono text-black/40 uppercase tracking-wider">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

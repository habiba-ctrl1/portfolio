import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const processSteps = [
  {
    number: '01',
    title: 'Define',
    description:
      'Understanding your vision, goals, and requirements. I research the problem deeply and create a comprehensive roadmap for success.',
    position: 'right',
    rotation: 3,
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Crafting beautiful, intuitive interfaces. I create wireframes and high-fidelity prototypes that bring your vision to life.',
    position: 'left',
    rotation: -3,
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Writing clean, scalable code with modern frameworks. I develop robust applications using React, Node.js, and best practices.',
    position: 'right',
    rotation: 2,
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'Deploying with confidence. I ensure everything is optimized, tested, and ready to make a meaningful impact in the market.',
    position: 'left',
    rotation: -2,
  },
];

const ProcessCard = ({ step, index, isActive }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        x: step.position === 'left' ? -80 : 80,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
            }
          : {}
      }
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={`relative w-full max-w-sm mx-auto ${
        step.position === 'left'
          ? 'lg:ml-0 lg:mr-auto'
          : 'lg:mr-0 lg:ml-auto'
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.04, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transform: `rotate(${step.rotation}deg)` }}
        className={`relative rounded-[2rem] p-8 md:p-10 shadow-xl transition-all duration-500 cursor-pointer ${
          isActive
            ? 'bg-primary text-white shadow-[0_20px_60px_rgba(255,42,42,0.25)]'
            : 'bg-white text-black hover:shadow-2xl'
        }`}
      >
        {/* Hole punch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2">
          <div className={`w-6 h-6 rounded-full border-[3px] ${
            isActive ? 'border-white/30 bg-primary' : 'border-gray-200 bg-white'
          }`} />
        </div>

        {/* Content */}
        <div className="mt-8">
          <span
            className={`text-5xl md:text-6xl font-serif italic font-bold block ${
              isActive ? 'text-white/20' : 'text-black/8'
            }`}
          >
            {step.number}
          </span>

          <h3
            className={`text-2xl md:text-3xl font-bold mt-3 mb-4 ${
              isActive ? 'text-white' : 'text-black'
            }`}
          >
            {step.title}
          </h3>

          <p
            className={`text-sm md:text-base leading-relaxed ${
              isActive ? 'text-white/80' : 'text-gray-500'
            }`}
          >
            {step.description}
          </p>
        </div>

        {/* Active indicator dot */}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg hidden lg:block"
          />
        )}
      </motion.div>
    </motion.div>
  );
};

const Process = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeStep, setActiveStep] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      const step = Math.floor(value * 5) - 1;
      setActiveStep(Math.min(step, 3));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-white grid-pattern py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="inline-block px-5 py-2 rounded-full border border-gray-200 text-sm font-mono text-gray-500 shadow-sm">
              How we work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mt-8 mb-6 leading-tight max-w-4xl mx-auto"
          >
            Let me show you how I drive your{' '}
            <span className="text-primary">brand</span> to new heights
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg"
          >
            From concept to launch, I follow a streamlined process that ensures every project
            is built with precision, creativity, and purpose.
          </motion.p>

          {/* Hand-drawn arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.15 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden md:block absolute right-[15%] top-60"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path
                d="M10 10 C 30 5, 50 20, 40 50 C 35 65, 50 70, 65 60"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="5 5"
                fill="none"
              />
              <path d="M58 55 L65 60 L58 65" stroke="black" strokeWidth="2" fill="none" />
            </svg>
          </motion.div>
        </div>

        {/* Timeline with Cards */}
        <div className="relative">
          {/* SVG Timeline Path (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]">
            <motion.div
              className="w-full bg-primary/20"
              style={{ height: '100%', originY: 0 }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full bg-primary"
              style={{
                scaleY: pathLength,
                height: '100%',
                originY: 0,
              }}
            />
          </div>

          {/* Mobile center line */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-gray-100">
            <motion.div
              className="absolute top-0 left-0 w-full bg-primary"
              style={{
                scaleY: pathLength,
                height: '100%',
                originY: 0,
              }}
            />
          </div>

          {/* Process Cards */}
          <div className="space-y-16 md:space-y-24 lg:space-y-28 relative pl-12 lg:pl-0">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`lg:w-[45%] ${
                  step.position === 'left' ? 'lg:pr-16' : 'lg:pl-16 lg:ml-auto'
                }`}
              >
                {/* Timeline dot (mobile) */}
                <div className="lg:hidden absolute left-[18px] w-4 h-4 rounded-full bg-white border-2 border-primary shadow-md" 
                  style={{ marginTop: '2rem' }}
                />
                
                <ProcessCard
                  step={step}
                  index={index}
                  isActive={activeStep >= index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 md:mt-28"
        >
          <p
            className="text-2xl md:text-3xl font-serif italic text-gray-300"
            style={{ transform: 'rotate(-2deg)' }}
          >
            Ready to be delivered! ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;

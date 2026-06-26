import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [fillComplete, setFillComplete] = useState(false);

  useEffect(() => {
    // Water fill completes after 1.6s
    const fillTimer = setTimeout(() => {
      setFillComplete(true);
    }, 1800);

    // Start exit after fill + brief pause
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2600);

    // Complete after exit animation
    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 3400);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center"
          style={{
            zIndex: 100000,
            backgroundColor: '#FF2A2A',
          }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Dark transparent text (background) */}
          <motion.span
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter select-none"
            style={{
              color: 'rgba(0, 0, 0, 0.15)',
              position: 'absolute',
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
              transition: { duration: 0.4 },
            }}
          >
            Habiba.
          </motion.span>

          {/* White foreground text with water-fill clip-path */}
          <motion.span
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter select-none"
            style={{
              color: '#FFFFFF',
              position: 'absolute',
              clipPath: 'inset(100% 0 0 0)',
            }}
            animate={{
              clipPath: 'inset(0% 0 0 0)',
            }}
            transition={{
              duration: 1.6,
              ease: [0.65, 0, 0.35, 1],
              delay: 0.2,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
              transition: { duration: 0.4 },
            }}
          >
            Habiba.
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@assets/../attached_assets/Frame 141.png';

interface EntranceLoaderProps {
  onComplete: () => void;
}

export default function EntranceLoader({ onComplete }: EntranceLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // If user prefers reduced motion, skip animation immediately
    if (mediaQuery.matches) {
      onComplete();
      return;
    }

    // Auto-complete after animation duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for exit animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    // Handle ESC key to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500); // Wait for exit animation
  };

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black cursor-pointer"
          onClick={handleSkip}
          role="presentation"
          aria-label="Loading animation, press escape to skip"
        >
          {/* Dust/Particle Reassembly Animation */}
          <motion.div
            initial={{
              filter: 'blur(40px) brightness(2)',
              scale: 1.5,
              opacity: 0,
            }}
            animate={{
              filter: 'blur(0px) brightness(1)',
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: [0.4, 0.0, 0.2, 1],
            }}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-32 h-32 md:w-48 md:h-48 object-contain"
            />
          </motion.div>

          {/* Particle overlay effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
              filter: 'blur(2px)',
            }}
          />

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handleSkip}
            className="fixed bottom-8 right-8 text-white/50 hover:text-white text-sm transition-colors"
            aria-label="Skip animation"
          >
            Skip
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

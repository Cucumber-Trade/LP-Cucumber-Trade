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
      setTimeout(onComplete, 300); // Wait for exit animation
    }, 3000);

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
    setTimeout(onComplete, 300); // Wait for exit animation
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
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black cursor-pointer"
          onClick={handleSkip}
          role="presentation"
          aria-label="Loading animation, press escape to skip"
        >
          {/* Logo Animation */}
          <motion.img
            src={logo}
            alt="Logo"
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
            style={{ willChange: 'transform' }}
            initial={{
              rotate: 0,
              scale: 1,
              opacity: 1
            }}
            animate={{
              rotate: 1440, // Keep spinning at constant pace throughout
              scale: [1, 1.2, 12], // Scale up dramatically to create tunnel effect
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 3,
              times: [0, 0.2, 1],
              rotate: {
                duration: 3, // Spin for entire duration
                ease: 'linear', // Constant spin speed
                repeat: 0,
              },
              scale: {
                duration: 3,
                ease: [0.4, 0.0, 0.2, 1], // easeInOut for smooth acceleration into the center
              },
              opacity: {
                duration: 0.3,
                delay: 2.7, // Fade at the very end
                ease: 'easeOut',
              },
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

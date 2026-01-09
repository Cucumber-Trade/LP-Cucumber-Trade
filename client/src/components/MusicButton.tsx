import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MusicButton({ isPlaying, toggleMusic }) {
  return (
    <motion.button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full overflow-hidden transition-transform duration-300 ease-out"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3), 0 4px 10px rgba(0,0,0,0.3)',
      }}
      whileHover={{
        scale: 1.02,
        y: -1,
        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.4), 0 0 20px rgba(101, 228, 97, 0.19), 0 10px 25px rgba(0,0,0,0.4)',
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* Liquid fluid shine - simplified */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 pointer-events-none"
        initial={{ x: '-100%', skewX: -45 }}
        whileHover={{
          x: '200%',
          opacity: [0, 0.8, 0],
          transition: { duration: 0.6, ease: "linear" }
        }}
      />

      {/* Inner top highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

      {/* Icon */}
      <span className="relative z-10 flex items-center justify-center w-full h-full">
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-white" />
        ) : (
          <VolumeX className="w-4 h-4 text-white" />
        )}
      </span>

      {/* Pulse animation when playing */}
      {isPlaying && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-cyber-primary"
          animate={{
            scale: [1, 1.3],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      )}
    </motion.button>
  );
}

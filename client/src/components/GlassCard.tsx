import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  variant?: 'default' | 'strong' | 'subtle';
  glowColor?: string;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  variant = 'default',
  glowColor,
  className = '',
  hover = true,
  delay = 0
}: GlassCardProps) {
  const variants = {
    default: {
      background: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      blur: '20px',
    },
    strong: {
      background: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      blur: '24px',
    },
    subtle: {
      background: 'rgba(255, 255, 255, 0.01)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      blur: '16px',
    }
  };

  const style = variants[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover="hover"
      variants={{
        hover: { scale: 1.02, y: -4 }
      }}
      className={`relative rounded-3xl overflow-hidden ${className}`}
      style={{
        background: style.background,
        border: style.border,
        backdropFilter: `blur(${style.blur})`,
        WebkitBackdropFilter: `blur(${style.blur})`,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

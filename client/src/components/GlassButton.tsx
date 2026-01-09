import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  href?: string;
  target?: string;
}

export default function GlassButton({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon,
  href,
  target
}: GlassButtonProps) {
  const styles = {
    primary: {
      background: 'linear-gradient(135deg, rgba(101, 228, 97, 0.9), rgba(74, 159, 232, 0.9))',
      color: '#04070B',
      glow: '#65E461',
      border: '1px solid rgba(255, 255, 255, 0.4)',
    },
    secondary: {
      background: 'linear-gradient(135deg, rgba(235, 142, 75, 0.9), rgba(232, 107, 74, 0.9))',
      color: '#FFFFFF',
      glow: '#EB8E4B',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    outline: {
      background: 'rgba(255, 255, 255, 0.03)',
      color: '#FFFFFF',
      glow: '#65E461',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    }
  };

  const sizes = {
    sm: 'px-6 py-2 text-xs tracking-wider uppercase font-black',
    md: 'px-8 py-3.5 text-sm tracking-widest uppercase font-black',
    lg: 'px-10 py-5 text-base tracking-widest uppercase font-black'
  };

  const config = styles[variant];

  const isInactive = !href && !onClick;

  const commonProps = {
    className: `relative inline-block ${sizes[size]} rounded-full overflow-hidden ${className} transition-transform duration-300 ease-out ${isInactive ? 'cursor-not-allowed' : ''}`,
    style: {
      background: config.background,
      color: config.color,
      border: config.border,
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      boxShadow: `inset 0 1px 1px rgba(255,255,255,0.3), 0 4px 10px rgba(0,0,0,0.3)`,
      textDecoration: 'none',
    },
    whileHover: {
      scale: 1.02,
      y: -1,
      boxShadow: `inset 0 1px 2px rgba(255,255,255,0.4), 0 0 20px ${config.glow}30, 0 10px 25px rgba(0,0,0,0.4)`,
    },
    whileTap: { scale: 0.98 },
    title: isInactive ? 'Coming Soon' : undefined,
  };

  const content = (
    <>
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

      <span className="relative z-10 flex items-center gap-2 justify-center drop-shadow-sm">
        {children}
        {icon}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...commonProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      {...commonProps}
    >
      {content}
    </motion.button>
  );
}

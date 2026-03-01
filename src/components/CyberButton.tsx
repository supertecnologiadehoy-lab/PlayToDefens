import React from 'react';
import { motion } from 'motion/react';

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'emerald' | 'blue' | 'red' | 'slate';
}

export const CyberButton: React.FC<CyberButtonProps> = ({ children, onClick, color = "emerald", className = "", disabled = false, ...props }) => {
  const colorClasses = {
    emerald: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]',
    blue: 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]',
    red: 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]',
    slate: 'bg-slate-700 hover:bg-slate-600 text-white',
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={(e) => { e.stopPropagation(); onClick && onClick(e); }}
      disabled={disabled}
      className={`relative group px-6 py-3 font-mono font-bold uppercase tracking-wider overflow-hidden rounded-md transition-all duration-300 
      ${disabled ? 'opacity-50 cursor-not-allowed grayscale' : ''}
      ${colorClasses[color]}
      ${className}
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 justify-center">{children}</span>
      {!disabled && <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>}
    </motion.button>
  );
};

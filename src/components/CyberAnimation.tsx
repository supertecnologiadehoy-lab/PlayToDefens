import React from 'react';
import { motion } from 'motion/react';

export const CyberAnimation = () => {
  return (
    <div className="w-full flex justify-center items-center py-12 opacity-50">
      <svg width="300" height="150" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Nodes */}
        <motion.circle cx="50" cy="75" r="8" fill="#10b981" 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="150" cy="30" r="12" fill="#3b82f6" 
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} />
        <motion.circle cx="150" cy="120" r="10" fill="#ef4444" 
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} />
        <motion.circle cx="250" cy="75" r="15" fill="#8b5cf6" 
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 4, repeat: Infinity, delay: 1.5 }} />
        
        {/* Connections */}
        <motion.path d="M50 75 L150 30" stroke="#10b981" strokeWidth="2" strokeDasharray="5 5"
          animate={{ strokeDashoffset: [20, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
        <motion.path d="M50 75 L150 120" stroke="#10b981" strokeWidth="2" strokeDasharray="5 5"
          animate={{ strokeDashoffset: [20, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
        <motion.path d="M150 30 L250 75" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 5"
          animate={{ strokeDashoffset: [20, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} />
        <motion.path d="M150 120 L250 75" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 5"
          animate={{ strokeDashoffset: [20, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }} />
          
        {/* Data Packets */}
        <motion.circle cx="50" cy="75" r="3" fill="#ffffff"
          animate={{ cx: [50, 150], cy: [75, 30], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.circle cx="50" cy="75" r="3" fill="#ffffff"
          animate={{ cx: [50, 150], cy: [75, 120], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
        <motion.circle cx="150" cy="30" r="4" fill="#ffffff"
          animate={{ cx: [150, 250], cy: [30, 75], opacity: [1, 0] }} transition={{ duration: 1.2, repeat: Infinity, delay: 1 }} />
        <motion.circle cx="150" cy="120" r="4" fill="#ffffff"
          animate={{ cx: [150, 250], cy: [120, 75], opacity: [1, 0] }} transition={{ duration: 1.8, repeat: Infinity, delay: 1.5 }} />
          
        {/* Shield Icon in center */}
        <motion.path d="M150 60 L165 65 L165 80 C165 90 150 100 150 100 C150 100 135 90 135 80 L135 65 Z" fill="none" stroke="#10b981" strokeWidth="2"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
      </svg>
    </div>
  );
};

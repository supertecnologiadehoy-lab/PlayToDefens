import React from 'react';
import { motion } from 'motion/react';
import { Skull, Ghost, AlertTriangle, Zap, ChevronRight } from 'lucide-react';
import { CyberButton } from './CyberButton';

interface GameOverModalProps {
  score: number;
  onRetry: () => void;
  onMenu: () => void;
  title?: string;
  tip?: string;
  isVirusLaughing?: boolean;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({ score, onRetry, onMenu, title, tip, isVirusLaughing = false }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100] p-4"
  >
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      className={`bg-slate-800 border-2 ${isVirusLaughing ? 'border-purple-500 shadow-[0_0_100px_rgba(168,85,247,0.5)]' : 'border-red-500'} rounded-xl p-6 md:p-8 max-w-md w-full text-center relative overflow-hidden`}
    >
      
      {isVirusLaughing && (
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
           <Ghost className="w-64 h-64 animate-bounce text-purple-600" />
        </div>
      )}

      {isVirusLaughing ? (
          <div className="mb-6">
              <div className="relative inline-block">
                <Skull className="w-24 h-24 text-purple-500 animate-pulse mx-auto" />
                <div className="absolute -top-2 -right-12 text-purple-400 font-bold text-xl animate-bounce">HA HA HA!</div>
                <div className="absolute -bottom-2 -left-12 text-purple-400 font-bold text-xl animate-bounce delay-100">SYSTEM OWNED</div>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4">SISTEMA VULNERADO</h2>
          </div>
      ) : (
          <>
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title || "SIMULACIÓN FINALIZADA"}</h2>
          </>
      )}

      <p className="text-slate-400 mb-6 font-mono relative z-10 text-sm md:text-base">Resumen de sesión</p>
      
      <div className="bg-slate-900/80 p-4 rounded-lg mb-6 border border-slate-700 relative z-10">
        <p className="text-xs md:text-sm text-slate-500 uppercase mb-1">Puntuación Final</p>
        <p className="text-3xl md:text-4xl font-mono text-emerald-400">{score}</p>
      </div>

      <div className="bg-blue-900/30 border border-blue-500/30 p-4 rounded-lg mb-8 text-left relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 font-bold text-xs md:text-sm uppercase">Lección Aprendida</span>
        </div>
        <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{tip}</p>
      </div>

      <div className="flex flex-col gap-3 relative z-10">
        <CyberButton onClick={onRetry} color="emerald">Reiniciar</CyberButton>
        <CyberButton onClick={onMenu} color="blue">Volver al Menu</CyberButton>
      </div>
    </motion.div>
  </motion.div>
);

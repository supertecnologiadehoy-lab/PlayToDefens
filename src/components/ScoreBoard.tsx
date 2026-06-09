import React from 'react';
import { Heart } from 'lucide-react';

interface ScoreBoardProps {
  score: number;
  label?: string;
  lives?: number | null;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, label = "Puntuación", lives = null }) => (
  <div className="absolute top-4 right-4 bg-slate-900/90 border border-emerald-500/30 p-4 rounded-lg backdrop-blur-sm z-50">
    <div className="text-xs text-emerald-400 uppercase tracking-widest mb-1">{label}</div>
    <div className="text-3xl font-bold text-white font-mono flex items-center gap-4">
      {score.toString().padStart(6, '0')}
      {lives !== null && (
        <div className="flex gap-1 text-red-500 text-lg">
          {Array.from({ length: lives }).map((_, i) => <Heart key={i} size={20} fill="currentColor" />)}
        </div>
      )}
    </div>
  </div>
);

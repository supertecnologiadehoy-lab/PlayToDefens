import React, { useState, useEffect } from 'react';
import { ArrowLeft, Grid } from 'lucide-react';
import { ScoreBoard } from '../components/ScoreBoard';
import { SWITCHING_LABS } from '../data/gamesData';
import { motion } from 'motion/react';
import { sounds } from '../utils/sounds';

export const SwitchingLab = ({ onGameOver, onBack }) => {
  const [currentLabIdx, setCurrentLabIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [feedback, setFeedback] = useState<any>(null);
  
  const [labs, setLabs] = useState<any[]>([]);

  useEffect(() => {
      const shuffled = [...SWITCHING_LABS].sort(() => Math.random() - 0.5);
      setLabs(shuffled);
  }, []);

  const currentLab = labs[currentLabIdx];

  const handleCommandSelect = (action: string) => {
      if (feedback) return;

      if (action === currentLab.correctAction) {
          sounds.playSuccess();
          setFeedback({ status: 'success', msg: "Network Stable. Topología configurada correctamente." });
          setScore(s => s + 150);
      } else {
          sounds.playError();
          setFeedback({ status: 'error', msg: currentLab.failMsg });
          setLives(l => l - 1);
      }
  };

  const handleNext = () => {
      if (feedback.status === 'success' || lives > 0) {
          if (currentLabIdx < labs.length - 1) {
              setCurrentLabIdx(idx => idx + 1);
              setFeedback(null);
          } else {
              onGameOver(score + (feedback.status === 'success' ? 150 : 0), "Has superado todos los laboratorios L2. Excelente dominio de Switching y STP.");
          }
      } else {
          onGameOver(score, "Demasiados fallos en Capa 2. La red L2 se ha vuelto inestable.");
      }
  };

  if (!currentLab) return <div className="p-8 text-white">Cargando labs...</div>;

  return (
      <div className="w-full h-full bg-slate-900 p-4 md:p-6 flex flex-col items-center overflow-y-auto">
          <div className="w-full max-w-4xl flex justify-between items-center mb-6">
              <button onClick={onBack} className="p-2 bg-slate-800 rounded-full text-white hover:bg-slate-700">
                  <ArrowLeft />
              </button>
              <div className="text-center">
                  <h2 className="text-xl md:text-2xl font-bold text-blue-400">SWITCHING LAB</h2>
                  <p className="text-slate-400 text-[10px] md:text-xs font-mono">L2 TOPOLOGY - LAB {currentLabIdx + 1}/{labs.length}</p>
              </div>
              <ScoreBoard score={score} lives={lives} label="XP" />
          </div>

          <div className="w-full max-w-3xl bg-black rounded-lg border border-slate-700 shadow-2xl flex flex-col">
              
              <div className={`h-40 relative flex items-center justify-center border-b border-slate-800 transition-colors ${feedback?.status === 'error' ? 'bg-red-950/40' : (feedback?.status === 'success' ? 'bg-emerald-950/40' : 'bg-slate-900')}`}>
                  <div className="flex gap-16 items-center relative">
                      <svg className="absolute w-full h-full left-0 top-0 pointer-events-none" style={{zIndex: 0}}>
                          <line x1="20%" y1="50%" x2="80%" y2="50%" stroke={feedback?.status === 'error' ? '#ef4444' : (feedback?.status === 'success' ? '#10b981' : '#3b82f6')} strokeWidth="4" strokeDasharray={feedback ? "0" : "5,5"} className={!feedback ? "animate-pulse" : ""} />
                      </svg>
                      
                      <div className="relative z-10 flex flex-col items-center">
                          <div className={`p-4 rounded border-2 ${feedback?.status === 'error' ? 'border-red-500 bg-red-900' : 'border-slate-500 bg-slate-800'}`}>
                              <Grid className="text-white w-8 h-8" />
                          </div>
                          <span className="text-xs font-mono text-slate-400 mt-2">SW1</span>
                      </div>
                      
                      <div className="relative z-10 flex flex-col items-center">
                          <div className={`p-4 rounded border-2 ${feedback?.status === 'error' ? 'border-red-500 bg-red-900' : 'border-slate-500 bg-slate-800'}`}>
                              <Grid className="text-white w-8 h-8" />
                          </div>
                          <span className="text-xs font-mono text-slate-400 mt-2">SW2</span>
                      </div>
                  </div>
                  
                  {feedback?.status === 'error' && <div className="absolute top-4 font-bold text-red-500 animate-bounce tracking-widest uppercase">⚠️ Broadcast Storm / Error ⚠️</div>}
                  {feedback?.status === 'success' && <div className="absolute top-4 font-bold text-emerald-500 tracking-widest uppercase">✅ Network Stable ✅</div>}
              </div>

              <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-blue-400 font-bold mb-1">{currentLab.title}</h3>
                  <p className="text-slate-300 text-sm font-mono mb-6">{currentLab.desc}</p>

                  <div className="flex flex-col gap-3 mt-auto">
                      {!feedback ? (
                          currentLab.options.map((opt: string, idx: number) => (
                              <button
                                  key={idx}
                                  onClick={() => handleCommandSelect(opt)}
                                  className="text-left px-4 py-3 bg-slate-800 border border-slate-600 rounded hover:bg-blue-900 hover:border-blue-400 transition-all font-mono text-sm text-slate-200"
                              >
                                  <span className="text-blue-500 font-bold mr-2">SW(config)#</span>
                                  {opt}
                              </button>
                          ))
                      ) : (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-4 rounded flex justify-between items-center ${feedback.status === 'success' ? 'bg-emerald-900/20 border border-emerald-500' : 'bg-red-900/20 border border-red-500'}`}
                          >
                              <p className="text-sm font-mono text-slate-200">{feedback.msg}</p>
                              <button onClick={handleNext} className="ml-4 px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded font-bold shrink-0">
                                  {currentLabIdx < labs.length - 1 ? "NEXT LAB" : "FINISH"}
                              </button>
                          </motion.div>
                      )}
                  </div>
              </div>
          </div>
      </div>
  );
};

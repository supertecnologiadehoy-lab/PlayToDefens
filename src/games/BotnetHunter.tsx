import React, { useState, useEffect } from 'react';
import { ArrowLeft, Server, Skull, Globe, Shield, Clock } from 'lucide-react';
import { ScoreBoard } from '../components/ScoreBoard';
import { RESPONSE_QUESTIONS } from '../data/gamesData';
import { motion, AnimatePresence } from 'motion/react';
import { sounds } from '../utils/sounds';

export const BotnetHunter = ({ onGameOver, onBack }) => {
  const [servers, setServers] = useState(Array(9).fill({ status: 'clean' }));
  const [score, setScore] = useState(0);
  const [active, setActive] = useState(true);
  const [activeQuestion, setActiveQuestion] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [threatLevel, setThreatLevel] = useState(0);

  useEffect(() => {
      if (!active || activeQuestion) return;

      const infectionInterval = setInterval(() => {
          setServers(prev => {
              const newServers = [...prev];
              const cleanIndices = newServers.map((s, i) => s.status === 'clean' ? i : -1).filter(i => i !== -1);
              
              if (cleanIndices.length > 0) {
                 if (Math.random() < 0.3 + (score * 0.02)) {
                    const randomIndex = cleanIndices[Math.floor(Math.random() * cleanIndices.length)];
                    newServers[randomIndex] = { status: 'infected' };
                 }
              }
              return newServers;
          });
          
          setServers(prev => {
              const infectedCount = prev.filter(s => s.status === 'infected').length;
              if (infectedCount >= 6) {
                  setActive(false);
                  onGameOver(score, "Red saturada. Los sistemas han colapsado por falta de respuesta a incidentes.");
              }
              setThreatLevel(infectedCount);
              return prev;
          });

      }, 1000);

      return () => clearInterval(infectionInterval);
  }, [active, activeQuestion, score, onGameOver]);

  useEffect(() => {
      if (!activeQuestion) return;
      
      const timer = setInterval(() => {
          setTimeLeft(prev => {
              if (prev <= 1) {
                  clearInterval(timer);
                  setActiveQuestion(null);
                  onGameOver(score, "El atacante ha evadido tus defensas. El tiempo de respuesta es crítico en SOC.", true);
                  return 0;
              }
              return prev - 1;
          });
      }, 1000);

      return () => clearInterval(timer);
  }, [activeQuestion, score, onGameOver]);

  const handleServerClick = (index: number) => {
      if (!active || activeQuestion) return;
      
      if (servers[index].status === 'infected') {
          sounds.playClick();
          const randomQ = RESPONSE_QUESTIONS[Math.floor(Math.random() * RESPONSE_QUESTIONS.length)];
          setActiveQuestion({ ...randomQ, serverIndex: index });
          setTimeLeft(15);
      }
  };

  const handleAnswer = (isCorrect: boolean) => {
      if (isCorrect) {
          sounds.playSuccess();
          const newServers = [...servers];
          newServers[activeQuestion.serverIndex] = { status: 'clean' };
          setServers(newServers);
          setScore(s => s + 1);
          setActiveQuestion(null);
      } else {
          sounds.playError();
          setActiveQuestion(null);
          onGameOver(score, "Decisión incorrecta. Aplicar la tecnología incorrecta permite que el ataque persista.", true);
      }
  };

  return (
      <div className="w-full h-full bg-slate-900 p-4 flex flex-col items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 flex items-center justify-center"><Globe size={400} className="text-red-500 animate-pulse" /></div>
          
          <div className="w-full max-w-2xl flex justify-between items-center mb-8 z-10">
              <button onClick={onBack} className="p-2 bg-slate-800 rounded-full text-white hover:bg-slate-700"><ArrowLeft /></button>
              <div className="text-center">
                  <h2 className="text-xl md:text-2xl font-bold text-red-500 tracking-widest">INCIDENT RESPONSE</h2>
                  <p className="text-slate-400 text-xs hidden md:block">HAZ CLICK EN ROJOS PARA MITIGAR</p>
                  <p className="text-slate-400 text-xs md:hidden">TOCA LOS ROJOS</p>
              </div>
              <ScoreBoard score={score} label="Incidentes" />
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4 w-full max-w-md z-10">
              {servers.map((server, i) => (
                  <motion.button 
                      whileTap={{ scale: 0.95 }}
                      key={i} 
                      onClick={() => handleServerClick(i)} 
                      className={`aspect-square rounded-lg border-2 relative overflow-hidden transition-all duration-200 flex flex-col items-center justify-center
                      ${server.status === 'clean' ? 'bg-slate-800 border-slate-700 hover:border-emerald-500' : 'bg-red-900/50 border-red-500 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.6)] cursor-pointer hover:scale-105'}
                      `}
                  >
                      {server.status === 'clean' ? (
                          <Server className="w-8 h-8 md:w-12 md:h-12 text-slate-600" />
                      ) : (
                          <>
                              <Skull className="w-8 h-8 md:w-12 md:h-12 text-red-500 mb-1 md:mb-2 animate-bounce" />
                              <span className="text-[10px] md:text-xs font-bold text-red-500 bg-black/50 px-2 rounded">INFECTED</span>
                          </>
                      )}
                  </motion.button>
              ))}
          </div>

          <div className="w-full max-w-md mt-8 z-10 bg-slate-800 rounded-full h-4 overflow-hidden border border-slate-700">
              <div 
                  className="h-full bg-gradient-to-r from-emerald-500 via-yellow-500 to-red-600 transition-all duration-500"
                  style={{ width: `${(threatLevel / 6) * 100}%` }}
              ></div>
          </div>
          <p className="text-xs text-slate-400 mt-2">NIVEL DE AMENAZA (GAME OVER SI LLEGA AL 100%)</p>

          <AnimatePresence>
          {activeQuestion && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60] flex items-center justify-center p-4"
              >
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="bg-slate-900 border-2 border-blue-500 rounded-xl max-w-lg w-full p-6 shadow-[0_0_50px_rgba(59,130,246,0.4)]"
                  >
                      <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
                          <h3 className="text-lg md:text-xl font-bold text-blue-400 flex items-center gap-2">
                              <Shield className="w-5 h-5 md:w-6 md:h-6"/> DECISIÓN
                          </h3>
                          <div className="flex items-center gap-2 text-red-500 font-mono font-bold text-lg md:text-xl animate-pulse">
                              <Clock /> {timeLeft}s
                          </div>
                      </div>
                      
                      <p className="text-base md:text-lg text-white mb-2 font-bold">{activeQuestion.title}</p>
                      <p className="text-slate-300 mb-6 text-sm md:text-base">{activeQuestion.question}</p>

                      <div className="flex flex-col gap-3">
                          {activeQuestion.options.map((opt: any, idx: number) => (
                              <button
                                  key={idx}
                                  onClick={() => handleAnswer(opt.correct)}
                                  className="p-3 md:p-4 bg-slate-800 border border-slate-600 rounded-lg hover:bg-blue-900 hover:border-blue-400 hover:text-white transition-all text-left font-mono text-xs md:text-sm"
                              >
                                  {`> ${opt.label}`}
                              </button>
                          ))}
                      </div>
                  </motion.div>
              </motion.div>
          )}
          </AnimatePresence>
      </div>
  );
};

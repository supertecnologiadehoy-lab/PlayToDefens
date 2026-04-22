import React, { useState, useEffect } from 'react';
import { ArrowLeft, Activity, CheckCircle, XCircle } from 'lucide-react';
import { FORTIMANAGER_QUESTIONS } from '../data/gamesData';
import { motion } from 'motion/react';
import { sounds } from '../utils/sounds';
import { FortinetGUI } from '../components/FortinetGUIMockups';

const RetroFirewallAnimation = ({ status }: { status: string }) => {
  return (
      <div className="w-full h-32 md:h-40 bg-gray-950 border-t border-slate-700 relative overflow-hidden flex justify-center items-end" style={{ imageRendering: 'pixelated' }}>
          
          <div className="absolute left-2 md:left-10 bottom-0 w-12 md:w-16 h-28 bg-gray-800 border-2 border-red-900 flex flex-col justify-around p-1 shadow-2xl">
              {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-full h-3 md:h-4 bg-gray-700 flex items-center px-1 gap-1">
                      <div className={`w-1.5 h-1.5 rounded-full ${status === 'error' ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'} ${i%2===0?'animate-pulse':''}`}></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  </div>
              ))}
          </div>

          <div className="absolute right-2 md:right-10 bottom-0 w-16 md:w-20 h-24 bg-gray-800 border-2 border-red-900 p-2 shadow-2xl">
              <div className="grid grid-cols-4 gap-1 mt-1">
                  {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-2.5 h-2.5 bg-black border border-red-900 relative">
                          {status === 'error' && i === 5 && (
                              <div className="absolute -top-4 -left-2 text-yellow-400 text-sm md:text-lg font-bold animate-ping z-10">⚡</div>
                          )}
                      </div>
                  ))}
              </div>
          </div>

          <svg className="absolute w-full h-full pointer-events-none" style={{zIndex: 0}}>
              <path 
                  d="M 50% 80% Q 75% 100% 85% 60%" 
                  fill="none" 
                  stroke={status === 'error' ? '#ef4444' : '#ef4444'} 
                  strokeWidth="3" 
                  strokeDasharray="5,5" 
                  className={status === 'idle' ? 'animate-pulse' : ''} 
                  style={{ transformOrigin: 'center', transform: 'translateX(20px)' }}
              />
          </svg>

          <div className="relative z-10 flex flex-col items-center">
              <div className={`transition-transform duration-[400ms] ${status === 'correct' ? '-translate-y-4 md:-translate-y-6' : 'translate-y-0'}`}>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-red-100 border-2 border-red-900 flex items-center justify-center mx-auto relative z-20">
                      {status === 'idle' && <span className="text-[10px] md:text-xs font-bold text-red-900">o_o</span>}
                      {status === 'correct' && <span className="text-[10px] md:text-xs font-bold text-emerald-700">^_^</span>}
                      {status === 'error' && <span className="text-[10px] md:text-xs font-bold text-red-700">&gt;_&lt;</span>}
                      <div className="absolute -top-1 -left-1 w-10 md:w-12 h-2 md:h-3 bg-red-900"></div>
                      <div className="absolute top-2 -right-2 w-1.5 md:w-2 h-3 md:h-4 bg-red-500"></div>
                  </div>
                  
                  <div className="w-10 h-10 md:w-14 md:h-12 bg-red-300 border-2 border-red-900 mt-1 mx-auto flex justify-between px-1 relative z-10">
                      {status === 'correct' ? (
                          <>
                              <div className="w-2.5 md:w-3 h-6 md:h-8 bg-red-300 border-2 border-red-900 -mt-4 -ml-2 origin-bottom rotate-45"></div>
                              <div className="w-2.5 md:w-3 h-6 md:h-8 bg-red-300 border-2 border-red-900 -mt-4 -mr-2 origin-bottom -rotate-45"></div>
                          </>
                      ) : (
                          <>
                              <div className={`w-2.5 md:w-3 h-6 md:h-8 bg-red-300 border-2 border-red-900 mt-2 -ml-2 origin-top rotate-12 ${status==='idle'?'animate-pulse':''}`}></div>
                              <div className={`w-2.5 md:w-3 h-6 md:h-8 bg-red-300 border-2 border-red-900 mt-2 -mr-2 origin-top -rotate-12 ${status==='idle'?'animate-pulse':''}`}></div>
                          </>
                      )}
                  </div>
              </div>

              <div className="w-32 md:w-40 h-8 md:h-10 bg-[#8B0000] border-t-4 border-[#A52A2A] relative z-30 flex justify-center">
                  <div className="w-14 h-10 md:w-16 md:h-12 bg-red-200 border-2 border-red-500 -mt-8 flex flex-col items-center p-1 relative shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                      <div className={`w-full h-full ${status === 'error' ? 'bg-red-700' : 'bg-black'} border border-red-600 flex items-center justify-center overflow-hidden`}>
                          {status === 'error' ? (
                              <span className="text-[5px] md:text-[6px] font-bold text-white text-center leading-tight animate-pulse">POLICY<br/>ERROR</span>
                          ) : (
                              <span className="text-[6px] md:text-[8px] text-red-500 font-mono self-start ml-1 mt-1"># execute_</span>
                          )}
                      </div>
                  </div>
              </div>
          </div>

          {status === 'correct' && (
              <div className="absolute top-4 text-emerald-400 font-bold font-mono animate-bounce text-sm md:text-xl drop-shadow-md z-40">¡SYNC OK!</div>
          )}
          {status === 'error' && (
              <div className="absolute top-4 text-red-500 font-bold font-mono animate-pulse text-sm md:text-xl drop-shadow-md z-40">¡SYNC FAILED!</div>
          )}
      </div>
  );
};

export const FortiManagerChallenge = ({ onGameOver, onBack }: { onGameOver: (score: number, tip: string) => void, onBack: () => void }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
      const shuffled = [...FORTIMANAGER_QUESTIONS].sort(() => Math.random() - 0.5);
      setQuestions(shuffled);
  }, []);

  const handleOptionSelect = (option: any) => {
      if (showFeedback) return; 
      setSelectedOption(option);
      setShowFeedback(true);
      if (option.correct) {
          sounds.playSuccess();
      } else {
          sounds.playError();
      }
  };

  const handleNext = () => {
      if (!selectedOption) return;
      if (selectedOption.correct) {
          setScore(s => s + 100);
          if (currentQuestionIdx < questions.length - 1) {
              setCurrentQuestionIdx(idx => idx + 1);
              setShowFeedback(false);
              setSelectedOption(null);
          } else {
              onGameOver(score + 100, "¡Excelente! Has demostrado conocer profundamente la administración de FortiManager 7.6.");
          }
      } else {
          if (lives > 1) {
              setLives(l => l - 1);
              if (currentQuestionIdx < questions.length - 1) {
                  setCurrentQuestionIdx(idx => idx + 1);
                  setShowFeedback(false);
                  setSelectedOption(null);
              } else {
                  onGameOver(score, "Has completado el desafío, pero revisa tus conceptos de FortiManager y FortiOS.");
              }
          } else {
              onGameOver(score, "Demasiados fallos críticos en la infraestructura. Se requiere revisión de políticas.");
          }
      }
  };

  const currentQ = questions[currentQuestionIdx];

  let animStatus = 'idle';
  if (showFeedback && selectedOption) {
      animStatus = selectedOption.correct ? 'correct' : 'error';
  }

  if (!currentQ) return <div className="p-8 text-white">Cargando simulador Fortinet...</div>;

  return (
      <div className="w-full h-full bg-slate-900 p-4 md:p-6 flex flex-col items-center overflow-y-auto">
           <div className="w-full max-w-4xl flex justify-between items-center mb-6">
              <button onClick={onBack} className="p-2 bg-slate-800 rounded-full text-white hover:bg-slate-700">
                  <ArrowLeft />
              </button>
              <div className="text-center">
                  <h2 className="text-xl md:text-2xl font-bold text-red-500">FORTIMANAGER ADMIN</h2>
                  <p className="text-slate-400 text-[10px] md:text-xs font-mono">GLOBAL ADOM - PREGUNTA {currentQuestionIdx + 1}/{questions.length}</p>
              </div>
              <div className="flex gap-2 md:gap-4">
                   <div className="flex items-center gap-1 text-red-500">
                       <Activity className="animate-pulse" size={16}/>
                       <span className="font-mono font-bold text-sm">{lives} VIDAS</span>
                   </div>
                   <div className="text-emerald-400 font-mono font-bold text-sm hidden md:block">{score} XP</div>
              </div>
          </div>

          <div className="w-full max-w-4xl bg-black rounded-lg border border-red-900/50 shadow-[0_0_20px_rgba(220,38,38,0.15)] overflow-hidden flex flex-col relative">
              <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-red-900">
                  <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="ml-2 text-xs text-slate-400 font-mono">FortiManager GUI / CLI - {currentQ.category}</span>
              </div>

              <div className="p-4 md:p-6 font-mono text-sm md:text-base flex-grow flex flex-col">
                  <div className="text-slate-300 mb-6 border-b border-slate-800 pb-4 whitespace-pre-wrap">
                      <span className="text-red-400 font-bold">INFO &gt;&gt;</span> {currentQ.scenario}
                  </div>
                  
                  <FortinetGUI questionId={currentQ.id} codeBlock={currentQ.codeBlock} />

                  <div className="grid grid-cols-1 md:grid-cols-1 gap-3 mt-auto mb-4">
                      {!showFeedback ? (
                          currentQ.options.map((opt: any, idx: number) => (
                              <button
                                  key={idx}
                                  onClick={() => handleOptionSelect(opt)}
                                  className="text-left px-4 py-3 bg-slate-800 border border-slate-600 rounded hover:bg-slate-700 hover:border-red-500 hover:text-red-200 transition-all group flex items-center"
                              >
                                  <span className="text-slate-500 mr-3 group-hover:text-red-400">&gt;</span>
                                  {opt.label}
                              </button>
                          ))
                      ) : (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`p-4 rounded border ${selectedOption.correct ? 'bg-emerald-900/30 border-emerald-500' : 'bg-red-900/30 border-red-500'}`}
                          >
                              <div className="flex items-center gap-2 mb-2">
                                  {selectedOption.correct ? <CheckCircle className="text-emerald-500"/> : <XCircle className="text-red-500"/>}
                                  <h3 className={`font-bold ${selectedOption.correct ? 'text-emerald-400' : 'text-red-400'}`}>
                                      {selectedOption.correct ? 'CONFIRMADO' : 'INSTALL FAILED'}
                                  </h3>
                              </div>
                              <p className="text-slate-300 mb-4">{selectedOption.feedback}</p>
                              <button 
                                  onClick={handleNext}
                                  className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded font-bold transition-colors w-full md:w-auto z-10 relative shadow-lg"
                              >
                                  {currentQuestionIdx < questions.length - 1 ? "CONTINUAR..." : "FINALIZAR SESIÓN"}
                              </button>
                          </motion.div>
                      )}
                  </div>
              </div>

              <RetroFirewallAnimation status={animStatus} />

          </div>
      </div>
  );
};

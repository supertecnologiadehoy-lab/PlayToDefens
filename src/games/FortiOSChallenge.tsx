import React, { useState, useEffect } from 'react';
import { ArrowLeft, Activity, CheckCircle, XCircle } from 'lucide-react';
import { FORTIOS_QUESTIONS } from '../data/gamesData';
import { motion } from 'motion/react';
import { sounds } from '../utils/sounds';
import { FortinetGUI } from '../components/FortinetGUIMockups';
import { FORTIOS_EXHIBITS } from '../data/fortiosExhibits';

export const FortiOSChallenge = ({ onGameOver, onBack }: { onGameOver: (score: number, tip: string) => void, onBack: () => void }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5); // Started with 5 lives as recent user preference
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
      const shuffled = [...FORTIOS_QUESTIONS].sort(() => Math.random() - 0.5);
      setQuestions(shuffled);
  }, []);

  const currentQ = questions[currentQuestionIdx];
  const isMultiSelect = currentQ?.options.filter((o: any) => o.correct).length > 1;

  const handleOptionSelect = (option: any) => {
      if (showFeedback) return; 
      if (isMultiSelect) {
          if (selectedOptions.includes(option)) {
              setSelectedOptions(selectedOptions.filter(o => o !== option));
          } else {
              setSelectedOptions([...selectedOptions, option]);
          }
      } else {
          setSelectedOptions([option]);
          setShowFeedback(true);
          if (option.correct) {
              sounds.playSuccess();
          } else {
              sounds.playError();
          }
      }
  };

  const handleNext = () => {
      if (selectedOptions.length === 0) return;
      const correctOptionsCount = currentQ.options.filter((o: any) => o.correct).length;
      const selectedCorrectCount = selectedOptions.filter((o: any) => o.correct).length;
      const isAllCorrect = selectedCorrectCount === correctOptionsCount && selectedOptions.length === correctOptionsCount;

      if (isAllCorrect) {
          setScore(s => s + 100);
          if (currentQuestionIdx < questions.length - 1) {
              setCurrentQuestionIdx(idx => idx + 1);
              setShowFeedback(false);
              setSelectedOptions([]);
          } else {
              onGameOver(score + 100, "¡Excelente! Has demostrado dominar los conceptos básicos de FortiOS 7.6.");
          }
      } else {
          if (lives > 1) {
              setLives(l => l - 1);
              if (currentQuestionIdx < questions.length - 1) {
                  setCurrentQuestionIdx(idx => idx + 1);
                  setShowFeedback(false);
                  setSelectedOptions([]);
          } else {
                  onGameOver(score, "Has completado el desafío, pero tu configuración Firewall necesita revisión.");
              }
          } else {
              onGameOver(score, "Demasiados fallos de seguridad. La red interna ha sido comprometida.");
          }
      }
  };

  if (!currentQ) return <div className="p-8 text-white">Cargando simulador FortiOS...</div>;

  return (
      <div className="w-full h-full bg-slate-900 p-4 md:p-6 flex flex-col items-center overflow-y-auto">
           <div className="w-full max-w-4xl flex justify-between items-center mb-6">
              <button onClick={onBack} className="p-2 bg-slate-800 rounded-full text-white hover:bg-slate-700">
                  <ArrowLeft />
              </button>
              <div className="text-center">
                  <h2 className="text-xl md:text-2xl font-bold text-orange-500">FORTIOS ADMIN</h2>
                  <p className="text-slate-400 text-[10px] md:text-xs font-mono">VDOM ROOT - PREGUNTA {currentQ.id} ({currentQuestionIdx + 1}/{questions.length})</p>
              </div>
              <div className="flex gap-2 md:gap-4">
                   <div className="flex items-center gap-1 text-orange-500">
                       <Activity className="animate-pulse" size={16}/>
                       <span className="font-mono font-bold text-sm">{lives} VIDAS</span>
                   </div>
                   <div className="text-emerald-400 font-mono font-bold text-sm hidden md:block">{score} XP</div>
              </div>
          </div>

          <div className="w-full max-w-4xl bg-black rounded-lg border border-orange-900/50 shadow-[0_0_20px_rgba(249,115,22,0.15)] overflow-hidden flex flex-col relative">
              <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-orange-900">
                  <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="ml-2 text-xs text-slate-400 font-mono">FortiOS GUI / CLI - {currentQ.category}</span>
              </div>

              <div className="p-4 md:p-6 font-mono text-sm md:text-base flex-grow flex flex-col">
                  <div className="text-slate-300 mb-6 border-b border-slate-800 pb-4 whitespace-pre-wrap">
                      <span className="text-orange-400 font-bold">EVENTO &gt;&gt;</span> {currentQ.scenario}
                  </div>
                  
                  {/* Reuse FortinetGUI structure - we'll treat it as standard here initially 
                      or fallback to the CLI view built into FortinetGUI if codeBlock is passed */}
                  <FortinetGUI questionId={currentQ.id} codeBlock={currentQ.codeBlock || FORTIOS_EXHIBITS[currentQ.id as keyof typeof FORTIOS_EXHIBITS]} />

                  <div className="grid grid-cols-1 md:grid-cols-1 gap-3 mt-auto mb-4">
                      {!showFeedback ? (
                          <>
                            {currentQ.options.map((opt: any, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionSelect(opt)}
                                    className={`text-left px-4 py-3 bg-slate-800 border rounded transition-all group flex items-center ${
                                        selectedOptions.includes(opt) 
                                          ? 'border-orange-500 bg-slate-700 text-orange-200' 
                                          : 'border-slate-600 hover:bg-slate-700 hover:border-orange-500 hover:text-orange-200'
                                    }`}
                                >
                                    <span className="text-slate-500 mr-3 group-hover:text-orange-400">&gt;</span>
                                    {opt.label}
                                </button>
                            ))}
                            {isMultiSelect && (
                                <button 
                                    onClick={() => {
                                        if (selectedOptions.length === 0) return;
                                        setShowFeedback(true);
                                        const expectedCorrect = currentQ.options.filter((o: any) => o.correct).length;
                                        const actualCorrect = selectedOptions.filter((o: any) => o.correct).length;
                                        if (actualCorrect === expectedCorrect && selectedOptions.length === expectedCorrect) {
                                            sounds.playSuccess();
                                        } else {
                                            sounds.playError();
                                        }
                                    }}
                                    disabled={selectedOptions.length === 0}
                                    className="mt-4 px-6 py-2 bg-orange-600 disabled:bg-slate-700 disabled:text-slate-500 hover:bg-orange-500 text-white rounded font-bold transition-colors w-full z-10 relative shadow-lg"
                                >
                                    VERIFICAR SELECCIÓN
                                </button>
                            )}
                          </>
                      ) : (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`p-4 rounded border ${(selectedOptions.filter((o: any) => o.correct).length === currentQ.options.filter((o: any) => o.correct).length && selectedOptions.length === currentQ.options.filter((o: any) => o.correct).length) ? 'bg-emerald-900/30 border-emerald-500' : 'bg-red-900/30 border-red-500'}`}
                          >
                              <div className="flex items-center gap-2 mb-2">
                                  {(selectedOptions.filter((o: any) => o.correct).length === currentQ.options.filter((o: any) => o.correct).length && selectedOptions.length === currentQ.options.filter((o: any) => o.correct).length) ? <CheckCircle className="text-emerald-500"/> : <XCircle className="text-red-500"/>}
                                  <h3 className={`font-bold ${(selectedOptions.filter((o: any) => o.correct).length === currentQ.options.filter((o: any) => o.correct).length && selectedOptions.length === currentQ.options.filter((o: any) => o.correct).length) ? 'text-emerald-400' : 'text-red-400'}`}>
                                      {(selectedOptions.filter((o: any) => o.correct).length === currentQ.options.filter((o: any) => o.correct).length && selectedOptions.length === currentQ.options.filter((o: any) => o.correct).length) ? 'CONFIRMADO' : 'CFG FAILED'}
                                  </h3>
                              </div>
                              <p className="text-slate-300 mb-4 whitespace-pre-wrap">{currentQ.options.filter((o: any) => o.correct).map((o: any) => o.feedback || o.label).join('\n')}</p>
                              <button 
                                  onClick={handleNext}
                                  className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded font-bold transition-colors w-full md:w-auto z-10 relative shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                              >
                                  {currentQuestionIdx < questions.length - 1 ? "CONTINUAR..." : "FINALIZAR SESIÓN"}
                              </button>
                          </motion.div>
                      )}
                  </div>
              </div>

          </div>
      </div>
  );
};

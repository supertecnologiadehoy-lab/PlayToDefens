import React, { useState, useEffect } from 'react';
import { ArrowLeft, AlertTriangle, Search } from 'lucide-react';
import { ScoreBoard } from '../components/ScoreBoard';
import { SOC_CASES } from '../data/gamesData';
import { motion } from 'motion/react';
import { sounds } from '../utils/sounds';

export const SOCLogHunter = ({ onGameOver, onBack }) => {
  const [currentCaseIdx, setCurrentCaseIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [cases, setCases] = useState<any[]>([]);
  
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedResp, setSelectedResp] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<any>(null);

  useEffect(() => {
      const shuffled = [...SOC_CASES].sort(() => Math.random() - 0.5);
      setCases(shuffled);
  }, []);

  const currentCase = cases[currentCaseIdx];

  const handleSubmit = () => {
      if (feedback || !selectedType || !selectedResp) return;
      
      const typeCorrect = selectedType === currentCase.correctType;
      const respCorrect = selectedResp === currentCase.correctResp;

      if (typeCorrect && respCorrect) {
          sounds.playSuccess();
          setFeedback({ status: 'success', msg: currentCase.feedback });
          setScore(s => s + 200);
      } else {
          sounds.playError();
          setFeedback({ status: 'error', msg: `Análisis erróneo. Tipo real: ${currentCase.correctType}. Respuesta real: ${currentCase.correctResp}.` });
          setLives(l => l - 1);
      }
  };

  const handleNext = () => {
      if (feedback.status === 'success' || lives > 0) {
          if (currentCaseIdx < cases.length - 1) {
              setCurrentCaseIdx(idx => idx + 1);
              setSelectedType(null);
              setSelectedResp(null);
              setFeedback(null);
          } else {
              onGameOver(score + (feedback.status === 'success' ? 200 : 0), "Has completado la guardia en el SOC exitosamente.");
          }
      } else {
          onGameOver(score, "Mala toma de decisiones. El atacante ha logrado evadir el SOC y comprometer la red.");
      }
  };

  if (!currentCase) return <div className="p-8 text-white">Cargando logs...</div>;

  return (
      <div className="w-full h-full bg-slate-900 p-4 md:p-6 flex flex-col items-center overflow-y-auto">
          <div className="w-full max-w-5xl flex justify-between items-center mb-6">
              <button onClick={onBack} className="p-2 bg-slate-800 rounded-full text-white hover:bg-slate-700">
                  <ArrowLeft />
              </button>
              <div className="text-center">
                  <h2 className="text-xl md:text-2xl font-bold text-red-500">SOC LOG HUNTER</h2>
                  <p className="text-slate-400 text-[10px] md:text-xs font-mono">SIEM CONSOLE - ALERT {currentCaseIdx + 1}/{cases.length}</p>
              </div>
              <ScoreBoard score={score} lives={lives} label="XP" />
          </div>

          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-4">
                  <div className="bg-slate-800 border-l-4 border-yellow-500 p-4 rounded shadow-lg">
                      <h3 className="text-yellow-500 font-bold uppercase text-sm mb-1 flex items-center gap-2">
                          <AlertTriangle size={16}/> New Alert Triggered
                      </h3>
                      <p className="text-slate-200 font-mono">{currentCase.alert}</p>
                  </div>

                  <div className="bg-black border border-slate-700 rounded p-4 flex-grow shadow-lg">
                      <h4 className="text-xs text-slate-500 font-mono uppercase border-b border-slate-800 pb-2 mb-3 flex items-center gap-2">
                          <Search size={14}/> Raw Logs
                      </h4>
                      <pre className="text-emerald-500 font-mono text-xs whitespace-pre-wrap overflow-x-auto leading-relaxed">
                          {currentCase.logs}
                      </pre>
                  </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded p-4 md:p-6 shadow-lg flex flex-col">
                  <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm border-b border-slate-700 pb-2">Investigación</h3>
                  
                  <div className="mb-6">
                      <label className="block text-slate-400 text-xs font-mono mb-2 uppercase">1. Identificar Incidente (IOC)</label>
                      <div className="flex flex-wrap gap-2">
                          {currentCase.typeOpts.map((opt: string) => (
                              <button 
                                  key={opt}
                                  disabled={!!feedback}
                                  onClick={() => setSelectedType(opt)}
                                  className={`px-3 py-2 text-xs md:text-sm font-mono rounded border ${selectedType === opt ? 'bg-red-900 border-red-500 text-white' : 'bg-slate-900 border-slate-600 text-slate-400 hover:border-slate-400'}`}
                              >
                                  {opt}
                              </button>
                          ))}
                      </div>
                  </div>

                  <div className="mb-6">
                      <label className="block text-slate-400 text-xs font-mono mb-2 uppercase">2. Acción de Mitigación</label>
                      <div className="flex flex-col gap-2">
                          {currentCase.respOpts.map((opt: string) => (
                              <button 
                                  key={opt}
                                  disabled={!!feedback}
                                  onClick={() => setSelectedResp(opt)}
                                  className={`px-4 py-3 text-left text-xs md:text-sm font-mono rounded border transition-colors ${selectedResp === opt ? 'bg-blue-900 border-blue-500 text-white' : 'bg-slate-900 border-slate-600 text-slate-400 hover:border-slate-400'}`}
                              >
                                  &gt; {opt}
                              </button>
                          ))}
                      </div>
                  </div>

                  <div className="mt-auto pt-4">
                      {!feedback ? (
                          <button 
                              onClick={handleSubmit} 
                              disabled={!selectedType || !selectedResp}
                              className={`w-full py-3 rounded font-bold uppercase tracking-widest ${(!selectedType || !selectedResp) ? 'bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]'}`}
                          >
                              EJECUTAR ACCIÓN
                          </button>
                      ) : (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-4 rounded border ${feedback.status === 'success' ? 'bg-emerald-900/30 border-emerald-500' : 'bg-red-900/30 border-red-500'}`}
                          >
                              <p className="text-slate-200 text-sm mb-4 font-mono">{feedback.msg}</p>
                              <button onClick={handleNext} className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-white rounded font-bold">
                                  {currentCaseIdx < cases.length - 1 ? "SIGUIENTE ALERTA" : "FINALIZAR TURNO"}
                              </button>
                          </motion.div>
                      )}
                  </div>
              </div>

          </div>
      </div>
  );
};

import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { ScoreBoard } from '../components/ScoreBoard';
import { PACKET_PUZZLE_CHALLENGES } from '../data/gamesData';
import { motion } from 'motion/react';
import { sounds } from '../utils/sounds';

export const PacketPuzzle = ({ onGameOver, onBack }) => {
  const [currentChallengeIdx, setCurrentChallengeIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [challenges, setChallenges] = useState<any[]>([]);
  
  const [inputCIDR, setInputCIDR] = useState('');
  const [inputMask, setInputMask] = useState('');
  const [inputFirst, setInputFirst] = useState('');
  const [inputBroadcast, setInputBroadcast] = useState('');
  const [feedback, setFeedback] = useState<any>(null);

  useEffect(() => {
      const shuffled = [...PACKET_PUZZLE_CHALLENGES].sort(() => Math.random() - 0.5);
      setChallenges(shuffled);
  }, []);

  const currentQ = challenges[currentChallengeIdx];

  const handleCheck = () => {
      if (feedback) return; 
      
      const isCorrect = 
          inputCIDR === currentQ.correctCIDR &&
          inputMask === currentQ.correctMask &&
          inputFirst === currentQ.correctFirst &&
          inputBroadcast === currentQ.correctBroadcast;

      if (isCorrect) {
          sounds.playSuccess();
          setFeedback({ status: 'success', msg: "¡Subnetting Correcto! Red dimensionada óptimamente." });
          setScore(s => s + 100);
      } else {
          sounds.playError();
          setFeedback({ status: 'error', msg: "Error de cálculo. Revisa bits prestados y rangos." });
          setLives(l => l - 1);
      }
  };

  const handleNext = () => {
      if (feedback.status === 'success' || lives > 0) {
          if (currentChallengeIdx < challenges.length - 1) {
              setCurrentChallengeIdx(idx => idx + 1);
              setInputCIDR('');
              setInputMask('');
              setInputFirst('');
              setInputBroadcast('');
              setFeedback(null);
          } else {
              onGameOver(score + (feedback.status === 'success' ? 100 : 0), "Has completado todos los retos de Subnetting. ¡Excelente dominio de IPv4!");
          }
      } else {
          onGameOver(score, "Superposición de redes. Fallo en el cálculo de subredes críticos.");
      }
  };

  if (!currentQ) return <div className="p-8 text-white">Cargando retos...</div>;

  return (
      <div className="w-full h-full bg-slate-900 p-4 md:p-6 flex flex-col items-center overflow-y-auto">
          <div className="w-full max-w-4xl flex justify-between items-center mb-6">
              <button onClick={onBack} className="p-2 bg-slate-800 rounded-full text-white hover:bg-slate-700">
                  <ArrowLeft />
              </button>
              <div className="text-center">
                  <h2 className="text-xl md:text-2xl font-bold text-emerald-400">PACKET PUZZLE</h2>
                  <p className="text-slate-400 text-[10px] md:text-xs font-mono">SUBNETTING CHALLENGE - RETO {currentChallengeIdx + 1}/{challenges.length}</p>
              </div>
              <ScoreBoard score={score} lives={lives} label="XP" />
          </div>

          <div className="w-full max-w-2xl bg-black rounded-lg border border-slate-700 shadow-2xl flex flex-col">
              <div className="bg-slate-800 px-4 py-3 border-b border-slate-700">
                  <h3 className="text-white font-mono font-bold text-lg"><span className="text-emerald-500">BASE NETWORK:</span> {currentQ.base}</h3>
                  <p className="text-slate-400 font-mono mt-1"><span className="text-blue-400">TARGET:</span> {currentQ.req}</p>
              </div>

              <div className="p-4 md:p-6 flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                          <label className="text-xs font-mono text-slate-500 uppercase">Nuevo CIDR</label>
                          <select value={inputCIDR} onChange={e => setInputCIDR(e.target.value)} disabled={!!feedback} className="bg-slate-800 border border-slate-600 text-white p-2 rounded font-mono focus:border-emerald-500 outline-none">
                              <option value="">-- Seleccionar --</option>
                              {['/23', '/24', '/25', '/26', '/27', '/28', '/29', '/30'].map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                      </div>
                      <div className="flex flex-col gap-1">
                          <label className="text-xs font-mono text-slate-500 uppercase">Máscara (Decimal)</label>
                          <select value={inputMask} onChange={e => setInputMask(e.target.value)} disabled={!!feedback} className="bg-slate-800 border border-slate-600 text-white p-2 rounded font-mono focus:border-emerald-500 outline-none">
                              <option value="">-- Seleccionar --</option>
                              {['255.255.254.0', '255.255.255.0', '255.255.255.128', '255.255.255.192', '255.255.255.224', '255.255.255.240', '255.255.255.248', '255.255.255.252'].map(m => <option key={m} value={m}>{m}</option>)}
                          </select>
                      </div>
                      <div className="flex flex-col gap-1">
                          <label className="text-xs font-mono text-slate-500 uppercase">Primera IP Útil (Gateway)</label>
                          <input type="text" value={inputFirst} onChange={e => setInputFirst(e.target.value)} disabled={!!feedback} placeholder="ej. 192.168.1.1" className="bg-slate-800 border border-slate-600 text-white p-2 rounded font-mono focus:border-emerald-500 outline-none" />
                      </div>
                      <div className="flex flex-col gap-1">
                          <label className="text-xs font-mono text-slate-500 uppercase">Broadcast Address</label>
                          <input type="text" value={inputBroadcast} onChange={e => setInputBroadcast(e.target.value)} disabled={!!feedback} placeholder="ej. 192.168.1.255" className="bg-slate-800 border border-slate-600 text-white p-2 rounded font-mono focus:border-emerald-500 outline-none" />
                      </div>
                  </div>

                  {!feedback ? (
                      <button onClick={handleCheck} className="mt-4 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded uppercase tracking-wider transition-colors">
                          VERIFICAR SUBNET
                      </button>
                  ) : (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-4 p-4 rounded border ${feedback.status === 'success' ? 'bg-emerald-900/30 border-emerald-500' : 'bg-red-900/30 border-red-500'} flex flex-col`}
                      >
                          <div className="flex items-center gap-2 mb-2">
                              {feedback.status === 'success' ? <CheckCircle className="text-emerald-500"/> : <XCircle className="text-red-500"/>}
                              <h3 className={`font-bold ${feedback.status === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                                  {feedback.status === 'success' ? 'CÁLCULO EXACTO' : 'ERROR DE DIMENSIONAMIENTO'}
                              </h3>
                          </div>
                          <p className="text-slate-300 text-sm mb-4">{feedback.msg}</p>
                          <button onClick={handleNext} className="self-end px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded font-bold transition-colors">
                              {currentChallengeIdx < challenges.length - 1 ? "SIGUIENTE RETO" : "FINALIZAR"}
                          </button>
                      </motion.div>
                  )}
              </div>
          </div>
      </div>
  );
};

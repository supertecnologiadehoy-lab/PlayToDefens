import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Terminal, Shield, Zap, ChevronRight, Heart } from 'lucide-react';
import { CyberButton } from '../components/CyberButton';
import { ATTACK_TYPES, MITIGATION_OPTIONS } from '../data/gamesData';
import { motion, AnimatePresence } from 'motion/react';
import { sounds } from '../utils/sounds';

export const FirewallRacer = ({ onGameOver, onBack }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(0);
  const [compromise, setCompromise] = useState(0);
  
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);
  const [activeMitigation, setActiveMitigation] = useState('EDR/AV');
  const [showLevel2Intro, setShowLevel2Intro] = useState(false);
  const [showLevel3Intro, setShowLevel3Intro] = useState(false);
  const [popupData, setPopupData] = useState<any>(null);

  const gameState = useRef({
      playerX: 0,
      bullets: [] as any[],
      enemies: [] as any[],
      floatingTexts: [] as any[],
      stars: [] as any[],
      score: 0,
      compromise: 0,
      roadOffset: 0,
      gameOver: false,
      isPaused: false, 
      keys: {} as Record<string, boolean>,
      lastWidth: 0,
      spawnCounts: {} as Record<string, number>, 
      level: 1, 
      level2Lives: 3,
      activeMitigation: 'EDR/AV',
      lastShot: 0,
      lastEnemyClearedTime: 0
  });

  const handleTouchStart = (key: string) => { gameState.current.keys[key] = true; };
  const handleTouchEnd = (key: string) => { gameState.current.keys[key] = false; };

  useEffect(() => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      let animationFrameId: number;
      let resizeObserver: ResizeObserver;

      const resize = () => {
          if (!container || !canvas) return;
          
          const rect = container.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) return; 

          const oldWidth = gameState.current.lastWidth || rect.width;
          
          canvas.width = rect.width;
          canvas.height = rect.height;

          if (!gameState.current.playerX) {
              gameState.current.playerX = canvas.width / 2;
          } else {
              const ratio = gameState.current.playerX / oldWidth;
              gameState.current.playerX = ratio * canvas.width;
          }
          
          gameState.current.lastWidth = canvas.width;
      };

      resizeObserver = new ResizeObserver(() => {
          window.requestAnimationFrame(resize);
      });
      resizeObserver.observe(container);
      window.addEventListener('resize', resize);
      window.addEventListener('orientationchange', () => setTimeout(resize, 100));
      resize();

      if (gameState.current.stars.length === 0) {
          for(let i=0; i<60; i++) {
              gameState.current.stars.push({
                  x: Math.random() * (canvas.width || window.innerWidth),
                  y: Math.random() * (canvas.height || window.innerHeight),
                  speed: Math.random() * 1 + 0.2
              });
          }
      }

      const handleKeyDown = (e: KeyboardEvent) => { gameState.current.keys[e.code] = true; };
      const handleKeyUp = (e: KeyboardEvent) => { gameState.current.keys[e.code] = false; };
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      const drawHackerDesk = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
          ctx.save();
          ctx.translate(x, y);

          ctx.shadowBlur = 15;
          ctx.shadowColor = '#0ea5e9'; 
          ctx.fillStyle = '#0ea5e9';
          const flameHeight = gameState.current.isPaused ? 9 : (Math.random() * 12 + 6);
          ctx.fillRect(-28, 20, 6, flameHeight);
          ctx.fillRect(22, 20, 6, flameHeight);
          ctx.shadowBlur = 0;

          ctx.shadowBlur = 10;
          ctx.shadowColor = '#0f172a';
          ctx.fillStyle = '#334155'; 
          ctx.beginPath();
          ctx.moveTo(-30, 10);
          ctx.lineTo(30, 10);
          ctx.lineTo(35, -20);
          ctx.lineTo(-35, -20);
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.strokeStyle = '#3b82f6'; 
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.fillStyle = '#94a3b8'; 
          ctx.fillRect(-14, -18, 28, 12); 
          
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#10b981';
          ctx.fillStyle = '#022c22';
          ctx.fillRect(-12, -22, 24, 8); 
          ctx.shadowBlur = 0;
          
          ctx.fillStyle = '#10b981';
          ctx.font = 'bold 6px monospace';
          ctx.fillText('01', -9, -16);
          ctx.fillText('10', 1, -16);

          ctx.fillStyle = '#000000'; 
          ctx.fillRect(-38, -14, 8, 12);  
          ctx.fillRect(30, -14, 8, 12);   
          ctx.fillRect(-38, 6, 8, 12);    
          ctx.fillRect(30, 6, 8, 12);     
          
          ctx.fillStyle = '#64748b';
          ctx.fillRect(-36, -12, 4, 8);
          ctx.fillRect(32, -12, 4, 8);
          ctx.fillRect(-36, 8, 4, 8);
          ctx.fillRect(32, 8, 4, 8);

          ctx.fillStyle = '#991b1b'; 
          ctx.fillRect(-14, 8, 28, 22); 
          ctx.fillStyle = '#000000'; 
          ctx.fillRect(-10, 8, 20, 22);
          
          ctx.fillStyle = '#1e293b'; 
          ctx.beginPath();
          ctx.arc(0, 10, 13, 0, Math.PI * 2); 
          ctx.fill();
          
          ctx.strokeStyle = '#1e293b';
          ctx.lineWidth = 6;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(-11, 8); 
          ctx.lineTo(-14, -2); 
          ctx.lineTo(-6, -12); 
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(11, 8); 
          ctx.lineTo(14, -2); 
          ctx.lineTo(6, -12); 
          ctx.stroke();

          ctx.fillStyle = '#0f172a'; 
          ctx.beginPath();
          ctx.arc(0, 2, 9, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = '#0ea5e9'; 
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(0, 2, 10, Math.PI, 0); 
          ctx.stroke();
          ctx.fillStyle = '#0ea5e9'; 
          ctx.shadowBlur = 5;
          ctx.shadowColor = '#0ea5e9';
          ctx.fillRect(-12, -1, 3, 7); 
          ctx.fillRect(9, -1, 3, 7); 
          ctx.shadowBlur = 0;

          ctx.shadowBlur = 10;
          ctx.shadowColor = '#10b981';
          ctx.fillStyle = '#10b981';
          ctx.fillRect(-6, -5, 12, 4);
          ctx.shadowBlur = 0;

          ctx.restore();
      };

      const render = () => {
          const state = gameState.current;
          const width = canvas.width;
          const height = canvas.height;

          if (state.gameOver) return;

          ctx.fillStyle = '#0f172a';
          ctx.fillRect(0, 0, width, height);

          ctx.fillStyle = '#ffffff';
          state.stars.forEach(star => {
              if (!state.isPaused) {
                  star.y += star.speed;
                  if (star.y > height) star.y = 0;
              }
              ctx.globalAlpha = 0.3;
              ctx.fillRect(star.x, star.y, 2, 2);
          });
          ctx.globalAlpha = 1.0;

          if (!state.isPaused) {
              state.roadOffset = (state.roadOffset + 1.5) % 60; 
          }
          
          ctx.save();
          const grad = ctx.createLinearGradient(0, 0, 0, height);
          grad.addColorStop(0, 'rgba(15, 23, 42, 0)');
          grad.addColorStop(1, 'rgba(30, 41, 59, 0.8)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);

          ctx.strokeStyle = '#3b82f6'; 
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.2;
          
          for(let y = state.roadOffset; y < height; y += 60) {
              ctx.beginPath();
              ctx.moveTo(0, y);
              ctx.lineTo(width, y);
              ctx.stroke();
          }
          for(let x = 0; x < width; x += 60) {
              ctx.beginPath();
              ctx.moveTo(x, 0);
              ctx.lineTo(x, height);
              ctx.stroke();
          }
          ctx.restore();

          const playerY = height - ((state.level === 2 || state.level === 3) ? 240 : 140);

          if (!state.isPaused) {
              if (state.keys['ArrowLeft']) state.playerX -= 4;
              if (state.keys['ArrowRight']) state.playerX += 4;
              state.playerX = Math.max(width * 0.1, Math.min(width * 0.9, state.playerX));

              if (state.keys['Space']) {
                  if (!state.lastShot || Date.now() - state.lastShot > 350) { 
                      sounds.playShoot();
                      state.bullets.push({ 
                          x: state.playerX, 
                          y: playerY - 15,
                          char: Math.random() > 0.5 ? '0' : '1',
                          trailChar: Math.random() > 0.5 ? '1' : '0',
                          mitigation: (state.level === 2 || state.level === 3) ? state.activeMitigation : null
                      });
                      state.lastShot = Date.now();
                  }
              }

              const now = Date.now();
              let canSpawn = true;

              if (state.level === 2 || state.level === 3) {
                  if (state.enemies.length >= 1) {
                      canSpawn = false;
                      state.lastEnemyClearedTime = now;
                  } else {
                      if (now - (state.lastEnemyClearedTime || 0) < 2200) {
                          canSpawn = false;
                      }
                  }
              }

              const spawnChance = (state.level === 2 || state.level === 3) ? 0.02 : 0.006 + (state.score * 0.000001);

              if (canSpawn && Math.random() < spawnChance) { 
                  let unlockedTier = 1;
                  if (state.score >= 400 || state.level === 2 || state.level === 3) unlockedTier = 2; 
                  if (state.score >= 900 || state.level === 2 || state.level === 3) unlockedTier = 3; 

                  const spawnLimit = 2;

                  let availableAttacks = ATTACK_TYPES.filter(a => 
                      a.tier <= unlockedTier && 
                      (state.spawnCounts[a.id] || 0) < spawnLimit
                  );

                  if (availableAttacks.length === 0) {
                      if (unlockedTier === 1) unlockedTier = 2;
                      else if (unlockedTier === 2) unlockedTier = 3;
                      
                      availableAttacks = ATTACK_TYPES.filter(a => 
                          a.tier <= unlockedTier && 
                          (state.spawnCounts[a.id] || 0) < spawnLimit
                      );
                  }

                  if (availableAttacks.length > 0) {
                      const attackType = availableAttacks[Math.floor(Math.random() * availableAttacks.length)];
                      state.spawnCounts[attackType.id] = (state.spawnCounts[attackType.id] || 0) + 1;

                      let enemySpeed = Math.random() * 0.5 + 0.6;
                      if (state.level === 2 || state.level === 3) enemySpeed *= 0.35; 

                      state.enemies.push({ 
                          x: Math.random() * (width * 0.7) + (width * 0.15), 
                          y: -50,
                          attack: attackType,
                          speed: enemySpeed,
                          currentStep: 0
                      });
                  }
              }
          }

          for (let i = state.bullets.length - 1; i >= 0; i--) {
              let b = state.bullets[i];
              if (!state.isPaused) b.y -= 7; 
              
              ctx.shadowBlur = 10;
              ctx.shadowColor = '#10b981';
              ctx.fillStyle = '#10b981';
              
              if (state.level === 2 || state.level === 3) {
                  ctx.font = 'bold 12px sans-serif';
                  ctx.textAlign = 'center';
                  ctx.fillText(b.mitigation, b.x, b.y);
              } else {
                  ctx.font = 'bold 18px monospace';
                  ctx.fillText(b.char, b.x - 5, b.y);
                  ctx.shadowBlur = 0;
                  ctx.globalAlpha = 0.5;
                  ctx.fillText(b.trailChar, b.x - 5, b.y + 15);
                  ctx.globalAlpha = 1.0;
              }

              if(b.y < -20) state.bullets.splice(i, 1);
          }

          drawHackerDesk(ctx, state.playerX, playerY);

          if (state.level === 3 && state.enemies.length > 0) {
              const activeE = state.enemies[0];
              ctx.save();
              ctx.translate(state.playerX, playerY + 45);
              
              ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
              ctx.strokeStyle = '#a855f7';
              ctx.lineWidth = 1;
              ctx.fillRect(-50, -10, 100, 20);
              ctx.strokeRect(-50, -10, 100, 20);

              ctx.fillStyle = '#d8b4fe';
              ctx.font = 'bold 10px monospace';
              ctx.textAlign = 'center';
              ctx.fillText(`PASO ${activeE.currentStep + 1}/${activeE.attack.runbook.length}`, 0, 3);
              ctx.restore();
          }

          for (let i = state.enemies.length - 1; i >= 0; i--) {
              let e = state.enemies[i];
              if (!state.isPaused) e.y += e.speed;

              ctx.save();
              ctx.translate(e.x, e.y);
              
              ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
              ctx.strokeStyle = e.attack.color;
              ctx.lineWidth = 2;
              ctx.shadowBlur = 15;
              ctx.shadowColor = e.attack.color;
              ctx.fillRect(-35, -15, 70, 30);
              ctx.strokeRect(-35, -15, 70, 30);
              
              ctx.shadowBlur = 0;
              ctx.fillStyle = e.attack.color;
              ctx.font = 'bold 10px monospace';
              ctx.textAlign = 'center';
              ctx.fillText(e.attack.name, 0, 4);

              if (state.level === 3) {
                  ctx.fillStyle = '#facc15';
                  ctx.font = 'bold 9px monospace';
                  ctx.fillText(`Paso ${e.currentStep + 1}/${e.attack.runbook.length}`, 0, 25);
              }

              ctx.restore();

              if (!state.isPaused) {
                  let enemyDestroyed = false;
                  for (let j = state.bullets.length - 1; j >= 0; j--) {
                      let b = state.bullets[j];
                      if (Math.abs(b.x - e.x) < 40 && Math.abs(b.y - e.y) < 25) {
                          
                          if (state.level === 3) {
                              const currentRequiredMitigation = e.attack.runbook[e.currentStep];
                              
                              if (b.mitigation === currentRequiredMitigation) {
                                  state.bullets.splice(j, 1);
                                  e.currentStep++;
                                  
                                  if (e.currentStep >= e.attack.runbook.length) {
                                      sounds.playExplosion();
                                      state.enemies.splice(i, 1);
                                      state.score += 200;
                                      setScore(state.score);
                                      
                                      const popupInfo = { 
                                          ...e.attack, 
                                          mitigation: `RUNBOOK COMPLETADO (${e.attack.runbook.length}/${e.attack.runbook.length}): ` + e.attack.runbook.join(' → ') 
                                      };
                                      setPopupData(popupInfo);
                                      state.isPaused = true;
                                      enemyDestroyed = true;
                                  } else {
                                      sounds.playSuccess();
                                      state.score += 50;
                                      setScore(state.score);
                                      state.floatingTexts.push({
                                          x: e.x, y: e.y - 20, text: `¡PASO ${e.currentStep}/${e.attack.runbook.length} OK!`, life: 60, color: '#10b981'
                                      });
                                  }
                                  break;
                              } else {
                                  sounds.playError();
                                  state.level2Lives--;
                                  setLives(state.level2Lives);
                                  state.floatingTexts.push({
                                      x: e.x, y: e.y, text: "¡MITIGACIÓN INCORRECTA! -1 VIDA", life: 80, color: '#ef4444'
                                  });
                                  state.bullets.splice(j, 1);
                                  
                                  if (state.level2Lives <= 0) {
                                      state.gameOver = true;
                                      onGameOver(state.score, "GAME OVER — RUNBOOK FALLIDO. Rompiste la cadena de defensa al aplicar la mitigación incorrecta en el protocolo.");
                                  }
                                  break;
                              }
                              
                          } else if (state.level === 2) {
                              if (b.mitigation === e.attack.requiredMitigation) {
                                  sounds.playExplosion();
                                  state.bullets.splice(j, 1);
                                  state.enemies.splice(i, 1);
                                  state.score += 150;
                                  setScore(state.score);
                                  
                                  setPopupData(e.attack);
                                  state.isPaused = true;
                                  enemyDestroyed = true;
                                  break;
                              } else {
                                  sounds.playError();
                                  state.level2Lives--;
                                  setLives(state.level2Lives);
                                  state.floatingTexts.push({
                                      x: e.x, y: e.y, text: "¡MITIGACIÓN INCORRECTA! -1 VIDA", life: 80, color: '#ef4444'
                                  });
                                  state.bullets.splice(j, 1); 
                                  
                                  if (state.level2Lives <= 0) {
                                      state.gameOver = true;
                                      onGameOver(state.score, "GAME OVER — RESPUESTA INCORRECTA. Seleccionaste la mitigación equivocada demasiadas veces.");
                                  }
                                  break; 
                              }
                          } else {
                              sounds.playExplosion();
                              state.bullets.splice(j, 1);
                              state.enemies.splice(i, 1);
                              state.score += 100;
                              setScore(state.score);
                              
                              setPopupData(e.attack);
                              state.isPaused = true;
                              enemyDestroyed = true;
                              break;
                          }
                      }
                  }

                  if (enemyDestroyed) continue;

                  if (Math.abs(e.x - state.playerX) < 45 && Math.abs(e.y - playerY) < 30) {
                      sounds.playExplosion();
                      state.compromise += 20;
                      setCompromise(state.compromise);
                      state.floatingTexts.push({
                          x: state.playerX, y: playerY - 35, text: "¡IMPACTO CRÍTICO! +20%", life: 80, color: '#ef4444'
                      });
                      state.enemies.splice(i, 1);
                      continue;
                  }

                  if (e.y > height + 40) {
                      sounds.playError();
                      state.compromise += 10;
                      setCompromise(state.compromise);
                      state.floatingTexts.push({
                          x: Math.max(50, Math.min(width - 50, e.x)), y: height - 80, text: `¡BRECHA! ${e.attack.name} (+10%)`, life: 80, color: '#f59e0b'
                      });
                      state.enemies.splice(i, 1);
                  }
              }
          }

          if (state.compromise >= 100 && !state.gameOver) {
              state.gameOver = true;
              onGameOver(state.score, "SISTEMA COMPROMETIDO (100%). En el mundo real, la falta de controles por capas (Defensa en Profundidad) permite que los atacantes tomen control total de la infraestructura.");
              return; 
          }

          if (!state.isPaused && state.enemies.length === 0) {
              const spawnLimit = 2;
              const allExhausted = ATTACK_TYPES.every(a => (state.spawnCounts[a.id] || 0) >= spawnLimit);
              if (allExhausted && !state.gameOver) {
                  if (state.level === 1) {
                      sounds.playSuccess();
                      state.level = 2;
                      state.spawnCounts = {}; 
                      state.level2Lives = 5;
                      state.isPaused = true;
                      
                      setLevel(2);
                      setLives(5);
                      setShowLevel2Intro(true);
                  } else if (state.level === 2) {
                      sounds.playSuccess();
                      state.level = 3;
                      state.spawnCounts = {}; 
                      state.level2Lives = 3;
                      state.isPaused = true;
                      
                      setLevel(3);
                      setLives(3);
                      setShowLevel3Intro(true);
                  } else if (state.level === 3) {
                      sounds.playSuccess();
                      state.gameOver = true;
                      onGameOver(state.score, "¡DEFENSA ABSOLUTA! Has completado exitosamente los 3 niveles, dominando la identificación, mitigación y las secuencias de respuesta (Runbooks) corporativas.");
                  }
              }
          }

          for (let i = state.floatingTexts.length - 1; i >= 0; i--) {
              let ft = state.floatingTexts[i];
              if (!state.isPaused) {
                  ft.y -= 0.5;
                  ft.life--;
              }
              
              ctx.save();
              ctx.globalAlpha = Math.min(1, ft.life / 20); 
              ctx.fillStyle = ft.color;
              ctx.shadowBlur = 4;
              ctx.shadowColor = '#000';
              ctx.font = 'bold 12px monospace';
              ctx.textAlign = 'center';
              
              ctx.lineWidth = 3;
              ctx.strokeStyle = '#0f172a';
              ctx.strokeText(ft.text, ft.x, ft.y);
              ctx.fillText(ft.text, ft.x, ft.y);
              ctx.restore();

              if (ft.life <= 0) state.floatingTexts.splice(i, 1);
          }

          animationFrameId = requestAnimationFrame(render);
      };

      render();

      return () => {
          if (resizeObserver) resizeObserver.disconnect();
          window.removeEventListener('keydown', handleKeyDown);
          window.removeEventListener('keyup', handleKeyUp);
          window.removeEventListener('resize', resize);
          cancelAnimationFrame(animationFrameId);
      };
  }, []);

  return (
      <div ref={containerRef} className="w-full h-full bg-slate-900 relative flex flex-col overflow-hidden select-none touch-none">
          <canvas ref={canvasRef} className="block w-full h-full absolute inset-0 z-0" />
          
          <AnimatePresence>
          {popupData && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm z-[80] flex items-center justify-center p-4"
              >
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="bg-slate-900 border-2 border-emerald-500 rounded-xl max-w-md w-full p-6 shadow-[0_0_50px_rgba(16,185,129,0.3)]"
                  >
                      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-700">
                          <div className="p-2 rounded bg-slate-800" style={{ color: popupData.color }}>
                              <Shield size={32} />
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-white uppercase tracking-wider">{popupData.name}</h3>
                              <p className="text-emerald-400 text-xs font-mono">AMENAZA NEUTRALIZADA</p>
                          </div>
                      </div>
                      
                      <div className="mb-6 space-y-4">
                          <div>
                              <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mb-1">Qué es (Vector de Ataque)</p>
                              <p className="text-slate-300 text-sm leading-relaxed">{popupData.desc}</p>
                          </div>
                          <div className="bg-emerald-900/20 p-3 rounded border border-emerald-800/50">
                              <p className="text-[10px] md:text-xs text-emerald-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                                  <Zap size={14}/> Solución Real (Mitigación)
                              </p>
                              <p className="text-emerald-300 text-sm font-bold leading-relaxed">{popupData.mitigation}</p>
                          </div>
                      </div>
                      
                      <CyberButton 
                          onClick={() => {
                              setPopupData(null);
                              gameState.current.isPaused = false;
                          }} 
                          color="emerald" 
                          className="w-full shadow-lg"
                      >
                          APRENDIDO <ChevronRight size={18} className="ml-2"/>
                      </CyberButton>
                  </motion.div>
              </motion.div>
          )}
          </AnimatePresence>

          <AnimatePresence>
          {showLevel2Intro && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/85 backdrop-blur-sm z-[90] flex items-center justify-center p-4"
              >
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="bg-slate-900 border-2 border-blue-500 rounded-xl max-w-md w-full p-6 text-center shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                  >
                      <h2 className="text-2xl font-bold text-blue-400 mb-2">¡NIVEL 1 COMPLETADO!</h2>
                      <h3 className="text-xl font-bold text-white mb-4">INICIANDO NIVEL 2</h3>
                      <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                          Ahora las reglas cambian. El código binario ya no es suficiente.<br/><br/>
                          Debes seleccionar la <strong>mitigación correcta</strong> en la barra inferior para destruir cada amenaza específica. <span className="text-red-400">Si disparas la mitigación equivocada, perderás una vida.</span>
                      </p>
                      <div className="flex justify-center mb-6 text-red-500 font-bold gap-1">
                          {Array.from({ length: lives }).map((_, i) => <Heart key={i} size={28} fill="currentColor" />)}
                      </div>
                      <CyberButton
                          onClick={() => {
                              setShowLevel2Intro(false);
                              gameState.current.isPaused = false;
                          }}
                          color="blue"
                          className="w-full"
                      >
                          INICIAR NIVEL 2
                      </CyberButton>
                  </motion.div>
              </motion.div>
          )}
          </AnimatePresence>

          <AnimatePresence>
          {showLevel3Intro && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/85 backdrop-blur-sm z-[90] flex items-center justify-center p-4"
              >
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="bg-slate-900 border-2 border-purple-500 rounded-xl max-w-md w-full p-6 text-center shadow-[0_0_50px_rgba(168,85,247,0.3)]"
                  >
                      <h2 className="text-2xl font-bold text-purple-400 mb-2">¡NIVEL 2 COMPLETADO!</h2>
                      <h3 className="text-xl font-bold text-white mb-4">INICIANDO NIVEL 3: CADENA DE DEFENSA</h3>
                      <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                          Los ataques avanzados requieren protocolos complejos. Cada amenaza demanda ahora un <strong>Runbook</strong> (secuencia de 2 a 3 pasos).<br/><br/>
                          Debes disparar las mitigaciones en el <strong>orden exacto</strong>. Revisa tu HUD inferior para ver qué paso toca.<br/><br/>
                          <span className="text-red-400">Fallar en cualquier paso del protocolo te costará una vida.</span>
                      </p>
                      <div className="flex justify-center mb-6 text-red-500 font-bold gap-1">
                          {Array.from({ length: lives }).map((_, i) => <Heart key={i} size={28} fill="currentColor" />)}
                      </div>
                      <CyberButton
                          onClick={() => {
                              setShowLevel3Intro(false);
                              gameState.current.isPaused = false;
                          }}
                          color="slate"
                          className="w-full border border-purple-500"
                      >
                          INICIAR NIVEL 3
                      </CyberButton>
                  </motion.div>
              </motion.div>
          )}
          </AnimatePresence>

          <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 pointer-events-none">
               <div className="bg-black/60 p-3 rounded border-l-4 border-emerald-500 text-white w-fit backdrop-blur-sm">
                  <p className="text-xs text-emerald-400 font-mono mb-1">AMENAZAS MITIGADAS</p>
                  <span className="font-bold font-mono text-2xl">{score}</span>
               </div>
          </div>

          <div className="absolute top-24 left-4 z-10 w-48 md:w-64 bg-black/60 p-3 rounded backdrop-blur-sm border border-slate-800 pointer-events-none">
              <div className="flex justify-between items-end mb-1">
                  <span className="text-[10px] md:text-xs font-mono font-bold text-slate-300">COMPROMISO S.O.</span>
                  <span className={`text-[10px] md:text-xs font-mono font-bold ${compromise >= 80 ? 'text-red-500 animate-pulse' : 'text-emerald-500'}`}>{compromise}%</span>
              </div>
              <div className="w-full h-2 md:h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-700">
                  <div 
                      className={`h-full transition-all duration-300 ${compromise >= 80 ? 'bg-red-500' : (compromise >= 40 ? 'bg-yellow-500' : 'bg-emerald-500')}`}
                      style={{ width: `${Math.min(compromise, 100)}%` }}
                  ></div>
              </div>
              {(level === 2 || level === 3) && (
                  <div className="mt-3 pt-2 border-t border-slate-700 flex justify-between items-center">
                      <span className="text-[10px] md:text-xs font-mono font-bold text-slate-300">VIDAS RESTANTES:</span>
                      <span className="text-red-500 flex gap-1">
                          {Array.from({ length: lives }).map((_, i) => <Heart key={i} size={14} fill="currentColor" />)}
                      </span>
                  </div>
              )}
          </div>

          <div className="absolute top-4 right-4 z-10">
               <button className="bg-slate-800 p-2 rounded-full border border-slate-600 text-white hover:bg-slate-700 transition-colors" onClick={onBack}>
                  <ArrowLeft size={24} />
               </button>
          </div>

          {(level === 2 || level === 3) && (
              <div className="absolute bottom-[115px] md:bottom-[130px] w-full px-2 md:px-6 z-30 overflow-x-auto hide-scrollbar">
                  <div className="flex gap-2 w-max mx-auto pb-2 items-center">
                      {MITIGATION_OPTIONS.map(m => (
                          <button
                              key={m}
                              onClick={(e) => { e.preventDefault(); setActiveMitigation(m); gameState.current.activeMitigation = m; }}
                              onTouchStart={(e) => { e.preventDefault(); setActiveMitigation(m); gameState.current.activeMitigation = m; }}
                              className={`px-2.5 py-1.5 md:px-3 md:py-2 rounded text-[10px] md:text-sm font-bold transition-all whitespace-nowrap border-2
                                  ${activeMitigation === m ? 'bg-emerald-600 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] scale-105 md:scale-110' : 'bg-slate-800 border-slate-600 text-slate-400 hover:bg-slate-700'}
                              `}
                          >
                              {m}
                          </button>
                      ))}
                  </div>
              </div>
          )}

          <div className="absolute bottom-6 w-full px-6 flex justify-between items-end z-20" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
              <div className="flex gap-4">
                  <button 
                      className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30 active:bg-white/30 active:scale-95 transition-all shadow-lg"
                      onTouchStart={(e) => { e.preventDefault(); handleTouchStart('ArrowLeft'); }}
                      onTouchEnd={(e) => { e.preventDefault(); handleTouchEnd('ArrowLeft'); }}
                      onMouseDown={() => handleTouchStart('ArrowLeft')}
                      onMouseUp={() => handleTouchEnd('ArrowLeft')}
                  >
                      <ArrowLeft size={32} />
                  </button>
                  <button 
                      className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30 active:bg-white/30 active:scale-95 transition-all shadow-lg"
                      onTouchStart={(e) => { e.preventDefault(); handleTouchStart('ArrowRight'); }}
                      onTouchEnd={(e) => { e.preventDefault(); handleTouchEnd('ArrowRight'); }}
                      onMouseDown={() => handleTouchStart('ArrowRight')}
                      onMouseUp={() => handleTouchEnd('ArrowRight')}
                  >
                       <ChevronRight size={32} />
                  </button>
              </div>

              <button 
                  className="w-20 h-20 md:w-24 md:h-24 bg-emerald-600/80 backdrop-blur-md rounded-full flex flex-col items-center justify-center border-4 border-emerald-400 active:bg-emerald-700 active:scale-95 transition-all shadow-xl shadow-emerald-900/50"
                  onTouchStart={(e) => { e.preventDefault(); handleTouchStart('Space'); }}
                  onTouchEnd={(e) => { e.preventDefault(); handleTouchEnd('Space'); }}
                  onMouseDown={() => handleTouchStart('Space')}
                  onMouseUp={() => handleTouchEnd('Space')}
              >
                  <Terminal size={32} className="mb-1" />
                  <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-center leading-tight">
                      {level === 1 ? 'ENVIAR\nCÓDIGO' : 'APLICAR\nREGLA'}
                  </span>
              </button>
          </div>
      </div>
  );
};

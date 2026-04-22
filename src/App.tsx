/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MainMenu } from './components/MainMenu';
import { GameOverModal } from './components/GameOverModal';
import { FirewallRacer } from './games/FirewallRacer';
import { NetOpsChallenge } from './games/NetOpsChallenge';
import { FortiManagerChallenge } from './games/FortiManagerChallenge';
import { BotnetHunter } from './games/BotnetHunter';
import { PacketPuzzle } from './games/PacketPuzzle';
import { SwitchingLab } from './games/SwitchingLab';
import { SOCLogHunter } from './games/SOCLogHunter';
import { Register } from './pages/Register';
import { AnimatePresence } from 'motion/react';
import { sounds } from './utils/sounds';

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [screen, setScreen] = useState('loading');
  const [lastScore, setLastScore] = useState(0);
  const [gameOverTip, setGameOverTip] = useState("");
  const [isVirusLaughing, setIsVirusLaughing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('cyber_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setScreen('menu');
    } else {
      setScreen('register');
    }
  }, []);

  const handleRegister = (newUser: any) => {
    setUser(newUser);
    setScreen('menu');
  };

  const handleGameOver = (score: number, tip: string, virus = false) => {
    if (virus) {
      sounds.playError();
    } else {
      sounds.playExplosion();
    }
    setLastScore(score);
    setGameOverTip(tip);
    setIsVirusLaughing(virus);
    setShowModal(true);
  };

  const retryGame = () => {
    sounds.playClick();
    setShowModal(false);
    const current = screen;
    setScreen('loading');
    setTimeout(() => setScreen(current), 100);
  };

  const goToMenu = () => {
    sounds.playClick();
    setShowModal(false);
    setScreen('menu');
  };

  const handleSelectGame = (game: string) => {
    sounds.playClick();
    setScreen(game);
  };

  if (screen === 'loading') return <div className="min-h-screen bg-slate-950"></div>;

  return (
    <div className={`font-sans antialiased text-slate-200 bg-slate-950 flex flex-col ${screen === 'menu' || screen === 'register' ? 'min-h-screen overflow-y-auto' : 'h-screen overflow-hidden touch-none'}`}>
      
      {screen === 'register' && <Register onRegister={handleRegister} />}
      {screen === 'menu' && <MainMenu onSelectGame={handleSelectGame} user={user} onLogout={() => {
        localStorage.removeItem('cyber_user');
        setUser(null);
        setScreen('register');
      }} />}
      
      <div className={`flex-grow relative w-full ${(screen === 'menu' || screen === 'register') ? 'hidden' : 'h-full'}`}>
          {screen === 'packet' && <FirewallRacer onGameOver={handleGameOver} onBack={goToMenu} />}
          {screen === 'patcher' && <NetOpsChallenge onGameOver={handleGameOver} onBack={goToMenu} />}
          {screen === 'fortimanager' && <FortiManagerChallenge onGameOver={handleGameOver} onBack={goToMenu} />}
          {screen === 'botnet' && <BotnetHunter onGameOver={handleGameOver} onBack={goToMenu} />}
          
          {screen === 'packet-puzzle' && <PacketPuzzle onGameOver={handleGameOver} onBack={goToMenu} />}
          {screen === 'switching-lab' && <SwitchingLab onGameOver={handleGameOver} onBack={goToMenu} />}
          {screen === 'soc-log-hunter' && <SOCLogHunter onGameOver={handleGameOver} onBack={goToMenu} />}
      </div>

      <AnimatePresence>
      {showModal && (
        <GameOverModal 
            score={lastScore} 
            tip={gameOverTip} 
            onRetry={retryGame} 
            onMenu={goToMenu} 
            isVirusLaughing={isVirusLaughing}
        />
      )}
      </AnimatePresence>
    </div>
  );
}

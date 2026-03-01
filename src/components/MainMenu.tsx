import React from 'react';
import { Shield, Lock, Terminal, Activity, Database, Grid, Search, Play, FileWarning, AlertTriangle, LogOut } from 'lucide-react';
import { CyberButton } from './CyberButton';
import { motion } from 'motion/react';
import { CyberAnimation } from './CyberAnimation';

interface MainMenuProps {
  onSelectGame: (game: string) => void;
  user: any;
  onLogout: () => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({ onSelectGame, user, onLogout }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full min-h-screen bg-slate-900 text-white flex flex-col p-4 md:p-8">
      <header className="flex items-center justify-between mb-8 border-b border-slate-800 pb-6 shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/50">
            <Shield className="w-8 h-8 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              PlayToDefend ACADEMY
            </h1>
            <p className="text-slate-400 font-mono text-xs md:text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              SISTEMAS ONLINE :: ACCESO AUTORIZADO {user && `[${user.username}]`}
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs font-mono text-slate-500">
           <span>v3.0.0-PRO</span>
           <span>LAT: 12ms</span>
           <button onClick={onLogout} className="flex items-center gap-1 hover:text-red-400 transition-colors ml-4">
             <LogOut size={14} /> LOGOUT
           </button>
        </div>
      </header>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full flex-grow content-start pb-8"
      >
        {/* Card 1 */}
        <motion.div variants={itemVariants} onClick={() => onSelectGame('packet')} className="group bg-slate-800 border border-slate-700 hover:border-emerald-500 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:-translate-y-2 relative overflow-hidden cursor-pointer flex flex-col active:scale-95">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Lock size={100} /></div>
            <div className="mb-4 text-emerald-400 bg-emerald-900/30 w-fit p-3 rounded-lg"><Shield size={32} /></div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Firewall Racer</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">Conduce el Motor de Inspección. Filtra tráfico malicioso (Phishing, Malware) y deja pasar el tráfico legítimo.</p>
            <div className="flex items-center justify-between mt-auto pt-4">
                <span className="text-[10px] md:text-xs font-mono text-emerald-500 bg-emerald-900/20 px-2 py-1 rounded">ACCIÓN / EDUCATIVO</span>
                <CyberButton onClick={() => onSelectGame('packet')} color="emerald"><Play size={16}/> JUGAR</CyberButton>
            </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={itemVariants} onClick={() => onSelectGame('patcher')} className="group bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-2 relative overflow-hidden cursor-pointer flex flex-col active:scale-95">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Terminal size={100} /></div>
            <div className="mb-4 text-blue-400 bg-blue-900/30 w-fit p-3 rounded-lg"><Terminal size={32} /></div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Cisco CLI Challenge</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">Simulador de consola real. Resuelve problemas de enrutamiento y switching con comandos IOS.</p>
             <div className="flex items-center justify-between mt-auto pt-4">
                <span className="text-[10px] md:text-xs font-mono text-blue-500 bg-blue-900/20 px-2 py-1 rounded">TÉCNICA</span>
                <CyberButton onClick={() => onSelectGame('patcher')} color="blue"><Play size={16}/> JUGAR</CyberButton>
            </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={itemVariants} onClick={() => onSelectGame('botnet')} className="group bg-slate-800 border border-slate-700 hover:border-red-500 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:-translate-y-2 relative overflow-hidden cursor-pointer flex flex-col active:scale-95">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Activity size={100} /></div>
            <div className="mb-4 text-red-400 bg-red-900/30 w-fit p-3 rounded-lg"><AlertTriangle size={32} /></div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Incident Response</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">SOC Simulator. Toma decisiones rápidas sobre WAF, EDR y XDR antes de que el ataque se propague.</p>
             <div className="flex items-center justify-between mt-auto pt-4">
                <span className="text-[10px] md:text-xs font-mono text-red-500 bg-red-900/20 px-2 py-1 rounded">ESTRATEGIA</span>
                <CyberButton onClick={() => onSelectGame('botnet')} color="red"><Play size={16}/> JUGAR</CyberButton>
            </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div variants={itemVariants} onClick={() => onSelectGame('packet-puzzle')} className="group bg-slate-800 border border-slate-700 hover:border-emerald-500 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:-translate-y-2 relative overflow-hidden cursor-pointer flex flex-col active:scale-95">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Database size={100} /></div>
            <div className="mb-4 text-emerald-400 bg-emerald-900/30 w-fit p-3 rounded-lg"><Database size={32} /></div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Packet Puzzle</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">Solve subnetting & IP addressing challenges (CIDR, VLSM).</p>
             <div className="flex items-center justify-between mt-auto pt-4">
                <span className="text-[10px] md:text-xs font-mono text-emerald-500 bg-emerald-900/20 px-2 py-1 rounded">TÉCNICA</span>
                <CyberButton onClick={() => onSelectGame('packet-puzzle')} color="emerald"><Play size={16}/> JUGAR</CyberButton>
            </div>
        </motion.div>

        {/* Card 5 */}
        <motion.div variants={itemVariants} onClick={() => onSelectGame('switching-lab')} className="group bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-2 relative overflow-hidden cursor-pointer flex flex-col active:scale-95">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Grid size={100} /></div>
            <div className="mb-4 text-blue-400 bg-blue-900/30 w-fit p-3 rounded-lg"><Grid size={32} /></div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Switching Lab</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">Configure VLANs, trunks, STP and secure L2.</p>
             <div className="flex items-center justify-between mt-auto pt-4">
                <span className="text-[10px] md:text-xs font-mono text-blue-500 bg-blue-900/20 px-2 py-1 rounded">TÉCNICA</span>
                <CyberButton onClick={() => onSelectGame('switching-lab')} color="blue"><Play size={16}/> JUGAR</CyberButton>
            </div>
        </motion.div>

        {/* Card 6 */}
        <motion.div variants={itemVariants} onClick={() => onSelectGame('soc-log-hunter')} className="group bg-slate-800 border border-slate-700 hover:border-red-500 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:-translate-y-2 relative overflow-hidden cursor-pointer flex flex-col active:scale-95">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><FileWarning size={100} /></div>
            <div className="mb-4 text-red-400 bg-red-900/30 w-fit p-3 rounded-lg"><Search size={32} /></div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">SOC Log Hunter</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">Analyze logs, find IOCs, choose the right response.</p>
             <div className="flex items-center justify-between mt-auto pt-4">
                <span className="text-[10px] md:text-xs font-mono text-red-500 bg-red-900/20 px-2 py-1 rounded">ESTRATEGIA</span>
                <CyberButton onClick={() => onSelectGame('soc-log-hunter')} color="red"><Play size={16}/> JUGAR</CyberButton>
            </div>
        </motion.div>

      </motion.div>

      <CyberAnimation />

      <div className="mt-auto pt-8 text-center shrink-0 hidden md:block">
        <p className="text-slate-600 text-xs uppercase tracking-widest mb-4">Simulación de operaciones basada en</p>
        <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-bold text-xl text-red-500">FORTINET</span>
            <span className="font-bold text-xl text-blue-400">CISCO</span>
            <span className="font-bold text-xl text-orange-400">PALO ALTO</span>
            <span className="font-bold text-xl text-red-600">RADWARE</span>
        </div>
      </div>
    </div>
  );
};

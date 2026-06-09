import React, { useState } from 'react';
import { Shield, User, Mail, Lock, ChevronRight } from 'lucide-react';
import { CyberButton } from '../components/CyberButton';
import { motion } from 'motion/react';
import { sounds } from '../utils/sounds';

interface RegisterProps {
  onRegister: (user: any) => void;
}

export const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.username && formData.email && formData.password) {
      sounds.playSuccess();
      localStorage.setItem('cyber_user', JSON.stringify(formData));
      onRegister(formData);
    } else {
      sounds.playError();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-900 border-2 border-emerald-500 rounded-xl max-w-md w-full p-8 shadow-[0_0_50px_rgba(16,185,129,0.2)] relative z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="bg-emerald-500/10 p-4 rounded-full border border-emerald-500/50 mb-4">
            <Shield className="w-12 h-12 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-widest text-center">ACADEMY REGISTRATION</h2>
          <p className="text-emerald-400 font-mono text-xs mt-2">SECURE CLEARANCE REQUIRED</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-slate-400 text-xs font-mono mb-1 uppercase">Operative Alias</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="text" 
                required
                value={formData.username}
                onChange={e => setFormData({...formData, username: e.target.value})}
                className="w-full bg-slate-800 border border-slate-700 text-white pl-10 pr-4 py-3 rounded focus:border-emerald-500 focus:outline-none font-mono transition-colors"
                placeholder="Enter username..."
              />
            </div>
          </div>
          
          <div>
            <label className="block text-slate-400 text-xs font-mono mb-1 uppercase">Secure Comm Link</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-slate-800 border border-slate-700 text-white pl-10 pr-4 py-3 rounded focus:border-emerald-500 focus:outline-none font-mono transition-colors"
                placeholder="Enter email..."
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-400 text-xs font-mono mb-1 uppercase">Access Key</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="password" 
                required
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
                className="w-full bg-slate-800 border border-slate-700 text-white pl-10 pr-4 py-3 rounded focus:border-emerald-500 focus:outline-none font-mono transition-colors"
                placeholder="Enter password..."
              />
            </div>
          </div>

          <div className="pt-4">
            <CyberButton type="submit" className="w-full" color="emerald">
              INITIALIZE UPLINK <ChevronRight className="w-5 h-5 ml-2" />
            </CyberButton>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

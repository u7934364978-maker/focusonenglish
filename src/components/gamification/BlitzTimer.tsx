'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer, Zap } from 'lucide-react';
import { useMission } from '@/context/MissionContext';

export default function BlitzTimer() {
  const { state, dispatch } = useMission();
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (!state.blitzActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          dispatch({ type: 'STOP_BLITZ' });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.blitzActive, dispatch]);

  if (!state.blitzActive) return null;

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-slate-900/80 backdrop-blur-xl border-2 border-coral-500 rounded-full px-6 py-3 flex items-center gap-4 shadow-[0_0_30px_rgba(244,63,94,0.3)]"
      >
        <div className="flex items-center gap-2">
          <Timer className={`${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-coral-500'}`} size={20} />
          <span className={`text-2xl font-black tabular-nums ${timeLeft <= 10 ? 'text-red-500' : 'text-white'}`}>
            {timeLeft}s
          </span>
        </div>
        
        <div className="w-[2px] h-6 bg-white/10" />
        
        <div className="flex items-center gap-2 text-blue-400 font-bold italic">
          <Zap size={18} fill="currentColor" />
          <span>XP x2</span>
        </div>
      </motion.div>
    </div>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  missionId: string;
  children: React.ReactNode;
}

const MISSION_THEMES: Record<string, { bg: string, atmosphere: string }> = {
  'london-interview': {
    bg: 'bg-slate-950',
    atmosphere: 'bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.2),transparent)]'
  },
  'airport-survival': {
    bg: 'bg-slate-950',
    atmosphere: 'bg-[radial-gradient(circle_at_50%_50%,rgba(194,65,12,0.1),transparent)]'
  }
};

export default function MissionWrapper({ missionId, children }: Props) {
  const theme = MISSION_THEMES[missionId] || MISSION_THEMES['london-interview'];

  return (
    <div className={`relative min-h-screen ${theme.bg} transition-colors duration-1000`}>
      {/* Atmósfera Inmersiva */}
      <div className={`fixed inset-0 ${theme.atmosphere} pointer-events-none`} />
      
      {/* Ruido de fondo sutil para textura visual */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* Contenido */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}

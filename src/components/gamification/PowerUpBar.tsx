'use client';

import React from 'react';
import { useMission } from '@/context/MissionContext';
import { Lightbulb, Split, Snowflake, Plus } from 'lucide-react';

export default function PowerUpBar() {
  const { state, dispatch } = useMission();

  const powerUps = [
    { 
      id: 'hints', 
      name: 'Pista IA', 
      icon: Lightbulb, 
      color: 'bg-yellow-500', 
      count: state.powerUps.hints,
      description: 'Te da una pista clave'
    },
    { 
      id: 'fiftyFifty', 
      name: '50/50', 
      icon: Split, 
      color: 'bg-blue-500', 
      count: state.powerUps.fiftyFifty,
      description: 'Elimina opciones'
    },
    { 
      id: 'freeze', 
      name: 'Congelar', 
      icon: Snowflake, 
      color: 'bg-cyan-400', 
      count: state.powerUps.freeze,
      description: 'Pausa el tiempo'
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end gap-3 z-50">
      {powerUps.map((pu) => (
        <div key={pu.id} className="flex items-center gap-3 group">
          <span className="bg-slate-900/80 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 uppercase tracking-widest">
            {pu.name}
          </span>
          <button
            onClick={() => dispatch({ type: 'USE_POWERUP', kind: pu.id as any })}
            disabled={pu.count === 0}
            className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all active:scale-90 shadow-xl border-2 border-white/10 ${pu.count > 0 ? pu.color : 'bg-slate-800 opacity-50 grayscale'}`}
          >
            <pu.icon className="text-white" size={20} />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-[10px] font-black text-slate-900 border-2 border-slate-900">
              {pu.count}
            </div>
          </button>
        </div>
      ))}
      
      <button className="w-12 h-12 rounded-2xl bg-white/5 border-2 border-dashed border-white/20 flex items-center justify-center text-white/40 hover:bg-white/10 transition-colors mt-2">
        <Plus size={20} />
      </button>
    </div>
  );
}

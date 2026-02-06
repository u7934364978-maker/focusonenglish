'use client';

import { motion } from 'framer-motion';
import { BookOpen, Mic, Trophy } from 'lucide-react';
import { TutorPhase } from '@/hooks/use-private-tutor';

interface PhaseIndicatorProps {
  currentPhase: TutorPhase;
}

const PHASES = [
  { id: 'theory', name: 'Teoría', icon: BookOpen, color: 'blue' },
  { id: 'practice', name: 'Práctica', icon: Mic, color: 'coral' },
  { id: 'feedback', name: 'Feedback', icon: Trophy, color: 'green' }
];

export function PhaseIndicator({ currentPhase }: PhaseIndicatorProps) {
  const currentIndex = PHASES.findIndex(p => p.id === currentPhase);

  return (
    <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-sm">
      <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-coral-600" />
        Progreso de la Clase
      </h3>

      <div className="relative flex justify-between items-center">
        {/* Connection Line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 -z-0" />
        <motion.div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-coral-500 -z-0"
          initial={{ width: '0%' }}
          animate={{ width: `${(currentIndex / (PHASES.length - 1)) * 100}%` }}
        />

        {PHASES.map((phase, idx) => {
          const isActive = phase.id === currentPhase;
          const isPast = idx < currentIndex;
          const Icon = phase.icon;

          return (
            <div key={phase.id} className="relative z-10 flex flex-col items-center gap-2">
              <motion.div
                animate={{
                  scale: isActive ? 1.2 : 1,
                  backgroundColor: isActive || isPast ? 'white' : '#f8fafc',
                  borderColor: isActive || isPast ? '#ff7c60' : '#f1f5f9'
                }}
                className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center shadow-sm`}
              >
                <Icon className={`w-6 h-6 ${isActive || isPast ? 'text-coral-600' : 'text-slate-300'}`} />
              </motion.div>
              <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-coral-600' : 'text-slate-400'}`}>
                {phase.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

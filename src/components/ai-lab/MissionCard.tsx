import React from 'react';
import Link from 'next/link';
import { AIMission } from '@/lib/exercise-types';
import { ArrowRight, Target, Users } from 'lucide-react';

interface MissionCardProps {
  mission: AIMission;
}

export const MissionCard: React.FC<MissionCardProps> = ({ mission }) => {
  const sectorColors = {
    tech: 'border-blue-100 bg-blue-50/30 text-blue-600',
    marketing: 'border-purple-100 bg-purple-50/30 text-purple-600',
    travel: 'border-green-100 bg-green-50/30 text-green-600',
    exams: 'border-amber-100 bg-amber-50/30 text-amber-600',
    finance: 'border-emerald-100 bg-emerald-50/30 text-emerald-600',
    healthcare: 'border-red-100 bg-red-50/30 text-red-600',
    general: 'border-slate-100 bg-slate-50/30 text-slate-600',
  };

  const difficultyColors = {
    easy: 'text-green-600 bg-green-100',
    medium: 'text-amber-600 bg-amber-100',
    hard: 'text-red-600 bg-red-100',
  };

  return (
    <div className={`group relative bg-white rounded-2xl p-6 border-2 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 ${sectorColors[mission.sector]}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="text-4xl">{mission.persona.avatar}</div>
        <div className="flex flex-col items-end gap-2">
          <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase ${difficultyColors[mission.difficulty]}`}>
            {mission.difficulty}
          </span>
          <span className="text-xs font-bold bg-white/50 px-2 py-1 rounded-full border border-current">
            {mission.level}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-coral-600 transition-colors">
        {mission.title}
      </h3>
      
      <p className="text-sm text-slate-600 mb-6 line-clamp-2">
        {mission.briefing}
      </p>

      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Target className="w-4 h-4 text-coral-500" />
          <span className="font-medium">Objetivo:</span> {mission.goal}
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Users className="w-4 h-4 text-coral-500" />
          <span className="font-medium">Persona:</span> {mission.persona.name} ({mission.persona.role})
        </div>
      </div>

      <Link
        href={`/ai-lab/missions/${mission.id}`}
        className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-coral-600 transition-all group-hover:scale-[1.02]"
      >
        Iniciar Misión
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

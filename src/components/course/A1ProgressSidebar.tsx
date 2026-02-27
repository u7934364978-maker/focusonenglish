'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, Play, Zap } from 'lucide-react';
import { UnitMetadata } from '@/types/premium-course';

interface A1ProgressSidebarProps {
  units: UnitMetadata[];
}

interface UnitProgress {
  unit_id: number;
  status: 'not_started' | 'in_progress' | 'completed';
  exercises_completed: number;
  exercises_total: number;
  accuracy_percentage: number;
}

export function A1ProgressSidebar({ units }: A1ProgressSidebarProps) {
  const [progress, setProgress] = useState<UnitProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/a1/progress')
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data?.progress) setProgress(data.progress);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const getUnitProgress = (unitNumber: number): UnitProgress | undefined =>
    progress.find(p => p.unit_id === unitNumber);

  const nextUnit = units.find(u => {
    const p = getUnitProgress(u.unitNumber);
    return !p || p.status !== 'completed';
  });

  const completedCount = units.filter(u => getUnitProgress(u.unitNumber)?.status === 'completed').length;

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-12 bg-slate-100 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {nextUnit && (
        <div className="bg-gradient-to-br from-[#FF6B6B] to-[#ff9a3c] rounded-2xl p-5 text-white shadow-lg shadow-orange-200">
          <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1">
            {completedCount === 0 ? '¡Empieza aquí!' : 'Continúa donde lo dejaste'}
          </p>
          <p className="font-black text-lg leading-tight mb-4 line-clamp-2">
            Unidad {nextUnit.unitNumber}: {nextUnit.title}
          </p>
          <Link
            href={`/curso-a1/${nextUnit.unitId}`}
            className="flex items-center justify-center gap-2 bg-white text-[#FF6B6B] py-3 rounded-xl font-black text-sm hover:-translate-y-0.5 transition-all shadow"
          >
            <Play size={16} fill="currentColor" />
            {completedCount === 0 ? '¡EMPEZAR!' : '¡CONTINUAR!'}
          </Link>
        </div>
      )}

      {completedCount > 0 && (
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center gap-3">
          <Zap className="w-5 h-5 text-yellow-500 fill-yellow-400 flex-shrink-0" />
          <div>
            <p className="font-black text-slate-900 text-sm">{completedCount} / {units.length} unidades completadas</p>
            <div className="mt-1.5 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#ff9a3c] rounded-full transition-all duration-700"
                style={{ width: `${(completedCount / units.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Tu progreso</p>
        <div className="relative pl-6 space-y-2">
          <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-slate-100" />
          {units.map(unit => {
            const p = getUnitProgress(unit.unitNumber);
            const isCompleted = p?.status === 'completed';
            const isInProgress = p?.status === 'in_progress';
            const isCurrent = nextUnit?.unitNumber === unit.unitNumber;

            return (
              <Link
                key={unit.unitId}
                href={`/curso-a1/${unit.unitId}`}
                className={`group flex items-center gap-3 rounded-xl px-2 py-1.5 transition-all hover:bg-slate-50 ${
                  isCurrent ? 'bg-orange-50' : ''
                }`}
              >
                <div className={`absolute left-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center z-10 flex-shrink-0 ${
                  isCompleted
                    ? 'bg-green-500 border-green-500 text-white'
                    : isCurrent
                    ? 'bg-[#FF6B6B] border-[#FF6B6B] text-white animate-pulse'
                    : 'bg-white border-slate-300'
                }`}>
                  {isCompleted ? (
                    <CheckCircle2 size={10} />
                  ) : isCurrent ? (
                    <Play size={8} fill="currentColor" />
                  ) : (
                    <Circle size={10} className="text-slate-300" />
                  )}
                </div>
                <span className={`text-sm leading-tight ${
                  isCompleted
                    ? 'text-slate-500 line-through'
                    : isCurrent
                    ? 'text-[#FF6B6B] font-black'
                    : isInProgress
                    ? 'text-slate-700 font-bold'
                    : 'text-slate-400 font-medium'
                }`}>
                  U{unit.unitNumber}. {unit.title}
                </span>
                {isInProgress && p && (
                  <span className="ml-auto text-xs text-slate-400 flex-shrink-0">
                    {p.exercises_completed}/{p.exercises_total}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

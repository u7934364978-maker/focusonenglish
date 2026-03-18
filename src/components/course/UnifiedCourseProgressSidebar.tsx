'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, Play, Zap } from 'lucide-react';
import type { UnitMetadata } from '@/types/premium-course';

type UnitStatus = 'not_started' | 'in_progress' | 'completed';

type UnitProgress = {
  unit_id: number;
  status: UnitStatus;
  exercises_completed: number;
  exercises_total: number;
  attempts?: number;
  correct_count?: number;
  accuracy_percent?: number;
  last_activity_at?: string | null;
};

export function UnifiedCourseProgressSidebar({
  units,
  courseId,
  coursePath,
}: {
  units: UnitMetadata[];
  courseId: string;
  coursePath: string; // e.g. "/curso-a1"
}) {
  const [progress, setProgress] = useState<UnitProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch(`/api/progress/my?courseId=${encodeURIComponent(courseId)}`)
      .then(async (r) => {
        if (!r.ok) return;
        const data = await r.json();
        if (!mounted) return;
        setProgress(data?.progress ?? []);
      })
      .catch(() => {})
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [courseId]);

  const progressByUnit = useMemo(() => {
    const m = new Map<number, UnitProgress>();
    for (const p of progress) m.set(p.unit_id, p);
    return m;
  }, [progress]);

  const getUnitProgress = (unitNumber: number) => progressByUnit.get(unitNumber);

  const completedCount = useMemo(
    () => units.filter((u) => getUnitProgress(u.unitNumber)?.status === 'completed').length,
    [units, progressByUnit]
  );

  const nextUnit = useMemo(() => units.find((u) => getUnitProgress(u.unitNumber)?.status !== 'completed'), [units, progressByUnit]);

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
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
          <p className="font-black text-lg leading-tight mb-3 line-clamp-2">
            Unidad {nextUnit.unitNumber}: {nextUnit.title}
          </p>
          <Link
            href={`${coursePath}/${nextUnit.unitId}`}
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
            <p className="font-black text-slate-900 text-sm">
              {completedCount} / {units.length} unidades completadas
            </p>
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
          {units.map((unit) => {
            const p = getUnitProgress(unit.unitNumber);
            const isCompleted = p?.status === 'completed';
            const isInProgress = p?.status === 'in_progress';
            const isCurrent = nextUnit?.unitNumber === unit.unitNumber;

            return (
              <Link
                key={unit.unitId}
                href={`${coursePath}/${unit.unitId}`}
                className={`group flex items-center gap-3 rounded-xl px-2 py-1.5 transition-all hover:bg-slate-50 ${
                  isCurrent ? 'bg-orange-50' : ''
                }`}
              >
                <div
                  className={`absolute left-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center z-10 flex-shrink-0 ${
                    isCompleted
                      ? 'bg-green-500 border-green-500 text-white'
                      : isCurrent
                      ? 'bg-[#FF6B6B] border-[#FF6B6B] text-white animate-pulse'
                      : 'bg-white border-slate-300'
                  }`}
                >
                  {isCompleted ? <CheckCircle2 size={10} /> : isCurrent ? <Play size={8} fill="currentColor" /> : <Circle size={10} className="text-slate-300" />}
                </div>

                <span
                  className={`text-sm leading-tight ${
                    isCompleted
                      ? 'text-slate-500 line-through'
                      : isCurrent
                      ? 'text-[#FF6B6B] font-black'
                      : isInProgress
                      ? 'text-slate-700 font-bold'
                      : 'text-slate-400 font-medium'
                  }`}
                >
                  U{unit.unitNumber}. {unit.title}
                </span>

                {isInProgress && p && p.exercises_total > 0 && (
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


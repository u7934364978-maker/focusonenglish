'use client';

import Link from 'next/link';
import { Play, RotateCcw, Star } from 'lucide-react';
import { Module } from '@/lib/exercise-types';

interface NextActionCardProps {
  userId: string;
  level: string;
  modules: Module[];
  completedIds: Set<string>;
  srsReviewCount: number;
}

function getNextLesson(modules: Module[], completedIds: Set<string>) {
  for (const mod of modules) {
    for (const lesson of mod.lessons) {
      const exercises = lesson.exercises || [];
      if (exercises.length === 0) continue;
      const allComplete = exercises.every(ex => completedIds.has(ex.id));
      if (!allComplete) return lesson;
    }
  }
  return null;
}

function getFirstLesson(modules: Module[]) {
  for (const mod of modules) {
    if (mod.lessons.length > 0) return mod.lessons[0];
  }
  return null;
}

export default function NextActionCard({
  srsReviewCount,
  modules,
  completedIds,
}: NextActionCardProps) {
  if (srsReviewCount > 0) {
    return (
      <div className="bg-[#1A237E] p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden group">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <RotateCcw className="h-5 w-5 text-amber-300" aria-hidden="true" />
            <h3 className="text-xl font-black">Revisión Pendiente</h3>
          </div>
          <p className="text-blue-100 text-sm mb-6">
            Tienes {srsReviewCount} ejercicio{srsReviewCount !== 1 ? 's' : ''} pendiente{srsReviewCount !== 1 ? 's' : ''} de revisión.
          </p>
          <Link
            href="/practica-inteligente"
            className="flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-900 px-6 py-4 rounded-xl font-black text-lg shadow-lg hover:-translate-y-1 transition-all"
          >
            <RotateCcw size={20} />
            ¡REVISAR AHORA!
          </Link>
        </div>
      </div>
    );
  }

  const nextLesson = getNextLesson(modules, completedIds);
  if (nextLesson) {
    return (
      <div className="bg-[#1A237E] p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden group">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Play className="h-5 w-5 text-coral-300" aria-hidden="true" />
            <h3 className="text-xl font-black">Continúa Aprendiendo</h3>
          </div>
          <p className="text-blue-100 text-sm mb-2">Continúa:</p>
          <p className="text-white font-black text-lg mb-6 line-clamp-2">{nextLesson.title}</p>
          <Link
            href={`/practice/${nextLesson.id}`}
            className="flex items-center justify-center gap-3 bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-6 py-4 rounded-xl font-black text-lg shadow-lg hover:shadow-coral-500/20 hover:-translate-y-1 transition-all"
          >
            <Play fill="currentColor" size={20} />
            ¡CONTINUAR!
          </Link>
        </div>
      </div>
    );
  }

  const firstLesson = getFirstLesson(modules);
  if (firstLesson) {
    return (
      <div className="bg-[#1A237E] p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden group">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Star className="h-5 w-5 text-yellow-300" aria-hidden="true" />
            <h3 className="text-xl font-black">¡Empieza Aquí!</h3>
          </div>
          <p className="text-blue-100 text-sm mb-2">Tu primera lección:</p>
          <p className="text-white font-black text-lg mb-6 line-clamp-2">{firstLesson.title}</p>
          <Link
            href={`/practice/${firstLesson.id}`}
            className="flex items-center justify-center gap-3 bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-6 py-4 rounded-xl font-black text-lg shadow-lg hover:shadow-coral-500/20 hover:-translate-y-1 transition-all"
          >
            <Play fill="currentColor" size={20} />
            ¡EMPEZAR!
          </Link>
        </div>
      </div>
    );
  }

  return null;
}

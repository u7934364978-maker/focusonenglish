'use client';

import Link from 'next/link';
import { CheckCircle2, Star, Circle } from 'lucide-react';
import { Module } from '@/lib/exercise-types';

interface CourseRoadmapProps {
  modules: Module[];
  completedIds: Set<string>;
  currentLessonId: string | null;
}

type NodeState = 'completed' | 'current' | 'future';

function getLessonState(
  lessonId: string,
  exercises: { id: string }[],
  completedIds: Set<string>,
  currentLessonId: string | null
): NodeState {
  if (lessonId === currentLessonId) return 'current';
  if (exercises.length > 0 && exercises.every(ex => completedIds.has(ex.id))) return 'completed';
  return 'future';
}

export default function CourseRoadmap({
  modules,
  completedIds,
  currentLessonId,
}: CourseRoadmapProps) {
  const allLessons = modules.flatMap(m =>
    m.lessons.map(l => ({ ...l, moduleTitle: m.title }))
  );

  return (
    <div className="relative pl-8" aria-label="Mapa del curso">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" aria-hidden="true" />

      <div className="space-y-4">
        {allLessons.map((lesson, idx) => {
          const exercises = lesson.exercises || [];
          const state = getLessonState(lesson.id, exercises, completedIds, currentLessonId);

          const nodeClasses =
            state === 'completed'
              ? 'bg-green-500 border-green-500 text-white'
              : state === 'current'
              ? 'bg-[#FF6B6B] border-[#FF6B6B] text-white animate-pulse'
              : 'bg-white border-slate-300 text-slate-400';

          const textClasses =
            state === 'completed'
              ? 'text-slate-900 font-bold'
              : state === 'current'
              ? 'text-[#FF6B6B] font-black'
              : 'text-slate-400 font-medium';

          const Icon =
            state === 'completed' ? CheckCircle2 : state === 'current' ? Star : Circle;

          return (
            <div key={lesson.id} className="relative flex items-start gap-4 group">
              <div
                className={`absolute -left-8 mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 z-10 ${nodeClasses}`}
                data-state={state}
                aria-label={
                  state === 'completed'
                    ? 'completada'
                    : state === 'current'
                    ? 'en progreso'
                    : 'pendiente'
                }
              >
                <Icon size={12} />
              </div>

              <div className="relative">
                <Link
                  href={`/practice/${lesson.id}`}
                  className={`block text-sm transition-colors hover:text-[#FF6B6B] ${textClasses}`}
                >
                  <span className="text-xs text-slate-400 font-semibold block mb-0.5">
                    Lección {idx + 1} · {lesson.moduleTitle}
                  </span>
                  {lesson.title}
                </Link>

                <div className="absolute left-0 top-full mt-1 z-20 hidden group-hover:block pointer-events-none">
                  <div className="bg-slate-900 text-white text-xs rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
                    {lesson.title} · ~5 min
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

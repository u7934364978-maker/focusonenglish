'use client';

import React, { useState, useMemo } from 'react';
import { 
  Play, 
  Star,
  X,
  Trophy,
  Target,
  CheckCircle2,
  ListChecks,
  Flame
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PremiumCourseSession from './exercises/PremiumSession';
import { UnitData, PremiumBlock } from '@/types/premium-course';
import { calculateUnitProgress } from '@/lib/progress';
import { useGamification } from '@/lib/hooks/use-gamification';

interface Props {
  unitData: UnitData;
  userId?: string;
  completedInteractionIds?: string[];
  onProgressUpdate?: (interactionId: string) => void;
}

export default function PremiumUnitViewer({ 
  unitData, 
  userId, 
  completedInteractionIds = [],
  onProgressUpdate 
}: Props) {
  const { course, blocks, learning_outcomes } = unitData;
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [localCompletedIds, setLocalCompletedIds] = useState<string[]>(completedInteractionIds);
  const { streak } = useGamification();

  // Flatten all blocks into a single exercise queue to know the indices
  const exerciseQueue = useMemo(() => {
    const items: any[] = [];
    blocks.forEach((block: PremiumBlock) => {
      block.content.forEach((content: any) => {
        items.push({ 
          ...content, 
          blockTitle: block.title,
          // Get a readable title for the list
          displayTitle: content.prompt_es || content.title || content.video?.objective || `Ejercicio ${items.length + 1}`
        });
      });
    });
    return items;
  }, [blocks]);

  const allInteractionIds = useMemo(() => {
    return exerciseQueue
      .map(ex => ex.interaction_id)
      .filter(Boolean) as string[];
  }, [exerciseQueue]);

  const unitProgress = useMemo(() => {
    return calculateUnitProgress(allInteractionIds, localCompletedIds);
  }, [allInteractionIds, localCompletedIds]);

  const handleExerciseComplete = (interactionId: string) => {
    if (!localCompletedIds.includes(interactionId)) {
      setLocalCompletedIds(prev => [...prev, interactionId]);
    }
    onProgressUpdate?.(interactionId);
  };

  if (isStarted) {
    return (
      <PremiumCourseSession 
        unitData={unitData}
        initialIndex={startIndex}
        userId={userId}
        onComplete={() => {
          setIsCompleted(true);
          setIsStarted(false);
        }}
        onExit={() => setIsStarted(false)}
        onExerciseComplete={handleExerciseComplete}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50">
      <div className="max-w-4xl mx-auto p-6 md:p-12 space-y-12 pb-32">
        {/* Unit Header / Hero */}
        <header className="space-y-8">
          <div className="flex items-center justify-between">
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <X className="w-8 h-8" />
            </button>
            <div className="flex items-center gap-3">
              {streak.currentStreak > 0 && (
                <div className="bg-red-100 px-6 py-2 rounded-2xl flex items-center gap-2 border border-red-200">
                  <Flame className="w-5 h-5 text-red-500 fill-red-500" />
                  <span className="font-black text-red-700 uppercase tracking-widest text-sm">
                    {streak.currentStreak} día{streak.currentStreak !== 1 ? 's' : ''}
                  </span>
                </div>
              )}
              <div className="bg-orange-100 px-6 py-2 rounded-2xl flex items-center gap-2 border border-orange-200">
                <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                <span className="font-black text-orange-700 uppercase tracking-widest text-sm">Premium Course</span>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-10 md:p-16 text-slate-900 shadow-2xl shadow-indigo-100 relative overflow-hidden group border-2 border-slate-100"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-4 py-1.5 bg-indigo-600 text-white rounded-xl font-black text-xs uppercase tracking-[0.2em]">
                  {course.unit_id} · {course.level}
                </span>
                {isCompleted && (
                  <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Completado
                  </span>
                )}
                {unitProgress.total > 0 && (
                  <span className="px-4 py-1.5 bg-purple-100 text-purple-700 rounded-xl font-black text-xs uppercase tracking-[0.2em]">
                    {unitProgress.completed}/{unitProgress.total} ({unitProgress.percentage}%)
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                {course.unit_title}
              </h1>

              {unitProgress.total > 0 && (
                <div className="pt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-600">Progreso</span>
                    <span className="font-black text-indigo-600">{unitProgress.percentage}%</span>
                  </div>
                  <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${unitProgress.percentage}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              )}
              
              <div className="pt-8">
                <Button 
                  onClick={() => {
                    setStartIndex(0);
                    setIsStarted(true);
                  }}
                  className="w-full md:w-auto px-12 py-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[2rem] font-black text-2xl shadow-xl shadow-indigo-100 border-b-8 border-indigo-800 active:translate-y-1 transition-all flex items-center gap-4 group/btn"
                >
                  {isCompleted ? 'REPETIR UNIDAD' : 'EMPEZAR AHORA'}
                  <Play className="w-6 h-6 fill-white group-hover/btn:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Exercises List Section */}
        <section className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center gap-4 px-4">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
              <ListChecks className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Contenido de la unidad</h2>
          </div>

          <div className="grid gap-4">
            {exerciseQueue.map((exercise: any, idx: number) => {
              const isExerciseCompleted = exercise.interaction_id && localCompletedIds.includes(exercise.interaction_id);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`bg-white hover:bg-slate-50 border-2 rounded-2xl p-4 flex items-center justify-between group transition-all ${
                    isExerciseCompleted ? 'border-green-200 bg-green-50/50' : 'border-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-colors ${
                      isExerciseCompleted 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-slate-100 group-hover:bg-indigo-100 text-slate-500 group-hover:text-indigo-600'
                    }`}>
                      {isExerciseCompleted ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        idx + 1
                      )}
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs font-black text-indigo-600 uppercase tracking-widest">{exercise.blockTitle}</p>
                      <h3 className="font-bold text-slate-700 line-clamp-1">{exercise.displayTitle}</h3>
                    </div>
                  </div>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setStartIndex(idx);
                      setIsStarted(true);
                    }}
                    className="rounded-xl hover:bg-indigo-600 hover:text-white transition-all group/play"
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Learning Outcomes */}
        {learning_outcomes && learning_outcomes.length > 0 && (
          <section className="max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2.5rem] p-8 border-2 border-slate-100 shadow-xl shadow-slate-200/50 space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-slate-900">Lo que aprenderás</h2>
              </div>
              
              <ul className="space-y-4">
                {learning_outcomes.map((outcome: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform" />
                    <span className="text-slate-600 font-bold text-lg leading-snug">{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </section>
        )}

        {/* Completion Status */}
        {isCompleted && (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-amber-100 border-2 border-amber-200 rounded-[2.5rem] p-8 flex flex-col items-center text-center gap-6"
          >
            <div className="w-20 h-20 bg-amber-200 rounded-full flex items-center justify-center">
              <Trophy className="w-10 h-10 text-amber-600 fill-amber-300" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-amber-900">¡Maestría Alcanzada!</h3>
              <p className="text-amber-800 font-bold">Has completado esta unidad con éxito. Puedes repetirla para perfeccionar tu pronunciación.</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

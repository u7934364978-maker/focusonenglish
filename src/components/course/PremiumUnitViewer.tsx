'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Play, 
  Star,
  X,
  Trophy,
  Target,
  CheckCircle2,
  ListChecks,
  Settings2,
  RefreshCcw
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PremiumCourseSession from './exercises/PremiumSession';
import { UnitData, PremiumBlock } from '@/types/premium-course';
import { useUser } from '@/hooks/useAuth';
import { premiumCourseService } from '@/lib/services/premium-course-service';
import { AdaptiveEngine, UserPerformanceRecord } from '@/lib/course-engine/adaptive';
import { CourseUnit } from '@/lib/course-engine/schema';

interface Props {
  unitData: UnitData;
}

export default function PremiumUnitViewer({ unitData }: Props) {
  const { course, blocks, learning_outcomes } = unitData;
  const { user } = useUser();
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [srsData, setSrsData] = useState<UserPerformanceRecord[]>([]);
  const [isAdaptive, setIsAdaptive] = useState(true);
  const [isLoadingSrs, setIsLoadingSrs] = useState(true);

  // Fetch SRS data on load
  useEffect(() => {
    const fetchSRS = async () => {
      if (user && unitData) {
        setIsLoadingSrs(true);
        const allInteractionIds = blocks.flatMap(b => b.content.map(c => c.interaction_id)).filter(Boolean) as string[];
        if (allInteractionIds.length > 0) {
          const data = await premiumCourseService.getSRSPerformance(user.id, allInteractionIds);
          setSrsData(data);
        }
        setIsLoadingSrs(false);
      }
    };
    fetchSRS();
  }, [user, unitData, blocks]);

  // Mixed/Adaptive Queue
  const adaptiveQueue = useMemo(() => {
    if (!isAdaptive) return null;
    return AdaptiveEngine.generateSequence(unitData as unknown as CourseUnit, srsData, {
      maxExercises: 20,
      reviewPriority: 0.4
    });
  }, [unitData, srsData, isAdaptive]);

  // Flatten all blocks into a single exercise queue (static view)
  const staticQueue = useMemo(() => {
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

  const handlePerformanceUpdate = async (interactionId: string, quality: number) => {
    if (user) {
      await premiumCourseService.updateSRS(user.id, interactionId, quality);
      // Refresh local SRS state (optimistic or re-fetch)
      // For now, let's just refresh if it was a fail or first success
      if (quality === 0 || quality >= 3) {
        const allInteractionIds = blocks.flatMap(b => b.content.map(c => c.interaction_id)).filter(Boolean) as string[];
        const data = await premiumCourseService.getSRSPerformance(user.id, allInteractionIds);
        setSrsData(data);
      }
    }
  };

  if (isStarted) {
    return (
      <PremiumCourseSession 
        unitData={unitData}
        initialIndex={startIndex}
        customQueue={isAdaptive ? adaptiveQueue : staticQueue}
        userId={user?.id}
        onPerformanceUpdate={handlePerformanceUpdate}
        onComplete={() => {
          setIsCompleted(true);
          setIsStarted(false);
        }}
        onExit={() => setIsStarted(false)}
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
            <div className="bg-orange-100 px-6 py-2 rounded-2xl flex items-center gap-2 border border-orange-200">
              <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
              <span className="font-black text-orange-700 uppercase tracking-widest text-sm">Premium Course</span>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-10 md:p-16 text-slate-900 shadow-2xl shadow-indigo-100 relative overflow-hidden group border-2 border-slate-100"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="px-4 py-1.5 bg-indigo-600 text-white rounded-xl font-black text-xs uppercase tracking-[0.2em]">
                    {course.unit_id} · {course.level}
                  </span>
                  {isCompleted && (
                    <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Completado
                    </span>
                  )}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsAdaptive(!isAdaptive)}
                  className={`rounded-xl font-bold flex items-center gap-2 transition-all ${isAdaptive ? 'text-indigo-600 bg-indigo-50' : 'text-slate-400'}`}
                >
                  <Settings2 className="w-4 h-4" />
                  {isAdaptive ? 'Modo Adaptativo' : 'Modo Secuencial'}
                </Button>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                {course.unit_title}
              </h1>

              {isAdaptive && (
                <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100 flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
                    <RefreshCcw className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-indigo-900">Sesión Inteligente Activada</p>
                    <p className="text-xs text-indigo-700/70 font-medium">Mezclando nuevo contenido con repasos de temas fallados.</p>
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
            {(isAdaptive ? adaptiveQueue : staticQueue)?.map((exercise: any, idx: number) => {
              const perf = srsData.find(p => p.interaction_id === exercise.interaction_id);
              const isReview = perf && (new Date(perf.next_review_at) <= new Date() || perf.quality < 3);

              return (
                <motion.div
                  key={`${exercise.interaction_id}-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`bg-white hover:bg-slate-50 border-2 rounded-2xl p-4 flex items-center justify-between group transition-all ${isReview ? 'border-orange-100 bg-orange-50/20' : 'border-slate-100'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-colors ${isReview ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600'}`}>
                      {idx + 1}
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-black text-indigo-600 uppercase tracking-widest">{exercise.blockTitle || 'Repaso'}</p>
                        {isReview && (
                          <span className="text-[10px] font-black bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full uppercase">Review</span>
                        )}
                      </div>
                      <h3 className="font-bold text-slate-700 line-clamp-1">{exercise.displayTitle || (exercise as any).prompt_es || 'Ejercicio'}</h3>
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

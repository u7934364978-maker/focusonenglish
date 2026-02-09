'use client';

import React, { useState, useEffect } from 'react';
import { useUser } from '@/hooks/useAuth';
import { AdaptiveEngine, AdaptiveExerciseResponse } from '@/lib/learning/adaptive-engine';
import PremiumCourseSession from '@/components/course/exercises/PremiumSession';
import { UnitData, PremiumBlock } from '@/types/premium-course';
import { Navigation } from '@/components/sections/Navigation';
import { Loader2, Trophy, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function A2AdaptivePracticePage() {
  const { user } = useUser();
  const [currentExercise, setCurrentExercise] = useState<AdaptiveExerciseResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sessionCount, setSessionCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const MAX_EXERCISES = 15;

  const fetchNext = async () => {
    if (!user) return;
    setIsLoading(true);
    try {
      const next = await AdaptiveEngine.getNextExercise(user.id);
      if (next) {
        setCurrentExercise(next);
      } else {
        setIsFinished(true);
      }
    } catch (error) {
      console.error('Error fetching next exercise:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchNext();
    }
  }, [user]);

  const handlePerformanceUpdate = async (interactionId: string, quality: number) => {
    if (!user) return;
    
    const isCorrect = quality >= 3;
    await AdaptiveEngine.processResult(user.id, interactionId, isCorrect, quality);
    
    setSessionCount(prev => prev + 1);
    
    if (sessionCount + 1 >= MAX_EXERCISES) {
      setIsFinished(true);
    } else {
      fetchNext();
    }
  };

  // Wrap the single exercise in the format PremiumCourseSession expects
  const unitDataWrapper: UnitData | null = currentExercise ? {
    course: {
      unit_id: 'adaptive-a2',
      unit_title: currentExercise.isReview ? 'Repaso Adaptativo' : `Práctica A2 - Nivel ${currentExercise.currentDifficulty}`,
      level: 'A2',
      language_ui: 'es',
      target_language: 'en',
      total_duration_minutes: 30
    },
    blocks: [{
      block_id: 'adaptive-block',
      title: 'Adaptive Exercise',
      duration_minutes: 2,
      content: [currentExercise.exercise]
    } as PremiumBlock]
  } : null;

  if (!user && !isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Inicia sesión para practicar</h1>
        <Link href="/cuenta/login">
          <Button>Ir a Login</Button>
        </Link>
      </div>
    );
  }

  if (isFinished) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center bg-slate-50 pt-20 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full bg-white rounded-[3rem] p-10 shadow-2xl text-center space-y-8 border-2 border-slate-100"
          >
            <div className="w-24 h-24 bg-coral-100 rounded-full flex items-center justify-center mx-auto">
              <Trophy className="w-12 h-12 text-coral-500" />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-black text-slate-900">¡Sesión Terminada!</h1>
              <p className="text-slate-600 font-medium text-lg">
                Has completado {sessionCount} ejercicios de tu plan adaptativo.
              </p>
            </div>
            <div className="pt-4 flex flex-col gap-4">
              <Button 
                onClick={() => {
                  setIsFinished(false);
                  setSessionCount(0);
                  fetchNext();
                }}
                className="bg-coral-500 hover:bg-coral-600 text-white rounded-2xl h-16 font-black text-xl shadow-lg border-b-4 border-coral-700 active:border-b-0 active:translate-y-1 transition-all"
              >
                OTRA SESIÓN
              </Button>
              <Link href="/curso/ingles-a2" className="w-full">
                <Button variant="outline" className="w-full rounded-2xl h-14 font-bold text-slate-600 border-2 border-slate-200 flex items-center justify-center gap-2">
                  <Home size={20} />
                  VOLVER AL CURSO
                </Button>
              </Link>
            </div>
          </motion.div>
        </main>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-white z-50"
          >
            <Loader2 className="w-12 h-12 text-coral-500 animate-spin" />
            <p className="font-black text-slate-400 uppercase tracking-widest text-sm">Cargando tu próximo desafío...</p>
          </motion.div>
        ) : unitDataWrapper ? (
          <motion.div 
            key="session"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-screen"
          >
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-white/80 backdrop-blur px-6 py-2 rounded-full border shadow-sm flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-coral-500 animate-pulse" />
                <span className="text-xs font-black text-slate-500 uppercase">Sesión Adaptativa</span>
              </div>
              <div className="h-4 w-px bg-slate-200" />
              <span className="text-xs font-black text-coral-600 uppercase">
                {sessionCount + 1} / {MAX_EXERCISES}
              </span>
            </div>

            <PremiumCourseSession 
              unitData={unitDataWrapper}
              onComplete={() => {}} // We handle this in handlePerformanceUpdate
              onPerformanceUpdate={handlePerformanceUpdate}
              onExit={() => setIsFinished(true)}
              userId={user?.id}
              continuousMode={true}
            />
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center h-screen gap-6 p-6 text-center">
            <h2 className="text-2xl font-bold text-slate-900">No hay más ejercicios disponibles por ahora</h2>
            <p className="text-slate-600">¡Has completado todo el material de este nivel!</p>
            <Link href="/curso/ingles-a2">
              <Button>Volver al inicio</Button>
            </Link>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

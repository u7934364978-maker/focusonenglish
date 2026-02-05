'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Trophy, 
  CheckCircle2, 
  BookOpen, 
  Star,
  X,
  Target,
  ArrowRight,
  Loader2,
  Zap,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX
} from 'lucide-react';
import { Lesson, Exercise } from '@/lib/exercise-types';
import B2ExerciseDispatcher from './B2ExerciseDispatcher';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useGamification } from '@/lib/hooks/use-gamification';
import confetti from 'canvas-confetti';

interface B2UnitSessionProps {
  unit: Lesson;
  backUrl?: string;
}

export default function B2UnitSession({ unit, backUrl = "/curso/ingles-b2" }: B2UnitSessionProps) {
  const { completeExercise } = useGamification();
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [completedBlocks, setCompletedBlocks] = useState<Set<number>>(new Set());
  const [isUnitComplete, setIsUnitComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [blockScores, setBlockScores] = useState<Record<number, number>>({});
  const [isFocused, setIsFocused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [totalXP, setTotalXP] = useState(0);

  const currentBlock = unit.exercises[currentBlockIndex];
  const totalBlocks = unit.exercises.length;
  
  // Calculate granular progress
  const completedCount = completedBlocks.size;
  const progress = (completedCount / totalBlocks) * 100;

  const handleBlockComplete = (blockScore: number) => {
    const newCompletedBlocks = new Set(completedBlocks);
    newCompletedBlocks.add(currentBlockIndex);
    setCompletedBlocks(newCompletedBlocks);
    
    setBlockScores(prev => ({
      ...prev,
      [currentBlockIndex]: blockScore
    }));

    const xpGained = Math.round(blockScore);
    setTotalXP(prev => prev + xpGained);

    // Reward points for completing a block
    completeExercise(`b2-block-${unit.id}-${currentBlockIndex}`, blockScore, xpGained);

    // Block completion celebration
    if (blockScore >= 80) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4F46E5', '#10B981', '#F59E0B']
      });
    }

    if (newCompletedBlocks.size === totalBlocks) {
      // Calculate final score
      const totalScore = Object.values({ ...blockScores, [currentBlockIndex]: blockScore }).reduce((a, b) => a + b, 0) / totalBlocks;
      setScore(totalScore);
      
      // Unit completion celebration
      setTimeout(() => {
        confetti({
          particleCount: 200,
          spread: 160,
          origin: { y: 0.6 },
          colors: ['#4F46E5', '#10B981', '#F59E0B', '#EF4444']
        });
        setIsUnitComplete(true);
      }, 500);
    } else if (currentBlockIndex < totalBlocks - 1) {
      // Manual advance happened via Dispatcher's "Next" button calling onComplete
      setTimeout(() => {
        setCurrentBlockIndex(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    }
  };

  if (isUnitComplete) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-200"
        >
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Trophy className="h-24 w-24 text-yellow-500" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4"
              >
                <Star className="h-10 w-10 text-yellow-400 fill-current" />
              </motion.div>
            </div>
          </div>
          
          <h1 className="text-4xl font-black text-slate-900 mb-4">¡Unidad Completada!</h1>
          <p className="text-xl text-slate-600 mb-8">
            ¡Felicidades! Has completado <strong>{unit.title}</strong> con éxito.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <div className="text-3xl font-black text-blue-600">{score.toFixed(0)}%</div>
              <div className="text-sm font-bold text-blue-800 uppercase tracking-wider">Puntuación Media</div>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <div className="text-3xl font-black text-green-600">{totalBlocks}</div>
              <div className="text-sm font-bold text-green-800 uppercase tracking-wider">Prácticas</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
              <div className="text-3xl font-black text-purple-600">+{totalXP}</div>
              <div className="text-sm font-bold text-purple-800 uppercase tracking-wider">XP Ganado</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={backUrl}>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 h-14 rounded-xl text-lg font-bold">
                Volver al Curso
              </Button>
            </Link>
            <Button variant="outline" size="lg" onClick={() => window.location.reload()} className="h-14 rounded-xl text-lg font-bold border-2">
              Repasar Unidad
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isFocused ? 'bg-slate-900' : 'bg-slate-50'} pb-20`}>
      {/* Sticky Header */}
      <AnimatePresence>
        {!isFocused && (
          <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-4"
          >
            <div className="max-w-5xl mx-auto flex items-center justify-between gap-6">
              <Link href={backUrl} className="flex-shrink-0">
                <div className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X className="h-6 w-6 text-slate-500" />
                </div>
              </Link>

              <div className="flex-1 max-w-2xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-slate-500">
                    Bloque {currentBlockIndex + 1} de {totalBlocks}
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-amber-500 font-black text-sm">
                      <Zap size={14} fill="currentColor" />
                      {totalXP} XP
                    </div>
                    <span className="text-sm font-black text-indigo-600">
                      {Math.round(progress)}%
                    </span>
                  </div>
                </div>
                <Progress value={progress} className="h-3 bg-slate-100" />
              </div>

              <div className="flex items-center gap-2">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => setIsFocused(true)}
                  className="hidden md:flex items-center gap-2 text-xs font-bold"
                >
                  <Maximize2 size={14} /> Modo Foco
                </Button>
                <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                  <BookOpen className="h-4 w-4 text-slate-500" />
                  <span className="text-sm font-bold text-slate-700 truncate max-w-[150px]">
                    {unit.title}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Focus Toggle when focused */}
      {isFocused && (
        <div className="fixed top-6 right-6 z-50 flex gap-2">
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={() => setIsMuted(!isMuted)}
            className="rounded-full w-10 h-10 p-0 flex items-center justify-center bg-white/10 text-white hover:bg-white/20 border-none"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </Button>
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={() => setIsFocused(false)}
            className="rounded-full w-10 h-10 p-0 flex items-center justify-center bg-white/10 text-white hover:bg-white/20 border-none"
          >
            <Minimize2 size={18} />
          </Button>
        </div>
      )}

      {/* Main Content */}
      <main className={`max-w-5xl mx-auto px-4 pt-8 ${isFocused ? 'pt-12' : ''}`}>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className={`${isFocused ? 'bg-indigo-500' : 'bg-indigo-600'} text-white text-xs font-black px-3 py-1 rounded-full uppercase`}>
              B2 Negociaciones
            </span>
            <span className="text-slate-400 text-sm font-bold">•</span>
            <span className={`${isFocused ? 'text-indigo-400' : 'text-indigo-600'} text-sm font-black uppercase tracking-wider`}>
              {currentBlock.type.replace('-', ' ')}
            </span>
          </div>
          <h1 className={`text-3xl font-black ${isFocused ? 'text-white' : 'text-slate-900'}`}>{currentBlock.title}</h1>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentBlockIndex}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <B2ExerciseDispatcher 
              exercise={currentBlock} 
              onComplete={handleBlockComplete} 
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons (at the bottom) */}
        {!isFocused && (
          <div className="mt-12 flex justify-between items-center border-t border-slate-200 pt-8">
            <Button
              variant="secondary"
              onClick={() => setCurrentBlockIndex(prev => Math.max(0, prev - 1))}
              disabled={currentBlockIndex === 0}
              className="flex items-center gap-2 font-bold text-slate-600"
            >
              <ChevronLeft className="h-5 w-5" /> Anterior
            </Button>

            <div className="flex gap-2">
              {unit.exercises.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentBlockIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentBlockIndex 
                      ? 'w-8 bg-indigo-600' 
                      : completedBlocks.has(i)
                        ? 'w-2 bg-green-500'
                        : 'w-2 bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="secondary"
              onClick={() => setCurrentBlockIndex(prev => Math.min(totalBlocks - 1, prev + 1))}
              disabled={currentBlockIndex === totalBlocks - 1 || !completedBlocks.has(currentBlockIndex)}
              className="flex items-center gap-2 font-bold text-slate-600"
            >
              Siguiente <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

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
  Loader2
} from 'lucide-react';
import { Lesson, Exercise } from '@/lib/exercise-types';
import B2ExerciseDispatcher from './B2ExerciseDispatcher';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useGamification } from '@/lib/hooks/use-gamification';

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

  const currentBlock = unit.exercises[currentBlockIndex];
  const totalBlocks = unit.exercises.length;
  const progress = (completedBlocks.size / totalBlocks) * 100;

  const handleBlockComplete = (blockScore: number) => {
    const newCompletedBlocks = new Set(completedBlocks);
    newCompletedBlocks.add(currentBlockIndex);
    setCompletedBlocks(newCompletedBlocks);
    
    setBlockScores(prev => ({
      ...prev,
      [currentBlockIndex]: blockScore
    }));

    // Reward points for completing a block
    completeExercise(`b2-block-${unit.id}-${currentBlockIndex}`, blockScore, 100);

    if (newCompletedBlocks.size === totalBlocks) {
      // Calculate final score
      const totalScore = Object.values({ ...blockScores, [currentBlockIndex]: blockScore }).reduce((a, b) => a + b, 0) / totalBlocks;
      setScore(totalScore);
      setTimeout(() => {
        setIsUnitComplete(true);
      }, 1000);
    } else if (currentBlockIndex < totalBlocks - 1) {
      // Manual advance happened via Dispatcher's "Next" button calling onComplete
      setCurrentBlockIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
          
          <h1 className="text-4xl font-black text-slate-900 mb-4">Unit Complete!</h1>
          <p className="text-xl text-slate-600 mb-8">
            Congratulations! You've completed <strong>{unit.title}</strong> and all 100 exercises.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <div className="text-3xl font-black text-blue-600">{score.toFixed(0)}%</div>
              <div className="text-sm font-bold text-blue-800 uppercase tracking-wider">Average Score</div>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <div className="text-3xl font-black text-green-600">100</div>
              <div className="text-sm font-bold text-green-800 uppercase tracking-wider">Exercises Done</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
              <div className="text-3xl font-black text-purple-600">+500</div>
              <div className="text-sm font-bold text-purple-800 uppercase tracking-wider">XP Gained</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={backUrl}>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 h-14 rounded-xl text-lg font-bold">
                Back to Curriculum
              </Button>
            </Link>
            <Button variant="outline" size="lg" onClick={() => window.location.reload()} className="h-14 rounded-xl text-lg font-bold border-2">
              Review Unit
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-6">
          <Link href={backUrl} className="flex-shrink-0">
            <div className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X className="h-6 w-6 text-slate-500" />
            </div>
          </Link>

          <div className="flex-1 max-w-2xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-slate-500">
                Block {currentBlockIndex + 1} of {totalBlocks}
              </span>
              <span className="text-sm font-black text-indigo-600">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-3 bg-slate-100" />
          </div>

          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
            <BookOpen className="h-4 w-4 text-slate-500" />
            <span className="text-sm font-bold text-slate-700 truncate max-w-[150px]">
              {unit.title}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 pt-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-indigo-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase">
              B2 Upper Intermediate
            </span>
            <span className="text-slate-400 text-sm font-bold">•</span>
            <span className="text-indigo-600 text-sm font-black uppercase tracking-wider">
              {currentBlock.type.replace('-', ' ')}
            </span>
          </div>
          <h1 className="text-3xl font-black text-slate-900">{currentBlock.title}</h1>
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
        <div className="mt-12 flex justify-between items-center border-t border-slate-200 pt-8">
          <Button
            variant="ghost"
            onClick={() => setCurrentBlockIndex(prev => Math.max(0, prev - 1))}
            disabled={currentBlockIndex === 0}
            className="flex items-center gap-2 font-bold text-slate-600"
          >
            <ChevronLeft className="h-5 w-5" /> Previous Block
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
            variant="ghost"
            onClick={() => setCurrentBlockIndex(prev => Math.min(totalBlocks - 1, prev + 1))}
            disabled={currentBlockIndex === totalBlocks - 1 || !completedBlocks.has(currentBlockIndex)}
            className="flex items-center gap-2 font-bold text-slate-600"
          >
            Next Block <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </main>
    </div>
  );
}

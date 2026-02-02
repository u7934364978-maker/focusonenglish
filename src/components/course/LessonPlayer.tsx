'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, Zap, Trophy } from 'lucide-react';
import Link from 'next/link';
import type { Lesson, Exercise } from '@/lib/exercise-types';
import ExerciseRenderer from '@/components/ExerciseRenderer';
import SummarySlide from './SummarySlide';
import { useGamification } from '@/lib/hooks/use-gamification';

interface LessonPlayerProps {
  lesson: Lesson;
}

export default function LessonPlayer({ lesson }: LessonPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(-1); // -1 for start/onboarding, 0+ for exercises
  const [isCompleted, setIsCompleted] = useState(false);
  const [scores, setScores] = useState<number[]>([]);
  const { completeLesson, xp } = useGamification();

  const exercises = lesson.exercises || [];
  const progress = isCompleted 
    ? 100 
    : currentIndex === -1 
      ? 0 
      : ((currentIndex + 1) / exercises.length) * 100;

  const handleNext = (score?: number) => {
    if (score !== undefined) {
      setScores(prev => [...prev, score]);
    }
    
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      handleFinish();
    }
  };

  const handleFinish = async () => {
    setIsCompleted(true);
    const totalScore = scores.reduce((a, b) => a + b, 0);
    const maxScore = exercises.length * 100; // Assuming 100 points per exercise max
    await completeLesson(lesson.id, totalScore, maxScore);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsCompleted(false);
    setScores([]);
  };

  const calculateAccuracy = () => {
    if (scores.length === 0) return 0;
    const avg = scores.reduce((a, b) => a + b, 0) / (exercises.length * 100);
    return Math.round(avg * 100);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Lesson Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/dashboard" className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </Link>
          
          <div className="flex-1">
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-orange-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
            <Zap className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span className="text-orange-700 font-bold text-sm">{xp}</span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-4 flex flex-col">
        <AnimatePresence mode="wait">
          {!isCompleted ? (
            currentIndex === -1 ? (
              <motion.div
                key="start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex-1 flex flex-col items-center justify-center text-center p-6"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mb-6">
                  <Trophy className="w-10 h-10 text-blue-600" />
                </div>
                <h1 className="text-3xl font-black text-gray-900 mb-2">{lesson.title}</h1>
                <p className="text-gray-600 mb-8 max-w-md">
                  {lesson.description || "Prepárate para practicar tu inglés con esta lección interactiva."}
                </p>
                <button
                  onClick={() => setCurrentIndex(0)}
                  className="bg-orange-500 text-white px-12 py-4 rounded-2xl font-black text-xl shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95"
                >
                  ¡EMPEZAR!
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                {exercises[currentIndex] && (
                  <ExerciseRenderer 
                    exercise={exercises[currentIndex] as any} 
                    onComplete={handleNext}
                  />
                )}
              </motion.div>
            )
          ) : (
            <motion.div
              key="summary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1"
            >
              <SummarySlide 
                lessonTitle={lesson.title}
                totalXP={100} // This should be calculated from real gains
                accuracy={calculateAccuracy()}
                completedItems={exercises.length}
                onRestart={handleRestart}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

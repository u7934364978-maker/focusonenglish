'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, Volume2 } from 'lucide-react';
import { TheorySlide, Question } from '@/lib/exercise-types';
import Markdown from './Markdown';
import AudioButton from './AudioButton';

interface TheorySlideViewerProps {
  slides: TheorySlide[];
  onComplete: () => void;
}

export default function TheorySlideViewer({ slides, onComplete }: TheorySlideViewerProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showInteractiveCheck, setShowInteractiveCheck] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentSlide = slides[currentSlideIndex];
  const isLastSlide = currentSlideIndex === slides.length - 1;

  const handleNext = () => {
    if (currentSlide.interactiveCheck && !showInteractiveCheck) {
      setShowInteractiveCheck(true);
      return;
    }

    if (isLastSlide) {
      onComplete();
    } else {
      setCurrentSlideIndex(prev => prev + 1);
      setShowInteractiveCheck(false);
      setUserAnswer(null);
      setIsCorrect(null);
    }
  };

  const handlePrev = () => {
    if (showInteractiveCheck) {
      setShowInteractiveCheck(false);
    } else if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
      setShowInteractiveCheck(false);
      setUserAnswer(null);
      setIsCorrect(null);
    }
  };

  const handleCheckAnswer = (answer: string) => {
    if (!currentSlide.interactiveCheck) return;
    
    setUserAnswer(answer);
    const correct = Array.isArray(currentSlide.interactiveCheck.correctAnswer) 
      ? currentSlide.interactiveCheck.correctAnswer.includes(answer)
      : currentSlide.interactiveCheck.correctAnswer === answer;
    
    setIsCorrect(correct);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800">
        <motion.div 
          className="h-full bg-indigo-600"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlideIndex + (showInteractiveCheck ? 0.5 : 0)) / slides.length) * 100}%` }}
        />
      </div>

      <div className="p-8 md:p-12 min-h-[500px] flex flex-col">
        <AnimatePresence mode="wait">
          {!showInteractiveCheck ? (
            <motion.div
              key={`slide-${currentSlideIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {currentSlide.title}
                </h2>
                {currentSlide.audioUrl && (
                  <AudioButton text={currentSlide.content.substring(0, 100)} className="flex-shrink-0" size="lg" />
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center flex-1">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <Markdown content={currentSlide.content} />
                </div>
                
                {currentSlide.isVideoSlide && currentSlide.videoUrl ? (
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-black">
                    <video
                      width="100%"
                      height="100%"
                      controls
                      className="w-full h-full"
                    >
                      <source src={currentSlide.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : currentSlide.imageUrl && (
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                    <img 
                      src={currentSlide.imageUrl} 
                      alt={currentSlide.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`check-${currentSlideIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full"
            >
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-800">
                <div className="flex items-center gap-3 mb-6 text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider text-sm">
                  <CheckCircle2 size={20} />
                  <span>Check Your Understanding</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">
                  {currentSlide.interactiveCheck?.question}
                </h3>

                <div className="space-y-3">
                  {currentSlide.interactiveCheck?.options?.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => !userAnswer && handleCheckAnswer(option)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium ${
                        userAnswer === option
                          ? isCorrect 
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                            : 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                          : userAnswer 
                            ? option === currentSlide.interactiveCheck?.correctAnswer
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                              : 'border-slate-200 dark:border-slate-800 opacity-50'
                            : 'border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {userAnswer && currentSlide.interactiveCheck?.explanation && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-sm italic"
                  >
                    💡 {currentSlide.interactiveCheck.explanation}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0 && !showInteractiveCheck}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all disabled:opacity-0"
          >
            <ChevronLeft size={20} />
            <span>Previous</span>
          </button>

          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <div 
                key={idx}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlideIndex 
                    ? 'w-8 bg-indigo-600' 
                    : idx < currentSlideIndex 
                      ? 'w-2 bg-indigo-300 dark:bg-indigo-700' 
                      : 'w-2 bg-slate-200 dark:bg-slate-800'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={showInteractiveCheck && !userAnswer}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-black transition-all ${
              isLastSlide && (!currentSlide.interactiveCheck || showInteractiveCheck)
                ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-200 dark:shadow-none'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 dark:shadow-none'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <span>{isLastSlide && (!currentSlide.interactiveCheck || showInteractiveCheck) ? 'Start Practice' : 'Continue'}</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

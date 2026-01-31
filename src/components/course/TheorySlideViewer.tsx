'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, Volume2, Info, Eye, Play, Check } from 'lucide-react';
import { TheorySlide, Question } from '@/lib/exercise-types';
import Markdown from './Markdown';
import AudioButton from './AudioButton';

interface TheorySlideViewerProps {
  slides: TheorySlide[];
  onComplete: () => void;
  lessonTitle?: string;
}

export default function TheorySlideViewer({ slides, onComplete, lessonTitle }: TheorySlideViewerProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showInteractiveCheck, setShowInteractiveCheck] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const [viewedPoints, setViewedPoints] = useState<Set<number>>(new Set());

  const currentSlide = slides[currentSlideIndex];
  const isLastSlide = currentSlideIndex === slides.length - 1;

  useEffect(() => {
    // Reset state when slide changes
    setActivePoint(null);
    setViewedPoints(new Set());
  }, [currentSlideIndex]);

  const handlePointClick = (idx: number) => {
    setActivePoint(idx);
    setViewedPoints(prev => new Set(prev).add(idx));
  };

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
                <div className="flex-1">
                  <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1 block">
                    {currentSlide.type === 'discovery' ? 'Explora y Aprende' : currentSlide.type === 'video' ? 'Mira el Escenario' : 'Explicación'}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                    {currentSlide.title}
                  </h2>
                </div>
                {currentSlide.audioUrl && (
                  <AudioButton text={currentSlide.content.substring(0, 100)} className="flex-shrink-0" size="lg" />
                )}
              </div>

              {currentSlide.type === 'discovery' && currentSlide.discoveryPoints ? (
                <div className="grid lg:grid-cols-2 gap-8 items-start flex-1">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-[4/3]">
                    {currentSlide.imageUrl && (
                      <img 
                        src={currentSlide.imageUrl} 
                        alt={currentSlide.title}
                        className="object-cover w-full h-full"
                      />
                    )}
                    {/* Discovery Points Overlays */}
                    {currentSlide.discoveryPoints.map((point, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handlePointClick(idx)}
                        className={`absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center shadow-lg transition-colors border-2 ${
                          activePoint === idx 
                            ? 'bg-indigo-600 border-white text-white z-20' 
                            : viewedPoints.has(idx)
                              ? 'bg-green-500 border-white text-white z-10'
                              : 'bg-white border-indigo-600 text-indigo-600 z-10 animate-pulse'
                        }`}
                        style={{ left: `${point.x}%`, top: `${point.y}%` }}
                      >
                        {viewedPoints.has(idx) && activePoint !== idx ? <Check size={18} /> : <Eye size={18} />}
                      </motion.button>
                    ))}
                  </div>

                  <div className="flex flex-col h-full">
                    <AnimatePresence mode="wait">
                      {activePoint !== null ? (
                        <motion.div
                          key={`point-${activePoint}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-3xl border-2 border-indigo-100 dark:border-indigo-800 flex-1 shadow-inner"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-300">
                              {currentSlide.discoveryPoints[activePoint].label}
                            </h4>
                            {currentSlide.discoveryPoints[activePoint].audioUrl && (
                              <AudioButton text={currentSlide.discoveryPoints[activePoint].content} size="md" />
                            )}
                          </div>
                          <div className="prose prose-indigo dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                            <Markdown content={currentSlide.discoveryPoints[activePoint].content} />
                          </div>
                        </motion.div>
                      ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700">
                          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                            <Info size={32} />
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 font-medium">
                            Haz clic en los puntos interactivos de la imagen para explorar el contenido.
                          </p>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ) : currentSlide.type === 'video' ? (
                <div className="space-y-6 flex-1">
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-black group">
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
                  <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-2xl border border-orange-100 dark:border-orange-900/30">
                    <div className="flex items-center gap-2 mb-2 text-orange-800 dark:text-orange-400 font-bold">
                      <Play size={18} fill="currentColor" />
                      <span>Notas de la Lección</span>
                    </div>
                    <div className="prose prose-slate dark:prose-invert max-w-none text-sm">
                      <Markdown content={currentSlide.content} />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8 items-center flex-1">
                  <div className="prose prose-slate dark:prose-invert max-w-none text-lg">
                    <Markdown content={currentSlide.content} />
                  </div>
                  
                  {currentSlide.imageUrl && (
                    <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                      <img 
                        src={currentSlide.imageUrl} 
                        alt={currentSlide.title}
                        className="object-cover w-full h-full transition-transform hover:scale-105 duration-700"
                      />
                    </div>
                  )}
                </div>
              )}
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

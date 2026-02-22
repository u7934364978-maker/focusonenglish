'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Exercise } from '@/lib/exercise-types';
import GappedTextExercise from '@/components/exercises/GappedTextExercise';
import KeyWordTransformationExercise from '@/components/exercises/KeyWordTransformationExercise';
import MultipleChoiceClozeExercise from '@/components/exercises/MultipleChoiceClozeExercise';
import MultipleMatchingExercise from '@/components/exercises/MultipleMatchingExercise';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2, XCircle, Lightbulb, Play, Volume2, ArrowRight, Zap, Trophy, Star, BookOpen as BookOpenIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface B2ExerciseDispatcherProps {
  exercise: Exercise;
  onComplete: (score: number) => void;
}

export default function B2ExerciseDispatcher({ exercise, onComplete }: B2ExerciseDispatcherProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [scores, setScores] = useState<Record<string, boolean>>({});
  const [finalScore, setFinalScore] = useState<number | null>(null);
  const [streak, setStreak] = useState(0);
  const [showXPPopup, setShowXPPopup] = useState<{ show: boolean; xp: number } | null>(null);

  // Reset state when exercise changes
  useEffect(() => {
    setAnswers({});
    setSubmitted(false);
    setScores({});
    setFinalScore(null);
  }, [exercise.id]);

  // Dispatch based on specific Cambridge types if available
  if (exercise.type === 'key-word-transformation') {
    return <KeyWordTransformationExercise exercise={exercise as any} onComplete={onComplete} />;
  }
  
  if (exercise.type === 'multiple-choice-cloze') {
    return <MultipleChoiceClozeExercise exercise={exercise as any} onComplete={onComplete} />;
  }

  if (exercise.type === 'gapped-text') {
    return <GappedTextExercise exercise={exercise as any} onComplete={onComplete} />;
  }

  if (exercise.type === 'multiple-matching') {
    return <MultipleMatchingExercise exercise={exercise as any} onComplete={onComplete} />;
  }

  // Generic handler for Grammar/Vocabulary/Reading/Listening blocks with 'questions' array
  const handleAnswerChange = (questionId: string, value: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const checkAnswers = () => {
    const newScores: Record<string, boolean> = {};
    let correctCount = 0;
    let currentStreak = 0;
    
    const exerciseWithQuestions = exercise as any;
    if (exerciseWithQuestions.questions) {
      exerciseWithQuestions.questions.forEach((q: any) => {
        const userAnswer = (answers[q.id] || '').trim().toLowerCase();
        const correctAnswer = (q.correctAnswer || '').trim().toLowerCase();
        const isCorrect = userAnswer === correctAnswer;
        newScores[q.id] = isCorrect;
        if (isCorrect) {
          correctCount++;
          currentStreak++;
        } else {
          currentStreak = 0;
        }
      });

      setScores(newScores);
      setSubmitted(true);
      setStreak(currentStreak);
      
      const calculatedScore = (correctCount / exerciseWithQuestions.questions.length) * 100;
      setFinalScore(calculatedScore);

      if (calculatedScore > 0) {
        setShowXPPopup({ show: true, xp: Math.round(calculatedScore) });
        setTimeout(() => setShowXPPopup(null), 2000);
      }
    }
  };

  return (
    <div className="space-y-8 relative">
      {/* XP/Streak Floating Feedback */}
      <AnimatePresence>
        {showXPPopup?.show && (
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.5 }}
            animate={{ y: -50, opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 right-0 z-50 pointer-events-none"
          >
            <div className="bg-amber-500 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-2 font-black border-4 border-amber-200">
              <Zap className="fill-current" />
              +{showXPPopup.xp} XP
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exercise Explanation/Intro */}
      {((exercise as any).explanation || (exercise as any).grammarPoint) && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Card className="border-indigo-100 bg-indigo-50/50 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Lightbulb size={64} className="text-indigo-600" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-black text-indigo-900 uppercase tracking-widest flex items-center gap-2">
                <Star className="h-4 w-4 fill-indigo-500 text-indigo-500" />
                {(exercise as any).grammarPoint || 'Foco de Aprendizaje'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-slate-700 leading-relaxed prose prose-indigo max-w-none">
                {(exercise as any).explanation?.split('\n').map((line: any, i: number) => (
                  <p key={i} className="mb-2">{line}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Reading/Listening Context if present */}
      {(((exercise as any).text || (exercise as any).transcript || (exercise as any).audioUrl)) && (
        <Card className="border-slate-200 shadow-xl overflow-hidden rounded-3xl">
          <CardHeader className="bg-slate-900 text-white border-b border-slate-800 p-6">
            <CardTitle className="text-lg font-black flex items-center gap-3">
              {(exercise.type === 'listening' || exercise.type === 'listening-comprehension') ? 
                <div className="bg-indigo-500 p-2 rounded-xl"><Volume2 className="h-5 w-5" /></div> : 
                <div className="bg-indigo-500 p-2 rounded-xl"><BookOpenIcon className="h-5 w-5" /></div>
              }
              {(exercise.type === 'listening' || exercise.type === 'listening-comprehension') ? 'Material de Audio' : 'Lectura de Negocios'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 bg-white">
            {/* Audio Player */}
            {(exercise.type === 'listening' || exercise.type === 'listening-comprehension') && (exercise as any).audioUrl && (
              <div className="mb-8 bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-100">
                <audio 
                  src={(exercise as any).audioUrl} 
                  controls 
                  className="w-full h-12 accent-indigo-600"
                  controlsList="nodownload"
                />
                <p className="text-xs text-indigo-500 mt-3 font-black uppercase tracking-widest text-center">
                  Escucha atentamente antes de responder
                </p>
              </div>
            )}

            {/* Transcript or Reading Text */}
            <div className="prose prose-slate max-w-none">
              {((exercise.type === 'listening' || exercise.type === 'listening-comprehension') && (exercise as any).transcript) ? (
                <details className="group">
                  <summary className="cursor-pointer text-sm font-black text-indigo-600 hover:text-indigo-800 transition-colors list-none flex items-center gap-2 mb-4">
                    <span className="bg-indigo-50 px-4 py-2 rounded-xl border-2 border-indigo-100 group-open:bg-indigo-600 group-open:text-white transition-all">
                      {submitted ? 'Revisar Transcripción' : 'Ver Transcripción (Solo si es necesario)'}
                    </span>
                  </summary>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 italic shadow-inner"
                  >
                    {(((exercise as any).transcript || '').split('\n').map((para: any, i: number) => (
                      <p key={i} className="mb-4 text-slate-600 leading-relaxed text-xl font-medium">{para}</p>
                    )))}
                  </motion.div>
                </details>
              ) : (
                (((exercise as any).text || '').split('\n').map((para: any, i: number) => (
                  <p key={i} className="mb-6 text-slate-800 leading-relaxed text-xl font-medium">{para}</p>
                )))
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Questions List */}
      <div className="space-y-6">
        {(exercise as any).questions?.map((q: any, idx: number) => (
          <motion.div
            key={q.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className={`transition-all duration-300 border-2 rounded-3xl overflow-hidden shadow-sm ${
              submitted 
                ? scores[q.id] 
                  ? 'border-green-500 bg-green-50/20 shadow-green-100' 
                  : 'border-red-500 bg-red-50/20 shadow-red-100'
                : 'border-slate-100 hover:border-indigo-300 hover:shadow-lg'
            }`}>
              <CardContent className="p-8">
                <div className="flex gap-6">
                  <span className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center font-black text-lg transition-colors ${
                    submitted
                      ? scores[q.id]
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : 'bg-slate-100 text-slate-400'
                  }`}>
                    {idx + 1}
                  </span>
                  
                  <div className="flex-1 space-y-6">
                    <p className="text-xl font-black text-slate-800 leading-snug">
                      {q.question}
                    </p>

                    {/* Question Content */}
                    {(q.options || q.type === 'true-false') ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(q.options || ['True', 'False']).map((option: any, optIdx: number) => {
                          const isSelected = (answers[q.id] || '').toLowerCase() === option.toLowerCase();
                          const isCorrect = option.toLowerCase() === (q.correctAnswer || '').toLowerCase();
                          const showCorrect = submitted && isCorrect;
                          const showWrong = submitted && isSelected && !isCorrect;

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleAnswerChange(q.id, option)}
                              disabled={submitted}
                              className={`text-left p-5 rounded-2xl border-2 transition-all font-bold text-lg relative overflow-hidden group ${
                                isSelected && !submitted
                                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-md'
                                  : showCorrect
                                    ? 'border-green-500 bg-green-500 text-white'
                                    : showWrong
                                      ? 'border-red-500 bg-red-500 text-white'
                                      : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-indigo-200'
                              }`}
                            >
                              <div className="flex items-center justify-between relative z-10">
                                <span>{option}</span>
                                {showCorrect && <CheckCircle2 className="h-6 w-6 text-white" />}
                                {showWrong && <XCircle className="h-6 w-6 text-white" />}
                              </div>
                              {isSelected && !submitted && (
                                <motion.div 
                                  layoutId="active-bg"
                                  className="absolute inset-0 bg-indigo-100/50" 
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-3 items-center">
                          <Input
                            placeholder="Escribe tu respuesta aquí..."
                            value={answers[q.id] || ''}
                            onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                            disabled={submitted}
                            className={`h-14 text-xl font-black px-6 rounded-2xl transition-all ${
                              submitted
                                ? scores[q.id]
                                  ? 'bg-green-50 border-green-500 text-green-700'
                                  : 'bg-red-50 border-red-500 text-red-700'
                                : 'bg-slate-50 border-slate-200 focus:border-indigo-500 focus:bg-white'
                            }`}
                          />
                          {submitted && (
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="flex-shrink-0"
                            >
                              {scores[q.id] ? (
                                <div className="bg-green-500 p-2 rounded-xl shadow-lg shadow-green-200">
                                  <CheckCircle2 className="h-8 w-8 text-white" />
                                </div>
                              ) : (
                                <div className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-200">
                                  <XCircle className="h-8 w-8 text-white" />
                                </div>
                              )}
                            </motion.div>
                          )}
                        </div>
                        
                        {submitted && !scores[q.id] && (
                          <motion.div 
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-sm font-black text-green-700 bg-green-100 px-4 py-2 rounded-xl inline-flex items-center gap-2"
                          >
                            <Trophy size={14} /> Respuesta correcta: {q.correctAnswer}
                          </motion.div>
                        )}
                      </div>
                    )}

                    {submitted && q.explanation && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-slate-500 bg-slate-50 p-4 rounded-xl border-l-4 border-indigo-400 font-medium italic"
                      >
                        {q.explanation}
                      </motion.div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {!submitted ? (
        <div className="flex justify-center pt-8">
          <Button 
            size="lg" 
            onClick={checkAnswers}
            disabled={Object.keys(answers).length < (exercise.questions?.length || 0)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-16 h-20 rounded-3xl text-2xl font-black shadow-2xl shadow-indigo-300 transition-all hover:scale-105 active:scale-95 group"
          >
            Comprobar Respuestas
            <ArrowRight className="ml-3 h-8 w-8 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      ) : (
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col items-center gap-6 pt-8"
        >
          {streak >= 3 && (
            <div className="flex items-center gap-2 text-amber-500 font-black animate-bounce bg-amber-50 px-6 py-2 rounded-full border-2 border-amber-200">
              <Zap fill="currentColor" />
              ¡RACHA DE {streak}!
            </div>
          )}
          <Button 
            size="lg" 
            onClick={() => finalScore !== null && onComplete(finalScore)}
            className="bg-green-600 hover:bg-green-700 text-white px-16 h-20 rounded-3xl text-2xl font-black shadow-2xl shadow-green-300 transition-all hover:scale-105 active:scale-95 group"
          >
            Continuar
            <ArrowRight className="ml-3 h-8 w-8 group-hover:translate-x-2 transition-transform" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}

function BookOpen(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

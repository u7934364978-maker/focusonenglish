'use client';

import React from 'react';
import { ReadingExercise, EvaluationResult } from '@/lib/exercise-types';
import QuestionRenderer from './QuestionRenderer';
import { BookOpen, Clock, BarChart } from 'lucide-react';
import Markdown from '../Markdown';

interface ReadingRendererProps {
  exercise: ReadingExercise;
  answers: { [id: string]: string };
  onAnswer: (id: string, answer: string) => void;
  showFeedback: boolean;
  aiEvaluations: { [id: string]: EvaluationResult };
  onCheck: () => void;
  evaluating: boolean;
  onNext: () => void;
}

export default function ReadingRenderer({
  exercise,
  answers,
  onAnswer,
  showFeedback,
  aiEvaluations,
  onCheck,
  evaluating,
  onNext
}: ReadingRendererProps) {
  
  return (
    <div className="grid lg:grid-cols-2 gap-8 animate-in fade-in duration-700">
      {/* Reading Passage */}
      <div className="lg:sticky lg:top-4 lg:self-start">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border-2 border-slate-100 dark:border-slate-700 shadow-xl relative">
          {/* Header Stats */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-black uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{exercise.title}</span>
            </div>
            {exercise.readingTime && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 rounded-full text-xs font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>{exercise.readingTime} min read</span>
              </div>
            )}
            {exercise.wordCount && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 rounded-full text-xs font-bold">
                <BarChart className="w-3.5 h-3.5" />
                <span>{exercise.wordCount} words</span>
              </div>
            )}
          </div>

          <div className="lg:max-h-[calc(100vh-18rem)] overflow-y-auto pr-4 custom-scrollbar">
            <Markdown 
              content={exercise.text || exercise.readingText || ''} 
              vocabulary={exercise.vocabularyHelp}
            />
          </div>

          {/* Mobile hint for tooltips */}
          <p className="mt-6 text-[10px] text-slate-400 dark:text-slate-500 italic flex items-center gap-1.5">
            <span className="w-4 h-4 flex items-center justify-center bg-slate-100 dark:bg-slate-700 rounded text-[8px] font-black">TIP</span>
            Hover over underlined words for definitions
          </p>
        </div>
      </div>

      {/* Questions Panel */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h4 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-indigo-200 dark:shadow-none shadow-lg">
              <span className="text-white text-sm">Q&A</span>
            </div>
            Comprehension Task
          </h4>
        </div>

        <div className="grid gap-6">
          {exercise.questions.map((question, idx) => (
            <QuestionRenderer
              key={question.id}
              question={question}
              index={idx}
              userAnswer={answers[question.id] || ''}
              onChange={onAnswer}
              showFeedback={showFeedback}
              evaluation={aiEvaluations[question.id]}
            />
          ))}
        </div>

        {!showFeedback ? (
          <button
            onClick={onCheck}
            disabled={evaluating}
            className="w-full mt-4 group relative overflow-hidden px-8 py-5 bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-700 dark:to-indigo-900 text-white rounded-2xl font-black text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <div className="relative z-10 flex items-center justify-center gap-3">
              {evaluating ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                  <span>AI Analyzing...</span>
                </>
              ) : (
                <>
                  <span>Evaluate Comprehension</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        ) : (
          <button
            onClick={onNext}
            className="w-full mt-4 px-8 py-5 bg-slate-900 dark:bg-slate-700 text-white rounded-2xl font-black text-xl shadow-xl transition-all hover:brightness-110 active:scale-[0.98]"
          >
            Continue to Next Step →
          </button>
        )}
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { EvaluationResult } from '@/lib/exercise-types';
import EnhancedFeedback from '@/components/course/EnhancedFeedback';

interface WritingRendererProps {
  exercise: any;
  answers: { [id: string]: string };
  onAnswer: (id: string, answer: string) => void;
  showFeedback: boolean;
  aiEvaluations: { [id: string]: EvaluationResult };
  onCheck: () => void;
  evaluating: boolean;
  lessonLevel: string;
}

export default function WritingRenderer({
  exercise,
  answers,
  onAnswer,
  showFeedback,
  aiEvaluations,
  onCheck,
  evaluating,
  lessonLevel
}: WritingRendererProps) {
  const currentAnswer = answers[exercise.id] || '';
  const wordCount = currentAnswer.split(/\s+/).filter(w => w.length > 0).length;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-3xl p-8 border-2 border-amber-100 dark:border-amber-900 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white dark:bg-amber-900 rounded-xl shadow-sm text-3xl">
            ✍️
          </div>
          <div>
            <h3 className="text-2xl font-black text-amber-900 dark:text-amber-100 leading-tight">
              Writing Task: {exercise.writingType}
            </h3>
            <span className="inline-block mt-1 px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-xs font-black uppercase tracking-widest rounded-full">
              {exercise.minWords}-{exercise.maxWords} Words Target
            </span>
          </div>
        </div>

        <div className="bg-white/60 dark:bg-slate-900/40 p-6 rounded-2xl border border-amber-200 dark:border-amber-800 mb-8">
          <p className="font-black text-amber-800 dark:text-amber-300 text-xs uppercase tracking-wider mb-3">Writing Prompt</p>
          <p className="text-slate-800 dark:text-slate-200 text-lg leading-relaxed font-medium">
            {exercise.prompt}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-amber-100 dark:border-amber-800 shadow-sm">
            <p className="font-black text-amber-700 dark:text-amber-400 text-[10px] uppercase tracking-widest mb-1">Time Limit</p>
            <p className="text-slate-700 dark:text-slate-300 font-bold">{exercise.timeLimit} Minutes</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-amber-100 dark:border-amber-800 shadow-sm">
            <p className="font-black text-amber-700 dark:text-amber-400 text-[10px] uppercase tracking-widest mb-1">Complexity</p>
            <p className="text-slate-700 dark:text-slate-300 font-bold capitalize">{exercise.writingType}</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-amber-100 dark:border-amber-800 shadow-sm">
            <p className="font-black text-amber-700 dark:text-amber-400 text-[10px] uppercase tracking-widest mb-1">Min/Max Words</p>
            <p className="text-slate-700 dark:text-slate-300 font-bold">{exercise.minWords} - {exercise.maxWords}</p>
          </div>
        </div>
      </div>

      {exercise.tips && exercise.tips.length > 0 && (
        <div className="bg-orange-50 dark:bg-orange-950/20 rounded-2xl p-6 border border-orange-200 dark:border-orange-900">
          <h4 className="font-black text-orange-900 dark:text-orange-100 text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
            <span>💡</span> Professional Tips
          </h4>
          <ul className="grid gap-3 md:grid-cols-2">
            {exercise.tips.map((tip: string, idx: number) => (
              <li key={idx} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <label className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center bg-indigo-600 text-white rounded-lg text-sm italic shadow-sm">W</span>
            Your Composition
          </label>
          <div className="flex items-center gap-4">
            <span className={`text-xs font-black uppercase tracking-widest ${
              wordCount >= exercise.minWords && wordCount <= exercise.maxWords 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-slate-400'
            }`}>
              {wordCount} Words
            </span>
          </div>
        </div>
        
        <textarea
          value={currentAnswer}
          onChange={(e) => onAnswer(exercise.id, e.target.value)}
          placeholder="Craft your response here..."
          rows={15}
          disabled={showFeedback || evaluating}
          className="w-full px-6 py-5 rounded-3xl border-2 border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-slate-900 focus:outline-none transition-all font-serif text-lg leading-relaxed shadow-inner disabled:opacity-70"
        />
      </div>

      {exercise.exampleResponse && (
        <details className="group">
          <summary className="flex items-center gap-2 cursor-pointer font-black text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors uppercase tracking-widest text-xs select-none">
            <span className="transition-transform group-open:rotate-90">▶</span>
            Examine Model Response
          </summary>
          <div className="mt-4 p-8 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-inner">
            <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-loose italic">
              {exercise.exampleResponse}
            </p>
          </div>
        </details>
      )}

      {!showFeedback && (
        <button
          onClick={onCheck}
          disabled={evaluating || wordCount < 5}
          className="group relative w-full overflow-hidden px-8 py-5 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-2xl font-black text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <div className="relative z-10 flex items-center justify-center gap-3">
            {evaluating ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                <span className="animate-pulse">AI Grading in Progress...</span>
              </>
            ) : (
              <>
                <span>Submit for AI Evaluation</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      )}

      {showFeedback && aiEvaluations[exercise.id] && (
        <EnhancedFeedback
          type="writing"
          evaluation={aiEvaluations[exercise.id]}
          userAnswer={currentAnswer}
        />
      )}
      
      {showFeedback && !aiEvaluations[exercise.id] && (
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-800 animate-in zoom-in duration-300">
          <p className="text-amber-800 dark:text-amber-200 font-black flex items-center gap-2">
            <span>✅</span> Writing Submitted!
          </p>
          <p className="text-slate-700 dark:text-slate-400 mt-2">
            Your composition has been submitted successfully.
          </p>
        </div>
      )}
    </div>
  );
}

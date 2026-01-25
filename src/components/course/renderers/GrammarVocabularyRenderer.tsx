'use client';

import React from 'react';
import { GrammarExercise, VocabularyExercise, WordFormationExercise, EvaluationResult } from '@/lib/exercise-types';
import QuestionRenderer from './QuestionRenderer';

interface GrammarVocabularyRendererProps {
  exercise: GrammarExercise | VocabularyExercise | WordFormationExercise;
  answers: { [id: string]: string };
  onAnswer: (id: string, answer: string) => void;
  showFeedback: boolean;
  aiEvaluations: { [id: string]: EvaluationResult };
  onCheck: () => void;
  evaluating: boolean;
}

export default function GrammarVocabularyRenderer({
  exercise,
  answers,
  onAnswer,
  showFeedback,
  aiEvaluations,
  onCheck,
  evaluating
}: GrammarVocabularyRendererProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Explanation Section */}
      {(exercise.type === 'grammar' || (exercise.type === 'vocabulary' && (exercise as VocabularyExercise).vocabularySet)) && (
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 rounded-2xl p-8 border-2 border-indigo-100 dark:border-indigo-900 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white dark:bg-indigo-900 rounded-xl shadow-sm text-3xl">
              {exercise.type === 'grammar' ? '📚' : '📖'}
            </div>
            <div>
              <h3 className="text-2xl font-black text-indigo-900 dark:text-indigo-100 leading-tight">
                {exercise.title}
              </h3>
              <span className="inline-block mt-1 px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-black uppercase tracking-widest rounded-full">
                {exercise.type} Exercise
              </span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              {exercise.type === 'grammar' && (exercise as GrammarExercise).grammarPoint && (
                <div className="bg-white/60 dark:bg-slate-900/40 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <p className="font-black text-indigo-800 dark:text-indigo-300 text-xs uppercase tracking-wider mb-2">Grammar Focus</p>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">{(exercise as GrammarExercise).grammarPoint}</p>
                </div>
              )}
              
              {exercise.explanation && (
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="font-black text-indigo-800 dark:text-indigo-300 text-xs uppercase tracking-wider mb-2">Key Explanation</p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line bg-white/40 dark:bg-slate-900/20 p-4 rounded-xl border border-indigo-100/50 dark:border-indigo-900/50">
                    {exercise.explanation}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {exercise.type === 'grammar' && (exercise as GrammarExercise).examples && (exercise as GrammarExercise).examples!.length > 0 && (
                <div className="bg-indigo-900 dark:bg-indigo-950 rounded-2xl p-6 text-white shadow-lg">
                  <p className="font-black text-indigo-300 text-xs uppercase tracking-widest mb-4">Mastery Examples</p>
                  <ul className="space-y-3">
                    {(exercise as GrammarExercise).examples!.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform" />
                        <span className="text-indigo-50 font-medium italic leading-relaxed">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exercise.type === 'vocabulary' && ((exercise as VocabularyExercise).vocabularySet || (exercise as VocabularyExercise).words) && (
                <div className="bg-indigo-900 dark:bg-indigo-950 rounded-2xl p-6 text-white shadow-lg">
                  <p className="font-black text-indigo-300 text-xs uppercase tracking-widest mb-4">Essential Vocabulary</p>
                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                    {((exercise as VocabularyExercise).vocabularySet || (exercise as VocabularyExercise).words)!.map((v, idx) => (
                      <div key={idx} className="border-b border-indigo-800 pb-3 last:border-0 last:pb-0">
                        <p className="font-black text-white">{v.word}</p>
                        <p className="text-indigo-200 text-sm italic">{v.definition}</p>
                        <p className="text-indigo-400 text-xs mt-1">Ex: {v.example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Word Formation Text */}
      {exercise.type === 'word-formation' && (exercise as WordFormationExercise).text && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border-2 border-slate-100 dark:border-slate-700 shadow-xl">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
            Reading Context
          </h3>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed whitespace-pre-line font-serif italic">
              {(exercise as WordFormationExercise).text}
            </p>
          </div>
        </div>
      )}

      {/* Practice Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h4 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-lg text-sm italic shadow-sm">P</span>
            {exercise.type === 'word-formation' ? 'Word Formation Task' : 'Practical Application'}
          </h4>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {exercise.questions.length} Questions
          </span>
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
      </div>

      {!showFeedback && exercise.questions.length > 0 && (
        <button
          onClick={onCheck}
          disabled={evaluating}
          className="group relative w-full overflow-hidden px-8 py-5 bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-700 dark:to-indigo-900 text-white rounded-2xl font-black text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <div className="relative z-10 flex items-center justify-center gap-3">
            {evaluating ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                <span className="animate-pulse">Analyzing with AI...</span>
              </>
            ) : (
              <>
                <span>Submit Answers</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      )}
    </div>
  );
}

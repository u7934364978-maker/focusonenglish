'use client';

import React from 'react';
import { EvaluationResult } from '@/lib/exercise-types';

interface MatchingRendererProps {
  exercise: any;
  answers: { [id: string]: string };
  onAnswer: (id: string, answer: string) => void;
  showFeedback: boolean;
  aiEvaluations: { [id: string]: EvaluationResult };
  onCheck: () => void;
  evaluating: boolean;
}

export default function MatchingRenderer({
  exercise,
  answers,
  onAnswer,
  showFeedback,
  aiEvaluations,
  onCheck,
  evaluating
}: MatchingRendererProps) {
  const isCollocation = exercise.type === 'collocation-matching' || exercise.type === 'matching';
  const isIdiom = exercise.type === 'idioms-expressions';
  const items = exercise.pairs || exercise.items || [];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 rounded-3xl p-8 border-2 border-yellow-100 dark:border-yellow-900 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white dark:bg-yellow-900 rounded-xl shadow-sm text-3xl">
            {isIdiom ? '💬' : '🧩'}
          </div>
          <div>
            <h3 className="text-2xl font-black text-yellow-900 dark:text-yellow-100 leading-tight">
              {exercise.title}
            </h3>
            <span className="inline-block mt-1 px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-xs font-black uppercase tracking-widest rounded-full">
              Matching Challenge
            </span>
          </div>
        </div>

        <div className="bg-white/60 dark:bg-slate-900/40 p-5 rounded-xl border border-yellow-200 dark:border-yellow-800">
          <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic">
            💡 {exercise.instructions}
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {items.map((item: any, idx: number) => {
          const term = item.word || item.idiom || item.left || item.term || `Item ${idx + 1}`;
          const definition = item.correctMatch || item.correctUsage || item.meaning || item.right || item.definition;
          const itemId = item.id || term || `match-${idx}`;
          const userAnswer = answers[itemId] || '';
          const evaluation = aiEvaluations[itemId];
          const isCorrect = showFeedback && (
            evaluation?.isCorrect || 
            userAnswer.toLowerCase().trim() === (definition || '').toLowerCase().trim()
          );

          return (
            <div key={itemId} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:border-yellow-200 dark:hover:border-yellow-900">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-600 text-white font-bold text-sm flex-shrink-0">
                  {idx + 1}
                </span>
                
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-slate-900 dark:text-white">{term}</span>
                    <span className="text-slate-400">↔</span>
                  </div>

                  <div className="space-y-3">
                    {item.options ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {item.options.map((option: string, optIdx: number) => {
                          const isSelected = userAnswer === option;
                          const isCorrectOption = option.toLowerCase().trim() === (definition || '').toLowerCase().trim();
                          
                          return (
                            <button
                              key={optIdx}
                              onClick={() => !showFeedback && onAnswer(itemId, option)}
                              disabled={showFeedback}
                              className={`text-left p-4 rounded-xl border-2 transition-all font-bold ${
                                isSelected && !showFeedback
                                  ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-950/30'
                                  : 'border-slate-100 dark:border-slate-800 hover:border-yellow-200 bg-white dark:bg-slate-950'
                              } ${
                                showFeedback && isCorrectOption
                                  ? 'border-green-500 bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400'
                                  : showFeedback && isSelected && !isCorrectOption
                                  ? 'border-red-500 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400'
                                  : ''
                              } disabled:cursor-not-allowed`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xs text-slate-400 uppercase tracking-widest">{String.fromCharCode(65 + optIdx)}</span>
                                <span>{option}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => onAnswer(itemId, e.target.value)}
                        disabled={showFeedback}
                        placeholder="Type the matching meaning..."
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none font-bold ${
                          showFeedback
                            ? isCorrect
                              ? 'border-green-500 bg-green-50 text-green-900 dark:text-green-400'
                              : 'border-red-500 bg-red-50 text-red-900 dark:text-red-400'
                            : 'border-slate-200 focus:border-yellow-500 bg-white dark:bg-slate-950'
                        }`}
                      />
                    )}

                    {showFeedback && (
                      <div className={`p-4 rounded-xl border-2 ${
                        isCorrect 
                          ? 'bg-green-50/50 border-green-100 dark:bg-green-950/10' 
                          : 'bg-amber-50/50 border-amber-100 dark:bg-amber-950/10'
                      }`}>
                        {!isCorrect && (
                          <p className="text-sm font-bold mb-2">
                            <span className="text-slate-400 uppercase tracking-widest text-[10px] block mb-1">Correct Answer</span>
                            <span className="text-green-700 dark:text-green-400">{definition}</span>
                          </p>
                        )}
                        {item.explanation && (
                          <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
                            💡 {item.explanation}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!showFeedback && (
        <button
          onClick={onCheck}
          disabled={evaluating}
          className="group relative w-full overflow-hidden px-8 py-5 bg-gradient-to-r from-yellow-600 to-amber-700 text-white rounded-2xl font-black text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <div className="relative z-10 flex items-center justify-center gap-3">
            {evaluating ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                <span className="animate-pulse">Matching Patterns...</span>
              </>
            ) : (
              <>
                <span>Submit Matches</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      )}
    </div>
  );
}

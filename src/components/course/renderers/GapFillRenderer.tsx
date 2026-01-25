'use client';

import React from 'react';
import { 
  EvaluationResult, 
  GapFillTextExercise, 
  MultipleChoiceClozeExercise, 
  OpenClozeExercise, 
  ExtendedGapFillExercise 
} from '@/lib/exercise-types';

interface GapFillRendererProps {
  exercise: any;
  answers: { [id: string]: string };
  onAnswer: (id: string, answer: string) => void;
  showFeedback: boolean;
  aiEvaluations: { [id: string]: EvaluationResult };
  onCheck: () => void;
  evaluating: boolean;
}

export default function GapFillRenderer({
  exercise,
  answers,
  onAnswer,
  showFeedback,
  aiEvaluations,
  onCheck,
  evaluating
}: GapFillRendererProps) {
  const isTextBased = !!exercise.text;
  const isMultipleChoice = exercise.type === 'multiple-choice-cloze';

  const renderGaps = (text: string) => {
    // Support patterns like [1], (1), [gap1], ___
    return text.split(/(\[\d+\]|\(\d+\)|\(\d+\)___+|___+)/).map((part, index) => {
      const gapMatch = part.match(/\[(\d+)\]/) || part.match(/\((\d+)\)/);
      if (gapMatch) {
        const gapNum = parseInt(gapMatch[1]);
        const gapId = `gap-${gapNum}`;
        const userAnswer = answers[gapId] || '';
        
        // Find gap data if available
        const gapData = (exercise.gaps || exercise.questions)?.find((g: any) => 
          g.number === gapNum || g.gapNumber === gapNum || g.id === gapNum || g.id === gapId
        );

        const isCorrect = showFeedback && (
          userAnswer.toLowerCase().trim() === gapData?.correctAnswer?.toLowerCase().trim() ||
          gapData?.acceptableAlternatives?.some((a: string) => a.toLowerCase().trim() === userAnswer.toLowerCase().trim()) ||
          gapData?.correctAnswers?.some((a: string) => a.toLowerCase().trim() === userAnswer.toLowerCase().trim())
        );

        if (isMultipleChoice && gapData?.options) {
          return (
            <span key={index} className="inline-block mx-1 align-bottom">
              <span className="text-xs font-black text-emerald-600 mr-1">[{gapNum}]</span>
              <select
                value={userAnswer}
                onChange={(e) => onAnswer(gapId, e.target.value)}
                disabled={showFeedback}
                className={`px-2 py-1 border-2 rounded-lg font-bold transition-all outline-none ${
                  showFeedback
                    ? isCorrect
                      ? 'border-green-500 bg-green-50 text-green-900'
                      : 'border-red-500 bg-red-50 text-red-900'
                    : 'border-emerald-200 focus:border-emerald-500 bg-white dark:bg-slate-900'
                }`}
              >
                <option value="">Select...</option>
                {gapData.options.map((opt: string) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </span>
          );
        }

        return (
          <span key={index} className="inline-block mx-1 align-bottom relative group">
            <span className="text-xs font-black text-emerald-600 mr-1">[{gapNum}]</span>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => onAnswer(gapId, e.target.value)}
              disabled={showFeedback}
              placeholder="..."
              className={`px-3 py-1 border-b-2 border-t-0 border-l-0 border-r-0 rounded-none w-32 text-center font-bold transition-all outline-none ${
                showFeedback
                  ? isCorrect
                    ? 'border-green-500 bg-green-50/50 text-green-900 dark:text-green-400'
                    : 'border-red-500 bg-red-50/50 text-red-900 dark:text-red-400'
                  : 'border-emerald-300 focus:border-emerald-600 bg-transparent dark:text-white'
              }`}
            />
            {showFeedback && !isCorrect && gapData?.correctAnswer && (
              <span className="absolute -top-6 left-0 right-0 text-center text-[10px] font-black text-green-600 uppercase tracking-widest bg-white dark:bg-slate-900 shadow-sm rounded px-1 z-10">
                {gapData.correctAnswer}
              </span>
            )}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-3xl p-8 border-2 border-emerald-100 dark:border-emerald-900 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white dark:bg-emerald-900 rounded-xl shadow-sm text-3xl">
            📋
          </div>
          <div>
            <h3 className="text-2xl font-black text-emerald-900 dark:text-emerald-100 leading-tight">
              {exercise.title}
            </h3>
            <span className="inline-block mt-1 px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-widest rounded-full">
              Gap-Fill Exercise
            </span>
          </div>
        </div>

        <div className="bg-white/60 dark:bg-slate-900/40 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic">
            💡 {exercise.instructions}
          </p>
        </div>
      </div>

      {isTextBased ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border-2 border-slate-100 dark:border-slate-800 shadow-xl">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="text-xl leading-[2.5rem] text-slate-800 dark:text-slate-200 font-serif">
              {renderGaps(exercise.text)}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-6">
          {(exercise.sentences || exercise.questions || exercise.items || []).map((item: any, idx: number) => {
            const gapId = item.id || `gap-${idx + 1}`;
            const userAnswer = answers[gapId] || '';
            const isCorrect = showFeedback && (
              userAnswer.toLowerCase().trim() === item.correctAnswer?.toLowerCase().trim() ||
              item.acceptableAnswers?.some((a: string) => a.toLowerCase().trim() === userAnswer.toLowerCase().trim())
            );

            return (
              <div key={gapId} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-sm flex-shrink-0">
                    {idx + 1}
                  </span>
                  <div className="flex-1 space-y-4">
                    <p className="text-lg text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
                      {item.sentence || item.context || item.prompt}
                    </p>
                    
                    <div className="relative max-w-md">
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => onAnswer(gapId, e.target.value)}
                        disabled={showFeedback}
                        placeholder="Type your answer..."
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none font-bold ${
                          showFeedback
                            ? isCorrect
                              ? 'border-green-500 bg-green-50 text-green-900 dark:text-green-400'
                              : 'border-red-500 bg-red-50 text-red-900 dark:text-red-400'
                            : 'border-slate-200 focus:border-emerald-500 bg-white dark:bg-slate-950'
                        }`}
                      />
                      {showFeedback && !isCorrect && item.correctAnswer && (
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs font-black text-green-600 uppercase tracking-widest">Correct:</span>
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{item.correctAnswer}</span>
                        </div>
                      )}
                    </div>

                    {item.explanation && showFeedback && (
                      <p className="text-sm text-slate-500 italic">💡 {item.explanation}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showFeedback && (exercise.gaps || exercise.questions) && (
        <div className="space-y-4 pt-8">
          <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-2 px-2">
            <span className="w-2 h-6 bg-emerald-500 rounded-full" />
            Detailed Review
          </h4>
          <div className="grid gap-4 md:grid-cols-2">
            {(exercise.gaps || exercise.questions).map((gap: any, idx: number) => {
              const gapNum = gap.number || gap.gapNumber || (idx + 1);
              const gapId = gap.id || `gap-${gapNum}`;
              const userAnswer = answers[gapId] || '';
              const isCorrect = (
                userAnswer.toLowerCase().trim() === gap.correctAnswer?.toLowerCase().trim() ||
                gap.acceptableAlternatives?.some((a: string) => a.toLowerCase().trim() === userAnswer.toLowerCase().trim()) ||
                gap.correctAnswers?.some((a: string) => a.toLowerCase().trim() === userAnswer.toLowerCase().trim())
              );

              return (
                <div key={idx} className={`p-4 rounded-2xl border-2 ${
                  isCorrect 
                    ? 'bg-green-50/50 border-green-100 dark:bg-green-950/10 dark:border-green-900/50' 
                    : 'bg-red-50/50 border-red-100 dark:bg-red-950/10 dark:border-red-900/50'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Gap {gapNum}</span>
                    <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>{isCorrect ? '✅' : '❌'}</span>
                  </div>
                  <p className="text-sm font-bold">
                    <span className="text-slate-400">Answer:</span> <span className={isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>{userAnswer || '(Empty)'}</span>
                  </p>
                  {!isCorrect && (
                    <p className="text-sm font-bold mt-1">
                      <span className="text-slate-400">Should be:</span> <span className="text-green-700 dark:text-green-400">{gap.correctAnswer}</span>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {!showFeedback && (
        <button
          onClick={onCheck}
          disabled={evaluating}
          className="group relative w-full overflow-hidden px-8 py-5 bg-gradient-to-r from-emerald-600 to-teal-800 text-white rounded-2xl font-black text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <div className="relative z-10 flex items-center justify-center gap-3">
            {evaluating ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                <span className="animate-pulse">Checking Gaps...</span>
              </>
            ) : (
              <>
                <span>Verify All Gaps</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      )}
    </div>
  );
}

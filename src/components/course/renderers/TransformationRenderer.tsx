'use client';

import React from 'react';
import { EvaluationResult, KeyWordTransformationExercise, ParaphrasingExercise } from '@/lib/exercise-types';
import QuestionRenderer from './QuestionRenderer';

interface TransformationRendererProps {
  exercise: KeyWordTransformationExercise | ParaphrasingExercise;
  answers: { [id: string]: string };
  onAnswer: (id: string, answer: string) => void;
  showFeedback: boolean;
  aiEvaluations: { [id: string]: EvaluationResult };
  onCheck: () => void;
  evaluating: boolean;
}

export default function TransformationRenderer({
  exercise,
  answers,
  onAnswer,
  showFeedback,
  aiEvaluations,
  onCheck,
  evaluating
}: TransformationRendererProps) {
  const isKeyWord = exercise.type === 'key-word-transformation' || exercise.type === 'key-word-transformations';

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-3xl p-8 border-2 border-cyan-100 dark:border-cyan-900 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white dark:bg-cyan-900 rounded-xl shadow-sm text-3xl">
            {isKeyWord ? '🔑' : '🔄'}
          </div>
          <div>
            <h3 className="text-2xl font-black text-cyan-900 dark:text-cyan-100 leading-tight">
              {exercise.title}
            </h3>
            <span className="inline-block mt-1 px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 text-xs font-black uppercase tracking-widest rounded-full">
              {isKeyWord ? 'Key Word Transformation' : 'Paraphrasing Task'}
            </span>
          </div>
        </div>

        <div className="bg-white/60 dark:bg-slate-900/40 p-5 rounded-xl border border-cyan-200 dark:border-cyan-800">
          <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic">
            💡 {exercise.instructions}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h4 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center bg-cyan-600 text-white rounded-lg text-sm italic shadow-sm">T</span>
            Transformations
          </h4>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {isKeyWord ? (exercise as KeyWordTransformationExercise).transformations.length : (exercise as ParaphrasingExercise).items.length} Tasks
          </span>
        </div>

        <div className="grid gap-6">
          {isKeyWord ? (
            (exercise as KeyWordTransformationExercise).transformations.map((item, idx) => (
              <div key={item.id} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-600 text-white font-bold text-xs flex-shrink-0">
                    {idx + 1}
                  </span>
                  <div className="flex-1 space-y-4">
                    <p className="text-lg text-slate-800 dark:text-slate-200 font-medium">{item.sentence || item.question}</p>
                    
                    <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-2">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Key Word</span>
                      <span className="text-2xl font-black text-cyan-700 dark:text-cyan-400 tracking-widest uppercase">{item.keyWord}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2 text-lg text-slate-700 dark:text-slate-300 font-medium">
                        <span>{item.startOfAnswer}</span>
                        <input
                          type="text"
                          value={answers[item.id] || ''}
                          onChange={(e) => onAnswer(item.id, e.target.value)}
                          disabled={showFeedback}
                          placeholder="Complete the sentence..."
                          className="flex-1 min-w-[200px] bg-transparent border-b-2 border-dashed border-cyan-300 dark:border-cyan-700 focus:border-cyan-500 outline-none px-2 py-1 transition-colors"
                        />
                      </div>
                      <p className="text-xs text-slate-400 italic">(Include the key word in your answer)</p>
                    </div>
                  </div>
                </div>

                {showFeedback && (
                  <div className={`mt-4 p-4 rounded-xl border-2 ${
                    aiEvaluations[item.id]?.isCorrect 
                      ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900' 
                      : 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900'
                  }`}>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{aiEvaluations[item.id]?.isCorrect ? '✅' : '❌'}</span>
                      <div className="flex-1 space-y-2">
                        <p className="font-bold text-slate-900 dark:text-white">
                          {aiEvaluations[item.id]?.isCorrect ? 'Excellent Transformation!' : 'Keep Practicing'}
                        </p>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          <span className="font-bold">Correct:</span> {item.correctAnswer}
                        </p>
                        {item.explanation && (
                          <p className="text-xs text-slate-600 dark:text-slate-400 italic">💡 {item.explanation}</p>
                        )}
                        {aiEvaluations[item.id]?.detailedExplanation && (
                          <div className="mt-2 text-xs bg-white/50 dark:bg-black/20 p-2 rounded">
                            <strong>AI Analysis:</strong> {aiEvaluations[item.id].detailedExplanation}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            (exercise as ParaphrasingExercise).items.map((item, idx) => (
              <div key={item.id} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex-shrink-0">
                    {idx + 1}
                  </span>
                  <div className="flex-1 space-y-4">
                    <p className="text-lg text-slate-800 dark:text-slate-200 font-medium italic">"{item.originalSentence}"</p>
                    
                    <textarea
                      value={answers[item.id] || ''}
                      onChange={(e) => onAnswer(item.id, e.target.value)}
                      disabled={showFeedback}
                      placeholder="Rewrite the sentence with the same meaning..."
                      className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:border-blue-500 outline-none transition-all"
                      rows={2}
                    />
                  </div>
                </div>

                {showFeedback && (
                  <div className={`mt-4 p-4 rounded-xl border-2 ${
                    aiEvaluations[item.id]?.isCorrect 
                      ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900' 
                      : 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900'
                  }`}>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{aiEvaluations[item.id]?.isCorrect ? '✅' : '❌'}</span>
                      <div className="flex-1 space-y-2">
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          <span className="font-bold">Model Answer:</span> {item.correctParaphrase}
                        </p>
                        {item.explanation && (
                          <p className="text-xs text-slate-600 dark:text-slate-400 italic">💡 {item.explanation}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {!showFeedback && (
        <button
          onClick={onCheck}
          disabled={evaluating}
          className="group relative w-full overflow-hidden px-8 py-5 bg-gradient-to-r from-cyan-600 to-blue-800 text-white rounded-2xl font-black text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <div className="relative z-10 flex items-center justify-center gap-3">
            {evaluating ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                <span className="animate-pulse">Analyzing Transformations...</span>
              </>
            ) : (
              <>
                <span>Submit Transformations</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      )}
    </div>
  );
}

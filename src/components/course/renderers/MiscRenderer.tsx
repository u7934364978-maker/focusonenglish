'use client';

import React from 'react';
import { EvaluationResult } from '@/lib/exercise-types';
import SentenceBuilder from '@/components/course/SentenceBuilder';
import QuestionRenderer from './QuestionRenderer';

interface MiscRendererProps {
  exercise: any;
  answers: { [id: string]: string };
  onAnswer: (id: string, answer: string) => void;
  showFeedback: boolean;
  aiEvaluations: { [id: string]: EvaluationResult };
  onCheck: () => void;
  evaluating: boolean;
  setExerciseScores: React.Dispatch<React.SetStateAction<{ [exerciseId: string]: number }>>;
  exerciseScores: { [exerciseId: string]: number };
}

export default function MiscRenderer({
  exercise,
  answers,
  onAnswer,
  showFeedback,
  aiEvaluations,
  onCheck,
  evaluating,
  setExerciseScores,
  exerciseScores
}: MiscRendererProps) {
  const isSentenceBuilding = exercise.type === 'sentence-building';
  const isOrdering = exercise.type === 'sentence-ordering' || exercise.type === 'sentence-reordering';
  const isPhrasalVerb = exercise.type === 'phrasal-verbs';
  const isErrorIdentification = exercise.type === 'error-identification';
  const isSentenceCompletion = exercise.type === 'sentence-completion';

  const getIcon = () => {
    if (isSentenceBuilding) return '🏗️';
    if (isOrdering) return '🔢';
    if (isPhrasalVerb) return '🚀';
    if (isErrorIdentification) return '🔍';
    if (isSentenceCompletion) return '✏️';
    return '📝';
  };

  const getColorClass = () => {
    if (isSentenceBuilding) return 'from-coral-50 to-orange-50 dark:from-coral-950/30 dark:to-orange-950/30 border-coral-100';
    if (isOrdering) return 'from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 border-pink-100';
    if (isPhrasalVerb) return 'from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 border-cyan-100';
    if (isErrorIdentification) return 'from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border-red-100';
    if (isSentenceCompletion) return 'from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-purple-100';
    return 'from-slate-50 to-slate-100 border-slate-200';
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className={`bg-gradient-to-br ${getColorClass()} rounded-3xl p-8 border-2 shadow-sm`}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm text-3xl">
            {getIcon()}
          </div>
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
              {exercise.title}
            </h3>
            <span className="inline-block mt-1 px-3 py-1 bg-white/50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-black uppercase tracking-widest rounded-full">
              {exercise.type.replace(/-/g, ' ')}
            </span>
          </div>
        </div>

        <div className="bg-white/60 dark:bg-slate-900/40 p-5 rounded-xl border border-white/50 dark:border-slate-800">
          <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic">
            💡 {exercise.instructions || exercise.description}
          </p>
        </div>
      </div>

      {isPhrasalVerb && exercise.verbs && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-cyan-100 dark:border-cyan-950 shadow-sm">
          <h4 className="font-black text-cyan-900 dark:text-cyan-400 text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
            <span>📚</span> Verb Reference
          </h4>
          <div className="grid gap-4 md:grid-cols-2">
            {exercise.verbs.map((verb: any, idx: number) => (
              <div key={idx} className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-2xl border border-cyan-100 dark:border-cyan-900">
                <p className="font-black text-cyan-900 dark:text-cyan-200 mb-1">{verb.verb}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{verb.meaning}</p>
                {verb.examples && (
                  <div className="mt-2 space-y-1">
                    {verb.examples.map((ex: string, exIdx: number) => (
                      <p key={exIdx} className="text-xs italic text-slate-500 dark:text-slate-400">• {ex}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {isSentenceBuilding ? (
          exercise.challenges.map((challenge: any, idx: number) => (
            <div key={challenge.id} className="space-y-4">
              <div className="flex items-center gap-3 px-2">
                <span className="px-3 py-1 bg-coral-600 text-white rounded-lg font-black text-xs uppercase">
                  Task {idx + 1}
                </span>
              </div>
              <SentenceBuilder
                challenge={challenge}
                showHints={exercise.showHints}
                showTranslations={exercise.showTranslations}
                onComplete={(isCorrect, userSentence, score) => {
                  const currentScores = exerciseScores[exercise.id] || 0;
                  const newScore = ((currentScores * idx) + score) / (idx + 1);
                  setExerciseScores(prev => ({ ...prev, [exercise.id]: newScore }));
                }}
              />
            </div>
          ))
        ) : isOrdering ? (
          (exercise.items || [{ sentences: exercise.sentences, correctOrder: exercise.correctOrder, id: 'single' }]).map((item: any, itemIdx: number) => {
            const sentences = item.shuffledSentences || item.sentences || [];
            const correctOrder = item.correctOrder || Array.from({length: sentences.length}, (_, i) => i);
            const itemId = item.id || `reorder-${itemIdx}`;

            return (
              <div key={itemId} className="bg-white dark:bg-slate-900 rounded-3xl p-8 border-2 border-slate-100 dark:border-slate-800 shadow-sm">
                {item.context && (
                  <div className="mb-6 p-4 bg-pink-50 dark:bg-pink-950/20 rounded-2xl border border-pink-100 dark:border-pink-900 text-slate-700 dark:text-slate-300 italic">
                    {item.context}
                  </div>
                )}
                <div className="space-y-3">
                  {sentences.map((sentence: any, idx: number) => {
                    const numberId = `${itemId}-${idx}`;
                    const userOrder = answers[numberId] || '';
                    const sentenceText = typeof sentence === 'string' ? sentence : sentence.text;
                    const isCorrect = showFeedback && parseInt(userOrder) === correctOrder[idx] + 1;

                    return (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border-2 border-transparent hover:border-pink-200 transition-all">
                        <input
                          type="number"
                          min="1"
                          max={sentences.length}
                          value={userOrder}
                          onChange={(e) => onAnswer(numberId, e.target.value)}
                          disabled={showFeedback}
                          placeholder="#"
                          className={`w-14 h-12 rounded-xl border-2 text-center font-black text-lg transition-all ${
                            showFeedback
                              ? isCorrect
                                ? 'border-green-500 bg-green-50 text-green-700'
                                : 'border-red-500 bg-red-50 text-red-700'
                              : 'border-pink-200 focus:border-pink-500 bg-white dark:bg-slate-900'
                          }`}
                        />
                        <p className="flex-1 text-slate-800 dark:text-slate-200 font-medium">{sentenceText}</p>
                        {showFeedback && (
                          <div className={`w-8 h-8 flex items-center justify-center rounded-full font-black text-sm ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {correctOrder[idx] + 1}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid gap-6">
            {(exercise.sentences || exercise.items || exercise.questions || []).map((item: any, idx: number) => (
              <QuestionRenderer
                key={item.id}
                question={item}
                index={idx}
                userAnswer={answers[item.id] || ''}
                onChange={onAnswer}
                showFeedback={showFeedback}
                evaluation={aiEvaluations[item.id]}
              />
            ))}
          </div>
        )}
      </div>

      {!showFeedback && !isSentenceBuilding && (
        <button
          onClick={onCheck}
          disabled={evaluating}
          className="group relative w-full overflow-hidden px-8 py-5 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-2xl font-black text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <div className="relative z-10 flex items-center justify-center gap-3">
            {evaluating ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                <span className="animate-pulse">Evaluating Performance...</span>
              </>
            ) : (
              <>
                <span>Submit Final Answers</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      )}
    </div>
  );
}

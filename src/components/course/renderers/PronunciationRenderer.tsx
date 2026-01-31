'use client';

import React from 'react';
import { EvaluationResult } from '@/lib/exercise-types';
import EnhancedVoiceRecorder from '@/components/course/EnhancedVoiceRecorder';
import PronunciationPractice from '@/components/course/PronunciationPractice';
import QuestionRenderer from './QuestionRenderer';
import AudioButton from '@/components/course/AudioButton';

interface PronunciationRendererProps {
  exercise: any;
  answers: { [id: string]: string };
  onAnswer: (id: string, answer: string) => void;
  showFeedback: boolean;
  aiEvaluations: { [id: string]: EvaluationResult };
  onCheck: () => void;
  evaluating: boolean;
  pronunciationRecordings: { [key: number]: { blob: Blob; transcript: string; evaluation?: any } };
  setPronunciationRecordings: React.Dispatch<React.SetStateAction<{ [key: number]: { blob: Blob; transcript: string; evaluation?: any } }>>;
  onEvaluateRecordings: () => Promise<void>;
  lessonLevel: string;
}

export default function PronunciationRenderer({
  exercise,
  answers,
  onAnswer,
  showFeedback,
  aiEvaluations,
  onCheck,
  evaluating,
  pronunciationRecordings,
  setPronunciationRecordings,
  onEvaluateRecordings,
  lessonLevel
}: PronunciationRendererProps) {
  // Check if this is an A1-style pronunciation exercise with targetSentences and questions
  if (exercise.targetSentences && exercise.questions) {
    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        {/* Header */}
        <div className="bg-orange-50 dark:bg-orange-950/30 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-900">
          <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
            <span>🗣️</span>
            <span>{exercise.title}</span>
          </h3>
          {exercise.instructions && (
            <p className="text-slate-700 dark:text-slate-300 mt-2">💡 {exercise.instructions}</p>
          )}
          {exercise.focusPoints && exercise.focusPoints.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-semibold text-orange-800 dark:text-orange-300 mb-2">Focus Points:</p>
              <div className="space-y-1">
                {exercise.focusPoints.map((point: string, idx: number) => (
                  <div key={idx} className="text-sm text-orange-700 dark:text-orange-400">
                    • {point}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Target Sentences with Audio */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white">🎧 Listen and Repeat:</h4>
          {exercise.targetSentences.map((item: any, idx: number) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-xl p-6 border-2 border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white font-bold text-sm flex-shrink-0">
                  {idx + 1}
                </span>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{item.text || item.sentence}</p>
                    <AudioButton text={item.text || item.sentence} />
                  </div>
                  {item.phonetic && (
                    <p className="text-sm text-orange-700 dark:text-orange-400 font-mono bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-lg inline-block">{item.phonetic}</p>
                  )}
                  {item.audioUrl && (
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-400 flex items-center gap-2">
                        <span>🎧</span> Listen to the model:
                      </p>
                      <audio 
                        controls 
                        className="w-full h-10"
                        preload="metadata"
                      >
                        <source src={item.audioUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  )}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-400 mb-3 flex items-center gap-2">
                      <span>🎤</span> Now you try:
                    </p>
                    <EnhancedVoiceRecorder
                      key={`${exercise.id}-pron-${idx}`}
                      exerciseId={`${exercise.id}-pron-${idx}`}
                      prompt="Listen to the model and repeat the sentence as accurately as possible."
                      targetText={item.text || item.sentence}
                      onComplete={(blob, transcript) => {
                        setPronunciationRecordings(prev => ({
                          ...prev,
                          [idx]: { blob, transcript }
                        }));
                      }}
                    />
                    {pronunciationRecordings[idx] && (
                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                        <p className="text-sm text-blue-900 dark:text-blue-200">
                          <strong>Your recording:</strong> "{pronunciationRecordings[idx].transcript}"
                        </p>
                        {pronunciationRecordings[idx].evaluation && (
                          <div className="mt-3 space-y-2">
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-bold text-blue-900 dark:text-blue-200">Score:</span>
                              <div className="flex-1 bg-blue-200 dark:bg-blue-900 rounded-full h-2.5">
                                <div 
                                  className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000"
                                  style={{ width: `${pronunciationRecordings[idx].evaluation.overallScore}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-black text-blue-900 dark:text-blue-100">{pronunciationRecordings[idx].evaluation.overallScore}%</span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
                              {pronunciationRecordings[idx].evaluation.feedback}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Evaluate Pronunciation Button */}
        {Object.keys(pronunciationRecordings).length > 0 && (
          <button
            onClick={onEvaluateRecordings}
            disabled={evaluating || Object.values(pronunciationRecordings).every(r => r.evaluation)}
            className="group relative w-full overflow-hidden px-8 py-5 bg-gradient-to-r from-orange-600 to-orange-800 text-white rounded-2xl font-black text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <div className="relative z-10 flex items-center justify-center gap-3">
              {evaluating ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                  <span className="animate-pulse">Evaluating with AI...</span>
                </>
              ) : Object.values(pronunciationRecordings).every(r => r.evaluation) ? (
                <>
                  <span className="text-2xl">✓</span>
                  <span>Pronunciation Evaluated</span>
                </>
              ) : (
                <>
                  <span className="text-2xl">🎯</span>
                  <span>Evaluate My Pronunciation</span>
                </>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        )}

        {/* Questions */}
        {exercise.questions && exercise.questions.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>📝</span> Pronunciation Quiz:
            </h4>
            <div className="grid gap-6">
              {exercise.questions.map((q: any, idx: number) => (
                <QuestionRenderer
                  key={q.id}
                  question={q}
                  index={idx}
                  userAnswer={answers[q.id] || ''}
                  onChange={onAnswer}
                  showFeedback={showFeedback}
                  evaluation={aiEvaluations[q.id]}
                />
              ))}
            </div>

            {!showFeedback && (
              <button
                onClick={onCheck}
                disabled={evaluating}
                className="group relative w-full overflow-hidden px-8 py-5 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-2xl font-black text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  {evaluating ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                      <span className="animate-pulse">Checking...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Quiz</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

  // Otherwise, use the B2-style PronunciationPractice component
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-1 border-2 border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
        <PronunciationPractice
          exerciseId={exercise.id}
          prompt={exercise.prompt}
          targetText={exercise.targetText || ''}
          modelAudioUrl={exercise.modelAudioUrl}
          hints={exercise.hints}
          onComplete={(exerciseId, score, feedback) => {
            // We'll handle this in LessonViewer through a callback or by passing props
            // For now, it matches the original logic
          }}
        />
      </div>

      {exercise.exercises && exercise.exercises.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h4 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-lg text-sm italic shadow-sm">P</span>
              Practice Exercises
            </h4>
          </div>
          <div className="grid gap-6">
            {exercise.exercises.map((q: any, idx: number) => (
              <QuestionRenderer
                key={q.id}
                question={q}
                index={idx}
                userAnswer={answers[q.id] || ''}
                onChange={onAnswer}
                showFeedback={showFeedback}
                evaluation={aiEvaluations[q.id]}
              />
            ))}
          </div>
          
          {!showFeedback && (
            <button
              onClick={onCheck}
              disabled={evaluating}
              className="group relative w-full overflow-hidden px-8 py-5 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-2xl font-black text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                {evaluating ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Practice</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

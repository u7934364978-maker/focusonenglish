'use client';

import React, { useEffect } from 'react';
import { ListeningExercise, EvaluationResult } from '@/lib/exercise-types';
import QuestionRenderer from './QuestionRenderer';
import InteractiveTranscript from '@/components/course/InteractiveTranscript';
import { Headphones, Clock, Info } from 'lucide-react';
import Markdown from '../Markdown';

interface ListeningRendererProps {
  exercise: ListeningExercise;
  answers: { [id: string]: string };
  onAnswer: (id: string, answer: string) => void;
  showFeedback: boolean;
  aiEvaluations: { [id: string]: EvaluationResult };
  onCheck: () => void;
  evaluating: boolean;
  onNext: () => void;
  currentTime: number;
  onTimeUpdate: (time: number) => void;
  onSeek: (time: number) => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  nextExerciseAudioUrl?: string;
}

export default function ListeningRenderer({
  exercise,
  answers,
  onAnswer,
  showFeedback,
  aiEvaluations,
  onCheck,
  evaluating,
  onNext,
  currentTime,
  onTimeUpdate,
  onSeek,
  audioRef,
  nextExerciseAudioUrl
}: ListeningRendererProps) {
  
  // Phase 4: Audio Pre-fetching
  useEffect(() => {
    if (nextExerciseAudioUrl) {
      const audio = new Audio();
      audio.src = nextExerciseAudioUrl;
      audio.preload = 'auto';
      // We don't need to append it to DOM to start pre-fetching
    }
  }, [nextExerciseAudioUrl]);

  return (
    <div className="grid lg:grid-cols-2 gap-8 animate-in fade-in duration-700">
      {/* Audio Player and Transcript */}
      <div className="lg:sticky lg:top-4 lg:self-start space-y-6">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border-2 border-slate-100 dark:border-slate-700 shadow-xl overflow-hidden">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center text-orange-600 dark:text-orange-400 shadow-inner">
              <Headphones className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                Listening Task
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400">
                  <Clock className="w-3 h-3" />
                  {Math.floor(exercise.duration / 60)}m {exercise.duration % 60}s
                </span>
                <span className="mx-1 text-slate-300">•</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-500">
                  {exercise.maxReplays} Replays Max
                </span>
              </div>
            </div>
          </div>

          <audio 
            ref={audioRef}
            src={exercise.audioUrl} 
            controls 
            className="w-full mb-6 accent-orange-500"
            preload="auto"
            controlsList="nodownload"
            onTimeUpdate={(e) => onTimeUpdate(e.currentTarget.currentTime)}
          />

          <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 mb-6">
            <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <p className="text-[10px] text-blue-800 dark:text-blue-300 font-medium leading-tight">
              Listen carefully to the recording and answer the questions on the right. You can click sentences in the transcript to replay specific parts.
            </p>
          </div>

          {exercise.structuredTranscript ? (
            <div className="h-[400px]">
              <InteractiveTranscript 
                transcript={exercise.structuredTranscript}
                currentTime={currentTime}
                onSeek={onSeek}
                title="Active Transcript"
                vocabulary={exercise.vocabularyHelp}
              />
            </div>
          ) : exercise.transcript && (
            <details className="group mt-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700">
              <summary className="cursor-pointer p-4 font-black text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors list-none flex justify-between items-center">
                <span>📝 Text Transcript</span>
                <span className="text-xs font-bold px-2 py-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="p-4 pt-0 border-t border-slate-200 dark:border-slate-700">
                <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic">
                  <Markdown 
                    content={exercise.transcript} 
                    vocabulary={exercise.vocabularyHelp}
                  />
                </div>
              </div>
            </details>
          )}
        </div>
      </div>

      {/* Questions Panel */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h4 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-orange-200 dark:shadow-none shadow-lg">
              <Headphones className="text-white w-5 h-5" />
            </div>
            Comprehension Check
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
            className="w-full mt-4 group relative overflow-hidden px-8 py-5 bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-600 dark:to-orange-800 text-white rounded-2xl font-black text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <div className="relative z-10 flex items-center justify-center gap-3">
              {evaluating ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                  <span>Evaluating...</span>
                </>
              ) : (
                <>
                  <span>Check Answers</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        ) : (
          <button
            onClick={onNext}
            className="w-full mt-4 px-8 py-5 bg-slate-900 dark:bg-slate-700 text-white rounded-2xl font-black text-xl shadow-xl transition-all hover:brightness-110 active:scale-[0.98]"
          >
            Continue to Next Exercise →
          </button>
        )}
      </div>
    </div>
  );
}

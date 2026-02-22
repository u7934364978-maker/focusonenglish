'use client';

import React, { useState, useRef } from 'react';
import { DictationExercise } from '@/components/course/exercises/types';
import { Headphones, Volume2, Check, X, Info } from 'lucide-react';

interface DictationRendererProps {
  exercise: DictationExercise;
  onComplete: (isCorrect: boolean) => void;
  showFeedback?: boolean;
}

export default function DictationRenderer({
  exercise,
  onComplete,
  showFeedback = false
}: DictationRendererProps) {
  const [answers, setAnswers] = useState<string[]>(Array(exercise.answers.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleSubmit = () => {
    const normalizedAnswers = answers.map(a => a.toLowerCase().trim());
    const normalizedCorrect = exercise.answers.map(a => a.toLowerCase().trim());
    
    const newResults = normalizedAnswers.map((ans, idx) => ans === normalizedCorrect[idx]);
    const allCorrect = newResults.every(r => r);
    
    setResults(newResults);
    setSubmitted(true);
    onComplete(allCorrect);
  };

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const renderTranscript = () => {
    const parts = exercise.transcriptTemplate.split('___');
    const elements: React.ReactNode[] = [];
    
    parts.forEach((part, idx) => {
      if (part) {
        elements.push(<span key={`text-${idx}`}>{part}</span>);
      }
      
      if (idx < parts.length - 1) {
        const inputIdx = idx;
        const isCorrect = results[inputIdx];
        const showStatus = submitted && showFeedback;
        
        let inputClass = "border-2 border-slate-300 rounded-lg px-3 py-2 mx-1 min-w-[120px] focus:border-orange-500 focus:outline-none";
        
        if (showStatus) {
          inputClass = isCorrect 
            ? "border-2 border-green-500 bg-green-50 rounded-lg px-3 py-2 mx-1 min-w-[120px]"
            : "border-2 border-red-500 bg-red-50 rounded-lg px-3 py-2 mx-1 min-w-[120px]";
        }
        
        elements.push(
          <span key={`input-${idx}`} className="inline-flex items-center gap-2">
            <input
              type="text"
              value={answers[inputIdx] || ''}
              onChange={(e) => handleAnswerChange(inputIdx, e.target.value)}
              disabled={submitted}
              className={inputClass}
              placeholder="..."
            />
            {showStatus && (
              isCorrect ? 
                <Check className="w-4 h-4 text-green-600" /> : 
                <X className="w-4 h-4 text-red-600" />
            )}
          </span>
        );
      }
    });
    
    return <div className="text-lg leading-relaxed">{elements}</div>;
  };

  return (
    <div className="space-y-6">
      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-6 border-2 border-orange-100 dark:border-orange-800">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-white dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 shadow-sm border border-orange-100 dark:border-orange-700">
            <Headphones className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">{exercise.title}</h3>
            <p className="text-xs text-orange-700 dark:text-orange-400 font-bold">Listen and complete the sentence</p>
          </div>
        </div>

        <audio 
          ref={audioRef}
          src={exercise.audioUrl} 
          className="w-full h-12 accent-orange-600 mb-6"
          controls
          controlsList="nodownload"
          preload="auto"
        />

        <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 mb-4">
          <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <p className="text-xs text-blue-800 dark:text-blue-300 font-medium">
            Listen to the audio and fill in the missing words
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
          {renderTranscript()}
        </div>

        {submitted && showFeedback && !results.every(r => r) && (
          <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-2">Correct answers:</p>
            <p className="text-sm text-amber-700 dark:text-amber-400">
              {exercise.transcriptTemplate.split('___').map((part, idx) => (
                <React.Fragment key={idx}>
                  {part}
                  {idx < exercise.answers.length && <strong className="text-green-700 dark:text-green-400"> {exercise.answers[idx]} </strong>}
                </React.Fragment>
              ))}
            </p>
          </div>
        )}

        {exercise.explanation && submitted && showFeedback && (
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-1">Explanation:</p>
            <p className="text-sm text-blue-700 dark:text-blue-400">{exercise.explanation}</p>
          </div>
        )}
      </div>

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={answers.some(a => !a || a.trim() === '')}
          className="w-full px-8 py-5 bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-600 dark:to-orange-800 text-white rounded-2xl font-black text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          Check Answer
        </button>
      )}
    </div>
  );
}

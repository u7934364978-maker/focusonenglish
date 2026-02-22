'use client';

import React, { useState } from 'react';
import { ImageMultipleChoiceExercise } from '../exercises/types';
import { Check, X, Info, ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface ImageMultipleChoiceRendererProps {
  exercise: ImageMultipleChoiceExercise;
  onComplete: (isCorrect: boolean) => void;
  showFeedback?: boolean;
}

export default function ImageMultipleChoiceRenderer({
  exercise,
  onComplete,
  showFeedback = false
}: ImageMultipleChoiceRendererProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleOptionClick = (index: number) => {
    if (submitted) return;
    
    setSelectedOption(index);
    const correct = index === exercise.answerIndex;
    setIsCorrect(correct);
    setSubmitted(true);
    onComplete(correct);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
          <ImageIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-black text-slate-900 dark:text-white">
            Image Recognition
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
            {exercise.prompt}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {exercise.options.map((option, index) => {
          let borderClass = "border-slate-200 dark:border-slate-700";
          let bgClass = "bg-white dark:bg-slate-800";
          let textClass = "text-slate-700 dark:text-slate-300";
          
          if (submitted) {
            if (index === exercise.answerIndex) {
              borderClass = "border-green-500 ring-2 ring-green-500/20";
              bgClass = "bg-green-50 dark:bg-green-900/20";
              textClass = "text-green-700 dark:text-green-400";
            } else if (index === selectedOption) {
              borderClass = "border-red-500 ring-2 ring-red-500/20";
              bgClass = "bg-red-50 dark:bg-red-900/20";
              textClass = "text-red-700 dark:text-red-400";
            } else {
              borderClass = "border-slate-100 dark:border-slate-800";
              bgClass = "bg-slate-50 dark:bg-slate-900";
              textClass = "text-slate-400 dark:text-slate-600";
            }
          } else if (index === selectedOption) {
            borderClass = "border-purple-600 ring-2 ring-purple-600/20";
            bgClass = "bg-purple-50 dark:bg-purple-900/20";
          }

          return (
            <button
              key={option.id}
              onClick={() => handleOptionClick(index)}
              disabled={submitted}
              className={`relative rounded-2xl border-2 p-4 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed ${borderClass} ${bgClass} group`}
            >
              <div className="aspect-square relative rounded-xl overflow-hidden mb-3 bg-slate-100 dark:bg-slate-700">
                <Image
                  src={option.imageUrl}
                  alt={option.label}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                  priority={index < 4}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`text-sm font-bold ${textClass}`}>
                  {option.label}
                </span>
                
                {submitted && index === exercise.answerIndex && (
                  <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                )}
                {submitted && index === selectedOption && index !== exercise.answerIndex && (
                  <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {submitted && exercise.explanation && showFeedback && (
        <div className="rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-4 text-sm">
          <div className="flex items-center gap-2 mb-2">
            <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="font-black text-blue-900 dark:text-blue-300">Explanation</span>
          </div>
          <p className="text-blue-800 dark:text-blue-200">{exercise.explanation}</p>
        </div>
      )}
    </div>
  );
}

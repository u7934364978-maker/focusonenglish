'use client';

import React, { useState, useRef } from 'react';
import { ImageLabelingExercise } from '../exercises/types';
import { Check, X, Info, Tag } from 'lucide-react';
import Image from 'next/image';

interface ImageLabelingRendererProps {
  exercise: ImageLabelingExercise;
  onComplete: (isCorrect: boolean) => void;
  showFeedback?: boolean;
}

export default function ImageLabelingRenderer({
  exercise,
  onComplete,
  showFeedback = false
}: ImageLabelingRendererProps) {
  const [userLabels, setUserLabels] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [draggedLabel, setDraggedLabel] = useState<string | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleDrop = (e: React.DragEvent, pointId: string) => {
    e.preventDefault();
    if (submitted || !draggedLabel) return;

    setUserLabels((prev) => ({
      ...prev,
      [pointId]: draggedLabel
    }));
    setDraggedLabel(null);
  };

  const handleSubmit = () => {
    if (submitted) return;

    const allCorrect = exercise.labelPoints.every(
      (point) => userLabels[point.id] === point.correctLabel
    );

    setSubmitted(true);
    onComplete(allCorrect);
  };

  const allLabelsPlaced = exercise.labelPoints.every(
    (point) => userLabels[point.id]
  );

  const availableLabels = exercise.labels.filter(
    (label) => !Object.values(userLabels).includes(label)
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
          <Tag className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <h3 className="text-xl font-black text-slate-900 dark:text-white">
            {exercise.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
            {exercise.instructions}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div
            ref={imageRef}
            className="relative rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={exercise.imageUrl}
                alt={exercise.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-contain"
                priority
              />

              {exercise.labelPoints.map((point) => {
                const isCorrect = submitted && userLabels[point.id] === point.correctLabel;
                const isIncorrect = submitted && userLabels[point.id] && userLabels[point.id] !== point.correctLabel;
                
                return (
                  <div
                    key={point.id}
                    style={{
                      position: 'absolute',
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, point.id)}
                    className="group"
                  >
                    <div
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-xs font-black
                        transition-all cursor-pointer
                        ${!userLabels[point.id] ? 'bg-slate-400 dark:bg-slate-600 text-white animate-pulse' : ''}
                        ${userLabels[point.id] && !submitted ? 'bg-indigo-600 text-white' : ''}
                        ${isCorrect ? 'bg-green-500 text-white ring-4 ring-green-500/30' : ''}
                        ${isIncorrect ? 'bg-red-500 text-white ring-4 ring-red-500/30' : ''}
                      `}
                    >
                      {userLabels[point.id] ? (
                        submitted ? (
                          isCorrect ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />
                        ) : (
                          '•'
                        )
                      ) : (
                        '?'
                      )}
                    </div>

                    {userLabels[point.id] && (
                      <div
                        className={`
                          absolute top-full left-1/2 -translate-x-1/2 mt-2
                          px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap
                          shadow-lg
                          ${isCorrect ? 'bg-green-500 text-white' : ''}
                          ${isIncorrect ? 'bg-red-500 text-white' : ''}
                          ${!submitted ? 'bg-indigo-600 text-white' : ''}
                        `}
                      >
                        {userLabels[point.id]}
                        {submitted && !isCorrect && (
                          <div className="text-[10px] opacity-75 mt-0.5">
                            → {point.correctLabel}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="text-sm font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Available Labels
            </h4>
            
            <div className="space-y-2">
              {availableLabels.map((label) => (
                <div
                  key={label}
                  draggable
                  onDragStart={() => setDraggedLabel(label)}
                  onDragEnd={() => setDraggedLabel(null)}
                  className={`
                    px-4 py-3 rounded-lg font-bold text-sm cursor-move
                    transition-all hover:scale-[1.02] active:scale-[0.98]
                    ${draggedLabel === label 
                      ? 'bg-indigo-200 dark:bg-indigo-700 text-indigo-900 dark:text-indigo-100' 
                      : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600'
                    }
                  `}
                >
                  {label}
                </div>
              ))}
            </div>

            {availableLabels.length === 0 && !submitted && (
              <p className="text-xs text-green-600 dark:text-green-400 font-bold text-center py-2">
                ✓ All labels placed!
              </p>
            )}
          </div>

          {!submitted && (
            <button
              onClick={handleSubmit}
              disabled={!allLabelsPlaced}
              className={`
                w-full px-6 py-4 rounded-xl font-black text-sm
                transition-all
                ${allLabelsPlaced
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98]'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed'
                }
              `}
            >
              {allLabelsPlaced ? 'Check Labels' : 'Place all labels to check'}
            </button>
          )}
        </div>
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

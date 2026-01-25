'use client';

import React from 'react';
import { Exercise, CEFRLevel } from '@/lib/exercise-types';
import EnhancedSpeakingExercise from '@/components/EnhancedSpeakingExercise';
import SpeakingPart1 from '@/components/course/SpeakingPart1';
import SpeakingPart2 from '@/components/course/SpeakingPart2';
import SpeakingPart3 from '@/components/course/SpeakingPart3';
import SpeakingPart4 from '@/components/course/SpeakingPart4';

interface SpeakingRendererProps {
  exercise: any;
  lessonLevel: CEFRLevel;
  onScoreUpdate: (exerciseId: string, score: number) => void;
  onNext: () => void;
  setShowFeedback: (show: boolean) => void;
}

export default function SpeakingRenderer({
  exercise,
  lessonLevel,
  onScoreUpdate,
  onNext,
  setShowFeedback
}: SpeakingRendererProps) {
  
  if (!exercise.prompt && exercise.type === 'speaking') {
    return (
      <div key={exercise.id} className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8 border-2 border-purple-200 dark:border-purple-800 text-center">
        <div className="text-6xl mb-4">🎤</div>
        <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-3">
          Speaking Content Unavailable
        </h3>
        <p className="text-slate-700 dark:text-slate-400 mb-4">
          The instructions for this speaking exercise are not available yet.
        </p>
        <button
          onClick={onNext}
          className="px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-bold text-lg"
        >
          Continue →
        </button>
      </div>
    );
  }

  switch (exercise.type) {
    case 'speaking':
      return (
        <EnhancedSpeakingExercise
          key={exercise.id}
          question={{
            id: exercise.id,
            prompt: exercise.prompt,
            expectedResponse: exercise.expectedResponse,
            hints: exercise.hints,
            targetWords: exercise.targetWords,
            modelAudioUrl: exercise.modelAudioUrl,
            timeLimit: exercise.timeLimit
          }}
          onComplete={(evaluation) => {
            onScoreUpdate(exercise.id, evaluation.overallScore);
            setShowFeedback(true);
          }}
          level={lessonLevel}
        />
      );

    case 'speaking-part1':
      return (
        <SpeakingPart1
          key={exercise.id}
          exerciseId={exercise.id}
          instructions={exercise.instructions}
          questions={exercise.questions}
          timeLimit={exercise.timeLimit}
          onComplete={(data) => {
            const score = (data.recordings.length / exercise.questions.length) * 100;
            onScoreUpdate(exercise.id, score);
            setTimeout(onNext, 2000);
          }}
        />
      );

    case 'speaking-part2':
      return (
        <SpeakingPart2
          key={exercise.id}
          exerciseId={exercise.id}
          instructions={exercise.instructions}
          photos={exercise.photos}
          comparisonPrompt={exercise.comparisonPrompt}
          followUpQuestion={exercise.followUpQuestion}
          timeLimit={exercise.timeLimit}
          tips={exercise.tips}
          onComplete={(data) => {
            onScoreUpdate(exercise.id, 100);
          }}
        />
      );

    case 'speaking-part3':
      return (
        <SpeakingPart3
          key={exercise.id}
          exerciseId={exercise.id}
          instructions={exercise.instructions}
          scenario={exercise.scenario}
          question={exercise.question}
          options={exercise.options}
          phase1Duration={exercise.phase1Duration}
          phase2Duration={exercise.phase2Duration}
          usefulPhrases={exercise.usefulPhrases}
          onComplete={(data) => {
            onScoreUpdate(exercise.id, 100);
          }}
        />
      );

    case 'speaking-part4':
      return (
        <SpeakingPart4
          key={exercise.id}
          exerciseId={exercise.id}
          instructions={exercise.instructions}
          topic={exercise.topic}
          questions={exercise.questions}
          usefulExpressions={exercise.usefulExpressions}
          timeLimit={exercise.timeLimit}
          onComplete={(data) => {
            const score = (data.recordings.length / exercise.questions.length) * 100;
            onScoreUpdate(exercise.id, score);
            setTimeout(onNext, 2000);
          }}
        />
      );

    default:
      return null;
  }
}

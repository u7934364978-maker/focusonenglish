'use client';

import React, { useState } from 'react';
import { Exercise } from '@/lib/exercise-types';
import MultipleChoiceExercise from '@/components/exercises/MultipleChoiceExercise';
import GappedTextExercise from '@/components/exercises/GappedTextExercise';
import KeyWordTransformationExercise from '@/components/exercises/KeyWordTransformationExercise';
import MultipleChoiceClozeExercise from '@/components/exercises/MultipleChoiceClozeExercise';
import MultipleMatchingExercise from '@/components/exercises/MultipleMatchingExercise';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2, XCircle, Lightbulb, Play, Volume2, ArrowRight, BookOpen as BookOpenIcon } from 'lucide-react';

interface C1ExerciseDispatcherProps {
  exercise: Exercise;
  onComplete: (score: number) => void;
  onQuestionCorrect?: (questionId: string) => void;
}

export default function C1ExerciseDispatcher({ exercise, onComplete, onQuestionCorrect }: C1ExerciseDispatcherProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [scores, setScores] = useState<Record<string, boolean>>({});
  const [finalScore, setFinalScore] = useState<number | null>(null);

  if (exercise.type === 'key-word-transformation') {
    return <KeyWordTransformationExercise exercise={exercise as any} onComplete={onComplete} onQuestionCorrect={onQuestionCorrect} />;
  }
  
  if (exercise.type === 'multiple-choice-cloze') {
    return <MultipleChoiceClozeExercise exercise={exercise as any} onComplete={onComplete} onQuestionCorrect={onQuestionCorrect} />;
  }

  if (exercise.type === 'gapped-text') {
    return <GappedTextExercise exercise={exercise as any} onComplete={onComplete} onQuestionCorrect={onQuestionCorrect} />;
  }

  if (exercise.type === 'multiple-matching') {
    return <MultipleMatchingExercise exercise={exercise as any} onComplete={onComplete} onQuestionCorrect={onQuestionCorrect} />;
  }

  const handleAnswerChange = (questionId: string, value: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const checkAnswers = () => {
    const newScores: Record<string, boolean> = {};
    let correctCount = 0;
    
    if (exercise.questions) {
      exercise.questions.forEach(q => {
        const userAnswer = (answers[q.id] || '').trim().toLowerCase();
        const correctAnswer = (q.correctAnswer || '').trim().toLowerCase();
        const isCorrect = userAnswer === correctAnswer;
        newScores[q.id] = isCorrect;
        if (isCorrect) {
          correctCount++;
          if (onQuestionCorrect) {
            onQuestionCorrect(q.id);
          }
        }
      });

      setScores(newScores);
      setSubmitted(true);
      
      const calculatedScore = (correctCount / exercise.questions.length) * 100;
      setFinalScore(calculatedScore);
    }
  };

  return (
    <div className="space-y-8">
      {(exercise.explanation || exercise.grammarPoint) && (
        <Card className="border-blue-100 bg-blue-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold text-blue-900 uppercase tracking-wider flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              {exercise.grammarPoint || 'Focus Point'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">{exercise.explanation}</p>
          </CardContent>
        </Card>
      )}

      {(exercise.text || exercise.transcript) && (
        <Card className="border-slate-200 shadow-sm overflow-hidden">
          <CardHeader className="bg-slate-50 border-b border-slate-200">
            <CardTitle className="text-lg font-black text-slate-900 flex items-center gap-2">
              {exercise.type === 'listening' ? <Volume2 className="h-5 w-5" /> : <BookOpenIcon className="h-5 w-5" />}
              {exercise.type === 'listening' ? 'Audio Transcript' : 'Reading Passage'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="prose prose-slate max-w-none">
              {(exercise.text || exercise.transcript || '').split('\n').map((para, i) => (
                <p key={i} className="mb-4 text-slate-700 leading-relaxed text-lg">{para}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {exercise.questions?.map((q, idx) => (
          <Card key={q.id} className={`transition-all border-2 ${
            submitted 
              ? scores[q.id] 
                ? 'border-green-200 bg-green-50/30' 
                : 'border-red-200 bg-red-50/30'
              : 'border-slate-100 hover:border-blue-200'
          }`}>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-black text-sm">
                  {idx + 1}
                </span>
                
                <div className="flex-1 space-y-4">
                  <p className="text-lg font-bold text-slate-800 leading-snug">
                    {q.question}
                  </p>

                  {q.options ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options.map((option, optIdx) => {
                        const isSelected = answers[q.id] === option;
                        const isCorrect = option === q.correctAnswer;
                        const showCorrect = submitted && isCorrect;
                        const showWrong = submitted && isSelected && !isCorrect;

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleAnswerChange(q.id, option)}
                            disabled={submitted}
                            className={`text-left p-4 rounded-xl border-2 transition-all font-medium ${
                              isSelected && !submitted
                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                : showCorrect
                                  ? 'border-green-500 bg-green-50 text-green-700'
                                  : showWrong
                                    ? 'border-red-500 bg-red-50 text-red-700'
                                    : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{option}</span>
                              {showCorrect && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                              {showWrong && <XCircle className="h-5 w-5 text-red-500" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <Input
                          placeholder="Type your answer..."
                          value={answers[q.id] || ''}
                          onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                          disabled={submitted}
                          className={`h-12 text-lg font-bold ${
                            submitted
                              ? scores[q.id]
                                ? 'bg-green-50 border-green-500 text-green-700'
                                : 'bg-red-50 border-red-500 text-red-700'
                              : 'bg-white border-slate-200 focus:border-blue-500'
                          }`}
                        />
                        {submitted && (
                          <div className="flex-shrink-0">
                            {scores[q.id] ? (
                              <CheckCircle2 className="h-8 w-8 text-green-500" />
                            ) : (
                              <XCircle className="h-8 w-8 text-red-500" />
                            )}
                          </div>
                        )}
                      </div>
                      
                      {submitted && !scores[q.id] && (
                        <div className="text-sm font-bold text-green-600 bg-green-50 p-2 rounded-lg inline-block">
                          Correct answer: {q.correctAnswer}
                        </div>
                      )}
                    </div>
                  )}

                  {submitted && q.explanation && (
                    <p className="text-sm text-slate-500 italic mt-2">
                      {q.explanation}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {!submitted ? (
        <div className="flex justify-center pt-4">
          <Button 
            size="lg" 
            onClick={checkAnswers}
            disabled={Object.keys(answers).length < (exercise.questions?.length || 0)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 h-16 rounded-2xl text-xl font-black shadow-xl shadow-blue-200 transition-all hover:scale-105 active:scale-95"
          >
            Check Answers
          </Button>
        </div>
      ) : (
        <div className="flex justify-center pt-4">
          <Button 
            size="lg" 
            onClick={() => finalScore !== null && onComplete(finalScore)}
            className="bg-green-600 hover:bg-green-700 text-white px-12 h-16 rounded-2xl text-xl font-black shadow-xl shadow-green-200 transition-all hover:scale-105 active:scale-95 animate-in fade-in zoom-in duration-300"
          >
            Next Exercise <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  );
}

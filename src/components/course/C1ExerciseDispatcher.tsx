'use client';

import React, { useState } from 'react';
import { Exercise } from '@/lib/exercise-types';
import GappedTextExercise from '@/components/exercises/GappedTextExercise';
import KeyWordTransformationExercise from '@/components/exercises/KeyWordTransformationExercise';
import MultipleChoiceClozeExercise from '@/components/exercises/MultipleChoiceClozeExercise';
import MultipleMatchingExercise from '@/components/exercises/MultipleMatchingExercise';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2, XCircle, Lightbulb, Volume2, ArrowRight, BookOpen as BookOpenIcon } from 'lucide-react';
import { AudioPlayer } from '@/components/course/preview/AudioPlayer';
import { resolveListeningScript } from '@/lib/listening-script';

function resolvePublicAudioUrl(url?: string | null): string {
  if (!url) return '';
  return url.startsWith('/') ? url : `/${url}`;
}

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

  const exerciseContent = (exercise as any).content || exercise;
  const isListening =
    exercise.type === 'listening' || exercise.type === 'listening-comprehension';
  const listeningScript = resolveListeningScript(exercise as any, exerciseContent);
  const staticAudioUrl = resolvePublicAudioUrl(
    (exercise as any).audioUrl || exerciseContent.audioUrl
  );

  const longBody =
    (exercise as any).text ||
    (exercise as any).transcript ||
    exerciseContent.passage ||
    exerciseContent.text ||
    '';
  /** Evita duplicar el guion si ya va al reproductor TTS (transcripción en el icono del player). */
  const showTranscriptCard = longBody.trim().length > 0 && (!isListening || !listeningScript);

  const questionList = (exerciseContent.questions || []) as any[];
  const questionKey = (q: any, idx: number) => (q?.id != null && q.id !== '' ? String(q.id) : `q-${idx}`);

  function stripMarkup(s: string): string {
    return s.replace(/\[\[([^\]|]+)\|[^\]]+\]\]/g, '$1').replace(/\[\[([^\]]+)\]\]/g, '$1');
  }

  function normalizeAns(s: string): string {
    return stripMarkup(s).toLowerCase().trim().replace(/\s+/g, ' ');
  }

  function isMcOptionCorrect(q: any, optIdx: number): boolean {
    const ca = q.correctAnswer;
    if (typeof ca === 'number') return ca === optIdx;
    if (typeof ca === 'boolean') return ca === (optIdx === 0);
    const opt = q.options?.[optIdx];
    const optText = typeof opt === 'string' ? opt : opt?.text ?? '';
    if (typeof ca === 'string') return normalizeAns(optText) === normalizeAns(ca);
    return false;
  }

  function isUserMcCorrect(q: any, userVal: string): boolean {
    if (!q.options || !Array.isArray(q.options)) return false;
    const ca = q.correctAnswer;
    if (typeof ca === 'number') {
      const opt = q.options[ca];
      const t = typeof opt === 'string' ? opt : opt?.text ?? '';
      return normalizeAns(userVal) === normalizeAns(t);
    }
    for (let i = 0; i < q.options.length; i++) {
      if (isMcOptionCorrect(q, i)) {
        const opt = q.options[i];
        const t = typeof opt === 'string' ? opt : opt?.text ?? '';
        if (normalizeAns(userVal) === normalizeAns(t)) return true;
      }
    }
    return false;
  }

  function isFillCorrect(q: any, userVal: string): boolean {
    const u = normalizeAns(userVal);
    const primary = q.correctAnswer != null ? normalizeAns(String(q.correctAnswer)) : '';
    if (primary && u === primary) return true;
    const alts = q.acceptableAnswers;
    if (Array.isArray(alts)) {
      return alts.some((a: string) => normalizeAns(String(a)) === u);
    }
    if (typeof alts === 'string') return normalizeAns(alts) === u;
    return false;
  }

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

    if (questionList.length > 0) {
      questionList.forEach((q: any, idx: number) => {
        const key = questionKey(q, idx);
        const raw = answers[key] || '';
        let isCorrect = false;
        if (q.options && Array.isArray(q.options)) {
          isCorrect = isUserMcCorrect(q, raw);
        } else {
          isCorrect = isFillCorrect(q, raw);
        }
        newScores[key] = isCorrect;
        if (isCorrect) {
          correctCount++;
          const pid = q.id != null && q.id !== '' ? String(q.id) : exercise.id;
          onQuestionCorrect?.(pid);
        }
      });

      setScores(newScores);
      setSubmitted(true);

      setFinalScore((correctCount / questionList.length) * 100);
    }
  };

  return (
    <div className="space-y-8">
      {(((exercise as any).explanation || (exercise as any).grammarPoint)) && (
        <Card className="border-blue-100 bg-blue-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold text-blue-900 uppercase tracking-wider flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              {(exercise as any).grammarPoint || 'Focus Point'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">{(exercise as any).explanation}</p>
          </CardContent>
        </Card>
      )}

      {isListening && (staticAudioUrl || listeningScript) && (
        <AudioPlayer
          audioUrl={staticAudioUrl || undefined}
          ttsText={!staticAudioUrl && listeningScript ? listeningScript : undefined}
          transcript={listeningScript || undefined}
          className="border-teal-100 bg-teal-50/40"
        />
      )}

      {showTranscriptCard && (
        <Card className="border-slate-200 shadow-sm overflow-hidden">
          <CardHeader className="bg-slate-50 border-b border-slate-200">
            <CardTitle className="text-lg font-black text-slate-900 flex items-center gap-2">
              {isListening ? <Volume2 className="h-5 w-5" /> : <BookOpenIcon className="h-5 w-5" />}
              {isListening ? 'Transcripción (tras escuchar)' : 'Reading Passage'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="prose prose-slate max-w-none">
              {longBody.split('\n').map((para: string, i: number) => (
                <p key={i} className="mb-4 text-slate-700 leading-relaxed text-lg">
                  {para}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {questionList.map((q: any, idx: number) => {
          const key = questionKey(q, idx);
          return (
          <Card key={key} className={`transition-all border-2 ${
            submitted 
              ? scores[key] 
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
                      {q.options.map((option: any, optIdx: number) => {
                        const optStr = typeof option === 'string' ? option : option?.text ?? '';
                        const isSelected = answers[key] === optStr;
                        const isCorrectOpt = isMcOptionCorrect(q, optIdx);
                        const showCorrect = submitted && isCorrectOpt;
                        const showWrong = submitted && isSelected && !isCorrectOpt;

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleAnswerChange(key, optStr)}
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
                              <span>{optStr}</span>
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
                          value={answers[key] || ''}
                          onChange={(e) => handleAnswerChange(key, e.target.value)}
                          disabled={submitted}
                          className={`h-12 text-lg font-bold ${
                            submitted
                              ? scores[key]
                                ? 'bg-green-50 border-green-500 text-green-700'
                                : 'bg-red-50 border-red-500 text-red-700'
                              : 'bg-white border-slate-200 focus:border-blue-500'
                          }`}
                        />
                        {submitted && (
                          <div className="flex-shrink-0">
                            {scores[key] ? (
                              <CheckCircle2 className="h-8 w-8 text-green-500" />
                            ) : (
                              <XCircle className="h-8 w-8 text-red-500" />
                            )}
                          </div>
                        )}
                      </div>
                      
                      {submitted && !scores[key] && (
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
        );
        })}
      </div>

      {!submitted ? (
        <div className="flex justify-center pt-4">
          <Button 
            size="lg" 
            onClick={checkAnswers}
            disabled={Object.keys(answers).length < questionList.length}
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

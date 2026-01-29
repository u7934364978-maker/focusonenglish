'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, ChevronRight, HelpCircle, Headphones } from 'lucide-react';

interface Question {
  id: string;
  type: 'mcq' | 'true_false';
  prompt: string;
  options?: { id: string; text: string }[];
  correctOptionId?: string;
  correctBoolean?: boolean;
}

interface QuizActivityProps {
  questions: Question[];
  onComplete: (score: number) => void;
  audioUrl?: string;
  vocabulary?: string[];
}

export default function QuizActivity({ questions, onComplete, audioUrl, vocabulary = [] }: QuizActivityProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const HighlightedText = ({ text }: { text: string }) => {
    let highlightedText = text;
    vocabulary.forEach((word: string) => {
      const regex = new RegExp(`\\b(${word})\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, `<mark class="bg-orange-100 px-1 rounded font-bold text-coral-700">$1</mark>`);
    });

    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  const handleAnswer = (answer: string | boolean) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answer);
    setShowFeedback(true);

    const isCorrect = currentQuestion.type === 'mcq' 
      ? answer === currentQuestion.correctOptionId
      : answer === currentQuestion.correctBoolean;

    if (isCorrect) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <Card className="max-w-md mx-auto text-center p-8">
        <CardContent className="space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Quiz Completed!</h2>
            <p className="text-slate-500 mt-2">
              You scored {score} out of {questions.length}
            </p>
          </div>
          <Button 
            onClick={() => onComplete(score)}
            className="w-full bg-coral-600 hover:bg-coral-700 font-bold py-6 rounded-2xl"
          >
            Back to Course
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="flex justify-between items-center px-2">
        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-coral-500 transition-all duration-300" 
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {audioUrl && (
        <Card className="border-2 border-blue-200 bg-blue-50/50 p-4 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500 rounded-xl text-white">
              <Headphones className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Listen to the recording</p>
              <audio controls className="w-full h-10">
                <source src={audioUrl} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </Card>
      )}

      <Card className="border-2 border-slate-200 shadow-xl rounded-3xl overflow-hidden">
        <CardHeader className="bg-slate-50 border-b border-slate-100 p-8">
          <div className="flex gap-4 items-start">
            <HelpCircle className="w-6 h-6 text-coral-500 mt-1 flex-shrink-0" />
            <CardTitle className="text-xl font-bold text-slate-800 leading-tight">
              <HighlightedText text={currentQuestion.prompt} />
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-4">
          {currentQuestion.type === 'mcq' ? (
            <div className="grid gap-3">
              {currentQuestion.options?.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const isCorrect = option.id === currentQuestion.correctOptionId;
                
                let variant = "border-slate-200 hover:border-coral-200 hover:bg-orange-50";
                if (showFeedback) {
                  if (isCorrect) variant = "border-green-500 bg-green-50 text-green-700";
                  else if (isSelected) variant = "border-red-500 bg-red-50 text-red-700";
                  else variant = "border-slate-100 opacity-50";
                }

                return (
                  <button
                    key={option.id}
                    disabled={showFeedback}
                    onClick={() => handleAnswer(option.id)}
                    className={`w-full p-4 rounded-2xl border-2 text-left font-bold transition-all flex items-center justify-between ${variant}`}
                  >
                    {option.text}
                    {showFeedback && isCorrect && <CheckCircle2 className="w-5 h-5" />}
                    {showFeedback && isSelected && !isCorrect && <XCircle className="w-5 h-5" />}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {[true, false].map((val) => {
                const isSelected = selectedAnswer === val;
                const isCorrect = val === currentQuestion.correctBoolean;

                let variant = "border-slate-200 hover:border-coral-200 hover:bg-orange-50";
                if (showFeedback) {
                  if (isCorrect) variant = "border-green-500 bg-green-50 text-green-700";
                  else if (isSelected) variant = "border-red-500 bg-red-50 text-red-700";
                  else variant = "border-slate-100 opacity-50";
                }

                return (
                  <button
                    key={String(val)}
                    disabled={showFeedback}
                    onClick={() => handleAnswer(val)}
                    className={`w-full p-6 rounded-2xl border-2 text-center font-bold text-lg transition-all ${variant}`}
                  >
                    {val ? 'True' : 'False'}
                  </button>
                );
              })}
            </div>
          )}

          {showFeedback && (
            <div className="pt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <Button 
                onClick={nextQuestion}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-6 rounded-2xl flex items-center justify-center gap-2"
              >
                {currentIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

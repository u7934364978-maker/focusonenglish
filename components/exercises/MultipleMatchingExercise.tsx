'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, BookOpen, Target, RotateCcw } from 'lucide-react';

interface MultipleMatchingText {
  letter: string;
  title: string;
  content: string;
}

interface MultipleMatchingQuestion {
  questionNumber: number;
  question: string;
  correctText: string;
  explanation?: string;
}

interface MultipleMatchingExerciseProps {
  exercise: {
    id: string;
    title: string;
    difficulty: 'easy' | 'medium' | 'hard';
    topic: string;
    totalTexts: number;
    texts: MultipleMatchingText[];
    questions: MultipleMatchingQuestion[];
  };
  onComplete?: (score: number) => void;
}

export default function MultipleMatchingExercise({ exercise, onComplete }: MultipleMatchingExerciseProps) {
  const [answers, setAnswers] = useState<{ [questionNumber: number]: string }>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [evaluating, setEvaluating] = useState(false);

  const handleAnswer = (questionNumber: number, letter: string) => {
    if (!showFeedback) {
      setAnswers(prev => ({
        ...prev,
        [questionNumber]: letter
      }));
    }
  };

  const checkAnswers = () => {
    setEvaluating(true);
    setTimeout(() => {
      setShowFeedback(true);
      setEvaluating(false);
      
      const correctCount = exercise.questions.filter(q => 
        answers[q.questionNumber]?.toUpperCase() === q.correctText.toUpperCase()
      ).length;
      
      const score = (correctCount / exercise.questions.length) * 100;
      
      if (onComplete) {
        onComplete(score);
      }
    }, 500);
  };

  const resetExercise = () => {
    setAnswers({});
    setShowFeedback(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const correctCount = exercise.questions.filter(q => 
    answers[q.questionNumber]?.toUpperCase() === q.correctText.toUpperCase()
  ).length;

  const score = showFeedback ? (correctCount / exercise.questions.length) * 100 : 0;

  // Count how many times each text is used as correct answer
  const textUsageCount: { [letter: string]: number } = {};
  exercise.questions.forEach(q => {
    const letter = q.correctText.toUpperCase();
    textUsageCount[letter] = (textUsageCount[letter] || 0) + 1;
  });

  // Count how many times user selected each text
  const userSelectionCount: { [letter: string]: number } = {};
  Object.values(answers).forEach(letter => {
    const upperLetter = letter.toUpperCase();
    userSelectionCount[upperLetter] = (userSelectionCount[upperLetter] || 0) + 1;
  });

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6" data-testid="multiple-matching-exercise">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8" />
            <div>
              <h2 className="text-2xl font-bold">{exercise.title}</h2>
              <p className="text-purple-100 text-sm">FCE Part 7 - Multiple Matching</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge className={`${getDifficultyColor(exercise.difficulty)} text-white`}>
              {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
            </Badge>
            <Badge variant="secondary">{exercise.topic}</Badge>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-900">Instructions</CardTitle>
        </CardHeader>
        <CardContent className="text-blue-800">
          <p>
            You are going to read {exercise.totalTexts} texts about <strong>{exercise.topic}</strong>. 
            For questions 1-{exercise.questions.length}, choose from the texts <strong>A-{String.fromCharCode(64 + exercise.totalTexts)}</strong>. 
            The texts may be chosen more than once.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Texts */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 sticky top-0 bg-white py-2 z-10">
            📖 Texts
          </h3>
          
          {exercise.texts.map((text) => (
            <Card 
              key={text.letter}
              className={`transition-all ${
                showFeedback && userSelectionCount[text.letter]
                  ? 'border-purple-300 bg-purple-50'
                  : 'hover:shadow-md'
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-lg font-bold">
                        {text.letter}
                      </Badge>
                      <CardTitle className="text-lg">{text.title}</CardTitle>
                    </div>
                    {showFeedback && textUsageCount[text.letter] > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        Used {textUsageCount[text.letter]} time(s) in answers
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{text.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right Column: Questions */}
        <div className="space-y-4">
          <div className="sticky top-0 bg-white py-2 z-10">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              ❓ Questions
            </h3>
            {showFeedback && (
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-purple-900">
                      {correctCount}/{exercise.questions.length}
                    </p>
                    <p className="text-sm text-purple-700">Correct Answers</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-900">
                      {score.toFixed(0)}%
                    </p>
                    <p className="text-sm text-blue-700">Score</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {exercise.questions.map((question) => {
            const userAnswer = answers[question.questionNumber];
            const isCorrect = userAnswer?.toUpperCase() === question.correctText.toUpperCase();
            const isAnswered = !!userAnswer;

            return (
              <Card 
                key={question.questionNumber}
                className={`transition-all ${
                  showFeedback 
                    ? isCorrect 
                      ? 'border-green-500 bg-green-50' 
                      : isAnswered 
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300'
                    : isAnswered
                      ? 'border-purple-300 bg-purple-50'
                      : 'hover:shadow-md'
                }`}
              >
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="text-sm">
                        Q{question.questionNumber}
                      </Badge>
                      <p className="flex-1 text-gray-800 font-medium">
                        {question.question}
                      </p>
                    </div>

                    {/* Answer Selection */}
                    <div className="flex flex-wrap gap-2">
                      {exercise.texts.map((text) => (
                        <button
                          key={text.letter}
                          onClick={() => handleAnswer(question.questionNumber, text.letter)}
                          disabled={showFeedback}
                          className={`
                            px-4 py-2 rounded-lg font-semibold transition-all
                            ${userAnswer === text.letter
                              ? showFeedback
                                ? isCorrect
                                  ? 'bg-green-500 text-white'
                                  : 'bg-red-500 text-white'
                                : 'bg-purple-600 text-white'
                              : showFeedback && text.letter.toUpperCase() === question.correctText.toUpperCase()
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                            }
                            ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-105'}
                          `}
                        >
                          {text.letter}
                        </button>
                      ))}
                    </div>

                    {/* Feedback */}
                    {showFeedback && (
                      <div className="mt-3 space-y-2">
                        {isCorrect ? (
                          <div className="flex items-center gap-2 text-green-700">
                            <CheckCircle2 className="h-5 w-5" />
                            <span className="font-semibold">Correct!</span>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-red-700">
                              <XCircle className="h-5 w-5" />
                              <span className="font-semibold">
                                {isAnswered ? `Incorrect. Your answer: ${userAnswer}` : 'Not answered'}
                              </span>
                            </div>
                            <div className="text-green-700 font-semibold">
                              ✓ Correct answer: {question.correctText}
                            </div>
                          </div>
                        )}
                        
                        {question.explanation && (
                          <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                            <p className="text-sm text-blue-800">
                              <span className="font-semibold">💡 Explanation:</span> {question.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        {!showFeedback ? (
          <Button
            onClick={checkAnswers}
            disabled={evaluating || Object.keys(answers).length === 0}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
            size="lg"
          >
            <Target className="mr-2 h-5 w-5" />
            {evaluating ? 'Checking...' : 'Check Answers'}
          </Button>
        ) : (
          <div className="flex gap-4">
            <Button
              onClick={resetExercise}
              variant="outline"
              className="px-8 py-6 text-lg"
              size="lg"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
            <Button
              onClick={() => onComplete && onComplete(score)}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
              size="lg"
            >
              Next Exercise →
            </Button>
          </div>
        )}
      </div>

      {/* Tips */}
      <Card className="border-amber-200 bg-amber-50">
        <CardHeader>
          <CardTitle className="text-amber-900">💡 Tips for Multiple Matching</CardTitle>
        </CardHeader>
        <CardContent className="text-amber-800 space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>Read all texts quickly first to get an overview</li>
            <li>Read each question carefully and underline key words</li>
            <li>Scan the texts for information matching the key words</li>
            <li>Remember: texts may be used more than once</li>
            <li>Don't expect the same words - look for paraphrases and synonyms</li>
            <li>Check your answers at the end</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

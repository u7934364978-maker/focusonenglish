'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, FileText, Target, RotateCcw, Lightbulb } from 'lucide-react';

interface MultipleChoiceQuestion {
  id: string;
  gapNumber: number;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  points: number;
}

interface MultipleChoiceClozeExerciseProps {
  exercise: {
    id: string;
    title: string;
    difficulty: 'easy' | 'medium' | 'hard';
    topic: string;
    text: string;
    questions: MultipleChoiceQuestion[];
  };
  onComplete?: (score: number) => void;
}

export default function MultipleChoiceClozeExercise({ exercise, onComplete }: MultipleChoiceClozeExerciseProps) {
  const [answers, setAnswers] = useState<{ [questionId: string]: string }>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [evaluating, setEvaluating] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    if (!showFeedback) {
      setAnswers(prev => ({
        ...prev,
        [questionId]: value
      }));
    }
  };

  const checkAnswers = async () => {
    setEvaluating(true);
    
    // Simulate evaluation delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setShowFeedback(true);
    setEvaluating(false);
    
    const correctCount = exercise.questions.filter(q => 
      answers[q.id]?.toLowerCase() === q.correctAnswer.toLowerCase()
    ).length;
    
    const totalPoints = exercise.questions.reduce((sum, q) => sum + q.points, 0);
    const earnedPoints = exercise.questions
      .filter(q => answers[q.id]?.toLowerCase() === q.correctAnswer.toLowerCase())
      .reduce((sum, q) => sum + q.points, 0);
    
    const score = (earnedPoints / totalPoints) * 100;
    
    if (onComplete) {
      onComplete(score);
    }
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

  // Render text with gaps
  const renderTextWithGaps = () => {
    let text = exercise.text;
    const parts: JSX.Element[] = [];
    let lastIndex = 0;
    let partKey = 0;

    // Sort questions by gap number to process in order
    const sortedQuestions = [...exercise.questions].sort((a, b) => a.gapNumber - b.gapNumber);

    sortedQuestions.forEach((question) => {
      const gapPattern = new RegExp(`\\[${question.gapNumber}\\]`, 'g');
      const match = gapPattern.exec(text.substring(lastIndex));
      
      if (match) {
        const matchIndex = lastIndex + match.index;
        
        // Add text before gap
        if (matchIndex > lastIndex) {
          parts.push(
            <span key={`text-${partKey++}`}>
              {text.substring(lastIndex, matchIndex)}
            </span>
          );
        }

        // Add gap with dropdown
        const userAnswer = answers[question.id];
        const isCorrect = userAnswer?.toLowerCase() === question.correctAnswer.toLowerCase();
        const isAnswered = !!userAnswer;

        parts.push(
          <span 
            key={`gap-${partKey++}`}
            className="inline-flex items-center mx-1"
          >
            <select
              value={userAnswer || ''}
              onChange={(e) => handleAnswer(question.id, e.target.value)}
              disabled={showFeedback}
              className={`
                px-3 py-1 rounded-lg border-2 font-semibold cursor-pointer
                transition-all focus:ring-2 focus:ring-offset-1
                ${showFeedback 
                  ? isCorrect 
                    ? 'bg-green-100 border-green-500 text-green-800' 
                    : isAnswered
                      ? 'bg-red-100 border-red-500 text-red-800'
                      : 'bg-gray-100 border-gray-400 text-gray-700'
                  : isAnswered
                    ? 'bg-blue-100 border-blue-500 text-blue-800 focus:ring-blue-500'
                    : 'bg-yellow-50 border-yellow-400 text-gray-700 focus:ring-yellow-500'
                }
              `}
            >
              <option value="">({question.gapNumber})</option>
              {question.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {showFeedback && (
              <span className="ml-1">
                {isCorrect ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600 inline" />
                ) : isAnswered ? (
                  <XCircle className="h-4 w-4 text-red-600 inline" />
                ) : (
                  <XCircle className="h-4 w-4 text-gray-400 inline" />
                )}
              </span>
            )}
          </span>
        );

        lastIndex = matchIndex + match[0].length;
      }
    });

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(
        <span key={`text-${partKey++}`}>
          {text.substring(lastIndex)}
        </span>
      );
    }

    return parts;
  };

  const correctCount = exercise.questions.filter(q => 
    answers[q.id]?.toLowerCase() === q.correctAnswer.toLowerCase()
  ).length;

  const totalPoints = exercise.questions.reduce((sum, q) => sum + q.points, 0);
  const earnedPoints = exercise.questions
    .filter(q => answers[q.id]?.toLowerCase() === q.correctAnswer.toLowerCase())
    .reduce((sum, q) => sum + q.points, 0);

  const score = showFeedback ? (earnedPoints / totalPoints) * 100 : 0;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8" />
            <div>
              <h2 className="text-2xl font-bold">{exercise.title}</h2>
              <p className="text-teal-100 text-sm">FCE Part 1 - Multiple Choice Cloze</p>
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
            Read the text below and choose the correct word for each gap from the dropdown menu. 
            Each gap has <strong>four options (A, B, C, D)</strong>. 
            Choose the word that best fits the context and grammar of the sentence.
          </p>
        </CardContent>
      </Card>

      {/* Score Display */}
      {showFeedback && (
        <div className="bg-gradient-to-r from-cyan-100 to-teal-100 p-6 rounded-lg">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-3xl font-bold text-cyan-900">
                {correctCount}/{exercise.questions.length}
              </p>
              <p className="text-sm text-cyan-700">Correct Answers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-teal-900">
                {earnedPoints}/{totalPoints}
              </p>
              <p className="text-sm text-teal-700">Points Earned</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-cyan-900">
                {score.toFixed(0)}%
              </p>
              <p className="text-sm text-cyan-700">Score</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Text with Inline Gaps */}
      <Card className="border-2 border-teal-200">
        <CardHeader className="bg-teal-50">
          <CardTitle className="text-teal-900">📝 Text</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-gray-800 text-lg leading-relaxed space-y-4">
            {renderTextWithGaps()}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Feedback */}
      {showFeedback && (
        <Card className="border-2 border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900">📊 Detailed Feedback</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {exercise.questions.map((question) => {
              const userAnswer = answers[question.id];
              const isCorrect = userAnswer?.toLowerCase() === question.correctAnswer.toLowerCase();
              const isAnswered = !!userAnswer;

              return (
                <div 
                  key={question.id}
                  className={`p-4 rounded-lg border-2 ${
                    isCorrect 
                      ? 'border-green-500 bg-green-50' 
                      : isAnswered
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300 bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-sm">
                      Gap {question.gapNumber}
                    </Badge>
                    {isCorrect ? (
                      <Badge className="bg-green-500">
                        <CheckCircle2 className="h-4 w-4 mr-1" /> Correct ({question.points} pts)
                      </Badge>
                    ) : (
                      <Badge variant="destructive">
                        <XCircle className="h-4 w-4 mr-1" /> Incorrect (0 pts)
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-2">
                    {isAnswered && (
                      <p className={`font-semibold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        Your answer: {userAnswer}
                      </p>
                    )}
                    
                    {!isCorrect && (
                      <p className="font-semibold text-green-700">
                        ✓ Correct answer: {question.correctAnswer}
                      </p>
                    )}

                    {question.explanation && (
                      <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg mt-2">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-blue-900">Explanation:</p>
                            <p className="text-sm text-blue-800">{question.explanation}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="text-sm text-gray-600 mt-2">
                      <strong>All options:</strong> {question.options.join(' | ')}
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        {!showFeedback ? (
          <Button
            onClick={checkAnswers}
            disabled={evaluating || Object.keys(answers).length === 0}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg"
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
          <CardTitle className="text-amber-900">💡 Tips for Multiple Choice Cloze</CardTitle>
        </CardHeader>
        <CardContent className="text-amber-800 space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>Read the whole text first to understand the general meaning</li>
            <li>Look at the words before and after each gap</li>
            <li>Think about grammar: does the sentence need a verb, noun, adjective, etc.?</li>
            <li>Consider collocations (words that often go together)</li>
            <li>Look for phrasal verbs and fixed expressions</li>
            <li>Eliminate obviously wrong options first</li>
            <li>Check your answers make sense in the context</li>
            <li>Focus on: prepositions, phrasal verbs, collocations, and linking words</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

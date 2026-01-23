'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CheckCircle2, XCircle, Key, Target, RotateCcw, Lightbulb } from 'lucide-react';

interface KeyWordTransformation {
  id: string;
  number: number;
  sentenceA: string;
  keyWord: string;
  sentenceB: string;
  correctAnswer: string;
  acceptableAnswers?: string[];
  explanation: string;
  category: string;
}

interface KeyWordTransformationExerciseProps {
  exercise: {
    id: string;
    title: string;
    difficulty: 'easy' | 'medium' | 'hard';
    topic: string;
    transformations: KeyWordTransformation[];
  };
  onComplete?: (score: number) => void;
}

export default function KeyWordTransformationExercise({ exercise, onComplete }: KeyWordTransformationExerciseProps) {
  const [answers, setAnswers] = useState<{ [id: string]: string }>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [evaluating, setEvaluating] = useState(false);

  const handleAnswer = (id: string, value: string) => {
    if (!showFeedback) {
      setAnswers(prev => ({
        ...prev,
        [id]: value
      }));
    }
  };

  const normalizeAnswer = (answer: string): string => {
    return answer.toLowerCase().trim().replace(/\s+/g, ' ');
  };

  const checkAnswer = (transformation: KeyWordTransformation): boolean => {
    const userAnswer = answers[transformation.id];
    if (!userAnswer) return false;

    const normalizedUserAnswer = normalizeAnswer(userAnswer);
    const normalizedCorrectAnswer = normalizeAnswer(transformation.correctAnswer);

    // Check main correct answer
    if (normalizedUserAnswer === normalizedCorrectAnswer) {
      return true;
    }

    // Check acceptable answers
    if (transformation.acceptableAnswers) {
      return transformation.acceptableAnswers.some(acceptable => 
        normalizeAnswer(acceptable) === normalizedUserAnswer
      );
    }

    return false;
  };

  const checkAnswers = async () => {
    setEvaluating(true);
    
    // Simulate AI evaluation delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setShowFeedback(true);
    setEvaluating(false);
    
    const correctCount = exercise.transformations.filter(t => checkAnswer(t)).length;
    const score = (correctCount / exercise.transformations.length) * 100;
    
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

  const correctCount = exercise.transformations.filter(t => checkAnswer(t)).length;
  const score = showFeedback ? (correctCount / exercise.transformations.length) * 100 : 0;

  // Count word limit for each transformation (3-6 words including key word)
  const getWordCount = (text: string): number => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const validateWordCount = (userAnswer: string, keyWord: string): boolean => {
    const totalWords = getWordCount(userAnswer);
    return totalWords >= 2 && totalWords <= 6; // 3-6 words including key word
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6" data-testid="key-word-transformation-exercise">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Key className="h-8 w-8" />
            <div>
              <h2 className="text-2xl font-bold">{exercise.title}</h2>
              <p className="text-indigo-100 text-sm">FCE Part 4 - Key Word Transformations</p>
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
        <CardContent className="text-blue-800 space-y-2">
          <p>
            Complete the second sentence so that it has a similar meaning to the first sentence, 
            using the word given. <strong>Do not change the word given.</strong>
          </p>
          <p>
            You must use <strong>between two and five words</strong>, including the word given.
          </p>
          <div className="bg-blue-100 border-l-4 border-blue-500 p-3 mt-2">
            <p className="font-semibold">Example:</p>
            <p className="text-sm mt-1">I haven't seen him for ages.</p>
            <p className="text-sm font-mono bg-white px-2 py-1 rounded inline-block my-1">LAST</p>
            <p className="text-sm">The _____________ ages ago.</p>
            <p className="text-sm mt-2 text-blue-700">
              <strong>Answer:</strong> last time I saw him was
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Score Display */}
      {showFeedback && (
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-purple-900">
                {correctCount}/{exercise.transformations.length}
              </p>
              <p className="text-sm text-purple-700">Correct Transformations</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-indigo-900">
                {score.toFixed(0)}%
              </p>
              <p className="text-sm text-indigo-700">Score</p>
            </div>
          </div>
        </div>
      )}

      {/* Transformations */}
      <div className="space-y-4">
        {exercise.transformations.map((transformation, idx) => {
          const userAnswer = answers[transformation.id] || '';
          const isCorrect = checkAnswer(transformation);
          const isAnswered = !!userAnswer;
          const wordCount = getWordCount(userAnswer);
          const isValidWordCount = validateWordCount(userAnswer, transformation.keyWord);

          return (
            <Card 
              key={transformation.id}
              className={`transition-all ${
                showFeedback 
                  ? isCorrect 
                    ? 'border-green-500 bg-green-50' 
                    : isAnswered 
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300'
                  : isAnswered
                    ? 'border-indigo-300 bg-indigo-50'
                    : 'hover:shadow-md'
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-lg">
                    Question {transformation.number}
                  </Badge>
                  {showFeedback && (
                    <Badge 
                      variant={isCorrect ? "default" : "destructive"}
                      className={isCorrect ? "bg-green-500" : "bg-red-500"}
                    >
                      {isCorrect ? (
                        <><CheckCircle2 className="h-4 w-4 mr-1" /> Correct</>
                      ) : (
                        <><XCircle className="h-4 w-4 mr-1" /> Incorrect</>
                      )}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Original Sentence */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-800 font-medium">{transformation.sentenceA}</p>
                </div>

                {/* Key Word */}
                <div className="flex items-center justify-center">
                  <Badge className="bg-indigo-600 text-white text-lg px-6 py-2 font-mono">
                    {transformation.keyWord}
                  </Badge>
                </div>

                {/* Transformation Input */}
                <div className="space-y-2">
                  <div className="bg-white p-4 rounded-lg border-2 border-gray-300">
                    <div className="flex items-start gap-2">
                      <span className="text-gray-700 font-medium">The</span>
                      <div className="flex-1">
                        <Input
                          type="text"
                          value={userAnswer}
                          onChange={(e) => handleAnswer(transformation.id, e.target.value)}
                          disabled={showFeedback}
                          placeholder="Write your answer here..."
                          className={`w-full text-center font-medium ${
                            showFeedback
                              ? isCorrect
                                ? 'bg-green-100 border-green-500'
                                : 'bg-red-100 border-red-500'
                              : 'bg-yellow-50 border-indigo-300'
                          }`}
                        />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {transformation.sentenceB}
                      </span>
                    </div>
                  </div>

                  {/* Word Count Indicator */}
                  {isAnswered && !showFeedback && (
                    <div className={`text-sm ${isValidWordCount ? 'text-green-600' : 'text-red-600'}`}>
                      Word count: {wordCount} {isValidWordCount ? '✓' : '✗ (2-5 words required)'}
                    </div>
                  )}
                </div>

                {/* Feedback */}
                {showFeedback && (
                  <div className="space-y-3 mt-4">
                    {!isCorrect && (
                      <div className="bg-white border-l-4 border-green-500 p-4 rounded">
                        <p className="text-sm text-gray-700 mb-1">
                          <strong className="text-green-700">✓ Correct answer:</strong>
                        </p>
                        <p className="font-mono text-green-800 font-semibold">
                          {transformation.correctAnswer}
                        </p>
                        
                        {transformation.acceptableAnswers && transformation.acceptableAnswers.length > 0 && (
                          <div className="mt-2">
                            <p className="text-sm text-gray-700 mb-1">
                              <strong>Also acceptable:</strong>
                            </p>
                            {transformation.acceptableAnswers.map((acceptable, i) => (
                              <p key={i} className="font-mono text-gray-700 text-sm">
                                • {acceptable}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Explanation */}
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-blue-900 mb-1">Explanation:</p>
                          <p className="text-sm text-blue-800">{transformation.explanation}</p>
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Grammar point:</span>
                      <Badge variant="outline" className="text-indigo-700 border-indigo-300">
                        {transformation.category}
                      </Badge>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        {!showFeedback ? (
          <Button
            onClick={checkAnswers}
            disabled={evaluating || Object.keys(answers).length === 0}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg"
            size="lg"
          >
            <Target className="mr-2 h-5 w-5" />
            {evaluating ? 'Evaluating...' : 'Check Answers'}
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
          <CardTitle className="text-amber-900">💡 Tips for Key Word Transformations</CardTitle>
        </CardHeader>
        <CardContent className="text-amber-800 space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>Read both sentences carefully to understand the meaning</li>
            <li>The key word MUST be used and CANNOT be changed</li>
            <li>Use between 2 and 5 words (including the key word)</li>
            <li>Make sure the meaning is exactly the same</li>
            <li>Check your grammar and spelling carefully</li>
            <li>Common patterns: passive voice, reported speech, conditionals, comparatives</li>
            <li>Contractions (e.g., "don't") count as two words</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

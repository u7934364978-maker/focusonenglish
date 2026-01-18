'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight, Sparkles, Zap, Lightbulb, TrendingUp, AlertCircle } from 'lucide-react';
import type { Exercise } from '@/lib/exercise-generator';

interface ExerciseRendererProps {
  exercise: Exercise;
  onComplete: () => void;
}

interface EvaluationResult {
  isCorrect: boolean;
  score: number;
  feedback: string;
  detailedExplanation: string;
  strengths?: string[];
  improvements?: string[];
  grammarCorrections?: string[];
  vocabularySuggestions?: string[];
}

export default function ExerciseRenderer({ exercise, onComplete }: ExerciseRendererProps) {
  const [userAnswer, setUserAnswer] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  // Animación de entrada
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [exercise.id]);

  // Reset state when exercise changes
  useEffect(() => {
    setUserAnswer(null);
    setSubmitted(false);
    setEvaluation(null);
    setIsEvaluating(false);
    setShowConfetti(false);
  }, [exercise.id]);

  // Debug: Log exercise content
  console.log('📝 Exercise content:', {
    type: exercise.type,
    contentKeys: Object.keys(exercise.content || {}),
    content: exercise.content
  });

  const handleSubmit = async () => {
    if (!userAnswer || userAnswer === '') {
      return;
    }

    setIsEvaluating(true);
    setSubmitted(true);

    try {
      // Prepare data for AI evaluation
      const evaluationRequest = {
        question: exercise.content.question || exercise.content.title || 'Question',
        userAnswer: getUserAnswerText(),
        correctAnswer: getCorrectAnswer(),
        exerciseType: exercise.type,
        level: exercise.level,
        context: exercise.content.instructions || '',
        options: exercise.content.options || [],
      };

      console.log('🚀 Sending evaluation request:', evaluationRequest);

      // Call AI evaluation API
      const response = await fetch('/api/evaluate-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(evaluationRequest),
      });

      if (!response.ok) {
        throw new Error('Failed to evaluate answer');
      }

      const result: EvaluationResult = await response.json();
      console.log('✅ Evaluation result:', result);

      setEvaluation(result);

      // Show confetti for correct answers
      if (result.isCorrect && result.score >= 70) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    } catch (error) {
      console.error('❌ Error evaluating answer:', error);
      // Fallback to simple evaluation if AI fails
      const simpleEvaluation: EvaluationResult = {
        isCorrect: checkSimpleCorrect(),
        score: checkSimpleCorrect() ? 100 : 0,
        feedback: checkSimpleCorrect() ? '¡Correcto!' : 'Incorrecto. Intenta de nuevo.',
        detailedExplanation: exercise.content.explanation || 'Revisa tu respuesta y compárala con la correcta.',
      };
      setEvaluation(simpleEvaluation);
    } finally {
      setIsEvaluating(false);
    }
  };

  const getUserAnswerText = (): string => {
    if (typeof userAnswer === 'string') {
      return userAnswer;
    }
    if (typeof userAnswer === 'object' && userAnswer !== null) {
      // For multiple choice with question index
      if (userAnswer.questionIndex !== undefined && userAnswer.answer !== undefined) {
        const question = exercise.content.questions[userAnswer.questionIndex];
        return question.options[userAnswer.answer];
      }
      return JSON.stringify(userAnswer);
    }
    if (typeof userAnswer === 'number') {
      // For simple multiple choice
      if (exercise.content.options) {
        return exercise.content.options[userAnswer];
      }
      return userAnswer.toString();
    }
    return '';
  };

  const getCorrectAnswer = (): string | string[] => {
    // Check for questions array
    if (exercise.content.questions && Array.isArray(exercise.content.questions)) {
      const question = exercise.content.questions[0]; // For now, handle first question
      if (question.correctAnswer !== undefined) {
        return question.options[question.correctAnswer];
      }
      if (question.answer) {
        return question.answer;
      }
    }

    // Check for single correct answer
    if (exercise.content.correctAnswer !== undefined) {
      if (typeof exercise.content.correctAnswer === 'number' && exercise.content.options) {
        return exercise.content.options[exercise.content.correctAnswer];
      }
      return exercise.content.correctAnswer;
    }

    // Check for answer field
    if (exercise.content.answer) {
      return exercise.content.answer;
    }

    return 'Not specified';
  };

  const checkSimpleCorrect = (): boolean => {
    if (!userAnswer) return false;

    // For multiple choice with questions array
    if (typeof userAnswer === 'object' && userAnswer.questionIndex !== undefined) {
      const question = exercise.content.questions[userAnswer.questionIndex];
      return userAnswer.answer === question.correctAnswer;
    }

    // For simple multiple choice
    if (typeof userAnswer === 'number') {
      return userAnswer === exercise.content.correctAnswer;
    }

    // For text answers, just check if something was provided
    return userAnswer !== null && userAnswer !== '';
  };

  const handleNext = () => {
    setUserAnswer(null);
    setSubmitted(false);
    setEvaluation(null);
    setShowConfetti(false);
    setIsEvaluating(false);
    onComplete();
  };

  const renderExerciseContent = () => {
    return (
      <div className={`bg-white rounded-xl shadow-lg p-8 border border-gray-200 transition-all duration-300 ${
        isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}>
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold">
              {exercise.level}
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
              {exercise.type}
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
              {exercise.topicName}
            </span>
          </div>
          <h2 className="text-2xl font-black text-gray-900">{exercise.content.title || 'Exercise'}</h2>
          {exercise.content.instructions && (
            <p className="text-gray-600 mt-2">{exercise.content.instructions}</p>
          )}
        </div>

        <div className="space-y-4">
          {/* Questions array - for exercises with multiple questions */}
          {exercise.content.questions && Array.isArray(exercise.content.questions) && (
            <div className="space-y-6">
              {exercise.content.questions.map((q: any, qIndex: number) => (
                <div key={qIndex} className="bg-gray-50 rounded-lg p-6 border border-gray-200 transition-all hover:shadow-md">
                  <div className="mb-4">
                    <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                      Question {qIndex + 1}
                    </span>
                    <p className="text-lg text-gray-800 font-medium">{q.question || q.text}</p>
                  </div>

                  {/* Multiple choice options */}
                  {q.options && Array.isArray(q.options) && (
                    <div className="space-y-2">
                      {q.options.map((option: any, optIndex: number) => {
                        const isUserChoice = userAnswer?.questionIndex === qIndex && userAnswer?.answer === optIndex;
                        const isCorrectAnswer = submitted && optIndex === q.correctAnswer;
                        const isWrongChoice = submitted && isUserChoice && optIndex !== q.correctAnswer;

                        return (
                          <button
                            key={optIndex}
                            onClick={() => !submitted && setUserAnswer({ questionIndex: qIndex, answer: optIndex })}
                            disabled={submitted}
                            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                              !submitted ? 'transform hover:scale-[1.02] active:scale-[0.98]' : ''
                            } ${
                              isUserChoice && !submitted
                                ? 'border-orange-500 bg-orange-50 shadow-md'
                                : !submitted
                                ? 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-sm'
                                : ''
                            } ${
                              isCorrectAnswer
                                ? 'border-green-500 bg-green-50 shadow-md'
                                : ''
                            } ${
                              isWrongChoice
                                ? 'border-red-500 bg-red-50 shadow-md'
                                : ''
                            } ${
                              submitted && !isUserChoice && !isCorrectAnswer
                                ? 'border-gray-200 bg-gray-50 opacity-60'
                                : ''
                            } disabled:cursor-not-allowed`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="font-bold text-gray-500 flex-shrink-0">
                                {String.fromCharCode(65 + optIndex)}.
                              </span>
                              <span className={`flex-1 ${
                                isCorrectAnswer ? 'text-green-800 font-semibold' : 
                                isWrongChoice ? 'text-red-800' : 
                                'text-gray-800'
                              }`}>
                                {typeof option === 'string' ? option : option.text}
                              </span>
                              {isCorrectAnswer && (
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 animate-scale-in" />
                              )}
                              {isWrongChoice && (
                                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Fill-in-the-blank input */}
                  {exercise.type === 'fill-blank' && !q.options && (
                    <div className="relative">
                      <input
                        type="text"
                        value={userAnswer?.questionIndex === qIndex ? userAnswer?.answer || '' : ''}
                        onChange={(e) => setUserAnswer({ questionIndex: qIndex, answer: e.target.value })}
                        disabled={submitted}
                        placeholder="Type your answer here..."
                        className={`w-full p-4 border-2 rounded-lg focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all ${
                          submitted
                            ? evaluation?.isCorrect
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : 'border-gray-300 focus:border-orange-500'
                        } disabled:cursor-not-allowed`}
                      />
                      {submitted && (
                        <div className="mt-2 text-sm">
                          <span className="font-semibold text-gray-700">Tu respuesta: </span>
                          <span className={evaluation?.isCorrect ? 'text-green-700' : 'text-red-700'}>
                            {userAnswer?.answer}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Show explanation after submit */}
                  {submitted && q.explanation && (
                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg animate-slide-in">
                      <p className="text-sm font-semibold text-blue-900 mb-1 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Explicación:
                      </p>
                      <p className="text-sm text-blue-800">{q.explanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Single question/prompt */}
          {exercise.content.question && !exercise.content.questions && (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-lg text-gray-800">{exercise.content.question}</p>
            </div>
          )}

          {/* Options for single multiple choice (legacy) */}
          {exercise.content.options && Array.isArray(exercise.content.options) && !exercise.content.questions && (
            <div className="space-y-2">
              {exercise.content.options.map((option: any, index: number) => {
                const isUserChoice = userAnswer === index;
                const isCorrectAnswer = submitted && index === exercise.content.correctAnswer;
                const isWrongChoice = submitted && isUserChoice && index !== exercise.content.correctAnswer;

                return (
                  <button
                    key={index}
                    onClick={() => !submitted && setUserAnswer(index)}
                    disabled={submitted}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                      !submitted ? 'transform hover:scale-[1.02] active:scale-[0.98]' : ''
                    } ${
                      isUserChoice && !submitted
                        ? 'border-orange-500 bg-orange-50 shadow-md'
                        : !submitted
                        ? 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-sm'
                        : ''
                    } ${
                      isCorrectAnswer
                        ? 'border-green-500 bg-green-50 shadow-md'
                        : ''
                    } ${
                      isWrongChoice
                        ? 'border-red-500 bg-red-50 shadow-md'
                        : ''
                    } ${
                      submitted && !isUserChoice && !isCorrectAnswer
                        ? 'border-gray-200 bg-gray-50 opacity-60'
                        : ''
                    } disabled:cursor-not-allowed`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-gray-500 flex-shrink-0">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      <span className={`flex-1 ${
                        isCorrectAnswer ? 'text-green-800 font-semibold' : 
                        isWrongChoice ? 'text-red-800' : 
                        'text-gray-800'
                      }`}>
                        {typeof option === 'string' ? option : option.text}
                      </span>
                      {isCorrectAnswer && (
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 animate-scale-in" />
                      )}
                      {isWrongChoice && (
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Text input for fill-in-the-blank (single question legacy) */}
          {exercise.type === 'fill-blank' && !exercise.content.questions && !exercise.content.options && (
            <div className="relative">
              <input
                type="text"
                value={userAnswer || ''}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={submitted}
                placeholder="Type your answer here..."
                className={`w-full p-4 border-2 rounded-lg focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all ${
                  submitted
                    ? evaluation?.isCorrect
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : 'border-gray-300 focus:border-orange-500'
                } disabled:cursor-not-allowed`}
              />
              {submitted && (
                <div className="mt-2 text-sm">
                  <span className="font-semibold text-gray-700">Tu respuesta: </span>
                  <span className={evaluation?.isCorrect ? 'text-green-700' : 'text-red-700'}>
                    {userAnswer}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Textarea for writing exercises */}
          {exercise.type === 'writing-analysis' && (
            <div className="relative">
              <textarea
                value={userAnswer || ''}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={submitted}
                placeholder="Write your answer here..."
                rows={6}
                className={`w-full p-4 border-2 rounded-lg focus:ring-2 focus:ring-orange-200 focus:outline-none resize-none transition-all ${
                  submitted
                    ? evaluation?.isCorrect
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : 'border-gray-300 focus:border-orange-500'
                } disabled:cursor-not-allowed`}
              />
              {submitted && (
                <div className="mt-2 text-sm">
                  <span className="font-semibold text-gray-700">Tu respuesta permanece visible arriba ↑</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* AI-Powered Evaluation Feedback */}
        {submitted && evaluation && (
          <div className="mt-6 space-y-4 animate-slide-in">
            {/* Score and Basic Feedback */}
            <div className={`p-6 rounded-lg ${
              evaluation.isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'
            } ${showConfetti ? 'animate-bounce' : ''}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  {evaluation.isCorrect ? (
                    <>
                      <CheckCircle className="w-6 h-6 text-green-600 animate-scale-in" />
                      <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                    </>
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600" />
                  )}
                  <span className={`text-xl font-bold ${
                    evaluation.isCorrect ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {evaluation.isCorrect ? '¡Excelente! 🎉' : 'Casi ahí 💪'}
                  </span>
                </div>
                <div className={`text-2xl font-black px-4 py-2 rounded-lg ${
                  evaluation.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {evaluation.score}/100
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">{evaluation.feedback}</p>
            </div>

            {/* Detailed Explanation */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Explicación Detallada
              </h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {evaluation.detailedExplanation}
              </p>
            </div>

            {/* Strengths */}
            {evaluation.strengths && evaluation.strengths.length > 0 && (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Puntos Fuertes
                </h3>
                <ul className="space-y-2">
                  {evaluation.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Improvements */}
            {evaluation.improvements && evaluation.improvements.length > 0 && (
              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Áreas de Mejora
                </h3>
                <ul className="space-y-2">
                  {evaluation.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-orange-600 font-bold">→</span>
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Grammar Corrections */}
            {evaluation.grammarCorrections && evaluation.grammarCorrections.length > 0 && (
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
                  📝 Correcciones Gramaticales
                </h3>
                <ul className="space-y-2">
                  {evaluation.grammarCorrections.map((correction, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>{correction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Vocabulary Suggestions */}
            {evaluation.vocabularySuggestions && evaluation.vocabularySuggestions.length > 0 && (
              <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-indigo-900 mb-3 flex items-center gap-2">
                  📚 Sugerencias de Vocabulario
                </h3>
                <ul className="space-y-2">
                  {evaluation.vocabularySuggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-indigo-600 font-bold">→</span>
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Loading state during evaluation */}
        {isEvaluating && (
          <div className="mt-6 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-lg animate-pulse">
            <div className="flex items-center justify-center gap-3">
              <div className="animate-spin text-3xl">🤖</div>
              <div>
                <p className="text-lg font-bold text-gray-800">Evaluando tu respuesta con IA...</p>
                <p className="text-sm text-gray-600">Generando feedback personalizado</p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={userAnswer === null || userAnswer === '' || isEvaluating}
              className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              <span>Verificar con IA</span>
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Siguiente Ejercicio</span>
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      {renderExerciseContent()}

      {/* Exercise Info */}
      <div className="mt-6 bg-white rounded-lg shadow p-4 border border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>⏱️ Tiempo estimado: {exercise.estimatedTime} minutos</span>
          <span>🤖 Evaluación con IA</span>
        </div>
      </div>
    </div>
  );
}

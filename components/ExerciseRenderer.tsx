'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight, Sparkles, Zap } from 'lucide-react';
import type { Exercise } from '@/lib/exercise-generator';

interface ExerciseRendererProps {
  exercise: Exercise;
  onComplete: () => void;
}

export default function ExerciseRenderer({ exercise, onComplete }: ExerciseRendererProps) {
  const [userAnswer, setUserAnswer] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  // Animación de entrada
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [exercise.id]);

  // Debug: Log exercise content
  console.log('📝 Exercise content:', {
    type: exercise.type,
    contentKeys: Object.keys(exercise.content || {}),
    content: exercise.content
  });

  const handleSubmit = () => {
    // Simple validation - this would be more complex in production
    setSubmitted(true);
    // For now, just mark as correct if an answer was provided
    const correct = userAnswer !== null && userAnswer !== '';
    setIsCorrect(correct);
    
    // Show confetti for correct answers
    if (correct) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const handleNext = () => {
    setUserAnswer(null);
    setSubmitted(false);
    setIsCorrect(false);
    setShowConfetti(false);
    onComplete();
  };

  const renderExerciseContent = () => {
    // This is a simplified renderer - the actual implementation would handle
    // all exercise types properly
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
                      {q.options.map((option: any, optIndex: number) => (
                        <button
                          key={optIndex}
                          onClick={() => !submitted && setUserAnswer({ questionIndex: qIndex, answer: optIndex })}
                          disabled={submitted}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                            userAnswer?.questionIndex === qIndex && userAnswer?.answer === optIndex
                              ? 'border-orange-500 bg-orange-50 shadow-md'
                              : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-sm'
                          } ${
                            submitted && optIndex === q.correctAnswer
                              ? 'border-green-500 bg-green-50 shadow-md'
                              : ''
                          } ${
                            submitted && userAnswer?.questionIndex === qIndex && userAnswer?.answer === optIndex && optIndex !== q.correctAnswer
                              ? 'border-red-500 bg-red-50 shadow-md'
                              : ''
                          } disabled:cursor-not-allowed disabled:transform-none`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-gray-500">
                              {String.fromCharCode(65 + optIndex)}.
                            </span>
                            <span className="text-gray-800">{typeof option === 'string' ? option : option.text}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Fill-in-the-blank input */}
                  {exercise.type === 'fill-blank' && !q.options && (
                    <input
                      type="text"
                      value={userAnswer?.questionIndex === qIndex ? userAnswer?.answer || '' : ''}
                      onChange={(e) => setUserAnswer({ questionIndex: qIndex, answer: e.target.value })}
                      disabled={submitted}
                      placeholder="Type your answer here..."
                      className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
                    />
                  )}

                  {/* Show explanation after submit */}
                  {submitted && q.explanation && (
                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg animate-slide-in">
                      <p className="text-sm font-semibold text-blue-900 mb-1">💡 Explanation:</p>
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
              {exercise.content.options.map((option: any, index: number) => (
                <button
                  key={index}
                  onClick={() => !submitted && setUserAnswer(index)}
                  disabled={submitted}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                    userAnswer === index
                      ? 'border-orange-500 bg-orange-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-sm'
                  } ${
                    submitted && index === exercise.content.correctAnswer
                      ? 'border-green-500 bg-green-50 shadow-md'
                      : ''
                  } ${
                    submitted && userAnswer === index && index !== exercise.content.correctAnswer
                      ? 'border-red-500 bg-red-50 shadow-md'
                      : ''
                  } disabled:cursor-not-allowed disabled:transform-none`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-500">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="text-gray-800">{typeof option === 'string' ? option : option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Text input for fill-in-the-blank (single question legacy) */}
          {exercise.type === 'fill-blank' && !exercise.content.questions && !exercise.content.options && (
            <input
              type="text"
              value={userAnswer || ''}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={submitted}
              placeholder="Type your answer here..."
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
            />
          )}

          {/* Textarea for writing exercises */}
          {exercise.type === 'writing-analysis' && (
            <textarea
              value={userAnswer || ''}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={submitted}
              placeholder="Write your answer here..."
              rows={6}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed resize-none transition-all"
            />
          )}
        </div>

        {/* Feedback */}
        {submitted && (
          <div className={`mt-6 p-4 rounded-lg animate-slide-in ${
            isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          } ${showConfetti ? 'animate-bounce' : ''}`}>
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600 animate-scale-in" />
                  <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
                  <span className="font-bold text-green-800">¡Excelente! 🎉</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-600" />
                  <span className="font-bold text-red-800">Inténtalo de nuevo</span>
                </>
              )}
            </div>
            {exercise.content.explanation && (
              <p className="text-gray-700">{exercise.content.explanation}</p>
            )}
            {exercise.content.correctAnswer && (
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Respuesta correcta:</span> {exercise.content.correctAnswer}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={userAnswer === null || userAnswer === ''}
              className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              <span>Verificar Respuesta</span>
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
          <span>📅 {exercise.createdAt.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

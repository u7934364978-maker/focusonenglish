'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import type { Exercise } from '@/lib/exercise-generator';

interface ExerciseRendererProps {
  exercise: Exercise;
  onComplete: () => void;
}

export default function ExerciseRenderer({ exercise, onComplete }: ExerciseRendererProps) {
  const [userAnswer, setUserAnswer] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

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
    setIsCorrect(userAnswer !== null && userAnswer !== '');
  };

  const handleNext = () => {
    setUserAnswer(null);
    setSubmitted(false);
    setIsCorrect(false);
    onComplete();
  };

  const renderExerciseContent = () => {
    // This is a simplified renderer - the actual implementation would handle
    // all exercise types properly
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
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
                <div key={qIndex} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
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
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                            userAnswer?.questionIndex === qIndex && userAnswer?.answer === optIndex
                              ? 'border-orange-500 bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300 bg-white'
                          } ${
                            submitted && optIndex === q.correctAnswer
                              ? 'border-green-500 bg-green-50'
                              : ''
                          } ${
                            submitted && userAnswer?.questionIndex === qIndex && userAnswer?.answer === optIndex && optIndex !== q.correctAnswer
                              ? 'border-red-500 bg-red-50'
                              : ''
                          } disabled:cursor-not-allowed`}
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
                      className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                  )}

                  {/* Show explanation after submit */}
                  {submitted && q.explanation && (
                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm font-semibold text-blue-900 mb-1">Explanation:</p>
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
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    userAnswer === index
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  } ${
                    submitted && index === exercise.content.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : ''
                  } ${
                    submitted && userAnswer === index && index !== exercise.content.correctAnswer
                      ? 'border-red-500 bg-red-50'
                      : ''
                  } disabled:cursor-not-allowed`}
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
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
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
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
            />
          )}
        </div>

        {/* Feedback */}
        {submitted && (
          <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-green-800">Correct!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-600" />
                  <span className="font-bold text-red-800">Not quite right</span>
                </>
              )}
            </div>
            {exercise.content.explanation && (
              <p className="text-gray-700">{exercise.content.explanation}</p>
            )}
            {exercise.content.correctAnswer && (
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Correct answer:</span> {exercise.content.correctAnswer}
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
              className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              <span>Next Exercise</span>
              <ArrowRight className="w-5 h-5" />
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
          <span>⏱️ Estimated time: {exercise.estimatedTime} minutes</span>
          <span>📅 {exercise.createdAt.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

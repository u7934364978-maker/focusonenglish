'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight, Sparkles, Zap, Trophy } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options?: string[];
  correctAnswer: any;
  explanation?: string;
  type: 'multiple-choice' | 'fill-blank' | 'true-false';
}

interface SingleQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (correct: boolean) => void;
  exerciseType: string;
  level: string;
}

export default function SingleQuestionExercise({ 
  question, 
  questionNumber, 
  totalQuestions,
  onAnswer,
  exerciseType,
  level
}: SingleQuestionProps) {
  const [userAnswer, setUserAnswer] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  // Reset state when question changes
  useEffect(() => {
    setUserAnswer(null);
    setSubmitted(false);
    setIsCorrect(false);
    setShowConfetti(false);
    setIsAnimating(true);
    
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [question.id]);

  const handleSubmit = () => {
    setSubmitted(true);
    
    // Check answer
    let correct = false;
    if (question.type === 'multiple-choice') {
      correct = userAnswer === question.correctAnswer;
    } else if (question.type === 'fill-blank') {
      const userAnswerLower = (userAnswer || '').toString().toLowerCase().trim();
      const correctAnswerLower = question.correctAnswer.toString().toLowerCase().trim();
      correct = userAnswerLower === correctAnswerLower;
    } else if (question.type === 'true-false') {
      correct = userAnswer === question.correctAnswer;
    }
    
    setIsCorrect(correct);
    
    if (correct) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const handleContinue = () => {
    onAnswer(isCorrect);
  };

  const progress = ((questionNumber - 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-gray-500">
              Pregunta {questionNumber} de {totalQuestions}
            </span>
            <div className="flex items-center gap-2">
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
                {level}
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                {exerciseType}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-orange-600">
            <Trophy className="w-5 h-5" />
            <span className="font-bold">0 pts</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className={`max-w-3xl w-full transition-all duration-300 ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          
          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200">
            
            {/* Question */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
              {question.question}
            </h2>

            {/* Options for Multiple Choice */}
            {question.options && question.type === 'multiple-choice' && (
              <div className="space-y-3 mb-8">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => !submitted && setUserAnswer(index)}
                    disabled={submitted}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                      userAnswer === index
                        ? 'border-orange-500 bg-orange-50 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-md'
                    } ${
                      submitted && index === question.correctAnswer
                        ? 'border-green-500 bg-green-50 shadow-lg'
                        : ''
                    } ${
                      submitted && userAnswer === index && index !== question.correctAnswer
                        ? 'border-red-500 bg-red-50 shadow-lg'
                        : ''
                    } disabled:cursor-not-allowed disabled:transform-none`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        userAnswer === index
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-gray-600'
                      } ${
                        submitted && index === question.correctAnswer
                          ? 'bg-green-500 text-white'
                          : ''
                      } ${
                        submitted && userAnswer === index && index !== question.correctAnswer
                          ? 'bg-red-500 text-white'
                          : ''
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-lg text-gray-800 font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Input for Fill in the Blank */}
            {question.type === 'fill-blank' && (
              <div className="mb-8">
                <input
                  type="text"
                  value={userAnswer || ''}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  disabled={submitted}
                  placeholder="Escribe tu respuesta aquí..."
                  className="w-full p-5 text-xl border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
                  autoFocus
                />
              </div>
            )}

            {/* Feedback */}
            {submitted && (
              <div className={`mb-8 p-6 rounded-xl animate-slide-in ${
                isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'
              } ${showConfetti ? 'animate-bounce' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  {isCorrect ? (
                    <>
                      <CheckCircle className="w-6 h-6 text-green-600 animate-scale-in" />
                      <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                      <span className="font-black text-xl text-green-800">¡Excelente! 🎉</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-6 h-6 text-red-600" />
                      <span className="font-black text-xl text-red-800">No del todo...</span>
                    </>
                  )}
                </div>
                
                {question.explanation && (
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Explicación:</span> {question.explanation}
                  </p>
                )}
                
                {!isCorrect && (
                  <p className="text-gray-700 mt-2">
                    <span className="font-semibold">Respuesta correcta:</span> {
                      question.type === 'multiple-choice' && question.options
                        ? question.options[question.correctAnswer]
                        : question.correctAnswer
                    }
                  </p>
                )}
              </div>
            )}

            {/* Action Button */}
            <div className="flex justify-center">
              {!submitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={userAnswer === null || userAnswer === ''}
                  className="bg-orange-500 text-white px-12 py-4 rounded-xl text-xl font-black hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <Zap className="w-6 h-6" />
                  <span>COMPROBAR</span>
                </button>
              ) : (
                <button
                  onClick={handleContinue}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-xl text-xl font-black hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <span>CONTINUAR</span>
                  <ArrowRight className="w-6 h-6 animate-pulse" />
                </button>
              )}
            </div>
          </div>

          {/* Skip Button (subtle) */}
          {!submitted && (
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  setSubmitted(true);
                  setIsCorrect(false);
                }}
                className="text-gray-500 hover:text-gray-700 text-sm font-semibold underline"
              >
                No sé la respuesta
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

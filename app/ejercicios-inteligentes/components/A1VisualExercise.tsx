'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, Volume2, RefreshCw } from 'lucide-react';

interface A1Question {
  id: string;
  question: string;
  translation: string;
  imageUrl: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  audioHint?: string;
}

interface A1VisualExerciseProps {
  exercise: {
    title: string;
    instructions: string;
    questions: A1Question[];
  };
  onNext: () => void;
  gradient: string;
}

export default function A1VisualExercise({ exercise, onNext, gradient }: A1VisualExerciseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isValidated, setIsValidated] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = exercise.questions[currentIndex];
  const isLastQuestion = currentIndex === exercise.questions.length - 1;

  const handleSelectAnswer = (answer: string) => {
    if (!isValidated) {
      setSelectedAnswer(answer);
    }
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer) return;
    
    setIsValidated(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onNext();
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsValidated(false);
    }
  };

  const progress = ((currentIndex + 1) / exercise.questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
            Pregunta {currentIndex + 1} de {exercise.questions.length}
          </span>
          <span className="text-sm font-bold text-emerald-600">
            ⭐ {score} correctas
          </span>
        </div>
        <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${gradient} transition-all duration-500`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl border-4 border-emerald-200 overflow-hidden">
        {/* Instructions */}
        <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-6 text-white">
          <h3 className="text-2xl font-black mb-2">{exercise.title}</h3>
          <p className="text-emerald-50 text-lg">{exercise.instructions}</p>
        </div>

        <div className="p-8">
          {/* Question Text */}
          <div className="mb-6 text-center">
            <h4 className="text-3xl font-black text-gray-900 mb-3">
              {currentQuestion.question}
            </h4>
            <p className="text-xl text-emerald-600 font-bold italic">
              🇪🇸 {currentQuestion.translation}
            </p>
          </div>

          {/* Large Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-full max-w-md h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-gray-200">
              <img 
                src={currentQuestion.imageUrl} 
                alt={currentQuestion.question}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Audio Button (if available) */}
          {currentQuestion.audioHint && (
            <div className="mb-6 flex justify-center">
              <button
                onClick={() => {
                  const utterance = new SpeechSynthesisUtterance(currentQuestion.audioHint);
                  utterance.lang = 'en-US';
                  utterance.rate = 0.8;
                  speechSynthesis.speak(utterance);
                }}
                className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg transition-all hover:scale-105"
              >
                <Volume2 className="w-6 h-6" />
                🔊 Escuchar
              </button>
            </div>
          )}

          {/* Answer Options - Large Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              
              return (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(option)}
                  disabled={isValidated}
                  className={`relative p-6 rounded-2xl border-4 transition-all text-2xl font-black ${
                    isSelected
                      ? isValidated
                        ? isCorrect
                          ? 'border-green-500 bg-green-100 scale-105'
                          : 'border-red-500 bg-red-100'
                        : 'border-emerald-500 bg-emerald-100 scale-105'
                      : isValidated && isCorrect
                        ? 'border-green-500 bg-green-100'
                        : 'border-gray-300 bg-white hover:border-emerald-400 hover:bg-emerald-50'
                  } ${isValidated ? 'cursor-default' : 'cursor-pointer hover:scale-105'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800">{option}</span>
                    
                    {isValidated && isSelected && (
                      <div className="ml-4">
                        {isCorrect ? (
                          <CheckCircle2 className="w-10 h-10 text-green-600" />
                        ) : (
                          <XCircle className="w-10 h-10 text-red-600" />
                        )}
                      </div>
                    )}
                    {isValidated && !isSelected && isCorrect && (
                      <div className="ml-4">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation (after validation) */}
          {isValidated && (
            <div className="mb-8 p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-200">
              <h5 className="font-black text-emerald-900 mb-2 text-xl flex items-center gap-2">
                💡 Explicación:
              </h5>
              <p className="text-emerald-800 text-lg leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            {!isValidated ? (
              <button
                onClick={handleCheckAnswer}
                disabled={!selectedAnswer}
                className={`flex-1 py-5 px-8 rounded-2xl font-black text-xl text-white transition-all ${
                  selectedAnswer
                    ? `bg-gradient-to-r ${gradient} hover:shadow-2xl hover:scale-105`
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                ✓ Comprobar Respuesta
              </button>
            ) : (
              <button
                onClick={handleNext}
                className={`flex-1 bg-gradient-to-r ${gradient} text-white py-5 px-8 rounded-2xl font-black text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 hover:scale-105`}
              >
                {isLastQuestion ? (
                  <>
                    🎉 Ver Resultados
                  </>
                ) : (
                  <>
                    Siguiente Pregunta
                    <RefreshCw className="w-6 h-6" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

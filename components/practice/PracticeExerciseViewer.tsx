'use client';

import { useState } from 'react';

interface Question {
  id: string;
  question: string;
  type?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  points: number;
}

interface Exercise {
  id: string;
  type: string;
  title: string;
  instructions?: string;
  text?: string; // For reading comprehension passages
  questions?: Question[];
  transformations?: any[];
}

interface PracticeExerciseViewerProps {
  exercise: Exercise;
  onComplete: (score: number) => void;
  onSkip: () => void;
  currentNumber: number;
  totalExercises: number;
}

export default function PracticeExerciseViewer({
  exercise,
  onComplete,
  onSkip,
  currentNumber,
  totalExercises
}: PracticeExerciseViewerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const questions = exercise.questions || [];
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = totalQuestions > 0 ? ((answeredQuestions) / totalQuestions) * 100 : 0;

  const checkAnswer = () => {
    if (!currentQuestion) return;

    const userAnswer = answer.trim().toLowerCase();
    const correctAnswers = Array.isArray(currentQuestion.correctAnswer)
      ? currentQuestion.correctAnswer.map(a => a.toLowerCase().trim())
      : [currentQuestion.correctAnswer.toLowerCase().trim()];

    console.log('DEBUG - User answer:', userAnswer);
    console.log('DEBUG - Correct answers:', correctAnswers);
    console.log('DEBUG - Has options:', currentQuestion.options ? 'YES' : 'NO');
    if (currentQuestion.options) {
      console.log('DEBUG - Options:', currentQuestion.options);
    }

    // If question has options, also accept the actual text from the correct option
    let correct = correctAnswers.some(ca => userAnswer === ca);
    
    console.log('DEBUG - Direct match:', correct);
    
    // If not correct and has options, check if user wrote the actual answer text
    if (!correct && currentQuestion.options && currentQuestion.options.length > 0) {
      // Find the correct option based on the letter
      const correctLetter = correctAnswers[0]; // e.g., "a"
      console.log('DEBUG - Looking for option starting with:', correctLetter + ')');
      
      const correctOption = currentQuestion.options.find(opt => 
        opt.trim().toLowerCase().startsWith(correctLetter + ')')
      );
      
      console.log('DEBUG - Found correct option:', correctOption);
      
      if (correctOption) {
        // Extract the text after "A) ", "B) ", etc.
        const optionText = correctOption.substring(correctOption.indexOf(')') + 1).trim().toLowerCase();
        console.log('DEBUG - Option text extracted:', optionText);
        
        // Check if user answer matches the option text
        if (userAnswer === optionText) {
          correct = true;
          console.log('DEBUG - Match with option text!');
        }
      }
    }

    console.log('DEBUG - Final result:', correct ? 'CORRECT' : 'INCORRECT');

    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      setScore(score + currentQuestion.points);
    }
    setAnsweredQuestions(answeredQuestions + 1);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswer('');
      setShowFeedback(false);
      setIsCorrect(false);
    } else {
      // Ejercicio completado
      const finalScore = totalQuestions > 0 ? (score / (totalQuestions * (currentQuestion?.points || 1))) * 100 : 0;
      onComplete(finalScore);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-peach-50">
        <div className="text-center">
          <p className="text-xl text-gray-600">No questions available</p>
          <button
            onClick={onSkip}
            className="mt-4 px-6 py-3 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 transition-colors font-bold"
          >
            Skip Exercise
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-peach-50 flex flex-col">
      {/* Header simple con progreso */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={onSkip}
              className="text-gray-600 hover:text-gray-800 font-semibold"
            >
              ✕
            </button>
            <div className="text-sm text-gray-600">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </div>
          </div>
          {/* Barra de progreso */}
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-amber-400 to-orange-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Contenido principal - tipo Duolingo */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          {/* Título del ejercicio */}
          {currentQuestionIndex === 0 && (
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{exercise.title}</h2>
              {exercise.instructions && (
                <p className="text-gray-600">{exercise.instructions}</p>
              )}
            </div>
          )}

          {/* Reading passage - Always visible for reading comprehension */}
          {exercise.text && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📖</span>
                <h3 className="text-lg font-bold text-gray-900">Reading Passage</h3>
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {exercise.text}
                </p>
              </div>
            </div>
          )}

          {/* Pregunta */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {currentQuestion.question}
            </h3>

            {/* Campo de respuesta para fill-blank */}
            {(currentQuestion.type === 'fill-blank' || !currentQuestion.options) && !showFeedback && (
              <div className="space-y-4">
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && answer && checkAnswer()}
                  placeholder="Type your answer..."
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                  autoFocus
                  disabled={showFeedback}
                />
                <p className="text-sm text-gray-500">Press Enter to submit</p>
              </div>
            )}

            {/* Opciones múltiples */}
            {currentQuestion.options && currentQuestion.options.length > 0 && !showFeedback && (
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const selectedOption = option;
                      setAnswer(selectedOption);
                      
                      // Extract letter from option (e.g., "A) answer" -> "A")
                      const optionLetter = selectedOption.split(')')[0].trim();
                      
                      // Check answer with the option letter
                      const userAnswer = optionLetter.toLowerCase();
                      const correctAnswers = Array.isArray(currentQuestion.correctAnswer)
                        ? currentQuestion.correctAnswer.map(a => a.toLowerCase().trim())
                        : [currentQuestion.correctAnswer.toLowerCase().trim()];
                      
                      // Validate answer - exact match only
                      const correct = correctAnswers.some(ca => userAnswer === ca);
                      
                      setIsCorrect(correct);
                      setShowFeedback(true);
                      
                      if (correct) {
                        setScore(score + currentQuestion.points);
                      }
                      setAnsweredQuestions(answeredQuestions + 1);
                    }}
                    className="w-full p-4 text-left border-2 border-gray-300 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all font-medium text-gray-900"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {/* Feedback */}
            {showFeedback && (
              <div className={`mt-6 p-6 rounded-xl ${isCorrect ? 'bg-amber-50 border-2 border-amber-300' : 'bg-red-50 border-2 border-red-300'}`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{isCorrect ? '✓' : '✗'}</span>
                  <div className="flex-1">
                    <h4 className={`text-xl font-bold mb-2 ${isCorrect ? 'text-amber-800' : 'text-red-800'}`}>
                      {isCorrect ? 'Correct!' : 'Incorrect'}
                    </h4>
                    {!isCorrect && (
                      <p className="text-gray-700 mb-2">
                        <strong>Correct answer:</strong>{' '}
                        {Array.isArray(currentQuestion.correctAnswer)
                          ? currentQuestion.correctAnswer.join(' / ')
                          : currentQuestion.correctAnswer}
                      </p>
                    )}
                    {currentQuestion.explanation && (
                      <p className="text-gray-700 text-sm mt-2">
                        <strong>Explicación:</strong> {currentQuestion.explanation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Botón de continuar */}
          {showFeedback && (
            <button
              onClick={nextQuestion}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-colors shadow-lg ${
                isCorrect
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white'
                  : 'bg-gradient-to-r from-orange-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white'
              }`}
            >
              {currentQuestionIndex < totalQuestions - 1 ? 'Continue' : 'Finish Exercise'}
            </button>
          )}

          {/* Botón de verificar */}
          {!showFeedback && answer && (
            <button
              onClick={checkAnswer}
              className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-peach-500 text-white rounded-xl font-bold text-lg hover:from-coral-600 hover:to-peach-600 transition-all shadow-lg"
            >
              Verificar
            </button>
          )}

          {/* Botón de saltar (solo si no ha respondido) */}
          {!showFeedback && !answer && (
            <button
              onClick={onSkip}
              className="w-full mt-3 py-3 px-6 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
            >
              Saltar ejercicio
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

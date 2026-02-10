'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight, Sparkles, Zap, Loader2 } from 'lucide-react';
import type { Exercise } from '@/lib/exercise-generator';
import EnhancedFeedback from './course/EnhancedFeedback';
import SpeakingExercise from './SpeakingExercise';
import WordSearchExercise from './exercises/WordSearchExercise';
import CrosswordExercise from './exercises/CrosswordExercise';
import FlashcardExercise from './exercises/FlashcardExercise';
import DragDropExercise from './exercises/DragDropExercise';
import MatchingExercise from './exercises/MatchingExercise';
import type { MultipleChoiceEvaluationResponse, TextAnswerEvaluationResponse } from '@/lib/exercise-types';
import { useGamification } from '@/lib/hooks/use-gamification';
import { updateSRSItem } from '@/lib/srs';

interface ExerciseRendererProps {
  exercise: Exercise;
  onComplete: () => void;
}

export default function ExerciseRenderer({ exercise, onComplete }: ExerciseRendererProps) {
  const { completeExercise } = useGamification();
  const [userAnswer, setUserAnswer] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showFinishButton, setShowFinishButton] = useState(false);
  const [finishScore, setFinishScore] = useState(0);
  const [evaluation, setEvaluation] = useState<{
    isCorrect: boolean;
    score: number;
    feedback: string;
    details?: string;
  } | null>(null);

  // Animación de entrada y reset de estado cuando cambia el ejercicio
  useEffect(() => {
    // Reset completo del estado solo cuando cambia el ejercicio
    setUserAnswer(null);
    setSubmitted(false);
    setIsCorrect(false);
    setShowConfetti(false);
    setIsEvaluating(false);
    setShowFinishButton(false);
    setFinishScore(0);
    setEvaluation(null);
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
    setSubmitted(true);
    
    // For exercises with multiple questions array
    if (exercise.content.questions && Array.isArray(exercise.content.questions) && userAnswer?.questionIndex !== undefined) {
      const currentQuestion = exercise.content.questions[userAnswer.questionIndex];
      
      if (currentQuestion.options && Array.isArray(currentQuestion.options)) {
        // Multiple choice evaluation
        const correct = userAnswer.answer === currentQuestion.correctAnswer;
        setIsCorrect(correct);
        
        const evalResult = {
          isCorrect: correct,
          score: correct ? 100 : 0,
          feedback: correct ? '¡Excelente! Respuesta correcta.' : 'Respuesta incorrecta.',
        };
        setEvaluation(evalResult);

        if (correct) {
          setShowConfetti(true);
          completeExercise(exercise.id, 1, 1);
        }
      } else {
        // Text answer for fill-in-the-blank
        const userAnswerLower = (userAnswer.answer || '').toString().toLowerCase().trim();
        const q = currentQuestion as any;
        
        const correctAnswers = [
          ...(Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer]),
          ...(Array.isArray(q.acceptableAnswers) ? q.acceptableAnswers : (q.acceptableAnswers ? [q.acceptableAnswers] : [])),
          ...(Array.isArray(q.acceptableAlternatives) ? q.acceptableAlternatives : (q.acceptableAlternatives ? [q.acceptableAlternatives] : []))
        ].filter(Boolean).map(a => a.toLowerCase().trim());
        
        const correct = correctAnswers.includes(userAnswerLower);
        setIsCorrect(correct);
        
        const evalResult = {
          isCorrect: correct,
          score: correct ? 100 : 0,
          feedback: correct ? '¡Excelente! Respuesta correcta.' : `Respuesta incorrecta. La respuesta correcta era: ${q.correctAnswer}`,
        };
        setEvaluation(evalResult);

        if (correct) {
          setShowConfetti(true);
          completeExercise(exercise.id, 1, 1);
        }
      }
    } else {
      // Legacy single question format or other types
      const correct = userAnswer !== null && userAnswer !== '';
      setIsCorrect(correct);
      if (correct) {
        setShowConfetti(true);
        completeExercise(exercise.id, 1, 1);
      }
    }
  };

  const handleNext = () => {
    onComplete();
  };

  const renderExerciseContent = () => {
    // Speaking exercises use dedicated component
    if (exercise.type === 'speaking-analysis' && exercise.content.questions && Array.isArray(exercise.content.questions)) {
      const question = exercise.content.questions[0]; // Use first question for now
      return (
        <div className="space-y-6">
          <SpeakingExercise
            question={question}
            level={exercise.level}
            onComplete={(evaluation) => {
              console.log('Speaking evaluation:', evaluation);
              setShowFinishButton(true);
              setFinishScore(evaluation.overallScore || 100);
            }}
          />
          {showFinishButton && (
            <div className="mt-8 flex justify-center animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => onComplete()}
                className="bg-green-600 text-white px-12 py-4 rounded-2xl font-black hover:bg-green-700 transition-all shadow-lg flex items-center justify-center gap-2 shadow-green-100"
              >
                Siguiente Ejercicio
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      );
    }

    // Word Search exercise
    if (exercise.type === 'word-search') {
      return (
        <div className={`bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-gray-200 transition-all duration-300 ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <div className="mb-6">
            <h2 className="text-2xl font-black text-gray-900">{exercise.content.title || 'Sopa de Letras'}</h2>
            <p className="text-gray-600 mt-2">{exercise.content.instructions || 'Encuentra las palabras ocultas en la cuadrícula.'}</p>
          </div>
          <WordSearchExercise 
            words={exercise.content.words} 
            gridSize={exercise.content.gridSize || 10} 
            clues={exercise.content.clues}
            onComplete={() => {
              setShowConfetti(true);
              completeExercise(exercise.id, 1, 1);
              setShowFinishButton(true);
              setFinishScore(100);
            }} 
          />
          {showFinishButton && (
            <div className="mt-8 flex justify-center animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => onComplete(finishScore)}
                className="bg-green-600 text-white px-12 py-4 rounded-2xl font-black hover:bg-green-700 transition-all shadow-lg flex items-center justify-center gap-2 shadow-green-100"
              >
                Siguiente Ejercicio
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      );
    }

    // Crossword exercise
    if (exercise.type === 'crossword') {
      return (
        <div className={`bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-gray-200 transition-all duration-300 ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <div className="mb-6">
            <h2 className="text-2xl font-black text-gray-900">{exercise.content.title || 'Crucigrama'}</h2>
            <p className="text-gray-600 mt-2">{exercise.content.instructions || 'Completa el crucigrama usando las pistas.'}</p>
          </div>
          <CrosswordExercise 
            items={exercise.content.items} 
            onComplete={() => {
              setShowConfetti(true);
              completeExercise(exercise.id, 1, 1);
              setShowFinishButton(true);
              setFinishScore(100);
            }} 
          />
          {showFinishButton && (
            <div className="mt-8 flex justify-center animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => onComplete(finishScore)}
                className="bg-green-600 text-white px-12 py-4 rounded-2xl font-black hover:bg-green-700 transition-all shadow-lg flex items-center justify-center gap-2 shadow-green-100"
              >
                Siguiente Ejercicio
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      );
    }

    // Flashcard exercise
    if (exercise.type === 'flashcard') {
      return (
        <div className={`transition-all duration-300 ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <FlashcardExercise 
            content={exercise.content as any} 
            onComplete={async (quality) => {
              if (quality >= 4) setShowConfetti(true);
              
              // Update SRS for flashcards
              await updateSRSItem(
                exercise.id, 
                'vocabulary', 
                exercise.content, 
                quality
              );

              completeExercise(exercise.id, quality, 5);
              setShowFinishButton(true);
              setFinishScore((quality / 5) * 100);
            }} 
          />
          {showFinishButton && (
            <div className="mt-8 flex justify-center animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => onComplete(finishScore)}
                className="bg-green-600 text-white px-12 py-4 rounded-2xl font-black hover:bg-green-700 transition-all shadow-lg flex items-center justify-center gap-2 shadow-green-100"
              >
                Siguiente Ejercicio
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      );
    }

    // Drag and Drop exercise
    if (exercise.type === 'drag-drop' || exercise.type === 'sentence-building') {
      return (
        <div className={`transition-all duration-300 ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <DragDropExercise 
            content={exercise.content as any} 
            onComplete={(isCorrect) => {
              if (isCorrect) {
                setShowConfetti(true);
                completeExercise(exercise.id, 1, 1);
              }
              onComplete();
            }} 
          />
        </div>
      );
    }

    // Matching exercise
    if (exercise.type === 'matching') {
      return (
        <div className={`transition-all duration-300 ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <MatchingExercise 
            content={exercise.content as any} 
            onComplete={(isCorrect) => {
              if (isCorrect) {
                setShowConfetti(true);
                completeExercise(exercise.id, 1, 1);
              }
              onComplete();
            }} 
          />
        </div>
      );
    }

    // Regular exercise rendering for other types
    return (
      <div className={`bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-gray-200 transition-all duration-300 ${
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
                <div key={qIndex} className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 transition-all hover:shadow-md">
                  <div className="mb-4">
                    <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                      Pregunta {qIndex + 1}
                    </span>
                    <p className="text-xl text-gray-900 font-bold">{q.question || q.text || q.prompt}</p>
                  </div>

                  {/* Multiple choice options */}
                  {q.options && Array.isArray(q.options) && (
                    <div className="space-y-3">
                      {q.options.map((option: any, optIndex: number) => {
                        const isUserAnswer = userAnswer?.questionIndex === qIndex && userAnswer?.answer === optIndex;
                        const isCorrectAnswer = optIndex === q.correctAnswer;
                        const showAsCorrect = submitted && isCorrectAnswer;
                        const showAsIncorrect = submitted && isUserAnswer && !isCorrectAnswer;
                        
                        return (
                          <button
                            key={optIndex}
                            onClick={() => !submitted && setUserAnswer({ questionIndex: qIndex, answer: optIndex })}
                            disabled={submitted}
                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] ${
                              isUserAnswer && !submitted
                                ? 'border-orange-500 bg-orange-50 shadow-md ring-2 ring-orange-200'
                                : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-sm'
                            } ${
                              showAsCorrect
                                ? 'border-green-500 bg-green-50 shadow-md ring-2 ring-green-100'
                                : ''
                            } ${
                              showAsIncorrect
                                ? 'border-red-500 bg-red-50 shadow-md ring-2 ring-red-100'
                                : ''
                            } disabled:cursor-not-allowed disabled:transform-none`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg ${
                                showAsCorrect ? 'bg-green-500 text-white' : showAsIncorrect ? 'bg-red-500 text-white' : isUserAnswer && !submitted ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'
                              }`}>
                                {String.fromCharCode(65 + optIndex)}
                              </div>
                              <span className="text-lg font-bold text-gray-800 flex-1">{typeof option === 'string' ? option : option.text}</span>
                              {showAsCorrect && <CheckCircle className="ml-auto w-6 h-6 text-green-500" />}
                              {showAsIncorrect && <XCircle className="ml-auto w-6 h-6 text-red-500" />}
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
                        onKeyDown={(e) => e.key === 'Enter' && !submitted && userAnswer?.answer && handleSubmit()}
                        disabled={submitted}
                        placeholder="Escribe tu respuesta aquí..."
                        className="w-full p-5 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none disabled:bg-gray-50 disabled:cursor-not-allowed transition-all text-xl font-bold text-slate-800"
                      />
                    </div>
                  )}

                  {/* Evaluation for this specific question */}
                  {submitted && userAnswer?.questionIndex === qIndex && !isEvaluating && evaluation && (
                    <div className={`mt-6 p-6 rounded-2xl animate-slide-in border-2 ${
                      evaluation.isCorrect ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'
                    }`}>
                      <div className="flex items-center gap-3 mb-2">
                        {evaluation.isCorrect ? (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-600" />
                        )}
                        <span className="text-xl font-black">
                          {evaluation.isCorrect ? '¡Excelente!' : 'Casi...'}
                        </span>
                      </div>
                      <p className="font-medium text-lg">{evaluation.feedback}</p>
                      
                      {!evaluation.isCorrect && q.explanation && (
                        <div className="mt-4 p-4 bg-white/50 rounded-xl text-sm border border-red-100">
                          <p className="font-bold mb-1">💡 Explicación:</p>
                          <p>{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Show basic explanation if no evaluation data */}
                  {submitted && userAnswer?.questionIndex === qIndex && !isEvaluating && !evaluation && q.explanation && (
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

        {/* Evaluation Loading */}
        {isEvaluating && (
          <div className="mt-6 p-6 bg-orange-50 border-2 border-orange-200 rounded-lg animate-pulse">
            <div className="flex items-center gap-3">
              <Loader2 className="w-6 h-6 text-orange-600 animate-spin" />
              <p className="text-orange-800 font-semibold">Evaluando tu respuesta...</p>
            </div>
          </div>
        )}

        {/* Fallback Feedback (if detailed evaluation not used) */}
        {submitted && !isEvaluating && !evaluation && (
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
          <span>📅 {exercise.createdAt ? (exercise.createdAt instanceof Date ? exercise.createdAt.toLocaleDateString() : new Date(exercise.createdAt).toLocaleDateString()) : new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

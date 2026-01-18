'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X, Heart, Zap, Trophy, ArrowRight, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import type { DuolingoExercise } from '@/lib/duolingo/exercise-service';
import { XPCelebration } from '@/components/duolingo/GamificationDashboard';

interface LessonPageProps {
  params: {
    lessonId: string;
  };
}

export default function DuolingoLessonPage({ params }: LessonPageProps) {
  const router = useRouter();
  const { lessonId } = params;
  
  const [exercises, setExercises] = useState<DuolingoExercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lives, setLives] = useState(5);
  const [totalXP, setTotalXP] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showXPCelebration, setShowXPCelebration] = useState(false);
  const [celebrationXP, setCelebrationXP] = useState(0);

  // Cargar ejercicios al inicio
  useEffect(() => {
    loadExercises();
  }, [lessonId]);

  const loadExercises = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/duolingo/exercises', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonId,
          level: 'A1', // TODO: obtener del usuario
          count: 10
        })
      });

      if (response.ok) {
        const data = await response.json();
        setExercises(data.exercises);
      } else {
        console.error('Error loading exercises');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (userAnswer === null || userAnswer === '') return;
    
    setSubmitted(true);
    
    const currentExercise = exercises[currentIndex];
    const correct = validateAnswer(currentExercise, userAnswer);
    
    setIsCorrect(correct);
    
    if (correct) {
      // Ganar XP
      const xpGained = currentExercise.xpReward;
      setTotalXP(prev => prev + xpGained);
      setCorrectCount(prev => prev + 1);
      
      // Mostrar celebración
      setCelebrationXP(xpGained);
      setShowXPCelebration(true);
    } else {
      // Perder una vida
      setLives(prev => Math.max(0, prev - 1));
    }
  };

  const handleNext = async () => {
    setSubmitted(false);
    setUserAnswer(null);
    
    // Si es la última pregunta, cargar más
    if (currentIndex >= exercises.length - 1) {
      await loadMoreExercises();
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const loadMoreExercises = async () => {
    try {
      const response = await fetch('/api/duolingo/exercises', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonId,
          level: 'A1',
          count: 10
        })
      });

      if (response.ok) {
        const data = await response.json();
        setExercises(prev => [...prev, ...data.exercises]);
      }
    } catch (error) {
      console.error('Error loading more exercises:', error);
    }
  };

  const validateAnswer = (exercise: DuolingoExercise, answer: any): boolean => {
    switch (exercise.type) {
      case 'multiple-choice':
        return answer === exercise.correctAnswer;
      case 'fill-blank':
        return answer.toLowerCase().trim() === String(exercise.correctAnswer).toLowerCase().trim();
      default:
        return answer === exercise.correctAnswer;
    }
  };

  const handleExit = () => {
    router.push('/aula/duolingo');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-green-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-700 font-bold">Loading exercises...</p>
        </div>
      </div>
    );
  }

  if (exercises.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-700 font-bold mb-4">No exercises available</p>
          <button
            onClick={handleExit}
            className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (lives === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center shadow-2xl">
          <div className="text-6xl mb-4">💔</div>
          <h2 className="text-3xl font-black text-gray-900 mb-2">Out of Lives!</h2>
          <p className="text-gray-600 mb-4">
            You got {correctCount} out of {currentIndex + 1} correct
          </p>
          <p className="text-2xl font-bold text-orange-600 mb-6">
            +{totalXP} XP
          </p>
          <button
            onClick={handleExit}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700"
          >
            CONTINUE
          </button>
        </div>
      </div>
    );
  }

  const currentExercise = exercises[currentIndex];
  const progress = ((currentIndex + 1) / Math.min(exercises.length, 20)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Exit Button */}
          <button
            onClick={handleExit}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-all"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          {/* Progress Bar */}
          <div className="flex-1 mx-4">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Lives & XP */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-500 fill-red-500" />
              <span className="font-black text-gray-900">{lives}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <span className="font-black text-gray-900">{totalXP}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
          {/* Question */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">
                Question {currentIndex + 1}
              </span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold">
                {currentExercise.type}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              {currentExercise.question}
            </h2>
          </div>

          {/* Answer Options (Multiple Choice) */}
          {currentExercise.type === 'multiple-choice' && currentExercise.options && (
            <div className="space-y-3 mb-8">
              {currentExercise.options.map((option, index) => {
                const isSelected = userAnswer === index;
                const isCorrectOption = index === currentExercise.correctAnswer;
                const showAsCorrect = submitted && isCorrectOption;
                const showAsIncorrect = submitted && isSelected && !isCorrectOption;
                
                return (
                  <button
                    key={index}
                    onClick={() => !submitted && setUserAnswer(index)}
                    disabled={submitted}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ${
                      isSelected && !submitted
                        ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    } ${
                      showAsCorrect
                        ? 'border-green-500 bg-green-50 shadow-lg'
                        : ''
                    } ${
                      showAsIncorrect
                        ? 'border-red-500 bg-red-50 shadow-lg'
                        : ''
                    } disabled:cursor-not-allowed`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        isSelected && !submitted
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-600'
                      } ${
                        showAsCorrect
                          ? 'bg-green-500 text-white'
                          : ''
                      } ${
                        showAsIncorrect
                          ? 'bg-red-500 text-white'
                          : ''
                      }`}>
                        {showAsCorrect && <CheckCircle className="w-6 h-6" />}
                        {showAsIncorrect && <XCircle className="w-6 h-6" />}
                        {!submitted && String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-lg font-medium text-gray-900 flex-1">{option}</span>
                      {submitted && isSelected && (
                        <span className="text-sm font-bold">
                          (Your answer)
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Fill in the Blank */}
          {currentExercise.type === 'fill-blank' && (
            <div className="mb-8">
              <input
                type="text"
                value={userAnswer || ''}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={submitted}
                placeholder="Type your answer..."
                className="w-full p-5 text-xl border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 focus:outline-none disabled:bg-gray-100"
                autoFocus
              />
            </div>
          )}

          {/* Feedback */}
          {submitted && (
            <div className={`p-6 rounded-xl mb-8 animate-slide-in ${
              isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                {isCorrect ? (
                  <>
                    <CheckCircle className="w-7 h-7 text-green-600" />
                    <span className="font-black text-xl text-green-800">¡Correcto! 🎉</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-7 h-7 text-red-600" />
                    <span className="font-black text-xl text-red-800">Incorrect</span>
                  </>
                )}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">Explanation:</span> {currentExercise.explanation}
              </p>
              
              {!isCorrect && (
                <p className="text-gray-700">
                  <span className="font-semibold">Correct answer:</span>{' '}
                  {currentExercise.type === 'multiple-choice' && currentExercise.options
                    ? currentExercise.options[currentExercise.correctAnswer as number]
                    : currentExercise.correctAnswer}
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
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-4 rounded-xl text-xl font-black hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-3 shadow-lg"
              >
                CHECK
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-4 rounded-xl text-xl font-black hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-lg"
              >
                CONTINUE
                <ArrowRight className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>

        {/* Exercise Counter */}
        <div className="text-center mt-6 text-gray-600">
          <p className="text-sm">
            Ejercicio {currentIndex + 1} • ∞ Unlimited exercises
          </p>
        </div>
      </div>

      {/* XP Celebration Modal */}
      {showXPCelebration && (
        <XPCelebration
          xp={celebrationXP}
          onClose={() => setShowXPCelebration(false)}
        />
      )}
    </div>
  );
}

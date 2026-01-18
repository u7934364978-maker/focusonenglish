'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SingleQuestionExercise from '@/components/SingleQuestionExercise';
import ExerciseSkeleton from '@/components/ExerciseSkeleton';
import { X, Trophy, Flame } from 'lucide-react';
import type { CEFRLevel } from '@/lib/cambridge-curriculum';

interface ContinuousPracticeProps {
  level: CEFRLevel;
}

export default function ContinuousPractice({ level }: ContinuousPracticeProps) {
  const router = useRouter();
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  // Exercise types to mix
  const exerciseTypes = [
    'multiple-choice',
    'fill-blank',
    'key-word-transformation',
    'reading-comprehension'
  ];

  // Fetch mixed exercises
  useEffect(() => {
    fetchMixedExercises();
  }, [level]);

  const fetchMixedExercises = async () => {
    setLoading(true);
    
    try {
      // Generate mix of exercises from different types
      const exercisePromises = [];
      
      // Pick 3 random exercise types
      const selectedTypes = shuffleArray(exerciseTypes).slice(0, 3);
      
      for (const type of selectedTypes) {
        exercisePromises.push(
          fetch('/api/generate-exercise', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              exerciseType: type,
              level: level,
              difficulty: 'medium',
              count: 1
            })
          }).then(res => res.json())
        );
      }

      const results = await Promise.all(exercisePromises);
      
      // Extract questions from exercises
      const allQuestions: any[] = [];
      
      results.forEach((result, idx) => {
        if (result.success && result.exercises) {
          result.exercises.forEach((exercise: any) => {
            // Extract individual questions
            if (exercise.content.questions && Array.isArray(exercise.content.questions)) {
              exercise.content.questions.forEach((q: any, qIdx: number) => {
                allQuestions.push({
                  id: `${exercise.id}_${qIdx}`,
                  question: q.question || q.text,
                  options: q.options,
                  correctAnswer: q.correctAnswer,
                  explanation: q.explanation,
                  type: exercise.type === 'multiple-choice' ? 'multiple-choice' : 
                        exercise.type === 'fill-blank' ? 'fill-blank' : 'multiple-choice',
                  exerciseType: exercise.type,
                  level: exercise.level
                });
              });
            }
          });
        }
      });

      // Shuffle questions
      const shuffled = shuffleArray(allQuestions);
      setQuestions(shuffled);
      
    } catch (error) {
      console.error('Error fetching exercises:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (correct: boolean) => {
    setTotalAnswered(prev => prev + 1);
    
    if (correct) {
      setScore(prev => prev + 10);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }

    // Move to next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Load more exercises
      setCurrentQuestionIndex(0);
      fetchMixedExercises();
    }
  };

  const handleExit = () => {
    if (confirm('¿Seguro que quieres salir? Perderás tu progreso actual.')) {
      router.push('/aula');
    }
  };

  if (loading) {
    return <ExerciseSkeleton />;
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            No se pudieron cargar los ejercicios
          </h2>
          <button
            onClick={() => router.push('/aula')}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="relative min-h-screen">
      {/* Exit Button (fixed) */}
      <button
        onClick={handleExit}
        className="fixed top-4 left-4 z-50 bg-white text-gray-600 hover:text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
        title="Salir"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Score Display (fixed) */}
      <div className="fixed top-4 right-4 z-50 bg-white rounded-full shadow-lg px-6 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="font-bold text-gray-900">{score}</span>
        </div>
        {streak > 0 && (
          <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="font-bold text-orange-600">{streak}</span>
          </div>
        )}
      </div>

      {/* Question */}
      <SingleQuestionExercise
        question={currentQuestion}
        questionNumber={totalAnswered + 1}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
        exerciseType={currentQuestion.exerciseType}
        level={currentQuestion.level}
      />
    </div>
  );
}

// Helper function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

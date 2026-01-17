'use client';

// ============================================
// PÁGINA: PRÁCTICA INFINITA CON EJERCICIOS ILIMITADOS
// Version: 2.0 - Infinite Exercise System
// ============================================

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PracticeSelector, { PracticeConfig } from '@/components/practice/PracticeSelector';
import PracticeExerciseViewer from '@/components/practice/PracticeExerciseViewer';

export default function PracticePage() {
  const router = useRouter();
  const [practicing, setPracticing] = useState(false);
  const [practiceConfig, setPracticeConfig] = useState<PracticeConfig | null>(null);
  const [currentExercises, setCurrentExercises] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exercisesCompleted, setExercisesCompleted] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isFallback, setIsFallback] = useState(false);
  const [fallbackMessage, setFallbackMessage] = useState<string | null>(null);

  const generateNextExercise = async (config: PracticeConfig) => {
    setLoading(true);
    setError(null);

    try {
      console.log('🚀 Generando ejercicio con configuración:', config);

      const response = await fetch('/api/generate-exercise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...config,
          count: 1 // Always generate just one exercise
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Error generando ejercicio');
      }

      console.log('✅ Ejercicio generado:', data);

      // Detectar si está usando fallback
      if (data.fallback) {
        setIsFallback(true);
        setFallbackMessage(data.message || 'Usando ejercicios de demostración');
        console.warn('⚠️ Sistema en modo fallback');
      } else {
        setIsFallback(false);
        setFallbackMessage(null);
      }

      // Convertir ejercicio generado al formato de Lesson
      const lesson = convertToLesson(data.exercises, config);
      setCurrentExercises(lesson);

    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const handleStartPractice = async (config: PracticeConfig) => {
    setPracticeConfig(config);
    setPracticing(true);
    setExercisesCompleted(0);
    setTotalScore(0);
    await generateNextExercise(config);
  };

  const handleComplete = async (score: number) => {
    console.log(`Ejercicio completado con puntuación: ${score}%`);
    
    const newExercisesCompleted = exercisesCompleted + 1;
    const newTotalScore = totalScore + score;
    const averageScore = newTotalScore / newExercisesCompleted;
    
    setExercisesCompleted(newExercisesCompleted);
    setTotalScore(newTotalScore);

    // Generar siguiente ejercicio automáticamente sin confirmación
    if (practiceConfig) {
      await generateNextExercise(practiceConfig);
    }
  };

  const handleExit = () => {
    const finalAverage = exercisesCompleted > 0 ? Math.round(totalScore / exercisesCompleted) : 0;
    
    const summary = `📊 Resumen de tu práctica:\n\n` +
      `Ejercicios completados: ${exercisesCompleted}\n` +
      `Puntuación promedio: ${finalAverage}%\n` +
      `Puntuación total: ${Math.round(totalScore)} puntos\n\n` +
      `¡Buen trabajo! 🎉`;
    
    alert(summary);
    
    // Volver al selector
    setPracticing(false);
    setCurrentExercises(null);
    setPracticeConfig(null);
    setExercisesCompleted(0);
    setTotalScore(0);
  };

  const handleSkip = () => {
    if (confirm('¿Seguro que quieres salir de la práctica?')) {
      handleExit();
    }
  };

  if (practicing && currentExercises && currentExercises.exercises && currentExercises.exercises[0]) {
    const currentExercise = currentExercises.exercises[0];
    
    // Loading overlay para siguiente ejercicio
    if (loading) {
      return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md text-center">
            <div className="animate-spin text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Cargando siguiente ejercicio...
            </h3>
            <p className="text-gray-600">
              Preparando contenido personalizado
            </p>
            <div className="mt-4 flex justify-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-coral-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-3 h-3 bg-coral-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-3 h-3 bg-coral-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <PracticeExerciseViewer
        exercise={currentExercise}
        onComplete={handleComplete}
        onSkip={handleSkip}
        currentNumber={exercisesCompleted + 1}
        totalExercises={999} // Infinito
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-peach-50">
      {/* Loading overlay inicial */}
      {loading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md text-center">
            <div className="animate-spin text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Preparando tu primer ejercicio...
            </h3>
            <p className="text-gray-600">
              Creando contenido personalizado para tu nivel
            </p>
            <div className="mt-4 flex justify-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-coral-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-3 h-3 bg-coral-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-3 h-3 bg-coral-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="max-w-2xl mx-auto mt-8 px-4">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <span className="text-4xl mb-2 block">⚠️</span>
            <h3 className="text-xl font-bold text-red-900 mb-2">Error</h3>
            <p className="text-red-700">{error}</p>
            <button
              onClick={() => setError(null)}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Practice Selector */}
      <PracticeSelector onStartPractice={handleStartPractice} userLevel="B2" />
    </div>
  );
}

// ============================================
// HELPER: Convertir ejercicio generado a formato Lesson
// ============================================

function convertToLesson(exercises: any[], config: PracticeConfig): any {
  const firstExercise = exercises[0];
  
  // Mapear tipos de ejercicios a tipos que LessonViewer puede renderizar
  const mapExerciseType = (type: string, category: string): string => {
    switch (type) {
      case 'multiple-choice':
      case 'fill-blank':
      case 'true-false':
        // Estos se renderizan como 'grammar' o 'vocabulary'
        return category === 'vocabulary' ? 'vocabulary' : 'grammar';
      case 'reading-comprehension':
        return 'reading';
      case 'key-word-transformation':
        return 'key-word-transformation';
      case 'word-formation':
        return 'word-formation';
      case 'sentence-building':
        return 'sentence-building';
      case 'writing-analysis':
        return 'writing';
      case 'speaking-analysis':
        return 'speaking';
      case 'multiple-choice-cloze':
        return 'multiple-choice-cloze';
      default:
        return 'grammar';
    }
  };
  
  return {
    id: `practice_${Date.now()}`,
    title: `Práctica: ${firstExercise.type}`,
    description: `Ejercicio de ${firstExercise.category} - Nivel ${config.difficulty}`,
    duration: firstExercise.estimatedTime,
    objectives: [
      `Practicar ${firstExercise.type}`,
      `Mejorar en ${config.topic || 'inglés general'}`,
      `Nivel de dificultad: ${config.difficulty}`
    ],
    exercises: exercises.map(ex => {
      const mappedType = mapExerciseType(ex.type, ex.category);
      
      return {
        id: ex.id,
        type: mappedType,
        title: ex.content.title || `${ex.type} Exercise`,
        instructions: ex.content.instructions,
        grammarPoint: ex.topic || ex.content.topic || config.topic || 'General Practice',
        explanation: ex.content.explanation || `Practice exercise for ${ex.type}`,
        examples: ex.content.examples || [],
        questions: ex.content.questions || [],
        transformations: ex.content.transformations || [],
        text: ex.content.text,
        wordCount: ex.content.wordCount,
        readingTime: ex.content.estimatedReadingTime || ex.estimatedTime,
        vocabularyHelp: ex.content.vocabularyHelp || [],
        ...ex.content
      };
    })
  };
}

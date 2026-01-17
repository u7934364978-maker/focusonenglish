'use client';

// ============================================
// PÁGINA: PRÁCTICA DINÁMICA CON IA
// ============================================

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PracticeSelector, { PracticeConfig } from '@/components/practice/PracticeSelector';
import LessonViewer from '@/components/course/LessonViewer';

export default function PracticePage() {
  const router = useRouter();
  const [practicing, setPracticing] = useState(false);
  const [currentExercises, setCurrentExercises] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStartPractice = async (config: PracticeConfig) => {
    setLoading(true);
    setError(null);

    try {
      console.log('🚀 Generando ejercicios con configuración:', config);

      const response = await fetch('/api/generate-exercise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(config)
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Error generando ejercicios');
      }

      console.log('✅ Ejercicios generados:', data);

      // Convertir ejercicios generados al formato de Lesson
      const lesson = convertToLesson(data.exercises, config);
      setCurrentExercises(lesson);
      setPracticing(true);

    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const handleComplete = (lessonId: string, score: number) => {
    console.log(`Práctica completada con puntuación: ${score}%`);
    
    // Mostrar modal de completado
    const message = score >= 80 
      ? `¡Excelente trabajo! 🎉\n\nPuntuación: ${Math.round(score)}%\n\n¿Quieres practicar más?`
      : `Buen intento 👍\n\nPuntuación: ${Math.round(score)}%\n\nSigue practicando para mejorar.`;
    
    if (confirm(message)) {
      // Volver al selector
      setPracticing(false);
      setCurrentExercises(null);
    } else {
      // Ir al dashboard
      router.push('/dashboard');
    }
  };

  const handleBackToSelector = () => {
    if (confirm('¿Seguro que quieres salir? Tu progreso no se guardará.')) {
      setPracticing(false);
      setCurrentExercises(null);
    }
  };

  if (practicing && currentExercises) {
    return (
      <div>
        {/* Back Button */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <button
              onClick={handleBackToSelector}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              <span>←</span>
              <span>Volver al selector</span>
            </button>
          </div>
        </div>

        {/* Lesson Viewer con ejercicios generados */}
        <LessonViewer lesson={currentExercises} onComplete={handleComplete} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md text-center">
            <div className="animate-spin text-6xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Generando ejercicios...
            </h3>
            <p className="text-gray-600">
              La IA está creando contenido personalizado para ti
            </p>
            <div className="mt-4 flex justify-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
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
// HELPER: Convertir ejercicios generados a formato Lesson
// ============================================

function convertToLesson(exercises: any[], config: PracticeConfig): any {
  const firstExercise = exercises[0];
  
  return {
    id: `practice_${Date.now()}`,
    title: `Práctica: ${firstExercise.type}`,
    description: `Ejercicios de ${firstExercise.category} - Nivel ${config.difficulty}`,
    duration: firstExercise.estimatedTime * exercises.length,
    objectives: [
      `Practicar ${firstExercise.type}`,
      `Mejorar en ${config.topic || 'inglés general'}`,
      `Nivel de dificultad: ${config.difficulty}`
    ],
    exercises: exercises.map(ex => ({
      ...ex.content,
      id: ex.id,
      type: ex.type
    }))
  };
}

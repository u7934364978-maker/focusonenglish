'use client';

// ============================================
// PÁGINA: PRÁCTICA INFINITA CON EJERCICIOS ILIMITADOS
// Version: 2.0 - Infinite Exercise System
// ============================================

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PracticeSelector, { PracticeConfig } from '@/components/practice/PracticeSelector';
import LessonViewer from '@/components/course/LessonViewer';

export default function PracticePage() {
  const router = useRouter();
  const [practicing, setPracticing] = useState(false);
  const [practiceConfig, setPracticeConfig] = useState<PracticeConfig | null>(null);
  const [currentExercises, setCurrentExercises] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exercisesCompleted, setExercisesCompleted] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

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

  const handleComplete = async (lessonId: string, score: number) => {
    console.log(`Ejercicio completado con puntuación: ${score}%`);
    
    const newExercisesCompleted = exercisesCompleted + 1;
    const newTotalScore = totalScore + score;
    const averageScore = newTotalScore / newExercisesCompleted;
    
    setExercisesCompleted(newExercisesCompleted);
    setTotalScore(newTotalScore);

    // Mostrar feedback y preguntar si quiere continuar
    const message = score >= 80 
      ? `¡Excelente trabajo! 🎉\n\nPuntuación: ${Math.round(score)}%\nEjercicios completados: ${newExercisesCompleted}\nPromedio: ${Math.round(averageScore)}%\n\n¿Quieres practicar otro ejercicio?`
      : `Buen intento 👍\n\nPuntuación: ${Math.round(score)}%\nEjercicios completados: ${newExercisesCompleted}\nPromedio: ${Math.round(averageScore)}%\n\n¿Quieres practicar otro ejercicio?`;
    
    if (confirm(message)) {
      // Generar siguiente ejercicio automáticamente
      if (practiceConfig) {
        await generateNextExercise(practiceConfig);
      }
    } else {
      // Salir de la práctica
      handleExit();
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

  const handleBackToSelector = () => {
    const averageScore = exercisesCompleted > 0 ? Math.round(totalScore / exercisesCompleted) : 0;
    
    const message = `¿Seguro que quieres salir?\n\n` +
      `Has completado ${exercisesCompleted} ejercicio(s)\n` +
      `Promedio: ${averageScore}%\n\n` +
      `Tu progreso se guardará.`;
    
    if (confirm(message)) {
      handleExit();
    }
  };

  if (practicing && currentExercises) {
    return (
      <div>
        {/* Back Button with Stats */}
        <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <button
                onClick={handleBackToSelector}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                <span>←</span>
                <span>Salir de la práctica</span>
              </button>
              
              {/* Stats */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-gray-900">{exercisesCompleted}</span>
                  <span className="text-gray-600">ejercicios</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-blue-600">
                    {exercisesCompleted > 0 ? Math.round(totalScore / exercisesCompleted) : 0}%
                  </span>
                  <span className="text-gray-600">promedio</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-2xl">∞</span>
                  <span className="text-gray-600">ilimitado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading overlay para siguiente ejercicio */}
        {loading && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md text-center">
              <div className="animate-spin text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Generando siguiente ejercicio...
              </h3>
              <p className="text-gray-600">
                Creando contenido personalizado
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

        {/* Lesson Viewer con ejercicio generado */}
        <LessonViewer lesson={currentExercises} onComplete={handleComplete} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
// HELPER: Convertir ejercicio generado a formato Lesson
// ============================================

function convertToLesson(exercises: any[], config: PracticeConfig): any {
  const firstExercise = exercises[0];
  
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
    exercises: exercises.map(ex => ({
      ...ex.content,
      id: ex.id,
      type: ex.type
    }))
  };
}

'use client';

export const runtime = 'edge';

// ============================================
// PÁGINA: PRÁCTICA INFINITA CON EJERCICIOS ILIMITADOS
// Version: 3.0 - Seamless Infinite Exercise System
// Updated: 2026-01-17
// Sistema mejorado con generación automática y fluida de ejercicios
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
  const [sessionStartTime] = useState(Date.now());
  const [bestScore, setBestScore] = useState(0);

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
    
    // Actualizar mejor puntuación
    if (score > bestScore) {
      setBestScore(score);
    }
    
    setExercisesCompleted(newExercisesCompleted);
    setTotalScore(newTotalScore);

    // Generar siguiente ejercicio automáticamente sin confirmación
    if (practiceConfig) {
      // Pequeño delay para mostrar feedback antes de cargar el siguiente
      setTimeout(() => {
        generateNextExercise(practiceConfig);
      }, 500);
    }
  };

  const handleExit = () => {
    const finalAverage = exercisesCompleted > 0 ? Math.round(totalScore / exercisesCompleted) : 0;
    const sessionDuration = Math.round((Date.now() - sessionStartTime) / 60000); // minutos
    
    const summary = `🎉 ¡Excelente sesión de práctica!\n\n` +
      `📊 Resumen:\n` +
      `• Ejercicios completados: ${exercisesCompleted}\n` +
      `• Puntuación promedio: ${finalAverage}%\n` +
      `• Mejor puntuación: ${Math.round(bestScore)}%\n` +
      `• Tiempo de práctica: ${sessionDuration} minutos\n` +
      `• Puntuación total: ${Math.round(totalScore)} puntos\n\n` +
      `¡Sigue así! Cada sesión te acerca más a tu objetivo. 💪`;
    
    alert(summary);
    
    // Volver al selector
    setPracticing(false);
    setCurrentExercises(null);
    setPracticeConfig(null);
    setExercisesCompleted(0);
    setTotalScore(0);
    setBestScore(0);
  };

  const handleSkip = () => {
    if (confirm('¿Seguro que quieres salir de la práctica?')) {
      handleExit();
    }
  };

  if (practicing && currentExercises && currentExercises.exercises && currentExercises.exercises[0]) {
    const currentExercise = currentExercises.exercises[0];
    const averageScore = exercisesCompleted > 0 ? Math.round(totalScore / exercisesCompleted) : 0;
    const sessionDuration = Math.round((Date.now() - sessionStartTime) / 60000); // minutos
    
    // Loading overlay para siguiente ejercicio
    if (loading) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-peach-50">
          {/* Progress Bar at top - Enhanced */}
          <div className="bg-white border-b-2 border-coral-200 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl animate-pulse">🎯</span>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Sesión en Curso</div>
                      <div className="text-xl font-black text-gray-900">{exercisesCompleted} ejercicio{exercisesCompleted !== 1 ? 's' : ''}</div>
                    </div>
                  </div>
                  <div className="hidden md:block h-12 w-px bg-gray-300"></div>
                  <div className="hidden md:flex items-center gap-4">
                    <div className="text-center px-4">
                      <div className="text-xs text-gray-500 mb-1">Promedio</div>
                      <div className="text-2xl font-black text-coral-600">{averageScore}%</div>
                    </div>
                    <div className="text-center px-4">
                      <div className="text-xs text-gray-500 mb-1">Mejor</div>
                      <div className="text-2xl font-black text-peach-600">{Math.round(bestScore)}%</div>
                    </div>
                    <div className="text-center px-4">
                      <div className="text-xs text-gray-500 mb-1">Tiempo</div>
                      <div className="text-2xl font-black text-amber-600">{sessionDuration}m</div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSkip}
                  className="px-6 py-3 bg-gradient-to-r from-coral-500 to-peach-500 hover:from-coral-600 hover:to-peach-600 text-white rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-xl"
                >
                  Finalizar Sesión
                </button>
              </div>
            </div>
          </div>
          
          {/* Loading content - Enhanced */}
          <div className="flex items-center justify-center min-h-[80vh]">
            <div className="bg-white rounded-3xl p-12 max-w-lg text-center shadow-2xl border-2 border-coral-100">
              <div className="animate-spin text-7xl mb-6">📚</div>
              <h3 className="text-3xl font-black text-gray-900 mb-3">
                Preparando siguiente ejercicio...
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Creando contenido personalizado para ti
              </p>
              <div className="flex justify-center gap-2 mb-8">
                <div className="w-4 h-4 bg-coral-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-4 h-4 bg-peach-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-4 h-4 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
              <div className="bg-gradient-to-r from-coral-50 to-peach-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-coral-600">💡 Consejo:</span> Cada ejercicio te acerca más a tu objetivo
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-peach-50">
        {/* Progress Bar at top - Enhanced */}
        <div className="bg-white border-b-2 border-coral-200 sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Sesión en Curso</div>
                    <div className="text-xl font-black text-gray-900">{exercisesCompleted} ejercicio{exercisesCompleted !== 1 ? 's' : ''}</div>
                  </div>
                </div>
                <div className="hidden md:block h-12 w-px bg-gray-300"></div>
                <div className="hidden md:flex items-center gap-4">
                  <div className="text-center px-4">
                    <div className="text-xs text-gray-500 mb-1">Promedio</div>
                    <div className="text-2xl font-black text-coral-600">{averageScore}%</div>
                  </div>
                  <div className="text-center px-4">
                    <div className="text-xs text-gray-500 mb-1">Mejor</div>
                    <div className="text-2xl font-black text-peach-600">{Math.round(bestScore)}%</div>
                  </div>
                  <div className="text-center px-4">
                    <div className="text-xs text-gray-500 mb-1">Tiempo</div>
                    <div className="text-2xl font-black text-amber-600">{sessionDuration}m</div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleSkip}
                className="px-6 py-3 bg-gradient-to-r from-coral-500 to-peach-500 hover:from-coral-600 hover:to-peach-600 text-white rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-xl"
              >
                Finalizar Sesión
              </button>
            </div>
          </div>
        </div>
        
        <PracticeExerciseViewer
          key={currentExercise.id}
          exercise={currentExercise}
          onComplete={handleComplete}
          onSkip={handleSkip}
          currentNumber={exercisesCompleted + 1}
          totalExercises={999} // Infinito
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-peach-50">
      {/* Loading overlay inicial - Enhanced */}
      {loading && (
        <div className="fixed inset-0 bg-gradient-to-br from-coral-500/90 via-peach-500/90 to-orange-500/90 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-12 max-w-lg text-center shadow-2xl border-4 border-white/50">
            <div className="animate-spin text-7xl mb-6">📚</div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Preparando tu primer ejercicio...
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Creando contenido personalizado para tu nivel
            </p>
            <div className="flex justify-center gap-2 mb-8">
              <div className="w-4 h-4 bg-coral-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-4 h-4 bg-peach-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-4 h-4 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
            <div className="bg-gradient-to-r from-coral-50 to-peach-50 rounded-xl p-6">
              <p className="text-base text-gray-700 font-medium">
                ✨ Sistema de práctica ilimitada activado
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Los ejercicios se generarán automáticamente hasta que decidas terminar
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error message - Enhanced */}
      {error && (
        <div className="max-w-2xl mx-auto mt-8 px-4">
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center shadow-xl">
            <span className="text-5xl mb-4 block">⚠️</span>
            <h3 className="text-2xl font-bold text-red-900 mb-3">Error</h3>
            <p className="text-red-700 text-lg mb-6">{error}</p>
            <button
              onClick={() => setError(null)}
              className="px-8 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all font-bold shadow-lg"
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

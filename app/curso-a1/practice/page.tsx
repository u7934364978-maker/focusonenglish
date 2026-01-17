'use client';

// ============================================
// PÁGINA: PRÁCTICA A1 CON EJERCICIOS ILIMITADOS
// Sistema de generación automática para nivel A1
// ============================================

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import PracticeExerciseViewer from '@/components/practice/PracticeExerciseViewer';
import { getExerciseById } from '@/lib/course-data-a1';

function PracticeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const category = searchParams.get('category') || 'all';
  const exerciseType = searchParams.get('exercise') || 'multiple-choice';
  const difficulty = searchParams.get('difficulty') || 'medium';

  const [currentExercises, setCurrentExercises] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exercisesCompleted, setExercisesCompleted] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [sessionStartTime] = useState(Date.now());
  const [bestScore, setBestScore] = useState(0);
  const [sessionId, setSessionId] = useState<string>('');

  // Inicializar sessionId
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const STORAGE_KEY = 'a1_practice_session_id';
      let sid = localStorage.getItem(STORAGE_KEY);
      
      if (!sid) {
        sid = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem(STORAGE_KEY, sid);
      }
      
      setSessionId(sid);
      console.log('📝 Session ID initialized:', sid.substring(0, 20) + '...');
    }
  }, []);

  // Generar primer ejercicio al cargar
  useEffect(() => {
    if (sessionId) {
      generateNextExercise();
    }
  }, [sessionId]); // Esperar a que sessionId esté disponible

  const generateNextExercise = async () => {
    if (!sessionId) {
      console.log('⏳ Esperando sessionId...');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log('🚀 Generando ejercicio A1:', { 
        category, 
        exerciseType, 
        difficulty,
        sessionId: sessionId.substring(0, 20) + '...' 
      });

      const response = await fetch('/api/generate-exercise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-session-id': sessionId // Enviar sessionId en header
        },
        body: JSON.stringify({
          level: 'A1', // ✅ NIVEL A1 CORRECTO
          category: category,
          exerciseType: exerciseType,
          difficulty: difficulty,
          count: 1,
          topic: 'general', // A1 general topics
          sessionId: sessionId // También en body como backup
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Error generando ejercicio');
      }

      console.log('✅ Ejercicio A1 generado:', data);
      
      // Actualizar sessionId si el servidor devuelve uno nuevo
      if (data.sessionId && data.sessionId !== sessionId) {
        setSessionId(data.sessionId);
        if (typeof window !== 'undefined') {
          localStorage.setItem('a1_practice_session_id', data.sessionId);
        }
      }

      // Convertir ejercicio generado al formato esperado
      const lesson = convertToLesson(data.exercises, {
        level: 'A1',
        category,
        exerciseType,
        difficulty
      });
      setCurrentExercises(lesson);

    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const handleComplete = async (score: number) => {
    console.log(`Ejercicio A1 completado con puntuación: ${score}%`);
    
    const newExercisesCompleted = exercisesCompleted + 1;
    const newTotalScore = totalScore + score;
    
    // Actualizar mejor puntuación
    if (score > bestScore) {
      setBestScore(score);
    }
    
    setExercisesCompleted(newExercisesCompleted);
    setTotalScore(newTotalScore);

    // Generar siguiente ejercicio automáticamente
    setTimeout(() => {
      generateNextExercise();
    }, 500);
  };

  const handleExit = () => {
    const finalAverage = exercisesCompleted > 0 ? Math.round(totalScore / exercisesCompleted) : 0;
    const sessionDuration = Math.round((Date.now() - sessionStartTime) / 60000);
    
    const summary = `🎉 ¡Excelente sesión de práctica A1!\n\n` +
      `📊 Resumen:\n` +
      `• Ejercicios completados: ${exercisesCompleted}\n` +
      `• Puntuación promedio: ${finalAverage}%\n` +
      `• Mejor puntuación: ${Math.round(bestScore)}%\n` +
      `• Tiempo de práctica: ${sessionDuration} minutos\n\n` +
      `¡Sigue practicando para mejorar tu inglés! 💪`;
    
    alert(summary);
    router.push('/curso-a1');
  };

  const handleSkip = () => {
    if (confirm('¿Seguro que quieres salir de la práctica?')) {
      handleExit();
    }
  };

  // Renderizar ejercicio actual
  if (currentExercises && currentExercises.exercises && currentExercises.exercises[0]) {
    const currentExercise = currentExercises.exercises[0];
    const averageScore = exercisesCompleted > 0 ? Math.round(totalScore / exercisesCompleted) : 0;
    const sessionDuration = Math.round((Date.now() - sessionStartTime) / 60000);
    
    // Loading overlay
    if (loading) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-peach-50">
          {/* Progress Bar */}
          <div className="bg-white border-b-2 border-orange-200 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl animate-pulse">📚</span>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Nivel A1</div>
                      <div className="text-xl font-black text-gray-900">{exercisesCompleted} ejercicio{exercisesCompleted !== 1 ? 's' : ''}</div>
                    </div>
                  </div>
                  <div className="hidden md:block h-12 w-px bg-gray-300"></div>
                  <div className="hidden md:flex items-center gap-4">
                    <div className="text-center px-4">
                      <div className="text-xs text-gray-500 mb-1">Promedio</div>
                      <div className="text-2xl font-black text-orange-600">{averageScore}%</div>
                    </div>
                    <div className="text-center px-4">
                      <div className="text-xs text-gray-500 mb-1">Mejor</div>
                      <div className="text-2xl font-black text-amber-600">{Math.round(bestScore)}%</div>
                    </div>
                    <div className="text-center px-4">
                      <div className="text-xs text-gray-500 mb-1">Tiempo</div>
                      <div className="text-2xl font-black text-red-600">{sessionDuration}m</div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSkip}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl text-sm font-bold transition-all shadow-lg"
                >
                  Finalizar Sesión
                </button>
              </div>
            </div>
          </div>
          
          {/* Loading content */}
          <div className="flex items-center justify-center min-h-[80vh]">
            <div className="bg-white rounded-3xl p-12 max-w-lg text-center shadow-2xl border-2 border-orange-100">
              <div className="animate-spin text-7xl mb-6">📚</div>
              <h3 className="text-3xl font-black text-gray-900 mb-3">
                Preparando siguiente ejercicio...
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Creando contenido A1 personalizado
              </p>
              <div className="flex justify-center gap-2 mb-8">
                <div className="w-4 h-4 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-4 h-4 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-orange-600">💡 Nivel A1:</span> Contenido para principiantes
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-peach-50">
        {/* Progress Bar */}
        <div className="bg-white border-b-2 border-orange-200 sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📚</span>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Nivel A1</div>
                    <div className="text-xl font-black text-gray-900">{exercisesCompleted} ejercicio{exercisesCompleted !== 1 ? 's' : ''}</div>
                  </div>
                </div>
                <div className="hidden md:block h-12 w-px bg-gray-300"></div>
                <div className="hidden md:flex items-center gap-4">
                  <div className="text-center px-4">
                    <div className="text-xs text-gray-500 mb-1">Promedio</div>
                    <div className="text-2xl font-black text-orange-600">{averageScore}%</div>
                  </div>
                  <div className="text-center px-4">
                    <div className="text-xs text-gray-500 mb-1">Mejor</div>
                    <div className="text-2xl font-black text-amber-600">{Math.round(bestScore)}%</div>
                  </div>
                  <div className="text-center px-4">
                    <div className="text-xs text-gray-500 mb-1">Tiempo</div>
                    <div className="text-2xl font-black text-red-600">{sessionDuration}m</div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleSkip}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl text-sm font-bold transition-all shadow-lg"
              >
                Finalizar Sesión
              </button>
            </div>
          </div>
        </div>
        
        <PracticeExerciseViewer
          exercise={currentExercise}
          onComplete={handleComplete}
          onSkip={handleSkip}
          currentNumber={exercisesCompleted + 1}
          totalExercises={999}
        />
      </div>
    );
  }

  // Loading inicial
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-peach-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-12 max-w-lg text-center shadow-2xl border-4 border-orange-200">
          <div className="animate-spin text-7xl mb-6">📚</div>
          <h3 className="text-3xl font-black text-gray-900 mb-4">
            Preparando tu ejercicio A1...
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Creando contenido personalizado para principiantes
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-4 h-4 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-4 h-4 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-peach-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-12 max-w-lg text-center shadow-2xl border-2 border-red-200">
          <span className="text-6xl mb-6 block">⚠️</span>
          <h3 className="text-3xl font-black text-red-900 mb-4">Error</h3>
          <p className="text-lg text-red-700 mb-8">{error}</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => router.push('/curso-a1')}
              className="px-8 py-4 bg-gray-200 text-gray-900 rounded-xl hover:bg-gray-300 transition-all font-bold"
            >
              Volver al Curso
            </button>
            <button
              onClick={() => {
                setError(null);
                generateNextExercise();
              }}
              className="px-8 py-4 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all font-bold"
            >
              Reintentar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default function PracticePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-peach-50">
        <div className="animate-spin text-6xl">⏳</div>
      </div>
    }>
      <PracticeContent />
    </Suspense>
  );
}

// ============================================
// HELPER: Convertir ejercicio generado a formato Lesson
// ============================================

function convertToLesson(exercises: any[], config: any): any {
  const firstExercise = exercises[0];
  
  // Mapear tipos de ejercicios
  const mapExerciseType = (type: string, category: string): string => {
    switch (type) {
      case 'multiple-choice':
      case 'fill-blank':
      case 'true-false':
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
      case 'guided-writing':
        return 'writing';
      case 'speaking-analysis':
      case 'pronunciation-practice':
        return 'speaking';
      case 'multiple-choice-cloze':
        return 'multiple-choice-cloze';
      case 'listening-comprehension':
        return 'listening';
      default:
        return 'grammar';
    }
  };
  
  return {
    id: `a1_practice_${Date.now()}`,
    title: `Práctica A1: ${firstExercise.type}`,
    description: `Ejercicio de ${firstExercise.category} - Nivel ${config.difficulty}`,
    duration: firstExercise.estimatedTime || 10,
    objectives: [
      `Practicar ${firstExercise.type} nivel A1`,
      `Categoría: ${config.category}`,
      `Dificultad: ${config.difficulty}`
    ],
    exercises: exercises.map(ex => {
      const mappedType = mapExerciseType(ex.type, ex.category);
      
      return {
        id: ex.id,
        type: mappedType,
        title: ex.content.title || `${ex.type} Exercise - A1`,
        instructions: ex.content.instructions || 'Complete the exercise',
        grammarPoint: ex.topic || ex.content.topic || 'A1 General Practice',
        explanation: ex.content.explanation || `Practice exercise for ${ex.type}`,
        examples: ex.content.examples || [],
        questions: ex.content.questions || [],
        transformations: ex.content.transformations || [],
        formations: ex.content.formations || [],
        challenges: ex.content.challenges || [],
        text: ex.content.text,
        wordCount: ex.content.wordCount,
        readingTime: ex.content.estimatedReadingTime || ex.estimatedTime,
        vocabularyHelp: ex.content.vocabularyHelp || [],
        vocabularySet: ex.content.vocabularySet || [],
        audioUrl: ex.content.audioUrl,
        transcript: ex.content.transcript,
        duration: ex.content.duration,
        allowReplay: ex.content.allowReplay !== false,
        maxReplays: ex.content.maxReplays || 3,
        prompt: ex.content.prompt,
        writingType: ex.content.writingType || 'essay',
        minWords: ex.content.minWords || 50,
        maxWords: ex.content.maxWords || 100,
        timeLimit: ex.content.timeLimit || 15,
        rubric: ex.content.rubric || {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: ex.content.tips || [],
        targetText: ex.content.targetText,
        targetSentences: ex.content.targetSentences || [],
        focusPoints: ex.content.focusPoints || [],
        evaluationCriteria: ex.content.evaluationCriteria || {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        ...ex.content
      };
    })
  };
}

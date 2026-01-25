'use client';

import { useEffect, useState, useCallback, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { type CEFRLevel } from '@/lib/cambridge-curriculum';
import { generateMixedExerciseSpecs, describeExerciseSpec, type ExerciseSpec } from '@/lib/mixed-exercise-generator';
import { generateExercise, type Exercise } from '@/lib/exercise-generator';
import ExerciseRenderer from '@/components/ExerciseRenderer';
import { ArrowLeft, RefreshCw, Sparkles, CheckCircle2, Clock, BarChart3 } from 'lucide-react';

interface MixedPracticePageProps {
  level: CEFRLevel;
}

function MixedPracticeContent({ level }: MixedPracticePageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [exerciseSpecs, setExerciseSpecs] = useState<ExerciseSpec[]>([]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sessionStartTime] = useState(Date.now());
  
  // Obtener parámetros
  const count = parseInt(searchParams.get('count') || '5');
  const ensureVariety = searchParams.get('variety') !== 'false';

  // Generar especificaciones de ejercicios al inicio
  useEffect(() => {
    const generateSpecs = async () => {
      try {
        setLoading(true);
        console.log('🎲 Generating mixed exercise session:', { level, count, ensureVariety });
        
        const specs = await generateMixedExerciseSpecs({
          level,
          count,
          ensureVariety
        });
        
        setExerciseSpecs(specs);
        console.log('✅ Exercise specs ready:', specs.length);
      } catch (err: any) {
        console.error('❌ Error generating specs:', err);
        setError(err.message || 'Failed to generate exercise session');
      } finally {
        setLoading(false);
      }
    };
    
    generateSpecs();
  }, [level, count, ensureVariety]);

  // Generar ejercicio actual cuando cambia el índice
  useEffect(() => {
    if (exerciseSpecs.length === 0 || currentExerciseIndex >= exerciseSpecs.length) {
      return;
    }
    
    const generateCurrentExercise = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const spec = exerciseSpecs[currentExerciseIndex];
        console.log(`🎯 Generating exercise ${currentExerciseIndex + 1}/${exerciseSpecs.length}:`, spec);
        
        const exercise = await generateExercise({
          level: spec.topic,
          category: spec.category,
          topic: spec.topic,
          topicName: spec.topicName,
          topicKeywords: spec.topicKeywords
        });
        
        setCurrentExercise(exercise);
        console.log('✅ Exercise generated');
      } catch (err: any) {
        console.error('❌ Error generating exercise:', err);
        setError(err.message || 'Failed to generate exercise');
      } finally {
        setLoading(false);
      }
    };
    
    generateCurrentExercise();
  }, [exerciseSpecs, currentExerciseIndex]);

  const handleBack = () => {
    router.push(`/aula/${level.toLowerCase()}`);
  };

  const handleNextExercise = useCallback(() => {
    // Marcar actual como completado
    setCompletedExercises(prev => new Set(prev).add(currentExerciseIndex));
    
    // Ir al siguiente ejercicio
    if (currentExerciseIndex < exerciseSpecs.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
    }
  }, [currentExerciseIndex, exerciseSpecs.length]);

  const handlePreviousExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(prev => prev - 1);
    }
  };

  const handleRestartSession = () => {
    router.push(`/aula/${level.toLowerCase()}/mixed-practice?count=${count}&variety=${ensureVariety}`);
    router.refresh();
  };

  const getSessionDuration = () => {
    const seconds = Math.floor((Date.now() - sessionStartTime) / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Session completed
  const isSessionComplete = currentExerciseIndex === exerciseSpecs.length - 1 && 
                            completedExercises.has(currentExerciseIndex);

  if (loading && exerciseSpecs.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-7xl mb-6">🎲</div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Generating Mixed Practice Session...
          </h2>
          <p className="text-lg text-gray-600">
            Creating {count} varied exercises for {level} level
          </p>
        </div>
      </main>
    );
  }

  if (error && exerciseSpecs.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-black text-gray-900 mb-4">Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="flex gap-3">
            <button
              onClick={handleBack}
              className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={handleRestartSession}
              className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (isSessionComplete) {
    const completionRate = (completedExercises.size / exerciseSpecs.length) * 100;
    
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 md:p-12 text-center">
              <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-black mb-2">
                ¡Sesión Completada!
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Has completado {completedExercises.size} de {exerciseSpecs.length} ejercicios
              </p>
              <div className="flex items-center justify-center gap-8 text-white/90">
                <div>
                  <div className="text-3xl font-black">{Math.round(completionRate)}%</div>
                  <div className="text-sm">Completado</div>
                </div>
                <div className="h-12 w-px bg-white/30" />
                <div>
                  <div className="text-3xl font-black">{getSessionDuration()}</div>
                  <div className="text-sm">Tiempo</div>
                </div>
              </div>
            </div>

            {/* Session Summary */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-orange-600" />
                Resumen de la Sesión
              </h3>
              
              <div className="space-y-3 mb-8">
                {exerciseSpecs.map((spec, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      completedExercises.has(index)
                        ? 'bg-green-100 text-green-600'
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">{describeExerciseSpec(spec)}</p>
                    </div>
                    {completedExercises.has(index) && (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleRestartSession}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  Nueva Sesión
                </button>
                <button
                  onClick={handleBack}
                  className="flex-1 bg-white text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
                >
                  Volver al Nivel
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!currentExercise || loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-7xl mb-6">🎓</div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Generating Exercise...
          </h2>
          <p className="text-lg text-gray-600">
            Exercise {currentExerciseIndex + 1} of {exerciseSpecs.length}
          </p>
        </div>
      </main>
    );
  }

  const currentSpec = exerciseSpecs[currentExerciseIndex];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to {level}</span>
            </button>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{getSessionDuration()}</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart3 className="w-4 h-4" />
                <span>{completedExercises.size}/{exerciseSpecs.length}</span>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-gray-700">
                Ejercicio {currentExerciseIndex + 1} de {exerciseSpecs.length}
              </span>
              <span className="text-gray-600">
                {describeExerciseSpec(currentSpec)}
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300"
                style={{ width: `${((currentExerciseIndex + 1) / exerciseSpecs.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Exercise Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Exercise Type Badge */}
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
            <Sparkles className="w-4 h-4" />
            {describeExerciseSpec(currentSpec)}
          </span>
        </div>

        <ExerciseRenderer 
          key={currentExercise.id}
          exercise={currentExercise} 
          onComplete={handleNextExercise} 
        />

        {/* Navigation Buttons */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={handlePreviousExercise}
            disabled={currentExerciseIndex === 0}
            className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Anterior
          </button>

          <div className="flex-1" />

          {currentExerciseIndex < exerciseSpecs.length - 1 ? (
            <button
              onClick={handleNextExercise}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Siguiente →
            </button>
          ) : (
            <button
              onClick={handleNextExercise}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              Finalizar Sesión
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

export default function MixedPracticePage({ level }: MixedPracticePageProps) {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-7xl mb-6">🎲</div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Loading Mixed Practice...
          </h2>
          <p className="text-lg text-gray-600">
            Preparing your personalized session
          </p>
        </div>
      </main>
    }>
      <MixedPracticeContent level={level} />
    </Suspense>
  );
}

'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import ExerciseRenderer from '@/components/ExerciseRenderer';
import { ArrowLeft, ArrowRight, Home, CheckCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { trackUnitTimeSpent, trackExerciseCompletion, trackUnitCompletion } from '@/lib/analytics';

const CHUNK_SIZE = 18; // keep consistent with B2 unit lessons

function lessonSkillFromType(t: string) {
  const type = (t || '').toLowerCase();
  if (type.includes('speaking') || type === 'pronunciation') return 'speaking';
  if (type.includes('listening')) return 'listening';
  if (type.includes('reading')) return 'reading';
  if (type.includes('writing')) return 'writing';
  if (type.includes('vocab')) return 'vocabulary';
  return 'grammar';
}

function B2TestFinalContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const unitId = params.unitId as string;
  const [exercises, setExercises] = useState<any[]>([]);
  const [lessonKeyCounts, setLessonKeyCounts] = useState<Record<string, number>>({});
  const [unitTitle, setUnitTitle] = useState('Test final B2');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showUnitSummary, setShowUnitSummary] = useState(false);
  const [startTime] = useState(Date.now());
  const [failedIndexes, setFailedIndexes] = useState<number[]>([]);

  useEffect(() => {
    return () => {
      const timeSpentSeconds = Math.round((Date.now() - startTime) / 1000);
      if (timeSpentSeconds > 5) {
        trackUnitTimeSpent(unitId, timeSpentSeconds);
      }
    };
  }, [unitId, startTime]);

  useEffect(() => {
    if (showUnitSummary && exercises.length > 0) {
      const durationMinutes = Math.round((Date.now() - startTime) / 60000);
      trackUnitCompletion(unitId, exercises.length, durationMinutes);
    }
  }, [showUnitSummary]);

  // Precompute exercises_total per lessonKey (for unified progress completion).
  useEffect(() => {
    if (!exercises?.length) {
      setLessonKeyCounts({});
      return;
    }
    const counts: Record<string, number> = {};
    for (let i = 0; i < exercises.length; i++) {
      const ex = exercises[i];
      const lessonNumber = Math.floor(i / CHUNK_SIZE) + 1;
      const skill = lessonSkillFromType((ex?.type as string) ?? 'unknown');
      const key = `lesson-${lessonNumber}-${skill}`;
      counts[key] = (counts[key] ?? 0) + 1;
    }
    setLessonKeyCounts(counts);
  }, [exercises]);

  useEffect(() => {
    async function loadTest() {
      try {
        const testModule = await import('@/lib/course/b2/final-test-b2');
        const unitExercises = testModule.FINAL_TEST_B2_EXERCISES ?? [];
        const title = testModule.FINAL_TEST_B2_TITLE ?? 'Test final B2';
        setUnitTitle(title);
        if (!unitExercises.length) {
          setError('No se encontraron ejercicios del test final');
          setExercises([]);
        } else {
          setExercises(unitExercises);
          const indexParam = searchParams.get('index');
          if (indexParam) {
            const idx = parseInt(indexParam);
            if (!isNaN(idx) && idx >= 0 && idx < unitExercises.length) setCurrentIndex(idx);
          }
        }
      } catch (err: any) {
        setError(`Error al cargar el test final: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }
    loadTest();
  }, [searchParams]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500 mx-auto mb-4"></div>
        <p className="text-slate-600 font-medium">Cargando test final B2...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl text-center">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Home className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-slate-800 mb-2">Error de Carga</h2>
        <p className="text-slate-600 mb-6">{error}</p>
        <Link href="/curso-b2" className="inline-block bg-slate-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-900 transition-all">
          Volver al Curso B2
        </Link>
      </div>
    </div>
  );

  if (exercises.length === 0) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <p className="text-red-500 font-bold text-xl mb-4">No se encontraron ejercicios</p>
        <Link href="/curso-b2" className="text-violet-600 underline">Volver al curso B2</Link>
      </div>
    </div>
  );

  const currentExercise = exercises[currentIndex];
  const correctCount = exercises.length - failedIndexes.length;
  const accuracy = exercises.length > 0 ? Math.round((correctCount / exercises.length) * 100) : 0;
  const passed = accuracy >= 70;

  if (showUnitSummary) {
    const durationMinutes = Math.round((Date.now() - startTime) / 60000);
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="max-w-xl w-full bg-white rounded-[2rem] shadow-2xl p-12 text-center animate-in zoom-in duration-700">
          <div className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 relative ${passed ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
            <Sparkles className="w-16 h-16" />
            <div className={`absolute -top-2 -right-2 p-3 rounded-full shadow-lg ${passed ? 'bg-emerald-500' : 'bg-amber-500'} text-white`}>
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4 italic tracking-tight">
            Test final completado
          </h2>
          <p className="text-slate-500 mb-10 text-xl font-medium">
            {passed ? 'Has superado el test B2. ¡Enhorabuena!' : 'No has alcanzado el 70%. Repasa y vuelve a intentarlo.'}
          </p>
          <div className="grid grid-cols-2 gap-6 mb-10 text-left">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <p className="text-slate-400 text-sm font-bold uppercase mb-1">Total Ejercicios</p>
              <p className="text-3xl font-black text-slate-800">{exercises.length}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <p className="text-slate-400 text-sm font-bold uppercase mb-1">Tiempo Total</p>
              <p className="text-3xl font-black text-slate-800">{durationMinutes} min</p>
            </div>
          </div>
          <div className={`mb-10 rounded-2xl p-4 border-2 ${passed ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
            <p className="text-slate-400 text-sm font-bold uppercase mb-1">Resultado</p>
            <p className="text-2xl font-black text-slate-800">
              {accuracy}% — {passed ? 'Aprobado' : 'No aprobado'}
            </p>
            <p className="text-slate-600 text-sm mt-1">Aciertos: {correctCount}/{exercises.length}. Se requiere ≥70% para aprobar.</p>
          </div>
          <a href="/curso-b2" className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-95">
            Volver al listado de unidades
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/curso-b2" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Home className="w-6 h-6 text-slate-600" />
          </Link>
          <h1 className="font-black text-xl text-slate-800 uppercase tracking-tight">
            B2: {unitTitle}
            <span className="ml-4 text-slate-400 font-medium text-sm">
              Ejercicio {currentIndex + 1} de {exercises.length}
            </span>
          </h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="p-2 bg-slate-100 rounded-xl disabled:opacity-30 hover:bg-slate-200 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentIndex(prev => Math.min(exercises.length - 1, prev + 1))}
            disabled={currentIndex === exercises.length - 1}
            className="p-2 bg-slate-100 rounded-xl disabled:opacity-30 hover:bg-slate-200 transition-all"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto p-4 py-8">
        <div className="mb-8 h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-violet-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / exercises.length) * 100}%` }}
          />
        </div>
        <ExerciseRenderer
          key={currentExercise.id}
          exercise={currentExercise}
          onComplete={(result?: { success: boolean; score: number }) => {
            trackExerciseCompletion(unitId, currentIndex, exercises.length);

            // Unified academic progress (best-effort).
            try {
              const ex = exercises[currentIndex];
              if (ex) {
                const lessonNumber = Math.floor(currentIndex / CHUNK_SIZE) + 1;
                const lessonSkill = lessonSkillFromType((ex?.type as string) ?? 'unknown');
                const lessonKey = `lesson-${lessonNumber}-${lessonSkill}`;
                const expectedExercisesTotal = lessonKeyCounts[lessonKey] ?? 0;

                fetch('/api/progress/record', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    courseId: 'ingles-b2',
                    unitId: 0,
                    lessonKey,
                    exerciseId: ex.id ?? `b2-test-${currentIndex}`,
                    exerciseType: (ex?.type as string) ?? 'unknown',
                    isCorrect: result?.success ?? true,
                    expectedExercisesTotal,
                  }),
                }).catch(() => {});
              }
            } catch {}

            if (result?.success === false) {
              setFailedIndexes(prev => (prev.includes(currentIndex) ? prev : [...prev, currentIndex]));
            }
            if (currentIndex === exercises.length - 1) {
              setShowUnitSummary(true);
            } else {
              setCurrentIndex(prev => prev + 1);
            }
          }}
        />
      </main>
    </div>
  );
}

export default function B2TestFinalClient() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Cargando test final...</div>}>
      <B2TestFinalContent />
    </Suspense>
  );
}

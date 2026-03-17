'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import ExerciseRenderer from '@/components/ExerciseRenderer';
import Link from 'next/link';
import AIExercisePractice from '@/components/course/AIExercisePractice';
import { useSpacedRepetition } from '@/hooks/use-spaced-repetition';

const CHUNK_SIZE = 15;

function UnitContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const unitId = params.unitId as string;
  const [exercises, setExercises] = useState<any[]>([]);
  const [unitTitle, setUnitTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showUnitSummary, setShowUnitSummary] = useState(false);
  const [showLessonComplete, setShowLessonComplete] = useState(false);
  const [sessionScore, setSessionScore] = useState(0);
  const [failedIndexes, setFailedIndexes] = useState<number[]>([]);
  const { recordResult } = useSpacedRepetition('LOG_A2');

  const handleAIPracticeReady = (aiExercises: any[]) => {
    setExercises(aiExercises);
    setCurrentIndex(0);
    setFailedIndexes([]);
    setShowUnitSummary(false);
    setShowLessonComplete(false);
  };

  useEffect(() => {
    if (!unitId) return;
    async function loadUnit() {
      try {
        const unitNumber = unitId.replace('unit-', '');
        let unitModule: any;
        try {
          unitModule = await import('@/lib/course/logistica-a2/unit-' + unitNumber);
        } catch {
          unitModule = await import('../../../lib/course/logistica-a2/unit-' + unitNumber);
        }
        const exportName = 'UNIT_' + unitNumber.toUpperCase() + '_EXERCISES';
        const unitExercises = unitModule[exportName] || unitModule['UNIT_' + unitNumber + '_EXERCISES'] || unitModule.default;
        setUnitTitle(unitModule.UNIT_TITLE || 'Unidad ' + unitNumber);
        if (!unitExercises || !Array.isArray(unitExercises)) {
          setError('No se encontraron ejercicios');
        } else {
          setExercises(unitExercises);
          const idx = parseInt(searchParams.get('index') || '0');
          if (!isNaN(idx) && idx >= 0 && idx < unitExercises.length) setCurrentIndex(idx);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadUnit();
  }, [unitId, searchParams]);

  const advanceExercise = (idx: number, total: number) => {
    setTimeout(() => {
      if (idx === total - 1) {
        setShowUnitSummary(true);
      } else if ((idx + 1) % CHUNK_SIZE === 0) {
        setShowLessonComplete(true);
      } else {
        setCurrentIndex(idx + 1);
      }
    }, 400);
  };

  const handleExerciseComplete = (result?: { success: boolean; score: number }) => {
    const success = result?.success ?? true;
    const pts = result?.score ?? 100;
    const ex = exercises[currentIndex];
    if (ex) {
      recordResult(ex.id ?? `logistica-{unitId}-${currentIndex}`, ex.topicName || ex.topic || 'General', success, pts);
    }
    if (success) setSessionScore(s => s + pts);
    else setFailedIndexes(prev => [...prev, currentIndex]);
    advanceExercise(currentIndex, exercises.length);
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin mx-auto mb-4" />
        <p className="text-sm font-semibold text-slate-500">Preparando la lección…</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-md text-center">
        <p className="text-slate-500 mb-4">{error}</p>
        <Link href="/curso-logistica-a2" className="text-blue-600 font-bold hover:underline">Volver al curso</Link>
      </div>
    </div>
  );

  if (showUnitSummary) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center">
        <p className="text-5xl mb-4">🎉</p>
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">¡Unidad completada!</h2>
        <p className="text-slate-600 mb-2">{unitTitle}</p>
        <p className="text-lg font-bold text-blue-600 mb-8">Puntuación: {sessionScore}</p>
        <AIExercisePractice
          level="A2"
          topic={exercises[0]?.topic || 'Professional English'}
          onExercisesReady={handleAIPracticeReady}
        />
        <Link href="/curso-logistica-a2" className="mt-4 block text-slate-500 hover:text-slate-700 font-semibold text-sm">
          ← Volver al curso
        </Link>
      </div>
    </div>
  );

  if (showLessonComplete) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center">
        <p className="text-5xl mb-4">✅</p>
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">¡Lección completada!</h2>
        <p className="text-slate-600 mb-8">Continúa con la siguiente lección.</p>
        <button
          onClick={() => { setShowLessonComplete(false); setCurrentIndex(prev => prev + 1); }}
          className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors"
        >
          Siguiente lección →
        </button>
        <Link href="/curso-logistica-a2" className="mt-4 block text-slate-500 hover:text-slate-700 font-semibold text-sm">
          ← Volver al curso
        </Link>
      </div>
    </div>
  );

  if (!exercises.length) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <p className="text-slate-500 mb-4">Esta unidad no tiene ejercicios todavía.</p>
        <Link href="/curso-logistica-a2" className="text-blue-600 font-bold hover:underline">Volver</Link>
      </div>
    </div>
  );

  const ex = exercises[currentIndex];
  const lessonNum = Math.floor(currentIndex / CHUNK_SIZE) + 1;
  const totalLessons = Math.ceil(exercises.length / CHUNK_SIZE);
  const exInLesson = (currentIndex % CHUNK_SIZE) + 1;
  const progress = ((exInLesson - 1) / Math.min(CHUNK_SIZE, exercises.length - (lessonNum - 1) * CHUNK_SIZE)) * 100;

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="sticky top-0 z-20 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/curso-logistica-a2" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold text-sm">
            ← Curso
          </Link>
          <div className="flex-1 max-w-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Lección {lessonNum}/{totalLessons}</span>
              <span>{exInLesson}/{Math.min(CHUNK_SIZE, exercises.length - (lessonNum - 1) * CHUNK_SIZE)}</span>
            </div>
            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <span className="text-xs font-bold text-slate-500">{sessionScore} pts</span>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{unitTitle}</p>
        <ExerciseRenderer
          key={currentIndex}
          exercise={ex}
          onComplete={handleExerciseComplete}
        />

        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-100 disabled:opacity-30 transition-colors"
          >
            ← Anterior
          </button>
          <button
            onClick={() => advanceExercise(currentIndex, exercises.length)}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
          >
            Siguiente →
          </button>
        </div>
      </main>
    </div>
  );
}

export default function UnitPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full" /></div>}>
      <UnitContent />
    </Suspense>
  );
}

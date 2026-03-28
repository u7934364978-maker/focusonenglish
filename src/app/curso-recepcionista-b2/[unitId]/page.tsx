'use client';

import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import ExerciseRenderer from '@/components/ExerciseRenderer';
import Link from 'next/link';
import AIExercisePractice from '@/components/course/AIExercisePractice';
import { useSpacedRepetition } from '@/hooks/use-spaced-repetition';

const LESSON_KEYS = ['grammar', 'vocabulary', 'reading', 'listening', 'speaking', 'writing'] as const;
type LessonKey = typeof LESSON_KEYS[number];

const LESSON_LABELS: Record<LessonKey, string> = {
  grammar: 'Gramática',
  vocabulary: 'Vocabulario',
  reading: 'Lectura',
  listening: 'Escucha',
  speaking: 'Expresión oral',
  writing: 'Escritura',
};

const LESSON_ICONS: Record<LessonKey, string> = {
  grammar: '📖',
  vocabulary: '🔤',
  reading: '📄',
  listening: '🎧',
  speaking: '🗣️',
  writing: '✍️',
};

function UnitContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const unitId = params.unitId as string;

  const [lessons, setLessons] = useState<Record<string, any[]> | null>(null);
  const [unitTitle, setUnitTitle] = useState('');
  const [selectedLesson, setSelectedLesson] = useState<LessonKey>('grammar');
  const [exercises, setExercises] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showLessonSummary, setShowLessonSummary] = useState(false);
  const [sessionScore, setSessionScore] = useState(0);
  const [failedIndexes, setFailedIndexes] = useState<number[]>([]);
  const { recordResult } = useSpacedRepetition('REC_B2');

  const handleAIPracticeReady = (aiExercises: any[]) => {
    setExercises(aiExercises);
    setCurrentIndex(0);
    setFailedIndexes([]);
    setShowLessonSummary(false);
  };

  useEffect(() => {
    if (!unitId) return;
    async function loadUnit() {
      try {
        const unitNumber = unitId.replace('unit-', '');
        let unitModule: any;
        try {
          unitModule = await import('@/lib/course/recepcionista-b2/unit-' + unitNumber);
        } catch {
          unitModule = await import('../../../lib/course/recepcionista-b2/unit-' + unitNumber);
        }
        setUnitTitle(unitModule.UNIT_TITLE || 'Unidad ' + unitNumber);

        if (unitModule.UNIT_LESSONS) {
          setLessons(unitModule.UNIT_LESSONS);
          const lessonParam = searchParams.get('lesson') as LessonKey | null;
          const initialLesson: LessonKey = (lessonParam && LESSON_KEYS.includes(lessonParam as LessonKey))
            ? lessonParam as LessonKey
            : 'grammar';
          setSelectedLesson(initialLesson);
          const lessonExercises = unitModule.UNIT_LESSONS[initialLesson] || [];
          setExercises(lessonExercises);
        } else {
          const exportName = 'UNIT_' + unitNumber.toUpperCase() + '_EXERCISES';
          const unitExercises = unitModule[exportName] || unitModule['UNIT_' + unitNumber + '_EXERCISES'] || unitModule.default;
          if (!unitExercises || !Array.isArray(unitExercises)) {
            setError('No se encontraron ejercicios');
          } else {
            setExercises(unitExercises);
          }
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadUnit();
  }, [unitId]);

  const switchLesson = (key: LessonKey) => {
    if (!lessons) return;
    setSelectedLesson(key);
    setExercises(lessons[key] || []);
    setCurrentIndex(0);
    setSessionScore(0);
    setFailedIndexes([]);
    setShowLessonSummary(false);
  };

  const advanceExercise = (idx: number, total: number) => {
    setTimeout(() => {
      if (idx === total - 1) {
        setShowLessonSummary(true);
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
      recordResult(ex.id ?? `recepcionista-${unitId}-${currentIndex}`, ex.topicName || ex.topic || 'General', success, pts);
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
        <Link href="/curso-recepcionista-b2" className="text-blue-600 font-bold hover:underline">Volver al curso</Link>
      </div>
    </div>
  );

  if (showLessonSummary) {
    const currentIdx = LESSON_KEYS.indexOf(selectedLesson);
    const nextLesson = LESSON_KEYS[currentIdx + 1] as LessonKey | undefined;
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center">
          <p className="text-5xl mb-4">✅</p>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">¡Lección completada!</h2>
          <p className="text-slate-600 mb-1">{LESSON_ICONS[selectedLesson]} {LESSON_LABELS[selectedLesson]}</p>
          <p className="text-lg font-bold text-blue-600 mb-8">Puntuación: {sessionScore}</p>
          {nextLesson ? (
            <button
              onClick={() => switchLesson(nextLesson)}
              className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors mb-3"
            >
              Siguiente: {LESSON_ICONS[nextLesson]} {LESSON_LABELS[nextLesson]} →
            </button>
          ) : (
            <>
              <p className="text-slate-600 mb-4 font-semibold">¡Has completado todas las lecciones de esta unidad!</p>
              <AIExercisePractice
                level="B2"
                topic={exercises[0]?.topic || 'Professional English'}
                onExercisesReady={handleAIPracticeReady}
              />
            </>
          )}
          <Link href="/curso-recepcionista-b2" className="mt-4 block text-slate-500 hover:text-slate-700 font-semibold text-sm">
            ← Volver al curso
          </Link>
        </div>
      </div>
    );
  }

  if (!exercises.length) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <p className="text-slate-500 mb-4">Esta lección no tiene ejercicios todavía.</p>
        <Link href="/curso-recepcionista-b2" className="text-blue-600 font-bold hover:underline">Volver</Link>
      </div>
    </div>
  );

  const ex = exercises[currentIndex];
  const progress = (currentIndex / exercises.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="sticky top-0 z-20 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/curso-recepcionista-b2" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold text-sm shrink-0">
            ← Curso
          </Link>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-slate-400 uppercase truncate mb-1">{unitTitle}</p>
            <div className="flex items-center gap-2">
              <div className="h-1.5 flex-1 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
              </div>
              <span className="text-xs text-slate-500 shrink-0">{currentIndex + 1}/{exercises.length}</span>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-500 shrink-0">{sessionScore} pts</span>
        </div>
      </nav>

      {lessons && (
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
              {LESSON_KEYS.map((key) => (
                <button
                  key={key}
                  onClick={() => switchLesson(key)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedLesson === key
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span>{LESSON_ICONS[key]}</span>
                  <span>{LESSON_LABELS[key]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="max-w-2xl mx-auto px-4 py-8">
        {lessons && (
          <p className="text-sm font-bold text-slate-500 mb-4">
            {LESSON_ICONS[selectedLesson]} {LESSON_LABELS[selectedLesson]}
          </p>
        )}
        <ExerciseRenderer
          key={`${unitId}-${selectedLesson}-${currentIndex}`}
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

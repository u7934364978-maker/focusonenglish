'use client';

import { useEffect, useState, useCallback, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Home, RotateCcw, CheckCircle, XCircle, ArrowRight, Trophy } from 'lucide-react';
import ExerciseRenderer from '@/components/ExerciseRenderer';
import { useSpacedRepetition } from '@/hooks/use-spaced-repetition';

interface SRSCard {
  exercise_id: string;
  topic: string;
  interval: number;
  ease_factor: string | number;
}

interface LoadedExercise {
  card: SRSCard;
  exercise: any;
}

function parseUnitNumber(exerciseId: string): string | null {
  const m = exerciseId.match(/^a1-u(\d+)-/);
  return m ? m[1] : null;
}

async function loadExerciseById(exerciseId: string): Promise<any | null> {
  const unitNum = parseUnitNumber(exerciseId);
  if (!unitNum) return null;
  try {
    let unitModule: any;
    unitModule = await import(`@/lib/course/a1/unit-${unitNum}`);
    const exportName = `UNIT_${unitNum}_EXERCISES`;
    const exercises: any[] = unitModule[exportName] ?? unitModule.default ?? [];
    return exercises.find((ex: any) => ex.id === exerciseId) ?? null;
  } catch {
    return null;
  }
}

function SRSRepasoContent() {
  const router = useRouter();
  const { recordResult } = useSpacedRepetition('A1');

  const [cards, setCards] = useState<SRSCard[]>([]);
  const [loadedExercises, setLoadedExercises] = useState<LoadedExercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [done, setDone] = useState(false);
  const [results, setResults] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/a1/srs?due=true');
        if (!res.ok) throw new Error('Not authorized');
        const data = await res.json();
        const dueCards: SRSCard[] = data.cards ?? [];

        const loaded: LoadedExercise[] = [];
        for (const card of dueCards) {
          const exercise = await loadExerciseById(card.exercise_id);
          if (exercise) loaded.push({ card, exercise });
        }
        setCards(dueCards);
        setLoadedExercises(loaded);
      } catch {
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleComplete = useCallback((result?: { success: boolean; score: number }) => {
    const success = result?.success ?? true;
    const score = result?.score ?? 100;
    const current = loadedExercises[currentIndex];
    if (current) {
      recordResult(current.card.exercise_id, current.card.topic, success, score);
    }
    setResults(prev => ({ correct: prev.correct + (success ? 1 : 0), total: prev.total + 1 }));

    if (currentIndex + 1 >= loadedExercises.length) {
      setDone(true);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, loadedExercises, recordResult]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" />
          <p className="text-slate-600 font-medium">Cargando tarjetas de repaso…</p>
        </div>
      </div>
    );
  }

  if (!loading && loadedExercises.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="max-w-sm w-full text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 mb-2">¡Al día!</h1>
          <p className="text-slate-600 mb-6">No tienes ejercicios pendientes de repaso hoy. ¡Vuelve mañana!</p>
          <Link href="/curso-a1" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors">
            <Home className="w-4 h-4" />
            Volver al curso
          </Link>
        </div>
      </div>
    );
  }

  if (done) {
    const accuracy = results.total > 0 ? Math.round((results.correct / results.total) * 100) : 0;
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 p-4">
        <div className="max-w-sm w-full text-center space-y-6">
          <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center mx-auto">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-white mb-2">Repaso completado</h1>
            <p className="text-blue-100">Has revisado {results.total} tarjeta{results.total !== 1 ? 's' : ''} hoy.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/20 rounded-2xl p-4 border border-white/20">
              <p className="text-2xl font-black text-white">{results.correct}</p>
              <p className="text-xs text-blue-100 font-bold uppercase">Correctas</p>
            </div>
            <div className="bg-white/20 rounded-2xl p-4 border border-white/20">
              <p className="text-2xl font-black text-white">{accuracy}%</p>
              <p className="text-xs text-blue-100 font-bold uppercase">Precisión</p>
            </div>
          </div>
          <Link href="/curso-a1" className="block w-full bg-white text-blue-700 py-4 rounded-2xl font-black text-base hover:-translate-y-0.5 transition-all text-center">
            Volver al curso
          </Link>
        </div>
      </div>
    );
  }

  const current = loadedExercises[currentIndex];
  const progress = ((currentIndex) / loadedExercises.length) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <nav className="bg-white border-b px-4 py-3 flex items-center gap-4 sticky top-0 z-50">
        <Link href="/curso-a1" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <Home className="w-5 h-5 text-slate-600" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <RotateCcw className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-black text-slate-800">Repaso diario A1</span>
          </div>
          <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <span className="text-xs font-bold text-slate-500 tabular-nums">
          {currentIndex + 1}/{loadedExercises.length}
        </span>
      </nav>

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 pb-24">
        <div className="mb-4 flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-xl text-xs font-bold text-blue-700">
          <RotateCcw className="w-3.5 h-3.5" />
          Tema: {current.card.topic || 'General'}
        </div>
        <ExerciseRenderer
          key={current.exercise.id}
          exercise={current.exercise}
          onComplete={handleComplete}
        />
      </div>
    </div>
  );
}

export default function SRSRepasoPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    }>
      <SRSRepasoContent />
    </Suspense>
  );
}

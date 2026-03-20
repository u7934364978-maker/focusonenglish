'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Loader2, Sparkles, ArrowLeft, BrainCircuit, Zap, RotateCcw } from 'lucide-react';
import PremiumCourseSession from '@/components/course/exercises/PremiumSession';
import type { UnitData } from '@/types/premium-course';
import Link from 'next/link';
import { getDueCards, sm2Update, qualityFromResult, saveCard } from '@/lib/spaced-repetition';

interface AdaptiveExercise {
  interaction_id: string;
  type: string;
  [key: string]: unknown;
}

function buildUnitData(interactions: AdaptiveExercise[], isSRS = false): UnitData {
  return {
    course: {
      unit_id: isSRS ? 'A1_SRS_SESSION' : 'A1_SMART_SESSION',
      unit_title: isSRS ? 'Repaso espaciado A1' : 'Práctica inteligente A1',
      level: 'A1',
      total_duration_minutes: interactions.length * 2,
      language_ui: 'es-ES',
      target_language: 'en',
    },
    learning_outcomes: isSRS
      ? ['Repasar los ejercicios con mayor riesgo de olvido', 'Consolidar el vocabulario y gramática A1 a largo plazo']
      : ['Reforzar los puntos débiles detectados por el sistema', 'Repasar vocabulario y gramática clave de A1'],
    blocks: [
      {
        block_id: isSRS ? 'A1_SRS_BLOCK' : 'A1_SMART_BLOCK',
        title: isSRS ? 'Sesión de repaso espaciado' : 'Sesión adaptativa',
        duration_minutes: interactions.length * 2,
        content: interactions,
      },
    ],
  };
}

export default function A1SmartPracticeClient() {
  const searchParams = useSearchParams();
  const isSRSMode = searchParams.get('mode') === 'srs';

  const [unitData, setUnitData] = useState<UnitData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sessionXp, setSessionXp] = useState(0);
  const [srsDueCount, setSrsDueCount] = useState(0);

  const fetchAdaptiveExercises = useCallback(async (count = 8, topics?: string[]) => {
    const exercises: AdaptiveExercise[] = [];
    for (let i = 0; i < count; i++) {
      try {
        const res = await fetch('/api/adaptive/next', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ level: 'A1', ...(topics?.length ? { topics } : {}) }),
        });
        if (!res.ok) continue;
        const data = await res.json();
        if (data?.success && data.exercise) {
          exercises.push(data.exercise as AdaptiveExercise);
        }
      } catch {
        // Silenciar errores individuales
      }
    }
    return exercises;
  }, []);

  const fetchSRSExercises = useCallback(async () => {
    const dueCards = getDueCards('A1');
    setSrsDueCount(dueCards.length);

    if (dueCards.length === 0) return [];

    const weakTopics = [...new Set(dueCards.map(c => c.topic).filter(Boolean))];
    const count = Math.min(dueCards.length + 2, 12);
    return fetchAdaptiveExercises(count, weakTopics.slice(0, 5));
  }, [fetchAdaptiveExercises]);

  useEffect(() => {
    async function init() {
      try {
        let interactions: AdaptiveExercise[];

        if (isSRSMode) {
          interactions = await fetchSRSExercises();
          if (!interactions || interactions.length === 0) {
            interactions = await fetchAdaptiveExercises(10);
          }
        } else {
          interactions = await fetchAdaptiveExercises(10);
        }

        if (!interactions || interactions.length === 0) {
          setError('No se han encontrado ejercicios para tu sesión. Inténtalo de nuevo en unos minutos.');
          return;
        }
        setUnitData(buildUnitData(interactions, isSRSMode));
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : 'No se pudo iniciar la práctica.';
        setError(msg);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [isSRSMode, fetchSRSExercises, fetchAdaptiveExercises]);

  const handleInteractionCorrect = async (interactionId: string) => {
    setSessionXp((prev) => prev + 10);

    try {
      await fetch('/api/adaptive/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ interactionId, isCorrect: true, responseTimeMs: 5000 }),
      });
    } catch {}

    if (isSRSMode) {
      const dueCards = getDueCards('A1');
      const card = dueCards.find(c => c.exerciseId === interactionId);
      if (card) {
        const updated = sm2Update(card, qualityFromResult(true, 100));
        saveCard(updated);
        try {
          await fetch('/api/a1/srs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              exerciseId: updated.exerciseId,
              topic: updated.topic,
              interval: updated.interval,
              repetitions: updated.repetitions,
              easeFactor: updated.easeFactor,
              nextReviewAt: new Date(updated.nextReview).toISOString(),
              lastQuality: updated.lastQuality,
            }),
          });
        } catch {}
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
          <p className="text-xs font-black tracking-widest text-slate-400 uppercase">
            {isSRSMode ? 'Preparando tus repasos…' : 'Preparando tu sesión inteligente…'}
          </p>
        </div>
      </div>
    );
  }

  if (error || !unitData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mx-auto">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
          <h1 className="text-xl font-black tracking-tight text-slate-900">
            No se pudo iniciar la práctica
          </h1>
          <p className="text-sm text-slate-500">{error}</p>
          <Link
            href="/curso-a1"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors w-full"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al curso A1
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <div className="max-w-5xl mx-auto px-4 pt-6 pb-10">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/curso-a1"
              className="inline-flex items-center justify-center w-9 h-9 rounded-2xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 transition-colors"
              aria-label="Volver al curso A1"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Curso A1 · {isSRSMode ? 'Repaso Espaciado' : 'Práctica Inteligente'}
              </p>
              <h1 className="text-xl md:text-2xl font-black tracking-tight flex items-center gap-2">
                {isSRSMode
                  ? <RotateCcw className="w-5 h-5 text-blue-400" />
                  : <BrainCircuit className="w-5 h-5 text-coral-400" />}
                {isSRSMode ? 'Repasos pendientes' : 'Sesión adaptativa'}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isSRSMode && srsDueCount > 0 && (
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-xs font-bold text-blue-300">
                <RotateCcw className="w-3.5 h-3.5" />
                {srsDueCount} {srsDueCount === 1 ? 'repaso' : 'repasos'} pendientes
              </div>
            )}
            {!isSRSMode && (
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="font-bold text-slate-100">
                  Contenido seleccionado automáticamente según tu nivel
                </span>
              </div>
            )}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-coral-500/10 border border-coral-400/40 text-xs font-black">
              <Zap className="w-3.5 h-3.5 text-coral-300" />
              <span>{sessionXp} XP sesión</span>
            </div>
          </div>
        </header>

        <div className="bg-slate-900/60 rounded-3xl border border-slate-700/60 shadow-xl shadow-black/40 p-3 md:p-4">
          <PremiumCourseSession
            unitData={unitData}
            onComplete={() => {}}
            onExit={() => {}}
            onInteractionCorrect={handleInteractionCorrect}
          />
        </div>
      </div>
    </div>
  );
}

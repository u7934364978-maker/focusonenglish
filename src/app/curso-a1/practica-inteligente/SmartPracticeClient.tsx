'use client';

import { useCallback, useEffect, useState } from 'react';
import { Loader2, Sparkles, ArrowLeft, BrainCircuit, Zap } from 'lucide-react';
import PremiumCourseSession from '@/components/course/exercises/PremiumSession';
import type { UnitData } from '@/types/premium-course';
import Link from 'next/link';

interface AdaptiveExercise {
  interaction_id: string;
  type: string;
  [key: string]: any;
}

function buildUnitData(interactions: AdaptiveExercise[]): UnitData {
  return {
    course: {
      unit_id: 'A1_SMART_SESSION',
      unit_title: 'Práctica inteligente A1',
      level: 'A1',
      total_duration_minutes: interactions.length * 2,
      language_ui: 'es-ES',
      target_language: 'en',
    },
    learning_outcomes: [
      'Reforzar los puntos débiles detectados por el sistema',
      'Repasar vocabulario y gramática clave de A1',
    ],
    blocks: [
      {
        block_id: 'A1_SMART_BLOCK',
        title: 'Sesión adaptativa',
        duration_minutes: interactions.length * 2,
        content: interactions,
      },
    ],
  };
}

export default function A1SmartPracticeClient() {
  const [unitData, setUnitData] = useState<UnitData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sessionXp, setSessionXp] = useState(0);

  const fetchExercises = useCallback(async (count = 8) => {
    const exercises: AdaptiveExercise[] = [];
    for (let i = 0; i < count; i++) {
      try {
        const res = await fetch('/api/adaptive/next', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ level: 'A1' }),
        });
        if (!res.ok) continue;
        const data = await res.json();
        if (data?.success && data.exercise) {
          exercises.push(data.exercise as AdaptiveExercise);
        }
      } catch {
        // Silenciar errores individuales para no romper toda la sesión
      }
    }
    return exercises;
  }, []);

  useEffect(() => {
    async function init() {
      try {
        const interactions = await fetchExercises(10);
        if (!interactions || interactions.length === 0) {
          setError('No se han encontrado ejercicios adaptativos para tu nivel A1 todavía.');
          return;
        }
        setUnitData(buildUnitData(interactions));
      } catch (e: any) {
        setError(e?.message || 'No se pudo iniciar la práctica inteligente.');
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [fetchExercises]);

  const handleInteractionCorrect = async (interactionId: string) => {
    setSessionXp((prev) => prev + 10);

    // Registramos el acierto en el motor adaptativo global
    try {
      await fetch('/api/adaptive/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          interactionId,
          isCorrect: true,
          responseTimeMs: 5000,
        }),
      });
    } catch {
      // No bloqueamos la sesión si falla el tracking
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FEF9F5] px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-[#FF6B6B] border-t-transparent animate-spin" />
          <p className="text-xs font-black tracking-widest text-slate-400 uppercase">
            Preparando tu sesión inteligente…
          </p>
        </div>
      </div>
    );
  }

  if (error || !unitData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FEF9F5] px-4">
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
                Curso A1 · Práctica Inteligente
              </p>
              <h1 className="text-xl md:text-2xl font-black tracking-tight flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-coral-400" />
                Sesión adaptativa
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="font-bold text-slate-100">
                Contenido seleccionado automáticamente según tu nivel
              </span>
            </div>
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


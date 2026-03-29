'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, Bug, Calendar, Flame, Loader2, Sparkles, Zap } from 'lucide-react';
import PremiumCourseSession from '@/components/course/exercises/PremiumSession';
import type { UnitData } from '@/types/premium-course';
import { useSpacedRepetition } from '@/hooks/use-spaced-repetition';
import {
  addSessionXpRemote,
  completeDailySessionRemote,
  fetchStreakStats,
} from '@/lib/daily-session/client-streak';
import type { PedagogyQualityBatchResult } from '@/lib/validation/pedagogy-quality-rules';
import type { PedagogyDisplayGateSummary } from '@/lib/validation/pedagogy-pre-display-audit';
import {
  A1_SESION_DEL_DIA,
  a1SesionDelDiaEnOracion,
} from '@/lib/copy/a1-sesion-del-dia';

interface PlanMeta {
  reviewCount: number;
  newCount: number;
  sessionTotal: number;
  missedExerciseIds: string[];
  dueQueueLength: number;
  generation?: 'catalog' | 'ai';
  aiWarning?: string;
  /** Metadatos de unificación SRS + temario + mastery (solo generation: ai) */
  orchestration?: {
    srsDueCount: number;
    srsSkipped?: boolean;
    srsPriorityTags: string[];
    masteryWeakTags: string[];
    mergedPriorityTags: string[];
    unitOrdersFromSrs: number[];
  };
  /** Reglas PQ_* tras generación IA (solo debug / generation: ai). */
  pedagogyQuality?: PedagogyQualityBatchResult;
  /** Ítems excluidos por la puerta pedagógica antes de mostrar (solo debug). */
  pedagogyGate?: PedagogyDisplayGateSummary;
}

interface AdaptiveExercise {
  interaction_id: string;
  type: string;
  mastery_tag?: string;
  concept_tags?: string[];
  complexity?: number;
  prompt_es?: string;
  [key: string]: unknown;
}

function buildUnitData(interactions: AdaptiveExercise[]): UnitData {
  return {
    course: {
      unit_id: 'A1_DAILY_SESSION',
      unit_title: A1_SESION_DEL_DIA,
      level: 'A1',
      total_duration_minutes: interactions.length * 2,
      language_ui: 'es-ES',
      target_language: 'en',
    },
    learning_outcomes: [
      'Repasar lo pendiente de tu repaso espaciado',
      'Practicar ejercicios nuevos adaptados a lo que más te cuesta',
    ],
    blocks: [
      {
        block_id: 'A1_DAILY_BLOCK',
        title: A1_SESION_DEL_DIA,
        duration_minutes: interactions.length * 2,
        content: interactions,
      },
    ],
  };
}

function topicFromInteraction(ex: AdaptiveExercise): string {
  if (typeof ex.mastery_tag === 'string' && ex.mastery_tag.trim()) return ex.mastery_tag;
  if (typeof ex.prompt_es === 'string' && ex.prompt_es.trim()) {
    return ex.prompt_es.slice(0, 48).trim();
  }
  return 'General';
}

function TagList({ label, tags }: { label: string; tags: string[] }) {
  if (!tags.length) return null;
  return (
    <div>
      <span className="text-emerald-300/90">{label}</span>
      <ul className="mt-1 list-disc list-inside text-emerald-50/95 break-words">
        {tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default function DailySessionClient() {
  const searchParams = useSearchParams();
  const showDebugPanel =
    process.env.NODE_ENV === 'development' ||
    searchParams.get('debug') === '1' ||
    searchParams.get('debug') === 'true';

  const [unitData, setUnitData] = useState<UnitData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [plan, setPlan] = useState<PlanMeta | null>(null);
  const [sessionXp, setSessionXp] = useState(0);
  const [streak, setStreak] = useState(0);

  const { recordResult } = useSpacedRepetition('A1');

  useEffect(() => {
    let cancelled = false;
    fetchStreakStats()
      .then((s) => {
        if (!cancelled) {
          setStreak(s.streak);
          setSessionXp(s.todayXp);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch('/api/a1/daily-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ generation: 'ai' }),
        });
        if (!res.ok) {
          if (res.status === 401) {
            setError('Debes iniciar sesión.');
            return;
          }
          throw new Error('No se pudo cargar la sesión');
        }
        const data = await res.json();
        if (cancelled) return;
        if (!data.success || !Array.isArray(data.exercises) || data.exercises.length === 0) {
          setError('No hay ejercicios disponibles ahora. Inténtalo más tarde.');
          return;
        }
        setPlan(data.plan as PlanMeta);
        setUnitData(buildUnitData(data.exercises as AdaptiveExercise[]));
      } catch (e: unknown) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Error de red');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleInteractionCorrect = useCallback(
    async (interactionId: string) => {
      try {
        const s = await addSessionXpRemote(10);
        setSessionXp(s.todayXp);
        setStreak(s.streak);
      } catch {
        setSessionXp((p) => p + 10);
      }

      const content = (unitData?.blocks[0]?.content ?? []) as AdaptiveExercise[];
      const ex = content.find((i) => i.interaction_id === interactionId);
      const conceptTags = Array.isArray(ex?.concept_tags)
        ? ex.concept_tags
        : ex?.mastery_tag
          ? [String(ex.mastery_tag)]
          : [];

      try {
        await fetch('/api/adaptive/evaluate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            interactionId,
            isCorrect: true,
            responseTimeMs: 5000,
            ...(conceptTags.length > 0
              ? {
                  conceptTags,
                  level: 'A1',
                  complexity: typeof ex?.complexity === 'number' ? ex.complexity : 2,
                }
              : {}),
          }),
        });
      } catch {
        /* no bloquear */
      }

      const topic = ex ? topicFromInteraction(ex) : 'General';
      recordResult(interactionId, topic, true, 100);
    },
    [recordResult, unitData],
  );

  const handleComplete = useCallback(() => {
    completeDailySessionRemote()
      .then((s) => {
        setStreak(s.streak);
        setSessionXp(s.todayXp);
      })
      .catch(() => {});
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin" />
          <p className="text-xs font-black tracking-widest text-slate-400 uppercase">
            Preparando tu {a1SesionDelDiaEnOracion()}…
          </p>
        </div>
      </div>
    );
  }

  if (error || !unitData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-8 text-center space-y-4">
          <Loader2 className="w-10 h-10 text-slate-300 mx-auto animate-spin" />
          <h1 className="text-xl font-black text-slate-900">Sesión no disponible</h1>
          <p className="text-sm text-slate-500">{error}</p>
          <Link
            href="/curso-a1"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 w-full"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al curso A1
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0c4a3e] text-white">
      <div className="max-w-5xl mx-auto px-4 pt-6 pb-10">
        <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/curso-a1"
              className="inline-flex items-center justify-center w-9 h-9 rounded-2xl bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-colors"
              aria-label="Volver"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-200/90">
                Curso A1 · {A1_SESION_DEL_DIA}
              </p>
              <h1 className="text-xl md:text-2xl font-black tracking-tight flex items-center gap-2">
                <Calendar className="w-6 h-6 text-emerald-300" />
                Sesión guiada
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {plan && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                {plan.reviewCount} repasos · {plan.newCount} nuevos
              </div>
            )}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/50 text-xs font-black">
              <Flame className="w-3.5 h-3.5 text-orange-300" />
              Racha {streak} día{streak !== 1 ? 's' : ''}
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-xs font-black">
              <Zap className="w-3.5 h-3.5 text-emerald-300" />
              {sessionXp} XP
            </div>
          </div>
        </header>

        <p className="text-sm text-emerald-100/90 mb-4 max-w-2xl">
          Repasos tomados de tu cola espaciada (mismos ejercicios que marcaste) mezclados con ítems nuevos del
          motor adaptativo.
        </p>

        {showDebugPanel && plan && (
          <details className="mb-4 rounded-2xl border border-amber-400/40 bg-amber-950/30 text-left">
            <summary className="cursor-pointer list-none px-4 py-3 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-100/95 [&::-webkit-details-marker]:hidden">
              <Bug className="w-4 h-4 shrink-0 text-amber-300" />
              Diagnóstico sesión (debug)
              <span className="ml-auto font-mono font-normal normal-case tracking-normal text-amber-200/70">
                {process.env.NODE_ENV === 'development' ? 'dev · ' : ''}
                añade ?debug=1 en producción
              </span>
            </summary>
            <div className="px-4 pb-4 pt-0 space-y-3 text-[11px] sm:text-xs font-mono text-emerald-50/95 leading-relaxed border-t border-amber-400/20">
              <div>
                <span className="text-emerald-300/90">generation</span> ·{' '}
                {plan.generation ?? '—'} · sessionTotal {plan.sessionTotal} · cola SRS due{' '}
                {plan.dueQueueLength}
              </div>
              {plan.aiWarning ? (
                <div className="text-amber-200/90">
                  <span className="text-emerald-300/90">aiWarning</span> · {plan.aiWarning}
                </div>
              ) : null}
              {plan.pedagogyGate?.rejectedCount ? (
                <div className="space-y-1 border-t border-white/10 pt-3 text-amber-100/90">
                  <span className="text-emerald-300/90 font-bold">pedagogyGate</span>
                  <div>
                    excluidos antes de mostrar: {plan.pedagogyGate.rejectedCount}
                  </div>
                  <ul className="list-none space-y-1 pl-0">
                    {plan.pedagogyGate.rejected.map((r) => (
                      <li key={r.id}>
                        <span className="text-emerald-300/90">{r.id}</span> · {r.ruleIds.join(', ')}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {plan.pedagogyQuality ? (
                <div className="space-y-2 border-t border-white/10 pt-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-emerald-300/90 font-bold">pedagogyQuality</span>
                    <span
                      className={
                        plan.pedagogyQuality.ok
                          ? 'rounded px-1.5 py-0.5 bg-emerald-500/25 text-emerald-100'
                          : 'rounded px-1.5 py-0.5 bg-amber-500/30 text-amber-100'
                      }
                    >
                      ok: {String(plan.pedagogyQuality.ok)}
                    </span>
                  </div>
                  <ul className="list-none space-y-1.5 pl-0">
                    {plan.pedagogyQuality.exercises.map((row) => {
                      const errs = row.issues.filter((i) => i.severity === 'error');
                      const warns = row.issues.filter((i) => i.severity === 'warn');
                      if (!row.issues.length) {
                        return (
                          <li key={row.id} className="text-emerald-200/70">
                            {row.id} · sin incidencias PQ
                          </li>
                        );
                      }
                      return (
                        <li key={row.id} className="text-emerald-50/95">
                          <span className="text-emerald-300/90">{row.id}</span>
                          {errs.length > 0 ? (
                            <span className="text-rose-200/95">
                              {' '}
                              · error: {errs.map((e) => e.ruleId).join(', ')}
                            </span>
                          ) : null}
                          {warns.length > 0 ? (
                            <span className="text-amber-200/85">
                              {' '}
                              · warn: {warns.map((w) => w.ruleId).join(', ')}
                            </span>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
              {plan.missedExerciseIds?.length ? (
                <div>
                  <span className="text-emerald-300/90">missedExerciseIds</span> ·{' '}
                  {plan.missedExerciseIds.slice(0, 8).join(', ')}
                  {plan.missedExerciseIds.length > 8 ? '…' : ''}
                </div>
              ) : null}
              {plan.orchestration ? (
                <div className="space-y-2 border-t border-white/10 pt-3">
                  <div className="text-emerald-300/90 font-bold">orchestration</div>
                  <div>
                    srsDueCount: {plan.orchestration.srsDueCount}
                    {plan.orchestration.srsSkipped ? ' · srsSkipped (tabla ausente)' : ''}
                  </div>
                  <TagList label="srsPriorityTags" tags={plan.orchestration.srsPriorityTags} />
                  <TagList label="masteryWeakTags" tags={plan.orchestration.masteryWeakTags} />
                  <TagList label="mergedPriorityTags" tags={plan.orchestration.mergedPriorityTags} />
                  {plan.orchestration.unitOrdersFromSrs.length > 0 ? (
                    <div>
                      <span className="text-emerald-300/90">unitOrdersFromSrs</span> ·{' '}
                      {plan.orchestration.unitOrdersFromSrs.join(', ')}
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="text-emerald-200/60 border-t border-white/10 pt-3">
                  Sin bloque orchestration (p. ej. generation catalog o respuesta antigua).
                </div>
              )}
            </div>
          </details>
        )}

        <div className="bg-slate-900/40 rounded-3xl border border-emerald-700/50 shadow-xl p-3 md:p-4">
          <PremiumCourseSession
            unitData={unitData}
            onComplete={handleComplete}
            onExit={() => {}}
            onInteractionCorrect={handleInteractionCorrect}
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import type { ExercisesFile, ProgressState } from "./types";
import ExerciseRenderer from "./ExerciseRenderer";
import { loadProgress, saveProgress } from "./storage";

import {
  recordCoreResult,
  loadPracticeGate,
  finalizePractice,
  resetPracticeCycle,
  getCoreStats,
} from "@/lib/gating";

function pct(n: number) {
  return Math.round(n * 100);
}

function hashSeed(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

function seededRandomFactory(seed: string) {
  let t = hashSeed(seed) >>> 0;
  return function rand() {
    t += 0x6d2b79f5;
    let x = t;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(arr: T[], seed: string) {
  const rand = seededRandomFactory(seed);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function antiStreakByType<T extends { type: string; id?: string }>(items: T[], maxStreak = 2) {
  const pools = new Map<string, T[]>();
  for (const it of items) {
    const k = it.type;
    if (!pools.has(k)) pools.set(k, []);
    pools.get(k)!.push(it);
  }

  for (const [k, v] of pools.entries()) {
    pools.set(k, [...v].sort((a, b) => String(a.id || "").localeCompare(String(b.id || ""))));
  }

  const types = Array.from(pools.keys()).sort();
  const out: T[] = [];

  let lastType: string | null = null;
  let streak = 0;

  while (out.length < items.length) {
    const available = types.filter((t) => (pools.get(t)?.length || 0) > 0);
    if (available.length === 0) break;

    if (available.length === 1) {
      out.push(...(pools.get(available[0]) || []));
      break;
    }

    let pick = available.find((t) => t !== lastType) || available[0];
    if (pick === lastType && streak >= maxStreak) {
      pick = available.find((t) => t !== lastType) || available[0];
    }

    const pool = pools.get(pick)!;
    out.push(pool.shift()!);

    if (pick === lastType) streak++;
    else {
      lastType = pick;
      streak = 1;
    }
  }

  return out;
}

export default function ExercisesPanel({ data }: { data: ExercisesFile }) {
  const { goal, level, weekId } = data;

  const [progress, setProgress] = useState<ProgressState | null>(null);
  const [showPendingOnly, setShowPendingOnly] = useState(false);
  const [showExtension, setShowExtension] = useState(false);
  const [gateTick, setGateTick] = useState(0);

  useEffect(() => {
    loadProgress(goal, level, weekId).then(setProgress);
  }, [goal, level, weekId]);

  const completedCount = useMemo(() => {
    if (!progress) return 0;
    return Object.keys(progress.completed || {}).length;
  }, [progress]);

  const percentAll = useMemo(() => {
    if (!data.items.length) return 0;
    return Math.round((completedCount / data.items.length) * 100);
  }, [completedCount, data.items.length]);

  const coreTotal = useMemo(() => {
    return (data.items || []).filter((ex: any) => ex.track === "core").length || 48;
  }, [data.items]);

  const gate = useMemo(() => loadPracticeGate(goal, level, weekId), [goal, level, weekId, gateTick]);
  const coreStats = useMemo(
    () => getCoreStats(goal, level, weekId, coreTotal),
    [goal, level, weekId, coreTotal, gateTick]
  );

  const visibleItems = useMemo(() => {
    const coreItems = (data.items || []).filter((ex: any) => ex.track !== "extension");
    const extItems = (data.items || []).filter((ex: any) => ex.track === "extension");

    const coreSeed = `${data.weekId}-core`;
    const extSeed = `${data.weekId}-ext`;

    const coreMixed = antiStreakByType(seededShuffle(coreItems, coreSeed) as any[], 2);
    const extMixed = antiStreakByType(seededShuffle(extItems, extSeed) as any[], 2);

    const mixed = showExtension ? [...coreMixed, ...extMixed] : coreMixed;

    if (!progress) return mixed;
    if (!showPendingOnly) return mixed;

    return mixed.filter((ex) => !progress.completed?.[ex.id]);
  }, [data.items, data.weekId, progress, showPendingOnly, showExtension]);

  async function resetProgressUI() {
    const confirmed = window.confirm(
      "⚠️ ¿Seguro que quieres resetear tu progreso?\n\nEsto borrará todas tus respuestas y tendrás que empezar de nuevo."
    );
    if (!confirmed) return;

    const next: ProgressState = { completed: {}, updatedAt: Date.now(), answers: {} };
    setProgress(next);
    await saveProgress(goal, level, weekId, next);
  }

  function onFinalizePractice() {
    finalizePractice(goal, level, weekId);
    setGateTick((t) => t + 1);
  }

  async function onResetCycle() {
    const confirmed = window.confirm(
      "⚠️ Esto consumirá 1 de tus ciclos de práctica.\n\n" +
        `Te quedan ${gate.maxCycles - gate.cyclesUsed} ciclos disponibles.\n\n` +
        "¿Continuar?"
    );
    if (!confirmed) return;

    resetPracticeCycle(goal, level, weekId);
    await resetProgressUI();
    setGateTick((t) => t + 1);
  }

  if (!progress) {
    return (
      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-[12px] font-extrabold tracking-wide text-slate-500">PRACTICE</div>
        <h2 className="mt-1 text-2xl font-black text-slate-900">Practice</h2>
        <p className="mt-2 text-sm text-slate-600">Loading progress…</p>
      </section>
    );
  }

  const canFinalize = coreStats.complete && !gate.locked && !gate.passed;

  return (
    <div>
      {/* Controles principales */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setShowPendingOnly((v) => !v)}
            className={[
              "inline-flex h-10 items-center justify-center rounded-2xl border px-4 text-sm font-black transition",
              showPendingOnly
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
            ].join(" ")}
          >
            {showPendingOnly ? "Mostrando: pendientes" : "Filtro: solo pendientes"}
          </button>

          <button
            type="button"
            onClick={() => setShowExtension((v) => !v)}
            className={[
              "inline-flex h-10 items-center justify-center rounded-2xl border px-4 text-sm font-black transition",
              showExtension
                ? "border-violet-600 bg-violet-600 text-white"
                : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
            ].join(" ")}
          >
            {showExtension ? "Ampliación: ON ✨" : "Ampliación: OFF"}
          </button>

          <button
            type="button"
            onClick={resetProgressUI}
            className="inline-flex h-10 items-center justify-center rounded-2xl border border-rose-200 bg-rose-50 px-4 text-sm font-black text-rose-700 transition hover:bg-rose-100"
          >
            🔄 Reset progreso
          </button>
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between text-sm">
          <div className="font-black text-slate-900">
            Completados: {completedCount}/{data.items.length}
          </div>
          <div className="font-black text-violet-700">{percentAll}%</div>
        </div>

        <div className="mt-3 h-4 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-4 rounded-full bg-gradient-to-r from-violet-500 to-violet-600 transition-all duration-500 ease-out"
            style={{ width: `${percentAll}%` }}
          />
        </div>

        <div className="mt-2 text-xs text-slate-500">💾 Guardado automáticamente en este dispositivo</div>
      </div>

      {/* Gate 80% */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-xs font-extrabold tracking-wide text-slate-500">PRACTICE PASS (80%)</div>
            <div className="mt-1 text-base font-black text-slate-900">
              CORE: {pct(coreStats.accuracy)}% · {coreStats.correct}/{coreStats.attempted} correct de {coreTotal}
            </div>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <div>
                Ciclos usados: {gate.cyclesUsed}/{gate.maxCycles}
              </div>
              {gate.lastAccuracy !== null ? <div>Último resultado: {pct(gate.lastAccuracy)}%</div> : null}
              <div className="font-bold">✅ Requisito: completar todo el CORE con ≥{pct(gate.passThreshold)}%</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onFinalizePractice}
              disabled={!canFinalize}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-black text-white transition hover:brightness-95 disabled:opacity-50"
            >
              ✓ Finalizar práctica
            </button>

            {!gate.passed && !gate.locked ? (
              <button
                type="button"
                onClick={onResetCycle}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-violet-600 px-5 text-sm font-black text-white transition hover:brightness-95"
              >
                🔄 Reset ciclo
              </button>
            ) : null}

            {gate.passed ? (
              <span className="inline-flex h-11 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-5 text-sm font-black text-emerald-800">
                ✅ Práctica aprobada
              </span>
            ) : null}

            {gate.locked ? (
              <Link
                href={`/app/support/ticket?type=practice&goal=${encodeURIComponent(goal)}&level=${encodeURIComponent(
                  level
                )}&week=${encodeURIComponent(weekId)}`}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-rose-600 px-5 text-sm font-black text-white transition hover:bg-rose-700"
              >
                🎫 Solicitar reset
              </Link>
            ) : null}
          </div>
        </div>

        {!coreStats.complete ? (
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
            <span className="font-black">⚠️ Atención:</span> Para finalizar práctica debes intentar{" "}
            <strong>todos</strong> los {coreTotal} ejercicios CORE.
          </div>
        ) : null}
      </div>

      {/* Ejercicios */}
      <div className="mt-6 grid gap-5">
        {visibleItems.map((ex: any, idx: number) => {
          const done = !!progress.completed?.[ex.id];
          const answerData = progress.answers?.[ex.id];

          return (
            <div key={ex.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white">
                    {idx + 1}
                  </div>
                  <div className="text-xs font-extrabold text-slate-500">
                    {ex.type} · {ex.track || "core"}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {answerData && answerData.attempts > 0 ? (
                    <span className="text-xs font-bold text-slate-500">
                      {answerData.attempts} {answerData.attempts === 1 ? "intento" : "intentos"}
                    </span>
                  ) : null}

                  {done ? (
                    <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-800">
                      ✓ done
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-extrabold text-slate-700">
                      pending
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <ExerciseRenderer
                  ex={ex}
                  onResult={(isCorrect) => {
                    if (ex.track === "core") {
                      recordCoreResult({ goal, level, weekId, exerciseId: ex.id, isCorrect });
                      setGateTick((t) => t + 1);
                    }

                    const currentAnswers = progress.answers || {};
                    const currentData =
                      currentAnswers[ex.id] || ({ attempts: 0, correct: false, lastAttemptAt: 0 } as any);

                    const nextAnswers = {
                      ...currentAnswers,
                      [ex.id]: {
                        attempts: currentData.attempts + 1,
                        correct: isCorrect,
                        lastAttemptAt: Date.now(),
                      },
                    };

                    const nextProgress: ProgressState = {
                      ...progress,
                      answers: nextAnswers,
                      completed: isCorrect ? { ...progress.completed, [ex.id]: true } : progress.completed,
                    };

                    setProgress(nextProgress);
                    saveProgress(goal, level, weekId, nextProgress);
                  }}
                />
              </div>
            </div>
          );
        })}

        {visibleItems.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
            <div className="text-2xl">🎉</div>
            <div className="mt-2 text-sm font-bold text-slate-600">
              {showPendingOnly ? "No hay ejercicios pendientes. ¡Bien hecho!" : "No hay ejercicios disponibles."}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isWeekUnlocked, loadWeekProgress } from "@/lib/progress";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function WeekCard({
  goal,
  level,
  n,
  available,
}: {
  goal: string;
  level: string;
  n: number;
  available: boolean;
}) {
  const week = `semana-${pad2(n)}`;
  const weekHref = `/`;
  const progress = typeof window !== "undefined" ? loadWeekProgress(goal, level, week) : null;

  const pct = progress?.coreAccuracy != null ? Math.round(progress.coreAccuracy * 100) : null;
  const coreAttempted = progress?.core?.attempted ?? 0;
  const coreTotal = progress?.core?.total ?? 48;

  return (
    <div
      className={[
        "rounded-3xl border p-5 shadow-sm",
        available ? "border-slate-200 bg-white" : "border-slate-200 bg-slate-50",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-xs font-extrabold tracking-wide text-slate-500">SEMANA</div>
          <div className="mt-1 text-lg font-black text-slate-900">{week}</div>

          {pct !== null ? (
            <div className="mt-1 text-xs font-extrabold text-slate-600">
              CORE: {pct}%
            </div>
          ) : (
            <div className="mt-1 text-xs font-extrabold text-slate-400">CORE: —</div>
          )}
        </div>

        {available ? (
          <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-extrabold text-amber-800">
            disponible
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-slate-600">
            bloqueada
          </span>
        )}
      </div>

      <div className="mt-4 grid gap-2">
        {available ? (
          <Link
            href={weekHref}
            className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-coral-600 px-5 text-sm font-black text-white hover:brightness-95"
          >
            Abrir semana
          </Link>
        ) : (
          <div className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-black text-slate-400">
            Completa la semana anterior (≥80% core)
          </div>
        )}
      </div>
    </div>
  );
}

export default function CurriculumGridClient({ goal, level }: { goal: string; level: string }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const onStorage = () => setTick((t) => t + 1);
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 36 }, (_, i) => i + 1).map((n) => (
        <WeekCard
          key={`${n}-${tick}`}
          goal={goal}
          level={level}
          n={n}
          available={isWeekUnlocked(goal, level, n)}
        />
      ))}
    </div>
  );
}

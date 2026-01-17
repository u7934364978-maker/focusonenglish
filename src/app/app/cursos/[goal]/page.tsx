"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { LevelId, PlacementState } from "@/lib/gating";
import { canAccessLevel, loadPlacement } from "@/lib/gating";

type PageProps = {
  params: Promise<{ goal: string }>;
};

function LevelCard({
  goal,
  level,
  title,
  desc,
  href,
  primary,
  locked,
  recommended,
}: {
  goal: string;
  level: LevelId;
  title: string;
  desc: string;
  href: string;
  primary?: boolean;
  locked?: boolean;
  recommended?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border p-6 shadow-sm",
        locked ? "border-slate-200 bg-slate-50" : "border-slate-200 bg-white",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs font-extrabold tracking-wide text-slate-500">NIVEL</div>

        {recommended ? (
          <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-extrabold text-amber-800">
            recomendado
          </span>
        ) : locked ? (
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-slate-600">
            bloqueado
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-extrabold text-amber-800">
            disponible
          </span>
        )}
      </div>

      <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        {!locked ? (
          <Link
            href={href}
            className={[
              "inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-black",
              primary
                ? "bg-coral-600 text-white hover:brightness-95"
                : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
            ].join(" ")}
          >
            Ver curriculum
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => {
              const p = loadPlacement(goal);
              const target = p?.recommendedLevel || p?.unlockedMaxLevel || "a1";
              window.location.href = `/app/cursos/${goal}/${target}`;
            }}
            className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-black text-slate-700 hover:bg-slate-50"
          >
            Ir al nivel recomendado
          </button>
        )}

        {!locked ? (
          <Link
            href={`/app/cursos/${goal}/${level}/semana-01`}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-black text-white hover:bg-slate-800"
          >
            Empezar (Semana 01)
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default function GoalPage({ params }: PageProps) {
  // Next App Router pasa params como Promise en tu proyecto
  const [goal, setGoal] = useState<string>("");

  useEffect(() => {
    (async () => {
      const p = await params;
      setGoal(p.goal);
    })();
  }, [params]);

  const placement: PlacementState | null = useMemo(() => {
    if (!goal) return null;
    return loadPlacement(goal);
  }, [goal]);

  const recommendedLevel = placement?.recommendedLevel || null;

  const levels: { level: LevelId; title: string; desc: string }[] = [
    { level: "a1", title: "A1", desc: "Base: estructura simple, frases esenciales y tono educado." },
    { level: "a2", title: "A2", desc: "Intermedio bajo: más variaciones, coordinación y follow-ups." },
    { level: "b1", title: "B1", desc: "Work neutral: claridad, requests, follow-ups, recap y ownership." },
    { level: "b2", title: "B2", desc: "Advanced workplace: matiz, diplomacia, precisión y concisión." },
    { level: "c1", title: "C1", desc: "Professional: registro alto, claridad contractual, escalations y control del tono." },
    { level: "c2", title: "C2", desc: "Expert: máxima precisión, negociación, framing y redacción ejecutiva." },
  ];

  const heading = goal === "emailing" ? "Emailing (inglés laboral)" : goal;

  if (!goal) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-sm text-slate-600">Loading…</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <nav className="text-[12px] font-extrabold text-slate-500">
        <Link className="hover:text-slate-700" href="/">
          Home
        </Link>{" "}
        /{" "}
        <Link className="hover:text-slate-700" href="/app/cursos">
          Cursos
        </Link>{" "}
        / <span className="text-slate-700">{goal}</span>
      </nav>

      <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900">{heading}</h1>

      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
        Haz el test de nivel para recibir una recomendación y bloquear niveles no recomendados hasta que avances.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/app/placement/${goal}`}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-coral-600 px-5 text-sm font-black text-white hover:brightness-95"
        >
          Hacer placement test
        </Link>

        {placement ? (
          <div className="inline-flex h-11 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 px-5 text-sm font-black text-amber-800">
            Recomendado: {placement.recommendedLevel.toUpperCase()} · Máximo desbloqueado:{" "}
            {placement.unlockedMaxLevel.toUpperCase()}
          </div>
        ) : (
          <div className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-black text-slate-700">
            Sin test aún (modo libre)
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {levels.map((l) => {
          const locked = placement ? !canAccessLevel(goal, l.level) : false;
          const recommended = recommendedLevel === l.level;

          return (
            <LevelCard
              key={l.level}
              goal={goal}
              level={l.level}
              title={l.title}
              desc={l.desc}
              href={`/app/cursos/${goal}/${l.level}`}
              primary={recommended}
              locked={locked}
              recommended={recommended}
            />
          );
        })}
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <div className="text-xs font-extrabold tracking-wide text-slate-500">ACCESO RÁPIDO</div>
        <div className="mt-2 flex flex-wrap gap-3">
          {placement ? (
            <>
              <Link
                href={`/app/cursos/${goal}/${placement.recommendedLevel}`}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-black text-slate-900 hover:bg-slate-50"
              >
                Ir al nivel recomendado
              </Link>
              <Link
                href={`/app/cursos/${goal}/${placement.recommendedLevel}/semana-01`}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-black text-white hover:bg-slate-800"
              >
                Abrir Semana 01 (recomendado)
              </Link>
            </>
          ) : (
            <>
              <Link
                href={`/app/cursos/${goal}/a1`}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-black text-slate-900 hover:bg-slate-50"
              >
                Curriculum A1
              </Link>
              <Link
                href={`/app/cursos/${goal}/a1/semana-01`}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-black text-white hover:bg-slate-800"
              >
                Abrir Semana 01 (A1)
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

"use client";

import { useMemo, useState, use } from "react";
import Link from "next/link";
import type { LevelId, PlacementState } from "@/lib/gating";
import { savePlacement } from "@/lib/gating";

type PageProps = {
  params: Promise<{ goal: string }>;
};

type Q = {
  id: string;
  level: LevelId;
  prompt: string;
  options: string[];
  answerIndex: number;
};

const LEVEL_ORDER: LevelId[] = ["a1", "a2", "b1", "b2", "c1", "c2"];

const QUESTIONS: Q[] = [
  // A1 (4)
  { id: "a1-1", level: "a1", prompt: "Choose the best greeting:", options: ["Yo Maria,", "Hi Maria,", "To whom it may concern,"], answerIndex: 1 },
  { id: "a1-2", level: "a1", prompt: "Pick the best request:", options: ["Send me it.", "Can you send it please?", "You must send it now."], answerIndex: 1 },
  { id: "a1-3", level: "a1", prompt: "Best closing:", options: ["Thanks,", "Bye!!!", "Later dude,"], answerIndex: 0 },
  { id: "a1-4", level: "a1", prompt: "Meaning of 'attached':", options: ["in the email as a file", "angry", "late"], answerIndex: 0 },

  // A2 (4)
  { id: "a2-1", level: "a2", prompt: "Best purpose line:", options: ["This email is many things.", "I’m writing to ask about the schedule.", "Ok."], answerIndex: 1 },
  { id: "a2-2", level: "a2", prompt: "Polite option:", options: ["Could you help me?", "Help me now.", "Do it."], answerIndex: 0 },
  { id: "a2-3", level: "a2", prompt: "Best follow-up:", options: ["Why no reply?", "Just checking if you saw this.", "You ignored me."], answerIndex: 1 },
  { id: "a2-4", level: "a2", prompt: "Best subject:", options: ["Question", "Quick update: timeline", "READ NOW!!!"], answerIndex: 1 },

  // B1 (4)
  { id: "b1-1", level: "b1", prompt: "Best soft deadline:", options: ["I need this now.", "If possible, could you send it by Friday?", "You are late."], answerIndex: 1 },
  { id: "b1-2", level: "b1", prompt: "Best polite request:", options: ["Approve it.", "Could you please review and approve it by Thursday?", "You must approve it."], answerIndex: 1 },
  { id: "b1-3", level: "b1", prompt: "Best scheduling:", options: ["Tuesday 11.", "Would Tuesday at 11:00 work for you?", "Meet me Tuesday."], answerIndex: 1 },
  { id: "b1-4", level: "b1", prompt: "Best 'next step':", options: ["Next steps are random.", "As a next step, we’d like to confirm the timeline.", "Do the next step."], answerIndex: 1 },

  // B2 (4)
  { id: "b2-1", level: "b2", prompt: "Best hedging:", options: ["Send it.", "Would you mind sending it when you have a moment?", "Now."], answerIndex: 1 },
  { id: "b2-2", level: "b2", prompt: "Best diplomacy:", options: ["This is unacceptable.", "Could you clarify the status when you can?", "Why did you do that?"], answerIndex: 1 },
  { id: "b2-3", level: "b2", prompt: "Best concise rewrite:", options: ["We are writing this email to inform you...", "I’m writing to confirm the next steps.", "This email is about many things."], answerIndex: 1 },
  { id: "b2-4", level: "b2", prompt: "Best tone:", options: ["You must comply.", "Please let me know if this works for you.", "Do it ASAP."], answerIndex: 1 },

  // C1 (4)
  { id: "c1-1", level: "c1", prompt: "Best nuance:", options: ["We need this.", "At your earliest convenience, could you share an update?", "Reply now."], answerIndex: 1 },
  { id: "c1-2", level: "c1", prompt: "Best structured escalation:", options: ["This is a mess.", "If we don’t hear back by Friday, we’ll proceed with option B.", "You are wrong."], answerIndex: 1 },
  { id: "c1-3", level: "c1", prompt: "Best clarity:", options: ["Please revert.", "Please revert to the previous version and confirm once done.", "Fix it."], answerIndex: 1 },
  { id: "c1-4", level: "c1", prompt: "Best register:", options: ["Hey", "Dear Maria,", "Yo"], answerIndex: 1 },

  // C2 (4)
  { id: "c2-1", level: "c2", prompt: "Best advanced phrasing:", options: ["Do it.", "Would you be amenable to a brief call to align on scope?", "Now."], answerIndex: 1 },
  { id: "c2-2", level: "c2", prompt: "Best precise tone:", options: ["This is bad.", "To avoid any ambiguity, could you confirm the final deliverable by EOD Friday?", "Whatever."], answerIndex: 1 },
  { id: "c2-3", level: "c2", prompt: "Best contract-like clarity:", options: ["We proceed.", "Absent a response by Friday, we will consider this approved.", "Ok."], answerIndex: 1 },
  { id: "c2-4", level: "c2", prompt: "Best high-level register:", options: ["Hi", "I would appreciate your guidance on this matter.", "Yo"], answerIndex: 1 }
];

function recommendLevel(scores: Record<LevelId, number>) {
  // Regla simple:
  // - buscamos el nivel más alto con >=3/4
  // - si no, el más alto con >=2/4
  // - si no, A1
  for (let pass = 3; pass >= 2; pass--) {
    const ok = LEVEL_ORDER.filter((lvl) => (scores[lvl] || 0) >= pass);
    if (ok.length) return ok[ok.length - 1];
  }
  return "a1";
}

export default function PlacementGoalPage({ params }: PageProps) {
  const { goal } = use(params);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);
  const [recommended, setRecommended] = useState<LevelId | null>(null);

  const total = QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;

  const scores = useMemo(() => {
    const s: Record<LevelId, number> = { a1: 0, a2: 0, b1: 0, b2: 0, c1: 0, c2: 0 };
    for (const q of QUESTIONS) {
      const a = answers[q.id];
      if (a === undefined) continue;
      if (a === q.answerIndex) s[q.level] += 1;
    }
    return s;
  }, [answers]);

  const canSubmit = answeredCount === total;

  function submit() {
    if (!goal) return;
    const rec = recommendLevel(scores);
    setRecommended(rec);
    setDone(true);

    const state: PlacementState = {
      goal,
      recommendedLevel: rec,
      unlockedMaxLevel: rec,
      updatedAt: Date.now(),
    };
    savePlacement(state);
  }

  function goToRecommended() {
    if (!goal || !recommended) return;
    window.location.href = `/app/cursos/${goal}/${recommended}`;
  }

  if (!goal) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-14">
        <p className="text-sm text-slate-600">Loading…</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <nav className="text-[12px] font-extrabold text-slate-500">
        <Link className="hover:text-slate-700" href="/">Home</Link> /{" "}
        <Link className="hover:text-slate-700" href="/app/cursos">Cursos</Link> /{" "}
        <Link className="hover:text-slate-700" href={`/app/cursos/${goal}`}>{goal}</Link> /{" "}
        <span className="text-slate-700">Placement test</span>
      </nav>

      <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900">
        Placement test — {goal} (A1–C2)
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        Responde todas las preguntas. Al final te recomendamos un nivel y bloqueamos los demás hasta que avances.
      </p>

      {!done ? (
        <>
          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between text-sm">
              <div className="font-black text-slate-900">Progreso</div>
              <div className="font-black text-slate-700">{answeredCount}/{total}</div>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-slate-100">
              <div
                className="h-3 rounded-full bg-coral-600 transition-all"
                style={{ width: `${Math.round((answeredCount / total) * 100)}%` }}
              />
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            {QUESTIONS.map((q, idx) => (
              <div key={q.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-extrabold tracking-wide text-slate-500">
                  Q{idx + 1} · target {q.level.toUpperCase()}
                </div>
                <div className="mt-2 text-sm font-black text-slate-900">{q.prompt}</div>

                <div className="mt-3 grid gap-2">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setAnswers((a) => ({ ...a, [q.id]: i }))}
                      className={[
                        "text-left rounded-2xl border px-4 py-3 text-sm font-semibold",
                        answers[q.id] === i ? "border-coral-400 bg-coral-50" : "border-slate-200 bg-white hover:bg-slate-50",
                      ].join(" ")}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={submit}
              disabled={!canSubmit}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-black text-white disabled:opacity-50"
            >
              Ver recomendación
            </button>
          </div>
        </>
      ) : (
        <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <div className="text-xs font-extrabold tracking-wide text-amber-800">RESULTADO</div>
          <h2 className="mt-2 text-2xl font-black text-amber-900">
            Nivel recomendado: {recommended?.toUpperCase()}
          </h2>
          <p className="mt-2 text-sm text-amber-900">
            A partir de ahora, solo podrás acceder a este nivel y los que desbloquees avanzando (nivel siguiente se desbloquea al aprobar Semana 36).
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={goToRecommended}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-amber-700 px-5 text-sm font-black text-white hover:bg-amber-800"
            >
              Ir al nivel recomendado
            </button>

            <Link
              href={`/app/cursos/${goal}`}
              className="inline-flex h-11 items-center justify-center rounded-xl border border-amber-200 bg-white px-5 text-sm font-black text-amber-900 hover:bg-amber-50"
            >
              Volver a niveles
            </Link>
          </div>

          <div className="mt-4 rounded-2xl border border-amber-200 bg-white p-4 text-sm text-slate-700">
            <div className="font-black text-slate-900">Detalle (aciertos por banda)</div>
            <div className="mt-2 grid gap-1">
              {Object.entries(scores).map(([lvl, s]) => (
                <div key={lvl} className="flex items-center justify-between">
                  <span>{lvl.toUpperCase()}</span>
                  <span className="font-black">{s}/4</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

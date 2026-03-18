"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SupportTicketPage() {
  const [goal, setGoal] = useState("emailing");
  const [level, setLevel] = useState("b1");
  const [weekId, setWeekId] = useState("semana-01");
  const [type, setType] = useState<"practice" | "exam">("practice");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const ticketText = useMemo(() => {
    return [
      "RESET REQUEST (manual)",
      `Type: ${type}`,
      `Goal: ${goal}`,
      `Level: ${level}`,
      `Week: ${weekId}`,
      "",
      "Context:",
      "- I have exhausted the allowed reset cycles.",
      "- Please decide whether to grant extra resets or move me to a lower level.",
      "",
      "Notes:",
      notes || "(none)",
    ].join("\n");
  }, [goal, level, weekId, type, notes]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(ticketText);
      alert("Ticket copiado al portapapeles.");
    } catch {
      alert("No se pudo copiar automáticamente. Copia el texto manualmente.");
    }
  }

  async function submitTicket() {
    if (submitting) return;
    setSubmitting(true);
    setTicketId(null);
    try {
      const subject = `Support ticket - ${type} - ${goal} - ${level}`;
      const res = await fetch("/api/support/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, content: ticketText }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        alert(err?.error || "No se pudo enviar el ticket.");
        return;
      }

      const data = await res.json();
      setTicketId(data?.ticketId ?? null);
    } catch {
      alert("Error al enviar el ticket.");
    } finally {
      setSubmitting(false);
    }
  }

  // Populate form fields from query params (so the student button can prefill it).
  useEffect(() => {
    const t = searchParams.get("type");
    const g = searchParams.get("goal");
    const l = searchParams.get("level");
    const w = searchParams.get("week");

    if (t === "practice" || t === "exam") setType(t);
    if (g) setGoal(g);
    if (l) setLevel(l);
    if (w) setWeekId(w);
  }, [searchParams]);

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <nav className="text-[12px] font-extrabold text-slate-500">
        <Link className="hover:text-slate-700" href="/">
          Home
        </Link>{" "}
        /{" "}
        <Link className="hover:text-slate-700" href="/planes">
          Cursos
        </Link>{" "}
        / <span className="text-slate-700">Support ticket</span>
      </nav>

      <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Solicitar reset (ticket)</h1>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Has agotado los ciclos de reset permitidos. Envía este ticket al equipo para que decidamos si concedemos más resets
        o si conviene reubicarte a un nivel anterior.
      </p>

      <div className="mt-6 grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-2 sm:grid-cols-2">
          <label className="text-sm font-black text-slate-800">
            Goal
            <input
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="mt-2 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm font-semibold"
            />
          </label>

          <label className="text-sm font-black text-slate-800">
            Level
            <input
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="mt-2 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm font-semibold"
            />
          </label>

          <label className="text-sm font-black text-slate-800">
            WeekId
            <input
              value={weekId}
              onChange={(e) => setWeekId(e.target.value)}
              className="mt-2 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm font-semibold"
            />
          </label>

          <label className="text-sm font-black text-slate-800">
            Type
            <select
              value={type}
              onChange={(e) => setType(e.target.value as any)}
              className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold"
            >
              <option value="practice">practice (80%)</option>
              <option value="exam">exam (50%)</option>
            </select>
          </label>
        </div>

        <label className="text-sm font-black text-slate-800">
          Notas (opcional)
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold"
            placeholder="Explica brevemente qué pasó / qué necesitas."
          />
        </label>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={copy}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-black text-white hover:bg-slate-800"
          >
            Copiar ticket
          </button>
          <button
            type="button"
            onClick={submitTicket}
            disabled={submitting}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-coral-600 px-5 text-sm font-black text-white hover:bg-coral-700 disabled:opacity-60"
          >
            {submitting ? "Enviando..." : "Enviar ticket real"}
          </button>

          <Link
            href="/planes"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-black text-slate-900 hover:bg-slate-50"
          >
            Volver a cursos
          </Link>
        </div>

        {ticketId && (
          <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm font-bold text-emerald-800">
            Ticket enviado correctamente. ID: {ticketId}
          </p>
        )}

        <pre className="whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-800">
{ticketText}
        </pre>
      </div>
    </main>
  );
}

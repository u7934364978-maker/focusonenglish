"use client";

import { useEffect, useState } from "react";
import type { ExercisesFile } from "./types";
import ExercisesPanel from "./ExercisesPanel.client";

export default function PracticePanel({
  data,
  storageKey,
}: {
  data: ExercisesFile;
  storageKey: string; // ejemplo: "practice-open:emailing:b1:semana-01"
}) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === "0") setOpen(false);
      if (saved === "1") setOpen(true);
    } catch {
      // ignore
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, open ? "1" : "0");
    } catch {
      // ignore
    }
  }, [open, storageKey]);

  return (
    <section className="mt-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-[12px] font-extrabold tracking-wide text-slate-500">PRACTICE</div>
            <h2 className="mt-1 text-2xl font-black text-slate-900">Practice</h2>
            {data.title ? <p className="mt-1 text-sm text-slate-600">{data.title}</p> : null}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={[
              "inline-flex h-10 items-center justify-center rounded-2xl border px-4 text-sm font-black",
              open
                ? "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                : "border-slate-900 bg-slate-900 text-white",
            ].join(" ")}
          >
            {open ? "Ocultar práctica" : "Mostrar práctica"}
          </button>
        </div>

        {open ? (
          <div className="mt-6">
            <ExercisesPanel data={data} />
          </div>
        ) : (
          <div className="mt-4 text-sm text-slate-600">
            Práctica oculta. Pulsa “Mostrar práctica” para continuar.
          </div>
        )}
      </div>
    </section>
  );
}

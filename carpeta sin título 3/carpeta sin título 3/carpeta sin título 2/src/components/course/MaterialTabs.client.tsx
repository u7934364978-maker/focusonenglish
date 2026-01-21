"use client";

import { useEffect, useMemo, useState } from "react";
import Markdown from "@/components/course/Markdown";

type TabKey = "grammar" | "vocabulary" | "reading" | "writing";

export default function MaterialTabs({
  storageKey,
  grammar,
  vocabulary,
  reading,
  writing,
}: {
  storageKey: string; // ejemplo: "material-tabs:emailing:b1:semana-01"
  grammar: string;
  vocabulary: string;
  reading: string;
  writing: string;
}) {
  const tabs = useMemo(
    () =>
      [
        { key: "grammar" as const, label: "Grammar", icon: "📘", content: grammar },
        { key: "vocabulary" as const, label: "Vocab", icon: "🧠", content: vocabulary },
        { key: "reading" as const, label: "Reading", icon: "📩", content: reading },
        { key: "writing" as const, label: "Writing", icon: "✍️", content: writing },
      ] satisfies Array<{ key: TabKey; label: string; icon: string; content: string }>,
    [grammar, vocabulary, reading, writing]
  );

  const [active, setActive] = useState<TabKey>("grammar");

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey) as TabKey | null;
      if (saved && tabs.some((t) => t.key === saved)) setActive(saved);
    } catch {
      // ignore
    }
  }, [storageKey, tabs]);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, active);
    } catch {
      // ignore
    }
  }, [storageKey, active]);

  const current = tabs.find((t) => t.key === active) || tabs[0];

  return (
    <section className="mt-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="text-[12px] font-extrabold tracking-wide text-slate-500">MATERIAL</div>
            <h2 className="mt-1 text-2xl font-black text-slate-900">Material</h2>
            <p className="mt-1 text-sm text-slate-600">
              Pestañas rápidas (se guarda tu última pestaña).
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => {
              const isActive = t.key === active;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActive(t.key)}
                  className={[
                    "inline-flex h-10 items-center justify-center rounded-2xl border px-4 text-sm font-black",
                    isActive
                      ? "border-violet-600 bg-violet-600 text-white"
                      : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
                  ].join(" ")}
                >
                  <span className="mr-2">{t.icon}</span>
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-black text-slate-900">
            {current.icon} {current.label}
          </div>

          <div className="mt-4">
            <Markdown content={current.content} />
          </div>
        </div>
      </div>
    </section>
  );
}

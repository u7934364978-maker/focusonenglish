"use client";

import { useMemo, useState } from "react";
import Markdown from "@/components/course/Markdown";

type TabKey = "grammar" | "vocabulary" | "reading" | "writing";

const TAB_LABEL: Record<TabKey, string> = {
  grammar: "Grammar",
  vocabulary: "Vocabulary",
  reading: "Reading",
  writing: "Writing",
};

export default function StudyTabs({
  title,
  outcomes,
  grammar,
  vocabulary,
  reading,
  writing,
}: {
  title: string;
  outcomes?: string[];
  grammar: string;
  vocabulary: string;
  reading: string;
  writing: string;
}) {
  const [tab, setTab] = useState<TabKey>("grammar");

  const content = useMemo(() => {
    if (tab === "grammar") return grammar;
    if (tab === "vocabulary") return vocabulary;
    if (tab === "reading") return reading;
    return writing;
  }, [tab, grammar, vocabulary, reading, writing]);

  return (
    <section className="mt-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="text-[12px] font-extrabold tracking-wide text-slate-500">
            STUDY
          </div>
          <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900">
            Material
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            {title}
          </p>
        </div>

        {outcomes?.length ? (
          <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 sm:w-[360px]">
            <div className="text-xs font-extrabold text-slate-500">OUTCOMES</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              {outcomes.slice(0, 4).map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
        <div className="flex flex-wrap gap-2 p-2">
          {(Object.keys(TAB_LABEL) as TabKey[]).map((k) => {
            const active = tab === k;
            return (
              <button
                key={k}
                type="button"
                onClick={() => setTab(k)}
                className={[
                  "inline-flex h-10 items-center justify-center rounded-2xl px-4 text-sm font-black transition",
                  active
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                ].join(" ")}
              >
                {TAB_LABEL[k]}
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl bg-white p-5">
          <Markdown content={content} />
        </div>
      </div>
    </section>
  );
}

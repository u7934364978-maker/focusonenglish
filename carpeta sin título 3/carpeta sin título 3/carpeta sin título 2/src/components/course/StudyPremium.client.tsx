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

function extractLines(md: string, starts: string[]) {
  const lines = md.split("\n").map(l => l.trim());
  return lines.filter(l => starts.some(s => l.startsWith(s)));
}

function extractPhrases(md: string) {
  // Extract simple reusable lines (very MVP)
  const lines = md.split("\n").map(l => l.trim());
  return lines
    .filter(l =>
      l &&
      (l.startsWith("- ") || l.startsWith("• ")) &&
      /(please|can you|could you|would you|just to confirm|any update|sorry)/i.test(l)
    )
    .map(l => l.replace(/^[-•]\s*/, ""))
    .slice(0, 12);
}

function Chip({ text }: { text: string }) {
  return (
    <button
      type="button"
      onClick={() => navigator.clipboard.writeText(text)}
      className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-extrabold text-slate-800 hover:bg-slate-50"
      title="Click to copy"
    >
      {text}
    </button>
  );
}

export default function StudyPremium({
  title,
  topics,
  outcomes,
  grammar,
  vocabulary,
  reading,
  writing,
}: {
  title: string;
  topics?: string[];
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

  const tips = useMemo(() => extractLines(content, ["✅", "Tip:", "A2 tip:", "A1 tip:"]).slice(0, 6), [content]);
  const mistakes = useMemo(() => extractLines(content, ["❌"]).slice(0, 6), [content]);
  const phrases = useMemo(() => extractPhrases(content), [content]);

  return (
    <section className="mt-8">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
        <div className="text-[12px] font-extrabold tracking-wide text-slate-500">STUDY</div>
        <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900">Material</h2>
        <p className="mt-1 text-sm text-slate-600">{title}</p>

        {/* Key takeaways */}
        {(topics?.length || outcomes?.length) ? (
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {topics?.length ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs font-extrabold text-slate-500">KEY TOPICS</div>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
                  {topics.slice(0, 5).map(t => <li key={t}>{t}</li>)}
                </ul>
              </div>
            ) : null}

            {outcomes?.length ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs font-extrabold text-slate-500">OUTCOMES</div>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
                  {outcomes.slice(0, 5).map(o => <li key={o}>{o}</li>)}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}

        {/* Tabs */}
        <div className="mt-5 flex flex-wrap gap-2">
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
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50",
                ].join(" ")}
              >
                {TAB_LABEL[k]}
              </button>
            );
          })}
        </div>

        {/* Highlights row */}
        {(tips.length || mistakes.length) ? (
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {tips.length ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="text-xs font-extrabold text-emerald-800">TIPS</div>
                <ul className="mt-2 list-disc pl-5 text-sm text-emerald-900">
                  {tips.map((t, i) => <li key={i}>{t.replace(/^✅\s*/, "")}</li>)}
                </ul>
              </div>
            ) : null}

            {mistakes.length ? (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
                <div className="text-xs font-extrabold text-rose-800">COMMON MISTAKES</div>
                <ul className="mt-2 list-disc pl-5 text-sm text-rose-900">
                  {mistakes.map((m, i) => <li key={i}>{m.replace(/^❌\s*/, "")}</li>)}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}

        {/* Copyable phrases */}
        {phrases.length ? (
          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-xs font-extrabold text-slate-500">READY-TO-COPY</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {phrases.map((p) => <Chip key={p} text={p} />)}
            </div>
            <div className="mt-2 text-xs text-slate-500">Click a chip to copy.</div>
          </div>
        ) : null}

        {/* Main content */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          <Markdown content={content} />
        </div>
      </div>
    </section>
  );
}

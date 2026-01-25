"use client";

import { useState } from "react";
import type { ExerciseItem } from "./types";

interface Props {
  ex: ExerciseItem;
  onResult: (isCorrect: boolean) => void;
}

export default function ExerciseRenderer({ ex, onResult }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [fillAnswers, setFillAnswers] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  function handleMultipleChoice(idx: number) {
    if (submitted) return;
    setSelectedOption(idx);
    const correct = idx === (ex as any).answerIndex;
    setIsCorrect(correct);
    setSubmitted(true);
    onResult(correct);
  }

  function handleFillBlanks() {
    if (submitted) return;
    const correctAnswers = (ex as any).answers.map((a: string) => a.toLowerCase().trim());
    const userAnswers = fillAnswers.map((a: string) => (a || "").toLowerCase().trim());
    
    const allCorrect = correctAnswers.every((a: string, i: number) => a === userAnswers[i]);
    setIsCorrect(allCorrect);
    setSubmitted(true);
    onResult(allCorrect);
  }

  // Basic implementation for now, can be expanded for each type
  if (ex.type === "multipleChoice") {
    return (
      <div className="space-y-4">
        <p className="text-lg font-medium text-slate-800">{ex.prompt}</p>
        <div className="grid gap-2">
          {ex.options.map((opt, i) => {
            let statusClass = "border-slate-200 hover:border-slate-300 bg-white";
            if (submitted) {
              if (i === ex.answerIndex) statusClass = "border-green-500 bg-green-50 text-green-700";
              else if (i === selectedOption) statusClass = "border-red-500 bg-red-50 text-red-700";
              else statusClass = "border-slate-100 bg-slate-50 text-slate-400";
            } else if (i === selectedOption) {
              statusClass = "border-slate-900 bg-slate-900 text-white";
            }

            return (
              <button
                key={i}
                onClick={() => handleMultipleChoice(i)}
                disabled={submitted}
                className={`rounded-xl border p-4 text-left text-sm font-bold transition ${statusClass}`}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {submitted && ex.explanation && (
          <div className="rounded-xl bg-slate-100 p-4 text-sm text-slate-700">
            <span className="font-black">Explanation:</span> {ex.explanation}
          </div>
        )}
      </div>
    );
  }

  if (ex.type === "fillBlanks") {
    const parts = ex.text.split("___");
    return (
      <div className="space-y-4">
        {ex.instructions && <p className="text-sm font-bold text-slate-500 uppercase tracking-tight">{ex.instructions}</p>}
        <div className="leading-loose text-slate-800">
          {parts.map((part, i) => (
            <span key={i}>
              {part}
              {i < parts.length - 1 && (
                <input
                  type="text"
                  value={fillAnswers[i] || ""}
                  onChange={(e) => {
                    const next = [...fillAnswers];
                    next[i] = e.target.value;
                    setFillAnswers(next);
                  }}
                  disabled={submitted}
                  className={`mx-1 inline-block w-32 rounded-lg border px-2 py-1 text-center font-bold outline-none transition ${
                    submitted
                      ? isCorrect
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-red-500 bg-red-50 text-red-700"
                      : "border-slate-300 focus:border-slate-900"
                  }`}
                />
              )}
            </span>
          ))}
        </div>
        {!submitted && (
          <button
            onClick={handleFillBlanks}
            className="rounded-xl bg-slate-900 px-6 py-2 text-sm font-black text-white hover:brightness-95"
          >
            Check Answers
          </button>
        )}
        {submitted && ex.explanation && (
          <div className="rounded-xl bg-slate-100 p-4 text-sm text-slate-700">
            <span className="font-black">Explanation:</span> {ex.explanation}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500 italic">
      Renderer for "{ex.type}" not fully implemented yet.
    </div>
  );
}

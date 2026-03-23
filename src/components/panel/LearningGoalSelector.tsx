"use client";

import { useState } from "react";

type Goal = "general" | "travel" | "professional";

const GOAL_LABELS: Record<Goal, string> = {
  general: "General y exámenes",
  travel: "Inglés para viajar",
  professional: "Inglés profesional",
};

export default function LearningGoalSelector({
  initialGoal,
}: {
  initialGoal: Goal;
}) {
  const [goal, setGoal] = useState<Goal>(initialGoal);
  const [saving, setSaving] = useState(false);

  const setLearningGoal = async (nextGoal: Goal) => {
    if (nextGoal === goal || saving) return;
    setSaving(true);
    try {
      const res = await fetch("/api/profile/learning-goal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal: nextGoal }),
      });
      if (!res.ok) throw new Error("No se pudo guardar el objetivo");
      setGoal(nextGoal);
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {(Object.keys(GOAL_LABELS) as Goal[]).map((item) => {
        const active = item === goal;
        return (
          <button
            key={item}
            type="button"
            onClick={() => setLearningGoal(item)}
            disabled={saving}
            className={`px-3 py-2 rounded-lg text-xs font-bold border transition ${
              active
                ? "bg-coral-600 text-white border-coral-600"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
            } ${saving ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {GOAL_LABELS[item]}
          </button>
        );
      })}
    </div>
  );
}


"use client";

import { useEffect } from "react";
import { canAccessLevel, loadPlacement } from "@/lib/gating";

export default function LevelGateClient({
  goal,
  level,
  children,
}: {
  goal: string;
  level: string;
  children: React.ReactNode;
}) {
  const ok = canAccessLevel(goal, level);

  useEffect(() => {
    if (ok) return;
    const p = loadPlacement(goal);
    const target = p?.recommendedLevel || p?.unlockedMaxLevel || "a1";
    window.location.replace(`/app/cursos/${goal}/${target}`);
  }, [ok, goal]);

  if (!ok) return null;
  return <>{children}</>;
}

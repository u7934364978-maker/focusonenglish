"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { loadPlacement } from "@/lib/gating";

export default function HomePlacementCTAClient({ goal }: { goal: string }) {
  const [hasPlacement, setHasPlacement] = useState(false);
  const [recommended, setRecommended] = useState<string | null>(null);

  useEffect(() => {
    const p = loadPlacement(goal);
    if (p?.recommendedLevel) {
      setHasPlacement(true);
      setRecommended(p.recommendedLevel);
    } else {
      setHasPlacement(false);
      setRecommended(null);
    }
  }, [goal]);

  const recLabel = useMemo(() => (recommended ? recommended.toUpperCase() : null), [recommended]);

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {!hasPlacement ? (
        <>
          <Link
            href={`/app/placement/${goal}`}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-amber-600 px-5 text-sm font-black text-white hover:brightness-110"
          >
            Hacer test de nivel (recomendado)
          </Link>

          <Link
            href={`/app/cursos/${goal}`}
            className="inline-flex h-11 items-center justify-center rounded-xl border border-white/10 bg-black/20 px-5 text-sm font-black text-white hover:bg-black/30"
          >
            Ver niveles
          </Link>
        </>
      ) : (
        <>
          <Link
            href={`/app/cursos/${goal}/${recommended}/semana-01`}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-amber-600 px-5 text-sm font-black text-white hover:brightness-110"
          >
            Continuar en tu nivel ({recLabel}) · Semana 01
          </Link>

          <Link
            href={`/app/cursos/${goal}/${recommended}`}
            className="inline-flex h-11 items-center justify-center rounded-xl border border-white/10 bg-black/20 px-5 text-sm font-black text-white hover:bg-black/30"
          >
            Ver curriculum ({recLabel})
          </Link>

          <Link
            href={`/app/placement/${goal}`}
            className="inline-flex h-11 items-center justify-center rounded-xl border border-white/10 bg-black/20 px-5 text-sm font-black text-white hover:bg-black/30"
          >
            Rehacer test
          </Link>
        </>
      )}
    </div>
  );
}

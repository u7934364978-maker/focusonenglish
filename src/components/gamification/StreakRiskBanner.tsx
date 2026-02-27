'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Flame, X } from 'lucide-react';

interface StreakRiskBannerProps {
  streakDays: number;
  nextLessonHref: string;
}

export default function StreakRiskBanner({ streakDays, nextLessonHref }: StreakRiskBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('streak_risk_dismissed', 'true');
    }
  };

  if (dismissed) return null;

  return (
    <div className="w-full bg-amber-500 text-white px-4 py-3 flex items-center justify-between gap-4 shadow-md">
      <div className="flex items-center gap-3">
        <Flame className="h-5 w-5 text-white flex-shrink-0" aria-hidden="true" />
        <span className="font-bold text-sm">
          ⚠️ Tu racha de {streakDays} día{streakDays !== 1 ? 's' : ''} está en riesgo.
        </span>
        <Link
          href={nextLessonHref}
          className="text-sm font-semibold underline hover:text-amber-100 transition-colors"
        >
          Continúa aquí →
        </Link>
      </div>
      <button
        onClick={handleDismiss}
        aria-label="Cerrar aviso de racha"
        className="flex-shrink-0 p-1 rounded hover:bg-amber-600 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

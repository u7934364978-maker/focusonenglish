'use client';

import { RotateCcw } from 'lucide-react';

interface RepairModeBannerProps {
  remainingCount: number;
}

export default function RepairModeBanner({ remainingCount }: RepairModeBannerProps) {
  return (
    <div className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2.5 flex items-center gap-3 shadow-md shadow-amber-200/50">
      <RotateCcw className="w-4 h-4 flex-shrink-0 animate-spin-slow" />
      <span className="font-bold text-sm flex-1">
        Modo Repaso — Estás revisando los ejercicios fallados
      </span>
      <span className="text-xs font-black bg-white/20 rounded-full px-3 py-1 flex-shrink-0 tabular-nums">
        {remainingCount} pendiente{remainingCount !== 1 ? 's' : ''}
      </span>
    </div>
  );
}

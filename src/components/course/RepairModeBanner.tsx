'use client';

interface RepairModeBannerProps {
  remainingCount: number;
}

export default function RepairModeBanner({ remainingCount }: RepairModeBannerProps) {
  return (
    <div className="sticky top-0 z-40 w-full bg-amber-500 text-white px-4 py-2 flex items-center justify-between shadow-md">
      <span className="font-bold text-sm">
        Modo Repaso 🔄 — Estás revisando los ejercicios fallados.
      </span>
      <span className="text-sm font-semibold bg-amber-600 rounded-full px-3 py-0.5">
        {remainingCount} ejercicio{remainingCount !== 1 ? 's' : ''} pendiente{remainingCount !== 1 ? 's' : ''}
      </span>
    </div>
  );
}

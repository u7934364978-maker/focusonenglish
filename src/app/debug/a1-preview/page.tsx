'use client';

import React from 'react';
import { Home, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function A1PreviewPage() {
  const units = Array.from({ length: 60 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <nav className="bg-white border-b p-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Home className="w-6 h-6 text-slate-600" />
          </Link>
          <h1 className="font-black text-xl text-slate-800 uppercase tracking-tight flex items-center gap-3">
            <BookOpen className="w-6 h-6" />
            A1 PREVIEW
            <span className="w-px h-6 bg-slate-200" />
            <span className="text-slate-400 font-medium text-sm">
              {units.length} UNIDADES
            </span>
          </h1>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black text-slate-800 mb-2">Selecciona una unidad</h2>
          <p className="text-slate-600">Elige una unidad de A1 para previsualizar los ejercicios</p>
        </div>

        {/* Grid of units */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {units.map((unitNum) => (
            <Link
              key={unitNum}
              href={`/debug/a1-preview/unit-${unitNum}`}
              className="aspect-square flex items-center justify-center bg-white border-2 border-slate-200 rounded-xl font-bold text-lg text-slate-800 hover:border-coral-500 hover:bg-coral-50 hover:text-coral-700 transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              {unitNum}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

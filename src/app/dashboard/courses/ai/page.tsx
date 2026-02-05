'use client';

import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';

export default function AICoursePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-slate-900 mb-4">
              Masterclass <span className="text-orange-500">IA para Inglés</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Aprende a usar las herramientas de inteligencia artificial más potentes para multiplicar tu velocidad de aprendizaje.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border-2 border-orange-50 text-center">
            <span className="text-7xl mb-6 block">🤖</span>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Aprende Inteligente, No Difícil</h2>
            <p className="text-lg text-slate-600 mb-10">
              Prompt engineering para estudiantes, corrección automática avanzada y simulación de conversaciones reales.
            </p>
            <Link
              href="/dashboard/ia/b2"
              className="inline-flex items-center gap-3 px-10 py-4 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition-all font-black text-xl shadow-xl hover:scale-105"
            >
              Acceder a la Masterclass
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

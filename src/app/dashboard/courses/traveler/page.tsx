'use client';

import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';

export default function TravelerCoursePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-slate-900 mb-4">
              Ruta del <span className="text-emerald-500">Viajero</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tu pasaporte a la libertad. Prepárate para moverte por el mundo con confianza.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border-2 border-emerald-50 text-center">
            <span className="text-7xl mb-6 block">🌍</span>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Programa Intensivo 90 Días</h2>
            <p className="text-lg text-slate-600 mb-10">
              Desde el aeropuerto hasta situaciones de emergencia, cubrimos todo lo que necesitas para sobrevivir y disfrutar en el extranjero.
            </p>
            <Link
              href="/dashboard/viajes/b1"
              className="inline-flex items-center gap-3 px-10 py-4 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-600 transition-all font-black text-xl shadow-xl hover:scale-105"
            >
              Comenzar Ruta B1 (Intermedio)
            </Link>
            <p className="mt-6 text-sm text-slate-400">
              También disponible en nivel A1 para principiantes.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

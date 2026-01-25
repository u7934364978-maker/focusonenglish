'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MISSION_CATALOG } from '@/lib/exercise-types';
import { MissionCard } from '@/components/ai-lab/MissionCard';
import { ArrowLeft, Sparkles, Filter } from 'lucide-react';

export default function AILabDashboard() {
  const [filter, setFilter] = useState<'all' | 'tech' | 'marketing' | 'travel' | 'exams' | 'finance' | 'healthcare' | 'general'>('all');

  const filteredMissions = filter === 'all' 
    ? MISSION_CATALOG 
    : MISSION_CATALOG.filter(m => m.sector === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5 text-slate-600" />
              </Link>
              <div>
                <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  AI Lab Missions <Sparkles className="w-5 h-5 text-coral-500 fill-coral-500" />
                </h1>
                <p className="text-sm text-slate-500">Misiones inmersivas para practicar tu inglés real</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
              {(['all', 'tech', 'marketing', 'travel', 'exams', 'finance', 'healthcare', 'general'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition-all ${
                    filter === s 
                      ? 'bg-white text-coral-600 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {s === 'all' ? 'Todas' : s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 bg-coral-500 text-white text-xs font-black rounded-full uppercase mb-4 tracking-wider">
              Nuevo: AI Missions
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Domina situaciones reales con nuestra <span className="text-coral-400">IA Conversacional</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              No más ejercicios estáticos. Interactúa con personajes realistas, cumple objetivos y recibe feedback detallado sobre tu precisión y fluidez.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Feedback en tiempo real
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Escenarios profesionales
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Niveles A1 a C2
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-coral-500/20 to-transparent hidden lg:block"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-coral-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMissions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>

        {filteredMissions.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-900">No encontramos misiones en esta categoría</h3>
            <p className="text-slate-500">Pronto añadiremos más contenido.</p>
            <button 
              onClick={() => setFilter('all')}
              className="mt-4 text-coral-600 font-bold hover:underline"
            >
              Ver todas las misiones
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

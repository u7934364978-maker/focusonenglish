'use client';

import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';

export default function CourseCatalogPage() {
  const lines = [
    {
      id: 'general',
      title: 'Inglés General',
      description: 'Domina el inglés desde A1 hasta C2 con nuestro currículo completo.',
      icon: '🌍',
      color: 'blue',
      levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
      goal: 'general'
    },
    {
      id: 'ai',
      title: 'IA para Inglés',
      description: 'Masterclass sobre cómo usar la IA para acelerar tu aprendizaje.',
      icon: '🤖',
      color: 'orange',
      levels: ['B1', 'B2', 'C1'],
      goal: 'general'
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-slate-900 mb-4">
              Catálogo de <span className="text-coral-500">Cursos</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Elige tu especialización y comienza a aprender con contenido diseñado para tus objetivos reales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lines.map((line) => (
              <div key={line.id} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-slate-50 hover:border-coral-100 transition-all group">
                <div className="flex items-start gap-6">
                  <span className="text-6xl">{line.icon}</span>
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-2 group-hover:text-coral-500 transition-colors">
                      {line.title}
                    </h2>
                    <p className="text-slate-600 mb-6 text-lg">
                      {line.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {line.levels.map((level) => (
                        <Link
                          key={level}
                          href={level === 'C2' ? '#' : `/debug/${level.toLowerCase()}-preview/unit-1`}
                          className="px-6 py-2 bg-slate-100 hover:bg-coral-500 hover:text-white rounded-full font-bold transition-all"
                        >
                          Nivel {level}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

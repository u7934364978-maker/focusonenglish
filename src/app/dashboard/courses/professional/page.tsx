'use client';

import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';

export default function ProfessionalSpecializationPage() {
  const specializations = [
    {
      id: 'it',
      title: 'English for IT',
      description: 'Scrum, technical documentation, and global standups.',
      icon: '💻',
      level: 'B2',
      goal: 'trabajo'
    },
    {
      id: 'finance',
      title: 'English for Finance',
      description: 'Reporting, compliance, and international markets.',
      icon: '📈',
      level: 'B2',
      goal: 'trabajo'
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-slate-900 mb-4">
              Línea <span className="text-blue-500">Professional</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Especializaciones diseñadas para el mercado laboral internacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializations.map((spec) => (
              <Link
                key={spec.id}
                href={`/dashboard/${spec.goal}/${spec.level.toLowerCase()}`}
                className="bg-white rounded-3xl p-8 shadow-xl border-2 border-slate-50 hover:border-blue-200 transition-all group"
              >
                <div className="flex items-center gap-6">
                  <span className="text-6xl">{spec.icon}</span>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {spec.title}
                    </h2>
                    <p className="text-slate-600 mb-4">
                      {spec.description}
                    </p>
                    <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-lg font-bold text-sm">
                      Recomendado: Nivel {spec.level}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';

export default async function PremiumCoursePage() {
  const contentDir = path.join(process.cwd(), 'src/content/cursos/ingles-a2');
  
  // Ensure directory exists
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  // Get all unit files from JSON
  const files = fs.readdirSync(contentDir)
    .filter(file => file.startsWith('unit') && file.endsWith('.json'))
    .sort((a, b) => {
      const numA = parseInt(a.replace('unit', '').replace('.json', ''));
      const numB = parseInt(b.replace('unit', '').replace('.json', ''));
      return numA - numB;
    });

  const units = files.map(file => {
    const data = JSON.parse(fs.readFileSync(path.join(contentDir, file), 'utf-8'));
    return {
      id: file.replace('.json', ''),
      title: data.course?.unit_title || data.title || file.replace('.json', ''),
      level: data.course?.level || 'A2'
    };
  });

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-slate-900 mb-6">
              Curso <span className="text-[#FF6B6B]">Inglés A2</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Aprende inglés de forma divertida y progresiva. 100 horas de contenido profesional nivel elemental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.length === 0 ? (
              <div className="col-span-full text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-slate-400 font-medium">Próximamente más unidades...</p>
              </div>
            ) : (
              units.map((unit) => (
                <Link 
                  key={unit.id} 
                  href={`/curso/ingles-a2/${unit.id}`}
                  className="group bg-white p-6 rounded-2xl shadow-md border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-coral-100 text-coral-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
                      {unit.id.toUpperCase()}
                    </span>
                    <span className="text-slate-400 text-xs font-bold">{unit.level}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-coral-600 transition-colors">
                    {unit.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-coral-600 font-bold text-sm">
                    <span>Empezar lección</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
}

import React from 'react';
import { Navigation } from '@/components/sections/Navigation';
import { toeflCourseService } from '@/lib/services/toefl-course-service';
import Link from 'next/link';
import { Trophy, Target, Clock } from 'lucide-react';

export default function ToeflCoursePage({ level }: { level: string }) {
  const units = toeflCourseService.getUnits(level);
  const totalExercises = units.reduce((acc, u) => acc + u.totalExercises, 0);

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-slate-900 mb-4">
              Preparación <span className="text-orange-600">TOEFL iBT {level.toUpperCase()}</span>
            </h1>
            <p className="text-xl text-slate-600">
              Plan de 36 semanas diseñado para alcanzar una puntuación sólida en el TOEFL.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Trophy size={160} className="text-orange-600" />
                </div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                    <Target className="text-orange-500" />
                    Progreso del Curso
                  </h2>
                  
                  <div className="flex items-end gap-4 mb-4">
                    <span className="text-7xl font-black text-orange-600 leading-none">0%</span>
                    <span className="text-slate-400 font-bold mb-2">Completado</span>
                  </div>

                  <div className="w-full h-4 bg-slate-100 rounded-full mb-8 overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full w-0" />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-slate-50 p-4 rounded-2xl">
                      <p className="text-slate-500 text-xs font-bold uppercase mb-1">Ejercicios</p>
                      <p className="text-xl font-black text-slate-900">{totalExercises}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl">
                      <p className="text-slate-500 text-xs font-bold uppercase mb-1">Semanas</p>
                      <p className="text-xl font-black text-slate-900">{units.length}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {units.map((unit: any, index: number) => (
                  <Link 
                    key={unit.id}
                    href={`/curso/toefl-${level.toLowerCase()}/${unit.file}`}
                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-12 -mt-12 group-hover:scale-110 transition-transform" />
                    <div className="relative z-10">
                      <span className="text-xs font-black text-orange-500 uppercase tracking-wider">
                        Semana {index + 1}
                      </span>
                      <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
                        {unit.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        {unit.totalExercises} Ejercicios
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden group mb-6">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4">Estrategia TOEFL</h3>
                  <p className="text-slate-300 text-sm mb-6">
                    Aprende los trucos y formatos específicos que ETS evalúa en cada sección.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                  <Clock className="text-slate-400" size={20} />
                  Planificación
                </h4>
                <p className="text-slate-600 text-sm">
                  Este curso está diseñado para realizarse en 36 semanas, dedicando aproximadamente 3-5 horas semanales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

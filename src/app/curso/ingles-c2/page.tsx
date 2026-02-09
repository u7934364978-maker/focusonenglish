import React from 'react';
import { Navigation } from '@/components/sections/Navigation';
import { premiumCourseService } from '@/lib/services/premium-course-service';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { Trophy, Play, CheckCircle2, LayoutGrid, Target, Clock } from 'lucide-react';
import { ALL_C2_UNITS, C2_MODULES } from '@/lib/course-data-c2';

export default async function C2CoursePage() {
  const supabase = await createClient();
  if (!supabase) {
    return <div>Error: No se pudo conectar con el servidor de base de datos.</div>;
  }
  const { data: { user } } = await supabase.auth.getUser();

  const userId = user?.id || 'anonymous';

  const units = ALL_C2_UNITS.map((unit, idx) => {
    if (!unit) {
      console.error(`Unit at index ${idx} is undefined!`);
      return {
        id: `missing-${idx}`,
        title: 'Missing Unit',
        description: '',
        file: '',
        totalExercises: 0,
        interactionIds: []
      };
    }
    const interactionIds: string[] = [];
    if (unit.exercises) {
      unit.exercises.forEach(ex => {
        if (ex && typeof ex === 'object' && 'questions' in ex && Array.isArray(ex.questions)) {
          ex.questions.forEach(q => interactionIds.push(q.id));
        }
      });
    }

    return {
      id: unit.id,
      title: unit.title,
      description: unit.description,
      file: unit.id,
      totalExercises: interactionIds.length,
      interactionIds
    };
  });

  const completedIds = await premiumCourseService.getC2Progress ? await premiumCourseService.getC2Progress(userId) : [];
  const completedSet = new Set(completedIds as string[]);
  
  const totalExercises = units.reduce((acc, u) => acc + u.totalExercises, 0);
  const completedExercises = Array.from(completedSet).filter((id: string) => id.startsWith('c2-u')).length;
  const progressPercentage = totalExercises > 0 
    ? Math.round((completedExercises / totalExercises) * 100) 
    : 0;

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-slate-900 mb-4">
              Curso <span className="text-[#4A90E2]">Inglés C2</span>
            </h1>
            <p className="text-xl text-slate-600">
              60 Unidades y 6,000 Ejercicios de nivel Real C2 (Proficiency).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Stats and Units Card */}
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Trophy size={160} className="text-blue-600" />
                </div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                    <Target className="text-blue-500" />
                    Tu Progreso de Nivel
                  </h2>
                  
                  <div className="flex items-end gap-4 mb-4">
                    <span className="text-7xl font-black text-blue-600 leading-none">
                      {progressPercentage}%
                    </span>
                    <span className="text-slate-400 font-bold mb-2">Completado</span>
                  </div>

                  <div className="w-full h-4 bg-slate-100 rounded-full mb-8 overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-slate-50 p-4 rounded-2xl">
                      <p className="text-slate-500 text-xs font-bold uppercase mb-1">Ejercicios</p>
                      <p className="text-xl font-black text-slate-900">{totalExercises}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl">
                      <p className="text-slate-500 text-xs font-bold uppercase mb-1">Completados</p>
                      <p className="text-xl font-black text-slate-900">{completedExercises}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl">
                      <p className="text-slate-500 text-xs font-bold uppercase mb-1">Unidades</p>
                      <p className="text-xl font-black text-slate-900">{units.length}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modules and Units */}
              {C2_MODULES.map((module, mIdx) => (
                <div key={module.id} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#4A90E2] text-white w-10 h-10 rounded-xl flex items-center justify-center font-black shadow-lg">
                      {mIdx + 1}
                    </div>
                    <h2 className="text-3xl font-black text-slate-900">{module.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {module.units.map((unit, uIdx) => {
                      if (!unit) return null;
                      const unitData = units.find(u => u.id === unit.id);
                      if (!unitData) return null;
                      
                      const unitCompletedCount = unitData.interactionIds.filter((id: string) => completedSet.has(id)).length;
                      const unitProgress = unitData.totalExercises > 0 
                        ? Math.round((unitCompletedCount / unitData.totalExercises) * 100) 
                        : 0;
                      const isCompleted = unitProgress === 100;
                      const globalUnitIndex = mIdx * 10 + uIdx + 1;

                      return (
                        <Link 
                          key={unit.id}
                          href={`/curso/ingles-c2/${unit.id}`}
                          className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-12 -mt-12 group-hover:scale-110 transition-transform" />
                          
                          <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                              <span className="text-xs font-black text-blue-500 uppercase tracking-wider">
                                Unidad {globalUnitIndex}
                              </span>
                              {isCompleted && (
                                <CheckCircle2 size={20} className="text-green-500" />
                              )}
                            </div>
                            
                            <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                              {unit.title}
                            </h3>
                            
                            <div className="flex items-center gap-4">
                              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full rounded-full transition-all duration-500 ${isCompleted ? 'bg-green-500' : 'bg-blue-500'}`}
                                  style={{ width: `${unitProgress}%` }}
                                />
                              </div>
                              <span className="text-xs font-bold text-slate-400">
                                {unitProgress}%
                              </span>
                            </div>
                            
                            <p className="text-xs text-slate-400 mt-2 font-medium">
                              {unitCompletedCount}/{unitData.totalExercises} Ejercicios
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar / Info */}
            <div className="space-y-6">
              <div className="bg-[#0D47A1] p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden group mb-6">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4">Práctica Aleatoria</h3>
                  <p className="text-blue-100 text-sm mb-6">
                    Mezclamos ejercicios de las 60 unidades para un desafío extra.
                  </p>
                  
                  <Link 
                    href="/curso/ingles-c2/practica"
                    className="flex items-center justify-center gap-3 bg-[#4A90E2] hover:bg-[#357ABD] text-white px-6 py-4 rounded-xl font-black text-lg shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all"
                  >
                    <Play fill="currentColor" size={20} />
                    ¡EMPEZAR!
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                  <Clock className="text-slate-400" size={20} />
                  ¿Cómo funciona?
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="mt-1"><CheckCircle2 size={18} className="text-green-500" /></div>
                    <p className="text-slate-600 text-sm">
                      Cada unidad se centra en objetivos específicos del nivel C2 Proficiency (CPE).
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1"><CheckCircle2 size={18} className="text-green-500" /></div>
                    <p className="text-slate-600 text-sm">
                      Tu progreso es <strong>persistente</strong>. El sistema recuerda cada uno de los 6,000 ejercicios.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                <h4 className="text-lg font-black text-blue-900 mb-2 flex items-center gap-2">
                  <LayoutGrid size={20} />
                  Estructura C2
                </h4>
                <p className="text-blue-700 text-sm mb-4">
                  El curso cubre gramática avanzada, vocabulario de nivel nativo y preparación exhaustiva para el CPE.
                </p>
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {totalExercises} Ejercicios Disponibles
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import React from 'react';
import { Navigation } from '@/components/sections/Navigation';
import { premiumCourseService } from '@/lib/services/premium-course-service';
import { premiumCourseServerService } from '@/lib/services/premium-course-service.server';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';
import { Trophy, Play, CheckCircle2, LayoutGrid, Target, Clock } from 'lucide-react';

export default async function B1CoursePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Authentication disabled for now
  /*
  if (!user) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-32 flex items-center justify-center">
          <p className="text-slate-600">Por favor, inicia sesión para acceder al curso.</p>
        </main>
      </>
    );
  }
  */

  const userId = user?.id || 'anonymous';

  // Fetch all units and user progress
  const units = await premiumCourseServerService.getUnits('emails-b1');
  const completedIds = await premiumCourseService.getEmailsB1Progress(userId);
  const completedSet = new Set(completedIds);
  
  const allInteractions = await premiumCourseServerService.getAllInteractions('emails-b1');
  const totalExercises = allInteractions.length;
  const completedExercises = completedIds.length;
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
              Curso <span className="text-[#FF6B6B]">Email Writing B1</span>
            </h1>
            <p className="text-xl text-slate-600">
              Especialización en escritura de correos profesionales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Stats and Units Card */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Trophy size={160} className="text-coral-600" />
                </div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                    <Target className="text-coral-500" />
                    Tu Progreso de Nivel
                  </h2>
                  
                  <div className="flex items-end gap-4 mb-4">
                    <span className="text-7xl font-black text-coral-600 leading-none">
                      {progressPercentage}%
                    </span>
                    <span className="text-slate-400 font-bold mb-2">Completado</span>
                  </div>

                  <div className="w-full h-4 bg-slate-100 rounded-full mb-8 overflow-hidden">
                    <div 
                      className="h-full bg-coral-500 rounded-full transition-all duration-1000"
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

              {/* Units Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {units.map((unit: any, index: number) => {
                  const unitCompletedCount = unit.interactionIds.filter((id: string) => completedSet.has(id)).length;
                  const unitProgress = unit.totalExercises > 0 
                    ? Math.round((unitCompletedCount / unit.totalExercises) * 100) 
                    : 0;
                  const isCompleted = unitProgress === 100;

                  return (
                    <Link 
                      key={unit.id}
                      href={`/curso/emails-b1/${unit.file}`}
                      className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-coral-200 transition-all group relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-coral-50 rounded-bl-full -mr-12 -mt-12 group-hover:scale-110 transition-transform" />
                      
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-xs font-black text-coral-500 uppercase tracking-wider">
                            Unidad {index + 1}
                          </span>
                          {isCompleted && (
                            <CheckCircle2 size={20} className="text-green-500" />
                          )}
                        </div>
                        
                        <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-coral-600 transition-colors line-clamp-1">
                          {unit.title}
                        </h3>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-500 ${isCompleted ? 'bg-green-500' : 'bg-coral-500'}`}
                              style={{ width: `${unitProgress}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-slate-400">
                            {unitProgress}%
                          </span>
                        </div>
                        
                        <p className="text-xs text-slate-400 mt-2 font-medium">
                          {unitCompletedCount}/{unit.totalExercises} Ejercicios
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Sidebar / Info */}
            <div className="space-y-6">
              <div className="bg-[#1A237E] p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden group mb-6">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4">Práctica Aleatoria</h3>
                  <p className="text-blue-100 text-sm mb-6">
                    Mezclamos ejercicios de todas las unidades para un desafío extra.
                  </p>
                  
                  <Link 
                    href="/curso/emails-b1/practica"
                    className="flex items-center justify-center gap-3 bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-6 py-4 rounded-xl font-black text-lg shadow-lg hover:shadow-coral-500/20 hover:-translate-y-1 transition-all"
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
                      Cada unidad se centra en objetivos específicos de Cambridge.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1"><CheckCircle2 size={18} className="text-green-500" /></div>
                    <p className="text-slate-600 text-sm">
                      Tu progreso es <strong>persistente</strong>. El sistema recuerda qué ejercicios ya dominas.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-coral-50 p-6 rounded-3xl border border-coral-100">
                <h4 className="text-lg font-black text-coral-900 mb-2 flex items-center gap-2">
                  <LayoutGrid size={20} />
                  Estructura B1
                </h4>
                <p className="text-coral-700 text-sm mb-4">
                  El curso cubre gramática, vocabulario y comunicación de nivel intermedio.
                </p>
                <div className="text-xs font-bold text-coral-600 uppercase tracking-wider">
                  {totalExercises}+ Ejercicios Disponibles
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

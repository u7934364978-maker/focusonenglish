import React from 'react';
import { Navigation } from '@/components/sections/Navigation';
import { premiumCourseService } from '@/lib/services/premium-course-service';
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

  // Fetch all interactions and user progress
  const allInteractions = await premiumCourseService.getAllB1Interactions();
  const completedIds = await premiumCourseService.getB1Progress(userId);
  
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
              Curso <span className="text-[#FF6B6B]">Inglés B1</span>
            </h1>
            <p className="text-xl text-slate-600">
              Secuencia dinámica de ejercicios mezclados para un aprendizaje fluido.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Stats Card */}
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
                      <p className="text-slate-500 text-xs font-bold uppercase mb-1">Pendientes</p>
                      <p className="text-xl font-black text-slate-900">{totalExercises - completedExercises}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Start Practice Section */}
              <div className="bg-[#1A237E] p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden group">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="max-w-md">
                    <h3 className="text-3xl font-black mb-4">Práctica Aleatoria</h3>
                    <p className="text-blue-100 text-lg mb-0">
                      Continúa con tu secuencia personalizada de ejercicios mezclados de todas las unidades.
                    </p>
                  </div>
                  
                  <Link 
                    href="/curso/ingles-b1/practica"
                    className="flex items-center gap-3 bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-lg hover:shadow-coral-500/20 hover:-translate-y-1 transition-all whitespace-nowrap"
                  >
                    <Play fill="currentColor" size={24} />
                    ¡CONTINUAR!
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar / Info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                  <Clock className="text-slate-400" size={20} />
                  ¿Cómo funciona?
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="mt-1"><CheckCircle2 size={18} className="text-green-500" /></div>
                    <p className="text-slate-600 text-sm">
                      Mezclamos ejercicios de las <strong>30 unidades</strong> para evitar la memorización por contexto.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1"><CheckCircle2 size={18} className="text-green-500" /></div>
                    <p className="text-slate-600 text-sm">
                      Tu progreso es <strong>persistente</strong>. El sistema recuerda qué ejercicios ya dominas.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1"><CheckCircle2 size={18} className="text-green-500" /></div>
                    <p className="text-slate-600 text-sm">
                      Nuevos ejercicios se generan dinámicamente cada vez que inicias una sesión.
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
                  El curso cubre gramática, vocabulario y comunicación de nivel intermedio a través de 30 módulos temáticos.
                </p>
                <div className="text-xs font-bold text-coral-600 uppercase tracking-wider">
                  6,000+ Ejercicios Disponibles
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

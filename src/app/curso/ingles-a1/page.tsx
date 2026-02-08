import React from 'react';
import { Navigation } from '@/components/sections/Navigation';
import { premiumCourseService } from '@/lib/services/premium-course-service';
import { premiumCourseServerService } from '@/lib/services/premium-course-service.server';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';
import { Trophy, Play, CheckCircle2, LayoutGrid, Target, Sparkles, ArrowRight, Lock } from 'lucide-react';

export default async function A1CoursePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const userId = user?.id || 'anonymous';

  // Fetch all units and user progress
  const allUnits = await premiumCourseServerService.getUnits('ingles-a1');
  const units = allUnits.slice(0, 60);
  const completedIds = await premiumCourseService.getA1Progress(userId);
  const completedSet = new Set(completedIds);
  
  const allInteractions = await premiumCourseServerService.getAllInteractions('ingles-a1');
  
  // Filter interactions to only include those belonging to the first 60 units
  const allowedInteractionIds = new Set(units.flatMap(u => u.interactionIds));
  const filteredInteractions = allInteractions.filter(i => allowedInteractionIds.has(i.interaction_id));
  
  const totalExercises = filteredInteractions.length;
  const completedExercises = completedIds.filter(id => allowedInteractionIds.has(id)).length;
  const progressPercentage = totalExercises > 0 
    ? Math.round((completedExercises / totalExercises) * 100) 
    : 0;

  // Find current unit (first one not fully completed)
  let currentUnitIndex = units.findIndex(u => {
    const unitCompletedCount = u.interactionIds.filter((id: string) => completedSet.has(id)).length;
    return unitCompletedCount < u.totalExercises;
  });
  if (currentUnitIndex === -1) currentUnitIndex = units.length - 1;
  const currentUnit = units[currentUnitIndex];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tight">
              Inglés <span className="text-[#FF6B6B]">A1</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium">
              Tu ruta de aprendizaje inteligente adaptada a tu ritmo.
            </p>
          </div>

          {/* Smart Path Hero Card */}
          <div className="bg-[#1A237E] p-8 sm:p-16 rounded-[4rem] shadow-2xl text-white relative overflow-hidden group mb-16 border-8 border-white">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#FF6B6B]/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Sparkles size={240} className="text-white animate-pulse" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-black uppercase tracking-widest mb-10 border border-white/30">
                <Sparkles size={18} className="text-yellow-300" />
                Algoritmo Adaptativo Activado
              </div>
              
              <h2 className="text-5xl sm:text-7xl font-black mb-8 leading-none tracking-tighter">
                {progressPercentage === 0 ? '¿Listo para empezar?' : '¡Sigue así, vas muy bien!'}
              </h2>
              
              <p className="text-blue-100 text-xl mb-12 max-w-2xl leading-relaxed font-medium">
                No te preocupes por qué unidad estudiar. Pulsa el botón y el sistema te llevará 
                exactamente a lo que necesitas aprender o repasar hoy.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-lg">
                <Link 
                  href="/curso/ingles-a1/practica"
                  className="flex-1 inline-flex items-center justify-center gap-4 bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-12 py-7 rounded-[2rem] font-black text-3xl shadow-[0_20px_50px_rgba(255,107,107,0.3)] hover:shadow-[0_25px_60px_rgba(255,107,107,0.5)] hover:-translate-y-2 transition-all group/btn active:scale-95"
                >
                  <Play fill="currentColor" size={32} />
                  CONTINUAR
                  <ArrowRight size={32} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>

              <div className="mt-16 w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/20">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-5xl font-black block mb-1">{progressPercentage}%</span>
                    <span className="text-blue-200 text-xs font-black uppercase tracking-widest">Tu Progreso Total</span>
                  </div>
                  <Trophy size={48} className="text-yellow-400 mb-2" />
                </div>
                <div className="w-full h-4 bg-white/10 rounded-full mb-8 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#ff8e8e] rounded-full transition-all duration-1000 shadow-[0_0_20px_rgba(255,107,107,0.5)]"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <span className="text-blue-200 text-[10px] font-black uppercase block mb-1">Completados</span>
                    <span className="text-2xl font-black">{completedExercises} <span className="text-sm font-medium text-blue-200">/ {totalExercises}</span></span>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <span className="text-blue-200 text-[10px] font-black uppercase block mb-1">Próximo Hito</span>
                    <span className="text-sm font-black truncate block">{currentUnit.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Path Visualizer - Hidden to focus on adaptive path
          <div className="relative">
            <h3 className="text-3xl font-black text-slate-900 mb-8 px-4 flex items-center gap-3">
              <LayoutGrid className="text-[#FF6B6B]" size={32} />
              Mapa de Contenidos
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {units.map((unit: any, index: number) => {
                const unitCompletedCount = unit.interactionIds.filter((id: string) => completedSet.has(id)).length;
                const unitProgress = unit.totalExercises > 0 
                  ? Math.round((unitCompletedCount / unit.totalExercises) * 100) 
                  : 0;
                const isCompleted = unitProgress === 100;
                const isCurrent = index === currentUnitIndex;
                const isLocked = index > currentUnitIndex;

                return (
                  <Link 
                    key={unit.id}
                    href={isLocked ? '#' : `/curso/ingles-a1/${unit.file}`}
                    className={`
                      group relative p-6 rounded-[2rem] border transition-all duration-300
                      ${isCurrent ? 'bg-white border-coral-500 shadow-xl scale-105 ring-4 ring-coral-50' : 'bg-white border-slate-100 shadow-sm'}
                      ${isLocked ? 'opacity-60 grayscale cursor-not-allowed' : 'hover:shadow-md hover:border-coral-200'}
                    `}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`
                        w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm
                        ${isCompleted ? 'bg-green-100 text-green-600' : isCurrent ? 'bg-coral-100 text-coral-600' : 'bg-slate-100 text-slate-400'}
                      `}>
                        {isCompleted ? <CheckCircle2 size={20} /> : index + 1}
                      </div>
                      {isLocked && <Lock size={16} className="text-slate-400" />}
                    </div>

                    <h4 className="font-black text-slate-900 mb-3 group-hover:text-coral-600 transition-colors line-clamp-2 min-h-[3rem]">
                      {unit.title}
                    </h4>

                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${isCompleted ? 'bg-green-500' : 'bg-coral-500'}`}
                          style={{ width: `${unitProgress}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                        {unitProgress}%
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          */}
        </div>
      </main>
    </>
  );
}

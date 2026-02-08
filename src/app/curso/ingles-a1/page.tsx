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
            <h1 className="text-5xl font-black text-slate-900 mb-4">
              Mi Ruta <span className="text-[#FF6B6B]">Inglés A1</span>
            </h1>
            <p className="text-xl text-slate-600">
              Tu aprendizaje personalizado guiado por IA.
            </p>
          </div>

          {/* Smart Path Hero Card */}
          <div className="bg-[#1A237E] p-8 sm:p-12 rounded-[3rem] shadow-2xl text-white relative overflow-hidden group mb-12 border-4 border-white">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Sparkles size={200} className="text-white" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                  <Sparkles size={14} className="text-yellow-300" />
                  Smart Path Activado
                </div>
                <h2 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
                  {progressPercentage === 0 ? 'Empieza tu viaje' : 'Continúa aprendiendo'}
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-md">
                  Nuestro algoritmo seleccionará los mejores ejercicios para ti basándose en lo que ya dominas y lo que necesitas reforzar.
                </p>
                
                <Link 
                  href="/curso/ingles-a1/practica"
                  className="inline-flex items-center justify-center gap-4 bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-10 py-5 rounded-2xl font-black text-2xl shadow-xl hover:shadow-coral-500/40 hover:-translate-y-1 transition-all group/btn"
                >
                  <Play fill="currentColor" size={28} />
                  ¡EMPEZAR SESIÓN!
                  <ArrowRight size={28} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>

              <div className="w-full md:w-64 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-4xl font-black">{progressPercentage}%</span>
                  <span className="text-blue-200 text-xs font-bold uppercase pb-1">Progreso</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full mb-6 overflow-hidden">
                  <div 
                    className="h-full bg-[#FF6B6B] rounded-full transition-all duration-1000"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200 font-medium">Ejercicios</span>
                    <span className="font-bold">{completedExercises}/{totalExercises}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200 font-medium">Próximo tema</span>
                    <span className="font-bold text-xs truncate max-w-[100px]">{currentUnit.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Path Visualizer */}
          <div className="relative">
            <h3 className="text-2xl font-black text-slate-900 mb-8 px-4 flex items-center gap-3">
              <LayoutGrid className="text-coral-500" />
              Tu Hoja de Ruta
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </main>
    </>
  );
}

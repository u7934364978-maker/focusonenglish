import React from 'react';
import { Navigation } from '@/components/sections/Navigation';
import { premiumCourseService } from '@/lib/services/premium-course-service';
import { premiumCourseServerService } from '@/lib/services/premium-course-service.server';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { Trophy, Play, CheckCircle2, LayoutGrid, Target, Clock, ArrowRight } from 'lucide-react';

export default async function A2CoursePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const userId = user?.id || 'anonymous';

  // Fetch user progress for the progress bar
  const { data: progressData } = await supabase
    .from('user_interaction_progress')
    .select('interaction_id')
    .eq('user_id', userId);
  
  const completedIds = (progressData || []).map(p => p.interaction_id);
  const completedSet = new Set(completedIds);
  
  const allInteractions = await premiumCourseServerService.getAllInteractions('ingles-a2');
  const totalExercises = allInteractions.length;
  const completedExercises = allInteractions.filter(i => completedSet.has(i.interaction_id)).length;
  const progressPercentage = totalExercises > 0 
    ? Math.round((completedExercises / totalExercises) * 100) 
    : 0;

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-6xl font-black text-slate-800 mb-6 tracking-tight">
              Inglés <span className="text-[#FF6B6B]">A2</span>
            </h1>
            <p className="text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Tu ruta de aprendizaje inteligente adaptada a tu ritmo.
            </p>
          </div>

          {/* Main Adaptive Card */}
          <div className="relative group">
            {/* Background decorative element */}
            <div className="absolute -inset-1 bg-gradient-to-r from-coral-400 to-indigo-400 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-[#1A237E] rounded-[3rem] p-12 sm:p-20 shadow-2xl text-white overflow-hidden min-h-[600px] flex flex-col items-center justify-center">
              {/* Decorative Stars/Sparkles */}
              <div className="absolute top-10 right-10 opacity-20">
                <LayoutGrid size={120} className="rotate-12" />
              </div>
              <div className="absolute bottom-10 left-10 opacity-20">
                <Target size={100} className="-rotate-12" />
              </div>

              {/* Adaptive Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-12">
                <Trophy size={18} className="text-coral-400" />
                <span className="text-xs font-black uppercase tracking-[0.2em]">Algoritmo Adaptativo Activado</span>
              </div>

              {/* Content */}
              <h2 className="text-6xl sm:text-7xl font-black mb-8 tracking-tight">
                ¿Listo para empezar?
              </h2>
              
              <p className="text-xl sm:text-2xl text-blue-100/80 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
                No te preocupes por qué unidad estudiar. Pulsa el botón y el sistema te llevará exactamente a lo que necesitas aprender o repasar hoy.
              </p>

              {/* CTA Button */}
              <Link 
                href="/curso/ingles-a2/practica"
                className="group/btn relative inline-flex items-center justify-center gap-4 bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-12 py-8 rounded-3xl font-black text-3xl shadow-2xl hover:shadow-coral-500/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                <Play fill="currentColor" size={32} className="relative z-10" />
                <span className="relative z-10">CONTINUAR</span>
                <ArrowRight size={32} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
              </Link>

              {/* Progress Bar at Bottom of Card */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                <div className="max-w-xl mx-auto">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-4xl font-black text-white">{progressPercentage}%</span>
                    <span className="text-blue-200/60 font-bold text-sm uppercase tracking-widest">Tu Progreso de Nivel</span>
                  </div>
                  <div className="h-4 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                    <div 
                      className="h-full bg-gradient-to-r from-coral-400 to-coral-500 rounded-full transition-all duration-1000 shadow-[0_0_20px_rgba(255,107,107,0.5)]"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-slate-400 font-medium text-sm">
            © 2026 Focus English • Aprendizaje basado en objetivos Cambridge
          </div>
        </div>
      </main>
    </>
  );
}

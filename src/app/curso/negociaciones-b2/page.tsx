import React from 'react';
import { Navigation } from '@/components/sections/Navigation';
import { premiumCourseService } from '@/lib/services/premium-course-service';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';
import { Trophy, CheckCircle2, Target, Clock, Briefcase } from 'lucide-react';
import { B2_NEG_MODULES } from '@/lib/course-data-b2-neg';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inglés para Negociaciones B2 | Focus English',
  description: 'Domina el arte de negociar en inglés con nuestro curso de nivel B2.',
};

export default async function B2NegociacionesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id || 'anonymous';

  // Get progress for B2 level
  const completedIds = await premiumCourseService.getB2Progress(userId);
  const completedSet = new Set(completedIds);

  // Calculate total exercises and completed ones for this specific course
  let totalExercises = 0;
  let completedExercises = 0;

  const modulesData = B2_NEG_MODULES.map(module => {
    return {
      ...module,
      lessons: module.lessons.map(lesson => {
        const lessonExercises = lesson.exercises || [];
        const interactionIds: string[] = [];
        
        lessonExercises.forEach((ex: any) => {
          if (ex.questions) {
            ex.questions.forEach((q: any) => interactionIds.push(q.id));
          } else if (ex.sentences) {
            ex.sentences.forEach((s: any) => interactionIds.push(s.id));
          }
        });

        totalExercises += interactionIds.length;
        const lessonCompletedCount = interactionIds.filter(id => completedSet.has(id)).length;
        completedExercises += lessonCompletedCount;

        return {
          ...lesson,
          totalExercises: interactionIds.length,
          completedCount: lessonCompletedCount,
          progress: interactionIds.length > 0 ? Math.round((lessonCompletedCount / interactionIds.length) * 100) : 0
        };
      })
    };
  });

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
              Inglés para <span className="text-blue-600">Negociaciones</span>
            </h1>
            <p className="text-xl text-slate-600">
              Nivel B2: Domina el arte de negociar de manera práctica y efectiva.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Stats and Units Card */}
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Briefcase size={160} className="text-blue-600" />
                </div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                    <Target className="text-blue-500" />
                    Progreso del Curso Especializado
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
                      <p className="text-slate-500 text-xs font-bold uppercase mb-1">Módulos</p>
                      <p className="text-xl font-black text-slate-900">{B2_NEG_MODULES.length}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modules and Lessons */}
              {modulesData.map((module, mIdx) => (
                <div key={module.id} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-black shadow-lg">
                      {mIdx + 1}
                    </div>
                    <h2 className="text-3xl font-black text-slate-900">{module.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {module.lessons.map((lesson) => {
                      const isCompleted = lesson.progress === 100;

                      return (
                        <Link 
                          key={lesson.id}
                          href={`/curso/negociaciones-b2/${lesson.id}`}
                          className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-12 -mt-12 group-hover:scale-110 transition-transform" />
                          
                          <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                              <span className="text-xs font-black text-blue-500 uppercase tracking-wider">
                                {lesson.id.split('-').pop()?.toUpperCase()}
                              </span>
                              {isCompleted && (
                                <CheckCircle2 size={20} className="text-green-500" />
                              )}
                            </div>
                            
                            <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                              {lesson.title}
                            </h3>
                            
                            <div className="flex items-center gap-4">
                              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full rounded-full transition-all duration-500 ${isCompleted ? 'bg-green-500' : 'bg-blue-500'}`}
                                  style={{ width: `${lesson.progress}%` }}
                                />
                              </div>
                              <span className="text-xs font-bold text-slate-400">
                                {lesson.progress}%
                              </span>
                            </div>
                            
                            <p className="text-xs text-slate-400 mt-2 font-medium">
                              {lesson.completedCount}/{lesson.totalExercises} Ejercicios
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
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                  <Clock className="text-slate-400" size={20} />
                  Enfoque del Curso
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="mt-1"><CheckCircle2 size={18} className="text-green-500" /></div>
                    <p className="text-slate-600 text-sm">
                      <strong>Práctico:</strong> Situaciones reales de negocios.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1"><CheckCircle2 size={18} className="text-green-500" /></div>
                    <p className="text-slate-600 text-sm">
                      <strong>Gramática B2:</strong> Uso avanzado de condicionales y voz pasiva.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1"><CheckCircle2 size={18} className="text-green-500" /></div>
                    <p className="text-slate-600 text-sm">
                      <strong>Speaking:</strong> Simulaciones de negociación con IA.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

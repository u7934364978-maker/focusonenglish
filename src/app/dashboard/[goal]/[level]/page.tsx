import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';
import { courseService } from '@/lib/services/course-service';
import { createClient } from '@/lib/supabase/server';
import { CEFRLevel } from '@/lib/exercise-types';
import CourseCurriculum from '@/components/course/CourseCurriculum.client';

interface DashboardLevelPageProps {
  params: Promise<{
    goal: string;
    level: string;
  }>;
}

export default async function DashboardLevelPage({ params }: DashboardLevelPageProps) {
  const { goal, level } = await params;
  const cefrLevel = level.toUpperCase() as CEFRLevel;
  
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id || 'anonymous';

  let modules = [];
  try {
    modules = await courseService.getModules(cefrLevel, goal);
  } catch (error) {
    console.error(`Error loading modules for ${goal}/${level}:`, error);
    // Fallback or show error
  }

  const goalTitles: Record<string, string> = {
    trabajo: 'Professional English',
    viajes: 'Traveler English',
    examenes: 'Academic English',
    ia: 'AI for Learning'
  };

  const currentGoalTitle = goalTitles[goal] || goal;

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-slate-900 mb-4">
              Curso <span className="text-[#FF6B6B]">{currentGoalTitle}</span>
            </h1>
            <p className="text-xl text-slate-600">
              Nivel {cefrLevel} • Contenido especializado y práctico
            </p>
          </div>

          {goal === 'examenes' && ['B1', 'B2', 'C1'].includes(cefrLevel) && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                Preparación Específica TOEFL
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                  href={`/curso/toefl-${cefrLevel.toLowerCase()}`}
                  className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-purple-100 hover:border-purple-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">📜</span>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-purple-600 transition-colors">
                      TOEFL iBT Prep
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-6 text-sm">
                    Curso intensivo de preparación para el TOEFL iBT nivel {cefrLevel}. Incluye Speaking, Reading, Listening y Writing.
                  </p>
                  <div className="flex items-center text-purple-600 font-bold gap-2">
                    <span>Acceder al curso</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </Link>
              </div>
            </div>
          )}

          {modules.length > 0 ? (
            <CourseCurriculum 
              goal={goal} 
              level={cefrLevel} 
              modules={modules} 
              userId={userId} 
            />
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
              <span className="text-6xl mb-4 block">🚧</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Próximamente</h2>
              <p className="text-slate-500">
                Estamos preparando el contenido de {currentGoalTitle} para el nivel {cefrLevel}.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

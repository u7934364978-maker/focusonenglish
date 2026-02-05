import React from 'react';
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

  const modules = await courseService.getModules(cefrLevel, goal);

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

import { Suspense } from 'react';
import { A1CourseSelector } from '@/components/course/preview/A1CourseSelector';
import { A1ProgressSidebar } from '@/components/course/A1ProgressSidebar';
import { premiumCourseServerService } from '@/lib/services/premium-course-service.server';
import { BookOpen, Clock, Award } from 'lucide-react';
import { WelcomeWrapper } from './WelcomeWrapper';

export const dynamic = 'force-dynamic';

async function A1PreviewContent() {
  const courseMetadata = await premiumCourseServerService.getA1UnitsWithMetadata();
  const totalExercises = courseMetadata.units.reduce((sum, unit) => sum + unit.exerciseCount, 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <WelcomeWrapper
        totalUnits={courseMetadata.totalUnits}
      />

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-50 text-coral-600 rounded-full font-bold text-sm border border-coral-100 mb-4">
              <Award className="w-4 h-4" />
              <span>Nivel A1 · Principiante</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight">
              Curso de Inglés A1
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Aprende inglés básico para el trabajo en 90 días. {courseMetadata.totalUnits} unidades diseñadas paso a paso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
              <div className="w-12 h-12 bg-coral-100 text-coral-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <p className="text-3xl font-black text-slate-900 mb-1">
                {courseMetadata.totalUnits}
              </p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                Unidades
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
              <div className="w-12 h-12 bg-coral-100 text-coral-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <p className="text-3xl font-black text-slate-900 mb-1">
                {Math.round(courseMetadata.totalDuration / 60)}h
              </p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                Duración Total
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
              <div className="w-12 h-12 bg-coral-100 text-coral-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-3xl font-black text-slate-900 mb-1">
                {totalExercises}
              </p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                Ejercicios
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <A1CourseSelector units={courseMetadata.units} />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
              <h3 className="font-black text-slate-900 text-base mb-4">Mi Progreso</h3>
              <A1ProgressSidebar units={courseMetadata.units} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coral-500 mx-auto mb-4"></div>
        <p className="text-slate-600 font-medium">Cargando curso...</p>
      </div>
    </div>
  );
}

export default function A1PreviewPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <A1PreviewContent />
    </Suspense>
  );
}

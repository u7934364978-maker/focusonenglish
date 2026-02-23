import { Suspense } from 'react';
import { A1CourseSelector } from '@/components/course/preview/A1CourseSelector';
import { premiumCourseServerService } from '@/lib/services/premium-course-service.server';
import { BookOpen, Clock, Award, FileText } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function A1PreviewContent() {
  const courseMetadata = await premiumCourseServerService.getA1UnitsWithMetadata();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-50 text-coral-600 rounded-full font-bold text-sm border border-coral-100">
                <Award className="w-4 h-4" />
                <span>A1 Level • Beginner</span>
              </div>
              <Link
                href="/debug/a1-preview/outline"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full font-bold text-sm border border-slate-200 hover:bg-slate-200 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View Course Outline</span>
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight">
              English A1 Course Preview
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Explore all {courseMetadata.totalUnits} units of our comprehensive A1 English course. 
              Each unit is designed to build your foundation in English step by step.
            </p>
          </div>

          {/* Course Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
              <div className="w-12 h-12 bg-coral-100 text-coral-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <p className="text-3xl font-black text-slate-900 mb-1">
                {courseMetadata.totalUnits}
              </p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                Total Units
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
                Total Duration
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
              <div className="w-12 h-12 bg-coral-100 text-coral-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-3xl font-black text-slate-900 mb-1">
                {courseMetadata.units.reduce((sum, unit) => sum + unit.exerciseCount, 0)}
              </p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                Total Exercises
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Selector */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <A1CourseSelector units={courseMetadata.units} />
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coral-500 mx-auto mb-4"></div>
        <p className="text-slate-600 font-medium">Loading A1 course units...</p>
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

import { Suspense } from 'react';
import { premiumCourseServerService } from '@/lib/services/premium-course-service.server';
import { CourseOutlineTable } from '@/components/course/preview/CourseOutlineTable';
import { PrintButton } from '@/components/course/preview/PrintButton';
import { BookOpen, FileText } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function OutlineContent() {
  const courseMetadata = await premiumCourseServerService.getA2UnitsWithMetadata();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 print:border-0">
        <div className="max-w-7xl mx-auto px-4 py-8 print:py-4">
          <div className="flex items-center justify-between mb-6 print:mb-3">
            <Link 
              href="/curso-a2"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors print:hidden"
            >
              ← Back to Course Preview
            </Link>
            <PrintButton />
          </div>

          <div className="flex items-start gap-4 mb-4 print:mb-2">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center print:hidden">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 print:text-2xl">
                A2 Course Outline
              </h1>
              <p className="text-lg text-slate-600 font-medium print:text-sm">
                Complete overview of all {courseMetadata.totalUnits} units • {Math.round(courseMetadata.totalDuration / 60)} hours total
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 print:hidden">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-2xl font-black text-slate-900">
                {courseMetadata.totalUnits}
              </p>
              <p className="text-xs font-bold text-slate-500 uppercase">Units</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-2xl font-black text-slate-900">
                {courseMetadata.units.reduce((sum, unit) => sum + unit.exerciseCount, 0)}
              </p>
              <p className="text-xs font-bold text-slate-500 uppercase">Exercises</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-2xl font-black text-slate-900">
                {Math.round(courseMetadata.totalDuration / 60)}h
              </p>
              <p className="text-xs font-bold text-slate-500 uppercase">Duration</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-2xl font-black text-slate-900">
                {new Set(courseMetadata.units.flatMap(u => u.topics)).size}
              </p>
              <p className="text-xs font-bold text-slate-500 uppercase">Topics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Outline Table */}
      <div className="max-w-7xl mx-auto px-4 py-8 print:py-4">
        <CourseOutlineTable units={courseMetadata.units} />
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-slate-600 font-medium">Loading course outline...</p>
      </div>
    </div>
  );
}

export default function CourseOutlinePage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <OutlineContent />
    </Suspense>
  );
}

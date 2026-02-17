'use client';

import React from 'react';
import PremiumCourseSession from '@/components/course/exercises/PremiumSession';
import { UnitData } from '@/types/premium-course';
import { useSearchParams } from 'next/navigation';

interface Props {
  unitData: UnitData;
  courseId: string;
  unitId: string;
}

export default function PreviewClient({ unitData, courseId, unitId }: Props) {
  const searchParams = useSearchParams();
  const initialIndex = parseInt(searchParams.get('index') || '0', 10);

  return (
    <div className="min-h-screen bg-slate-50 pt-10">
      <div className="max-w-4xl mx-auto p-4 mb-8">
        <div className="bg-coral-50 border border-coral-200 p-4 rounded-xl text-coral-800 text-sm">
          <strong>Modo Preview:</strong> Viendo {courseId} / {unitId}. No se guardará el progreso.
        </div>
      </div>
      <PremiumCourseSession 
        key={`${courseId}-${unitId}-${initialIndex}`}
        unitData={unitData} 
        initialIndex={initialIndex}
        onComplete={() => console.log('Preview Complete')}
        onExit={() => window.history.back()}
      />
    </div>
  );
}

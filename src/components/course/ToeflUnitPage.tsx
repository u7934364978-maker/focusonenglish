import React from 'react';
import { notFound } from 'next/navigation';
import PremiumUnitViewer from '@/components/course/PremiumUnitViewer';
import { toeflCourseService } from '@/lib/services/toefl-course-service';

export default function ToeflUnitPage({ level, unitId }: { level: string, unitId: string }) {
  const unitData = toeflCourseService.getUnitData(level, unitId);

  if (!unitData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <PremiumUnitViewer unitData={unitData} />
    </div>
  );
}

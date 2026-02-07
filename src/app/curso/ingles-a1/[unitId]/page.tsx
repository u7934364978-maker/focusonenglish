import React from 'react';
import { notFound } from 'next/navigation';
import PremiumUnitViewer from '@/components/course/PremiumUnitViewer';
import { premiumCourseServerService } from '@/lib/services/premium-course-service.server';
import { courseService } from '@/lib/services/course-service';

export default async function PremiumUnitPage({ params }: { params: Promise<{ unitId: string }> }) {
  const { unitId } = await params;
  
  // 1. Try to load from centralized service (JSON/Legacy/Supabase)
  let unitData = await premiumCourseServerService.getUnitData('ingles-a1', unitId);

  // 2. If not found or empty, try Database fallback via courseService
  const hasExercises = unitData && unitData.blocks.some(b => b.content.length > 0);

  if (!hasExercises) {
    const dbData = await courseService.getPremiumUnitData(unitId);
    if (dbData) {
      unitData = dbData;
    }
  }

  if (!unitData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <PremiumUnitViewer unitData={unitData!} />
    </div>
  );
}

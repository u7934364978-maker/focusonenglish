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

  // Find next unit for continuous flow
  const allUnits = await premiumCourseServerService.getUnits('ingles-a1');
  const currentUnitIndex = allUnits.findIndex(u => u.id === unitId || u.file === unitId);
  const nextUnit = (currentUnitIndex !== -1 && currentUnitIndex < allUnits.length - 1) 
    ? allUnits[currentUnitIndex + 1] 
    : null;

  return (
    <div className="min-h-screen bg-white">
      <PremiumUnitViewer 
        unitData={unitData!} 
        nextUnitUrl={nextUnit ? `/curso/ingles-a1/${nextUnit.file || nextUnit.id}` : undefined}
      />
    </div>
  );
}

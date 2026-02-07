import React from 'react';
import { notFound } from 'next/navigation';
import PremiumUnitViewer from '@/components/course/PremiumUnitViewer';
import { premiumCourseServerService } from '@/lib/services/premium-course-service.server';

export default async function PremiumUnitPage({ params }: { params: Promise<{ unitId: string }> }) {
  const { unitId } = await params;
  
  const unitData = await premiumCourseServerService.getUnitData('ingles-a2', unitId);

  if (!unitData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <PremiumUnitViewer unitData={unitData} />
    </div>
  );
}

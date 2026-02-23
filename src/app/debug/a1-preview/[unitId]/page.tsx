import React from 'react';
import { premiumCourseServerService } from '@/lib/services/premium-course-service.server';
import { extractUnitMetadata } from '@/lib/utils/course-metadata';
import { UnitOverviewHeader } from '@/components/course/preview/UnitOverviewHeader';
import { PreviewNavBar } from '@/components/course/preview/PreviewNavBar';
import PreviewClient from './PreviewClient';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    unitId: string;
  }>;
}

export default async function A1UnitPreviewPage({ params }: Props) {
  const { unitId } = await params;
  
  const courseMetadata = await premiumCourseServerService.getA1UnitsWithMetadata();
  const currentUnit = courseMetadata.units.find(u => u.unitId === unitId);

  if (!currentUnit) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <PreviewNavBar
        currentUnitId={unitId}
        allUnits={courseMetadata.units}
        baseUrl="/debug/a1-preview"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <UnitOverviewHeader unit={currentUnit} />
        
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Unit Exercises</h2>
          <PreviewClient />
        </div>
      </div>
    </div>
  );
}

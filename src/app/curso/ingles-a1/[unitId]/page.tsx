import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import PremiumUnitViewer from '@/components/course/PremiumUnitViewer';
import { courseService } from '@/lib/services/course-service';
import { UnitData } from '@/types/premium-course';

export default async function PremiumUnitPage({ params }: { params: Promise<{ unitId: string }> }) {
  const { unitId } = await params;
  
  let unitData: UnitData | null = null;

  // Try to load from database first
  unitData = await courseService.getPremiumUnitData(unitId);
  
  // If not found in database, try JSON fallback
  if (!unitData) {
    const fileName = `${unitId.toLowerCase()}.json`;
    const filePath = path.join(process.cwd(), 'src/content/cursos/ingles-a1', fileName);
    
    if (fs.existsSync(filePath)) {
      unitData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
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

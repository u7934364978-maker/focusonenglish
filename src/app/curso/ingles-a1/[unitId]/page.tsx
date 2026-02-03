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

  // 1. Try to load from JSON first (New content)
  const fileName = `${unitId.toLowerCase()}.json`;
  const filePath = path.join(process.cwd(), 'src/content/cursos/ingles-a1', fileName);
  
  if (fs.existsSync(filePath)) {
    try {
      unitData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } catch (e) {
      console.error(`Error parsing JSON for unit ${unitId}:`, e);
    }
  }

  // 2. If not found in JSON OR JSON had no exercises, try Database fallback
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

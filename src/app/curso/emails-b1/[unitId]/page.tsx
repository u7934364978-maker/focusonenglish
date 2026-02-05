import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import PremiumUnitViewer from '@/components/course/PremiumUnitViewer';
import { UnitData } from '@/types/premium-course';
import { courseService } from '@/lib/services/course-service';

export default async function EmailsB1UnitPage({ params }: { params: Promise<{ unitId: string }> }) {
  const { unitId } = await params;
  
  let unitData: UnitData | null = null;

  // 1. Try loading from JSON file first (Legacy/New structure)
  const fileName = `${unitId.toLowerCase()}.json`;
  const filePath = path.join(process.cwd(), 'src/content/cursos/emails-b1', fileName);
  
  if (fs.existsSync(filePath)) {
    try {
      unitData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } catch (error) {
      console.error('Error parsing unit data:', error);
    }
  }

  // 2. Fallback to Database if not found as file
  if (!unitData) {
    unitData = await courseService.getPremiumUnitData(unitId);
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

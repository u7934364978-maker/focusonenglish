import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import PremiumUnitViewer from '@/components/course/PremiumUnitViewer';
import { UnitData } from '@/types/premium-course';

export default async function B2UnitPage({ params }: { params: Promise<{ unitId: string }> }) {
  const { unitId } = await params;
  
  let unitData: UnitData | null = null;

  const fileName = `${unitId.toLowerCase()}.json`;
  const filePath = path.join(process.cwd(), 'src/content/cursos/ingles-b2', fileName);
  
  if (fs.existsSync(filePath)) {
    try {
      unitData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } catch (error) {
      console.error('Error parsing unit data:', error);
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

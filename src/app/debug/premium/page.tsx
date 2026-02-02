import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import PremiumUnitViewer from '@/components/course/PremiumUnitViewer';
import { Navigation } from '@/components/sections/Navigation';

export default async function PremiumDebugPage() {
  const filePath = path.join(process.cwd(), 'src/content/cursos/ingles-a1/unit1.json');
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const unitData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  return (
    <div className="min-h-screen bg-white">
      <PremiumUnitViewer unitData={unitData} />
    </div>
  );
}

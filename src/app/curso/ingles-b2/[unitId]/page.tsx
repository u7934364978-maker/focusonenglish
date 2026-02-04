import React from 'react';
import { notFound } from 'next/navigation';
import { ALL_B2_UNITS } from '@/lib/course-data-b2';
import B2UnitSession from '@/components/course/B2UnitSession';

export default async function B2UnitPage({ params }: { params: Promise<{ unitId: string }> }) {
  const { unitId } = await params;
  
  // Find the unit in our static curriculum
  const unit = ALL_B2_UNITS.find(u => u.id === unitId);

  if (!unit) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <B2UnitSession unit={unit} />
    </div>
  );
}

// Generate static params for all 60 units
export async function generateStaticParams() {
  return ALL_B2_UNITS.map((unit) => ({
    unitId: unit.id,
  }));
}

import React from 'react';
import { notFound } from 'next/navigation';
import { ALL_C1_UNITS } from '@/lib/course-data-c1';
import C1UnitSession from '@/components/course/C1UnitSession';

export default async function C1UnitPage({ params }: { params: Promise<{ unitId: string }> }) {
  const { unitId } = await params;
  
  const unit = ALL_C1_UNITS.find(u => u.id === unitId);

  if (!unit) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <C1UnitSession unit={unit} />
    </div>
  );
}

export async function generateStaticParams() {
  return ALL_C1_UNITS.map((unit) => ({
    unitId: unit.id,
  }));
}

import React from 'react';
import { notFound } from 'next/navigation';
import { ALL_C2_UNITS } from '@/lib/course-data-c2';
import C2UnitSession from '@/components/course/C2UnitSession';

export default async function C2UnitPage({ params }: { params: Promise<{ unitId: string }> }) {
  const { unitId } = await params;
  
  const unit = ALL_C2_UNITS.find(u => u.id === unitId);

  if (!unit) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <C2UnitSession unit={unit} />
    </div>
  );
}

export async function generateStaticParams() {
  return ALL_C2_UNITS.map((unit) => ({
    unitId: unit.id,
  }));
}

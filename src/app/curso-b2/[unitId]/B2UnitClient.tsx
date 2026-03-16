'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Home } from 'lucide-react';
import PremiumCourseSession from '@/components/course/exercises/PremiumSession';
import type { UnitData } from '@/types/premium-course';

interface Props {
  unitData: UnitData;
  unitId: string;
}

export default function B2UnitClient({ unitData, unitId }: Props) {
  const searchParams = useSearchParams();
  const initialIndex = parseInt(searchParams.get('index') || '0', 10);

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link 
            href="/curso-b2" 
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Volver al curso B2"
          >
            <Home className="w-6 h-6 text-slate-600" />
          </Link>
          <h1 className="font-black text-xl text-slate-800 uppercase tracking-tight">
            B2: {unitData.course.unit_title}
          </h1>
        </div>
      </nav>

      <PremiumCourseSession
        key={`ingles-b2-${unitId}-${initialIndex}`}
        unitData={unitData}
        initialIndex={initialIndex}
        onComplete={() => window.location.href = '/curso-b2'}
        onExit={() => window.location.href = '/curso-b2'}
      />
    </div>
  );
}

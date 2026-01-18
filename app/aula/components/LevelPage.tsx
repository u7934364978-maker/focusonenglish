'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ContinuousPractice from '@/components/ContinuousPractice';
import type { CEFRLevel } from '@/lib/cambridge-curriculum';

interface LevelPageProps {
  level: CEFRLevel;
  levelTitle: string;
  colorFrom: string;
  colorTo: string;
}

export default function LevelPage({ level, levelTitle, colorFrom, colorTo }: LevelPageProps) {
  // Directly show continuous practice
  return <ContinuousPractice level={level} />;
}

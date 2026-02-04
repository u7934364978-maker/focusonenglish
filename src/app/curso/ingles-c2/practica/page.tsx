import React from 'react';
import { ALL_C2_UNITS } from '@/lib/course-data-c2';
import C2UnitSession from '@/components/course/C2UnitSession';
import { Lesson } from '@/lib/exercise-types';

export default async function C2PracticePage() {
  // Create a random practice unit from all exercises
  const allExercises = ALL_C2_UNITS.flatMap(u => u.exercises);
  const shuffled = [...allExercises].sort(() => Math.random() - 0.5).slice(0, 10);

  const practiceUnit: Lesson = {
    id: 'c2-practice',
    title: 'Random Practice C2',
    description: 'A mix of exercises from all C2 units',
    module: 'C2 Proficiency',
    duration: 30,
    objectives: ['Review various C2 topics'],
    exercises: shuffled
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <C2UnitSession unit={practiceUnit} />
    </div>
  );
}

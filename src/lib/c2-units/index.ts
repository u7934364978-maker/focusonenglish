import { C2_UNIT_1 } from './unit-1';
import { C2_UNIT_2 } from './unit-2';
import { C2_UNIT_3 } from './unit-3';
import { C2_UNIT_4 } from './unit-4';
import { C2_UNIT_5 } from './unit-5';
import { C2_UNIT_6 } from './unit-6';
import { C2_UNIT_7 } from './unit-7';
import { C2_UNIT_8 } from './unit-8';
import { C2_UNIT_9 } from './unit-9';
import { C2_UNIT_10 } from './unit-10';
import { Lesson } from '../exercise-types';

// Placeholder for missing units to allow initial integration
const PLACEHOLDER_UNIT = (id: string, title: string): Lesson => ({
  id,
  title,
  description: 'Contenido en proceso de generación...',
  module: 'C2 Proficiency',
  duration: '150 min',
  objectives: ['Práctica avanzada de nivel C2'],
  exercises: []
});

export const ALL_C2_UNITS: Lesson[] = [
  C2_UNIT_1,
  C2_UNIT_2,
  C2_UNIT_3,
  C2_UNIT_4,
  C2_UNIT_5,
  C2_UNIT_6,
  C2_UNIT_7,
  C2_UNIT_8,
  C2_UNIT_9,
  C2_UNIT_10,
  ...Array.from({ length: 50 }, (_, i) => PLACEHOLDER_UNIT(`c2-u${i + 11}`, `Unit ${i + 11}`))
];

import { B2_COURSE } from './course/b2';

export const ALL_B2_UNITS = B2_COURSE.units.map(unit => ({
  id: `unit-${unit.id}`,
  title: unit.title,
  description: `Master ${unit.title.toLowerCase()} and related grammar.`,
  exercises: unit.exercises
}));

export const B2_MODULES = [
  {
    id: 'b2-m1',
    title: 'Module 1: Narrative & Relationships',
    units: ALL_B2_UNITS.slice(0, 5)
  },
  {
    id: 'b2-m2',
    title: 'Module 2: Work & Innovation',
    units: ALL_B2_UNITS.slice(5, 10)
  },
  {
    id: 'b2-m3',
    title: 'Module 3: Society & Media',
    units: ALL_B2_UNITS.slice(10, 15)
  },
  {
    id: 'b2-m4',
    title: 'Module 4: Global Challenges',
    units: ALL_B2_UNITS.slice(15, 20)
  },
  {
    id: 'b2-m5',
    title: 'Module 5: Professional Development',
    units: ALL_B2_UNITS.slice(20, 25)
  },
  {
    id: 'b2-m6',
    title: 'Module 6: Advanced Mastery',
    units: ALL_B2_UNITS.slice(25, 30)
  }
];

export const ALL_MODULES = B2_MODULES;

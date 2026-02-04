import { ALL_C2_UNITS as _ALL_C2_UNITS } from './c2-units';

export const ALL_C2_UNITS = _ALL_C2_UNITS;

export const C2_MODULES = [
  {
    id: 'c2-m1',
    title: 'Module 1: Reading & Use of English (Parts 1-4)',
    units: ALL_C2_UNITS.slice(0, 10)
  },
  {
    id: 'c2-m2',
    title: 'Module 2: Reading & Use of English (Parts 5-8)',
    units: ALL_C2_UNITS.slice(10, 20)
  },
  {
    id: 'c2-m3',
    title: 'Module 3: Writing Mastery (Part 1 & 2)',
    units: ALL_C2_UNITS.slice(20, 30)
  },
  {
    id: 'c2-m4',
    title: 'Module 4: Listening Comprehension (Parts 1-4)',
    units: ALL_C2_UNITS.slice(30, 40)
  },
  {
    id: 'c2-m5',
    title: 'Module 5: Speaking & Oral Strategy',
    units: ALL_C2_UNITS.slice(40, 50)
  },
  {
    id: 'c2-m6',
    title: 'Module 6: Full Exam Simulations',
    units: ALL_C2_UNITS.slice(50, 60)
  }
];

export const C2_FULL_COURSE = {
  id: 'c2-prep',
  title: 'C2 Proficiency (CPE) Preparation',
  level: 'C2',
  modules: C2_MODULES
};

export const ALL_MODULES = C2_MODULES;

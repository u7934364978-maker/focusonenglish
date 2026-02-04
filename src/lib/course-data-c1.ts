import { C1_UNITS } from './c1-units';

export const ALL_C1_UNITS = C1_UNITS;

export const C1_MODULES = [
  {
    id: 'c1-m1',
    title: 'Module 1: Advanced Structures & Nuance',
    units: C1_UNITS.slice(0, 10)
  },
  {
    id: 'c1-m2',
    title: 'Module 2: Academic & Professional Excellence',
    units: C1_UNITS.slice(10, 20)
  },
  {
    id: 'c1-m3',
    title: 'Module 3: Complex Social Issues',
    units: C1_UNITS.slice(20, 30)
  },
  {
    id: 'c1-m4',
    title: 'Module 4: Culture, Media & Arts',
    units: C1_UNITS.slice(30, 40)
  },
  {
    id: 'c1-m5',
    title: 'Module 5: Science, Ethics & Future',
    units: C1_UNITS.slice(40, 50)
  },
  {
    id: 'c1-m6',
    title: 'Module 6: Global Trends & C1 Mastery',
    units: C1_UNITS.slice(50, 60)
  }
];

export const ALL_MODULES = C1_MODULES;

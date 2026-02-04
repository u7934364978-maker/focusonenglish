import { B2_UNITS } from './b2-units';

export const ALL_B2_UNITS = B2_UNITS;

export const B2_MODULES = [
  {
    id: 'b2-m1',
    title: 'Module 1: Narrative & Relationships',
    units: B2_UNITS.slice(0, 10)
  },
  {
    id: 'b2-m2',
    title: 'Module 2: Work, Technology & Innovation',
    units: B2_UNITS.slice(10, 20)
  },
  {
    id: 'b2-m3',
    title: 'Module 3: Social Issues & Media',
    units: B2_UNITS.slice(20, 30)
  },
  {
    id: 'b2-m4',
    title: 'Module 4: Culture, Lifestyle & Travel',
    units: B2_UNITS.slice(30, 40)
  },
  {
    id: 'b2-m5',
    title: 'Module 5: Science & Education',
    units: B2_UNITS.slice(40, 50)
  },
  {
    id: 'b2-m6',
    title: 'Module 6: Global Trends & Final Prep',
    units: B2_UNITS.slice(50, 60)
  }
];

export const ALL_MODULES = B2_MODULES;

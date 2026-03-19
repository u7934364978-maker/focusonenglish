import { ALL_C2_UNITS as _ALL_C2_UNITS } from './c2-units';

export const ALL_C2_UNITS = _ALL_C2_UNITS;

export const C2_MODULES = [
  {
    id: 'c2-m1',
    title: 'Module 1: Language, Power and Rhetoric',
    units: ALL_C2_UNITS.slice(0, 6)
  },
  {
    id: 'c2-m2',
    title: 'Module 2: Literature and the Written Word',
    units: ALL_C2_UNITS.slice(6, 12)
  },
  {
    id: 'c2-m3',
    title: 'Module 3: Science, Knowledge and Truth',
    units: ALL_C2_UNITS.slice(12, 18)
  },
  {
    id: 'c2-m4',
    title: 'Module 4: Society, Power and Justice',
    units: ALL_C2_UNITS.slice(18, 24)
  },
  {
    id: 'c2-m5',
    title: 'Module 5: Arts, Aesthetics and Creativity',
    units: ALL_C2_UNITS.slice(24, 30)
  },
  {
    id: 'c2-m6',
    title: 'Module 6: Mind, Identity and Philosophy',
    units: ALL_C2_UNITS.slice(30, 36)
  },
  {
    id: 'c2-m7',
    title: 'Module 7: Economics, Law and Politics',
    units: ALL_C2_UNITS.slice(36, 42)
  },
  {
    id: 'c2-m8',
    title: 'Module 8: Global Challenges and the Future',
    units: ALL_C2_UNITS.slice(42, 48)
  },
  {
    id: 'c2-m9',
    title: 'Module 9: Intercultural Communication and Diversity',
    units: ALL_C2_UNITS.slice(48, 54)
  },
  {
    id: 'c2-m10',
    title: 'Module 10: Mastery Integration and Exam Preparation',
    units: ALL_C2_UNITS.slice(54, 60)
  }
];

export const C2_FULL_COURSE = {
  id: 'c2-prep',
  title: 'Inglés C2 Mastery / Proficiency',
  level: 'C2',
  modules: C2_MODULES
};

export const ALL_MODULES = C2_MODULES;

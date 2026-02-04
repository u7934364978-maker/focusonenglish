import { ALL_C2_UNITS } from './c2-units';

export const C2_FULL_COURSE = {
  id: 'c2-prep',
  title: 'C2 Proficiency (CPE) Preparation',
  level: 'C2',
  modules: [
    {
      id: 'c2-m1',
      title: 'Module 1: Human Condition',
      lessons: ALL_C2_UNITS.slice(0, 10)
    },
    {
      id: 'c2-m2',
      title: 'Module 2: Planet & Science',
      lessons: ALL_C2_UNITS.slice(10, 20)
    },
    {
      id: 'c2-m3',
      title: 'Module 3: Culture & Arts',
      lessons: ALL_C2_UNITS.slice(20, 30)
    },
    {
      id: 'c2-m4',
      title: 'Module 4: Professional Excellence',
      lessons: ALL_C2_UNITS.slice(30, 40)
    },
    {
      id: 'c2-m5',
      title: 'Module 5: Abstract Concepts',
      lessons: ALL_C2_UNITS.slice(40, 50)
    },
    {
      id: 'c2-m6',
      title: 'Module 6: Exam Mastery',
      lessons: ALL_C2_UNITS.slice(50, 60)
    }
  ]
};

export const ALL_MODULES = C2_FULL_COURSE.modules;

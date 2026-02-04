import { B2_NEG_M1_L1_ALL_EXERCISES } from './b2-neg-m1-l1';
import { B2_NEG_M1_L2_ALL_EXERCISES } from './b2-neg-m1-l2';
import { B2_NEG_M2_L1_ALL_EXERCISES } from './b2-neg-m2-l1';
import { B2_NEG_M3_L1_ALL_EXERCISES } from './b2-neg-m3-l1';

import type { Exercise, Lesson, Module } from './exercise-types';

export const B2_NEG_MODULE_1_LESSONS: Lesson[] = [
  {
    id: 'b2-neg-m1-l1',
    title: 'Lesson 1: The Preparation Phase',
    description: 'Learn essential vocabulary and grammar for effective negotiation prep.',
    duration: 60,
    objectives: ['Master preparation vocabulary', 'Use zero/first conditionals'],
    exercises: B2_NEG_M1_L1_ALL_EXERCISES as Exercise[]
  },
  {
    id: 'b2-neg-m1-l2',
    title: 'Lesson 2: Opening the Negotiation',
    description: 'Practice setting the tone and agenda for professional meetings.',
    duration: 60,
    objectives: ['Set effective agendas', 'Analyze opening strategies'],
    exercises: B2_NEG_M1_L2_ALL_EXERCISES as Exercise[]
  }
];

export const B2_NEG_MODULE_2_LESSONS: Lesson[] = [
  {
    id: 'b2-neg-m2-l1',
    title: 'Lesson 1: The Art of Bargaining',
    description: 'Explore trade-offs and concessions using second conditionals.',
    duration: 90,
    objectives: ['Master bargaining vocabulary', 'Use second conditionals for hypothetical offers'],
    exercises: B2_NEG_M2_L1_ALL_EXERCISES as Exercise[]
  }
];

export const B2_NEG_MODULE_3_LESSONS: Lesson[] = [
  {
    id: 'b2-neg-m3-l1',
    title: 'Lesson 1: Reaching Agreement & Closing',
    description: 'Learn how to finalize deals and follow up professionally.',
    duration: 60,
    objectives: ['Analyze past negotiations with third/mixed conditionals', 'Write follow-up emails'],
    exercises: B2_NEG_M3_L1_ALL_EXERCISES as Exercise[]
  }
];

export const B2_NEG_MODULES: Module[] = [
  {
    id: 'b2-neg-m1',
    number: 1,
    title: 'Module 1: Preparation & Openings',
    description: 'Master the initial stages of negotiation, from BATNA analysis to setting a professional agenda.',
    duration: '2 weeks',
    topics: ['Objective setting', 'BATNA Analysis', 'Agenda setting'],
    grammar: ['Zero Conditional', 'First Conditional'],
    vocabulary: ['Preparation terms', 'Strategic openings'],
    lessons: B2_NEG_MODULE_1_LESSONS
  },
  {
    id: 'b2-neg-m2',
    number: 2,
    title: 'Module 2: The Bargaining Phase',
    description: 'Learn the core of negotiation: exchanging concessions and using hypothetical language to explore deals.',
    duration: '2 weeks',
    topics: ['Trade-offs', 'Concessions', 'Leverage'],
    grammar: ['Second Conditional'],
    vocabulary: ['Bargaining verbs', 'Conditional offers'],
    lessons: B2_NEG_MODULE_2_LESSONS
  },
  {
    id: 'b2-neg-m3',
    number: 3,
    title: 'Module 3: Agreements & Follow-up',
    description: 'Wrap up negotiations effectively, resolve final conflicts, and document agreements correctly.',
    duration: '2 weeks',
    topics: ['Consensus', 'Closing techniques', 'Conflict resolution'],
    grammar: ['Third Conditional', 'Mixed Conditionals'],
    vocabulary: ['Closing terminology', 'Follow-up language'],
    lessons: B2_NEG_MODULE_3_LESSONS
  }
];

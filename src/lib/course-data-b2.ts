import type { Lesson } from './exercise-types';

export const MODULE_1_LESSONS: Lesson[] = [
  {
    id: 'b2-m1-l1',
    title: 'Lesson 1: Past Perfect',
    description: 'Master the past perfect tense in narrative contexts',
    duration: 60,
    objectives: ['Understand past perfect formation', 'Use past perfect in stories'],
    exercises: [
      {
        id: 'b2-m1-l1-grammar-1',
        type: 'grammar',
        title: 'Past Perfect vs Past Simple',
        grammarPoint: 'Past Perfect',
        explanation: 'The past perfect is used to talk about actions that happened before another action in the past.',
        examples: ['I had already eaten when he arrived.'],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'When I arrived at the station, the train ___ (already/leave).',
            correctAnswer: 'had already left',
            explanation: 'The train left before I arrived, so we use Past Perfect.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l1-grammar-2',
        type: 'grammar',
        title: 'Narrative Tenses',
        grammarPoint: 'Past Perfect Continuous',
        explanation: 'Used for continuous actions that happened before another point in the past.',
        examples: ['He had been working for three hours when I called.'],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'She ___ (wait) for an hour when the bus finally came.',
            correctAnswer: 'had been waiting',
            explanation: 'Continuous action before another past event.',
            points: 1
          }
        ]
      }
    ]
  }
];

export const ALL_MODULES = [
  {
    id: 'b2-m1',
    title: 'Module 1: Narrative Tenses & Experiences',
    lessons: MODULE_1_LESSONS
  }
];

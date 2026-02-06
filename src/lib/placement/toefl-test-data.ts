import { Question, LevelResult } from '../level-test-data';

export const TOEFL_LEVEL_TEST_QUESTIONS: Question[] = [
  // ===== B1 LEVEL (Threshold for TOEFL readiness) =====
  {
    id: 'toefl-b1-1',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'B1',
    points: 1,
    question: 'The professor _____ the lecture when the fire alarm went off.',
    options: ['just started', 'was just starting', 'has just started', 'is just starting'],
    correctAnswer: 1,
  },
  {
    id: 'toefl-b1-2',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'B1',
    points: 1,
    question: 'Students must _____ their assignments before the deadline.',
    options: ['submit', 'admit', 'emit', 'omit'],
    correctAnswer: 0,
  },
  {
    id: 'toefl-b1-3',
    type: 'reading-comprehension',
    skill: 'reading',
    level: 'B1',
    points: 2,
    context: 'The campus library will be closed for renovations during the summer break. Students can still access digital resources online.',
    question: 'What is the main point of this announcement?',
    options: [
      'The library is moving to a new building',
      'The library is increasing its digital collection',
      'Physical access to the library is temporarily unavailable',
      'Summer break has been extended for renovations'
    ],
    correctAnswer: 2,
  },

  // ===== B2 LEVEL (Target for many undergraduate programs) =====
  {
    id: 'toefl-b2-1',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'B2',
    points: 2,
    question: 'Hardly _____ the research when the funding was unexpectedly cut.',
    options: ['he had begun', 'did he begin', 'had he begun', 'he began'],
    correctAnswer: 2,
  },
  {
    id: 'toefl-b2-2',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'B2',
    points: 2,
    question: 'The study concludes that there is a _____ correlation between sleep and academic performance.',
    options: ['significant', 'magnificent', 'efficient', 'sufficient'],
    correctAnswer: 0,
  },
  {
    id: 'toefl-b2-3',
    type: 'reading-comprehension',
    skill: 'reading',
    level: 'B2',
    points: 3,
    context: 'Photosynthesis is a process used by plants to convert light energy into chemical energy that, through cellular respiration, can later be released to fuel the organism\'s activities.',
    question: 'According to the passage, what is the primary purpose of photosynthesis?',
    options: [
      'To release energy into the atmosphere',
      'To transform light into chemical energy',
      'To regulate cellular respiration',
      'To fuel the activities of all organisms'
    ],
    correctAnswer: 1,
  },

  // ===== C1 LEVEL (Target for graduate programs and high-tier universities) =====
  {
    id: 'toefl-c1-1',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'C1',
    points: 3,
    question: 'Were it not for the recent technological advancements, this experiment _____ possible.',
    options: ['would not be', 'will not be', 'is not', 'was not'],
    correctAnswer: 0,
  },
  {
    id: 'toefl-c1-2',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'C1',
    points: 3,
    question: 'The findings of the report are _____ with the previous theories in the field.',
    options: ['consistent', 'persistent', 'resistant', 'insistent'],
    correctAnswer: 0,
  },
  {
    id: 'toefl-c1-3',
    type: 'reading-comprehension',
    skill: 'reading',
    level: 'C1',
    points: 4,
    context: 'The industrial revolution was not a singular event but rather a protracted series of shifts in production methods, social structures, and economic theories that fundamentally altered the human experience.',
    question: 'The author characterizes the industrial revolution as:',
    options: [
      'A sudden disruption in history',
      'A purely economic phenomenon',
      'A gradual and multifaceted transformation',
      'An event that had little impact on social structures'
    ],
    correctAnswer: 2,
  }
];

export function calculateToeflLevel(score: number, totalPoints: number): LevelResult {
  const percentage = (score / totalPoints) * 100;
  
  if (percentage >= 80) {
    return {
      level: 'C1',
      percentage,
      title: 'TOEFL Preparation - Advanced (C1)',
      description: 'You have a high level of English. You are ready to target scores of 100+ on the TOEFL iBT.',
      recommendations: [
        'Master complex academic discussions',
        'Refine high-level writing structures',
        'Advanced exam time management'
      ],
      courseUrl: '/curso/toefl-c1',
      color: 'from-orange-600 to-red-600',
      gradient: 'bg-gradient-to-br from-orange-600 to-red-600',
    };
  } else if (percentage >= 50) {
    return {
      level: 'B2',
      percentage,
      title: 'TOEFL Preparation - Upper Intermediate (B2)',
      description: 'You have a solid foundation. You should target scores between 80 and 100 on the TOEFL iBT.',
      recommendations: [
        'Develop academic vocabulary',
        'Practice integrated speaking tasks',
        'Improve reading speed for academic texts'
      ],
      courseUrl: '/curso/toefl-b2',
      color: 'from-amber-600 to-orange-600',
      gradient: 'bg-gradient-to-br from-amber-600 to-orange-600',
    };
  } else {
    return {
      level: 'B1',
      percentage,
      title: 'TOEFL Preparation - Intermediate (B1)',
      description: 'You are starting your TOEFL journey. Focus on reaching a solid 70-80 score range.',
      recommendations: [
        'Build core academic English foundation',
        'Simple campus listening practice',
        'Basic essay structuring'
      ],
      courseUrl: '/curso/toefl-b1',
      color: 'from-yellow-600 to-amber-600',
      gradient: 'bg-gradient-to-br from-yellow-600 to-amber-600',
    };
  }
}

// ============================================
// DUOLINGO-STYLE UNITS SYSTEM
// ============================================

export type UnitStatus = 'locked' | 'unlocked' | 'in_progress' | 'completed';
export type LessonType = 'lesson' | 'practice' | 'story' | 'test';
export type ExerciseType = 
  | 'multiple-choice'
  | 'fill-blank'
  | 'listening'
  | 'speaking'
  | 'translation'
  | 'sentence-building'
  | 'matching'
  | 'conversation';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  options?: string[];
  correctAnswer: string | number;
  translation?: string;
  audio?: string;
  image?: string;
  explanation?: string;
  xpReward: number;
}

export interface Lesson {
  id: string;
  unitId: string;
  order: number;
  title: string;
  type: LessonType;
  description: string;
  grammarTip?: string;
  vocabularyIntro?: string;
  exercises: Exercise[];
  xpReward: number;
  estimatedMinutes: number;
  status: UnitStatus;
  completionRate: number; // 0-100
  stars: number; // 0-3
}

export interface Unit {
  id: string;
  order: number;
  title: string;
  description: string;
  icon: string; // emoji or icon name
  color: string; // hex color for the unit
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  lessons: Lesson[];
  status: UnitStatus;
  totalXP: number;
  earnedXP: number;
  completionRate: number; // 0-100
}

export interface CourseProgress {
  userId: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  currentUnit: string;
  currentLesson: string;
  totalXP: number;
  streak: number;
  lastPracticeDate: Date;
  unitsProgress: Record<string, {
    status: UnitStatus;
    earnedXP: number;
    completionRate: number;
    lessonsCompleted: string[];
  }>;
}

// ============================================
// A1 LEVEL - COMPLETE UNITS
// ============================================

export const A1_UNITS: Unit[] = [
  {
    id: 'a1-unit-1',
    order: 1,
    title: 'Greetings & Introductions',
    description: 'Learn to say hello and introduce yourself',
    icon: '👋',
    color: '#58CC02',
    level: 'A1',
    status: 'unlocked',
    totalXP: 100,
    earnedXP: 0,
    completionRate: 0,
    lessons: [
      {
        id: 'a1-u1-l1',
        unitId: 'a1-unit-1',
        order: 1,
        title: 'Hello!',
        type: 'lesson',
        description: 'Basic greetings',
        grammarTip: 'Use "Hello" or "Hi" for informal greetings. "Good morning/afternoon/evening" for formal.',
        vocabularyIntro: 'hello, hi, good morning, good afternoon, good evening, goodbye, bye',
        exercises: [],
        xpReward: 10,
        estimatedMinutes: 5,
        status: 'unlocked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u1-l2',
        unitId: 'a1-unit-1',
        order: 2,
        title: 'What\'s your name?',
        type: 'lesson',
        description: 'Introducing yourself',
        grammarTip: 'Structure: "My name is..." or "I\'m..."',
        vocabularyIntro: 'name, my, your, I am, you are, nice to meet you',
        exercises: [],
        xpReward: 10,
        estimatedMinutes: 5,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u1-l3',
        unitId: 'a1-unit-1',
        order: 3,
        title: 'Where are you from?',
        type: 'lesson',
        description: 'Talking about countries',
        grammarTip: 'Use "I\'m from..." to say your country',
        vocabularyIntro: 'from, country, Spain, Mexico, USA, UK, nationality',
        exercises: [],
        xpReward: 10,
        estimatedMinutes: 5,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u1-practice',
        unitId: 'a1-unit-1',
        order: 4,
        title: 'Practice',
        type: 'practice',
        description: 'Review what you learned',
        exercises: [],
        xpReward: 15,
        estimatedMinutes: 7,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u1-test',
        unitId: 'a1-unit-1',
        order: 5,
        title: 'Unit Test',
        type: 'test',
        description: 'Test your knowledge',
        exercises: [],
        xpReward: 25,
        estimatedMinutes: 10,
        status: 'locked',
        completionRate: 0,
        stars: 0
      }
    ]
  },
  {
    id: 'a1-unit-2',
    order: 2,
    title: 'Numbers & Time',
    description: 'Count and tell the time',
    icon: '🔢',
    color: '#00CD9C',
    level: 'A1',
    status: 'locked',
    totalXP: 100,
    earnedXP: 0,
    completionRate: 0,
    lessons: [
      {
        id: 'a1-u2-l1',
        unitId: 'a1-unit-2',
        order: 1,
        title: 'Numbers 1-20',
        type: 'lesson',
        description: 'Basic numbers',
        vocabularyIntro: 'one, two, three, four, five, six, seven, eight, nine, ten',
        exercises: [],
        xpReward: 10,
        estimatedMinutes: 5,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u2-l2',
        unitId: 'a1-unit-2',
        order: 2,
        title: 'Numbers 20-100',
        type: 'lesson',
        description: 'Larger numbers',
        vocabularyIntro: 'twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, hundred',
        exercises: [],
        xpReward: 10,
        estimatedMinutes: 5,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u2-l3',
        unitId: 'a1-unit-2',
        order: 3,
        title: 'What time is it?',
        type: 'lesson',
        description: 'Telling time',
        grammarTip: 'Use "It\'s..." to tell the time. Example: "It\'s 3 o\'clock"',
        vocabularyIntro: 'time, hour, minute, o\'clock, half past, quarter past, quarter to',
        exercises: [],
        xpReward: 10,
        estimatedMinutes: 6,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u2-practice',
        unitId: 'a1-unit-2',
        order: 4,
        title: 'Practice',
        type: 'practice',
        description: 'Review numbers and time',
        exercises: [],
        xpReward: 15,
        estimatedMinutes: 7,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u2-test',
        unitId: 'a1-unit-2',
        order: 5,
        title: 'Unit Test',
        type: 'test',
        description: 'Test your knowledge',
        exercises: [],
        xpReward: 25,
        estimatedMinutes: 10,
        status: 'locked',
        completionRate: 0,
        stars: 0
      }
    ]
  },
  {
    id: 'a1-unit-3',
    order: 3,
    title: 'Family & People',
    description: 'Talk about your family',
    icon: '👨‍👩‍👧‍👦',
    color: '#CE82FF',
    level: 'A1',
    status: 'locked',
    totalXP: 100,
    earnedXP: 0,
    completionRate: 0,
    lessons: [
      {
        id: 'a1-u3-l1',
        unitId: 'a1-unit-3',
        order: 1,
        title: 'Family Members',
        type: 'lesson',
        description: 'Learn family vocabulary',
        vocabularyIntro: 'mother, father, sister, brother, grandmother, grandfather, parents, children',
        exercises: [],
        xpReward: 10,
        estimatedMinutes: 5,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u3-l2',
        unitId: 'a1-unit-3',
        order: 2,
        title: 'This is my family',
        type: 'lesson',
        description: 'Introduce your family',
        grammarTip: 'Use "This is..." to introduce people. Example: "This is my mother"',
        exercises: [],
        xpReward: 10,
        estimatedMinutes: 5,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u3-l3',
        unitId: 'a1-unit-3',
        order: 3,
        title: 'He/She/They',
        type: 'lesson',
        description: 'Personal pronouns',
        grammarTip: 'He = male, She = female, They = plural',
        exercises: [],
        xpReward: 10,
        estimatedMinutes: 5,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u3-practice',
        unitId: 'a1-unit-3',
        order: 4,
        title: 'Practice',
        type: 'practice',
        description: 'Review family vocabulary',
        exercises: [],
        xpReward: 15,
        estimatedMinutes: 7,
        status: 'locked',
        completionRate: 0,
        stars: 0
      }
    ]
  },
  {
    id: 'a1-unit-4',
    order: 4,
    title: 'Daily Routines',
    description: 'Talk about your daily activities',
    icon: '☀️',
    color: '#FF9600',
    level: 'A1',
    status: 'locked',
    totalXP: 120,
    earnedXP: 0,
    completionRate: 0,
    lessons: [
      {
        id: 'a1-u4-l1',
        unitId: 'a1-unit-4',
        order: 1,
        title: 'Morning Routine',
        type: 'lesson',
        description: 'Activities in the morning',
        vocabularyIntro: 'wake up, get up, brush teeth, have breakfast, go to work/school',
        exercises: [],
        xpReward: 10,
        estimatedMinutes: 5,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u4-l2',
        unitId: 'a1-unit-4',
        order: 2,
        title: 'Present Simple',
        type: 'lesson',
        description: 'Talk about habits',
        grammarTip: 'Present Simple: I/You/We/They + verb, He/She/It + verb+s',
        exercises: [],
        xpReward: 15,
        estimatedMinutes: 7,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u4-l3',
        unitId: 'a1-unit-4',
        order: 3,
        title: 'Evening Activities',
        type: 'lesson',
        description: 'What do you do at night?',
        vocabularyIntro: 'have dinner, watch TV, do homework, go to bed, sleep',
        exercises: [],
        xpReward: 10,
        estimatedMinutes: 5,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u4-practice',
        unitId: 'a1-unit-4',
        order: 4,
        title: 'Practice',
        type: 'practice',
        description: 'Review daily routines',
        exercises: [],
        xpReward: 15,
        estimatedMinutes: 7,
        status: 'locked',
        completionRate: 0,
        stars: 0
      }
    ]
  },
  {
    id: 'a1-unit-5',
    order: 5,
    title: 'Food & Drinks',
    description: 'Order food and talk about meals',
    icon: '🍕',
    color: '#FF4B4B',
    level: 'A1',
    status: 'locked',
    totalXP: 120,
    earnedXP: 0,
    completionRate: 0,
    lessons: [
      {
        id: 'a1-u5-l1',
        unitId: 'a1-unit-5',
        order: 1,
        title: 'Common Foods',
        type: 'lesson',
        description: 'Basic food vocabulary',
        vocabularyIntro: 'bread, rice, pasta, chicken, fish, vegetables, fruit, eggs',
        exercises: [],
        xpReward: 10,
        estimatedMinutes: 5,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u5-l2',
        unitId: 'a1-unit-5',
        order: 2,
        title: 'Drinks',
        type: 'lesson',
        description: 'Beverages',
        vocabularyIntro: 'water, juice, coffee, tea, milk, soda',
        exercises: [],
        xpReward: 10,
        estimatedMinutes: 5,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u5-l3',
        unitId: 'a1-unit-5',
        order: 3,
        title: 'At the Restaurant',
        type: 'lesson',
        description: 'Ordering food',
        grammarTip: 'Use "I\'d like..." or "Can I have..." to order',
        vocabularyIntro: 'menu, order, waiter, bill, please, thank you',
        exercises: [],
        xpReward: 15,
        estimatedMinutes: 7,
        status: 'locked',
        completionRate: 0,
        stars: 0
      },
      {
        id: 'a1-u5-story',
        unitId: 'a1-unit-5',
        order: 4,
        title: 'Story: At the Café',
        type: 'story',
        description: 'Read and listen to a story',
        exercises: [],
        xpReward: 20,
        estimatedMinutes: 10,
        status: 'locked',
        completionRate: 0,
        stars: 0
      }
    ]
  }
];

// Helper functions
export function getUnitById(unitId: string): Unit | undefined {
  return A1_UNITS.find(u => u.id === unitId);
}

export function getLessonById(lessonId: string): { unit: Unit; lesson: Lesson } | undefined {
  for (const unit of A1_UNITS) {
    const lesson = unit.lessons.find(l => l.id === lessonId);
    if (lesson) {
      return { unit, lesson };
    }
  }
  return undefined;
}

export function getNextLesson(currentLessonId: string): { unit: Unit; lesson: Lesson } | undefined {
  for (let i = 0; i < A1_UNITS.length; i++) {
    const unit = A1_UNITS[i];
    const lessonIndex = unit.lessons.findIndex(l => l.id === currentLessonId);
    
    if (lessonIndex !== -1) {
      // Check if there's a next lesson in the same unit
      if (lessonIndex < unit.lessons.length - 1) {
        return { unit, lesson: unit.lessons[lessonIndex + 1] };
      }
      
      // Otherwise, return first lesson of next unit
      if (i < A1_UNITS.length - 1) {
        const nextUnit = A1_UNITS[i + 1];
        return { unit: nextUnit, lesson: nextUnit.lessons[0] };
      }
    }
  }
  return undefined;
}

export function calculateTotalXP(units: Unit[]): number {
  return units.reduce((total, unit) => total + unit.earnedXP, 0);
}

export function calculateOverallProgress(units: Unit[]): number {
  const totalLessons = units.reduce((sum, unit) => sum + unit.lessons.length, 0);
  const completedLessons = units.reduce((sum, unit) => 
    sum + unit.lessons.filter(l => l.status === 'completed').length, 0
  );
  return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
}

import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 5;
const LEVEL = 'b1';

// SHARDS 1-2: Social Sciences Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'History & Archeology',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is an "artifact"?',
      'The term "ancient" refers to:',
      'What does "excavate" mean?',
      'A "civilization" is:',
      'What is a "chronicle"?',
      'What is "heritage"?',
      'A "dynasty" is:',
      'What is a "relic"?',
      'The word "era" means:',
      'What is "historiography"?'
    ][i],
    options: [
      ['An object made by a human', 'A natural rock', 'A type of animal'],
      ['Belonging to the very distant past', 'Brand new', 'Future-oriented'],
      ['To dig out and remove', 'To build a wall', 'To paint a picture'],
      ['A complex society with culture', 'A single house', 'A small forest'],
      ['A factual written account', 'A fictional story', 'A song lyrics'],
      ['Inherited traditions or culture', 'A type of food', 'A fast car'],
      ['A line of hereditary rulers', 'A type of boat', 'A single king with no heirs'],
      ['An object surviving from an earlier time', 'A new invention', 'A modern tool'],
      ['A long and distinct period of history', 'A single day', 'A short meeting'],
      ['The study of historical writing', 'Drawing maps', 'Cooking old recipes']
    ][i],
    correctAnswer: [
      'An object made by a human', 'Belonging to the very distant past', 'To dig out and remove',
      'A complex society with culture', 'A factual written account', 'Inherited traditions or culture',
      'A line of hereditary rulers', 'An object surviving from an earlier time', 'A long and distinct period of history',
      'The study of historical writing'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Sociology & Psychology',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "urbanization"?',
      'A "demographic" relates to:',
      'What is "perception"?',
      'The term "norms" refers to:',
      'What is "cognitive"?',
      'A "hierarchy" is:',
      'What is "stratification"?',
      'The word "bias" means:',
      'What is "altruism"?',
      'A "phenomenon" is:'
    ][i],
    options: [
      ['Movement to cities', 'Planting trees', 'Building ships'],
      ['Populations and groups', 'Mountain ranges', 'Star systems'],
      ['The ability to see or interpret', 'Running fast', 'Sleeping deeply'],
      ['Social standards of behavior', 'Mathematical rules', 'Types of clouds'],
      ['Relating to mental processes', 'Physical strength', 'Electronic devices'],
      ['A system of ranking', 'A circle of friends', 'A straight line'],
      ['Arrangement into layers or classes', 'Mixing ingredients', 'Cleaning a room'],
      ['Prejudice in favor or against', 'Scientific fact', 'Total indifference'],
      ['Selfless concern for others', 'Selfishness', 'Laziness'],
      ['An observable fact or event', 'A total lie', 'A secret plan']
    ][i],
    correctAnswer: [
      'Movement to cities', 'Populations and groups', 'The ability to see or interpret',
      'Social standards of behavior', 'Relating to mental processes', 'A system of ranking',
      'Arrangement into layers or classes', 'Prejudice in favor or against', 'Selfless concern for others',
      'An observable fact or event'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Passive Voice', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: The artifact ____ in 1920.`, options: ['was discovered', 'is discovering', 'discovered'], correctAnswer: 'was discovered', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Relative Clauses', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: The historian ____ wrote this book is famous.`, options: ['who', 'which', 'where'], correctAnswer: 'who', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: The Industrial Revolution', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What changed in the 18th century?`, options: ['Manual to machine labor', 'Use of horses', 'Discovery of fire'], correctAnswer: 'Manual to machine labor', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: Ancient Rome', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What was the Pax Romana?`, options: ['A period of peace', 'A type of food', 'A famous general'], correctAnswer: 'A period of peace', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: Sociology Lecture', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the main topic?`, options: ['Social mobility', 'Biology of plants', 'Space travel'], correctAnswer: 'Social mobility', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: History Podcast', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: Who was the primary leader mentioned?`, options: ['Abraham Lincoln', 'Julius Caesar', 'Napoleon'], correctAnswer: 'Abraham Lincoln', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Academic Verbs', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Verb Question ${i+1}: Define "Analyze".`, options: ['Examine in detail', 'Ignore completely', 'Copy exactly'], correctAnswer: 'Examine in detail', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Social Science Collocations', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Collocation Question ${i+1}: "Socio-economic ____"`, options: ['status', 'color', 'height'], correctAnswer: 'status', points: 1 })) };

export const B1_WEEK_5 = createShardedToeflUnit(
  'toefl-b1-w5',
  'Week 5: Social Sciences',
  'Explore the complexities of human society, history, and the mind.',
  ['Understand historical timelines and terminology', 'Use passive voice for academic descriptions', 'Identify societal structures and norms'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 2;
const LEVEL = 'b1';

// SHARDS 1-2: Social Sciences Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Social Sciences Foundation',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "sociology"?',
      'The term "culture" refers to:',
      'What does "demographics" study?',
      'An "urban" area is:',
      'What is a "norm" in social science?',
      'A "community" is a group of people who:',
      'What is "globalization"?',
      'The term "diversity" means:',
      'A "citizen" is a member of:',
      'What is "migration"?'
    ][i],
    options: [
      ['Study of society', 'Study of plants', 'Study of stars'],
      ['Shared beliefs and customs', 'Type of weather', 'Personal bank account'],
      ['Statistics of populations', 'History of music', 'Deep sea creatures'],
      ['A city area', 'A forest', 'A desert'],
      ['A standard of behavior', 'A mathematical formula', 'A type of tool'],
      ['Live together or share interests', 'Speak only one language', 'Work in the same building'],
      ['Increasing global connectivity', 'Local farming', 'Staying in one country'],
      ['Variety and difference', 'Sameness', 'Lack of options'],
      ['A nation or state', 'A sports team', 'A family only'],
      ['Moving from one place to another', 'Staying in the same house', 'Building a new city']
    ][i],
    correctAnswer: [
      'Study of society', 'Shared beliefs and customs', 'Statistics of populations',
      'A city area', 'A standard of behavior', 'Live together or share interests',
      'Increasing global connectivity', 'Variety and difference', 'A nation or state',
      'Moving from one place to another'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'History and Time',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is an "era"?',
      'An "artifact" is:',
      'What is a "chronicle"?',
      'A "decade" is:',
      'The "Renaissance" was a period of:',
      'What is "archaeology"?',
      'An "ancestor" is someone from:',
      'What is a "manuscript"?',
      'A "landmark" is:',
      'What is "heritage"?'
    ][i],
    options: [
      ['A long period of history', 'A small tool', 'A type of food'],
      ['An object made by humans', 'A natural rock', 'A modern machine'],
      ['A factual written account', 'A fictional story', 'A drawing'],
      ['10 years', '100 years', '1000 years'],
      ['Rebirth and cultural change', 'War and destruction', 'Extreme cold'],
      ['Study of human history through ruins', 'Study of the future', 'Study of space'],
      ['Your family past', 'Your future children', 'Your neighbors'],
      ['A handwritten document', 'A printed book', 'A digital file'],
      ['A famous building or site', 'A secret location', 'A new road'],
      ['Valued objects/qualities from the past', 'New technology', 'Personal debt']
    ][i],
    correctAnswer: [
      'A long period of history', 'An object made by humans', 'A factual written account',
      '10 years', 'Rebirth and cultural change', 'Study of human history through ruins',
      'Your family past', 'A handwritten document', 'A famous building or site',
      'Valued objects/qualities from the past'
    ][i],
    points: 1
  }))
};

// SHARDS 3-10: Templates for Massive Expansion (Grammar, Reading, Listening)
const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Subject-Verb Agreement', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: Choose the correct verb form for academic writing.`, options: ['studies', 'study', 'studying'], correctAnswer: 'studies', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Passive Voice', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: Identify the passive voice construction.`, options: ['Was conducted', 'Conducted', 'Conducting'], correctAnswer: 'Was conducted', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: The Printing Press', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: Based on the text, what was an impact of the printing press?`, options: ['Increased literacy', 'Reduced travel', 'Lowered taxes'], correctAnswer: 'Increased literacy', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: Industrialization', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: Why did people move to cities?`, options: ['Jobs', 'Weather', 'Family'], correctAnswer: 'Jobs', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: History Lecture', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the professor\'s main point?`, options: ['Trade routes', 'Climate change', 'Political leaders'], correctAnswer: 'Trade routes', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Library Search', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: Where is the source located?`, options: ['Special collections', 'Main stacks', 'Online'], correctAnswer: 'Special collections', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Academic Transition Words', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Transition Question ${i+1}: Use of "Consequently".`, options: ['Result', 'Contrast', 'Addition'], correctAnswer: 'Result', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Academic Suffixes', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Suffix Question ${i+1}: "-tion" usually indicates:`, options: ['A noun', 'A verb', 'An adjective'], correctAnswer: 'A noun', points: 1 })) };

export const B1_WEEK_2 = createShardedToeflUnit(
  'toefl-b1-w2',
  'Week 2: Social Sciences & Academic Writing',
  'Deep dive into sociology, history, and the mechanics of formal English.',
  ['Master social science vocabulary', 'Apply advanced subject-verb agreement', 'Analyze cause and effect in history texts'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

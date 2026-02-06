import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 6;
const LEVEL = 'b1';

// SHARDS 1-2: Applied Sciences & Tech Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Technology & Engineering',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is an "algorithm"?',
      'The word "infrastructure" refers to:',
      'What is "innovation"?',
      'A "prototype" is:',
      'What does "efficiency" mean?',
      'The term "bandwidth" relates to:',
      'What is "encryption"?',
      'A "circuit" is:',
      'What is "automation"?',
      'The word "patent" means:'
    ][i],
    options: [
      ['A step-by-step procedure', 'A type of metal', 'A musical note'],
      ['Basic physical structures', 'A type of plant', 'A small bug'],
      ['A new method or idea', 'An old tradition', 'A mistake'],
      ['A preliminary model', 'A finished product', 'A secret document'],
      ['Achieving maximum productivity', 'Being very slow', 'Using too much power'],
      ['Data transfer capacity', 'The weight of a cable', 'The color of a screen'],
      ['Converting information into code', 'Deleting files', 'Printing a document'],
      ['A path for electrical current', 'A type of circle', 'A racing track'],
      ['Use of automatic equipment', 'Doing everything by hand', 'Hiring more people'],
      ['A government authority or license', 'A type of paint', 'A medical prescription']
    ][i],
    correctAnswer: [
      'A step-by-step procedure', 'Basic physical structures', 'A new method or idea',
      'A preliminary model', 'Achieving maximum productivity', 'Data transfer capacity',
      'Converting information into code', 'A path for electrical current', 'Use of automatic equipment',
      'A government authority or license'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Medicine & Health Science',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "diagnosis"?',
      'A "symptom" is:',
      'What is "immunity"?',
      'The term "chronic" refers to:',
      'What is "therapeutic"?',
      'A "vaccine" is used to:',
      'What is "metabolism"?',
      'The word "epidemic" means:',
      'What is "genetics"?',
      'A "placebo" is:'
    ][i],
    options: [
      ['Identification of an illness', 'A type of medicine', 'A hospital bed'],
      ['A physical or mental feature of disease', 'A cure', 'A doctor\'s name'],
      ['Ability to resist infection', 'Feeling very tired', 'A type of bone'],
      ['Persisting for a long time', 'Happening once', 'Very fast'],
      ['Relating to healing', 'Causing pain', 'Expensive'],
      ['Stimulate immune response', 'Stop bleeding', 'Improve vision'],
      ['Chemical processes in a body', 'How fast one runs', 'A type of food'],
      ['Widespread occurrence of disease', 'A small cold', 'A type of needle'],
      ['Study of heredity', 'Study of rocks', 'Study of stars'],
      ['A substance with no active effect', 'A powerful drug', 'A type of surgery']
    ][i],
    correctAnswer: [
      'Identification of an illness', 'A physical or mental feature of disease', 'Ability to resist infection',
      'Persisting for a long time', 'Relating to healing', 'Stimulate immune response',
      'Chemical processes in a body', 'Widespread occurrence of disease', 'Study of heredity',
      'A substance with no active effect'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Future Tenses (Will/Going to)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: Scientists ____ find a cure soon.`, options: ['will', 'going to', 'are'], correctAnswer: 'will', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Modal Verbs of Probability', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: This new tech ____ change everything.`, options: ['might', 'should', 'must'], correctAnswer: 'might', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: Artificial Intelligence', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What is Machine Learning?`, options: ['Systems that learn from data', 'Building robots', 'Fixing computers'], correctAnswer: 'Systems that learn from data', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: Renewable Energy', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: Name a renewable source.`, options: ['Solar', 'Coal', 'Gas'], correctAnswer: 'Solar', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: Tech Startup Pitch', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the product?`, options: ['A new app', 'A flying car', 'A smart toaster'], correctAnswer: 'A new app', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Medical Seminar', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the doctor suggesting?`, options: ['Preventative care', 'More surgery', 'Higher prices'], correctAnswer: 'Preventative care', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Action Verbs in Tech', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Tech Verb ${i+1}: Define "Implement".`, options: ['Put into effect', 'Plan but never do', 'Destroy'], correctAnswer: 'Put into effect', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Medical Prefixes (Bio, Neuro, Cardio)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Prefix Question ${i+1}: "Neuro-" relates to:`, options: ['The brain', 'The heart', 'Life'], correctAnswer: 'The brain', points: 1 })) };

export const B1_WEEK_6 = createShardedToeflUnit(
  'toefl-b1-w6',
  'Week 6: Applied Sciences',
  'From computer code to medical breakthroughs, master the language of modern tech.',
  ['Utilize technical vocabulary for engineering and medicine', 'Express probability and future predictions', 'Understand the mechanics of innovation'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

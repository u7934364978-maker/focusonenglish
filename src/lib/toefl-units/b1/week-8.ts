import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 8;
const LEVEL = 'b1';

// SHARDS 1-2: Law & Government Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Legal Systems & Terminology',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "jurisdiction"?',
      'The word "defendant" refers to:',
      'What is a "statute"?',
      'A "plaintiff" is:',
      'What does "litigation" mean?',
      'The term "verdict" relates to:',
      'What is "negligence"?',
      'An "appeal" is:',
      'What is "testimony"?',
      'The word "prosecute" means:'
    ][i],
    options: [
      ['Official power to make legal decisions', 'A type of fruit', 'A scientific theory'],
      ['Person accused in a court', 'Person who starts a case', 'The judge'],
      ['A written law', 'A small statue', 'A story'],
      ['Person who brings a case against another', 'Person accused', 'A witness'],
      ['Process of taking legal action', 'Building a bridge', 'Painting a house'],
      ['A decision on a disputed issue', 'A type of dictionary', 'A medical checkup'],
      ['Failure to take proper care', 'Being very careful', 'A type of engine'],
      ['Request for a higher court to review', 'A loud shout', 'A type of plant'],
      ['Formal written or spoken statement', 'A type of test', 'A secret plan'],
      ['Institute legal proceedings against', 'Help someone', 'Buy a car']
    ][i],
    correctAnswer: [
      'Official power to make legal decisions', 'Person accused in a court', 'A written law',
      'Person who brings a case against another', 'Process of taking legal action', 'A decision on a disputed issue',
      'Failure to take proper care', 'Request for a higher court to review', 'Formal written or spoken statement',
      'Institute legal proceedings against'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Government & Politics',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "bureaucracy"?',
      'A "constitution" is:',
      'What is "sovereignty"?',
      'The term "referendum" refers to:',
      'What is "legislature"?',
      'An "executive" branch:',
      'What is "diplomacy"?',
      'The word "ratify" means:',
      'What is an "amendment"?',
      'A "policy" is:'
    ][i],
    options: [
      ['System of government with many officials', 'A type of desk', 'A fast car'],
      ['Fundamental principles of a state', 'A type of health', 'A school building'],
      ['Supreme power or authority', 'Being very poor', 'Running fast'],
      ['A general vote on a single political question', 'A type of book', 'A secret meeting'],
      ['A body that makes laws', 'A group of dancers', 'A type of food'],
      ['Carries out laws', 'Makes laws', 'Interpret laws'],
      ['Managing international relations', 'Drawing maps', 'Cooking'],
      ['Sign or give formal consent to', 'Destroy', 'Ignore'],
      ['A minor change in a document', 'A complete rebuild', 'A mistake'],
      ['A course or principle of action', 'A type of police', 'A large city']
    ][i],
    correctAnswer: [
      'System of government with many officials', 'Fundamental principles of a state', 'Supreme power or authority',
      'A general vote on a single political question', 'A body that makes laws', 'Carries out laws',
      'Managing international relations', 'Sign or give formal consent to', 'A minor change in a document',
      'A course or principle of action'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Modals of Obligation (Must/Have to)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: Citizens ____ follow the law.`, options: ['must', 'might', 'should'], correctAnswer: 'must', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Reported Speech', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: The judge said that the defendant ____ guilty.`, options: ['was', 'is', 'be'], correctAnswer: 'was', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: The Magna Carta', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What did the Magna Carta do?`, options: ['Limited the King\'s power', 'Gave everyone a car', 'Started a war'], correctAnswer: 'Limited the King\'s power', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: Separation of Powers', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: Name the three branches.`, options: ['Legislative, Executive, Judicial', 'Police, Army, Navy', 'North, South, East'], correctAnswer: 'Legislative, Executive, Judicial', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: Courtroom Drama', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the witness saying?`, options: ['He saw the incident', 'He was sleeping', 'He likes cake'], correctAnswer: 'He saw the incident', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Political Debate', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the main disagreement?`, options: ['Tax policy', 'The color of the room', 'Lunch'], correctAnswer: 'Tax policy', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Legal Verbs', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Legal Verb ${i+1}: Define "Acquit".`, options: ['Free from a criminal charge', 'Put in jail', 'Fine'], correctAnswer: 'Free from a criminal charge', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Common Law Latin Roots', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Latin Root ${i+1}: "Jur-" usually means:`, options: ['Law/Right', 'Water', 'Speed'], correctAnswer: 'Law/Right', points: 1 })) };

export const B1_WEEK_8 = createShardedToeflUnit(
  'toefl-b1-w8',
  'Week 8: Law & Government',
  'Understand the rules that govern societies and the systems that enforce them.',
  ['Define core legal and political terminology', 'Use modals for obligation and permission', 'Analyze constitutional and legislative texts'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 12;
const LEVEL = 'b1';

// SHARDS 1-2: Genetics & Biotech Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Foundations of Genetics',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "gene"?',
      'The word "chromosome" refers to:',
      'What is "heredity"?',
      'A "mutation" is:',
      'What does "DNA" stand for?',
      'The term "trait" relates to:',
      'What is "inheritance"?',
      'A "genome" is:',
      'What is "alleles"?',
      'The word "genotype" means:'
    ][i],
    options: [
      ['A unit of heredity', 'A type of cell', 'A bone'],
      ['Threadlike structure of nucleic acids', 'A type of plant', 'A small bug'],
      ['Passing on of traits from parents', 'Eating healthy', 'Running fast'],
      ['A change in the DNA sequence', 'Staying the same', 'A type of fruit'],
      ['Deoxyribonucleic acid', 'Data Network Access', 'Daily Nutritional Aid'],
      ['A distinguishing quality or characteristic', 'A type of car', 'A secret'],
      ['Process by which genetic info is passed', 'Buying a house', 'Winning a race'],
      ['Complete set of genes in an organism', 'A single cell', 'A type of book'],
      ['One of two or more alternative forms of a gene', 'A type of animal', 'A planet'],
      ['The genetic constitution of an individual', 'The physical appearance', 'The height']
    ][i],
    correctAnswer: [
      'A unit of heredity', 'Threadlike structure of nucleic acids', 'Passing on of traits from parents',
      'A change in the DNA sequence', 'Deoxyribonucleic acid', 'A distinguishing quality or characteristic',
      'Process by which genetic info is passed', 'Complete set of genes in an organism', 'One of two or more alternative forms of a gene',
      'The genetic constitution of an individual'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Applied Biotechnology',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "cloning"?',
      'A "GMO" is:',
      'What is "bioremediation"?',
      'The term "CRISPR" relates to:',
      'What is "bioethics"?',
      'A "synthetic" organism:',
      'What is "fermentation"?',
      'The word "enzyme" means:',
      'What is "stem cell research"?',
      'A "biopsy" is:'
    ][i],
    options: [
      ['Producing identical copies', 'Creating something new', 'Destroying cells'],
      ['Genetically Modified Organism', 'General Medical Order', 'Good Morning Organic'],
      ['Use of organisms to clean pollution', 'Building a house', 'Cooking'],
      ['Gene editing technology', 'A type of cereal', 'A fast car'],
      ['Ethics of medical and biological research', 'Study of rocks', 'Study of stars'],
      ['Created by human synthesis', 'Found in nature', 'A type of ghost'],
      ['Chemical breakdown of a substance', 'Freezing something', 'Boiling water'],
      ['A biological catalyst', 'A type of sugar', 'A bone'],
      ['Study of undifferentiated cells', 'Study of leaves', 'Study of space'],
      ['Examination of tissue from a body', 'A type of medicine', 'A hospital bed']
    ][i],
    correctAnswer: [
      'Producing identical copies', 'Genetically Modified Organism', 'Use of organisms to clean pollution',
      'Gene editing technology', 'Ethics of medical and biological research', 'Created by human synthesis',
      'Chemical breakdown of a substance', 'A biological catalyst', 'Study of undifferentiated cells',
      'Examination of tissue from a body'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Infinitives vs Gerunds', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: Scientists enjoy ____ DNA.`, options: ['studying', 'to study', 'study'], correctAnswer: 'studying', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Adverbial Clauses of Concession', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: ____ it is complex, we understand it.`, options: ['Although', 'Because', 'Since'], correctAnswer: 'Although', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: Mendel\'s Pea Plants', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What did Mendel discover?`, options: ['Principles of inheritance', 'A new type of pea', 'How to cook peas'], correctAnswer: 'Principles of inheritance', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: The Human Genome Project', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What was the goal?`, options: ['Map the human genome', 'Create a new human', 'Find aliens'], correctAnswer: 'Map the human genome', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: Genetics Lab', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the student doing?`, options: ['Extracting DNA', 'Eating lunch', 'Drawing a map'], correctAnswer: 'Extracting DNA', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Biotech Conference', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the speaker's concern?`, options: ['Ethical implications', 'The price of tickets', 'The weather'], correctAnswer: 'Ethical implications', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Biotech Verbs', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Biotech Verb ${i+1}: Define "Sequence".`, options: ['Determine the order', 'Mix randomly', 'Destroy'], correctAnswer: 'Determine the order', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Suffixes ( -ome, -ics, -ase)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Suffix Question ${i+1}: "-ase" often denotes:`, options: ['An enzyme', 'A sugar', 'A planet'], correctAnswer: 'An enzyme', points: 1 })) };

export const B1_WEEK_12 = createShardedToeflUnit(
  'toefl-b1-w12',
  'Week 12: Genetics & Biotech',
  'Unlock the code of life and explore the frontiers of modern biology.',
  ['Define core genetic terminology (DNA, genes, traits)', 'Analyze the ethical and practical applications of biotechnology', 'Use complex sentence structures for scientific explanation'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

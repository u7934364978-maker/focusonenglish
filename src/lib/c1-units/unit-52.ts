import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 52;

export const C1_U52_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Genetics & Bioengineering',
  explanation: 'Advanced terms for discussing DNA, genetic modification, and medical science.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ of the human genome was a milestone. (map)',
      '___ modified organisms (GMOs) are common. (gene)',
      'They are researching ___ cell therapy. (stem)',
      '___ engineering can eliminate diseases. (genetic)',
      'The ___ of the DNA was analyzed. (sequence)',
      '___ is the use of living systems in technology. (biotech)',
      'She is an expert in ___ . (bioethics)',
      'The ___ of the new drug are promising. (clinical)',
      'We must prevent genetic ___ . (discriminate)',
      '___ is the creation of a copy of an organism. (clone)'
    ][i],
    correctAnswer: [
      'mapping',
      'Genetically',
      'stem',
      'Genetic',
      'sequence',
      'Biotechnology',
      'bioethics',
      'trials',
      'discrimination',
      'Cloning'
    ][i],
    explanation: 'Correct biotechnology terminology.',
    points: 1
  }))
};

export const C1_U52_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Bioethical Dilemmas',
  explanation: 'Identifying and defining concepts related to the ethical boundaries of biotechnology.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "CRISPR"?',
      'What is "gene editing"?',
      'What are "designer babies"?',
      'What is "synthetic biology"?',
      'What is "informed consent"?',
      'What is "biodiversity"?',
      'What is a "transgenic" organism?',
      'What is "eugenics"?',
      'What is "biopiracy"?',
      'What is "patent" in biotech?'
    ][i],
    options: [
      ['A tool for editing genes', 'A type of food', 'A secret organization'],
      ['Making changes to DNA', 'Writing a book about genes', 'A new type of jeans'],
      ['Babies whose traits are genetically selected', 'Children who design clothes', 'A toy brand'],
      ['Designing and building new biological parts', 'Studying plants', 'A plastic factory'],
      ['Agreement based on full disclosure of risks', 'Knowing a secret', 'Forced participation'],
      ['Variety of life in a particular habitat', 'A type of biology', 'A large forest'],
      ['Organism containing genes from another species', 'A fast car', 'A movie character'],
      ['Practice of improving human population genetics', 'Study of plants', 'A type of music'],
      ['Exploitation of biological resources without permission', 'Stealing boats', 'A type of medicine'],
      ['Legal right to exclude others from using an invention', 'A hospital', 'A secret code']
    ][i],
    correctAnswer: [
      'A tool for editing genes',
      'Making changes to DNA',
      'Babies whose traits are genetically selected',
      'Designing and building new biological parts',
      'Agreement based on full disclosure of risks',
      'Variety of life in a particular habitat',
      'Organism containing genes from another species',
      'Practice of improving human population genetics',
      'Exploitation of biological resources without permission',
      'Legal right to exclude others from using an invention'
    ][i],
    explanation: 'Correct definition of bioethical concept.',
    points: 1
  }))
};

export const C1_U52_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Modal Verbs for Degrees of Certainty',
  explanation: 'Using modal verbs and adverbs to express varying degrees of certainty about scientific outcomes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'This breakthrough ___ change medicine forever.',
      'It is ___ that we will find a cure soon.',
      'Genetic engineering ___ well be the solution.',
      'We ___ see significant progress this decade.',
      'The technology ___ be misused in the wrong hands.',
      'There ___ be unforeseen consequences.',
      'Scientists ___ have discovered a new method.',
      'The results ___ reasonably be expected by June.',
      'This ___ arguably be the most important discovery.',
      'We ___ inevitably face ethical challenges.'
    ][i],
    options: [
      ['could potentially', 'potentially could', 'could'],
      ['highly likely', 'likely very', 'certainly'],
      ['might', 'must', 'should'],
      ['are bound to', 'bound to', 'will bound to'],
      ['could conceivably', 'conceivably could', 'could'],
      ['may arguably', 'arguably may', 'may'],
      ['may', 'can', 'should'],
      ['can', 'may', 'could'],
      ['could', 'must', 'should'],
      ['will', 'shall', 'may']
    ][i],
    correctAnswer: [
      'could potentially',
      'highly likely',
      'might',
      'are bound to',
      'could conceivably',
      'may arguably',
      'may',
      'can',
      'could',
      'will'
    ][i],
    explanation: 'Correct use of modals for expressing certainty.',
    points: 1
  }))
};

export const unit52: Lesson = createC1Unit(
  'c1-u52',
  'Biotechnology & The Human Genome',
  'Advanced vocabulary and grammar for discussing genetics, bioethics, and scientific certainty.',
  ['Use complex terminology for biotechnology and genetics', 'Identify and define key bioethical concepts', 'Use modal verbs to express precise degrees of scientific certainty'],
  [
    C1_U52_BLOCK1, C1_U52_BLOCK2, C1_U52_BLOCK3,
    C1_U52_BLOCK1, C1_U52_BLOCK2, C1_U52_BLOCK3,
    C1_U52_BLOCK1, C1_U52_BLOCK2, C1_U52_BLOCK3, C1_U52_BLOCK1
  ]
);

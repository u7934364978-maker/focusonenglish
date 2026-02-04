import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 55;

export const C1_U55_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Bioengineering Terminology',
  explanation: 'Advanced terms for discussing genetic modification and biotechnology.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      '___ engineering allows for precise modifications. (gene)',
      'The ___ of DNA is a complex process. (splice)',
      '___ modified organisms (GMOs) are common. (genetics)',
      'We must consider the ___ of this research. (ethics)',
      '___ therapy can treat genetic disorders. (gene)',
      'The ___ of a new species is controversial. (creation)',
      '___ cells have potential for many treatments. (stem)',
      '___ cloning has many ethical implications. (human)',
      'The ___ of biotechnology is rapid. (advance)',
      '___ technology can revolutionize medicine. (bio)'
    ][i],
    correctAnswer: [
      'Genetic',
      'splicing',
      'Genetically',
      'ethics',
      'Gene',
      'creation',
      'Stem',
      'Human',
      'advancement',
      'Biotechnological'
    ][i],
    explanation: 'Correct bioengineering terminology.',
    points: 1
  }))
};

export const C1_U55_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Ethical Dilemmas in Bioengineering',
  explanation: 'Identifying and discussing the ethical challenges posed by biotechnology.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "designer babies"?',
      'What is "eugenics"?',
      'What is "bioethics"?',
      'What is "transhumanism"?',
      'What is "genetic privacy"?',
      'What is "biopiracy"?',
      'What is "the slippery slope" argument?',
      'What is "informed consent"?',
      'What is "synthetic biology"?',
      'What is "bioterrorism"?'
    ][i],
    options: [
      ['Genetically modified embryos for specific traits', 'Babies in nice clothes', 'A type of toy'],
      ['Improving human population by controlled breeding', 'A type of plant', 'A science fiction movie'],
      ['Study of ethical issues in biology and medicine', 'Ethics for animals', 'A new type of drug'],
      ['Belief in using tech to enhance human abilities', 'A type of car', 'A movie about robots'],
      ['Right to keep genetic information private', 'Having a secret DNA', 'A type of password'],
      ['Exploitation of biological resources without permission', 'Pirates on a boat', 'A type of virus'],
      ['Idea that one step will lead to unintended consequences', 'A literal slide', 'A type of hill'],
      ['Permission granted with full knowledge of risks', 'Saying yes to anything', 'A type of document'],
      ['Redesigning organisms for useful purposes', 'Fake plants', 'A type of toy'],
      ['Use of biological agents to cause harm', 'Terrorism with bombs', 'A scary movie']
    ][i],
    correctAnswer: [
      'Genetically modified embryos for specific traits',
      'Improving human population by controlled breeding',
      'Study of ethical issues in biology and medicine',
      'Belief in using tech to enhance human abilities',
      'Right to keep genetic information private',
      'Exploitation of biological resources without permission',
      'Idea that one step will lead to unintended consequences',
      'Permission granted with full knowledge of risks',
      'Redesigning organisms for useful purposes',
      'Use of biological agents to cause harm'
    ][i],
    explanation: 'Correct definition of bioethical concept.',
    points: 1
  }))
};

export const C1_U55_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Conditional Structures for Hypothetical Scenarios',
  explanation: 'Using complex conditional sentences to discuss the potential consequences and ethical implications of bioengineering.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'If we ___ human cloning, what would happen?',
      'Were we to ___ DNA, would it be ethical?',
      'Should they ___ this tech, the risks would be high.',
      'Had we ___ the consequences, we might have acted differently.',
      'If the technology ___ available, would you use it?',
      '___ we proceed, we must ensure safety.',
      'Provided that it ___ ethical, the project can continue.',
      'Unless we ___ regulations, things could go wrong.',
      'But for this technology, we ___ not have a cure.',
      'If only we ___ more about the long-term effects.'
    ][i],
    options: [
      ['permitted', 'permit', 'permitting'],
      ['modify', 'modified', 'modifying'],
      ['misuse', 'misused', 'misusing'],
      ['foreseen', 'foresee', 'foreseeing'],
      ['were', 'was', 'be'],
      ['Should', 'Could', 'Would'],
      ['is', 'are', 'be'],
      ['enforce', 'enforced', 'enforcing'],
      ['would', 'will', 'did'],
      ['knew', 'know', 'known']
    ][i],
    correctAnswer: [
      'permitted',
      'modify',
      'misuse',
      'foreseen',
      'were',
      'Should',
      'is',
      'enforce',
      'would',
      'knew'
    ][i],
    explanation: 'Correct use of conditional structures for hypothetical scenarios.',
    points: 1
  }))
};

export const unit55: Lesson = createC1Unit(
  'c1-u55',
  'The Ethics of Bioengineering',
  'Advanced vocabulary and grammar for discussing genetic modification, biotechnology, and ethical dilemmas using complex conditional structures.',
  ['Use precise terminology for bioengineering', 'Identify and define key ethical concepts in biotechnology', 'Apply complex conditional structures to discuss hypothetical scenarios'],
  [
    C1_U55_BLOCK1, C1_U55_BLOCK2, C1_U55_BLOCK3,
    C1_U55_BLOCK1, C1_U55_BLOCK2, C1_U55_BLOCK3,
    C1_U55_BLOCK1, C1_U55_BLOCK2, C1_U55_BLOCK3, C1_U55_BLOCK1
  ]
);

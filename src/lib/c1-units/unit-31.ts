import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 31;

export const C1_U31_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Environmental Terminology',
  explanation: 'Advanced terms for discussing climate change and sustainability.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ effect is warming the planet. (green)',
      'We must reduce our carbon ___ . (print)',
      '___ energy sources are essential. (renew)',
      'Ocean ___ is a major threat to coral reefs. (acid)',
      'Deforestation leads to habitat ___ . (lose)',
      '___ development meets present needs without compromising the future. (sustain)',
      'The melting of ___ caps is causing sea levels to rise. (ice)',
      'We need to mitigate the impact of ___ events. (extreme)',
      '___ is the process of turning fertile land into desert. (desert)',
      '___ species are at risk of extinction. (danger)'
    ][i],
    correctAnswer: [
      'greenhouse',
      'footprint',
      'Renewable',
      'acidification',
      'loss',
      'Sustainable',
      'polar',
      'extreme',
      'Desertification',
      'Endangered'
    ][i],
    explanation: 'Correct environmental terminology.',
    points: 1
  }))
};

export const C1_U31_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Ecological Concepts',
  explanation: 'Identifying and defining complex ecological processes and solutions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "biodiversity"?',
      'What does "biodegradable" mean?',
      'What is "reforestation"?',
      'What is a "circular economy"?',
      'What does "carbon neutral" mean?',
      'What is "ecosystem resilience"?',
      'What is "sustainable agriculture"?',
      'What is "greenwashing"?',
      'What is "urban sprawl"?',
      'What is "conservation"?'
    ][i],
    options: [
      ['Variety of life in an ecosystem', 'A type of biology', 'A large forest'],
      ['Can be broken down naturally', 'Made of plastic', 'Very expensive'],
      ['Planting trees in deforested areas', 'Cutting down trees', 'Building parks'],
      ['System where waste is minimized', 'An economy that uses cash', 'A fast economy'],
      ['No net release of CO2', 'Using a lot of coal', 'A black car'],
      ['Ability of an ecosystem to recover', 'A strong plant', 'A deep ocean'],
      ['Farming that protects the environment', 'Farming without water', 'Industrial farming'],
      ['Misleading claims about environmentalism', 'Painting a house green', 'Washing clothes'],
      ['Uncontrolled expansion of urban areas', 'A type of city park', 'A fast train'],
      ['Protection of natural resources', 'Building a dam', 'Mining']
    ][i],
    correctAnswer: [
      'Variety of life in an ecosystem',
      'Can be broken down naturally',
      'Planting trees in deforested areas',
      'System where waste is minimized',
      'No net release of CO2',
      'Ability of an ecosystem to recover',
      'Farming that protects the environment',
      'Misleading claims about environmentalism',
      'Uncontrolled expansion of urban areas',
      'Protection of natural resources'
    ][i],
    explanation: 'Correct definition of ecological concept.',
    points: 1
  }))
};

export const C1_U31_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Cause and Effect Linkers',
  explanation: 'Using advanced linking words to describe environmental impacts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'Temperatures are rising ___ increased CO2 emissions.',
      'Deforestation continues; ___ , many species are losing their homes.',
      '___ the lack of action, the situation is worsening.',
      'Renewable energy is growing, ___ reducing fossil fuel reliance.',
      '___ global warming, sea levels are rising.',
      'The policy was changed ___ the recent protests.',
      '___ the complexity of the issue, a solution is hard to find.',
      'Emissions must be cut, ___ the planet will suffer.',
      'We must act now ___ it is too late.',
      'The ecosystem is fragile ___ human interference.'
    ][i],
    options: [
      ['owing to', 'because', 'due'],
      ['consequently', 'but', 'however'],
      ['In view of', 'Despite', 'Because'],
      ['thereby', 'so', 'and'],
      ['As a result of', 'Because', 'Since'],
      ['in response to', 'because', 'for'],
      ['Given', 'If', 'Although'],
      ['otherwise', 'or', 'and'],
      ['before', 'until', 'after'],
      ['on account of', 'by', 'through']
    ][i],
    correctAnswer: [
      'owing to',
      'consequently',
      'In view of',
      'thereby',
      'As a result of',
      'in response to',
      'Given',
      'otherwise',
      'before',
      'on account of'
    ][i],
    explanation: 'Correct use of cause and effect linkers.',
    points: 1
  }))
};

export const unit31: Lesson = createC1Unit(
  'c1-u31',
  'Environmental Issues & Sustainability',
  'Advanced vocabulary and structures for discussing environmental challenges and solutions.',
  ['Use precise terminology for climate change and ecology', 'Identify and define key sustainability concepts', 'Apply advanced cause and effect linkers in context'],
  [
    C1_U31_BLOCK1, C1_U31_BLOCK2, C1_U31_BLOCK3,
    C1_U31_BLOCK1, C1_U31_BLOCK2, C1_U31_BLOCK3,
    C1_U31_BLOCK1, C1_U31_BLOCK2, C1_U31_BLOCK3, C1_U31_BLOCK1
  ]
);

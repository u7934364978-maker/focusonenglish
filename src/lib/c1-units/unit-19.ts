import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 19;

export const C1_U19_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Automation & AI Vocabulary',
  explanation: 'Advanced terms related to technology and the evolving workplace.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'Many tasks are now being ___ . (automate)',
      'AI is causing a massive ___ in the job market. (disrupt)',
      'We need to focus on ___ our workforce. (skill)',
      'Data is the new ___ of the digital age. (currency)',
      '___ intelligence is becoming more sophisticated. (artificial)',
      'The ___ economy is growing rapidly. (gig)',
      'Remote work is becoming the ___ . (norm)',
      'Automation can lead to job ___ . (displace)',
      'Companies are investing in ___ learning. (machine)',
      'We must adapt to the ___ landscape. (evolve)'
    ][i],
    correctAnswer: [
      'automated',
      'disruption',
      'upskilling',
      'currency',
      'Artificial',
      'gig',
      'norm',
      'displacement',
      'machine',
      'evolving'
    ][i],
    explanation: 'Correct vocabulary for the future of work.',
    points: 1
  }))
};

export const C1_U19_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Workplace Trends',
  explanation: 'Phrases and concepts describing modern workplace changes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "upskilling"?',
      'What is "reskilling"?',
      'What does "telecommuting" mean?',
      'What is "digital nomadism"?',
      'What is the "gig economy"?',
      'What is "algorithm bias"?',
      'What does "future-proof" mean?',
      'What is "work-life integration"?',
      'What is "soft skills"?',
      'What is "cognitive load"?'
    ][i],
    options: [
      ['Learning new skills for current job', 'Learning to drive', 'Working harder'],
      ['Learning skills for a new job', 'Doing the same job', 'Resting'],
      ['Working from home', 'Traveling by train', 'Commuting daily'],
      ['Working while traveling', 'Living in a desert', 'Working in an office'],
      ['Short-term, freelance work', 'Working for a big company', 'A large office'],
      ['Unfairness in AI code', 'A type of math', 'A fast computer'],
      ['Safe against future changes', 'Expensive', 'Old-fashioned'],
      ['Blending work and life', 'Strict work hours', 'No personal life'],
      ['Interpersonal skills', 'Technical skills', 'Physical skills'],
      ['Amount of mental effort', 'Weight of a computer', 'Length of a meeting']
    ][i],
    correctAnswer: [
      'Learning new skills for current job',
      'Learning skills for a new job',
      'Working from home',
      'Working while traveling',
      'Short-term, freelance work',
      'Unfairness in AI code',
      'Safe against future changes',
      'Blending work and life',
      'Interpersonal skills',
      'Amount of mental effort'
    ][i],
    explanation: 'Correct definition of workplace trends.',
    points: 1
  }))
};

export const C1_U19_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Speculating about the Future',
  explanation: 'Using advanced modals and phrases to speculate.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'AI ___ transform the healthcare industry.',
      'It is ___ that automation will increase.',
      'We ___ see a four-day work week soon.',
      'There is a high ___ of job displacement.',
      'Humans ___ always be needed for empathy.',
      'Technology ___ continue to evolve.',
      'Workers ___ need to adapt constantly.',
      'The office ___ become obsolete.',
      'We ___ expect more remote opportunities.',
      'Automation ___ create as many jobs as it destroys.'
    ][i],
    options: [
      ['is set to', 'maybe', 'will to'],
      ['highly likely', 'likely very', 'certainly'],
      ['might well', 'well might', 'might good'],
      ['probability', 'probably', 'possible'],
      ['will bound to', 'are bound to', 'bound to'],
      ['is destined to', 'destined to', 'to destine'],
      ['will inevitably', 'inevitable will', 'inevitably'],
      ['could conceivably', 'conceivably could', 'could'],
      ['can reasonably', 'reasonably can', 'can'],
      ['may arguably', 'arguably may', 'may']
    ][i],
    correctAnswer: [
      'is set to',
      'highly likely',
      'might well',
      'probability',
      'are bound to',
      'is destined to',
      'will inevitably',
      'could conceivably',
      'can reasonably',
      'may arguably'
    ][i],
    explanation: 'Correct use of speculative language.',
    points: 1
  }))
};

export const unit19: Lesson = createC1Unit(
  'c1-u19',
  'The Future of Work & Automation',
  'Vocabulary and grammar for discussing the impact of technology on the professional world.',
  ['Use advanced terminology for automation and AI', 'Identify and describe modern workplace trends', 'Speculate about future developments using advanced modals'],
  [
    C1_U19_BLOCK1, C1_U19_BLOCK2, C1_U19_BLOCK3,
    C1_U19_BLOCK1, C1_U19_BLOCK2, C1_U19_BLOCK3,
    C1_U19_BLOCK1, C1_U19_BLOCK2, C1_U19_BLOCK3, C1_U19_BLOCK1
  ]
);

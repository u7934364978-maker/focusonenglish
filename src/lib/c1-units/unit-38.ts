import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 38;

export const C1_U38_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Education Vocabulary',
  explanation: 'Advanced terms for discussing schools, universities, and educational policy.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The school has a rigorous ___ . (curriculum)',
      'Students must meet the ___ criteria. (enroll)',
      'He received a full ___ to study abroad. (scholar)',
      'The university is known for its academic ___ . (excel)',
      'The government is increasing ___ for schools. (fund)',
      '___ education is after secondary school. (tertiary)',
      'She is a ___ at the university. (lecture)',
      'The exam tests your ___ of the subject. (know)',
      'We need to address the ___ gap. (achieve)',
      '___ learning is becoming more common. (distance)'
    ][i],
    correctAnswer: [
      'curriculum',
      'enrollment',
      'scholarship',
      'excellence',
      'funding',
      'Tertiary',
      'lecturer',
      'knowledge',
      'achievement',
      'Distance'
    ][i],
    explanation: 'Correct education terminology.',
    points: 1
  }))
};

export const C1_U38_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Global Education Trends',
  explanation: 'Identifying and defining concepts related to modern education and global standards.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "pedagogy"?',
      'What is "lifelong learning"?',
      'What is "standardized testing"?',
      'What is "vocational training"?',
      'What is "inclusive education"?',
      'What is "academic integrity"?',
      'What is "critical thinking"?',
      'What is "digital literacy"?',
      'What is "STEM"?',
      'What is "higher education"?'
    ][i],
    options: [
      ['The method and practice of teaching', 'A type of school', 'A student'],
      ['Learning throughout one\'s life', 'Learning until 18', 'Reading books'],
      ['Tests with uniform scoring/delivery', 'Random tests', 'Easy tests'],
      ['Training for a specific job', 'Learning to sing', 'Academic study'],
      ['Education for all students, regardless of ability', 'Private school', 'Boys only'],
      ['Honesty and ethics in academia', 'Getting good grades', 'Being smart'],
      ['Objective analysis of an issue', 'Thinking fast', 'Remembering facts'],
      ['Ability to find and evaluate info online', 'Using a phone', 'Typing fast'],
      ['Science, Tech, Engineering, Math', 'A type of flower', 'A fast train'],
      ['Education at university or college', 'Secondary school', 'Pre-school']
    ][i],
    correctAnswer: [
      'The method and practice of teaching',
      'Learning throughout one\'s life',
      'Tests with uniform scoring/delivery',
      'Training for a specific job',
      'Education for all students, regardless of ability',
      'Honesty and ethics in academia',
      'Objective analysis of an issue',
      'Ability to find and evaluate info online',
      'Science, Tech, Engineering, Math',
      'Education at university or college'
    ][i],
    explanation: 'Correct definition of education concept.',
    points: 1
  }))
};

export const C1_U38_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Nominalization for Formal Tone',
  explanation: 'Using noun phrases instead of verbs to sound more academic and formal.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'The ___ of the program was a success. (implement)',
      'There is a need for better ___ of resources. (allocate)',
      'The ___ of the study were surprising. (find)',
      '___ in the event is mandatory. (participate)',
      'The ___ of the theory is complex. (apply)',
      '___ of the rules is essential. (observe)',
      'The ___ of the data took months. (analyze)',
      '___ to the university is competitive. (admit)',
      'The ___ of the new policy was controversial. (introduce)',
      '___ of the project is ongoing. (evaluate)'
    ][i],
    options: [
      ['implementation', 'implementing', 'implement'],
      ['allocation', 'allocating', 'allocate'],
      ['findings', 'finding', 'finds'],
      ['Participation', 'Participating', 'Participate'],
      ['application', 'applying', 'apply'],
      ['Observation', 'Observing', 'Observe'],
      ['analysis', 'analyzing', 'analyze'],
      ['Admission', 'Admitting', 'Admit'],
      ['introduction', 'introducing', 'introduce'],
      ['Evaluation', 'Evaluating', 'Evaluate']
    ][i],
    correctAnswer: [
      'implementation',
      'allocation',
      'findings',
      'Participation',
      'application',
      'Observation',
      'analysis',
      'Admission',
      'introduction',
      'Evaluation'
    ][i],
    explanation: 'Correct use of nominalization for a formal tone.',
    points: 1
  }))
};

export const unit38: Lesson = createC1Unit(
  'c1-u38',
  'Education Systems & Global Standards',
  'Advanced vocabulary and grammar for discussing education policy, academic achievement, and global trends.',
  ['Use precise educational and academic terminology', 'Identify and define modern education concepts', 'Apply nominalization to achieve a formal academic tone'],
  [
    C1_U38_BLOCK1, C1_U38_BLOCK2, C1_U38_BLOCK3,
    C1_U38_BLOCK1, C1_U38_BLOCK2, C1_U38_BLOCK3,
    C1_U38_BLOCK1, C1_U38_BLOCK2, C1_U38_BLOCK3, C1_U38_BLOCK1
  ]
);

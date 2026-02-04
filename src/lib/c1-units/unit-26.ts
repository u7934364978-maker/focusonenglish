import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 26;

export const C1_U26_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Social Networking Phrases',
  explanation: 'Phrases for initiating and maintaining conversation at social events.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'Mind if I ___ you? (join)',
      'So, what brings you ___ ? (here)',
      'Have you ___ the speaker before? (hear)',
      'It\'s a ___ turn out, isn\'t it? (great)',
      'I ___ your presentation earlier. (enjoy)',
      'So, how do you ___ the host? (know)',
      'That\'s an ___ point. (interest)',
      'I ___ we haven\'t met. (believe)',
      'What are you ___ these days? (working)',
      'It was a ___ meeting you. (pleasure)'
    ][i],
    correctAnswer: [
      'join',
      'here',
      'heard',
      'great',
      'enjoyed',
      'know',
      'interesting',
      'believe',
      'working on',
      'pleasure'
    ][i],
    explanation: 'Correct social networking phrase.',
    points: 1
  }))
};

export const C1_U26_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'writing-analysis',
  title: 'Small Talk Strategies',
  explanation: 'Effective strategies for engaging in small talk.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a good "ice-breaker"?',
      'What should you avoid in small talk?',
      'How to keep a conversation going?',
      'How to show you are listening?',
      'How to transition to a new topic?',
      'How to exit a conversation gracefully?',
      'What is a "follow-up" question?',
      'How to handle an awkward silence?',
      'What is "mirroring" in conversation?',
      'How to introduce yourself professionally?'
    ][i],
    options: [
      ['Asking about the event', 'Asking about salary', 'Complaining about food'],
      ['Politics and religion', 'Weather', 'The event'],
      ['Ask open-ended questions', 'Talk about yourself', 'Check your phone'],
      ['Use verbal cues like "I see"', 'Stare blankly', 'Interrupt'],
      ['"That reminds me of..."', '"Stop talking about that."', '"Anyway..."'],
      ['"It\'s been great chatting, I should..."', '"I\'m leaving now."', '"Bye."'],
      ['Asking for more detail on a topic', 'Asking for their name again', 'Asking a random question'],
      ['Ask a new question', 'Walk away', 'Panic'],
      ['Subtly mimicking body language', 'Repeating words exactly', 'Looking in a mirror'],
      ['Name and a brief role description', 'Your life story', 'Just your name']
    ][i],
    correctAnswer: [
      'Asking about the event',
      'Politics and religion',
      'Ask open-ended questions',
      'Use verbal cues like "I see"',
      '"That reminds me of..."',
      '"It\'s been great chatting, I should..."',
      'Asking for more detail on a topic',
      'Ask a new question',
      'Subtly mimicking body language',
      'Name and a brief role description'
    ][i],
    explanation: 'Correct small talk strategy.',
    points: 1
  }))
};

export const C1_U26_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Small Talk Topics',
  explanation: 'Identifying appropriate and safe topics for small talk.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'Is the weather a safe topic?',
      'Is personal income a safe topic?',
      'Is the current event a safe topic?',
      'Is someone\'s age a safe topic?',
      'Are travel experiences a safe topic?',
      'Is health history a safe topic?',
      'Are hobbies a safe topic?',
      'Is marital status a safe topic?',
      'Are professional achievements a safe topic?',
      'Is a recent movie a safe topic?'
    ][i],
    options: [
      ['Yes', 'No', 'Sometimes'],
      ['No', 'Yes', 'Depends'],
      ['Yes', 'No', 'Maybe'],
      ['No', 'Yes', 'Only for kids'],
      ['Yes', 'No', 'If they travel'],
      ['No', 'Yes', 'If they are sick'],
      ['Yes', 'No', 'Only sports'],
      ['No', 'Yes', 'If they have a ring'],
      ['Yes', 'No', 'Only for bosses'],
      ['Yes', 'No', 'Only if you saw it']
    ][i],
    correctAnswer: [
      'Yes',
      'No',
      'Yes',
      'No',
      'Yes',
      'No',
      'Yes',
      'No',
      'Yes',
      'Yes'
    ][i],
    explanation: 'Correct identification of safe small talk topics.',
    points: 1
  }))
};

export const unit26: Lesson = createC1Unit(
  'c1-u26',
  'Networking in Social Events & Small Talk',
  'Mastering the art of small talk and social networking for professional and personal growth.',
  ['Initiate and maintain conversations in social settings', 'Apply effective small talk strategies', 'Identify and use appropriate conversation topics'],
  [
    C1_U26_BLOCK1, C1_U26_BLOCK2, C1_U26_BLOCK3,
    C1_U26_BLOCK1, C1_U26_BLOCK2, C1_U26_BLOCK3,
    C1_U26_BLOCK1, C1_U26_BLOCK2, C1_U26_BLOCK3, C1_U26_BLOCK1
  ]
);

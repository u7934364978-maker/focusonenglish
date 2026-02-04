import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 18;

export const C1_U18_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'LinkedIn Terminology',
  explanation: 'Common terms used on professional networking sites.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'You should update your ___ regularly. (profile)',
      'I sent him a ___ request. (connect)',
      'She has many ___ on her profile. (endorse)',
      'His ___ is very impressive. (summary)',
      'You can join ___ related to your industry. (group)',
      'I received a ___ from my former boss. (recommend)',
      'He is a ___ leader in his field. (thought)',
      'You should optimize your ___ . (headline)',
      'She is very active in ___ . (network)',
      'I saw your ___ on my feed. (post)'
    ][i],
    correctAnswer: [
      'profile',
      'connection',
      'endorsements',
      'summary',
      'groups',
      'recommendation',
      'thought',
      'headline',
      'networking',
      'post'
    ][i],
    explanation: 'Correct LinkedIn terminology.',
    points: 1
  }))
};

export const C1_U18_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Networking Strategies',
  explanation: 'Phrases and concepts for effective professional networking.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is an "elevator pitch"?',
      'What does it mean to "cold call"?',
      'What is a "warm introduction"?',
      'What does "follow up" mean?',
      'What is "mutual benefit" in networking?',
      'What is a "referral"?',
      'What does "reach out" mean?',
      'What is "social selling"?',
      'What is a "touchpoint"?',
      'What is "career pivot"?'
    ][i],
    options: [
      ['A short introduction', 'A long speech', 'A physical pitch'],
      ['Call without prior contact', 'Call someone you know', 'Call in the winter'],
      ['Introduction via a contact', 'A warm greeting', 'A new introduction'],
      ['Contact again after meeting', 'Follow someone home', 'Stop contact'],
      ['Both parties gain something', 'One person helps', 'A social meeting'],
      ['Recommendation for a job', 'A type of doctor', 'A new contact'],
      ['Contact someone', 'Help someone', 'Find someone'],
      ['Using social media to sell', 'Selling in person', 'Selling to friends'],
      ['A point of contact', 'A physical touch', 'A final meeting'],
      ['Changing career direction', 'Moving to a new office', 'Getting a promotion']
    ][i],
    correctAnswer: [
      'A short introduction',
      'Call without prior contact',
      'Introduction via a contact',
      'Contact again after meeting',
      'Both parties gain something',
      'Recommendation for a job',
      'Contact someone',
      'Using social media to sell',
      'A point of contact',
      'Changing career direction'
    ][i],
    explanation: 'Correct networking concept definition.',
    points: 1
  }))
};

export const C1_U18_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'writing-analysis',
  title: 'Networking Correspondence',
  explanation: 'Choosing the right tone and phrasing for professional outreach.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'How to start a LinkedIn message to a stranger:',
      'How to ask for an informational interview:',
      'How to thank someone for a referral:',
      'How to follow up after a meeting:',
      'How to ask for an endorsement:',
      'How to introduce two people:',
      'How to decline a connection request politely:',
      'How to ask for career advice:',
      'How to share a relevant article:',
      'How to offer help to a contact:'
    ][i],
    options: [
      ['I came across your profile and...', 'Hi stranger!', 'I want a job.'],
      ['Would you be open to a 15-minute chat?', 'Tell me about your job.', 'Give me an interview.'],
      ['Thank you so much for the introduction.', 'Thanks for the link.', 'I appreciate the job.'],
      ['It was great meeting you at...', 'Remember me?', 'I enjoyed our talk.'],
      ['Would you mind endorsing me for...?', 'Give me a skill.', 'Endorse me now.'],
      ['I\'d like to introduce you to...', 'Meet my friend.', 'Here is someone.'],
      ['I prefer to connect with people I know.', 'No thanks.', 'Go away.'],
      ['I would value your perspective on...', 'What should I do?', 'Help me.'],
      ['I thought you might find this interesting.', 'Read this.', 'Here is a link.'],
      ['Is there anything I can assist you with?', 'I can help.', 'Let me know.']
    ][i],
    correctAnswer: [
      'I came across your profile and...',
      'Would you be open to a 15-minute chat?',
      'Thank you so much for the introduction.',
      'It was great meeting you at...',
      'Would you mind endorsing me for...?',
      'I\'d like to introduce you to...',
      'I prefer to connect with people I know.',
      'I would value your perspective on...',
      'I thought you might find this interesting.',
      'Is there anything I can assist you with?'
    ][i],
    explanation: 'Correct professional networking tone.',
    points: 1
  }))
};

export const unit18: Lesson = createC1Unit(
  'c1-u18',
  'Professional Networking & LinkedIn',
  'Vocabulary and strategies for effective networking and professional online presence.',
  ['Optimize LinkedIn profile with professional terminology', 'Apply effective networking strategies', 'Write professional outreach messages'],
  [
    C1_U18_BLOCK1, C1_U18_BLOCK2, C1_U18_BLOCK3,
    C1_U18_BLOCK1, C1_U18_BLOCK2, C1_U18_BLOCK3,
    C1_U18_BLOCK1, C1_U18_BLOCK2, C1_U18_BLOCK3, C1_U18_BLOCK1
  ]
);

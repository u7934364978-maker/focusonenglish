import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 34;

export const C1_U34_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Media & Journalism Terms',
  explanation: 'Advanced vocabulary for discussing media, news, and journalism.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The article was criticized for its ___ . (bias)',
      'They use ___ to get more clicks. (bait)',
      'The story was leaked by an anonymous ___ . (source)',
      'She is a respected ___ journalist. (investigate)',
      'The ___ of the news is often questioned. (objective)',
      '___ news is a major problem on social media. (fake)',
      'The editor has the final ___ . (say)',
      'They were accused of ___ the story. (sensational)',
      'The media plays a ___ role in democracy. (watch)',
      'There is a lot of ___ in modern media. (propaganda)'
    ][i],
    correctAnswer: [
      'bias',
      'clickbait',
      'source',
      'investigative',
      'objectivity',
      'Fake',
      'say',
      'sensationalizing',
      'watchdog',
      'propaganda'
    ][i],
    explanation: 'Correct media and journalism terminology.',
    points: 1
  }))
};

export const C1_U34_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Critical Consumption Concepts',
  explanation: 'Identifying and defining concepts related to media analysis and bias.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "media literacy"?',
      'What is "confirmation bias"?',
      'What is an "echo chamber"?',
      'What is "spin"?',
      'What is "fact-checking"?',
      'What is "censorship"?',
      'What is "editorial independence"?',
      'What is "yellow journalism"?',
      'What is an "op-ed"?',
      'What is "citizen journalism"?'
    ][i],
    options: [
      ['Ability to analyze media messages', 'Reading many books', 'Watching TV'],
      ['Favoring info that confirms beliefs', 'Checking facts', 'Finding new info'],
      ['Environment where only one view is heard', 'A music studio', 'A quiet room'],
      ['Biased interpretation of an event', 'Turning around', 'A type of toy'],
      ['Verifying the accuracy of info', 'Writing a story', 'Printing news'],
      ['Suppression of speech or info', 'Changing a title', 'Reading a book'],
      ['Freedom from owner/advertiser control', 'Writing for yourself', 'Being a boss'],
      ['Sensationalist or biased reporting', 'A yellow newspaper', 'Old news'],
      ['Opinion piece by an outside writer', 'A photo', 'A sport section'],
      ['News reported by regular people', 'Professional news', 'Reading news']
    ][i],
    correctAnswer: [
      'Ability to analyze media messages',
      'Favoring info that confirms beliefs',
      'Environment where only one view is heard',
      'Biased interpretation of an event',
      'Verifying the accuracy of info',
      'Suppression of speech or info',
      'Freedom from owner/advertiser control',
      'Sensationalist or biased reporting',
      'Opinion piece by an outside writer',
      'News reported by regular people'
    ][i],
    explanation: 'Correct definition of critical consumption concept.',
    points: 1
  }))
};

export const C1_U34_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Reporting Verbs & Nuance',
  explanation: 'Using advanced reporting verbs to convey different levels of certainty and bias.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'The report ___ that the data was falsified.',
      'He ___ that he was never informed.',
      'The company ___ having any knowledge.',
      'Experts ___ that the trend will continue.',
      'The witness ___ seeing the suspect.',
      'She ___ the importance of the findings.',
      'The article ___ that the government is at fault.',
      'Critics ___ the lack of transparency.',
      'The study ___ our initial hypothesis.',
      'He ___ the validity of the results.'
    ][i],
    options: [
      ['alleges', 'says', 'tells'],
      ['maintained', 'stayed', 'kept'],
      ['denied', 'rejected', 'refused'],
      ['contend', 'believe', 'think'],
      ['recalled', 'remembered', 'minded'],
      ['emphasized', 'pushed', 'pointed'],
      ['implies', 'shows', 'states'],
      ['condemned', 'hated', 'disliked'],
      ['corroborates', 'helps', 'shows'],
      ['disputed', 'argued', 'fought']
    ][i],
    correctAnswer: [
      'alleges',
      'maintained',
      'denied',
      'contend',
      'recalled',
      'emphasized',
      'implies',
      'condemned',
      'corroborates',
      'disputed'
    ][i],
    explanation: 'Correct use of advanced reporting verbs.',
    points: 1
  }))
};

export const unit34: Lesson = createC1Unit(
  'c1-u34',
  'Media Bias & Critical Consumption',
  'Developing media literacy and the ability to analyze and critique media messages.',
  ['Use advanced terminology for media and journalism', 'Identify and define bias and critical consumption concepts', 'Apply nuanced reporting verbs to describe media claims'],
  [
    C1_U34_BLOCK1, C1_U34_BLOCK2, C1_U34_BLOCK3,
    C1_U34_BLOCK1, C1_U34_BLOCK2, C1_U34_BLOCK3,
    C1_U34_BLOCK1, C1_U34_BLOCK2, C1_U34_BLOCK3, C1_U34_BLOCK1
  ]
);

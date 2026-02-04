import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 29;

// ============================================
// BLOCK 1: GRAMMAR - PASSIVE REPORTING: IT IS SAID THAT...
// ============================================
export const B2_U29_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Passive Reporting: Introductory "It"',
  grammarPoint: 'Passive Reporting',
  explanation: 'Use "It + passive verb + that clause" to report general beliefs or opinions (It is said, It is thought, It is claimed).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'It is ___ that the company is in trouble.',
      'It is ___ that the news was fake.',
      'It is ___ that the election will be close.',
      'It is ___ that the hacker has been caught.',
      'It is ___ that the price of oil will rise.',
      'It is ___ that the minister will resign.',
      'It is ___ that the virus is spreading.',
      'It is ___ that the protest was peaceful.',
      'It is ___ that the new law will be passed.',
      'It is ___ that the economy is recovering.'
    ][i],
    options: [
      ['rumoured', 'say', 'think'],
      ['believed', 'believe', 'believing'],
      ['thought', 'think', 'thinking'],
      ['claimed', 'claim', 'claiming'],
      ['expected', 'expect', 'expecting'],
      ['understood', 'understand', 'understanding'],
      ['reported', 'report', 'reporting'],
      ['suggested', 'suggest', 'suggesting'],
      ['agreed', 'agree', 'agreeing'],
      ['hoped', 'hope', 'hoping']
    ][i],
    correctAnswer: [
      'rumoured',
      'believed',
      'thought',
      'claimed',
      'expected',
      'understood',
      'reported',
      'suggested',
      'agreed',
      'hoped'
    ][i],
    explanation: 'Using the passive voice for objective reporting.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - PASSIVE REPORTING: SUBJECT + PASSIVE + INFINITIVE
// ============================================
export const B2_U29_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Passive Reporting: Personal Structure',
  grammarPoint: 'Passive Reporting',
  explanation: 'Use "Subject + passive verb + to-infinitive" for a more direct report (He is said to be, They are thought to have).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'The journalist is said ___ (be) very brave.',
      'The story is thought ___ (be) a complete lie.',
      'The suspect is believed ___ (flee) the country.',
      'They are expected ___ (arrive) tomorrow.',
      'The company is reported ___ (lose) millions.',
      'The politician is claimed ___ (take) bribes.',
      'The app is understood ___ (have) security flaws.',
      'The building is alleged ___ (be) unsafe.',
      'The results are expected ___ (be) positive.',
      'The witnesses are thought ___ (see) the accident.'
    ][i],
    correctAnswer: [
      'to be',
      'to be',
      'to have fled',
      'to arrive',
      'to have lost',
      'to have taken',
      'to have',
      'to be',
      'to be',
      'to have seen'
    ][i],
    explanation: 'Choosing the correct infinitive form (simple or perfect) in passive reporting.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - JOURNALISM & NEWS
// ============================================
export const B2_U29_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'In the Newsroom',
  explanation: 'Terms for journalism, news production, and media roles.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (headline) of the newspaper was very shocking.',
      'The editor decided to ___ (publish) the controversial story.',
      'We need to check the ___ (sources) of this information.',
      'The reporter works for a major news ___ (outlet).',
      'The article was written by a freelance ___ (journalist).',
      'They are investigating an ___ (exclusive) story.',
      'The news ___ (anchor) presented the evening report.',
      'She is an expert in ___ (investigative) journalism.',
      'The ___ (coverage) of the event was extensive.',
      'The newspaper has a very high ___ (circulation).'
    ][i],
    correctAnswer: [
      'headline',
      'publish',
      'sources',
      'outlet',
      'journalist',
      'exclusive',
      'anchor',
      'investigative',
      'coverage',
      'circulation'
    ][i],
    explanation: 'Essential vocabulary for the news industry.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - FAKE NEWS & BIAS
// ============================================
export const B2_U29_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Fake News and Ethics',
  explanation: 'Terms for misinformation, bias, and media ethics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The story was a complete ___ (fabrication).',
      'We must be aware of media ___ (bias).',
      '___ (Clickbait) headlines are often misleading.',
      'The information was ___ (distorted) to fit a narrative.',
      'They were accused of ___ (sensationalism).',
      '___ (Fact-checking) is crucial in modern journalism.',
      'The news was ___ (unverified) and likely false.',
      'They are trying to ___ (manipulate) the audience.',
      'The article was purely ___ (propaganda).',
      'The website is known for spreading ___ (misinformation).'
    ][i],
    options: [
      ['fabrication', 'truth', 'fact'],
      ['bias', 'neutrality', 'fairness'],
      ['Clickbait', 'News', 'Header'],
      ['distorted', 'changed', 'fixed'],
      ['sensationalism', 'honesty', 'boring'],
      ['Fact-checking', 'Reading', 'Watching'],
      ['unverified', 'true', 'sure'],
      ['manipulate', 'help', 'show'],
      ['propaganda', 'news', 'opinion'],
      ['misinformation', 'data', 'facts']
    ][i],
    correctAnswer: [
      'fabrication',
      'bias',
      'Clickbait',
      'distorted',
      'sensationalism',
      'Fact-checking',
      'unverified',
      'manipulate',
      'propaganda',
      'misinformation'
    ][i],
    explanation: 'Terms for evaluating the credibility of information.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (MEDIA ETHICS)
// ============================================
export const B2_U29_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Media Integrity',
  explanation: 'Form words related to honesty and reporting.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (ACCURATE) of the report was questioned.',
      'Journalists must act ___ (ETHIC).',
      'The story was ___ (LEAD) and false.',
      'We value ___ (OBJECTIVE) in our reporting.',
      'The ___ (CENSOR) of the press is a serious issue.',
      'He is a very ___ (RELY) source.',
      'The ___ (DISCLOSE) of the documents caused a scandal.',
      'They are fighting for media ___ (DEPEND).',
      'The ___ (IMPARTIAL) of the judge was praised.',
      'It was an ___ (EDITORIAL) decision.'
    ][i],
    correctAnswer: [
      'accuracy',
      'ethically',
      'misleading',
      'objectivity',
      'censorship',
      'reliable',
      'disclosure',
      'independence',
      'impartiality',
      'editorial'
    ][i],
    explanation: 'Applying word formation to ethical and professional concepts.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE RISE OF CITIZEN JOURNALISM
// ============================================
export const B2_U29_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Everyone is a Reporter',
  explanation: 'Read about the pros and cons of citizen journalism and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is a major advantage of citizen journalism?' : 'What is a significant risk of citizen journalism?',
    options: [['Speed of reporting', 'High professional standards', 'Expensive equipment'], ['Lack of fact-checking', 'Too much money', 'Not enough photos']][i % 2],
    correctAnswer: i < 5 ? 'Speed of reporting' : 'Lack of fact-checking',
    explanation: 'Analyzing arguments and perspectives in a media-related text.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - SPOT THE FAKE
// ============================================
export const B2_U29_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: How to Verify News',
  explanation: 'Listen to a guide on how to spot misinformation online.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the first thing you should check according to the expert?`,
    options: ['The source of the article', 'The number of likes', 'The comments section', 'The date of publication'],
    correctAnswer: 'The source of the article',
    explanation: 'Listening for practical advice and sequential steps.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - NEWS ARTICLES
// ============================================
export const B2_U29_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Journalistic Style',
  explanation: 'Identify the most objective and professional way to report news.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To report an unconfirmed event:',
      'To attribute a statement to a source:',
      'To write a concise headline:',
      'To introduce a background fact:',
      'To describe a controversy neutrally:',
      'To report a future event:',
      'To use a passive reporting structure:',
      'To conclude a report with a quote:',
      'To provide a balanced view:',
      'To use formal vocabulary for a crime:'
    ][i],
    options: [
      ['The suspect is alleged to have...', 'I think he did it.', 'They say he is bad.'],
      ['According to a spokesperson...', 'A guy told me...', 'I heard...'],
      ['Economy shows signs of recovery', 'Money is getting better now.', 'The bank news.'],
      ['Historically, the company has...', 'Before, they did...', 'A long time ago...'],
      ['The decision has sparked a debate on...', 'Everyone is angry about...', 'Big fight over...'],
      ['The summit is scheduled to take place...', 'They will go there.', 'Meeting soon.'],
      ['It is understood that negotiations are...', 'We know they are...', 'People say they...'],
      ['"We are committed to the truth," stated the editor.', 'The editor said they like truth.', 'They said...'],
      ['While some argue X, others maintain Y.', 'X is okay, but Y is too.', 'Both sides.'],
      ['The individual was apprehended in...', 'The man was caught in...', 'They grabbed him in...']
    ][i],
    correctAnswer: [
      'The suspect is alleged to have...',
      'According to a spokesperson...',
      'Economy shows signs of recovery',
      'Historically, the company has...',
      'The decision has sparked a debate on...',
      'The summit is scheduled to take place...',
      'It is understood that negotiations are...',
      '"We are committed to the truth," stated the editor.',
      'While some argue X, others maintain Y.',
      'The individual was apprehended in...'
    ][i],
    explanation: 'Using appropriate journalistic register and structures.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING MEDIA TRUST
// ============================================
export const B2_U29_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Expressing Doubt and Skepticism',
  explanation: 'Learn how to question information using formal reporting structures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally express doubt about a headline?`,
    options: ['The claims made in the article are widely thought to be exaggerated.', 'I don\'t believe this.', 'It\'s a lie.', 'This is fake.'],
    correctAnswer: 'The claims made in the article are widely thought to be exaggerated.',
    explanation: 'Using sophisticated structures to express complex opinions in speech.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U29_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 29',
  explanation: 'Consolidation of Passive Reporting and Journalism Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'It is ___ (claim) that he is innocent.' : 'The story is thought ___ (be) fake.',
    options: i < 5 ? ['claimed', 'claim', 'claiming'] : ['to be', 'be', 'being'],
    correctAnswer: i < 5 ? 'claimed' : 'to be',
    explanation: 'Verifying passive reporting structures.',
    points: 1
  }))
};

export const B2_UNIT_29 = createB2Unit(
  'b2-u29',
  'Journalism & Fake News',
  'Master objective reporting with passive structures while exploring the ethics and challenges of modern journalism.',
  ['Use "It is said that" and personal passive reporting structures', 'Discuss media, journalism, and fake news using professional terminology', 'Analyze and apply journalistic writing and speaking styles'],
  [
    B2_U29_BLOCK1, B2_U29_BLOCK2, B2_U29_BLOCK3, B2_U29_BLOCK4, B2_U29_BLOCK5,
    B2_U29_BLOCK6, B2_U29_BLOCK7, B2_U29_BLOCK8, B2_U29_BLOCK9, B2_U29_BLOCK10
  ]
);

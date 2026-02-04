import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 5;

// ============================================
// BLOCK 1: GRAMMAR - REPORTING VERBS (THAT CLAUSE)
// ============================================
export const B2_U5_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Reporting Verbs with "that"',
  grammarPoint: 'Reporting Verbs',
  explanation: 'Some verbs like claim, suggest, insist, and admit are often followed by a "that" clause.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'He ___ (claim) that he had never seen the man before.',
      'She ___ (suggest) that we should leave early.',
      'They ___ (insist) that they were innocent.',
      'He ___ (admit) that he had made a mistake.',
      'She ___ (complain) that the room was too cold.',
      'They ___ (warn) that the weather would get worse.',
      'He ___ (explain) that he was late because of the traffic.',
      'She ___ (deny) that she had taken the money.',
      'They ___ (promise) that they would help us.',
      'He ___ (remark) that it was a beautiful day.'
    ][i],
    correctAnswer: [
      'claimed',
      'suggested',
      'insisted',
      'admitted',
      'complained',
      'warned',
      'explained',
      'denied',
      'promised',
      'remarked'
    ][i],
    explanation: 'Using reporting verbs to introduce reported information.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - REPORTING VERBS (VERB + -ING / VERB + TO)
// ============================================
export const B2_U5_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Reporting Verb Patterns',
  grammarPoint: 'Reporting Verbs',
  explanation: 'Different reporting verbs require different patterns: verb + -ing, verb + to-infinitive, or verb + object + to-infinitive.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'She suggested ___ to the park.',
      'He promised ___ me later.',
      'They admitted ___ the window.',
      'He warned me ___ that.',
      'She refused ___ the offer.',
      'They denied ___ the money.',
      'He offered ___ me with my bags.',
      'She encouraged me ___ for the job.',
      'They advised us ___ the train.',
      'He apologized for ___ late.'
    ][i],
    options: [
      ['going', 'to go', 'go'],
      ['to call', 'calling', 'call'],
      ['breaking', 'to break', 'break'],
      ['not to do', 'not doing', 'don\'t do'],
      ['to accept', 'accepting', 'accept'],
      ['taking', 'to take', 'take'],
      ['to help', 'helping', 'help'],
      ['to apply', 'applying', 'apply'],
      ['to take', 'taking', 'take'],
      ['being', 'to be', 'be']
    ][i],
    correctAnswer: [
      'going',
      'to call',
      'breaking',
      'not to do',
      'to accept',
      'taking',
      'to help',
      'to apply',
      'to take',
      'being'
    ][i],
    explanation: 'Correct verb patterns for different reporting verbs.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - OPINION VERBS & PHRASES
// ============================================
export const B2_U5_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Expressing Opinions',
  explanation: 'Phrases and verbs for sharing thoughts and beliefs.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'In my ___, (opinion) we should wait.',
      'I strongly ___ (believe) that education is the key.',
      'From my ___ (point) of view, it\'s a great idea.',
      'I am ___ (convince) that he is telling the truth.',
      'It ___ (seem) to me that we are losing time.',
      'I am ___ (favor) of the new proposal.',
      'I don\'t ___ (agree) with your assessment.',
      'To my ___, (mind) this is the best solution.',
      'As far as I am ___ (concern), the matter is closed.',
      'I have my ___ (doubt) about the plan.'
    ][i],
    correctAnswer: [
      'opinion',
      'believe',
      'point',
      'convinced',
      'seems',
      'in favor',
      'agree',
      'mind',
      'concerned',
      'doubts'
    ][i],
    explanation: 'Standard phrases for expressing a perspective.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - ABSTRACT NOUNS (BELIEFS)
// ============================================
export const B2_U5_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Nouns for Beliefs and Values',
  explanation: 'Nouns related to thoughts and social concepts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'They have a strong ___ in traditional values.',
      'It is a matter of personal ___.',
      'He showed great ___ in his work.',
      'The group shares the same ___.',
      'We need to respect cultural ___.',
      'It is my ___ that things will improve.',
      'They fought for their ___.',
      'He has a high level of ___.',
      'The ___ of the people is important.',
      'She has a positive ___ towards life.'
    ][i],
    options: [
      ['belief', 'believe', 'believing'],
      ['conviction', 'convince', 'convinced'],
      ['commitment', 'commit', 'committed'],
      ['ideology', 'ideal', 'idea'],
      ['diversity', 'diverse', 'divert'],
      ['expectation', 'expect', 'expecting'],
      ['principles', 'principals', 'principally'],
      ['integrity', 'integral', 'integrate'],
      ['morale', 'moral', 'mortality'],
      ['attitude', 'altitude', 'aptitude']
    ][i],
    correctAnswer: [
      'belief',
      'conviction',
      'commitment',
      'ideology',
      'diversity',
      'expectation',
      'principles',
      'integrity',
      'morale',
      'attitude'
    ][i],
    explanation: 'Abstract nouns at B2 level.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (NOUNS)
// ============================================
export const B2_U5_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Thoughts and Opinions',
  explanation: 'Form nouns from the given verbs or adjectives.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'There is a lot of ___ (DISAGREE) on the topic.',
      'We need to make a ___ (DECIDE) soon.',
      'His ___ (EXPLAIN) was not very clear.',
      'There is a common ___ (PERCEIVE) that it is hard.',
      'We need more ___ (INVOLVE) from the community.',
      'The ___ (PROPOSE) was rejected.',
      'Her ___ (ARGUE) was very convincing.',
      'They reached an ___ (AGREE) after hours.',
      'It was a great ___ (ACHIEVE).',
      'His ___ (BEHAVE) was unacceptable.'
    ][i],
    correctAnswer: [
      'disagreement',
      'decision',
      'explanation',
      'perception',
      'involvement',
      'proposal',
      'argument',
      'agreement',
      'achievement',
      'behavior'
    ][i],
    explanation: 'Suffixes for forming abstract nouns.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - OPINION PIECES
// ============================================
export const B2_U5_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The Power of Perspective',
  explanation: 'Read the opinion article and answer the questions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the author\'s main argument?' : 'What does the word "subjective" imply in this context?',
    options: [['Change is necessary', 'Stability is better', 'People are same', 'Money matters'], ['Based on opinion', 'Fact-based', 'Scientific', 'Irrelevant']][i % 2],
    correctAnswer: i < 5 ? 'Change is necessary' : 'Based on opinion',
    explanation: 'Understanding tone and main points in opinion texts.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - DEBATES & DISCUSSIONS
// ============================================
export const B2_U5_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: A Friendly Debate',
  explanation: 'Listen to the discussion and identify who agrees with whom.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `Speaker ${i + 1} seems to ___ with the proposal.`,
    options: ['Agree', 'Disagree', 'Be undecided', 'Partially agree'],
    correctAnswer: 'Agree',
    explanation: 'Identifying agreement/disagreement in spoken English.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - PERSUASIVE WRITING
// ============================================
export const B2_U5_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Persuasive Language',
  explanation: 'Choose the most persuasive way to present an argument.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce a main point:',
      'To provide evidence:',
      'To counter an argument:',
      'To emphasize a point:',
      'To conclude a paragraph:',
      'To call for action:',
      'To express certainty:',
      'To show the result:',
      'To add a supporting point:',
      'To introduce a summary:'
    ][i],
    options: [
      ['First and foremost,', 'Anyway,', 'Like I said,'],
      ['Studies show that...', 'I think that...', 'People say...'],
      ['On the other hand,', 'And also,', 'Besides,'],
      ['It is crucial to note that...', 'I want to say...', 'Listen to this:'],
      ['Consequently,', 'So then,', 'After that,'],
      ['We must take immediate action.', 'It would be nice.', 'Do something.'],
      ['Undoubtedly,', 'Maybe,', 'Perhaps,'],
      ['This leads to...', 'This happens because...', 'This is why.'],
      ['Furthermore,', 'Also,', 'And,'],
      ['In conclusion,', 'To end,', 'Lastly,']
    ][i],
    correctAnswer: [
      'First and foremost,',
      'Studies show that...',
      'On the other hand,',
      'It is crucial to note that...',
      'Consequently,',
      'We must take immediate action.',
      'Undoubtedly,',
      'This leads to...',
      'Furthermore,',
      'In conclusion,'
    ][i],
    explanation: 'Using discourse markers for persuasive impact.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - AGREEING & DISAGREEING
// ============================================
export const B2_U5_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Tactful Disagreement',
  explanation: 'Choose the most polite way to disagree in a conversation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you politely disagree with someone?`,
    options: ['I see what you mean, but...', 'You are wrong.', 'I don\'t think so.', 'That makes no sense.'],
    correctAnswer: 'I see what you mean, but...',
    explanation: 'Using softening language for polite disagreement.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U5_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 5',
  explanation: 'Consolidation of Unit 5 topics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Choose the correct reporting verb pattern.' : 'Choose the best phrase for expressing an opinion.',
    options: i < 5 ? ['He suggested going.', 'He suggested to go.', 'He suggested me going.'] : ['In my opinion...', 'I am belief...', 'I conviction...'],
    correctAnswer: i < 5 ? 'He suggested going.' : 'In my opinion...',
    explanation: 'Review of Unit 5 concepts.',
    points: 1
  }))
};

export const B2_UNIT_5 = createB2Unit(
  'b2-u5',
  'Expressing Opinions & Beliefs',
  'Master reporting verbs and learn to express and defend your opinions.',
  ['Use reporting verbs with correct patterns', 'Express opinions and beliefs formally', 'Use persuasive language in writing'],
  [
    B2_U5_BLOCK1, B2_U5_BLOCK2, B2_U5_BLOCK3, B2_U5_BLOCK4, B2_U5_BLOCK5,
    B2_U5_BLOCK6, B2_U5_BLOCK7, B2_U5_BLOCK8, B2_U5_BLOCK9, B2_U5_BLOCK10
  ]
);

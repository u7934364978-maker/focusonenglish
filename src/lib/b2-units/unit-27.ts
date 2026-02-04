import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 27;

// ============================================
// BLOCK 1: GRAMMAR - REPORTING VERBS + GERUND (-ING)
// ============================================
export const B2_U27_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Reporting Verbs + Gerund',
  grammarPoint: 'Reporting Verbs',
  explanation: 'Some reporting verbs are followed by a gerund (admit, deny, suggest, recommend).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'The activist denied ___ (take) part in the protest.',
      'He suggested ___ (start) a petition online.',
      'She recommended ___ (contact) the local representative.',
      'They admitted ___ (break) the law to defend their rights.',
      'I suggest ___ (join) the organization next week.',
      'The speaker recommended ___ (read) the new report.',
      'He denied ___ (know) about the illegal activities.',
      'She admitted ___ (feel) nervous before the speech.',
      'They suggested ___ (wait) for more information.',
      'He recommended ___ (donate) to the charity.'
    ][i],
    options: [
      ['taking', 'to take', 'take'],
      ['starting', 'to start', 'start'],
      ['contacting', 'to contact', 'contact'],
      ['breaking', 'to break', 'break'],
      ['joining', 'to join', 'join'],
      ['reading', 'to read', 'read'],
      ['knowing', 'to know', 'know'],
      ['feeling', 'to feel', 'feel'],
      ['waiting', 'to wait', 'wait'],
      ['donating', 'to donate', 'donate']
    ][i],
    correctAnswer: [
      'taking',
      'starting',
      'contacting',
      'breaking',
      'joining',
      'reading',
      'knowing',
      'feeling',
      'waiting',
      'donating'
    ][i],
    explanation: 'Certain reporting verbs require the -ing form.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - REPORTING VERBS + INFINITIVE (TO + VERB)
// ============================================
export const B2_U27_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Reporting Verbs + Infinitive',
  grammarPoint: 'Reporting Verbs',
  explanation: 'Other reporting verbs are followed by an infinitive (agree, refuse, promise, offer, threaten).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'They agreed ___ (support) the new policy.',
      'He refused ___ (answer) the question.',
      'She promised ___ (help) with the campaign.',
      'The government offered ___ (negotiate) with the leaders.',
      'They threatened ___ (sue) the company.',
      'He agreed ___ (attend) the meeting.',
      'She refused ___ (sign) the document.',
      'We promised ___ (stay) until the end.',
      'They offered ___ (provide) legal assistance.',
      'The group threatened ___ (strike) next month.'
    ][i],
    correctAnswer: [
      'to support',
      'to answer',
      'to help',
      'to negotiate',
      'to sue',
      'to attend',
      'to sign',
      'to stay',
      'to provide',
      'to strike'
    ][i],
    explanation: 'Using the to-infinitive with specific reporting verbs.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - HUMAN RIGHTS & ACTIVISM
// ============================================
export const B2_U27_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Global Activism',
  explanation: 'Key terms for social justice and human rights.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The right to freedom of ___ (speech) is fundamental.',
      'They are fighting for ___ (equality) in the workplace.',
      'A ___ (boycott) was organized against the brand.',
      'The movement aims to raise ___ (awareness) about the issue.',
      'Many people live in extreme ___ (poverty).',
      'They are advocating for environmental ___ (justice).',
      'The peaceful ___ (demonstration) took place in the square.',
      'We must protect the ___ (rights) of children.',
      'The activist was arrested during a ___ (sit-in).',
      'International ___ (law) protects refugees.'
    ][i],
    correctAnswer: [
      'speech',
      'equality',
      'boycott',
      'awareness',
      'poverty',
      'justice',
      'demonstration',
      'rights',
      'sit-in',
      'law'
    ][i],
    explanation: 'Core vocabulary for discussing activism.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - SOCIAL ISSUES & VALUES
// ============================================
export const B2_U27_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Society and Values',
  explanation: 'Terms for the challenges and values of modern society.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      '___ (Discrimination) based on gender is illegal.',
      'They promote ___ (tolerance) and understanding.',
      '___ (Empowerment) is key to long-term change.',
      'The community showed great ___ (solidarity).',
      '___ (Corruption) is a major obstacle to development.',
      'They are working to end ___ (injustice).',
      'Access to education is a ___ (human) right.',
      'They advocate for ___ (fair) trade.',
      'The ___ (standard) of living has improved.',
      'We must fight against ___ (prejudice).'
    ][i],
    options: [
      ['Discrimination', 'Difference', 'Distinction'],
      ['tolerance', 'patience', 'time'],
      ['Empowerment', 'Power', 'Strength'],
      ['solidarity', 'unity', 'group'],
      ['Corruption', 'Crime', 'Bad'],
      ['injustice', 'unjustice', 'nonjustice'],
      ['human', 'person', 'people'],
      ['fair', 'free', 'good'],
      ['standard', 'level', 'quality'],
      ['prejudice', 'judgment', 'opinion']
    ][i],
    correctAnswer: [
      'Discrimination',
      'tolerance',
      'Empowerment',
      'solidarity',
      'Corruption',
      'injustice',
      'human',
      'fair',
      'standard',
      'prejudice'
    ][i],
    explanation: 'Terms for discussing societal values and problems.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (ACTIVISM)
// ============================================
export const B2_U27_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Social Justice',
  explanation: 'Form nouns, adjectives, and verbs related to activism.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'She is a prominent human rights ___ (ACTIVISM).',
      'The ___ (EQUALLY) of the system was questioned.',
      'We need more ___ (TOLERATE) in our society.',
      'The ___ (DEMONSTRATE) was entirely peaceful.',
      'It was an ___ (JUST) decision.',
      'The ___ (FREE) of the press is vital.',
      'They are fighting for the ___ (ABOLISH) of child labor.',
      'Her ___ (DEDICATE) to the cause is inspiring.',
      '___ (DISCRIMINATE) practices must stop.',
      'The ___ (SOLITARY) shown by the town was moving.'
    ][i],
    correctAnswer: [
      'activist',
      'equality',
      'tolerance',
      'demonstration',
      'unjust',
      'freedom',
      'abolition',
      'dedication',
      'Discriminatory',
      'solidarity'
    ][i],
    explanation: 'Applying word formation rules to social topics.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE LEGACY OF NELSON MANDELA
// ============================================
export const B2_U27_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Icons of Human Rights',
  explanation: 'Read about the life of Nelson Mandela and answer the questions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Mandela spent 27 years in prison for his fight against ___.' : 'What was his main goal after being released?',
    options: [['apartheid', 'poverty', 'climate change'], ['reconciliation and peace', 'revenge', 'leaving the country']][i % 2],
    correctAnswer: i < 5 ? 'apartheid' : 'reconciliation and peace',
    explanation: 'Reading for historical context and main ideas.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - VOICES OF PROTEST
// ============================================
export const B2_U27_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Why People Protest',
  explanation: 'Listen to an interview with a sociologist about collective action.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What does the speaker say is the main driver of modern protests?`,
    options: ['Social media connectivity', 'Lack of jobs', 'Traditional newspapers', 'Climate change alone'],
    correctAnswer: 'Social media connectivity',
    explanation: 'Listening for key arguments in an academic context.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - PETITIONS
// ============================================
export const B2_U27_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Drafting a Petition',
  explanation: 'Choose the most persuasive and professional language for a petition.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To state the purpose of the petition:',
      'To describe the problem clearly:',
      'To use a strong reporting verb for a demand:',
      'To explain why the change is necessary:',
      'To address the authorities formally:',
      'To call for action:',
      'To highlight the urgency:',
      'To end with a clear statement:',
      'To use an inclusive "we":',
      'To request a specific response:'
    ][i],
    options: [
      ['We are writing to demand...', 'Hi everyone.', 'Check this.'],
      ['The current situation is unacceptable because...', 'It is bad.', 'We don\'t like it.'],
      ['We urge the council to...', 'We say.', 'We want.'],
      ['This change will ensure that...', 'It will be good.', 'Because why not?'],
      ['To the members of the Board:', 'Hey guys,', 'Dear everyone,'],
      ['Please sign this petition to...', 'Sign now.', 'Do it.'],
      ['Action is needed immediately to prevent...', 'Do it fast.', 'Soon.'],
      ['Together, we can make a difference.', 'Bye.', 'That\'s it.'],
      ['As concerned citizens, we believe...', 'I think...', 'They think...'],
      ['We look forward to your response on this matter.', 'Answer me.', 'Thanks.']
    ][i],
    correctAnswer: [
      'We are writing to demand...',
      'The current situation is unacceptable because...',
      'We urge the council to...',
      'This change will ensure that...',
      'To the members of the Board:',
      'Please sign this petition to...',
      'Action is needed immediately to prevent...',
      'Together, we can make a difference.',
      'As concerned citizens, we believe...',
      'We look forward to your response on this matter.'
    ][i],
    explanation: 'Using appropriate formal language for advocacy.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - ADVOCATING FOR A CAUSE
// ============================================
export const B2_U27_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Reporting Opinions Emphatically',
  explanation: 'Learn how to report what others said about human rights with emphasis.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally report that someone strongly disagreed?`,
    options: ['He flatly denied the allegations.', 'He said no.', 'He didn\'t like it.', 'He went away.'],
    correctAnswer: 'He flatly denied the allegations.',
    explanation: 'Using collocations and advanced reporting verbs in speech.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U27_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 27',
  explanation: 'Consolidation of Reporting Verbs and Activism Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'They refused ___ (pay) the fine.' : 'He suggested ___ (join) the protest.',
    options: i < 5 ? ['to pay', 'paying', 'pay'] : ['joining', 'to join', 'join'],
    correctAnswer: i < 5 ? 'to pay' : 'joining',
    explanation: 'Verifying reporting verb patterns.',
    points: 1
  }))
};

export const B2_UNIT_27 = createB2Unit(
  'b2-u27',
  'Human Rights & Global Activism',
  'Learn to advocate and report with precision using advanced reporting verbs and social justice vocabulary.',
  ['Use reporting verbs with gerunds and infinitives', 'Discuss global issues and human rights using specific terminology', 'Analyze and draft persuasive petitions'],
  [
    B2_U27_BLOCK1, B2_U27_BLOCK2, B2_U27_BLOCK3, B2_U27_BLOCK4, B2_U27_BLOCK5,
    B2_U27_BLOCK6, B2_U27_BLOCK7, B2_U27_BLOCK8, B2_U27_BLOCK9, B2_U27_BLOCK10
  ]
);

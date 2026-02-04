import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 56;

// ============================================
// BLOCK 1: GRAMMAR - ADVANCED RELATIVE CLAUSES (PREPOSITIONS)
// ============================================
export const B2_U56_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Digital Privacy Regulations',
  grammarPoint: 'Relative Clauses with Prepositions',
  explanation: 'In formal English, prepositions come before the relative pronoun (whom/which).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The company to ___ (who/whom) I sent the data is reputable.',
      'The terms in ___ (which/what) they explain the policy are clear.',
      'The person for ___ (who/whom) the law was created is protected.',
      'The server on ___ (which/that) the files are stored is secure.',
      'The situation in ___ (which/where) we find ourselves is complex.',
      'The platform through ___ (which/who) we communicate is encrypted.',
      'The regulations with ___ (which/whom) we must comply are strict.',
      'The expert from ___ (who/whom) we got the advice is famous.',
      'The process by ___ (which/that) they collect data is transparent.',
      'The project on ___ (which/who) we are working is secret.'
    ][i],
    correctAnswer: [
      'whom',
      'which',
      'whom',
      'which',
      'which',
      'which',
      'which',
      'whom',
      'which',
      'which'
    ][i],
    explanation: 'Using formal relative structures with prepositions.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - WHOSE & QUANTIFIERS IN RELATIVE CLAUSES
// ============================================
export const B2_U56_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Data Protection Issues',
  grammarPoint: 'Whose and Quantifiers (None of which, some of whom)',
  explanation: 'Use "whose" for possession and "quantifier + of + relative pronoun" to refer to part of a group.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'He is the lawyer ___ (whose/who) specialty is digital law.',
      'I have many apps, none of ___ (which/them) I use regularly.',
      'There are ten employees, two of ___ (whom/who) are IT experts.',
      'The company, ___ (whose/which) headquarters are in London, is huge.',
      'We found several files, all of ___ (which/that) were corrupted.',
      'She met many hackers, some of ___ (whom/which) were harmless.',
      'The app, the name of ___ (which/whose) I forget, is very useful.',
      'I spoke to the users, many of ___ (whom/who) were unhappy.',
      'He wrote three books, the best of ___ (which/them) is about AI.',
      'They have two offices, both of ___ (which/that) are in Paris.'
    ][i],
    correctAnswer: [
      'whose',
      'which',
      'whom',
      'whose',
      'which',
      'whom',
      'which',
      'whom',
      'which',
      'which'
    ][i],
    explanation: 'Using whose and partitive relative clauses for precision.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - DIGITAL RIGHTS
// ============================================
export const B2_U56_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Ethics in the Digital Age',
  explanation: 'Vocabulary for privacy, surveillance, and online rights.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'We have a right to digital ___ (privacy).',
      '___ (Surveillance) cameras are everywhere in the city.',
      'Data ___ (breaches) are becoming more common.',
      'They are fighting for net ___ (neutrality).',
      'The ___ (algorithm) determines what you see online.',
      'He was a victim of ___ (identity) theft.',
      'The government passed a new ___ (cybersecurity) law.',
      'We must protect our personal ___ (data).',
      '___ (Encryption) is vital for secure communication.',
      'The company was fined for violating ___ (GDPR).'
    ][i],
    correctAnswer: [
      'privacy',
      'Surveillance',
      'breaches',
      'neutrality',
      'algorithm',
      'identity',
      'cybersecurity',
      'data',
      'Encryption',
      'GDPR'
    ][i],
    explanation: 'Key terms for discussing the legal and ethical side of the internet.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - ONLINE BEHAVIOR
// ================= :::::::::::::::::::::::::::
export const B2_U56_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Responsible Browsing',
  explanation: 'Vocabulary for online conduct, social media impact, and digital footprints.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'Everything you do online leaves a digital ___ (footprint).',
      'We must combat online ___ (harassment).',
      'The use of facial ___ (recognition) is controversial.',
      'She is a strong advocate for digital ___ (literacy).',
      'The website uses cookies to ___ (track) your activity.',
      'He decided to ___ (deactivate) his social media account.',
      'The platform is accused of spreading ___ (misinformation).',
      'We need to teach kids about online ___ (safety).',
      'The app requires your ___ (consent) to access contacts.',
      'The laws are trying to curb online ___ (piracy).'
    ][i],
    options: [
      ['footprint', 'mark', 'path'],
      ['harassment', 'annoyance', 'bother'],
      ['recognition', 'knowing', 'finding'],
      ['literacy', 'reading', 'writing'],
      ['track', 'follow', 'find'],
      ['deactivate', 'stop', 'close'],
      ['misinformation', 'lies', 'errors'],
      ['safety', 'health', 'care'],
      ['consent', 'agree', 'ok'],
      ['piracy', 'stealing', 'theft']
    ][i],
    correctAnswer: [
      'footprint',
      'harassment',
      'recognition',
      'literacy',
      'track',
      'deactivate',
      'misinformation',
      'safety',
      'consent',
      'piracy'
    ][i],
    explanation: 'Social and personal vocabulary for the digital world.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U56_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: The Tech Society',
  explanation: 'Form nouns, adjectives, and verbs related to technology and rights.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (REGULATE) of the internet is a hot topic.',
      'Encryption provides ___ (CONFIDENTIAL).',
      'The system is highly ___ (VULNERABILITY) to attacks.',
      '___ (ANONYMOUS) online can be a double-edged sword.',
      'The app is very ___ (USER) friendly.',
      'We need a more ___ (ETHICS) approach to AI.',
      'The ___ (ACCESSIBLE) of data is crucial.',
      'He is a ___ (SPECIAL) in data protection.',
      'The project was ___ (SUCCESS) implemented.',
      'The ___ (DETERMINE) of the hacker was scary.'
    ][i],
    correctAnswer: [
      'regulation',
      'confidentiality',
      'vulnerable',
      'Anonymity',
      'user',
      'ethical',
      'accessibility',
      'specialist',
      'successfully',
      'determination'
    ][i],
    explanation: 'Transforming root words into technical and legal terms.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE RIGHT TO BE FORGOTTEN
// ============================================
export const B2_U56_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The Right to Be Forgotten',
  explanation: 'Read about the legal concept that allows individuals to request the removal of personal data from search engines.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What does the "Right to be Forgotten" allow?' : 'What is the main argument against this right?',
    options: [['Removing outdated or irrelevant personal info', 'Deleting the entire internet', 'Changing your name'], ['Freedom of expression and access to info', 'It costs too much money', 'It is too difficult to do']][i % 2],
    correctAnswer: i < 5 ? 'Removing outdated or irrelevant personal info' : 'Freedom of expression and access to info',
    explanation: 'Understanding complex digital rights and the balance of interests.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - CYBERSECURITY BASICS
// ============================================
export const B2_U56_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Staying Safe Online',
  explanation: 'Listen to a cybersecurity expert giving tips on how to protect your digital identity.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the most common way hackers get access to accounts?`,
    options: ['Weak or reused passwords', 'High-tech satellites', 'Guessing your birthday', 'Asking you nicely'],
    correctAnswer: 'Weak or reused passwords',
    explanation: 'Listening for practical security advice and common threats.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - FORMAL COMPLAINTS
// ================= :::::::::::::::::::::::::::::
export const B2_U56_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Reporting a Data Issue',
  explanation: 'Learn how to use formal relative clauses in a letter of complaint.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'Instead of "The site that I bought the item from...", use:',
      'Instead of "The person I spoke to...", use:',
      'Instead of "The way that they handled my data...", use:',
      'To refer to a specific law:',
      'To mention a document you are attaching:',
      'To state your dissatisfaction clearly:',
      'To demand a specific action:',
      'To give a deadline for a response:',
      'To use "none of which" formally:',
      'To use "whose" in a complaint:'
    ][i],
    options: [
      ['The website from which I purchased the item...', 'The site I got it from...', 'The place that sold it...'],
      ['The representative to whom I spoke...', 'The person I talked with...', 'The guy I spoke to...'],
      ['The manner in which my data was processed...', 'The way they used my info...', 'How they did it...'],
      ['According to the regulations with which you must comply...', 'The law says...', 'Follow the rules.'],
      ['Attached is a copy of the contract, the terms of which...', 'Look at the contract.', 'Here is the paper.'],
      ['I am writing to express my profound concern regarding...', 'I am angry about...', 'This is bad.'],
      ['I request that my data be deleted immediately.', 'Delete my stuff.', 'Take it away.'],
      ['I look forward to a response within 14 days.', 'Reply soon.', 'Don\'t be late.'],
      ['I have sent three emails, none of which have been answered.', 'You didn\'t reply to my emails.', 'Zero replies.'],
      ['I am contacting the company, whose policy seems to be...', 'Your policy is bad.', 'The rules are...']
    ][i],
    correctAnswer: [
      'The website from which I purchased the item...',
      'The representative to whom I spoke...',
      'The manner in which my data was processed...',
      'According to the regulations with which you must comply...',
      'Attached is a copy of the contract, the terms of which...',
      'I am writing to express my profound concern regarding...',
      'I request that my data be deleted immediately.',
      'I look forward to a response within 14 days.',
      'I have sent three emails, none of which have been answered.',
      'I am contacting the company, whose policy seems to be...'
    ][i],
    explanation: 'Using sophisticated grammar to lend weight to formal correspondence.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DEBATING PRIVACY
// ================= ::::::::::::::::::::::::::::::
export const B2_U56_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: The Situation in Which We Live',
  explanation: 'How to use advanced relative clauses to discuss complex societal issues.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you formally introduce a debate about online ethics?`,
    options: ['The society in which we live depends on digital trust.', 'We live in a digital world.', 'The internet is very important.', 'We need better rules.'],
    correctAnswer: 'The society in which we live depends on digital trust.',
    explanation: 'Elevating your speaking style for academic or professional discussions.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U56_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 56',
  explanation: 'Consolidation of Advanced Relative Clauses and Digital Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'The company to ___ (whom/who) I wrote responded.' : 'Data ___ (breaches/breaks) are dangerous.',
    options: i < 5 ? ['whom', 'who', 'which'] : ['breaches', 'breaks', 'leaks'],
    correctAnswer: i < 5 ? 'whom' : 'breaches',
    explanation: 'Final check of key concepts from Unit 56.',
    points: 1
  }))
};

export const B2_UNIT_56 = createB2Unit(
  'b2-u56',
  'Digital Rights & Online Ethics',
  'Navigate the complex legal and ethical landscape of the digital age while mastering advanced relative clauses for precise and professional communication.',
  ['Use formal relative clauses with prepositions accurately (e.g., to whom, in which)', 'Apply "whose" and partitive structures (e.g., some of whom) in complex sentences', 'Discuss online privacy, data protection, and digital ethics with sophistication'],
  [
    B2_U56_BLOCK1, B2_U56_BLOCK2, B2_U56_BLOCK3, B2_U56_BLOCK4, B2_U56_BLOCK5,
    B2_U56_BLOCK6, B2_U56_BLOCK7, B2_U56_BLOCK8, B2_U56_BLOCK9, B2_U56_BLOCK10
  ]
);

import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 17;

// ============================================
// BLOCK 1: GRAMMAR - PASSIVE REPORTING (IT IS SAID THAT...)
// ============================================
export const B2_U17_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Passive Reporting: Impersonal Structures',
  grammarPoint: 'Passive Reporting',
  explanation: 'Use "It is + passive verb + that..." to report opinions or facts objectively.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'It is ___ (believe) that the data was leaked.',
      'It is ___ (say) that the hackers are in Europe.',
      'It is ___ (claim) that the software is secure.',
      'It is ___ (think) that the system crashed due to a bug.',
      'It is ___ (estimate) that 10,000 accounts were affected.',
      'It is ___ (report) that a new law will be passed.',
      'It is ___ (consider) that the update is mandatory.',
      'It is ___ (know) that cybercrime is on the rise.',
      'It is ___ (assume) that the password was stolen.',
      'It is ___ (understand) that the company will pay a fine.'
    ][i],
    options: [
      ['believed', 'believe', 'believing'],
      ['said', 'say', 'saying'],
      ['claimed', 'claim', 'claiming'],
      ['thought', 'think', 'thinking'],
      ['estimated', 'estimate', 'estimating'],
      ['reported', 'report', 'reporting'],
      ['considered', 'consider', 'considering'],
      ['known', 'know', 'knowing'],
      ['assumed', 'assume', 'assuming'],
      ['understood', 'understand', 'understanding']
    ][i],
    correctAnswer: [
      'believed',
      'said',
      'claimed',
      'thought',
      'estimated',
      'reported',
      'considered',
      'known',
      'assumed',
      'understood'
    ][i],
    explanation: 'Using the past participle in impersonal passive reporting.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - PASSIVE REPORTING (HE IS SAID TO...)
// ============================================
export const B2_U17_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Passive Reporting: Personal Structures',
  grammarPoint: 'Passive Reporting',
  explanation: 'Use "Subject + passive verb + to-infinitive" to report information about a specific person or thing.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'The hackers are said ___ (be) very talented.',
      'The company is believed ___ (lose) millions.',
      'She is thought ___ (live) in a secret location.',
      'The virus is known ___ (spread) quickly.',
      'The data is reported ___ (store) on encrypted servers.',
      'He is claimed ___ (steal) the information.',
      'They are estimated ___ (earn) a lot of money.',
      'The law is expected ___ (change) next year.',
      'The system is considered ___ (be) vulnerable.',
      'The files are assumed ___ (delete).'
    ][i],
    correctAnswer: [
      'to be',
      'to have lost',
      'to live',
      'to spread',
      'to be stored',
      'to have stolen',
      'to earn',
      'to change',
      'to be',
      'to have been deleted'
    ][i],
    explanation: 'Using the correct infinitive (simple or perfect) in personal passive reporting.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - DIGITAL PRIVACY
// ============================================
export const B2_U17_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Digital Privacy',
  explanation: 'Terms for protecting personal information online.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'You should use strong ___ (passwords) for all accounts.',
      'Two-___ (factor) authentication adds an extra layer of security.',
      '___ (Encryption) makes your data unreadable to others.',
      'We must protect our personal ___ (identity) online.',
      'Be careful with your ___ (privacy) settings on social media.',
      'Data ___ (breaches) are becoming more common.',
      'A ___ (VPN) can help hide your online activity.',
      'Do not share sensitive ___ (information) with strangers.',
      'The app requests ___ (permission) to access your contacts.',
      'You have the right to be ___ (forgotten) online.'
    ][i],
    correctAnswer: [
      'passwords',
      'factor',
      'Encryption',
      'identity',
      'privacy',
      'breaches',
      'VPN',
      'information',
      'permission',
      'forgotten'
    ][i],
    explanation: 'Key concepts in online privacy and security.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - CYBERSECURITY THREATS
// ============================================
export const B2_U17_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Cybersecurity Threats',
  explanation: 'Vocabulary for types of online attacks.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      '___ (Phishing) emails try to steal your login info.',
      'A computer ___ (virus) can damage your files.',
      '___ (Malware) is a general term for malicious software.',
      '___ (Spyware) tracks your activity without your knowledge.',
      '___ (Ransomware) locks your files and asks for money.',
      'The hacker used a ___ (trojan) horse to gain access.',
      'The website suffered a ___ (DDoS) attack.',
      'He is a victim of identity ___ (theft).',
      'The system has a ___ (vulnerability) that was exploited.',
      '___ (Adware) shows unwanted advertisements.'
    ][i],
    options: [
      ['Phishing', 'Fishing', 'Wishing'],
      ['virus', 'bug', 'error'],
      ['Malware', 'Software', 'Hardware'],
      ['Spyware', 'Adware', 'Firmware'],
      ['Ransomware', 'Goldware', 'Paidware'],
      ['trojan', 'greek', 'hidden'],
      ['DDoS', 'DOD', 'DOA'],
      ['theft', 'loss', 'game'],
      ['vulnerability', 'hole', 'gap'],
      ['Adware', 'Spyware', 'Malware']
    ][i],
    correctAnswer: [
      'Phishing',
      'virus',
      'Malware',
      'Spyware',
      'Ransomware',
      'trojan',
      'DDoS',
      'theft',
      'vulnerability',
      'Adware'
    ][i],
    explanation: 'Common cybersecurity terminology.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (SECURITY)
// ============================================
export const B2_U17_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Online Safety',
  explanation: 'Form words related to security and privacy.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (SECURE) of the website is high.',
      'We need to protect our ___ (PRIVATE) at all costs.',
      'The ___ (ENCRYPT) of the message was successful.',
      'He is an expert in ___ (CRIME) forensics.',
      'The ___ (PROTECT) of data is essential.',
      'The ___ (IDENTIFY) of the hacker is unknown.',
      'We must be ___ (VIGIL) against threats.',
      'The ___ (VULNERABLE) of the system was shocking.',
      'He was ___ (SUSPECT) of cybercrime.',
      'The ___ (LEGAL) of this action is questionable.'
    ][i],
    correctAnswer: [
      'security',
      'privacy',
      'encryption',
      'criminal',
      'protection',
      'identity',
      'vigilant',
      'vulnerability',
      'suspected',
      'legality'
    ][i],
    explanation: 'Forming nouns and adjectives in a security context.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE RIGHT TO BE FORGOTTEN
// ============================================
export const B2_U17_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Digital Erasure',
  explanation: 'Read about the legal right to have data removed and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What does "the right to be forgotten" allow?' : 'What is a counter-argument to this right?',
    options: [['Removing personal data from search results', 'Getting a new name', 'Deleting your bank account', 'Leaving the internet'], ['Freedom of information', 'It is too expensive', 'It is too slow', 'Nobody wants it']][i % 2],
    correctAnswer: i < 5 ? 'Removing personal data from search results' : 'Freedom of information',
    explanation: 'Comprehending legal and ethical digital rights.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - CYBERSECURITY BRIEFING
// ============================================
export const B2_U17_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: How to Stay Safe Online',
  explanation: 'Listen to the expert and identify the best safety tips.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the most common way people get hacked according to the expert?`,
    options: ['Weak passwords', 'DDoS attacks', 'Malware', 'Physical theft'],
    correctAnswer: 'Weak passwords',
    explanation: 'Listening for statistical information and expert advice.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - NEWS REPORTS (TECH)
// ============================================
export const B2_U17_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Reporting Cybersecurity News',
  explanation: 'Choose the best phrase for a news report about a hack.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To headline a news story:',
      'To report the event objectively:',
      'To quote an expert:',
      'To mention the source of the leak:',
      'To describe the impact:',
      'To state the company\'s reaction:',
      'To warn the public:',
      'To mention a future investigation:',
      'To conclude the report:',
      'To give a statistic:'
    ][i],
    options: [
      ['Massive Data Breach at Global Firm', 'Hackers got in.', 'Security fail!'],
      ['It is reported that millions of records were stolen.', 'Lots of info gone.', 'Bad news:'],
      ['According to cybersecurity experts...', 'A tech guy said...', 'Expert view:'],
      ['The leak is thought to have originated from...', 'It came from...', 'Start point:'],
      ['The incident has caused widespread concern.', 'People are mad.', 'Impact:'],
      ['The company issued a formal apology.', 'They said sorry.', 'Response:'],
      ['Users are advised to change their passwords immediately.', 'Change passwords!', 'Warning:'],
      ['An official inquiry is expected to be launched.', 'We will look into it.', 'Next step:'],
      ['In light of this event, security remains a top priority.', 'The end.', 'Final word:'],
      ['It is estimated that 20% of users were affected.', 'Some people...', 'Count:']
    ][i],
    correctAnswer: [
      'Massive Data Breach at Global Firm',
      'It is reported that millions of records were stolen.',
      'According to cybersecurity experts...',
      'The leak is thought to have originated from...',
      'The incident has caused widespread concern.',
      'The company issued a formal apology.',
      'Users are advised to change their passwords immediately.',
      'An official inquiry is expected to be launched.',
      'In light of this event, security remains a top priority.',
      'It is estimated that 20% of users were affected.'
    ][i],
    explanation: 'Using formal reporting verbs and structures for news writing.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING PRIVACY CONCERNS
// ============================================
export const B2_U17_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Expressing Concern about Privacy',
  explanation: 'Identify natural ways to express worry about data use.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally express concern about apps tracking you?`,
    options: ['I find it quite alarming that...', 'I don\'t like it.', 'It is bad.', 'They track me.'],
    correctAnswer: 'I find it quite alarming that...',
    explanation: 'Using formal but natural expressions to discuss modern issues.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U17_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 17',
  explanation: 'Consolidation of Passive Reporting and Privacy Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'It is ___ (say) that the internet is unsafe.' : 'He is ___ (believe) to be the mastermind.',
    options: i < 5 ? ['said', 'say', 'saying'] : ['believed', 'believe', 'believing'],
    correctAnswer: i < 5 ? 'said' : 'believed',
    explanation: 'Review of reporting structures.',
    points: 1
  }))
};

export const B2_UNIT_17 = createB2Unit(
  'b2-u17',
  'Digital Privacy',
  'Master passive reporting while exploring the critical issues of online security and privacy.',
  ['Use "It is said that..." and "He is said to..." structures correctly', 'Understand vocabulary for digital privacy and cybersecurity threats', 'Write and analyze tech news reports objectively'],
  [
    B2_U17_BLOCK1, B2_U17_BLOCK2, B2_U17_BLOCK3, B2_U17_BLOCK4, B2_U17_BLOCK5,
    B2_U17_BLOCK6, B2_U17_BLOCK7, B2_U17_BLOCK8, B2_U17_BLOCK9, B2_U17_BLOCK10
  ]
);

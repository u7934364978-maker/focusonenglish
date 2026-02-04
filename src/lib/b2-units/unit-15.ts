import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 15;

// ============================================
// BLOCK 1: GRAMMAR - REPORTED SPEECH (STATEMENTS)
// ============================================
export const B2_U15_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Reported Speech: Statements',
  grammarPoint: 'Reported Speech',
  explanation: 'Shift tenses back when reporting what someone said in the past.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      '"I am busy," he said. -> He said that he ___ busy.',
      '"We have finished," they said. -> They said that they ___ finished.',
      '"I will call you," she said. -> She said that she ___ call me.',
      '"I worked late," he said. -> He said that he ___ late.',
      '"We are meeting tomorrow," they said. -> They said they ___ the next day.',
      '"I can help," she said. -> She said that she ___ help.',
      '"I must go," he said. -> He said that he ___ go.',
      '"I don\'t know," she said. -> She said that she ___ know.',
      '"We were waiting," they said. -> They said that they ___ waiting.',
      '"I have been working," he said. -> He said he ___ working.'
    ][i],
    options: [
      ['was', 'is', 'be'],
      ['had', 'have', 'has'],
      ['would', 'will', 'shall'],
      ['had worked', 'worked', 'works'],
      ['were meeting', 'are meeting', 'will meet'],
      ['could', 'can', 'may'],
      ['had to', 'must', 'should'],
      ['didn\'t', 'doesn\'t', 'don\'t'],
      ['had been', 'were', 'are'],
      ['had been', 'has been', 'was']
    ][i],
    correctAnswer: [
      'was',
      'had',
      'would',
      'had worked',
      'were meeting',
      'could',
      'had to',
      'didn\'t',
      'had been',
      'had been'
    ][i],
    explanation: 'Backshifting tenses in reported speech.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - REPORTED SPEECH (QUESTIONS & COMMANDS)
// ============================================
export const B2_U15_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Reported Questions and Commands',
  grammarPoint: 'Reported Speech',
  explanation: 'Use "if/whether" for yes/no questions and "to + infinitive" for commands and requests.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      '"Where do you work?" -> He asked me where I ___ (work).',
      '"Do you like your job?" -> She asked me ___ (if) I liked my job.',
      '"Sit down," the boss said. -> The boss told me ___ (sit) down.',
      '"Don\'t forget the meeting," he said. -> He told me ___ (not/forget) the meeting.',
      '"What is your name?" -> She asked me what my name ___ (be).',
      '"Can you help me?" -> He asked me ___ (if) I could help him.',
      '"Open the window," she said. -> She asked me ___ (open) the window.',
      '"Why are you late?" -> He asked me why I ___ (be) late.',
      '"Have you seen the report?" -> She asked me if I ___ (see) the report.',
      '"Wait for me," he said. -> He told me ___ (wait) for him.'
    ][i],
    correctAnswer: [
      'worked',
      'if',
      'to sit',
      'not to forget',
      'was',
      'if',
      'to open',
      'was',
      'had seen',
      'to wait'
    ][i],
    explanation: 'Reporting questions and orders correctly.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - BUSINESS COMMUNICATION
// ============================================
export const B2_U15_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Professional Communication',
  explanation: 'Terms for effective interaction in a business setting.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'Effective ___ (communication) is key to success.',
      'We need to provide regular ___ (feedback) to the team.',
      'Active ___ (listening) is a vital skill.',
      'The ___ (agenda) for the meeting was sent yesterday.',
      'We must ___ (collaborate) with other departments.',
      'I need to ___ (clarify) a few points in the report.',
      'He gave a very persuasive ___ (presentation).',
      'She is a great ___ (negotiator).',
      'We reached a ___ (compromise) after a long talk.',
      'The ___ (minutes) of the meeting are available online.'
    ][i],
    correctAnswer: [
      'communication',
      'feedback',
      'listening',
      'agenda',
      'collaborate',
      'clarify',
      'presentation',
      'negotiator',
      'compromise',
      'minutes'
    ][i],
    explanation: 'Vocabulary for meetings and professional interactions.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - NETWORKING & EVENTS
// ============================================
export const B2_U15_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Networking Skills',
  explanation: 'Terms for building professional relationships.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'Networking helps you build a strong ___ (network).',
      'I attended a business ___ (conference) last week.',
      'It\'s important to ___ (follow) up after an event.',
      'She handed out her business ___ (card) to everyone.',
      'Networking is about building ___ (relationships).',
      'He is a very ___ (sociable) person.',
      'You should have a short elevator ___ (pitch) ready.',
      'LinkedIn is a great tool for ___ (online) networking.',
      'We met at a networking ___ (mixer).',
      'It is vital to maintain your ___ (reputation).'
    ][i],
    options: [
      ['network', 'group', 'team'],
      ['conference', 'meeting', 'party'],
      ['follow', 'get', 'take'],
      ['card', 'paper', 'note'],
      ['relationships', 'friends', 'links'],
      ['sociable', 'friendly', 'kind'],
      ['pitch', 'talk', 'speech'],
      ['online', 'virtual', 'web'],
      ['mixer', 'event', 'club'],
      ['reputation', 'name', 'face']
    ][i],
    correctAnswer: [
      'network',
      'conference',
      'follow',
      'card',
      'relationships',
      'sociable',
      'pitch',
      'online',
      'mixer',
      'reputation'
    ][i],
    explanation: 'Vocabulary for professional networking and events.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (COMMUNICATION)
// ============================================
export const B2_U15_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Interpersonal Skills',
  explanation: 'Form words related to communication and networking.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (COMMUNICATE) process was very smooth.',
      'She has a very ___ (PERSUADE) speaking style.',
      'His ___ (RELATE) with his colleagues are excellent.',
      'The ___ (COLLABORATE) between the teams was vital.',
      'She is a very ___ (CONFIDENCE) speaker.',
      'We need to improve our ___ (INTERACT) with clients.',
      'The ___ (NEGOTIATE) took several hours.',
      'He is known for his ___ (ADAPT).',
      'The ___ (EFFECT) of the meeting was clear.',
      'She showed great ___ (INITIATE) in the project.'
    ][i],
    correctAnswer: [
      'communication',
      'persuasive',
      'relationships',
      'collaboration',
      'confident',
      'interactions',
      'negotiation',
      'adaptability',
      'effectiveness',
      'initiative'
    ][i],
    explanation: 'Transforming words to fit communication contexts.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE ART OF NETWORKING
// ============================================
export const B2_U15_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Networking in the Digital Age',
  explanation: 'Read about how networking has changed and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the main advantage of online networking?' : 'Why is face-to-face contact still important?',
    options: [['Global reach', 'It is free', 'Less effort', 'No talking'], ['Builds trust', 'It is faster', 'It is cheaper', 'No internet needed']][i % 2],
    correctAnswer: i < 5 ? 'Global reach' : 'Builds trust',
    explanation: 'Comprehending the evolution of professional networking.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - BUSINESS MEETING
// ============================================
export const B2_U15_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: A Project Briefing',
  explanation: 'Listen to the project manager and identify the main tasks.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the most urgent task?`,
    options: ['Finalizing the budget', 'Writing the report', 'Calling the client', 'Booking the room'],
    correctAnswer: 'Finalizing the budget',
    explanation: 'Listening for priorities and instructions.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - MINUTES & SUMMARIES
// ============================================
export const B2_U15_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Summarizing Meetings',
  explanation: 'Choose the best way to summarize a point from a meeting.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To report a decision:',
      'To report an action point:',
      'To report a discussion point:',
      'To report a disagreement:',
      'To report a suggestion:',
      'To report a deadline:',
      'To report an apology:',
      'To report a presentation:',
      'To report a next step:',
      'To summarize the outcome:'
    ][i],
    options: [
      ['It was agreed that...', 'We said yes.', 'Decision:'],
      ['John will be responsible for...', 'John does this.', 'Action:'],
      ['The team discussed the possibility of...', 'We talked about...', 'Topic:'],
      ['There were differing views on...', 'We fought.', 'Problem:'],
      ['It was suggested that we...', 'Maybe do...', 'Idea:'],
      ['The deadline was set for...', 'Finish by...', 'Date:'],
      ['Apologies were received from...', 'He said sorry.', 'Absent:'],
      ['Sarah presented the latest...', 'Sarah talked.', 'Info:'],
      ['The next meeting will be held on...', 'Next time:', 'Future:'],
      ['In summary, the meeting was...', 'The end.', 'Summary:']
    ][i],
    correctAnswer: [
      'It was agreed that...',
      'John will be responsible for...',
      'The team discussed the possibility of...',
      'There were differing views on...',
      'It was suggested that we...',
      'The deadline was set for...',
      'Apologies were received from...',
      'Sarah presented the latest...',
      'The next meeting will be held on...',
      'In summary, the meeting was...'
    ][i],
    explanation: 'Using the third person and passive/formal structures for meeting minutes.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - SMALL TALK & NETWORKING
// ============================================
export const B2_U15_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Breaking the Ice',
  explanation: 'Identify natural ways to start a conversation at an event.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `What is a good way to start a conversation with someone new?`,
    options: ['Have you been to this conference before?', 'What is your job?', 'Tell me about yourself.', 'Do you like this party?'],
    correctAnswer: 'Have you been to this conference before?',
    explanation: 'Using open-ended questions for small talk.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U15_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 15',
  explanation: 'Consolidation of Reported Speech and Communication Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'He asked me if I ___ (see) the news.' : 'She told me ___ (wait) for the email.',
    options: i < 5 ? ['had seen', 'saw', 'see'] : ['to wait', 'waiting', 'wait'],
    correctAnswer: i < 5 ? 'had seen' : 'to wait',
    explanation: 'Review of reporting patterns.',
    points: 1
  }))
};

export const B2_UNIT_15 = createB2Unit(
  'b2-u15',
  'Business Communication',
  'Master reported speech and professional communication strategies for the modern world.',
  ['Report statements, questions, and commands accurately', 'Use professional vocabulary for meetings and networking', 'Summarize discussions and use effective small talk'],
  [
    B2_U15_BLOCK1, B2_U15_BLOCK2, B2_U15_BLOCK3, B2_U15_BLOCK4, B2_U15_BLOCK5,
    B2_U15_BLOCK6, B2_U15_BLOCK7, B2_U15_BLOCK8, B2_U15_BLOCK9, B2_U15_BLOCK10
  ]
);

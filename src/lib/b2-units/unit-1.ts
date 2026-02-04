import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 1;

// ============================================
// BLOCK 1: GRAMMAR - PAST PERFECT VS PAST SIMPLE
// ============================================
export const B2_U1_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Past Perfect vs Past Simple',
  grammarPoint: 'Past Perfect',
  explanation: 'Use the Past Perfect for actions that happened before another action in the past.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'They ___ (already/finish) dinner when I arrived.',
      'By the time we got to the cinema, the film ___ (start).',
      'She realized she ___ (leave) her keys at home.',
      'He was tired because he ___ (work) all night.',
      'I ___ (never/see) such a beautiful sunset before I went to Hawaii.',
      'The house was quiet because everyone ___ (go) to bed.',
      'After they ___ (save) enough money, they bought a car.',
      'When the police arrived, the thief ___ (escape).',
      'I couldn\'t call you because I ___ (lose) my phone.',
      'We were hungry because we ___ (not/eat) all day.'
    ][i],
    correctAnswer: [
      'had already finished',
      'had started',
      'had left',
      'had worked',
      'had never seen',
      'had gone',
      'had saved',
      'had escaped',
      'had lost',
      'had not eaten'
    ][i],
    explanation: 'Actions that happened before another past event.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - NARRATIVE TENSES IN CONTEXT
// ============================================
export const B2_U1_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Narrative Tenses in Context',
  grammarPoint: 'Past Continuous & Past Perfect',
  explanation: 'Combining past tenses to tell stories.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'While I ___ for the bus, I realized I had left my wallet.',
      'I ___ a loud noise while I was sleeping.',
      'By the time I ___ the station, the train had already departed.',
      'She ___ that she had met him before.',
      'They ___ when the lights went out.',
      'I ___ my homework when the teacher entered.',
      'We ___ for hours when it started raining.',
      'He ___ to the radio when he heard the news.',
      'She ___ lunch when the phone rang.',
      'I ___ to her since we had the argument.'
    ][i],
    options: [
      ['was waiting', 'had waited', 'waited'],
      ['heard', 'was hearing', 'had heard'],
      ['reached', 'had reached', 'was reaching'],
      ['realized', 'was realizing', 'had realized'],
      ['were talking', 'had talked', 'talked'],
      ['was doing', 'had done', 'did'],
      ['had been walking', 'walked', 'were walking'],
      ['was listening', 'had listened', 'listened'],
      ['was having', 'had', 'had had'],
      ['hadn\'t spoken', 'wasn\'t speaking', 'didn\'t speak']
    ][i],
    correctAnswer: [
      'was waiting',
      'heard',
      'reached',
      'realized',
      'were talking',
      'was doing',
      'had been walking',
      'was listening',
      'was having',
      'hadn\'t spoken'
    ][i],
    explanation: 'Choosing the correct narrative tense based on context.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - RELATIONSHIP VERBS
// ============================================
export const B2_U1_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Relationship Verbs',
  explanation: 'Common verbs used to describe relationships.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'They ___ (fall) in love at first sight.',
      'I really ___ (get) on well with my siblings.',
      'We ___ (lose) touch after university.',
      'She ___ (break) up with him last week.',
      'It\'s important to ___ (make) up after an argument.',
      'I ___ (look) up to my grandfather.',
      'They ___ (settle) down and had three children.',
      'He ___ (propose) to her in Paris.',
      'We ___ (drift) apart over the years.',
      'I can always ___ (rely) on my best friend.'
    ][i],
    correctAnswer: [
      'fell',
      'get',
      'lost',
      'broke',
      'make',
      'look',
      'settled',
      'proposed',
      'drifted',
      'rely'
    ][i],
    explanation: 'Verbs related to human connections.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - PERSONALITY ADJECTIVES
// ============================================
export const B2_U1_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Personality Adjectives',
  explanation: 'Adjectives to describe character.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'A person who is always on time is ___.',
      'Someone who shares everything is ___.',
      'If you never change your mind, you are ___.',
      'A person who talks a lot is ___.',
      'Someone who is good at something is ___.',
      'If you feel nervous around people, you are ___.',
      'A person you can trust is ___.',
      'Someone who thinks only of themselves is ___.',
      'If you are always happy, you are ___.',
      'A person who works hard is ___.'
    ][i],
    options: [
      ['punctual', 'reliable', 'lazy'],
      ['generous', 'selfish', 'greedy'],
      ['stubborn', 'flexible', 'kind'],
      ['talkative', 'quiet', 'shy'],
      ['talented', 'clumsy', 'stupid'],
      ['shy', 'outgoing', 'confident'],
      ['reliable', 'untrustworthy', 'mean'],
      ['selfish', 'altruistic', 'kind'],
      ['cheerful', 'moody', 'sad'],
      ['hardworking', 'lazy', 'ambitious']
    ][i],
    correctAnswer: [
      'punctual',
      'generous',
      'stubborn',
      'talkative',
      'talented',
      'shy',
      'reliable',
      'selfish',
      'cheerful',
      'hardworking'
    ][i],
    explanation: 'Describing human character.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - KEY WORD TRANSFORMATION
// ============================================
export const B2_U1_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'key-word-transformation',
  title: 'Key Word Transformation',
  explanation: 'Rewrite the second sentence so it has a similar meaning to the first.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'key-word-transformation',
    sentence: [
      'I haven\'t seen him for ages.',
      'She started working here two years ago.',
      'It was the first time I had been to Italy.',
      'The movie ended before we arrived.',
      'He is the most stubborn person I know.',
      'I found it difficult to get used to the cold.',
      'We had never met before the party.',
      'She is too young to drive.',
      'The book was so boring that I fell asleep.',
      'I prefer tea to coffee.'
    ][i],
    keyWord: [
      'SINCE',
      'FOR',
      'NEVER',
      'ALREADY',
      'AS',
      'DIFFICULTY',
      'FIRST',
      'OLD',
      'SUCH',
      'RATHER'
    ][i],
    startOfAnswer: [
      'It has been ages ___',
      'She has ___',
      'I ___',
      'The movie ___',
      'No one I know is ___',
      'I had ___',
      'The party was the ___',
      'She is not ___',
      'It was ___',
      'I would ___'
    ][i],
    correctAnswer: [
      'since I last saw him',
      'worked here for two years',
      'had never been to Italy before',
      'had already ended',
      'as stubborn as him',
      'difficulty getting used to',
      'first time we had met',
      'old enough to drive',
      'such a boring book',
      'rather have tea than coffee'
    ][i],
    explanation: 'FCE style transformation.',
    points: 2
  }))
};

// ============================================
// BLOCK 6: READING - SHORT TEXTS
// ============================================
export const B2_U1_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Friendship in the Digital Age',
  explanation: 'Read the short text and answer the questions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'According to the text, what is the main benefit of social media for friendship?' : 'What does the author suggest about deep connections?',
    options: [['Staying in touch', 'Making new friends', 'Sharing photos', 'Playing games'], ['They require time', 'They are impossible online', 'They are easy to form', 'They are not necessary']][i % 2],
    correctAnswer: i < 5 ? 'Staying in touch' : 'They require time',
    explanation: 'Comprehension of the text.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - IDENTIFYING FEELINGS
// ============================================
export const B2_U1_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: How do they feel?',
  explanation: 'Identify the emotion of the speaker in each scenario.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `Speaker ${i + 1} is talking about their best friend. How do they feel?`,
    options: ['Proud', 'Angry', 'Disappointed', 'Surprised'],
    correctAnswer: 'Proud',
    explanation: 'Identifying tone and emotion.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - INFORMAL EMAILS
// ============================================
export const B2_U1_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Informal Emails',
  explanation: 'Choose the most appropriate phrase for an informal email to a friend.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'Best opening for a friend:',
      'To suggest meeting up:',
      'To apologize for a delay:',
      'To end the email:',
      'To ask for news:',
      'To offer help:',
      'To invite to a party:',
      'To thank for a gift:',
      'To say goodbye:',
      'To add a P.S.:'
    ][i],
    options: [
      ['Hi John,', 'Dear Mr. Smith,', 'To whom it may concern,'],
      ['How about meeting on Friday?', 'I request a meeting.', 'We shall meet.'],
      ['Sorry for the late reply!', 'I apologize for the delay.', 'Excuse my absence.'],
      ['Write soon!', 'Yours sincerely,', 'Best regards,'],
      ['How have you been?', 'What is your current status?', 'State your news.'],
      ['Let me know if you need help.', 'I am available for assistance.', 'Aid is offered.'],
      ['Do you want to come to my party?', 'Your presence is requested.', 'Invite you I do.'],
      ['Thanks for the book!', 'I am grateful for the literature.', 'Received with thanks.'],
      ['Love,', 'Yours truly,', 'Respectfully,'],
      ['P.S. Don\'t forget the map!', 'Note:', 'Appendix:']
    ][i],
    correctAnswer: [
      'Hi John,',
      'How about meeting on Friday?',
      'Sorry for the late reply!',
      'Write soon!',
      'How have you been?',
      'Let me know if you need help.',
      'Do you want to come to my party?',
      'Thanks for the book!',
      'Love,',
      'P.S. Don\'t forget the map!'
    ][i],
    explanation: 'Register and tone in informal writing.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - EXPRESSING OPINIONS
// ============================================
export const B2_U1_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Expressing Opinions',
  explanation: 'Choose the most natural way to express an opinion in a conversation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally say you agree with a friend?`,
    options: ['I couldn\'t agree more.', 'I am in complete accordance.', 'Yes, true.', 'I think so too.'],
    correctAnswer: 'I couldn\'t agree more.',
    explanation: 'Conversational English at B2 level.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U1_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review',
  explanation: 'A mix of grammar and vocabulary from this unit.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Choose the correct tense.' : 'Choose the correct word.',
    options: i < 5 ? ['had left', 'was leaving', 'left'] : ['stubborn', 'generous', 'talkative'],
    correctAnswer: i < 5 ? 'had left' : 'stubborn',
    explanation: 'Review of Unit 1.',
    points: 1
  }))
};

export const B2_UNIT_1 = createB2Unit(
  'b2-u1',
  'Past Perfect & Narrative Tenses',
  'Master narrative tenses and talk about relationships.',
  ['Use Past Perfect correctly', 'Describe personality', 'Write informal emails'],
  [
    B2_U1_BLOCK1, B2_U1_BLOCK2, B2_U1_BLOCK3, B2_U1_BLOCK4, B2_U1_BLOCK5,
    B2_U1_BLOCK6, B2_U1_BLOCK7, B2_U1_BLOCK8, B2_U1_BLOCK9, B2_U1_BLOCK10
  ]
);

import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 8;

// ============================================
// BLOCK 1: GRAMMAR - WISH / IF ONLY (PRESENT/FUTURE)
// ============================================
export const B2_U8_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Wish and If Only: Present & Future',
  grammarPoint: 'Wish / If Only',
  explanation: 'Use wish/if only + past simple for present desires, and wish/if only + would for annoying habits or future changes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'I wish I ___ (speak) Spanish fluently.',
      'If only I ___ (have) more free time.',
      'I wish it ___ (stop) raining!',
      'If only they ___ (not/make) so much noise.',
      'I wish I ___ (know) how to cook.',
      'If only you ___ (be) here with me.',
      'I wish she ___ (call) me more often.',
      'If only I ___ (can) fly.',
      'I wish he ___ (not/be) so stubborn.',
      'If only the weekend ___ (start) today.'
    ][i],
    correctAnswer: [
      'spoke',
      'had',
      'would stop',
      'would not make',
      'knew',
      'were',
      'would call',
      'could',
      'weren\'t',
      'started'
    ][i],
    explanation: 'Using past forms to express hypothetical present desires.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - WISH / IF ONLY (PAST REGRETS)
// ============================================
export const B2_U8_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Wish and If Only: Past Regrets',
  grammarPoint: 'Wish / If Only',
  explanation: 'Use wish/if only + past perfect to express regrets about the past.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'I wish I ___ harder for the exam.',
      'If only I ___ that job offer.',
      'I wish we ___ to that party.',
      'If only they ___ us the truth.',
      'I wish I ___ my phone at home.',
      'If only she ___ her umbrella.',
      'I wish I ___ more money when I was younger.',
      'If only we ___ that expensive car.',
      'I wish I ___ my time.',
      'If only he ___ the secret.'
    ][i],
    options: [
      ['had studied', 'studied', 'would study'],
      ['had accepted', 'accepted', 'would accept'],
      ['hadn\'t gone', 'didn\'t go', 'wouldn\'t go'],
      ['had told', 'told', 'would tell'],
      ['hadn\'t left', 'didn\'t leave', 'wouldn\'t leave'],
      ['had brought', 'brought', 'would bring'],
      ['had saved', 'saved', 'would save'],
      ['hadn\'t bought', 'didn\'t buy', 'wouldn\'t buy'],
      ['hadn\'t wasted', 'didn\'t waste', 'wouldn\'t waste'],
      ['had kept', 'kept', 'would keep']
    ][i],
    correctAnswer: [
      'had studied',
      'had accepted',
      'hadn\'t gone',
      'had told',
      'hadn\'t left',
      'had brought',
      'had saved',
      'hadn\'t bought',
      'hadn\'t wasted',
      'had kept'
    ][i],
    explanation: 'Expressing regrets using the Past Perfect.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - LIFE MILESTONES
// ============================================
export const B2_U8_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Life Milestones',
  explanation: 'Vocabulary for significant events in a person\'s life.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'He ___ (graduated) from university in 2015.',
      'They ___ (got) married in a beautiful ceremony.',
      'She ___ (started) her own business last year.',
      'He ___ (retired) after forty years of work.',
      'They ___ (moved) house three times in five years.',
      'She ___ (had) her first child at thirty.',
      'He ___ (promoted) to manager.',
      'They ___ (travelled) around the world.',
      'She ___ (won) an award for her research.',
      'He ___ (learnt) to drive when he was seventeen.'
    ][i],
    correctAnswer: [
      'graduated',
      'got',
      'started',
      'retired',
      'moved',
      'had',
      'was promoted',
      'travelled',
      'won',
      'learnt'
    ][i],
    explanation: 'Common verbs for life achievements.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - FEELINGS & EMOTIONS
// ============================================
export const B2_U8_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Emotions and Reactions',
  explanation: 'Adjectives to describe how people feel about life events.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'I was ___ when I heard the news.',
      'She felt ___ about her decision.',
      'He was ___ by the surprise party.',
      'We were ___ to see him again.',
      'She was ___ after the long flight.',
      'He felt ___ when he lost his keys.',
      'I was ___ of my achievements.',
      'She was ___ about the upcoming trip.',
      'He felt ___ by the sudden change.',
      'We were ___ by the beautiful scenery.'
    ][i],
    options: [
      ['thrilled', 'dull', 'clumsy'],
      ['regretful', 'happy', 'excited'],
      ['stunned', 'bored', 'calm'],
      ['delighted', 'angry', 'sad'],
      ['exhausted', 'energetic', 'fresh'],
      ['frustrated', 'happy', 'pleased'],
      ['proud', 'ashamed', 'guilty'],
      ['anxious', 'calm', 'relaxed'],
      ['bewildered', 'certain', 'sure'],
      ['awed', 'bored', 'tired']
    ][i],
    correctAnswer: [
      'thrilled',
      'regretful',
      'stunned',
      'delighted',
      'exhausted',
      'frustrated',
      'proud',
      'anxious',
      'bewildered',
      'awed'
    ][i],
    explanation: 'Nuanced vocabulary for emotional states.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (EMOTIONS)
// ============================================
export const B2_U8_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Feelings',
  explanation: 'Form nouns or adjectives from the roots provided.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'It was a very ___ (EMOTION) moment.',
      'He expressed his ___ (GRATEFUL) for the help.',
      'She showed great ___ (COURAGE) during the crisis.',
      'The ___ (EXCITE) was palpable.',
      'It was a ___ (MEMORABLE) experience.',
      'He felt a sense of ___ (RELIEVE) after the test.',
      'She is a very ___ (PASSION) musician.',
      'His ___ (HONEST) is one of his best traits.',
      'It was an ___ (AMAZE) performance.',
      'The ___ (HAPPINESS) in the room was contagious.'
    ][i],
    correctAnswer: [
      'emotional',
      'gratitude',
      'courage',
      'excitement',
      'memorable',
      'relief',
      'passionate',
      'honesty',
      'amazing',
      'happiness'
    ][i],
    explanation: 'Suffixes for emotions and abstract qualities.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - A TURNING POINT
// ============================================
export const B2_U8_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The Day Everything Changed',
  explanation: 'Read the personal story and answer the questions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What was the narrator\'s biggest regret?' : 'How did the event affect their future career?',
    options: [['Not leaving earlier', 'Not taking the job', 'Losing their phone', 'Missing the party'], ['It led to a new field', 'It ended their career', 'It had no effect', 'It made it harder']][i % 2],
    correctAnswer: i < 5 ? 'Not taking the job' : 'It led to a new field',
    explanation: 'Analyzing personal narratives and identifying regrets.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - REGRETS & DESIRES
// ============================================
export const B2_U8_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: If Only...',
  explanation: 'Listen to people talking about their lives and identify their main wish.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `Speaker ${i + 1} wishes they ___ .`,
    options: ['Had studied more', 'Lived in another city', 'Had a different job', 'Had saved more money'],
    correctAnswer: 'Had studied more',
    explanation: 'Identifying hypothetical desires in spoken English.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - REFLECTIVE WRITING
// ============================================
export const B2_U8_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Reflecting on the Past',
  explanation: 'Choose the best phrase for a reflective essay or blog post.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce a significant memory:',
      'To describe an old feeling:',
      'To express a past regret:',
      'To mention a lesson learned:',
      'To describe a turning point:',
      'To mention personal growth:',
      'To describe a nostalgic feeling:',
      'To reflect on a choice:',
      'To summarize the experience:',
      'To conclude a reflection:'
    ][i],
    options: [
      ['One moment that stands out is...', 'I remember this:', 'A thing happened:'],
      ['I vividly recall feeling...', 'I felt happy.', 'It was good.'],
      ['With the benefit of hindsight, I wish I had...', 'I regret it.', 'Bad choice:'],
      ['This experience taught me that...', 'I learned this.', 'Lesson: active.'],
      ['A pivotal moment in my life was...', 'Then things changed.', 'Big change:'],
      ['I have grown considerably since then.', 'I am different now.', 'Changed me.'],
      ['A wave of nostalgia washed over me.', 'I felt old.', 'Thinking about past.'],
      ['Looking back, I realize that...', 'I think now.', 'Old choice was...'],
      ['In the grand scheme of things, it was...', 'It was big.', 'Main thing:'],
      ['Ultimately, I wouldn\'t change a thing.', 'It\'s over.', 'The end.']
    ][i],
    correctAnswer: [
      'One moment that stands out is...',
      'I vividly recall feeling...',
      'With the benefit of hindsight, I wish I had...',
      'This experience taught me that...',
      'A pivotal moment in my life was...',
      'I have grown considerably since then...',
      'A wave of nostalgia washed over me...',
      'Looking back, I realize that...',
      'In the grand scheme of things, it was...',
      'Ultimately, I wouldn\'t change a thing.'
    ][i],
    explanation: 'Using reflective and sophisticated language.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - TALKING ABOUT REGRETS
// ============================================
export const B2_U8_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Expressing Regret',
  explanation: 'Identify natural ways to talk about things you would change.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `Which is the most natural way to say you regret something in a conversation?`,
    options: ['If I could go back, I\'d do it differently.', 'I wish I had not done that.', 'I have regret.', 'Bad move by me.'],
    correctAnswer: 'If I could go back, I\'d do it differently.',
    explanation: 'Using natural conditional structures in speech.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U8_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 8',
  explanation: 'Consolidation of Unit 8 topics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Choose the correct "wish" structure for a past regret.' : 'Choose the correct milestone verb.',
    options: i < 5 ? ['I wish I had gone.', 'I wish I went.', 'I wish I would go.'] : ['graduated', 'got married', 'retired'],
    correctAnswer: i < 5 ? 'I wish I had gone.' : 'graduated',
    explanation: 'Review of Unit 8 concepts.',
    points: 1
  }))
};

export const B2_UNIT_8 = createB2Unit(
  'b2-u8',
  'Memorable Life Events',
  'Learn to express wishes and regrets while reflecting on life milestones.',
  ['Use wish and if only for present and past', 'Identify significant life milestones', 'Use reflective language in writing'],
  [
    B2_U8_BLOCK1, B2_U8_BLOCK2, B2_U8_BLOCK3, B2_U8_BLOCK4, B2_U8_BLOCK5,
    B2_U8_BLOCK6, B2_U8_BLOCK7, B2_U8_BLOCK8, B2_U8_BLOCK9, B2_U8_BLOCK10
  ]
);

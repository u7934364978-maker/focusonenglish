import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 58;

// ============================================
// BLOCK 1: GRAMMAR - THIRD CONDITIONAL REVIEW
// ============================================
export const B2_U58_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Historical Ifs',
  grammarPoint: 'Third Conditional',
  explanation: 'Use the Third Conditional (If + past perfect, would have + past participle) to talk about hypothetical past situations and their past consequences.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'If the empire ___ (not/fall), history ___ (be) very different.',
      'We ___ (win) the battle if we ___ (have) more soldiers.',
      'If she ___ (discover) the cure earlier, many lives ___ (be/saved).',
      'They ___ (not/lose) the election if they ___ (promise) reform.',
      'If the weather ___ (be) better, the voyage ___ (be) successful.',
      'History ___ (change) if the king ___ (marry) for love.',
      'If I ___ (know) the truth, I ___ (not/help) them.',
      'They ___ (survive) if they ___ (find) water.',
      'If the treaty ___ (be/signed), the war ___ (end).',
      'We ___ (reach) the moon earlier if we ___ (invest) more.'
    ][i],
    correctAnswer: [
      'had not fallen, would have been',
      'would have won, had had',
      'had discovered, would have been saved',
      'would not have lost, had promised',
      'had been, would have been',
      'would have changed, had married',
      'had known, would not have helped',
      'would have survived, had found',
      'had been signed, would have ended',
      'would have reached, had invested'
    ][i],
    explanation: 'Reviewing hypothetical past scenarios.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - MIXED CONDITIONALS REVIEW
// ============================================
export const B2_U58_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Past Actions, Present Results',
  grammarPoint: 'Mixed Conditionals',
  explanation: 'Use Mixed Conditionals to link a past hypothetical situation with a present consequence (or vice versa).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'If I ___ (take) that job, I ___ (be) rich now.',
      'If she ___ (not/be) so talented, she ___ (not/get) the prize.',
      'We ___ (not/be) lost if we ___ (bring) a map.',
      'If they ___ (study) harder, they ___ (have) the degree now.',
      'I ___ (help) you if I ___ (not/be) so busy today.',
      'If the world ___ (be) simpler, we ___ (not/invent) computers.',
      'If you ___ (listen) to me, you ___ (not/be) in trouble now.',
      'She ___ (be) the manager if she ___ (apply) for the role.',
      'If we ___ (not/waste) time, the project ___ (be) finished.',
      'If he ___ (be) taller, he ___ (might/play) professional basketball.'
    ][i],
    correctAnswer: [
      'had taken, would be',
      'were not, would not have got',
      'would not be, had brought',
      'had studied, would have',
      'would help, were not',
      'were, would not have invented',
      'had listened, would not be',
      'would be, had applied',
      'had not wasted, would be',
      'were, might have played'
    ][i],
    explanation: 'Mixing tenses to show the relationship between past and present.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: GRAMMAR - INVERTED CONDITIONALS REVIEW
// ============================================
export const B2_U58_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Formal Hypotheses',
  grammarPoint: 'Inverted Conditionals',
  explanation: 'In formal English, use "Should", "Were", or "Had" to start a conditional sentence instead of "if".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      '___ (Should) you need any help, contact us.',
      '___ (Were) I in your position, I would resign.',
      '___ (Had) they arrived earlier, they would have seen the show.',
      '___ (Were) it not for your help, I would have failed.',
      '___ (Should) the situation change, we will let you know.',
      '___ (Had) we known about the risks, we would have stopped.',
      '___ (Were) he to win, he would be the youngest president.',
      '___ (Had) the plan worked, we would be millionaires.',
      '___ (Should) any problems arise, please call me.',
      '___ (Were) they more honest, people would trust them.'
    ][i],
    correctAnswer: [
      'Should',
      'Were',
      'Had',
      'Were',
      'Should',
      'Had',
      'Were',
      'Had',
      'Should',
      'Were'
    ][i],
    explanation: 'Using formal inversion in conditional structures.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - CAUSE & EFFECT
// ================= :::::::::::::::::::::::::::::
export const B2_U58_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Triggers and Consequences',
  explanation: 'Vocabulary for describing how one event leads to another.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The new law ___ (triggered) a wave of protests.',
      'The discovery ___ (resulted) in a major breakthrough.',
      'His actions ___ (contributed) to the success of the project.',
      'The war had a ___ (devastating) effect on the region.',
      'We need to address the ___ (root) cause of the problem.',
      'The crisis was ___ (sparked) by a sudden market crash.',
      'The decision had far-___ (reaching) consequences.',
      'Her hard work ___ (paved) the way for others.',
      'The pollution ___ (poses) a threat to local wildlife.',
      'The changes ___ (brought) about a new era of prosperity.'
    ][i],
    options: [
      ['triggered', 'made', 'did'],
      ['resulted', 'ended', 'did'],
      ['contributed', 'gave', 'added'],
      ['devastating', 'bad', 'small'],
      ['root', 'start', 'main'],
      ['sparked', 'born', 'made'],
      ['reaching', 'looking', 'going'],
      ['paved', 'walked', 'made'],
      ['poses', 'is', 'does'],
      ['brought', 'took', 'made']
    ][i],
    correctAnswer: [
      'triggered',
      'resulted',
      'contributed',
      'devastating',
      'root',
      'sparked',
      'reaching',
      'paved',
      'poses',
      'brought'
    ][i],
    explanation: 'Verbs and adjectives for describing causality.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: VOCABULARY - GLOBAL TRENDS
// ================= ::::::::::::::::::::::::::::::
export const B2_U58_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'vocabulary',
  title: 'A Changing World',
  explanation: 'Vocabulary for global shifts, development, and historical turning points.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'We are witnessing a global ___ (shift) in power.',
      'The industrial ___ (revolution) changed everything.',
      '___ (Globalization) has made the world smaller.',
      'Many countries are aiming for ___ (sustainable) growth.',
      'The digital ___ (divide) is a major social issue.',
      'We must learn from historical ___ (precedents).',
      'The event was a major ___ (turning) point in history.',
      'There is a growing ___ (awareness) of climate change.',
      'The policy aims to foster ___ (integration) in the region.',
      'The economy is showing signs of ___ (recovery).'
    ][i],
    correctAnswer: [
      'shift',
      'revolution',
      'Globalization',
      'sustainable',
      'divide',
      'precedents',
      'turning',
      'awareness',
      'integration',
      'recovery'
    ][i],
    explanation: 'Key terms for discussing macro-level changes and history.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - ALTERNATIVE HISTORIES
// ============================================
export const B2_U58_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: What if? The Power of Counterfactuals',
  explanation: 'Read an article about the genre of alternative history and why we love to speculate about the past.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is a "counterfactual" in history?' : 'What does the author suggest about speculating about the past?',
    options: [['A "what if" scenario about the past', 'A fact that is hard to believe', 'A secret document'], ['It helps us understand the importance of specific choices', 'It is a waste of time', 'It is only for science fiction writers']][i % 2],
    correctAnswer: i < 5 ? 'A "what if" scenario about the past' : 'It helps us understand the importance of specific choices',
    explanation: 'Comprehending the philosophical and literary aspects of historical speculation.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - LESSONS FROM THE PAST
// ============================================
export const B2_U58_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Learning from Mistakes',
  explanation: 'Listen to a historian discussing why it is vital to study past failures to prevent future ones.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the main danger of ignoring history?`,
    options: ['Repeating the same catastrophic errors', 'Forgetting people\'s names', 'Losing old books', 'Being bored'],
    correctAnswer: 'Repeating the same catastrophic errors',
    explanation: 'Listening for the practical value of historical knowledge.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - PERSUASIVE ESSAYS
// ================= ::::::::::::::::::::::::::::::
export const B2_U58_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Argumentative Power',
  explanation: 'Learn how to use advanced conditionals to strengthen your arguments.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To emphasize a missed opportunity:',
      'To link a past event to the present situation:',
      'To make a formal suggestion:',
      'To state a hypothetical condition formally:',
      'To show a strong regret about the past:',
      'To use "Were I" in an argument:',
      'To use "Had we" to start a sentence:',
      'To express a possible future result of a past action:',
      'To conclude a hypothetical argument:',
      'To use "Should" for a formal possibility:'
    ][i],
    options: [
      ['Had the government acted sooner, the crisis might have been avoided.', 'If they acted, it would be okay.', 'They should have acted.'],
      ['If we hadn\'t invested in education then, we wouldn\'t be so prosperous now.', 'If we didn\'t invest, we aren\'t rich.', 'Investment is good for now.'],
      ['Should you require further evidence, please refer to...', 'If you need more...', 'Here is more:'],
      ['Were the plan to fail, the consequences would be dire.', 'If it fails, it is bad.', 'Failure is not an option.'],
      ['If only they had listened to the warnings.', 'I wish they listened.', 'They didn\'t listen.'],
      ['Were I the one in charge, I would prioritize...', 'If I was the boss...', 'I would do this:'],
      ['Had we been more cautious, we would have saved money.', 'We should be cautious.', 'Caring for money is good.'],
      ['If the project had succeeded, we might be living on Mars by now.', 'Success means Mars.', 'We would live on Mars.'],
      ['In conclusion, if history teaches us anything, it is that...', 'Finally, if we learn...', 'The end.'],
      ['Should the treaty be signed, it will mark a new era.', 'If the treaty is signed...', 'The treaty is good.']
    ][i],
    correctAnswer: [
      'Had the government acted sooner, the crisis might have been avoided.',
      'If we hadn\'t invested in education then, we wouldn\'t be so prosperous now.',
      'Should you require further evidence, please refer to...',
      'Were the plan to fail, the consequences would be dire.',
      'If only they had listened to the warnings.',
      'Were I the one in charge, I would prioritize...',
      'Had we been more cautious, we would have saved money.',
      'If the project had succeeded, we might be living on Mars by now.',
      'In conclusion, if history teaches us anything, it is that...',
      'Should the treaty be signed, it will mark a new era.'
    ][i],
    explanation: 'Using sophisticated grammar to build convincing and authoritative arguments.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - SPECULATING ABOUT THE FUTURE
// ================= ::::::::::::::::::::::::::::::
export const B2_U58_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: If it weren\'t for...',
  explanation: 'How to use mixed and inverted conditionals naturally in debate and discussion.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally express the importance of a past innovation for today's life?`,
    options: ['If it weren\'t for the internet, our lives would be completely different now.', 'If there was no internet, life is hard.', 'Internet makes life better.', 'We need the internet today.'],
    correctAnswer: 'If it weren\'t for the internet, our lives would be completely different now.',
    explanation: 'Using mixed conditionals to evaluate the impact of historical changes.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U58_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 58',
  explanation: 'Consolidation of Advanced Conditionals and Global Trends Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? '___ (Had/Should) I known, I would have helped.' : 'The crisis was ___ (sparked/started) by a crash.',
    options: i < 5 ? ['Had', 'Should', 'Were'] : ['sparked', 'started', 'made'],
    correctAnswer: i < 5 ? 'Had' : 'sparked',
    explanation: 'Final check of key concepts from Unit 58.',
    points: 1
  }))
};

export const B2_UNIT_58 = createB2Unit(
  'b2-u58',
  'Review: Advanced Conditionals',
  'Consolidate your mastery of third, mixed, and inverted conditionals while speculating about global history, alternative realities, and the triggers of change.',
  ['Apply third and mixed conditionals accurately to discuss history and its present impact', 'Use inverted conditionals (Should, Were, Had) correctly in formal contexts', 'Acquire vocabulary for cause and effect, global trends, and historical analysis'],
  [
    B2_U58_BLOCK1, B2_U58_BLOCK2, B2_U58_BLOCK3, B2_U58_BLOCK4, B2_U58_BLOCK5,
    B2_U58_BLOCK6, B2_U58_BLOCK7, B2_U58_BLOCK8, B2_U58_BLOCK9, B2_U58_BLOCK10
  ]
);

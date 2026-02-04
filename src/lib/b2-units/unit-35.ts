import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 35;

// ============================================
// BLOCK 1: GRAMMAR - MODALS OF DEDUCTION (PRESENT)
// ============================================
export const B2_U35_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Modals of Deduction: Present Speculation',
  grammarPoint: 'Modal Deduction',
  explanation: 'Use must (sure it is), can\'t (sure it isn\'t), might/may/could (possible) to speculate about the present.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'He ___ be exhausted after that marathon.',
      'That ___ be the world record; it\'s far too slow.',
      'She ___ be training for the Olympics, she\'s incredibly fast.',
      'They ___ win the match, but it will be difficult.',
      'The coach ___ be happy with the team\'s performance.',
      'It ___ be easy to maintain that level of fitness.',
      'He ___ be the winner; he finished way behind the others.',
      'She ___ be nervous before the final.',
      'The spectators ___ be enjoying the game; they are all cheering.',
      'He ___ be injured; he is limping on the field.'
    ][i],
    options: [
      ['must', 'can\'t', 'might'],
      ['can\'t', 'must', 'could'],
      ['must', 'can\'t', 'may'],
      ['might', 'must', 'can\'t'],
      ['must', 'can\'t', 'could'],
      ['can\'t', 'must', 'might'],
      ['can\'t', 'must', 'may'],
      ['might', 'must', 'can\'t'],
      ['must', 'can\'t', 'could'],
      ['must', 'can\'t', 'might']
    ][i],
    correctAnswer: [
      'must',
      'can\'t',
      'must',
      'might',
      'must',
      'can\'t',
      'can\'t',
      'might',
      'must',
      'must'
    ][i],
    explanation: 'Using modals to express different degrees of certainty about a present situation.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - MODALS OF DEDUCTION (PAST)
// ============================================
export const B2_U35_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Modals of Deduction: Past Speculation',
  grammarPoint: 'Modal Deduction',
  explanation: 'Use modal + have + past participle to speculate about the past (must have, can\'t have, might have).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'He must ___ (be) devastated when he lost the final.',
      'They can\'t ___ (win) fairly; they were caught cheating.',
      'She might ___ (forget) her equipment at the gym.',
      'The team must ___ (train) very hard for this result.',
      'He can\'t ___ (see) the finish line in that fog.',
      'It may ___ (be) a mistake to change the coach.',
      'She must ___ (feel) incredible after winning the gold.',
      'They could ___ (score) more goals if they had tried.',
      'He can\'t ___ (realize) the importance of the race.',
      'The athlete must ___ (practice) that move for months.'
    ][i],
    correctAnswer: [
      'have been',
      'have won',
      'have forgotten',
      'have trained',
      'have seen',
      'have been',
      'have felt',
      'have scored',
      'have realized',
      'have practiced'
    ][i],
    explanation: 'Deducing past events using perfect modal structures.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - PROFESSIONAL SPORTS & EQUIPMENT
// ============================================
export const B2_U32_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'The World of Athletics',
  explanation: 'Terms for sports equipment, venues, and professional roles.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The tennis match was played on a grass ___ (court).',
      'The runner was waiting on the starting ___ (blocks).',
      'He used a new carbon-fiber ___ (racket) for the game.',
      'The football match took place in a massive ___ (stadium).',
      'She is a world-class ___ (gymnast).',
      'The ___ (referee) blew the whistle to start the game.',
      'He received a red ___ (card) and had to leave the field.',
      'The ___ (spectators) roared when the goal was scored.',
      'She won a silver ___ (medal) in the swimming event.',
      'The ___ (coach) gave the team a pep talk before the match.'
    ][i],
    correctAnswer: [
      'court',
      'blocks',
      'racket',
      'stadium',
      'gymnast',
      'referee',
      'card',
      'spectators',
      'medal',
      'coach'
    ][i],
    explanation: 'Core vocabulary for describing the setting and tools of professional sports.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - TRAINING & MENTAL STRENGTH
// ============================================
export const B2_U32_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Conditioning and Mindset',
  explanation: 'Terms for physical preparation and the psychology of winning.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'You need high levels of ___ (stamina) for a marathon.',
      '___ (Resilience) is key to overcoming a defeat.',
      'She has a very strong ___ (competitive) streak.',
      'The athlete is in peak physical ___ (condition).',
      'Mental ___ (toughness) helps under pressure.',
      'He has a strict ___ (regimen) of exercise and diet.',
      'They are trying to ___ (outperform) their rivals.',
      'The injury was a major ___ (setback) for his career.',
      'She showed great ___ (perseverance) during the race.',
      'Winning requires both talent and ___ (dedication).'
    ][i],
    options: [
      ['stamina', 'breath', 'speed'],
      ['Resilience', 'Strength', 'Power'],
      ['competitive', 'winning', 'fast'],
      ['condition', 'state', 'shape'],
      ['toughness', 'hardness', 'strong'],
      ['regimen', 'plan', 'rule'],
      ['outperform', 'beat', 'win'],
      ['setback', 'stop', 'fall'],
      ['perseverance', 'trying', 'going'],
      ['dedication', 'hard work', 'time']
    ][i],
    correctAnswer: [
      'stamina',
      'Resilience',
      'competitive',
      'condition',
      'toughness',
      'regimen',
      'outperform',
      'setback',
      'perseverance',
      'dedication'
    ][i],
    explanation: 'Vocabulary for the physical and psychological aspects of competition.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (SPORTSMANSHIP)
// ============================================
export const B2_U32_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Sports & Success',
  explanation: 'Form words related to participation and achievement.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (CHAMPION) was celebrated by the whole city.',
      '___ (SPORTS) is just as important as winning.',
      'He is a very ___ (AMBIT) young athlete.',
      'The ___ (COMPETE) was extremely high.',
      'She showed great ___ (DETERMINE) to win.',
      'His ___ (PERFORM) was record-breaking.',
      '___ (PREPARE) is half the battle.',
      'The ___ (LOSE) of the match was unexpected.',
      'He is an ___ (EXCEPTION) runner.',
      'The ___ (ENDORSE) deals are worth millions.'
    ][i],
    correctAnswer: [
      'champion',
      'Sportsmanship',
      'ambitious',
      'competition',
      'determination',
      'performance',
      'Preparation',
      'loss',
      'exceptional',
      'endorsement'
    ][i],
    explanation: 'Standard word formation in a sports and achievement context.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE EVOLUTION OF THE OLYMPICS
// ============================================
export const B2_U32_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: From Ancient Greece to Modern Spectacle',
  explanation: 'Read about the history of the Olympic Games and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What was the main purpose of the ancient Olympics?' : 'How has technology changed modern sports?',
    options: [['To honor the gods and show physical prowess', 'To make money', 'To test new equipment'], ['By improving performance and safety', 'By making games shorter', 'By removing referees']][i % 2],
    correctAnswer: i < 5 ? 'To honor the gods and show physical prowess' : 'By improving performance and safety',
    explanation: 'Analyzing historical context and modern developments in sports.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - AN INTERVIEW WITH A SPORTS PSYCHOLOGIST
// ============================================
export const B2_U32_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: The Mind of a Winner',
  explanation: 'Listen to an expert talk about the importance of visualization in sports.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the technique mentioned for handling pressure?`,
    options: ['Visualization of the desired outcome', 'Listening to loud music', 'Ignoring the crowd', 'Focusing only on the prize'],
    correctAnswer: 'Visualization of the desired outcome',
    explanation: 'Listening for specific psychological techniques and theories.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - SPORTS ARTICLES
// ============================================
export const B2_U32_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Reporting a Match',
  explanation: 'Identify the most dynamic and professional way to report a sporting event.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To describe a narrow victory:',
      'To comment on a disappointing loss:',
      'To use a modal of deduction for a result:',
      'To describe the crowd\'s reaction:',
      'To introduce a player\'s background:',
      'To highlight a turning point:',
      'To use an idiomatic sports expression:',
      'To praise an individual performance:',
      'To mention an upcoming match:',
      'To end with a bold prediction:'
    ][i],
    options: [
      ['They clinched a victory in the final seconds.', 'They won.', 'It was close.'],
      ['The defeat was a bitter pill to swallow for...', 'They lost and were sad.', 'Bad game.'],
      ['The fatigue must have taken its toll on the team.', 'They were tired.', 'They lost because of tiredness.'],
      ['The atmosphere was electric as the goal was...', 'The people liked it.', 'Loud noise.'],
      ['Hailing from a small town, she has risen to...', 'She is from...', 'Her past...'],
      ['The momentum shifted when...', 'Things changed.', 'A big moment...'],
      ['They are really raising the bar this season.', 'They are good.', 'Doing well.'],
      ['Her masterclass in defense was...', 'She did good defense.', 'Strong play.'],
      ['All eyes are now on the upcoming...', 'Next game is...', 'Wait for...'],
      ['If they continue like this, the title is theirs for the taking.', 'They will win.', 'Final thought.']
    ][i],
    correctAnswer: [
      'They clinched a victory in the final seconds.',
      'The defeat was a bitter pill to swallow for...',
      'The fatigue must have taken its toll on the team.',
      'The atmosphere was electric as the goal was...',
      'Hailing from a small town, she has risen to...',
      'The momentum shifted when...',
      'They are really raising the bar this season.',
      'Her masterclass in defense was...',
      'All eyes are now on the upcoming...',
      'If they continue like this, the title is theirs for the taking.'
    ][i],
    explanation: 'Using appropriate journalistic register and vivid vocabulary for sports reporting.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - SPECULATING ABOUT RESULTS
// ============================================
export const B2_U32_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Expressing Certainty and Doubt',
  explanation: 'Learn how to use modals of deduction naturally in a conversation about sports.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally speculate that a team was too tired to win?`,
    options: ['They must have been exhausted by the end of the game.', 'I think they were tired.', 'They were tired.', 'They can\'t have been tired.'],
    correctAnswer: 'They must have been exhausted by the end of the game.',
    explanation: 'Using perfect modals naturally to discuss past events.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U32_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 35',
  explanation: 'Consolidation of Modals of Deduction and Sports Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'He ___ (can\'t/must) be the winner; he\'s already home!' : 'She must ___ (have/be) training hard lately.',
    options: i < 5 ? ['can\'t', 'must', 'might'] : ['have been', 'be', 'had been'],
    correctAnswer: i < 5 ? 'can\'t' : 'have been',
    explanation: 'Verifying mastery of logical deduction in various timeframes.',
    points: 1
  }))
};

export const B2_UNIT_35 = createB2Unit(
  'b2-u35',
  'Sports & Competition',
  'Master the art of deduction while exploring the physical and mental world of professional sports.',
  ['Use modal verbs for present and past deduction correctly', 'Understand vocabulary for professional sports venues, equipment, and training', 'Analyze and apply dynamic sports reporting styles'],
  [
    B2_U35_BLOCK1, B2_U35_BLOCK2, B2_U32_BLOCK3, B2_U32_BLOCK4, B2_U32_BLOCK5,
    B2_U32_BLOCK6, B2_U32_BLOCK7, B2_U32_BLOCK8, B2_U32_BLOCK9, B2_U32_BLOCK10
  ]
);

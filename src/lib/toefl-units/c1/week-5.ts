import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 5;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'C1 Listening: The Nature vs. Nurture Debate',
  explanation: 'A panel discussion on the drivers of human intelligence and personality.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `How does Dr. Aris response to the study on identical twins raised apart?`,
    options: [
      'She acknowledges the high heritability but argues that the environment still modulates gene expression',
      'She dismisses the study as being statistically insignificant',
      'She agrees completely and suggests that environment is irrelevant',
      'She claims that the study was conducted using outdated methods'
    ],
    correctAnswer: 'She acknowledges the high heritability but argues that the environment still modulates gene expression',
    explanation: 'C1 listening requires identifying "concessive" arguments (Yes, but...).',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'C1 Listening: Economics - Keynesianism vs. Monetarism',
  explanation: 'A heated debate between two professors on government intervention during a recession.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Professor Miller\'s primary criticism of Professor Chen\'s proposal is that ________.`,
    options: [
      'It ignores the long-term inflationary risks of excessive spending',
      'It is too conservative and doesn\'t spend enough',
      'It focuses too much on the gold standard',
      'It is based on a misunderstanding of agricultural history'
    ],
    correctAnswer: 'It ignores the long-term inflationary risks of excessive spending',
    explanation: 'Debates in C1 listening often focus on the "trade-offs" or "risks" identified by the opposing side.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'C1 Listening: Philosophy - Ethics of Artificial Intelligence',
  explanation: 'A student seminar debating the "Trolley Problem" applied to self-driving cars.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `What is the student\'s underlying assumption when she mentions the "utilitarian framework"?`,
    options: [
      'That the best action is the one that maximizes overall well-being',
      'That the driver\'s safety should always be the top priority',
      'That the car should never make a decision based on numbers',
      'That AI is incapable of making ethical choices'
    ],
    correctAnswer: 'That the best action is the one that maximizes overall well-being',
    explanation: 'Identifying the theoretical framework (e.g., utilitarianism, deontology) is key to C1 comprehension.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'C1 Listening: History - The Collapse of the Maya Civilization',
  explanation: 'A lecture presenting three competing theories: drought, warfare, and overpopulation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `The professor concludes that the most likely scenario was ________.`,
    options: [
      'A synergistic combination of multiple stressors rather than a single cause',
      'A massive earthquake that destroyed all the cities simultaneously',
      'The sudden departure of the population to another continent',
      'A volcanic eruption that blocked out the sun for decades'
    ],
    correctAnswer: 'A synergistic combination of multiple stressors rather than a single cause',
    explanation: 'C1 lectures often favor complex, multi-causal explanations over simple ones.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Argumentation & Rebuttal',
  explanation: 'Words used to challenge an idea (e.g., Contention, Fallacy, Counter-argument, Premise).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `A "logical fallacy" is ________.`,
    options: [
      'An error in reasoning that renders an argument invalid',
      'A very strong and convincing piece of evidence',
      'A polite way to agree with someone',
      'A new scientific discovery'
    ],
    correctAnswer: 'An error in reasoning that renders an argument invalid',
    explanation: 'Understanding the terms of debate is essential for tracking C1 academic discussions.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Degree of Certainty Adverbs',
  explanation: 'Adverbs used to qualify a claim (e.g., Ostensibly, Arguably, Inarguably, Purportedly).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `If a theory is "purportedly" true, it means ________.`,
    options: [
      'It is claimed to be true, but there is some doubt or lack of proof',
      'It has been proven true beyond any doubt',
      'It is definitely false and should be ignored',
      'It was discovered by a famous scientist'
    ],
    correctAnswer: 'It is claimed to be true, but there is some doubt or lack of proof',
    explanation: '"Purportedly" and "ostensibly" are used to distance the speaker from a claim.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Reported Speech with Nuance',
  explanation: 'Using verbs like "contended," "conceded," and "maintained" to report arguments.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which reporting verb suggests the speaker is admitting a point they previously resisted?`,
    options: ['Conceded', 'Asserted', 'Dismissed', 'Inquired'],
    correctAnswer: 'Conceded',
    explanation: 'To concede is to admit that something is true after first denying it.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Cleft Sentences for Focus',
  explanation: 'Using "What the professor argued was..." to highlight specific points in a debate.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Choose the cleft sentence that emphasizes the most important part of the argument.`,
    options: [
      'What remains most controversial is the author\'s definition of "freedom."',
      'The author\'s definition of "freedom" is very controversial.',
      'It is controversial that the author defined "freedom."',
      'There is controversy about how freedom was defined.'
    ],
    correctAnswer: 'What remains most controversial is the author\'s definition of "freedom."',
    explanation: 'Cleft sentences (starting with "What..." or "It is...") are used to focus the listener\'s attention.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Tracking Speaker Stance in Real-Time',
  explanation: 'Identifying if a speaker is being sarcastic, supportive, or skeptical.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `A speaker who says, "Well, that\'s a... unique interpretation," is likely being ________.`,
    options: ['Politely skeptical or critical', 'Unreservedly enthusiastic', 'Completely confused', 'Angrily aggressive'],
    correctAnswer: 'Politely skeptical or critical',
    explanation: 'In academic settings, criticism is often couched in "hedged" or polite language.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Synthesizing Competing Perspectives',
  explanation: 'Combining multiple viewpoints into a single coherent summary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `When summarizing an academic debate, your primary goal should be to ________.`,
    options: [
      'Show how the different arguments relate to or contradict each other',
      'List every single word spoken by the first professor',
      'Decide who won the debate and only talk about them',
      'Describe what the speakers were wearing'
    ],
    correctAnswer: 'Show how the different arguments relate to or contradict each other',
    explanation: 'C1 synthesis is about relationships between ideas (conflict, agreement, expansion).',
    points: 2
  }))
};

export const C1_WEEK_5 = createShardedToeflUnit(
  'toefl-c1-w5',
  'Week 5: Advanced Listening - Academic Debates',
  'Mastering the art of tracking complex arguments, nuanced rebuttals, and speaker stance in interdisciplinary debates.',
  ['Identify concessive and contradictory arguments', 'Determine speaker stance through tone and "hedged" language', 'Master vocabulary for argumentation and logical fallacies', 'Utilize cleft sentences for emphasizing key debate points'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

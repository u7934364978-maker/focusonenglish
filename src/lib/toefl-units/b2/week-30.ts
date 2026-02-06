import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 30;
const LEVEL = 'b2';

// SHARDS 1-2: Speaking - Quick Transitions & Logic
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Speaking: Maintaining Logical Flow',
  explanation: 'Ensuring your reasons and examples are connected by clear transitions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Which transition is best for adding a SECOND supporting reason?`,
    options: ['Furthermore', 'However', 'Therefore', 'In conclusion'],
    correctAnswer: 'Furthermore',
    explanation: '"Furthermore," "In addition," and "Moreover" are perfect for adding support to your argument.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Speaking: Paraphrasing "The student thinks..."',
  explanation: 'Using varied language to introduce the speaker\'s opinion in Task 2.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Instead of "The student says," a better academic alternative is ________.`,
    options: [
      '"The speaker maintains that..."',
      '"The student talks about..."',
      '"The person thinks that..."',
      '"The student is saying..."'
    ],
    correctAnswer: '"The speaker maintains that..."',
    explanation: '"Maintains," "argues," "asserts," and "contends" are more formal reporting verbs.',
    points: 2
  }))
};

// SHARDS 3-4: Writing - Advanced Synthesis & Precision
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'vocabulary',
  title: 'Integrated Writing: Synthesizing Evidence',
  explanation: 'Reviewing how to present the lecture\'s evidence as a direct rebuttal to the reading.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `In Task 1, you should describe the lecture\'s points as ________ the reading\'s claims.`,
    options: ['refuting', 'ignoring', 'agreeing with', 'copying'],
    correctAnswer: 'refuting',
    explanation: '"Refuting," "disputing," "challenging," or "casting doubt on" are appropriate terms for the integrated task.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'vocabulary',
  title: 'Integrated Writing: Sentence Variety',
  explanation: 'Using different sentence structures to avoid a "robotic" tone.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which sentence shows the best variety for a B2 level?`,
    options: [
      'Although the reading claims X, the professor provides evidence that Y.',
      'The reading says X. The professor says Y.',
      'X is in the reading but the professor says Y.',
      'The professor disagrees with X from the reading.'
    ],
    correctAnswer: 'Although the reading claims X, the professor provides evidence that Y.',
    explanation: 'Using a subordinate clause (Although...) shows a higher level of grammatical control.',
    points: 2
  }))
};

// SHARDS 5-6: Academic Discussion - Advanced Argumentation
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Academic Discussion: Building a Nuanced Argument',
  explanation: 'Using "hedging" and "concession" to create a more academic tone.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Which phrase demonstrates "concession" in an argument?`,
    options: [
      '"Granted, there are some drawbacks to this plan, but..."',
      '"I am 100% sure that this plan is perfect."',
      '"Everyone knows that this plan is bad."',
      '"I don\'t care what others think about this plan."'
    ],
    correctAnswer: '"Granted, there are some drawbacks to this plan, but..."',
    explanation: 'Concession shows you understand the complexity of the topic, which is a high-level academic skill.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Academic Discussion: Avoiding Generalizations',
  explanation: 'Using quantifiers and qualifiers to be more precise.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Instead of "All students hate morning classes," a more academic version is ________.`,
    options: [
      '"A significant number of students tend to prefer..."',
      '"Students always hate morning classes."',
      '"No one likes morning classes."',
      '"Morning classes are bad for students."'
    ],
    correctAnswer: '"A significant number of students tend to prefer..."',
    explanation: 'Academic writing avoids "all" or "always" in favor of more cautious, precise language.',
    points: 2
  }))
};

// SHARDS 7-8: Production Speed & Efficiency
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Strategy: Thinking in English',
  explanation: 'Reducing translation time to increase speaking fluency.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `The best way to reduce "um" and "uh" is to ________.`,
    options: [
      'Focus on the next phrase instead of translating individual words',
      'Speak as fast as possible',
      'Translate every word from your native language first',
      'Read your notes word-for-word'
    ],
    correctAnswer: 'Focus on the next phrase instead of translating individual words',
    explanation: 'Thinking in "chunks" or phrases improves the flow and naturalness of your speech.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Strategy: Rapid Outlining in Writing',
  explanation: 'Spending 1-2 minutes planning to save 5 minutes of writing time.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Before writing your Task 1 essay, you should ________.`,
    options: [
      'Quickly match the 3 lecture points to the 3 reading points',
      'Write the conclusion first',
      'Count how many words are in the reading passage',
      'Ask the examiner for more time'
    ],
    correctAnswer: 'Quickly match the 3 lecture points to the 3 reading points',
    explanation: 'A quick mental or written map ensures your essay is organized and covers all necessary comparisons.',
    points: 2
  }))
};

// SHARDS 9-10: Advanced Lexis for Production
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Vocabulary: Abstract Collocations',
  explanation: 'Common word pairings used in academic production.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Which verb collocates with "evidence"?`,
    options: ['provide', 'make', 'do', 'think'],
    correctAnswer: 'provide',
    explanation: 'We "provide evidence," "gather evidence," or "cite evidence" in academic contexts.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Vocabulary: Signposting Your Talk',
  explanation: 'Using verbal markers to guide the listener through your speaking response.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Which phrase signals that you are about to give an EXAMPLE?`,
    options: ['"To illustrate this point..."', '"In conclusion..."', '"Furthermore..."', '"However..."'],
    correctAnswer: '"To illustrate this point..."',
    explanation: '"To illustrate," "For instance," and "As an example" are clear signposts for the listener.',
    points: 2
  }))
};

export const B2_WEEK_30 = createShardedToeflUnit(
  'toefl-b2-w30',
  'Week 30: Intensive Mixed Review: Speaking and Writing',
  'Simulating the second half of the TOEFL iBT with a focus on high-level production, nuance, and speed.',
  ['Maintain logical flow with advanced transitions in Speaking', 'Master academic reporting verbs and sentence variety in Writing', 'Apply hedging and concession in Academic Discussion', 'Improve production speed by thinking in English chunks'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

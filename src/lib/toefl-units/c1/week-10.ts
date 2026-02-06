import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 10;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'C1 Writing: "Interactive" Openings',
  explanation: 'Directly acknowledging the previous student\'s point before pivoting to your own.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Which opening shows the highest level of "interaction" in an Academic Discussion?`,
    options: [
      '"While Claire makes a valid point regarding [Topic], I would argue that she overlooks the critical factor of..."',
      '"I agree with Claire because she is right."',
      '"I want to talk about [Topic] because it is important to me."',
      '"My opinion is very different from Claire and Andrew and I will explain why."'
    ],
    correctAnswer: '"While Claire makes a valid point regarding [Topic], I would argue that she overlooks the critical factor of..."',
    explanation: 'Interactive openings prove you have read and understood the existing conversation.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'C1 Writing: Adding "Unique Value"',
  explanation: 'Ensuring your post doesn\'t just repeat Andrew or Claire.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `To add "unique value" to the discussion, you should ________.`,
    options: [
      'Introduce a new sub-topic or a specific, unmentioned real-world example',
      'Use the exact same reasons as Andrew but with bigger words',
      'Argue that both Andrew and Claire are wrong without providing a reason',
      'Copy three sentences from the prompt'
    ],
    correctAnswer: 'Introduce a new sub-topic or a specific, unmentioned real-world example',
    explanation: 'The rater looks for your ability to contribute original thought to the academic forum.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'vocabulary',
  title: 'C1 Writing: Lexical Precision in Opinions',
  explanation: 'Replacing "good" and "bad" with "advantageous," "detrimental," "feasible," or "obsolete."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Which word best replaces "bad" in the sentence: "This policy would have a bad effect on the economy"?`,
    options: ['Detrimental', 'Sad', 'Difficult', 'Huge'],
    correctAnswer: 'Detrimental',
    explanation: 'Lexical precision is a major grading factor for C1 writing.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'vocabulary',
  title: 'C1 Writing: Rhetorical Questions for Engagement',
  explanation: 'Using questions like "Can we truly afford to ignore...?" to strengthen your stance.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `A well-placed rhetorical question in Task 2 serves to ________.`,
    options: [
      'Engage the reader and emphasize a moral or logical point',
      'Ask the professor for help with the answer',
      'Show that you are confused about the topic',
      'Fill up the word count without adding meaning'
    ],
    correctAnswer: 'Engage the reader and emphasize a moral or logical point',
    explanation: 'Rhetorical questions are a sophisticated stylistic tool in persuasive writing.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Economic & Social Discussion Terms',
  explanation: 'Words like "Viability," "Implementation," "Equity," and "Incentivize."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `To "incentivize" a behavior means to ________.`,
    options: [
      'Provide a motivation or reward for doing it',
      'Ban it completely under threat of law',
      'Ignore it and hope it goes away',
      'Study it in a university laboratory'
    ],
    correctAnswer: 'Provide a motivation or reward for doing it',
    explanation: 'Economic and social policy topics are very common in Task 2.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Nuanced Adverbs of Probability',
  explanation: 'Using "Inevitably," "Potentially," "Marginally," and "Categorically."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `If a change is "inevitably" going to happen, it is ________.`,
    options: [
      'Certain to happen and cannot be avoided',
      'Very unlikely to happen',
      'Only going to happen if people want it to',
      'Happening right now'
    ],
    correctAnswer: 'Certain to happen and cannot be avoided',
    explanation: 'Precise adverbs allow you to qualify your claims with C1-level accuracy.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Inverted Conditionals for Sophistication',
  explanation: 'Using "Were the government to..." instead of "If the government...".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which sentence is the most grammatically sophisticated for Task 2?`,
    options: [
      '"Were we to adopt this policy, the long-term benefits would far outweigh the initial costs."',
      '"If we adopt this policy, there will be good things but it will cost money."',
      '"Adopting this policy is a good idea and it has benefits."',
      '"Benefits are more than costs if we adopt this policy."'
    ],
    correctAnswer: '"Were we to adopt this policy, the long-term benefits would far outweigh the initial costs."',
    explanation: 'Inverted second conditionals are excellent score boosters in formal writing.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Participial Phrases for Sentence Variety',
  explanation: 'Starting sentences with "Recognizing the urgency of...", or "Driven by economic necessity..."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Identify the sentence that uses a participial phrase correctly for academic discussion.`,
    options: [
      '"Driven by the need for sustainable energy, many nations are investing in solar power."',
      '"Nations are driven by the need for energy and they invest in solar."',
      '"Solar power is what nations invest in because they need energy."',
      '"Because they need energy, solar power is what nations invest in."'
    ],
    correctAnswer: '"Driven by the need for sustainable energy, many nations are investing in solar power."',
    explanation: 'Starting with a participial phrase adds structural variety and sophistication to your writing.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Balancing Engagement and Personal View',
  explanation: 'Spending about 20% on others and 80% on your own argument.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `If you only talk about Claire and Andrew and never give your own new idea, you ________.`,
    options: [
      'Will likely receive a lower score for lacking "contribution"',
      'Will get a perfect score for interaction',
      'Are following the best strategy for Task 2',
      'Should stop writing after 50 words'
    ],
    correctAnswer: 'Will likely receive a lower score for lacking "contribution"',
    explanation: 'The task explicitly asks for *your* contribution to the discussion.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Managing the 10-Minute Clock',
  explanation: 'Planning for 1 min, Writing for 8 mins, Proofreading for 1 min.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `With only 10 minutes total, the most important phase is ________.`,
    options: [
      'Proofreading (to eliminate minor slips that distract from your C1 content)',
      'Spending 5 minutes thinking about the topic',
      'Writing as many words as humanly possible without stopping',
      'Changing your font type'
    ],
    correctAnswer: 'Proofreading (to eliminate minor slips that distract from your C1 content)',
    explanation: 'At the C1 level, minor errors in a short post can significantly impact the perception of your fluency.',
    points: 2
  }))
};

export const C1_WEEK_10 = createShardedToeflUnit(
  'toefl-c1-w10',
  'Week 10: Advanced Writing - Academic Discussion Mastery',
  'Mastering the interactive and persuasive nature of the academic forum in Writing Task 2 at a C1 level.',
  ['Execute interactive openings that build on other students\' points', 'Contribute unique value and original perspectives to the forum', 'Master high-level lexical precision and academic terminology', 'Utilize inverted conditionals and participial phrases'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

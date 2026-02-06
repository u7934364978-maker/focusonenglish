import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 8;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'C1 Speaking: The Relationship Matrix',
  explanation: 'Explicitly stating if the speaker supports, opposes, or refines the reading.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Which opening most clearly defines the relationship in Speaking Task 2?`,
    options: [
      '"The student in the conversation vehemently disagrees with the proposed change for two primary reasons..."',
      '"The reading is about a change and the student talks about it."',
      '"First, I will talk about the university announcement, and then the student."',
      '"I think the student is right because the university is always wrong."'
    ],
    correctAnswer: '"The student in the conversation vehemently disagrees with the proposed change for two primary reasons..."',
    explanation: 'C1 speakers must define the relationship (agreement/disagreement) immediately and clearly.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'C1 Speaking: Accuracy vs. Detail',
  explanation: 'Prioritizing the "why" of the student\'s opinion over minor background details.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `In Task 2, if you have to choose what to include, you should prioritize ________.`,
    options: [
      'The student\'s specific reasons and their justifications',
      'The exact date the policy was written',
      'The name of the university mentioned in the reading',
      'What the student was wearing (if mentioned)'
    ],
    correctAnswer: 'The student\'s specific reasons and their justifications',
    explanation: 'The rater wants to see if you can synthesize the student\'s argument accurately.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'vocabulary',
  title: 'C1 Speaking: Paraphrasing Definitions',
  explanation: 'Restating the academic concept from the reading in your own words (Task 3).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Why is it better to paraphrase the reading\'s definition in Task 3?`,
    options: [
      'It demonstrates a higher level of language proficiency and true understanding',
      'It is always shorter than the original sentence',
      'The rater doesn\'t like the words used in the reading',
      'You are not allowed to use any words from the reading'
    ],
    correctAnswer: 'It demonstrates a higher level of language proficiency and true understanding',
    explanation: 'Paraphrasing is a core C1 skill; it proves you aren\'t just "parroting" the text.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'vocabulary',
  title: 'C1 Speaking: Connecting Concept to Example',
  explanation: 'Using "This illustrates the concept by..." to bridge the two sources.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which phrase best bridges the concept (reading) and the example (listening)?`,
    options: [
      '"The professor provides an empirical example of this phenomenon by describing..."',
      '"Now I will talk about what the professor said."',
      '"The reading and listening are about the same thing."',
      '"Wait, let me look at my notes for the example."'
    ],
    correctAnswer: '"The professor provides an empirical example of this phenomenon by describing..."',
    explanation: 'Explicitly linking the sources shows high-level organizational skills.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Synthesis & Connection Verbs',
  explanation: 'Verbs that show relationship (e.g., Exemplifies, Substantiates, Contradicts, Elucidates).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `If a professor "substantiates" a point from the reading, they are ________.`,
    options: [
      'Providing evidence to support or prove it',
      'Changing the subject to something else',
      'Saying that the reading is completely wrong',
      'Listing the names of the authors'
    ],
    correctAnswer: 'Providing evidence to support or prove it',
    explanation: 'Substantiate is a high-level academic verb for support.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Signal Words for Integration',
  explanation: 'Phrases like "Consistent with," "In contrast to," and "Building on this."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Which signal phrase indicates that the listening source provides a counter-example?`,
    options: ['"In direct opposition to the reading\'s claim,"', '"Similarly,"', '"To expand on this,"', '"In addition,"'],
    correctAnswer: '"In direct opposition to the reading\'s claim,"',
    explanation: 'Signal words guide the rater through your logic and synthesis.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Reporting Structures for Two Sources',
  explanation: 'Using "While the reading suggests X, the lecturer emphasizes Y."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which complex sentence structure is most effective for integrated tasks?`,
    options: [
      'A "While/Whereas" clause comparing the two sources',
      'A simple list of sentences starting with "He said..."',
      'One very long sentence with no punctuation',
      'A sentence that only talks about the reading'
    ],
    correctAnswer: 'A "While/Whereas" clause comparing the two sources',
    explanation: 'Using contrastive subordinates ("While/Whereas") is a hallmark of C1 synthesis.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Appositives for Efficient Identification',
  explanation: 'Using "The professor, an expert in marine biology, argues..." to save time.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `What is the benefit of using an appositive (like "a common psychological bias") in your response?`,
    options: [
      'It allows you to identify the concept quickly and smoothly',
      'It makes the sentence longer and more difficult to understand',
      'It is a way to avoid talking about the listening',
      'It tells the rater that you are a student'
    ],
    correctAnswer: 'It allows you to identify the concept quickly and smoothly',
    explanation: 'Appositives increase your "Efficiency" of communication, allowing for more detail in 60 seconds.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Balancing the 60 Seconds',
  explanation: 'Spending roughly 15-20s on the reading and 40-45s on the listening.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `If you spend 45 seconds summarizing the reading in Task 3, you ________.`,
    options: [
      'Will likely run out of time for the professor\'s crucial examples',
      'Will get a perfect score for detail',
      'Are following the recommended time management plan',
      'Should stop talking early'
    ],
    correctAnswer: 'Will likely run out of time for the professor\'s crucial examples',
    explanation: 'The majority of your score in integrated tasks comes from your ability to report the *listening* information.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Synthesizing Without "Copied" Phrases',
  explanation: 'Avoiding the "Reading-to-Speaking" trap of using exact text snippets.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `If the reading says "The university will abolish the meal plan," how should you say it?`,
    options: [
      '"The administration intends to eliminate the current dining program."',
      '"The university will abolish the meal plan."',
      '"They will stop the food plan."',
      '"No more food for students."'
    ],
    correctAnswer: '"The administration intends to eliminate the current dining program."',
    explanation: 'Paraphrasing shows lexical flexibility and academic range.',
    points: 2
  }))
};

export const C1_WEEK_8 = createShardedToeflUnit(
  'toefl-c1-w8',
  'Week 8: Advanced Speaking - Integrated Synthesis',
  'Mastering the complex relationship between reading and listening sources in Tasks 2, 3, and 4 at a C1 level.',
  ['Define the source relationship (support/contrast) in the opening', 'Prioritize listening examples over reading background', 'Master high-level synthesis and integration vocabulary', 'Utilize appositives and "While/Whereas" reporting structures'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

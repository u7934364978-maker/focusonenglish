import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 10;
const LEVEL = 'b2';

// SHARDS 1-2: Advanced Independent Speaking - Complex Choices
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Independent Speaking: Developing Nuanced Opinions',
  explanation: 'Moving beyond simple "I like" statements to more complex justifications.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Which phrase adds more complexity to an opinion? "Some people think online classes are better. ________, traditional classes offer more social interaction."`,
    options: ['Admittedly', 'Because', 'And', 'Also'],
    correctAnswer: 'Admittedly',
    explanation: 'Using "Admittedly" allows you to acknowledge the opposing view before stating your own, which shows higher proficiency.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Logical Flow: Using "If" Clauses and Conditionals',
  explanation: 'Using hypothetical situations to support your arguments in Task 1.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Complete the sentence for a Speaking response: "If universities ________ more scholarships, more students from diverse backgrounds could attend."`,
    options: ['offered', 'offer', 'will offer', 'offering'],
    correctAnswer: 'offered',
    explanation: 'The second conditional (If + past simple, would/could + verb) is perfect for supporting hypothetical arguments in TOEFL Speaking.',
    points: 2
  }))
};

// SHARDS 3-4: Task 2 Refinement - Synthesizing Tone and Nuance
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Task 2: Capturing the Speaker\'s Tone',
  explanation: 'Identifying whether the speaker is enthusiastic, skeptical, or concerned.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `If a student says, "I see where the administration is coming from, but they haven't really thought this through," their tone is:`,
    options: ['Politely skeptical', 'Completely supportive', 'Extremely angry', 'Indifferent'],
    correctAnswer: 'Politely skeptical',
    explanation: 'The student acknowledges the other side but points out a flaw, indicating a skeptical but measured tone.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Task 2: Paraphrasing the Reading Passage',
  explanation: 'Summarizing the campus announcement in 1-2 sentences without copying the text.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `The reading says: "The university will renovate the student lounge to create more quiet study spaces." Which is a good paraphrase?`,
    options: [
      'The university plans to update the student area to provide more silent places to work.',
      'The university will renovate the student lounge to create more quiet study spaces.',
      'Students like the lounge.',
      'Renovations are expensive.'
    ],
    correctAnswer: 'The university plans to update the student area to provide more silent places to work.',
    explanation: 'A good paraphrase changes the vocabulary (renovate -> update, quiet study spaces -> silent places to work) while keeping the meaning.',
    points: 2
  }))
};

// SHARDS 5-6: Task 3 Refinement - Paraphrasing Academic Definitions
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading-comprehension',
  title: 'Task 3: Extracting Key Theoretical Points',
  explanation: 'Identifying the core definition in a short academic reading (Biology/Sociology).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `The text says "Commensalism is a relationship between two organisms where one benefits and the other is neither helped nor harmed." What is the defining feature?`,
    options: [
      'One benefits, the other is unaffected',
      'Both organisms benefit',
      'Both organisms are harmed',
      'Neither organism benefits'
    ],
    correctAnswer: 'One benefits, the other is unaffected',
    explanation: 'Understanding that "neither helped nor harmed" means "unaffected" is key for your summary.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Task 3: Linking Examples to Definitions',
  explanation: 'Practicing the transition from the reading\'s theory to the professor\'s example.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Which transition is best for Task 3? "The reading defines commensalism. ________, the professor provides the example of an orchid growing on a tree."`,
    options: ['To illustrate this', 'However', 'In conclusion', 'Secondly'],
    correctAnswer: 'To illustrate this',
    explanation: '"To illustrate this" or "The professor gives an example of this" clearly links the lecture to the reading.',
    points: 2
  }))
};

// SHARDS 7-8: Task 4 Refinement - Organizing Process Descriptions
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Task 4: Sequencing Academic Information',
  explanation: 'Using sequence markers (First, Next, Finally) to organize a lecture summary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `When a professor explains the process of "Photosynthesis," which set of connectors is most useful?`,
    options: [
      'Initially... Then... As a result...',
      'I think... Also... Bye...',
      'In my opinion... Maybe... No...',
      'However... But... On the contrary...'
    ],
    correctAnswer: 'Initially... Then... As a result...',
    explanation: 'Sequence markers help the rater follow your summary of a process or concept.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Task 4: Identifying Supporting Evidence',
  explanation: 'Distinguishing between the main point and the supporting details in a lecture.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `If the professor says "One way businesses reduce costs is through automation. For example, using robots in assembly lines saves money on labor," what is the supporting detail?`,
    options: [
      'Robots in assembly lines',
      'Businesses reduce costs',
      'Automation is good',
      'Labor is expensive'
    ],
    correctAnswer: 'Robots in assembly lines',
    explanation: 'The robots are the specific example (supporting detail) for the general concept of automation.',
    points: 2
  }))
};

// SHARDS 9-10: Intonation, Stress, and Pronunciation
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Word Stress and Sentence Emphasis',
  explanation: 'Learning to stress key content words (nouns, verbs, adjectives) to improve clarity.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `In the sentence "The professor CLARIFIED the main POINT of the study," which words should receive the most emphasis for clarity?`,
    options: ['Clarified, Point', 'The, Of, The', 'Professor, Main', 'Main, Study'],
    correctAnswer: 'Clarified, Point',
    explanation: 'Verbs like "clarified" and nouns like "point" carry the most meaning and should be stressed.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Intonation Patterns for Lists and Questions',
  explanation: 'Using rising and falling intonation to signal the end of a thought or a list.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `When listing reasons in your Speaking response (e.g., "First, it's cheaper; second, it's faster..."), what intonation pattern is most natural?`,
    options: [
      'Rising on "cheaper" (incomplete) and falling at the end',
      'Falling on every word',
      'Rising on every word',
      'Monotone throughout'
    ],
    correctAnswer: 'Rising on "cheaper" (incomplete) and falling at the end',
    explanation: 'Rising intonation signals that there is more to come; falling intonation signals the end of the sentence.',
    points: 2
  }))
};

export const B2_WEEK_10 = createShardedToeflUnit(
  'toefl-b2-w10',
  'Week 10: Speaking: Advanced Synthesis and Delivery',
  'Refining Speaking skills with focus on intonation, stress, and complex academic synthesis at B2 level.',
  ['Use "Admittedly" for nuanced opinions', 'Paraphrase campus announcements effectively', 'Link theory to examples using formal transitions', 'Apply natural word stress and intonation'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

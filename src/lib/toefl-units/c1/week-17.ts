import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 17;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'speaking',
  title: 'C1 Speaking: Precision in the first 10 seconds',
  explanation: 'Setting the stage perfectly to allow for more detail later.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `In Speaking Task 3, the best way to open is ________.`,
    options: [
      '"The reading passage introduces the concept of [X], which the professor then illustrates using the example of [Y]."',
      '"I am going to talk about a reading and a lecture about [X]."',
      '"The reading says [X] and then the professor says [Y] and I will explain."',
      '"First I will read then I will listen and then I will speak about [X]."'
    ],
    correctAnswer: '"The reading passage introduces the concept of [X], which the professor then illustrates using the example of [Y]."',
    explanation: 'A concise, high-level opening saves time for the crucial details of the example.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'speaking',
  title: 'C1 Speaking: Eliminating "Vague" Fillers',
  explanation: 'Replacing "like," "you know," and "stuff" with "specifically," "indeed," and "phenomena."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Which word is a "high-level" replacement for "like" when giving an example?`,
    options: ['"Namely,"', '"Sort of,"', '"Kind of,"', '"Maybe,"'],
    correctAnswer: '"Namely,"',
    explanation: '"Namely" is a precise academic way to introduce a specific example.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'speaking',
  title: 'C1 Speaking: Managing the "Middle Muddle"',
  explanation: 'Maintaining flow during the most complex part of the explanation (30-45 second mark).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `If you lose your train of thought at the 40-second mark, you should ________.`,
    options: [
      'Quickly summarize the main point and move to the conclusion',
      'Stop speaking and wait for the timer to end',
      'Apologize to the rater for 5 seconds',
      'Repeat the same sentence three times'
    ],
    correctAnswer: 'Quickly summarize the main point and move to the conclusion',
    explanation: 'Recovering with a summary shows better control than silence or repetitive "ums."',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'speaking',
  title: 'C1 Speaking: Spontaneous Nominalization',
  explanation: 'Using noun-heavy phrases like "The rapid depletion of..." instead of "They used up... quickly."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which spoken phrase sounds more "C1 level"?`,
    options: [
      '"The professor discusses the implementation of the new policy..."',
      '"The professor talks about how they put the new policy in place..."',
      '"The professor says that the policy is now happening..."',
      '"The professor thinks the policy is good for everyone..."'
    ],
    correctAnswer: '"The professor discusses the implementation of the new policy..."',
    explanation: 'Nominalization (implementation vs. implement) increases the perceived academic level of your speech.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Speaking: Discourse Markers of Logic',
  explanation: 'Using "Accordingly," "In light of this," and "By the same token."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Which phrase signals that a conclusion is being drawn from previous evidence?`,
    options: ['"In light of this,"', '"To begin with,"', '"Incidentally,"', '"Moreover,"'],
    correctAnswer: '"In light of this,"',
    explanation: '"In light of this" connects evidence to a resulting conclusion or action.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'speaking',
  title: 'C1 Speaking: The 5-Second Buffer',
  explanation: 'Aiming to finish your response at the 55-second mark to avoid being cut off mid-sentence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Finishing your response 2-3 seconds early with a complete sentence is ________.`,
    options: [
      'Better than being cut off in the middle of a complex point',
      'A sign that you didn\'t have enough to say',
      'Going to lower your score significantly',
      'Only for B1 students'
    ],
    correctAnswer: 'Better than being cut off in the middle of a complex point',
    explanation: 'A completed final sentence shows mastery of time management.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'speaking',
  title: 'C1 Speaking: Intonation for Emphasis',
  explanation: 'Using pitch to highlight key technical terms or contrasting ideas.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `To emphasize a "contrast," you should ________.`,
    options: [
      'Slightly increase the volume and pitch on the contrasting word',
      'Speak as fast as possible',
      'Whisper the contrasting word',
      'Pause for 10 seconds before the word'
    ],
    correctAnswer: 'Slightly increase the volume and pitch on the contrasting word',
    explanation: 'Prosody (intonation and stress) helps the rater follow your logic.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'speaking',
  title: 'C1 Speaking: Sophisticated Synonyms for "Example"',
  explanation: 'Using "Illustration," "Case in point," "Paradigm," and "Instance."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Which phrase is a high-level way to introduce the professor\'s second example?`,
    options: ['"A further illustration of this concept is..."', '"Another example is..."', '"Also, the professor says..."', '"The second thing is..."'],
    correctAnswer: '"A further illustration of this concept is..."',
    explanation: 'Varying your introductory phrases shows a wider lexical range.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'speaking',
  title: 'C1 Speaking: Summarizing "Task 4" Lectures',
  explanation: 'Balancing the two main points of a academic lecture without notes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `In Task 4, if the professor gives two ways that animals adapt, you should spend ________.`,
    options: [
      'Approximately equal time (around 20-25 seconds) on each way',
      '40 seconds on the first way and 5 seconds on the second',
      '10 seconds on each way and 40 seconds on your own opinion',
      'The whole 60 seconds on the introduction'
    ],
    correctAnswer: 'Approximately equal time (around 20-25 seconds) on each way',
    explanation: 'A balanced response demonstrates that you grasped the entire lecture structure.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'speaking',
  title: 'C1 Speaking: Self-Correction Strategy',
  explanation: 'Fixing a major grammar error without losing the overall flow.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `If you realize you used the wrong verb tense, the best approach is: ________.`,
    options: [
      'Quickly say "or rather [Correct Verb]" and continue moving forward',
      'Stop and repeat the entire sentence from the beginning',
      'Say "Sorry, I made a mistake" and then continue',
      'Ignore it and hope the rater didn\'t notice'
    ],
    correctAnswer: 'Quickly say "or rather [Correct Verb]" and continue moving forward',
    explanation: 'Smooth self-correction is a sign of high-level fluency, not a weakness.',
    points: 2
  }))
};

export const C1_WEEK_17 = createShardedToeflUnit(
  'toefl-c1-w17',
  'Week 17: Speaking - Advanced Synthesis & Flow',
  'Mastering high-level verbal synthesis and academic delivery within the strict time constraints of the TOEFL Speaking section.',
  ['Execute precise and academic response openings', 'Utilize sophisticated discourse markers to signal logical relationships', 'Manage response time with a consistent buffer for completion', 'Apply spontaneous nominalization and intonation for emphasis'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

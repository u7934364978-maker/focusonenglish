import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 12;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'mixed',
  title: 'C1 Review: Scientific Inference',
  explanation: 'Reviewing the ability to draw logical conclusions from scientific data (Week 1 & 4).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `If a text states that a species thrives only in "highly alkaline environments," what can be inferred if the pH of their habitat drops to 4.0?`,
    options: [
      'The population will likely decline or perish',
      'The species will adapt immediately to the acidity',
      'The habitat will become more alkaline over time',
      'The species will migrate to a nearby forest'
    ],
    correctAnswer: 'The population will likely decline or perish',
    explanation: 'Inference requires applying stated constraints to new scenarios.',
    points: 3
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'mixed',
  title: 'C1 Review: Abstract Humanities Terminology',
  explanation: 'Reviewing philosophical and sociological lexicon (Week 2).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Which term describes the internal conflict felt when holding two contradictory beliefs?`,
    options: ['Cognitive Dissonance', 'Existentialism', 'Urban Sociology', 'Biomimicry'],
    correctAnswer: 'Cognitive Dissonance',
    explanation: 'Accurate retrieval of academic terms is essential for C1 Reading and Writing.',
    points: 3
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'mixed',
  title: 'C1 Review: Art History & Architecture',
  explanation: 'Reviewing stylistic distinctions and terminology (Week 3).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `The "Bauhaus" movement is most closely associated with ________.`,
    options: [
      'The integration of craft and fine arts with functional design',
      'The excessive ornamentation of the Baroque period',
      'The rejection of all technology in artistic production',
      'The use of biomimicry in Renaissance painting'
    ],
    correctAnswer: 'The integration of craft and fine arts with functional design',
    explanation: 'Understanding the core tenets of major movements aids in reading comprehension.',
    points: 3
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'mixed',
  title: 'C1 Review: Detecting Subtle Pragmatics',
  explanation: 'Reviewing the identification of indirect meaning and tone (Week 6 & 11).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `A professor says: "It's an... interesting theory." What does the pause and hesitation likely imply?`,
    options: ['Skepticism or polite disagreement', 'Unbridled enthusiasm', 'Memory loss', 'Extreme certainty'],
    correctAnswer: 'Skepticism or polite disagreement',
    explanation: 'C1 listeners must catch prosodic cues like pauses and emphasis.',
    points: 3
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'mixed',
  title: 'C1 Review: Advanced Speaking Synthesis',
  explanation: 'Reviewing the integration of Reading and Listening in Speaking (Week 7 & 8).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `In a Speaking Task 3 (Reading + Lecture), if the professor provides an example that contradicts the reading, you must ________.`,
    options: [
      'Highlight the contradiction and explain how the example illustrates it',
      'Ignore the lecture and only summarize the reading',
      'Make up your own third example to balance it out',
      'Correct the professor in your response'
    ],
    correctAnswer: 'Highlight the contradiction and explain how the example illustrates it',
    explanation: 'Synthesis requires accurately representing the relationship between two sources.',
    points: 3
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'mixed',
  title: 'C1 Review: Inverted Conditionals & Nominalization',
  explanation: 'Reviewing advanced grammatical structures for Writing (Week 9 & 10).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Which sentence uses nominalization to sound more academic?`,
    options: [
      '"The implementation of the new policy led to a significant reduction in waste."',
      '"They implemented the new policy and it reduced waste a lot."',
      '"When they put the policy in place, waste became much less."',
      '"Policy was implemented and then waste went down."'
    ],
    correctAnswer: '"The implementation of the new policy led to a significant reduction in waste."',
    explanation: 'Nominalization (using nouns instead of verbs) creates a more formal, academic tone.',
    points: 3
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'mixed',
  title: 'C1 Simulation: Reading Time Management',
  explanation: '35 minutes for 20 questions (2 passages). Practice the "Block" approach.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `If you have 5 minutes left and 4 questions remaining on the second passage, you should ________.`,
    options: [
      'Quickly scan for keywords in the text to answer specifically',
      'Re-read the entire passage from the beginning',
      'Leave the questions blank to avoid negative marking (Note: TOEFL has no negative marking)',
      'Spend all 5 minutes on one question'
    ],
    correctAnswer: 'Quickly scan for keywords in the text to answer specifically',
    explanation: 'Strategic scanning is a vital "clutch" skill for the Reading section.',
    points: 3
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'mixed',
  title: 'C1 Simulation: Listening Note-Taking Efficiency',
  explanation: 'Using symbols and shorthand for 5-minute lectures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `The most efficient way to note "increase in global temperature" is ________.`,
    options: ['↑ global temp', 'increase in global temperature', 'hot world', 'temp go up'],
    correctAnswer: '↑ global temp',
    explanation: 'Using arrows and abbreviations saves critical time during dense lectures.',
    points: 3
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'mixed',
  title: 'C1 Simulation: Speaking "Dead Air" Management',
  explanation: 'Using "filler phrases" that don\'t lower your score.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Instead of "ummm" or "uhhh" during a 45-second response, a C1 speaker might say ________.`,
    options: ['"That is to say..." or "Furthermore..."', '"Wait, let me start over."', '"Sorry, I forgot the word."', 'Silence'],
    correctAnswer: '"That is to say..." or "Furthermore..."',
    explanation: 'Smooth transitions and discourse markers help maintain the perception of fluency.',
    points: 3
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'mixed',
  title: 'C1 Simulation: Writing Proofreading Checklist',
  explanation: 'The final 60 seconds of Task 1 and Task 2.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `During the final minute of writing, your priority should be fixing ________.`,
    options: [
      'Subject-verb agreement and obvious typos',
      'The entire introductory paragraph',
      'The thesis statement by adding 3 more reasons',
      'The color of the font'
    ],
    correctAnswer: 'Subject-verb agreement and obvious typos',
    explanation: 'Eliminating "silly" errors ensures your C1-level vocabulary and ideas shine.',
    points: 3
  }))
};

export const C1_WEEK_12 = createShardedToeflUnit(
  'toefl-c1-w12',
  'Week 12: Block 1 Final Review & Simulation',
  'Consolidating all academic and rhetorical skills from the first 11 weeks into a full-length, high-pressure simulation.',
  ['Successfully synthesize multi-disciplinary information in Reading and Listening', 'Apply advanced grammatical structures in Writing under time pressure', 'Manage time effectively across all four sections of the exam', 'Execute high-level speaking responses with minimal disfluency'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

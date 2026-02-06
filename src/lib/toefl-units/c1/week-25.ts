import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 25;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'C1 Reading: Decoding Tier 3 Academic Vocabulary',
  explanation: 'Contextual strategies for words like "Recalcitrant," "Anomalous," and "Paradigm."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `In a passage about "Cellular Biology," the word "Recalcitrant" used to describe a bacteria likely means ________.`,
    options: [
      'Resistant to treatment or difficult to manage',
      'Small and difficult to see',
      'Capable of reproducing quickly',
      'Harmful to the human body'
    ],
    correctAnswer: 'Resistant to treatment or difficult to manage',
    explanation: '"Recalcitrant" in an academic context often refers to something that resists change or control.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'C1 Reading: Handling Specialized Terminology',
  explanation: 'Distinguishing between the *core* meaning and the *technical* jargon.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `When you encounter a technical term like "Photosynthetic Phosphorylation," you should ________.`,
    options: [
      'Look for the definition provided in the surrounding text or apposition',
      'Stop reading and look it up in a dictionary',
      'Assume you cannot understand the passage without knowing it',
      'Guess the meaning based on how it sounds'
    ],
    correctAnswer: 'Look for the definition provided in the surrounding text or apposition',
    explanation: 'TOEFL passages almost always define or clarify highly specialized terms when they are first introduced.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'reading',
  title: 'C1 Reading: Morphological Analysis',
  explanation: 'Using roots, prefixes, and suffixes to decode complex words (e.g., "Circumlocution").',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Knowing that "Circum-" means "around" and "Locu-" refers to "speaking," what is "Circumlocution"?`,
    options: [
      'The use of many words where fewer would do, especially in an attempt to be vague',
      'A very loud way of speaking',
      'Speaking in a straight and direct line',
      'A language spoken only in small circles'
    ],
    correctAnswer: 'The use of many words where fewer would do, especially in an attempt to be vague',
    explanation: 'Morphological analysis is a powerful tool for C1 students to handle unknown academic vocabulary.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'reading',
  title: 'C1 Reading: Text Insertion Strategy (Complex)',
  explanation: 'Placing sentences that require identifying subtle referential links.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `A sentence beginning with "This phenomenon, however, was not universally observed..." should follow a sentence that ________.`,
    options: [
      'Describes a specific phenomenon and suggests it is common',
      'Introduces a new character in a story',
      'Lists several different problems',
      'Concludes the entire passage'
    ],
    correctAnswer: 'Describes a specific phenomenon and suggests it is common',
    explanation: 'The "however" and "not universally observed" imply a contrast with a previous general statement.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'C1 Reading: Schematic Framework Mastery',
  explanation: 'Categorizing information into complex multi-variable tables.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `In a "Fill in the Table" question, which type of detail is usually INCORRECT?`,
    options: [
      'A detail that is mentioned but is not relevant to the specific categories provided',
      'A main point of the passage',
      'A summary of a key paragraph',
      'A piece of evidence supporting a major theory'
    ],
    correctAnswer: 'A detail that is mentioned but is not relevant to the specific categories provided',
    explanation: 'These questions test your ability to distinguish "major points" from "minor details" or "distractors."',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Reading: Academic Modifiers of Degree',
  explanation: 'Distinguishing between "Marginally," "Substantially," "Exponentially," and "Infinitesimally."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `If a change is "infinitesimal," it is ________.`,
    options: ['Extremely small', 'Extremely large', 'Infinite in size', 'Very fast'],
    correctAnswer: 'Extremely small',
    explanation: '"Infinitesimal" refers to something so small as to be almost immeasurable.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'reading',
  title: 'C1 Reading: Analyzing "Archaic" Sentence Structures',
  explanation: 'Decoding long, complex sentences with multiple nested clauses.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `To decode a 40-word sentence, your first step should be to ________.`,
    options: [
      'Identify the main subject and the main verb',
      'Translate every word into your native language',
      'Read the sentence backward',
      'Skip the sentence and hope it is not important'
    ],
    correctAnswer: 'Identify the main subject and the main verb',
    explanation: 'Stripping a sentence down to its core "Subject-Verb-Object" helps clarify its fundamental meaning.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'reading',
  title: 'C1 Reading: Speed Strategies for "Lexical Barrier" Passages',
  explanation: 'How to maintain 1.5 minutes per question when the text is difficult.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `If you are stuck on a difficult vocabulary word, you should ________.`,
    options: [
      'Spend no more than 30 seconds on it before moving to the rest of the sentence',
      'Stare at the word until you remember its meaning',
      'Quit the section',
      'Ask the proctor for help'
    ],
    correctAnswer: 'Spend no more than 30 seconds on it before moving to the rest of the sentence',
    explanation: 'Timing is critical; context often reveals enough meaning even if the specific word is unknown.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'reading',
  title: 'C1 Reading: Synthesizing Multiple Abstract Concepts',
  explanation: 'Connecting a "Scientific Theory" to its "Philosophical Implications."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `A passage discusses "Quantum Entanglement" and then "Determinism." The relationship is likely ________.`,
    options: [
      'How a physical discovery challenges a philosophical concept',
      'They are two names for the same thing',
      'They have no relationship and are in the wrong passage',
      'A list of the author\'s favorite hobbies'
    ],
    correctAnswer: 'How a physical discovery challenges a philosophical concept',
    explanation: 'C1 passages often bridge the gap between hard sciences and humanities.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'reading',
  title: 'C1 Reading: Schematic Categorization Challenge',
  explanation: 'Practice with a 3-category, 7-detail table question.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `In a table question, if a detail describes a "similarity" between two categories, but the table asks for "differences," the detail is ________.`,
    options: [
      'A distractor that should be left out',
      'Correct because it is mentioned in the text',
      'The most important part of the table',
      'A sign that the question is broken'
    ],
    correctAnswer: 'A distractor that should be left out',
    explanation: 'Accuracy in categorization is the primary goal of "Schematic Framework" questions.',
    points: 2
  }))
};

export const C1_WEEK_25 = createShardedToeflUnit(
  'toefl-c1-w25',
  'Week 25: Reading - Handling Extreme Lexical Complexity',
  'Mastering the ability to comprehend and analyze dense academic passages with highly specialized or archaic vocabulary through contextual and morphological decoding.',
  ['Utilize morphological and contextual strategies to decode Tier 3 academic vocabulary', 'Maintain reading speed and comprehension in the face of specialized terminology', 'Identify subtle referential and logical links for complex Text Insertion items', 'Categorize complex multi-variable information into Schematic Framework tables'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

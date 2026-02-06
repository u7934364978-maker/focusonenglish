import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 33;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'Full Simulation: Reading - Theoretical Physics',
  explanation: 'Analyzing a dense passage on String Theory and its philosophical implications.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `The passage suggests that the "elegance" of the theory is ________ its empirical verifiability.`,
    options: [
      '"independent of"',
      '"contingent upon"',
      '"directly proportional to"',
      '"a prerequisite for"'
    ],
    correctAnswer: '"independent of"',
    explanation: 'In high-level physics passages, theories are often discussed as beautiful even if they cannot yet be proven.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'Full Simulation: Listening - Speed & Nuance',
  explanation: 'A lecture on Macroeconomics delivered at 190 words per minute.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `What is the professor's attitude toward the "Phillips Curve" in modern contexts?`,
    options: [
      'He views it as an oversimplification of complex inflationary dynamics',
      'He believes it is the most accurate tool available',
      'He dismisses it as entirely irrelevant to current policy',
      'He is neutral and only provides a historical summary'
    ],
    correctAnswer: 'He views it as an oversimplification of complex inflationary dynamics',
    explanation: 'Detecting subtle skepticism in a fast-paced lecture is a key C1 skill.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'speaking',
  title: 'Full Simulation: Speaking Task 1 - Ethical Dilemmas',
  explanation: 'Responding to a complex prompt about university ethics and corporate funding.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `A high-scoring response on ethics must address ________.`,
    options: [
      'Potential conflicts of interest and institutional integrity',
      'Only the financial benefits for the students',
      'The personal life of the corporate CEO',
      'The colors of the university logo'
    ],
    correctAnswer: 'Potential conflicts of interest and institutional integrity',
    explanation: 'Using terms like "institutional integrity" demonstrates advanced thematic vocabulary.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'writing',
  title: 'Full Simulation: Writing - Integrated Synthesis',
  explanation: 'Matching a reading on "Urban Vertical Farming" with a skeptical lecture.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `The lecture refutes the "energy efficiency" claim by pointing out ________.`,
    options: [
      'The high electrical demand of artificial lighting systems',
      'That plants don\'t like buildings',
      'That workers will be tired of climbing stairs',
      'That rain cannot reach the bottom floors'
    ],
    correctAnswer: 'The high electrical demand of artificial lighting systems',
    explanation: 'C1 writing requires capturing the *technical reason* for the refutation.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Full Simulation: Reading - Paleontology Nuance',
  explanation: 'Distinguishing between fact, hypothesis, and academic speculation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `The author uses the phrase "tentatively linked" to imply ________.`,
    options: [
      'The evidence is suggestive but not conclusive',
      'The two events are definitely related',
      'The link is a mistake made by previous scientists',
      'The connection is physically impossible'
    ],
    correctAnswer: 'The evidence is suggestive but not conclusive',
    explanation: 'Understanding "Hedge words" (tentatively, purportedly) is crucial for Reading accuracy.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Full Simulation: Listening - Campus Dynamics',
  explanation: 'A conversation with a registrar about complex credit transfer policies.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Why does the registrar mention the "Accreditation Board"?`,
    options: [
      'To explain the external constraints on the university\'s policy',
      'To complain about his boss',
      'To encourage the student to change majors',
      'To provide a historical anecdote about the university'
    ],
    correctAnswer: 'To explain the external constraints on the university\'s policy',
    explanation: 'Identifying the "Function" of a specific detail (explaining constraints) is a common high-level question.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'speaking',
  title: 'Full Simulation: Speaking Task 3 - Psychology',
  explanation: 'Summarizing a lecture on "Confirmation Bias" with two specific examples.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `A successful synthesis in Task 3 requires ________.`,
    options: [
      'Explaining how the specific examples illustrate the general psychological concept',
      'Just repeating the definition from the reading over and over',
      'Talking only about your own personal biases',
      'Giving the professor\'s name and university'
    ],
    correctAnswer: 'Explaining how the specific examples illustrate the general psychological concept',
    explanation: 'The "bridge" between the abstract theory and the concrete example is what earns the most points.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'writing',
  title: 'Full Simulation: Academic Discussion - Global Policy',
  explanation: 'Participating in a discussion about "Universal Basic Income."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `To provide a "high-level" contribution, you should ________.`,
    options: [
      'Address the potential impact of automation on the labor market as a catalyst for UBI',
      'Say "UBI is a good idea for poor people"',
      'Repeat what Student A said about taxes',
      'Ask the professor for the answer'
    ],
    correctAnswer: 'Address the potential impact of automation on the labor market as a catalyst for UBI',
    explanation: 'Bringing in related concepts like "automation" shows a broad academic perspective.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Full Simulation: High-Tier Academic Lexicon',
  explanation: 'Reviewing the 100 most frequent C1 words from the last 33 weeks.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Which word means "to spread through every part of something"?`,
    options: ['"pervade"', '"preclude"', '"perpetuate"', '"precipitate"'],
    correctAnswer: '"pervade"',
    explanation: '"Pervade" is common in both literature and social science passages.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'grammar',
  title: 'Full Simulation: Error Detection under Fatigue',
  explanation: 'Identifying subtle grammatical errors in complex sentences.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Find the error: "Hardly had the research been published than the entire department celebrated."`,
    options: [
      'Change "than" to "when"',
      'Change "Had" to "Has"',
      'Change "been" to "was"',
      'No error'
    ],
    correctAnswer: 'Change "than" to "when"',
    explanation: 'Negative inversion "Hardly... when" is a frequent trap for C1 students.',
    points: 2
  }))
};

export const C1_WEEK_33 = createShardedToeflUnit(
  'toefl-c1-w33',
  'Week 33: Full Simulation 1 - Comprehensive Mastery',
  'First full-scale simulation of the TOEFL iBT at a C1 level, testing stamina, technical precision, and the ability to maintain academic tone under pressure.',
  ['Successfully complete high-complexity Reading and Listening sections under time constraints', 'Maintain C1-level academic tone and structural integrity throughout the Speaking battery', 'Execute precise written synthesis and discussion tasks in a full simulation environment', 'Demonstrate high-tier lexical and grammatical accuracy while managing test-taking fatigue'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

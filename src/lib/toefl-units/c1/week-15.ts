import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 15;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'C1 Reading: Drawing Logical Inferences',
  explanation: 'Identifying information that is implied by the text but not explicitly stated.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `If a passage states that "the new tax only applies to businesses with over 500 employees," what can be inferred about a company with 200 employees?`,
    options: [
      'They are exempt from the new tax',
      'They must pay the new tax next year',
      'They are going to hire 300 more people',
      'They are a small business'
    ],
    correctAnswer: 'They are exempt from the new tax',
    explanation: 'Inference questions require you to identify the logical consequence of a stated fact.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'C1 Reading: Rhetorical Purpose of a Detail',
  explanation: 'Understanding *why* the author mentioned a specific person, place, or thing.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `In an article about renewable energy, why might the author mention "the high cost of whale oil in the 19th century"?`,
    options: [
      'To provide a historical parallel for how resource scarcity drives innovation',
      'To argue that we should return to using whale oil',
      'To show that the author is an expert in 19th-century history',
      'To explain how whales were hunted in the past'
    ],
    correctAnswer: 'To provide a historical parallel for how resource scarcity drives innovation',
    explanation: 'Authors use historical details to support or illustrate broader academic points.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'reading',
  title: 'C1 Reading: Connecting Ideas Across Paragraphs',
  explanation: 'Tracking the development of an argument through the entire passage.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `If Paragraph 2 introduces a theory and Paragraph 4 mentions a "fundamental flaw," how are these paragraphs likely related?`,
    options: [
      'Paragraph 4 is providing a critique of the theory introduced in Paragraph 2',
      'Paragraph 4 is repeating Paragraph 2 in different words',
      'Paragraph 4 is introducing a completely new and unrelated theory',
      'Paragraph 4 is the conclusion of the entire passage'
    ],
    correctAnswer: 'Paragraph 4 is providing a critique of the theory introduced in Paragraph 2',
    explanation: 'Academic passages often develop through a cycle of introduction, evidence, and critique.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'reading',
  title: 'C1 Reading: Distinguishing Fact from Opinion',
  explanation: 'Identifying when an author shifts from reporting data to providing their own interpretation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which sentence is an "interpretation" rather than a simple "fact"?`,
    options: [
      '"The data suggest that current policies may be insufficient to address the crisis."',
      '"The project was completed on January 15th, 2024."',
      '"The chemical reaction produced 5 grams of sodium chloride."',
      '"Three out of four participants reported a headache."'
    ],
    correctAnswer: '"The data suggest that current policies may be insufficient to address the crisis."',
    explanation: 'Words like "suggest," "may," and "insufficient" signal an authorial interpretation or judgment.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Reading: Abstract Academic Concepts',
  explanation: 'Terms like "Empiricism," "Paradigm," "Methodology," and "Correlation."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `A "paradigm shift" in science refers to ________.`,
    options: [
      'A fundamental change in the basic concepts and experimental practices of a discipline',
      'A small mistake in a laboratory measurement',
      'Moving a telescope from one mountain to another',
      'Hiring a new professor for a university department'
    ],
    correctAnswer: 'A fundamental change in the basic concepts and experimental practices of a discipline',
    explanation: 'C1 readers must be comfortable with high-level conceptual terminology.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Reading: Sophisticated Logical Connectors',
  explanation: 'Using "Insofar as," "Whereby," "By extension," and "Per se."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `What does the phrase "per se" mean in an academic context?`,
    options: ['By or in itself', 'Therefore', 'For example', 'Always'],
    correctAnswer: 'By or in itself',
    explanation: '"Per se" is a Latin phrase used to indicate that something is being considered in isolation.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'reading',
  title: 'C1 Reading: Identifying Exceptions',
  explanation: 'Spotting the "EXCEPT" questions and finding the one detail NOT mentioned.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `In an "EXCEPT" question, the correct answer is the one that is ________.`,
    options: [
      'NOT found in the text or contradicts the text',
      'The most important point in the text',
      'The first thing mentioned in the text',
      'Found in every single paragraph'
    ],
    correctAnswer: 'NOT found in the text or contradicts the text',
    explanation: 'These questions test your ability to eliminate correct information to find the outlier.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'reading',
  title: 'C1 Reading: Analyzing Negative Fact Questions',
  explanation: 'Identifying information that the text explicitly states is FALSE.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `According to the passage, which of the following is NOT true about the discovery?`,
    options: [
      'The option that is directly contradicted by the text',
      'The option that is the most boring',
      'The option that has the most words',
      'The option that mentions a famous person'
    ],
    correctAnswer: 'The option that is directly contradicted by the text',
    explanation: 'Negative fact questions require precise scanning for detail.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'reading',
  title: 'C1 Reading: Complex Sentence Simplification',
  explanation: 'Identifying the essential meaning of a long, convoluted sentence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Which of the following best expresses the essential information in the highlighted sentence?`,
    options: [
      'The core subject and the core action, ignoring non-essential details',
      'Every single word from the original sentence',
      'A completely new idea that isn\'t in the original sentence',
      'A summary of the entire paragraph'
    ],
    correctAnswer: 'The core subject and the core action, ignoring non-essential details',
    explanation: 'Simplification requires stripping away modifiers to find the "skeleton" of the sentence.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'reading',
  title: 'C1 Reading: Inserting Sentences Logically',
  explanation: 'Finding the best place for a new sentence based on transition words and logical flow.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `A sentence starting with "This discovery, however, was not without its critics" should most likely be placed ________.`,
    options: [
      'Immediately after the discovery is first mentioned',
      'At the very beginning of the passage',
      'In the middle of a paragraph about unrelated topics',
      'At the end of the bibliography'
    ],
    correctAnswer: 'Immediately after the discovery is first mentioned',
    explanation: 'Transition words like "however" and pronouns like "this" point to the preceding information.',
    points: 2
  }))
};

export const C1_WEEK_15 = createShardedToeflUnit(
  'toefl-c1-w15',
  'Week 15: Reading - Inference and Abstract Reasoning',
  'Mastering the highest levels of academic reading comprehension, including logical inference and complex structural analysis.',
  ['Identify and validate logical inferences based on text evidence', 'Determine the rhetorical purpose of specific details and examples', 'Track the development of complex arguments across multiple paragraphs', 'Simplify and interpret convoluted academic sentence structures'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

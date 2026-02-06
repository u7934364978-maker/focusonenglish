import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 11;
const LEVEL = 'b2';

// SHARDS 1-2: Advanced Note-taking for Speaking
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Note-taking: Using Symbols and Shorthand',
  explanation: 'Developing speed in capturing key information from listening passages.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Which shorthand is best for the phrase "increase in student population"?`,
    options: ['↑ stud. pop.', 'Inc. stud. pop.', 'Student population went up', 'More people'],
    correctAnswer: '↑ stud. pop.',
    explanation: 'Using symbols like "↑" for increase and "↓" for decrease saves time during the 20-30 second preparation period.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Note-taking: Mapping Relationships',
  explanation: 'Using arrows to show cause-and-effect or contrast in your notes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `If a student says "The budget cut led to fewer research grants," how should you note the relationship?`,
    options: ['Bud. cut → ↓ grants', 'Bud. cut = grants', 'Bud. cut vs grants', 'Grants ↑ bud. cut'],
    correctAnswer: 'Bud. cut → ↓ grants',
    explanation: 'An arrow "→" clearly indicates a causal relationship (cause and effect) in your speaking notes.',
    points: 2
  }))
};

// SHARDS 3-4: Task 2 - Handling Mixed Opinions
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Task 2: Identifying Partially Supportive Views',
  explanation: 'Noting when a speaker agrees with one reason but disagrees with another.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `A student says: "I agree that the cafe needs better food, but increasing the price by 50% is just too much." What is their stance?`,
    options: ['Partially agrees', 'Fully agrees', 'Fully disagrees', 'Neutral'],
    correctAnswer: 'Partially agrees',
    explanation: 'The student agrees with the premise (better food) but disagrees with the implementation (price increase).',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Task 2: Transitioning Between Mixed Points',
  explanation: 'Using words like "While" or "However" to explain a student\'s complex reaction.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which sentence best summarizes a mixed opinion for Task 2?`,
    options: [
      'The student supports the goal of the policy but disagrees with the proposed method.',
      'The student hates the policy.',
      'The student loves the policy.',
      'The student doesn\'t care.'
    ],
    correctAnswer: 'The student supports the goal of the policy but disagrees with the proposed method.',
    explanation: 'A B2-level response accurately captures the nuance of a speaker who doesn\'t have a simple "yes/no" reaction.',
    points: 2
  }))
};

// SHARDS 5-6: Task 3 - Complex Academic Topics
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading-comprehension',
  title: 'Task 3: Identifying Geology Concepts',
  explanation: 'Practicing reading and identifying definitions in Earth Sciences.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `The reading defines "Thermal Expansion" as the tendency of matter to change its shape, area, and volume in response to a change in temperature. What is the cause?`,
    options: ['Temperature change', 'Shape change', 'Volume increase', 'Matter tendency'],
    correctAnswer: 'Temperature change',
    explanation: 'Identifying the cause ("response to a change in temperature") is vital for explaining the process in Task 3.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Task 3: Summarizing Complex Experiments',
  explanation: 'Focusing on the result of the experiment the professor describes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `If the professor describes an experiment where researchers heated a metal bridge to see how it expanded, what is the purpose?`,
    options: [
      'To demonstrate thermal expansion',
      'To build a better bridge',
      'To measure metal weight',
      'To study weather patterns'
    ],
    correctAnswer: 'To demonstrate thermal expansion',
    explanation: 'Experiments in Task 3 always serve as evidence or demonstrations of the theory in the reading.',
    points: 2
  }))
};

// SHARDS 7-8: Task 4 - Multi-step Academic Processes
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Task 4: Explaining Biological Adaptations',
  explanation: 'Identifying two specific ways an animal has adapted to its environment.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `A professor says "Desert animals have two main ways to survive heat: physical adaptations and behavioral ones." What should your response structure be?`,
    options: [
      'Define survival, then explain physical and behavioral adaptations with examples.',
      'Talk only about physical adaptations.',
      'Talk only about behavioral adaptations.',
      'Explain why the desert is hot.'
    ],
    correctAnswer: 'Define survival, then explain physical and behavioral adaptations with examples.',
    explanation: 'Task 4 requires you to cover both points mentioned by the professor, usually with an example for each.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Task 4: Technical Vocabulary for Economics',
  explanation: 'Practicing the use of technical terms like "Supply and Demand" or "Opportunity Cost".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `If the lecture is about "Opportunity Cost," which means the loss of potential gain from other alternatives when one alternative is chosen, what is the core idea?`,
    options: ['The cost of the choice you DID NOT make', 'The price of a product', 'The profit of a company', 'The salary of a worker'],
    correctAnswer: 'The cost of the choice you DID NOT make',
    explanation: 'Understanding the core logic of academic terms helps you explain them clearly even if you forget the exact definition.',
    points: 2
  }))
};

// SHARDS 9-10: Self-Correction and Timing
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Effective Self-Correction',
  explanation: 'Learning how to correct a mistake without losing too much time or fluency.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `If you accidentally say "The student agree," what is the best way to correct yourself?`,
    options: [
      '"The student agree—I mean, agrees..." and continue quickly.',
      'Stop and apologize for 5 seconds.',
      'Start the whole response again.',
      'Ignore it and hope the rater didn\'t hear.'
    ],
    correctAnswer: '"The student agree—I mean, agrees..." and continue quickly.',
    explanation: 'Quick, efficient self-correction shows awareness of grammar without significantly impacting fluency.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Timing Strategy: The "Checkpoint" Method',
  explanation: 'Learning where you should be in your response at the 30-second mark.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `In a 60-second response (Tasks 2, 3, 4), where should you be at the 30-second mark?`,
    options: [
      'Finished with the summary and starting the first example/reason.',
      'Still reading the prompt.',
      'Finished with the whole response.',
      'Taking notes.'
    ],
    correctAnswer: 'Finished with the summary and starting the first example/reason.',
    explanation: 'Aiming to start your first major example/reason by the halfway point ensures you don\'t run out of time.',
    points: 2
  }))
};

export const B2_WEEK_11 = createShardedToeflUnit(
  'toefl-b2-w11',
  'Week 11: Speaking: Note-taking and Integrated Mastery',
  'Mastering advanced note-taking, complex synthesis, and timing strategies for integrated Speaking tasks.',
  ['Use symbols and shorthand for faster notes', 'Summarize mixed opinions in Task 2', 'Explain multi-step processes in Task 4', 'Apply effective self-correction techniques'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

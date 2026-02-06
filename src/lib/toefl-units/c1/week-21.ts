import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 21;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'speaking',
  title: 'C1 Speaking: Explaining Complex Theories',
  explanation: 'Condensing a 2-minute lecture into a 30-second explanation of a theory.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `When explaining a theory like "Game Theory," your focus should be on ________.`,
    options: [
      'The core mechanism of the theory and how the example demonstrates it',
      'The history of the mathematicians who developed it',
      'Listing every single detail mentioned in the lecture',
      'Giving your own opinion on whether games are fun'
    ],
    correctAnswer: 'The core mechanism of the theory and how the example demonstrates it',
    explanation: 'Task 3 and 4 test your ability to synthesize the "Rule" and the "Application."',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'speaking',
  title: 'C1 Speaking: Summarizing multi-stage processes',
  explanation: 'Using "Initially," "Subsequently," "Simultaneously," and "Ultimately."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Which transition indicates that two stages of a process happen at the same time?`,
    options: ['"Concurrently,"', '"Previously,"', '"Finally,"', '"Afterwards,"'],
    correctAnswer: '"Concurrently,"',
    explanation: '"Concurrently" is a high-level academic synonym for "at the same time."',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'speaking',
  title: 'C1 Speaking: From Abstract to Concrete',
  explanation: 'Mastering the pivot from the "definition" to the "example."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `The most effective pivot phrase for Task 3 is ________.`,
    options: [
      '"The professor provides a clear example of this by describing..."',
      '"Now I will tell you about the example."',
      '"Wait, here is the story about the [X]."',
      '"Next, the lecture begins."'
    ],
    correctAnswer: '"The professor provides a clear example of this by describing..."',
    explanation: 'Smooth pivots help the rater identify the structural boundaries of your response.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'speaking',
  title: 'C1 Speaking: Precision in Scientific Terminology',
  explanation: 'Using specific terms like "Symbiosis" instead of "Living together."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Using the correct technical term from the lecture ________.`,
    options: [
      'Demonstrates high-level academic listening and speaking integration',
      'Is unnecessary if you can explain it in simple words',
      'Will lower your score if you mispronounce it slightly',
      'Is only for science majors'
    ],
    correctAnswer: 'Demonstrates high-level academic listening and speaking integration',
    explanation: 'The rater looks for your ability to adopt the academic register of the lecture.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Speaking: Causal Linkers',
  explanation: 'Using "Stemming from," "Attributable to," "Triggering," and "Engendering."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Which phrase is a sophisticated way to say "caused by"?`,
    options: ['"Attributable to"', '"Coming from"', '"Because of"', '"Like"'],
    correctAnswer: '"Attributable to"',
    explanation: '"Attributable to" indicates a clear causal or proportional relationship.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'speaking',
  title: 'C1 Speaking: Explaining "Micro-evolution"',
  explanation: 'Practice explaining small, incremental changes over time.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `When describing micro-evolution, you should emphasize ________.`,
    options: [
      'Small shifts in gene frequencies within a population',
      'The creation of an entirely new species overnight',
      'The disappearance of all life on Earth',
      'How much you like animals'
    ],
    correctAnswer: 'Small shifts in gene frequencies within a population',
    explanation: '"Micro" implies small-scale changes, which is a key distinction at the C1 level.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'speaking',
  title: 'C1 Speaking: Handling "Contradictory" Examples',
  explanation: 'Explaining how an example might seem to go against a theory but actually proves it.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `A complex Task 4 might present an "apparent contradiction." You should ________.`,
    options: [
      'Clarify why the example is actually consistent with the theory',
      'Ignore the contradiction and only say the easy parts',
      'Agree that the professor is wrong',
      'Start your response by saying the lecture was confusing'
    ],
    correctAnswer: 'Clarify why the example is actually consistent with the theory',
    explanation: 'Explaining "apparent" contradictions shows deep academic comprehension.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'speaking',
  title: 'C1 Speaking: The "Wrap-Up" Sentence',
  explanation: 'Concluding your response by linking the example back to the theory.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `A strong final sentence for Task 3 sounds like: ________.`,
    options: [
      '"This perfectly exemplifies how [X] functions in a real-world setting."',
      '"And that is all the professor said about [X]."',
      '"So the example was about the bird and the tree."',
      '"Thank you for listening to my response."'
    ],
    correctAnswer: '"This perfectly exemplifies how [X] functions in a real-world setting."',
    explanation: 'Linking back to the initial concept provides a satisfying "closure" to your response.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'speaking',
  title: 'C1 Speaking: Managing Multi-Speaker Classroom Synthesis',
  explanation: 'Verbally reporting on a debate between a professor and a student.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `If a student challenges the professor, you should report it as: ________.`,
    options: [
      '"One student raised a concern regarding [Topic], to which the professor responded by..."',
      '"A student was angry and the professor talked back."',
      '"They had a fight about the reading and the professor won."',
      '"A student said something and I don\'t know what the professor said."'
    ],
    correctAnswer: '"One student raised a concern regarding [Topic], to which the professor responded by..."',
    explanation: 'Reporting the *interaction* is key to high-level synthesis.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'speaking',
  title: 'C1 Speaking: Avoiding "List-Like" Delivery',
  explanation: 'Using transitions to show logical flow rather than just saying "Next, next, next."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `To avoid a "robotic" list-like delivery, you should use ________.`,
    options: [
      'Subordinating conjunctions like "whereas," "although," and "since"',
      'Long pauses between every word',
      'The word "and" at the beginning of every sentence',
      'A very loud voice'
    ],
    correctAnswer: 'Subordinating conjunctions like "whereas," "although," and "since"',
    explanation: 'Complex sentences naturally break up the "list" feel of a summary.',
    points: 2
  }))
};

export const C1_WEEK_21 = createShardedToeflUnit(
  'toefl-c1-w21',
  'Week 21: Speaking - Handling Complex Academic Logic',
  'Mastering the verbal explanation of high-level academic theories and multi-stage scientific processes under time pressure.',
  ['Synthesize and explain core academic theories and their applications', 'Utilize sophisticated temporal and causal transitions in speech', 'Maintain flow when transitioning from abstract concepts to concrete examples', 'Accurately report on classroom interactions and academic debates'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

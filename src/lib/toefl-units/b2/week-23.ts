import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 23;
const LEVEL = 'b2';

// SHARDS 1-2: Advanced Speaking - Fluency and Automaticity
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Speaking: Sentence Stress for Meaning',
  explanation: 'Using vocal emphasis to highlight the most important words in your response.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `In the sentence "The professor DISAGREES with the reading," why should you stress the word "disagrees"?`,
    options: [
      'To emphasize the relationship between the two sources',
      'Because it is the longest word',
      'To show you are finished talking',
      'Because it is a verb'
    ],
    correctAnswer: 'To emphasize the relationship between the two sources',
    explanation: 'Correct sentence stress helps the grader understand your logic more easily, improving your delivery score.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Speaking: Intonation Patterns in Lists',
  explanation: 'Using rising and falling intonation to signal when you are listing reasons or examples.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `When listing two reasons, your voice should ________ on the first reason and ________ on the second.`,
    options: ['Rise / Fall', 'Fall / Rise', 'Stay flat / Rise', 'Scream / Whisper'],
    correctAnswer: 'Rise / Fall',
    explanation: 'Rising intonation signals "there is more to come," while falling intonation signals the end of the thought.',
    points: 2
  }))
};

// SHARDS 3-4: Advanced Speaking - Task 3 Synthesis (Reading/Lecture)
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Speaking: Precise Academic Vocabulary in Task 3',
  explanation: 'Moving beyond "good" and "bad" to describe academic concepts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Instead of saying "The example shows the idea is right," a better academic phrase is ________.`,
    options: [
      'The example illustrates the validity of the concept.',
      'The example says the thing is true.',
      'The thing in the lecture matches the reading.',
      'I think the example is very nice.'
    ],
    correctAnswer: 'The example illustrates the validity of the concept.',
    explanation: 'Using words like "illustrates," "validity," and "concept" demonstrates higher-level language proficiency.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Speaking: Handling Complex Integrated Timelines',
  explanation: 'Synthesizing information when the lecture example has multiple stages.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `If the professor describes an experiment with three phases, you should ________.`,
    options: [
      'Briefly summarize the progression rather than every detail of each phase',
      'Only talk about the first phase',
      'Spend 10 seconds on each name mentioned',
      'Ignore the experiment and talk about the reading'
    ],
    correctAnswer: 'Briefly summarize the progression rather than every detail of each phase',
    explanation: 'Time management is key; you must show the OVERALL result of the experiment in relation to the concept.',
    points: 2
  }))
};

// SHARDS 5-6: Advanced Speaking - Task 4 (Academic Lecture)
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'Speaking: Task 4 Structural Transitions',
  explanation: 'Using clear verbal signposts to move between the professor\'s two main points.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Which phrase is the best transition between the two points in Task 4?`,
    options: ['The second way the professor mentions is...', 'And then he said...', 'Next topic is...', 'I am done with point one...'],
    correctAnswer: 'The second way the professor mentions is...',
    explanation: 'Clear signposting helps the listener track the structure of the lecture you are summarizing.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Speaking: Capturing Nuanced Examples',
  explanation: 'Ensuring you don\'t over-simplify the professor\'s specific case studies.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `If a professor uses a specific bird species as an example, you should ________.`,
    options: [
      'Mention the specific species name if you caught it',
      'Just say "a bird"',
      'Make up a name for the bird',
      'Spend 30 seconds describing what the bird looks like'
    ],
    correctAnswer: 'Mention the specific species name if you caught it',
    explanation: 'Using the specific terminology from the lecture shows high-level listening and speaking integration.',
    points: 2
  }))
};

// SHARDS 7-8: Advanced Speaking - Grammar in Action
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Speaking: Using Relative Clauses for Efficiency',
  explanation: 'Combining information to save time and increase sentence complexity.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Combine: "The professor mentions an experiment. This experiment was done in 1990."`,
    options: [
      'The professor mentions an experiment that was done in 1990.',
      'The professor mentions an experiment and it was in 1990.',
      'An experiment in 1990 was mentioned by professor.',
      'In 1990 experiment the professor mentions.'
    ],
    correctAnswer: 'The professor mentions an experiment that was done in 1990.',
    explanation: 'Using relative clauses ("that was...") is a hallmark of B2/C1 level English.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Speaking: Passive Voice for Objectivity',
  explanation: 'Using the passive voice to describe results and findings without saying "the researchers."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Which sounds more academic in a Speaking response?`,
    options: [
      'It was discovered that the hypothesis was correct.',
      'They found that the hypothesis was correct.',
      'Someone saw the hypothesis worked.',
      'I heard they found the hypothesis correct.'
    ],
    correctAnswer: 'It was discovered that the hypothesis was correct.',
    explanation: 'Impersonal passive structures sound more formal and academic.',
    points: 2
  }))
};

// SHARDS 9-10: Error Analysis & Self-Correction
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Speaking: Managing "Brain Freeze"',
  explanation: 'What to do when you forget a word or a point during the 60 seconds.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `If you forget a specific word, you should ________.`,
    options: [
      'Use a simple synonym or describe the concept instead',
      'Stop talking until you remember it',
      'Say "I forgot the word"',
      'Start the whole response over'
    ],
    correctAnswer: 'Use a simple synonym or describe the concept instead',
    explanation: 'Maintaining flow is more important than perfect vocabulary; circumlocution is a valuable skill.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Speaking: The Importance of the First 10 Seconds',
  explanation: 'How a strong start sets the tone for your entire score.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `The first sentence of an integrated task should always ________.`,
    options: [
      'State the main topic or relationship between the sources',
      'State your name and the date',
      'Ask the grader how they are doing',
      'Repeat the prompt exactly word-for-word'
    ],
    correctAnswer: 'State the main topic or relationship between the sources',
    explanation: 'A clear, concise opening shows the grader that you have understood the core task immediately.',
    points: 2
  }))
};

export const B2_WEEK_23 = createShardedToeflUnit(
  'toefl-b2-w23',
  'Week 23: Advanced Speaking Strategy',
  'Mastering fluency, intonation, and complex synthesis in all TOEFL Speaking tasks.',
  ['Refine sentence stress and intonation patterns', 'Synthesize multi-stage experiments in Task 3', 'Use sophisticated structural transitions in Task 4', 'Apply advanced grammar (relative clauses, passive voice) for efficiency'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

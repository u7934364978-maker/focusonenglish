import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 23;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'C1 Listening: Detecting Hidden Motivation',
  explanation: 'Why is the student *really* in the office? (Often not the first thing they say).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `A student begins by asking about a deadline, but then mentions their "heavy workload." What is the likely hidden motivation?`,
    options: [
      'The student is indirectly seeking an extension',
      'The student wants to complain about other professors',
      'The student is curious about the history of deadlines',
      'The student wants to drop the class'
    ],
    correctAnswer: 'The student is indirectly seeking an extension',
    explanation: 'C1 listeners must look beyond the initial surface-level question to the underlying intent.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'C1 Listening: The Function of Digressions',
  explanation: 'Why does the professor tell a story about their own research in the middle of a lecture?',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `A professor digresses to talk about a "failed experiment." The function of this digression is likely to ________.`,
    options: [
      'Illustrate a common pitfall in the scientific method',
      'Waste time because they forgot the next slide',
      'Boast about their personal experience',
      'Confuse the students about the main topic'
    ],
    correctAnswer: 'Illustrate a common pitfall in the scientific method',
    explanation: 'Digressions in TOEFL lectures almost always serve a pedagogical purpose, like clarifying a difficult concept.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'C1 Listening: Decoding Sarcasm and Irony',
  explanation: 'Recognizing when a speaker says the opposite of what they mean for emphasis.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `The professor says, "Oh, because climate change is such a *minor* issue, right?" What is her actual attitude?`,
    options: [
      'She believes climate change is an extremely serious and urgent issue',
      'She genuinely thinks it is a small problem',
      'She is confused about the definition of "minor"',
      'She is happy that the problem is easy to solve'
    ],
    correctAnswer: 'She believes climate change is an extremely serious and urgent issue',
    explanation: 'Sarcasm is signaled by specific intonation patterns that C1 students must identify.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'C1 Listening: Abstract Modifiers and Attitude',
  explanation: 'How words like "Ambitious," "Pretentious," or "Nuanced" reveal speaker bias.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `If a professor describes a student\'s thesis as "overly ambitious," the professor is ________.`,
    options: [
      'Suggesting the student should narrow their focus to something more manageable',
      'Praising the student for their hard work',
      'Complaining that the student is lazy',
      'Ordering the student to stop writing'
    ],
    correctAnswer: 'Suggesting the student should narrow their focus to something more manageable',
    explanation: '"Ambitious" can be positive, but "overly" adds a critical nuance regarding feasibility.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'C1 Listening: Mapping Hierarchical Lectures',
  explanation: 'Distinguishing between "Main Ideas," "Sub-points," and "Tertiary Details."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `In a lecture about "Renaissance Art," the mention of a specific "brush technique" is most likely ________.`,
    options: [
      'A supporting detail for a broader point about artistic innovation',
      'The main thesis of the entire 5-minute lecture',
      'An irrelevant comment that should be ignored in notes',
      'A summary of the professor\'s personal life'
    ],
    correctAnswer: 'A supporting detail for a broader point about artistic innovation',
    explanation: 'Hierarchical listening requires placing small details within the context of larger themes.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Listening: Conversational Idioms',
  explanation: 'Understanding "Off the top of my head," "In a nutshell," and "Bear with me."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `When the professor says "Bear with me," she wants the students to ________.`,
    options: [
      'Be patient while she finds information or explains a complex point',
      'Bring a bear to class',
      'Leave the room immediately',
      'Argue with her'
    ],
    correctAnswer: 'Be patient while she finds information or explains a complex point',
    explanation: '"Bear with me" is a common request for patience in professional/academic settings.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'C1 Listening: Inference via Omission',
  explanation: 'Understanding what a speaker *doesn\'t* say to infer their opinion.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `The professor lists three advantages of a theory but never mentions its popularity. What can you infer?`,
    options: [
      'The theory might not be widely accepted in the field',
      'The professor forgot to talk about popularity',
      'The theory is the most popular one in the world',
      'The students already know everything about the theory'
    ],
    correctAnswer: 'The theory might not be widely accepted in the field',
    explanation: 'Silence on a key aspect of a topic (like popularity) is often a meaningful clue at the C1 level.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'C1 Listening: Recognizing Structural Shifts',
  explanation: 'Identifying when the lecture moves from "Theory" to "Evidence" to "Critics."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Which phrase signals a shift to the "Evidence" portion of a lecture?`,
    options: [
      '"Let\'s look at a case study that substantiates this claim..."',
      '"Now, I personally disagree with this..."',
      '"In conclusion, the theory is interesting..."',
      '"Hello class, today we will talk about [Topic]..."'
    ],
    correctAnswer: '"Let\'s look at a case study that substantiates this claim..."',
    explanation: '"Substantiate" is a key academic verb for providing evidence.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'listening',
  title: 'C1 Listening: Identifying Multi-Speaker Stances',
  explanation: 'Tracking how three different students feel about a single proposal.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `One student says "It's a bold move," while another says "It's risky." Do they agree?`,
    options: [
      'They agree that the proposal is significant but have different emotional responses',
      'They completely disagree about everything',
      'They are talking about different proposals',
      'They both think the proposal is boring'
    ],
    correctAnswer: 'They agree that the proposal is significant but have different emotional responses',
    explanation: '"Bold" (positive/brave) vs "Risky" (negative/dangerous) shows a shared understanding of the proposal\'s scale.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'listening',
  title: 'C1 Listening: Synthesis across Listening Items',
  explanation: 'Connecting information from the beginning of a conversation to a solution offered at the end.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `A student mentions a "clash in schedules" early on. Why does the professor suggest a "hybrid format" later?`,
    options: [
      'To accommodate the student\'s scheduling conflict',
      'Because the professor hates teaching in person',
      'To make the class harder for the student',
      'To test a new technology'
    ],
    correctAnswer: 'To accommodate the student\'s scheduling conflict',
    explanation: 'Listening questions often require connecting two pieces of information that are minutes apart.',
    points: 2
  }))
};

export const C1_WEEK_23 = createShardedToeflUnit(
  'toefl-c1-w23',
  'Week 23: Listening - Multi-Layered Narrative and Subtext',
  'Analyzing complex listening passages for hidden motivations, rhetorical functions of digressions, and nuanced speaker attitudes.',
  ['Identify "Hidden Motivations" in campus-based conversations', 'Analyze the pedagogical function of digressions in academic lectures', 'Decode speaker attitude through intonation, irony, and abstract modifiers', 'Synthesize information across long-form listening passages to infer solutions'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

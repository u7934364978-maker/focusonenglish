import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 30;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'C1 Listening: Detecting "Gatekeeping" Behavior',
  explanation: 'Recognizing when an advisor or professor is indirectly discouraging a student.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `An advisor says, "That course has a *very* high workload and requires a *substantial* background in statistics." What is she implying?`,
    options: [
      'She is subtly questioning if the student is truly prepared for the course',
      'She is excited for the student to take the class',
      'She wants the student to become a math major',
      'She is describing her own favorite class'
    ],
    correctAnswer: 'She is subtly questioning if the student is truly prepared for the course',
    explanation: 'Focusing on "warning" keywords (High workload, Substantial background) reveals the gatekeeping intent.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'C1 Listening: Analyzing the "Hidden Agenda"',
  explanation: 'Identifying when a speaker is using a conversation to achieve a secondary goal.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `A professor spends 5 minutes praising a student's paper and then mentions a "research assistant vacancy." What is the professor's agenda?`,
    options: [
      'To recruit the student for the assistant position',
      'To give the student a higher grade',
      'To complain about the current research assistant',
      'To ask the student for help with their own homework'
    ],
    correctAnswer: 'To recruit the student for the assistant position',
    explanation: 'The praise serves as a "bridge" to the actual goal of recruitment.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'C1 Listening: Subtle Praise vs. Polite Criticism',
  explanation: 'Decoding phrases like "It\'s an interesting approach" (often polite criticism).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `A professor says, "Your argument is... certainly unique." What is the most likely meaning?`,
    options: [
      'The professor finds the argument strange or lacking in conventional evidence',
      'The professor thinks the student is a genius',
      'The professor has never seen anything like it before and is impressed',
      'The professor wants to publish the student\'s work'
    ],
    correctAnswer: 'The professor finds the argument strange or lacking in conventional evidence',
    explanation: 'In academic English, "unique" or "interesting" can be euphemisms for "flawed" or "unorthodox."',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'C1 Listening: Pragmatic Understanding Mastery',
  explanation: 'Answering "What does the speaker mean when they say this?" (Replay questions).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `The professor re-states: "And we *all* know how reliable *that* source is." (with heavy sarcasm). The professor ________.`,
    options: [
      'Strongly distrusts the source being mentioned',
      'Believes the source is the best in the world',
      'Is asking the students if they know the source',
      'Is happy that the source exists'
    ],
    correctAnswer: 'Strongly distrusts the source being mentioned',
    explanation: 'Sarcastic emphasis on "all" and "that" indicates the opposite of the literal meaning.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'C1 Listening: Identifying Subtle Institutional Bias',
  explanation: 'Recognizing when a university official is prioritizing the institution\'s needs over the student\'s.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `A housing officer says, "While we understand your preference, the university policy aims to foster a *diverse* community in the dorms." This is ________.`,
    options: [
      'A polite way of saying the student\'s specific request for a roommate will not be granted',
      'An invitation to a party',
      'A compliment on the student\'s personality',
      'A request for the student to move to a different city'
    ],
    correctAnswer: 'A polite way of saying the student\'s specific request for a roommate will not be granted',
    explanation: 'Appealing to "policy" and "broader goals" is a common way to decline individual requests.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Listening: Euphemisms and Modifiers',
  explanation: 'Understanding "Somewhat," "Relatively," "To a certain extent," and "I wouldn\'t say that."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `If a professor says a student's performance was "not exactly stellar," they mean it was ________.`,
    options: ['Disappointing or mediocre', 'Very bright and shining', 'Perfect', 'Improving quickly'],
    correctAnswer: 'Disappointing or mediocre',
    explanation: '"Not exactly stellar" is a common academic euphemism for "poor."',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'C1 Listening: Detecting Urgency without "Emergency" words',
  explanation: 'Identifying when a speaker is stressed using rate of speech and repetition.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `A student repeatedly asks, "Is there *any* other way?" and speaks faster. This indicates ________.`,
    options: [
      'The student is in a desperate situation or is very anxious',
      'The student is bored and wants to leave',
      'The student is practicing their English speed',
      'The student is angry at the professor'
    ],
    correctAnswer: 'The student is in a desperate situation or is very anxious',
    explanation: 'Repetition of "any" and increased rate of speech are classic markers of stress.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'C1 Listening: Evaluating Academic Sincerity',
  explanation: 'Is the professor genuinely interested in the student\'s idea, or just being polite?',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `A professor says, "Feel free to send me an email about that... at some point." What is the level of sincerity?`,
    options: [
      'Low; the professor is likely busy and not prioritizing this topic',
      'High; the professor is waiting eagerly for the email',
      'Neutral; the professor doesn\'t have an email address',
      'The professor wants the student to call them instead'
    ],
    correctAnswer: 'Low; the professor is likely busy and not prioritizing this topic',
    explanation: 'Adding "at some point" and using a vague invitation suggests a low level of immediate interest.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'listening',
  title: 'C1 Listening: Decoding "Backhanded" Compliments',
  explanation: 'Recognizing praise that contains a hidden criticism.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `A professor says, "It\'s impressive how you managed to write so much without actually... addressing the prompt." What is the primary message?`,
    options: [
      'The student failed to answer the question despite writing a lot',
      'The professor is impressed by the student\'s typing speed',
      'The student is the best writer in the class',
      'The professor wants to read more'
    ],
    correctAnswer: 'The student failed to answer the question despite writing a lot',
    explanation: 'The pause and the "actually... addressing the prompt" highlight the failure of the response.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'listening',
  title: 'C1 Listening: Synthesis of Pragmatic Meaning',
  explanation: 'Connecting a speaker\'s attitude to the final outcome of a conversation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Why does the student finally agree to the professor\'s "suggestion"?`,
    options: [
      'Because they realized the professor was subtly insisting on it for their own benefit',
      'Because the student suddenly changed their mind',
      'Because they ran out of time',
      'Because the professor threatened them'
    ],
    correctAnswer: 'Because they realized the professor was subtly insisting on it for their own benefit',
    explanation: 'C1 students must track the "power dynamic" in academic conversations.',
    points: 2
  }))
};

export const C1_WEEK_30 = createShardedToeflUnit(
  'toefl-c1-w30',
  'Week 30: Listening - Identifying Subtle Bias and Agendas',
  'Mastering the ability to detect hidden agendas, gatekeeping behavior, and nuanced speaker attitudes in complex academic and campus-based listening passages.',
  ['Identify "Gatekeeping" and indirect discouragement in campus-based interactions', 'Analyze "Hidden Agendas" and secondary goals in professor-student conversations', 'Distinguish between genuine praise, polite criticism, and "backhanded" compliments', 'Excel in "Pragmatic Understanding" questions by decoding subtext and intonation'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

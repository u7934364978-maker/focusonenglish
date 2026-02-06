import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 35;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'speaking',
  title: 'C1 Speaking: Strategic Self-Correction',
  explanation: 'Fixing a grammatical or factual slip without breaking your flow.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `What is the most "native-like" way to self-correct during the Speaking section?`,
    options: [
      'Using a quick pivot like "...or rather, [Correction]" and continuing immediately',
      'Stopping, saying "I am sorry," and starting the sentence again from the beginning',
      'Ignoring the mistake and hoping the grader doesn\'t notice',
      'Saying "Wait, that was wrong" and pausing for 5 seconds'
    ],
    correctAnswer: 'Using a quick pivot like "...or rather, [Correction]" and continuing immediately',
    explanation: 'Fluent self-correction shows "Metalinguistic awareness," which is a high-level skill.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'writing',
  title: 'C1 Writing: Register Consistency',
  explanation: 'Ensuring your vocabulary stays formal from the first to the last word.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Which sentence is most consistent in its academic register?`,
    options: [
      '"The pervasive influence of digital media has fundamentally altered societal communication patterns."',
      '"Digital media is everywhere and it changed how society talks a lot."',
      '"The way we talk is different now because digital media is very pervasive."',
      '"Societal communication patterns have been altered because digital media is everywhere."'
    ],
    correctAnswer: '"The pervasive influence of digital media has fundamentally altered societal communication patterns."',
    explanation: 'Combining "pervasive influence" and "fundamentally altered" maintains a high academic register.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'writing',
  title: 'C1 Writing: The Nuanced Counter-Argument',
  explanation: 'Anticipating and refuting an opposing view in the Academic Discussion task.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `How should you introduce a counter-argument in the Discussion task?`,
    options: [
      '"Admittedly, one might argue that [Opposing View]; however, this perspective fails to account for..."',
      '"Some people think [X] but they are wrong because..."',
      '"I disagree with [X] because my idea is better."',
      '"The other side of the story is [X], and I don\'t like it."'
    ],
    correctAnswer: '"Admittedly, one might argue that [Opposing View]; however, this perspective fails to account for..."',
    explanation: 'The "Admittedly... however..." structure shows you can handle opposing viewpoints with intellectual maturity.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'speaking',
  title: 'C1 Speaking: Mastery of the "Circular" Response',
  explanation: 'Concluding by directly referencing your opening statement.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `If you start with "Technology is a double-edged sword," how should you end?`,
    options: [
      '"Thus, while technology offers benefits, its inherent risks confirm its status as a double-edged sword."',
      '"So technology is good and bad at the same time."',
      '"In conclusion, that is why I said what I said at the start."',
      '"Technology is very complex, so we must be careful."'
    ],
    correctAnswer: '"Thus, while technology offers benefits, its inherent risks confirm its status as a double-edged sword."',
    explanation: 'Returning to your original metaphor/hook creates a "finished" and professional sound.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Eloquence: Precision Adjectives',
  explanation: 'Using "ubiquitous" vs "common," "profound" vs "deep," "tenuous" vs "weak."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `If a connection between two ideas is very weak and hard to see, it is ________.`,
    options: ['"tenuous"', '"subtle"', '"obscure"', '"remote"'],
    correctAnswer: '"tenuous"',
    explanation: '"Tenuous" is the specific academic term for a weak or shaky connection.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'speaking',
  title: 'C1 Speaking: Avoiding "Fillers" via Strategic Pausing',
  explanation: 'Replacing "um" and "uh" with silent, thoughtful pauses.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `What is the effect of a 1-second silence before a major point?`,
    options: [
      'It creates emphasis and gives the grader time to process your structure',
      'It makes you look like you forgot your words',
      'It is a mistake that lowers your score',
      'It is only allowed if you say "excuse me"'
    ],
    correctAnswer: 'It creates emphasis and gives the grader time to process your structure',
    explanation: 'Strategic silence is a hallmark of confident, high-level public speaking.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'writing',
  title: 'C1 Writing: Cohesive Transitions for "Conflict"',
  explanation: 'Using "Notwithstanding," "Conversely," and "In stark contrast."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which transition best introduces a completely opposite theory?`,
    options: ['"In stark contrast"', '"Similarly"', '"Furthermore"', '"Subsequently"'],
    correctAnswer: '"In stark contrast"',
    explanation: '"In stark contrast" signals a major shift to an opposing idea.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'speaking',
  title: 'C1 Speaking: Summary Mastery in Task 4',
  explanation: 'Compressing a 2-minute lecture into 60 seconds without losing key terms.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `What is the most important part of a Task 4 summary?`,
    options: [
      'The relationship between the professor\'s two examples and the main concept',
      'The exact dates and names mentioned in the examples',
      'Using your own personal opinion about the lecture',
      'Speaking as fast as possible to include every word'
    ],
    correctAnswer: 'The relationship between the professor\'s two examples and the main concept',
    explanation: 'The grader looks for "Relational understanding," not just a list of facts.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'C1 Eloquence: Avoiding "Cliche" Openings',
  explanation: 'Moving beyond "First of all" and "Secondly."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `What is a sophisticated alternative to "First of all"?`,
    options: [
      '"Foremost among these considerations is..."',
      '"To start my talk, I will say..."',
      '"The first thing I want to tell you is..."',
      '"One reason is that..."'
    ],
    correctAnswer: '"Foremost among these considerations is..."',
    explanation: '"Foremost among..." immediately establishes a high academic register.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'speaking',
  title: 'C1 Speaking: The "Wrap-up" Intonation',
  explanation: 'Using your voice to signal that your response is ending (falling pitch).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Why should your pitch fall on the last three words of your response?`,
    options: [
      'It signals "finality" to the grader, ensuring they know you are finished',
      'It makes you sound more tired and ready to stop',
      'It is a way to save energy for the next task',
      'It is just a habit of native speakers'
    ],
    correctAnswer: 'It signals "finality" to the grader, ensuring they know you are finished',
    explanation: '"Falling intonation" at the end of a thought is a universal sign of completion in English.',
    points: 2
  }))
};

export const C1_WEEK_35 = createShardedToeflUnit(
  'toefl-c1-w35',
  'Week 35: Final Polish - Speaking & Writing Eloquence',
  'Achieving the highest band scores through refined verbal self-correction, absolute register consistency in writing, and the mastery of sophisticated structural and prosodic techniques.',
  ['Execute seamless verbal self-corrections without compromising fluency or score', 'Maintain a flawless, high-tier academic register throughout all written tasks', 'Apply sophisticated counter-argument and refutation structures in discussions', 'Utilize circular structural patterns and prosodic cues to deliver professional responses'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

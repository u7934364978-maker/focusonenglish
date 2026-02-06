import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 7;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'C1 Speaking: The 15-Second Brainstorm',
  explanation: 'Rapidly generating two distinct reasons and two specific examples.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `In 15 seconds, which is the most effective thing to write on your scratch paper?`,
    options: [
      'Two keywords for reasons and two keywords for examples',
      'Full sentences of what you plan to say',
      'A list of 20 different vocabulary words',
      'The entire prompt written out again'
    ],
    correctAnswer: 'Two keywords for reasons and two keywords for examples',
    explanation: 'Keywords serve as "triggers" for your brain, allowing you to focus on delivery rather than reading.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'C1 Speaking: Layering Your Examples',
  explanation: 'Moving from "This is good" to "This is beneficial because X, which leads to Y, as seen in Z."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `A "C1-level" example should include ________.`,
    options: [
      'A specific "if-then" scenario or a detailed personal anecdote',
      'A repetition of the main reason three times',
      'A simple list of three adjectives',
      'No more than five words'
    ],
    correctAnswer: 'A specific "if-then" scenario or a detailed personal anecdote',
    explanation: 'Complexity in Speaking Task 1 comes from the depth of your support, not just the complexity of your words.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'vocabulary',
  title: 'C1 Speaking: Natural Fillers & "Think-Time"',
  explanation: 'Using "That\'s an intriguing question," or "In my estimation," to buy processing time.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Which filler phrase sounds most "academic and natural" for a C1 speaker?`,
    options: [
      '"When we consider the broader implications of this issue..."',
      '"Uh... uh... uh... let me see..."',
      '"Like, you know, I think it\'s like..."',
      '"Wait, I forgot what I was saying."'
    ],
    correctAnswer: '"When we consider the broader implications of this issue..."',
    explanation: 'Sophisticated fillers maintain your "Fluency" score while you organize your next thought.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'vocabulary',
  title: 'C1 Speaking: Contrastive Stress for Emphasis',
  explanation: 'Using word stress to highlight a specific choice (e.g., "I don\'t just *like* it, I *value* it.").',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `In the sentence "The *cost* isn't the issue; it\'s the *quality*," the stress on "cost" and "quality" serves to ________.`,
    options: [
      'Emphasize the contrast between the two concepts',
      'Show that the speaker is angry',
      'Indicate that the speaker is reading from a list',
      'Make the sentence sound like a question'
    ],
    correctAnswer: 'Emphasize the contrast between the two concepts',
    explanation: 'Contrastive stress is a high-level prosodic feature that raters look for at the C1 level.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Idioms of Opinion & Stance',
  explanation: 'Sophisticated idiomatic expressions (e.g., "On the fence," "Cut and dried," "Food for thought").',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `If you say a decision is not "cut and dried," you mean ________.`,
    options: [
      'It is complex and there is no simple or obvious answer',
      'The decision has already been made and cannot be changed',
      'The decision involves water and food',
      'The decision is very easy and took only a second'
    ],
    correctAnswer: 'It is complex and there is no simple or obvious answer',
    explanation: 'Using idioms correctly shows a high level of lexical control.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Transitions of Complexity',
  explanation: 'Moving beyond "First" and "Second" to "Furthermore," "Conversely," and "In light of this."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Which transition best introduces a counter-point to your own argument?`,
    options: ['"Having said that,"', '"Additionally,"', '"For instance,"', '"In conclusion,"'],
    correctAnswer: '"Having said that,"',
    explanation: '"Having said that" is a sophisticated way to introduce a concession or a contrasting idea.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Inverted Conditionals in Speaking',
  explanation: 'Using "Should you decide..." instead of "If you decide..." for a formal flair.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which spoken sentence sounds most formal and impressive?`,
    options: [
      '"Were I in that position, I would opt for the more sustainable choice."',
      '"If I was in that position, I would choose the better one."',
      '"If I am in that position, I will choose the one that works."',
      '"Me in that position? I choose the good one."'
    ],
    correctAnswer: '"Were I in that position, I would opt for the more sustainable choice."',
    explanation: 'Inverted second conditionals ("Were I...") are excellent score boosters for the Speaking section.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Complex Relative Clauses',
  explanation: 'Adding detail on the fly: "The strategy, which has been proven effective in several studies, is..."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Which spoken sentence uses a non-defining relative clause correctly to add detail?`,
    options: [
      '"This policy, which was first implemented in 2010, has had a profound impact."',
      '"This policy that was implemented in 2010 impact."',
      '"Policy which was 2010 had impact."',
      '"The policy which implemented 2010 it was impactful."'
    ],
    correctAnswer: '"This policy, which was first implemented in 2010, has had a profound impact."',
    explanation: 'Non-defining relative clauses allow you to insert background information without starting a new sentence.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Managing the 45-Second Clock',
  explanation: 'How to gracefully conclude if you have 5 seconds left.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `If the timer is at 0:05 and you haven\'t finished your second point, you should ________.`,
    options: [
      'Quickly summarize with a one-sentence concluding thought',
      'Keep talking after the beep',
      'Stop abruptly and say nothing',
      'Start your entire response again from the beginning'
    ],
    correctAnswer: 'Quickly summarize with a one-sentence concluding thought',
    explanation: 'A clean "wrap-up" shows you are in control of your time management.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Overcoming "Brain Freeze"',
  explanation: 'What to do when you forget a specific word during the 45-second response.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `If you forget the word "infrastructure," you should ________.`,
    options: [
      'Describe it using simpler words (e.g., "the basic systems like roads and bridges")',
      'Wait silently until the word comes back to you',
      'Say "I forgot the word" and apologize',
      'Switch to your native language for that one word'
    ],
    correctAnswer: 'Describe it using simpler words (e.g., "the basic systems like roads and bridges")',
    explanation: 'Circumlocution (describing a word you don\'t know) is a vital C1 speaking skill.',
    points: 2
  }))
};

export const C1_WEEK_7 = createShardedToeflUnit(
  'toefl-c1-w7',
  'Week 7: Advanced Speaking - Independent Spontaneity',
  'Mastering the rapid preparation and sophisticated delivery of personal opinions on complex academic and social topics.',
  ['Execute a 15-second brainstorm for reasons and examples', 'Layer examples with "if-then" scenarios and anecdotes', 'Master sophisticated fillers and transition phrases', 'Utilize inverted conditionals and relative clauses'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

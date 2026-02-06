import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 6;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'C1 Listening: Detecting Irony in Campus Conversations',
  explanation: 'A conversation between a student and a registrar with heavy use of subtext.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `When the student says, "Great, so I only have to wait another six weeks," what is her actual intent?`,
    options: [
      'To express frustration at the bureaucratic delay',
      'To sincerely thank the registrar for the quick service',
      'To ask if she can wait in the office',
      'To confirm that six weeks is the standard time'
    ],
    correctAnswer: 'To express frustration at the bureaucratic delay',
    explanation: 'C1 listening requires distinguishing between literal meaning and ironic intent.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'C1 Listening: Sarcasm in Academic Critiques',
  explanation: 'A professor reviewing a notoriously flawed scientific study.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `The professor describes the study's methodology as "nothing short of a miracle." What does he actually mean?`,
    options: [
      'That the methodology was absurdly poor and scientifically impossible',
      'That the researchers are geniuses who performed a miracle',
      'That he is a religious man who believes in miracles',
      'That the study should be published in a top journal'
    ],
    correctAnswer: 'That the methodology was absurdly poor and scientifically impossible',
    explanation: 'In academic contexts, extreme praise is often used sarcastically to highlight extreme failure.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'C1 Listening: Off-the-Cuff Remarks in Lectures',
  explanation: 'Identifying when a professor\'s side comment contains key thematic information.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Why does the professor mention his own failed experiment from twenty years ago?`,
    options: [
      'To illustrate that even experienced scientists can fall victim to confirmation bias',
      'To brag about his long career in the university',
      'To fill time because he forgot his lecture notes',
      'To explain why he changed his research focus to history'
    ],
    correctAnswer: 'To illustrate that even experienced scientists can fall victim to confirmation bias',
    explanation: '"Personal anecdotes" in C1 lectures almost always serve as concrete illustrations of abstract concepts.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'C1 Listening: Nuanced Agreement and Disagreement',
  explanation: 'Tracking shifts in stance during a multi-person discussion.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which phrase indicates that the second speaker partially agrees but has a significant reservation?`,
    options: [
      '"I see where you\'re coming from, however, we must consider..."',
      '"I couldn\'t agree more with your assessment."',
      '"That is the most ridiculous thing I\'ve ever heard."',
      '"Could you repeat that last part again?"'
    ],
    correctAnswer: '"I see where you\'re coming from, however, we must consider..."',
    explanation: 'C1 listening involves recognizing "hedged" agreement.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Pragmatic Meaning Verbs',
  explanation: 'Verbs used to describe how someone says something (e.g., Insinuate, Imply, Elucidate, Quip).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `To "insinuate" something is to ________.`,
    options: [
      'Suggest something unpleasant in an indirect way',
      'State a fact clearly and directly',
      'Ask a question with a known answer',
      'Loudly announce a new discovery'
    ],
    correctAnswer: 'Suggest something unpleasant in an indirect way',
    explanation: 'Insinuation is a key component of subtle pragmatics.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Idiomatic Subtext',
  explanation: 'Common idioms used in academic subtext (e.g., "Take it with a grain of salt," "Between a rock and a hard place").',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `If a professor tells you to take a specific study "with a grain of salt," they mean ________.`,
    options: [
      'You should be skeptical of the findings and not accept them as absolute truth',
      'You should add salt to your lunch while reading it',
      'The study is very important and should be memorized',
      'The study was conducted in a laboratory near the ocean'
    ],
    correctAnswer: 'You should be skeptical of the findings and not accept them as absolute truth',
    explanation: 'Idioms are often used in C1 listening to convey stance efficiently.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Intonation as a Grammatical Marker',
  explanation: 'How rising or falling pitch changes the meaning of the same words.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `The phrase "You\'re coming to the seminar" with a rising pitch at the end indicates ________.`,
    options: ['A question or a request for confirmation', 'A direct command', 'A statement of fact', 'An expression of anger'],
    correctAnswer: 'A question or a request for confirmation',
    explanation: 'C1 listening requires high sensitivity to prosodic features like pitch and stress.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Modal Verbs of Deduction',
  explanation: 'Using "must have," "could have," and "should have" to infer past intent.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Which sentence suggests the speaker is making a strong logical deduction about a past event?`,
    options: [
      'The data must have been corrupted during the transfer.',
      'The data might have been corrupted during the transfer.',
      'The data was possibly corrupted during the transfer.',
      'Maybe the data was corrupted during the transfer.'
    ],
    correctAnswer: 'The data must have been corrupted during the transfer.',
    explanation: '"Must have" expresses near-certainty in a logical deduction.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Distinguishing Main Ideas from Digressions',
  explanation: 'Keeping track of the primary topic while a professor goes on a tangent.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `When a professor says, "But I digress...", they are signaling ________.`,
    options: [
      'That they have moved away from the main topic and are now returning to it',
      'That the lecture is over',
      'That they are about to tell a very important secret',
      'That they disagree with the textbook'
    ],
    correctAnswer: 'That they have moved away from the main topic and are now returning to it',
    explanation: 'Signposting words are vital for navigating C1-level academic lectures.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Anticipating Question Focus',
  explanation: 'Predicting which ironic or subtle remarks will be the subject of a "Why does the speaker say this?" question.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Questions about a speaker's intent usually occur after ________.`,
    options: [
      'An unusual or highly emotional reaction to a piece of information',
      'A long list of dates and names',
      'The speaker coughs or clears their throat',
      'The very first sentence of the conversation'
    ],
    correctAnswer: 'An unusual or highly emotional reaction to a piece of information',
    explanation: 'The TOEFL tests your ability to interpret "deviations" from standard, literal communication.',
    points: 2
  }))
};

export const C1_WEEK_6 = createShardedToeflUnit(
  'toefl-c1-w6',
  'Week 6: Advanced Listening - Subtle Pragmatics',
  'Mastering the interpretation of subtext, irony, and speaker intent in complex campus and academic environments.',
  ['Distinguish between literal and ironic meanings', 'Identify the purpose of anecdotes and off-the-cuff remarks', 'Master vocabulary for subtle pragmatic communication', 'Utilize modal verbs of deduction to infer intent'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

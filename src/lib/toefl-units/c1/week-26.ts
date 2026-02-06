import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 26;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'C1 Listening: High-Speed Discourse Processing',
  explanation: 'Techniques for keeping up when the professor speaks at 180+ words per minute.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `When the professor is speaking very quickly, your priority in note-taking should be ________.`,
    options: [
      'Focusing on nouns, verbs, and transition words',
      'Trying to write every single word phonetically',
      'Drawing pictures to represent the concepts',
      'Closing your eyes to concentrate better'
    ],
    correctAnswer: 'Focusing on nouns, verbs, and transition words',
    explanation: 'Nouns and verbs carry the meaning, while transition words provide the logical structure.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'C1 Listening: British and Australian Accents',
  explanation: 'Familiarizing yourself with non-North American pronunciation of key academic terms.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `In a British accent, the word "schedule" is often pronounced as ________.`,
    options: ['"Shed-yool"', '"Sked-yool"', '"Shay-dyool"', '"Shed-ul"'],
    correctAnswer: '"Shed-yool"',
    explanation: 'Recognizing regional pronunciation variants prevents confusion during the test.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'C1 Listening: Filtering Irrelevant Chatter',
  explanation: 'Identifying when a student\'s comment is a "distractor" versus a "clarification."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `A student interrupts to say, "Wait, is this like that movie I saw?" The professor says, "Not exactly." You should ________.`,
    options: [
      'Discard the student\'s comment from your notes as it is irrelevant',
      'Research the movie mentioned',
      'Assume the movie is a perfect example of the topic',
      'Write down the movie title just in case'
    ],
    correctAnswer: 'Discard the student\'s comment from your notes as it is irrelevant',
    explanation: 'C1 listeners must distinguish between meaningful academic content and casual digressions.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'C1 Listening: Predicting High-Speed Conclusions',
  explanation: 'Using sentence intonation to anticipate the end of a point before it is finished.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `A falling intonation at the end of a rapid sentence usually indicates ________.`,
    options: [
      'The completion of a logical point',
      'A question that requires an answer',
      'An interruption by another speaker',
      'That the professor is bored'
    ],
    correctAnswer: 'The completion of a logical point',
    explanation: 'Recognizing "prosodic cues" helps you structure your notes even when the speed is high.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'C1 Listening: Recognizing Aussie Dialect Nuance',
  explanation: 'Understanding common Australian vowel shifts in an academic setting.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `In an Australian accent, the word "data" might sound more like ________.`,
    options: ['"Day-tah"', '"Dar-tah"', '"Dah-tah"', '"Dee-tah"'],
    correctAnswer: '"Dar-tah"',
    explanation: 'The "broad" A in Australian English can change the sound of many academic keywords.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Listening: Phonetic Ambiguity',
  explanation: 'Distinguishing between words that sound similar in fast speech (e.g., "Complement" vs. "Compliment").',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `In a lecture about "Architecture," the professor says two styles ________ each other. Which is more likely?`,
    options: ['"Complement"', '"Compliment"', '"Complaint"', '"Compliant"'],
    correctAnswer: '"Complement"',
    explanation: 'Context determines the spelling and meaning of homophones in high-speed listening.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'C1 Listening: Managing Overlapping Speech',
  explanation: 'Tracking information when two speakers talk simultaneously or in quick succession.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `If a student starts their sentence before the professor finished hers, the student is likely ________.`,
    options: [
      'Showing eager agreement or urgency to correct a point',
      'Being rude and should be ignored',
      'Asking to leave the room',
      'Just making noise'
    ],
    correctAnswer: 'Showing eager agreement or urgency to correct a point',
    explanation: 'The *timing* of an interruption can reveal the speaker\'s attitude and the intensity of the debate.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'C1 Listening: Synthesizing Dialects',
  explanation: 'Answering questions about a lecture that features two speakers with different accents.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `If a British professor and an Australian student discuss "Urban Planning," you must ________.`,
    options: [
      'Normalize both accents into a single logical "map" of the conversation',
      'Only listen to the speaker whose accent you like better',
      'Assume they are from different countries and cannot understand each other',
      'Write down where you think they are from'
    ],
    correctAnswer: 'Normalize both accents into a single logical "map" of the conversation',
    explanation: 'The TOEFL tests your ability to handle "Global English" in an academic setting.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'listening',
  title: 'C1 Listening: Fast-Paced Transition Identification',
  explanation: 'Spotting "Nevertheless," "Albeit," and "Inasmuch as" in rapid audio.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Which word is a rapid synonym for "even though"?`,
    options: ['"Albeit"', '"Also"', '"Always"', '"Already"'],
    correctAnswer: '"Albeit"',
    explanation: '"Albeit" is frequently used in high-level academic speech to introduce a concession.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'listening',
  title: 'C1 Listening: Mental Stamina for Long Lectures',
  explanation: 'Maintaining focus during a 6-minute, high-speed lecture with complex sub-topics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `To maintain focus during a long lecture, you should ________.`,
    options: [
      'Actively look for the "next" sub-point signal',
      'Try to memorize every word',
      'Take a short break every 2 minutes',
      'Stop taking notes after 3 minutes'
    ],
    correctAnswer: 'Actively look for the "next" sub-point signal',
    explanation: 'Looking for structure keeps your brain engaged and prevents "zoning out."',
    points: 2
  }))
};

export const C1_WEEK_26 = createShardedToeflUnit(
  'toefl-c1-w26',
  'Week 26: Listening - Extreme Speed and Accents',
  'Training to process high-speed academic discourse and non-standard English accents while filtering out irrelevant information and maintaining logical mapping.',
  ['Process academic speech at 180+ words per minute without loss of comprehension', 'Identify and normalize British, Australian, and other regional English accents', 'Filter irrelevant student commentary and background "chatter" from core notes', 'Utilize prosodic cues to predict sentence completion and logical shifts in rapid audio'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

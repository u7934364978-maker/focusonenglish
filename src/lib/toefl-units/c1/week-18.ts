import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 18;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'grammar',
  title: 'C1 Grammar: Subjunctive Mood for Recommendations',
  explanation: 'Using "It is essential that he [base form]..." instead of "He should...".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Which sentence uses the subjunctive mood correctly for an academic recommendation?`,
    options: [
      '"It is imperative that the government implement stricter regulations immediately."',
      '"It is imperative that the government implements stricter regulations immediately."',
      '"It is imperative that the government is implementing stricter regulations immediately."',
      '"It is imperative for the government to be implementing stricter regulations immediately."'
    ],
    correctAnswer: '"It is imperative that the government implement stricter regulations immediately."',
    explanation: 'The subjunctive mood uses the base form of the verb after certain adjectives of importance.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'grammar',
  title: 'C1 Grammar: Cleft Sentences for Focus',
  explanation: 'Using "What the study revealed was..." to emphasize specific information.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Identify the cleft sentence that emphasizes the "result" of the experiment.`,
    options: [
      '"What the researchers discovered was a direct correlation between stress and memory loss."',
      '"The researchers discovered that stress and memory loss were correlated."',
      '"Stress and memory loss are correlated, according to what the researchers found."',
      '"A direct correlation was what the researchers found when they did the study."'
    ],
    correctAnswer: '"What the researchers discovered was a direct correlation between stress and memory loss."',
    explanation: 'Cleft sentences (starting with "What...") are powerful tools for emphasizing key findings.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'C1 Grammar: Mixed Conditionals for Complex Scenarios',
  explanation: 'Combining past events with present results (e.g., "If they had listened then, we wouldn\'t be in this situation now").',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Which sentence correctly uses a mixed conditional to relate a past action to a present state?`,
    options: [
      '"If the city had invested in infrastructure a decade ago, the current traffic crisis would not exist."',
      '"If the city invested in infrastructure a decade ago, the current traffic crisis will not exist."',
      '"If the city has invested in infrastructure a decade ago, the current traffic crisis wouldn\'t exist."',
      '"If the city had invested in infrastructure a decade ago, the current traffic crisis would not have existed."'
    ],
    correctAnswer: '"If the city had invested in infrastructure a decade ago, the current traffic crisis would not exist."',
    explanation: 'Mixed conditionals are excellent for analyzing historical causes of present academic problems.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'C1 Grammar: Negative Inversion for Formal Emphasis',
  explanation: 'Using "Not only did they..." or "Rarely has a discovery..."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Which sentence uses negative inversion correctly to emphasize a point?`,
    options: [
      '"Not only did the policy fail to reduce poverty, but it also increased inequality."',
      '"Not only the policy failed to reduce poverty, but also it increased inequality."',
      '"Not only failed the policy to reduce poverty, but it also increased inequality."',
      '"The policy not only did fail to reduce poverty, but also it increased inequality."'
    ],
    correctAnswer: '"Not only did the policy fail to reduce poverty, but it also increased inequality."',
    explanation: 'Inversion after negative or restrictive adverbs is a high-level stylistic marker.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'grammar',
  title: 'C1 Grammar: Reduced Relative Clauses',
  explanation: 'Using "The findings, presented at the conference, were..." instead of "which were presented."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `Identify the sentence with a correctly reduced relative clause.`,
    options: [
      '"The methodology employed in this study is based on previous research by Miller."',
      '"The methodology which employed in this study is based on previous research."',
      '"The methodology was employed in this study and it is based on research."',
      '"Employing the methodology in this study, it is based on research."'
    ],
    correctAnswer: '"The methodology employed in this study is based on previous research by Miller."',
    explanation: 'Reduced relative clauses create a more concise and professional academic tone.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'grammar',
  title: 'C1 Grammar: Future in the Past',
  explanation: 'Using "was to become" or "would soon prove" to show historical foresight.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `Which phrase correctly expresses a "future event from a past perspective"?`,
    options: [
      '"This invention was to become the cornerstone of modern communication."',
      '"This invention becomes the cornerstone of modern communication later."',
      '"This invention will have become the cornerstone of communication."',
      '"This invention is becoming the cornerstone of communication back then."'
    ],
    correctAnswer: '"This invention was to become the cornerstone of modern communication."',
    explanation: '"Was/were to [verb]" is a formal way to describe subsequent historical developments.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'grammar',
  title: 'C1 Grammar: Modal Verbs of Deduction (Past)',
  explanation: 'Using "must have been," "could not have occurred," and "might have resulted in."',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `If an author is 90% certain about a past cause, they should write: ________.`,
    options: [
      '"The extinction must have been caused by a sudden climatic shift."',
      '"The extinction maybe was caused by a climatic shift."',
      '"The extinction could be caused by a climatic shift."',
      '"The extinction had been caused by a climatic shift."'
    ],
    correctAnswer: '"The extinction must have been caused by a sudden climatic shift."',
    explanation: '"Must have + past participle" expresses strong logical deduction about the past.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'grammar',
  title: 'C1 Grammar: Using "It" and "There" as Dummy Subjects',
  explanation: 'Using "It is argued that..." or "There appears to be..." for neutrality.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Which sentence is the most objective and academic?`,
    options: [
      '"There is a growing consensus that early intervention is crucial."',
      '"People are starting to agree that early intervention is crucial."',
      '"I think there is a consensus that early intervention is crucial."',
      '"Consensus is growing and it says intervention is crucial."'
    ],
    correctAnswer: '"There is a growing consensus that early intervention is crucial."',
    explanation: 'Dummy subjects help de-personalize claims, making them sound more authoritative.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'grammar',
  title: 'C1 Grammar: Advanced Punctuation (Semicolons & Colons)',
  explanation: 'Using semicolons to connect related independent clauses and colons to introduce lists or explanations.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Identify the sentence with correct C1-level punctuation.`,
    options: [
      '"The experiment was a success; however, the results were not immediately published."',
      '"The experiment was a success, however, the results were not published."',
      '"The experiment was a success: however the results were not published."',
      '"The experiment was a success; however: the results were not published."'
    ],
    correctAnswer: '"The experiment was a success; however, the results were not immediately published."',
    explanation: 'A semicolon is used before a conjunctive adverb like "however" when it connects two independent clauses.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'grammar',
  title: 'C1 Grammar: Gerunds after Prepositions',
  explanation: 'Using "In addition to analyzing...", "Despite having conducted...", etc.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `Complete the sentence: "Despite ________ the study multiple times, the team could not replicate the findings."`,
    options: ['having repeated', 'repeat', 'repeated', 'to repeat'],
    correctAnswer: 'having repeated',
    explanation: 'The perfect gerund ("having repeated") emphasizes that the action was completed before the result.',
    points: 2
  }))
};

export const C1_WEEK_18 = createShardedToeflUnit(
  'toefl-c1-w18',
  'Week 18: Writing - Advanced Grammatical Range',
  'Mastering high-level grammatical structures to enhance the sophistication and precision of academic writing.',
  ['Utilize the subjunctive mood for formal recommendations and requirements', 'Apply cleft sentences to emphasize critical information and findings', 'Execute mixed conditionals and negative inversion for stylistic variety', 'Master advanced punctuation and complex clause structures'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

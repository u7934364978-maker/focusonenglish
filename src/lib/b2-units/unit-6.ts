import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 6;

// ============================================
// BLOCK 1: GRAMMAR - DEFINING RELATIVE CLAUSES
// ============================================
export const B2_U6_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Defining Relative Clauses',
  grammarPoint: 'Relative Clauses',
  explanation: 'Use who, which, that, whose, and where to give essential information about a person or thing.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The man ___ (who) lives next door is very friendly.',
      'The book ___ (which) I am reading is fascinating.',
      'This is the place ___ (where) we first met.',
      'The girl ___ (whose) father is a doctor is in my class.',
      'The movie ___ (that) we saw yesterday was great.',
      'He is the teacher ___ (who) taught me English.',
      'The house ___ (where) I grew up has been sold.',
      'I know a person ___ (whose) hobby is collecting stamps.',
      'The car ___ (which) he bought is very expensive.',
      'Is there anyone ___ (who) can help me?'
    ][i],
    correctAnswer: [
      'who',
      'which',
      'where',
      'whose',
      'that',
      'who',
      'where',
      'whose',
      'which',
      'who'
    ][i],
    explanation: 'Using relative pronouns correctly in defining clauses.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - NON-DEFINING RELATIVE CLAUSES
// ============================================
export const B2_U6_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Non-Defining Relative Clauses',
  grammarPoint: 'Relative Clauses',
  explanation: 'Non-defining clauses give extra, non-essential information and are always separated by commas. "That" cannot be used.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'My brother, ___ lives in Paris, is coming to visit.',
      'The city of London, ___ is the capital of the UK, is very old.',
      'My best friend, ___ mother is a chef, invited me to dinner.',
      'The Amazon River, ___ is the longest in the world, is in South America.',
      'Mr. Jones, ___ teaches math, is very strict.',
      'The Eiffel Tower, ___ was built in 1889, is in Paris.',
      'My new car, ___ cost a lot of money, is already broken.',
      'The local park, ___ we used to play as children, has a new playground.',
      'Sarah, ___ I have known for years, is getting married.',
      'The book, ___ I borrowed from you, is on the table.'
    ][i],
    options: [
      ['who', 'that', 'which'],
      ['which', 'who', 'where'],
      ['whose', 'who', 'which'],
      ['which', 'that', 'where'],
      ['who', 'whose', 'which'],
      ['which', 'that', 'where'],
      ['which', 'that', 'who'],
      ['where', 'which', 'who'],
      ['who', 'whom', 'whose'],
      ['which', 'that', 'who']
    ][i],
    correctAnswer: [
      'who',
      'which',
      'whose',
      'which',
      'who',
      'which',
      'which',
      'where',
      'who',
      'which'
    ][i],
    explanation: 'Differentiating non-defining clauses and using commas correctly.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - DATING & RELATIONSHIPS
// ============================================
export const B2_U6_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Modern Dating Vocabulary',
  explanation: 'Vocabulary related to dating apps and modern relationships.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'They met on a ___ (dating) app.',
      'I went on a ___ (blind) date last night.',
      'He ___ (ghosted) me after three dates.',
      'We have a lot in ___ (common).',
      'They are a perfect ___ (match).',
      'I think he is ___ (the) one.',
      'She decided to ___ (break) it off.',
      'We are just ___ (friends) for now.',
      'He is looking for a serious ___ (relationship).',
      'They are ___ (engaged) to be married.'
    ][i],
    correctAnswer: [
      'dating',
      'blind',
      'ghosted',
      'common',
      'match',
      'the',
      'break',
      'friends',
      'relationship',
      'engaged'
    ][i],
    explanation: 'Contemporary relationship terminology.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - PHRASAL VERBS (FRIENDSHIP)
// ============================================
export const B2_U6_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Phrasal Verbs: Friends',
  explanation: 'Phrasal verbs commonly used with friends.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'I love to ___ with my friends on weekends.',
      'We ___ after the argument.',
      'I can always ___ my best friend.',
      'We ___ over the summer holidays.',
      'I really ___ my older brother.',
      'She ___ with her cousin.',
      'They ___ because of a misunderstanding.',
      'I ___ an old school friend yesterday.',
      'We ___ well with each other.',
      'He ___ his father in character.'
    ][i],
    options: [
      ['hang out', 'hang up', 'hang on'],
      ['made up', 'made out', 'made for'],
      ['count on', 'count in', 'count up'],
      ['drifted apart', 'drifted away', 'drifted off'],
      ['look up to', 'look out for', 'look down on'],
      ['gets along', 'gets by', 'gets away'],
      ['fell out', 'fell for', 'fell through'],
      ['ran into', 'ran over', 'ran off'],
      ['hit it off', 'hit it up', 'hit it on'],
      ['takes after', 'takes up', 'takes over']
    ][i],
    correctAnswer: [
      'hang out',
      'made up',
      'count on',
      'drifted apart',
      'look up to',
      'gets along',
      'fell out',
      'ran into',
      'hit it off',
      'takes after'
    ][i],
    explanation: 'Friendship-related phrasal verbs.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (RELATIONSHIPS)
// ============================================
export const B2_U6_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Relationships',
  explanation: 'Form nouns or adjectives related to human connections.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'Their ___ (FRIEND) is very strong.',
      'He is a very ___ (RELY) partner.',
      'We have a deep ___ (CONNECT).',
      'It was a ___ (PAIN) breakup.',
      'They have a very ___ (SUPPORT) family.',
      'The ___ (MARRY) lasted for forty years.',
      'She has a lot of ___ (ADMire) for him.',
      'He is a very ___ (PASSION) person.',
      'The ___ (ATTRACT) was instant.',
      'They live in total ___ (HAPPINESS).'
    ][i],
    correctAnswer: [
      'friendship',
      'reliable',
      'connection',
      'painful',
      'supportive',
      'marriage',
      'admiration',
      'passionate',
      'attraction',
      'happiness'
    ][i],
    explanation: 'Relationship-themed word formation.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - MODERN RELATIONSHIPS
// ============================================
export const B2_U6_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The Impact of Technology on Dating',
  explanation: 'Read the article and answer the questions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is "choice overload" in dating apps?' : 'What does the author conclude about traditional dating?',
    options: [['Too many options', 'Not enough options', 'Wrong options', 'No options'], ['It is still valuable', 'It is dead', 'It is easier', 'It is expensive']][i % 2],
    correctAnswer: i < 5 ? 'Too many options' : 'It is still valuable',
    explanation: 'Understanding complex social topics in text.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - MEETING PEOPLE
// ============================================
export const B2_U6_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: How They Met',
  explanation: 'Listen to three couples and identify how they met.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `Couple ${i + 1} met ___.`,
    options: ['At work', 'Through friends', 'Online', 'In a cafe'],
    correctAnswer: 'Online',
    explanation: 'Extracting specific information from spoken narratives.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - INFORMAL LETTERS
// ============================================
export const B2_U6_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Giving News',
  explanation: 'Choose the best way to share relationship news in a letter.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce exciting news:',
      'To mention you are dating someone:',
      'To say you got engaged:',
      'To mention a breakup:',
      'To ask for advice:',
      'To invite to a wedding:',
      'To mention a new friend:',
      'To describe your partner:',
      'To ask about their dating life:',
      'To close the letter:'
    ][i],
    options: [
      ['You won\'t believe what happened!', 'I have information.', 'Note this news:'],
      ['I\'ve started seeing someone.', 'I have a new unit.', 'Dating is occurring.'],
      ['Guess what? We\'re getting married!', 'Marriage is planned.', 'An engagement occurred.'],
      ['We decided to go our separate ways.', 'Relationship terminated.', 'The unit split.'],
      ['What do you think I should do?', 'I require advice.', 'Tell me the action.'],
      ['We\'d love you to come to our wedding!', 'Wedding attendance requested.', 'Be at the wedding.'],
      ['I\'ve made a great new friend.', 'A new friend exists.', 'Friendship formed.'],
      ['He is really kind and funny.', 'He has good traits.', 'Trait report: kind.'],
      ['How is everything with you?', 'Provide status update.', 'Are you dating?'],
      ['Can\'t wait to hear from you!', 'Write back.', 'Awaiting response.']
    ][i],
    correctAnswer: [
      'You won\'t believe what happened!',
      'I\'ve started seeing someone.',
      'Guess what? We\'re getting married!',
      'We decided to go our separate ways.',
      'What do you think I should do?',
      'We\'d love you to come to our wedding!',
      'I\'ve made a great new friend.',
      'He is really kind and funny.',
      'How is everything with you?',
      'Can\'t wait to hear from you!'
    ][i],
    explanation: 'Using appropriate informal expressions for personal news.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - TELLING A LOVE STORY
// ============================================
export const B2_U6_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Narrative Flow',
  explanation: 'Identify natural ways to structure a personal story.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `Which phrase best builds suspense in a story?`,
    options: ['And then, suddenly...', 'Next step was...', 'After that...', 'Also...'],
    correctAnswer: 'And then, suddenly...',
    explanation: 'Using fillers and connectors to improve spoken storytelling.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U6_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 6',
  explanation: 'Consolidation of Unit 6 topics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Choose the correct relative pronoun.' : 'Choose the correct dating phrasal verb.',
    options: i < 5 ? ['The man who I met...', 'The man which I met...', 'The man whose I met...'] : ['ghosted', 'hanged out', 'drifted'],
    correctAnswer: i < 5 ? 'The man who I met...' : 'ghosted',
    explanation: 'Review of Unit 6 concepts.',
    points: 1
  }))
};

export const B2_UNIT_6 = createB2Unit(
  'b2-u6',
  'Friendship & Modern Dating',
  'Master relative clauses and explore modern relationship dynamics.',
  ['Use defining and non-defining relative clauses', 'Understand modern dating vocabulary', 'Share personal news informally'],
  [
    B2_U6_BLOCK1, B2_U6_BLOCK2, B2_U6_BLOCK3, B2_U6_BLOCK4, B2_U6_BLOCK5,
    B2_U6_BLOCK6, B2_U6_BLOCK7, B2_U6_BLOCK8, B2_U6_BLOCK9, B2_U6_BLOCK10
  ]
);

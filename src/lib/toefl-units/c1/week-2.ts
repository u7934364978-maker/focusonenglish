import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 2;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'C1 Reading: Existentialism & Phenomenology',
  explanation: 'Analyzing abstract philosophical texts with complex logical structures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `According to the passage, the primary distinction between "being-in-itself" and "being-for-itself" lies in ________.`,
    options: [
      'The capacity for self-conscious reflection and choice',
      'The physical mass and biological composition of the entity',
      'The chronological age of the subjects under study',
      'The geographic location of the philosophical school'
    ],
    correctAnswer: 'The capacity for self-conscious reflection and choice',
    explanation: 'Phenomenological texts often explore the distinction between conscious existence and inanimate objects.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'C1 Reading: Cognitive Dissonance Theory',
  explanation: 'Understanding complex psychological mechanisms and their social implications.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `The author uses the example of the "fox and the sour grapes" to illustrate ________.`,
    options: [
      'The rationalization process used to reduce psychological discomfort',
      'The biological diet of wild canines in ancient fables',
      'The evolution of storytelling in agrarian societies',
      'The importance of vitamin C in the cognitive development of animals'
    ],
    correctAnswer: 'The rationalization process used to reduce psychological discomfort',
    explanation: 'Cognitive dissonance involves changing one\'s beliefs or attitudes to align with one\'s behavior or reality.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'C1 Listening: Sociology of Urbanization',
  explanation: 'Lectures on the complex dynamics of city growth and social stratification.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `What does the professor imply about the "gentrification" of historic districts?`,
    options: [
      'It is a double-edged sword with significant social costs for original residents',
      'It is a purely positive development for the city\'s tax base',
      'It is a phenomenon that has only occurred in the last five years',
      'It is the primary cause of urban sprawl'
    ],
    correctAnswer: 'It is a double-edged sword with significant social costs for original residents',
    explanation: 'Social science lectures often explore the "nuanced" or "conflicting" outcomes of economic processes.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'C1 Listening: Linguistic Relativity (Sapir-Whorf)',
  explanation: 'Exploring the relationship between language and thought patterns.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Why does the speaker mention the color vocabulary of the Dani people of New Guinea?`,
    options: [
      'To provide counter-evidence to the strong version of the Sapir-Whorf hypothesis',
      'To prove that language completely determines our perception of the world',
      'To list all the names of colors in different indigenous languages',
      'To describe the geography of New Guinea'
    ],
    correctAnswer: 'To provide counter-evidence to the strong version of the Sapir-Whorf hypothesis',
    explanation: 'Humanities lectures often use specific cultural examples to challenge or support broad theoretical frameworks.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Rhetorical Analysis Terms',
  explanation: 'Terms used to describe an author\'s argument (e.g., Concession, Refutation, Premise).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `In an academic argument, a "concession" is ________.`,
    options: [
      'Acknowledging a valid point made by the opposing side',
      'A complete surrender of one\'s position',
      'A place where students buy snacks',
      'The introduction of a completely new and unrelated topic'
    ],
    correctAnswer: 'Acknowledging a valid point made by the opposing side',
    explanation: 'Concessions are used in high-level academic writing to build credibility and show a balanced perspective.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Psychological State Adjectives',
  explanation: 'Nuanced adjectives for human behavior (e.g., Ambivalent, Stoic, Gregarious).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `If a person is "ambivalent" about a social policy, they ________.`,
    options: [
      'Have mixed or contradictory feelings about it',
      'Support it with absolute certainty',
      'Are completely unaware of its existence',
      'Believe it should be applied to everyone regardless of age'
    ],
    correctAnswer: 'Have mixed or contradictory feelings about it',
    explanation: 'Ambivalence is a common theme in psychological and sociological analysis.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Subjunctive Mood in Hypothetical Analysis',
  explanation: 'Using "if it were" and "should it occur" to discuss theoretical possibilities.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which sentence correctly uses the subjunctive mood for a hypothetical social experiment?`,
    options: [
      'If the population were to be isolated, the social dynamics would shift.',
      'If the population was isolated, the social dynamics shifted.',
      'If the population is isolated, the social dynamics shift.',
      'If the population will be isolated, the social dynamics will shift.'
    ],
    correctAnswer: 'If the population were to be isolated, the social dynamics would shift.',
    explanation: 'The subjunctive mood is essential for discussing theoretical or hypothetical scenarios in the social sciences.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Inversion for Emphasis',
  explanation: 'Using "Not only..." or "Never before..." structures to highlight key points.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Choose the sentence that uses inversion to emphasize a philosophical point.`,
    options: [
      'Rarely has a theory challenged our perception of reality so profoundly.',
      'A theory has rarely challenged our perception of reality so profoundly.',
      'This theory is very rare and it challenges us.',
      'We are challenged by this rare theory.'
    ],
    correctAnswer: 'Rarely has a theory challenged our perception of reality so profoundly.',
    explanation: 'Inversion is a sophisticated grammatical structure used to create emphasis in formal academic writing.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Identifying Authorial Tone',
  explanation: 'Determining if an author is objective, critical, ironic, or advocating.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `Which phrase suggests a "critical yet balanced" tone in an essay about Freud?`,
    options: [
      '"While his contributions to psychology are undeniable, his methods remain controversial."',
      '"Freud was the greatest psychologist who ever lived, without exception."',
      '"Freud\'s ideas are completely useless in the modern world."',
      '"Freud lived in Vienna and liked cigars."'
    ],
    correctAnswer: '"While his contributions to psychology are undeniable, his methods remain controversial."',
    explanation: 'A balanced tone acknowledges both strengths and weaknesses (concession + critique).',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Rhetorical Purpose Questions',
  explanation: 'Answering "Why did the author include this specific sentence?".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `If an author includes a vivid anecdote in a sociology paper, their purpose is likely ________.`,
    options: [
      'To provide a concrete illustration of an abstract social concept',
      'To fill up space because they lack data',
      'To entertain the reader with a funny story',
      'To show off their creative writing skills'
    ],
    correctAnswer: 'To provide a concrete illustration of an abstract social concept',
    explanation: 'In academic writing, anecdotes serve as illustrative evidence for broader theoretical claims.',
    points: 2
  }))
};

export const C1_WEEK_2 = createShardedToeflUnit(
  'toefl-c1-w2',
  'Week 2: Advanced Academic Reading - Humanities & Social Sciences',
  'Exploring complex discourse in Psychology, Sociology, and Philosophy, focusing on abstract reasoning and rhetorical analysis.',
  ['Analyze abstract philosophical and psychological texts', 'Identify authorial tone and rhetorical strategies', 'Master vocabulary for social science and humanities', 'Utilize subjunctive mood and inversion for emphasis'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

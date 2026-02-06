import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 3;
const LEVEL = 'c1';

// SHARDS 1-10: 100 exercises (10 per shard)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'C1 Reading: High Renaissance & Mannerism',
  explanation: 'Analyzing the shift in aesthetic priorities from balance to tension.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Mannerism is characterized by which of the following aesthetic departures from the High Renaissance?`,
    options: [
      'Elongated proportions and ambiguous spatial arrangements',
      'Perfectly symmetrical compositions and naturalistic colors',
      'A focus on industrial materials and functional design',
      'The complete rejection of religious subjects'
    ],
    correctAnswer: 'Elongated proportions and ambiguous spatial arrangements',
    explanation: 'Mannerism intentionally subverted the harmony and balance of the High Renaissance.',
    points: 2
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'C1 Reading: Bauhaus & Functionalism',
  explanation: 'Understanding the relationship between industrial design and modern architecture.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `The Bauhaus philosophy "Form follows function" implies that ________.`,
    options: [
      'The aesthetic of an object should be determined by its utility',
      'Ornate decoration is the primary goal of architecture',
      'Buildings should be designed to look like classical temples',
      'Functionality is secondary to the artist\'s emotional expression'
    ],
    correctAnswer: 'The aesthetic of an object should be determined by its utility',
    explanation: 'Functionalism prioritizes the purpose of the design over unnecessary ornamentation.',
    points: 2
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'C1 Listening: Post-Structuralism in Art Criticism',
  explanation: 'Lectures on how meaning is constructed and deconstructed in visual arts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `What does the professor mean by the "death of the author" in contemporary art?`,
    options: [
      'The interpretation of a work belongs to the viewer rather than the artist\'s intent',
      'The literal passing of a famous painter',
      'The prohibition of signing one\'s name on a canvas',
      'The replacement of artists with artificial intelligence'
    ],
    correctAnswer: 'The interpretation of a work belongs to the viewer rather than the artist\'s intent',
    explanation: 'Post-structuralist theory emphasizes the role of the reader/viewer in creating meaning.',
    points: 2
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'C1 Listening: Sustainable Architecture & Biomimicry',
  explanation: 'Lectures on buildings that imitate natural processes for efficiency.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Why does the speaker mention the Eastgate Centre in Zimbabwe?`,
    options: [
      'As an example of a building that uses termite mound cooling principles',
      'To discuss the history of traditional African housing',
      'To criticize the use of glass in tropical climates',
      'To list the materials used in skyscraper construction'
    ],
    correctAnswer: 'As an example of a building that uses termite mound cooling principles',
    explanation: 'Biomimicry involves using biological systems as models for human engineering and architecture.',
    points: 2
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Aesthetic & Critical Adjectives',
  explanation: 'Words to describe artistic quality (e.g., Ethereal, Visceral, Avant-garde, Grotesque).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: `A "visceral" reaction to a piece of performance art is one that is ________.`,
    options: [
      'Deeply felt in the body rather than purely intellectual',
      'Slow and analytical in nature',
      'Primarily focused on the price of the art',
      'Related to the history of the art gallery'
    ],
    correctAnswer: 'Deeply felt in the body rather than purely intellectual',
    explanation: 'Visceral refers to an instinctive, emotional response.',
    points: 2
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'C1 Vocabulary: Architectural Components',
  explanation: 'Technical terms for structural elements (e.g., Facade, Cantilever, Cornice, Buttress).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: `A "cantilever" in modern architecture is a beam that is ________.`,
    options: [
      'Supported at only one end, allowing for overhanging structures',
      'Buried deep underground to provide stability',
      'Highly decorated with gold leaf',
      'Used only in the construction of wooden bridges'
    ],
    correctAnswer: 'Supported at only one end, allowing for overhanging structures',
    explanation: 'Cantilevers are a hallmark of modern engineering, used extensively by architects like Frank Lloyd Wright.',
    points: 2
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Participle Phrases for Concise Description',
  explanation: 'Using "-ing" and "-ed" phrases to layer detail into sentences.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: `Which sentence uses a participle phrase to describe a painting most effectively?`,
    options: [
      'Shimmering in the pale moonlight, the cathedral appeared almost transparent.',
      'The cathedral shimmered in the moonlight and it looked transparent.',
      'It was shimmering and the moonlight made the cathedral look transparent.',
      'Because it shimmered in the moonlight, the cathedral was transparent.'
    ],
    correctAnswer: 'Shimmering in the pale moonlight, the cathedral appeared almost transparent.',
    explanation: 'Participle phrases ("Shimmering...") allow for sophisticated, descriptive sentence structures.',
    points: 2
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'C1 Grammar: Adverbial Clauses of Contrast',
  explanation: 'Using "While," "Whereas," and "Much as" to compare artistic styles.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: `Choose the sentence that correctly compares two architectural styles using a contrast clause.`,
    options: [
      'Whereas Gothic architecture emphasizes verticality, Romanesque buildings are noted for their massive solidity.',
      'Gothic architecture is vertical but Romanesque is solid.',
      'Both Gothic and Romanesque architectures are very old and interesting.',
      'If Gothic architecture is vertical, then Romanesque must be solid.'
    ],
    correctAnswer: 'Whereas Gothic architecture emphasizes verticality, Romanesque buildings are noted for their massive solidity.',
    explanation: '"Whereas" is a formal subordinating conjunction ideal for high-level academic comparison.',
    points: 2
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Visual-to-Verbal Synthesis',
  explanation: 'Describing visual patterns using precise academic language.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: `When describing the "composition" of a photograph, you are referring to ________.`,
    options: [
      'The arrangement of visual elements within the frame',
      'The chemical process used to develop the film',
      'The price of the camera equipment',
      'The time of day the photo was taken'
    ],
    correctAnswer: 'The arrangement of visual elements within the frame',
    explanation: 'Composition is a key term in art history and visual analysis.',
    points: 2
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'C1 Strategy: Inferring Artistic Influence',
  explanation: 'Using historical context to guess why an artist chose a specific style.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: `If an artist in the mid-19th century chose to paint industrial chimneys, they were likely ________.`,
    options: [
      'Reflecting the profound social and environmental changes of the Industrial Revolution',
      'Interested only in the color of smoke',
      'Trying to sell the painting to a chimney sweep',
      'Running out of trees to paint'
    ],
    correctAnswer: 'Reflecting the profound social and environmental changes of the Industrial Revolution',
    explanation: 'Art history questions often require linking aesthetic choices to broader historical developments.',
    points: 2
  }))
};

export const C1_WEEK_3 = createShardedToeflUnit(
  'toefl-c1-w3',
  'Week 3: Advanced Academic Reading - Art & Architecture',
  'Analyzing Art History, Architectural Theory, and Aesthetics through a critical lens at a C1 level.',
  ['Compare Renaissance and Mannerist aesthetic priorities', 'Analyze the impact of Functionalism on modern design', 'Master technical architectural and artistic vocabulary', 'Utilize participle phrases for descriptive precision'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

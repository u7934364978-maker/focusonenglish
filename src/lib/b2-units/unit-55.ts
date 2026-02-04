import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 55;

// ============================================
// BLOCK 1: GRAMMAR - PRESENT PARTICIPLE CLAUSES
// ============================================
export const B2_U55_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Describing Traditions',
  grammarPoint: 'Present Participle Clauses',
  explanation: 'Use present participle clauses (-ing) to describe simultaneous actions or to give reasons (active voice).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      '___ (Walk) through the museum, I felt a sense of awe.',
      '___ (Realize) the importance of heritage, the town saved the site.',
      '___ (Want) to protect our culture, we started a festival.',
      '___ (Not / know) the language, he felt like an outsider.',
      '___ (Listen) to the old songs, she remembered her childhood.',
      '___ (Be) a historian, she valued every artifact.',
      '___ (Think) about the future, we must preserve the past.',
      '___ (Look) at the old photos, they saw how much had changed.',
      '___ (Try) to learn more, I visited the local archives.',
      '___ (Feel) proud of her roots, she shared her story.'
    ][i],
    correctAnswer: [
      'Walking',
      'Realizing',
      'Wanting',
      'Not knowing',
      'Listening',
      'Being',
      'Thinking',
      'Looking',
      'Trying',
      'Feeling'
    ][i],
    explanation: 'Using present participle clauses for concise descriptions and reasons.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - PAST PARTICIPLE CLAUSES
// ============================================
export const B2_U55_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Historical Artifacts',
  grammarPoint: 'Past Participle Clauses',
  explanation: 'Use past participle clauses (typically -ed) to give reasons or describe state in the passive voice.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      '___ (Build) centuries ago, the castle still stands.',
      '___ (Locate) in the city center, the monument is hard to miss.',
      '___ (Infect) by his passion, the students studied more.',
      '___ (Shock) by the news, they decided to take action.',
      '___ (Surround) by mountains, the village remained isolated.',
      '___ (Give) the chance, they would restore the temple.',
      '___ (Inspire) by the art, she started painting.',
      '___ (Known) for its beauty, the island attracts many tourists.',
      '___ (Treat) with care, the artifact will last for years.',
      '___ (Dress) in traditional clothes, they began the dance.'
    ][i],
    correctAnswer: [
      'Built',
      'Located',
      'Infected',
      'Shocked',
      'Surrounded',
      'Given',
      'Inspired',
      'Known',
      'Treated',
      'Dressed'
    ][i],
    explanation: 'Using past participle clauses for passive-style descriptions and reasons.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - HERITAGE & TRADITION
// ============================================
export const B2_U55_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Roots and Identity',
  explanation: 'Vocabulary for historical preservation, cultural identity, and legacy.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'We must preserve our cultural ___ (heritage) for future generations.',
      'The town is proud of its ___ (ancestors).',
      'They are trying to revive a ___ (dying) language.',
      'The building has great historical ___ (significance).',
      'Traditional ___ (customs) are still practiced today.',
      'He feels a strong sense of ___ (belonging) to his community.',
      'The site was declared a World ___ (Heritage) Site.',
      'They are celebrating their ___ (identity) through music.',
      'The story was passed down by word of ___ (mouth).',
      'We must protect our ___ (intangible) heritage, like stories.'
    ][i],
    correctAnswer: [
      'heritage',
      'ancestors',
      'dying',
      'significance',
      'customs',
      'belonging',
      'Heritage',
      'identity',
      'mouth',
      'intangible'
    ][i],
    explanation: 'Key terms for discussing culture, history, and personal roots.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - PRESERVATION & CHANGE
// ================= :::::::::::::::::::::::::::::
export const B2_U55_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Safeguarding the Past',
  explanation: 'Vocabulary for archeology, restoration, and the conflict between old and new.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The old church is undergoing ___ (restoration).',
      'Archeologists found ancient ___ (artifacts) at the site.',
      'The museum aims to ___ (showcase) local history.',
      'We need to strike a balance between ___ (tradition) and progress.',
      'The city is famous for its ___ (colonial) architecture.',
      'Many traditions are becoming ___ (obsolete).',
      'The project aims to ___ (safeguard) the ruins.',
      'They are documenting the ___ (oral) history of the region.',
      'The site has been ___ (vandalized) several times.',
      'We must prevent the ___ (erosion) of our culture.'
    ][i],
    options: [
      ['restoration', 'repair', 'new-build'],
      ['artifacts', 'tools', 'things'],
      ['showcase', 'hide', 'sell'],
      ['tradition', 'old-stuff', 'past'],
      ['colonial', 'modern', 'new'],
      ['obsolete', 'useful', 'popular'],
      ['safeguard', 'break', 'lose'],
      ['oral', 'written', 'silent'],
      ['vandalized', 'cleaned', 'fixed'],
      ['erosion', 'growth', 'gain']
    ][i],
    correctAnswer: [
      'restoration',
      'artifacts',
      'showcase',
      'tradition',
      'colonial',
      'obsolete',
      'safeguard',
      'oral',
      'vandalized',
      'erosion'
    ][i],
    explanation: 'Specialized vocabulary for the field of heritage and conservation.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U55_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Cultural Legacy',
  explanation: 'Form nouns, adjectives, and verbs related to culture and history.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (PRESERVE) of the site is essential.',
      'He is a very ___ (KNOWLEDGE) guide.',
      'The festival is a ___ (CELEBRATE) of local life.',
      'The building is ___ (HISTORICALLY) important.',
      'We must respect our ___ (CULTURE) differences.',
      'The ___ (IDENTITY) of the artist is unknown.',
      'The artifacts were ___ (ORIGIN) found in Egypt.',
      'The museum is very ___ (INSTRUCTIVE).',
      'She has a deep ___ (APPRECIATE) for ancient art.',
      'The ___ (RESTORE) took over three years.'
    ][i],
    correctAnswer: [
      'preservation',
      'knowledgeable',
      'celebration',
      'historically',
      'cultural',
      'identity',
      'originally',
      'instructive',
      'appreciation',
      'restoration'
    ][i],
    explanation: 'Transforming root words into terms describing historical and cultural value.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE CHALLENGE OF GLOBALIZATION
// ============================================
export const B2_U55_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Global Culture vs Local Identity',
  explanation: 'Read an essay about how globalization impacts local traditions and cultural diversity.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is one negative effect of globalization mentioned in the text?' : 'How can technology help preserve culture?',
    options: [['The homogenization of culture', 'An increase in diversity', 'Better food for everyone'], ['By documenting and sharing traditions online', 'By replacing people with robots', 'It can\'t help']][i % 2],
    correctAnswer: i < 5 ? 'The homogenization of culture' : 'By documenting and sharing traditions online',
    explanation: 'Critical analysis of cultural shifts in the modern world.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - VOICES FROM THE PAST
// ============================================
export const B2_U55_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: The Importance of Oral Traditions',
  explanation: 'Listen to a talk about how stories and legends shape our collective memory.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the main role of storytelling in many cultures?`,
    options: ['To pass down values and history', 'To entertain children only', 'To make money', 'To confuse outsiders'],
    correctAnswer: 'To pass down values and history',
    explanation: 'Listening for cultural significance and the power of narrative.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - DESCRIPTIVE ESSAYS
// ================= :::::::::::::::::::::::::::::
export const B2_U55_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Vivid Historical Descriptions',
  explanation: 'Learn how to use participle clauses to make your descriptions more evocative.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'Instead of "The museum was built in 1900. It houses...", use:',
      'Instead of "I walked through the streets and I saw...", use:',
      'Instead of "Because he was a local, he knew...", use:',
      'Instead of "The ruins were hidden by trees. They were...", use:',
      'To add impact to an opening sentence:',
      'To link two simultaneous actions:',
      'To provide a reason concisely:',
      'To describe a state after a long process:',
      'To introduce a surprising fact:',
      'To conclude with a thought-provoking image:'
    ][i],
    options: [
      ['Built in 1900, the museum houses...', 'The museum was built in 1900 and it houses...', 'It was built in 1900.'],
      ['Walking through the streets, I saw...', 'I walked and I saw...', 'While I was walking, I saw...'],
      ['Being a local, he knew...', 'As he was a local...', 'He was a local so he knew...'],
      ['Hidden by trees, the ruins were...', 'The trees hid the ruins...', 'Because of the trees, the ruins were...'],
      ['Standing on the ancient bridge, one can feel...', 'If you stand there...', 'You can feel...'],
      ['Laughing and talking, they shared stories.', 'They laughed and they talked.', 'While they laughed...'],
      ['Inspired by her past, she wrote a book.', 'She was inspired so she wrote...', 'Her past inspired her.'],
      ['Having been restored, the painting looks new.', 'After it was restored...', 'It was restored and now...'],
      ['Discovered by accident, the tomb was full of gold.', 'They found it by accident.', 'It was a surprise.'],
      ['Looking back, we can see the value of our roots.', 'If we look back...', 'We see the value.']
    ][i],
    correctAnswer: [
      'Built in 1900, the museum houses...',
      'Walking through the streets, I saw...',
      'Being a local, he knew...',
      'Hidden by trees, the ruins were...',
      'Standing on the ancient bridge, one can feel...',
      'Laughing and talking, they shared stories.',
      'Inspired by her past, she wrote a book.',
      'Having been restored, the painting looks new.',
      'Discovered by accident, the tomb was full of gold.',
      'Looking back, we can see the value of our roots.'
    ][i],
    explanation: 'Using participle clauses for stylistic variety and descriptive power.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - TELLING TALES
// ================= ::::::::::::::::::::::::::::::
export const B2_U55_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Passing on the Legacy',
  explanation: 'How to use participle clauses naturally in storytelling and conversation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you start a story about a family tradition?`,
    options: ['Growing up in a small village, I always remember...', 'I grew up in a village and I remember...', 'When I was a kid...', 'A long time ago...'],
    correctAnswer: 'Growing up in a small village, I always remember...',
    explanation: 'Setting the scene with sophisticated narrative structures.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U55_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 55',
  explanation: 'Consolidation of Participle Clauses and Heritage Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? '___ (Being/Been) a history lover, I visited all the sites.' : 'We must preserve our ___ (heritage/legacy) for the future.',
    options: i < 5 ? ['Being', 'Been', 'Is'] : ['heritage', 'legacy', 'stuff'],
    correctAnswer: i < 5 ? 'Being' : 'heritage',
    explanation: 'Final check of key concepts from Unit 55.',
    points: 1
  }))
};

export const B2_UNIT_55 = createB2Unit(
  'b2-u55',
  'Cultural Heritage & Identity',
  'Explore the threads that connect us to our past while mastering participle clauses to create vivid, sophisticated descriptions of history and tradition.',
  ['Use present and past participle clauses accurately for style and concision', 'Acquire vocabulary for heritage preservation, ancestry, and cultural identity', 'Write evocative descriptions and narrate cultural stories with flair'],
  [
    B2_U55_BLOCK1, B2_U55_BLOCK2, B2_U55_BLOCK3, B2_U55_BLOCK4, B2_U55_BLOCK5,
    B2_U55_BLOCK6, B2_U55_BLOCK7, B2_U55_BLOCK8, B2_U55_BLOCK9, B2_U55_BLOCK10
  ]
);

import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 37;

// ============================================
// BLOCK 1: GRAMMAR - INVERSION IN HISTORICAL CONTEXTS
// ============================================
export const B2_U37_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Inversion: Emphatic Historical Descriptions',
  grammarPoint: 'Inversion',
  explanation: 'Use inversion after negative or limiting adverbials (Never, Seldom, Little) to create a dramatic tone.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      '___ had I seen such a well-preserved ancient city.',
      '___ did the explorers realize the importance of their find.',
      '___ does history repeat itself so clearly.',
      '___ have we witnessed such a significant cultural shift.',
      '___ will the world forget the events of that day.',
      '___ before had such a discovery been made.',
      '___ did he imagine that his invention would change history.',
      '___ had they reached the summit when the storm began.',
      '___ had the news spread when the people started celebrating.',
      '___ can we ignore the lessons of the past.'
    ][i],
    options: [
      ['Never before', 'Never I had', 'Never was'],
      ['Little', 'Small', 'Few'],
      ['Rarely', 'Seldom', 'Never'],
      ['Seldom', 'Rarely', 'Little'],
      ['Never', 'Seldom', 'Rarely'],
      ['Never before', 'Rarely before', 'Little before'],
      ['Little', 'Few', 'Small'],
      ['Hardly', 'Scarcely', 'Never'],
      ['No sooner', 'Scarcely', 'Hardly'],
      ['Under no circumstances', 'Never', 'Rarely']
    ][i],
    correctAnswer: [
      'Never before',
      'Little',
      'Seldom',
      'Rarely',
      'Never',
      'Never before',
      'Little',
      'Hardly',
      'No sooner',
      'Under no circumstances'
    ][i],
    explanation: 'Using inversion for dramatic effect in historical narratives.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - INVERSION WITH ONLY & NOT UNTIL
// ============================================
export const B2_U37_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Inversion: Only then and Not until',
  grammarPoint: 'Inversion',
  explanation: 'Use inversion after "Only then", "Only later", and "Not until" when they begin a sentence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'Only then ___ (do) they realize the treasure was real.',
      'Not until the 20th century ___ (be) the site discovered.',
      'Only later ___ (did) the full extent of the damage become clear.',
      'Not until he died ___ (was) his work recognized.',
      'Only recently ___ (have) historians begun to study this.',
      'Not until the war ended ___ (did) people return home.',
      'Only when the treaty was signed ___ (was) there peace.',
      'Only through hard work ___ (could) they rebuild the city.',
      'Not until she spoke ___ (did) I recognize her voice.',
      'Only after many years ___ (did) the truth come out.'
    ][i],
    correctAnswer: [
      'did',
      'was',
      'did',
      'was',
      'have',
      'did',
      'was',
      'could',
      'did',
      'did'
    ][i],
    explanation: 'Maintaining subject-auxiliary inversion after restrictive adverbial phrases.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - ANCIENT CIVILIZATIONS
// ============================================
export const B2_U37_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Legacy of the Past',
  explanation: 'Terms for archaeology, ancient cultures, and heritage.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The city was built by an ancient ___ (civilization).',
      'The archaeologists found many interesting ___ (artifacts).',
      'They are excavating the ___ (ruins) of a Roman temple.',
      'The site has been declared a UNESCO World ___ (Heritage) site.',
      'The king’s ___ (legacy) lived on for centuries.',
      'They are trying to ___ (preserve) the old manuscripts.',
      'The ___ (dynasty) ruled the country for three hundred years.',
      'The monument was built to ___ (commemorate) the victory.',
      'The inscriptions are written in ancient ___ (hieroglyphs).',
      'This area is of great ___ (historical) importance.'
    ][i],
    correctAnswer: [
      'civilization',
      'artifacts',
      'ruins',
      'Heritage',
      'legacy',
      'preserve',
      'dynasty',
      'commemorate',
      'hieroglyphs',
      'historical'
    ][i],
    explanation: 'Core vocabulary for discussing historical and archaeological topics.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - HISTORICAL FIGURES & EVENTS
// ============================================
export const B2_U37_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Milestones of History',
  explanation: 'Terms for describing significant people and moments in time.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The revolution marked a ___ (turning) point in history.',
      'He was a very ___ (influential) leader of his time.',
      'The treaty brought an end to the ___ (conflict).',
      'They are celebrating the ___ (centenary) of the city.',
      'The document is a primary ___ (source) for historians.',
      'His ___ (reign) was characterized by peace and prosperity.',
      'The ___ (uprising) was quickly suppressed by the army.',
      'This event had a profound ___ (impact) on society.',
      'She is a ___ (pioneer) in the field of science.',
      'The museum has an impressive ___ (collection) of armor.'
    ][i],
    options: [
      ['turning', 'change', 'new'],
      ['influential', 'powerful', 'big'],
      ['conflict', 'war', 'fight'],
      ['centenary', 'anniversary', 'birthday'],
      ['source', 'book', 'paper'],
      ['reign', 'time', 'rule'],
      ['uprising', 'fight', 'war'],
      ['impact', 'effect', 'result'],
      ['pioneer', 'leader', 'first'],
      ['collection', 'group', 'set']
    ][i],
    correctAnswer: [
      'turning',
      'influential',
      'conflict',
      'centenary',
      'source',
      'reign',
      'uprising',
      'impact',
      'pioneer',
      'collection'
    ][i],
    explanation: 'Vocabulary for describing the influence and scale of historical events.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (HERITAGE)
// ============================================
export const B2_U37_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: History and Memory',
  explanation: 'Form words related to time, memory, and heritage.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (DESTROY) of the library was a loss to humanity.',
      'He is a world-renowned ___ (HISTORY).',
      'The ___ (DISCOVER) of fire changed everything.',
      'We must ensure the ___ (PRESERVE) of these sites.',
      'The ___ (IMPORTANCE) of the event cannot be overstated.',
      'It was a highly ___ (SIGNIFY) moment.',
      'The ___ (CIVILIZE) of the Maya was advanced.',
      'The ___ (RECONSTRUCT) of the castle took ten years.',
      'His ___ (LEAD) was vital during the crisis.',
      'The ___ (TRADITION) customs are still practiced today.'
    ][i],
    correctAnswer: [
      'destruction',
      'historian',
      'discovery',
      'preservation',
      'importance',
      'significant',
      'civilization',
      'reconstruction',
      'leadership',
      'traditional'
    ][i],
    explanation: 'Applying word formation rules to historical and preservation topics.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE RIDDLE OF THE SPHINX
// ============================================
export const B2_U37_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Wonders of the Ancient World',
  explanation: 'Read about the mystery of the Great Sphinx and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is one of the main debates regarding the Sphinx?' : 'How do scientists study the Sphinx today?',
    options: [['The exact date of its construction', 'What it was made of', 'Who found it'], ['Using advanced imaging and non-invasive techniques', 'By digging it up', 'By guessing']][i % 2],
    correctAnswer: i < 5 ? 'The exact date of its construction' : 'Using advanced imaging and non-invasive techniques',
    explanation: 'Analyzing archaeological debates and modern research methods.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - A TOUR OF MACHU PICCHU
// ============================================
export const B2_U37_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: The City in the Clouds',
  explanation: 'Listen to a guide explaining the architectural wonders of Machu Picchu.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the most impressive feature of Incan stonework?`,
    options: ['The stones fit together without mortar', 'The stones are painted', 'The stones are very small', 'The stones are imported from Europe'],
    correctAnswer: 'The stones fit together without mortar',
    explanation: 'Listening for technical historical details and unique features.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - HISTORICAL ESSAYS
// ============================================
export const B2_U37_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Formulating a Historical Argument',
  explanation: 'Identify the most professional way to write about historical events.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce a historical debate:',
      'To use an emphatic inversion for a discovery:',
      'To link cause and effect in history:',
      'To introduce a primary source:',
      'To summarize a leader\'s impact:',
      'To contrast two historical periods:',
      'To describe a heritage site formally:',
      'To conclude with a thought on legacy:',
      'To use academic vocabulary for "change":',
      'To refer to the "zeitgeist" or spirit of the time:'
    ][i],
    options: [
      ['Historians have long debated the causes of...', 'People think about...', 'Was it good or bad?'],
      ['Only later did the significance of the find become apparent.', 'We found it and liked it.', 'It was big later.'],
      ['This event served as a catalyst for...', 'Then this happened.', 'It made this happen.'],
      ['Contemporary accounts suggest that...', 'The old book says...', 'Someone said...'],
      ['His legacy continues to resonate in modern...', 'He is still famous.', 'People remember him.'],
      ['Unlike the previous era, this period saw...', 'Before it was X, now Y.', 'They are different.'],
      ['The site is a testament to the ingenuity of...', 'The place shows they were smart.', 'A nice monument.'],
      ['In the final analysis, the impact of X was...', 'Lastly...', 'Final thought.'],
      ['The transition from X to Y was...', 'The move...', 'The change...'],
      ['The prevailing mood of the era was...', 'People felt like...', 'The vibe...']
    ][i],
    correctAnswer: [
      'Historians have long debated the causes of...',
      'Only later did the significance of the find become apparent.',
      'This event served as a catalyst for...',
      'Contemporary accounts suggest that...',
      'His legacy continues to resonate in modern...',
      'Unlike the previous era, this period saw...',
      'The site is a testament to the ingenuity of...',
      'In the final analysis, the impact of X was...',
      'The transition from X to Y was...',
      'The prevailing mood of the era was...'
    ][i],
    explanation: 'Using appropriate academic and formal register for historical analysis.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - TELLING A STORY FROM THE PAST
// ============================================
export const B2_U37_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Dramatic Storytelling',
  explanation: 'Learn how to use inversion naturally to emphasize key moments in a story.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally emphasize that you were very surprised?`,
    options: ['Little did I know that everything was about to change.', 'I was surprised.', 'I didn\'t know.', 'Surprise!'],
    correctAnswer: 'Little did I know that everything was about to change.',
    explanation: 'Using "Little did I know" as a natural emphatic structure in speech.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U37_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 37',
  explanation: 'Consolidation of Inversion and Historical Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? '___ (Never/Seldom) had the empire been so strong.' : 'Only then ___ (did/were) they realize their mistake.',
    options: i < 5 ? ['Never', 'Seldom', 'Rarely'] : ['did', 'were', 'had'],
    correctAnswer: i < 5 ? 'Never' : 'did',
    explanation: 'Verifying the mastery of emphatic inversion in context.',
    points: 1
  }))
};

export const B2_UNIT_37 = createB2Unit(
  'b2-u37',
  'Historical Events & Heritage',
  'Master the use of formal emphasis while exploring the significant events and heritage that shaped our world.',
  ['Use inversion for emphatic and dramatic effect in narratives', 'Apply "Only then" and "Not until" structures correctly', 'Understand key vocabulary for ancient civilizations, archaeology, and historical analysis'],
  [
    B2_U37_BLOCK1, B2_U37_BLOCK2, B2_U37_BLOCK3, B2_U37_BLOCK4, B2_U37_BLOCK5,
    B2_U37_BLOCK6, B2_U37_BLOCK7, B2_U37_BLOCK8, B2_U37_BLOCK9, B2_U37_BLOCK10
  ]
);

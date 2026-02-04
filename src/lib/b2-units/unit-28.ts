import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 28;

// ============================================
// BLOCK 1: GRAMMAR - RELATIVE PRONOUNS WITH PREPOSITIONS (WHICH)
// ============================================
export const B2_U28_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Relative Clauses: Preposition + Which',
  grammarPoint: 'Relative Clauses',
  explanation: 'In formal English, prepositions come before "which" (in which, through which, by which).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'The forest ___ which they live is protected.',
      'The process ___ which they reproduce is complex.',
      'The method ___ which we save water is simple.',
      'The ecosystem ___ which we depend is fragile.',
      'The speed ___ which species go extinct is alarming.',
      'The conditions ___ which they survive are harsh.',
      'The area ___ which the lions hunt is vast.',
      'The way ___ which we treat nature must change.',
      'The scale ___ which the damage occurs is huge.',
      'The degree ___ which we are responsible is high.'
    ][i],
    options: [
      ['in', 'on', 'at'],
      ['by', 'with', 'through'],
      ['by', 'on', 'for'],
      ['on', 'of', 'in'],
      ['at', 'on', 'with'],
      ['under', 'on', 'with'],
      ['in', 'on', 'at'],
      ['in', 'on', 'at'],
      ['at', 'on', 'with'],
      ['to', 'on', 'with']
    ][i],
    correctAnswer: [
      'in',
      'by',
      'by',
      'on',
      'at',
      'under',
      'in',
      'in',
      'at',
      'to'
    ][i],
    explanation: 'Matching the correct preposition to the context in formal relative clauses.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - RELATIVE PRONOUNS WITH PREPOSITIONS (WHOM)
// ============================================
export const B2_U28_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Relative Clauses: Preposition + Whom',
  grammarPoint: 'Relative Clauses',
  explanation: 'Use "whom" instead of "who" after a preposition when referring to people in formal English.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'The scientists with ___ (whom) we worked were experts.',
      'The people for ___ (whom) the park was built are local.',
      'The explorer about ___ (whom) we read was brave.',
      'The leader to ___ (whom) they spoke was helpful.',
      'The activist by ___ (whom) the speech was given is young.',
      'The students of ___ (whom) many are volunteers are busy.',
      'The family with ___ (whom) she stayed was kind.',
      'The person against ___ (whom) they protested resigned.',
      'The donor from ___ (whom) the money came is anonymous.',
      'The victims for ___ (whom) we are raising funds need help.'
    ][i],
    correctAnswer: 'whom',
    explanation: 'Using "whom" correctly after prepositions in formal contexts.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - BIODIVERSITY & WILDLIFE
// ============================================
export const B2_U28_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Wildlife and Habitats',
  explanation: 'Advanced vocabulary for describing the natural world.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The destruction of the natural ___ (habitat) is a major threat.',
      'Many species are on the brink of ___ (extinction).',
      'We must preserve the ___ (biodiversity) of the rainforest.',
      'The animal is now classified as an ___ (endangered) species.',
      'They are working to restore the degraded ___ (ecosystem).',
      'The park provides a safe ___ (sanctuary) for birds.',
      'Climate change is disrupting the ___ (food) chain.',
      'Poaching is a serious threat to ___ (wildlife).',
      'The plants are ___ (native) to this region.',
      'Pollution has a ___ (detrimental) effect on the environment.'
    ][i],
    correctAnswer: [
      'habitat',
      'extinction',
      'biodiversity',
      'endangered',
      'ecosystem',
      'sanctuary',
      'food',
      'wildlife',
      'native',
      'detrimental'
    ][i],
    explanation: 'Core terms for environmental conservation.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - CONSERVATION & ACTION
// ============================================
export const B2_U28_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Conservation Efforts',
  explanation: 'Terms for protecting nature and sustainable living.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'We need to promote ___ (sustainable) development.',
      'They are trying to ___ (reforest) the area.',
      'The goal is to ___ (conserve) natural resources.',
      'Carbon ___ (footprint) is a measure of impact.',
      'The project focuses on ___ (renewable) energy.',
      'Waste ___ (management) is a global challenge.',
      'They use ___ (organic) farming methods.',
      'The ___ (legislation) aims to reduce pollution.',
      'Public ___ (awareness) is increasing.',
      'We must ___ (mitigate) the effects of climate change.'
    ][i],
    options: [
      ['sustainable', 'renewable', 'durable'],
      ['reforest', 'replant', 'regrow'],
      ['conserve', 'keep', 'save'],
      ['footprint', 'mark', 'trace'],
      ['renewable', 'new', 'clean'],
      ['management', 'control', 'handling'],
      ['organic', 'natural', 'green'],
      ['legislation', 'law', 'rule'],
      ['awareness', 'knowledge', 'feeling'],
      ['mitigate', 'lessen', 'reduce']
    ][i],
    correctAnswer: [
      'sustainable',
      'reforest',
      'conserve',
      'footprint',
      'renewable',
      'management',
      'organic',
      'legislation',
      'awareness',
      'mitigate'
    ][i],
    explanation: 'Vocabulary for environmental solutions and policies.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (ENVIRONMENT)
// ============================================
export const B2_U28_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Nature & Science',
  explanation: 'Form words related to biology and conservation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (DESTROY) of the Amazon is a tragedy.',
      'We need to increase ___ (AWARE) of the problem.',
      'It was an ___ (ENVIRONMENT) friendly choice.',
      'The ___ (PROTECT) of wildlife is essential.',
      'The ___ (BIOLOGY) diversity is incredible.',
      'This species is ___ (CRITICAL) endangered.',
      'The ___ (SOLVE) must be global.',
      'We need more ___ (SUSTAIN) in our lifestyles.',
      'The ___ (POLLUTE) of the rivers is rising.',
      'She is an expert in ___ (CONSERVE) biology.'
    ][i],
    correctAnswer: [
      'destruction',
      'awareness',
      'environmentally',
      'protection',
      'biological',
      'critically',
      'solution',
      'sustainability',
      'pollution',
      'conservation'
    ][i],
    explanation: 'Standard word formation for technical environmental topics.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE GREAT BARRIER REEF
// ============================================
export const B2_U28_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: A Dying Wonder?',
  explanation: 'Read about the threats to the Great Barrier Reef and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is "coral bleaching" caused by?' : 'Why is the reef important for the ocean?',
    options: [['rising water temperatures', 'too much fishing', 'pollution'], ['It supports thousands of species', 'It provides sand for beaches', 'It is a tourist spot']][i % 2],
    correctAnswer: i < 5 ? 'rising water temperatures' : 'It supports thousands of species',
    explanation: 'Understanding scientific cause and effect in reading.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - REWILDING PROJECTS
// ============================================
export const B2_U28_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Bringing Back the Wolves',
  explanation: 'Listen to a report on rewilding efforts in Europe.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What was the main benefit of reintroducing wolves?`,
    options: ['Increased biodiversity in plants and animals', 'More tourism', 'Fewer deer in the city', 'Better weather'],
    correctAnswer: 'Increased biodiversity in plants and animals',
    explanation: 'Listening for ecological connections and benefits.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - SCIENTIFIC REPORTS
// ============================================
export const B2_U28_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Formal Scientific Descriptions',
  explanation: 'Identify the most professional way to describe ecological data.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce a research finding:',
      'To describe a habitat formally:',
      'To use a complex relative clause:',
      'To present a worrying statistic:',
      'To suggest a conservation measure:',
      'To define a term precisely:',
      'To link cause and effect:',
      'To summarize the importance:',
      'To call for further research:',
      'To state a clear conclusion:'
    ][i],
    options: [
      ['Evidence suggests that...', 'I think...', 'People say.'],
      ['The ecosystem in which these species thrive...', 'The place they live...', 'A good spot...'],
      ['The method by which data was collected...', 'The way we did it...', 'How it went...'],
      ['Data indicates a significant decline in...', 'It is going down.', 'Less animals.'],
      ['It is imperative that we implement...', 'We should do...', 'Let\'s try...'],
      ['Biodiversity can be defined as...', 'It means...', 'Nature is...'],
      ['This leads to a chain reaction where...', 'Then this happens.', 'Because of that...'],
      ['In conclusion, the preservation of...', 'Lastly...', 'Finally...'],
      ['Further investigation is required to...', 'Check more.', 'Look again.'],
      ['The results confirm that...', 'We are right.', 'Yes.']
    ][i],
    correctAnswer: [
      'Evidence suggests that...',
      'The ecosystem in which these species thrive...',
      'The method by which data was collected...',
      'Data indicates a significant decline in...',
      'It is imperative that we implement...',
      'Biodiversity can be defined as...',
      'This leads to a chain reaction where...',
      'In conclusion, the preservation of...',
      'Further investigation is required to...',
      'The results confirm that...'
    ][i],
    explanation: 'Using academic and scientific register in writing.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - PRESENTING ON NATURE
// ============================================
export const B2_U28_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Explaining Complex Processes',
  explanation: 'Learn how to use "which" and "whom" naturally in a presentation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you formally refer to the team you worked with in a speech?`,
    options: ['The team with whom I collaborated...', 'The team I worked with...', 'My coworkers...', 'The people...'],
    correctAnswer: 'The team with whom I collaborated...',
    explanation: 'Maintaining a formal register in spoken presentations.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U28_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 28',
  explanation: 'Consolidation of Advanced Relative Clauses and Environmental Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'The conditions ___ which they live are harsh.' : 'The person to ___ I spoke was helpful.',
    options: i < 5 ? ['under', 'in', 'on'] : ['whom', 'who', 'which'],
    correctAnswer: i < 5 ? 'under' : 'whom',
    explanation: 'Verifying mastery of prepositional relative clauses.',
    points: 1
  }))
};

export const B2_UNIT_28 = createB2Unit(
  'b2-u28',
  'Biodiversity & Conservation',
  'Master formal descriptions of the natural world using advanced relative clauses and environmental terminology.',
  ['Use relative pronouns with prepositions for formal descriptions', 'Discuss biodiversity, conservation, and sustainability', 'Analyze scientific and academic registers in writing'],
  [
    B2_U28_BLOCK1, B2_U28_BLOCK2, B2_U28_BLOCK3, B2_U28_BLOCK4, B2_U28_BLOCK5,
    B2_U28_BLOCK6, B2_U28_BLOCK7, B2_U28_BLOCK8, B2_U28_BLOCK9, B2_U28_BLOCK10
  ]
);

import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 40;

// ============================================
// BLOCK 1: GRAMMAR REVIEW - PASSIVES & CAUSATIVES
// ============================================
export const B2_U40_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Grammar Review: Passive & Causative',
  grammarPoint: 'Passive Voice',
  explanation: 'Consolidating the use of Passive and Causative (have/get something done) structures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The ancient ruins ___ (be/discover) in 1912.',
      'We need to have our passports ___ (renew) before the trip.',
      'The stadium ___ (build) for the next Olympic Games.',
      'He had his bike ___ (repair) after the accident.',
      'The book is believed ___ (write) by a local author.',
      'I will get my hair ___ (cut) tomorrow.',
      'New safety measures ___ (be/implement) last month.',
      'The suspect is thought ___ (leave) the country.',
      'They had their house ___ (paint) during the summer.',
      'The results ___ (be/announce) later today.'
    ][i],
    correctAnswer: [
      'were discovered',
      'renewed',
      'is being built',
      'repaired',
      'to have been written',
      'cut',
      'were implemented',
      'to have left',
      'painted',
      'will be announced'
    ][i],
    explanation: 'Testing passive forms and causative structures.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR REVIEW - MODALS & INVERSION
// ============================================
export const B2_U40_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Grammar Review: Modals & Inversion',
  grammarPoint: 'Modal Deduction',
  explanation: 'Reviewing Modals of Deduction (past/present) and Inversion after negative adverbials.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'He ___ have been there; he was with me all day.',
      'Never ___ I seen such a beautiful landscape.',
      'She ___ have forgotten about the meeting.',
      'Only after the rain ___ we start the match.',
      'They ___ be exhausted after that long trek.',
      'Hardly ___ we reached the peak when it started snowing.',
      'You ___ have told me you were coming!',
      'Under no circumstances ___ you open that door.',
      'It ___ have been John; he doesn\'t play tennis.',
      'Not only ___ he win the race, but he also set a record.'
    ][i],
    options: [
      ['can\'t', 'must', 'should'],
      ['have', 'did', 'am'],
      ['might', 'must to', 'should to'],
      ['did', 'have', 'were'],
      ['must', 'can', 'should'],
      ['had', 'did', 'have'],
      ['should', 'must', 'could'],
      ['should', 'are', 'must'],
      ['can\'t', 'must', 'should'],
      ['did', 'has', 'was']
    ][i],
    correctAnswer: [
      'can\'t',
      'have',
      'might',
      'did',
      'must',
      'had',
      'should',
      'should',
      'can\'t',
      'did'
    ][i],
    explanation: 'Differentiating between modals of deduction and correctly applying inversion rules.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY REVIEW - TRAVEL & GEOGRAPHY
// ============================================
export const B2_U40_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Vocabulary: Travel & Geography',
  explanation: 'Reviewing travel types, geographical features, and navigation terms.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (scenery) in the Alps is breathtaking.',
      'We chose a ___ (self-catering) apartment for our holiday.',
      'The river flows through a deep ___ (canyon).',
      'We went on a guided ___ (tour) of the historic center.',
      'The island is located in the ___ (archipelago).',
      'We stayed in a ___ (remote) village in the mountains.',
      'The flight was delayed due to ___ (technical) issues.',
      'She is a seasoned ___ (traveler) who has visited 50 countries.',
      'The hotel offers a ___ (panoramic) view of the bay.',
      'We need to buy some local ___ (currency).'
    ][i],
    correctAnswer: [
      'scenery',
      'self-catering',
      'canyon',
      'tour',
      'archipelago',
      'remote',
      'technical',
      'traveler',
      'panoramic',
      'currency'
    ][i],
    explanation: 'Recalling key vocabulary from travel-focused units.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY REVIEW - LIFESTYLE & CULTURE
// ============================================
export const B2_U40_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Vocabulary: Culture & Lifestyle',
  explanation: 'Reviewing vocabulary for the arts, gastronomy, and urban life.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The play received rave ___ (reviews).',
      'The chef uses only ___ (locally) sourced ingredients.',
      'Living in a city is very ___ (fast-paced).',
      'The museum has a large collection of ___ (masterpieces).',
      'We enjoyed a ___ (three-course) meal at the restaurant.',
      'The city is known for its ___ (vibrant) nightlife.',
      'She is an ___ (aspiring) young artist.',
      'The dish was quite ___ (spicy) but delicious.',
      'The neighborhood is undergoing ___ (gentrification).',
      'The exhibition showcases ___ (contemporary) art.'
    ][i],
    options: [
      ['reviews', 'views', 'news'],
      ['locally', 'local', 'locations'],
      ['fast-paced', 'quick-step', 'high-speed'],
      ['masterpieces', 'best-works', 'big-arts'],
      ['three-course', 'three-plate', 'three-dish'],
      ['vibrant', 'loud', 'busy'],
      ['aspiring', 'inspiring', 'expiring'],
      ['spicy', 'hotly', 'pepper'],
      ['gentrification', 'building', 'cleaning'],
      ['contemporary', 'modernist', 'newly']
    ][i],
    correctAnswer: [
      'reviews',
      'locally',
      'fast-paced',
      'masterpieces',
      'three-course',
      'vibrant',
      'aspiring',
      'spicy',
      'gentrification',
      'contemporary'
    ][i],
    explanation: 'Testing vocabulary for describing cultural and lifestyle experiences.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - TRANSFORMATIONS
// ============================================
export const B2_U40_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Sentence Transformations',
  explanation: 'Rephrasing sentences using target structures (Passives, Inversion, Conditionals).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'People say he is a genius. -> He ___ to be a genius.',
      'I haven\'t seen such a mess ever. -> Never ___ such a mess.',
      'The mechanic fixed her car. -> She ___ fixed by the mechanic.',
      'If I don\'t go, I\'ll regret it. -> Unless ___, I\'ll regret it.',
      'They are repairing the bridge. -> The bridge ___ repaired.',
      'I\'m sure he was at home. -> He ___ at home.',
      'As the weather gets warmer, I feel better. -> The warmer ___, the better I feel.',
      'He won the prize and a trip. -> Not only ___ the prize, but also a trip.',
      'The film was so boring that I left. -> So ___ that I left.',
      'I wish I had more time. -> If only ___ more time.'
    ][i],
    correctAnswer: [
      'is said',
      'have I seen',
      'had her car',
      'I go',
      'is being',
      'must have been',
      'the weather gets',
      'did he win',
      'boring was the film',
      'I had'
    ][i],
    explanation: 'Practicing key B2 transformations for advanced grammar.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - GLOBAL TRENDS
// ============================================
export const B2_U40_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The Evolution of Modern Travel',
  explanation: 'Read about how travel habits have changed and answer questions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: `What is the primary cause of 'overtourism' according to the text?`,
    options: ['Social media and cheap flights', 'Lack of interest in history', 'Better maps'],
    correctAnswer: 'Social media and cheap flights',
    explanation: 'Understanding complex themes in a B2 level text.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - AN INTERVIEW WITH A PHOTOGRAPHER
// ============================================
export const B2_U40_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Capturing the World',
  explanation: 'Listen to an interview with a travel photographer about his experiences.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What advice does the photographer give to amateurs?`,
    options: ['Focus on the people, not just the landscapes', 'Buy the most expensive camera', 'Only travel to famous places'],
    correctAnswer: 'Focus on the people, not just the landscapes',
    explanation: 'Listening for main ideas and specific advice.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - FORMAL VS INFORMAL
// ============================================
export const B2_U40_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Register and Style',
  explanation: 'Choosing the correct tone for different writing tasks.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'Formal way to start a letter of complaint:',
      'Informal way to suggest an idea:',
      'Formal way to conclude a report:',
      'Appropriate greeting for a friend:',
      'Formal way to express regret:',
      'Informal way to say "goodbye":',
      'Formal way to ask for information:',
      'Informal way to show excitement:',
      'Formal way to state an opinion:',
      'Informal way to apologize:'
    ][i],
    options: [
      ['Dear Sir or Madam,', 'Hey there,', 'To whom it may concern,'],
      ['Why don\'t we...?', 'I would like to propose...', 'It is recommended that...'],
      ['In conclusion, it is evident that...', 'So, that\'s it.', 'Finally, bye.'],
      ['Hi [Name],', 'Dear Sir,', 'To [Name],'],
      ['I regret to inform you...', 'Sorry but...', 'Oops, my bad.'],
      ['Take care,', 'Yours faithfully,', 'Respectfully,'],
      ['I would be grateful if you could provide...', 'Can you tell me...?', 'Give me info.'],
      ['I can\'t wait!', 'I am looking forward to...', 'It will be pleasant.'],
      ['It is my firm belief that...', 'I think...', 'I guess...'],
      ['Sorry about that!', 'I sincerely apologize for...', 'My regrets.']
    ][i],
    correctAnswer: [
      'Dear Sir or Madam,',
      'Why don\'t we...?',
      'In conclusion, it is evident that...',
      'Hi [Name],',
      'I regret to inform you...',
      'Take care,',
      'I would be grateful if you could provide...',
      'I can\'t wait!',
      'It is my firm belief that...',
      'Sorry about that!'
    ][i],
    explanation: 'Mastering the difference between formal and informal registers in writing.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - SUMMARIZING AND EVALUATING
// ============================================
export const B2_U40_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Evaluating and Summarizing',
  explanation: 'Using appropriate phrases to weigh options and conclude a discussion.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `Which phrase is best for starting a conclusion?`,
    options: ['To sum up,', 'First of all,', 'On the other hand,'],
    correctAnswer: 'To sum up,',
    explanation: 'Using linking words to structure a coherent spoken response.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MODULE 4 GRAND FINAL
// ============================================
export const B2_U40_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Module 4 Grand Review',
  explanation: 'Final check of all major structures from Module 4.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'The ___ (richer/more rich) the person, the more they spend.' : 'She is believed ___ (to have traveled/traveling) across Asia.',
    options: i < 5 ? ['richer', 'more rich', 'richly'] : ['to have traveled', 'traveling', 'traveled'],
    correctAnswer: i < 5 ? 'richer' : 'to have traveled',
    explanation: 'Verifying advanced comparative and passive structures.',
    points: 1
  }))
};

export const B2_UNIT_40 = createB2Unit(
  'b2-u40',
  'Module 4 Review',
  'A comprehensive review of the grammar and vocabulary covered in units 31 to 39, consolidating your knowledge of culture, lifestyle, and travel.',
  ['Consolidate passive and causative structures', 'Master inversion and modals of deduction', 'Review vocabulary for arts, gastronomy, and adventure'],
  [
    B2_U40_BLOCK1, B2_U40_BLOCK2, B2_U40_BLOCK3, B2_U40_BLOCK4, B2_U40_BLOCK5,
    B2_U40_BLOCK6, B2_U40_BLOCK7, B2_U40_BLOCK8, B2_U40_BLOCK9, B2_U40_BLOCK10
  ]
);

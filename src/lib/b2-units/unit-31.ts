import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 31;

// ============================================
// BLOCK 1: GRAMMAR - PAST PERFECT FOR SEQUENCING TRAVEL
// ============================================
export const B2_U31_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Past Perfect: Sequencing Travel Events',
  grammarPoint: 'Past Perfect',
  explanation: 'Use the Past Perfect to describe actions that happened before another point in your journey.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'By the time we arrived at the gate, the plane ___ already.',
      'I realized I ___ my passport at the hotel.',
      'They ___ enough money for the trip before they left.',
      'She ___ to Tokyo twice before she decided to move there.',
      'We ___ our bags when the taxi arrived.',
      'He ___ the flight months in advance.',
      'I ___ never ___ such a beautiful landscape before.',
      'The tour ___ already ___ when we got to the meeting point.',
      'We were tired because we ___ for over 12 hours.',
      'I knew I ___ that man somewhere before.'
    ][i],
    options: [
      ['had departed', 'departed', 'was departing'],
      ['had left', 'left', 'have left'],
      ['had saved', 'saved', 'were saving'],
      ['had been', 'was', 'has been'],
      ['had packed', 'packed', 'were packing'],
      ['had booked', 'booked', 'was booking'],
      ['had / seen', 'have / seen', 'was / seeing'],
      ['had / started', 'has / started', 'was / starting'],
      ['had been travelling', 'travelled', 'were travelling'],
      ['had seen', 'saw', 'have seen']
    ][i],
    correctAnswer: [
      'had departed',
      'had left',
      'had saved',
      'had been',
      'had packed',
      'had booked',
      'had / seen',
      'had / started',
      'had been travelling',
      'had seen'
    ][i],
    explanation: 'Using the past perfect to clarify the order of past travel events.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - ADVANCED ARTICLES IN GEOGRAPHY
// ============================================
export const B2_U31_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Advanced Articles: Geographical Names',
  grammarPoint: 'Articles',
  explanation: 'Rules for "the" or "zero article" with countries, mountain ranges, islands, and bodies of water.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'Have you ever been to ___ (zero/the) Netherlands?',
      'We went hiking in ___ (zero/the) Alps last summer.',
      '___ (zero/the) Mount Everest is the highest peak.',
      'She wants to sail across ___ (zero/the) Atlantic Ocean.',
      'They are planning a trip to ___ (zero/the) South Africa.',
      '___ (zero/the) United Kingdom consists of four countries.',
      'We visited ___ (zero/the) Lake Geneva during our stay.',
      '___ (zero/the) Bahamas is a popular destination.',
      'He is from ___ (zero/the) Czech Republic.',
      'We flew over ___ (zero/the) Sahara Desert.'
    ][i],
    correctAnswer: [
      'the',
      'the',
      'zero',
      'the',
      'zero',
      'the',
      'zero',
      'the',
      'the',
      'the'
    ][i],
    explanation: 'Correct use of articles with geographical proper nouns.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - TYPES OF TOURISM
// ============================================
export const B2_U31_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Tourism and Travel Styles',
  explanation: 'Terms for different ways people experience travel.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      '___ (Ecotourism) focuses on responsible travel to natural areas.',
      'We prefer a ___ (package) holiday where everything is included.',
      'He is a keen ___ (backpacker) who travels on a budget.',
      'Many people enjoy ___ (cultural) tourism to see museums and art.',
      '___ (Sustainable) travel aims to reduce the impact on the environment.',
      'We booked a ___ (self-catering) apartment to save money on food.',
      'I love ___ (off-the-beaten-track) destinations that are not crowded.',
      'The city is known for its vibrant ___ (nightlife).',
      'They went on a luxury ___ (cruise) around the Mediterranean.',
      'We enjoy ___ (adventure) tourism, like white-water rafting.'
    ][i],
    correctAnswer: [
      'Ecotourism',
      'package',
      'backpacker',
      'cultural',
      'Sustainable',
      'self-catering',
      'off-the-beaten-track',
      'nightlife',
      'cruise',
      'adventure'
    ][i],
    explanation: 'Core vocabulary for describing travel preferences and styles.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - TRAVEL PROBLEMS & PHRASES
// ============================================
export const B2_U31_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Travel Mishaps and Logistics',
  explanation: 'Useful phrases for dealing with travel issues.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'My flight was ___ (delayed) by three hours.',
      'I suffered from severe ___ (jet lag) after the long flight.',
      'The airline ___ (lost) my luggage.',
      'We were ___ (stranded) at the airport overnight.',
      'I had to ___ (cancel) my booking at the last minute.',
      'The hotel was completely ___ (overbooked).',
      'The room was very ___ (cramped) and small.',
      'We had a ___ (breakdown) on the motorway.',
      'The taxi driver ___ (overcharged) us.',
      'I lost my way and had to ask for ___ (directions).'
    ][i],
    options: [
      ['delayed', 'late', 'stopped'],
      ['jet lag', 'jet sickness', 'plane tire'],
      ['lost', 'missed', 'left'],
      ['stranded', 'stuck', 'held'],
      ['cancel', 'stop', 'quit'],
      ['overbooked', 'full', 'crowded'],
      ['cramped', 'tight', 'narrow'],
      ['breakdown', 'accident', 'stop'],
      ['overcharged', 'charged', 'high'],
      ['directions', 'ways', 'paths']
    ][i],
    correctAnswer: [
      'delayed',
      'jet lag',
      'lost',
      'stranded',
      'cancel',
      'overbooked',
      'cramped',
      'breakdown',
      'overcharged',
      'directions'
    ][i],
    explanation: 'Common terms for negative travel experiences.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (TRAVEL)
// ============================================
export const B2_U31_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Travel & Destinations',
  explanation: 'Form nouns, adjectives, and verbs related to travel.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (ACCOMMODATE) in the city is very expensive.',
      'We visited many ___ (HISTORY) sites in Rome.',
      'The island is ___ (ACCESS) only by boat.',
      'She is an ___ (EXPERIENCE) traveller.',
      'The ___ (DEPART) was delayed by fog.',
      'We enjoyed the ___ (SCENE) route through the mountains.',
      'The city is very ___ (TOURIST) in the summer.',
      'It was an ___ (FORGET) experience.',
      'We need to make a ___ (RESERVE) for the restaurant.',
      'The ___ (ARRIVE) of the train was on time.'
    ][i],
    correctAnswer: [
      'accommodation',
      'historical',
      'accessible',
      'experienced',
      'departure',
      'scenic',
      'touristy',
      'unforgettable',
      'reservation',
      'arrival'
    ][i],
    explanation: 'Applying word formation rules to travel-related contexts.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE RISE OF "SLOW TRAVEL"
// ============================================
export const B2_U31_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Slow Travel - A New Way to See the World',
  explanation: 'Read about the "Slow Travel" movement and answer the questions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the main goal of Slow Travel?' : 'How does Slow Travel benefit local communities?',
    options: [['To connect deeply with local culture', 'To see as many cities as possible', 'To save money'], ['By supporting local businesses', 'By bringing more tourists', 'By building new hotels']][i % 2],
    correctAnswer: i < 5 ? 'To connect deeply with local culture' : 'By supporting local businesses',
    explanation: 'Comprehending the philosophy and benefits of alternative travel styles.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - TRAVEL TIPS FROM AN EXPERT
// ============================================
export const B2_U31_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: How to Travel Smarter',
  explanation: 'Listen to a travel blogger sharing tips for frequent travellers.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the speaker's advice for packing?`,
    options: ['Carry only what you need (light packing)', 'Bring extra clothes for emergencies', 'Buy a larger suitcase', 'Pack everything in plastic bags'],
    correctAnswer: 'Carry only what you need (light packing)',
    explanation: 'Listening for specific advice and key recommendations.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - TRAVEL REVIEWS
// ============================================
export const B2_U31_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Writing a Hotel Review',
  explanation: 'Identify the best language for a descriptive and helpful review.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce the hotel location:',
      'To describe the room quality:',
      'To comment on the service:',
      'To mention a minor issue politely:',
      'To highly recommend the place:',
      'To describe the breakfast:',
      'To talk about the value for money:',
      'To use a positive adjective for the staff:',
      'To provide a helpful tip for others:',
      'To conclude the review:'
    ][i],
    options: [
      ['Conveniently located in the heart of...', 'It is near the center.', 'A good place.'],
      ['The rooms were impeccably clean and spacious.', 'Rooms were okay.', 'Good rooms.'],
      ['The staff went above and beyond to...', 'Staff were nice.', 'Good help.'],
      ['One slight drawback was the noise from...', 'It was noisy.', 'Not quiet.'],
      ['I would recommend this hotel without hesitation.', 'Go there.', 'Good choice.'],
      ['A wide variety of fresh options was...', 'Breakfast was good.', 'Food was nice.'],
      ['Excellent value for money considering the...', 'Good price.', 'Cheap.'],
      ['Welcoming and attentive', 'Good', 'Nice'],
      ['Make sure to book a room facing the garden.', 'Book garden.', 'Garden is better.'],
      ['Overall, a fantastic stay that I won\'t forget.', 'Bye.', 'Good stay.']
    ][i],
    correctAnswer: [
      'Conveniently located in the heart of...',
      'The rooms were impeccably clean and spacious.',
      'The staff went above and beyond to...',
      'One slight drawback was the noise from...',
      'I would recommend this hotel without hesitation.',
      'A wide variety of fresh options was...',
      'Excellent value for money considering the...',
      'Welcoming and attentive',
      'Make sure to book a room facing the garden.',
      'Overall, a fantastic stay that I won\'t forget.'
    ][i],
    explanation: 'Using descriptive and professional language for reviews.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING TRAVEL EXPERIENCES
// ============================================
export const B2_U31_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Recounting a Travel Story',
  explanation: 'Identify natural ways to use the past perfect in spoken English.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally tell a friend you had already seen the city before you went with them?`,
    options: ['I\'d actually been there before, so I knew the way.', 'I went there before.', 'I saw it.', 'I had saw it.'],
    correctAnswer: 'I\'d actually been there before, so I knew the way.',
    explanation: 'Using contractions and the past perfect naturally in conversation.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U31_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 31',
  explanation: 'Consolidation of Past Perfect, Articles, and Travel Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'We ___ (arrive) late because the train had broken down.' : 'He is travelling to ___ (zero/the) United States.',
    options: i < 5 ? ['arrived', 'had arrived', 'were arriving'] : ['the', 'zero', 'a'],
    correctAnswer: i < 5 ? 'arrived' : 'the',
    explanation: 'Reviewing the relationship between past tenses and article usage.',
    points: 1
  }))
};

export const B2_UNIT_31 = createB2Unit(
  'b2-u31',
  'Travel Experiences & Tourism',
  'Master the use of past tenses for storytelling and geographical articles while exploring modern travel trends.',
  ['Use the Past Perfect to sequence events in a travel story', 'Apply correct articles to geographical names and destinations', 'Understand vocabulary for diverse tourism styles and travel logistics'],
  [
    B2_U31_BLOCK1, B2_U31_BLOCK2, B2_U31_BLOCK3, B2_U31_BLOCK4, B2_U31_BLOCK5,
    B2_U31_BLOCK6, B2_U31_BLOCK7, B2_U31_BLOCK8, B2_U31_BLOCK9, B2_U31_BLOCK10
  ]
);

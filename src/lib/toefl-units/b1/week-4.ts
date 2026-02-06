import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 4;
const LEVEL = 'b1';

// SHARDS 1-2: Humanities & Arts Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Artistic Styles & Techniques',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "realism" in art?',
      'An "abstract" painting is:',
      'What is a "sculpture"?',
      'The "medium" of an artwork refers to:',
      'What is "perspective" in drawing?',
      'A "portrait" is a depiction of:',
      'What is "aesthetic"?',
      'An "exhibit" is:',
      'What is a "mural"?',
      'A "masterpiece" is:'
    ][i],
    options: [
      ['Depicting subjects as they appear', 'Complete fantasy', 'Only using blue'],
      ['Not representing literal objects', 'Very detailed', 'Small and cheap'],
      ['A three-dimensional art piece', 'A song', 'A type of poem'],
      ['The materials used', 'The size of the piece', 'The price'],
      ['Creating an illusion of depth', 'The weight of paper', 'The speed of drawing'],
      ['A person', 'A mountain', 'A machine'],
      ['Relating to beauty or art', 'Very loud', 'Extremely heavy'],
      ['A public display of art', 'A secret room', 'A type of brush'],
      ['A painting on a wall', 'A small statue', 'A piece of music'],
      ['An artist\'s greatest work', 'A rough sketch', 'A lost item']
    ][i],
    correctAnswer: [
      'Depicting subjects as they appear', 'Not representing literal objects', 'A three-dimensional art piece',
      'The materials used', 'Creating an illusion of depth', 'A person',
      'Relating to beauty or art', 'A public display of art', 'A painting on a wall',
      'An artist\'s greatest work'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Literature & Philosophy',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "narrative"?',
      'A "genre" is:',
      'What is "fiction"?',
      'An "essay" is:',
      'What is "metaphor"?',
      'A "protagonist" is:',
      'What is "logic"?',
      'An "anthology" is:',
      'What is "ethics"?',
      'A "manuscript" is:'
    ][i],
    options: [
      ['A story or account', 'A scientific law', 'A mathematical table'],
      ['A category of art or literature', 'A type of paint', 'A musical instrument'],
      ['Invented stories', 'Factual records', 'Instruction manuals'],
      ['A short piece of writing on a subject', 'A full novel', 'A poem'],
      ['A symbolic comparison', 'A literal description', 'A direct order'],
      ['The main character', 'The villain', 'A background extra'],
      ['Reasoning and principles', 'A type of feeling', 'A dream'],
      ['A collection of works', 'A single poem', 'A blank book'],
      ['Moral principles', 'A type of engine', 'Chemical reactions'],
      ['A document written by hand or typed', 'A finished movie', 'A spoken speech']
    ][i],
    correctAnswer: [
      'A story or account', 'A category of art or literature', 'Invented stories',
      'A short piece of writing on a subject', 'A symbolic comparison', 'The main character',
      'Reasoning and principles', 'A collection of works', 'Moral principles',
      'A document written by hand or typed'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Adjectives & Adverbs', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: The artist painted the mural ____.`, options: ['beautifully', 'beautiful', 'beauty'], correctAnswer: 'beautifully', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Comparatives & Superlatives', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: This is the ____ painting in the gallery.`, options: ['most famous', 'more famous', 'famousest'], correctAnswer: 'most famous', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: Gothic Architecture', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What is a feature of Gothic style?`, options: ['Pointed arches', 'Flat roofs', 'No windows'], correctAnswer: 'Pointed arches', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: Modernism', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What did modernists reject?`, options: ['Tradition', 'Technology', 'Color'], correctAnswer: 'Tradition', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: Art History Class', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What will be on the final project?`, options: ['A visual analysis', 'A 50-page paper', 'A group dance'], correctAnswer: 'A visual analysis', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Museum Audio Guide', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: Why is this statue important?`, options: ['Historical significance', 'It is made of gold', 'It was found recently'], correctAnswer: 'Historical significance', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Vocabulary: Creative Process', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Process Question ${i+1}: Define "Inspire".`, options: ['Fill with urge to do something', 'Make tired', 'Stop working'], correctAnswer: 'Fill with urge to do something', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Humanities Roots (Phil, Anthrop, Eth)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Root Question ${i+1}: "Phil-" usually means:`, options: ['Love', 'Hate', 'Fear'], correctAnswer: 'Love', points: 1 })) };

export const B1_WEEK_4 = createShardedToeflUnit(
  'toefl-b1-w4',
  'Week 4: Humanities & Fine Arts',
  'Immerse yourself in literature, philosophy, and the world of visual arts.',
  ['Distinguish art styles and terminology', 'Use adjectives and adverbs for description', 'Analyze literary devices like metaphors'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);

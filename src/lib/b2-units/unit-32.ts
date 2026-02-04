import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 32;

// ============================================
// BLOCK 1: GRAMMAR - PASSIVE VOICE (PRESENT & PAST)
// ============================================
export const B2_U32_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Passive Voice: Arts and Exhibits',
  grammarPoint: 'Passive Voice',
  explanation: 'Use the passive (be + past participle) when the focus is on the action or the object being affected.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'The painting ___ by a local artist in 1920.',
      'The gallery ___ every Monday for maintenance.',
      'These sculptures ___ from recycled materials.',
      'The book ___ into over twenty languages.',
      'The play ___ at the National Theatre last night.',
      'Many great films ___ in this studio over the years.',
      'The exhibition ___ by thousands of people every week.',
      'A new mural ___ on the city wall yesterday.',
      'The instruments ___ carefully before the concert.',
      'The lyrics ___ by the lead singer of the band.'
    ][i],
    options: [
      ['was painted', 'is painted', 'painted'],
      ['is closed', 'was closed', 'closes'],
      ['are made', 'were made', 'make'],
      ['has been translated', 'was translated', 'is translated'],
      ['was performed', 'is performed', 'performed'],
      ['have been made', 'are made', 'were made'],
      ['is visited', 'was visited', 'visits'],
      ['was created', 'is created', 'created'],
      ['are tuned', 'were tuned', 'tune'],
      ['were written', 'are written', 'wrote']
    ][i],
    correctAnswer: [
      'was painted',
      'is closed',
      'are made',
      'has been translated',
      'was performed',
      'have been made',
      'is visited',
      'was created',
      'are tuned',
      'were written'
    ][i],
    explanation: 'Choosing the correct passive tense based on the time reference.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - PASSIVE VOICE (FUTURE & MODALS)
// ============================================
export const B2_U32_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Passive Voice: Future and Modals',
  grammarPoint: 'Passive Voice',
  explanation: 'Passive with modals: modal + be + past participle. Future: will be + past participle.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'The winner will ___ (announce) tomorrow morning.',
      'The artwork must ___ (handle) with great care.',
      'The concert might ___ (cancel) due to the rain.',
      'The tickets can ___ (buy) online from Monday.',
      'The museum should ___ (renovate) next year.',
      'The film could ___ (show) in select cinemas.',
      'The exhibition will ___ (open) by the mayor.',
      'The old theatre may ___ (demolish) to build flats.',
      'The script will ___ (write) by a famous author.',
      'The sculptures ought to ___ (place) in the center.'
    ][i],
    correctAnswer: [
      'be announced',
      'be handled',
      'be cancelled',
      'be bought',
      'be renovated',
      'be shown',
      'be opened',
      'be demolished',
      'be written',
      'be placed'
    ][i],
    explanation: 'Using the passive infinitive after modals and future "will".',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - THE VISUAL ARTS
// ============================================
export const B2_U32_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Painting and Sculpture',
  explanation: 'Terms for fine arts and artistic techniques.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'A ___ (landscape) painting shows natural scenery.',
      'She is working on a ___ (portrait) of her mother.',
      'The artist uses broad ___ (brushstrokes) to create texture.',
      'The statue was carved from a single block of ___ (marble).',
      'This is an ___ (abstract) work that doesn\'t represent reality.',
      'The colors are very ___ (vibrant) and energetic.',
      'He prefers to work with ___ (watercolors) rather than oils.',
      'The gallery is hosting a ___ (retrospective) of her career.',
      'The painting is a ___ (masterpiece) of the Renaissance.',
      'I love the use of light and ___ (shadow) in this piece.'
    ][i],
    correctAnswer: [
      'landscape',
      'portrait',
      'brushstrokes',
      'marble',
      'abstract',
      'vibrant',
      'watercolors',
      'retrospective',
      'masterpiece',
      'shadow'
    ][i],
    explanation: 'Core vocabulary for describing visual artworks.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - PERFORMING ARTS & CINEMA
// ============================================
export const B2_U32_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Theatre, Film, and Dance',
  explanation: 'Terms for stage productions and the film industry.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The actors received a standing ___ (ovation) at the end.',
      'The film has a very unexpected ___ (plot) twist.',
      'She went to an ___ (audition) for the lead role.',
      'The play is set on a ___ (revolving) stage.',
      'The movie was a huge box-office ___ (success).',
      'The ___ (cinematography) in this film is breathtaking.',
      'He is a very talented ___ (playwright) who wrote ten dramas.',
      'The ___ (soundtrack) was composed by a famous musician.',
      'The dancers practiced their ___ (choreography) all day.',
      'The show was a sold-out ___ (performance).'
    ][i],
    options: [
      ['ovation', 'clap', 'shout'],
      ['plot', 'story', 'line'],
      ['audition', 'interview', 'test'],
      ['revolving', 'moving', 'turning'],
      ['success', 'hit', 'win'],
      ['cinematography', 'photography', 'filming'],
      ['playwright', 'writer', 'scriptor'],
      ['soundtrack', 'music', 'songs'],
      ['choreography', 'steps', 'dance'],
      ['performance', 'act', 'show']
    ][i],
    correctAnswer: [
      'ovation',
      'plot',
      'audition',
      'revolving',
      'success',
      'cinematography',
      'playwright',
      'soundtrack',
      'choreography',
      'performance'
    ][i],
    explanation: 'Essential terms for the performing arts and cinema.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (CREATIVITY)
// ============================================
export const B2_U32_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: The Creative Process',
  explanation: 'Form words related to inspiration and production.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'She is a very ___ (IMAGINE) writer.',
      'The ___ (ILLUSTRATE) in the book are beautiful.',
      'His ___ (ORIGIN) is what makes him stand out.',
      'We were impressed by the ___ (CREATIVE) of the students.',
      'The play was an ___ (ADAPT) of a famous novel.',
      'The ___ (EXHIBIT) will run for three months.',
      'The artist found ___ (INSPIRE) in nature.',
      'The film was ___ (CRITIC) acclaimed.',
      'It was a highly ___ (MEMORABLE) performance.',
      'The ___ (PERFORM) were nervous before the show.'
    ][i],
    correctAnswer: [
      'imaginative',
      'illustrations',
      'originality',
      'creativity',
      'adaptation',
      'exhibition',
      'inspiration',
      'critically',
      'memorable',
      'performers'
    ][i],
    explanation: 'Standard word formation in a creative context.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE IMPACT OF DIGITAL ART
// ============================================
export const B2_U32_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Art in the Digital Age',
  explanation: 'Read about how technology is changing art and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What are NFTs in the context of art?' : 'How does digital art increase accessibility?',
    options: [['Digital certificates of ownership', 'A type of paint', 'A new museum'], ['By allowing anyone to view it online', 'By making art cheaper', 'By removing the need for artists']][i % 2],
    correctAnswer: i < 5 ? 'Digital certificates of ownership' : 'By allowing anyone to view it online',
    explanation: 'Analyzing the intersection of art and modern technology.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - AN INTERVIEW WITH A CURATOR
// ============================================
export const B2_U32_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Behind the Scenes at the Museum',
  explanation: 'Listen to a museum curator talking about organizing a new show.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the most difficult part of the curator's job?`,
    options: ['Securing loans of famous artworks', 'Cleaning the paintings', 'Selling tickets', 'Writing the catalogue'],
    correctAnswer: 'Securing loans of famous artworks',
    explanation: 'Listening for main challenges and professional responsibilities.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - ART CRITIQUE
// ============================================
export const B2_U32_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Reviewing an Exhibition',
  explanation: 'Identify the most sophisticated ways to evaluate a piece of art.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To describe the first impression:',
      'To comment on the use of color:',
      'To analyze the theme:',
      'To praise the artist\'s skill:',
      'To express a balanced criticism:',
      'To describe the atmosphere of the show:',
      'To use a strong adjective for impact:',
      'To mention the historical context:',
      'To recommend the exhibition to others:',
      'To end with a thought-provoking final sentence:'
    ][i],
    options: [
      ['The first thing that strikes the viewer is...', 'I looked at it and...', 'It was okay.'],
      ['The palette is dominated by muted earthy tones.', 'It has lots of brown.', 'Colors are good.'],
      ['The work explores themes of identity and...', 'It is about...', 'Theme is...'],
      ['His technical prowess is evident in every...', 'He is good at it.', 'Nice job.'],
      ['While the composition is strong, the lighting...', 'Composition good, light bad.', 'It\'s alright.'],
      ['The minimalist setting creates a sense of...', 'The room is empty.', 'Nice atmosphere.'],
      ['Evocative and powerful', 'Nice', 'Good'],
      ['The work is deeply rooted in the social...', 'It was made a long time ago.', 'Old context.'],
      ['This is a must-see for anyone interested in...', 'Go see it.', 'It\'s a good show.'],
      ['Ultimately, the exhibition challenges our...', 'Bye.', 'I liked it.']
    ][i],
    correctAnswer: [
      'The first thing that strikes the viewer is...',
      'The palette is dominated by muted earthy tones.',
      'The work explores themes of identity and...',
      'His technical prowess is evident in every...',
      'While the composition is strong, the lighting...',
      'The minimalist setting creates a sense of...',
      'Evocative and powerful',
      'The work is deeply rooted in the social...',
      'This is a must-see for anyone interested in...',
      'Ultimately, the exhibition challenges our...'
    ][i],
    explanation: 'Using appropriate analytical and critical register for art reviews.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DESCRIBING AN ARTWORK
// ============================================
export const B2_U32_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Discussing Personal Taste in Art',
  explanation: 'Learn how to describe what you see and feel about an artwork.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally express that a painting makes you feel calm?`,
    options: ['There\'s something very tranquil about the way the colors blend.', 'It is calm.', 'I feel happy.', 'Colors are nice.'],
    correctAnswer: 'There\'s something very tranquil about the way the colors blend.',
    explanation: 'Using descriptive and evocative language in spoken descriptions.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U32_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 32',
  explanation: 'Consolidation of Passive Voice and Art Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'The sculpture ___ (finish) next week.' : 'He is a very ___ (influence) artist.',
    options: i < 5 ? ['will be finished', 'is finished', 'finishes'] : ['influential', 'influenced', 'influence'],
    correctAnswer: i < 5 ? 'will be finished' : 'influential',
    explanation: 'Verifying passive tenses and vocabulary usage.',
    points: 1
  }))
};

export const B2_UNIT_32 = createB2Unit(
  'b2-u32',
  'Arts & Creative Industries',
  'Explore the world of art and culture while mastering the use of the passive voice across all tenses.',
  ['Use the passive voice correctly in present, past, and future', 'Apply passive structures with modal verbs', 'Understand key vocabulary for visual arts, performing arts, and the creative process'],
  [
    B2_U32_BLOCK1, B2_U32_BLOCK2, B2_U32_BLOCK3, B2_U32_BLOCK4, B2_U32_BLOCK5,
    B2_U32_BLOCK6, B2_U32_BLOCK7, B2_U32_BLOCK8, B2_U32_BLOCK9, B2_U32_BLOCK10
  ]
);

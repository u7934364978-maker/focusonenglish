import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 38;

// ============================================
// BLOCK 1: GRAMMAR - DEFINING & NON-DEFINING RELATIVE CLAUSES
// ============================================
export const B2_U38_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Relative Clauses: Describing Artists and Films',
  grammarPoint: 'Relative Clauses',
  explanation: 'Use defining relative clauses to identify which person/thing; use non-defining clauses (with commas) for extra information.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'The director ___ won the Oscar is from Mexico.',
      'The film, ___ was released last week, is already a hit.',
      'That is the actor ___ sister is a famous singer.',
      'The studio ___ they filmed the movie is closed.',
      'I love the song ___ you played yesterday.',
      'Beyoncé, ___ is a global superstar, started in a group.',
      'The reason ___ she left the band is unknown.',
      'The people ___ work in the industry are very creative.',
      'This is the instrument ___ he used for the recording.',
      'The cinema, ___ is the oldest in the city, is beautiful.'
    ][i],
    options: [
      ['who', 'which', 'whom'],
      ['which', 'that', 'who'],
      ['whose', 'who', 'whom'],
      ['where', 'which', 'that'],
      ['that', 'who', 'whose'],
      ['who', 'that', 'which'],
      ['why', 'where', 'which'],
      ['who', 'which', 'whom'],
      ['which', 'who', 'whose'],
      ['which', 'where', 'that']
    ][i],
    correctAnswer: [
      'who',
      'which',
      'whose',
      'where',
      'that',
      'who',
      'why',
      'who',
      'which',
      'which'
    ][i],
    explanation: 'Choosing the correct relative pronoun based on the noun it refers to.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - PREPOSITION + RELATIVE PRONOUN
// ============================================
export const B2_U38_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Relative Clauses: Formal Structures',
  grammarPoint: 'Relative Clauses',
  explanation: 'In formal English, prepositions come before the relative pronoun (to whom, for which, in which).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'The company for ___ (which) he works is very famous.',
      'The person to ___ (whom) I spoke was the manager.',
      'The way in ___ (which) the story is told is unique.',
      'The music to ___ (which) she listens is very eclectic.',
      'The project on ___ (which) they are working is top secret.',
      'The people with ___ (whom) I travelled were friendly.',
      'The town in ___ (which) he was born is small.',
      'The award for ___ (which) she was nominated is prestigious.',
      'The script about ___ (which) we talked is finished.',
      'The colleague with ___ (whom) I shared an office has left.'
    ][i],
    correctAnswer: [
      'which',
      'whom',
      'which',
      'which',
      'which',
      'whom',
      'which',
      'which',
      'which',
      'whom'
    ][i],
    explanation: 'Using the formal "preposition + which/whom" structure.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - THE MUSIC INDUSTRY
// ============================================
export const B2_U38_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Streaming and Charts',
  explanation: 'Terms for modern music consumption and production.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The song reached number one on the ___ (charts).',
      'I have a monthly ___ (subscription) to a music app.',
      'The band is going on a world ___ (tour) next year.',
      'They released their latest ___ (album) last month.',
      'The ___ (lyrics) of the song are very meaningful.',
      'She is a very talented ___ (singer-songwriter).',
      'The track has millions of ___ (streams) online.',
      'They performed live at a massive music ___ (festival).',
      'The ___ (record) label signed the new artist.',
      'I love the ___ (rhythm) of this dance track.'
    ][i],
    correctAnswer: [
      'charts',
      'subscription',
      'tour',
      'album',
      'lyrics',
      'singer-songwriter',
      'streams',
      'festival',
      'record',
      'rhythm'
    ][i],
    explanation: 'Core vocabulary for the contemporary music world.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - CINEMA & TELEVISION
// ============================================
export const B2_U38_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Blockbusters and Indie Films',
  explanation: 'Terms for the film industry, genres, and roles.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The film was a massive ___ (blockbuster) at the box office.',
      'I prefer watching ___ (independent) films with smaller budgets.',
      'The ___ (soundtrack) features many famous songs.',
      'The movie is ___ (set) in a futuristic city.',
      'The ___ (acting) in the final scene was incredible.',
      'She plays the ___ (protagonist) in the new series.',
      'The special ___ (effects) were created with CGI.',
      'The film is ___ (based) on a true story.',
      'We watched the ___ (trailer) for the new Marvel movie.',
      'The director is known for his ___ (signature) style.'
    ][i],
    options: [
      ['blockbuster', 'hit', 'big'],
      ['independent', 'solo', 'free'],
      ['soundtrack', 'music', 'score'],
      ['set', 'made', 'done'],
      ['acting', 'play', 'work'],
      ['protagonist', 'leader', 'main'],
      ['effects', 'actions', 'views'],
      ['based', 'made', 'taken'],
      ['trailer', 'teaser', 'short'],
      ['signature', 'mark', 'name']
    ][i],
    correctAnswer: [
      'blockbuster',
      'independent',
      'soundtrack',
      'set',
      'acting',
      'protagonist',
      'effects',
      'based',
      'trailer',
      'signature'
    ][i],
    explanation: 'Essential vocabulary for discussing films and TV.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (ENTERTAINMENT)
// ============================================
export const B2_U38_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Creative Industries',
  explanation: 'Form words related to fame, media, and performance.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (POPULAR) of streaming is increasing.',
      'He is a very ___ (TALENT) musician.',
      'The film was highly ___ (SUCCESS) worldwide.',
      'She rose to ___ (FAMOUS) after her first role.',
      'The ___ (PRODUCE) of the movie took two years.',
      'It was a highly ___ (ORIGIN) script.',
      'The ___ (ENTERTAIN) industry is very competitive.',
      'He is a great ___ (PERFORM) on stage.',
      'The ___ (ADAPT) of the book was very faithful.',
      'We were moved by the ___ (EMOTION) performance.'
    ][i],
    correctAnswer: [
      'popularity',
      'talented',
      'successful',
      'fame',
      'production',
      'original',
      'entertainment',
      'performer',
      'adaptation',
      'emotional'
    ][i],
    explanation: 'Applying word formation rules to the context of music and cinema.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE DEATH OF THE CD?
// ============================================
export const B2_U38_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: How We Listen Now',
  explanation: 'Read about the shift from physical to digital music and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Why is vinyl making a comeback?' : 'What is the main advantage of streaming?',
    options: [['For the tangible experience and sound quality', 'Because it is cheaper', 'Because it is smaller'], ['Instant access to millions of songs', 'Owning the physical disk', 'Better artwork']][i % 2],
    correctAnswer: i < 5 ? 'For the tangible experience and sound quality' : 'Instant access to millions of songs',
    explanation: 'Understanding consumer trends in the music industry.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - BEHIND THE CAMERA
// ============================================
export const B2_U38_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: An Interview with a Cinematographer',
  explanation: 'Listen to a professional talking about the importance of lighting and framing.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the cinematographer's primary goal?`,
    options: ['To create a specific mood through lighting', 'To choose the actors', 'To write the dialogue', 'To sell the movie tickets'],
    correctAnswer: 'To create a specific mood through lighting',
    explanation: 'Listening for professional roles and artistic objectives.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - FILM REVIEWS
// ============================================
export const B2_U38_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Critiquing a Movie',
  explanation: 'Identify the best language for a nuanced and professional film review.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce the plot without spoilers:',
      'To use a non-defining relative clause about the director:',
      'To use a formal relative structure about the theme:',
      'To praise the lead actor\'s performance:',
      'To mention a minor flaw in the script:',
      'To describe the visual style:',
      'To compare it to another film:',
      'To recommend it to a specific audience:',
      'To conclude with a summary rating:',
      'To use an evocative adjective for the ending:'
    ][i],
    options: [
      ['The story revolves around a young man who...', 'It is about...', 'Stuff happens...'],
      ['Nolan, who is known for his complex plots, has...', 'Nolan is good and he...', 'A man named Nolan...'],
      ['The theme of loss, for which the film is praised...', 'The theme is loss and...', 'Loss is the point...'],
      ['She delivers a powerhouse performance as...', 'She was good.', 'Nice acting.'],
      ['If there is one criticism, it is that the pace...', 'It was slow.', 'Not perfect.'],
      ['The cinematography is nothing short of stunning.', 'It looks nice.', 'Good shots.'],
      ['Much like his previous work, this film...', 'It is the same.', 'Like the other one...'],
      ['Fans of psychological thrillers will surely...', 'Watch this if you like...', 'Good for everyone.'],
      ['Overall, it is a cinematic triumph.', 'I like it.', 'Good movie.'],
      ['Bittersweet and haunting', 'Sad', 'Good']
    ][i],
    correctAnswer: [
      'The story revolves around a young man who...',
      'Nolan, who is known for his complex plots, has...',
      'The theme of loss, for which the film is praised...',
      'She delivers a powerhouse performance as...',
      'If there is one criticism, it is that the pace...',
      'The cinematography is nothing short of stunning.',
      'Much like his previous work, this film...',
      'Fans of psychological thrillers will surely...',
      'Overall, it is a cinematic triumph.',
      'Bittersweet and haunting'
    ][i],
    explanation: 'Using appropriate analytical and evaluative language for cinema.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING MOVIES & MUSIC
// ============================================
export const B2_U38_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Expressing Personal Preferences',
  explanation: 'Learn how to use relative clauses naturally in conversation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally tell someone about a movie you liked?`,
    options: ['It\'s a movie that really makes you think about...', 'It is a good movie.', 'I like it because...', 'The movie is X.'],
    correctAnswer: 'It\'s a movie that really makes you think about...',
    explanation: 'Using relative clauses to add depth to spoken opinions.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U38_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 38',
  explanation: 'Consolidation of Relative Clauses and Media Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'The actor ___ (who/which) played the role was great.' : 'The person with ___ (whom/who) I worked is famous.',
    options: i < 5 ? ['who', 'which', 'that'] : ['whom', 'who', 'which'],
    correctAnswer: i < 5 ? 'who' : 'whom',
    explanation: 'Verifying the correct choice of relative pronouns in different contexts.',
    points: 1
  }))
};

export const B2_UNIT_38 = createB2Unit(
  'b2-u38',
  'Music & Cinema Trends',
  'Explore the evolution of modern entertainment while mastering the use of complex relative clauses.',
  ['Use defining and non-defining relative clauses correctly', 'Apply formal relative structures with prepositions (which/whom)', 'Understand key vocabulary for the music and film industries'],
  [
    B2_U38_BLOCK1, B2_U38_BLOCK2, B2_U38_BLOCK3, B2_U38_BLOCK4, B2_U38_BLOCK5,
    B2_U38_BLOCK6, B2_U38_BLOCK7, B2_U38_BLOCK8, B2_U38_BLOCK9, B2_U38_BLOCK10
  ]
);

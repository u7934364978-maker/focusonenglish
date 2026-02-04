import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 57;

// ============================================
// BLOCK 1: GRAMMAR - COMPOUND ADJECTIVES (HYPHENATED)
// ============================================
export const B2_U57_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Analyzing Media Trends',
  grammarPoint: 'Compound Adjectives',
  explanation: 'Use compound adjectives (adjective/adverb + noun/participle) to provide concise descriptions. They are usually hyphenated before a noun.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'It is a ___ (fast/pace) world we live in.',
      'He is a ___ (world/renown) journalist.',
      'That was a ___ (thought/provoke) documentary.',
      'We need to avoid ___ (mass/produce) news.',
      'She has a ___ (long/term) career in media.',
      'This is a ___ (high/quality) report.',
      'He is an ___ (open/mind) critic.',
      'It was a ___ (heart/break) story.',
      'They are ___ (well/inform) citizens.',
      'It is a ___ (last/minute) change to the schedule.'
    ][i],
    correctAnswer: [
      'fast-paced',
      'world-renowned',
      'thought-provoking',
      'mass-produced',
      'long-term',
      'high-quality',
      'open-minded',
      'heartbreaking',
      'well-informed',
      'last-minute'
    ][i],
    explanation: 'Using compound adjectives to create precise and professional descriptions.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - COMPOUND NOUNS
// ============================================
export const B2_U57_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Media Infrastructure',
  grammarPoint: 'Compound Nouns',
  explanation: 'Compound nouns combine two or more words to create a single concept (e.g., social media, broadcast, feedback).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      '___ (Social/media) has changed how we get news.',
      'The ___ (broad/cast) was delayed due to technical issues.',
      'We are waiting for ___ (feed/back) from the editor.',
      'The ___ (news/stand) was empty this morning.',
      'He works at a ___ (press/agency).',
      'The ___ (sound/track) of the film was amazing.',
      'We need a better ___ (work/load) management system.',
      'She is a famous ___ (talk/show) host.',
      'The ___ (head/line) was very sensational.',
      'The ___ (break/through) in the investigation was televised.'
    ][i],
    correctAnswer: [
      'Social media',
      'broadcast',
      'feedback',
      'newsstand',
      'press agency',
      'soundtrack',
      'workload',
      'talk show',
      'headline',
      'breakthrough'
    ][i],
    explanation: 'Using compound nouns to describe media-related objects and concepts.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - MEDIA LITERACY
// ============================================
export const B2_U57_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Critical Consumption',
  explanation: 'Vocabulary for identifying bias, fake news, and media manipulation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'We need to develop media ___ (literacy) skills.',
      'The article showed a clear ___ (bias) against the candidate.',
      'Don\'t believe everything you read; check for ___ (fake) news.',
      'The image was obviously ___ (manipulated).',
      'We must verify the ___ (source) of the information.',
      'Sensationalist ___ (clickbait) is everywhere online.',
      'The journalist was accused of ___ (propaganda).',
      'It is important to remain ___ (objective) when reporting.',
      'The news can often be ___ (misleading).',
      'We live in an ___ (echo) chamber online.'
    ][i],
    correctAnswer: [
      'literacy',
      'bias',
      'fake',
      'manipulated',
      'source',
      'clickbait',
      'propaganda',
      'objective',
      'misleading',
      'echo'
    ][i],
    explanation: 'Key terms for critical analysis of information and media.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - JOURNALISM & REPORTING
// ================= ::::::::::::::::::::::::::::
export const B2_U57_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Behind the Scenes',
  explanation: 'Vocabulary for newsrooms, reporting styles, and the ethics of journalism.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'He is a ___ (war) correspondent.',
      'The story was an ___ (exclusive) interview.',
      'They are checking for ___ (plagiarism).',
      'The ___ (editorial) section reflects the paper\'s view.',
      'She works as a ___ (freelance) reporter.',
      'The news was ___ (leaked) to the press.',
      'The ___ (circulation) of the newspaper is dropping.',
      'He is an expert in ___ (investigative) journalism.',
      'The report was ___ (censored) by the government.',
      'We need to respect the ___ (privacy) of the subjects.'
    ][i],
    options: [
      ['war', 'fight', 'battle'],
      ['exclusive', 'only', 'single'],
      ['plagiarism', 'copying', 'theft'],
      ['editorial', 'opinion', 'thought'],
      ['freelance', 'free', 'open'],
      ['leaked', 'dripped', 'out'],
      ['circulation', 'sales', 'reach'],
      ['investigative', 'looking', 'deep'],
      ['censored', 'blocked', 'cut'],
      ['privacy', 'secrets', 'life']
    ][i],
    correctAnswer: [
      'war',
      'exclusive',
      'plagiarism',
      'editorial',
      'freelance',
      'leaked',
      'circulation',
      'investigative',
      'censored',
      'privacy'
    ][i],
    explanation: 'Professional vocabulary for the journalism industry.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U57_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Media Impact',
  explanation: 'Form nouns, adjectives, and verbs related to information and influence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (INFLUENCE) of social media is undeniable.',
      'The report was highly ___ (INFORMATIVE).',
      'He is an ___ (EXCEPTION) talented writer.',
      'The article was ___ (SENSATIONAL) written.',
      'We need more ___ (TRANSPARENT) in reporting.',
      'The ___ (RELEVANT) of print media is declining.',
      'It was a ___ (REVEAL) interview.',
      'The journalist acted ___ (RESPONSIBLE).',
      'The news caused a lot of ___ (CONTROVERSIAL).',
      'She is a very ___ (CREATIVITY) editor.'
    ][i],
    correctAnswer: [
      'influence',
      'informative',
      'exceptionally',
      'sensensationally',
      'transparency',
      'relevance',
      'revealing',
      'responsibly',
      'controversy',
      'creative'
    ][i],
    explanation: 'Transforming root words into terms describing media dynamics.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE RISE OF CITIZEN JOURNALISM
// ============================================
export const B2_U57_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Everyone is a Reporter',
  explanation: 'Read about how smartphones and social media have enabled ordinary people to report news in real-time.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is "citizen journalism"?' : 'What is the main risk of citizen journalism?',
    options: [['News reported by ordinary people', 'Journalism for citizens only', 'Reading the news'], ['Lack of fact-checking and verification', 'It is too expensive', 'Nobody reads it']][i % 2],
    correctAnswer: i < 5 ? 'News reported by ordinary people' : 'Lack of fact-checking and verification',
    explanation: 'Analyzing the shift from traditional to democratic media.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - SPOT THE FAKE
// ============================================
export const B2_U57_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: How to Verify Information',
  explanation: 'Listen to a fact-checker explaining the steps to verify a viral story or image.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the first step when you see a shocking headline?`,
    options: ['Check multiple reputable sources', 'Share it immediately', 'Assume it is true', 'Ignore it completely'],
    correctAnswer: 'Check multiple reputable sources',
    explanation: 'Listening for practical critical thinking and verification techniques.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - CRITICAL REVIEWS
// ================= ::::::::::::::::::::::::::::
export const B2_U57_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Reviewing a Documentary',
  explanation: 'Learn how to use compound adjectives to write a sophisticated review.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To describe a film that is very famous:',
      'To describe a story that makes you think:',
      'To describe a series that is very long:',
      'To describe an actor who is very talented:',
      'To describe a plot that is hard to believe:',
      'To describe a high-quality production:',
      'To describe a fast-paced narrative:',
      'To describe a heart-breaking scene:',
      'To describe a well-researched topic:',
      'To describe a world-class director:'
    ][i],
    options: [
      ['A world-renowned documentary.', 'A famous film.', 'A movie everyone knows.'],
      ['A thought-provoking story.', 'A thinking plot.', 'An interesting idea.'],
      ['A long-running series.', 'A big show.', 'A forever program.'],
      ['A highly-talented actor.', 'A good person.', 'A smart player.'],
      ['A far-fetched plot.', 'A fake story.', 'A strange thing.'],
      ['A top-notch production.', 'A good work.', 'A nice making.'],
      ['A fast-moving narrative.', 'A quick talk.', 'A fast story.'],
      ['A gut-wrenching scene.', 'A sad part.', 'A bad bit.'],
      ['A well-documented subject.', 'A known thing.', 'A true fact.'],
      ['A world-class director.', 'A good boss.', 'A top man.']
    ][i],
    correctAnswer: [
      'A world-renowned documentary.',
      'A thought-provoking story.',
      'A long-running series.',
      'A highly-talented actor.',
      'A far-fetched plot.',
      'A top-notch production.',
      'A fast-moving narrative.',
      'A gut-wrenching scene.',
      'A well-documented subject.',
      'A world-class director.'
    ][i],
    explanation: 'Using compound adjectives to elevate the quality of your descriptive writing.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DEBATING MEDIA INFLUENCE
// ================= ::::::::::::::::::::::::::::::
export const B2_U57_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: In my well-informed opinion...',
  explanation: 'How to use compound adjectives naturally to express nuanced opinions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally describe a very convincing but potentially biased news source?`,
    options: ['It is a very well-produced but one-sided channel.', 'It is good but bad.', 'The news is nice.', 'I like the pictures.'],
    correctAnswer: 'It is a very well-produced but one-sided channel.',
    explanation: 'Combining compound adjectives to provide balanced and sophisticated critiques.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U57_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 57',
  explanation: 'Consolidation of Compound Adjectives/Nouns and Media Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'The ___ (thought-provoking/thought-provoked) film won an award.' : 'Media ___ (literacy/reading) is essential today.',
    options: i < 5 ? ['thought-provoking', 'thought-provoked', 'thinking-thought'] : ['literacy', 'reading', 'knowing'],
    correctAnswer: i < 5 ? 'thought-provoking' : 'literacy',
    explanation: 'Final check of key concepts from Unit 57.',
    points: 1
  }))
};

export const B2_UNIT_57 = createB2Unit(
  'b2-u57',
  'Media Literacy & Critical Thinking',
  'Sharpen your critical eye in the information age while mastering compound nouns and adjectives to describe the fast-paced and often biased world of media.',
  ['Form and use compound adjectives (e.g., well-informed, thought-provoking) correctly', 'Identify and use media-specific compound nouns (e.g., social media, broadcast)', 'Analyze media bias, verify sources, and discuss the impact of information with precision'],
  [
    B2_U57_BLOCK1, B2_U57_BLOCK2, B2_U57_BLOCK3, B2_U57_BLOCK4, B2_U57_BLOCK5,
    B2_U57_BLOCK6, B2_U57_BLOCK7, B2_U57_BLOCK8, B2_U57_BLOCK9, B2_U57_BLOCK10
  ]
);

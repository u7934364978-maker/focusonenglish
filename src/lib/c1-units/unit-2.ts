import { Exercise } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 2;

// ============================================
// BLOCK 1: GRAMMAR - ADVANCED NARRATIVE TENSES
// ============================================
export const C1_U2_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Advanced Past Tenses',
  grammarPoint: 'Narrative Tenses',
 explanation: 'Use [[Past Perfect Continuous|Pasado Perfecto Continuo]] for long actions interrupted by a past event.',   questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
 'They ___ on the project for months before it was finally [[approved|aprobado]].',  'By the time the fire [[brigade|brigada]] arrived, the building ___.',       'I ___ to see you at the party, but I had to work late.',
 'She ___ about the [[noise|ruido]], even before we moved in.',  'We ___ for nearly three hours when we saw the [[village|pueblo]].',       'He ___ his lunch when the phone rang.',
 'The [[scientists|científicos]] ___ experiments for years before they found a [[cure|cura]].',       'I ___ of calling you when your message arrived.',
 'They ___ in a small flat until they won the [[lottery|lotería]].',       'The rain ___ by the time we left the house.'
    ][i],
    options: [
      ['were working', 'had been working', 'had worked'],
      ['already collapsed', 'was already collapsing', 'had already collapsed'],
      ['had been hoping', 'was hoping', 'have been hoping'],
      ['always complained', 'had always complained', 'was always complaining'],
      ['were walking', 'had been walking', 'have been walking'],
      ['had just finished', 'just finished', 'was just finishing'],
      ['were conducting', 'conducted', 'had been conducting'],
      ['thought', 'was thinking', 'had thought'],
      ['lived', 'were living', 'had been living'],
      ['stopped', 'was stopping', 'had stopped']
    ][i],
    correctAnswer: [
      'had been working',
      'had already collapsed',
      'had been hoping',
      'was always complaining',
      'had been walking',
      'had just finished',
      'had been conducting',
      'was thinking',
      'had been living',
      'had stopped'
    ][i],
    explanation: 'Correct use of Past Perfect and Past Continuous.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - NARRATIVE STYLES
// ============================================
export const C1_U2_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Narrative Styles & Devices',
 explanation: 'Use specific verbs and structures to [[enhance|mejorar]] storytelling.',   questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
 'The [[protagonist|protagonista]] ___ into the room, hoping no one would notice him.',  'He ___ his teeth in [[anger|ira]] when he heard the news.',  'The wind ___ through the trees, creating an [[eerie|inquietante]] sound.',  'She ___ the words under her [[breath|aliento]] so I couldn\'t hear them.',  'Suddenly, a loud scream ___ the [[silence|silencio]] of the night.',       'He ___ at the map, trying to make sense of the directions.',
      'The water ___ gently against the side of the boat.',
 'They ___ through the forest, "[[wary|cautelosos]] of any movement.',       'A look of pure joy ___ across her face.',
      'The engine ___ to life after several attempts.'
    ][i],
    options: [
      ['walked', 'crept', 'ran'],
      ['gritted', 'closed', 'brushed'],
      ['sang', 'howled', 'whispered'],
      ['said', 'shouted', 'muttered'],
      ['broke', 'shattered', 'ended'],
      ['looked', 'peered', 'saw'],
      ['hit', 'pushed', 'lapped'],
      ['walked', 'treaded', 'ran'],
      ['went', 'came', 'spread'],
      ['started', 'roared', 'jumped']
    ][i],
    correctAnswer: [
      'crept',
      'gritted',
      'howled',
      'muttered',
      'shattered',
      'peered',
      'lapped',
      'treaded',
      'spread',
      'roared'
    ][i],
    explanation: 'Descriptive narrative verbs.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - DESCRIPTIVE ADJECTIVES
// ============================================
export const C1_U2_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Descriptive Adjectives for Settings',
 explanation: 'Advanced vocabulary for describing places and [[atmospheres|atmósferas]].',   questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'The abandoned house had a very ___ atmosphere.',
      'The view from the top of the mountain was ___.',
 'The streets were ___ during the [[festival|festival]].',       'The hotel room was ___ and modern.',
 'The [[silence|silencio]] in the library was ___.',  'The storm was ___, causing much [[damage|daño]].',       'The cave was ___ and damp.',
 'The market was full of ___ [[exotic|exóticas]] fruits.',       'The old man told a ___ story about the war.',
      'The task ahead of us was ___.'
    ][i],
    options: [
      ['bright', 'happy', 'eerie'],
      ['nice', 'good', 'breathtaking'],
      ['bustling', 'quiet', 'empty'],
      ['dirty', 'immaculate', 'messy'],
      ['partial', 'absolute', 'some'],
      ['ferocious', 'weak', 'gentle'],
      ['pitch-black', 'well-lit', 'bright'],
      ['dull', 'pale', 'vibrant'],
      ['boring', 'riveting', 'tedious'],
      ['easy', 'formidable', 'simple']
    ][i],
    correctAnswer: [
      'eerie',
      'breathtaking',
      'bustling',
      'immaculate',
      'absolute',
      'ferocious',
      'pitch-black',
      'vibrant',
      'riveting',
      'formidable'
    ][i],
    explanation: 'Using sophisticated synonyms for basic adjectives.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: USE OF ENGLISH - TRANSFORMATION
// ============================================
export const C1_U2_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'key-word-transformation',
  title: 'Narrative Transformation',
 explanation: 'Rewrite the sentence using the [[key word|palabra clave]].',   questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'key-word-transformation',
    sentence: [
      'The rain started as soon as we arrived.',
 'He had never seen such a beautiful [[sunset|atardecer]] before.',       'I didn\'t realize my mistake until later.',
      'It was the first time she had ever flown.',
 'They had been working all day and were [[exhausted|exhaustos]].',       'The show ended and the audience stood up.',
      'I was just about to leave when he arrived.',
 'She started crying the moment she heard the [[news|noticias]].',       'He forgot his keys and had to wait outside.',
      'The movie was so boring that I fell asleep.'
    ][i],
    keyWord: [
      'SOONER',
      'NEVER',
      'DID',
      'NEVER',
      'WORKING',
      'HAD',
      'POINT',
      'BURST',
      'HAVING',
      'SUCH'
    ][i],
    startOfAnswer: [
      'No ___',
      'Never ___',
      'Only later ___',
      'She ___',
      '___',
      'No sooner ___',
      'I was on the ___',
      'She ___',
      '___',
      'It was ___'
    ][i],
    correctAnswer: [
      'sooner had we arrived than it started to rain',
      'had he seen such a beautiful sunset',
      'did I realize my mistake',
      'had never flown before',
      'Having been working all day, they were exhausted',
      'had the show ended than the audience stood up',
      'point of leaving when he arrived',
      'burst into tears the moment she heard the news',
      'Having forgotten his keys, he had to wait outside',
      'such a boring movie that I fell asleep'
    ][i],
    explanation: 'Advanced narrative transformations.',
    points: 2
  }))
};

// ============================================
// BLOCK 5: MIXED PRACTICE
// ============================================
export const C1_U2_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Mixed Narrative Practice',
 explanation: 'Final check of Unit 2 [[concepts|conceptos]].',   questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'multiple-choice',
    question: [
 'Hardly ___ when the [[lights|luces]] went out.',       'The forest was ___ with the sound of insects.',
      'He ___ to have been the last person to see her.',
      'By next year, they ___ together for twenty years.',
      '___ her work, she went for a walk.',
 'The ___ of the waves was [[soothing|relajante]].',       'She ___ at the clock, realizing she was late.',
      'It was ___ a surprise that she couldn\'t speak.',
 'Never ___ such an amazing [[performance|actuación]].',       'He ___ always losing his keys.'
    ][i],
    options: [
      ['we had started', 'did we start', 'had we started'],
      ['alive', 'living', 'vibrant'],
      ['thinks', 'was thinking', 'is thought'],
      ['will be', 'are', 'will have been'],
      ['Finished', 'Finishing', 'Having finished'],
      ['murmur', 'sound', 'noise'],
      ['looked', 'saw', 'glanced'],
      ['quite', 'such', 'so'],
      ['have I seen', 'I have seen', 'I saw'],
      ['is', 'had been', 'was']
    ][i],
    correctAnswer: [
      'had we started',
      'alive',
      'is thought',
      'will have been',
      'Having finished',
      'murmur',
      'glanced',
      'quite',
      'have I seen',
      'was'
    ][i],
    explanation: 'Review of advanced narrative structures.',
    points: 1
  }))
};

export const unit2 = createC1Unit(
  'c1-u2',
  'Narrative Tenses & Narrative Styles',
  'Master the art of storytelling with advanced tenses and descriptive vocabulary.',
  ['Use complex past tenses', 'Enhance storytelling with descriptive verbs', 'Perform advanced narrative transformations'],
  [
    C1_U2_BLOCK1, C1_U2_BLOCK2, C1_U2_BLOCK3, C1_U2_BLOCK4, C1_U2_BLOCK5
  ]
);

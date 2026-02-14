import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 27;

// ============================================
// BLOCK 1: ADVANCED QUANTIFIERS (10 items)
// ============================================
export const C1_U27_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Quantifiers: Each, Every, & All',
  grammarPoint: 'Quantifiers',
  explanation: '[[Quantifiers|Cuantificadores]] like "each" and "every" have subtle [[differences|diferencias]] in [[meaning|significado]] and [[usage|uso]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'fill-blank',
      question: '___ of the [[members|miembros]] was [[given|dado]] a [[gift|regalo]].',
      correctAnswer: 'Each',
      explanation: '"Each" focuses on individuals in a group.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'fill-blank',
      question: '___ [[single|único]] [[person|persona]] was [[there|allí]].',
      correctAnswer: 'Every',
      explanation: '"Every single" is an emphatic quantifier.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'fill-blank',
      question: '[[All|Toda]] the ___ we [[received|recibimos]] was [[useful|útil]].',
      correctAnswer: 'information',
      explanation: '"All" + uncountable noun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'fill-blank',
      question: 'They [[spent|pasaron]] the ___ [[day|día]] [[working|trabajando]].',
      correctAnswer: 'whole',
      explanation: '"The whole" + singular countable noun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'fill-blank',
      question: '___ [[sides|lados]] [[agreed|acordaron]] to the [[deal|trato]].',
      correctAnswer: 'Both',
      explanation: '"Both" for two entities.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'fill-blank',
      question: '___ of the [[two|dos]] [[options|opciones]] is [[good|buena]].',
      correctAnswer: 'Neither',
      explanation: '"Neither" for zero out of two.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'fill-blank',
      question: 'You can [[take|tomar]] ___ of the [[buses|autobuses]].',
      correctAnswer: 'either',
      explanation: '"Either" for one out of two.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'fill-blank',
      question: '___ of the [[students|estudiantes]] [[passed|pasó]].',
      correctAnswer: 'None',
      explanation: '"None" for zero out of many.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'fill-blank',
      question: '___ [[people|personas]] [[know|saben]] the [[truth|verdad]].',
      correctAnswer: 'Few',
      explanation: '"Few" means not many (negative connotation).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'fill-blank',
      question: 'We have ___ [[hope|esperanza]] [[left|restante]].',
      correctAnswer: 'little',
      explanation: '"Little" for uncountable nouns (negative connotation).',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: FORMAL PARTITIVES (10 items)
// ============================================
export const C1_U27_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Partitives: A stroke of, A speck of, & A shred of',
  grammarPoint: 'Partitives',
  explanation: 'Use specific [[partitives|partitivos]] to [[measure|medir]] uncountable [[nouns|sustantivos]] precisely.',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: 'It was a ___ of [[luck|suerte]].',
      options: ['stroke', 'piece', 'bit'],
      correctAnswer: 'stroke',
      explanation: '"A stroke of luck" is a fixed phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'There isn\'t a ___ of [[evidence|evidencia]].',
      options: ['shred', 'speck', 'drop'],
      correctAnswer: 'shred',
      explanation: '"A shred of evidence" means a tiny amount.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'He has a ___ of [[dust|polvo]] on his [[coat|abrigo]].',
      options: ['speck', 'grain', 'slice'],
      correctAnswer: 'speck',
      explanation: '"A speck of dust".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'I have a ___ of [[truth|verdad]] in my [[story|historia]].',
      options: ['grain', 'piece', 'bit'],
      correctAnswer: 'grain',
      explanation: '"A grain of truth".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'A ___ of [[water|agua]] was on the [[leaf|hoja]].',
      options: ['drop', 'shred', 'stroke'],
      correctAnswer: 'drop',
      explanation: '"A drop of water".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'He gave me a ___ of [[advice|consejo]].',
      options: ['piece', 'shred', 'grain'],
      correctAnswer: 'piece',
      explanation: 'Standard partitive for advice.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: 'A ___ of [[anger|ira]] [[seized|se apoderó]] him.',
      options: ['fit', 'stroke', 'shred'],
      correctAnswer: 'fit',
      explanation: '"A fit of anger/rage".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'She felt a ___ of [[guilt|culpa]].',
      options: ['pang', 'drop', 'speck'],
      correctAnswer: 'pang',
      explanation: '"A pang of guilt/regret".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'A ___ of [[wind|viento]] [[blew|sopló]] her [[hat|sombrero]] off.',
      options: ['gust', 'shred', 'stroke'],
      correctAnswer: 'gust',
      explanation: '"A gust of wind".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'A ___ of [[grass|hierba]] was [[green|verde]].',
      options: ['blade', 'leaf', 'grain'],
      correctAnswer: 'blade',
      explanation: '"A blade of grass".',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: COLLECTIVE NOUNS (10 items)
// ============================================
export const C1_U27_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Quantification: Collective Nouns',
  grammarPoint: 'Nouns',
  explanation: 'Use specific [[collective nouns|sustantivos colectivos]] for groups of [[animals|animales]] or [[things|cosas]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'fill-blank',
      question: 'A ___ of [[birds|pájaros]] [[flew|voló]] [[south|sur]].',
      correctAnswer: 'flock',
      explanation: '"A flock of birds/sheep".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'fill-blank',
      question: 'A ___ of [[elephants|elefantes]] crossed the [[plain|llanura]].',
      correctAnswer: 'herd',
      explanation: '"A herd of cattle/elephants".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'fill-blank',
      question: 'A ___ of [[wolves|lobos]] [[howled|aulló]].',
      correctAnswer: 'pack',
      explanation: '"A pack of wolves/dogs/cards".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'fill-blank',
      question: 'A ___ of [[fish|peces]] [[swam|nadó]] [[past|por delante]].',
      correctAnswer: 'school',
      explanation: '"A school of fish/dolphins".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'fill-blank',
      question: 'A ___ of [[bees|abejas]] [[attacked|atacó]].',
      correctAnswer: 'swarm',
      explanation: '"A swarm of bees/insects".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'fill-blank',
      question: 'A ___ of [[lions|leones]] was [[resting|descansando]].',
      correctAnswer: 'pride',
      explanation: '"A pride of lions".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'fill-blank',
      question: 'A ___ of [[cookies|galletas]] was in the [[oven|horno]].',
      correctAnswer: 'batch',
      explanation: '"A batch of bread/cookies/data".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'fill-blank',
      question: 'A ___ of [[keys|llaves]] was on the [[table|mesa]].',
      correctAnswer: 'bunch',
      explanation: '"A bunch of keys/flowers/grapes".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'fill-blank',
      question: 'A ___ of [[rules|reglas]] must be [[followed|seguidas]].',
      correctAnswer: 'set',
      explanation: '"A set of rules/tools/teeth".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'fill-blank',
      question: 'A ___ of [[events|eventos]] [[led|llevó]] to the [[war|guerra]].',
      correctAnswer: 'series',
      explanation: '"A series of events/accidents".',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: NEGATIVE QUANTIFIERS (10 items)
// ============================================
export const C1_U27_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Quantification: Negative & Emphatic',
  grammarPoint: 'Quantifiers',
  explanation: 'Use [[negative|negativos]] quantifiers and phrases like "not a single" or "hardly any" for [[emphasis|énfasis]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'There was ___ any [[food|comida]] [[left|restante]].',
      options: ['hardly', 'mostly', 'nearly'],
      correctAnswer: 'hardly',
      explanation: '"Hardly any" means almost none.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'Not a ___ [[soul|alma]] was [[seen|vista]].',
      options: ['single', 'one', 'person'],
      correctAnswer: 'single',
      explanation: '"Not a single" is very emphatic.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'She has ___ to [[no|ninguna]] [[money|dinero]].',
      options: ['next', 'near', 'close'],
      correctAnswer: 'next',
      explanation: '"Next to no" means almost zero.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'There is ___ [[point|sentido]] in [[waiting|esperar]].',
      options: ['little', 'few', 'small'],
      correctAnswer: 'little',
      explanation: '"Little point" means no reason.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: '___ any [[progress|progreso]] has been [[made|hecho]].',
      options: ['Scarcely', 'Fairly', 'Highly'],
      correctAnswer: 'Scarcely',
      explanation: '"Scarcely any" is a formal synonym for "hardly any".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: '___ whatsoever.',
      options: ['None', 'Nothing', 'No one'],
      correctAnswer: 'None',
      explanation: '"Whatsoever" adds emphasis to negative quantifiers.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'They have ___ [[little|poca]] [[time|tiempo]].',
      options: ['precious', 'very', 'highly'],
      correctAnswer: 'precious',
      explanation: '"Precious little" is an emphatic way to say "very little".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'I saw ___ if [[any|algunos]] [[birds|pájaros]].',
      options: ['few', 'little', 'small'],
      correctAnswer: 'few',
      explanation: '"Few if any" is a common formal phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'There is ___ any [[hope|esperanza]].',
      options: ['barely', 'mostly', 'nearly'],
      correctAnswer: 'barely',
      explanation: '"Barely any" for very small amounts.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: '___ of them [[came|vino]].',
      options: ['Neither', 'None', 'Either'],
      correctAnswer: 'Neither',
      explanation: 'Negative quantifier for two.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U27_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Key Word Transformation: Quantification',
  grammarPoint: 'Mixed Review',
  explanation: 'Rewrite the [[sentence|oración]] using the [[given|dada]] word.',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'fill-blank',
      question: 'Almost no students came to the class. (HARDLY) \n ___ students came to the class.',
      correctAnswer: 'Hardly any',
      explanation: 'Using "hardly any" for "almost no".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'fill-blank',
      question: 'There is no evidence at all. (SHRED) \n There is not a ___ evidence.',
      correctAnswer: 'shred of',
      explanation: 'Using a specific partitive.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'fill-blank',
      question: 'I was very lucky. (STROKE) \n It was a ___ luck.',
      correctAnswer: 'stroke of',
      explanation: 'Fixed partitive phrase.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'fill-blank',
      question: 'Every person was given a prize. (EACH) \n ___ of the people was given a prize.',
      correctAnswer: 'Each',
      explanation: 'Switching quantifiers.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'fill-blank',
      question: 'She has almost no money. (NEXT) \n She has ___ no money.',
      correctAnswer: 'next to',
      explanation: 'Emphatic negative phrase.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'fill-blank',
      question: 'A group of lions was seen. (PRIDE) \n A ___ was seen.',
      correctAnswer: 'pride of lions',
      explanation: 'Collective noun.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'fill-blank',
      question: 'Not one person survived. (SINGLE) \n Not a ___ survived.',
      correctAnswer: 'single person',
      explanation: 'Emphatic negative.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'fill-blank',
      question: 'I have very little time left. (PRECIOUS) \n I have ___ time left.',
      correctAnswer: 'precious little',
      explanation: 'Emphatic modifier.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'fill-blank',
      question: 'They both failed. (NEITHER) \n ___ of them passed.',
      correctAnswer: 'Neither',
      explanation: 'Negative quantifier.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'fill-blank',
      question: 'I only have a tiny bit of hope. (GRAIN) \n I only have a ___ hope.',
      correctAnswer: 'grain of',
      explanation: 'Partitive for abstract nouns.',
      points: 2
    }
  ]
};

export const unit27: Lesson = createC1Unit(
  'c1-u27',
  'Advanced Quantifiers & Partitives',
  'Mastering the precision of measurement and group nouns in English.',
  ['Distinguish between each, every, and all', 'Use partitives like a shred of and a stroke of', 'Apply collective nouns correctly'],
  [
    C1_U27_BLOCK1, C1_U27_BLOCK2, C1_U27_BLOCK3, C1_U27_BLOCK4, C1_U27_BLOCK5
  ]
);

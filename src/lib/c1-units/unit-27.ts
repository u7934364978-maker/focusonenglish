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
  explanation: '"[[Quantifiers|Cuantificadores]] like "each" and "every" have subtle [[differences|diferencias]] in [[meaning|significado]] and [[usage|uso]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: '___ of the [[members|miembros]] was [[given|dado]] a [[gift|regalo]].',
      options: ['Every', 'Each', 'All'],
      correctAnswer: 'Each',
      explanation: '"Each" focuses on individuals in a group.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: '___ [[single|único]] [[person|persona]] was [[there|allí]].',
      options: ['Each', 'Whole', 'Every'],
      correctAnswer: 'Every',
      explanation: '"Every single" is an emphatic quantifier.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: '"[[All|Toda]] the ___ we [[received|recibimos]] was [[useful|útil]].',
      options: ['information', 'informations', 'informed'],
      correctAnswer: 'information',
      explanation: '"All" + uncountable noun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: 'They [[spent|pasaron]] the ___ [[day|día]] [[working|trabajando]].',
      options: ['all', 'whole', 'every'],
      correctAnswer: 'whole',
      explanation: '"The whole" + singular countable noun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: '___ [[sides|lados]] [[agreed|acordaron]] to the [[deal|trato]].',
      options: ['Either', 'Neither', 'Both'],
      correctAnswer: 'Both',
      explanation: '"Both" for two entities.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: '___ of the [[two|dos]] [[options|opciones]] is [[good|buena]].',
      options: ['Neither', 'Either', 'Both'],
      correctAnswer: 'Neither',
      explanation: '"Neither" for zero out of two.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: 'You can [[take|tomar]] ___ of the [[buses|autobuses]].',
      options: ['neither', 'either', 'both'],
      correctAnswer: 'either',
      explanation: '"Either" for one out of two.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: '___ of the [[students|estudiantes]] [[passed|pasó]].',
      options: ['Neither', 'Nothing', 'None'],
      correctAnswer: 'None',
      explanation: '"None" for zero out of many.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: '___ [[people|personas]] [[know|saben]] the [[truth|verdad]].',
      options: ['Few', 'Little', 'Small'],
      correctAnswer: 'Few',
      explanation: '"Few" means not many (negative connotation).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: 'We have ___ [[hope|esperanza]] [[left|restante]].',
      options: ['few', 'little', 'small'],
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
      options: ['piece', 'stroke', 'bit'],
      correctAnswer: 'stroke',
      explanation: '"A stroke of luck" is a fixed phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'There isn\'t a ___ of [[evidence|evidencia]].',
      options: ['speck', 'drop', 'shred'],
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
      options: ['piece', 'grain', 'bit'],
      correctAnswer: 'grain',
      explanation: '"A grain of truth".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'A ___ of [[water|agua]] was on the [[leaf|hoja]].',
      options: ['shred', 'stroke', 'drop'],
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
      options: ['stroke', 'fit', 'shred'],
      correctAnswer: 'fit',
      explanation: '"A fit of anger/rage".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'She felt a ___ of [[guilt|culpa]].',
      options: ['drop', 'speck', 'pang'],
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
      explanation: '"A guest of wind".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'A ___ of [[grass|hierba]] was [[green|verde]].',
      options: ['leaf', 'blade', 'grain'],
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
      type: 'multiple-choice',
      question: 'A ___ of [[birds|pájaros]] [[flew|voló]] [[south|sur]].',
      options: ['herd', 'flock', 'pack'],
      correctAnswer: 'flock',
      explanation: '"A flock of birds/sheep".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: 'A ___ of [[elephants|elefantes]] crossed the [[plain|llanura]].',
      options: ['flock', 'school', 'herd'],
      correctAnswer: 'herd',
      explanation: '"A herd of cattle/elephants".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: 'A ___ of [[wolves|lobos]] [[howled|aulló]].',
      options: ['pack', 'swarm', 'pride'],
      correctAnswer: 'pack',
      explanation: '"A pack of wolves/dogs/cards".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: 'A ___ of [[fish|peces]] [[swam|nadó]] [[past|por delante]].',
      options: ['herd', 'school', 'pack'],
      correctAnswer: 'school',
      explanation: '"A school of fish/dolphins".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: 'A ___ of [[bees|abejas]] [[attacked|atacó]].',
      options: ['herd', 'flock', 'swarm'],
      correctAnswer: 'swarm',
      explanation: '"A swarm of bees/insects".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'A ___ of [[lions|leones]] was [[resting|descansando]].',
      options: ['pride', 'pack', 'herd'],
      correctAnswer: 'pride',
      explanation: '"A pride of lions".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: 'A ___ of [[cookies|galletas]] was in the [[oven|horno]].',
      options: ['set', 'batch', 'bunch'],
      correctAnswer: 'batch',
      explanation: '"A batch of bread/cookies/data".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: 'A ___ of [[keys|llaves]] was on the [[table|mesa]].',
      options: ['set', 'pack', 'bunch'],
      correctAnswer: 'bunch',
      explanation: '"A bunch of keys/flowers/grapes".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'A ___ of [[rules|reglas]] must be [[followed|seguidas]].',
      options: ['set', 'batch', 'series'],
      correctAnswer: 'set',
      explanation: '"A set of rules/tools/teeth".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: 'A ___ of [[events|eventos]] [[led|llevó]] to the [[war|guerra]].',
      options: ['batch', 'series', 'set'],
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
      options: ['mostly', 'hardly', 'nearly'],
      correctAnswer: 'hardly',
      explanation: '"Hardly any" means almost none.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'Not a ___ [[soul|alma]] was [[seen|vista]].',
      options: ['one', 'person', 'single'],
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
      options: ['few', 'little', 'small'],
      correctAnswer: 'little',
      explanation: '"Little point" means no reason.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: '___ any [[progress|progreso]] has been [[made|hecho]].',
      options: ['Fairly', 'Highly', 'Scarcely'],
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
      options: ['very', 'precious', 'highly'],
      correctAnswer: 'precious',
      explanation: '"Precious little" is an emphatic way to say "very little".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'I saw ___ if [[any|algunos]] [[birds|pájaros]].',
      options: ['little', 'small', 'few'],
      correctAnswer: 'few',
      explanation: '"Few if any" is a common formal phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'There is ___ any [[hope|esperanza]].',
      options: ['hardly', 'barely', 'scarcely'],
      correctAnswer: 'hardly',
      explanation: '"Hardly any" focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'Not ___ [[word|palabra]] was [[spoken|doblada]].',
      options: ['one', 'a', 'the'],
      correctAnswer: 'a',
      explanation: '"Not a word".',
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
  explanation: 'Rewrite the [[sentence|oración]] using the [[given|dada]] [[word|palabra]] so that it has a [[similar|similar]] meaning.',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'Almost no one arrived on time. (HARDLY) \n ___ any one arrived on time.',
      options: ['Nearly', 'Hardly', 'Scarcely'],
      correctAnswer: 'Hardly',
      explanation: '"Hardly any" for emphasis.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'Every individual member was informed. (EACH) \n ___ member was informed.',
      options: ['All', 'Every', 'Each'],
      correctAnswer: 'Each',
      explanation: '"Each" for individual focus.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'There is no evidence at all. (SHRED) \n There is not a ___ of evidence.',
      options: ['shred', 'speck', 'grain'],
      correctAnswer: 'shred',
      explanation: 'Partitive for evidence.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'A group of wolves were hunting. (PACK) \n A ___ of wolves were hunting.',
      options: ['herd', 'pack', 'flock'],
      correctAnswer: 'pack',
      explanation: 'Collective noun for wolves.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'We have almost no money left. (NEXT) \n We have ___ to no money left.',
      options: ['near', 'close', 'next'],
      correctAnswer: 'next',
      explanation: 'Idiomatic "almost none".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'Neither of the two plans worked. (EITHER) \n ___ of the two plans worked.',
      options: ['Neither', 'Either', 'Both'],
      correctAnswer: 'Neither',
      explanation: 'Maintaining negative meaning.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'A tiny bit of truth was in his lie. (GRAIN) \n There was a ___ of truth in his lie.',
      options: ['speck', 'grain', 'shred'],
      correctAnswer: 'grain',
      explanation: 'Partitive for truth.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'Not a single person saw him. (SOUL) \n Not a ___ saw him.',
      options: ['person', 'one', 'soul'],
      correctAnswer: 'soul',
      explanation: 'Emphatic noun for people.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'The group of birds flew away. (FLOCK) \n The ___ of birds flew away.',
      options: ['flock', 'herd', 'pack'],
      correctAnswer: 'flock',
      explanation: 'Collective noun for birds.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'He has very little hope left. (PRECIOUS) \n He has ___ little hope left.',
      options: ['very', 'precious', 'highly'],
      correctAnswer: 'precious',
      explanation: 'Emphatic modifier for "little".',
      points: 2
    }
  ]
};

export const unit27: Lesson = createC1Unit(
  'c1-u27',
  'Advanced Quantification & Nouns',
  'Mastering the precision of quantity, group nouns, and emphatic negative structures.',
  ['Differentiate between each, every, and all', 'Use formal partitives and collective nouns', 'Apply emphatic and negative quantifiers'],
  [
    C1_U27_BLOCK1, C1_U27_BLOCK2, C1_U27_BLOCK3, C1_U27_BLOCK4, C1_U27_BLOCK5
  ]
);

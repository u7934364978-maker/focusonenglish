import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 30;

// ============================================
// BLOCK 1: ADVANCED GRAMMAR REVIEW (10 items)
// ============================================
export const C1_U30_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Review: Conditionals, Inversion, & Clefts',
  grammarPoint: 'Mixed Grammar',
  explanation: 'A [[comprehensive|integral]] review of the most [[challenging|desafiantes]] [[structures|estructuras]] at C1 level.',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'fill-blank',
      question: '___ you [[need|necesitar]] [[anything|algo]], please [[let|deja]] me [[know|saber]].',
      correctAnswer: 'Should',
      explanation: 'Formal conditional inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'fill-blank',
      question: '___ have I [[witnessed|presenciado]] such [[courage|coraje]].',
      correctAnswer: 'Never',
      explanation: 'Negative inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'fill-blank',
      question: 'It was [[because|porque]] of his [[help|ayuda]] ___ I [[succeeded|logré]].',
      correctAnswer: 'that',
      explanation: 'It-cleft focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'fill-blank',
      question: 'Had I ___ the [[truth|verdad]], I [[would|habría]] [[acted|actuado]] [[differently|diferente]].',
      correctAnswer: 'known',
      explanation: 'Third conditional inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'fill-blank',
      question: 'What I ___ most is [[traveling|viajar]].',
      correctAnswer: 'enjoy',
      explanation: 'Wh-cleft focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'fill-blank',
      question: 'I [[wish|deseo]] I ___ [[gone|ido]] to the [[party|fiesta]] [[yesterday|ayer]].',
      correctAnswer: 'had',
      explanation: 'Regret about the past (Wish + Past Perfect).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'fill-blank',
      question: 'He [[spoke|habló]] as ___ he [[were|fuese]] an [[expert|experto]].',
      correctAnswer: 'if',
      explanation: '"As if" with subjunctive.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'fill-blank',
      question: '___ only was she [[smart|inteligente]], but [[also|también]] [[kind|amable]].',
      correctAnswer: 'Not',
      explanation: '"Not only" inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'fill-blank',
      question: 'Only after ___ the [[report|informe]] did he [[rest|descansar]].',
      correctAnswer: 'finishing',
      explanation: 'Only after + gerund inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'fill-blank',
      question: 'It ___ time we [[left|nos fuéramos]].',
      correctAnswer: 'is',
      explanation: '"It is time" + past simple for present meaning.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: ADVANCED LEXIS REVIEW (10 items)
// ============================================
export const C1_U30_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Review: Idioms, Phrasal Verbs, & Collocations',
  grammarPoint: 'Mixed Vocabulary',
  explanation: 'Recapping [[high-level|alto nivel]] [[expressions|expresiones]] for [[natural|natural]] and [[fluent|fluida]] communication.',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: 'The [[film|película]] was a ___ from the [[book|libro]].',
      options: ['far cry', 'long way', 'deep end'],
      correctAnswer: 'far cry',
      explanation: '"A far cry from" means very different.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'He needs to ___ his [[French|francés]].',
      options: ['brush up on', 'get along with', 'look forward to'],
      correctAnswer: 'brush up on',
      explanation: '"Brush up on" means to improve a skill.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'She is ___ above her [[peers|compañeros]].',
      options: ['head and shoulders', 'eye to eye', 'arm in arm'],
      correctAnswer: 'head and shoulders',
      explanation: 'Much better than.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'The [[storm|tormenta]] ___ on the [[crops|cosechas]].',
      options: ['wreaked havoc', 'made waves', 'did good'],
      correctAnswer: 'wreaked havoc',
      explanation: 'Caused great damage.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'I was ___ [[devastated|devastado]] by the [[news|noticias]].',
      options: ['absolutely', 'very', 'fairly'],
      correctAnswer: 'absolutely',
      explanation: 'Ungradable adjective modifier.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'He ___ [[running|correr]] like a [[duck|pato]] to [[water|agua]].',
      options: ['took to', 'went for', 'got in'],
      correctAnswer: 'took to',
      explanation: '"Take to" means to start liking/doing something easily.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: 'We must ___ the [[root|raíz]] [[cause|causa]].',
      options: ['address', 'see', 'fix'],
      correctAnswer: 'address',
      explanation: 'Formal Lexis for "deal with".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'It was a ___ of [[luck|suerte]].',
      options: ['stroke', 'piece', 'bit'],
      correctAnswer: 'stroke',
      explanation: 'Fixed partitive phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'The [[two|dos]] [[friends|amigos]] are as [[like|parecidos]] as two ___ in a [[pod|vaina]].',
      options: ['peas', 'beans', 'carrots'],
      correctAnswer: 'peas',
      explanation: 'Exactly alike.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'He is in a ___ of his [[own|propia]].',
      options: ['league', 'team', 'class'],
      correctAnswer: 'league',
      explanation: 'Uniquely excellent.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: ACADEMIC & BUSINESS STYLE (10 items)
// ============================================
export const C1_U30_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Review: Register & Nominalization',
  grammarPoint: 'Style',
  explanation: 'Ensuring your [[writing|escritura]] is [[appropriate|apropiada]] for [[professional|profesionales]] settings.',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'fill-blank',
      question: 'The ___ of the [[proposal|propuesta]] was [[disappointing|decepcionante]].',
      correctAnswer: 'refusal',
      explanation: 'Nominalization of "refuse".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'fill-blank',
      question: '___, we must [[continue|continuar]].',
      correctAnswer: 'Nonetheless',
      explanation: 'Formal discourse marker.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'fill-blank',
      question: '___ has been [[observed|observado]] that [[trends|tendencias]] are [[changing|cambiando]].',
      correctAnswer: 'It',
      explanation: 'Impersonal passive.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'fill-blank',
      question: 'The ___ of the [[law|ley]] took [[years|años]].',
      correctAnswer: 'implementation',
      explanation: 'Nominalization of "implement".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'fill-blank',
      question: '___, the [[costs|costes]] are [[too|demasiado]] [[high|altos]].',
      correctAnswer: 'Furthermore',
      explanation: 'Formal addition marker.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'fill-blank',
      question: 'In ___, the [[study|estudio]] is [[valid|válido]].',
      correctAnswer: 'conclusion',
      explanation: 'Finalizing an argument.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'fill-blank',
      question: '___ that [[data|datos]] are [[correct|correctos]], we [[win|ganamos]].',
      correctAnswer: 'Assuming',
      explanation: 'Formal conditional premise.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'fill-blank',
      question: 'The ___ [[revealed|reveló]] many [[errors|errores]].',
      correctAnswer: 'analysis',
      explanation: 'Nominalization of "analyze".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'fill-blank',
      question: '___ the [[weather|clima]], the [[event|evento]] [[continued|continuó]].',
      correctAnswer: 'Notwithstanding',
      explanation: 'Formal "despite".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'fill-blank',
      question: '___ that [[everyone|todos]] [[agrees|están de acuerdo]], we [[start|empezamos]].',
      correctAnswer: 'Provided',
      explanation: 'Formal condition.',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: ERROR CORRECTION (10 items)
// ============================================
export const C1_U30_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Final Mastery: Error Correction',
  grammarPoint: 'Mixed Review',
  explanation: 'Identify and [[correct|corregir]] the [[errors|errores]] in these [[complex|complejas]] sentences.',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'I am [[looking|buscando]] forward to ___ you.',
      options: ['meeting', 'meet', 'to meet'],
      correctAnswer: 'meeting',
      explanation: '"Look forward to" + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'He [[denied|negó]] ___ the [[money|dinero]].',
      options: ['stealing', 'to steal', 'stole'],
      correctAnswer: 'stealing',
      explanation: '"Deny" + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'If I ___ him, I [[would|habría]] [[told|dicho]] you.',
      options: ['had seen', 'saw', 'have seen'],
      correctAnswer: 'had seen',
      explanation: 'Third conditional (Past Perfect).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'She [[suggested|sugirió]] that he ___ [[immediately|inmediatamente]].',
      options: ['leave', 'leaves', 'to leave'],
      correctAnswer: 'leave',
      explanation: 'Subjunctive after "suggest".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'Not until [[then|entonces]] ___ [[know|saber]] the [[truth|verdad]].',
      options: ['did I', 'I did', 'I have'],
      correctAnswer: 'did I',
      explanation: 'Negative inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'They are ___ [[getting|levantarse]] up [[early|temprano]].',
      options: ['used to', 'use to', 'get used to'],
      correctAnswer: 'used to',
      explanation: '"Be used to" + gerund for habit.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'He is the [[man|hombre]] ___ [[car|coche]] was [[stolen|robado]].',
      options: ['whose', 'who\'s', 'who'],
      correctAnswer: 'whose',
      explanation: 'Possessive relative pronoun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'Neither of the [[two|dos]] ___ [[ready|listo]].',
      options: ['is', 'are', 'be'],
      correctAnswer: 'is',
      explanation: '"Neither" takes a singular verb.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'Hardly ___ [[arrived|llegado]] [[when|cuando]] it [[rained|llovió]].',
      options: ['had he', 'he had', 'did he'],
      correctAnswer: 'had he',
      explanation: 'Negative inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'I\'d [[rather|preferiría]] you ___ [[go|vayas]].',
      options: ['didn\'t', 'don\'t', 'not'],
      correctAnswer: 'didn\'t',
      explanation: '"Would rather" + past simple for preference about others.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: FINAL KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U30_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Final Mastery: Mixed Transformation',
  grammarPoint: 'Mixed Review',
  explanation: 'The [[ultimate|última]] test of your [[linguistic|lingüística]] [[flexibility|flexibilidad]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'fill-blank',
      question: 'I only survived because of her. (FOR) \n If it ___ her, I wouldn\'t have survived.',
      correctAnswer: 'hadn\'t been for',
      explanation: 'Conditional phrase.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'fill-blank',
      question: 'He is much better than the others. (HEAD) \n He is ___ others.',
      correctAnswer: 'head and shoulders above the',
      explanation: 'Idiomatic comparison.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'fill-blank',
      question: 'They didn\'t realize the danger until it was too late. (DID) \n Not until it was too late ___ the danger.',
      correctAnswer: 'did they realize',
      explanation: 'Negative inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'fill-blank',
      question: 'I really love this place. (WHAT) \n ___ love is this place.',
      correctAnswer: 'What I really',
      explanation: 'Wh-cleft.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'fill-blank',
      question: 'He almost never goes out. (HARDLY) \n He ___ goes out.',
      correctAnswer: 'hardly ever',
      explanation: 'Adverb of frequency.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'fill-blank',
      question: 'They analyzed the data thoroughly. (ANALYSIS) \n They made a ___ the data.',
      correctAnswer: 'thorough analysis of',
      explanation: 'Nominalization.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'fill-blank',
      question: 'I\'m sure he was happy. (MUST) \n He ___ happy.',
      correctAnswer: 'must have been',
      explanation: 'Modal for past deduction.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'fill-blank',
      question: 'It is possible that he forgot. (MIGHT) \n He ___ forgotten.',
      correctAnswer: 'might have',
      explanation: 'Modal for past possibility.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'fill-blank',
      question: 'They were so poor they couldn\'t buy bread. (SUCH) \n ___ was their [[poverty|pobreza]] that they couldn\'t buy bread.',
      correctAnswer: 'Such',
      explanation: '"Such" inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'fill-blank',
      question: 'He works hard, but he doesn\'t succeed. (THOUGH) \n Hard ___ , he doesn\'t succeed.',
      correctAnswer: 'though he works',
      explanation: 'Concession inversion.',
      points: 2
    }
  ]
};

export const unit30: Lesson = createC1Unit(
  'c1-u30',
  'Comprehensive Review & Final Mastery',
  'A final synthesis of all C1 skills, ensuring you are ready for professional and academic success at the highest level.',
  ['Consolidate all advanced grammar points', 'Review high-level Lexis and idioms', 'Perfect your formal and academic writing style'],
  [
    C1_U30_BLOCK1, C1_U30_BLOCK2, C1_U30_BLOCK3, C1_U30_BLOCK4, C1_U30_BLOCK5
  ]
);

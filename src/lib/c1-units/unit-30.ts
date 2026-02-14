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
 explanation: 'A [[comprehensive|integral]] review of the most [[challenging|desafiantes]] [[structures|estructuras]] at C1 level.',   questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
 question: '___ you [[need|necesitar]] [[anything|algo]], please [[let|deja]] me [[know|saber]].',       options: ['Would', 'If', 'Should'],
      correctAnswer: 'Should',
      explanation: 'Formal conditional inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
 question: '___ have I [[witnessed|presenciado]] such [[courage|coraje]].',       options: ['Seldom', 'Never', 'Rarely'],
      correctAnswer: 'Never',
      explanation: 'Negative inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
 question: 'It was [[because|porque]] of his [[help|ayuda]] ___ I [[succeeded|logré]].',       options: ['which', 'that', 'who'],
      correctAnswer: 'that',
      explanation: 'It-cleft focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
 question: 'Had I ___ the [[truth|verdad]], I [[would|habría]] [[acted|actuado]] [[differently|diferente]].',       options: ['known', 'knew', 'knowing'],
      correctAnswer: 'known',
      explanation: 'Third conditional inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
 question: 'What I ___ most is [[traveling|viajar]].',       options: ['am enjoying', 'enjoyment', 'enjoy'],
      correctAnswer: 'enjoy',
      explanation: 'Wh-cleft focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
 question: 'I [[wish|deseo]] I ___ [[gone|ido]] to the [[party|fiesta]] [[yesterday|ayer]].',       options: ['had', 'would have', 'have'],
      correctAnswer: 'had',
      explanation: 'Regret about the past (Wish + Past Perfect).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
 question: 'He [[spoke|habló]] as ___ he [[were|fuese]] an [[expert|experto]].',       options: ['if', 'though', 'as'],
      correctAnswer: 'if',
      explanation: '"As if" with subjunctive.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
 question: '___ only was she [[smart|inteligente]], but [[also|también]] [[kind|amable]].',       options: ['But', 'Just', 'Not'],
      correctAnswer: 'Not',
      explanation: '"Not only" inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
 question: 'Only after ___ the [[report|informe]] did he [[rest|descansar]].',       options: ['to finish', 'finishing', 'finish'],
      correctAnswer: 'finishing',
      explanation: 'Only after + gerund inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
 question: 'It ___ time we [[left|nos fuéramos]].',       options: ['is', 'was', 'be'],
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
 explanation: 'Recapping [[high-level|alto nivel]] [[expressions|expresiones]] for [[natural|natural]] and [[fluent|fluida]] communication.',   questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
 question: 'The [[film|película]] was a ___ from the [[book|libro]].',       options: ['long way', 'far cry', 'deep end'],
      correctAnswer: 'far cry',
      explanation: '"A far cry from" means very different.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
 question: 'He needs to ___ his [[French|francés]].',       options: ['brush up on', 'get along with', 'look forward to'],
      correctAnswer: 'brush up on',
      explanation: '"Brush up on" means to improve a skill.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
 question: 'She is ___ above her [[peers|compañeros]].',       options: ['eye to eye', 'head and shoulders', 'arm in arm'],
      correctAnswer: 'head and shoulders',
      explanation: 'Much better than.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
 question: 'The [[storm|tormenta]] ___ on the [[crops|cosechas]].',       options: ['wreaked havoc', 'made waves', 'did good'],
      correctAnswer: 'wreaked havoc',
      explanation: 'Caused great damage.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
 question: 'I was ___ [[devastated|devastado]] by the [[news|noticias]].',       options: ['very', 'fairly', 'absolutely'],
      correctAnswer: 'absolutely',
      explanation: 'Ungradable adjective modifier.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
 question: 'He ___ [[running|correr]] like a [[duck|pato]] to [[water|agua]].',       options: ['took to', 'went for', 'got in'],
      correctAnswer: 'took to',
      explanation: '"Take to" means to start liking/doing something easily.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
 question: 'We must ___ the [[root|raíz]] [[cause|causa]].',       options: ['see', 'address', 'fix'],
      correctAnswer: 'address',
      explanation: 'Formal Lexis for "deal with".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
 question: 'It was a ___ of [[luck|suerte]].',       options: ['piece', 'stroke', 'bit'],
      correctAnswer: 'stroke',
      explanation: 'Fixed partitive phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
 question: 'The [[two|dos]] [[friends|amigos]] are as [[like|parecidos]] as two ___ in a [[pod|vaina]].',       options: ['beans', 'peas', 'carrots'],
      correctAnswer: 'peas',
      explanation: 'Exactly alike.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
 question: 'He is in a ___ of his [[own|propia]].',       options: ['league', 'team', 'class'],
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
 explanation: 'Ensuring your [[writing|escritura]] is [[appropriate|apropiada]] for [[professional|profesionales]] settings.',   questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
 question: 'The ___ of the [[proposal|propuesta]] was [[disappointing|decepcionante]].',       options: ['refusal', 'refuse', 'refusing'],
      correctAnswer: 'refusal',
      explanation: 'Nominalization of "refuse".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
 question: '___, we must [[continue|continuar]].',       options: ['Similarly', 'Instead', 'Nonetheless'],
      correctAnswer: 'Nonetheless',
      explanation: 'Formal discourse marker.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
 question: '___ has been [[observed|observado]] that [[trends|tendencias]] are [[changing|cambiando]].',       options: ['It', 'That', 'There'],
      correctAnswer: 'It',
      explanation: 'Impersonal passive.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
 question: 'The ___ of the [[law|ley]] took [[years|años]].',       options: ['implementing', 'implementation', 'implement'],
      correctAnswer: 'implementation',
      explanation: 'Nominalization of "implement".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
 question: '___, the [[costs|costes]] are [[too|demasiado]] [[high|altos]].',       options: ['Furthermore', 'However', 'Converserly'],
      correctAnswer: 'Furthermore',
      explanation: 'Formal addition marker.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
 question: 'In ___, the [[study|estudio]] is [[valid|válido]].',       options: ['conclude', 'conclusion', 'conclusive'],
      correctAnswer: 'conclusion',
      explanation: 'Finalizing an argument.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
 question: '___ that [[data|datos]] are [[correct|correctos]], we [[win|ganamos]].',       options: ['Assuming', 'Assume', 'Assumed'],
      correctAnswer: 'Assuming',
      explanation: 'Formal conditional premise.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
 question: 'The ___ [[revealed|reveló]] many [[errors|errores]].',       options: ['analysis', 'analytical', 'analyze'],
      correctAnswer: 'analysis',
      explanation: 'Nominalization of "analyze".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
 question: '___ the [[weather|clima]], the [[event|evento]] [[continued|continuó]].',       options: ['Instead', 'Notwithstanding', 'Moreover'],
      correctAnswer: 'Notwithstanding',
      explanation: 'Formal "despite".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
 question: '___ that [[everyone|todos]] [[agrees|están de acuerdo]], we [[start|empezamos]].',       options: ['Provided', 'Providing', 'Provides'],
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
 explanation: 'Identify and [[correct|corregir]] the [[errors|errores]] in these [[complex|complejas]] sentences.',   questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
 question: 'I am [[looking|buscando]] forward to ___ you.',       options: ['meeting', 'meet', 'to meet'],
      correctAnswer: 'meeting',
      explanation: '"Look forward to" + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
 question: 'He [[denied|negó]] ___ the [[money|dinero]].',       options: ['stealing', 'to steal', 'stole'],
      correctAnswer: 'stealing',
      explanation: '"Deny" + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
 question: 'If I ___ him, I [[would|habría]] [[told|dicho]] you.',       options: ['had seen', 'saw', 'have seen'],
      correctAnswer: 'had seen',
      explanation: 'Third conditional (Past Perfect).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
 question: 'She [[suggested|sugirió]] that he ___ [[immediately|inmediatamente]].',       options: ['leaves', 'leave', 'to leave'],
      correctAnswer: 'leave',
      explanation: 'Subjunctive after "suggest".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
 question: 'Not until [[then|entonces]] ___ [[know|saber]] the [[truth|verdad]].',       options: ['did I', 'I did', 'I have'],
      correctAnswer: 'did I',
      explanation: 'Negative inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
 question: 'They are ___ [[getting|levantarse]] up [[early|temprano]].',       options: ['use to', 'get used to', 'used to'],
      correctAnswer: 'used to',
      explanation: '"Be used to" + gerund for habit.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
 question: 'He is the [[man|hombre]] ___ [[car|coche]] was [[stolen|robado]].',       options: ['who\'s', 'who', 'whose'],
      correctAnswer: 'whose',
      explanation: 'Possessive relative pronoun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
 question: 'Neither of the [[two|dos]] ___ [[ready|listo]].',       options: ['is', 'are', 'be'],
      correctAnswer: 'is',
      explanation: '"Neither" takes a singular verb.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
 question: 'Hardly ___ [[arrived|llegado]] [[when|cuando]] it [[rained|llovió]].',       options: ['he had', 'had he', 'did he'],
      correctAnswer: 'had he',
      explanation: 'Negative inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
 question: 'I\'d [[rather|preferiría]] you ___ [[go|vayas]].',       options: ['haven\'t', 'don\'t', 'didn\'t'],
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
 explanation: 'The [[ultimate|última]] test of your [[linguistic|lingüística]] [[flexibility|flexibilidad]].',   questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'I only survived because of her. (FOR) \n If it ___ her, I wouldn\'t have survived.',
      options: ['hadn\'t been for', 'not been for', 'hadn\'t been'],
      correctAnswer: 'hadn\'t been for',
      explanation: 'Conditional phrase.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'He is much better than the others. (HEAD) \n He is ___ others.',
      options: ['head and shoulders above the', 'head and above the', 'shoulders above the'],
      correctAnswer: 'head and shoulders above the',
      explanation: 'Idiomatic comparison.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'They didn\'t realize the danger until it was too late. (DID) \n Not until it was too late ___ the danger.',
      options: ['did they realized', 'they realized', 'did they realize'],
      correctAnswer: 'did they realize',
      explanation: 'Negative inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'I really love this place. (WHAT) \n ___ love is this place.',
      options: ['What really I', 'What I really', 'That I really'],
      correctAnswer: 'What I really',
      explanation: 'Wh-cleft.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'He almost never goes out. (HARDLY) \n He ___ goes out.',
      options: ['hardly ever', 'hardly never', 'almost ever'],
      correctAnswer: 'hardly ever',
      explanation: 'Adverb of frequency.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'They analyzed the data thoroughly. (ANALYSIS) \n They made a ___ the data.',
      options: ['thorough analysis of', 'thoroughly analysis of', 'thorough analysis to'],
      correctAnswer: 'thorough analysis of',
      explanation: 'Nominalization.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'I\'m sure he was happy. (MUST) \n He ___ happy.',
      options: ['must been', 'must have be', 'must have been'],
      correctAnswer: 'must have been',
      explanation: 'Modal for past deduction.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'It is possible that he forgot. (MIGHT) \n He ___ forgotten.',
      options: ['might has', 'might have', 'might been'],
      correctAnswer: 'might have',
      explanation: 'Modal for past possibility.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
 question: 'They were so poor they couldn\'t buy bread. (SUCH) \n ___ was their [[poverty|pobreza]] that they couldn\'t buy bread.',       options: ['So', 'Such', 'How'],
      correctAnswer: 'Such',
      explanation: '"Such" inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'He only said it because he was angry. (WHAT) \n ___ said it was because he was angry.',
      options: ['What he', 'That he', 'Why he'],
      correctAnswer: 'What he',
      explanation: 'Wh-cleft.',
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

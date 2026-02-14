import { Exercise } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 16;

// ============================================
// BLOCK 1: DEGREES OF CERTAINTY (10 items)
// ============================================
export const C1_U16_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Modal Verbs: Degrees of Certainty',
  grammarPoint: 'Modals',
 explanation: 'Advanced speakers use [[modals|modales]] to express varying [[degrees|grados]] of [[certainty|certeza]] about the [[present|presente]] and [[past|pasado]].',   questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
 question: 'He ___ be [[exhausted|exhausto]] after [[working|trabajar]] for 12 [[hours|horas]].',       options: ['must', 'might', 'can'],
      correctAnswer: 'must',
 explanation: 'Must expresses a strong [[logical|lógica]] [[deduction|deducción]] in the present.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
 question: 'The [[documents|documentos]] ___ have been [[lost|perdidos]] in the [[mail|correo]].',       options: ['must', 'might', 'should'],
      correctAnswer: 'might',
 explanation: 'Might have + past participle expresses a [[possibility|posibilidad]] in the past.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
 question: 'It ___ be [[true|verdad]] that he [[resigned|renunció]]!',       options: ['must not', 'cannot', 'should not'],
      correctAnswer: 'cannot',
 explanation: 'Cannot (can\'t) expresses [[disbelief|incredulidad]] or logical [[impossibility|imposibilidad]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
 question: 'They ___ have [[arrived|llegado]] by now; the [[flight|vuelo]] was on time.',       options: ['should', 'might', 'must'],
      correctAnswer: 'should',
 explanation: 'Should have expresses an [[expectation|expectativa]] about the past/present.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
 question: 'You ___ have [[told|dicho]] me you were [[coming|viniendo]]!',       options: ['must', 'could', 'should'],
      correctAnswer: 'could',
 explanation: 'Could have here expresses [[criticism|crítica]] about a missed opportunity.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
 question: 'She ___ well be the [[best|mejor]] [[candidate|candidata]] for the [[job|puesto]].',       options: ['may', 'can', 'should'],
      correctAnswer: 'may',
 explanation: 'May well expresses a [[strong|fuerte]] [[possibility|posibilidad]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
 question: 'The [[keys|llaves]] ___ to be [[somewhere|en algún lugar]] in the [[house|casa]].',       options: ['are bound', 'are likely', 'should'],
      correctAnswer: 'are bound',
 explanation: 'Bound to means something is [[certain|seguro]] to happen or be true.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
 question: 'It is highly ___ that they will [[finish|terminar]] by [[Friday|viernes]].',       options: ['unlikely', 'impossible', 'unable'],
      correctAnswer: 'unlikely',
 explanation: 'Unlikely expresses low [[probability|probabilidad]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
 question: 'He ___ be very [[difficult|difícil]] when he is [[tired|cansado]].',       options: ['can', 'might', 'must'],
      correctAnswer: 'can',
 explanation: 'Can expresses a [[characteristic|característica]] or [[tendency|tendencia]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
 question: 'There ___ to be more [[police|policía]] on the [[streets|calles]].',       options: ['ought', 'must', 'should'],
      correctAnswer: 'ought',
 explanation: 'Ought to expresses [[obligation|obligación]] or strong [[probability|probabilidad]].',       points: 1
    }
  ]
};

// ============================================
// BLOCK 2: MODAL SUBSTITUTES & PHRASES (10 items)
// ============================================
export const C1_U16_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Advanced Modal Substitutes',
  grammarPoint: 'Modals',
 explanation: 'C1 learners use [[phrases|frases]] like be supposed to be liable to", and be due to instead of basic [[modals|modales]].',   questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
 question: 'The [[meeting|reunión]] is ___ to [[start|comenzar]] at 10:00.',       options: ['due', 'bound', 'liable'],
      correctAnswer: 'due',
 explanation: 'Be due to is used for [[scheduled|programados]] [[events|eventos]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
 question: 'You are ___ to [[wear|llevar]] a [[helmet|casco]] at all [[times|momentos]].',       options: ['supposed', 'liable', 'bound'],
      correctAnswer: 'supposed',
 explanation: 'Be supposed to expresses [[obligation|obligación]] or expectation.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
 question: 'The [[old|viejo]] [[bridge|puente]] is ___ to [[collapse|derrumbarse]] in a [[storm|tormenta]].',       options: ['liable', 'due', 'supposed'],
      correctAnswer: 'liable',
 explanation: 'Be liable to means having a [[tendency|tendencia]] toward something [[negative|negativo]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
 question: 'It\'s ___ to [[rain|llover]] this [[afternoon|tarde]].',       options: ['likely', 'due', 'liable'],
      correctAnswer: 'likely',
 explanation: 'Likely expresses [[probability|probabilidad]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
 question: 'They were ___ to [[arrive|llegar]] [[hours|horas]] [[ago|atrás]].',       options: ['supposed', 'due', 'liable'],
      correctAnswer: 'supposed',
 explanation: 'Supposed to can imply they [[didn\'t|no lo hicieron]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
 question: 'His [[actions|acciones]] are ___ to [[cause|causar]] a [[scandal|escándalo]].',       options: ['bound', 'due', 'liable'],
      correctAnswer: 'bound',
 explanation: 'Bound to means it is [[inevitable|inevitable]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
 question: 'The [[train|tren]] is ___ [[at|a las]] 5 PM.',       options: ['due', 'likely', 'supposed'],
      correctAnswer: 'due',
 explanation: 'Due used as an [[adjective|adjetivo]] for [[arrival|llegada]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
 question: 'Is it ___ that the [[prices|precios]] will [[rise|subir]]?',       options: ['probable', 'due', 'liable'],
      correctAnswer: 'probable',
 explanation: 'Probable is a formal synonym for [[likely|probable]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
 question: 'I am ___ to [[forget|olvidar]] my [[umbrella|paraguas]].',       options: ['prone', 'due', 'supposed'],
      correctAnswer: 'prone',
 explanation: 'Be prone to means having a [[tendency|tendencia]] to do something (usually bad).',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
 question: 'She is ___ to [[win|ganar]] the [[competition|competición]].',       options: ['tipped', 'liable', 'supposed'],
      correctAnswer: 'tipped',
 explanation: 'Be tipped to means [[predicted|predicho]] to win.',       points: 1
    }
  ]
};

// ============================================
// BLOCK 3: SPECULATION ABOUT THE PAST (10 items)
// ============================================
export const C1_U16_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Past Modals for Speculation & Regret',
  grammarPoint: 'Past Modals',
 explanation: 'Use Modal + have + Past Participle to [[speculate|especular]] about or express [[feelings|sentimientos]] about [[past|pasados]] events.',   questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
 question: 'I ___ have [[studied|estudiado]] harder for the [[exam|examen]].',       options: ['should', 'must', 'could'],
      correctAnswer: 'should',
 explanation: 'Should have expresses [[regret|arrepentimiento]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
 question: 'He ___ have [[stolen|robado]] the [[money|dinero]]; he was with me.',       options: ['cannot', 'must not', 'might not'],
      correctAnswer: 'cannot',
 explanation: 'Cannot have expresses strong past [[disbelief|incredulidad]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
 question: 'They ___ have [[missed|perdido]] the [[turn|giro]].',       options: ['must', 'should', 'can'],
      correctAnswer: 'must',
 explanation: 'Must have expresses strong past [[deduction|deducción]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
 question: 'You ___ have [[bought|comprado]] [[flowers|flores]], but thank you!',       options: ['need not', 'must not', 'should not'],
      correctAnswer: 'need not',
 explanation: 'Need not have means an [[action|acción]] was performed but was [[unnecessary|innecesaria]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
 question: '___ they have [[decided|decidido]] to [[stay|quedarse]] [[longer|más tiempo]]?',       options: ['Could', 'Must', 'Should'],
      correctAnswer: 'Could',
 explanation: 'Could is more common than may in [[questions|preguntas]] about possibility.',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
 question: 'It ___ have been [[worse|peor]] than it [[was|fue]].',       options: ['might', 'should', 'must'],
      correctAnswer: 'might',
 explanation: 'Might have for past [[possibility|posibilidad]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
 question: 'She ___ have been [[informed|informada]] [[earlier|antes]].',       options: ['should', 'must', 'can'],
      correctAnswer: 'should',
 explanation: 'Should have been (passive) expresses a missed [[obligation|obligación]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
 question: 'They ___ have [[helped|ayudado]] if we had [[asked|pedido]].',       options: ['would', 'must', 'should'],
      correctAnswer: 'would',
 explanation: 'Third [[conditional|condicional]] speculation.',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
 question: 'He ___ have been [[waiting|esperando]] for [[hours|horas]].',       options: ['could', 'should', 'must'],
      correctAnswer: 'could',
 explanation: 'Could have been -ing for continuous past [[possibility|posibilidad]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
 question: 'You ___ to have [[checked|revisado]] the [[oil|aceite]].',       options: ['ought', 'must', 'should'],
      correctAnswer: 'ought',
 explanation: 'Ought to have is a synonym for [[should have|deberías haber]].',       points: 2
    }
  ]
};

// ============================================
// BLOCK 4: MODALS OF OBLIGATION & PERMISSION (10 items)
// ============================================
export const C1_U16_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Nuance in Obligation & Permission',
  grammarPoint: 'Modals',
 explanation: 'Advanced modals distinguish between [[internal|interna]] and [[external|externa]] [[obligation|obligación]].',   questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
 question: 'I ___ remember to [[buy|comprar]] [[milk|leche]].',       options: ['must', 'have to', 'should'],
      correctAnswer: 'must',
 explanation: 'Must is often for [[personal|personales]] obligations.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
 question: 'In this [[country|país]], you ___ [[drive|conducir]] on the [[left|izquierda]].',       options: ['have to', 'must', 'ought to'],
      correctAnswer: 'have to',
 explanation: 'Have to is for [[external|externas]] rules/laws.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
 question: 'You ___ [[smoke|fumar]] in [[hospitals|hospitales]].',       options: ['mustn\'t', 'don\'t have to', 'should not'],
      correctAnswer: 'mustn\'t',
 explanation: 'Mustn\'t expresses [[prohibition|prohibición]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
 question: 'I ___ not have [[worried|preocupado]]; the [[test|test]] was easy.',       options: ['need', 'must', 'should'],
      correctAnswer: 'need',
      explanation: '"Need not have" (performed action was unnecessary).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
 question: 'I ___ to [[buy|comprar]] [[bread|pan]], so I [[didn\'t|no lo hice]].',       options: ['didn\'t need', 'needn\'t', 'mustn\'t'],
      correctAnswer: 'didn\'t need',
      explanation: '"Didn\'t need to" (action was not performed).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
 question: '___ I [[be|ser]] so [[bold|atrevido]] as to [[suggest|sugerir]] a [[change|cambio]]?',       options: ['May', 'Can', 'Should'],
      correctAnswer: 'May',
 explanation: 'May is very [[formal|formal]] for permission.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
 question: 'You ___ as well [[start|empezar]] now.',       options: ['might', 'must', 'should'],
      correctAnswer: 'might',
 explanation: 'Might as well is an [[idiom|idiom]] for a suggestion with no better alternative.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
 question: 'He ___ not be [[denied|negado]] his [[rights|derechos]].',       options: ['shall', 'must', 'ought'],
      correctAnswer: 'shall',
 explanation: 'Shall expresses [[strong|fuerte]] [[determination|determinación]] or legal command.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
 question: 'You ___ to have [[informed|informado]] us of the [[delay|retraso]].',       options: ['must', 'should', 'ought'],
      correctAnswer: 'ought',
      explanation: '"Ought to" expresses moral obligation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
 question: 'We ___ better [[leave|irnos]] before the [[rush|hora]] [[hour|punta]].',       options: ['should', 'would', 'had'],
      correctAnswer: 'had',
      explanation: '"Had better" is for strong recommendations.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: UNIT 16 REVIEW (10 items)
// ============================================
export const C1_U16_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Unit 16 Review',
  grammarPoint: 'Mixed Modals',
 explanation: 'Final check of Unit 16 [[concepts|conceptos]].',   questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
 question: 'He ___ have [[arrived|llegado]] by now, surely.',       options: ['should', 'might', 'can'],
      correctAnswer: 'should',
      explanation: 'Expectation about the present.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
 question: 'You ___ have [[told|dicho]] me you were [[allergic|alérgico]].',       options: ['might', 'should', 'must'],
      correctAnswer: 'should',
      explanation: 'Past regret/criticism.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
 question: 'They ___ to [[arrive|llegar]] at [[any|cualquier]] [[moment|momento]].',       options: ['are due', 'are liable', 'are supposed'],
      correctAnswer: 'are due',
      explanation: 'Scheduled arrival.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
 question: 'It ___ have been his [[brother|hermano]] you saw.',       options: ['should', 'might', 'can'],
      correctAnswer: 'might',
      explanation: 'Past possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
 question: 'You ___ to [[check|revisar]] the [[details|detalles]].',       options: ['must', 'should', 'ought'],
      correctAnswer: 'ought',
      explanation: '"Ought" pairs with "to".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
 question: 'I ___ [[need|necesitar]] your [[help|ayuda]] [[later|más tarde]].',       options: ['might', 'must', 'should'],
      correctAnswer: 'might',
      explanation: 'Future possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
 question: 'It ___ be [[midnight|medianoche]] [[already|ya]].',       options: ['must', 'can', 'should'],
      correctAnswer: 'must',
      explanation: 'Logical deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
 question: 'We ___ as well [[pay|pagar]] now.',       options: ['must', 'might', 'should'],
      correctAnswer: 'might',
      explanation: '"Might as well" structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
 question: 'You ___ to have [[called|llamado]].',       options: ['ought', 'must', 'should'],
      correctAnswer: 'ought',
      explanation: 'Past obligation with "to".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
 question: 'She ___ have been [[informed|informada]].',       options: ['must', 'might', 'should'],
      correctAnswer: 'should',
      explanation: 'Expectation/obligation.',
      points: 1
    }
  ]
};

export const unit16 = createC1Unit(
  'c1-u16',
  'Advanced Modals & Speculation',
  'Master the nuances of modal verbs to express degrees of certainty, speculation about the past, and subtle obligations.',
  ['Use modals to express varying degrees of certainty and deduction', 'Apply past modals for speculation and regret', 'Incorporate modal substitutes like "be due to" and "be liable to"'],
  [
    C1_U16_BLOCK1, C1_U16_BLOCK2, C1_U16_BLOCK3, C1_U16_BLOCK4, C1_U16_BLOCK5
  ]
);

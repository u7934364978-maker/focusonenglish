import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 6;

// ============================================
// BLOCK 1: THREE-PART PHRASAL VERBS (10 items)
// ============================================
export const C1_U6_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Advanced Three-part Phrasal Verbs',
  grammarPoint: 'Three-part Phrasal Verbs',
  explanation: 'These verbs consist of a [[verb|verbo]] + [[particle|partícula]] + [[preposition|preposición]]. They are extremely common in [[advanced|avanzado]] English and often convey specific nuances.',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'fill-blank',
      question: 'After the [[scandal|escándalo]], the minister was forced to [[come|venir]] [[down|abajo]] heavily ___ his staff.',
      correctAnswer: 'on',
      explanation: '"Come down on" means to [[punish|castigar]] or [[criticize|criticar]] severely.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'fill-blank',
      question: 'I simply cannot [[put|poner]] [[up|arriba]] ___ such [[outrageous|indignante]] behavior any longer.',
      correctAnswer: 'with',
      explanation: '"Put up with" means to [[tolerate|tolerar]] something [[unpleasant|desagradable]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'fill-blank',
      question: 'The CEO has [[come|venido]] [[in|dentro]] ___ a lot of [[criticism|crítica]] lately.',
      correctAnswer: 'for',
      explanation: '"Come in for" is used when [[receiving|recibir]] something [[negative|negativo]] like [[blame|culpa]] or criticism.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'fill-blank',
      question: 'We need to [[face|enfrentar]] [[up|arriba]] ___ the fact that our [[resources|recursos]] are [[depleted|agotados]].',
      correctAnswer: 'to',
      explanation: '"Face up to" means to [[accept|aceptar]] and [[deal|lidiar]] with a [[difficult|difícil]] situation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'fill-blank',
      question: 'He managed to [[get|conseguir]] [[away|lejos]] ___ cheating on the [[exam|examen]].',
      correctAnswer: 'with',
      explanation: '"Get away with" means to [[escape|escapar]] [[punishment|castigo]] for a [[wrongdoing|fechoría]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'fill-blank',
      question: 'You should [[look|mirar]] [[up|arriba]] ___ those who have [[achieved|logrado]] great things through [[integrity|integridad]].',
      correctAnswer: 'to',
      explanation: '"Look up to" means to [[admire|admirar]] or [[respect|respetar]] someone.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'fill-blank',
      question: 'It\'s hard to [[keep|mantener]] [[up|arriba]] ___ the [[rapid|rápido]] [[pace|ritmo]] of [[technological|tecnológico]] [[change|cambio]].',
      correctAnswer: 'with',
      explanation: '"Keep up with" means to [[stay|mantenerse]] at the same [[level|nivel]] or [[speed|velocidad]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'fill-blank',
      question: 'We have [[run|corrido]] [[out|fuera]] ___ [[patience|paciencia]] with the [[constant|constante]] [[delays|retrasos]].',
      correctAnswer: 'of',
      explanation: '"Run out of" means to have [[none|nada]] [[left|restante]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'fill-blank',
      question: 'She decided to [[cut|cortar]] [[back|atrás]] ___ her [[spending|gastos]] to [[save|ahorrar]] for a [[house|casa]].',
      correctAnswer: 'on',
      explanation: '"Cut back on" means to [[reduce|reducir]] the [[amount|cantidad]] of something.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'fill-blank',
      question: 'How did you [[get|conseguir]] [[round|alrededor]] ___ [[finishing|terminar]] the report so [[quickly|rápidamente]]?',
      correctAnswer: 'to',
      explanation: '"Get round to" means to [[finally|finalmente]] find the [[time|tiempo]] to do something.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: FUTURE CONTINUOUS & PERFECT (10 items)
// ============================================
export const C1_U6_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Future Perspectives: Continuous vs Perfect',
  grammarPoint: 'Future Tenses',
  explanation: 'Use the [[Future Continuous|futuro continuo]] for [[ongoing|en curso]] actions and the [[Future Perfect|futuro perfecto]] for actions [[completed|completadas]] by a certain time.',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: 'By the time the [[proposals|propuestas]] are [[reviewed|revisadas]], we ___ our [[strategy|estrategia]].',
      options: ['will have finalized', 'will be finalizing', 'will finalize'],
      correctAnswer: 'will have finalized',
      explanation: 'Action [[completed|completada]] before a future point.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'This time next [[month|mes]], I ___ [[across|a través de]] the [[Atlantic|Atlántico]].',
      options: ['will be sailing', 'will have sailed', 'will sail'],
      correctAnswer: 'will be sailing',
      explanation: 'Action in [[progress|progreso]] at a specific future time.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'In five [[years|años]], will the [[company|empresa]] ___ its [[carbon|carbono]] [[footprint|huella]]?',
      options: ['have offset', 'be offsetting', 'offset'],
      correctAnswer: 'have offset',
      explanation: 'Asking about a [[finished|finalizado]] [[result|resultado]] in the future.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'I suppose you ___ [[wondering|preguntándote]] why I [[called|llamé]] this [[meeting|reunión]].',
      options: ['will be wondering', 'will have wondered', 'will wonder'],
      correctAnswer: 'will be wondering',
      explanation: 'The future continuous can be used to [[predict|predecir]] or [[assume|asumir]] a [[current|actual]] state.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'Don\'t [[phone|llamar]] them now; they ___ [[dinner|cena]].',
      options: ['will be having', 'will have had', 'will have'],
      correctAnswer: 'will be having',
      explanation: 'Predicting an [[ongoing|en curso]] action in the [[immediate|inmediato]] future.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'By [[sunset|el atardecer]], the [[hikers|excursionistas]] ___ twenty [[miles|millas]].',
      options: ['will have covered', 'will be covering', 'will cover'],
      correctAnswer: 'will have covered',
      explanation: 'Action completed by a [[deadline|fecha límite]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: 'If the [[trend|tendencia]] [[continues|continúa]], we ___ in a [[cashless|sin efectivo]] [[society|sociedad]] by 2030.',
      options: ['will be living', 'will have lived', 'will live'],
      correctAnswer: 'will be living',
      explanation: 'Describing a [[continuous|continuo]] state in the future.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'I ___ my [[final|final]] [[exams|exámenes]] by this time tomorrow!',
      options: ['will have finished', 'will be finishing', 'will finish'],
      correctAnswer: 'will have finished',
      explanation: 'Expressing [[relief|alivio]] about a completed future action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'Next [[summer|verano]], scientists ___ the [[long-term|largo plazo]] [[effects|efectos]] of the [[vaccine|vacuna]].',
      options: ['will be monitoring', 'will have monitored', 'will monitor'],
      correctAnswer: 'will be monitoring',
      explanation: 'Action in progress during a future period.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'By the end of the [[decade|década]], AI ___ the [[job|laboral]] [[market|mercado]] [[beyond|más allá de]] [[recognition|reconocimiento]].',
      options: ['will have transformed', 'will be transforming', 'will transform'],
      correctAnswer: 'will have transformed',
      explanation: 'A significant [[change|cambio]] completed by a future point.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U6_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Key Word Transformation: Future & Phrasals',
  grammarPoint: 'Mixed Structures',
  explanation: 'Rewrite the [[sentence|oración]] using the [[given|dada]] word, so that the [[meaning|significado]] stays the same.',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'fill-blank',
      question: 'It is highly likely that they will solve the issue by tomorrow. (HAVE) \n They ___ the issue by tomorrow.',
      correctAnswer: 'will have solved',
      explanation: 'Using the [[Future Perfect|futuro perfecto]] for probability.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'fill-blank',
      question: 'I really don\'t want to tolerate his arrogance anymore. (PUT) \n I refuse to ___ his arrogance anymore.',
      correctAnswer: 'put up with',
      explanation: '"Put up with" is the phrasal verb for [[tolerate|tolerar]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'fill-blank',
      question: 'The meeting will probably still be going on at 5 PM. (BE) \n At 5 PM, they ___ the meeting.',
      correctAnswer: 'will still be having',
      explanation: 'Using the [[Future Continuous|futuro continuo]] for duration.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'fill-blank',
      question: 'He escaped punishment for the mistake. (AWAY) \n He ___ the mistake.',
      correctAnswer: 'got away with',
      explanation: '"Get away with" means to [[avoid|evitar]] consequences.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'fill-blank',
      question: 'They will have finished the bridge before next year. (COMPLETED) \n The bridge ___ by next year.',
      correctAnswer: 'will have been completed',
      explanation: 'Future Perfect [[Passive|pasivo]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'fill-blank',
      question: 'I intend to start my own business soon. (SETTING) \n I ___ my own business soon.',
      correctAnswer: 'will be setting up',
      explanation: '"Set up" means to [[establish|establecer]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'fill-blank',
      question: 'We finally found the time to discuss the merger. (ROUND) \n We finally ___ discussing the merger.',
      correctAnswer: 'got round to',
      explanation: '"Get round to" implies [[finally|finalmente]] doing something.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'fill-blank',
      question: 'By June, she will have worked here for ten years. (BEEN) \n By June, she ___ here for ten years.',
      correctAnswer: 'will have been working',
      explanation: 'Future Perfect [[Continuous|continuo]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'fill-blank',
      question: 'I think the government will reduce taxes next month. (CUT) \n I think the government ___ taxes next month.',
      correctAnswer: 'will cut back on',
      explanation: '"Cut back on" means to [[reduce|reducir]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'fill-blank',
      question: 'The project failed because we didn\'t have enough money. (RAN) \n The project failed because we ___ money.',
      correctAnswer: 'ran out of',
      explanation: '"Run out of" means to have [[no more|no más]].',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: PHRASAL VERBS IN CONTEXT (10 items)
// ============================================
export const C1_U6_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Phrasal Verbs in Social Contexts',
  grammarPoint: 'Idiomatic Phrasal Verbs',
  explanation: 'Select the most [[appropriate|apropiado]] phrasal verb for each [[social|social]] or [[professional|profesional]] situation.',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'I\'m really [[looking|buscando]] ___ seeing you at the [[gala|gala]].',
      options: ['forward to', 'out for', 'up to'],
      correctAnswer: 'forward to',
      explanation: '"Look forward to" expresses [[anticipation|anticipación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'He is always [[showing|mostrando]] ___ with his new [[sports|deportivo]] car.',
      options: ['off', 'up', 'down'],
      correctAnswer: 'off',
      explanation: '"Show off" means to [[brag|presumir]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'We need to [[think|pensar]] ___ a new [[marketing|marketing]] [[scheme|esquema]].',
      options: ['up', 'back', 'over'],
      correctAnswer: 'up',
      explanation: '"Think up" means to [[invent|inventar]] or [[conceive|concebir]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'Could you [[fill|llenar]] me ___ on what [[happened|pasó]] in the meeting?',
      options: ['in', 'out', 'up'],
      correctAnswer: 'in',
      explanation: '"Fill someone in" means to [[inform|informar]] them of [[details|detalles]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'I need to [[brush|cepillar]] ___ my [[French|francés]] before my trip to Paris.',
      options: ['up on', 'out of', 'away with'],
      correctAnswer: 'up on',
      explanation: '"Brush up on" means to [[refresh|refrescar]] [[knowledge|conocimiento]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'The [[engine|motor]] [[cut|cortó]] ___ in the middle of the [[highway|autopista]].',
      options: ['out', 'up', 'off'],
      correctAnswer: 'out',
      explanation: '"Cut out" means to [[stop|parar]] functioning [[suddenly|repentinamente]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'She [[takes|toma]] ___ her [[mother|madre]] in terms of [[musical|musical]] [[talent|talento]].',
      options: ['after', 'on', 'up'],
      correctAnswer: 'after',
      explanation: '"Take after" means to [[resemble|parecerse]] a [[relative|pariente]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'The [[manager|gerente]] [[turned|giró]] ___ our [[request|solicitud]] for a [[raise|aumento]].',
      options: ['down', 'out', 'up'],
      correctAnswer: 'down',
      explanation: '"Turn down" means to [[reject|rechazar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'We should [[set|establecer]] ___ a [[joint|conjunta]] [[venture|empresa]].',
      options: ['up', 'off', 'out'],
      correctAnswer: 'up',
      explanation: '"Set up" means to [[start|empezar]] or [[establish|establecer]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'He is trying to [[get|conseguir]] ___ his [[fear|miedo]] of [[flying|volar]].',
      options: ['over', 'through', 'by'],
      correctAnswer: 'over',
      explanation: '"Get over" means to [[overcome|superar]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: ERROR CORRECTION - FUTURE TENSES (10 items)
// ============================================
export const C1_U6_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Error Correction: Future & Phrasals',
  grammarPoint: 'Mixed Review',
  explanation: 'Identify the [[incorrect|incorrecto]] word or phrase in each [[sentence|oración]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'By next week, I will be finished the whole book.',
      options: ['will be finished', 'will have finished', 'will finish'],
      correctAnswer: 'will have finished',
      explanation: 'Use [[Future Perfect|futuro perfecto]] for [[completion|finalización]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'I can\'t put up for his constant complaining.',
      options: ['put up for', 'put up with', 'put out for'],
      correctAnswer: 'put up with',
      explanation: 'The correct three-part verb is "put up with".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'This time tomorrow, we will have flown to Tokyo.',
      options: ['will have flown', 'will be flying', 'will fly'],
      correctAnswer: 'will be flying',
      explanation: 'The action will be [[in progress|en progreso]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'She has come in for a lot of trouble recently.',
      options: ['come in for', 'come up for', 'come down for'],
      correctAnswer: 'come in for',
      explanation: '"Come in for" is correct for [[receiving|recibir]] criticism/trouble.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'Will you have been living here for long by then?',
      options: ['have been living', 'be living', 'have lived'],
      correctAnswer: 'have been living',
      explanation: 'Correct use of Future Perfect [[Continuous|continuo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'I ran out from milk this morning.',
      options: ['ran out from', 'ran out of', 'ran off with'],
      correctAnswer: 'ran out of',
      explanation: '"Run out of" is the standard phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'I look up for my grandfather because he was very wise.',
      options: ['look up for', 'look up to', 'look out for'],
      correctAnswer: 'look up to',
      explanation: '"Look up to" means to [[admire|admirar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'I will be finishing the report by 5 PM.',
      options: ['will be finishing', 'will have finished', 'will finish'],
      correctAnswer: 'will have finished',
      explanation: 'Indicates [[completion|finalización]] by a deadline.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'He is getting away for murder!',
      options: ['getting away for', 'getting away with', 'getting out of'],
      correctAnswer: 'getting away with',
      explanation: '"Get away with" means to [[escape|escapar]] [[justice|justicia]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'Don\'t worry, I will have sorted it by the time you arrive.',
      options: ['will have sorted', 'will be sorting', 'will sort'],
      correctAnswer: 'will have sorted',
      explanation: 'Action [[guaranteed|garantizada]] to be finished.',
      points: 1
    }
  ]
};

export const unit6: Lesson = createC1Unit(
  'c1-u6',
  'Future Perspectives & Advanced Phrasals',
  'Mastering three-part phrasal verbs and sophisticated future tense structures for C1 fluency.',
  ['Use three-part phrasal verbs accurately', 'Distinguish between Future Continuous and Perfect', 'Transform sentences using advanced structures'],
  [
    C1_U6_BLOCK1, C1_U6_BLOCK2, C1_U6_BLOCK3, C1_U6_BLOCK4, C1_U6_BLOCK5
  ]
);

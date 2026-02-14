import { Exercise } from '../exercise-types';
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
  explanation: 'These verbs consist of a [[verb|verbo]] + "[[particle|partícula]] + "[[preposition|preposición]]. They are extremely common in [[advanced|avanzado]] English and often convey specific nuances.',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'After the [[scandal|escándalo]], the minister was forced to [[come|venir]] [[down|abajo]] heavily ___ his staff.',
      options: ['at', 'on', 'with'],
      correctAnswer: 'on',
      explanation: '"Come down on" means to [[punish|castigar]] or [[criticize|criticar]] severely.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: 'I simply cannot [[put|poner]] [[up|arriba]] ___ such [[outrageous|indignante]] behavior any longer.',
      options: ['on', 'for', 'with'],
      correctAnswer: 'with',
      explanation: '"Put up with" means to [[tolerate|tolerar]] something [[unpleasant|desagradable]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: 'The CEO has [[come|venido]] [[in|dentro]] ___ a lot of [[criticism|crítica]] lately.',
      options: ['to', 'for', 'with'],
      correctAnswer: 'for',
      explanation: '"Come in for" is used when [[receiving|recibir]] something [[negative|negativo]] like [[blame|culpa]] or criticism.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: 'We need to [[face|enfrentar]] [[up|arriba]] ___ the fact that our [[resources|recursos]] are [[depleted|agotados]].',
      options: ['with', 'to', 'on'],
      correctAnswer: 'to',
      explanation: '"Face up to" means to [[accept|aceptar]] and [[deal|lidiar]] with a [[difficult|difícil]] situation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: 'He managed to [[get|conseguir]] [[away|lejos]] ___ cheating on the [[exam|examen]].',
      options: ['of', 'with', 'from'],
      correctAnswer: 'with',
      explanation: '"Get away with" means to [[escape|escapar]] [[punishment|castigo]] for a [[wrongdoing|fechoría]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: 'You should [[look|mirar]] [[up|arriba]] ___ those who have [[achieved|logrado]] great things through [[integrity|integridad]].',
      options: ['at', 'to', 'on'],
      correctAnswer: 'to',
      explanation: '"Look up to" means to [[admire|admirar]] or [[respect|respetar]] someone.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: 'It\'s hard to [[keep|mantener]] [[up|arriba]] ___ the [[rapid|rápido]] [[pace|ritmo]] of [[technological|tecnológico]] [[change|cambio]].',
      options: ['to', 'with', 'on'],
      correctAnswer: 'with',
      explanation: '"Keep up with" means to [[stay|mantenerse]] at the same [[level|nivel]] or [[speed|velocidad]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: 'We have [[run|corrido]] [[out|fuera]] ___ [[patience|paciencia]] with the [[constant|constante]] [[delays|retrasos]].',
      options: ['from', 'with', 'of'],
      correctAnswer: 'of',
      explanation: '"Run out of" means to have [[none|nada]] [[left|restante]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: 'She decided to [[cut|cortar]] [[back|atrás]] ___ her [[spending|gastos]] to [[save|ahorrar]] for a [[house|casa]].',
      options: ['in', 'on', 'at'],
      correctAnswer: 'on',
      explanation: '"Cut back on" means to [[reduce|reducir]] the [[amount|cantidad]] of something.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: 'How did you [[get|conseguir]] [[round|alrededor]] ___ [[finishing|terminar]] the report so [[quickly|rápidamente]]?',
      options: ['on', 'to', 'with'],
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
      options: ['will be finalizing', 'will finalize', 'will have finalized'],
      correctAnswer: 'will have finalized',
      explanation: 'Action [[completed|completada]] before a future point.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'This time next [[month|mes]], I ___ [[across|a través de]] the [[Atlantic|Atlántico]].',
      options: ['will have sailed', 'will be sailing', 'will sail'],
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
      options: ['will have wondered', 'will be wondering', 'will wonder'],
      correctAnswer: 'will be wondering',
      explanation: 'The future continuous can be used to [[predict|predecir]] or [[assume|asumir]] a [[current|actual]] state.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'Don\'t [[phone|llamar]] them now; they ___ [[dinner|cena]].',
      options: ['will have had', 'will have', 'will be having'],
      correctAnswer: 'will be having',
      explanation: 'Predicting an [[ongoing|en curso]] action in the [[immediate|inmediato]] future.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'By [[sunset|el atardecer]], the [[hikers|excursionistas]] ___ twenty [[miles|millas]].',
      options: ['will be covering', 'will have covered', 'will cover'],
      correctAnswer: 'will have covered',
      explanation: 'Action completed by a [[deadline|fecha límite]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: 'If the [[trend|tendencia]] [[continues|continúa]], we ___ in a [[cashless|sin efectivo]] [[society|sociedad]] by 2030.',
      options: ['will have lived', 'will be living', 'will live'],
      correctAnswer: 'will be living',
      explanation: 'Describing a [[continuous|continuo]] state in the future.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'I ___ my [[final|final]] [[exams|exámenes]] by this time tomorrow!',
      options: ['will be finishing', 'will finish', 'will have finished'],
      correctAnswer: 'will have finished',
      explanation: 'Expressing [[relief|alivio]] about a completed future action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'Next [[summer|verano]], scientists ___ the [[long-term|largo plazo]] [[effects|efectos]] of the [[vaccine|vacuna]].',
      options: ['will have monitored', 'will perform', 'will be monitoring'],
      correctAnswer: 'will be monitoring',
      explanation: 'Action in progress during a future period.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'By the end of the [[decade|década]], AI ___ the [[job|laboral]] [[market|mercado]] [[beyond|más allá de]] [[recognition|reconocimiento]].',
      options: ['will be transforming', 'will have transformed', 'will transform'],
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
      type: 'multiple-choice',
      question: 'It is highly likely that they will solve the issue by tomorrow. (HAVE) \n They ___ the issue by tomorrow.',
      options: ['will be solving', 'will solve', 'will have solved'],
      correctAnswer: 'will have solved',
      explanation: 'Using the [[Future Perfect|futuro perfecto]] for probability.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: 'I really don\'t want to tolerate his arrogance anymore. (PUT) \n I refuse to ___ his arrogance anymore.',
      options: ['put in for', 'put down to', 'put up with'],
      correctAnswer: 'put up with',
      explanation: '"Put up with" is the phrasal verb for [[tolerate|tolerar]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: 'The meeting will probably still be going on at 5 PM. (BE) \n At 5 PM, they ___ the meeting.',
      options: ['will have had', 'will still be having', 'will have'],
      correctAnswer: 'will still be having',
      explanation: 'Using the [[Future Continuous|futuro continuo]] for duration.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: 'He escaped punishment for the mistake. (AWAY) \n He ___ the mistake.',
      options: ['got round to', 'got away with', 'got in for'],
      correctAnswer: 'got away with',
      explanation: '"Get away with" means to [[avoid|evitar]] consequences.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: 'They will have finished the bridge before next year. (COMPLETED) \n The bridge ___ by next year.',
      options: ['will be completing', 'will complete', 'will have been completed'],
      correctAnswer: 'will have been completed',
      explanation: 'Future Perfect [[Passive|pasivo]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'I intend to start my own business soon. (SETTING) \n I ___ my own business soon.',
      options: ['will have set up', 'will be setting up', 'will set up'],
      correctAnswer: 'will be setting up',
      explanation: '"Set up" means to [[establish|establecer]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: 'We finally found the time to discuss the merger. (ROUND) \n We finally ___ discussing the merger.',
      options: ['got back to', 'got away with', 'got round to'],
      correctAnswer: 'got round to',
      explanation: '"Get round to" implies [[finally|finalmente]] doing something.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: 'By June, she will have worked here for ten years. (BEEN) \n By June, she ___ here for ten years.',
      options: ['will be working', 'will have worked', 'will have been working'],
      correctAnswer: 'will have been working',
      explanation: 'Future Perfect [[Continuous|continuo]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'I think the government will reduce taxes next month. (CUT) \n I think the government ___ taxes next month.',
      options: ['will cut down in', 'will cut back on', 'will cut out of'],
      correctAnswer: 'will cut back on',
      explanation: '"Cut back on" means to [[reduce|reducir]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: 'The project failed because we didn\'t have enough money. (RAN) \n The project failed because we ___ money.',
      options: ['ran away with', 'ran in for', 'ran out of'],
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
      options: ['out for', 'up to', 'forward to'],
      correctAnswer: 'forward to',
      explanation: '"Look forward to" expresses [[anticipation|anticipación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'He is always [[showing|mostrando]] ___ with his new [[sports|deportivo]] car.',
      options: ['up', 'off', 'down'],
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
      options: ['out', 'in', 'up'],
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
      question: 'The [[event|evento]] was [[called|llamado]] ___ due to the [[heavy|fuerte]] [[rain|lluvia]].',
      options: ['off', 'out', 'away'],
      correctAnswer: 'off',
      explanation: '"Call off" means to [[cancel|cancelar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'We should [[go|ir]] ___ the [[plan|plan]] one more [[time|vez]].',
      options: ['over', 'through', 'into'],
      correctAnswer: 'over',
      explanation: '"Go over" means to [[review|revisar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'I can\'t [[make|hacer]] ___ what that [[sign|letrero]] says.',
      options: ['out', 'up', 'off'],
      correctAnswer: 'out',
      explanation: '"Make out" means to [[discern|discernir]] or [[understand|entender]] with difficulty.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'He [[turned|volvió]] ___ [[late|tarde]] for the [[interview|entrevista]].',
      options: ['up', 'in', 'on'],
      correctAnswer: 'up',
      explanation: '"Turn up" means to [[arrive|llegar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'I need to [[work|trabajar]] ___ how to [[solve|resolver]] this [[problem|problema]].',
      options: ['out', 'up', 'on'],
      correctAnswer: 'out',
      explanation: '"Work out" means to [[find|encontrar]] a [[solution|solución]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: MIXED REVIEW (10 items)
// ============================================
export const C1_U6_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Unit 6 Review',
  grammarPoint: 'Mixed Phrasals & Futures',
  explanation: 'Test your [[understanding|entendimiento]] of everything [[covered|cubierto]] in this unit.',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'By the [[end|fin]] of the [[year|año]], I ___ my [[degree|título]].',
      options: ['will have completed', 'will be completing', 'will complete'],
      correctAnswer: 'will have completed',
      explanation: 'Future Perfect for completion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'Stop [[putting|poniendo]] ___ [[your|tu]] [[homework|tarea]].',
      options: ['off', 'out', 'away'],
      correctAnswer: 'off',
      explanation: '"Put off" means to [[postpone|posponer]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'He is [[looking|buscando]] ___ for a new [[flat|piso]].',
      options: ['around', 'back', 'up'],
      correctAnswer: 'around',
      explanation: '"Look around" means to [[search|buscar]] in various places.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'I ___ to the [[gym|gimnasio]] later if you want to [[join|unirte]].',
      options: ['will be going', 'will have gone', 'will go'],
      correctAnswer: 'will be going',
      explanation: 'Future Continuous for planned events.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'We [[ran|corrimos]] ___ [[traffic|tráfico]] on the way here.',
      options: ['into', 'away', 'out'],
      correctAnswer: 'into',
      explanation: '"Run into" means to [[encounter|encontrar]] unexpectedly.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'Don\'t [[give|dar]] ___ on your [[dreams|sueños]].',
      options: ['up', 'in', 'away'],
      correctAnswer: 'up',
      explanation: '"Give up" means to [[quit|abandonar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'The [[bus|autobús]] ___ [[any|cualquier]] [[minute|minuto]] now.',
      options: ['will be arriving', 'will have arrived', 'will arrive'],
      correctAnswer: 'will be arriving',
      explanation: 'Future Continuous for expected near-future events.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'Can you [[look|mirar]] ___ my [[cat|gato]] while I\'m [[away|fuera]]?',
      options: ['after', 'for', 'at'],
      correctAnswer: 'after',
      explanation: '"Look after" means to [[care for|cuidar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'I ___ my [[keys|llaves]] by now.',
      options: ['should have found', 'should be finding', 'should find'],
      correctAnswer: 'should have found',
      explanation: 'Modal Perfect for expected past outcome.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'He [[got|consiguió]] ___ the [[flu|gripe]] [[fairly|bastante]] [[quickly|rápidamente]].',
      options: ['over', 'through', 'on'],
      correctAnswer: 'over',
      explanation: '"Get over" means to [[recover|recuperarse]] from.',
      points: 1
    }
  ]
};

export const unit6 = createC1Unit(
  'c1-u6',
  'Future Horizons & Phrasal Fluency',
  'Master complex three-part phrasal verbs and sophisticated future perspectives.',
  ['Use three-part phrasal verbs naturally', 'Differentiate between future continuous and future perfect', 'Apply future perfect passive and continuous structures'],
  [
    C1_U6_BLOCK1, C1_U6_BLOCK2, C1_U6_BLOCK3, C1_U6_BLOCK4, C1_U6_BLOCK5
  ]
);

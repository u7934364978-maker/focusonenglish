import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 17;

// ============================================
// BLOCK 1: BUSINESS & WORK PHRASAL VERBS (10 items)
// ============================================
export const C1_U17_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Phrasal Verbs for Professional Contexts',
  grammarPoint: 'Phrasal Verbs',
  explanation: 'C1 speakers use specific [[phrasal verbs|verbos frasales]] to describe [[professional|profesionales]] situations and [[actions|acciones]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'fill-blank',
      question: 'We need to [[iron|planchar]] ___ the [[details|detalles]] of the [[contract|contrato]].',
      correctAnswer: 'out',
      explanation: '"Iron out" means to [[resolve|resolver]] [[minor|pequeños]] problems or details.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'fill-blank',
      question: 'The [[manager|gerente]] [[called|llamó]] ___ the [[meeting|reunión]] at the [[last|último]] [[minute|minuto]].',
      correctAnswer: 'off',
      explanation: '"Call off" means to [[cancel|cancelar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'fill-blank',
      question: 'She was [[taken|tomada]] ___ as a [[consultant|consultora]] for the [[project|proyecto]].',
      correctAnswer: 'on',
      explanation: '"Take on" means to [[hire|contratar]] or [[accept|aceptar]] a [[responsibility|responsabilidad]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'fill-blank',
      question: 'I need to [[brush|cepillar]] ___ on my [[French|francés]] before the [[trip|viaje]].',
      correctAnswer: 'up',
      explanation: '"Brush up on" means to [[improve|mejorar]] a [[skill|habilidad]] you haven\'t used for a while.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'fill-blank',
      question: 'We should [[pencil|lápiz]] ___ a [[date|fecha]] for the next [[review|revisión]].',
      correctAnswer: 'in',
      explanation: '"Pencil in" means to [[make|hacer]] a [[tentative|tentativa]] [[appointment|cita]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'fill-blank',
      question: 'The [[negotiations|negociaciones]] [[fell|cayeron]] ___ because of a [[disagreement|desacuerdo]].',
      correctAnswer: 'through',
      explanation: '"Fall through" means to [[fail|fallar]] (for a plan or deal).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'fill-blank',
      question: 'I will [[run|correr]] the [[idea|idea]] ___ my [[boss|jefe]] [[first|primero]].',
      correctAnswer: 'by',
      explanation: '"Run something by someone" means to [[ask|pedir]] for their [[opinion|opinión]] or [[approval|aprobación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'fill-blank',
      question: 'He [[stepped|paso]] ___ from his [[position|puesto]] after the [[scandal|escándalo]].',
      correctAnswer: 'down',
      explanation: '"Step down" means to [[resign|renunciar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'fill-blank',
      question: 'We need to [[measure|medir]] ___ to the [[competitor\'s|competidor]] [[standards|estándares]].',
      correctAnswer: 'up',
      explanation: '"Measure up" means to be [[good|bueno]] [[enough|suficiente]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'fill-blank',
      question: 'The [[company|empresa]] was [[wound|enrollada]] ___ after [[becoming|volverse]] [[insolvent|insolvente]].',
      correctAnswer: 'up',
      explanation: '"Wind up" means to [[close|cerrar]] a business permanently.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: SOCIAL & PERSONAL PHRASAL VERBS (10 items)
// ============================================
export const C1_U17_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Phrasal Verbs for Relationships & Socializing',
  grammarPoint: 'Phrasal Verbs',
  explanation: 'These [[phrasal verbs|verbos frasales]] help describe [[social|sociales]] [[interactions|interacciones]] and [[personal|personales]] [[feelings|sentimientos]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: 'They [[fell|cayeron]] ___ over a [[trivial|trivial]] [[matter|asunto]].',
      options: ['out', 'away', 'off'],
      correctAnswer: 'out',
      explanation: '"Fall out" means to have an [[argument|discusión]] and stop being [[friends|amigos]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'I [[ran|corrí]] ___ an old [[friend|amigo]] at the [[supermarket|supermercado]].',
      options: ['into', 'over', 'at'],
      correctAnswer: 'into',
      explanation: '"Run into" means to [[meet|encontrarse]] by [[chance|casualidad]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'She really [[takes|toma]] ___ her [[mother|madre]].',
      options: ['after', 'over', 'on'],
      correctAnswer: 'after',
      explanation: '"Take after" means to [[resemble|parecerse]] an [[older|mayor]] [[relative|pariente]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'We [[hit|golpeamos]] it ___ [[immediately|inmediatamente]].',
      options: ['off', 'on', 'away'],
      correctAnswer: 'off',
      explanation: '"Hit it off" means to [[become|hacerse]] [[friends|amigos]] quickly.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'I can\'t ___ (make) out what he is [[saying|diciendo]].',
      options: ['make', 'take', 'give'],
      correctAnswer: 'make',
      explanation: '"Make out" means to [[discern|discernir]] or [[understand|entender]] with [[difficulty|dificultad]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'He [[passed|pasó]] ___ as [[someone|alguien]] much [[younger|más joven]].',
      options: ['himself off', 'himself away', 'himself up'],
      correctAnswer: 'himself off',
      explanation: '"Pass oneself off as" means to [[pretend|pretender]] to be someone else.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: 'They [[broke|rompieron]] ___ after five [[years|años]] of [[dating|noviazgo]].',
      options: ['up', 'off', 'down'],
      correctAnswer: 'up',
      explanation: '"Break up" means to [[end|terminar]] a [[relationship|relación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'She [[stood|se mantuvo]] ___ for what she [[believed|creía]] in.',
      options: ['up', 'on', 'away'],
      correctAnswer: 'up',
      explanation: '"Stand up for" means to [[defend|defender]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'I [[look|miro]] ___ to my [[mentor|mentor]].',
      options: ['up', 'down', 'away'],
      correctAnswer: 'up',
      explanation: '"Look up to" means to [[admire|admirar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'The [[party|fiesta]] [[turned|se volvió]] ___ to be a [[disaster|desastre]].',
      options: ['out', 'away', 'off'],
      correctAnswer: 'out',
      explanation: '"Turn out" means to have a particular [[result|resultado]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: THREE-PART PHRASAL VERBS (10 items)
// ============================================
export const C1_U17_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Advanced Three-part Phrasal Verbs',
  grammarPoint: 'Phrasal Verbs',
  explanation: 'Three-part [[phrasal verbs|verbos frasales]] (e.g., "get away with", "come up with") are very common at the C1 level.',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'fill-blank',
      question: 'He [[got|se salió]] ___ with [[cheating|hacer trampa]] on the [[test|test]].',
      correctAnswer: 'away',
      explanation: '"Get away with" means to avoid [[punishment|castigo]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'fill-blank',
      question: 'We have [[run|quedado]] ___ of [[coffee|café]].',
      correctAnswer: 'out',
      explanation: '"Run out of" means to have [[none|nada]] left.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'fill-blank',
      question: 'I can\'t [[put|poner]] ___ with that [[noise|ruido]] anymore.',
      correctAnswer: 'up',
      explanation: '"Put up with" means to [[tolerate|tolerar]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'fill-blank',
      question: 'She [[came|se le ocurrió]] ___ with a brilliant [[idea|idea]].',
      correctAnswer: 'up',
      explanation: '"Come up with" means to [[produce|producir]] or [[think of|pensar en]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'fill-blank',
      question: 'I am [[looking|mirando]] [[forward|adelante]] ___ meeting you.',
      correctAnswer: 'to',
      explanation: '"Look forward to" must be followed by a [[gerund|gerundio]] or noun.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'fill-blank',
      question: 'We need to [[make|compensar]] ___ for the [[lost|perdido]] [[time|tiempo]].',
      correctAnswer: 'up',
      explanation: '"Make up for" means to [[compensate|compensar]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'fill-blank',
      question: 'He [[looks|mira]] ___ on [[people|personas]] who are [[poor|pobres]].',
      correctAnswer: 'down',
      explanation: '"Look down on" means to think you are [[superior|superior]] to someone.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'fill-blank',
      question: 'I tried to [[get|ponerme]] ___ with the [[work|trabajo]].',
      correctAnswer: 'on',
      explanation: '"Get on with" means to [[continue|continuar]] or [[start|empezar]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'fill-blank',
      question: 'She [[backed|se echó]] ___ of the [[agreement|acuerdo]].',
      correctAnswer: 'out',
      explanation: '"Back out of" means to [[withdraw|retirarse]] from a commitment.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'fill-blank',
      question: 'I will [[catch|alcanzar]] ___ with you [[later|luego]].',
      correctAnswer: 'up',
      explanation: '"Catch up with" means to reach the [[same|mismo]] [[level|nivel]] or [[exchange|intercambiar]] news.',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: COMMON IDIOMS (10 items)
// ============================================
export const C1_U17_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Idiomatic Expressions in Context',
  grammarPoint: 'Idioms',
  explanation: '[[Idioms|Modismos]] add [[flavor|sabor]] and [[naturalness|naturalidad]] to your speech.',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'It\'s not [[rocket|cohete]] ___; anyone can do it.',
      options: ['science', 'math', 'art'],
      correctAnswer: 'science',
      explanation: '"Not rocket science" means it is not [[complicated|complicado]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'He has a ___ (chip) on his [[shoulder|hombro]].',
      options: ['chip', 'bird', 'stone'],
      correctAnswer: 'chip',
      explanation: '"A chip on one\'s shoulder" means being [[angry|enojado]] about something in the [[past|pasado]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'We will [[cross|cruzar]] that ___ (bridge) when we [[come|lleguemos]] to it.',
      options: ['bridge', 'road', 'river'],
      correctAnswer: 'bridge',
      explanation: 'Don\'t [[worry|preocuparse]] about a problem before it happens.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'She is the [[spitting|escupitajo]] ___ (image) of her father.',
      options: ['image', 'picture', 'photo'],
      correctAnswer: 'image',
      explanation: '"Spitting image" means [[looking|verse]] exactly like someone.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'Don\'t [[beat|golpear]] around the ___ (bush).',
      options: ['bush', 'tree', 'wall'],
      correctAnswer: 'bush',
      explanation: '"Beat around the bush" means avoiding the [[main|principal]] [[topic|tema]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'It cost an ___ (arm) and a [[leg|pierna]].',
      options: ['arm', 'eye', 'ear'],
      correctAnswer: 'arm',
      explanation: '"An arm and a leg" means very [[expensive|caro]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'That was the [[last|última]] ___ (straw) for her.',
      options: ['straw', 'stick', 'stone'],
      correctAnswer: 'straw',
      explanation: '"The last straw" is the final problem that makes you [[lose|perder]] [[patience|paciencia]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'He is a [[bit|poco]] under the ___ (weather).',
      options: ['weather', 'cloud', 'rain'],
      correctAnswer: 'weather',
      explanation: '"Under the weather" means feeling [[ill|enfermo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'Let\'s [[call|llamar]] it a ___ (day).',
      options: ['day', 'night', 'time'],
      correctAnswer: 'day',
      explanation: '"Call it a day" means to [[stop|parar]] working.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'You should take it with a ___ (pinch) of [[salt|sal]].',
      options: ['pinch', 'grain', 'bit'],
      correctAnswer: 'pinch',
      explanation: '"With a pinch of salt" means not [[completely|completamente]] [[believing|creyendo]] something.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: ERROR CORRECTION - PHRASALS (10 items)
// ============================================
export const C1_U17_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Error Correction: Idiomatic Usage',
  grammarPoint: 'Mixed Review',
  explanation: 'Identify the [[incorrect|incorrecta]] part of the [[phrasal verb|verbo frasal]] or [[idiom|modismo]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'We need to iron through the details.',
      options: ['iron through', 'iron out', 'iron away'],
      correctAnswer: 'iron out',
      explanation: '"Iron out" is the correct [[collocation|colocación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'I ran over an old friend yesterday.',
      options: ['ran over', 'ran into', 'ran at'],
      correctAnswer: 'ran into',
      explanation: '"Ran over" means hitting with a [[vehicle|vehículo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'I look forward to meet you.',
      options: ['to meet', 'to meeting', 'meeting'],
      correctAnswer: 'to meeting',
      explanation: '"Look forward to" takes the [[-ing|gerundio]] form.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'He got away for cheating.',
      options: ['got away for', 'got away with', 'got off with'],
      correctAnswer: 'got away with',
      explanation: 'The correct phrase is "get away with".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'Don\'t beat around the tree.',
      options: ['the tree', 'the bush', 'the wall'],
      correctAnswer: 'the bush',
      explanation: 'The idiom is "beat around the bush".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'The meeting was called up because of the rain.',
      options: ['called up', 'called off', 'called out'],
      correctAnswer: 'called off',
      explanation: '"Call off" means [[cancel|cancelar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'I can\'t put out with your behavior.',
      options: ['put out with', 'put up with', 'put away with'],
      correctAnswer: 'put up with',
      explanation: '"Put up with" means [[tolerate|tolerar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'It cost an arm and a toe.',
      options: ['a toe', 'a leg', 'a hand'],
      correctAnswer: 'a leg',
      explanation: 'The idiom is "an arm and a leg".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'She took on her grandmother.',
      options: ['took on', 'took after', 'took over'],
      correctAnswer: 'took after',
      explanation: '"Take after" means [[resemble|parecerse]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'We ran off of milk.',
      options: ['ran off of', 'ran out of', 'ran away of'],
      correctAnswer: 'ran out of',
      explanation: '"Run out of" means having [[nothing|nada]] left.',
      points: 1
    }
  ]
};

export const unit17: Lesson = createC1Unit(
  'c1-u17',
  'Advanced Phrasal Verbs & Idiomatic Expressions',
  'Expanding your vocabulary with professional phrasal verbs, social expressions, and common idioms.',
  ['Use professional phrasal verbs accurately', 'Apply three-part phrasal verbs correctly', 'Incorporate common idioms into speech and writing'],
  [
    C1_U17_BLOCK1, C1_U17_BLOCK2, C1_U17_BLOCK3, C1_U17_BLOCK4, C1_U17_BLOCK5
  ]
);

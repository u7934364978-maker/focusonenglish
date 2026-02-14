import { Exercise } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 12;

// ============================================
// BLOCK 1: HEDGING & TENTATIVE LANGUAGE (10 items)
// ============================================
export const C1_U12_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Hedging and Diplomatic Indirectness',
  grammarPoint: 'Hedging',
 explanation: '[[Hedging|Atenuación]] involves using [[words|palabras]] to make your [[statements|afirmaciones]] less [[direct|directas]] or [[blunt|tajantes]]. This is crucial for [[diplomacy|diplomacia]] in [[business|negocios]].',   questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
 question: 'It ___ be [[argued|argumentado]] that the current [[strategy|estrategia]] is somewhat [[outdated|anticuada]].',       options: ['could', 'must', 'will'],
      correctAnswer: 'could',
 explanation: 'Could is more [[tentative|tentativo]] and [[polite|educado]] than is.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
 question: 'There ___ to be a slight [[misunderstanding|malentendido]] [[regarding|respecto a]] the [[budget|presupuesto]].',       options: ['is', 'appears', 'has'],
      correctAnswer: 'appears',
 explanation: 'Appears or seems softens the [[assertion|afirmación]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
 question: 'I ___ [[suggest|sugerir]] that we [[postpone|pospongamos]] the [[meeting|reunión]].',       options: ['will', 'would', 'do'],
      correctAnswer: 'would',
 explanation: 'Would makes the [[suggestion|sugerencia]] less [[forceful|contundente]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
 question: 'It ___ [[seem|parecer]] that the [[deadlines|plazos]] are [[overly|excesivamente]] [[optimistic|optimistas]].',       options: ['does', 'must', 'would'],
      correctAnswer: 'would',
 explanation: 'It would seem is a standard [[hedging|atenuación]] expression.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
 question: 'We ___ [[need|necesitar]] to [[revisit|volver a visitar]] our [[initial|inicial]] [[assumptions|suposiciones]].',       options: ['might', 'will', 'are'],
      correctAnswer: 'might',
 explanation: 'Might expresses [[possibility|posibilidad]] rather than [[certainty|certeza]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
 question: 'To some [[extent|punto]], the [[results|resultados]] are ___ [[disappointing|decepcionantes]].',       options: ['very', 'somewhat', 'totally'],
      correctAnswer: 'somewhat',
 explanation: 'Somewhat is a [[modifier|modificador]] that reduces [[intensity|intensidad]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
 question: 'It ___ [[appear|aparecer]] that some [[data|datos]] [[missing|faltando]] from the [[report|informe]].',       options: ['does', 'is', 'has'],
      correctAnswer: 'does',
 explanation: 'Using the [[emphatic|enfático]] does can sometimes be part of a [[polite|educado]] [[observation|observación]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
 question: 'I am ___ [[concerned|preocupado]] about the [[lack|falta]] of [[transparency|transparencia]].',       options: ['rather', 'very', 'extremely'],
      correctAnswer: 'rather',
 explanation: 'Rather is more [[diplomatic|diplomático]] than very.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
 question: 'It is ___ [[unlikely|improbable]] that we will [[finish|terminar]] today.',       options: ['highly', 'maybe', 'not'],
      correctAnswer: 'highly',
 explanation: 'Highly unlikely is a [[precise|precisa]] but [[formal|formal]] [[evaluation|evaluación]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
 question: '___ I [[suggest|sugerir]] that we [[take|tomemos]] a [[break|descanso]]?',       options: ['Must', 'Might', 'Will'],
      correctAnswer: 'Might',
 explanation: 'Might is used for [[very|muy]] [[tentative|tentativas]] suggestions.',       points: 1
    }
  ]
};

// ============================================
// BLOCK 2: NEGOTIATION VOCABULARY (10 items)
// ============================================
export const C1_U12_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Advanced Negotiation Terminology',
  grammarPoint: 'Vocabulary',
 explanation: 'Mastering [[specific|específicos]] terms for [[agreements|acuerdos]] [[disagreements|desacuerdos]] and [[compromises|concesiones]].',   questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
 question: 'We need to find a ___ [[ground|terreno]] to [[move|mover]] [[forward|adelante]].',       options: ['normal', 'usual', 'common'],
      correctAnswer: 'common',
 explanation: 'Common ground is where both [[parties|partes]] [[agree|están de acuerdo]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
 question: 'After [[hours|horas]] of [[talks|conversaciones]], they [[finally|finalmente]] [[reached|alcanzaron]] a ___.',       options: ['agreement', 'promise', 'compromise'],
      correctAnswer: 'compromise',
 explanation: 'A compromise is an [[agreement|acuerdo]] where both sides [[give|dan]] up something.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
 question: 'The [[negotiations|negociaciones]] are [[currently|actualmente]] at a ___.',       options: ['stopping', 'finish', 'deadlock'],
      correctAnswer: 'deadlock',
 explanation: 'A deadlock or stalemate is a [[situation|situación]] where no [[progress|progreso]] is [[possible|posible]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
 question: 'We are [[looking|buscando]] for a ___ [[beneficial|beneficioso]] [[solution|solución]].',       options: ['both', 'total', 'mutually'],
      correctAnswer: 'mutually',
 explanation: 'Mutually beneficial means [[good|bueno]] for [[everyone|todos]] involved.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
 question: 'The [[contract|contrato]] is [[legally|legalmente]] ___.',       options: ['forced', 'obliged', 'binding'],
      correctAnswer: 'binding',
 explanation: 'Binding means it [[must|debe]] be [[obeyed|obedecido]] by law.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
 question: 'They [[made|hicieron]] a [[significant|significativa]] ___ [[during|durante]] the [[talks|charlas]].',       options: ['giving', 'allowance', 'concession'],
      correctAnswer: 'concession',
 explanation: 'A concession is [[granting|otorgar]] something [[requested|solicitado]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
 question: 'We need to ___ our [[strengths|fortalezas]] [[during|durante]] the [[deal|trato]].',       options: ['use', 'force', 'leverage'],
      correctAnswer: 'leverage',
 explanation: 'Leverage means to [[use|usar]] something to [[maximum|máximo]] [[advantage|ventaja]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
 question: 'The ___ of the [[summit|cumbre]] was [[highly|altamente]] [[positive|positivo]].',       options: ['ending', 'finish', 'outcome'],
      correctAnswer: 'outcome',
 explanation: 'Outcome is the [[result|resultado]] of a [[process|proceso]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
 question: 'He is a [[shrewd|astuto]] ___ who [[never|nunca]] [[backs|retrocede]] [[down|abajo]].',       options: ['dealer', 'manager', 'negotiator'],
      correctAnswer: 'negotiator',
 explanation: 'Negotiator is the [[person|persona]] who [[conducts|lleva a cabo]] negotiations.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
 question: 'We should [[avoid|evitar]] [[any|cualquier]] ___ [[language|lenguaje]].',       options: ['angry', 'rude', 'confrontational'],
      correctAnswer: 'confrontational',
 explanation: 'Confrontational means [[likely|probable]] to cause an [[argument|discusión]].',       points: 1
    }
  ]
};

// ============================================
// BLOCK 3: DIPLOMATIC PHRASES - MATCHING (10 items)
// ============================================
export const C1_U12_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Diplomatic Phrases in Action',
  grammarPoint: 'Functional Language',
 explanation: 'Match the [[diplomatic|diplomática]] [[phrase|frase]] with its [[intended|intencionada]] [[function|función]].',   questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: '"I see your point, however..." is a way to:',
      options: ['agree fully', 'ask for money', 'disagree politely'],
      correctAnswer: 'disagree politely',
 explanation: 'It [[acknowledges|reconoce]] the other [[view|vista]] before [[presenting|presentar]] a different one.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: '"Could you elaborate on that?" is a way to:',
      options: ['tell someone they are wrong', 'end the meeting', 'ask for more detail'],
      correctAnswer: 'ask for more detail',
 explanation: 'Elaborate is a [[formal|formal]] word for give more [[details|detalles]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: '"Perhaps we could meet halfway?" is a way to:',
      options: ['ask for directions', 'reject an offer', 'propose a compromise'],
      correctAnswer: 'propose a compromise',
 explanation: 'Meet halfway is an [[idiom|idiismo]] for [[compromise|llegar a un acuerdo]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: '"I have some reservations about..." is a way to:',
      options: ['book a hotel', 'accept a deal', 'express concern'],
      correctAnswer: 'express concern',
 explanation: 'Reservations in this context means [[doubts|dudas]] or [[worries|preocupaciones]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: '"Would you be open to...?" is a way to:',
      options: ['open a window', 'complain', 'make a suggestion'],
      correctAnswer: 'make a suggestion',
 explanation: 'A very [[polite|educada]] way to [[introduce|introducir]] a [[new|nueva]] [[idea|idea]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: '"I\'m afraid that\'s not feasible." is a way to:',
      options: ['express fear', 'accept an invitation', 'reject a proposal'],
      correctAnswer: 'reject a proposal',
 explanation: 'Feasible means [[possible|posible]] or [[practical|práctico]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: '"It is worth considering that..." is a way to:',
      options: ['buy something', 'ignore someone', 'emphasize a point'],
      correctAnswer: 'emphasize a point',
 explanation: 'Gently [[directing|dirigiendo]] [[attention|atención]] to a [[specific|específico]] [[fact|hecho]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: '"Could we revisit this later?" is a way to:',
      options: ['visit a museum', 'agree immediately', 'delay a decision'],
      correctAnswer: 'delay a decision',
 explanation: 'Revisit means to [[discuss|discutir]] again at a [[future|futuro]] [[time|tiempo]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: '"What are your thoughts on...?" is a way to:',
      options: ['show off', 'end the talk', 'invite input'],
      correctAnswer: 'invite input',
 explanation: 'Asking for [[opinions|opiniones]] [[encourages|fomenta]] [[collaboration|collaboration]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: '"I think we have a basis for agreement." is a way to:',
      options: ['start an argument', 'cancel the deal', 'signal progress'],
      correctAnswer: 'signal progress',
 explanation: 'Indicates that a [[final|final]] [[deal|trato]] is [[close|cerca]].',       points: 1
    }
  ]
};

// ============================================
// BLOCK 4: REPLACING BLUNT LANGUAGE (10 items)
// ============================================
export const C1_U12_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Diplomacy: Replacing Blunt Language',
  grammarPoint: 'Functional Language',
 explanation: 'Transform [[blunt|bruscas]] or [[rude|groseras]] sentences into [[diplomatic|diplomáticas]] ones.',   questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
 question: 'You are wrong. -> I\'m afraid I ___ [[agree|acuerdo]] with you on that.',       options: ['don\'t entirely', 'am not', 'don\'t'],
      correctAnswer: 'don\'t entirely',
 explanation: 'Don\'t entirely agree is much more [[polite|educado]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
 question: 'I want a discount. -> Would you be ___ [[offering|ofrecer]] a discount?',       options: ['happy with', 'open to', 'good for'],
      correctAnswer: 'open to',
 explanation: 'Using a [[question|pregunta]] instead of a [[demand|demanda]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
 question: 'That is a bad idea. -> I have some ___ [[about|sobre]] that idea.',       options: ['reservations', 'bad feelings', 'problems'],
      correctAnswer: 'reservations',
 explanation: 'Reservations is a [[professional|profesional]] way to express [[doubt|duda]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
 question: 'Explain this. -> Could you ___ on this [[point|punto]]?',       options: ['elaborate', 'talk', 'say more'],
      correctAnswer: 'elaborate',
 explanation: 'Elaborate sounds more [[professional|profesional]] than explain.',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
 question: 'We won\'t do that. -> That ___ be [[feasible|factible]] for us at this time.',       options: ['won\'t', 'might not', 'cannot'],
      correctAnswer: 'might not',
 explanation: 'Using [[modal|modal]] verbs to soften a [[refusal|negativa]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
 question: 'Your price is too high. -> Your price is ___ than we [[expected|esperábamos]].',       options: ['somewhat higher', 'more expensive', 'too much'],
      correctAnswer: 'somewhat higher',
 explanation: 'Somewhat higher is less [[confrontational|confrontativo]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
 question: 'I don\'t understand. -> I\'m not ___ with that [[concept|concepto]].',       options: ['entirely familiar', 'sure', 'clear'],
      correctAnswer: 'entirely familiar',
 explanation: 'Not entirely familiar is a diplomatic way to admit [[confusion|confusión]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
 question: 'You must change this. -> It ___ be [[beneficial|beneficioso]] to [[adjust|ajustar]] this.',       options: ['might', 'would', 'must'],
      correctAnswer: 'would',
 explanation: 'Using conditional would to make a [[request|petición]] less like an [[order|orden]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
 question: 'This is a waste of time. -> I wonder if we should ___ our [[approach|enfoque]].',       options: ['reconsider', 'change', 'stop'],
      correctAnswer: 'reconsider',
 explanation: 'Reconsider suggests [[improvement|mejora]] rather than just [[failure|fracaso]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
 question: 'I hate this contract. -> I have a few ___ with the [[current|actual]] [[draft|borrador]].',       options: ['problems', 'concerns', 'hates'],
      correctAnswer: 'concerns',
 explanation: 'Concerns is the standard [[business|negocios]] word for [[objections|objeciones]].',       points: 2
    }
  ]
};

// ============================================
// BLOCK 5: UNIT 12 REVIEW (10 items)
// ============================================
export const C1_U12_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Unit 12 Review',
  grammarPoint: 'Mixed Business & Diplomacy',
 explanation: 'Final check of Unit 12 [[concepts|conceptos]].',   questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
 question: 'It ___ appear that we have reached a [[deadlock|punto muerto]].',       options: ['would', 'must', 'will'],
      correctAnswer: 'would',
      explanation: 'Diplomatic hedging.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
 question: 'The [[agreement|acuerdo]] is [[legally|legalmente]] ___.',       options: ['binding', 'fixed', 'closed'],
      correctAnswer: 'binding',
      explanation: 'Legal requirement.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
 question: 'Could you ___ on that [[point|punto]] [[further|más]]?',       options: ['elaborate', 'say', 'tell'],
      correctAnswer: 'elaborate',
      explanation: 'Asking for detail politely.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
 question: 'I have some ___ about the [[feasibility|viabilidad]] of this [[plan|plan]].',       options: ['reservations', 'no-gos', 'bad ideas'],
      correctAnswer: 'reservations',
      explanation: 'Expressing doubt professionally.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
 question: 'We need to [[find|encontrar]] some [[common|común]] ___.',       options: ['ground', 'place', 'area'],
      correctAnswer: 'ground',
      explanation: 'Finding agreement.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
 question: 'The ___ of the [[talks|charlas]] was [[uncertain|incierto]].',       options: ['outcome', 'end', 'result'],
      correctAnswer: 'outcome',
      explanation: 'Formal term for result.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
 question: 'Would you be ___ to [[adjusting|ajustar]] the [[price|precio]]?',       options: ['open', 'good', 'happy'],
      correctAnswer: 'open',
      explanation: 'Making a diplomatic suggestion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
 question: 'It is ___ [[unlikely|improbable]] that we will [[accept|aceptar]].',       options: ['highly', 'maybe', 'very'],
      correctAnswer: 'highly',
      explanation: 'Formal evaluation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
 question: 'We made a [[major|importante]] ___ to [[seal|sellar]] the [[deal|trato]].',       options: ['concession', 'giving', 'help'],
      correctAnswer: 'concession',
      explanation: 'Granting something in negotiation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
 question: '___ I [[suggest|sugerir]] a [[different|diferente]] [[approach|enfoque]]?',       options: ['Might', 'Must', 'Will'],
      correctAnswer: 'Might',
      explanation: 'Tentative suggestion.',
      points: 1
    }
  ]
};

export const unit12 = createC1Unit(
  'c1-u12',
  'Business Diplomacy & Negotiation',
  'Master the linguistic tools needed for high-stakes professional environments, focusing on hedging and diplomatic precision.',
  ['Use hedging to soften statements and suggestions', 'Apply advanced negotiation vocabulary and idioms', 'Transform blunt language into professional diplomacy'],
  [
    C1_U12_BLOCK1, C1_U12_BLOCK2, C1_U12_BLOCK3, C1_U12_BLOCK4, C1_U12_BLOCK5
  ]
);

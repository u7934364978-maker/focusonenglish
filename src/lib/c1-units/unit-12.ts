import { Exercise, Lesson } from '../exercise-types';
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
  explanation: '[[Hedging|Atenuación]] involves using [[words|palabras]] to make your [[statements|afirmaciones]] less [[direct|directas]] or [[blunt|tajantes]]. This is crucial for [[diplomacy|diplomacia]] in [[business|negocios]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'It ___ be [[argued|argumentado]] that the current [[strategy|estrategia]] is somewhat [[outdated|anticuada]].',
      options: ['could', 'must', 'will'],
      correctAnswer: 'could',
      explanation: '"Could" is more [[tentative|tentativo]] and [[polite|educado]] than "is".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: 'There ___ to be a slight [[misunderstanding|malentendido]] [[regarding|respecto a]] the [[budget|presupuesto]].',
      options: ['appears', 'is', 'has'],
      correctAnswer: 'appears',
      explanation: '"Appears" or "seems" softens the [[assertion|afirmación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: 'I ___ [[suggest|sugerir]] that we [[postpone|pospongamos]] the [[meeting|reunión]].',
      options: ['would', 'will', 'do'],
      correctAnswer: 'would',
      explanation: '"Would" makes the [[suggestion|sugerencia]] less [[forceful|contundente]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: 'It ___ [[seem|parecer]] that the [[deadlines|plazos]] are [[overly|excesivamente]] [[optimistic|optimistas]].',
      options: ['would', 'must', 'does'],
      correctAnswer: 'would',
      explanation: '"It would seem" is a standard [[hedging|atenuación]] expression.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: 'We ___ [[need|necesitar]] to [[revisit|volver a visitar]] our [[initial|inicial]] [[assumptions|suposiciones]].',
      options: ['might', 'will', 'are'],
      correctAnswer: 'might',
      explanation: '"Might" expresses [[possibility|posibilidad]] rather than [[certainty|certeza]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: 'To some [[extent|punto]], the [[results|resultados]] are ___ [[disappointing|decepcionantes]].',
      options: ['somewhat', 'very', 'totally'],
      correctAnswer: 'somewhat',
      explanation: '"Somewhat" is a [[modifier|modificador]] that reduces [[intensity|intensidad]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: 'It ___ [[appear|aparecer]] that some [[data|datos]] [[missing|faltando]] from the [[report|informe]].',
      options: ['does', 'is', 'has'],
      correctAnswer: 'does',
      explanation: 'Using the [[emphatic|enfático]] "does" can sometimes be part of a [[polite|educado]] [[observation|observación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: 'I am ___ [[concerned|preocupado]] about the [[lack|falta]] of [[transparency|transparencia]].',
      options: ['rather', 'very', 'extremely'],
      correctAnswer: 'rather',
      explanation: '"Rather" is more [[diplomatic|diplomático]] than "very".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: 'It is ___ [[unlikely|improbable]] that we will [[finish|terminar]] today.',
      options: ['highly', 'maybe', 'not'],
      correctAnswer: 'highly',
      explanation: '"Highly unlikely" is a [[precise|precisa]] but [[formal|formal]] [[evaluation|evaluación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: '___ I [[suggest|sugerir]] that we [[take|tomemos]] a [[break|descanso]]?',
      options: ['Might', 'Must', 'Will'],
      correctAnswer: 'Might',
      explanation: '"Might" is used for [[very|muy]] [[tentative|tentativas]] suggestions.',
      points: 1
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
  explanation: 'Mastering [[specific|específicos]] terms for [[agreements|acuerdos]], [[disagreements|desacuerdos]] and [[compromises|concesiones]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'fill-blank',
      question: 'We need to find a ___ (common) [[ground|terreno]] to [[move|mover]] [[forward|adelante]].',
      correctAnswer: 'common',
      explanation: '"Common ground" is where both [[parties|partes]] [[agree|están de acuerdo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'fill-blank',
      question: 'After [[hours|horas]] of [[talks|conversaciones]], they [[finally|finalmente]] [[reached|alcanzaron]] a ___ (compromise).',
      correctAnswer: 'compromise',
      explanation: 'A "compromise" is an [[agreement|acuerdo]] where both sides [[give|dan]] up something.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'fill-blank',
      question: 'The [[negotiations|negociaciones]] are [[currently|actualmente]] at a ___ (deadlock).',
      correctAnswer: 'deadlock',
      explanation: 'A "deadlock" or "stalemate" is a [[situation|situación]] where no [[progress|progreso]] is [[possible|posible]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'fill-blank',
      question: 'We are [[looking|buscando]] for a ___ (mutually) [[beneficial|beneficioso]] [[solution|solución]].',
      correctAnswer: 'mutually',
      explanation: '"Mutually beneficial" means [[good|bueno]] for [[everyone|todos]] involved.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'fill-blank',
      question: 'The [[contract|contrato]] is [[legally|legalmente]] ___ (binding).',
      correctAnswer: 'binding',
      explanation: '"Binding" means it [[must|debe]] be [[obeyed|obedecido]] by law.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'fill-blank',
      question: 'They [[made|hicieron]] a [[significant|significativa]] ___ (concession) [[during|durante]] the [[talks|charlas]].',
      correctAnswer: 'concession',
      explanation: 'A "concession" is [[granting|otorgar]] something [[requested|solicitado]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'fill-blank',
      question: 'We need to ___ (leverage) our [[strengths|fortalezas]] [[during|durante]] the [[deal|trato]].',
      correctAnswer: 'leverage',
      explanation: '"Leverage" means to [[use|usar]] something to [[maximum|máximo]] [[advantage|ventaja]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'fill-blank',
      question: 'The ___ (outcome) of the [[summit|cumbre]] was [[highly|altamente]] [[positive|positivo]].',
      correctAnswer: 'outcome',
      explanation: '"Outcome" is the [[result|resultado]] of a [[process|proceso]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'fill-blank',
      question: 'He is a [[shrewd|astuto]] ___ (negotiator) who [[never|nunca]] [[backs|retrocede]] [[down|abajo]].',
      correctAnswer: 'negotiator',
      explanation: '"Negotiator" is the [[person|persona]] who [[conducts|lleva a cabo]] negotiations.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'fill-blank',
      question: 'We should [[avoid|evitar]] [[any|cualquier]] ___ (confrontational) [[language|lenguaje]].',
      correctAnswer: 'confrontational',
      explanation: '"Confrontational" means [[likely|probable]] to cause an [[argument|discusión]].',
      points: 1
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
  explanation: 'Match the [[diplomatic|diplomática]] [[phrase|frase]] with its [[intended|intencionada]] [[function|función]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: '"I see your point, however..." is a way to:',
      options: ['disagree politely', 'agree fully', 'ask for money'],
      correctAnswer: 'disagree politely',
      explanation: 'It [[acknowledges|reconoce]] the other [[view|vista]] before [[presenting|presentar]] a different one.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: '"Could you elaborate on that?" is a way to:',
      options: ['ask for more detail', 'tell someone they are wrong', 'end the meeting'],
      correctAnswer: 'ask for more detail',
      explanation: '"Elaborate" is a [[formal|formal]] word for "give more [[details|detalles]]".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: '"Perhaps we could meet halfway?" is a way to:',
      options: ['propose a compromise', 'ask for directions', 'reject an offer'],
      correctAnswer: 'propose a compromise',
      explanation: '"Meet halfway" is an [[idiom|idiismo]] for [[compromise|llegar a un acuerdo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: '"I have some reservations about..." is a way to:',
      options: ['express concern', 'book a hotel', 'accept a deal'],
      correctAnswer: 'express concern',
      explanation: '"Reservations" in this context means [[doubts|dudas]] or [[worries|preocupaciones]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: '"Would you be open to...?" is a way to:',
      options: ['make a suggestion', 'open a window', 'complain'],
      correctAnswer: 'make a suggestion',
      explanation: 'A very [[polite|educada]] way to [[introduce|introducir]] a [[new|nueva]] [[idea|idea]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: '"I\'m afraid that\'s not feasible." is a way to:',
      options: ['reject a proposal', 'express fear', 'accept an invitation'],
      correctAnswer: 'reject a proposal',
      explanation: '"Feasible" means [[possible|posible]] or [[practical|práctico]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: '"It is worth considering that..." is a way to:',
      options: ['emphasize a point', 'buy something', 'ignore someone'],
      correctAnswer: 'emphasize a point',
      explanation: 'Gently [[directing|dirigiendo]] [[attention|atención]] to a [[specific|específico]] [[fact|hecho]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: '"Could we revisit this later?" is a way to:',
      options: ['delay a decision', 'visit a museum', 'agree immediately'],
      correctAnswer: 'delay a decision',
      explanation: '"Revisit" means to [[discuss|discutir]] again at a [[future|futuro]] [[time|tiempo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: '"What are your thoughts on...?" is a way to:',
      options: ['invite input', 'show off', 'end the talk'],
      correctAnswer: 'invite input',
      explanation: 'Asking for [[opinions|opiniones]] [[encourages|fomenta]] [[collaboration|colaboración]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: '"I think we have a basis for agreement." is a way to:',
      options: ['signal progress', 'start an argument', 'cancel the deal'],
      correctAnswer: 'signal progress',
      explanation: 'Indicates that a [[final|final]] [[deal|trato]] is [[close|cerca]].',
      points: 1
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
  explanation: 'Transform [[blunt|bruscas]] or [[rude|groseras]] sentences into [[diplomatic|diplomáticas]] ones.',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'fill-blank',
      question: '"You are wrong." -> "I\'m afraid I ___ [[agree|acuerdo]] with you on that."',
      correctAnswer: 'don\'t entirely',
      explanation: '"Don\'t entirely agree" is much more [[polite|educado]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'fill-blank',
      question: '"I want a discount." -> "Would you be ___ [[offering|ofrecer]] a discount?"',
      correctAnswer: 'open to',
      explanation: 'Using a [[question|pregunta]] instead of a [[demand|demanda]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'fill-blank',
      question: '"That is a bad idea." -> "I have some ___ [[about|sobre]] that idea."',
      correctAnswer: 'reservations',
      explanation: '"Reservations" is a [[professional|profesional]] way to express [[doubt|duda]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'fill-blank',
      question: '"Explain this." -> "Could you ___ on this [[point|punto]]?"',
      correctAnswer: 'elaborate',
      explanation: '"Elaborate" sounds more [[professional|profesional]] than "explain".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'fill-blank',
      question: '"We won\'t do that." -> "That ___ be [[feasible|factible]] for us at this time."',
      correctAnswer: 'might not',
      explanation: 'Using [[modal|modal]] verbs to soften a [[refusal|negativa]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'fill-blank',
      question: '"Your price is too high." -> "Your price is ___ than we [[expected|esperábamos]]."',
      correctAnswer: 'somewhat higher',
      explanation: '"Somewhat higher" is less [[confrontational|confrontativo]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'fill-blank',
      question: '"I don\'t understand." -> "I\'m not ___ with that [[concept|concepto]]."',
      correctAnswer: 'entirely familiar',
      explanation: 'A more [[sophisticated|sofisticada]] way to admit [[confusion|confusión]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'fill-blank',
      question: '"Tell me the truth." -> "I would ___ your [[honest|honesta]] [[perspective|perspectiva]]."',
      correctAnswer: 'appreciate',
      explanation: '"Appreciate" is a key [[diplomatic|diplomático]] verb.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'fill-blank',
      question: '"You must wait." -> "It ___ be [[wise|sabio]] to wait for a moment."',
      correctAnswer: 'might',
      explanation: 'Giving [[advice|consejo]] rather than an [[order|orden]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'fill-blank',
      question: '"This is a waste of time." -> "I\'m not sure this is the most ___ use of our time."',
      correctAnswer: 'productive',
      explanation: 'Focusing on [[productivity|productividad]] instead of "waste".',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 5: COMPREHENSIVE DIPLOMACY REVIEW (10 items)
// ============================================
export const C1_U12_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Diplomacy & Negotiation: Final Review',
  grammarPoint: 'Mixed Review',
  explanation: 'Choose the [[best|mejor]] option to [[maintain|mantener]] a [[professional|profesional]] and [[diplomatic|diplomático]] tone.',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: '___, we should [[start|empezar]] by [[defining|definiendo]] our [[goals|metas]].',
      options: ['Perhaps', 'Surely', 'Must'],
      correctAnswer: 'Perhaps',
      explanation: '"Perhaps" is a common [[softener|atenuador]] for suggestions.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'I ___ that we are [[rushing|apresurando]] into this [[decision|decisión]].',
      options: ['feel', 'know', 'say'],
      correctAnswer: 'feel',
      explanation: '"I feel" is less [[aggressive|agresivo]] than "I know".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'There ___ [[seem|parecer]] to be [[significant|significativos]] [[risks|riesgos]] involved.',
      options: ['would', 'will', 'is'],
      correctAnswer: 'would',
      explanation: 'Standard [[hedging|atenuación]] structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'Would you ___ to [[sharing|compartir]] your [[thoughts|pensamientos]]?',
      options: ['be open', 'want', 'like'],
      correctAnswer: 'be open',
      explanation: '"Be open to" is a [[polite|educada]] invitation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'That is ___ what we [[had|habíamos]] in [[mind|mente]].',
      options: ['not quite', 'not', 'never'],
      correctAnswer: 'not quite',
      explanation: '"Not quite" softens a [[negative|negativa]] statement.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'We need to [[find|encontrar]] a ___ ground [[satisfactory|satisfactorio]] for [[all|todos]].',
      options: ['middle', 'half', 'center'],
      correctAnswer: 'middle',
      explanation: '"Find a middle ground" is a [[synonym|sinónimo]] for compromise.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'The [[proposal|propuesta]] is ___ [[acceptable|aceptable]] in its [[current|actual]] [[form|forma]].',
      options: ['hardly', 'not', 'never'],
      correctAnswer: 'hardly',
      explanation: '"Hardly acceptable" is more [[formal|formal]] and [[indirect|indirecto]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'Could we ___ [[discussing|discutiendo]] this for a [[moment|momento]]?',
      options: ['defer', 'stop', 'quit'],
      correctAnswer: 'defer',
      explanation: '"Defer" is a [[formal|formal]] word for [[postpone|posponer]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'I ___ your [[concerns|preocupaciones]] [[regarding|respecto a]] the [[timeline|cronograma]].',
      options: ['appreciate', 'know', 'hear'],
      correctAnswer: 'appreciate',
      explanation: 'A standard way to [[acknowledge|reconocer]] someone\'s [[feelings|sentimientos]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'It ___ be [[prudent|prudente]] to [[seek|buscar]] [[legal|legal]] [[advice|consejo]].',
      options: ['might', 'must', 'should'],
      correctAnswer: 'might',
      explanation: 'A very [[diplomatic|diplomática]] [[recommendation|recomendación]].',
      points: 1
    }
  ]
};

export const unit12: Lesson = createC1Unit(
  'c1-u12',
  'Business Negotiations & Diplomacy',
  'Mastering the art of diplomatic communication and persuasive negotiation in professional contexts.',
  ['Use hedging to soften statements', 'Apply advanced negotiation vocabulary', 'Transform blunt language into professional discourse'],
  [
    C1_U12_BLOCK1, C1_U12_BLOCK2, C1_U12_BLOCK3, C1_U12_BLOCK4, C1_U12_BLOCK5
  ]
);

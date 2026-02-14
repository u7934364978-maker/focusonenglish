import { Exercise } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 9;

// ============================================
// BLOCK 1: IT-CLEFT SENTENCES (10 items)
// ============================================
export const C1_U9_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'It-Cleft Sentences for Emphasis',
  grammarPoint: 'Cleft Sentences',
 explanation: 'Use It is/was... that/who to [[highlight|resaltar]] a specific part of the [[sentence|oración]].',   questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
 question: '___ was the [[manager|gerente]] [[who|quien]] made the [[final|final]] [[decision|decisión]], not the [[director|director]].',       options: ['He', 'It', 'There'],
      correctAnswer: 'It',
 explanation: 'Standard It-cleft structure to emphasize the [[subject|sujeto]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
 question: 'It is her [[unwavering|inquebrantable]] [[dedication|dedicación]] ___ [[sets|establece]] her [[apart|aparte]].',       options: ['who', 'which', 'that'],
      correctAnswer: 'that',
 explanation: 'Use that to [[connect|conectar]] the emphasized part with the rest of the [[clause|cláusula]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
 question: 'It was only yesterday ___ they [[announced|anunciaron]] the [[merger|fusión]].',       options: ['when', 'then', 'that'],
      correctAnswer: 'that',
 explanation: 'Emphasizing the [[time|tiempo]] of an action.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
 question: '___ is [[through|a través de]] [[hard|duro]] [[work|trabajo]] that [[success|éxito]] is [[achieved|logrado]].',       options: ['That', 'How', 'It'],
      correctAnswer: 'It',
 explanation: 'Emphasizing the [[means|medio]] or [[method|método]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
 question: 'It wasn\'t me ___ [[broke|rompió]] the [[vase|jarrón]]!',       options: ['which', 'that', 'who'],
      correctAnswer: 'who',
 explanation: 'Use who when emphasizing a [[person|persona]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
 question: 'It was in [[Paris|París]] ___ they first [[met|se conocieron]].',       options: ['where', 'when', 'that'],
      correctAnswer: 'that',
 explanation: 'Emphasizing the [[location|ubicación]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
 question: '___ was because of the [[rain|lluvia]] that the [[event|evento]] was [[cancelled|cancelado]].',       options: ['Which', 'Why', 'It'],
      correctAnswer: 'It',
 explanation: 'Emphasizing the [[reason|razón]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
 question: 'It is [[precisely|precisamente]] this [[issue|asunto]] ___ we need to [[address|abordar]].',       options: ['what', 'which', 'that'],
      correctAnswer: 'that',
 explanation: 'Emphasizing the [[object|objeto]] of the sentence.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
 question: '___ was his [[brother|hermano]] who [[helped|ayudó]] him [[escape|escapar]].',       options: ['That', 'He', 'It'],
      correctAnswer: 'It',
 explanation: 'Emphasizing the [[agent|agente]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
 question: 'It is the [[lack|falta]] of [[funding|financiación]] ___ [[worries|preocupa]] me the [[most|más]].',       options: ['what', 'which', 'that'],
      correctAnswer: 'that',
 explanation: 'Emphasizing a [[noun phrase|frase sustantiva]].',       points: 1
    }
  ]
};

// ============================================
// BLOCK 2: WH-CLEFT SENTENCES (10 items)
// ============================================
export const C1_U9_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Wh-Cleft Sentences (Pseudo-clefts)',
  grammarPoint: 'Cleft Sentences',
 explanation: 'Use What... is/was... to focus on an [[entire|entera]] [[idea|idea]] or action.',   questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
 question: '___ I need is a long [[holiday|vacaciones]].',       options: ['Which', 'That', 'What'],
      correctAnswer: 'What',
 explanation: 'Wh-cleft to focus on the [[thing|cosa]] needed.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
 question: '___ they did was [[completely|completamente]] [[unacceptable|inaceptable]].',       options: ['That', 'How', 'What'],
      correctAnswer: 'What',
 explanation: 'Focusing on an [[action|acción]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
 question: '___ strikes me as [[strange|extraño]] is his [[silence|silencio]].',       options: ['Which', 'It', 'What'],
      correctAnswer: 'What',
 explanation: 'Focusing on a [[perception|percepción]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: '___ happens next is up to you.',
      options: ['Whatever', 'That', 'What'],
      correctAnswer: 'What',
 explanation: 'Focusing on a [[future|futuro]] event.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
 question: '___ I love about this city is its [[vibrant|vibrante]] [[culture|cultura]].',       options: ['Which', 'Where', 'What'],
      correctAnswer: 'What',
 explanation: 'Focusing on a [[specific|específico]] [[aspect|aspecto]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
 question: '___ surprised us all was her [[sudden|repentina]] [[departure|salida]].',       options: ['It', 'That', 'What'],
      correctAnswer: 'What',
 explanation: 'Focusing on a [[cause|causa]] of surprise.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
 question: '___ you should do is [[apologize|disculparte]].',       options: ['How', 'That', 'What'],
      correctAnswer: 'What',
 explanation: 'Focusing on a [[recommended|recomendada]] action.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
 question: '___ matters most is your [[health|salud]].',       options: ['Which', 'It', 'What'],
      correctAnswer: 'What',
 explanation: 'Focusing on [[priority|prioridad]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
 question: '___ I can\'t [[stand|soportar]] is his [[arrogance|arrogancia]].',       options: ['Which', 'That', 'What'],
      correctAnswer: 'What',
 explanation: 'Focusing on a [[negative|negativo]] trait.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
 question: '___ he said [[shocked|conmocionó]] everyone.',       options: ['That', 'Which', 'What'],
      correctAnswer: 'What',
 explanation: 'Focusing on the [[content|contenido]] of speech.',       points: 1
    }
  ]
};

// ============================================
// BLOCK 3: KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U9_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Key Word Transformation: Emphasis',
  grammarPoint: 'Emphasis',
 explanation: 'Rewrite the [[sentence|oración]] to make it more [[emphatic|enfática]] using the [[given|dada]] word.',   questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: 'I only wanted to help you. (ALL) \n ___ was help you.',
      options: ['All I wanted to do', 'Everything I wanted to do', 'The only thing I wanted'],
      correctAnswer: 'All I wanted to do',
      explanation: 'Using "All..." as a cleft structure for emphasis.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: 'He didn\'t just lose the keys; he lost his wallet too. (NOT ONLY) \n ___ the keys, but he lost his wallet too.',
      options: ['Not only did he lose', 'Not only he lost', 'Did he not only lose'],
      correctAnswer: 'Not only did he lose',
 explanation: 'Using [[inversion|inversión]] with Not only.',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: 'I like the way she talks. (WHAT) \n ___ the way she talks.',
      options: ['What I like is', 'It is what I like', 'That I like is'],
      correctAnswer: 'What I like is',
      explanation: 'Wh-cleft transformation.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: 'We must address the issue of poverty immediately. (IT) \n ___ the issue of poverty that we must address immediately.',
      options: ['It is', 'That is', 'There is'],
      correctAnswer: 'It is',
      explanation: 'It-cleft transformation.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: 'The noise woke me up. (THAT) \n It was the noise ___ up.',
      options: ['that woke me', 'who woke me', 'what woke me'],
      correctAnswer: 'that woke me',
 explanation: 'Focusing on the [[agent|agente]] of the action.',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'I\'ve never seen such a beautiful sunset. (NEVER) \n ___ such a beautiful sunset.',
      options: ['Never have I seen', 'Never I have seen', 'Never I saw'],
      correctAnswer: 'Never have I seen',
 explanation: 'Inversion with [[negative|negativo]] adverbial.',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: 'I only realized my mistake later. (DID) \n Not until later ___ my mistake.',
      options: ['did I realize', 'I did realize', 'I realized'],
      correctAnswer: 'did I realize',
      explanation: 'Inversion with "Not until".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: 'She wants to go to Italy. (PLACE) \n ___ she wants to go is Italy.',
      options: ['The place where', 'Where', 'That place where'],
      correctAnswer: 'The place where',
 explanation: 'Cleft sentence using a [[place|lugar]] focus.',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'The reason why he left is unknown. (WHY) \n ___ is unknown.',
      options: ['Why he left', 'That he left', 'The reason'],
      correctAnswer: 'Why he left',
      explanation: 'Nominal relative clause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: 'You should listen more carefully. (WHAT) \n ___ is listen more carefully.',
      options: ['What you should do', 'That you should do', 'It is what you should do'],
      correctAnswer: 'What you should do',
      explanation: 'Pseudo-cleft for advice.',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: EMPHATIC ADJECTIVES & ADVERBS (10 items)
// ============================================
export const C1_U9_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Emphatic Adjectives & Adverbs',
  grammarPoint: 'Vocabulary',
 explanation: 'Use [[powerful|poderosos]] words to add [[emphasis|énfasis]] and [[color|color]] to your [[descriptions|descripciones]].',   questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
 question: 'The view from the top was ___ [[breathtaking|asombroso]].',       options: ['very', 'fairly', 'absolutely'],
      correctAnswer: 'absolutely',
 explanation: 'Use absolutely with [[ungradable|no graduables]] adjectives.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
 question: 'The [[film|película]] was ___ [[fascinating|fascinante]].',       options: ['a bit', 'slightly', 'utterly'],
      correctAnswer: 'utterly',
      explanation: '"Utterly" adds strong emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
 question: 'He was ___ [[devastated|devastado]] by the news.',       options: ['rather', 'somewhat', 'totally'],
      correctAnswer: 'totally',
 explanation: 'Emphasizing a strong [[emotional|emocional]] state.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
 question: 'The [[cost|costo]] of the project is ___ [[prohibitive|prohibitivo]].',       options: ['kind of', 'little', 'simply'],
      correctAnswer: 'simply',
 explanation: 'Simply is used for [[direct|directo]] emphasis.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
 question: 'She is a ___ [[brilliant|brillante]] [[scientist|científica]].',       options: ['fairly', 'pretty', 'truly'],
      correctAnswer: 'truly',
 explanation: 'Truly emphasizes the [[truth|verdad]] of a quality.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
 question: 'The food was ___ [[delicious|delicioso]].',       options: ['quite', 'nearly', 'downright'],
      correctAnswer: 'downright',
 explanation: 'Downright is an [[informal|informal]] but strong [[intensifier|intensificador]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
 question: 'The [[situation|situación]] is ___ [[ridiculous|ridícula]].',       options: ['moderately', 'barely', 'perfectly'],
      correctAnswer: 'perfectly',
      explanation: '"Perfectly" used for ironic or strong emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
 question: 'It was a ___ [[disaster|desastre]].',       options: ['half', 'minor', 'complete'],
      correctAnswer: 'complete',
 explanation: 'Complete emphasizes the [[totality|totalidad]] of a noun.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
 question: 'I was ___ [[exhausted|agotado]] after the long walk.',       options: ['positively', 'slightly', 'partly'],
      correctAnswer: 'positively',
      explanation: '"Positively" adds affirmative emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
 question: 'The [[results|resultados]] are ___ [[extraordinary|extraordinarios]].',       options: ['quite', 'fairly', 'rather'],
      correctAnswer: 'quite',
      explanation: '"Quite" can mean "completely" with ungradable adjectives.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: MIXED PRACTICE (10 items)
// ============================================
export const C1_U9_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Unit 9 Review',
  grammarPoint: 'Emphasis & Clefts',
 explanation: 'Test your [[mastery|maestría]] of [[emphatic|enfáticas]] structures.',   questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
 question: '___ was the [[wind|viento]] that [[blew|sopló]] down the tree.',       options: ['It', 'What', 'There'],
      correctAnswer: 'It',
      explanation: 'It-cleft for emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
 question: '___ I want is a [[clear|clara]] explanation.',       options: ['What', 'That', 'Which'],
      correctAnswer: 'What',
      explanation: 'Wh-cleft for emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
 question: 'I was ___ [[amazed|asombrado]] by her [[talent|talento]].',       options: ['utterly', 'very', 'fairly'],
      correctAnswer: 'utterly',
      explanation: 'Intensifier with ungradable adjective.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
 question: 'It is [[important|importante]] ___ you [[attend|asistas]].',       options: ['that', 'which', 'what'],
      correctAnswer: 'that',
      explanation: 'Standard it-cleft connector.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
 question: '___ only did he [[fail|fallar]], but he [[also|también]] [[gave|dio]] up.',       options: ['Not', 'No', 'Never'],
      correctAnswer: 'Not',
      explanation: 'Not only inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
 question: '___ surprised me [[most|más]] was his [[kindness|bondad]].',       options: ['What', 'It', 'That'],
      correctAnswer: 'What',
      explanation: 'Wh-cleft focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
 question: 'It was the [[weather|clima]] ___ [[spoiled|arruinó]] the [[trip|viaje]].',       options: ['that', 'which', 'who'],
      correctAnswer: 'that',
      explanation: 'It-cleft focusing on the cause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
 question: 'I am ___ [[certain|seguro]] that he is [[lying|mintiendo]].',       options: ['absolutely', 'slightly', 'fairly'],
      correctAnswer: 'absolutely',
      explanation: 'Strong emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
 question: '___ I need is a [[bit|poco]] more [[time|tiempo]].',       options: ['What', 'That', 'Which'],
      correctAnswer: 'What',
      explanation: 'Wh-cleft focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
 question: 'It was in [[2010|2010]] ___ they [[started|empezaron]] the [[company|empresa]].',       options: ['that', 'when', 'which'],
      correctAnswer: 'that',
      explanation: 'It-cleft for time emphasis.',
      points: 1
    }
  ]
};

export const unit9 = createC1Unit(
  'c1-u9',
  'The Power of Emphasis',
  'Master cleft sentences and emphatic vocabulary to highlight key information effectively.',
  ['Use It-clefts and Wh-clefts for emphasis', 'Incorporate inversion for rhetorical effect', 'Use powerful emphatic adjectives and adverbs'],
  [
    C1_U9_BLOCK1, C1_U9_BLOCK2, C1_U9_BLOCK3, C1_U9_BLOCK4, C1_U9_BLOCK5
  ]
);

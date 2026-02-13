import { Exercise, Lesson } from '../exercise-types';
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
  explanation: 'Use "It is/was... that/who" to [[highlight|resaltar]] a specific part of the [[sentence|oración]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'fill-blank',
      question: '___ was the [[manager|gerente]] [[who|quien]] made the [[final|final]] [[decision|decisión]], not the [[director|director]].',
      correctAnswer: 'It',
      explanation: 'Standard "It-cleft" structure to emphasize the [[subject|sujeto]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'fill-blank',
      question: 'It is her [[unwavering|inquebrantable]] [[dedication|dedicación]] ___ [[sets|establece]] her [[apart|aparte]].',
      correctAnswer: 'that',
      explanation: 'Use "that" to [[connect|conectar]] the emphasized part with the rest of the [[clause|cláusula]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'fill-blank',
      question: 'It was only yesterday ___ they [[announced|anunciaron]] the [[merger|fusión]].',
      correctAnswer: 'that',
      explanation: 'Emphasizing the [[time|tiempo]] of an action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'fill-blank',
      question: '___ is [[through|a través de]] [[hard|duro]] [[work|trabajo]] that [[success|éxito]] is [[achieved|logrado]].',
      correctAnswer: 'It',
      explanation: 'Emphasizing the [[means|medio]] or [[method|método]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'fill-blank',
      question: 'It wasn\'t me ___ [[broke|rompió]] the [[vase|jarrón]]!',
      correctAnswer: 'who',
      explanation: 'Use "who" when emphasizing a [[person|persona]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'fill-blank',
      question: 'It was in [[Paris|París]] ___ they first [[met|se conocieron]].',
      correctAnswer: 'that',
      explanation: 'Emphasizing the [[location|ubicación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'fill-blank',
      question: '___ was because of the [[rain|lluvia]] that the [[event|evento]] was [[cancelled|cancelado]].',
      correctAnswer: 'It',
      explanation: 'Emphasizing the [[reason|razón]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'fill-blank',
      question: 'It is [[precisely|precisamente]] this [[issue|asunto]] ___ we need to [[address|abordar]].',
      correctAnswer: 'that',
      explanation: 'Emphasizing the [[object|objeto]] of the sentence.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'fill-blank',
      question: '___ was his [[brother|hermano]] who [[helped|ayudó]] him [[escape|escapar]].',
      correctAnswer: 'It',
      explanation: 'Emphasizing the [[agent|agente]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'fill-blank',
      question: 'It is the [[lack|falta]] of [[funding|financiación]] ___ [[worries|preocupa]] me the [[most|más]].',
      correctAnswer: 'that',
      explanation: 'Emphasizing a [[noun phrase|frase sustantiva]].',
      points: 1
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
  explanation: 'Use "What... is/was..." to focus on an [[entire|entera]] [[idea|idea]] or action.',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: '___ I need is a long [[holiday|vacaciones]].',
      options: ['What', 'Which', 'That'],
      correctAnswer: 'What',
      explanation: 'Wh-cleft to focus on the [[thing|cosa]] needed.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: '___ they did was [[completely|completamente]] [[unacceptable|inaceptable]].',
      options: ['What', 'That', 'How'],
      correctAnswer: 'What',
      explanation: 'Focusing on an [[action|acción]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: '___ strikes me as [[strange|extraño]] is his [[silence|silencio]].',
      options: ['What', 'Which', 'It'],
      correctAnswer: 'What',
      explanation: 'Focusing on a [[perception|percepción]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: '___ happens next is up to you.',
      options: ['What', 'Whatever', 'That'],
      correctAnswer: 'What',
      explanation: 'Focusing on a [[future|futuro]] event.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: '___ I love about this city is its [[vibrant|vibrante]] [[culture|cultura]].',
      options: ['What', 'Which', 'Where'],
      correctAnswer: 'What',
      explanation: 'Focusing on a [[specific|específico]] [[aspect|aspecto]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: '___ surprised us all was her [[sudden|repentina]] [[departure|salida]].',
      options: ['What', 'It', 'That'],
      correctAnswer: 'What',
      explanation: 'Focusing on a [[cause|causa]] of surprise.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: '___ you should do is [[apologize|disculparte]].',
      options: ['What', 'How', 'That'],
      correctAnswer: 'What',
      explanation: 'Focusing on a [[recommended|recomendada]] action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: '___ matters most is your [[health|salud]].',
      options: ['What', 'Which', 'It'],
      correctAnswer: 'What',
      explanation: 'Focusing on [[priority|prioridad]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: '___ I can\'t [[stand|soportar]] is his [[arrogance|arrogancia]].',
      options: ['What', 'Which', 'That'],
      correctAnswer: 'What',
      explanation: 'Focusing on a [[negative|negativo]] trait.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: '___ he said [[shocked|conmocionó]] everyone.',
      options: ['What', 'That', 'Which'],
      correctAnswer: 'What',
      explanation: 'Focusing on the [[content|contenido]] of speech.',
      points: 1
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
  explanation: 'Rewrite the [[sentence|oración]] to make it more [[emphatic|enfática]] using the [[given|dada]] word.',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'fill-blank',
      question: 'I only wanted to help you. (ALL) \n ___ was help you.',
      correctAnswer: 'All I wanted to do',
      explanation: 'Using "All..." as a cleft structure for emphasis.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'fill-blank',
      question: 'He didn\'t just lose the keys; he lost his wallet too. (NOT ONLY) \n ___ the keys, but he lost his wallet too.',
      correctAnswer: 'Not only did he lose',
      explanation: 'Using [[inversion|inversión]] with "Not only".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'fill-blank',
      question: 'I like the way she talks. (WHAT) \n ___ the way she talks.',
      correctAnswer: 'What I like is',
      explanation: 'Wh-cleft transformation.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'fill-blank',
      question: 'We must address the issue of poverty immediately. (IT) \n ___ the issue of poverty that we must address immediately.',
      correctAnswer: 'It is',
      explanation: 'It-cleft transformation.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'fill-blank',
      question: 'The noise woke me up. (THAT) \n It was the noise ___ up.',
      correctAnswer: 'that woke me',
      explanation: 'Focusing on the [[agent|agente]] of the action.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'fill-blank',
      question: 'I\'ve never seen such a beautiful sunset. (NEVER) \n ___ such a beautiful sunset.',
      correctAnswer: 'Never have I seen',
      explanation: 'Inversion with [[negative|negativo]] adverbial.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'fill-blank',
      question: 'I only realized my mistake later. (DID) \n Not until later ___ my mistake.',
      correctAnswer: 'did I realize',
      explanation: 'Inversion with "Not until".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'fill-blank',
      question: 'She wants to go to Italy. (PLACE) \n ___ she wants to go is Italy.',
      correctAnswer: 'The place where',
      explanation: 'Cleft sentence using a [[place|lugar]] focus.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'fill-blank',
      question: 'The reason why he left is unknown. (WHY) \n ___ is unknown.',
      correctAnswer: 'Why he left',
      explanation: 'Nominal relative clause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'fill-blank',
      question: 'You should listen more carefully. (WHAT) \n ___ is listen more carefully.',
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
  explanation: 'Use [[powerful|poderosos]] words to add [[emphasis|énfasis]] and [[color|color]] to your [[descriptions|descripciones]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'The view from the top was ___ [[breathtaking|asombroso]].',
      options: ['absolutely', 'very', 'fairly'],
      correctAnswer: 'absolutely',
      explanation: 'Use "absolutely" with [[ungradable|no graduables]] adjectives.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'The [[film|película]] was ___ [[fascinating|fascinante]].',
      options: ['utterly', 'a bit', 'slightly'],
      correctAnswer: 'utterly',
      explanation: '"Utterly" adds strong emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'He was ___ [[devastated|devastado]] by the news.',
      options: ['totally', 'rather', 'somewhat'],
      correctAnswer: 'totally',
      explanation: 'Emphasizing a strong [[emotional|emocional]] state.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'The [[cost|costo]] of the project is ___ [[prohibitive|prohibitivo]].',
      options: ['simply', 'kind of', 'little'],
      correctAnswer: 'simply',
      explanation: '"Simply" is used for [[direct|directo]] emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'She is a ___ [[brilliant|brillante]] [[scientist|científica]].',
      options: ['truly', 'fairly', 'pretty'],
      correctAnswer: 'truly',
      explanation: '"Truly" emphasizes the [[truth|verdad]] of a quality.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'The food was ___ [[delicious|delicioso]].',
      options: ['downright', 'quite', 'nearly'],
      correctAnswer: 'downright',
      explanation: '"Downright" is an [[informal|informal]] but strong [[intensifier|intensificador]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'The [[situation|situación]] is ___ [[ridiculous|ridícula]].',
      options: ['perfectly', 'moderately', 'barely'],
      correctAnswer: 'perfectly',
      explanation: '"Perfectly" used for ironic or strong emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'It was a ___ [[disaster|desastre]].',
      options: ['complete', 'half', 'minor'],
      correctAnswer: 'complete',
      explanation: '"Complete" emphasizes the [[totality|totalidad]] of a noun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'I was ___ [[exhausted|agotado]] after the long walk.',
      options: ['completely', 'fairly', 'bit'],
      correctAnswer: 'completely',
      explanation: 'Standard intensifier for [[absolute|absolutos]] adjectives.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'The results were ___ [[disappointing|decepcionantes]].',
      options: ['bitterly', 'very', 'much'],
      correctAnswer: 'bitterly',
      explanation: '"Bitterly" is often used with "disappointing".',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: ERROR CORRECTION - EMPHASIS (10 items)
// ============================================
export const C1_U9_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Error Correction: Clefts & Inversion',
  grammarPoint: 'Mixed Review',
  explanation: 'Find the [[mistakes|errores]] in these [[emphatic|enfáticas]] sentences.',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'What I want is you to be happy.',
      options: ['you to be', 'for you to be', 'that you be'],
      correctAnswer: 'for you to be',
      explanation: 'Use "for + object + to-infinitive" after "is" in this cleft structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'It was the cat who broke the vase.',
      options: ['who', 'that', 'which'],
      correctAnswer: 'that',
      explanation: 'While "who" is used for people, "that" is [[preferred|preferido]] for [[animals|animales]] or things in clefts.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'Only later I realized my mistake.',
      options: ['I realized', 'did I realize', 'had I realized'],
      correctAnswer: 'did I realize',
      explanation: 'Inversion is required after "Only later".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'What she did it was very brave.',
      options: ['it was', 'was', 'is'],
      correctAnswer: 'was',
      explanation: 'Don\'t use a [[redundant|redundante]] "it" in a wh-cleft.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'Never I have been so insulted!',
      options: ['I have been', 'have I been', 'I had been'],
      correctAnswer: 'have I been',
      explanation: 'Inversion after "Never".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'It is me who is responsible.',
      options: ['me who is', 'I who am', 'me whom is'],
      correctAnswer: 'I who am',
      explanation: 'In [[formal|formal]] English, the pronoun and verb should match the [[subject|sujeto]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'All she want is a little peace.',
      options: ['want', 'wants', 'wanted'],
      correctAnswer: 'wants',
      explanation: 'Subject-verb agreement: "All she wants".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'Not until he arrived we started.',
      options: ['we started', 'did we start', 'had we started'],
      correctAnswer: 'did we start',
      explanation: 'Inversion in the [[main|principal]] clause after "Not until...".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'It was him who told me.',
      options: ['him who', 'he who', 'it who'],
      correctAnswer: 'he who',
      explanation: 'Formal English uses the [[subject|sujeto]] pronoun after "It was".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'Seldom we see such talent.',
      options: ['we see', 'do we see', 'we saw'],
      correctAnswer: 'do we see',
      explanation: 'Inversion after [[restrictive|restrictivos]] adverbs like "Seldom".',
      points: 1
    }
  ]
};

export const unit9: Lesson = createC1Unit(
  'c1-u9',
  'Cleft Sentences & Emphasis',
  'Learning to manipulate sentence structure to highlight information and add rhetorical power.',
  ['Use it-clefts and wh-clefts correctly', 'Apply inversion for emphasis', 'Employ sophisticated intensifiers'],
  [
    C1_U9_BLOCK1, C1_U9_BLOCK2, C1_U9_BLOCK3, C1_U9_BLOCK4, C1_U9_BLOCK5
  ]
);

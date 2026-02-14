import { Exercise } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 13;

// ============================================
// BLOCK 1: THE... THE... STRUCTURE (10 items)
// ============================================
export const C1_U13_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Parallel Increase: The..., The...',
  grammarPoint: 'Double Comparatives',
  explanation: 'The structure [[The|El]] + "[[comparative|comparativo]], [[the|el]] + "[[comparative|comparativo]] is used to show that two things [[change|cambian]] together.',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'The ___ we [[invest|invertimos]], the better the [[results|resultados]] will be.',
      options: ['more', 'most', 'much'],
      correctAnswer: 'more',
      explanation: 'Use "The more" for [[countable|contables]] or [[uncountable|incontables]] increases.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: 'The ___ you [[finish|terminas]] the [[report|informe]], the [[sooner|más pronto]] we can [[leave|irnos]].',
      options: ['soon', 'sooner', 'soonest'],
      correctAnswer: 'sooner',
      explanation: 'Comparative form of "soon".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: 'The ___ you [[work|trabajas]], the [[luckier|más afortunado]] you [[get|te vuelves]].',
      options: ['harder', 'hard', 'hardest'],
      correctAnswer: 'harder',
      explanation: 'Comparative form of "hard".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: 'The ___ the [[issue|problema]], the more [[careful|cuidadosos]] we must be.',
      options: ['more complex', 'most complex', 'complexer'],
      correctAnswer: 'more complex',
      explanation: 'Long adjectives use "more" in this structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: 'The ___ you [[spend|gastas]], the more you [[save|ahorras]].',
      options: ['least', 'less', 'little'],
      correctAnswer: 'less',
      explanation: '"Less" is the comparative of "little".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: 'The ___ you [[climb|escalas]], the ___ the [[air|aire]] [[becomes|se vuelve]].',
      options: ['higher, thinner', 'high, thin', 'highest, thinnest'],
      correctAnswer: 'higher, thinner',
      explanation: 'Both parts of the [[sentence|oración]] need a comparative.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: 'The ___ the [[risk|riesgo]], the ___ the [[reward|recompensa]].',
      options: ['biggest, greatest', 'bigger, greater', 'big, great'],
      correctAnswer: 'bigger, greater',
      explanation: 'Parallel increase structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: 'The ___ we [[go|vamos]], the more [[expensive|caro]] it [[gets|se vuelve]].',
      options: ['far', 'farther', 'farthest'],
      correctAnswer: 'farther',
      explanation: '"Farther" or "further" for [[distance|distancia]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: 'The ___ the [[load|carga]], the ___ the [[truck|camión]] [[moves|se mueve]].',
      options: ['heavier, slower', 'heavy, slow', 'heaviest, slowest'],
      correctAnswer: 'heavier, slower',
      explanation: 'Comparative forms of heavy and slow.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: 'The ___ you [[prepare|preparas]], the ___ the [[exam|examen]] will be.',
      options: ['best, easiest', 'better, easier', 'well, easy'],
      correctAnswer: 'better, easier',
      explanation: '"Better" is the comparative of "well".',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: COMPARATIVE MODIFIERS (10 items)
// ============================================
export const C1_U13_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Modifiers for Precision in Comparison',
  grammarPoint: 'Comparatives',
  explanation: 'Use [[adverbs|adverbios]] like "considerably", "slightly", or "marginaly" to [[show|mostrar]] the [[degree|grado]] of [[difference|diferencia]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: 'This year\'s [[profits|ganancias]] are ___ [[higher|más altas]] than last year\'s.',
      options: ['significantly', 'very', 'more'],
      correctAnswer: 'significantly',
      explanation: '"Significantly" is a [[formal|formal]] modifier for comparative adjectives.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'The [[new|nuevo]] [[model|modelo]] is ___ [[more|más]] [[efficient|eficiente]] than the old one.',
      options: ['marginally', 'quite', 'so'],
      correctAnswer: 'marginally',
      explanation: '"Marginally" means "by a [[very|muy]] [[small|pequeño]] [[amount|margen]] .',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'He is ___ [[the|el]] [[best|mejor]] [[candidate|candidato]] we\'ve [[interviewed|entrevistado]].',
      options: ['by far', 'far', 'much'],
      correctAnswer: 'by far',
      explanation: 'Use "by far" to [[emphasize|enfatizar]] a [[superlative|superlativo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'The [[task|tarea]] was ___ [[easier|más fácil]] than I had [[anticipated|anticipado]].',
      options: ['considerably', 'too', 'more'],
      correctAnswer: 'considerably',
      explanation: '"Considerably" shows a [[large|gran]] [[degree|grado]] of difference.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'It is ___ [[near|cerca]] as [[difficult|difícil]] as people [[say|dicen]].',
      options: ['nowhere', 'not', 'nothing'],
      correctAnswer: 'nowhere',
      explanation: '"Nowhere near" means "not [[at all|en absoluto]] .',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'She is ___ [[bit|un poco]] as [[talented|talentosa]] as her [[predecessor|predecesor]].',
      options: ['every', 'all', 'full'],
      correctAnswer: 'every',
      explanation: '"Every bit as... as" means [[exactly|exactamente]] the same".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: 'The [[outcome|resultado]] was ___ [[better|mejor]] than we [[hoped|esperábamos]].',
      options: ['infinitely', 'very', 'most'],
      correctAnswer: 'infinitely',
      explanation: '"Infinitely" adds [[extreme|extremo]] emphasis to a comparison.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'His [[condition|condición]] is ___ [[worse|peor]] than [[yesterday|ayer]].',
      options: ['somewhat', 'very', 'bit'],
      correctAnswer: 'somewhat',
      explanation: '"Somewhat" is a [[moderate|moderado]] modifier.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'The [[two|dos]] [[plans|planes]] are ___ [[identical|idénticos]].',
      options: ['virtually', 'nearly', 'almost'],
      correctAnswer: 'virtually',
      explanation: '"Virtually" means [[almost|casi]] [[entirely|enteramente]] .',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'This is ___ the [[most|más]] [[complex|complejo]] [[case|caso]] yet.',
      options: ['easily', 'hardly', 'quite'],
      correctAnswer: 'easily',
      explanation: '"Easily" is used with [[superlatives|superlativos]] to show [[lack|falta]] of [[doubt|duda]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U13_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Key Word Transformation: Comparatives',
  grammarPoint: 'Mixed Structures',
  explanation: 'Rewrite the [[sentence|oración]] to include advanced [[comparative|comparativas]] structures.',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: 'The car wasn\'t as expensive as I thought it would be. (NEAR) \n The car was ___ expensive as I thought it would be.',
      options: ['not nearly as', 'nowhere near as', 'not quite as'],
      correctAnswer: 'nowhere near as',
      explanation: 'Using "nowhere near as... as" for emphasis.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: 'As you get older, you become wiser. (THE) \n The ___ you become.',
      options: ['older get, wiser', 'older you get, wiser', 'older you get, the wiser'],
      correctAnswer: 'older you get, the wiser',
      explanation: 'Parallel increase transformation.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: 'He is definitely the best player in the team. (FAR) \n He is ___ best player in the team.',
      options: ['far the', 'by far the', 'the far'],
      correctAnswer: 'by far the',
      explanation: 'Emphasizing a superlative with "by far".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: 'I have never seen a more beautiful sunset. (MOST) \n That was the ___ I have ever seen.',
      options: ['more beautiful sunset', 'most beautiful sunset', 'beautifulest sunset'],
      correctAnswer: 'most beautiful sunset',
      explanation: 'Comparative to superlative transformation.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: 'This task is slightly harder than the last one. (BIT) \n This task is a ___ than the last one.',
      options: ['little harder', 'more harder', 'bit harder'],
      correctAnswer: 'bit harder',
      explanation: 'Using "a bit" as a modifier.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'The results are almost the same. (VIRTUALLY) \n The results are ___ .',
      options: ['nearly the same', 'virtually the same', 'almost identical'],
      correctAnswer: 'virtually the same',
      explanation: 'Using "virtually" for precision.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: 'If you study more, you will learn more. (THE) \n The ___ you will learn.',
      options: ['more study, more', 'more you study, the more', 'more you study, more'],
      correctAnswer: 'more you study, the more',
      explanation: 'Standard double comparative.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: 'Her French is much better than mine. (GOOD) \n My French is ___ hers.',
      options: ['not as good as', 'nowhere near as good as', 'worse than'],
      correctAnswer: 'nowhere near as good as',
      explanation: 'Expressing a large [[difference|diferencia]] using "as... as".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'This book is exactly as interesting as his last one. (EVERY) \n This book is ___ as his last one.',
      options: ['all bit as interesting', 'every bit as interesting', 'just as interesting'],
      correctAnswer: 'every bit as interesting',
      explanation: '"Every bit as" means "exactly as".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: 'The situation is getting worse and worse. (STEADILY) \n The situation is ___ .',
      options: ['steadily worse', 'getting steadily worse', 'steadily getting worse'],
      correctAnswer: 'steadily getting worse',
      explanation: 'Using an [[adverb|adverbio]] to show [[gradual|gradual]] change.',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: ACADEMIC COMPARISON VOCABULARY (10 items)
// ============================================
export const C1_U13_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Advanced Vocabulary for Comparison',
  grammarPoint: 'Vocabulary',
  explanation: 'Use [[precise|precisos]] verbs and [[nouns|sustantivos]] to [[compare|comparar]] and [[contrast|contrastar]] in a [[formal|formal]] way.',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'The [[two|dos]] [[approaches|enfoques]] ___ [[significantly|significativamente]] from each other.',
      options: ['are', 'differ', 'contrast'],
      correctAnswer: 'differ',
      explanation: '"Differ" is a [[formal|formal]] verb meaning "to be [[different|diferentes]] .',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'There is a [[striking|llamativo]] ___ [[between|entre]] the [[two|dos]] [[theories|teorías]].',
      options: ['different', 'contrast', 'unlike'],
      correctAnswer: 'contrast',
      explanation: '"Contrast" as a noun [[highlights|resalta]] [[differences|diferencias]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'This [[new|nuevo]] [[evidence|evidencia]] ___ our [[previous|previas]] [[findings|hallazgos]].',
      options: ['beats', 'outweighs', 'wins'],
      correctAnswer: 'outweighs',
      explanation: '"Outweighs" means "is more [[important|importante]] than".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: '___ to [[popular|popular]] [[belief|creencia]], the [[earth|tierra]] is not flat.',
      options: ['Against', 'Contrary', 'Opposite'],
      correctAnswer: 'Contrary',
      explanation: '"Contrary to" is a standard [[linking|de unión]] phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'The [[similarities|similitudes]] are ___ [[superficial|superficiales]].',
      options: ['just', 'merely', 'only'],
      correctAnswer: 'merely',
      explanation: '"Merely" is a [[formal|formal]] way to say "only" or "just".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'The [[cost|costo]] is ___ [[prohibitive|prohibitivo]].',
      options: ['much', 'utterly', 'so'],
      correctAnswer: 'utterly',
      explanation: '"Utterly" is a strong [[intensifier|intensificador]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'There is a ___ [[difference|diferencia]] in [[quality|calidad]].',
      options: ['big', 'marked', 'wide'],
      correctAnswer: 'marked',
      explanation: '"Marked" means [[noticeable|notable]] or [[clear|clara]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'The [[results|resultados]] ___ [[favorably|favorablemente]] with [[previous|previos]] [[studies|estudios]].',
      options: ['look', 'compare', 'match'],
      correctAnswer: 'compare',
      explanation: 'To "compare favorably" means to be [[as good as|tan bueno como]] or [[better|mejor]] than.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'He is ___ [[the|el]] [[most|más]] [[experienced|experimentado]] [[member|miembro]].',
      options: ['unquestionably', 'by far', 'notably'],
      correctAnswer: 'unquestionably',
      explanation: '"Unquestionably" expresses [[total|total]] [[certainty|certeza]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'The [[impact|impacto]] is [[relatively|relativamente]] ___ .',
      options: ['small', 'negligible', 'bit'],
      correctAnswer: 'negligible',
      explanation: '"Negligible" means so [[small|pequeño]] it can be [[ignored|ignorado]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: MIXED PRACTICE (10 items)
// ============================================
export const C1_U13_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Unit 13 Review',
  grammarPoint: 'Mixed Comparatives',
  explanation: 'Final check of Unit 13 [[concepts|conceptos]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'The ___ you [[wait|esperas]], the ___ [[difficult|difícil]] it [[becomes|se vuelve]].',
      options: ['long, most', 'longer, more', 'longest, more'],
      correctAnswer: 'longer, more',
      explanation: 'Double comparative structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'This [[task|tarea]] is ___ [[harder|más difícil]] than I [[thought|pensé]].',
      options: ['too', 'considerably', 'more'],
      correctAnswer: 'considerably',
      explanation: 'Formal modifier.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'It is ___ [[near|cerca]] as [[expensive|caro]] as the [[other|otro]] one.',
      options: ['not', 'nowhere', 'no'],
      correctAnswer: 'nowhere',
      explanation: 'Strong negative comparison.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'She is ___ [[bit|un poco]] as [[smart|inteligente]] as [[him|él]].',
      options: ['all', 'every', 'each'],
      correctAnswer: 'every',
      explanation: 'Equality emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'The [[results|resultados]] are ___ [[identical|idénticos]].',
      options: ['almost', 'virtually', 'nearly'],
      correctAnswer: 'virtually',
      explanation: 'Precise modifier.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'The [[two|dos]] [[cases|casos]] ___ [[widely|ampliamente]].',
      options: ['contrast', 'differ', 'are'],
      correctAnswer: 'differ',
      explanation: 'Formal verb for comparison.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'The [[benefits|beneficios]] ___ the [[drawbacks|inconvenientes]].',
      options: ['beat', 'outweigh', 'over'],
      correctAnswer: 'outweigh',
      explanation: 'Comparing importance.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: '___ to [[expectations|expectativas]], the [[event|evento]] was a [[success|éxito]].',
      options: ['Opposite', 'Contrary', 'Against'],
      correctAnswer: 'Contrary',
      explanation: 'Contrast linker.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'This is ___ [[the|el]] [[most|más]] [[efficient|eficiente]] [[way|manera]].',
      options: ['hardly', 'easily', 'quite'],
      correctAnswer: 'easily',
      explanation: 'Superlative intensifier.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'The ___ you [[read|lees]], the ___ you [[know|sabes]].',
      options: ['most, most', 'more, more', 'much, much'],
      correctAnswer: 'more, more',
      explanation: 'Parallel increase.',
      points: 1
    }
  ]
};

export const unit13 = createC1Unit(
  'c1-u13',
  'Advanced Comparison & Contrast',
  'Go beyond basic comparisons and learn to express degrees of difference and parallel increases with precision.',
  ['Use "The..., The..." structures for parallel increases', 'Apply sophisticated modifiers to comparative and superlative forms', 'Utilize formal verbs and nouns for academic comparison and contrast'],
  [
    C1_U13_BLOCK1, C1_U13_BLOCK2, C1_U13_BLOCK3, C1_U13_BLOCK4, C1_U13_BLOCK5
  ]
);

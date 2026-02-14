import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 23;

// ============================================
// BLOCK 1: CONCESSIVE CONJUNCTIONS (10 items)
// ============================================
export const C1_U23_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Concession: Albeit, Notwithstanding, & Even so',
  grammarPoint: 'Concession',
 explanation: 'Advanced English uses specific [[connectors|conectores]] to show [[concession|concesión]] (accepting a point while maintaining a main argument).',   questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
 question: 'The [[project|proyecto]] was a [[success|éxito]], ___ an [[expensive|caro]] one.',       options: ['although', 'albeit', 'however'],
      correctAnswer: 'albeit',
 explanation: 'Albeit is a formal synonym for [[although|aunque]], often used before adjectives or noun phrases.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
 question: '___ the [[weather|tiempo]], the [[match|partido]] went [[ahead|adelante]].',       options: ['Despite', 'Nevertheless', 'Notwithstanding'],
      correctAnswer: 'Notwithstanding',
 explanation: 'Notwithstanding is a formal way to say [[despite|a pesar de]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
 question: 'It was [[raining|lloviendo]] [[hard|fuerte]]. ___, we [[decided|decidimos]] to [[go|ir]] out.',       options: ['Even so', 'Albeit', 'Whatever'],
      correctAnswer: 'Even so',
 explanation: 'Even so links two sentences to show [[contrast|contraste]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
 question: '[[Much|Mucho]] ___ I [[like|gusta]] him, I [[can\'t|no puedo]] [[trust|confiar]] him.',       options: ['though', 'as', 'since'],
      correctAnswer: 'as',
 explanation: 'Much as is a strong concessive [[opener|apertura]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
 question: '___ [[though|aunque]] it was, she [[bought|compró]] it.',       options: ['even if', 'albeit', 'though'],
      correctAnswer: 'though',
      explanation: '"Adjective + though + subject + verb" is a common C1 structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
 question: '___ you [[say|digas]], I won\'t [[change|cambiar]] my [[mind|opinión]].',       options: ['Whatever', 'However', 'Whenever'],
      correctAnswer: 'Whatever',
 explanation: 'Whatever introduces a [[total|total]] concession.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
 question: '___ of his [[lack|falta]] of [[experience|experiencia]], he [[got|consiguió]] the [[job|trabajo]].',       options: ['Despite', 'In spite', 'Regardless'],
      correctAnswer: 'In spite',
 explanation: 'In spite of is synonymous with [[despite|a pesar de]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
 question: 'He is [[tired|cansado]]. ___, (Nevertheless) he [[continued|continuó]] [[working|trabajando]].',       options: ['Instead', 'Still', 'Nevertheless'],
      correctAnswer: 'Nevertheless',
 explanation: 'Formal sentence [[adverb|adverbio]] for contrast.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
 question: '___ I [[agree|de acuerdo]] with you [[in principle|en principio]], I [[disagree|en desacuerdo]] with the [[method|método]].',       options: ['While', 'Notwithstanding', 'Albeit'],
      correctAnswer: 'While',
 explanation: 'While used for concession at the [[start|inicio]] of a sentence.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
 question: '___ as he [[tried|intentó]], he [[couldn\'t|no pudo]] [[solve|resolver]] the [[puzzle|rompecabezas]].',       options: ['Try', 'Hard', 'Strong'],
      correctAnswer: 'Hard',
      explanation: '"Adverb + as + subject + verb" for concession.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: CONTRASTING IDEAS (10 items)
// ============================================
export const C1_U23_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Contrast: Conversely, By contrast, & On the contrary',
  grammarPoint: 'Contrast',
 explanation: 'Use these [[connectors|conectores]] to show [[direct|directa]] opposition or a [[different|diferente]] [[perspective|perspectiva]].',   questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
 question: 'The [[first|primera]] [[draft|borrador]] was [[bad|malo]]. ___, the [[second|segundo]] was [[excellent|excelente]].',       options: ['Instead', 'Conversely', 'Still'],
      correctAnswer: 'Conversely',
 explanation: 'Conversely introduces an [[opposite|opuesta]] [[idea|idea]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
 question: 'Some [[people|personas]] [[love|aman]] [[traveling|viajar]]. ___, others [[prefer|prefieren]] to [[stay|quedarse]] at [[home|casa]].',       options: ['Moreover', 'Furthermore', 'By contrast'],
      correctAnswer: 'By contrast',
 explanation: 'By contrast compares two different [[groups|grupos]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
 question: 'You [[must|debes]] be [[happy|feliz]]. ___, I am [[miserable|miserable]].',       options: ['On the contrary', 'In contrast', 'Otherwise'],
      correctAnswer: 'On the contrary',
 explanation: 'On the contrary [[denies|niega]] a previous [[statement|afirmación]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
 question: 'The [[west|oeste]] is [[wet|húmedo]], ___ the [[east|este]] is [[dry|seco]].',       options: ['despite', 'whereas', 'nevertheless'],
      correctAnswer: 'whereas',
 explanation: 'Whereas links two [[balanced|equilibradas]] clauses.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
 question: 'I didn\'t [[go|ir]] to the [[party|fiesta]]. ___, (Instead) I [[stayed|quedé]] in and [[read|leí]].',       options: ['Still', 'Yet', 'Instead'],
      correctAnswer: 'Instead',
 explanation: 'Instead shows an [[alternative|alternativa]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
 question: 'He is very [[rich|rico]], ___ he is very [[frugal|frugal]].',       options: ['yet', 'so', 'for'],
      correctAnswer: 'yet',
 explanation: 'Yet shows an [[unexpected|inesperado]] contrast.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
 question: '___ his brother, he is very [[shy|tímido]].',       options: ['Contrary', 'Unlike', 'Different'],
      correctAnswer: 'Unlike',
 explanation: 'Unlike compares two [[nouns|sustantivos]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
 question: 'The [[prices|precios]] are [[high|altos]]. ___, (Still) [[demand|demanda]] [[remains|permanece]] [[strong|fuerte]].',       options: ['Hence', 'Thus', 'Still'],
      correctAnswer: 'Still',
 explanation: 'Still can be used like [[nevertheless|sin embargo]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
 question: 'I am [[tired|cansado]]. ___, (At the same time) I [[can\'t|no puedo]] [[sleep|dormir]].',       options: ['At the same time', 'Consecutively', 'Subsequently'],
      correctAnswer: 'At the same time',
 explanation: 'At the same time shows [[simultaneous|simultáneo]] contrast.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
 question: 'He is [[brilliant|brillante]], ___ [[disorganized|desorganizado]].',       options: ['although', 'but', 'despite'],
      correctAnswer: 'but',
      explanation: 'Basic coordinating conjunction for contrast.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: EMPHASIZING THE UNEXPECTED (10 items)
// ============================================
export const C1_U23_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Emphasis in Contrast: Even, Indeed, & Instead',
  grammarPoint: 'Emphasis',
 explanation: 'Use specific [[words|palabras]] to [[highlight|resaltar]] that a situation is [[surprising|sorprendente]] or [[contrary|contraria]] to expectations.',   questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
 question: 'He didn\'t [[just|solo]] [[win|ganar]]; he ___ [[broke|rompió]] the [[record|récord]].',       options: ['already', 'actually', 'indeed'],
      correctAnswer: 'actually',
 explanation: 'Actually emphasizes a surprising [[fact|hecho]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
 question: 'The [[film|película]] was [[not|no]] [[good|buena]]. [[Indeed|De hecho]], it was ___.',       options: ['great', 'okay', 'terrible'],
      correctAnswer: 'terrible',
 explanation: 'Indeed adds [[weight|peso]] to a previous [[point|punto]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
 question: 'She didn\'t [[cry|llorar]]. ___, she [[laughed|rio]].',       options: ['Instead', 'Indeed', 'Actually'],
      correctAnswer: 'Instead',
 explanation: 'Instead emphasizes the [[substitution|sustitución]] of actions.',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
 question: '___ if he [[apologizes|se disculpa]], I won\'t [[forgive|perdonar]] him.',       options: ['Still', 'Even', 'Already'],
      correctAnswer: 'Even',
 explanation: 'Even if emphasizes the [[limit|límite]] of a condition.',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
 question: 'He was so [[tired|cansado]] that he ___ [[forgot|olvidó]] his [[name|nombre]].',       options: ['already', 'still', 'even'],
      correctAnswer: 'even',
      explanation: '"Even" adds emphasis to an extreme case.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
 question: 'I was [[surprised|sorprendido]] that he [[came|vino]] ___.',       options: ['at all', 'too much', 'enough'],
      correctAnswer: 'at all',
 explanation: 'At all emphasizes a [[negative|negativa]] or [[question|pregunta]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
 question: 'It was a [[difficult|difícil]] [[year|año]], but we [[survived|sobrevivimos]] ___.',       options: ['moreover', 'nonetheless', 'furthermore'],
      correctAnswer: 'nonetheless',
 explanation: 'Nonetheless is a formal way to say [[anyway|de todas formas]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
 question: 'The [[offer|oferta]] was [[good|buena]]. ___, the [[risks|riesgos]] were [[high|altos]].',       options: ['However', 'Actually', 'Mind you'],
      correctAnswer: 'Mind you',
 explanation: 'Mind you adds a [[counter-point|contrapunto]] or [[warning|advertencia]].',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
 question: 'He is a [[great|gran]] [[player|jugador]]. ___, he [[needs|necesita]] more [[discipline|disciplina]].',       options: ['That said', 'In fact', 'As a result'],
      correctAnswer: 'That said',
 explanation: 'That said introduces a [[balancing|equilibrante]] contrast.',       points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
 question: 'She is very [[kind|amable]]. ___, she can be very [[strict|estricta]].',       options: ['Furthermore', 'Conversely', 'Moreover'],
      correctAnswer: 'Conversely',
      explanation: 'Formal direct contrast.',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: COMPLEX CONCESSION PATTERNS (10 items)
// ============================================
export const C1_U23_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Inversion & Complex Concession',
  grammarPoint: 'Concession',
 explanation: 'Using [[inversion|inversión]] and [[complex structures|estructuras complejas]] to show [[sophisticated|sofisticada]] concession.',   questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
 question: '___ as I [[hate|odio]] to [[admit|admitir]] it, you were [[right|razón]].',       options: ['Many', 'Much', 'Strong'],
      correctAnswer: 'Much',
      explanation: '"Much as" is a fixed concessive structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
 question: '[[Try|Intentar]] ___ he [[might|pudiera]], he [[couldn\'t|no pudo]] [[open|abrir]] it.',       options: ['while', 'as', 'though'],
      correctAnswer: 'as',
      explanation: '"Verb + as + subject + modal" for concession.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
 question: '___ that as it [[may|pueda]], we [[must|debemos]] [[continue|continuar]].',       options: ['Be', 'Is', 'Are'],
      correctAnswer: 'Be',
 explanation: 'Be that as it may is a formal [[idiom|idiom]] for concession.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
 question: '[[Tired|Cansado]] ___ she [[was|estaba]], she [[finished|terminó]] the [[report|informe]].',       options: ['even', 'though', 'but'],
      correctAnswer: 'though',
      explanation: 'Adjective + though.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
 question: '___ the [[fact|hecho]] [[that|que]] it was [[late|tarde]], they [[stayed|quedaron]].',       options: ['Despite', 'Regardless', 'Notwithstanding'],
      correctAnswer: 'Notwithstanding',
      explanation: 'Formal connector used with "the fact that".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
 question: '___ as it [[seems|parece]], I [[actually|realmente]] [[enjoyed|disfruté]] it.',       options: ['Strange', 'Strangely', 'Stranger'],
      correctAnswer: 'Strange',
      explanation: 'Adjective + as + subject + verb.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
 question: '___ [[hard|duro]] you [[try|intentes]], you [[can\'t|no puedes]] [[win|ganar]].',       options: ['Whatever', 'However', 'Wherever'],
      correctAnswer: 'However',
      explanation: '"However + adjective/adverb" for concession.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
 question: 'The [[weather|tiempo]] was [[bad|malo]]. ___ [[the same|lo mismo]], it was a [[good|buen]] [[trip|viaje]].',       options: ['Even', 'Still', 'All'],
      correctAnswer: 'All',
 explanation: 'All the same means [[nevertheless|de todas formas]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
 question: '___ though they [[fought|lucharon]] , they [[lost|perdieron]].',       options: ['Harder', 'Hardly', 'Hard'],
      correctAnswer: 'Hard',
      explanation: 'Adverb + though.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
 question: '___ [[being|ser]] [[rich|rico]], he is [[miserable|miserable]].',       options: ['Despite', 'Although', 'Even'],
      correctAnswer: 'Despite',
 explanation: 'Despite is followed by [[-ing|gerundio]].',       points: 1
    }
  ]
};

// ============================================
// BLOCK 5: KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U23_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Key Word Transformation: Concession',
  grammarPoint: 'Mixed Review',
 explanation: 'Rewrite the [[sentence|oración]] using the [[given|dada]] word.',   questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'Although it was expensive, he bought it. (ALBEIT) \n He bought it, ___ expensive.',
      options: ['although', 'albeit', 'however'],
      correctAnswer: 'albeit',
      explanation: 'Using "albeit" for concise concession.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'Despite the rain, we went out. (NOTWITHSTANDING) \n The rain ___ , we went out.',
      options: ['despite', 'nevertheless', 'notwithstanding'],
      correctAnswer: 'notwithstanding',
      explanation: '"Notwithstanding" can follow the noun.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'I like him, but I don\'t trust him. (MUCH) \n ___ as I like him, I don\'t trust him.',
      options: ['Much', 'Many', 'So'],
      correctAnswer: 'Much',
      explanation: 'Concessive opener.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'Even though he tried hard, he failed. (HARD) \n ___ as he tried, he failed.',
      options: ['Try', 'Hard', 'Strenuous'],
      correctAnswer: 'Hard',
      explanation: 'Adverb + as + subject + verb.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'No matter what you say, I won\'t go. (WHATEVER) \n ___ you say, I won\'t go.',
      options: ['However', 'No matter', 'Whatever'],
      correctAnswer: 'Whatever',
      explanation: '"Whatever" replaces "no matter what".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'The film was bad, but we stayed. (SAME) \n The film was bad; all the ___ , we stayed.',
      options: ['same', 'contrary', 'opposite'],
      correctAnswer: 'same',
      explanation: '"All the same" for contrast.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'Even though it was late, they continued. (THOUGH) \n Late ___ was, they continued.',
      options: ['as it', 'though it', 'albeit it'],
      correctAnswer: 'though it',
      explanation: 'Adjective + though + subject + verb.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'He is clever, whereas his sister is funny. (CONTRAST) \n He is clever; by ___ , his sister is funny.',
      options: ['comparison', 'contrary', 'contrast'],
      correctAnswer: 'contrast',
      explanation: 'Using "by contrast".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'I don\'t agree, even if you insist. (HOWEVER) \n I don\'t agree, ___ you insist.',
      options: ['however much', 'whatever much', 'how much'],
      correctAnswer: 'however much',
      explanation: '"However much" for emphasis.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'Although he was tired, he ran. (SPITE) \n In ___ being tired, he ran.',
      options: ['spite for', 'spite of', 'spite with'],
      correctAnswer: 'spite of',
      explanation: '"In spite of" + gerund.',
      points: 2
    }
  ]
};

export const unit23: Lesson = createC1Unit(
  'c1-u23',
  'Advanced Concession & Contrast',
  'Mastering formal connectors and sophisticated structures to show concession and direct contrast.',
  ['Use albeit and notwithstanding accurately', 'Apply complex concession patterns like Much as and Adjective + though', 'Differentiate between direct contrast and contradiction'],
  [
    C1_U23_BLOCK1, C1_U23_BLOCK2, C1_U23_BLOCK3, C1_U23_BLOCK4, C1_U23_BLOCK5
  ]
);

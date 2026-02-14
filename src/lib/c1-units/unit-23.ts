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
  explanation: 'Advanced English uses specific [[connectors|conectores]] to show [[concession|concesión]] (accepting a point while maintaining a main argument).',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'fill-blank',
      question: 'The [[project|proyecto]] was a [[success|éxito]], ___ an [[expensive|caro]] one.',
      correctAnswer: 'albeit',
      explanation: '"Albeit" is a formal synonym for [[although|aunque]], often used before adjectives or noun phrases.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'fill-blank',
      question: '___ the [[weather|tiempo]], the [[match|partido]] went [[ahead|adelante]].',
      correctAnswer: 'Notwithstanding',
      explanation: '"Notwithstanding" is a formal way to say [[despite|a pesar de]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'fill-blank',
      question: 'It was [[raining|lloviendo]] [[hard|fuerte]]. ___, we [[decided|decidimos]] to [[go|ir]] out.',
      correctAnswer: 'Even so',
      explanation: '"Even so" links two sentences to show [[contrast|contraste]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'fill-blank',
      question: "[[Much|Mucho]] ___ I [[like|gusta]] him, I [[can't|no puedo]] [[trust|confiar]] him.",
      correctAnswer: 'as',
      explanation: '"Much as" is a strong concessive [[opener|apertura]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'fill-blank',
      question: '___ [[though|aunque]] it was, she [[bought|compró]] it.',
      correctAnswer: 'though',
      explanation: '"Adjective + though + subject + verb" is a common C1 structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'fill-blank',
      question: '___ you [[say|digas]], I won\'t [[change|cambiar]] my [[mind|opinión]].',
      correctAnswer: 'Whatever',
      explanation: '"Whatever" introduces a [[total|total]] concession.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'fill-blank',
      question: '___ of his [[lack|falta]] of [[experience|experiencia]], he [[got|consiguió]] the [[job|trabajo]].',
      correctAnswer: 'In spite',
      explanation: '"In spite of" is synonymous with [[despite|a pesar de]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'fill-blank',
      question: 'He is [[tired|cansado]]. ___, (Nevertheless) he [[continued|continuó]] [[working|trabajando]].',
      correctAnswer: 'Nevertheless',
      explanation: 'Formal sentence [[adverb|adverbio]] for contrast.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'fill-blank',
      question: '___ I [[agree|de acuerdo]] with you [[in principle|en principio]], I [[disagree|en desacuerdo]] with the [[method|método]].',
      correctAnswer: 'While',
      explanation: '"While" used for concession at the [[start|inicio]] of a sentence.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'fill-blank',
      question: '___ as he [[tried|intentó]], he [[couldn\'t|no pudo]] [[solve|resolver]] the [[puzzle|rompecabezas]].',
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
  explanation: 'Use these [[connectors|conectores]] to show [[direct|directa]] opposition or a [[different|diferente]] [[perspective|perspectiva]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: 'The [[first|primera]] [[draft|borrador]] was [[bad|malo]]. ___, the [[second|segundo]] was [[excellent|excelente]].',
      options: ['Conversely', 'Instead', 'Still'],
      correctAnswer: 'Conversely',
      explanation: '"Conversely" introduces an [[opposite|opuesta]] [[idea|idea]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'Some [[people|personas]] [[love|aman]] [[traveling|viajar]]. ___, others [[prefer|prefieren]] to [[stay|quedarse]] at [[home|casa]].',
      options: ['By contrast', 'Moreover', 'Furthermore'],
      correctAnswer: 'By contrast',
      explanation: '"By contrast" compares two different [[groups|grupos]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: '"You [[must|debes]] be [[happy|feliz]]." "___, I am [[miserable|miserable]]."',
      options: ['On the contrary', 'In contrast', 'Otherwise'],
      correctAnswer: 'On the contrary',
      explanation: '"On the contrary" [[denies|niega]] a previous [[statement|afirmación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'The [[west|oeste]] is [[wet|húmedo]], ___ the [[east|este]] is [[dry|seco]].',
      options: ['whereas', 'despite', 'nevertheless'],
      correctAnswer: 'whereas',
      explanation: '"Whereas" links two [[balanced|equilibradas]] clauses.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'I didn\'t [[go|ir]] to the [[party|fiesta]]. ___, (Instead) I [[stayed|quedé]] in and [[read|leí]].',
      options: ['Instead', 'Still', 'Yet'],
      correctAnswer: 'Instead',
      explanation: '"Instead" shows an [[alternative|alternativa]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'He is very [[rich|rico]], ___ he is very [[frugal|frugal]].',
      options: ['yet', 'so', 'for'],
      correctAnswer: 'yet',
      explanation: '"Yet" shows an [[unexpected|inesperado]] contrast.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: '___ his brother, he is very [[shy|tímido]].',
      options: ['Unlike', 'Contrary', 'Different'],
      correctAnswer: 'Unlike',
      explanation: '"Unlike" compares two [[nouns|sustantivos]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'The [[prices|precios]] are [[high|altos]]. ___, (Still) [[demand|demanda]] [[remains|permanece]] [[strong|fuerte]].',
      options: ['Still', 'Hence', 'Thus'],
      correctAnswer: 'Still',
      explanation: '"Still" can be used like [[nevertheless|sin embargo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'I am [[tired|cansado]]. ___, (At the same time) I [[can\'t|no puedo]] [[sleep|dormir]].',
      options: ['At the same time', 'Consecutively', 'Subsequently'],
      correctAnswer: 'At the same time',
      explanation: '"At the same time" shows [[simultaneous|simultáneo]] contrast.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'He is [[brilliant|brillante]], ___ [[disorganized|desorganizado]].',
      options: ['but', 'although', 'despite'],
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
  explanation: 'Use specific [[words|palabras]] to [[highlight|resaltar]] that a situation is [[surprising|sorprendente]] or [[contrary|contraria]] to expectations.',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'fill-blank',
      question: 'He didn\'t [[just|solo]] [[win|ganar]]; he ___ [[broke|rompió]] the [[record|récord]].',
      correctAnswer: 'actually',
      explanation: '"Actually" emphasizes a surprising [[fact|hecho]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'fill-blank',
      question: 'The [[film|película]] was [[not|no]] [[good|buena]]. [[Indeed|De hecho]], it was ___.',
      correctAnswer: 'terrible',
      explanation: '"Indeed" adds [[weight|peso]] to a previous [[point|punto]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'fill-blank',
      question: 'She didn\'t [[cry|llorar]]. ___, she [[laughed|rio]].',
      correctAnswer: 'Instead',
      explanation: '"Instead" emphasizes the [[substitution|sustitución]] of actions.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'fill-blank',
      question: '___ if he [[apologizes|se disculpa]], I won\'t [[forgive|perdonar]] him.',
      correctAnswer: 'Even',
      explanation: '"Even if" emphasizes the [[limit|límite]] of a condition.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'fill-blank',
      question: 'He was so [[tired|cansado]] that he ___ [[forgot|olvidó]] his [[name|nombre]].',
      correctAnswer: 'even',
      explanation: '"Even" adds emphasis to an extreme case.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'fill-blank',
      question: 'I was [[surprised|sorprendido]] that he [[came|vino]] ___.',
      correctAnswer: 'at all',
      explanation: '"At all" emphasizes a [[negative|negativa]] or [[question|pregunta]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'fill-blank',
      question: 'It was a [[difficult|difícil]] [[year|año]], but we [[survived|sobrevivimos]] ___.',
      correctAnswer: 'nonetheless',
      explanation: '"Nonetheless" is a formal way to say [[anyway|de todas formas]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'fill-blank',
      question: 'The [[offer|oferta]] was [[good|buena]]. ___, the [[risks|riesgos]] were [[high|altos]].',
      correctAnswer: 'Mind you',
      explanation: '"Mind you" adds a [[counter-point|contrapunto]] or [[warning|advertencia]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'fill-blank',
      question: 'He is a [[great|gran]] [[player|jugador]]. ___, he [[needs|necesita]] more [[discipline|disciplina]].',
      correctAnswer: 'That said',
      explanation: '"That said" introduces a [[balancing|equilibrante]] contrast.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'fill-blank',
      question: 'She is very [[kind|amable]]. ___, she can be very [[strict|estricta]].',
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
  explanation: 'Using [[inversion|inversión]] and [[complex structures|estructuras complejas]] to show [[sophisticated|sofisticada]] concession.',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: '___ as I [[hate|odio]] to [[admit|admitir]] it, you were [[right|razón]].',
      options: ['Much', 'Many', 'Strong'],
      correctAnswer: 'Much',
      explanation: '"Much as" is a fixed concessive structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: "[[Try|Intentar]] ___ he [[might|pudiera]], he [[couldn't|no pudo]] [[open|abrir]] it.",
      options: ['as', 'though', 'while'],
      correctAnswer: 'as',
      explanation: '"Verb + as + subject + modal" for concession.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: '___ that as it [[may|pueda]], we [[must|debemos]] [[continue|continuar]].',
      options: ['Be', 'Is', 'Are'],
      correctAnswer: 'Be',
      explanation: '"Be that as it may" is a formal [[idiom|idiom]] for concession.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: '[[Tired|Cansado]] ___ she [[was|estaba]], she [[finished|terminó]] the [[report|informe]].',
      options: ['though', 'even', 'but'],
      correctAnswer: 'though',
      explanation: 'Adjective + though.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: '___ the [[fact|hecho]] [[that|que]] it was [[late|tarde]], they [[stayed|quedaron]].',
      options: ['Notwithstanding', 'Despite', 'Regardless'],
      correctAnswer: 'Notwithstanding',
      explanation: 'Formal connector used with "the fact that".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: '___ as it [[seems|parece]], I [[actually|realmente]] [[enjoyed|disfruté]] it.',
      options: ['Strange', 'Strangely', 'Stranger'],
      correctAnswer: 'Strange',
      explanation: 'Adjective + as + subject + verb.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: "___ [[hard|duro]] you [[try|intentes]], you [[can't|no puedes]] [[win|ganar]].",
      options: ['However', 'Whatever', 'Wherever'],
      correctAnswer: 'However',
      explanation: '"However + adjective/adverb" for concession.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'The [[weather|tiempo]] was [[bad|malo]]. ___ [[the same|lo mismo]], it was a [[good|buen]] [[trip|viaje]].',
      options: ['All', 'Even', 'Still'],
      correctAnswer: 'All',
      explanation: '"All the same" means [[nevertheless|de todas formas]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: '___ though they [[fought|lucharon]], they [[lost|perdieron]].',
      options: ['Hard', 'Hardly', 'Harder'],
      correctAnswer: 'Hard',
      explanation: 'Adverb + though.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: '___ [[being|ser]] [[rich|rico]], he is [[miserable|miserable]].',
      options: ['Despite', 'Although', 'Even'],
      correctAnswer: 'Despite',
      explanation: '"Despite" is followed by [[-ing|gerundio]].',
      points: 1
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
  explanation: 'Rewrite the [[sentence|oración]] using the [[given|dada]] word.',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'fill-blank',
      question: 'Although it was expensive, he bought it. (ALBEIT) \n He bought it, ___ expensive.',
      correctAnswer: 'albeit',
      explanation: 'Using "albeit" for concise concession.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'fill-blank',
      question: 'Despite the rain, we went out. (NOTWITHSTANDING) \n The rain ___ , we went out.',
      correctAnswer: 'notwithstanding',
      explanation: '"Notwithstanding" can follow the noun.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'fill-blank',
      question: "I like him, but I don't trust him. (MUCH) \n ___ as I like him, I don't trust him.",
      correctAnswer: 'Much',
      explanation: 'Concessive opener.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'fill-blank',
      question: 'Even though he tried hard, he failed. (HARD) \n ___ as he tried, he failed.',
      correctAnswer: 'Hard',
      explanation: 'Adverb + as + subject + verb.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'fill-blank',
      question: "No matter what you say, I won't go. (WHATEVER) \n ___ you say, I won't go.",
      correctAnswer: 'Whatever',
      explanation: '"Whatever" replaces "no matter what".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'fill-blank',
      question: 'The film was bad, but we stayed. (SAME) \n The film was bad; all the ___ , we stayed.',
      correctAnswer: 'same',
      explanation: '"All the same" for contrast.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'fill-blank',
      question: 'Even though it was late, they continued. (THOUGH) \n Late ___ was, they continued.',
      correctAnswer: 'though it',
      explanation: 'Adjective + though + subject + verb.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'fill-blank',
      question: 'He is clever, whereas his sister is funny. (CONTRAST) \n He is clever; by ___ , his sister is funny.',
      correctAnswer: 'contrast',
      explanation: 'Using "by contrast".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'fill-blank',
      question: "I don't agree, even if you insist. (HOWEVER) \n I don't agree, ___ you insist.",
      correctAnswer: 'however much',
      explanation: '"However much" for emphasis.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'fill-blank',
      question: 'Although he was tired, he ran. (SPITE) \n In ___ being tired, he ran.',
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

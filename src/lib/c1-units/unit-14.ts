import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 14;

// ============================================
// BLOCK 1: MULTI-WORD PREPOSITIONS (10 items)
// ============================================
export const C1_U14_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Multi-word Prepositions in Context',
  grammarPoint: 'Prepositions',
  explanation: 'Advanced English uses [[complex|complejas]] [[prepositions|preposiciones]] consisting of [[two|dos]] or [[three|tres]] words (e.g., "in accordance with", "by means of").',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'fill-blank',
      question: 'Everything was done in [[accordance|acuerdo]] ___ the [[new|nuevas]] [[regulations|regulaciones]].',
      correctAnswer: 'with',
      explanation: '"In accordance with" means [[following|siguiendo]] a rule or system.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'fill-blank',
      question: 'He was [[promoted|ascendido]] by [[virtue|virtud]] ___ his [[exceptional|excepcional]] [[performance|desempeño]].',
      correctAnswer: 'of',
      explanation: '"By virtue of" means [[because|debido a]] or [[as a result of|como resultado de]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'fill-blank',
      question: 'The [[event|evento]] was [[cancelled|cancelado]] on [[account|cuenta]] ___ [[heavy|fuerte]] [[snowfall|nevada]].',
      correctAnswer: 'of',
      explanation: '"On account of" is a [[formal|formal]] way to say "because of".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'fill-blank',
      question: 'I am [[writing|escribiendo]] with [[reference|referencia]] ___ your [[recent|reciente]] [[inquiry|consulta]].',
      correctAnswer: 'to',
      explanation: '"With reference to" is used to [[introduce|introducir]] a [[topic|tema]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'fill-blank',
      question: 'In ___ (light) of the [[new|nueva]] [[evidence|evidencia]], the [[case|caso]] was [[reopened|reabierto]].',
      correctAnswer: 'light',
      explanation: '"In light of" means [[considering|considerando]] or [[taking into account|teniendo en cuenta]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'fill-blank',
      question: 'We [[managed|logramos]] to [[finish|terminar]] by [[means|medios]] ___ [[sheer|puro]] [[determination|determinación]].',
      correctAnswer: 'of',
      explanation: '"By means of" [[indicates|indica]] the [[method|método]] used.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'fill-blank',
      question: 'The [[project|proyecto]] is [[ahead|adelante]] of [[schedule|horario]] ___ (regard) to the [[original|original]] [[plan|plan]].',
      correctAnswer: 'with regard',
      explanation: '"With regard to" is a formal [[connector|conector]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'fill-blank',
      question: 'She [[accepted|aceptó]] the [[job|trabajo]] [[subject|sujeto]] ___ [[satisfactory|satisfactorias]] [[references|referencias]].',
      correctAnswer: 'to',
      explanation: '"Subject to" means [[depending|dependiendo]] on something else.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'fill-blank',
      question: 'For the [[sake|bien]] ___ [[clarity|claridad]], let me [[repeat|repetir]] that [[point|punto]].',
      correctAnswer: 'of',
      explanation: '"For the sake of" means for the [[purpose|propósito]] or [[benefit|beneficio]] of.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'fill-blank',
      question: 'They are in [[search|busca]] ___ a [[permanent|permanente]] [[solution|solución]].',
      correctAnswer: 'of',
      explanation: '"In search of" is a [[standard|estándar]] prepositional phrase.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: PREPOSITIONAL PHRASES AS CONNECTORS (10 items)
// ============================================
export const C1_U14_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Prepositional Phrases as Formal Connectors',
  grammarPoint: 'Vocabulary',
  explanation: 'C1 writers use [[prepositional phrases|frases preposicionales]] to [[link|vincular]] [[ideas|ideas]] with [[precision|precisión]] and [[formality|formalidad]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: '___ to [[popular|popular]] [[belief|creencia]], [[sugar|azúcar]] does not cause [[hyperactivity|hiperactividad]].',
      options: ['Contrary', 'In spite', 'Despite'],
      correctAnswer: 'Contrary',
      explanation: '"Contrary to" introduces an [[opposing|opuesta]] [[idea|idea]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'The [[law|ley]] was [[passed|aprobada]] ___ [[strong|fuerte]] [[opposition|oposición]].',
      options: ['notwithstanding', 'with', 'by'],
      correctAnswer: 'notwithstanding',
      explanation: '"Notwithstanding" is a [[formal|formal]] [[synonym|sinónimo]] for "despite".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: '___ [[behalf|nombre]] of the [[company|empresa]], I would like to [[thank|agradecer]] you.',
      options: ['On', 'In', 'At'],
      correctAnswer: 'On',
      explanation: '"On behalf of" means [[representing|representando]] someone.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: '___ the [[exception|excepción]] of the [[CEO|director ejecutivo]], [[everyone|todos]] was [[fired|despedido]].',
      options: ['With', 'By', 'In'],
      correctAnswer: 'With',
      explanation: '"With the exception of" means [[excluding|excluyendo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'He was [[found|encontrado]] [[guilty|culpable]] ___ [[beyond|más allá de]] all [[reasonable|razonable]] [[doubt|duda]].',
      options: ['beyond', 'with', 'past'],
      correctAnswer: 'beyond',
      explanation: '"Beyond all doubt" is a common [[legal|legal]] [[collocation|colocación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'The [[results|resultados]] were ___ [[line|línea]] with our [[expectations|expectativas]].',
      options: ['in', 'on', 'with'],
      correctAnswer: 'in',
      explanation: '"In line with" means [[matching|coincidiendo]] or [[agreeing|acordando]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: '___ [[comparison|comparación]] with last year, [[sales|ventas]] have [[doubled|duplicado]].',
      options: ['In', 'By', 'With'],
      correctAnswer: 'In',
      explanation: '"In comparison with" is the [[standard|estándar]] phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'They [[acted|actuaron]] in [[compliance|cumplimiento]] ___ the [[court|tribunal]] [[order|orden]].',
      options: ['with', 'of', 'to'],
      correctAnswer: 'with',
      explanation: '"In compliance with" means [[obeying|obedeciendo]] a rule.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: '___ [[short|corto]], the project was a [[success|éxito]].',
      options: ['In', 'By', 'At'],
      correctAnswer: 'In',
      explanation: '"In short" is used to [[summarize|resumir]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'The [[train|tren]] was [[delayed|retrasado]] by [[way|vía]] ___ a [[technical|técnico]] [[fault|fallo]].',
      options: ['of', 'to', 'by'],
      correctAnswer: 'of',
      explanation: '"By way of" can mean [[because|debido a]] or [[as|como]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U14_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Key Word Transformation: Prepositional Phrases',
  grammarPoint: 'Mixed Review',
  explanation: 'Rewrite the [[sentence|oración]] using the [[given|dada]] word.',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'fill-blank',
      question: 'Because of the rain, the match was cancelled. (ACCOUNT) \n The match was cancelled ___ the rain.',
      correctAnswer: 'on account of',
      explanation: 'Using a [[formal|formal]] multi-word preposition.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'fill-blank',
      question: 'I represented my colleagues at the meeting. (BEHALF) \n I spoke ___ my colleagues at the meeting.',
      correctAnswer: 'on behalf of',
      explanation: '"On behalf of" means [[representing|representando]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'fill-blank',
      question: 'Considering the circumstances, he did well. (LIGHT) \n ___ the circumstances, he did well.',
      correctAnswer: 'In light of',
      explanation: '"In light of" is used for [[context|contexto]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'fill-blank',
      question: 'Despite the problems, we finished on time. (SPITE) \n ___ the problems, we finished on time.',
      correctAnswer: 'In spite of',
      explanation: 'Standard multi-word [[synonym|sinónimo]] for despite.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'fill-blank',
      question: 'We solved it using a new method. (MEANS) \n We solved it ___ a new method.',
      correctAnswer: 'by means of',
      explanation: '"By means of" [[indicates|indica]] the [[instrument|instrumento]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'fill-blank',
      question: 'The law was passed despite the protests. (NOTWITHSTANDING) \n The law was passed, the ___ .',
      correctAnswer: 'protests notwithstanding',
      explanation: '"Notwithstanding" can follow the [[noun|sustantivo]] it modifies.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'fill-blank',
      question: 'He is very talented as well as being kind. (ADDITION) \n ___ being talented, he is kind.',
      correctAnswer: 'In addition to',
      explanation: 'Using a [[complex|complejo]] [[connector|conector]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'fill-blank',
      question: 'We need to discuss your application. (REGARD) \n I am writing ___ your application.',
      correctAnswer: 'with regard to',
      explanation: 'Formal [[introductory|introductoria]] phrase.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'fill-blank',
      question: 'He got the job because of his experience. (VIRTUE) \n He got the job ___ his experience.',
      correctAnswer: 'by virtue of',
      explanation: '"By virtue of" emphasizes the [[cause|causa]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'fill-blank',
      question: 'They searched for the truth. (SEARCH) \n They were ___ the truth.',
      correctAnswer: 'in search of',
      explanation: 'Noun-based prepositional phrase.',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: PREPOSITIONS + GERUNDS (10 items)
// ============================================
export const C1_U14_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Multi-word Prepositions + -ing',
  grammarPoint: 'Gerunds',
  explanation: 'Many complex prepositions are followed by the [[gerund|gerundio]] (-ing form) when a [[verb|verbo]] is used.',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'In addition to ___ (study), she also [[works|trabaja]] full-time.',
      options: ['studying', 'study', 'to study'],
      correctAnswer: 'studying',
      explanation: 'After "In addition to", use the [[gerund|gerundio]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'He [[succeeded|logró]] by virtue of ___ (be) very [[persistent|persistente]].',
      options: ['being', 'be', 'been'],
      correctAnswer: 'being',
      explanation: 'Prepositions are followed by the -ing form.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'Instead of ___ (complain), why don\'t you [[help|ayudas]]?',
      options: ['complaining', 'complain', 'to complain'],
      correctAnswer: 'complaining',
      explanation: '"Instead of" + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'For the sake of ___ (avoid) [[confusion|confusión]], let\'s [[clarify|aclarar]] this.',
      options: ['avoiding', 'avoid', 'to avoid'],
      correctAnswer: 'avoiding',
      explanation: '"For the sake of" + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'They [[entered|entraron]] without ___ (knock) on the door.',
      options: ['knocking', 'knock', 'to knock'],
      correctAnswer: 'knocking',
      explanation: '"Without" acts as a preposition here.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'She is [[used|acostumbrada]] to ___ (work) [[long|largas]] [[hours|horas]].',
      options: ['working', 'work', 'worked'],
      correctAnswer: 'working',
      explanation: 'In "be used to", "to" is a [[preposition|preposición]], so it takes -ing.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'We are [[looking|buscando]] [[forward|adelante]] to ___ (meet) you.',
      options: ['meeting', 'meet', 'to meet'],
      correctAnswer: 'meeting',
      explanation: '"Look forward to" + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'He was [[prevented|impedido]] from ___ (leave) the [[country|país]].',
      options: ['leaving', 'leave', 'left'],
      correctAnswer: 'leaving',
      explanation: '"From" + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'Apart from ___ (be) a bit [[expensive|caro]], it was [[perfect|perfecto]].',
      options: ['being', 'be', 'to be'],
      correctAnswer: 'being',
      explanation: '"Apart from" + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'On ___ (hear) the news, he [[immediately|inmediatamente]] [[called|llamó]] her.',
      options: ['hearing', 'hear', 'heard'],
      correctAnswer: 'hearing',
      explanation: '"On" meaning "as soon as" + gerund.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: ERROR CORRECTION - PREPOSITIONS (10 items)
// ============================================
export const C1_U14_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Error Correction: Complex Prepositions',
  grammarPoint: 'Mixed Review',
  explanation: 'Identify the [[incorrect|incorrecto]] preposition or [[phrase|frase]] in each [[sentence|oración]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'In accordance to the rules, you must wear a tie.',
      options: ['accordance to', 'accordance with', 'accord with'],
      correctAnswer: 'accordance with',
      explanation: 'The standard phrase is "in accordance with".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'On behalf for my client, I accept the offer.',
      options: ['behalf for', 'behalf of', 'behalves of'],
      correctAnswer: 'behalf of',
      explanation: 'The correct phrase is "on behalf of".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'He left because of the sake of his health.',
      options: ['because of the sake', 'for the sake', 'by sake'],
      correctAnswer: 'for the sake',
      explanation: 'Don\'t combine "because of" and "for the sake of".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'With regards to your email, I have attached the file.',
      options: ['With regards to', 'With regard to', 'Regarding to'],
      correctAnswer: 'With regard to',
      explanation: '"With regard to" (singular) is [[preferred|preferido]] in formal English.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'By virtue with her hard work, she won.',
      options: ['virtue with', 'virtue of', 'virtue for'],
      correctAnswer: 'virtue of',
      explanation: 'The phrase is "by virtue of".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'In light for recent events, we are changing our plan.',
      options: ['light for', 'light of', 'light from'],
      correctAnswer: 'light of',
      explanation: 'The phrase is "in light of".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'Despite of the rain, the match continued.',
      options: ['Despite of', 'Despite', 'In spite'],
      correctAnswer: 'Despite',
      explanation: '"Despite" does not take "of".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'I am not accustomed to drive on the left.',
      options: ['to drive', 'to driving', 'to driving in'],
      correctAnswer: 'to driving',
      explanation: '"Accustomed to" requires a [[gerund|gerundio]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'They succeeded by mean of a lot of hard work.',
      options: ['by mean of', 'by means of', 'by meaning of'],
      correctAnswer: 'by means of',
      explanation: 'The phrase is plural: "by means of".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'Apart of the price, everything was fine.',
      options: ['Apart of', 'Apart from', 'Except from'],
      correctAnswer: 'Apart from',
      explanation: 'The correct phrase is "apart from".',
      points: 1
    }
  ]
};

export const unit14: Lesson = createC1Unit(
  'c1-u14',
  'Complex Prepositional Phrases',
  'Mastering multi-word prepositions and their usage in formal, legal, and academic writing.',
  ['Use multi-word prepositions accurately', 'Identify prepositional phrases as formal connectors', 'Correct errors in prepositional usage'],
  [
    C1_U14_BLOCK1, C1_U14_BLOCK2, C1_U14_BLOCK3, C1_U14_BLOCK4, C1_U14_BLOCK5
  ]
);

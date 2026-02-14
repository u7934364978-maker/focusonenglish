import { Exercise } from '../exercise-types';
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
      type: 'multiple-choice',
      question: 'Everything was done in [[accordance|acuerdo]] ___ the [[new|nuevas]] [[regulations|regulaciones]].',
      options: ['to', 'with', 'for'],
      correctAnswer: 'with',
      explanation: '"In accordance with" means [[following|siguiendo]] a rule or system.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: 'He was [[promoted|ascendido]] by [[virtue|virtud]] ___ his [[exceptional|excepcional]] [[performance|desempeño]].',
      options: ['of', 'from', 'by'],
      correctAnswer: 'of',
      explanation: '"By virtue of" means [[because|debido a]] or [[as a result of|como resultado de]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: 'The [[event|evento]] was [[cancelled|cancelado]] on [[account|cuenta]] ___ [[heavy|fuerte]] [[snowfall|nevada]].',
      options: ['for', 'to', 'of'],
      correctAnswer: 'of',
      explanation: '"On account of" is a [[formal|formal]] way to say "because of".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: 'I am [[writing|escribiendo]] with [[reference|referencia]] ___ your [[recent|reciente]] [[inquiry|consulta]].',
      options: ['for', 'to', 'with'],
      correctAnswer: 'to',
      explanation: '"With reference to" is used to [[introduce|introducir]] a [[topic|tema]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: 'In ___ of the [[new|nueva]] [[evidence|evidencia]], the [[case|caso]] was [[reopened|reabierto]].',
      options: ['view', 'light', 'front'],
      correctAnswer: 'light',
      explanation: '"In light of" means [[considering|considerando]] or [[taking into account|teniendo en cuenta]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: 'We [[managed|logramos]] to [[finish|terminar]] by [[means|medios]] ___ [[sheer|puro]] [[determination|determinación]].',
      options: ['of', 'for', 'by'],
      correctAnswer: 'of',
      explanation: '"By means of" "[[indicates|indica]] the [[method|método]] used.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: 'The [[project|proyecto]] is [[ahead|adelante]] of [[schedule|horario]] ___ to the [[original|original]] [[plan|plan]].',
      options: ['with respect', 'with regard', 'about'],
      correctAnswer: 'with regard',
      explanation: '"With regard to" is a formal [[connector|conector]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: 'She [[accepted|aceptó]] the [[job|trabajo]] [[subject|sujeto]] ___ [[satisfactory|satisfactorias]] [[references|referencias]].',
      options: ['on', 'with', 'to'],
      correctAnswer: 'to',
      explanation: '"Subject to" means [[depending|dependiendo]] on something else.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: 'For the [[sake|bien]] ___ [[clarity|claridad]], let me [[repeat|repetir]] that [[point|punto]].',
      options: ['for', 'to', 'of'],
      correctAnswer: 'of',
      explanation: '"For the sake of" means for the [[purpose|propósito]] or [[benefit|beneficio]] of.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: 'They are in [[search|busca]] ___ a [[permanent|permanente]] [[solution|solución]].',
      options: ['for', 'of', 'about'],
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
      options: ['In spite', 'Despite', 'Contrary'],
      correctAnswer: 'Contrary',
      explanation: '"Contrary to" introduces an [[opposing|opuesta]] [[idea|idea]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'The [[law|ley]] was [[passed|aprobada]] ___ [[strong|fuerte]] [[opposition|oposición]].',
      options: ['with', 'by', 'notwithstanding'],
      correctAnswer: 'notwithstanding',
      explanation: '"Notwithstanding" is a [[formal|formal]] [[synonym|sinónimo]] for "despite".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: '___ [[behalf|nombre]] of the [[company|empresa]], I would like to [[thank|agradecer]] you.',
      options: ['In', 'At', 'On'],
      correctAnswer: 'On',
      explanation: '"On behalf of" means [[representing|representando]] someone.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: '___ the [[exception|excepción]] of the [[CEO|director ejecutivo]], [[everyone|todos]] was [[fired|despedido]].',
      options: ['By', 'In', 'With'],
      correctAnswer: 'With',
      explanation: '"With the exception of" means [[excluding|excluyendo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'He was [[found|encontrado]] [[guilty|culpable]] ___ [[beyond|más allá de]] all [[reasonable|razonable]] [[doubt|duda]].',
      options: ['with', 'past', 'beyond'],
      correctAnswer: 'beyond',
      explanation: '"Beyond all doubt" is a common [[legal|legal]] [[collocation|colocación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'The [[results|resultados]] were ___ [[line|línea]] with our [[expectations|expectativas]].',
      options: ['on', 'with', 'in'],
      correctAnswer: 'in',
      explanation: '"In line with" means [[matching|coincidiendo]] or [[agreeing|acordando]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: '___ [[comparison|comparación]] with last year, "[[sales|ventas]] have [[doubled|duplicado]].',
      options: ['By', 'With', 'In'],
      correctAnswer: 'In',
      explanation: '"In comparison with" is the [[standard|estándar]] phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'They [[acted|actuaron]] in [[compliance|cumplimiento]] ___ the [[court|tribunal]] [[order|orden]].',
      options: ['of', 'to', 'with'],
      correctAnswer: 'with',
      explanation: '"In compliance with" means [[obeying|obedeciendo]] a rule.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: '___ [[short|corto]], the project was a [[success|éxito]].',
      options: ['By', 'At', 'In'],
      correctAnswer: 'In',
      explanation: '"In short" is used to [[summarize|resumir]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'The [[train|tren]] was [[delayed|retrasado]] by [[way|vía]] ___ a [[technical|técnico]] [[fault|fallo]].',
      options: ['to', 'by', 'of'],
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
      type: 'multiple-choice',
      question: 'Because of the rain, the match was cancelled. (ACCOUNT) \n The match was cancelled ___ the rain.',
      options: ['on account of', 'by account of', 'for account of'],
      correctAnswer: 'on account of',
      explanation: 'Using a [[formal|formal]] multi-word preposition.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: 'I represented my colleagues at the meeting. (BEHALF) \n I spoke ___ my colleagues at the meeting.',
      options: ['in behalf of', 'on behalf of', 'at behalf of'],
      correctAnswer: 'on behalf of',
      explanation: '"On behalf of" means [[representing|representando]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: 'Considering the circumstances, he did well. (LIGHT) \n ___ the circumstances, he did well.',
      options: ['In light of', 'In view of', 'With light to'],
      correctAnswer: 'In light of',
      explanation: '"In light of" is used for [[context|contexto]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: 'Despite the problems, we finished on time. (SPITE) \n ___ the problems, we finished on time.',
      options: ['With spite of', 'In spite of', 'In spite for'],
      correctAnswer: 'In spite of',
      explanation: 'Standard multi-word [[synonym|sinónimo]] for despite.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: 'We solved it using a new method. (MEANS) \n We solved it ___ a new method.',
      options: ['by means of', 'with means of', 'through means for'],
      correctAnswer: 'by means of',
      explanation: '"By means of" "[[indicates|indica]] the [[instrument|instrumento]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'The law was passed despite the protests. (NOTWITHSTANDING) \n The law was passed, the ___ .',
      options: ['protests notwithstanding', 'notwithstanding protests', 'despite notwithstanding'],
      correctAnswer: 'protests notwithstanding',
      explanation: '"Notwithstanding" can follow the [[noun|sustantivo]] it modifies.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: 'He is very talented as well as being kind. (ADDITION) \n ___ being talented, he is kind.',
      options: ['With addition of', 'In addition to', 'In add for'],
      correctAnswer: 'In addition to',
      explanation: 'Using a [[complex|complejo]] [[connector|conector]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: 'We need to discuss your application. (REGARD) \n I am writing ___ your application.',
      options: ['with regard to', 'with regards of', 'about regard for'],
      correctAnswer: 'with regard to',
      explanation: 'Formal [[introductory|introductoria]] phrase.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'He got the job because of his experience. (VIRTUE) \n He got the job ___ his experience.',
      options: ['for virtue of', 'by virtue of', 'with virtue to'],
      correctAnswer: 'by virtue of',
      explanation: '"By virtue of" emphasizes the [[cause|causa]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: 'They searched for the truth. (SEARCH) \n They were ___ the truth.',
      options: ['in search of', 'on search of', 'at search for'],
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
      question: 'In addition to ___, she also [[works|trabaja]] full-time.',
      options: ['studying', 'study', 'to study'],
      correctAnswer: 'studying',
      explanation: 'After "In addition to", use the [[gerund|gerundio]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'He [[succeeded|logró]] by virtue of ___ very [[persistent|persistente]].',
      options: ['being', 'be', 'been'],
      correctAnswer: 'being',
      explanation: 'Prepositions are followed by the -ing form.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'Instead of ___, why don\'t you [[help|ayudas]]?',
      options: ['complain', 'complaining', 'to complain'],
      correctAnswer: 'complaining',
      explanation: '"Instead of" + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'For the sake of ___ [[confusion|confusión]], let\'s [[clarify|aclarar]] this.',
      options: ['avoid', 'avoiding', 'to avoid'],
      correctAnswer: 'avoiding',
      explanation: '"For the sake of" + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'They [[entered|entraron]] without ___ on the door.',
      options: ['knocking', 'knock', 'to knock'],
      correctAnswer: 'knocking',
      explanation: '"Without" acts as a preposition here.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'She is [[used|acostumbrada]] to ___ [[long|largas]] [[hours|horas]].',
      options: ['work', 'working', 'worked'],
      correctAnswer: 'working',
      explanation: 'In "be used to", "to" is a [[preposition|preposición]], so it takes -ing.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'We are [[looking|buscando]] [[forward|adelante]] to ___ you.',
      options: ['meeting', 'meet', 'to meet'],
      correctAnswer: 'meeting',
      explanation: '"Look forward to" + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'He was [[prevented|impedido]] from ___ the [[country|país]].',
      options: ['leave', 'leaving', 'left'],
      correctAnswer: 'leaving',
      explanation: '"From" + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'Apart from ___ a bit [[expensive|caro]], it was [[perfect|perfecto]].',
      options: ['be', 'been', 'being'],
      correctAnswer: 'being',
      explanation: '"Apart from" + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'He [[risked|arriesgó]] ___ his [[job|trabajo]] for her.',
      options: ['lose', 'to lose', 'losing'],
      correctAnswer: 'losing',
      explanation: '"Risk" is followed by -ing.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: UNIT 14 REVIEW (10 items)
// ============================================
export const C1_U14_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Unit 14 Review',
  grammarPoint: 'Mixed Prepositions',
  explanation: 'Final check of Unit 14 [[concepts|conceptos]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'We [[acted|actuaron]] in [[accordance|acuerdo]] ___ the law.',
      options: ['to', 'by', 'with'],
      correctAnswer: 'with',
      explanation: 'Standard multi-word preposition.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'He [[won|ganó]] by [[virtue|virtud]] ___ his [[hard|duro]] [[work|trabajo]].',
      options: ['for', 'by', 'of'],
      correctAnswer: 'of',
      explanation: 'Cause/reason phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: '___ behalf of the team, well done!',
      options: ['In', 'At', 'On'],
      correctAnswer: 'On',
      explanation: 'Representation phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: '___ light of the news, we must wait.',
      options: ['By', 'At', 'In'],
      correctAnswer: 'In',
      explanation: 'Context phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'Everything is in [[line|línea]] ___ the budget.',
      options: ['to', 'for', 'with'],
      correctAnswer: 'with',
      explanation: 'Agreement phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'In addition to ___, he is also a pilot.',
      options: ['teach', 'to teach', 'teaching'],
      correctAnswer: 'teaching',
      explanation: 'Preposition + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'We [[finished|terminamos]] in [[spite|pesar]] ___ the rain.',
      options: ['for', 'to', 'of'],
      correctAnswer: 'of',
      explanation: 'Contrast phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'He [[failed|falló]] on [[account|cuenta]] ___ laziness.',
      options: ['for', 'to', 'of'],
      correctAnswer: 'of',
      explanation: 'Reason phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'I am [[writing|escribiendo]] with [[regard|respecto]] ___ your [[letter|carta]].',
      options: ['for', 'with', 'to'],
      correctAnswer: 'to',
      explanation: 'Introductory phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'Only by means of ___ can we succeed.',
      options: ['cooperate', 'to cooperate', 'cooperating'],
      correctAnswer: 'cooperating',
      explanation: 'Method phrase + gerund.',
      points: 1
    }
  ]
};

export const unit14 = createC1Unit(
  'c1-u14',
  'Complex Prepositions & Phrases',
  'Master the use of multi-word prepositions and prepositional phrases for more precise and formal communication.',
  ['Apply multi-word prepositions like "in accordance with"', 'Use prepositional phrases as connectors for formal writing', 'Correctly follow prepositions with gerunds'],
  [
    C1_U14_BLOCK1, C1_U14_BLOCK2, C1_U14_BLOCK3, C1_U14_BLOCK4, C1_U14_BLOCK5
  ]
);

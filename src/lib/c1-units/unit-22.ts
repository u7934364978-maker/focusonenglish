import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 22;

// ============================================
// BLOCK 1: ADVANCED REPORTING VERBS (10 items)
// ============================================
export const C1_U22_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Reporting Verbs: Precision in Tone',
  grammarPoint: 'Reported Speech',
  explanation: 'Advanced English goes beyond "say" and "tell", using [[reporting verbs|verbos de reporte]] like "urge", "concede", and "allege" to convey [[attitude|actitud]] and [[tone|tono]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'The [[lawyer|abogado]] ___ (alleged) that the [[evidence|evidencia]] was [[fake|falsa]].',
      options: ['alleged', 'told', 'urged'],
      correctAnswer: 'alleged',
      explanation: '"Allege" means to [[claim|afirmar]] something without [[proof|prueba]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: 'She ___ (conceded) that the [[other|otro]] [[team|equipo]] [[played|jugó]] better.',
      options: ['conceded', 'insisted', 'denied'],
      correctAnswer: 'conceded',
      explanation: '"Concede" means to [[admit|admitir]] that something is [[true|verdad]], often [[unwillingly|a regañadientes]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: 'He ___ (urged) the [[audience|público]] to [[take|tomar]] [[action|acción]].',
      options: ['urged', 'said', 'informed'],
      correctAnswer: 'urged',
      explanation: '"Urge" means to [[strongly|fuertemente]] [[advise|aconsejar]] or [[encourage|animar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: 'The [[official|oficial]] ___ (refuted) the [[claims|afirmaciones]] made by the [[press|prensa]].',
      options: ['refuted', 'requested', 'reminded'],
      correctAnswer: 'refuted',
      explanation: '"Refute" means to [[prove|probar]] that something is [[wrong|incorrecto]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: 'He ___ (boasted) about his [[recent|reciente]] [[success|éxito]].',
      options: ['boasted', 'complained', 'confessed'],
      correctAnswer: 'boasted',
      explanation: '"Boast" means to [[brag|alardear]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: 'She ___ (implored) him to [[stay|quedarse]].',
      options: ['implored', 'demanded', 'ordered'],
      correctAnswer: 'implored',
      explanation: '"Implore" is a very [[strong|fuerte]] and [[emotional|emocional]] way to ask.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: 'The [[report|informe]] ___ (highlights) the [[need|necesidad]] for [[change|cambio]].',
      options: ['highlights', 'speaks', 'mentions'],
      correctAnswer: 'highlights',
      explanation: '"Highlight" means to [[emphasize|enfatizar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: 'He ___ (denied) [[having|haber]] any [[knowledge|conocimiento]] of the [[affair|asunto]].',
      options: ['denied', 'refused', 'rejected'],
      correctAnswer: 'denied',
      explanation: '"Deny" is used for [[facts|hechos]], usually followed by [[-ing|gerundio]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: 'She ___ (refused) to [[answer|responder]] the [[question|pregunta]].',
      options: ['refused', 'denied', 'conceded'],
      correctAnswer: 'refused',
      explanation: '"Refuse" is used for [[actions|acciones]], followed by an [[infinitive|infinitivo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: 'He ___ (threatened) to [[call|llamar]] the [[police|policía]].',
      options: ['threatened', 'warned', 'promised'],
      correctAnswer: 'threatened',
      explanation: '"Threaten" means to say you will [[harm|dañar]] or do something [[unpleasant|desagradable]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: STRUCTURES AFTER REPORTING VERBS (10 items)
// ============================================
export const C1_U22_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Grammar Patterns for Reporting Verbs',
  grammarPoint: 'Reported Speech',
  explanation: 'Different [[reporting verbs|verbos de reporte]] require specific [[structures|estructuras]] (e.g., Verb + -ing, Verb + to + infinitive, Verb + that).',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'fill-blank',
      question: 'He [[suggested|sugirió]] ___ (go) to the [[cinema|cine]].',
      correctAnswer: 'going',
      explanation: '"Suggest" is followed by the [[gerund|gerundio]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'fill-blank',
      question: 'They [[offered|ofrecieron]] ___ (help) us with the [[bags|maletas]].',
      correctAnswer: 'to help',
      explanation: '"Offer" is followed by the [[infinitive|infinitivo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'fill-blank',
      question: 'She [[denied|negó]] ___ (break) the [[window|ventana]].',
      correctAnswer: 'breaking',
      explanation: '"Deny" + gerund.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'fill-blank',
      question: 'The [[doctor|médico]] [[advised|aconsejó]] me ___ (take) a [[rest|descanso]].',
      correctAnswer: 'to take',
      explanation: '"Advise + object + infinitive".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'fill-blank',
      question: 'He [[blamed|culpó]] her ___ (lose) the [[keys|llaves]].',
      correctAnswer: 'for losing',
      explanation: '"Blame someone for doing something".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'fill-blank',
      question: 'She [[congratulated|felicitó]] him ___ (pass) the [[exam|examen]].',
      correctAnswer: 'on passing',
      explanation: '"Congratulate someone on doing something".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'fill-blank',
      question: 'They [[insisted|insistieron]] ___ (pay) for [[dinner|cena]].',
      correctAnswer: 'on paying',
      explanation: '"Insist on doing something".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'fill-blank',
      question: 'He [[reminded|recordó]] me ___ (lock) the [[door|puerta]].',
      correctAnswer: 'to lock',
      explanation: '"Remind someone to do something".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'fill-blank',
      question: 'She [[apologized|se disculpó]] ___ (be) late.',
      correctAnswer: 'for being',
      explanation: '"Apologize for doing something".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'fill-blank',
      question: 'The [[police|policía]] [[accused|acusó]] him ___ (steal) the [[car|coche]].',
      correctAnswer: 'of stealing',
      explanation: '"Accuse someone of doing something".',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: REPORTING QUESTIONS & ORDERS (10 items)
// ============================================
export const C1_U22_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Reporting Questions & Commands',
  grammarPoint: 'Reported Speech',
  explanation: 'When reporting [[questions|preguntas]], use [[statement|declarativa]] [[word order|orden de palabras]]. Commands are reported with "to + infinitive".',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'fill-blank',
      question: '"Where is the [[bank|banco]]?" \n He asked me where the [[bank|banco]] ___ .',
      correctAnswer: 'was',
      explanation: 'No inversion in reported questions.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'fill-blank',
      question: '"Do you [[like|gusta]] [[coffee|café]]?" \n She asked me ___ (if) I [[liked|gustaba]] [[coffee|café]].',
      correctAnswer: 'if',
      explanation: 'Use "if" or "whether" for yes/no questions.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'fill-blank',
      question: '"[[Sit|Siéntate]] down!" \n He ordered me ___ (sit) down.',
      correctAnswer: 'to sit',
      explanation: 'Commands use "to-infinitive".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'fill-blank',
      question: '"Don\'t [[touch|toques]] that!" \n She told me ___ (not/touch) that.',
      correctAnswer: 'not to touch',
      explanation: 'Negative commands use "not to".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'fill-blank',
      question: '"How [[long|tiempo]] have you [[been|estado]] [[here|aquí]]?" \n He asked me how long I ___ there.',
      correctAnswer: 'had been',
      explanation: 'Backshift from Present Perfect to Past Perfect.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'fill-blank',
      question: '"Will you [[help|ayudar]] me?" \n She asked me if I ___ help her.',
      correctAnswer: 'would',
      explanation: '"Will" shifts to "would".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'fill-blank',
      question: '"What time does the [[train|tren]] [[leave|sale]]?" \n I asked what time the [[train|tren]] ___ .',
      correctAnswer: 'left',
      explanation: 'Past simple for a present question.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'fill-blank',
      question: '"[[Please|Por favor]] [[wait|espera]]." \n She asked me ___ (wait).',
      correctAnswer: 'to wait',
      explanation: 'Polite requests are reported like commands.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'fill-blank',
      question: '"Have you [[seen|visto]] my [[keys|llaves]]?" \n He asked if I ___ seen his [[keys|llaves]].',
      correctAnswer: 'had',
      explanation: 'Yes/no question backshift.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'fill-blank',
      question: '"Can you [[swim|nadar]]?" \n She asked whether I ___ swim.',
      correctAnswer: 'could',
      explanation: '"Can" shifts to "could".',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: IMPERSONAL REPORTING STRUCTURES (10 items)
// ============================================
export const C1_U22_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Impersonal & Passive Reporting',
  grammarPoint: 'Reported Speech',
  explanation: 'Formal English uses [[impersonal|impersonales]] structures like "It is said that..." or "He is thought to be..." to report general [[beliefs|creencias]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'fill-blank',
      question: 'It is ___ (say) that the [[castle|castillo]] is [[haunted|embrujado]].',
      correctAnswer: 'said',
      explanation: '"It is said that" is a formal impersonal structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'fill-blank',
      question: 'He is [[thought|pensado]] ___ (be) the richest [[man|hombre]] in the world.',
      correctAnswer: 'to be',
      explanation: '"Subject + be thought + to-infinitive".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'fill-blank',
      question: 'The [[thief|ladrón]] is [[believed|creído]] ___ (escape) across the [[border|frontera]].',
      correctAnswer: 'to have escaped',
      explanation: 'Use "to have + past participle" for a past [[action|acción]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'fill-blank',
      question: 'It is ___ (estimate) that [[thousands|miles]] were [[affected|afectados]].',
      correctAnswer: 'estimated',
      explanation: 'Formal estimation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'fill-blank',
      question: 'They are ___ (report) to be [[considering|considerando]] a [[merger|fusión]].',
      correctAnswer: 'reported',
      explanation: '"Be reported + to-infinitive".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'fill-blank',
      question: 'It is widely ___ (believe) that [[education|educación]] is [[key|clave]].',
      correctAnswer: 'believed',
      explanation: 'General belief.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'fill-blank',
      question: 'The [[painting|cuadro]] is ___ (allege) to be a [[forgery|falsificación]].',
      correctAnswer: 'alleged',
      explanation: 'Formal allegation about a state.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'fill-blank',
      question: 'He is [[understood|entendido]] ___ (resign) [[next|próxima]] [[week|semana]].',
      correctAnswer: 'to be resigning',
      explanation: 'Reporting a future/continuous action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'fill-blank',
      question: 'It was ___ (announce) that the [[war|guerra]] had [[ended|terminado]].',
      correctAnswer: 'announced',
      explanation: 'Past announcement.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'fill-blank',
      question: 'The [[new|nuevo]] [[law|ley]] is [[expected|esperada]] ___ (pass) [[soon|pronto]].',
      correctAnswer: 'to pass',
      explanation: 'Reporting expectations.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U22_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Key Word Transformation: Reporting',
  grammarPoint: 'Mixed Review',
  explanation: 'Rewrite the [[sentence|oración]] using the [[given|dada]] word.',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'fill-blank',
      question: '"I didn\'t do it," he said. (DENIED) \n He ___ it.',
      correctAnswer: 'denied doing',
      explanation: 'Using a reporting verb with the correct structure.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'fill-blank',
      question: '"You should go," she said to me. (ADVISED) \n She ___ go.',
      correctAnswer: 'advised me to',
      explanation: 'Advise + object + to.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'fill-blank',
      question: 'People believe he is living in London. (THOUGHT) \n He ___ living in London.',
      correctAnswer: 'is thought to be',
      explanation: 'Impersonal reporting structure.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'fill-blank',
      question: '"I\'m sorry I\'m late," he said. (APOLOGIZED) \n He ___ late.',
      correctAnswer: 'apologized for being',
      explanation: 'Apologize + for + -ing.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'fill-blank',
      question: '"Don\'t forget the meeting," she said. (REMINDED) \n She ___ the meeting.',
      correctAnswer: 'reminded me of',
      explanation: 'Remind someone of something.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'fill-blank',
      question: '"I will kill you," he said. (THREATENED) \n He ___ me.',
      correctAnswer: 'threatened to kill',
      explanation: 'Threaten + to.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'fill-blank',
      question: '"Why are you here?" she asked. (WANTED) \n She ___ why I was there.',
      correctAnswer: 'wanted to know',
      explanation: '"Wanted to know" is a formal alternative to "asked".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'fill-blank',
      question: 'They say the company is in trouble. (SAID) \n It ___ the company is in trouble.',
      correctAnswer: 'is said that',
      explanation: 'Impersonal structure.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'fill-blank',
      question: '"Let\'s eat," he said. (SUGGESTED) \n He ___ .',
      correctAnswer: 'suggested eating',
      explanation: 'Suggest + -ing.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'fill-blank',
      question: '"You stole my phone!" she said. (ACCUSED) \n She ___ her phone.',
      correctAnswer: 'accused me of stealing',
      explanation: 'Accuse + object + of + -ing.',
      points: 2
    }
  ]
};

export const unit22: Lesson = createC1Unit(
  'c1-u22',
  'Advanced Reported Speech & Reporting Verbs',
  'Mastering the nuances of reporting verbs, complex structures, and formal impersonal reporting.',
  ['Use precise reporting verbs like urge, concede, and allege', 'Apply correct grammar patterns after reporting verbs', 'Use impersonal and passive reporting structures'],
  [
    C1_U22_BLOCK1, C1_U22_BLOCK2, C1_U22_BLOCK3, C1_U22_BLOCK4, C1_U22_BLOCK5
  ]
);

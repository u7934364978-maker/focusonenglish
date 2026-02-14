import { Exercise } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 7;

// ============================================
// BLOCK 1: PASSIVE REPORTING STRUCTURES (10 items)
// ============================================
export const C1_U7_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Passive Reporting Structures',
  grammarPoint: 'Passive Reporting',
  explanation: 'Advanced reporting involves using "It is thought..." or "He is said to...". These "[[structures|estructuras]] are essential for "[[formal|formal]] or "[[journalistic|periodístico]] English.',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'It is widely "[[believed|creído]] ___ the "[[economy|economía]] will "[[rebound|rebotar]] next "[[quarter|trimestre]].',
      options: ['to', 'that', 'for'],
      correctAnswer: 'that',
      explanation: 'Use "It is + past participle + that" for "[[impersonal|impersonal]] reports.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: 'The "[[CEO|director ejecutivo]] is "[[understood|entendido]] ___ "[[resigned|renunciado]] over the "[[weekend|fin de semana]].',
      options: ['to be', 'that', 'to have'],
      correctAnswer: 'to have',
      explanation: 'Use "to have + past participle" to report a "[[past|pasado]] action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: 'The "[[missing|desaparecido]] "[[artifacts|artefactos]] are "[[thought|pensados]] ___ "[[stolen|robados]] by "[[professionals|profesionales]].',
      options: ['to be', 'having been', 'to have been'],
      correctAnswer: 'to have been',
      explanation: 'Passive reporting with a "[[passive|pasiva]] infinitive for past "[[actions|acciones]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: 'It was "[[claimed|afirmado]] ___ the "[[evidence|evidencia]] had been "[[tampered|manipulada]] with.',
      options: ['that', 'to', 'it'],
      correctAnswer: 'that',
      explanation: 'Reporting a past "[[claim|afirmación]] about a "[[prior|previa]] situation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: 'He is "[[alleged|presunto]] ___ "[[masterminded|planeado]] the entire "[[operation|operación]].',
      options: ['that', 'having', 'to have'],
      correctAnswer: 'to have',
      explanation: '"Alleged to have done" is a common "[[legal|legal]] reporting structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: 'The "[[new|nuevo]] "[[law|ley]] is "[[expected|esperada]] ___ "[[passed|aprobada]] by "[[parliament|parlamento]] next week.',
      options: ['that', 'to', 'to be'],
      correctAnswer: 'to be',
      explanation: 'Reporting a future "[[expectation|expectativa]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: 'It is "[[rumored|rumoreado]] ___ the "[[couple|pareja]] is "[[planning|planeando]] a "[[secret|secreta]] "[[wedding|boda]].',
      options: ['to', 'for', 'that'],
      correctAnswer: 'that',
      explanation: 'Reporting current "[[rumors|rumores]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: 'The "[[ancient|antiguo]] "[[city|ciudad]] is "[[said|dicha]] ___ "[[destroyed|destruida]] by a "[[volcanic|volcánica]] "[[eruption|erupción]].',
      options: ['to be', 'that it was', 'to have been'],
      correctAnswer: 'to have been',
      explanation: 'Reporting a historical "[[event|suceso]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: 'It is "[[estimated|estimado]] ___ over a "[[million|millón]] "[[people|personas]] "[[attended|asistieron]] the "[[rally|mitin]].',
      options: ['to', 'it', 'that'],
      correctAnswer: 'that',
      explanation: 'Reporting "[[numerical|numéricas]] "[[estimates|estimaciones]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: 'The "[[suspect|sospechoso]] is "[[believed|creído]] ___ "[[hiding|escondiéndose]] in the "[[mountains|montañas]].',
      options: ['that he is', 'having', 'to be'],
      correctAnswer: 'to be',
      explanation: 'Reporting a "[[current|actual]] ongoing state.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: MODALS OF SPECULATION (10 items)
// ============================================
export const C1_U7_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Modals of Speculation & Deduction',
  grammarPoint: 'Modals',
  explanation: 'Use "[[must|debe]]", "[[might|podría]]", "[[could|podría]], and "[[can\'t|no puede]] to express different "[[levels|niveles]] of "[[certainty|certeza]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: 'He ___ "[[forgotten|olvidado]] about the "[[meeting|reunión]]; he\'s usually so "[[punctual|puntual]].',
      options: ['can\'t have', 'should have', 'must have'],
      correctAnswer: 'must have',
      explanation: 'Expressing a "[[strong|fuerte]] logical "[[deduction|deducción]] in the past.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'They ___ "[[reached|llegado]] the "[[summit|cumbre]] yet; they only "[[started|empezaron]] an hour ago.',
      options: ['must have', 'might have', 'can\'t have'],
      correctAnswer: 'can\'t have',
      explanation: 'Expressing "[[impossibility|imposibilidad]] based on evidence.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'I\'m not sure where he is. He ___ ___ "[[working|trabajando]] late at the "[[office|oficina]].',
      options: ['must be', 'might be', 'can\'t be'],
      correctAnswer: 'might be',
      explanation: 'Expressing a "[[possibility|posibilidad]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'You ___ "[[been|sido]] "[[thrilled|emocionado]] when you "[[won|ganaste]] the "[[award|premio]]!',
      options: ['could have', 'might have', 'must have'],
      correctAnswer: 'must have',
      explanation: 'A very "[[likely|probable]] past "[[feeling|sentimiento]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'The "[[document|documento]] ___ "[[been|sido]] "[[leaked|filtrado]] by someone in the "[[department|departamento]].',
      options: ['can\'t have', 'should have', 'could have'],
      correctAnswer: 'could have',
      explanation: 'Expressing a past "[[theoretical|teórica]] possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'He ___ "[[known|sabido]] about the "[[merger|fusión]]; he doesn\'t "[[work|trabaja]] in that "[[sector|sector]].',
      options: ['must have', 'might have', 'can\'t have'],
      correctAnswer: 'can\'t have',
      explanation: 'Logical "[[denial|negación]] of past knowledge.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: 'The "[[keys|llaves]] ___ "[[be|estar]] in the "[[drawer|cajón]]; I\'ve "[[searched|buscado]] it "[[twice|dos veces]].',
      options: ['must', 'might', 'can\'t'],
      correctAnswer: 'can\'t',
      explanation: 'Expressing "[[certainty|certeza]] that something is NOT true.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'They ___ "[[having|teniendo]] a "[[party|fiesta]]; the "[[music|música]] is "[[incredibly|increíblemente]] "[[loud|fuerte]].',
      options: ['might be', 'can\'t be', 'must be'],
      correctAnswer: 'must be',
      explanation: 'Logical deduction about a "[[current|actual]] action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'If I hadn\'t "[[checked|revisado]], I ___ "[[made|hecho]] a "[[huge|enorme]] "[[mistake|error]].',
      options: ['must have', 'can\'t have', 'might have'],
      correctAnswer: 'might have',
      explanation: 'Speculating about a "[[counterfactual|contrafáctico]] past.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'She ___ "[[gone|ido]] to the "[[gym|gimnasio]]; her "[[bag|bolsa]] is still "[[here|aquí]].',
      options: ['must have', 'might have', 'can\'t have'],
      correctAnswer: 'can\'t have',
      explanation: 'Deduction based on "[[physical|física]] evidence.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U7_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Key Word Transformation: Speculation & Reporting',
  grammarPoint: 'Mixed Structures',
  explanation: 'Rewrite the "[[sentence|oración]] using the "[[given|dada]] word.',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: 'People believe that the robber has left the country. (THOUGHT) \n The robber ___ the country.',
      options: ['is thought leaving', 'was thought to leave', 'is thought to have left'],
      correctAnswer: 'is thought to have left',
      explanation: 'Transforming to a "[[personal|personal]] passive reporting structure.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: 'I\'m sure he didn\'t see the message. (CAN\'T) \n He ___ the message.',
      options: ['can\'t see', 'mustn\'t have seen', 'can\'t have seen'],
      correctAnswer: 'can\'t have seen',
      explanation: 'Using "[[modal|modal]] for past negative certainty.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: 'It is expected that the prices will rise soon. (TO) \n Prices ___ soon.',
      options: ['are expected rising', 'expect to rise', 'are expected to rise'],
      correctAnswer: 'are expected to rise',
      explanation: 'Passive reporting with "[[future|futuro]] reference.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: 'Perhaps she forgot about the appointment. (MIGHT) \n She ___ the appointment.',
      options: ['might forget about', 'must have forgotten about', 'might have forgotten about'],
      correctAnswer: 'might have forgotten about',
      explanation: 'Speculating about a "[[past|pasada]] possibility.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: 'The press reports that the minister is lying. (REPORTED) \n The minister ___ lying.',
      options: ['is reported being', 'reports to be', 'is reported to be'],
      correctAnswer: 'is reported to be',
      explanation: 'Reporting a "[[current|actual]] action.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'I\'m certain they are at home; the lights are on. (MUST) \n They ___ at home.',
      options: ['must have been', 'might be', 'must be'],
      correctAnswer: 'must be',
      explanation: 'Current certainty using "[[must|debe]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: 'Experts estimate the painting is worth millions. (ESTIMATED) \n The painting ___ worth millions.',
      options: ['is estimated being', 'estimates to be', 'is estimated to be'],
      correctAnswer: 'is estimated to be',
      explanation: 'Reporting an "[[estimate|estimación]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: 'It\'s possible that the plane was delayed by fog. (COULD) \n The plane ___ delayed by fog.',
      options: ['could be', 'must have been', 'could have been'],
      correctAnswer: 'could have been',
      explanation: 'Past possibility in the "[[passive|pasiva]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'The police allege that he stole the jewels. (ALLEGED) \n He ___ the jewels.',
      options: ['is alleged stealing', 'alleges to have stolen', 'is alleged to have stolen'],
      correctAnswer: 'is alleged to have stolen',
      explanation: 'Formal "[[legal|legal]] reporting.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: 'I am sure that wasn\'t a ghost! (CAN\'T) \n That ___ a ghost!',
      options: ['can\'t be', 'mustn\'t have been', 'can\'t have been'],
      correctAnswer: 'can\'t have been',
      explanation: 'Past logical "[[impossibility|imposibilidad]].',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: JOURNALISTIC VOCABULARY (10 items)
// ============================================
export const C1_U7_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Journalistic & Formal Reporting Verbs',
  grammarPoint: 'Vocabulary',
  explanation: 'C1 level requires using "[[precise|precisos]] and "[[formal|formales]] verbs instead of simple ones like "say" or "tell".',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'The "[[spokesperson|portavoz]] ___ that no "[[decisions|decisiones]] had been reached.',
      options: ['told', 'said', 'maintained'],
      correctAnswer: 'maintained',
      explanation: '"Maintained" implies "[[continuing|continuar]] to "[[assert|afirmar]] something.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'The "[[article|artículo]] ___ the "[[challenges|desafíos]] "[[facing|enfrentando]] the "[[region|región]].',
      options: ['speaks', 'outlines', 'writes'],
      correctAnswer: 'outlines',
      explanation: '"Outlines" means to give a "[[summary|resumen]] of main points.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'The "[[prime minister|primer ministro]] ___ any "[[knowledge|conocimiento]] of the "[[scandal|escándalo]].',
      options: ['denied', 'refuted', 'ignored'],
      correctAnswer: 'denied',
      explanation: '"Denied" is the "[[standard|estándar]] verb for "[[rejecting|rechazar]] an "[[accusation|acusación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'The "[[protest|protesta]] ___ a "[[heated|acalorado]] "[[debate|debate]] on "[[civil|civiles]] "[[rights|derechos]].',
      options: ['made', 'sparked', 'started'],
      correctAnswer: 'sparked',
      explanation: '"Sparked" is common for "[[initiating|iniciar]] a strong "[[reaction|reacción]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'Researchers ___ a "[[significant|significativo]] "[[breakthrough|avance]].',
      options: ['told', 'talked', 'claimed'],
      correctAnswer: 'claimed',
      explanation: 'Used when someone "[[states|afirma]] something is true "[[without|sin]] "[[absolute|absoluta]] proof yet.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'The "[[document|documento]] ___ the "[[need|necesidad]] for "[[radical|radicales]] "[[reforms|reformas]].',
      options: ['shows', 'highlights', 'points'],
      correctAnswer: 'highlights',
      explanation: '"Highlights" means to "[[emphasize|enfatizar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'Critics have ___ the "[[government\'s|del gobierno]] "[[inertia|inercia]].',
      options: ['slammed', 'pushed', 'hit'],
      correctAnswer: 'slammed',
      explanation: '"Slammed" is a common "[[journalistic|periodístico]] verb for "[[criticizing|criticar]] severely.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'The "[[report|informe]] ___ the "[[importance|importancia]] of "[[early|temprana]] "[[intervention|intervención]].',
      options: ['underscores', 'marks', 'says'],
      correctAnswer: 'underscores',
      explanation: '"Underscores" is a formal synonym for "[[emphasize|enfatizar]] or "[[stress|estresar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'The "[[company|empresa]] has ___ "[[rumors|rumores]] of a "[[hostile|hostil]] "[[takeover|adquisición]].',
      options: ['dismissed', 'deleted', 'left'],
      correctAnswer: 'dismissed',
      explanation: '"Dismissed" means to "[[treat|tratar]] something as "[[unworthy|indigno]] of "[[consideration|consideración]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'The "[[witness|testigo]] ___ having "[[seen|visto]] the "[[suspect|sospechoso]].',
      options: ['recalled', 'reminded', 'thought'],
      correctAnswer: 'recalled',
      explanation: '"Recalled" means to "[[remember|recordar]], often used in formal "[[testimony|testimonio]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: MIXED PRACTICE (10 items)
// ============================================
export const C1_U7_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Unit 7 Review',
  grammarPoint: 'Mixed Speculation & Reporting',
  explanation: 'Test your "[[ability|habilidad]] to use the "[[advanced|avanzadas]] structures from this unit.',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'He is "[[thought|pensado]] ___ "[[living|viviendo]] "[[abroad|en el extranjero]].',
      options: ['to be', 'that he is', 'having'],
      correctAnswer: 'to be',
      explanation: 'Current passive reporting.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'They ___ "[[missed|perdido]] the "[[flight|vuelo]]; there was "[[heavy|fuerte]] "[[traffic|tráfico]].',
      options: ['might have', 'must have', 'can\'t have'],
      correctAnswer: 'might have',
      explanation: 'Past possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'It is "[[estimated|estimado]] ___ the "[[project|proyecto]] will "[[cost|costar]] "[[millions|millones]].',
      options: ['that', 'to', 'for'],
      correctAnswer: 'that',
      explanation: 'Impersonal reporting with that-clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'You ___ "[[be|estar]] "[[joking|bromeando]]! That\'s "[[impossible|imposible]].',
      options: ['must', 'can\'t', 'might'],
      correctAnswer: 'must',
      explanation: 'Strong current deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'The "[[minister|ministro]] ___ to "[[resign|renunciar]].',
      options: ['is expected', 'expects', 'is expecting'],
      correctAnswer: 'is expected',
      explanation: 'Passive reporting structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'She ___ "[[known|sabido]] "[[about|sobre]] it; she "[[wasn\'t|no estaba]] "[[there|allí]].',
      options: ['can\'t have', 'must have', 'might have'],
      correctAnswer: 'can\'t have',
      explanation: 'Past logical impossibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'The "[[painting|pintura]] is "[[alleged|presunta]] ___ a "[[fake|falsificación]].',
      options: ['to be', 'being', 'that it is'],
      correctAnswer: 'to be',
      explanation: 'Allegation structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'We ___ "[[stayed|quedado]] in a "[[better|mejor]] "[[hotel|hotel]].',
      options: ['could have', 'must have', 'can have'],
      correctAnswer: 'could have',
      explanation: 'Past theoretical possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'It has been "[[confirmed|confirmado]] ___ the "[[deal|trato]] is "[[off|cancelado]].',
      options: ['that', 'to', 'it'],
      correctAnswer: 'that',
      explanation: 'Passive reporting with that-clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'He ___ "[[working|trabajando]] late "[[tonight|esta noche]].',
      options: ['might be', 'must have been', 'can have been'],
      correctAnswer: 'might be',
      explanation: 'Current/Future possibility.',
      points: 1
    }
  ]
};

export const unit7 = createC1Unit(
  'c1-u7',
  'The Language of Reporting & Speculation',
  'Master formal journalistic reporting and sophisticated modals for deduction.',
  ['Use passive reporting structures (it is said/he is thought)', 'Apply advanced modals of speculation', 'Master formal and journalistic vocabulary'],
  [
    C1_U7_BLOCK1, C1_U7_BLOCK2, C1_U7_BLOCK3, C1_U7_BLOCK4, C1_U7_BLOCK5
  ]
);

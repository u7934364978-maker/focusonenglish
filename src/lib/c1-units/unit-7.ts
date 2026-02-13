import { Exercise, Lesson } from '../exercise-types';
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
  explanation: 'Advanced reporting involves using "It is thought..." or "He is said to...". These [[structures|estructuras]] are essential for [[formal|formal]] or [[journalistic|periodístico]] English.',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'fill-blank',
      question: 'It is widely [[believed|creído]] ___ the [[economy|economía]] will [[rebound|rebotar]] next [[quarter|trimestre]].',
      correctAnswer: 'that',
      explanation: 'Use "It is + past participle + that" for [[impersonal|impersonal]] reports.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'fill-blank',
      question: 'The [[CEO|director ejecutivo]] is [[understood|entendido]] ___ [[resigned|renunciado]] over the [[weekend|fin de semana]].',
      correctAnswer: 'to have',
      explanation: 'Use "to have + past participle" to report a [[past|pasado]] action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'fill-blank',
      question: 'The [[missing|desaparecido]] [[artifacts|artefactos]] are [[thought|pensados]] ___ [[stolen|robados]] by [[professionals|profesionales]].',
      correctAnswer: 'to have been',
      explanation: 'Passive reporting with a [[passive|pasiva]] infinitive for past [[actions|acciones]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'fill-blank',
      question: 'It was [[claimed|afirmado]] ___ the [[evidence|evidencia]] had been [[tampered|manipulada]] with.',
      correctAnswer: 'that',
      explanation: 'Reporting a past [[claim|afirmación]] about a [[prior|previa]] situation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'fill-blank',
      question: 'He is [[alleged|presunto]] ___ [[masterminded|planeado]] the entire [[operation|operación]].',
      correctAnswer: 'to have',
      explanation: '"Alleged to have done" is a common [[legal|legal]] reporting structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'fill-blank',
      question: 'The [[new|nuevo]] [[law|ley]] is [[expected|esperada]] ___ [[passed|aprobada]] by [[parliament|parlamento]] next week.',
      correctAnswer: 'to be',
      explanation: 'Reporting a future [[expectation|expectativa]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'fill-blank',
      question: 'It is [[rumored|rumoreado]] ___ the [[couple|pareja]] is [[planning|planeando]] a [[secret|secreta]] [[wedding|boda]].',
      correctAnswer: 'that',
      explanation: 'Reporting current [[rumors|rumores]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'fill-blank',
      question: 'The [[ancient|antiguo]] [[city|ciudad]] is [[said|dicha]] ___ [[destroyed|destruida]] by a [[volcanic|volcánica]] [[eruption|erupción]].',
      correctAnswer: 'to have been',
      explanation: 'Reporting a historical [[event|suceso]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'fill-blank',
      question: 'It is [[estimated|estimado]] ___ over a [[million|millón]] [[people|personas]] [[attended|asistieron]] the [[rally|mitin]].',
      correctAnswer: 'that',
      explanation: 'Reporting [[numerical|numéricas]] [[estimates|estimaciones]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'fill-blank',
      question: 'The [[suspect|sospechoso]] is [[believed|creído]] ___ [[hiding|escondiéndose]] in the [[mountains|montañas]].',
      correctAnswer: 'to be',
      explanation: 'Reporting a [[current|actual]] ongoing state.',
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
  explanation: 'Use [[must|debe]], [[might|podría]], [[could|podría]], and [[can\'t|no puede]] to express different [[levels|niveles]] of [[certainty|certeza]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: 'He ___ [[forgotten|olvidado]] about the [[meeting|reunión]]; he\'s usually so [[punctual|puntual]].',
      options: ['must have', 'can\'t have', 'should have'],
      correctAnswer: 'must have',
      explanation: 'Expressing a [[strong|fuerte]] logical [[deduction|deducción]] in the past.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'They ___ [[reached|llegado]] the [[summit|cumbre]] yet; they only [[started|empezaron]] an hour ago.',
      options: ['can\'t have', 'must have', 'might not have'],
      correctAnswer: 'can\'t have',
      explanation: 'Expressing [[impossibility|imposibilidad]] based on evidence.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'I\'m not sure where he is. He ___ ___ [[working|trabajando]] late at the [[office|oficina]].',
      options: ['might be', 'must be', 'can\'t be'],
      correctAnswer: 'might be',
      explanation: 'Expressing a [[possibility|posibilidad]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'You ___ [[been|sido]] [[thrilled|emocionado]] when you [[won|ganaste]] the [[award|premio]]!',
      options: ['must have', 'could have', 'might have'],
      correctAnswer: 'must have',
      explanation: 'A very [[likely|probable]] past [[feeling|sentimiento]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'The [[document|documento]] ___ [[been|sido]] [[leaked|filtrado]] by someone in the [[department|departamento]].',
      options: ['could have', 'can\'t have', 'should have'],
      correctAnswer: 'could have',
      explanation: 'Expressing a past [[theoretical|teórica]] possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'He ___ [[known|sabido]] about the [[merger|fusión]]; he doesn\'t [[work|trabaja]] in that [[sector|sector]].',
      options: ['can\'t have', 'must have', 'might not have'],
      correctAnswer: 'can\'t have',
      explanation: 'Logical [[denial|negación]] of past knowledge.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: 'The [[keys|llaves]] ___ [[be|estar]] in the [[drawer|cajón]]; I\'ve [[searched|buscado]] it [[twice|dos veces]].',
      options: ['can\'t', 'must', 'might'],
      correctAnswer: 'can\'t',
      explanation: 'Expressing [[certainty|certeza]] that something is NOT true.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'They ___ [[having|teniendo]] a [[party|fiesta]]; the [[music|música]] is [[incredibly|increíblemente]] [[loud|fuerte]].',
      options: ['must be', 'might be', 'can\'t be'],
      correctAnswer: 'must be',
      explanation: 'Logical deduction about a [[current|actual]] action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'If I hadn\'t [[checked|revisado]], I ___ [[made|hecho]] a [[huge|enorme]] [[mistake|error]].',
      options: ['might have', 'must have', 'can\'t have'],
      correctAnswer: 'might have',
      explanation: 'Speculating about a [[counterfactual|contrafáctico]] past.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'She ___ [[gone|ido]] to the [[gym|gimnasio]]; her [[bag|bolsa]] is still [[here|aquí]].',
      options: ['can\'t have', 'must have', 'might have'],
      correctAnswer: 'can\'t have',
      explanation: 'Deduction based on [[physical|física]] evidence.',
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
  explanation: 'Rewrite the [[sentence|oración]] using the [[given|dada]] word.',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'fill-blank',
      question: 'People believe that the robber has left the country. (THOUGHT) \n The robber ___ the country.',
      correctAnswer: 'is thought to have left',
      explanation: 'Transforming to a [[personal|personal]] passive reporting structure.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'fill-blank',
      question: 'I\'m sure he didn\'t see the message. (CAN\'T) \n He ___ the message.',
      correctAnswer: 'can\'t have seen',
      explanation: 'Using [[modal|modal]] for past negative certainty.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'fill-blank',
      question: 'It is expected that the prices will rise soon. (TO) \n Prices ___ soon.',
      correctAnswer: 'are expected to rise',
      explanation: 'Passive reporting with [[future|futuro]] reference.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'fill-blank',
      question: 'Perhaps she forgot about the appointment. (MIGHT) \n She ___ the appointment.',
      correctAnswer: 'might have forgotten about',
      explanation: 'Speculating about a [[past|pasada]] possibility.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'fill-blank',
      question: 'The press reports that the minister is lying. (REPORTED) \n The minister ___ lying.',
      correctAnswer: 'is reported to be',
      explanation: 'Reporting a [[current|actual]] action.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'fill-blank',
      question: 'I\'m certain they are at home; the lights are on. (MUST) \n They ___ at home.',
      correctAnswer: 'must be',
      explanation: 'Current certainty using [[must|debe]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'fill-blank',
      question: 'Experts estimate the painting is worth millions. (ESTIMATED) \n The painting ___ worth millions.',
      correctAnswer: 'is estimated to be',
      explanation: 'Reporting an [[estimate|estimación]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'fill-blank',
      question: 'It\'s possible that the plane was delayed by fog. (COULD) \n The plane ___ delayed by fog.',
      correctAnswer: 'could have been',
      explanation: 'Past possibility in the [[passive|pasiva]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'fill-blank',
      question: 'The police allege that he stole the jewels. (ALLEGED) \n He ___ the jewels.',
      correctAnswer: 'is alleged to have stolen',
      explanation: 'Formal [[legal|legal]] reporting.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'fill-blank',
      question: 'I am sure that wasn\'t a ghost! (CAN\'T) \n That ___ a ghost!',
      correctAnswer: 'can\'t have been',
      explanation: 'Past logical [[impossibility|imposibilidad]].',
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
  explanation: 'C1 level requires using [[precise|precisos]] and [[formal|formales]] verbs instead of simple ones like "say" or "tell".',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'The [[spokesperson|portavoz]] ___ that no [[decisions|decisiones]] had been reached.',
      options: ['maintained', 'told', 'said'],
      correctAnswer: 'maintained',
      explanation: '"Maintained" implies [[continuing|continuar]] to [[assert|afirmar]] something.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'The [[article|artículo]] ___ the [[challenges|desafíos]] [[facing|enfrentando]] the [[region|región]].',
      options: ['outlines', 'speaks', 'writes'],
      correctAnswer: 'outlines',
      explanation: '"Outlines" means to give a [[summary|resumen]] of main points.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'The [[prime minister|primer ministro]] ___ any [[knowledge|conocimiento]] of the [[scandal|escándalo]].',
      options: ['refuted', 'denied', 'ignored'],
      correctAnswer: 'denied',
      explanation: '"Denied" is the [[standard|estándar]] verb for [[rejecting|rechazar]] an [[accusation|acusación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'The [[protest|protesta]] ___ a [[heated|acalorado]] [[debate|debate]] on [[civil|civiles]] [[rights|derechos]].',
      options: ['sparked', 'made', 'started'],
      correctAnswer: 'sparked',
      explanation: '"Sparked" is common for [[initiating|iniciar]] a strong [[reaction|reacción]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'Researchers ___ a [[significant|significativo]] [[breakthrough|avance]].',
      options: ['claimed', 'told', 'talked'],
      correctAnswer: 'claimed',
      explanation: 'Used when someone [[states|afirma]] something is true [[without|sin]] [[absolute|absoluta]] proof yet.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'The [[document|documento]] ___ the [[need|necesidad]] for [[radical|radicales]] [[reforms|reformas]].',
      options: ['highlights', 'shows', 'points'],
      correctAnswer: 'highlights',
      explanation: '"Highlights" means to [[emphasize|enfatizar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'Critics have ___ the [[government\'s|del gobierno]] [[inertia|inercia]].',
      options: ['slammed', 'hit', 'pushed'],
      correctAnswer: 'slammed',
      explanation: '"Slammed" is a common [[journalistic|periodístico]] term for [[harsh|dura]] criticism.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'The [[report|informe]] ___ the [[risks|riesgos]] [[associated|asociados]] with [[AI|IA]].',
      options: ['underscores', 'marks', 'lines'],
      correctAnswer: 'underscores',
      explanation: '"Underscores" is a [[formal|formal]] [[synonym|sinónimo]] for [[emphasize|enfatizar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'The [[witness|testigo]] ___ [[seeing|viendo]] a [[suspicious|sospechoso]] [[figure|figura]].',
      options: ['recalled', 'thought', 'reminded'],
      correctAnswer: 'recalled',
      explanation: '"Recalled" means to [[remember|recordar]] and [[describe|describir]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'The [[policy|política]] has ___ [[widespread|generalizada]] [[controversy|controversia]].',
      options: ['generated', 'done', 'acted'],
      correctAnswer: 'generated',
      explanation: 'Used for the [[creation|creación]] of a [[situation|situación]] or [[feeling|sentimiento]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: ERROR CORRECTION - SPECULATION (10 items)
// ============================================
export const C1_U7_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Error Correction: Speculation & Passive Reporting',
  grammarPoint: 'Mixed Review',
  explanation: 'Find and [[correct|corregir]] the [[errors|errores]] in these advanced [[sentences|oraciones]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'It is said that he to be very rich.',
      options: ['to be', 'is', 'being'],
      correctAnswer: 'is',
      explanation: 'After "It is said that", you need a [[full clause|cláusula completa]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'He must have been forgetting his keys at home.',
      options: ['been forgetting', 'have forgotten', 'forgot'],
      correctAnswer: 'have forgotten',
      explanation: 'Use the [[perfect|perfecto]] [[infinitive|infinitivo]] for a completed past action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'The treasure is believed that it is hidden here.',
      options: ['that it is', 'to be', 'being'],
      correctAnswer: 'to be',
      explanation: 'Use the [[personal|personal]] passive structure: "Subject + is believed + to be".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'You can\'t have saw him; he\'s in Australia.',
      options: ['have saw', 'have seen', 'had seen'],
      correctAnswer: 'have seen',
      explanation: 'Modal + have + [[past participle|participio pasado]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'It has been reported that the strike to have ended.',
      options: ['to have ended', 'has ended', 'ending'],
      correctAnswer: 'has ended',
      explanation: 'Use a [[finite|finita]] verb after "that".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'He might has been delayed by the traffic.',
      options: ['has been', 'have been', 'was'],
      correctAnswer: 'have been',
      explanation: 'Modals are always followed by the [[base form|forma base]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'The victim is thought to be attacked from behind.',
      options: ['to be attacked', 'to have been attacked', 'attacked'],
      correctAnswer: 'to have been attacked',
      explanation: 'The attack happened in the [[past|pasado]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'I should have known better than to trust him.',
      options: ['should have known', 'must have known', 'could have known'],
      correctAnswer: 'should have known',
      explanation: 'Expressing [[regret|arrepentimiento]] about a past action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'It is reported that the company has went bankrupt.',
      options: ['has went', 'has gone', 'is gone'],
      correctAnswer: 'has gone',
      explanation: 'Past participle of "go" is "gone".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'They must to be exhausted after the flight.',
      options: ['must to be', 'must be', 'must have'],
      correctAnswer: 'must be',
      explanation: '"Must" is a [[modal|modal]] and doesn\'t take "to".',
      points: 1
    }
  ]
};

export const unit7: Lesson = createC1Unit(
  'c1-u7',
  'Speculative Language & Passive Reporting',
  'Mastering formal reporting structures and sophisticated ways to express certainty and doubt.',
  ['Use passive reporting structures correctly', 'Speculate about the past using modals', 'Employ formal journalistic vocabulary'],
  [
    C1_U7_BLOCK1, C1_U7_BLOCK2, C1_U7_BLOCK3, C1_U7_BLOCK4, C1_U7_BLOCK5
  ]
);

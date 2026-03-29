#!/usr/bin/env node
/**
 * Genera unit-8.ts (108 ítems) y c1-unit8-question-es.ts (tooltips g,v,w,s).
 * Uso: node scripts/generate-c1-unit8-108.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readQuotes, listenQuotes, wRows, wTooltipsEs, sRows, sTooltipsEs } from './u8-global-data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_UNIT = path.join(__dirname, '../src/lib/course/c1/unit-8.ts');
const OUT_ES = path.join(__dirname, '../src/lib/course/c1/c1-unit8-question-es.ts');

const questionEs = {};

function j(s) {
  return JSON.stringify(s);
}

function noteEs(id, es) {
  questionEs[id] = es;
}

function exMC(id, topic, topicName, title, instructions, question, options, correctAnswer, explanation) {
  return `  {
    id: ${j(id)},
    type: 'multiple-choice',
    level: 'C1',
    topic: ${j(topic)},
    difficulty: 'hard',
    content: {
      title: ${j(title)},
      instructions: ${j(instructions)},
      questions: [
        {
          question: ${j(question)},
          options: [${options.map((o) => j(o)).join(', ')}],
          correctAnswer: ${correctAnswer},
          explanation: ${j(explanation)},
        },
      ],
    },
    topicName: ${j(topicName)},
  }`;
}

function exFB(id, topic, topicName, title, instructions, question, options, correctAnswer, acceptableAnswers, explanation) {
  return `  {
    id: ${j(id)},
    type: 'fill-blank',
    level: 'C1',
    topic: ${j(topic)},
    difficulty: 'hard',
    content: {
      title: ${j(title)},
      instructions: ${j(instructions)},
      questions: [
        {
          question: ${j(question)},
          options: [${options.map((o) => j(o)).join(', ')}],
          correctAnswer: ${j(correctAnswer)},
          acceptableAnswers: [${acceptableAnswers.map((a) => j(a)).join(', ')}],
          explanation: ${j(explanation)},
        },
      ],
    },
    topicName: ${j(topicName)},
  }`;
}

function exRead(id, topic, topicName, title, instructions, question, options, correctAnswer, explanation) {
  return exMC(id, topic, topicName, title, instructions, question, options, correctAnswer, explanation).replace(
    "type: 'multiple-choice'",
    "type: 'reading-comprehension'"
  );
}

function exListen(id, topic, topicName, title, instructions, question, options, correctAnswer, explanation) {
  return exMC(id, topic, topicName, title, instructions, question, options, correctAnswer, explanation).replace(
    "type: 'multiple-choice'",
    "type: 'listening-comprehension'"
  );
}

function exWrite(id, topic, topicName, title, instructions, question, options, correctAnswer, explanation) {
  return exMC(id, topic, topicName, title, instructions, question, options, correctAnswer, explanation).replace(
    "type: 'multiple-choice'",
    "type: 'writing'"
  );
}

const G_TITLE =
  '[[Grammar|Gramática]]: [[Fronting, Contrast & Speculation|Fronting, contraste y especulación]]';
const V_TITLE = '[[Vocabulary|Vocabulario]]: [[Global Issues|Problemas globales]]';
const R_TITLE = '[[Reading|Lectura]]: [[Global Issues|Problemas globales]]';
const L_TITLE = '[[Listening|Comprensión auditiva]]: [[Global Issues in discourse|Problemas globales en el discurso]]';
const W_TITLE =
  '[[Writing|Escritura]]: [[Academic writing — global issues|Escritura académica — problemas globales]]';
const S_TITLE = '[[Speaking|Expresión oral]]: [[Discussion — global issues|Discusión — problemas globales]]';

const INS = {
  choose: '[[Choose the best answer.|Elige la mejor respuesta.]]',
  complete: '[[Complete with the correct structure.|Completa con la estructura correcta.]]',
  vocab: '[[Choose the word or phrase that best completes the sentence.|Elige la palabra o frase que mejor completa la oración.]]',
  read: '[[Read the extract and choose the best answer.|Lee el extracto y elige la mejor respuesta.]]',
  listen: '[[Listen to the extract (read the script if no audio) and answer.|Escucha el extracto (lee el guión si no hay audio) y responde.]]',
  write: '[[Choose the most effective option for C1-level writing.|Elige la opción más efectiva para un texto de nivel C1.]]',
  speak: '[[Choose the most appropriate C1-level spoken English.|Elige el inglés oral más adecuado para nivel C1.]]',
};

function rq(quoteEn, quoteEs) {
  return `[[Text:|Texto:]] \"[[${quoteEn}|${quoteEs}]]\"\n\n[[According to the extract:|Según el extracto:]]`;
}

const grammar = [];
const gRows = [
  [
    'mc',
    'Which sentence correctly uses inversion after a fronted negative adverbial?',
    '¿Qué oración invierte el sujeto tras un adverbio negativo antepuesto?',
    [
      '[[Rarely has the Security Council been so divided on a humanitarian mandate.|Rarely + has + sujeto]]',
      '[[Rarely the Security Council has been so divided.|sin inversión]]',
      '[[Rarely has been the Security Council so divided.|orden incorrecto]]',
    ],
    0,
    'Inversion after *Rarely*.',
  ],
  [
    'fb',
    'Not until _______ _______ signed did the ceasefire hold along the corridor.',
    'Completa *Not until* + cláusula (dos palabras: artículo + sustantivo o sujeto mínimo).',
    ['[[the treaty was|el tratado fue]]', '[[the treaty|sustantivo sin verbo]]', '[[was the treaty|inversión incorrecta aquí]]'],
    'the treaty was',
    ['the treaty was'],
    '*Not until + clause + inversion*.',
  ],
  [
    'mc',
    '_______ climate finance, not technology alone, that dominated the closing sessions of the summit.',
    'Clivada enfática: *It was … that*.',
    [
      '[[It was|Fue]]',
      '[[There was|había]]',
      '[[What was|What]]',
    ],
    0,
    '*It was X that…* cleft.',
  ],
  [
    'fb',
    '_______ _______ the planet needs is not slogans but enforceable rules with independent monitoring.',
    'Pseudo-clivada con *what* (una palabra).',
    ['[[What|What]]', '[[That|That]]', '[[Which|Which]]'],
    'What',
    ['What'],
    '*What + S + be* pseudo-cleft.',
  ],
  [
    'mc',
    'The refugees, many of them unaccompanied minors, _______ the authorities were initially unable to process.',
    'Desplazamiento a la izquierda + cláusula de relativo encabezada por pronombre.',
    [
      '[[whom the authorities were initially unable to process|a quienes las autoridades no pudieron tramitar]]',
      '[[the authorities were initially unable to process|falta pronombre relativo]]',
      '[[which the authorities were initially unable to process|referente incorrecto para personas]]',
    ],
    0,
    'Left dislocation + *whom* relative.',
  ],
  [
    'fb',
    'Under no circumstances _______ _______ the mandate be renewed without explicit host-state consent.',
    'Inversión con *Under no circumstances* (dos palabras).',
    ['[[should the|debería el]]', '[[the should|incorrecto]]', '[[ought the|incorrecto]]'],
    'should the',
    ['should the'],
    '*Under no circumstances should + S + V*.',
  ],
  [
    'mc',
    '_______ developed nations have stabilised inflation, many emerging economies still face debt distress.',
    'Conector de contraste entre cláusulas paralelas (registro formal).',
    [
      '[[Whereas|Mientras que]]',
      '[[Despite|a pesar de + sintagma]]',
      '[[However|sin embargo + puntuación]]',
    ],
    0,
    '*Whereas* for clausal contrast.',
  ],
  [
    'mc',
    '_______, manufacturing exports have rebounded sharply compared with the previous quarter.',
    'Adverbio de contraste al inicio de oración (incluye coma).',
    [
      '[[By contrast,|En contraste,]]',
      '[[Despite,|Despite no lleva coma así]]',
      '[[Although,|Although va seguido de cláusula]]',
    ],
    0,
    '*By contrast,* as sentence adverb.',
  ],
  [
    'mc',
    'The northern bloc favours fiscal expansion; _______, the southern bloc insists on consolidation.',
    'Adverbio de contraste en registro académico.',
    [
      '[[conversely|inversamente]]',
      '[[however|posición distinta]]',
      '[[although|subordinante]]',
    ],
    0,
    '*Conversely*.',
  ],
  [
    'fb',
    '_______ earlier agreements, the new pact includes binding verification chapters.',
    'Preposición de contraste ante sustantivo (una palabra).',
    ['[[Unlike|A diferencia de]]', '[[Dislike|no es preposición aquí]]', '[[Unlike to|incorrecto]]'],
    'Unlike',
    ['Unlike'],
    '*Unlike* + noun phrase.',
  ],
  [
    'mc',
    '_______ the headline figures look encouraging, household surveys reveal persistent precarity.',
    'Concesión / contraste inicial con *While*.',
    [
      '[[While|Mientras / aunque]]',
      '[[Despite|Despite + sintagma]]',
      '[[Whereas|whereas = contraste entre dos hechos]]',
    ],
    0,
    '*While* + clause for contrast.',
  ],
  [
    'fb',
    'The reform was presented as progressive; _______, it entrenched existing inequalities.',
    'Conector adversativo formal (una palabra).',
    ['[[nevertheless|no obstante]]', '[[never the less|error]]', '[[nonethelessly|error]]'],
    'nevertheless',
    ['nevertheless', 'nonetheless'],
    '*Nevertheless*.',
  ],
  [
    'mc',
    '_______ that unilateral measures will suffice is open to serious doubt.',
    'Especulación académica impersonal.',
    [
      '[[It is widely assumed|Se da por sentado ampliamente que]]',
      '[[It is widely assuming|forma incorrecta]]',
      '[[There is widely assumed|incorrecto]]',
    ],
    0,
    '*It is widely assumed that…*.',
  ],
  [
    'fb',
    'There _______ _______ to believe that enforcement will remain patchy without a tribunal.',
    'Patrón *There is reason to* (dos palabras).',
    ['[[is reason|hay razones]]', '[[are reason|concordancia incorrecta]]', '[[is reasons|incorrecto]]'],
    'is reason',
    ['is reason'],
    '*There is reason to + infinitive*.',
  ],
  [
    'mc',
    'One _______ speculate that small states will band together to block the proposed directive.',
    'Especulación cautelosa con *might*.',
    [
      '[[might|podría]]',
      '[[must|demasiado fuerte]]',
      '[[can|menos matizado]]',
    ],
    0,
    '*One might speculate that…*.',
  ],
  [
    'fb',
    'The evidence _______ _______ to suggest that displacement will accelerate if rainfall fails again.',
    'Hedging con *would appear to* (dos palabras en los huecos).',
    ['[[would appear|parecería]]', '[[will appear|tiempo incorrecto]]', '[[would appears|concordancia incorrecta]]'],
    'would appear',
    ['would appear'],
    '*Would appear to*.',
  ],
  [
    'mc',
    '_______ the agreement looks comprehensive, hidden carve-outs may blunt its impact.',
    'Especulación / matiz desde apariencia superficial.',
    [
      '[[At first glance|a primera vista]]',
      '[[At first sighting|no idiomático]]',
      '[[In first glance|incorrecto]]',
    ],
    0,
    '*At first glance*.',
  ],
  [
    'fb',
    'It _______ _______ reasonable to suppose that ratification will slip past the original deadline.',
    'Estructura impersonal matizada (dos palabras).',
    ['[[would seem|parecería]]', '[[will seem|demasiado categórico]]', '[[would seems|error]]'],
    'would seem',
    ['would seem'],
    '*It would seem reasonable to suppose that…*.',
  ],
];

function grammarTopic(i) {
  if (i < 6) return 'fronting';
  if (i < 12) return 'contrast-structures';
  return 'speculation';
}

gRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u8-g${n}`;
  const topic = grammarTopic(i);
  noteEs(id, row[2]);
  if (row[0] === 'mc') {
    grammar.push(
      exMC(id, topic, 'Grammar', G_TITLE, INS.choose, row[1], row[3], row[4], row[5])
    );
  } else {
    grammar.push(
      exFB(id, topic, 'Grammar', G_TITLE, INS.complete, row[1], row[3], row[4], row[5], row[6])
    );
  }
});

const vocabulary = [];
const vRows = [
  [
    'The treaty was finally _______ by all member states, making it legally binding.',
    'El tratado fue finalmente _____ por todos los Estados miembros, haciéndolo jurídicamente vinculante.',
    ['[[ratified|ratificado]]', '[[nullified|anulado]]', '[[notified|notificado]]'],
    0,
    '*Ratify*.',
  ],
  [
    'Transparent _______ reduces opportunities for corruption in public procurement.',
    'La _____ transparente reduce oportunidades de corrupción en la contratación pública.',
    ['[[governance|gobernanza]]', '[[government|gobierno]]', '[[governor|gobernador]]'],
    0,
    '*Governance*.',
  ],
  [
    '_______ law increasingly governs cross-border data flows and corporate liability.',
    'El derecho _____ rige cada vez más los flujos transfronterizos de datos y la responsabilidad corporativa.',
    ['[[Transnational|transnacional]]', '[[Transactional|transaccional]]', '[[Translational|traslacional]]'],
    0,
    '*Transnational*.',
  ],
  [
    'The _______ assembly debated reform of the security council\'s veto rules.',
    'La asamblea _____ debatió la reforma de las normas del veto del Consejo de Seguridad.',
    ['[[General|general / General]]', '[[Generous|generosa]]', '[[Generic|genérica]]'],
    0,
    '*General Assembly*.',
  ],
  [
    '_______ aid programmes must align with local priorities to avoid dependency traps.',
    'Los programas de ayuda _____ deben alinearse con prioridades locales para evitar trampas de dependencia.',
    ['[[Development|desarrollo]]', '[[Developed|desarrollados]]', '[[Developing|en desarrollo]]'],
    0,
    '*Development aid*.',
  ],
  [
    '_______ corridors for grain exports collapsed when insurance markets withdrew cover.',
    'Los corredores _____ para exportaciones de grano colapsaron cuando los mercados aseguradores retiraron cobertura.',
    ['[[Humanitarian|humanitarios]]', '[[Humanism|humanismo]]', '[[Humane|humanos]]'],
    0,
    '*Humanitarian*.',
  ],
  [
    'Economic _______ were tightened after the regime\'s cross-border cyberattacks.',
    'Se endurecieron las _____ económicas tras los ciberataques transfronterizos del régimen.',
    ['[[sanctions|sanciones]]', '[[sections|secciones]]', '[[sanctums|santuarios]]'],
    0,
    '*Sanctions*.',
  ],
  [
    '_______ law determines whether a case can be heard in domestic courts.',
    'El derecho _____ determina si un caso puede ventilarse en tribunales nacionales.',
    ['[[Jurisdiction|jurisdicción]]', '[[Justification|justificación]]', '[[Jurisprudence|jurisprudencia]]'],
    0,
    '*Jurisdiction*.',
  ],
  [
    'The _______ treaty framework aims to limit the spread of strategic weapons.',
    'El marco del tratado de _____ pretende limitar la proliferación de armas estratégicas.',
    ['[[non-proliferation|no proliferación]]', '[[non-profit|sin ánimo de lucro]]', '[[non-person|impersonal]]'],
    0,
    '*Non-proliferation*.',
  ],
  [
    'Climate _______ are used to allocate emission allowances across sectors.',
    'Los _____ climáticos se usan para asignar derechos de emisión entre sectores.',
    ['[[ceilings|techos / límites]]', '[[floors|suelos / mínimos]]', '[[sealings|sellados]]'],
    0,
    '*Ceilings*.',
  ],
  [
    '_______-border carbon adjustments aim to prevent carbon leakage.',
    'Los ajustes _____ fronterizos por carbono pretenden evitar la fuga de carbono.',
    ['[[Cross|transfronterizos]]', '[[Criss|error]]', '[[Crisscross|entrecruzado]]'],
    0,
    '*Cross-border*.',
  ],
  [
    '_______ displacement affects tens of millions due to conflict and disasters.',
    'El desplazamiento _____ afecta a decenas de millones por conflicto y catástrofes.',
    ['[[Internal|interno]]', '[[Infernal|infernal]]', '[[Interval|intervalo]]'],
    0,
    '*Internal* displacement.',
  ],
  [
    'The court rejected the _______ request on human rights grounds.',
    'El tribunal rechazó la solicitud de _____ por motivos de derechos humanos.',
    ['[[extradition|extradición]]', '[[extrapolation|extrapolación]]', '[[extraversion|extraversión]]'],
    0,
    '*Extradition*.',
  ],
  [
    '_______ negotiations stalled over loss-and-damage financing for vulnerable states.',
    'Las negociaciones _____ se estancaron por la financiación de pérdidas y daños a Estados vulnerables.',
    ['[[Climate|climáticas]]', '[[Climatic|climático]]', '[[Climber|escalador]]'],
    0,
    '*Climate* negotiations.',
  ],
  [
    '_______ peacekeeping mandates require renewal by the Security Council.',
    'Los mandatos de mantenimiento de la _____ requieren renovación del Consejo de Seguridad.',
    ['[[UN|ONU]]', '[[UK|Reino Unido]]', '[[EU|UE]]'],
    0,
    '*UN* peacekeeping.',
  ],
  [
    '_______ inequality between regions fuels migration pressures.',
    'La desigualdad _____ entre regiones alimenta presiones migratorias.',
    ['[[Spatial|espacial]]', '[[Special|especial]]', '[[Spacial|error ortográfico común]]'],
    0,
    '*Spatial* inequality.',
  ],
  [
    'The _______ implications of semiconductor export controls extend beyond trade.',
    'Las implicaciones _____ de los controles a la exportación de semiconductores van más allá del comercio.',
    ['[[geopolitical|geopolíticas]]', '[[geometric|geométricas]]', '[[geothermal|geotérmicas]]'],
    0,
    '*Geopolitical*.',
  ],
  [
    '_______ recognition remains contested when secessionist regions hold referendums.',
    'El reconocimiento _____ sigue siendo controvertido cuando regiones secesionistas celebran referendos.',
    ['[[Diplomatic|diplomático]]', '[[Diplomatical|no existe]]', '[[Diplomat|diplomático (sust.)]]'],
    0,
    '*Diplomatic* recognition.',
  ],
];

vRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u8-v${n}`;
  noteEs(id, row[1]);
  vocabulary.push(
    exMC(id, 'global-vocabulary', 'Vocabulary', V_TITLE, INS.vocab, row[0], row[2], row[3], row[4])
  );
});
const reading = [];
readQuotes.forEach((row, i) => {
  reading.push(
    exRead(
      `c1-u8-r${i + 1}`,
      'global-reading',
      'Reading',
      R_TITLE,
      INS.read,
      rq(row[0], row[1]),
      row[2],
      row[3],
      row[4]
    )
  );
});

const listenFrames = [
  ['[[Speaker:|Voz / Hablante:]]', '[[The speaker stresses that:|La voz enfatiza que:]]'],
  ['[[Lecturer:|Profesor/a (clase magistral):]]', '[[Main claim:|Tesis principal:]]'],
  ['[[Interviewer:|Entrevistador/a:]]', '[[The interviewee implies:|El entrevistado insinúa que:]]'],
  ['[[Coach:|Coach:]]', '[[The advice focuses on:|El consejo se centra en:]]'],
  ['[[Podcast host:|Presentador/a del podcast:]]', '[[The distinction drawn is:|La distinción trazada es:]]'],
  ['[[Therapist:|Terapeuta:]]', '[[Therapeutic aim:|Objetivo terapéutico:]]'],
  ['[[Debate:|Debate:]]', '[[Speaker suggests:|El hablante sugiere que:]]'],
  ['[[Seminar leader:|Moderador/a del seminario:]]', '[[Pedagogical point:|Punto pedagógico:]]'],
  ['[[Radio:|Radio:]]', '[[Explanation offered:|Explicación ofrecida:]]'],
  ['[[Workshop:|Taller:]]', '[[Key takeaway:|Idea clave:]]'],
  ['[[Lecture:|Conferencia:]]', '[[Implication:|Implicación:]]'],
  ['[[Clip:|Extracto de audio:]]', '[[Mechanism described:|Mecanismo descrito:]]'],
  ['[[Interview:|Entrevista:]]', '[[Core idea:|Idea central:]]'],
  ['[[Panel:|Mesa redonda:]]', '[[Effect highlighted:|Efecto destacado:]]'],
  ['[[Talk:|Charla:]]', '[[Condition emphasised:|Condición enfatizada:]]'],
  ['[[Discussion:|Debate grupal:]]', '[[Nuanced position:|Postura matizada:]]'],
  ['[[Summary:|Resumen:]]', '[[Point summarised:|Idea resumida:]]'],
  ['[[Speaker:|Voz / Hablante:]]', '[[Listener should infer:|El oyente debe inferir:]]'],
];

const listening = [];
listenQuotes.forEach((row, i) => {
  const [left, right] = listenFrames[i];
  const q = `${left} \"[[${row[0]}|${row[1]}]]\"\n\n${right}`;
  listening.push(
    exListen(
      `c1-u8-l${i + 1}`,
      'global-listening',
      'Listening',
      L_TITLE,
      INS.listen,
      q,
      row[2],
      row[3],
      row[4]
    )
  );
});

const writing = [];
wRows.forEach((row, i) => {
  const id = `c1-u8-w${i + 1}`;
  noteEs(id, wTooltipsEs[i]);
  writing.push(
    exWrite(id, 'global-essay', 'Writing', W_TITLE, INS.write, row[0], row[1], row[2], row[3])
  );
});

const speaking = [];
sRows.forEach((row, i) => {
  const id = `c1-u8-s${i + 1}`;
  noteEs(id, sTooltipsEs[i]);
  speaking.push(exMC(id, 'speaking-global', 'Speaking', S_TITLE, INS.speak, row[0], row[1], row[2], row[3]));
});

const all = [...grammar, ...vocabulary, ...reading, ...listening, ...writing, ...speaking];

const header = `/**
 * C1 Unit 8 — Global Issues
 * Módulo 1 (bloque temático): Persona, sociedad y entorno
 * Grammar: Fronting, topicalisation, contrast, speculation
 *
 * Modelo ampliado: 18 ejercicios por lección × 6 lecciones = 108 ítems.
 * Patrón de IDs: c1-u8-g1..g18, v1..v18, r1..r18, l1..l18, w1..w18, s1..s18.
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = '[[Global Issues|Problemas globales]]';

export const UNIT_8_EXERCISES: Exercise[] = [
`;

const footer = `
];
`;

fs.writeFileSync(OUT_UNIT, header + all.join(',\n') + footer, 'utf8');

const esKeys = Object.keys(questionEs).sort();
const esBody = esKeys.map((k) => `  ${j(k)}:\n    ${j(questionEs[k])},`).join('\n');

const esFile = `/**
 * Traducción al español (tooltip TranslatedText) — unidad C1 8.
 * Gramática, vocabulario, writing y speaking (reading/listening: [[|]] en unit-8).
 */
export const C1_UNIT8_QUESTION_ES: Record<string, string> = {
${esBody}
};
`;

fs.writeFileSync(OUT_ES, esFile, 'utf8');

console.log('Wrote', OUT_UNIT, '(' + all.length + ' exercises)');
console.log('Wrote', OUT_ES, '(' + esKeys.length + ' ES strings)');

#!/usr/bin/env node
/**
 * Genera unit-7.ts (108 ítems) y c1-unit7-question-es.ts (tooltips g,v,w,s).
 * Uso: node scripts/generate-c1-unit7-108.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readQuotes, listenQuotes, wRows, wTooltipsEs, sRows, sTooltipsEs } from './u7-health-data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_UNIT = path.join(__dirname, '../src/lib/course/c1/unit-7.ts');
const OUT_ES = path.join(__dirname, '../src/lib/course/c1/c1-unit7-question-es.ts');

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
  '[[Grammar|Gramática]]: [[Nominal Clauses, Reporting Verbs & Concession|Oraciones nominales, verbos de reporte y concesión]]';
const V_TITLE = '[[Vocabulary|Vocabulario]]: [[Health and Mind|Salud y mente]]';
const R_TITLE = '[[Reading|Lectura]]: [[Health and Mind|Salud y mente]]';
const L_TITLE = '[[Listening|Comprensión auditiva]]: [[Health in discourse|La salud en el discurso]]';
const W_TITLE = '[[Writing|Escritura]]: [[Academic writing — health|Escritura académica — salud]]';
const S_TITLE = '[[Speaking|Expresión oral]]: [[Discussion — health|Discusión — salud]]';

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
    '_______ chronic stress remodels neural circuits associated with threat detection is no longer controversial.',
    'Oración nominal en función de sujeto: ¿qué encaja al inicio?',
    [
      '[[That|Que / that]]',
      '[[Which|no encaja como sujeto de oración sustantiva]]',
      '[[What|equivocado como sujeto aquí]]',
    ],
    0,
    '*That-clause* as subject.',
  ],
  [
    'fb',
    '_______ the digital therapy will prove cost-effective at scale is still an open empirical question.',
    'Completa con conjunción de subordinación sustantiva (una palabra).',
    ['[[Whether|si / si bien]]', '[[If|no como sujeto estándar]]', '[[That|no encaja con incertidumbre explícita]]'],
    'Whether',
    ['Whether'],
    '*Whether* introduces a nominal clause of uncertainty.',
  ],
  [
    'mc',
    '_______ is most striking is the gap between symptom scores and functional recovery.',
    'Pseudo-clivada con *what* como sujeto.',
    [
      '[[What|What]]',
      '[[That|That]]',
      '[[Which|Which]]',
    ],
    0,
    '*What is most striking is…*.',
  ],
  [
    'fb',
    'The fact that _______ _______ heterogeneous across sites complicates pooling estimates in meta-analyses.',
    'Cláusula tras *The fact that* (dos palabras verbales).',
    ['[[effects were|los efectos eran]]', '[[effect was|el efecto era]]', '[[effects are|tiempo incorrecto]]'],
    'effects were',
    ['effects were'],
    '*The fact that + clause*.',
  ],
  [
    'mc',
    '_______ early psychological intervention can alter illness trajectories is supported by longitudinal cohorts.',
    'Otra oración con *That* como sujeto.',
    [
      '[[That|That]]',
      '[[It|It]]',
      '[[This|This]]',
    ],
    0,
    '*That… is supported*.',
  ],
  [
    'fb',
    '_______ _______ the trial was not preregistered should give readers pause when interpreting novelty claims.',
    'Dos palabras: *The fact* + *that* ya implícito en el patrón.',
    ['[[The fact|The fact]]', '[[A fact|poco idiomático]]', '[[Fact that|falta artículo]]'],
    'The fact',
    ['The fact'],
    '*The fact that…* as subject.',
  ],
  [
    'mc',
    'The authors _______ that residual confounding could not be fully excluded.',
    'Verbo de reporte académico + *that*.',
    [
      '[[acknowledged|reconocieron]]',
      '[[told|patrón incorrecto sin objeto]]',
      '[[said to|incorrecto]]',
    ],
    0,
    '*Acknowledge that…*.',
  ],
  [
    'fb',
    'The committee _______ _______ the intervention be offered as first-line treatment in mild cases.',
    'Patrón *recommend that* + mandato (dos palabras).',
    ['[[recommended that|recomendaron que]]', '[[recommended to|incorrecto]]', '[[recommended for|incorrecto]]'],
    'recommended that',
    ['recommended that'],
    '*Recommend that* + base form.',
  ],
  [
    'mc',
    'Clinicians _______ patients against abrupt discontinuation of antidepressants.',
    'Reporting verb + objeto + *against + -ing*.',
    [
      '[[warned|advirtieron]]',
      '[[said|incorrecto]]',
      '[[told|told against]]',
    ],
    0,
    '*Warn someone against -ing*.',
  ],
  [
    'fb',
    'The editorial _______ _______ overstating the clinical significance of a surrogate endpoint.',
    'Verbo + *against + -ing*.',
    ['[[cautioned against|advirtió contra]]', '[[cautioned to|incorrecto]]', '[[cautioned for|incorrecto]]'],
    'cautioned against',
    ['cautioned against'],
    '*Caution against + -ing*.',
  ],
  [
    'mc',
    'Independent labs failed to _______ the original biomarker findings.',
    'Verbo típico en metodología científica.',
    [
      '[[replicate|replicar]]',
      '[[repeat|menos formal]]',
      '[[redo|informal]]',
    ],
    0,
    '*Replicate* findings.',
  ],
  [
    'mc',
    'The commentary _______ earlier claims about a unitary diagnostic entity.',
    'Colocación fija de cuestionamiento.',
    [
      '[[called into question|cuestionó]]',
      '[[called to question|no idiomático]]',
      '[[called on question|incorrecto]]',
    ],
    0,
    '*Call into question*.',
  ],
  [
    'mc',
    '_______ the modest effect size, the intervention was cost-effective at population scale.',
    'Preposición de concesión ante sustantivo.',
    [
      '[[Despite|a pesar de]]',
      '[[Although|aunque + cláusula]]',
      '[[However|sin embargo]]',
    ],
    0,
    '*Despite* + noun phrase.',
  ],
  [
    'fb',
    'The drug is promising, _______ expensive and access remains uneven.',
    'Concesión con *albeit* (una palabra).',
    ['[[albeit|aunque / si bien]]', '[[although|requiere cláusula]]', '[[though|pospuesto]]'],
    'albeit',
    ['albeit'],
    '*Albeit* + adjective phrase.',
  ],
  [
    'mc',
    '_______ widespread scepticism, the guideline was adopted within a year.',
    'Concesión formal con *Notwithstanding*.',
    [
      '[[Notwithstanding|no obstante]]',
      '[[Despite of|incorrecto]]',
      '[[Although|incorrecto antes de sustantivo]]',
    ],
    0,
    '*Notwithstanding* + noun phrase.',
  ],
  [
    'fb',
    '_______ _______ the anecdote may be, it cannot replace controlled trials.',
    'Patrón *However + adjetivo + sujeto + may be* (dos palabras).',
    ['[[However compelling|por muy convincente que]]', '[[Whatever compelling|incorrecto]]', '[[Although compelling|incorrecto]]'],
    'However compelling',
    ['However compelling'],
    '*However + adjective + S + may be*.',
  ],
  [
    'mc',
    'While acknowledging limitations, the authors _______ for broader implementation.',
    'Concesión con *While + -ing* + verbo principal.',
    [
      '[[argued|argumentaron]]',
      '[[arguing|forma incorrecta como principal]]',
      '[[argue|tiempo incorrecto]]',
    ],
    0,
    '*While + -ing* clause.',
  ],
  [
    'fb',
    '_______ all its flaws, the study shifted clinical practice.',
    'Concesión con *For all* (dos palabras).',
    ['[[For all|A pesar de todo]]', '[[In all|incorrecto]]', '[[With all|parcialmente posible]]'],
    'For all',
    ['For all'],
    '*For all + noun phrase*.',
  ],
];

function grammarTopic(i) {
  if (i < 6) return 'nominal-clauses';
  if (i < 12) return 'reporting-verbs';
  return 'concession';
}

gRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u7-g${n}`;
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
    'The study distinguished between _______ pain and pain that tracks identifiable tissue damage.',
    'El estudio distinguió entre dolor _____ y dolor que sigue a daño tisular identificable.',
    ['[[chronic|crónico]]', '[[chronicity|cronificación]]', '[[chronicle|crónica]]'],
    0,
    '*Chronic* pain.',
  ],
  [
    '_______ — the coexistence of two or more conditions — complicates treatment planning.',
    'La _____ — coexistencia de dos o más condiciones — complica la planificación del tratamiento.',
    ['[[Comorbidity|Comorbilidad]]', '[[Camaraderie|camaradería]]', '[[Commodity|mercancía]]'],
    0,
    '*Comorbidity*.',
  ],
  [
    'The trial\'s primary endpoint was _______ — whether patients could return to work within eight weeks.',
    'El criterio principal del ensayo era _____ — si los pacientes podían volver al trabajo en ocho semanas.',
    ['[[functional|funcional]]', '[[function|función]]', '[[functionary|funcionario]]'],
    0,
    '*Functional* endpoint.',
  ],
  [
    'Long-term _______ is often a more realistic goal than complete symptom elimination in anxiety disorders.',
    'La _____ a largo plazo suele ser un objetivo más realista que la eliminación total de síntomas.',
    ['[[remission|remisión]]', '[[permission|permiso]]', '[[emission|emisión]]'],
    0,
    '*Remission*.',
  ],
  [
    'The _______ of depression involves multiple pathways — biological, psychological and social.',
    'La _____ de la depresión implica múltiples vías — biológicas, psicológicas y sociales.',
    ['[[aetiology|etiología]]', '[[analogy|analogía]]', '[[anthology|antología]]'],
    0,
    '*Aetiology*.',
  ],
  [
    '_______ harm refers to unintended damage caused by medical treatment itself.',
    'El daño _____ se refiere al daño no intencionado causado por el propio tratamiento médico.',
    ['[[Iatrogenic|iatrogénico]]', '[[Idiomatic|idiomático]]', '[[Ionic|iónico]]'],
    0,
    '*Iatrogenic*.',
  ],
  [
    '_______ control trials remain the gold standard for causal inference about efficacy.',
    'Los ensayos controlados _____ siguen siendo el estándar de oro para la inferencia causal sobre eficacia.',
    ['[[Randomised|aleatorizados]]', '[[Rationalised|racionalizados]]', '[[Random|aleatorio]]'],
    0,
    '*Randomised controlled trial*.',
  ],
  [
    'The _______ effect can still produce measurable symptom change even when the active ingredient is inert.',
    'El efecto _____ puede producir cambio sintomático medible incluso cuando el principio activo es inerte.',
    ['[[placebo|placebo]]', '[[placenta|placenta]]', '[[placement|colocación]]'],
    0,
    '*Placebo* effect.',
  ],
  [
    '_______ — the tendency to seek only confirming evidence — skews self-monitoring of mood apps.',
    'La _____ — buscar solo evidencia confirmatoria — sesga la automonitorización en apps de ánimo.',
    ['[[Confirmation bias|sesgo de confirmación]]', '[[Confirmation buy|falso]]', '[[Conformation|conformación]]'],
    0,
    '*Confirmation bias*.',
  ],
  [
    'Neuroplasticity refers to the brain\'s _______ capacity to reorganise synaptic connections.',
    'La neuroplasticidad se refiere a la capacidad _____ del cerebro a reorganizar conexiones sinápticas.',
    ['[[adaptive|adaptativa]]', '[[adoptive|adoptiva]]', '[[adeptive|falso]]'],
    0,
    '*Adaptive* capacity.',
  ],
  [
    '_______-based therapies focus on changing thought patterns linked to distress.',
    'Las terapias _____ se centran en cambiar patrones de pensamiento vinculados al malestar.',
    ['[[Cognitive|cognitivo]]', '[[Cognition|cognición (sust.)]]', '[[Cognate|cognado]]'],
    0,
    '*Cognitive* behavioural therapy frame.',
  ],
  [
    'The psychiatrist adjusted the _______ to minimise sedation while preserving efficacy.',
    'El psiquiatra ajustó la _____ para minimizar la sedación mientras preservaba la eficacia.',
    ['[[dosage|dosis]]', '[[dosageable|no es adjetivo estándar]]', '[[doseful|falso]]'],
    0,
    '*Dosage*.',
  ],
  [
    '_______ distress is a normal reaction to adversity; it is not necessarily a disorder.',
    'La angustia _____ es una reacción normal a la adversidad; no es necesariamente un trastorno.',
    ['[[Psychological|psicológica]]', '[[Physiological|fisiológica]]', '[[Psychiatric|psiquiátrica]]'],
    0,
    '*Psychological* distress.',
  ],
  [
    '_______ sampling in surveys can bias prevalence estimates if certain groups are harder to reach.',
    'El muestreo _____ en encuestas puede sesgar la prevalencia si ciertos grupos son más difíciles de alcanzar.',
    ['[[Convenience|por conveniencia]]', '[[Convenient|conveniente]]', '[[Convection|convección]]'],
    0,
    '*Convenience* sampling.',
  ],
  [
    'The _______ followed patients for a decade to capture late-emerging side effects.',
    'El estudio _____ siguió a pacientes una década para captar efectos secundarios tardíos.',
    ['[[longitudinal|longitudinal]]', '[[latitudinal|latitudinal]]', '[[longitudinalism|falso]]'],
    0,
    '*Longitudinal* study.',
  ],
  [
    '_______ health integration aims to treat mental and physical conditions as interconnected.',
    'La integración de salud _____ pretende tratar condiciones mentales y físicas como interconectadas.',
    ['[[Whole-person|de la persona completa]]', '[[Wholemeal|integral pan]]', '[[Wholesale|mayorista]]'],
    0,
    '*Whole-person* health.',
  ],
  [
    'Sleep _______ is linked to impaired glucose regulation and heightened inflammation.',
    'La _____ del sueño se relaciona con regulación glucémica alterada e inflamación mayor.',
    ['[[deprivation|privación]]', '[[depravation|depravación]]', '[[derivation|derivación]]'],
    0,
    '*Sleep deprivation*.',
  ],
  [
    'The _______ triage nurse screened patients for suicidal ideation.',
    'El enfermero de _____ en urgencias cribó a pacientes con ideación suicida.',
    ['[[emergency|urgencias]]', '[[emergence|emergencia]]', '[[emergencyless|falso]]'],
    0,
    '*Emergency* triage.',
  ],
];

vRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u7-v${n}`;
  noteEs(id, row[1]);
  vocabulary.push(
    exMC(id, 'health-vocabulary', 'Vocabulary', V_TITLE, INS.vocab, row[0], row[2], row[3], row[4])
  );
});
const reading = [];
readQuotes.forEach((row, i) => {
  reading.push(
    exRead(
      `c1-u7-r${i + 1}`,
      'health-reading',
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
      `c1-u7-l${i + 1}`,
      'health-listening',
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
  const id = `c1-u7-w${i + 1}`;
  noteEs(id, wTooltipsEs[i]);
  writing.push(
    exWrite(id, 'health-essay', 'Writing', W_TITLE, INS.write, row[0], row[1], row[2], row[3])
  );
});

const speaking = [];
sRows.forEach((row, i) => {
  const id = `c1-u7-s${i + 1}`;
  noteEs(id, sTooltipsEs[i]);
  speaking.push(exMC(id, 'speaking-health', 'Speaking', S_TITLE, INS.speak, row[0], row[1], row[2], row[3]));
});

const all = [...grammar, ...vocabulary, ...reading, ...listening, ...writing, ...speaking];

const header = `/**
 * C1 Unit 7 — Health and Mind
 * Módulo 1 (bloque temático): Persona, sociedad y entorno
 * Grammar: Nominal clauses; reporting verbs; concession
 *
 * Modelo ampliado: 18 ejercicios por lección × 6 lecciones = 108 ítems.
 * Patrón de IDs: c1-u7-g1..g18, v1..v18, r1..r18, l1..l18, w1..w18, s1..s18.
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = '[[Health and Mind|Salud y mente]]';

export const UNIT_7_EXERCISES: Exercise[] = [
`;

const footer = `
];
`;

fs.writeFileSync(OUT_UNIT, header + all.join(',\n') + footer, 'utf8');

const esKeys = Object.keys(questionEs).sort();
const esBody = esKeys.map((k) => `  ${j(k)}:\n    ${j(questionEs[k])},`).join('\n');

const esFile = `/**
 * Traducción al español (tooltip TranslatedText) — unidad C1 7.
 * Gramática, vocabulario, writing y speaking (reading/listening: [[|]] en unit-7).
 */
export const C1_UNIT7_QUESTION_ES: Record<string, string> = {
${esBody}
};
`;

fs.writeFileSync(OUT_ES, esFile, 'utf8');

console.log('Wrote', OUT_UNIT, '(' + all.length + ' exercises)');
console.log('Wrote', OUT_ES, '(' + esKeys.length + ' ES strings)');

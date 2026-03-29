#!/usr/bin/env node
/**
 * Genera unit-6.ts (108 ítems) y c1-unit6-question-es.ts (tooltips g,v,w,s).
 * Uso: node scripts/generate-c1-unit6-108.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readQuotes, listenQuotes, wRows, wTooltipsEs, sRows, sTooltipsEs } from './u6-work-economy-data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_UNIT = path.join(__dirname, '../src/lib/course/c1/unit-6.ts');
const OUT_ES = path.join(__dirname, '../src/lib/course/c1/c1-unit6-question-es.ts');

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
  '[[Grammar|Gramática]]: [[It-structures, Cause/Result & Advanced Modals|Estructuras con it, causa/resultado y modales avanzados]]';
const V_TITLE = '[[Vocabulary|Vocabulario]]: [[Work and Economy|Trabajo y economía]]';
const R_TITLE = '[[Reading|Lectura]]: [[Work and Economy|Trabajo y economía]]';
const L_TITLE = '[[Listening|Comprensión auditiva]]: [[Economy in discourse|La economía en el discurso]]';
const W_TITLE = '[[Writing|Escritura]]: [[Academic writing — work & economy|Escritura académica — trabajo y economía]]';
const S_TITLE = '[[Speaking|Expresión oral]]: [[Discussion — work & economy|Discusión — trabajo y economía]]';

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
    '_______ that persistent labour shortages are reshaping wage bargaining across the sector.',
    'Estructura impersonal C1: ¿qué encaja al inicio?',
    [
      '[[It is widely argued|Se argumenta ampliamente que]]',
      '[[This is argued|Esto se argumenta]]',
      '[[People argue it|People argue it]]',
    ],
    0,
    'Impersonal *It is widely argued that…*.',
  ],
  [
    'fb',
    '_______ _______ that the merger would trigger layoffs was clear months before the vote.',
    'Completa con estructura enfática con *it* (tres palabras en el enunciado: dos huecos).',
    ['[[It was obvious|era obvio]]', '[[Was it obvious|orden incorrecto]]', '[[Obvious it was|no inglés estándar]]'],
    'It was obvious',
    ['It was obvious'],
    '*It was obvious that…*.',
  ],
  [
    'mc',
    '_______ to bear in mind that headline unemployment masks regional disparities.',
    'Registro académico con *it* + infinitivo.',
    [
      '[[It is important|Es importante]]',
      '[[Important is|inversión no idiomática aquí]]',
      '[[There is important|incorrecto]]',
    ],
    0,
    '*It is important to bear in mind that…*.',
  ],
  [
    'mc',
    'The board found _______ difficult to reconcile conflicting forecasts from two departments.',
    'Estructura *find + it + adj + to-infinitive*.',
    [
      '[[it|it]]',
      '[[this|this]]',
      '[[that|that]]',
    ],
    0,
    '*Find it + adjective + to-infinitive*.',
  ],
  [
    'fb',
    '_______ _______ no surprise that auditors flagged the subsidiary\'s off-balance-sheet liabilities.',
    'Patrón *It came as…* / *It is…* (dos palabras).',
    ['[[It was|fue]]', '[[Was it|pregunta]]', '[[There was|hay]]'],
    'It was',
    ['It was'],
    '*It was no surprise that…*.',
  ],
  [
    'mc',
    '_______ whether central banks can engineer a soft landing without renewed inflation spikes.',
    'Estructura con *remain* + *to be seen*.',
    [
      '[[It remains to be seen|Resta por ver si]]',
      '[[It sees to remain|orden incorrecto]]',
      '[[There remains to see|no idiomático]]',
    ],
    0,
    '*It remains to be seen whether…*.',
  ],
  [
    'fb',
    'The fiscal stimulus was poorly targeted; _______, inequality widened despite headline growth.',
    'Conector de resultado formal (una palabra).',
    ['[[consequently|en consecuencia]]', '[[despite|a pesar de]]', '[[although|aunque]]'],
    'consequently',
    ['consequently'],
    '*Consequently* = result.',
  ],
  [
    'mc',
    'The currency weakened; _______, import prices surged within weeks.',
    'Conector de resultado (registro académico).',
    [
      '[[hence|por tanto]]',
      '[[whereas|mientras que]]',
      '[[unless|a menos que]]',
    ],
    0,
    '*Hence* = for this reason.',
  ],
  [
    'fb',
    '_______ _______ of high energy costs, the plant remained profitable through process innovation.',
    'Completa *In spite of* (dos palabras).',
    ['[[In spite|a pesar]]', '[[Despite of|incorrecto]]', '[[Although of|incorrecto]]'],
    'In spite',
    ['In spite'],
    '*In spite of* + noun phrase.',
  ],
  [
    'mc',
    '_______ the hike in interest rates, mortgage applications held steady in urban centres.',
    'Preposición de contraste ante sustantivo.',
    [
      '[[Despite|a pesar de]]',
      '[[Although|aunque]]',
      '[[However|sin embargo]]',
    ],
    0,
    '*Despite* + noun phrase.',
  ],
  [
    'mc',
    'Exports fell sharply; _______, the trade balance improved as imports fell even faster.',
    'Conector de resultado (sinónimo formal de *so*).',
    [
      '[[Therefore|por tanto]]',
      '[[Although|aunque]]',
      '[[Unless|a menos que]]',
    ],
    0,
    '*Therefore* links evidence to result.',
  ],
  [
    'fb',
    '_______ _______ a weaker currency, exporters regained modest market share in Q3.',
    'Completa con *Due to* o *Owing to* (dos palabras).',
    ['[[Owing to|debido a]]', '[[Thanks for|incorrecto]]', '[[Because for|incorrecto]]'],
    'Owing to',
    ['Owing to', 'Due to'],
    '*Owing to* / *Due to* + noun phrase.',
  ],
  [
    'fb',
    'The board _______ _______ the warning signs before the liquidity crunch — analysts had flagged leverage months earlier.',
    'Crítica a una acción pasada no realizada (dos palabras).',
    ['[[should have heeded|debería haber atendido]]', '[[should heed|presente]]', '[[must have heeded|deducción equivocada]]'],
    'should have heeded',
    ['should have heeded'],
    '*Should have + past participle* = criticism.',
  ],
  [
    'mc',
    'The CFO _______ the covenant breach earlier — cash flows had been negative for two quarters.',
    'Crítica retrospectiva con modal + have + pp.',
    [
      '[[should have disclosed|debería haber revelado]]',
      '[[should disclose|presente]]',
      '[[must disclose|obligación presente]]',
    ],
    0,
    '*Should have disclosed*.',
  ],
  [
    'fb',
    'Investors _______ _______ _______ panic; the dip proved short-lived once intervention was announced.',
    'Tres palabras: *needn\'t have* + participio.',
    ['[[needn\'t have panicked|no hacía falta haber entrado en pánico]]', '[[must not panic|incorrecto]]', '[[should not panic|incorrecto]]'],
    "needn't have panicked",
    ["needn't have panicked"],
    "*Needn't have + past participle* = unnecessary past reaction.",
  ],
  [
    'mc',
    'The rally _______ been driven by short covering rather than fresh fundamentals.',
    'Deducción lógica en pasado: *must have*.',
    [
      '[[must have|debe haber sido]]',
      '[[should have|debería haber]]',
      '[[might have|pudo haber]]',
    ],
    0,
    'Epistemic *must have* for strong past inference.',
  ],
  [
    'fb',
    'With better timing, the startup _______ _______ venture debt on less punitive terms.',
    'Pasado irreal con *could have* (dos palabras).',
    ['[[could have raised|podría haber obtenido]]', '[[could raise|presente]]', '[[can have raised|incorrecto]]'],
    'could have raised',
    ['could have raised'],
    '*Could have + pp* = past possibility missed.',
  ],
  [
    'mc',
    'The regulator _______ intervened before retail investors piled into opaque derivatives.',
    'Obligación moral retrospectiva.',
    [
      '[[ought to have|debería haber (más formal)]]',
      '[[ought to intervene|presente]]',
      '[[must have intervened|deducción]]',
    ],
    0,
    '*Ought to have + pp*.',
  ],
];

function grammarTopic(i) {
  if (i < 6) return 'it-structures';
  if (i < 12) return 'cause-result';
  return 'advanced-modals';
}

gRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u6-g${n}`;
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
    'The fintech struggled with _______ once daily transactions exceeded early projections.',
    'La fintech tuvo problemas de _____ cuando las transacciones diarias superaron las previsiones iniciales.',
    ['[[scalability|escalabilidad]]', '[[sensibility|sensibilidad]]', '[[scarcity|escasez]]'],
    0,
    '*Scalability*.',
  ],
  [
    '_______ pressure from activist shareholders forced a strategic U-turn at the AGM.',
    'La presión de los _____ forzó un giro estratégico en la junta.',
    ['[[Shareholder|accionista]]', '[[Stakeholder|interesado]]', '[[Sharemilker|falso]]'],
    0,
    '*Shareholder* activism.',
  ],
  [
    'The central bank raised rates to cool _______ without tipping the economy into recession.',
    'El banco central subió tipos para enfriar la _____ sin llevar la economía a recesión.',
    ['[[inflation|inflación]]', '[[information|información]]', '[[inflection|inflexión]]'],
    0,
    '*Inflation*.',
  ],
  [
    '_______ policy decisions — tax and spend — are politically contested in election years.',
    'Las decisiones de política _____ — fiscal — se disputan en años electorales.',
    ['[[Fiscal|fiscal]]', '[[Physical|física]]', '[[Facial|facial]]'],
    0,
    '*Fiscal policy*.',
  ],
  [
    'High _______ ratios left the conglomerate vulnerable when credit markets tightened.',
    'Altos ratios de _____ dejaron al conglomerado vulnerable al endurecer los mercados de crédito.',
    ['[[leverage|apalancamiento]]', '[[leverageable|apalancable]]', '[[lever|palanca]]'],
    0,
    '*Leverage*.',
  ],
  [
    '_______ easing programmes flooded markets with liquidity after the crisis.',
    'Los programas de relajación _____ inundaron los mercados de liquidez tras la crisis.',
    ['[[Quantitative|cuantitativa]]', '[[Qualitative|cualitativa]]', '[[Quantity|cantidad]]'],
    0,
    '*Quantitative easing*.',
  ],
  [
    'The _______ account deficit widened as imports outpaced exports.',
    'El déficit de la cuenta _____ se amplió al superar las importaciones a las exportaciones.',
    ['[[current|corriente]]', '[[currency|moneda]]', '[[curious|curioso]]'],
    0,
    '*Current account*.',
  ],
  [
    '_______ investors seek stable dividends rather than speculative gains.',
    'Los inversores _____ buscan dividendos estables más que ganancias especulativas.',
    ['[[Risk-averse|aversos al riesgo]]', '[[Risk-loving|amantes del riesgo]]', '[[Risk-free|libres de riesgo]]'],
    0,
    '*Risk-averse*.',
  ],
  [
    '_______ workers on platforms often lack paid sick leave and predictable schedules.',
    'Los trabajadores _____ en plataformas a menudo carecen de baja pagada y horarios previsibles.',
    ['[[Gig|gig / colaborativos]]', '[[Big|grandes]]', '[[Giggle|risita]]'],
    0,
    '*Gig economy*.',
  ],
  [
    'The _______ market rewarded defensive stocks as growth forecasts dimmed.',
    'El mercado _____ recompensó valores defensivos al empeorar las previsiones de crecimiento.',
    ['[[bear|bajista]]', '[[bull|alcista]]', '[[beer|cerveza]]'],
    0,
    '*Bear market*.',
  ],
  [
    '_______ pay transparency laws aim to narrow unexplained wage gaps.',
    'Las leyes de transparencia _____ pretenden reducir brechas salariales inexplicadas.',
    ['[[Mandatory|obligatoria]]', '[[Mandarin|mandarín]]', '[[Mandating|mandating]]'],
    0,
    '*Mandatory* pay reporting.',
  ],
  [
    'The merger cleared _______ review after the parties divested overlapping assets.',
    'La fusión superó la revisión _____ tras desinvertir activos solapados.',
    ['[[antitrust|antitrust]]', '[[antique|antiguo]]', '[[antibody|anticuerpo]]'],
    0,
    '*Antitrust*.',
  ],
  [
    '_______ guidance for the next quarter disappointed analysts expecting stronger margins.',
    'La orientación _____ para el próximo trimestre decepcionó a analistas que esperaban márgenes mayores.',
    ['[[Forward|prospectiva]]', '[[Foreword|prólogo]]', '[[Forwards|delanteros]]'],
    0,
    '*Forward guidance*.',
  ],
  [
    '_______ restructuring allowed the airline to shed debt but angered unions.',
    'La reestructuración _____ permitió a la aerolínea reducir deuda pero enfureció a los sindicatos.',
    ['[[Pre-packaged|preconcertada]]', '[[Pre-paid|prepagada]]', '[[Pre-cooked|precocinada]]'],
    0,
    '*Pre-packaged* restructuring (context).',
  ],
  [
    '_______ parity theories link exchange rates to relative inflation differentials.',
    'Las teorías de paridad _____ relacionan tipos de cambio con diferenciales inflacionarios.',
    ['[[Purchasing power|poder adquisitivo]]', '[[Purchasing only|solo compra]]', '[[Pursuing power|falso]]'],
    0,
    '*Purchasing power parity*.',
  ],
  [
    'The CEO\'s _______ package drew scrutiny when layoffs were announced the same week.',
    'El paquete de _____ del CEO atrajo escrutinio al anunciarse despidos la misma semana.',
    ['[[compensation|remuneración]]', '[[compensationless|no existe]]', '[[compensatory|compensatorio]]'],
    0,
    '*Compensation package*.',
  ],
  [
    '_______ chains snarled during the pandemic, exposing single-source dependencies.',
    'Las cadenas de _____ se enredaron en la pandemia, exponiendo dependencias de un solo proveedor.',
    ['[[Supply|suministro]]', '[[Supper|cena]]', '[[Suppliant|suplicante]]'],
    0,
    '*Supply chain*.',
  ],
  [
    '_______ easing rhetoric from the Fed moved bond yields before any vote.',
    'El tono más _____ de la Fed movió los rendimientos de bonos antes de cualquier votación.',
    ['[[Dovish|palomita / dovish]]', '[[Doveish|error ortográfico]]', '[[Dwarfish|enano]]'],
    0,
    '*Dovish* (monetary policy).',
  ],
];

vRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u6-v${n}`;
  noteEs(id, row[1]);
  vocabulary.push(
    exMC(id, 'work-vocabulary', 'Vocabulary', V_TITLE, INS.vocab, row[0], row[2], row[3], row[4])
  );
});
const reading = [];
readQuotes.forEach((row, i) => {
  reading.push(
    exRead(
      `c1-u6-r${i + 1}`,
      'work-economy-reading',
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
      `c1-u6-l${i + 1}`,
      'work-economy-listening',
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
  const id = `c1-u6-w${i + 1}`;
  noteEs(id, wTooltipsEs[i]);
  writing.push(
    exWrite(id, 'economy-essay', 'Writing', W_TITLE, INS.write, row[0], row[1], row[2], row[3])
  );
});

const speaking = [];
sRows.forEach((row, i) => {
  const id = `c1-u6-s${i + 1}`;
  noteEs(id, sTooltipsEs[i]);
  speaking.push(exMC(id, 'speaking-work', 'Speaking', S_TITLE, INS.speak, row[0], row[1], row[2], row[3]));
});

const all = [...grammar, ...vocabulary, ...reading, ...listening, ...writing, ...speaking];

const header = `/**
 * C1 Unit 6 — Work and Economy
 * Módulo 1 (bloque temático): Persona, sociedad y entorno
 * Grammar: It-structures; cause/result linkers; advanced modals
 *
 * Modelo ampliado: 18 ejercicios por lección × 6 lecciones = 108 ítems.
 * Patrón de IDs: c1-u6-g1..g18, v1..v18, r1..r18, l1..l18, w1..w18, s1..s18.
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = '[[Work and Economy|Trabajo y economía]]';

export const UNIT_6_EXERCISES: Exercise[] = [
`;

const footer = `
];
`;

fs.writeFileSync(OUT_UNIT, header + all.join(',\n') + footer, 'utf8');

const esKeys = Object.keys(questionEs).sort();
const esBody = esKeys.map((k) => `  ${j(k)}:\n    ${j(questionEs[k])},`).join('\n');

const esFile = `/**
 * Traducción al español (tooltip TranslatedText) — unidad C1 6.
 * Gramática, vocabulario, writing y speaking (reading/listening: [[|]] en unit-6).
 */
export const C1_UNIT6_QUESTION_ES: Record<string, string> = {
${esBody}
};
`;

fs.writeFileSync(OUT_ES, esFile, 'utf8');

console.log('Wrote', OUT_UNIT, '(' + all.length + ' exercises)');
console.log('Wrote', OUT_ES, '(' + esKeys.length + ' ES strings)');

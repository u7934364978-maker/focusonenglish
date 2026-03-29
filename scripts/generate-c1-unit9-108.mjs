#!/usr/bin/env node
/**
 * Genera unit-9.ts (108 ítems) y c1-unit9-question-es.ts (tooltips g,v,w,s).
 * Uso: node scripts/generate-c1-unit9-108.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readQuotes, listenQuotes, wRows, wTooltipsEs, sRows, sTooltipsEs } from './u9-media-data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_UNIT = path.join(__dirname, '../src/lib/course/c1/unit-9.ts');
const OUT_ES = path.join(__dirname, '../src/lib/course/c1/c1-unit9-question-es.ts');

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
  '[[Grammar|Gramática]]: [[Distancing, Impersonal & Clefts|Distanciamiento, impersonal y escindidas]]';
const V_TITLE = '[[Vocabulary|Vocabulario]]: [[Media and Information|Medios e información]]';
const R_TITLE = '[[Reading|Lectura]]: [[Media and Information|Medios e información]]';
const L_TITLE =
  '[[Listening|Comprensión auditiva]]: [[Media in discourse|Los medios en el discurso]]';
const W_TITLE =
  '[[Writing|Escritura]]: [[Academic writing — media|Escritura académica — medios]]';
const S_TITLE = '[[Speaking|Expresión oral]]: [[Discussion — media|Discusión — medios]]';

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
    'The dossier _______ _______ _______ compiled by opposition researchers months before the leak.',
    'Pasiva de rumores: *be said to have been* + participio.',
    [
      '[[is said to have been|se dice que ha sido]]',
      '[[is said having been|forma incorrecta]]',
      '[[said to have been|falta auxiliar]]',
    ],
    0,
    '*Is said to have been + V3*.',
  ],
  [
    'fb',
    'It _______ _______ the footage was staged to discredit eyewitnesses.',
    'Distanciamiento: *It is alleged that* (dos palabras).',
    ['[[is alleged|se alega]]', '[[is alleging|tiempo incorrecto]]', '[[alleged is|orden incorrecto]]'],
    'is alleged',
    ['is alleged'],
    '*It is alleged that…*.',
  ],
  [
    'mc',
    'Staff _______ _______ _______ briefed with a doctored translation before the segment aired.',
    'Pasiva de informantes: *be reported to have been*.',
    [
      '[[are reported to have been|se informa que han sido]]',
      '[[are reported having been|incorrecto]]',
      '[[reported to have been|falta be]]',
    ],
    0,
    '*Are reported to have been*.',
  ],
  [
    'fb',
    'The CEO _______ _______ _______ misquoted in several tabloid headlines.',
    'Patrón *be believed to have been* (tres palabras).',
    ['[[is believed to have been|se cree que ha sido]]', '[[is believe to have been|forma incorrecta]]', '[[believed to have been|falta auxiliar]]'],
    'is believed to have been',
    ['is believed to have been'],
    '*Believed to have been*.',
  ],
  [
    'mc',
    '_______ the leaked emails are authentic has not been established in court.',
    'Cláusula nominal de incertidumbre al inicio.',
    [
      '[[Whether|Si / si es cierto que]]',
      '[[That|That]]',
      '[[If|If no como sujeto estándar]]',
    ],
    0,
    '*Whether* as subject clause.',
  ],
  [
    'fb',
    'The presenter _______ _______ _______ forced to apologise for the on-screen chyron error.',
    'Distanciamiento: *be said to have been* (tres palabras).',
    ['[[is said to have been|se dice que ha sido]]', '[[is said having been|incorrecto]]', '[[said to have been|falta be]]'],
    'is said to have been',
    ['is said to have been'],
    '*Said to have been*.',
  ],
  [
    'mc',
    'There _______ _______ _______ be widespread unease about synthetic media in election coverage.',
    'Construcción impersonal *There is thought to be*.',
    [
      '[[is thought to|se cree que]]',
      '[[are thought to|concordancia incorrecta]]',
      '[[is thinking to|forma incorrecta]]',
    ],
    0,
    '*There is thought to be*.',
  ],
  [
    'fb',
    'There _______ _______ _______ little consensus on how to label AI-generated images.',
    'Impersonal: *There appears to be* (tres palabras tras *There*).',
    ['[[appears to be|parece haber]]', '[[appear to be|concordancia incorrecta]]', '[[is appearing to be|incorrecto]]'],
    'appears to be',
    ['appears to be'],
    '*There appears to be*.',
  ],
  [
    'mc',
    'There _______ _______ _______ strong evidence that coordinated inauthentic behaviour amplified the hashtag.',
    'Patrón *There is said to be*.',
    [
      '[[is said to be|se dice que hay]]',
      '[[are said to be|concordancia incorrecta]]',
      '[[is said being|incorrecto]]',
    ],
    0,
    '*There is said to be*.',
  ],
  [
    'fb',
    '_______ _______ _______ understood that editors reviewed the pull quote before publication.',
    'Matiz *It is widely* + participio (tres palabras).',
    ['[[It is widely|se ampliamente]]', '[[It widely is|orden incorrecto]]', '[[There is widely|incorrecto]]'],
    'It is widely',
    ['It is widely'],
    '*It is widely understood that…*.',
  ],
  [
    'mc',
    '_______ unlikely that any single moderator can catch every harmful variant.',
    'Hedging impersonal con *It may be*.',
    [
      '[[It may be|puede que sea]]',
      '[[There may be|estructura distinta]]',
      '[[It may being|incorrecto]]',
    ],
    0,
    '*It may be that…*.',
  ],
  [
    'fb',
    '_______ _______ _______ suggested that outrage travels faster than corrections online.',
    'Impersonal *It has been suggested that* (tres palabras iniciales).',
    ['[[It has been|se ha]]', '[[It have been|concordancia incorrecta]]', '[[There has been|estructura distinta]]'],
    'It has been',
    ['It has been'],
    '*It has been suggested that…*.',
  ],
  [
    'mc',
    '_______ audiences need from public broadcasters is transparent sourcing, not hotter takes.',
    'Pseudo-clivada con *what* como complemento preposicional.',
    [
      '[[What|Lo que]]',
      '[[That|That]]',
      '[[Which|Which]]',
    ],
    0,
    '*What audiences need is…*.',
  ],
  [
    'fb',
    '_______ _______ the union objected to was the anonymity of management sources, not the story itself.',
    'Clivada *What … was* (dos palabras).',
    ['[[What was|Qué fue lo que]]', '[[Which was|referente incorrecto]]', '[[That was|incorrecto]]'],
    'What was',
    ['What was'],
    '*What X was* cleft.',
  ],
  [
    'mc',
    '_______ was an unverified screenshot that set off the harassment campaign.',
    'Clivada enfática *It was … that*.',
    [
      '[[It|Fue]]',
      '[[What|What]]',
      '[[There|There]]',
    ],
    0,
    '*It was X that…*.',
  ],
  [
    'fb',
    '_______ _______ _______ through a joint newsroom investigation that the rumour collapsed.',
    'Clivada enfática con *only* (tres palabras).',
    ['[[It was only|solo fue]]', '[[It was just|matiz distinto]]', '[[There was only|incorrecto]]'],
    'It was only',
    ['It was only'],
    '*It was only through… that…*.',
  ],
  [
    'mc',
    '_______ is increasingly hard to deny is that engagement rewards sensational headlines.',
    'Doble clivada con *what*.',
    [
      '[[What|Lo que]]',
      '[[That|That]]',
      '[[It|It]]',
    ],
    0,
    '*What is hard to deny is that…*.',
  ],
  [
    'fb',
    '_______ _______ not the paywall but the teaser line that angered loyal subscribers.',
    'Clivada *It was not X but Y* (dos palabras).',
    ['[[It was|Fue]]', '[[What was|incorrecto aquí]]', '[[There was|incorrecto]]'],
    'It was',
    ['It was'],
    '*It was not A but B that…*.',
  ],
];

function grammarTopic(i) {
  if (i < 6) return 'distancing-language';
  if (i < 12) return 'impersonal-constructions';
  return 'advanced-cleft';
}

gRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u9-g${n}`;
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
    'State-sponsored _______ differs from misinformation in that it is spread deliberately to mislead.',
    'La _____ patrocinada por el Estado difiere de la desinformación en que se difunde deliberadamente para engañar.',
    ['[[disinformation|desinformación maliciosa]]', '[[misinformation|información errónea sin mala fe]]', '[[propaganda|propaganda (matiz distinto)]]'],
    0,
    '*Disinformation* = deliberate falsehood.',
  ],
  [
    'Personalised feeds can trap users in _______ _______ where dissenting views rarely appear.',
    'Los feeds personalizados pueden atrapar a usuarios en _____ _____ donde rara vez aparecen visiones disidentes.',
    ['[[echo chambers|cámaras de eco]]', '[[news studios|platós de noticias]]', '[[press rooms|salas de prensa]]'],
    0,
    '*Echo chambers*.',
  ],
  [
    '_______ _______ describe environments where algorithms hide disconfirming content from users.',
    'Las _____ _____ describen entornos donde los algoritmos ocultan contenido que contradice creencias previas.',
    ['[[Filter bubbles|Burbujas de filtro]]', '[[Soap bubbles|burbujas de jabón]]', '[[Sound bubbles|falso]]'],
    0,
    '*Filter bubbles*.',
  ],
  [
    'Tabloid sites often rely on _______ headlines that exaggerate or distort the story.',
    'Los sitios sensacionalistas a menudo apelan a titulares _____ que exageran o distorsionan la historia.',
    ['[[clickbait|cebo de clics]]', '[[clickbite|error]]', '[[clickable|clicable]]'],
    0,
    '*Clickbait*.',
  ],
  [
    'A convincing _______ video can undermine trust in genuine footage within hours.',
    'Un vídeo _____ convincente puede socavar la confianza en imágenes auténticas en horas.',
    ['[[deepfake|deepfake / vídeo sintético]]', '[[handshake|apretón de manos]]', '[[feedback|retroalimentación]]'],
    0,
    '*Deepfake*.',
  ],
  [
    'The clip went _______ before fact-checkers could publish a debunk.',
    'El clip se hizo _____ antes de que los verificadores pudieran publicar una desmentida.',
    ['[[viral|viral]]', '[[bacterial|bacteriano]]', '[[verbal|verbal]]'],
    0,
    '*Go viral*.',
  ],
  [
    'Independent outlets _______ dubious claims against primary documents before publishing.',
    'Los medios independientes _____ afirmaciones dudosas con documentos primarios antes de publicar.',
    ['[[corroborate|corroboran]]', '[[decorate|decoran]]', '[[corrode|corroen]]'],
    0,
    '*Corroborate*.',
  ],
  [
    'After errors surfaced, the paper issued a front-page _______.',
    'Tras salir a la luz errores, el periódico publicó una _____ en portada.',
    ['[[retraction|retractación / desmentido formal]]', '[[retractioning|no existe]]', '[[attraction|atracción]]'],
    0,
    '*Retraction*.',
  ],
  [
    'The _______ defended the outlet\'s right to protect confidential sources.',
    'La _____ defendió el derecho del medio a proteger fuentes confidenciales.',
    ['[[editorial line|línea editorial]]', '[[editorial lineation|falso]]', '[[edible line|falso]]'],
    0,
    '*Editorial line*.',
  ],
  [
    'A hard _______ limits access to investigative pieces for non-subscribers.',
    'Un _____ duro limita el acceso a reportajes de investigación para quienes no están suscritos.',
    ['[[paywall|muro de pago]]', '[[paywell|error]]', '[[payroll|nómina]]'],
    0,
    '*Paywall*.',
  ],
  [
    'The _______ argued for stricter platform liability without calling for censorship.',
    'El _____ abogó por una responsabilidad más estricta de las plataformas sin pedir censura.',
    ['[[op-ed|artículo de opinión]]', '[[op-edo|error]]', '[[opedal|falso]]'],
    0,
    '*Op-ed*.',
  ],
  [
    '_______ _______ can reveal when a file was last modified or where it was captured.',
    'Los _____ _____ pueden revelar cuándo se modificó un archivo por última vez o dónde se capturó.',
    ['[[Embedded metadata|Metadatos incrustados]]', '[[Embedded metal|falso]]', '[[Embodied data|falso]]'],
    0,
    '*Embedded metadata*.',
  ],
  [
    '_______ _______ treats outrage as a predictable driver of engagement.',
    'La _____ _____ trata la indignación como motor predecible del engagement.',
    ['[[Algorithmic amplification|Amplificación algorítmica]]', '[[Algebraic amplification|falso]]', '[[Allegoric amplification|falso]]'],
    0,
    '*Algorithmic amplification*.',
  ],
  [
    '_______ _______ flooded the hashtag within minutes of the leak.',
    'Las _____ _____ inundaron el hashtag minutos después de la filtración.',
    ['[[Coordinated bot networks|Redes de bots coordinadas]]', '[[Coordinated boat networks|falso]]', '[[Coordinated boy networks|falso]]'],
    0,
    '*Bot networks*.',
  ],
  [
    '_______ reporting from conflict zones carries unique ethical trade-offs.',
    'El periodismo _____ en zonas de conflicto conlleva dilemas éticos singulares.',
    ['[[Embedded|integrado / a embedded]]', '[[Embodied|encarnado]]', '[[Embalmed|embalsamado]]'],
    0,
    '*Embedded* journalism.',
  ],
  [
    'Editors rejected the piece for _______ _______ that misrepresented the study\'s conclusions.',
    'Los editores rechazaron el texto por _____ _____ que tergiversaban las conclusiones del estudio.',
    ['[[sensationalist framing|encuadre sensacionalista]]', '[[sensationalist farming|falso]]', '[[sensationalist warming|falso]]'],
    0,
    '*Sensationalist framing*.',
  ],
  [
    'Transparent _______ _______ helps readers judge whether a claim is primary or recycled.',
    'La _____ _____ transparente ayuda a los lectores a juzgar si una afirmación es primaria o reciclada.',
    ['[[source attribution|atribución de fuentes]]', '[[source automation|falso]]', '[[sauce attribution|falso]]'],
    0,
    '*Source attribution*.',
  ],
  [
    'Public broadcasters are expected to uphold _______ _______ even under political pressure.',
    'Se espera que los medios públicos mantengan la _____ _____ incluso bajo presión política.',
    ['[[editorial independence|independencia editorial]]', '[[editorial indifference|indiferencia]]', '[[editorial indigestion|falso]]'],
    0,
    '*Editorial independence*.',
  ],
];

vRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u9-v${n}`;
  noteEs(id, row[1]);
  vocabulary.push(
    exMC(id, 'media-vocabulary', 'Vocabulary', V_TITLE, INS.vocab, row[0], row[2], row[3], row[4])
  );
});
const reading = [];
readQuotes.forEach((row, i) => {
  reading.push(
    exRead(
      `c1-u9-r${i + 1}`,
      'media-reading',
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
      `c1-u9-l${i + 1}`,
      'media-listening',
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
  const id = `c1-u9-w${i + 1}`;
  noteEs(id, wTooltipsEs[i]);
  writing.push(
    exWrite(id, 'global-essay', 'Writing', W_TITLE, INS.write, row[0], row[1], row[2], row[3])
  );
});

const speaking = [];
sRows.forEach((row, i) => {
  const id = `c1-u9-s${i + 1}`;
  noteEs(id, sTooltipsEs[i]);
  speaking.push(exMC(id, 'speaking-media', 'Speaking', S_TITLE, INS.speak, row[0], row[1], row[2], row[3]));
});

const all = [...grammar, ...vocabulary, ...reading, ...listening, ...writing, ...speaking];

const header = `/**
 * C1 Unit 9 — Media and Information
 * Módulo 1 (bloque temático): Persona, sociedad y entorno
 * Grammar: Distancing language; impersonal constructions; advanced clefts
 *
 * Modelo ampliado: 18 ejercicios por lección × 6 lecciones = 108 ítems.
 * Patrón de IDs: c1-u9-g1..g18, v1..v18, r1..r18, l1..l18, w1..w18, s1..s18.
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = '[[Media and Information|Medios e información]]';

export const UNIT_9_EXERCISES: Exercise[] = [
`;

const footer = `
];
`;

fs.writeFileSync(OUT_UNIT, header + all.join(',\n') + footer, 'utf8');

const esKeys = Object.keys(questionEs).sort();
const esBody = esKeys.map((k) => `  ${j(k)}:\n    ${j(questionEs[k])},`).join('\n');

const esFile = `/**
 * Traducción al español (tooltip TranslatedText) — unidad C1 9.
 * Gramática, vocabulario, writing y speaking (reading/listening: [[|]] en unit-9).
 */
export const C1_UNIT9_QUESTION_ES: Record<string, string> = {
${esBody}
};
`;

fs.writeFileSync(OUT_ES, esFile, 'utf8');

console.log('Wrote', OUT_UNIT, '(' + all.length + ' exercises)');
console.log('Wrote', OUT_ES, '(' + esKeys.length + ' ES strings)');

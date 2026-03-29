#!/usr/bin/env node
/**
 * Genera unit-3.ts (108 ítems) y c1-unit3-question-es.ts (tooltips g,v,w,s).
 * Uso: node scripts/generate-c1-unit3-108.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readQuotes, listenQuotes, wRows, wTooltipsEs, sRows, sTooltipsEs } from './u3-science-data.mjs';


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_UNIT = path.join(__dirname, '../src/lib/course/c1/unit-3.ts');
const OUT_ES = path.join(__dirname, '../src/lib/course/c1/c1-unit3-question-es.ts');

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

const G_TITLE = '[[Grammar|Gramática]]: [[Mixed Conditionals|Condicionales mixtos]]';
const V_TITLE = '[[Vocabulary|Vocabulario]]: [[Science and Technology|Ciencia y tecnología]]';
const R_TITLE = '[[Reading|Lectura]]: [[Science and Technology|Ciencia y tecnología]]';
const L_TITLE = '[[Listening|Comprensión auditiva]]: [[Science in discourse|Ciencia en el discurso]]';
const W_TITLE = '[[Writing|Escritura]]: [[Academic writing — STEM|Escritura académica — STEM]]';
const S_TITLE = '[[Speaking|Expresión oral]]: [[Discussion — science|Discusión — ciencia]]';

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
    'If she _______ the research grant, she would be a professor now.',
    'Si hubiera conseguido la beca de investigación, ahora sería profesora. ¿Qué forma encaja en el condicional mixto (pasado → presente)?',
    [
      '[[had received|hubiera recibido / past perfect]]',
      '[[received|recibió / pasado simple]]',
      '[[has received|ha recibido / presente perfecto]]',
    ],
    0,
    'Mixed: *If + past perfect*, *would + base* (present result).',
  ],
  [
    'fb',
    'If I had studied biomedical engineering, I ____ ____ a clinical trial coordinator today.',
    'Si hubiera estudiado ingeniería biomédica, hoy sería coordinador de ensayos clínicos. Completa el resultado presente.',
    ['[[would be|sería]]', '[[would have been|habría sido]]', '[[will be|será]]'],
    'would be',
    ['would be'],
    'Past unreal condition → present hypothetical result.',
  ],
  [
    'mc',
    'If we _______ the sensors earlier, the model would not be drifting now.',
    'Si hubiéramos calibrado los sensores antes, el modelo no estaría derivando ahora. ¿Qué tiempo va en la protasis?',
    [
      '[[had calibrated|hubiéramos calibrado]]',
      '[[calibrate|calibramos / presente]]',
      '[[have calibrated|hemos calibrado]]',
    ],
    0,
    'Past perfect condition + present continuous result.',
  ],
  [
    'mc',
    'Which sentence is a correct mixed conditional (past condition → past result of present state)?',
    '¿Qué oración es un condicional mixto correcto (condición pasada → resultado pasado de un estado presente)?',
    [
      '[[If you had warned me, I would have backed up the dataset.|Tercer condicional puro (pasado → pasado).]]',
      '[[If you had warned me, I would not be panicking about the lost files now.|Si me hubieras avisado, no estaría ahora en pánico por los archivos perdidos.]]',
      '[[If you warn me, I will back up the dataset.|Primer condicional.]]',
    ],
    1,
    'Past condition + *would + not + be + -ing* (present result).',
  ],
  [
    'fb',
    'Were the ethics review stricter, fewer questionable papers ____ ____ published last year.',
    'Si la revisión ética fuera más estricta, se habrían publicado menos artículos dudosos el año pasado. Completa la apódosis.',
    ['[[would have been|habrían sido]]', '[[would be|serían]]', '[[had been|habían sido]]'],
    'would have been',
    ['would have been'],
    '*Were + subject + comparative* (present unreal) + past result.',
  ],
  [
    'mc',
    'Had the protocol been preregistered, we _______ this replication crisis now.',
    'Si el protocolo se hubiera preregistrado, no estaríamos ahora en esta crisis de replicación. ¿Qué forma sigue a *Had the protocol been…*?',
    [
      '[[would not be facing|no estaríamos enfrentando]]',
      '[[will not face|no enfrentaremos]]',
      '[[would not have faced|no habríamos enfrentado]]',
    ],
    0,
    '*Had + past participle* inversion + present result.',
  ],
  [
    'fb',
    'If it weren\'t for this confound, the effect sizes ____ ____ more convincing.',
    'Si no fuera por esta variable confusora, los tamaños del efecto serían más convincentes. Completa con *would* + adjetivo.',
    ['[[would be|serían]]', '[[would have been|habrían sido]]', '[[are|son]]'],
    'would be',
    ['would be'],
    '*If it weren\'t for* + present counterfactual consequence.',
  ],
  [
    'mc',
    'I _______ more confident in the algorithm now if you had shared the training logs.',
    'Confiaría más en el algoritmo ahora si hubieras compartido los registros de entrenamiento. ¿Qué encaja al inicio?',
    [
      '[[would be|estaría / would be]]',
      '[[would have been|habría estado]]',
      '[[am|estoy]]',
    ],
    0,
    'Present state result (*would be*) of past failure to share.',
  ],
  [
    'mc',
    'If the telescope _______ funded on time, we would have spectroscopic data by now.',
    'Si el telescopio se hubiera financiado a tiempo, ya tendríamos datos espectroscópicos. ¿Qué forma verbal completa la protasis?',
    [
      '[[had been|hubiera sido / been funded]]',
      '[[was|fue]]',
      '[[has been|ha sido]]',
    ],
    0,
    'Past perfect passive in the condition.',
  ],
  [
    'fb',
    'If he ____ ____ statistics seriously, his preprint would not be attracting these critiques today.',
    'Si se hubiera tomado en serio la estadística, su preprint no estaría ahora atrayendo estas críticas. Completa *If he ____ ____*.',
    ['[[had taken|had taken]]', '[[took|took]]', '[[takes|takes]]'],
    'had taken',
    ['had taken'],
    'Past perfect + present progressive result.',
  ],
  [
    'mc',
    'Which mixed conditional best expresses a present regret about a past decision?',
    '¿Qué condicional mixto expresa mejor un arrepentimiento actual por una decisión pasada?',
    [
      '[[If I accepted the postdoc, I will be happy.|incorrecto]]',
      '[[If I had accepted the postdoc, I would be working in a better-equipped lab now.|Si hubiera aceptado el postdoc, ahora trabajaría en un laboratorio mejor equipado.]]',
      '[[If I accept the postdoc, I would work there.|mezcla incorrecta]]',
    ],
    1,
    'Classic mix: past perfect + *would + be + -ing*.',
  ],
  [
    'fb',
    'Unless the firmware ____ ____ patched last month, the rover would still be offline now.',
    'A menos que el firmware se hubiera parcheado el mes pasado, el rover seguiría ahora fuera de línea. Completa la protasis.',
    ['[[had been|had been]]', '[[was|was]]', '[[is|is]]'],
    'had been',
    ['had been'],
    '*Unless + past perfect passive* + present result.',
  ],
  [
    'mc',
    'If the vaccine trial _______ larger, public trust would be higher today.',
    'Si el ensayo de la vacuna hubiera sido más grande, la confianza pública sería mayor hoy. ¿Qué opción es correcta?',
    [
      '[[had been|hubiera sido]]',
      '[[was|fue]]',
      '[[has been|ha sido]]',
    ],
    0,
    'Past perfect *had been* + comparative adjective.',
  ],
  [
    'mc',
    'Choose the sentence that correctly mixes a present unreal condition with a past result:',
    'Elige la oración que mezcla bien una condición irreal presente con un resultado pasado:',
    [
      '[[If I were less busy, I would have finished the literature review yesterday.|Si estuviera menos ocupado, habría terminado ayer la revisión bibliográfica.]]',
      '[[If I am less busy, I finish the review.|incorrecto]]',
      '[[If I had been less busy, I would finish yesterday.|tiempos incoherentes]]',
    ],
    0,
    '*If + past simple (unreal present)* + *would have + past participle*.',
  ],
  [
    'fb',
    'If climate models ____ ____ more accurate a decade ago, policymakers would be acting faster now.',
    'Si los modelos climáticos hubieran sido más precisos hace una década, los responsables políticos actuarían más rápido ahora. Completa *If climate models ____ ____*.',
    ['[[had been|had been]]', '[[were|were]]', '[[are|are]]'],
    'had been',
    ['had been'],
    'Past perfect + present progressive/infinitive result.',
  ],
  [
    'mc',
    'If you _______ the IRB paperwork, you wouldn\'t be blocked from recruiting participants now.',
    'Si hubieras enviado el papeleo al comité de ética, no estarías ahora bloqueado para reclutar participantes. ¿Qué forma verbal completa la condición?',
    [
      '[[had submitted|hubieras enviado]]',
      '[[submitted|enviaste]]',
      '[[have submitted|has enviado]]',
    ],
    0,
    'Past perfect for completed non-action → present block.',
  ],
  [
    'mc',
    'Which option avoids the mixed-conditional error?',
    '¿Qué opción evita el error típico del condicional mixto?',
    [
      '[[If I knew Python, I would have automated this pipeline.|mezcla incoherente de knew + would have]]',
      '[[If I had known Python, I would have automated this pipeline last year.|tercer condicional coherente]]',
      '[[If I had known Python, I would know how to automate this pipeline now.|Si hubiera sabido Python, sabría ahora cómo automatizar este pipeline.]]',
    ],
    2,
    'Mix: past unreal knowledge → present ability (*would know*).',
  ],
  [
    'fb',
    'If I ____ ____ your lab director, I would not be approving this rushed protocol.',
    'Si yo fuera tu director de laboratorio, no estaría aprobando este protocolo apresurado. Completa *If I ____ ____*.',
    ['[[were|were]]', '[[had been|had been]]', '[[am|am]]'],
    'were',
    ['were'],
    '*If I were* (present unreal role) + *would not be + -ing*.',
  ],
];

gRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u3-g${n}`;
  noteEs(id, row[2]);
  if (row[0] === 'mc') {
    grammar.push(
      exMC(id, 'mixed-conditionals', 'Grammar', G_TITLE, INS.choose, row[1], row[3], row[4], row[5])
    );
  } else {
    grammar.push(
      exFB(id, 'mixed-conditionals', 'Grammar', G_TITLE, INS.complete, row[1], row[3], row[4], row[5], row[6])
    );
  }
});

const vocabulary = [];
const vRows = [
  [
    'The team formulated a testable _______ before running the experiment.',
    'El equipo formuló una hipótesis contrastable antes de ejecutar el experimento.',
    ['[[hypothesis|hipótesis]]', '[[hypnosis|hipnosis]]', '[[hyperbole|hipérbole]]'],
    0,
    'Scientific method: *hypothesis*.',
  ],
  [
    '______ evidence from controlled trials carries more weight than anecdote.',
    'La evidencia empírica de ensayos controlados pesa más que el anécdota.',
    ['[[Empirical|Empírica]]', '[[Imperial|Imperial]]', '[[Impetuous|Impetuosa]]'],
    0,
    '*Empirical* = observation-based.',
  ],
  [
    'The study failed to _______ when another lab repeated the protocol.',
    'El estudio no se replicó cuando otro laboratorio repitió el protocolo.',
    ['[[replicate|replicar]]', '[[duplicate|duplicar (tono informal)]]', '[[photocopy|fotocopiar]]'],
    0,
    'Replication crisis keyword.',
  ],
  [
    '______ review filters manuscripts before publication in many journals.',
    'La revisión por pares filtra los manuscritos antes de la publicación en muchas revistas.',
    ['[[Peer|Por pares / Peer]]', '[[Pier|Muelle]]', '[[Pear|Pera]]'],
    0,
    '*Peer review*.',
  ],
  [
    'The _______ section describes materials, software versions and statistical tests.',
    'La sección de metodología describe materiales, versiones de software y pruebas estadísticas.',
    ['[[methodology|metodología]]', '[[mythology|mitología]]', '[[pathology|patología]]'],
    0,
    'Methods reporting.',
  ],
  [
    '______ learning algorithms adjust weights from labelled training data.',
    'Los algoritmos de aprendizaje supervisado ajustan pesos a partir de datos de entrenamiento etiquetados.',
    ['[[Supervised|Supervisado]]', '[[Superstitious|Supersticioso]]', '[[Superfluous|Superfluo]]'],
    0,
    'ML term: *supervised learning*.',
  ],
  [
    'The _______ describes how well the model generalises to unseen cases.',
    'La validación describe cuán bien generaliza el modelo a casos no vistos.',
    ['[[validation|validación]]', '[[vacation|vacaciones]]', '[[violation|violación]]'],
    0,
    'Train/validation split.',
  ],
  [
    '______ engineering aims to modify genomes with targeted nucleases.',
    'La ingeniería genética pretende modificar genomas con nucleasas dirigidas.',
    ['[[Genetic|Genética]]', '[[Generic|Genérica]]', '[[Generous|Generosa]]'],
    0,
    '*Genetic engineering*.',
  ],
  [
    'The _______ principle urges caution when harm is plausible but uncertain.',
    'El principio de precaución aconseja cautela cuando el daño es plausible pero incierto.',
    ['[[precautionary|de precaución]]', '[[precarious|precario]]', '[[preliminary|preliminar]]'],
    0,
    'Policy/science: *precautionary principle*.',
  ],
  [
    '______ warming refers to long-term rise in global mean surface temperature.',
    'El calentamiento global se refiere al aumento a largo plazo de la temperatura media superficial.',
    ['[[Global|Global]]', '[[Globular|Globular]]', '[[Glorious|Glorioso]]'],
    0,
    '*Global warming*.',
  ],
  [
    '______ technology could factor large integers faster than classical hardware for some tasks.',
    'La computación cuántica podría factorizar enteros grandes más rápido que el hardware clásico en algunas tareas.',
    ['[[Quantum|Cuántica]]', '[[Quarter|Cuarto]]', '[[Quarrelsome|Reidor]]'],
    0,
    '*Quantum computing*.',
  ],
  [
    'The payload was placed in low Earth _______ to reduce launch energy.',
    'La carga útil se colocó en órbita terrestre baja para reducir la energía de lanzamiento.',
    ['[[orbit|órbita]]', '[[orbituary|obituario (distractor)]]', '[[orchid|orquídea]]'],
    0,
    'Space vocabulary.',
  ],
  [
    '______ medicine tailors treatment using genomic and biomarker data.',
    'La medicina de precisión adapta el tratamiento con datos genómicos y de biomarcadores.',
    ['[[Precision|De precisión]]', '[[Precious|Preciosa]]', '[[Prehistoric|Prehistórica]]'],
    0,
    '*Precision medicine*.',
  ],
  [
    '______ leakage from thawing permafrost could amplify climate feedbacks.',
    'La fuga de metano del permafrost desgelado podría amplificar los retroalimentos climáticos.',
    ['[[Methane|Metano]]', '[[Methadone|Metadona]]', '[[Metal|Metal]]'],
    0,
    'Greenhouse gas.',
  ],
  [
    '______ learning finds structure in data without explicit labels.',
    'El aprendizaje no supervisado encuentra estructura en datos sin etiquetas explícitas.',
    ['[[Unsupervised|No supervisado]]', '[[Unsubstantiated|Infundado]]', '[[Unsolicited|No solicitado]]'],
    0,
    '*Unsupervised learning*.',
  ],
  [
    'The _______ interval quantifies uncertainty around the estimated effect.',
    'El intervalo de confianza cuantifica la incertidumbre en torno al efecto estimado.',
    ['[[confidence|confianza]]', '[[conference|conferencia]]', '[[confidential|confidencial]]'],
    0,
    'Statistics: *confidence interval*.',
  ],
  [
    '______ biology designs novel genetic circuits in living cells.',
    'La biología sintética diseña circuitos genéticos novedosos en células vivas.',
    ['[[Synthetic|Sintética]]', '[[Sympathetic|Compasiva]]', '[[Syndetic|Conjuntiva (raro)]]'],
    0,
    '*Synthetic biology*.',
  ],
  [
    '______ security aims to protect systems from unauthorised access and tampering.',
    'La ciberseguridad pretende proteger los sistemas frente a accesos no autorizados y manipulación.',
    ['[[Cyber|ciber-]]', '[[Cider|sidra]]', '[[Cipher|cifra (sust.)]]'],
    0,
    '*Cybersecurity*.',
  ],
];

vRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u3-v${n}`;
  noteEs(id, row[1]);
  vocabulary.push(exMC(id, 'science-technology-vocabulary', 'Vocabulary', V_TITLE, INS.vocab, row[0], row[2], row[3], row[4]));
});

const reading = [];
readQuotes.forEach((row, i) => {
  reading.push(
    exRead(
      `c1-u3-r${i + 1}`,
      'science-reading',
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
      `c1-u3-l${i + 1}`,
      'science-listening',
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
  const id = `c1-u3-w${i + 1}`;
  noteEs(id, wTooltipsEs[i]);
  writing.push(
    exWrite(id, 'argumentative-essay', 'Writing', W_TITLE, INS.write, row[0], row[1], row[2], row[3])
  );
});

const speaking = [];
sRows.forEach((row, i) => {
  const id = `c1-u3-s${i + 1}`;
  noteEs(id, sTooltipsEs[i]);
  speaking.push(exMC(id, 'speaking-debate', 'Speaking', S_TITLE, INS.speak, row[0], row[1], row[2], row[3]));
});

const all = [...grammar, ...vocabulary, ...reading, ...listening, ...writing, ...speaking];

const header = `/**
 * C1 Unit 3 — Science and Technology
 * Módulo 1 (bloque temático): Persona, sociedad y entorno
 * Grammar: Mixed conditionals
 *
 * Modelo ampliado: 18 ejercicios por lección × 6 lecciones = 108 ítems.
 * Patrón de IDs: c1-u3-g1..g18, v1..v18, r1..r18, l1..l18, w1..w18, s1..s18.
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = '[[Science and Technology|Ciencia y tecnología]]';

export const UNIT_3_EXERCISES: Exercise[] = [
`;

const footer = `
];
`;

fs.writeFileSync(OUT_UNIT, header + all.join(',\n') + footer, 'utf8');

const esKeys = Object.keys(questionEs).sort();
const esBody = esKeys.map((k) => `  ${j(k)}:\n    ${j(questionEs[k])},`).join('\n');

const esFile = `/**
 * Traducción al español (tooltip TranslatedText) — unidad C1 3.
 * Gramática, vocabulario, writing y speaking (reading/listening: [[|]] en unit-3).
 */
export const C1_UNIT3_QUESTION_ES: Record<string, string> = {
${esBody}
};
`;

fs.writeFileSync(OUT_ES, esFile, 'utf8');

console.log('Wrote', OUT_UNIT, '(' + all.length + ' exercises)');
console.log('Wrote', OUT_ES, '(' + esKeys.length + ' ES strings)');

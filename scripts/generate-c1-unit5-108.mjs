#!/usr/bin/env node
/**
 * Genera unit-5.ts (108 ítems) y c1-unit5-question-es.ts (tooltips g,v,w,s).
 * Uso: node scripts/generate-c1-unit5-108.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readQuotes, listenQuotes, wRows, wTooltipsEs, sRows, sTooltipsEs } from './u5-arts-data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_UNIT = path.join(__dirname, '../src/lib/course/c1/unit-5.ts');
const OUT_ES = path.join(__dirname, '../src/lib/course/c1/c1-unit5-question-es.ts');

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
  '[[Grammar|Gramática]]: [[Narrative Tenses & Nominalisation|Tiempos narrativos y nominalización]]';
const V_TITLE = '[[Vocabulary|Vocabulario]]: [[Arts and Culture|Arte y cultura]]';
const R_TITLE = '[[Reading|Lectura]]: [[Arts and Culture|Arte y cultura]]';
const L_TITLE = '[[Listening|Comprensión auditiva]]: [[Arts in discourse|Las artes en el discurso]]';
const W_TITLE = '[[Writing|Escritura]]: [[Academic writing — arts|Escritura académica — artes]]';
const S_TITLE = '[[Speaking|Expresión oral]]: [[Discussion — arts|Discusión — artes]]';

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
    'By the time the exhibition opened to the public, the curators _______ on the final labels for weeks.',
    'Pasado: ¿qué tiempo expresa acción prolongada antes de un momento pasado?',
    [
      '[[had been working|habían estado trabajando]]',
      '[[have been working|han estado trabajando]]',
      '[[worked|trabajaron]]',
    ],
    0,
    'Past perfect continuous before a past time reference.',
  ],
  [
    'fb',
    'When the director shouted \'Cut!\', the extras _______ _______ in the rain for nearly an hour.',
    'Completa con past perfect continuous (dos palabras).',
    ['[[had been standing|habían estado de pie]]', '[[stood|estuvieron]]', '[[stand|están]]'],
    'had been standing',
    ['had been standing'],
    'Duration up to a past point: *had been + -ing*.',
  ],
  [
    'mc',
    'She _______ the score only after the committee had approved the commission.',
    'Secuencia de tiempos: la aprobación ya era pasada cuando ella…',
    [
      '[[accepted|aceptó]]',
      '[[accepts|acepta]]',
      '[[will accept|aceptará]]',
    ],
    0,
    'Past simple after past perfect in the subordinate clause.',
  ],
  [
    'fb',
    'The concert hall _______ _______ renovated when the acoustic survey began.',
    'Pasiva continua en pasado (dos palabras).',
    ['[[was being|estaba siendo]]', '[[was been|incorrecto]]', '[[is being|tiempo incorrecto]]'],
    'was being',
    ['was being'],
    'Passive past continuous: *was being + past participle*.',
  ],
  [
    'mc',
    'We _______ the overture when the conductor collapsed on the podium.',
    'Acción en curso interrumpida en el pasado.',
    [
      '[[had just heard|acabábamos de oír / past perfect + just]]',
      '[[heard|oímos / sin matiz de inmediatez]]',
      '[[have just heard|presente perfecto — choque temporal con «collapsed»]]',
    ],
    0,
    '*Had just + past participle* for a very recent past before another past event.',
  ],
  [
    'fb',
    'The biennale _______ _______ record attendance figures until travel restrictions hit.',
    'Past perfect continuous antes de un evento cortante en pasado (dos palabras).',
    ['[[had been posting|había estado registrando]]', '[[posted|registró]]', '[[posts|registra]]'],
    'had been posting',
    ['had been posting'],
    'Past perfect continuous for a trend up to a later past disruption.',
  ],
  [
    'mc',
    'Which sentence uses the historic present for critical immediacy?',
    '¿Qué oración usa el presente histórico con efecto de inmediatez?',
    [
      '[[In her review, the critic walks the reader through each room as if the show were still open.|presente histórico]]',
      '[[In her review, the critic walked the reader…|pasado simple plano]]',
      '[[In her review, the critic has walked…|presente perfecto]]',
    ],
    0,
    'Historic present in arts reviewing.',
  ],
  [
    'fb',
    'The trustees _______ _______ to announce the shortlist when the leak went viral.',
    'Estructura «was/were about to» (tres palabras en el enunciado: dos huecos).',
    ['[[were about|estaban a punto]]', '[[are about|están a punto]]', '[[had about|incorrecto]]'],
    'were about',
    ['were about'],
    '*Were about to* = imminent past intention.',
  ],
  [
    'mc',
    'No sooner _______ the portrait been hung than the museum issued a statement.',
    'Inversión con *No sooner*.',
    [
      '[[had|had]]',
      '[[has|has]]',
      '[[was|was]]',
    ],
    0,
    '*No sooner had + past participle … than*.',
  ],
  [
    'mc',
    'They decided to relocate the collection. → The _______ of the collection proved deeply controversial.',
    'Nominalización del verbo *relocate*.',
    [
      '[[relocation|reubicación]]',
      '[[relocating|forma -ing]]',
      '[[relocated|participio]]',
    ],
    0,
    'Abstract noun: *relocation*.',
  ],
  [
    'fb',
    'The _______ _______ the loan should be extended split the board.',
    'Nominalización: «la propuesta de que…» (una palabra por hueco).',
    ['[[proposal|propuesta]]', '[[proposing|proponiendo]]', '[[proposed|propuesto]]'],
    'proposal that',
    ['proposal that'],
    'Nominalisation + that-clause.',
  ],
  [
    'mc',
    'Which is the most formal rewrite?',
    '¿Qué versión es más formal (nominalización)?',
    [
      '[[The implementation of the policy attracted criticism.|sustantivos abstractos]]',
      '[[They implemented the policy and people criticised it.|cláusulas verbales]]',
      '[[Implementing happened.|vago]]',
    ],
    0,
    'Nominalisation raises register in academic arts writing.',
  ],
  [
    'fb',
    'The _______ _______ government grants forced the festival to programme fewer premieres.',
    'Completa con sustantivo + preposición (dos palabras).',
    ['[[withdrawal of|retirada de]]', '[[withdrawing of|forma incorrecta]]', '[[withdrawn from|participio incorrecto]]'],
    'withdrawal of',
    ['withdrawal of'],
    '*Withdrawal of* + noun phrase.',
  ],
  [
    'mc',
    'The artist\'s _______ to engage with the brief puzzled the selectors.',
    'Nominalización de *refuse*.',
    [
      '[[refusal|negativa / rechazo]]',
      '[[refusing|forma -ing]]',
      '[[refused|participio]]',
    ],
    0,
    '*Refusal to + infinitive*.',
  ],
  [
    'fb',
    'Their _______ of audience demographics informed the marketing campaign.',
    'Nominalización de *analyse* (una palabra).',
    ['[[analysis|análisis]]', '[[analysing|analizando]]', '[[analysed|analizado]]'],
    'analysis',
    ['analysis'],
    '*Analysis of* + noun.',
  ],
  [
    'mc',
    'Public _______ of the casting choices dominated social media within hours.',
    'Nominalización de *criticise*.',
    [
      '[[criticism|crítica]]',
      '[[criticising|forma -ing]]',
      '[[criticised|participio]]',
    ],
    0,
    '*Criticism of* + noun.',
  ],
  [
    'fb',
    'There was widespread _______ _______ the acquisition had been rushed through ethics review.',
    'Nominalización + that-clause (una palabra por hueco).',
    ['[[concern that|preocupación de que]]', '[[concerned that|preocupado de que]]', '[[concerning that|incorrecto]]'],
    'concern that',
    ['concern that'],
    '*Concern that* + clause.',
  ],
  [
    'mc',
    'The museum\'s _______ to digitise fragile negatives will take a decade.',
    'Nominalización de *commit*.',
    [
      '[[commitment|compromiso]]',
      '[[committing|forma -ing]]',
      '[[committed|participio]]',
    ],
    0,
    '*Commitment to* + noun/-ing.',
  ],
];

function grammarTopic(i) {
  return i < 9 ? 'narrative-tenses' : 'nominalisation';
}

gRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u5-g${n}`;
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
    'The director\'s latest film is a _______ — a guaranteed box-office hit with franchise potential.',
    'La última película del director es un _____ — un éxito de taquilla casi seguro con potencial de franquicia.',
    ['[[blockbuster|taquillazo]]', '[[bookbinder|encuadernador]]', '[[bottleneck|cuello de botella]]'],
    0,
    '*Blockbuster*.',
  ],
  [
    'The choreographer\'s _______ blends street dance with classical technique.',
    'La _____ del coreógrafo mezcla danza urbana con técnica clásica.',
    ['[[choreography|coreografía]]', '[[choreograph|verbo]]', '[[choral|coral]]'],
    0,
    '*Choreography*.',
  ],
  [
    'The novel\'s _______ — what is left unsaid between the lines — unsettles complacent readers.',
    'El _____ de la novela — lo que queda sin decir entre líneas — inquieta a lectores complacientes.',
    ['[[subtext|subtexto]]', '[[subtitle|subtítulo]]', '[[subtotal|subtotal]]'],
    0,
    '*Subtext*.',
  ],
  [
    'The museum\'s _______ choices — which works to acquire and how to display them — shape public debate.',
    'Las decisiones _____ del museo — qué obras adquirir y cómo exponerlas — moldean el debate público.',
    ['[[curatorial|curatoriales]]', '[[curious|curiosas]]', '[[curatorially|adv.]]'],
    0,
    '*Curatorial*.',
  ],
  [
    'The painter\'s entire _______ — spanning five decades — will tour three continents.',
    'La _____ completa del pintor — cinco décadas — recorrerá tres continentes.',
    ['[[oeuvre|obra / corpus]]', '[[overture|obertura]]', '[[ovation|ovación]]'],
    0,
    '*Oeuvre*.',
  ],
  [
    'The _______ movement rejected bourgeois taste in favour of radical experiment.',
    'El movimiento _____ rechazó el gusto burgués a favor del experimento radical.',
    ['[[avant-garde|vanguardia]]', '[[rear-guard|retaguardia]]', '[[average|promedio]]'],
    0,
    '*Avant-garde*.',
  ],
  [
    'The gallery\'s summer show is a _______ of the sculptor\'s early work.',
    'La exposición de verano de la galería es una _____ de la obra temprana del escultor.',
    ['[[retrospective|retrospectiva]]', '[[prospective|prospectiva]]', '[[respective|respectiva]]'],
    0,
    '*Retrospective*.',
  ],
  [
    'The _______ of Renaissance princes made possible the careers of artists from Donatello to Titian.',
    'El _____ de los príncipes renacentistas hizo posibles carreras de artistas desde Donatello hasta Tiziano.',
    ['[[patronage|mecenazgo]]', '[[parentage|ascendencia]]', '[[passage|pasaje]]'],
    0,
    '*Patronage*.',
  ],
  [
    'The _______ installation filled the turbine hall with suspended LED strips.',
    'La instalación _____ llenó la sala de turbinas con tiras LED suspendidas.',
    ['[[site-specific|in situ / específica del lugar]]', '[[site-sight|falso]]', '[[cite-specific|falso]]'],
    0,
    '*Site-specific*.',
  ],
  [
    'Film _______ — lighting, lens choice, palette — carries as much meaning as dialogue.',
    'La _____ cinematográfica — iluminación, elección de lente, paleta — aporta tanto sentido como el diálogo.',
    ['[[cinematography|cinematografía]]', '[[cinematograph|aparato antiguo]]', '[[cinema-only|no es término]]'],
    0,
    '*Cinematography*.',
  ],
  [
    'The opera\'s _______ was adapted from a novella critics had dismissed as unfilmable.',
    'El _____ de la ópera se adaptó de una novela corta que los críticos habían descartado como «infilmable».',
    ['[[libretto|libreto]]', '[[library|biblioteca]]', '[[liberal|liberal]]'],
    0,
    '*Libretto*.',
  ],
  [
    'The _______ of the painting — dark figures emerging from deep shadow — is unmistakably Caravaggesque.',
    'El _____ del cuadro — figuras oscuras surgiendo de sombra profunda — es inequívocamente caravaggesco.',
    ['[[chiaroscuro|claroscuro]]', '[[crescendo|crescendo]]', '[[chromosome|cromosoma]]'],
    0,
    '*Chiaroscuro*.',
  ],
  [
    'The theatre\'s _______ arch frames the stage like a painting.',
    'El arco _____ del teatro enmarca el escenario como un cuadro.',
    ['[[proscenium|proscenio]]', '[[protein|proteína]]', '[[prosperity|prosperidad]]'],
    0,
    '*Proscenium*.',
  ],
  [
    'The orchestra\'s _______ this season leans heavily on late Romantic composers.',
    'El _____ de la orquesta esta temporada se inclina hacia compositores del romanticismo tardío.',
    ['[[repertoire|repertorio]]', '[[repetition|repetición]]', '[[reportoire|error ortográfico]]'],
    0,
    '*Repertoire*.',
  ],
  [
    'The Venice _______ attracts curators and collectors from every continent.',
    'La _____ de Venecia atrae a curadores y coleccionistas de todos los continentes.',
    ['[[Biennale|Bienal]]', '[[Biannual|bianual]]', '[[Binocular|binocular]]'],
    0,
    '*Biennale*.',
  ],
  [
    'The composer\'s _______ for percussion alone challenges conventional concert form.',
    'La _____ del compositor solo para percusión desafía la forma de concierto convencional.',
    ['[[composition|composición]]', '[[competition|competición]]', '[[compositioning|no existe]]'],
    0,
    '*Composition*.',
  ],
  [
    'The _______ of colonial-era bronzes has become a diplomatic flashpoint.',
    'La _____ de bronces de la era colonial se ha convertido en un foco diplomático.',
    ['[[restitution|restitución]]', '[[restoration|restauración]]', '[[retribution|retribución]]'],
    0,
    '*Restitution* (of artefacts).',
  ],
  [
    'The play\'s _______ — how scenes are ordered and juxtaposed — delays the revelation until the final minute.',
    'La _____ de la obra — cómo se ordenan y yuxtaponen las escenas — retrasa la revelación hasta el último minuto.',
    ['[[dramaturgy|dramaturgia]]', '[[dramatic|dramático]]', '[[drama-only|no]]'],
    0,
    '*Dramaturgy*.',
  ],
];

vRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u5-v${n}`;
  noteEs(id, row[1]);
  vocabulary.push(
    exMC(id, 'arts-vocabulary', 'Vocabulary', V_TITLE, INS.vocab, row[0], row[2], row[3], row[4])
  );
});
const reading = [];
readQuotes.forEach((row, i) => {
  reading.push(
    exRead(
      `c1-u5-r${i + 1}`,
      'arts-reading',
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
      `c1-u5-l${i + 1}`,
      'arts-listening',
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
  const id = `c1-u5-w${i + 1}`;
  noteEs(id, wTooltipsEs[i]);
  writing.push(
    exWrite(id, 'arts-essay', 'Writing', W_TITLE, INS.write, row[0], row[1], row[2], row[3])
  );
});

const speaking = [];
sRows.forEach((row, i) => {
  const id = `c1-u5-s${i + 1}`;
  noteEs(id, sTooltipsEs[i]);
  speaking.push(exMC(id, 'speaking-arts', 'Speaking', S_TITLE, INS.speak, row[0], row[1], row[2], row[3]));
});

const all = [...grammar, ...vocabulary, ...reading, ...listening, ...writing, ...speaking];

const header = `/**
 * C1 Unit 5 — Arts and Culture
 * Módulo 1 (bloque temático): Persona, sociedad y entorno
 * Grammar: Narrative tenses; nominalisation
 *
 * Modelo ampliado: 18 ejercicios por lección × 6 lecciones = 108 ítems.
 * Patrón de IDs: c1-u5-g1..g18, v1..v18, r1..r18, l1..l18, w1..w18, s1..s18.
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = '[[Arts and Culture|Arte y cultura]]';

export const UNIT_5_EXERCISES: Exercise[] = [
`;

const footer = `
];
`;

fs.writeFileSync(OUT_UNIT, header + all.join(',\n') + footer, 'utf8');

const esKeys = Object.keys(questionEs).sort();
const esBody = esKeys.map((k) => `  ${j(k)}:\n    ${j(questionEs[k])},`).join('\n');

const esFile = `/**
 * Traducción al español (tooltip TranslatedText) — unidad C1 5.
 * Gramática, vocabulario, writing y speaking (reading/listening: [[|]] en unit-5).
 */
export const C1_UNIT5_QUESTION_ES: Record<string, string> = {
${esBody}
};
`;

fs.writeFileSync(OUT_ES, esFile, 'utf8');

console.log('Wrote', OUT_UNIT, '(' + all.length + ' exercises)');
console.log('Wrote', OUT_ES, '(' + esKeys.length + ' ES strings)');

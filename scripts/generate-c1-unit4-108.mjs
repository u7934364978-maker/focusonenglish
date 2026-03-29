#!/usr/bin/env node
/**
 * Genera unit-4.ts (108 ítems) y c1-unit4-question-es.ts (tooltips g,v,w,s).
 * Uso: node scripts/generate-c1-unit4-108.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readQuotes, listenQuotes, wRows, wTooltipsEs, sRows, sTooltipsEs } from './u4-natural-world-data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_UNIT = path.join(__dirname, '../src/lib/course/c1/unit-4.ts');
const OUT_ES = path.join(__dirname, '../src/lib/course/c1/c1-unit4-question-es.ts');

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
  '[[Grammar|Gramática]]: [[Advanced Relative Clauses & Hedging|Oraciones de relativo avanzadas y lenguaje matizado]]';
const V_TITLE = '[[Vocabulary|Vocabulario]]: [[The Natural World|El mundo natural]]';
const R_TITLE = '[[Reading|Lectura]]: [[The Natural World|El mundo natural]]';
const L_TITLE = '[[Listening|Comprensión auditiva]]: [[Nature in discourse|La naturaleza en el discurso]]';
const W_TITLE = '[[Writing|Escritura]]: [[Academic writing — environment|Escritura académica — medio ambiente]]';
const S_TITLE = '[[Speaking|Expresión oral]]: [[Discussion — nature|Discusión — naturaleza]]';

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
    'The catchment, _______ headwater forests have been largely cleared, now suffers flash floods.',
    'La cuenca: ¿qué pronombre relativo enlaza con «headwater forests» de forma posesiva o asociativa?',
    [
      '[[whose|cuyos / cuya cuenca]]',
      '[[which|which (no marca posesión aquí)]]',
      '[[where|where (lugar, no encaja con «forests» como núcleo)]]',
    ],
    0,
    '*Whose headwater forests* = relative possessive.',
  ],
  [
    'fb',
    'The estuary, _______ _______ salinity fluctuates with every tide, is critical nursery habitat.',
    'Estuario: completa con relativo formal de lugar (dos palabras).',
    ['[[in which|en el que]]', '[[that|that (no tras coma en estilo formal)]]', '[[what|what]]'],
    'in which',
    ['in which'],
    'Formal *where*: *in which*.',
  ],
  [
    'mc',
    'The Serengeti migration, _______ spans two sovereign states, frustrates single-country management.',
    '¿Qué relativo encaja en una oración de relativo no definitoria entre comas?',
    [
      '[[which|which]]',
      '[[that|that (poco natural entre comas aquí)]]',
      '[[what|what]]',
    ],
    0,
    'Non-defining: *which*.',
  ],
  [
    'fb',
    'Coastal dunes, _______ _______ many rare orchids depend for moisture, are built over for hotels.',
    'Dunas: completa con preposición + relativo (dos palabras).',
    ['[[on which|en las que]]', '[[which|which]]', '[[where|where]]'],
    'on which',
    ['on which'],
    '*Depend on the dunes* → *dunes on which*.',
  ],
  [
    'mc',
    'The freelance journalist _______ exposé triggered the national park inquiry has received threats.',
    'Periodista: ¿qué relativo une «journalist» con «exposé»?',
    [
      '[[whose|cuyo]]',
      '[[who|who]]',
      '[[whom|whom]]',
    ],
    0,
    '*Whose exposé*.',
  ],
  [
    'fb',
    'Coral reefs, _______ _______ tourism value runs into billions annually, bleach during marine heatwaves.',
    'Arrecifes: completa con relativo posesivo (una palabra).',
    ['[[whose|cuyo]]', '[[which|which]]', '[[what|what]]'],
    'whose',
    ['whose'],
    '*Whose tourism value*.',
  ],
  [
    'mc',
    'Which sentence uses a reduced relative clause correctly?',
    '¿Qué oración usa bien una oración de relativo reducida?',
    [
      '[[The apex predator removed in the 1920s left a trophic vacuum that persists today.|participio pasado como relativo reducido]]',
      '[[The apex predator which removed in the 1920s left…|forma plena incorrecta]]',
      '[[The apex predator removing in the 1920s left…|participio equivocado]]',
    ],
    0,
    'Reduced passive relative: *The predator (which was) removed…*.',
  ],
  [
    'fb',
    'Invasive grasses, _______ _______ shorten fire-return intervals, can transform savanna structure.',
    'Gramíneas invasoras: relativo como sujeto (una palabra).',
    ['[[which|which]]', '[[whom|whom]]', '[[whose|whose]]'],
    'which',
    ['which'],
    '*Which* subject relative.',
  ],
  [
    'mc',
    'The only remaining corridor _______ still links these metapopulations is zoned for a motorway.',
    'Tras *the only …* suele usarse:',
    [
      '[[that|that]]',
      '[[which|which]]',
      '[[what|what]]',
    ],
    0,
    '*The only … that*.',
  ],
  [
    'fb',
    'Pilot rewilding sites, _______ _______ long-term success depends on local tolerance of large carnivores, need stable budgets.',
    'Sitios piloto: completa con *whose* o equivalente (una palabra).',
    ['[[whose|cuyo]]', '[[which|which]]', '[[whom|whom]]'],
    'whose',
    ['whose'],
    '*Whose success depends on…*.',
  ],
  [
    'mc',
    'Thirty-year transect data _______ suggest that butterfly richness is still declining at mid-elevations.',
    'Datos: elige la cohesión matizada más académica (hedging).',
    [
      '[[would appear to|would appear to]]',
      '[[definitely prove|definitely prove]]',
      '[[obviously show|obviously show]]',
    ],
    0,
    '*Would appear to* hedges the claim.',
  ],
  [
    'mc',
    'Palaeoclimate proxies _______ suggest that recent warming is unusually rapid in millennial context, though uncertainty bands remain.',
    'Proxies paleoclimáticos: elige el matiz epistémico más adecuado en registro académico.',
    [
      '[[would appear to|would appear to]]',
      '[[definitively prove|prueban de modo definitivo]]',
      '[[have disproved|han refutado]]',
    ],
    0,
    '*Would appear to* hedges interpretive claims.',
  ],
  [
    'mc',
    'Strategic dam removal _______ restore fish migration, yet sediment pulses and livelihood impacts remain contentious.',
    'Elige la forma que expresa posibilidad sin certeza absoluta.',
    [
      '[[may|may]]',
      '[[will|will]]',
      '[[must|must]]',
    ],
    0,
    '*May* = epistemic possibility.',
  ],
  [
    'mc',
    'Remote sensing shows canopy loss, though analysts _______ stress that cloud cover biases some scenes.',
    'Analistas: matiz prudente.',
    [
      '[[rightly|rightly]]',
      '[[never|never]]',
      '[[falsely|falsely]]',
    ],
    0,
    '*Rightly stress* = appropriate academic caution.',
  ],
  [
    'fb',
    'The orchid _______ _______ to be extinct in the wild resurfaced after a drone survey of cliff niches.',
    'Voz pasiva con infinitivo: dos palabras.',
    ['[[was thought|se creía]]', '[[is thinking|forma incorrecta]]', '[[thought was|orden incorrecto]]'],
    'was thought',
    ['was thought'],
    '*Was thought to be*.',
  ],
  [
    'mc',
    'Microplastic pathways through food webs remain _______ among the least quantified planetary risks.',
    'Elige el matiz epistémico más adecuado.',
    [
      '[[arguably|arguably]]',
      '[[certainly|certainly]]',
      '[[never|never]]',
    ],
    0,
    '*Arguably* softens a strong classification.',
  ],
  [
    'fb',
    'It _______ _______ premature to declare the fishery recovered after only one strong spawning season.',
    'Estructura con *would* para matizar (dos palabras).',
    ['[[would be|would be]]', '[[is|is]]', '[[will be|will be]]'],
    'would be',
    ['would be'],
    '*It would be premature to…*.',
  ],
  [
    'mc',
    'The peatland surface looks homogeneous, _______ probe cores reveal sharp stratigraphic breaks below.',
    'Contraste matizado entre apariencia y evidencia.',
    [
      '[[though|though]]',
      '[[because|because]]',
      '[[unless|unless]]',
    ],
    0,
    '*Though* introduces counter-evidence.',
  ],
];

function grammarTopic(i) {
  return i < 10 ? 'relative-clauses' : 'hedging-language';
}

gRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u4-g${n}`;
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
    'After decades without wolves, elk behaviour changed — a classic _______ cascade.',
    'Tras décadas sin lobos, cambió el comportamiento de los uapitíes: una cascada clásica _____.',
    ['[[trophic|trófica]]', '[[tropical|tropical]]', '[[toxic|tóxica]]'],
    0,
    '*Trophic cascade*.',
  ],
  [
    'The island skink is _______ to this archipelago and found nowhere else naturally.',
    'El eslizón insular es _____ a este archipiélago y no aparece en ningún otro sitio de forma natural.',
    ['[[endemic|endémico]]', '[[epidemic|epidémico]]', '[[endothermic|endotérmico]]'],
    0,
    '*Endemic*.',
  ],
  [
    'Conservationists fenced a _______ zone where cattle could not enter riparian vegetation.',
    'Los conservacionistas cercaron una zona _____ donde el ganado no podía entrar en la vegetación ribereña.',
    ['[[buffer|colchón / buffer]]', '[[buffet|bufé]]', '[[buffering|buffering]]'],
    0,
    '*Buffer zone*.',
  ],
  [
    '_______ species such as zebra mussels can outcompete natives once they breach a waterway.',
    'Especies _____ como el mejillón cebra pueden desplazar a las autóctonas al colonizar una vía fluvial.',
    ['[[Invasive|invasoras]]', '[[Native|nativas]]', '[[Inventive|inventivas]]'],
    0,
    '*Invasive*.',
  ],
  [
    'The _______ stores more carbon per hectare than many tropical forests when water tables stay high.',
    'La _____ almacena más carbono por hectárea que muchos bosques tropicales si el nivel freático se mantiene alto.',
    ['[[peatland|turbera]]', '[[wheatland|tierra de trigo]]', '[[pitland|falso]]'],
    0,
    '*Peatland*.',
  ],
  [
    '_______ connectivity considers not only patches but the quality of the surrounding matrix.',
    'La conectividad _____ considera no solo los parches sino la calidad de la matriz circundante.',
    ['[[Landscape|del paisaje]]', '[[Portrait|retrato]]', '[[Lavender|lavanda]]'],
    0,
    '*Landscape connectivity*.',
  ],
  [
    'Rangers set camera traps along wildlife _______ predicted from least-cost models.',
    'Los guardas colocaron trampas cámara a lo largo de _____ de fauna previstas con modelos de coste mínimo.',
    ['[[corridors|corredores]]', '[[corridas|corridas]]', '[[corrosives|corrosivos]]'],
    0,
    '*Wildlife corridors*.',
  ],
  [
    '_______ fishing quotas alone cannot rebuild stocks if juvenile habitat remains degraded.',
    'Las cuotas de pesca _____ no bastan para recuperar las poblaciones si el hábitat juvenil sigue degradado.',
    ['[[Sustainable|sostenibles]]', '[[Suspicious|sospechosas]]', '[[Sudden|repentinas]]'],
    0,
    '*Sustainable fishing*.',
  ],
  [
    '_______ diversity underpins resilience to pests, drought and climate shocks in agroecosystems.',
    'La diversidad _____ sostiene la resiliencia frente a plagas, sequía y choques climáticos en agroecosistemas.',
    ['[[Agrobiodiversity|agrobiodiversidad]]', '[[Aggravation|agravación]]', '[[Aggrandisement|agrandamiento]]'],
    0,
    '*Agrobiodiversity*.',
  ],
  [
    'The river was _______ to restore longitudinal connectivity for migratory fish.',
    'El río fue _____ para restaurar la conectividad longitudinal de peces migratorios.',
    ['[[un-dammed|desembalsado]]', '[[unarmed|desarmado]]', '[[unaimed|sin puntería]]'],
    0,
    '*Un-dammed* / dam removal context.',
  ],
  [
    '_______ agriculture integrates trees with crops or pasture for microclimate and carbon benefits.',
    'La _____ integra árboles con cultivos o pastos para beneficios microclimáticos y de carbono.',
    ['[[Agroforestry|Agroforestería]]', '[[Aquaculture|acuicultura]]', '[[Agronomy alone|solo agronomía]]'],
    0,
    '*Agroforestry*.',
  ],
  [
    '_______ trawling scrapes seafloor habitats and can take decades to recover.',
    'El arrastre de _____ raspa fondos marinos y puede tardar décadas en recuperarse.',
    ['[[Bottom|fondo]]', '[[Top|superficie]]', '[[Middle|medio]]'],
    0,
    '*Bottom trawling*.',
  ],
  [
    '_______ logging undermines the credibility of certified timber when enforcement is weak.',
    'La tala _____ socava la credibilidad de la madera certificada cuando la aplicación de la ley es débil.',
    ['[[Illegal|ilegal]]', '[[Legal|legal]]', '[[Seasonal|estacional]]'],
    0,
    '*Illegal logging*.',
  ],
  [
    '_______ payments reward landowners for conserving forests that sequester carbon.',
    'Los pagos por _____ retribuyen a propietarios que conservan bosques que secuestran carbono.',
    ['[[Ecosystem service|servicio ecosistémico]]', '[[Ecosystem server|servidor]]', '[[Ecosystem servant|sirviente]]'],
    0,
    '*Ecosystem service* payments.',
  ],
  [
    'The _______ zone where rivers meet seas is highly productive but vulnerable to nutrient loads.',
    'La zona _____ donde ríos y mares se encuentran es muy productiva pero vulnerable a cargas de nutrientes.',
    ['[[estuarine|estuarina]]', '[[mountain|montañosa]]', '[[desert|desértica]]'],
    0,
    '*Estuarine*.',
  ],
  [
    '_______ species are the first to disappear when habitats shrink, often despite small range shifts.',
    'Las especies _____ son las primeras en desaparecer al reducirse el hábitat, a menudo pese a pequeños desplazamientos.',
    ['[[Range-restricted|de rango restringido]]', '[[Range-free|sin rango]]', '[[Range-rover|marca]]'],
    0,
    'Biogeography: *range-restricted*.',
  ],
  [
    '_______ planting with single exotic species often fails to rebuild complex food webs.',
    'La repoblación _____ con una sola especie exótica a menudo no reconstruye redes tróficas complejas.',
    ['[[Monoculture|monocultivo]]', '[[Polyculture|policultivo]]', '[[Agriculture|agricultura genérica]]'],
    0,
    '*Monoculture* planting critique.',
  ],
  [
    '_______ corridors in cities can moderate heat islands if they use native structural diversity.',
    'Los corredores _____ urbanos pueden moderar islas de calor si usan diversidad estructural autóctona.',
    ['[[Green|verdes]]', '[[Grey|grises]]', '[[Red|rojos]]'],
    0,
    '*Green corridors*.',
  ],
];

vRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u4-v${n}`;
  noteEs(id, row[1]);
  vocabulary.push(
    exMC(id, 'environment-vocabulary', 'Vocabulary', V_TITLE, INS.vocab, row[0], row[2], row[3], row[4])
  );
});
const reading = [];
readQuotes.forEach((row, i) => {
  reading.push(
    exRead(
      `c1-u4-r${i + 1}`,
      'natural-world-reading',
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
      `c1-u4-l${i + 1}`,
      'natural-world-listening',
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
  const id = `c1-u4-w${i + 1}`;
  noteEs(id, wTooltipsEs[i]);
  writing.push(
    exWrite(id, 'environment-essay', 'Writing', W_TITLE, INS.write, row[0], row[1], row[2], row[3])
  );
});

const speaking = [];
sRows.forEach((row, i) => {
  const id = `c1-u4-s${i + 1}`;
  noteEs(id, sTooltipsEs[i]);
  speaking.push(exMC(id, 'speaking-nature', 'Speaking', S_TITLE, INS.speak, row[0], row[1], row[2], row[3]));
});

const all = [...grammar, ...vocabulary, ...reading, ...listening, ...writing, ...speaking];

const header = `/**
 * C1 Unit 4 — The Natural World
 * Módulo 1 (bloque temático): Persona, sociedad y entorno
 * Grammar: Advanced relative clauses; hedging language
 *
 * Modelo ampliado: 18 ejercicios por lección × 6 lecciones = 108 ítems.
 * Patrón de IDs: c1-u4-g1..g18, v1..v18, r1..r18, l1..l18, w1..w18, s1..s18.
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = '[[The Natural World|El mundo natural]]';

export const UNIT_4_EXERCISES: Exercise[] = [
`;

const footer = `
];
`;

fs.writeFileSync(OUT_UNIT, header + all.join(',\n') + footer, 'utf8');

const esKeys = Object.keys(questionEs).sort();
const esBody = esKeys.map((k) => `  ${j(k)}:\n    ${j(questionEs[k])},`).join('\n');

const esFile = `/**
 * Traducción al español (tooltip TranslatedText) — unidad C1 4.
 * Gramática, vocabulario, writing y speaking (reading/listening: [[|]] en unit-4).
 */
export const C1_UNIT4_QUESTION_ES: Record<string, string> = {
${esBody}
};
`;

fs.writeFileSync(OUT_ES, esFile, 'utf8');

console.log('Wrote', OUT_UNIT, '(' + all.length + ' exercises)');
console.log('Wrote', OUT_ES, '(' + esKeys.length + ' ES strings)');

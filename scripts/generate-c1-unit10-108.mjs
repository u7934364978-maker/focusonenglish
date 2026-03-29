#!/usr/bin/env node
/**
 * Genera unit-10.ts (108 ítems) y c1-unit10-question-es.ts (tooltips g,v,w,s).
 * Uso: node scripts/generate-c1-unit10-108.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readQuotes, listenQuotes, wRows, wTooltipsEs, sRows, sTooltipsEs } from './u10-philosophy-data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_UNIT = path.join(__dirname, '../src/lib/course/c1/unit-10.ts');
const OUT_ES = path.join(__dirname, '../src/lib/course/c1/c1-unit10-question-es.ts');

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
const V_TITLE =
  '[[Vocabulary|Vocabulario]]: [[Philosophy, Ethics and the Future|Filosofía, ética y el futuro]]';
const R_TITLE =
  '[[Reading|Lectura]]: [[Philosophy, Ethics and the Future|Filosofía, ética y el futuro]]';
const L_TITLE =
  '[[Listening|Comprensión auditiva]]: [[Ethics in discourse|La ética en el discurso]]';
const W_TITLE =
  '[[Writing|Escritura]]: [[Academic writing — ethics|Escritura académica — ética]]';
const S_TITLE =
  '[[Speaking|Expresión oral]]: [[Discussion — philosophy & ethics|Discusión — filosofía y ética]]';

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
    'The white paper _______ _______ _______ drafted by the ethics committee months before the vote.',
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
    'It _______ _______ the dataset was scraped without meaningful consent.',
    'Distanciamiento: *It is alleged that* (dos palabras).',
    ['[[is alleged|se alega]]', '[[is alleging|tiempo incorrecto]]', '[[alleged is|orden incorrecto]]'],
    'is alleged',
    ['is alleged'],
    '*It is alleged that…*.',
  ],
  [
    'mc',
    'Reviewers _______ _______ _______ warned that the safety case assumed stationary deployment conditions.',
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
    'The whistle-blower _______ _______ _______ pressured to withdraw findings on model drift.',
    'Patrón *be believed to have been* (tres palabras).',
    ['[[is believed to have been|se cree que ha sido]]', '[[is believe to have been|forma incorrecta]]', '[[believed to have been|falta auxiliar]]'],
    'is believed to have been',
    ['is believed to have been'],
    '*Believed to have been*.',
  ],
  [
    'mc',
    '_______ conscious experience arises in frontier language models has not been settled empirically.',
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
    'The chair _______ _______ _______ asked to disclose conflicts of interest before the panel voted.',
    'Distanciamiento: *be said to have been* (tres palabras).',
    ['[[is said to have been|se dice que ha sido]]', '[[is said having been|incorrecto]]', '[[said to have been|falta be]]'],
    'is said to have been',
    ['is said to have been'],
    '*Said to have been*.',
  ],
  [
    'mc',
    'There _______ _______ _______ be deep unease about delegating lethal choices to opaque systems.',
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
    'There _______ _______ _______ little agreement on how to weight future persons in present budgets.',
    'Impersonal: *There appears to be* (tres palabras tras *There*).',
    ['[[appears to be|parece haber]]', '[[appear to be|concordancia incorrecta]]', '[[is appearing to be|incorrecto]]'],
    'appears to be',
    ['appears to be'],
    '*There appears to be*.',
  ],
  [
    'mc',
    'There _______ _______ _______ mounting concern that benchmarks gamify the wrong capabilities.',
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
    '_______ _______ _______ understood that the firm rolled back the policy after the ethics audit.',
    'Matiz *It is widely* + participio (tres palabras).',
    ['[[It is widely|se ampliamente]]', '[[It widely is|orden incorrecto]]', '[[There is widely|incorrecto]]'],
    'It is widely',
    ['It is widely'],
    '*It is widely understood that…*.',
  ],
  [
    'mc',
    '_______ hasty to claim that scaling alone dissolves the alignment problem.',
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
    '_______ _______ _______ suggested that humane evaluation suites lag behind competitive frontier races.',
    'Impersonal *It has been suggested that* (tres palabras iniciales).',
    ['[[It has been|se ha]]', '[[It have been|concordancia incorrecta]]', '[[There has been|estructura distinta]]'],
    'It has been',
    ['It has been'],
    '*It has been suggested that…*.',
  ],
  [
    'mc',
    '_______ regulators need from ethicists is testable criteria, not slogan battles.',
    'Pseudo-clivada con *what* como complemento preposicional.',
    [
      '[[What|Lo que]]',
      '[[That|That]]',
      '[[Which|Which]]',
    ],
    0,
    '*What regulators need is…*.',
  ],
  [
    'fb',
    '_______ _______ the committee challenged was the lack of appeal rights, not the safety goal itself.',
    'Clivada *What … was* (dos palabras).',
    ['[[What was|Qué fue lo que]]', '[[Which was|referente incorrecto]]', '[[That was|incorrecto]]'],
    'What was',
    ['What was'],
    '*What X was* cleft.',
  ],
  [
    'mc',
    '_______ was a partisan leak that derailed sober negotiation on liability caps.',
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
    '_______ _______ _______ through adversarial red-teaming that the catastrophic failure mode surfaced.',
    'Clivada enfática con *only* (tres palabras).',
    ['[[It was only|solo fue]]', '[[It was just|matiz distinto]]', '[[There was only|incorrecto]]'],
    'It was only',
    ['It was only'],
    '*It was only through… that…*.',
  ],
  [
    'mc',
    '_______ is difficult to ignore is that incentives shape which risks reach the public agenda first.',
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
    '_______ _______ not cynicism but institutional speed that made oversight cosmetic.',
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
  const id = `c1-u10-g${n}`;
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
    'The essay defends _______ — the view that only outcomes matter when judging right and wrong.',
    'El ensayo defiende el _____ — la tesis de que solo importan las consecuencias al juzgar el bien y el mal.',
    ['[[consequentialism|consecuencialismo]]', '[[deontology|deontología]]', '[[existentialism|existencialismo]]'],
    0,
    '*Consequentialism*.',
  ],
  [
    '_______ ethics stresses duties and rights, sometimes even when aggregate welfare would rise by breaking them.',
    'La ética _____ enfatiza deberes y derechos, a veces aunque el bienestar agregado subiera al violarlos.',
    ['[[Deontological|Deontológica]]', '[[Utilitarian|utilitarista]]', '[[Hedonistic|hedonista]]'],
    0,
    '*Deontological*.',
  ],
  [
    'Ancient thinkers linked flourishing to cultivated character traits rather than rule memorisation — a hallmark of _______ ethics.',
    'Los pensadores antiguos vinculaban el florecimiento humano a rasgos de carácter cultivados, no a memorizar reglas — sello de la ética de las _____.',
    ['[[virtue|virtudes]]', '[[vice|vicios]]', '[[chance|azar]]'],
    0,
    '*Virtue ethics*.',
  ],
  [
    '_______ _______ holds that every event, including moral choices, follows necessarily from prior states of the world.',
    'El _____ _____ sostiene que todo acontecimiento, incluso las elecciones morales, sigue necesariamente de estados previos del mundo.',
    ['[[Hard determinism|Determinismo duro]]', '[[Soft libertarianism|libertarismo blando (matiz distinto)]]', '[[Moral luck|suerte moral]]'],
    0,
    '*Hard determinism*.',
  ],
  [
    '_______ tries to reconcile determinism with moral responsibility by redefining what "could have done otherwise" means.',
    'El _____ intenta conciliar determinismo y responsabilidad moral redefiniendo qué significa «podría haber hecho otra cosa».',
    ['[[Compatibilism|Compatibilismo]]', '[[Incompatibilism|incompatibilismo]]', '[[Solipsism|solipsismo]]'],
    0,
    '*Compatibilism*.',
  ],
  [
    'Philosophers use _______ _______ to test intuitions by stripping away complicating detail.',
    'Los filósofos usan _____ _____ para contrastar intuiciones eliminando detalle que complique.',
    ['[[thought experiments|experimentos mentales]]', '[[field trials|ensayos de campo]]', '[[opinion polls|encuestas de opinión]]'],
    0,
    '*Thought experiments*.',
  ],
  [
    '_______ _______ names the puzzle that you cannot wrong someone who would never exist but for the risky policy you debate.',
    'El _____ _____ nombra el enigma de que no puedes perjudicar a quien no existiría sin la política arriesgada que debatís.',
    ['[[Non-identity problem|Problema de no-identidad]]', '[[Trolley problem|dilema del tranvía]]', '[[Ship of Theseus|barco de Teseo]]'],
    0,
    '*Non-identity problem*.',
  ],
  [
    'Policy discourse on catastrophic AI risk often cites _______ _______ — convergent instrumental drives like self-preservation.',
    'El discurso político sobre riesgo catastrófico de IA cita a menudo la _____ _____ — impulsos instrumentales convergentes como la autopreservación.',
    ['[[instrumental convergence|convergencia instrumental]]', '[[moral licensing|licencia moral]]', '[[virtue signalling|señalización virtuosa]]'],
    0,
    '*Instrumental convergence*.',
  ],
  [
    '_______ _______ occurs when prior good deeds psychologically license later selfish or harmful choices.',
    'La _____ _____ ocurre cuando buenas acciones previas psicológicamente autorizan elecciones egoístas o dañinas después.',
    ['[[Moral licensing|Licencia moral]]', '[[Moral hazard|riesgo moral (matiz distinto)]]', '[[Moral realism|realismo moral]]'],
    0,
    '*Moral licensing*.',
  ],
  [
    '_______ _______ marks testimonial harm when prejudice deflates someone\'s credibility without epistemic grounds.',
    'La _____ _____ marca un daño testimonial cuando el prejuicio hunde la credibilidad de alguien sin base epistémica.',
    ['[[Epistemic injustice|Injusticia epistémica]]', '[[Semantic injustice|injusticia semántica (falso)]]', '[[Aesthetic injustice|injusticia estética (falso)]]'],
    0,
    '*Epistemic injustice*.',
  ],
  [
    '_______ _______ names our blunt affective response to large-scale statistics compared with vivid individual stories.',
    'La _____ _____ nombra nuestra respuesta afectiva tosca ante estadísticas masivas frente a historias individuales vívidas.',
    ['[[Scope insensitivity|Insensibilidad al alcance]]', '[[Moral fatigue|fatiga moral]]', '[[Cognitive ease|fluidez cognitiva]]'],
    0,
    '*Scope insensitivity*.',
  ],
  [
    '_______ acts are praiseworthy yet beyond strict duty, like costly heroism nobody could demand.',
    'Los actos _____ son elogiables pero van más allá del deber estricto, como un heroísmo costoso que nadie puede exigir.',
    ['[[Supererogatory|Supererogatorios]]', '[[Obligatory|obligatorios]]', '[[Impermissible|impermitibles]]'],
    0,
    '*Supererogatory*.',
  ],
  [
    '_______ _______ weighs severe but unlikely catastrophes more heavily than naive expected-value spreadsheets suggest.',
    'El _____ _____ pondera catástrofes graves pero improbables más de lo que sugieren hojas de cálculo ingenuas de valor esperado.',
    ['[[Longtermism|Longtermismo]]', '[[Presentism|presentismo (matiz distinto)]]', '[[Nihilism|nihilismo]]'],
    0,
    '*Longtermism*.',
  ],
  [
    '_______ _______ in finance names incentives to take extra risk when someone else bears the downside.',
    'El _____ _____ en finanzas nombra incentivos a asumir riesgo extra cuando otro asume la caída.',
    ['[[Moral hazard|Riesgo moral]]', '[[Moral luck|suerte moral]]', '[[Moral realism|realismo moral]]'],
    0,
    '*Moral hazard*.',
  ],
  [
    '_______ _______ in AI research is the challenge of ensuring systems pursue intended goals when proxies mis-specify them.',
    'La _____ _____ en investigación de IA es asegurar que los sistemas persigan fines pretendidos cuando los proxies los especifican mal.',
    ['[[Value alignment|Alineación de valores]]', '[[Value neutrality|neutralidad axiológica]]', '[[Value investing|inversión en valor]]'],
    0,
    '*Value alignment*.',
  ],
  [
    '_______ _______ is the iterative process of adjusting principles and considered judgements until they cohere.',
    'El _____ _____ es el proceso iterativo de ajustar principios y juicios considerados hasta que coheren.',
    ['[[Reflective equilibrium|Equilibrio reflexivo]]', '[[Reflective nostalgia|nostalgia reflexiva (falso)]]', '[[Circular reasoning|razonamiento circular]]'],
    0,
    '*Reflective equilibrium*.',
  ],
  [
    '_______ _______ names bias against interests based solely on species membership.',
    'El _____ _____ nombra el sesgo contra intereses basado solo en la pertenencia a una especie.',
    ['[[Speciesism|Especismo]]', '[[Racism|racismo]]', '[[Nationalism|nacionalismo]]'],
    0,
    '*Speciesism*.',
  ],
  [
    '_______ _______ highlights low-probability, high-impact events that could curtail humanity\'s potential.',
    'El _____ _____ destaca sucesos de baja probabilidad y alto impacto que podrían truncar el potencial de la humanidad.',
    ['[[Existential risk|Riesgo existencial]]', '[[Operational risk|riesgo operativo]]', '[[Credit risk|riesgo de crédito]]'],
    0,
    '*Existential risk*.',
  ],
];

vRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u10-v${n}`;
  noteEs(id, row[1]);
  vocabulary.push(
    exMC(id, 'philosophy-vocabulary', 'Vocabulary', V_TITLE, INS.vocab, row[0], row[2], row[3], row[4])
  );
});
const reading = [];
readQuotes.forEach((row, i) => {
  reading.push(
    exRead(
      `c1-u10-r${i + 1}`,
      'philosophy-reading',
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
      `c1-u10-l${i + 1}`,
      'philosophy-listening',
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
  const id = `c1-u10-w${i + 1}`;
  noteEs(id, wTooltipsEs[i]);
  writing.push(
    exWrite(id, 'ethics-writing', 'Writing', W_TITLE, INS.write, row[0], row[1], row[2], row[3])
  );
});

const speaking = [];
sRows.forEach((row, i) => {
  const id = `c1-u10-s${i + 1}`;
  noteEs(id, sTooltipsEs[i]);
  speaking.push(exMC(id, 'speaking-ethics', 'Speaking', S_TITLE, INS.speak, row[0], row[1], row[2], row[3]));
});

const all = [...grammar, ...vocabulary, ...reading, ...listening, ...writing, ...speaking];

const header = `/**
 * C1 Unit 10 — Philosophy, Ethics and the Future
 * Módulo 1 (bloque temático): Persona, sociedad y entorno
 * Grammar: Distancing language; impersonal constructions; advanced clefts
 *
 * Modelo ampliado: 18 ejercicios por lección × 6 lecciones = 108 ítems.
 * Patrón de IDs: c1-u10-g1..g18, v1..v18, r1..r18, l1..l18, w1..w18, s1..s18.
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = '[[Philosophy, Ethics and the Future|Filosofía, ética y el futuro]]';

export const UNIT_10_EXERCISES: Exercise[] = [
`;

const footer = `
];
`;

fs.writeFileSync(OUT_UNIT, header + all.join(',\n') + footer, 'utf8');

const esKeys = Object.keys(questionEs).sort();
const esBody = esKeys.map((k) => `  ${j(k)}:\n    ${j(questionEs[k])},`).join('\n');

const esFile = `/**
 * Traducción al español (tooltip TranslatedText) — unidad C1 10.
 * Gramática, vocabulario, writing y speaking (reading/listening: [[|]] en unit-10).
 */
export const C1_UNIT10_QUESTION_ES: Record<string, string> = {
${esBody}
};
`;

fs.writeFileSync(OUT_ES, esFile, 'utf8');

console.log('Wrote', OUT_UNIT, '(' + all.length + ' exercises)');
console.log('Wrote', OUT_ES, '(' + esKeys.length + ' ES strings)');

#!/usr/bin/env node
/**
 * Genera las unidades B2 2-30 con estructura de 6 lecciones.
 * Ejecutar: node scripts/generate-b2-units-2-30.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const B2_DIR = path.join(__dirname, '../src/lib/course/b2');

const UNITS = [
  { n: 2, grammar: 'Future tenses (will, going to, future perfect)', vocab: 'Work', title: 'Future Tenses & Work' },
  { n: 3, grammar: 'Gerund vs infinitive (1)', vocab: 'Education', title: 'Gerund vs Infinitive & Education' },
  { n: 4, grammar: 'Gerund vs infinitive (2) — verb + object + inf', vocab: 'Leisure activities', title: 'Gerund & Object + Infinitive' },
  { n: 5, grammar: 'Repaso 1–4', vocab: '—', title: 'Repaso 1–4' },
  { n: 6, grammar: 'Wish / If only', vocab: 'Feelings and emotions', title: 'Wish & If Only' },
  { n: 7, grammar: "Would rather, would prefer, It's time", vocab: 'Family', title: 'Would Rather & Family' },
  { n: 8, grammar: 'Mixed conditionals', vocab: 'Travel', title: 'Mixed Conditionals & Travel' },
  { n: 9, grammar: 'Participle clauses (-ing, -ed)', vocab: 'Environment', title: 'Participle Clauses & Environment' },
  { n: 10, grammar: 'Repaso 6–9', vocab: '—', title: 'Repaso 6–9' },
  { n: 11, grammar: 'Defining & non-defining relative clauses', vocab: 'Culture', title: 'Relative Clauses & Culture' },
  { n: 12, grammar: 'Relative clauses (reducción, omisión)', vocab: 'Entertainment', title: 'Relative Clauses Reduction' },
  { n: 13, grammar: "Modals (must, have to, need to, needn't)", vocab: 'Money', title: 'Modals & Money' },
  { n: 14, grammar: 'Modal verbs of deduction (must have, might have)', vocab: 'Business', title: 'Modal Deduction & Business' },
  { n: 15, grammar: 'Repaso 11–14', vocab: '—', title: 'Repaso 11–14' },
  { n: 16, grammar: 'Passive (all tenses)', vocab: 'Technology', title: 'Passive & Technology' },
  { n: 17, grammar: 'Modal passive, have something done', vocab: 'Science', title: 'Modal Passive & Science' },
  { n: 18, grammar: 'So, such, too, enough', vocab: 'Food and drink', title: 'So Such Too Enough' },
  { n: 19, grammar: 'Comparative & superlative (advanced)', vocab: 'Sport', title: 'Comparative & Superlative' },
  { n: 20, grammar: 'Repaso 16–19', vocab: '—', title: 'Repaso 16–19' },
  { n: 21, grammar: 'Linkers: contrast (although, despite, whereas)', vocab: 'Health and fitness', title: 'Linkers Contrast' },
  { n: 22, grammar: 'Linkers: reason, purpose, result', vocab: 'Animals', title: 'Linkers Reason Purpose' },
  { n: 23, grammar: 'Phrasal verbs 1 (BE, BREAK, BRING)', vocab: 'Communication', title: 'Phrasal Verbs 1' },
  { n: 24, grammar: 'Phrasal verbs 2 (CARRY, COME, GET)', vocab: 'Places', title: 'Phrasal Verbs 2' },
  { n: 25, grammar: 'Repaso 21–24', vocab: '—', title: 'Repaso 21–24' },
  { n: 26, grammar: 'Phrasal verbs 3 (GIVE, GO, KEEP)', vocab: 'Work (extended)', title: 'Phrasal Verbs 3' },
  { n: 27, grammar: 'Phrasal verbs 4 (LOOK, MAKE, PUT)', vocab: 'Travel (extended)', title: 'Phrasal Verbs 4' },
  { n: 28, grammar: 'Collocations (verb + noun)', vocab: 'Mixed topics', title: 'Collocations Verb+Noun' },
  { n: 29, grammar: 'Collocations (adjective + noun)', vocab: 'Mixed topics', title: 'Collocations Adj+Noun' },
  { n: 30, grammar: 'Repaso 26–29', vocab: '—', title: 'Repaso 26–29' },
];

function escape(str) {
  return str.replace(/'/g, "\\'");
}

function escapeApostrophes(s) {
  return String(s).replace(/'/g, "\\'");
}

function genGrammar(u) {
  const g = escapeApostrophes(u.grammar.replace(/\([^)]*\)/g, '').trim());
  return `/**
 * Unidad ${u.n} B2 — Lección 1: Gramática (${u.grammar})
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Grammar|Gramática]]: [[${g}|${g}]]';
const INSTRUCTIONS = 'Elige la opción correcta o completa el espacio.';

export const UNIT_${u.n}_LESSON_1_GRAMMAR: Exercise[] = [
  { id: 'b2-u${u.n}-l1-g1', type: 'fill-blank', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Complete|Completa]] [[the sentence|la frase]] [[with|con]] [[the correct form|la forma correcta]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g2', type: 'multiple-choice', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Choose|Elige]] [[the correct option|la opción correcta]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g3', type: 'fill-blank', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Complete|Completa]] [[the sentence|la frase]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]'], correctAnswer: 0, acceptableAnswers: ['Option A'], explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g4', type: 'multiple-choice', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Select|Selecciona]] [[the best answer|la mejor respuesta]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 1, explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g5', type: 'fill-blank', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Fill in|Completa]] [[the blank|el espacio]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]'], correctAnswer: 0, acceptableAnswers: ['Option A'], explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g6', type: 'multiple-choice', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Choose|Elige]] [[the correct form|la forma correcta]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g7', type: 'fill-blank', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Complete|Completa]] [[the sentence|la frase]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]'], correctAnswer: 0, acceptableAnswers: ['Option A'], explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g8', type: 'multiple-choice', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Select|Selecciona]] [[the correct option|la opción correcta]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g9', type: 'fill-blank', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Fill in|Completa]] [[the blank|el espacio]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]'], correctAnswer: 0, acceptableAnswers: ['Option A'], explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g10', type: 'multiple-choice', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Choose|Elige]] [[the best answer|la mejor respuesta]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g11', type: 'fill-blank', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Complete|Completa]] [[the sentence|la frase]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]'], correctAnswer: 0, acceptableAnswers: ['Option A'], explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g12', type: 'multiple-choice', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Select|Selecciona]] [[the correct form|la forma correcta]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g13', type: 'fill-blank', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Fill in|Completa]] [[the blank|el espacio]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]'], correctAnswer: 0, acceptableAnswers: ['Option A'], explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g14', type: 'multiple-choice', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Choose|Elige]] [[the correct option|la opción correcta]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g15', type: 'fill-blank', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Complete|Completa]] [[the sentence|la frase]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]'], correctAnswer: 0, acceptableAnswers: ['Option A'], explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g16', type: 'multiple-choice', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Select|Selecciona]] [[the best answer|la mejor respuesta]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g17', type: 'fill-blank', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Complete|Completa]] [[the sentence|la frase]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]'], correctAnswer: 0, acceptableAnswers: ['Option A'], explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
  { id: 'b2-u${u.n}-l1-g18', type: 'multiple-choice', level: 'B2', topic: '${escapeApostrophes(u.grammar)}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Choose|Elige]] [[the correct form|la forma correcta]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Grammar point|Punto gramatical]].' }] }, topicName: 'Grammar' },
];
`;
}

function genVocabulary(u) {
  const v = u.vocab === '—' ? 'Mixed topics' : u.vocab;
  const items = [];
  for (let i = 1; i <= 18; i++) {
    items.push(`  { id: 'b2-u${u.n}-l2-v${i}', type: 'multiple-choice', level: 'B2', topic: '${v}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [{ question: '[[Choose|Elige]] [[the correct word|la palabra correcta]].', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0 }] }, topicName: 'Vocabulary' }`);
  }
  return `/**
 * Unidad ${u.n} B2 — Lección 2: Vocabulario (${v})
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[${v}|${v}]]';
const INSTRUCTIONS = 'Elige la palabra o frase correcta.';

export const UNIT_${u.n}_LESSON_2_VOCABULARY: Exercise[] = [
${items.join(',\n')},
];
`;
}

function genReading(u) {
  const topic = u.vocab === '—' ? 'Review' : u.vocab;
  return `/**
 * Unidad ${u.n} B2 — Lección 3: Comprensión lectora (${topic})
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = \`[[Read|Lee]] [[the text|el texto]] [[below|abajo]] [[about|sobre]] [[${topic}|${topic}]]. [[Then|Después]] [[answer|responde]] [[the questions|las preguntas]].\`;

const INSTRUCTIONS = 'Lee el texto. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the main topic|es el tema principal]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[According to|Según]] [[the text|el texto]], [[what|qué]] [[happened|pasó]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]].' },
  { question: '[[Why|Por qué]] [[did this happen|pasó esto]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[The author|El autor]] [[believes|cree]] [[that|que]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The text says|El texto dice]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[The text|El texto]] [[states|afirma]] [[that|que]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The text says|El texto dice]].' },
  { question: '[[What|Qué]] [[is the purpose|es el propósito]] [[of|del]] [[the text|texto]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[According to|Según]] [[the text|el texto]], ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The text says|El texto dice]].' },
  { question: '[[What|Qué]] [[does the author suggest|sugiere el autor]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[The main idea|La idea principal]] [[is|es]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The text says|El texto dice]].' },
  { question: '[[What|Qué]] [[can we conclude|podemos concluir]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[The text|El texto]] [[mentions|menciona]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The text says|El texto dice]].' },
  { question: '[[What|Qué]] [[is the tone|es el tono]] [[of|del]] [[the text|texto]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[According to|Según]] [[the text|el texto]], [[the author|el autor]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The text says|El texto dice]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]].' },
  { question: '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the main idea|la idea principal]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[The text|El texto]] [[implies|implica]] [[that|que]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The text says|El texto dice]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this text|este texto]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
];

export const UNIT_${u.n}_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: \`b2-u${u.n}-l3-r\${i + 1}\`,
  type: 'reading',
  level: 'B2',
  topic: '${topic}',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
`;
}

function genListening(u) {
  const topic = u.vocab === '—' ? 'Review' : u.vocab;
  return `/**
 * Unidad ${u.n} B2 — Lección 4: Comprensión auditiva (${topic})
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = \`[[Listen|Escucha]] [[to the audio|el audio]] [[about|sobre]] [[${topic}|${topic}]]. [[Then|Después]] [[answer|responde]] [[the questions|las preguntas]].\`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the main topic|es el tema principal]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[According to|Según]] [[the speaker|el hablante]], [[what|qué]] [[happened|pasó]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[Why|Por qué]] [[did this happen|pasó esto]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[The speaker|El hablante]] [[believes|cree]] [[that|que]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[The speaker|El hablante]] [[states|afirma]] [[that|que]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[What|Qué]] [[is the purpose|es el propósito]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[According to|Según]] [[the speaker|el hablante]], ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[What|Qué]] [[does the speaker suggest|sugiere el hablante]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[The main idea|La idea principal]] [[is|es]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[What|Qué]] [[can we conclude|podemos concluir]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[The speaker|El hablante]] [[mentions|menciona]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[What|Qué]] [[is the tone|es el tono]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[According to|Según]] [[the speaker|el hablante]], ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[describes|describe]].' },
  { question: '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the main idea|la idea principal]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[The speaker|El hablante]] [[implies|implica]] [[that|que]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this listening|esta escucha]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
];

export const UNIT_${u.n}_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: \`b2-u${u.n}-l4-l\${i + 1}\`,
  type: 'listening',
  level: 'B2',
  topic: '${topic}',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
`;
}

function genSpeaking(u) {
  const topic = u.vocab === '—' ? 'Review' : u.vocab;
  const items = [];
  for (let i = 1; i <= 18; i++) {
    const instr = i <= 14 ? 'Escucha y repite en voz alta.' : (i <= 16 ? 'Di en voz alta sobre el tema.' : 'Habla en voz alta: describe en 2-3 frases el tema.');
    const target = i <= 14 ? `[[Practice|Practica]] [[sentence|frase]] [[${i}|${i}]].` : (i <= 16 ? '[[Speak|Habla]] [[about|sobre]] [[the topic|el tema]].' : '____. ____. ____.');
    const expected = i <= 14 ? `Practice sentence ${i}.` : (i <= 16 ? 'Speak about the topic.' : 'Describe the topic in 2-3 sentences.');
    items.push(`  { id: 'b2-u${u.n}-l5-s${i}', type: 'pronunciation', level: 'B2', topic: '${topic}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: '${instr}', targetText: '${target}', expectedResponse: '${expected}' }, topicName: 'Speaking' }`);
  }
  return `/**
 * Unidad ${u.n} B2 — Lección 5: Expresión oral (${topic})
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Speaking|Expresión oral]]';

export const UNIT_${u.n}_LESSON_5_SPEAKING: Exercise[] = [
${items.join(',\n')},
];
`;
}

function genWriting(u) {
  const topic = u.vocab === '—' ? 'Review' : u.vocab;
  const items = [];
  const writingEx = (i, instr, hint, len) => `  { id: 'b2-u${u.n}-l6-w${i}', type: 'writing', level: 'B2', topic: '${topic}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: '${instr}', expressionHint: '${hint}', targetLength: '${len}' }, topicName: 'Writing' }`;
  const fillEx = (i, q, expl) => `  { id: 'b2-u${u.n}-l6-w${i}', type: 'fill-blank', level: 'B2', topic: '${topic}', difficulty: 'medium', content: { title: LESSON_TITLE, instructions: 'Completa la frase.', questions: [{ question: '${q}', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]'], correctAnswer: 'Option A', acceptableAnswers: ['Option A'], explanation: '${expl}' }] }, topicName: 'Writing' }`;
  for (let i = 1; i <= 18; i++) {
    if (i % 3 === 1) items.push(writingEx(i, 'Escribe 2-3 frases sobre el tema.', 'Puedes usar vocabulario de la unidad.', '2-3 frases'));
    else if (i % 3 === 2) items.push(fillEx(i, '[[Complete|Completa]] [[the sentence|la frase]].', '[[Grammar point|Punto gramatical]].'));
    else items.push(writingEx(i, 'Escribe un párrafo corto (3-4 frases) sobre el tema.', 'Usa gramática y vocabulario de la unidad.', '3-4 frases'));
  }
  return `/**
 * Unidad ${u.n} B2 — Lección 6: Expresión escrita (${topic})
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing|Expresión escrita]]';

export const UNIT_${u.n}_LESSON_6_WRITING: Exercise[] = [
${items.join(',\n')},
];
`;
}

function genLessonsIndex(u) {
  return `/**
 * Índice de las 6 lecciones de la Unidad ${u.n} (B2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_${u.n}_LESSON_1_GRAMMAR } from './unit-${u.n}-lesson-1-grammar';
import { UNIT_${u.n}_LESSON_2_VOCABULARY } from './unit-${u.n}-lesson-2-vocabulary';
import { UNIT_${u.n}_LESSON_3_READING } from './unit-${u.n}-lesson-3-reading';
import { UNIT_${u.n}_LESSON_4_LISTENING } from './unit-${u.n}-lesson-4-listening';
import { UNIT_${u.n}_LESSON_5_SPEAKING } from './unit-${u.n}-lesson-5-speaking';
import { UNIT_${u.n}_LESSON_6_WRITING } from './unit-${u.n}-lesson-6-writing';

export const UNIT_${u.n}_LESSONS = {
  grammar: UNIT_${u.n}_LESSON_1_GRAMMAR,
  vocabulary: UNIT_${u.n}_LESSON_2_VOCABULARY,
  reading: UNIT_${u.n}_LESSON_3_READING,
  listening: UNIT_${u.n}_LESSON_4_LISTENING,
  speaking: UNIT_${u.n}_LESSON_5_SPEAKING,
  writing: UNIT_${u.n}_LESSON_6_WRITING,
} as const;

export const UNIT_${u.n}_ALL_LESSONS: Exercise[][] = [
  UNIT_${u.n}_LESSON_1_GRAMMAR,
  UNIT_${u.n}_LESSON_2_VOCABULARY,
  UNIT_${u.n}_LESSON_3_READING,
  UNIT_${u.n}_LESSON_4_LISTENING,
  UNIT_${u.n}_LESSON_5_SPEAKING,
  UNIT_${u.n}_LESSON_6_WRITING,
];

export const UNIT_${u.n}_ALL_EXERCISES: Exercise[] = UNIT_${u.n}_ALL_LESSONS.flat();
`;
}

function genUnitTs(u) {
  return `/**
 * Unidad ${u.n} B2 — ${u.title}
 * Gramática: ${u.grammar}
 * Vocabulario: ${u.vocab}
 */

import { UNIT_${u.n}_ALL_EXERCISES } from './unit-${u.n}-lessons-index';

export const UNIT_TITLE = '${u.title}';

/** Todos los ejercicios de la Unidad ${u.n} (6 lecciones). */
export const UNIT_${u.n}_EXERCISES = UNIT_${u.n}_ALL_EXERCISES;
`;
}

// Main
for (const u of UNITS) {
  fs.writeFileSync(path.join(B2_DIR, `unit-${u.n}-lesson-1-grammar.ts`), genGrammar(u));
  fs.writeFileSync(path.join(B2_DIR, `unit-${u.n}-lesson-2-vocabulary.ts`), genVocabulary(u));
  fs.writeFileSync(path.join(B2_DIR, `unit-${u.n}-lesson-3-reading.ts`), genReading(u));
  fs.writeFileSync(path.join(B2_DIR, `unit-${u.n}-lesson-4-listening.ts`), genListening(u));
  fs.writeFileSync(path.join(B2_DIR, `unit-${u.n}-lesson-5-speaking.ts`), genSpeaking(u));
  fs.writeFileSync(path.join(B2_DIR, `unit-${u.n}-lesson-6-writing.ts`), genWriting(u));
  fs.writeFileSync(path.join(B2_DIR, `unit-${u.n}-lessons-index.ts`), genLessonsIndex(u));
  fs.writeFileSync(path.join(B2_DIR, `unit-${u.n}.ts`), genUnitTs(u));
  console.log(`Created unit ${u.n}: ${u.title}`);
}

console.log('Done. Created units 2-30.');

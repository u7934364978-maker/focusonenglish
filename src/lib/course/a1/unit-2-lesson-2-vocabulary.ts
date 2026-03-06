/**
 * Unidad 2 — Lección 2: Vocabulario (países, nacionalidades, números 1-10)
 * 15 ejercicios: 6 elección múltiple, 4 emparejar, 3 completar huecos, 2 elección contexto
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: países y nacionalidades';
const INSTRUCTIONS_MC = 'Elige la palabra que corresponde a la definición o a la frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada país con su nacionalidad en inglés.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';
const INSTRUCTIONS_CTX = 'Elige la palabra correcta para el contexto.';

export const UNIT_2_LESSON_2_VOCABULARY: Exercise[] = [
  // ─── 1–6: Elección múltiple (país ↔ nacionalidad; números) ─────────────────
  {
    id: 'a1-u2-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|la]] [[nationality|nacionalidad]] [[of|de]] [[someone|alguien]] [[from|de]] [[Spain|España]]?',
          options: ['[[French|Francés]]', '[[Italian|Italiano]]', '[[Spanish|Español]]', '[[German|Alemán]]'],
          correctAnswer: 2,
          explanation: '[[Spain|España]] → [[Spanish|Español/a]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u2-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[She|Ella]] [[is|es]] [[from|de]] [[France|Francia]]. [[She|Ella]] [[is|es]] ____.',
          options: ['[[German|Alemana]]', '[[French|Francesa]]', '[[British|Británica]]', '[[Chinese|China]]'],
          correctAnswer: 1,
          explanation: '[[France|Francia]] → [[French|Francés/Francesa]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u2-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[Which|Cuál]] [[country|país]] [[does|corresponde]] [[the|a la]] [[nationality|nacionalidad]] "[[Japanese|Japonés]]" [[come|pertenecer]] [[from|de]]?',
          options: ['[[China|China]]', '[[Mexico|México]]', '[[Brazil|Brasil]]', '[[Japan|Japón]]'],
          correctAnswer: 3,
          explanation: '[[Japanese|Japonés/Japonesa]] → [[Japan|Japón]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u2-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '¿Cómo se dice el número siete en inglés?',
          options: ['[[Five|cinco]]', '[[Six|seis]]', '[[Seven|siete]]', '[[Eight|ocho]]'],
          correctAnswer: 2,
          explanation: '[[Seven|siete]] en inglés es "seven".',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u2-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[He|Él]] [[is|es]] [[from|de]] [[Italy|Italia]]. [[What|Cuál]] [[is|es]] [[his|su]] [[nationality|nacionalidad]]?',
          options: ['[[Spanish|Español]]', '[[Italian|Italiano]]', '[[American|Americano]]', '[[Mexican|Mexicano]]'],
          correctAnswer: 1,
          explanation: '[[Italy|Italia]] → [[Italian|Italiano/Italiana]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u2-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[There|Hay]] [[are|son]] ____ [[students|estudiantes]] [[in|en]] [[the|la]] [[class|clase]]: [[Ana|Ana]], [[Luis|Luis]], [[Tom|Tom]], [[Mei|Mei]] [[and|y]] [[Sara|Sara]].',
          options: ['[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]]', '[[six|seis]]'],
          correctAnswer: 2,
          explanation: '[[Ana|Ana]], [[Luis|Luis]], [[Tom|Tom]], [[Mei|Mei]] [[and|y]] [[Sara|Sara]] = [[five|cinco]] [[students|estudiantes]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 7–10: Emparejar (país–nacionalidad) ───────────────────────────────────
  {
    id: 'a1-u2-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Spain|España]]', right: '[[Spanish|Español]]' },
        { id: 'p2', left: '[[France|Francia]]', right: '[[French|Francés]]' },
        { id: 'p3', left: '[[Germany|Alemania]]', right: '[[German|Alemán]]' },
        { id: 'p4', left: '[[Italy|Italia]]', right: '[[Italian|Italiano]]' },
        { id: 'p5', left: '[[England|Inglaterra]]', right: '[[British|Británico]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u2-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[USA|EE. UU.]]', right: '[[American|Americano]]' },
        { id: 'p2', left: '[[China|China]]', right: '[[Chinese|Chino]]' },
        { id: 'p3', left: '[[Japan|Japón]]', right: '[[Japanese|Japonés]]' },
        { id: 'p4', left: '[[Mexico|México]]', right: '[[Mexican|Mexicano]]' },
        { id: 'p5', left: '[[Brazil|Brasil]]', right: '[[Brazilian|Brasileño]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u2-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona cada número con su palabra en inglés.',
      pairs: [
        { id: 'p1', left: '1', right: '[[one|uno]]' },
        { id: 'p2', left: '2', right: '[[two|dos]]' },
        { id: 'p3', left: '3', right: '[[three|tres]]' },
        { id: 'p4', left: '4', right: '[[four|cuatro]]' },
        { id: 'p5', left: '5', right: '[[five|cinco]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u2-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona cada número con su palabra en inglés.',
      pairs: [
        { id: 'p1', left: '6', right: '[[six|seis]]' },
        { id: 'p2', left: '7', right: '[[seven|siete]]' },
        { id: 'p3', left: '8', right: '[[eight|ocho]]' },
        { id: 'p4', left: '9', right: '[[nine|nueve]]' },
        { id: 'p5', left: '10', right: '[[ten|diez]]' },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 11–13: Completar huecos ─────────────────────────────────────────────────
  {
    id: 'a1-u2-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[is|es]] [[from|de]] [[Germany|Alemania]]. [[She|Ella]] [[is|es]] ____.',
          options: ['[[German|Alemana]]', '[[French|Francesa]]', '[[Italian|Italiana]]'],
          correctAnswer: '[[German|Alemana]]',
          explanation: '[[Germany|Alemania]] → [[German|Alemán/Alemana]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u2-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Pedro|Pedro]] [[is|es]] [[Brazilian|Brasileño]]. [[He|Él]] [[is|es]] [[from|de]] ____.',
          options: ['[[Mexico|México]]', '[[Brazil|Brasil]]', '[[Spain|España]]'],
          correctAnswer: '[[Brazil|Brasil]]',
          explanation: '[[Brazilian|Brasileño/a]] → [[from|de]] [[Brazil|Brasil]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u2-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: 'Hay diez países en la lista. ¿Cómo se escribe diez en inglés?',
          options: ['[[eight|ocho]]', '[[nine|nueve]]', '[[ten|diez]]'],
          correctAnswer: '[[ten|diez]]',
          explanation: '[[Ten|diez]] en inglés es "ten".',
        },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 14–15: Elección múltiple (contexto) ───────────────────────────────────
  {
    id: 'a1-u2-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [
        {
          question: '[[Maria|Maria]] [[says|dice]]: "[[I|Yo]] [[am|soy]] [[from|de]] [[Mexico|México]]." [[Her|Su]] [[teacher|profesora]] [[asks|pregunta]]: "[[So|Entonces]] [[you|tú]] [[are|eres]] ____?"',
          options: ['[[Brazilian|Brasileña]]', '[[American|Americana]]', '[[Mexican|Mexicana]]', '[[Spanish|Española]]'],
          correctAnswer: 2,
          explanation: '[[From|De]] [[Mexico|México]] → [[Mexican|Mexicano/a]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u2-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [
        {
          question: '[[In|En]] [[the|la]] [[classroom|clase]] [[there|hay]] [[are|son]] [[six|seis]] [[boys|chicos]] [[and|y]] [[four|cuatro]] [[girls|chicas]]. [[How|Cuántos]] [[many|en total]] [[students|estudiantes]] [[are|hay]] [[there|en total]]?',
          options: ['[[eight|Ocho]]', '[[nine|Nueve]]', '[[ten|Diez]]', '[[eleven|Once]]'],
          correctAnswer: 2,
          explanation: '[[Six|Seis]] + [[four|cuatro]] = [[ten|diez]]. [[Ten|Ten]] = [[ten|diez]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];

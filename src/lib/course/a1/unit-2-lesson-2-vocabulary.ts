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
          question: '¿Cuál es la nacionalidad de alguien de España?',
          options: ['[[French|Francés]]', '[[Italian|Italiano]]', '[[Spanish|Español]]', '[[German|Alemán]]'],
          correctAnswer: 2,
          explanation: 'España → [[Spanish|Español]].',
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
          question: 'She is from France. She is ____.',
          options: ['[[German|Alemana]]', '[[French|Francesa]]', '[[British|Británica]]', '[[Chinese|China]]'],
          correctAnswer: 1,
          explanation: '[[France|Francia]] → [[French|Francés]].',
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
          question: '¿A qué país corresponde la nacionalidad "Japanese"?',
          options: ['[[China|China]]', '[[Mexico|México]]', '[[Brazil|Brasil]]', '[[Japan|Japón]]'],
          correctAnswer: 3,
          explanation: '[[Japanese|Japonés]] → [[Japan|Japón]].',
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
          question: 'Él es de Italia. ¿Cuál es su nacionalidad?',
          options: ['[[Spanish|Español]]', '[[Italian|Italiano]]', '[[American|Americano]]', '[[Mexican|Mexicano]]'],
          correctAnswer: 1,
          explanation: '[[Italy|Italia]] → [[Italian|Italiano]].',
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
          question: 'Hay ____ estudiantes en la clase: Ana, Luis, Tom, Mei y Sara.',
          options: ['[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]]', '[[six|seis]]'],
          correctAnswer: 2,
          explanation: 'Ana, Luis, Tom, Mei [[and|y]] Sara = [[five|cinco]] [[students|estudiantes]].',
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
        { id: 'p1', left: 'España', right: '[[Spanish|Español]]' },
        { id: 'p2', left: 'Francia', right: '[[French|Francés]]' },
        { id: 'p3', left: 'Alemania', right: '[[German|Alemán]]' },
        { id: 'p4', left: 'Italia', right: '[[Italian|Italiano]]' },
        { id: 'p5', left: 'Inglaterra', right: '[[British|Británico]]' },
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
          question: 'She is from Germany. She is ____.',
          options: ['[[German|Alemana]]', '[[French|Francesa]]', '[[Italian|Italiana]]'],
          correctAnswer: '[[German|Alemana]]',
          explanation: '[[Germany|Alemania]] → [[German|Alemán]].',
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
          question: 'Pedro is Brazilian. He is from ____.',
          options: ['[[Mexico|México]]', '[[Brazil|Brasil]]', '[[France|Francia]]'],
          correctAnswer: '[[Brazil|Brasil]]',
          explanation: '[[Brazilian|Brasileño]] → [[from|de]] [[Brazil|Brasil]].',
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
          question: '[[Maria|María]] [[says|dice]]: "[[I|Yo]] [[am|soy]] [[from|de]] [[Mexico|México]]." [[Her|Su]] [[teacher|profesora]] [[asks|pregunta]]: "[[So|Entonces]] [[you|tú]] [[are|eres]] ____?"',
          options: ['[[Brazilian|Brasileño]]', '[[American|Americano]]', '[[Mexican|Mexicano]]', '[[Spanish|Español]]'],
          correctAnswer: 2,
          explanation: '[[From|De]] [[Mexico|México]] → [[Mexican|Mexicano]].',
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
          question: '[[In|En]] [[the|el]] [[classroom|aula]] [[there are|hay]] [[six|seis]] [[boys|chicos]] [[and|y]] [[four|cuatro]] [[girls|chicas]]. [[How many|Cuántos]] [[students|estudiantes]] [[are there|hay]] [[in|en]] [[total|total]]?',
          options: ['[[eight|Ocho]]', '[[nine|Nueve]]', '[[ten|Diez]]', '[[eleven|Once]]'],
          correctAnswer: 2,
          explanation: '[[Six|Seis]] + [[four|cuatro]] = [[ten|diez]]. [[Ten|Ten]] = [[ten|diez]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];

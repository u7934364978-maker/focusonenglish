/**
 * Unidad 4 — Lección 4: Comprensión auditiva
 * 15 ejercicios individuales: 8 elección múltiple + 4 verdadero/falso + 3 síntesis
 * Título de lección: "Comprensión auditiva"
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión auditiva';
const INSTRUCTIONS_MC = 'Escucha el diálogo y elige la respuesta correcta.';
const INSTRUCTIONS_TF = 'Escucha el diálogo e indica si la afirmación es verdadera o falsa.';
const INSTRUCTIONS_SYNTHESIS = 'Escucha el diálogo y elige la opción que mejor responde.';

const LISTENING_TRANSCRIPT =
  '[[Student|Estudiante]] [[1:|1:]] [[What|¿Qué]] [[is|es]] [[this?|esto?]] ' +
  '[[Student|Estudiante]] [[2:|2:]] [[It|Es]] [[is|es]] [[a|un]] [[pencil.|lápiz.]] ' +
  '[[It|Es]] [[is|es]] [[yellow.|amarillo.]] ' +
  '[[Student|Estudiante]] [[1:|1:]] [[And|¿Y]] [[those?|esos?]] ' +
  '[[Student|Estudiante]] [[2:|2:]] [[Those|Esos]] [[are|son]] [[erasers.|gomas.]] ' +
  '[[There are|Hay]] [[four|cuatro]] [[erasers.|gomas.]] ' +
  '[[Student|Estudiante]] [[1:|1:]] [[Is|¿Es]] [[that|eso]] [[a|una]] [[bag?|mochila?]] ' +
  '[[Student|Estudiante]] [[2:|2:]] [[Yes,|Sí,]] [[it|lo]] [[is.|es.]] ' +
  '[[It|Es]] [[is|es]] [[a|una]] [[red|roja]] [[bag.|mochila.]] ' +
  '[[Student|Estudiante]] [[1:|1:]] [[How many|¿Cuántos]] [[books|libros]] [[are there?|hay?]] ' +
  '[[Student|Estudiante]] [[2:|2:]] [[There are|Hay]] [[six|seis]] [[books|libros]] [[on|en]] [[the|el]] [[desk.|escritorio.]]';

export const UNIT_4_LESSON_4_LISTENING: Exercise[] = [
  // ─── 1–8: Escucha + elección múltiple ────────────────────────────────────
  {
    id: 'a1-u4-l4-listening-1',
    type: 'listening',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    // audioUrl: '/audio/a1-u4-l4-listening.mp3',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What is the first object?|¿Cuál es el primer objeto?]]',
          options: [
            '[[A book|Un libro]]',
            '[[A pencil|Un lápiz]]',
            '[[An eraser|Una goma]]',
            '[[A bag|Una mochila]]',
          ],
          correctAnswer: 1,
          explanation: '[[Student 2 says|El estudiante 2 dice]] "[[It is a pencil.|Es un lápiz.]]"',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u4-l4-listening-2',
    type: 'listening',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    // audioUrl: '/audio/a1-u4-l4-listening.mp3',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What color is the pencil?|¿De qué color es el lápiz?]]',
          options: [
            '[[Red|Rojo]]',
            '[[Blue|Azul]]',
            '[[Yellow|Amarillo]]',
            '[[Green|Verde]]',
          ],
          correctAnswer: 2,
          explanation: '[[Student 2 says|El estudiante 2 dice]] "[[It is yellow.|Es amarillo.]]"',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u4-l4-listening-3',
    type: 'listening',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    // audioUrl: '/audio/a1-u4-l4-listening.mp3',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What are "those"?|¿Qué son "esos"?]]',
          options: [
            '[[Books|Libros]]',
            '[[Bags|Mochilas]]',
            '[[Pencils|Lápices]]',
            '[[Erasers|Gomas]]',
          ],
          correctAnswer: 3,
          explanation: '[[Student 2 says|El estudiante 2 dice]] "[[Those are erasers.|Esos son gomas.]]"',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u4-l4-listening-4',
    type: 'listening',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    // audioUrl: '/audio/a1-u4-l4-listening.mp3',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[How many erasers are there?|¿Cuántas gomas hay?]]',
          options: [
            '[[Two|Dos]]',
            '[[Three|Tres]]',
            '[[Four|Cuatro]]',
            '[[Six|Seis]]',
          ],
          correctAnswer: 2,
          explanation: '[[Student 2 says|El estudiante 2 dice]] "[[There are four erasers.|Hay cuatro gomas.]]"',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u4-l4-listening-5',
    type: 'listening',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    // audioUrl: '/audio/a1-u4-l4-listening.mp3',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[Is that a bag?|¿Es eso una mochila?]]',
          options: [
            '[[No, it isn\'t.|No, no lo es.]]',
            '[[Yes, it is.|Sí, lo es.]]',
            '[[It is a pencil.|Es un lápiz.]]',
            '[[It is yellow.|Es amarillo.]]',
          ],
          correctAnswer: 1,
          explanation: '[[Student 2 answers|El estudiante 2 responde]] "[[Yes, it is.|Sí, lo es.]]"',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u4-l4-listening-6',
    type: 'listening',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    // audioUrl: '/audio/a1-u4-l4-listening.mp3',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What color is the bag?|¿De qué color es la mochila?]]',
          options: [
            '[[Yellow|Amarillo]]',
            '[[Blue|Azul]]',
            '[[Black|Negro]]',
            '[[Red|Rojo]]',
          ],
          correctAnswer: 3,
          explanation: '[[Student 2 says|El estudiante 2 dice]] "[[It is a red bag.|Es una mochila roja.]]"',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u4-l4-listening-7',
    type: 'listening',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    // audioUrl: '/audio/a1-u4-l4-listening.mp3',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[How many books are on the desk?|¿Cuántos libros hay en el escritorio?]]',
          options: [
            '[[Three|Tres]]',
            '[[Four|Cuatro]]',
            '[[Five|Cinco]]',
            '[[Six|Seis]]',
          ],
          correctAnswer: 3,
          explanation: '[[Student 2 says|El estudiante 2 dice]] "[[There are six books on the desk.|Hay seis libros en el escritorio.]]"',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u4-l4-listening-8',
    type: 'listening',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    // audioUrl: '/audio/a1-u4-l4-listening.mp3',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[Who asks the questions?|¿Quién hace las preguntas?]]',
          options: [
            '[[Student 1|Estudiante 1]]',
            '[[Student 2|Estudiante 2]]',
            '[[The teacher|El maestro]]',
            '[[Pablo|Pablo]]',
          ],
          correctAnswer: 0,
          explanation: '[[Student 1 asks all the questions|El estudiante 1 hace todas las preguntas]] [[in the dialogue.|en el diálogo.]]',
        },
      ],
    },
    topicName: 'Listening',
  },

  // ─── 9–12: Escucha + verdadero/falso ──────────────────────────────────────
  {
    id: 'a1-u4-l4-listening-9',
    type: 'listening',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    // audioUrl: '/audio/a1-u4-l4-listening.mp3',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[The pencil is red.|El lápiz es rojo.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False.|Falso.]] [[Student 2 says|El estudiante 2 dice]] "[[It is yellow.|Es amarillo.]]"',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u4-l4-listening-10',
    type: 'listening',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    // audioUrl: '/audio/a1-u4-l4-listening.mp3',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[There are four erasers.|Hay cuatro gomas.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True.|Verdadero.]] [[Student 2 says|El estudiante 2 dice]] "[[There are four erasers.|Hay cuatro gomas.]]"',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u4-l4-listening-11',
    type: 'listening',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    // audioUrl: '/audio/a1-u4-l4-listening.mp3',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[The bag is blue.|La mochila es azul.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False.|Falso.]] [[Student 2 says|El estudiante 2 dice]] "[[It is a red bag.|Es una mochila roja.]]"',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u4-l4-listening-12',
    type: 'listening',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    // audioUrl: '/audio/a1-u4-l4-listening.mp3',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[There are six books on the desk.|Hay seis libros en el escritorio.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True.|Verdadero.]] [[Student 2 says|El estudiante 2 dice]] "[[There are six books on the desk.|Hay seis libros en el escritorio.]]"',
        },
      ],
    },
    topicName: 'Listening',
  },

  // ─── 13–15: Escucha + síntesis ────────────────────────────────────────────
  {
    id: 'a1-u4-l4-listening-13',
    type: 'listening',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    // audioUrl: '/audio/a1-u4-l4-listening.mp3',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_SYNTHESIS,
      questions: [
        {
          question: '[[What is the main topic?|¿Cuál es el tema principal?]]',
          options: [
            '[[Identifying classroom objects by color and quantity.|Identificar objetos del aula por color y cantidad.]]',
            '[[Talking about school subjects.|Hablar sobre materias escolares.]]',
            '[[Asking about food and drinks.|Preguntar sobre comida y bebidas.]]',
            '[[Describing family members.|Describir a los miembros de la familia.]]',
          ],
          correctAnswer: 0,
          explanation: '[[The dialogue asks about objects, colors and quantities.|El diálogo pregunta sobre objetos, colores y cantidades.]]',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u4-l4-listening-14',
    type: 'listening',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    // audioUrl: '/audio/a1-u4-l4-listening.mp3',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_SYNTHESIS,
      questions: [
        {
          question: '[[Which demonstrative for plural far away?|¿Qué demostrativo para plural lejano?]]',
          options: [
            '[[This|Este/Esta]]',
            '[[That|Ese/Esa]]',
            '[[These|Estos/Estas]]',
            '[[Those|Esos/Esas]]',
          ],
          correctAnswer: 3,
          explanation: '"[[Those|Esos/Esas]]" [[is|es]] [[the plural demonstrative|el demostrativo plural]] [[for objects that are far.|para objetos lejanos.]]',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u4-l4-listening-15',
    type: 'listening',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    // audioUrl: '/audio/a1-u4-l4-listening.mp3',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_SYNTHESIS,
      questions: [
        {
          question: '[[What structure is "There are six books"?|¿Qué estructura es "There are six books"?]]',
          options: [
            '[[There are + number + plural noun.|There are + número + sustantivo plural.]]',
            '[[There is + article + noun.|There is + artículo + sustantivo.]]',
            '[[Pronoun + verb + adjective.|Pronombre + verbo + adjetivo.]]',
            '[[Demonstrative + noun + verb.|Demostrativo + sustantivo + verbo.]]',
          ],
          correctAnswer: 0,
          explanation: '"[[There are|Hay]]" [[is followed by|va seguido de]] [[a number and a plural noun.|un número y un sustantivo plural.]]',
        },
      ],
    },
    topicName: 'Listening',
  },
];

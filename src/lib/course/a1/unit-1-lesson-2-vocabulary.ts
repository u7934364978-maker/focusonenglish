/**
 * Unidad 1 — Lección 2: Vocabulario (presentación, saludos, datos personales)
 * 15 ejercicios: 6 elección múltiple, 4 emparejar, 3 completar huecos, 2 elección contexto
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary: introductions|Vocabulario: presentación]]';
const INSTRUCTIONS_MC =
  '[[Choose the correct word for each definition or sentence.|Elige la palabra correcta para cada definición o frase.]]';
const INSTRUCTIONS_MATCH =
  '[[Match each English word or phrase with its meaning.|Relaciona cada palabra en inglés con su traducción.]]';
const INSTRUCTIONS_FILL =
  '[[Complete the sentence with the correct word from the box.|Completa la frase con la palabra correcta del recuadro.]]';
const INSTRUCTIONS_CTX =
  '[[Choose the correct word or phrase for the situation.|Elige la palabra o frase correcta para el contexto.]]';

export const UNIT_1_LESSON_2_VOCABULARY: Exercise[] = [
  // ─── 1–6: Elección múltiple (palabra correcta) ─────────────────────────────
  {
    id: 'a1-u1-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question:
            '[[What is the English word for “nombre”?|¿Cómo se dice «nombre» en inglés?]]',
          options: ['age', 'name', 'city', 'country'],
          correctAnswer: 1,
          explanation:
            '[[**Name** = nombre (what you are called).|**Name** = nombre (cómo te llamas).]]',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question:
            '[[In Spanish you say “Tengo treinta años”. In English: I am thirty ____ .|En español dices «Tengo treinta años». En inglés: I am thirty ____ .]]',
          options: ['year', 'years', 'years old', 'age'],
          correctAnswer: 2,
          explanation:
            '[[Use **years old** after the age: *I am thirty years old*.|**years old** va después de la edad: *I am thirty years old*.]]',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question:
            '[[Which word means “from” (origin) in English?|¿Qué palabra en inglés significa «de» (origen)?]]',
          options: ['to', 'from', 'in', 'at'],
          correctAnswer: 1,
          explanation:
            '[[**From** + place: *I am from Madrid*.|**From** + lugar: *I am from Madrid*.]]',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question:
            '[[What do you say to greet someone in the morning?|¿Qué dices para saludar por la mañana?]]',
          options: [
            '[[Hello|Hola]]',
            '[[Good morning|Buenos días]]',
            '[[Goodbye|Adiós]]',
            '[[Good night|Buenas noches]]',
          ],
          correctAnswer: 1,
          explanation:
            '[[**Good morning** is the usual morning greeting.|**Good morning** es el saludo habitual por la mañana.]]',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question:
            '[[Which word means “job” or “work” (what you do)?|¿Qué palabra significa «trabajo» o «empleo»?]]',
          options: ['name', 'age', 'job', 'city'],
          correctAnswer: 2,
          explanation:
            '[[**Job** = the work you do (also *work* as a noun in many contexts).|**Job** = el trabajo que haces.]]',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question:
            '[[How do you say “Encantado de conocerte” in English?|¿Cómo se dice «Encantado de conocerte» en inglés?]]',
          options: [
            '[[Hello|Hola]]',
            '[[Goodbye|Adiós]]',
            '[[Nice to meet you|Encantado de conocerte]]',
            '[[How are you?|¿Cómo estás?]]',
          ],
          correctAnswer: 2,
          explanation:
            '[[**Nice to meet you** is the usual phrase when you meet someone for the first time.|**Nice to meet you** es la frase habitual al conocer a alguien por primera vez.]]',
        },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 7–10: Emparejar (palabra–traducción) ──────────────────────────────────
  {
    id: 'a1-u1-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Hello|Hola]]', right: 'Hola' },
        { id: 'p2', left: '[[Name|Nombre]]', right: 'Nombre' },
        { id: 'p3', left: '[[Friend|Amigo]]', right: 'Amigo' },
        { id: 'p4', left: '[[Student|Estudiante]]', right: 'Estudiante' },
        { id: 'p5', left: '[[Teacher|Profesor]]', right: 'Profesor' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[From|De]]', right: 'De (origen)' },
        { id: 'p2', left: '[[City|Ciudad]]', right: 'Ciudad' },
        { id: 'p3', left: '[[Country|País]]', right: 'País' },
        { id: 'p4', left: '[[Years old|años]]', right: 'años (edad)' },
        { id: 'p5', left: '[[Goodbye|Adiós]]', right: 'Adiós' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Good morning|Buenos días]]', right: 'Buenos días' },
        { id: 'p2', left: '[[Good afternoon|Buenas tardes]]', right: 'Buenas tardes' },
        { id: 'p3', left: '[[Good evening|Buenas tardes/noches]]', right: 'Buenas tardes' },
        { id: 'p4', left: '[[Good night|Buenas noches]]', right: 'Buenas noches' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[My|Mi]]', right: 'Mi' },
        { id: 'p2', left: '[[Your|Tu]]', right: 'Tu' },
        { id: 'p3', left: '[[Happy|Feliz]]', right: 'Feliz' },
        { id: 'p4', left: '[[Nice|Encantado/agradable]]', right: 'Encantado' },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 11–13: Completar huecos (vocabulario) ──────────────────────────────────
  {
    id: 'a1-u1-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[My ____ is Ana.|Mi ____ es Ana.]]',
          options: ['name', 'age', 'city'],
          correctAnswer: 'name',
          explanation:
            '[[**My name is** + name.|**My name is** + nombre.]]',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I am ____ Madrid.|Soy ____ Madrid.]]',
          options: ['from', 'in', 'at'],
          correctAnswer: 'from',
          explanation:
            '[[**I am from** + city or country.|**I am from** + ciudad o país.]]',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question:
            '[[Context: You teach English at a school. Complete: I am a ____ .|Contexto: enseñas inglés en una escuela. Completa: I am a ____ .]]',
          options: ['teacher', 'student', 'doctor'],
          correctAnswer: 'teacher',
          explanation:
            '[[If you teach, you are a **teacher**.|Si enseñas, eres **teacher** (profesor/a).]]',
        },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 14–15: Elección múltiple (contexto) ───────────────────────────────────
  {
    id: 'a1-u1-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [
        {
          question:
            '[[Someone says “Hi!” when they see you. What do you reply?|Alguien dice «Hi!» al verte. ¿Qué respondes?]]',
          options: [
            '[[Goodbye|Adiós]]',
            '[[Hi or Hello|Hola]]',
            '[[Good night|Buenas noches]]',
            '[[My name is …|Mi nombre es…]]',
          ],
          correctAnswer: 1,
          explanation:
            '[[Reply with the same kind of short greeting: *Hi!* / *Hello!*.|Responde con el mismo tipo de saludo breve: *Hi!* / *Hello!*.]]',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [
        {
          question:
            '[[You meet someone for the first time. What is the best phrase after introductions?|Conoces a alguien por primera vez. ¿Qué frase encaja mejor después de presentarse?]]',
          options: [
            '[[Goodbye|Adiós]]',
            '[[Nice to meet you|Encantado de conocerte]]',
            '[[I am twenty.|Tengo veinte años.]]',
            '[[From Madrid.|De Madrid.]]',
          ],
          correctAnswer: 1,
          explanation:
            '[[Use *Nice to meet you* when you meet someone for the first time.|**Nice to meet you** va cuando conoces a alguien por primera vez.]]',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];

/**
 * Unidad 1 — Lección 6: Expresión escrita
 * 15 ejercicios: 5 completar frases, 3 ordenar y escribir oración, 4 redacción guiada (1–3 frases), 3 redacción libre (4–6 frases)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing practice|Expresión escrita]]';

export const UNIT_1_LESSON_6_WRITING: Exercise[] = [
  // ─── 1–5: Completar frases (por escrito) ──────────────────────────────────
  {
    id: 'a1-u1-l6-w1',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions:
        '[[Complete the sentence with one word. Write your answer in the box.|Completa la frase con una palabra. Escribe tu respuesta.]]',
      questions: [
        {
          question: '[[My ____ is Ana.|Mi ____ es Ana.]]',
          correctAnswer: 'name',
          acceptableAnswers: ['name'],
          explanation:
            '[[**My name is** + name.|**My name is** + nombre.]]',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u1-l6-w2',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions:
        '[[Write the missing word to complete the sentence.|Escribe la palabra que falta.]]',
      questions: [
        {
          question: '[[I ____ from Madrid.|Soy de Madrid.]]',
          correctAnswer: 'am',
          acceptableAnswers: ['am'],
          explanation:
            '[[**I am from** + place.|**I am from** + lugar.]]',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u1-l6-w3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions:
        '[[Complete with one word.|Completa con una palabra.]]',
      questions: [
        {
          question: '[[You ____ my friend.|Tú ____ mi amigo o amiga.]]',
          correctAnswer: 'are',
          acceptableAnswers: ['are'],
          explanation:
            '[[**You are** + complement.|**You are** + complemento.]]',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u1-l6-w4',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions:
        '[[Write the missing word.|Escribe la palabra que falta.]]',
      questions: [
        {
          question: '[[I am twenty ____ old.|Equivale a «Tengo veinte años».]]',
          correctAnswer: 'years',
          acceptableAnswers: ['years'],
          explanation:
            '[[**I am** + age + **years old**. In Spanish: *Tengo X años*.|**I am** + edad + **years old**. En español: *Tengo X años*.]]',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u1-l6-w5',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions:
        '[[Complete the sentence.|Completa la frase.]]',
      questions: [
        {
          question: '[[I am ____ a student.|Soy ____ estudiante.]]',
          correctAnswer: 'a',
          acceptableAnswers: ['a'],
          explanation:
            '[[**I am a** + job/role. Use **a** before the noun.|**I am a** + profesión. Va **a** antes del sustantivo.]]',
        },
      ],
    },
    topicName: 'Writing',
  },

  // ─── 6–8: Ordenar palabras y escribir oración ──────────────────────────────
  {
    id: 'a1-u1-l6-w6',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions:
        '[[Put the words in order, then write the full sentence (or check your order).|Ordena las palabras y escribe la frase completa.]]',
      correctSentence: '[[My name is Carlos.|Mi nombre es Carlos.]]',
      words: ['[[is|es]]', '[[My|Mi]]', '[[name|nombre]]', '[[Carlos|Carlos]].'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u1-l6-w7',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions:
        '[[Put the words in order to make a correct sentence.|Ordena las palabras para formar una frase correcta.]]',
      correctSentence: '[[I am from Barcelona.|Soy de Barcelona.]]',
      words: ['[[am|soy]]', '[[I|Yo]]', '[[from|de]]', '[[Barcelona|Barcelona]].'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u1-l6-w8',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions:
        '[[Put the words in order.|Ordena las palabras.]]',
      correctSentence: '[[You are a teacher.|Eres profesor o profesora.]]',
      words: ['[[are|eres]]', '[[You|Tú]]', '[[a|un]]', '[[teacher|profesor]].'],
    },
    topicName: 'Writing',
  },

  // ─── 9–12: Redacción corta guiada (1–3 frases) ───────────────────────────
  {
    id: 'a1-u1-l6-w9',
    type: 'writing',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions:
        '[[Write your name and age. Example: My name is … I am … years old. Write 1–2 sentences.|Escribe tu nombre y edad. Modelo: My name is … I am … years old. Una o dos frases.]]',
      prompt:
        '[[My name is …. I am … years old.|Mi nombre es …. En inglés para la edad: I am … years old.]]',
      minWords: 5,
      maxWords: 15,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u1-l6-w10',
    type: 'writing',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions:
        '[[Write where you are from (city or country). Example: I am from Madrid. One sentence.|Escribe de dónde eres (ciudad o país). Ejemplo: I am from Madrid. Una frase.]]',
      prompt: '[[I am from _____.|Soy de _____.]]',
      minWords: 3,
      maxWords: 10,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u1-l6-w11',
    type: 'writing',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions:
        '[[Write if you are a student or a teacher (or another job). Examples: I am a student. / I am a teacher.|Escribe si eres estudiante o profesor (u otro empleo). Ejemplos: I am a student. / I am a teacher.]]',
      prompt: '[[I am a _____.|Soy _____.]]',
      minWords: 3,
      maxWords: 8,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u1-l6-w12',
    type: 'writing',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions:
        '[[Write a short greeting and introduction: hello, your name, and Nice to meet you. (2–3 sentences)|Escribe saludo y presentación: hola, tu nombre y Nice to meet you. (2–3 frases).]]',
      prompt:
        '[[Hello / Hi. My name is …. Nice to meet you.|Hola. Mi nombre es …. Nice to meet you.]]',
      minWords: 8,
      maxWords: 20,
    },
    topicName: 'Writing',
  },

  // ─── 13–15: Redacción libre corta (4–6 frases) ───────────────────────────
  {
    id: 'a1-u1-l6-w13',
    type: 'writing',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions:
        '[[Write a short paragraph about yourself: name, age, city or country, job or studies. Use 4–6 sentences.|Escribe un párrafo sobre ti: nombre, edad, ciudad o país, trabajo o estudios. Usa 4–6 frases.]]',
      prompt:
        '[[Write about yourself: name, age, where you are from, job or studies.|Escribe sobre ti: nombre, edad, origen, trabajo o estudios.]]',
      minWords: 25,
      maxWords: 60,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u1-l6-w14',
    type: 'writing',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions:
        '[[Imagine you meet a new friend. Write what you would say: greeting, name, age, where you are from. (4–6 sentences)|Imagina que conoces a un amigo nuevo. Escribe qué dirías: saludo, nombre, edad, origen. (4–6 frases).]]',
      prompt:
        '[[Introduce yourself to a new friend.|Preséntate a un amigo nuevo.]]',
      minWords: 25,
      maxWords: 60,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u1-l6-w15',
    type: 'writing',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions:
        '[[Write a short profile for a course or forum: name, age, city/country, job or student, plus one sentence about you (e.g. I am happy to be here). 4–6 sentences.|Escribe un perfil breve: nombre, edad, ciudad/país, trabajo o estudiante, y una frase sobre ti. 4–6 frases.]]',
      prompt:
        '[[Short personal profile for a course or forum.|Perfil personal breve para un curso o foro.]]',
      minWords: 30,
      maxWords: 70,
    },
    topicName: 'Writing',
  },
];

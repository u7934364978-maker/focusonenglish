/**
 * Unidad 2 — Lección 6: Expresión escrita
 * 15 ejercicios: 5 completar frases, 3 ordenar y escribir oración, 4 redacción guiada (1–3 frases), 3 redacción libre (4–6 frases)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión escrita';

export const UNIT_2_LESSON_6_WRITING: Exercise[] = [
  // ─── 1–5: Completar frases (por escrito) ──────────────────────────────────
  {
    id: 'a1-u2-l6-w1',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa la frase con la palabra correcta. Escribe tu respuesta.',
      questions: [
        {
          question: 'She is ____ France. She is French.',
          correctAnswer: 'from',
          acceptableAnswers: ['from'],
          explanation: '[[We|Nosotros]] [[say|decimos]] "[[is from|es de]]" + [[country|país]] [[to|para]] [[indicate|indicar]] [[origin|origen]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u2-l6-w2',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe la palabra que completa la frase.',
      questions: [
        {
          question: 'They are from Spain. They are ____.',
          correctAnswer: 'Spanish',
          acceptableAnswers: ['Spanish'],
          explanation: '[[From Spain|De España]] → [[Spanish|español/española]]: [[the|la]] [[nationality|nacionalidad]] [[of|de]] [[Spain|España]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u2-l6-w3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con una palabra.',
      questions: [
        {
          question: 'He is from ____. He is Italian.',
          correctAnswer: 'Italy',
          acceptableAnswers: ['Italy'],
          explanation: '[[Italian|Italiano]] → [[from Italy|de Italia]]: [[Italy|Italia]] [[is|es]] [[the|el]] [[country|país]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u2-l6-w4',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe la palabra que falta.',
      questions: [
        {
          question: 'We are from Brazil. We are ____.',
          correctAnswer: 'Brazilian',
          acceptableAnswers: ['Brazilian'],
          explanation: '[[From Brazil|De Brasil]] → [[Brazilian|brasileño/brasileña]]: [[the|la]] [[nationality|nacionalidad]] [[of|de]] [[Brazil|Brasil]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u2-l6-w5',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa la frase.',
      questions: [
        {
          question: 'My friend ____ from Japan. He is Japanese.',
          correctAnswer: 'is',
          acceptableAnswers: ['is'],
          explanation: '[[He|Él]] / [[She|Ella]] + [[is|es]] + [[from|de]] + [[country|país]].',
        },
      ],
    },
    topicName: 'Writing',
  },

  // ─── 6–8: Ordenar palabras y escribir oración ──────────────────────────────
  {
    id: 'a1-u2-l6-w6',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Order|Ordena]] [[the|las]] [[words|palabras]] and [[write|escribe]] [[the|la]] [[sentence|frase]] [[in|en]] [[the|el]] [[box|recuadro]] [[below|abajo]] [[or|o]] [[check|comprueba]] [[your|tu]] [[order|orden]].',
      correctSentence: '[[She|Ella]] [[is|es]] [[from|de]] [[Germany|Alemania]].',
      words: ['[[is|es]]', '[[She|Ella]]', '[[from|de]]', '[[Germany|Alemania]].'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u2-l6-w7',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Order|Ordena]] [[the|las]] [[words|palabras]] [[to|para]] [[form|formar]] [[a|una]] [[correct|correcta]] [[sentence|frase]].',
      correctSentence: '[[They|Ellos]] [[are|son]] [[Chinese|chinos]].',
      words: ['[[are|son]]', '[[They|Ellos]]', '[[Chinese|chinos]].'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u2-l6-w8',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Order|Ordena]] [[the|las]] [[words|palabras]].',
      correctSentence: '[[He|Él]] [[is|es]] [[from|de]] [[Mexico|México]] and [[is|es]] [[Mexican|mexicano]].',
      words: ['[[is|es]]', '[[He|Él]]', '[[from|de]]', '[[Mexico|México]]', 'and', '[[is|es]]', '[[Mexican|mexicano]].'],
    },
    topicName: 'Writing',
  },

  // ─── 9–12: Redacción corta guiada (1–3 frases) ───────────────────────────
  {
    id: 'a1-u2-l6-w9',
    type: 'writing',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Write|Escribe]] [[where|dónde]] [[your|tu]] [[friend|amigo]] [[is|es]] [[from|de]] and [[their|su]] [[nationality|nacionalidad]]. [[Model|Modelo]]: "[[My friend is from|Mi amigo es de]] ... [[He/She is|Él/Ella es]] ...". [[Write|Escribe]] [[1|una]] [[or|o]] [[2|dos]] [[sentences|frases]].',
      prompt: '[[My friend is from|Mi amigo/a es de]] ____. [[He/She is|Él/Ella es]] ____.',
      minWords: 5,
      maxWords: 15,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u2-l6-w10',
    type: 'writing',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Write|Escribe]] [[about|sobre]] [[two|dos]] [[people|personas]] and [[their|sus]] [[countries|países]]. [[Model|Modelo]]: "[[She is from France. He is from Japan.|Ella es de Francia. Él es de Japón.]]". [[Two|Dos]] [[sentences|frases]].',
      prompt: '[[She/He is from|Ella/Él es de]] ____. [[She/He is|Ella/Él es]] ____.',
      minWords: 8,
      maxWords: 20,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u2-l6-w11',
    type: 'writing',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Write|Escribe]] [[your|tu]] [[own|propia]] [[country|país]] and [[nationality|nacionalidad]]. [[Model|Modelo]]: "[[I am from|Soy de]] ... [[I am|Soy]] ...". [[One|Una]] [[or|o]] [[two|dos]] [[sentences|frases]].',
      prompt: '[[I am from|Soy de]] ____. [[I am|Soy]] ____.',
      minWords: 5,
      maxWords: 12,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u2-l6-w12',
    type: 'writing',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Write|Escribe]] [[a|una]] [[short|breve]] [[description|descripción]] [[of|de]] [[a|una]] [[group|grupo]] [[of|de]] [[friends|amigos]] [[from|de]] [[different|diferentes]] [[countries|países]]. [[Model|Modelo]]: "[[We are from different countries. Ana is Spanish. Tom is British.|Somos de países diferentes. Ana es española. Tom es británico.]]". [[2|Dos]] [[or|o]] [[3|tres]] [[sentences|frases]].',
      prompt: '[[We are from|Somos de]] ____. ____ [[is|es]] ____. ____ [[is|es]] ____.',
      minWords: 10,
      maxWords: 25,
    },
    topicName: 'Writing',
  },

  // ─── 13–15: Redacción libre corta (4–6 frases) ───────────────────────────
  {
    id: 'a1-u2-l6-w13',
    type: 'writing',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Write|Escribe]] [[a|un]] [[short|breve]] [[paragraph|párrafo]] [[about|sobre]] [[yourself|ti mismo]] and [[two|dos]] [[friends|amigos]]. [[Include|Incluye]]: [[where each person is from|de dónde es cada persona]] and [[their|su]] [[nationality|nacionalidad]]. [[Use|Usa]] [[4|cuatro]] [[to|a]] [[6|seis]] [[sentences|frases]]. [[Model|Modelo]]: "[[I am from ... I am ... My friend Ana is from ... She is ... Tom is from ... He is ...|Soy de ... Soy ... Mi amiga Ana es de ... Ella es ... Tom es de ... Él es ...]]".',
      prompt: '[[Write about yourself and two friends: countries and nationalities|Escribe sobre ti y dos amigos: países y nacionalidades]].',
      minWords: 25,
      maxWords: 60,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u2-l6-w14',
    type: 'writing',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Imagine|Imagina]] [[you|tú]] [[are|eres]] [[in|en]] [[an|una]] [[international|internacional]] [[class|clase]]. [[Write|Escribe]] [[about|sobre]] [[three|tres]] [[classmates|compañeros]] [[from|de]] [[different|diferentes]] [[countries|países]]: [[their|su]] [[name|nombre]], [[country|país]] and [[nationality|nacionalidad]]. [[4|Cuatro]] [[to|a]] [[6|seis]] [[sentences|frases]].',
      prompt: '[[Describe three international classmates: name, country and nationality|Describe tres compañeros internacionales: nombre, país y nacionalidad]].',
      minWords: 25,
      maxWords: 65,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u2-l6-w15',
    type: 'writing',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Write|Escribe]] [[a|un]] [[short|breve]] [[paragraph|párrafo]] [[introducing|presentando]] [[a|un]] [[group|grupo]] [[of|de]] [[international|internacional]] [[friends|amigos]] [[as|como]] [[if|si]] [[for|para]] [[a|una]] [[presentation|presentación]]. [[Include|Incluye]]: [[names|nombres]], [[countries|países]], [[nationalities|nacionalidades]] and [[one|una]] [[extra|extra]] [[detail|detalle]] [[per|por]] [[person|persona]] [[(e.g.|(ej.]] [[a job or hobby|un trabajo o hobby]])). [[4|Cuatro]] [[to|a]] [[6|seis]] [[sentences|frases]].',
      prompt: '[[Short group presentation: names, countries, nationalities and one detail per person|Presentación grupal breve: nombres, países, nacionalidades y un detalle por persona]].',
      minWords: 30,
      maxWords: 70,
    },
    topicName: 'Writing',
  },
];

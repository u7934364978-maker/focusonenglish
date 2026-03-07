/**
 * Unidad 1 — Lección 6: Expresión escrita
 * 15 ejercicios: 5 completar frases, 3 ordenar y escribir oración, 4 redacción guiada (1–3 frases), 3 redacción libre (4–6 frases)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión escrita';

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
      instructions: '[[Complete|Completa]] [[the|la]] [[sentence|frase]] [[with|con]] [[the|la]] [[correct|correcta]] [[word|palabra]]. [[Write|Escribe]] [[your|tu]] [[answer|respuesta]].',
      questions: [
        {
          question: '[[My|Mi]] ____ [[is|es]] [[Ana|Ana]].',
          correctAnswer: 'name',
          acceptableAnswers: ['name'],
          explanation: '[[We|Nosotros]] [[say|decimos]] "[[My name is|Mi nombre es]]" + [[name|nombre]].',
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
      instructions: '[[Write|Escribe]] [[the|la]] [[word|palabra]] [[that|que]] [[completes|complete]] [[the|la]] [[sentence|frase]].',
      questions: [
        {
          question: '[[I|Yo]] ____ [[from|de]] [[Madrid|Madrid]].',
          correctAnswer: 'am',
          acceptableAnswers: ['am'],
          explanation: '[[I|Yo]] + [[am|soy]] + [[from|de]] + [[place|lugar]].',
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
      instructions: '[[Complete|Completa]] [[with|con]] [[one|una]] [[word|palabra]].',
      questions: [
        {
          question: '[[You|Tú]] ____ [[my|mi]] [[friend|amigo]].',
          correctAnswer: 'are',
          acceptableAnswers: ['are'],
          explanation: '[[You|Tú]] + [[are|eres]] + [[complement|complemento]].',
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
      instructions: '[[Write|Escribe]] [[the|la]] [[missing|faltante]] [[word|palabra]].',
      questions: [
        {
          question: '[[I|Yo]] [[am|tengo]] [[twenty|veinte]] ____ [[old|de edad]].',
          correctAnswer: 'years',
          acceptableAnswers: ['years'],
          explanation: '[[We|Nosotros]] [[say|decimos]] "[[years old|años (de edad)]]" [[for|para]] [[age|edad]].',
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
      instructions: '[[Complete|Completa]] [[the|la]] [[sentence|frase]].',
      questions: [
        {
          question: '[[I|Yo]] [[am|soy]] ____ [[a|un]] [[student|estudiante]].',
          correctAnswer: 'a',
          acceptableAnswers: ['a'],
          explanation: '[[I am a student|Soy un estudiante]]: [[article|artículo]] "[[a|un]]" [[before|antes]] [[profession|profesión]]/[[role|rol]].',
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
      instructions: '[[Order|Ordena]] [[the|las]] [[words|palabras]] and [[write|escribe]] [[the|la]] [[sentence|frase]] [[in|en]] [[the|el]] [[box|recuadro]] [[below|abajo]] [[or|o]] [[check|comprueba]] [[your|tu]] [[order|orden]].',
      correctSentence: '[[My|Mi]] [[name|nombre]] [[is|es]] [[Carlos|Carlos]].',
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
      instructions: '[[Order|Ordena]] [[the|las]] [[words|palabras]] [[to|para]] [[form|formar]] [[a|una]] [[correct|correcta]] [[sentence|frase]].',
      correctSentence: '[[I|Yo]] [[am|soy]] [[from|de]] [[Barcelona|Barcelona]].',
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
      instructions: '[[Order|Ordena]] [[the|las]] [[words|palabras]].',
      correctSentence: '[[You|Tú]] [[are|eres]] [[a|un]] [[teacher|profesor]].',
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
      instructions: '[[Write|Escribe]] [[your|tu]] [[name|nombre]] and [[age|edad]]. [[Model|Modelo]]: "[[My name is|Mi nombre es]] ... [[I am|Tengo]] ... [[years old|años]]." [[Write|Escribe]] [[1|una]] [[or|o]] [[2|dos]] [[sentences|frases]].',
      prompt: '[[My name is|Mi nombre es]] ____. [[I am|Tengo]] ____ [[years old|años]].',
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
      instructions: '[[Write|Escribe]] [[where|dónde]] [[you|tú]] [[are|eres]] [[from|de]] [[(city|(ciudad]] [[or|o]] [[country|país)]]. [[Model|Modelo]]: "[[I am from|Soy de]] ...". [[One|Una]] [[sentence|frase]].',
      prompt: '[[I am from|Soy de]] ____.',
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
      instructions: '[[Write|Escribe]] [[if|si]] [[you|tú]] [[are|eres]] [[a|un/una]] [[student|estudiante]] [[or|o]] [[teacher|profesor]] [[(or|(o]] [[another|otra]] [[job|profesión)]]. [[Model|Modelo]]: "[[I am a student|Soy estudiante]]" [[or|o]] "[[I am a teacher|Soy profesor]]".',
      prompt: '[[I am a|Soy]] ____.',
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
      instructions: '[[Write|Escribe]] [[a|una]] [[short|breve]] [[greeting|saludo]] and [[introduction|presentación]]: [[say|di]] [[hello|hola]], [[your|tu]] [[name|nombre]] and "[[Nice to meet you|Encantado de conocerte]]". [[2|Dos]] [[or|o]] [[3|tres]] [[sentences|frases]].',
      prompt: '[[Hello|Hola]] / [[Hi|Hola]]. [[My name is|Mi nombre es]] ____. [[Nice to meet you|Encantado de conocerte]].',
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
      instructions: '[[Write|Escribe]] [[a|una]] [[short|breve]] [[paragraph|párrafo]] [[about|sobre]] [[yourself|ti mismo]]. [[Include|Incluye]]: [[name|nombre]], [[age|edad]], [[city|ciudad]] [[or|o]] [[country|país]], [[job|trabajo]] [[or|o]] [[student|estudiante]]. [[Use|Usa]] [[4|cuatro]] [[to|a]] [[6|seis]] [[sentences|frases]]. [[Model|Modelo]]: "[[My name is|Mi nombre es]] ... [[I am|Tengo]] ... [[years old|años]]. [[I am from|Soy de]] ... [[I am a|Soy]] ...".',
      prompt: '[[Write about yourself|Escribe sobre ti mismo]]: [[name|nombre]], [[age|edad]], [[where you are from|de dónde eres]], [[job or student|trabajo o estudiante]].',
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
      instructions: '[[Imagine|Imagina]] [[you|tú]] [[meet|conoces]] [[a|un]] [[new|nuevo]] [[friend|amigo]]. [[Write|Escribe]] [[what|qué]] [[you|tú]] [[would|dirías]] [[say|decir]]: [[greeting|saludo]], [[your name|tu nombre]], [[age|edad]], [[where you are from|de dónde eres]]. [[4|Cuatro]] [[to|a]] [[6|seis]] [[sentences|frases]].',
      prompt: '[[Introduce yourself to a new friend|Preséntate a un amigo nuevo]].',
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
      instructions: '[[Write|Escribe]] [[your|tu]] [[personal|personal]] [[profile|perfil]] [[as|como]] [[if|si]] [[for|para]] [[a|una]] [[course|curso]] [[or|o]] [[forum|foro]]. [[Include|Incluye]]: [[name|nombre]], [[age|edad]], [[city|ciudad]]/[[country|país]], [[job|trabajo]]/[[student|estudiante]], and [[one|una]] [[sentence|frase]] [[about|sobre]] [[you|ti]] ([[e.g.|ej.]] "[[I am happy to be here|Estoy feliz de estar aquí]]"). [[4|Cuatro]] [[to|a]] [[6|seis]] [[sentences|frases]].',
      prompt: '[[Short personal profile|Perfil personal breve]] [[for a course or forum|para un curso o foro]].',
      minWords: 30,
      maxWords: 70,
    },
    topicName: 'Writing',
  },
];

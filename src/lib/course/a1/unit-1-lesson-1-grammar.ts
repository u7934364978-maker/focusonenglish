/**
 * Unidad 1 — Lección 1: Gramática (verbo to be con I y You)
 * 15 ejercicios intercalados: alterna completar huecos y elección múltiple, luego ordenar y V/F.
 * Título de lección: "Verbo to be"
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Verb to be|Verbo to be]]';
const INSTRUCTIONS_FILL =
  '[[Choose the correct form of the verb to be (am, are or is) for each sentence.|Elige la forma correcta del verbo to be (am, are o is) para cada frase.]]';
const INSTRUCTIONS_MULTIPLE =
  '[[Choose the correct sentence or form.|Elige la frase o la forma correcta.]]';
const INSTRUCTIONS_ORDER =
  '[[Put the words in the correct order to make a sentence.|Ordena las palabras para formar una oración correcta.]]';
const INSTRUCTIONS_TF =
  '[[Say if the statement is true or false.|Indica si la afirmación es verdadera o falsa.]]';

export const UNIT_1_LESSON_1_GRAMMAR: Exercise[] = [
  // g1 fill
  {
    id: 'a1-u1-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[Maria|María]].',
          options: ['am', 'are', 'is'],
          correctAnswer: 'am',
          explanation:
            '[[With the pronoun "I", we always use **am** (I am…).|Con el pronombre «I» usamos siempre **am** (I am… / soy o estoy).]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  // g6 mc
  {
    id: 'a1-u1-l1-g6',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which sentence is correct?|¿Qué frase es correcta?]]',
          options: [
            '[[I am twenty years old.|Tengo veinte años.]]',
            '[[I twenty am years old.|(orden incorrecto)]]',
            '[[I years old am twenty.|(orden incorrecto)]]',
          ],
          correctAnswer: 0,
          explanation:
            '[[In English we say **I am** + age + **years old**. In Spanish you often say *Tengo X años*; in English we use **to be**, not *have*, for age here.|En inglés decimos **I am** + edad + **years old**. En español suele usarse *Tengo X años*; en inglés aquí va **to be**, no *have*.]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  // g2 fill
  {
    id: 'a1-u1-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[a|un]] [[student|estudiante]].',
          options: ['am', 'are', 'is'],
          correctAnswer: 'am',
          explanation:
            '[[**I am** + **a** + profession or role: *I am a student*.|**I am** + **a** + profesión o rol: *I am a student*.]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  // g7 mc
  {
    id: 'a1-u1-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose the correct form for “My name is…”.|Elige la forma correcta para «My name is…».]]',
          options: [
            '[[My name am Carlos.|(incorrecto: después de «name» va «is».)]]',
            '[[My name is Carlos.|Mi nombre es Carlos.]]',
            '[[My name are Carlos.|(incorrecto: «name» va con «is».)]]',
          ],
          correctAnswer: 1,
          explanation:
            '[[After **My name** you need **is** + the name: *My name is Carlos*.|Después de **My name** va **is** + el nombre: *My name is Carlos*.]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  // g3 fill
  {
    id: 'a1-u1-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[You|Usted / tú]] ____ [[my friend|mi amigo o amiga]].',
          options: ['am', 'are', 'is'],
          correctAnswer: 'are',
          explanation:
            '[[With **you** (you / tú / vosotros), we use **are**: *You are my friend*.|Con **you** usamos **are**: *You are my friend*.]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  // g8 mc
  {
    id: 'a1-u1-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which sentence is correct?|¿Qué frase es correcta?]]',
          options: [
            '[[You is from Spain.|(incorrecto: con «you» va «are».)]]',
            '[[You are from Spain.|Eres / sois / son de España (según el «you»).]]',
            '[[You am from Spain.|(incorrecto: «am» solo va con «I».)]]',
          ],
          correctAnswer: 1,
          explanation:
            '[[With **you**, use **are** for *to be*: *You are from Spain*. **Is** goes with *he/she/it*; **am** only with *I*.|Con **you** usa **are**: *You are from Spain*. **Is** va con *he/she/it*; **am** solo con *I*.]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  // g4 fill
  {
    id: 'a1-u1-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[from|de]] [[Madrid|Madrid]].',
          options: ['am', 'are', 'is'],
          correctAnswer: 'am',
          explanation:
            '[[**I am from** + city: *I am from Madrid*.|**I am from** + ciudad: *I am from Madrid*.]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  // g9 mc
  {
    id: 'a1-u1-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete the sentence: I ____ a teacher.|Completa: I ____ a teacher (profesora).]]',
          options: ['am', 'is', 'are'],
          correctAnswer: 0,
          explanation:
            '[[**I** + **am** + **a** + job: *I am a teacher*.|**I** + **am** + **a** + profesión: *I am a teacher*.]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  // g5 fill
  {
    id: 'a1-u1-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[You|Tú]] ____ [[twenty-five|veinticinco]] [[years|años]] [[old|de edad]].',
          options: ['am', 'are', 'is'],
          correctAnswer: 'are',
          explanation:
            '[[**You are** + age + **years old**. In Spanish you say *Tienes X años*; in English use **to be**, not *have*, for this pattern.|**You are** + edad + **years old**. En español dices *Tienes X años*; en inglés aquí usa **to be**, no *have*.]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  // g10 mc
  {
    id: 'a1-u1-l1-g10',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which sentence is correct?|¿Qué frase es correcta?]]',
          options: [
            '[[You are my friend.|Tú eres mi amigo o amiga.]]',
            '[[You am my friend.|(incorrecto: «am» solo con «I».)]]',
            '[[You is my friend.|(incorrecto: con «you» va «are».)]]',
          ],
          correctAnswer: 0,
          explanation:
            '[[With **you**, the correct form is **are**: *You are my friend*.|Con **you** la forma correcta es **are**: *You are my friend*.]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  // g11–g13 sentence-building
  {
    id: 'a1-u1-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[My|Mi]] [[name|nombre]] [[is|es]] [[Ana|Ana]].',
      words: ['[[name|nombre]]', '[[My|Mi]]', '[[is|es]]', '[[Ana|Ana]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u1-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[am|soy]] [[from|de]] [[Barcelona|Barcelona]].',
      words: ['[[am|soy]]', '[[I|Yo]]', '[[from|de]]', '[[Barcelona|Barcelona]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u1-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[am|soy]] [[thirty|treinta]] [[years old|años de edad]].',
      words: ['[[years old|años de edad]].', '[[thirty|treinta]]', '[[am|soy]]', '[[I|Yo]]'],
    },
    topicName: 'Grammar',
  },
  // g14–g15 true-false
  {
    id: 'a1-u1-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question:
            '[[Is “You am my teacher” a correct sentence in English?|¿Es correcta en inglés la frase «You am my teacher»?]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation:
            '[[**False.** With **you** you must use **are**, not *am*: *You are my teacher*.|**Falso.** Con **you** debe usarse **are**, no *am*: *You are my teacher*.]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u1-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question:
            '[[Is “I am from Spain” correct in English?|¿Es correcta en inglés la frase «I am from Spain»?]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation:
            '[[**True.** *I am from* + country is a standard pattern to say where you are from.|**Verdadero.** *I am from* + país es una estructura normal para decir de dónde eres.]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
];

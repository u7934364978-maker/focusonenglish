/**
 * Unidad 4 — Lección 3: Comprensión lectora
 * 15 ejercicios individuales: 8 elección múltiple + 4 verdadero/falso + 3 síntesis
 * Título de lección: "Comprensión lectora"
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión lectora';
const INSTRUCTIONS_MC = 'Lee el texto y elige la respuesta correcta.';
const INSTRUCTIONS_TF = 'Lee el texto e indica si la afirmación es verdadera o falsa.';
const INSTRUCTIONS_SYNTHESIS = 'Lee el texto y elige la opción que mejor responde.';

const READING_TRANSCRIPT =
  '[[Hi!|¡Hola!]] [[My|Mi]] [[name|nombre]] [[is|es]] [[Pablo.|Pablo.]] ' +
  '[[This|Esta]] [[is|es]] [[my|mi]] [[classroom.|aula.]] ' +
  '[[It|Es]] [[is|es]] [[a|una]] [[big|gran]] [[room.|sala.]] ' +
  '[[There is|Hay]] [[a|una]] [[board|pizarra]] [[on|en]] [[the|la]] [[wall.|pared.]] ' +
  '[[There are|Hay]] [[twenty|veinte]] [[chairs|sillas]] [[and|y]] [[ten|diez]] [[desks.|escritorios.]] ' +
  '[[On|En]] [[my|mi]] [[desk,|escritorio,]] [[there is|hay]] [[a|un]] [[blue|azul]] [[pen,|bolígrafo,]] ' +
  '[[a|un]] [[red|rojo]] [[notebook|cuaderno]] [[and|y]] [[an|una]] [[eraser.|goma.]] ' +
  '[[My|Mi]] [[pencil|lápiz]] [[is|es]] [[green.|verde.]] ' +
  '[[My|Mi]] [[bag|mochila]] [[is|es]] [[black.|negra.]] ' +
  '[[Are there|¿Hay]] [[books|libros]] [[on|en]] [[your|tu]] [[desk?|escritorio?]] ' +
  '[[Yes,|Sí,]] [[there are|hay]] [[three|tres]] [[books.|libros.]] ' +
  '[[Is that|¿Es eso]] [[a|una]] [[ruler?|regla?]] ' +
  '[[Yes,|Sí,]] [[it is!|¡lo es!]] ' +
  '[[This|Este]] [[is|es]] [[a|un]] [[great|magnífico]] [[classroom!|aula!]]';

export const UNIT_4_LESSON_3_READING: Exercise[] = [
  // ─── 1–8: Lectura + elección múltiple ────────────────────────────────────
  {
    id: 'a1-u4-l3-reading-1',
    type: 'reading',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[Who is speaking?|¿Quién habla?]]',
          options: [
            '[[María|María]]',
            '[[Pablo|Pablo]]',
            '[[The teacher|El maestro]]',
            '[[Sofía|Sofía]]',
          ],
          correctAnswer: 1,
          explanation: '[[The text says|El texto dice]] "[[My name is Pablo.|Me llamo Pablo.]]"',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u4-l3-reading-2',
    type: 'reading',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What is on the wall?|¿Qué hay en la pared?]]',
          options: [
            '[[A window|Una ventana]]',
            '[[A clock|Un reloj]]',
            '[[A board|Una pizarra]]',
            '[[A desk|Un escritorio]]',
          ],
          correctAnswer: 2,
          explanation: '[[The text says|El texto dice]] "[[There is a board on the wall.|Hay una pizarra en la pared.]]"',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u4-l3-reading-3',
    type: 'reading',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[How many chairs are there?|¿Cuántas sillas hay?]]',
          options: [
            '[[Ten|Diez]]',
            '[[Three|Tres]]',
            '[[Twenty|Veinte]]',
            '[[Four|Cuatro]]',
          ],
          correctAnswer: 2,
          explanation: '[[The text says|El texto dice]] "[[There are twenty chairs.|Hay veinte sillas.]]"',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u4-l3-reading-4',
    type: 'reading',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What is on Pablo\'s desk?|¿Qué hay en el escritorio de Pablo?]]',
          options: [
            '[[A green pen and a black notebook.|Un bolígrafo verde y un cuaderno negro.]]',
            '[[A blue pen, a red notebook and an eraser.|Un bolígrafo azul, un cuaderno rojo y una goma.]]',
            '[[A ruler and three books.|Una regla y tres libros.]]',
            '[[An eraser and a yellow pencil.|Una goma y un lápiz amarillo.]]',
          ],
          correctAnswer: 1,
          explanation: '[[The text describes|El texto describe]] [[a blue pen, a red notebook and an eraser.|un bolígrafo azul, un cuaderno rojo y una goma.]]',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u4-l3-reading-5',
    type: 'reading',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What color is the pencil?|¿De qué color es el lápiz?]]',
          options: [
            '[[Blue|Azul]]',
            '[[Red|Rojo]]',
            '[[Black|Negro]]',
            '[[Green|Verde]]',
          ],
          correctAnswer: 3,
          explanation: '[[The text says|El texto dice]] "[[My pencil is green.|Mi lápiz es verde.]]"',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u4-l3-reading-6',
    type: 'reading',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What color is the bag?|¿De qué color es la mochila?]]',
          options: [
            '[[Red|Rojo]]',
            '[[Green|Verde]]',
            '[[Black|Negro]]',
            '[[Blue|Azul]]',
          ],
          correctAnswer: 2,
          explanation: '[[The text says|El texto dice]] "[[My bag is black.|Mi mochila es negra.]]"',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u4-l3-reading-7',
    type: 'reading',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[How many books are there?|¿Cuántos libros hay?]]',
          options: [
            '[[Two|Dos]]',
            '[[Five|Cinco]]',
            '[[Four|Cuatro]]',
            '[[Three|Tres]]',
          ],
          correctAnswer: 3,
          explanation: '[[The text says|El texto dice]] "[[Yes, there are three books.|Sí, hay tres libros.]]"',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u4-l3-reading-8',
    type: 'reading',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What does "Yes, it is!" confirm?|¿Qué confirma "¡Sí, lo es!"?]]',
          options: [
            '[[The bag is black.|La mochila es negra.]]',
            '[[There is a ruler.|Hay una regla.]]',
            '[[The pencil is green.|El lápiz es verde.]]',
            '[[There are books on the desk.|Hay libros en el escritorio.]]',
          ],
          correctAnswer: 1,
          explanation: '[[The question "Is that a ruler?" is confirmed with "Yes, it is!"|La pregunta "¿Es eso una regla?" se confirma con "¡Sí, lo es!"]]',
        },
      ],
    },
    topicName: 'Reading',
  },

  // ─── 9–12: Lectura + verdadero/falso ──────────────────────────────────────
  {
    id: 'a1-u4-l3-reading-9',
    type: 'reading',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[The room is small.|La sala es pequeña.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False.|Falso.]] [[The text says|El texto dice]] "[[It is a big room.|Es una gran sala.]]"',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u4-l3-reading-10',
    type: 'reading',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[There is a board on the wall.|Hay una pizarra en la pared.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True.|Verdadero.]] [[The text confirms|El texto confirma]] "[[There is a board on the wall.|Hay una pizarra en la pared.]]"',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u4-l3-reading-11',
    type: 'reading',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[Pablo\'s bag is green.|La mochila de Pablo es verde.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False.|Falso.]] [[The text says|El texto dice]] "[[My bag is black.|Mi mochila es negra.]]"',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u4-l3-reading-12',
    type: 'reading',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[There are three books on the desk.|Hay tres libros en el escritorio.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True.|Verdadero.]] [[The text says|El texto dice]] "[[Yes, there are three books.|Sí, hay tres libros.]]"',
        },
      ],
    },
    topicName: 'Reading',
  },

  // ─── 13–15: Lectura + síntesis ────────────────────────────────────────────
  {
    id: 'a1-u4-l3-reading-13',
    type: 'reading',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_SYNTHESIS,
      questions: [
        {
          question: '[[What is the main topic?|¿Cuál es el tema principal?]]',
          options: [
            '[[A description of Pablo\'s classroom.|Una descripción del aula de Pablo.]]',
            '[[A story about Pablo\'s family.|Una historia sobre la familia de Pablo.]]',
            '[[A list of English colors.|Una lista de colores en inglés.]]',
            '[[Instructions for using a classroom.|Instrucciones para usar el aula.]]',
          ],
          correctAnswer: 0,
          explanation: '[[Pablo describes objects, colors and quantities in his classroom.|Pablo describe objetos, colores y cantidades en su aula.]]',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u4-l3-reading-14',
    type: 'reading',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_SYNTHESIS,
      questions: [
        {
          question: '[[What does "This is a big room" show?|¿Qué muestra "This is a big room"?]]',
          options: [
            '[[Demonstrative + verb + article + adjective + noun.|Demostrativo + verbo + artículo + adjetivo + sustantivo.]]',
            '[[Plural demonstrative + verb + noun.|Demostrativo plural + verbo + sustantivo.]]',
            '[[Possessive + verb + adjective.|Posesivo + verbo + adjetivo.]]',
            '[[Article + adjective + noun.|Artículo + adjetivo + sustantivo.]]',
          ],
          correctAnswer: 0,
          explanation: '"[[This|Este]]" [[is|es]] [[a demonstrative,|un demostrativo,]] "[[is|es]]" [[is the verb,|es el verbo,]] "[[a|un]]" [[is the article,|es el artículo,]] "[[big|gran]]" [[is the adjective|es el adjetivo]] [[and|y]] "[[room|sala]]" [[is the noun.|es el sustantivo.]]',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u4-l3-reading-15',
    type: 'reading',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_SYNTHESIS,
      questions: [
        {
          question: '[[Which demonstrative for plural nearby?|¿Qué demostrativo para plural cercano?]]',
          options: [
            '[[This|Este/Esta]]',
            '[[That|Ese/Esa]]',
            '[[Those|Esos/Esas]]',
            '[[These|Estos/Estas]]',
          ],
          correctAnswer: 3,
          explanation: '"[[These|Estos/Estas]]" [[is|es]] [[the plural demonstrative|el demostrativo plural]] [[for objects that are near.|para objetos cercanos.]]',
        },
      ],
    },
    topicName: 'Reading',
  },
];

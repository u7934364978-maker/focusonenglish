/**
 * Unidad 6 — Lección 6: Expresión escrita
 * 15 ejercicios: 5 fill-blank, 3 sentence-building, 4 writing guiada (1–3 frases), 3 writing libre (4–6 frases).
 * Instrucciones en español puro; palabras citadas entre comillas con token.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión escrita';
const TOPIC = 'Family & Possessives';

export const UNIT_6_LESSON_6_WRITING: Exercise[] = [
  // ─── 1–5: fill-blank (posesivo o palabra) ─────────────────────────────────
  {
    id: 'a1-u6-l6-w1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa la frase con el adjetivo posesivo correcto para "yo". Escribe la palabra "my" en el hueco.',
      questions: [{
        question: '____ [[mother|madre]] [[is|es]] [[a|una]] [[teacher|profesora]].',
        options: ['[[my|mi]]', '[[your|tu]]', '[[his|su]]', '[[her|su]]'],
        correctAnswer: 'my',
        acceptableAnswers: ['my'],
        explanation: '"My" es el posesivo de "I".',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u6-l6-w2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el adjetivo posesivo que corresponde a "he" (él). Escribe "his".',
      questions: [{
        question: '____ [[father|padre]] [[works|trabaja]] [[in|en]] [[an|una]] [[office|oficina]].',
        options: ['[[my|mi]]', '[[his|su]]', '[[her|su]]', '[[their|su]]'],
        correctAnswer: 'his',
        acceptableAnswers: ['his'],
        explanation: '"His" es el posesivo de "he".',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u6-l6-w3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el adjetivo posesivo que corresponde a "she" (ella). Escribe "her".',
      questions: [{
        question: '____ [[sister|hermana]] [[is|es]] [[twenty|veinte]] [[years|años]] [[old|de edad]].',
        options: ['[[his|su]]', '[[her|su]]', '[[our|nuestra]]', '[[their|su]]'],
        correctAnswer: 'her',
        acceptableAnswers: ['her'],
        explanation: '"Her" es el posesivo de "she".',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u6-l6-w4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el adjetivo posesivo que corresponde a "they" (ellos). Escribe "their".',
      questions: [{
        question: '____ [[parents|padres]] [[live|viven]] [[in|en]] [[Madrid|Madrid]].',
        options: ['[[our|nuestros]]', '[[their|su]]', '[[your|tu]]', '[[my|mi]]'],
        correctAnswer: 'their',
        acceptableAnswers: ['their'],
        explanation: '"Their" es el posesivo de "they".',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u6-l6-w5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el posesivo \'s (apóstrofe + s) para indicar que el libro es de Ana.',
      questions: [{
        question: '[[Ana|Ana]]____ [[book|libro]] [[is|es]] [[on|en]] [[the|la]] [[table|mesa]].',
        options: ["[['s|posesivo]]", "[[s'|s']]", '[[s|s]]', '[[is|es]]'],
        correctAnswer: "'s",
        acceptableAnswers: ["'s"],
        explanation: 'Ana\'s = de Ana. Se escribe apóstrofe + s.',
      }],
    },
    topicName: 'Writing',
  },

  // ─── 6–8: sentence-building ───────────────────────────────────────────────
  {
    id: 'a1-u6-l6-w6',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la oración correcta.',
      correctSentence: '[[My|Mi]] [[sister|hermana]] [[has|tiene]] [[two|dos]] [[children|hijos]].',
      words: ['[[has|tiene]]', '[[My|Mi]]', '[[sister|hermana]]', '[[two|dos]]', '[[children|hijos]].'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u6-l6-w7',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la oración correcta.',
      correctSentence: '[[His|Su]] [[grandmother|abuela]] [[lives|vive]] [[in|en]] [[Madrid|Madrid]].',
      words: ['[[Madrid|Madrid]].', '[[His|Su]]', '[[grandmother|abuela]]', '[[lives|vive]]', '[[in|en]]'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u6-l6-w8',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la oración correcta.',
      correctSentence: '[[Their|Su]] [[parents|padres]] [[work|trabajan]] [[every|todos]] [[day|los días]].',
      words: ['[[every|todos]]', '[[day|los días]].', '[[Their|Su]]', '[[parents|padres]]', '[[work|trabajan]]'],
    },
    topicName: 'Writing',
  },

  // ─── 9–12: writing guiada (1–3 frases) ────────────────────────────────────
  {
    id: 'a1-u6-l6-w9',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe una o dos frases sobre tu madre o tu padre. Usa "my mother" o "my father" y un verbo en presente (is, works, lives, etc.).',
      prompt: '[[My mother|Mi madre]] / [[My father|Mi padre]] [[is|es]] … [[She|Ella]] / [[He|Él]] [[works|lives|is|…]] …',
      minWords: 5,
      maxWords: 20,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u6-l6-w10',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe una o dos frases sobre tus hermanos o hermanas. Usa "my brother", "my sister" o "I have no brothers/sisters".',
      prompt: '[[I have|Tengo]] … [[brother|hermano]] and … [[sister|hermana]]. / [[My brother|Mi hermano]] …',
      minWords: 4,
      maxWords: 18,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u6-l6-w11',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe una frase usando el posesivo \'s. Por ejemplo: "My sister\'s name is …" o "My father\'s car is …".',
      prompt: '[[My|Mi]] ____\'s [[name|nombre]] / [[car|coche]] / [[house|casa]] [[is|es]] …',
      minWords: 4,
      maxWords: 15,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u6-l6-w12',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe dos o tres frases sobre tu abuela o tu abuelo. Dónde vive, qué hace o cómo es. Usa "my grandmother", "my grandfather", "our grandmother", etc.',
      prompt: '[[My|Nuestra]] [[grandmother|abuela]] / [[grandfather|abuelo]] [[lives|vive]] [[in|en]] … [[She|Ella]] / [[He|Él]] …',
      minWords: 8,
      maxWords: 25,
    },
    topicName: 'Writing',
  },

  // ─── 13–15: writing libre (4–6 frases, 25+ a 60+ palabras) ─────────────────
  {
    id: 'a1-u6-l6-w13',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe un párrafo corto sobre tu familia. Incluye: cuántos miembros hay, los nombres o trabajos de tus padres, si tienes hermanos, y dónde viven tus abuelos si lo sabes. Usa adjetivos posesivos (my, our, his, her, their) y el posesivo \'s. Entre 4 y 6 frases.',
      prompt: '[[Describe your family|Describe tu familia]]: [[members|miembros]], [[parents|padres]], [[siblings|hermanos]], [[grandparents|abuelos]].',
      minWords: 25,
      maxWords: 60,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u6-l6-w14',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Imagina que presentas a tu familia a un amigo. Escribe quién es cada persona (my mother, my father, my brother Tom\'s wife, etc.) y una cosa que hace o que le gusta. Entre 4 y 6 frases.',
      prompt: "[[Introduce your family to a friend|Presenta tu familia a un amigo]]. [[Use|Usa]] [[possessives|posesivos]] and [['s|'s]].",
      minWords: 28,
      maxWords: 65,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u6-l6-w15',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe sobre un día con tu familia o sobre lo que hace cada miembro de tu familia (trabajo, estudios, dónde viven). Usa "my", "our", "his", "her", "their" y el posesivo \'s. Entre 4 y 6 frases.',
      prompt: '[[My family|Mi familia]]: [[who|quiénes]] [[they are|son]], [[what they do|qué hacen]], [[where they live|dónde viven]].',
      minWords: 25,
      maxWords: 60,
    },
    topicName: 'Writing',
  },
];

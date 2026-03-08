/**
 * Unidad 1 — Lección 3: Comprensión lectora (Greetings & Introductions)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Maria|María]]. [[I|Yo]] [[am|tengo]] [[twenty-eight|veintiocho]] [[years|años]] [[old|de edad]]. [[My|Mi]] [[hometown|ciudad natal]] [[is|es]] [[Madrid|Madrid]], [[Spain|España]]. [[I|Yo]] [[live|vivo]] [[in|en]] [[a|un]] [[quiet|tranquilo]] [[neighbourhood|barrio]] [[with|con]] [[many|muchos]] [[parks|parques]] [[and|y]] [[cafes|cafés]]. [[My|Mi]] [[favourite|favorito]] [[hobby|pasatiempo]] [[is|es]] [[reading|leer]] [[books|libros]]. [[I|Yo]] [[also|también]] [[love|amo]] [[walking|pasear]] [[in|en]] [[my|mi]] [[neighbourhood|barrio]]. [[I|Yo]] [[am|soy]] [[a|una]] [[teacher|profesora]]. [[I|Yo]] [[teach|enseño]] [[English|inglés]] [[at|en]] [[a|una]] [[small|pequeña]] [[school|escuela]]. [[Nice|Encantada]] [[to|de]] [[meet|conocerte]] [[you|a ti]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[her|su]] [[name|nombre]]?',
    options: ['[[Ana|Ana]]', '[[Maria|María]]', '[[Carmen|Carmen]]', '[[Elena|Elena]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]]: "[[My name is Maria|Mi nombre es María]]".',
  },
  {
    question: '[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Maria|María]]?',
    options: ['[[twenty|veinte]]', '[[twenty-five|veinticinco]]', '[[twenty-eight|veintiocho]]', '[[thirty|treinta]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[twenty-eight years old|veintiocho años]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[her|su]] [[hometown|ciudad natal]]?',
    options: ['[[London|Londres]]', '[[Barcelona|Barcelona]]', '[[Madrid|Madrid]]', '[[Mexico City|Ciudad de México]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[says|dice]]: "[[My hometown is Madrid|Mi ciudad natal es Madrid]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[her|su]] [[favourite|favorito]] [[hobby|pasatiempo]]?',
    options: ['[[swimming|nadar]]', '[[cooking|cocinar]]', '[[reading|leer]]', '[[dancing|bailar]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[says|dice]] "[[My favourite hobby is reading|Mi pasatiempo favorito es leer]]".',
  },
  {
    question: '[[What|Qué]] [[does|enseña]] [[she|ella]] [[teach|enseñar]]?',
    options: ['[[Spanish|Español]]', '[[Math|Matemáticas]]', '[[English|Inglés]]', '[[Science|Ciencias]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I teach English|Enseño inglés]]".',
  },
  {
    question: '[[Where|Dónde]] [[does|enseña]] [[she|ella]] [[work|trabajar]]?',
    options: ['[[at|en]] [[a|una]] [[big|gran]] [[school|escuela]]', '[[at|en]] [[a|una]] [[small|pequeña]] [[school|escuela]]', '[[at|en]] [[home|casa]]', '[[in|en]] [[a|un]] [[hospital|hospital]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I teach at a small school|Enseño en una escuela pequeña]]".',
  },
  {
    question: '[[What|Qué]] [[kind|tipo]] [[of|de]] [[neighbourhood|barrio]] [[does|tiene]] [[she|ella]] [[live|vivir]] [[in|en]]?',
    options: ['[[noisy|ruidoso]]', '[[quiet|tranquilo]]', '[[big|grande]]', '[[old|viejo]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I live in a quiet neighbourhood|Vivo en un barrio tranquilo]]".',
  },
  {
    question: '[[What|Qué]] [[does|hace]] [[she|ella]] [[also|también]] [[love|amar]]?',
    options: ['[[swimming|nadar]]', '[[cooking|cocinar]]', '[[walking|pasear]] [[in|en]] [[her|su]] [[neighbourhood|barrio]]', '[[dancing|bailar]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[says|dice]] "[[I also love walking in my neighbourhood|También amo pasear en mi barrio]]".',
  },
  {
    question: '[[Maria|María]] [[is|es]] [[from|de]] [[Barcelona|Barcelona]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[is|es]] [[from|de]] [[Madrid|Madrid]], [[not|no]] [[Barcelona|Barcelona]].',
  },
  {
    question: '[[Maria|María]] [[is|es]] [[a|una]] [[student|estudiante]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[is|es]] [[a|una]] [[teacher|profesora]], [[not|no]] [[a|una]] [[student|estudiante]].',
  },
  {
    question: '[[Her|Su]] [[neighbourhood|barrio]] [[has|tiene]] [[many|muchos]] [[parks|parques]] [[and|y]] [[cafes|cafés]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[with many parks and cafes|con muchos parques y cafés]]".',
  },
  {
    question: '[[Maria|María]] [[teaches|enseña]] [[at|en]] [[a|una]] [[big|gran]] [[school|escuela]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[teaches|enseña]] [[at|en]] [[a|una]] [[small|pequeña]] [[school|escuela]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Una]] [[day|día]] [[at|en]] [[school|la escuela]]', '[[A|Una]] [[person|persona]] [[introducing|presentándose]] [[herself|a sí misma]]', '[[A|Un]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[A|Una]] [[trip|viaje]] [[to|a]] [[Madrid|Madrid]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[Maria|María]] [[introducing|presentándose]]: [[name|nombre]], [[age|edad]], [[hometown|ciudad natal]], [[neighbourhood|barrio]], [[hobby|pasatiempo]], [[job|trabajo]].',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[the|la]] [[writer|autora]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Una]] [[friend|amiga]] [[of|de]] [[Maria|María]]', '[[Maria|María]] [[herself|ella misma]]', '[[A|Un]] [[teacher|profesor]]', '[[A|Un]] [[student|estudiante]]'],
    correctAnswer: 1,
    explanation: '[[Maria|María]] [[writes|escribe]] [[about|sobre]] [[herself|sí misma]] ("[[My name is|Mi nombre es]]", "[[I am|Yo soy]]").',
  },
  {
    question: '[[In|En]] [[what|qué]] [[city|ciudad]] [[does|enseña]] [[Maria|María]] [[teach|enseñar]]?',
    options: ['[[Barcelona|Barcelona]]', '[[Madrid|Madrid]]', '[[Valencia|Valencia]]', '[[Seville|Sevilla]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[My hometown is Madrid|Mi ciudad natal es Madrid]]" [[and|y]] [[teaches|enseña]] [[there|allí]].',
  },
];

export const UNIT_1_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u1-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Greetings',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));

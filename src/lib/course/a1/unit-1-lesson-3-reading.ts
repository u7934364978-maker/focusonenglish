/**
 * Unidad 1 — Lección 3: Comprensión lectora
 * 15 actividades: 1 texto + 15 preguntas (1 por actividad).
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión lectora';
const READING_TRANSCRIPT = `[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Maria|María]]. [[I|Yo]] [[am|tengo]] [[twenty-eight|veintiocho]] [[years|años]] [[old|de edad]]. [[I|Yo]] [[am|soy]] [[from|de]] [[Madrid|Madrid]], [[Spain|España]]. [[I|Yo]] [[am|soy]] [[a|una]] [[teacher|profesora]]. [[I|Yo]] [[teach|enseño]] [[English|inglés]] [[at|en]] [[a|una]] [[small|pequeña]] [[school|escuela]]. [[I|Yo]] [[am|estoy]] [[happy|feliz]] [[today|hoy]] [[because|porque]] [[it|es]] [[is|es]] [[my|mi]] [[birthday|cumpleaños]]. [[Nice|Encantada]] [[to|de]] [[meet|conocerte]] [[you|a ti]]!`;

const INSTRUCTIONS = '[[Read|Lee]] [[the|el]] [[text|texto]] [[below|abajo]]. [[Then|Después]] [[answer|responde]] [[the|las]] [[questions|preguntas]].';

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
    question: '[[Where|De dónde]] [[is|es]] [[Maria|María]] [[from|de]]?',
    options: ['[[London|Londres]]', '[[Barcelona|Barcelona]]', '[[Madrid|Madrid]]', '[[Mexico City|Ciudad de México]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[says|dice]]: "[[I am from Madrid, Spain|Soy de Madrid, España]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[her|su]] [[job|trabajo]]?',
    options: ['[[student|estudiante]]', '[[doctor|médica]]', '[[teacher|profesora]]', '[[nurse|enfermera]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[says|dice]] "[[I am a teacher|Soy profesora]]".',
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
    question: '[[Why|Por qué]] [[is|está]] [[Maria|María]] [[happy|feliz]] [[today|hoy]]?',
    options: ['[[Because|Porque]] [[she|ella]] [[is|está]] [[on|en]] [[holiday|vacaciones]]', '[[Because|Porque]] [[it|es]] [[is|es]] [[her|su]] [[birthday|cumpleaños]]', '[[Because|Porque]] [[she|ella]] [[has|tiene]] [[a|un]] [[new|nuevo]] [[job|trabajo]]', '[[Because|Porque]] [[she|ella]] [[is|está]] [[from|de]] [[Madrid|Madrid]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am happy today because it is my birthday|Estoy feliz hoy porque es mi cumpleaños]]".',
  },
  {
    question: '[[What|Qué]] [[phrase|frase]] [[does|usa]] [[Maria|María]] [[use|usar]] [[to|para]] [[end|terminar]] [[the|el]] [[text|texto]]?',
    options: ['[[Goodbye|Adiós]]', '[[How are you?|¿Cómo estás?]]', '[[Nice to meet you|Encantada de conocerte]]', '[[Thank you|Gracias]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[ends|termina]] [[with|con]] "[[Nice to meet you|Encantada de conocerte]]".',
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
    question: '[[Today|Hoy]] [[is|es]] [[her|su]] [[birthday|cumpleaños]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[it is my birthday|es mi cumpleaños]]".',
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
    explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[Maria|María]] [[introducing|presentándose]]: [[name|nombre]], [[age|edad]], [[city|ciudad]], [[job|trabajo]].',
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
    explanation: '[[She|Ella]] [[says|dice]] "[[I am from Madrid, Spain|Soy de Madrid, España]]" [[and|y]] "[[I teach at a small school|Enseño en una escuela pequeña]]" [[there|allí]].',
  },
];

export const UNIT_1_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a1-u1-l3-reading-${i + 1}`,
  type: 'reading',
  level: 'A1',
  topic: 'Personal Info',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));

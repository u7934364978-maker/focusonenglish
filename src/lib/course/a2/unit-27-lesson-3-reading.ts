/**
 * Unidad 27 — Lección 3: Comprensión lectora (Zero Conditional)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[If|Si]] [[you|tú]] [[heat|calientas]] [[water|agua]], [[it|ella]] [[boils|hierve]]. [[If|Si]] [[you|tú]] [[freeze|congelas]] [[water|agua]], [[it|ella]] [[turns|se convierte]] [[into|en]] [[ice|hielo]]. [[If|Si]] [[you|tú]] [[mix|mezclas]] [[red|rojo]] [[and|y]] [[blue|azul]], [[you|tú]] [[get|obtienes]] [[purple|morado]]. [[If|Si]] [[you|tú]] [[don\'t eat|no comes]] [[enough|suficiente]], [[you|tú]] [[feel|te sientes]] [[hungry|hambriento]]. [[If|Si]] [[you|tú]] [[exercise|haces ejercicio]] [[regularly|regularmente]], [[you|tú]] [[stay|te mantienes]] [[healthy|saludable]]. [[If|Si]] [[you|tú]] [[don\'t sleep|no duermes]] [[well|bien]], [[you|tú]] [[feel|te sientes]] [[tired|cansado]] [[the|al]] [[next day|día siguiente]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[happens|pasa]] [[if|si]] [[you|tú]] [[heat|calientas]] [[water|agua]]?',
    options: ['[[it freezes|se congela]]', '[[it boils|hierve]]', '[[it evaporates|se evapora]]', '[[nothing|nada]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[If you heat water it boils|Si calientas agua hierve]]".',
  },
  {
    question: '[[What|Qué]] [[happens|pasa]] [[if|si]] [[you|tú]] [[freeze|congelas]] [[water|agua]]?',
    options: ['[[it boils|hierve]]', '[[it evaporates|se evapora]]', '[[it turns into ice|se convierte en hielo]]', '[[it disappears|desaparece]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[If you freeze water it turns into ice|Si congelas agua se convierte en hielo]]".',
  },
  {
    question: '[[What|Qué]] [[colour|color]] [[do|obtienes]] [[you|tú]] [[get|obtener]] [[if|si]] [[you|tú]] [[mix|mezclas]] [[red|rojo]] [[and|y]] [[blue|azul]]?',
    options: ['[[green|verde]]', '[[orange|naranja]]', '[[purple|morado]]', '[[yellow|amarillo]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[If you mix red and blue you get purple|Si mezclas rojo y azul obtienes morado]]".',
  },
  {
    question: '[[What|Qué]] [[happens|pasa]] [[if|si]] [[you|tú]] [[don\'t eat|no comes]] [[enough|suficiente]]?',
    options: ['[[you feel full|te sientes lleno]]', '[[you feel hungry|te sientes hambriento]]', '[[you feel happy|te sientes feliz]]', '[[you feel cold|te sientes frío]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[If you don\'t eat enough you feel hungry|Si no comes suficiente te sientes hambriento]]".',
  },
  {
    question: '[[What|Qué]] [[happens|pasa]] [[if|si]] [[you|tú]] [[exercise|haces ejercicio]] [[regularly|regularmente]]?',
    options: ['[[you feel tired|te sientes cansado]]', '[[you stay healthy|te mantienes saludable]]', '[[you feel hungry|te sientes hambriento]]', '[[you sleep less|duermes menos]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[If you exercise regularly you stay healthy|Si haces ejercicio regularmente te mantienes saludable]]".',
  },
  {
    question: '[[What|Qué]] [[happens|pasa]] [[if|si]] [[you|tú]] [[don\'t sleep|no duermes]] [[well|bien]]?',
    options: ['[[you feel energetic|te sientes con energía]]', '[[you feel happy|te sientes feliz]]', '[[you feel tired the next day|te sientes cansado al día siguiente]]', '[[you feel hungry|te sientes hambriento]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[If you don\'t sleep well you feel tired the next day|Si no duermes bien te sientes cansado al día siguiente]]".',
  },
  {
    question: '[[Which|Cuál]] [[structure|estructura]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]]?',
    options: ['[[Past|Pasado]] [[simple|simple]]', '[[First|Primer]] [[conditional|condicional]]', '[[Zero|Condicional]] [[conditional|cero]]', '[[Future|Futuro]] [[simple|simple]]'],
    correctAnswer: 2,
    explanation: '[[Zero|Condicional]] [[conditional|cero]]: [[If|Si]] + [[present|presente]], [[present|presente]] — [[general|hechos]] [[facts|generales]].',
  },
  {
    question: '[[The|El]] [[text|texto]] [[talks|habla]] [[about|sobre]] [[general|hechos]] [[facts|generales]] [[and|y]] [[scientific|científicos]] [[truths|científicos]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Zero|El condicional]] [[conditional|cero]] [[describes|describe]] [[general|hechos]] [[facts|generales]].',
  },
  {
    question: '[[If|Si]] [[you|tú]] [[mix|mezclas]] [[red|rojo]] [[and|y]] [[blue|azul]], [[you|tú]] [[get|obtienes]] [[green|verde]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[You|Tú]] [[get|obtienes]] [[purple|morado]], [[not|no]] [[green|verde]].',
  },
  {
    question: '[[The|El]] [[text|texto]] [[mentions|menciona]] [[that|que]] [[exercise|ejercicio]] [[helps|ayuda]] [[you|te]] [[stay|mantenerte]] [[healthy|saludable]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. "[[If you exercise regularly you stay healthy|Si haces ejercicio regularmente te mantienes saludable]]".',
  },
  {
    question: '[[In|En]] [[zero|condicional]] [[conditional|cero]], [[both|ambas]] [[clauses|oraciones]] [[use|usan]] [[present|presente]] [[simple|simple]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Zero|Condicional]] [[conditional|cero]]: [[If|Si]] + [[present|presente]], [[present|presente]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[Past|Eventos]] [[events|pasados]]', '[[General|Hechos]] [[facts|generales]] [[and|y]] [[scientific|científicas]] [[truths|verdades]]', '[[Future|Planes]] [[plans|futuros]]', '[[Weather|Tiempo]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[shows|muestra]] [[zero|condicional]] [[conditional|cero]]: [[general|hechos]] [[facts|generales]].',
  },
  {
    question: '[[In|En]] [[zero|condicional]] [[conditional|cero]], [[what|qué]] [[tense|tiempo]] [[do|usa]] [[we|usamos]] [[use|usar]] [[in|en]] [[both|ambas]] [[clauses|oraciones]]?',
    options: ['[[Past|Pasado]] [[simple|simple]]', '[[Present|Presente]] [[simple|simple]]', '[[Future|Futuro]] [[with|con]] [[will|will]]', '[[Present|Presente]] [[perfect|perfecto]]'],
    correctAnswer: 1,
    explanation: '[[Zero|Condicional]] [[conditional|cero]]: [[If|Si]] + [[present|presente]] [[simple|simple]], [[present|presente]] [[simple|simple]].',
  },
  {
    question: '[[How many|Cuántas]] [[examples|ejemplos]] [[of|de]] [[zero|condicional]] [[conditional|cero]] [[does|menciona]] [[the|el]] [[text|texto]] [[mention|mencionar]]?',
    options: ['[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]', '[[six|seis]]'],
    correctAnswer: 3,
    explanation: '[[Six|Seis]] [[examples|ejemplos]]: [[heat water|calentar agua]], [[freeze water|congelar agua]], [[mix colours|mezclar colores]], [[don\'t eat|no comer]], [[exercise|ejercicio]], [[don\'t sleep|no dormir]].',
  },
  {
    question: '[[What|Qué]] [[word|palabra]] [[introduces|introduce]] [[the|la]] [[condition|condición]] [[in|en]] [[zero|condicional]] [[conditional|cero]]?',
    options: ['[[When|Cuando]]', '[[If|Si]]', '[[Because|Porque]]', '[[So|Así que]]'],
    correctAnswer: 1,
    explanation: '[[If|Si]] [[introduces|introduce]] [[the|la]] [[condition|condición]] [[in|en]] [[zero|condicional]] [[conditional|cero]].',
  },
];

export const UNIT_27_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u27-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Zero Conditional',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));

/**
 * Unidad 47 B1 — Lección 3: Comprensión lectora (Would rather, would sooner, Preferences)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My brother|Mi hermano]] [[and|y]] [[I|yo]] [[have|tenemos]] [[different|diferentes]] [[preferences|preferencias]]. [[I|Yo]] [[would rather|preferiría]] [[stay|quedarme]] [[at home|en casa]] [[and|y]] [[watch|ver]] [[a film|una película]] [[than|que]] [[go out|salir]] [[to|a]] [[a club|un club]]. [[He|Él]] [[would sooner|preferiría]] [[dance|bailar]] [[all night|toda la noche]] [[than|que]] [[stay in|quedarse en casa]]. [[I\'d rather|Preferiría]] [[he|él]] [[didn\'t|no]] [[play|pusiera]] [[loud music|música fuerte]] [[when|cuando]] [[I\'m studying|estoy estudiando]]. [[He|Él]] [[would rather|preferiría]] [[I|yo]] [[joined|me uniera]] [[him|a él]] [[sometimes|a veces]]. [[We|Nosotros]] [[both|ambos]] [[prefer|preferimos]] [[Italian food|comida italiana]] [[to|a]] [[Chinese|china]], [[but|pero]] [[that\'s|eso es]] [[about|todo]] [[the only thing|lo único]] [[we agree on|en lo que estamos de acuerdo]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Quiénes]] [[have different preferences|tienen preferencias diferentes]]?', options: ['[[Friends|Amigos]]', '[[The brother and I|El hermano y yo]]', '[[Parents|Padres]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My brother and I have different preferences|mi hermano y yo tenemos preferencias diferentes]]".' },
  { question: '[[What|Qué]] [[would the person rather do|preferiría hacer la persona]]?', options: ['[[Go to a club|Ir a un club]]', '[[Stay at home and watch a film|Quedarse en casa y ver una película]]', '[[Dance all night|Bailar toda la noche]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I would rather stay at home and watch a film|preferiría quedarme en casa y ver una película]]".' },
  { question: '[[What|Qué]] [[would the brother sooner do|preferiría hacer el hermano]]?', options: ['[[Stay at home|Quedarse en casa]]', '[[Dance all night|Bailar toda la noche]]', '[[Watch a film|Ver una película]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[He would sooner dance all night|preferiría bailar toda la noche]]".' },
  { question: '[[What|Qué]] [[would the person rather the brother didn\'t do|preferiría la persona que el hermano no hiciera]]?', options: ['[[Go out|Salir]]', '[[Play loud music when studying|Poner música fuerte cuando estudia]]', '[[Eat|Comer]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I\'d rather he didn\'t play loud music when I\'m studying|preferiría que no pusiera música fuerte cuando estudio]]".' },
  { question: '[[What|Qué]] [[would the brother rather the person do|preferiría el hermano que la persona hiciera]]?', options: ['[[Stay home|Quedarse en casa]]', '[[Join him sometimes|Unirse a él a veces]]', '[[Study more|Estudiar más]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[He would rather I joined him sometimes|preferiría que me uniera a él a veces]]".' },
  { question: '[[What|Qué]] [[food do they both prefer|comida prefieren ambos]]?', options: ['[[Chinese|China]]', '[[Italian|Italiana]]', '[[French|Francesa]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[We both prefer Italian food to Chinese|ambos preferimos comida italiana a china]]".' },
  { question: '[[Do they agree on many things|¿Están de acuerdo en muchas cosas]]?', options: ['[[Yes|Sí]]', '[[No - only about food|No - solo sobre la comida]]', '[[They never agree|Nunca están de acuerdo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[that\'s about the only thing we agree on|eso es todo lo único en lo que estamos de acuerdo]]".' },
  { question: '[[Would rather|Would rather]] [[is used for|se usa para]] [[expressing preferences|expresar preferencias]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Would rather|Would rather]] [[expresses preference|expresa preferencia]].' },
  { question: '[[Would sooner|Would sooner]] [[means the same as|significa lo mismo que]] [[would rather|would rather]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Both|Ambos]] [[express preference|expresan preferencia]].' },
  { question: '[[What|Cuál]] [[is the main topic|es el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[Different preferences between siblings|Preferencias diferentes entre hermanos]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[compares|compara]] [[siblings\' preferences|preferencias de hermanos]].' },
  { question: '[[The person|La persona]] [[prefers|prefiere]] [[staying at home|quedarse en casa]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I would rather stay at home|preferiría quedarme en casa]]".' },
  { question: '[[I\'d rather he didn\'t|Preferiría que no]] [[uses|usa]] [[past tense|tiempo pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Would rather (that) + past|Would rather (que) + pasado]].' },
  { question: '[[Which word|Qué palabra]] [[introduces the second option in a comparison|introduce la segunda opción en una comparación]]?', options: ['[[then|entonces]]', '[[than|que]]', '[[that|que]]'], correctAnswer: 1, explanation: '[[Than|Que]] [[is used with would rather|se usa con would rather]] [[for comparison|para comparación]].' },
  { question: '[[The brother|El hermano]] [[likes|le gusta]] [[going out|salir]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[would sooner dance all night than stay in|preferiría bailar toda la noche que quedarse en casa]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[would rather|would rather]] [[and|y]] [[would sooner|would sooner]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Both structures|Ambas estructuras]] [[appear in the text|aparecen en el texto]].' },
];

export const UNIT_47_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u47-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Preferences',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));

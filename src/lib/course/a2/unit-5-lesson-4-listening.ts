/**
 * Unidad 5 — Lección 4: Comprensión auditiva (Comparativos)
 * 15 actividades: 1 transcripción + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|a ti]] [[about|sobre]] [[my|mi]] [[two|dos]] [[phones|teléfonos]]. [[I|Yo]] [[have|tengo]] [[an|un]] [[old|viejo]] [[phone|teléfono]] [[and|y]] [[a|un]] [[new|nuevo]] [[one|uno]]. [[The|El]] [[new|nuevo]] [[phone|teléfono]] [[is|es]] [[bigger|más grande]] [[than|que]] [[the|el]] [[old|viejo]] [[one|uno]] [[but|pero]] [[the|el]] [[old|viejo]] [[one|uno]] [[is|es]] [[lighter|más ligero]] [[than|que]] [[the|el]] [[new|nuevo]] [[one|uno]]. [[The|El]] [[new|nuevo]] [[phone|teléfono]] [[has|tiene]] [[a|una]] [[better|mejor]] [[camera|cámara]] [[than|que]] [[the|el]] [[old|viejo]] [[one|uno]]. [[The|El]] [[battery|batería]] [[is|es]] [[more powerful|más potente]] [[than|que]] [[before|antes]]. [[I|Yo]] [[think|creo]] [[the|el]] [[new|nuevo]] [[phone|teléfono]] [[is|es]] [[more expensive|más caro]] [[than|que]] [[the|el]] [[old|viejo]] [[one|uno]] [[but|pero]] [[it|él]] [[is|es]] [[much|mucho]] [[more useful|más útil]] [[than|que]] [[that|ese]] [[one|uno]]. [[Overall|En general]] [[I|yo]] [[prefer|prefiero]] [[the|el]] [[new|nuevo]] [[one|uno]] [[because|porque]] [[it|él]] [[is|es]] [[faster|más rápido]] [[than|que]] [[my|mi]] [[old|viejo]] [[phone|teléfono]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[How many|Cuántos]] [[phones|teléfonos]] [[does|tiene]] [[the|el]] [[person|persona]] [[have|tener]]?',
    options: ['[[one|uno]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have an old phone and a new one|Tengo un teléfono viejo y uno nuevo]]".',
  },
  {
    question: '[[Which|Cuál]] [[phone|teléfono]] [[is|es]] [[bigger|más grande]]?',
    options: ['[[the|el]] [[old|viejo]] [[one|uno]]', '[[the|el]] [[new|nuevo]] [[one|uno]]', '[[both|ambos]] [[same|iguales]]', '[[He|Él]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[The new phone is bigger than the old one|El teléfono nuevo es más grande que el viejo]]".',
  },
  {
    question: '[[Which|Cuál]] [[phone|teléfono]] [[is|es]] [[lighter|más ligero]]?',
    options: ['[[the|el]] [[new|nuevo]] [[one|uno]]', '[[the|el]] [[old|viejo]] [[one|uno]]', '[[both|ambos]] [[same|iguales]]', '[[He|Él]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[the old one is lighter than the new one|el viejo es más ligero que el nuevo]]".',
  },
  {
    question: '[[Which|Cuál]] [[phone|teléfono]] [[has|tiene]] [[a|una]] [[better|mejor]] [[camera|cámara]]?',
    options: ['[[the|el]] [[old|viejo]] [[one|uno]]', '[[the|el]] [[new|nuevo]] [[one|uno]]', '[[both|ambos]] [[same|iguales]]', '[[He|Él]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[The new phone has a better camera than the old one|El teléfono nuevo tiene una mejor cámara que el viejo]]".',
  },
  {
    question: '[[What|Qué]] [[does|dice]] [[he|él]] [[say|decir]] [[about|sobre]] [[the|la]] [[battery|batería]]?',
    options: ['[[It|Ella]] [[is|es]] [[worse|peor]] [[than|que]] [[before|antes]]', '[[It|Ella]] [[is|es]] [[more powerful|más potente]] [[than|que]] [[before|antes]]', '[[It|Ella]] [[is|es]] [[smaller|más pequeña]]', '[[He|Él]] [[doesn\'t|no]] [[mention|menciona]] [[it|ella]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[The battery is more powerful than before|La batería es más potente que antes]]".',
  },
  {
    question: '[[Which|Cuál]] [[phone|teléfono]] [[does|prefiere]] [[he|él]] [[prefer|preferir]]?',
    options: ['[[the|el]] [[old|viejo]] [[one|uno]]', '[[the|el]] [[new|nuevo]] [[one|uno]]', '[[both|ambos]] [[same|iguales]]', '[[He|Él]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Overall I prefer the new one|En general prefiero el nuevo]]".',
  },
  {
    question: '[[Why|Por qué]] [[does|prefiere]] [[he|él]] [[prefer|preferir]] [[the|el]] [[new|nuevo]] [[phone|teléfono]]?',
    options: ['[[Because|Porque]] [[it|él]] [[is|es]] [[cheaper|más barato]]', '[[Because|Porque]] [[it|él]] [[is|es]] [[faster|más rápido]] [[than|que]] [[his|su]] [[old|viejo]] [[phone|teléfono]]', '[[Because|Porque]] [[it|él]] [[is|es]] [[smaller|más pequeño]]', '[[He|Él]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[because it is faster than my old phone|porque es más rápido que mi teléfono viejo]]".',
  },
  {
    question: '[[The|El]] [[new|nuevo]] [[phone|teléfono]] [[is|es]] [[cheaper|más barato]] [[than|que]] [[the|el]] [[old|viejo]] [[one|uno]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[says|dice]] "[[the new phone is more expensive than the old one|el teléfono nuevo es más caro que el viejo]]".',
  },
  {
    question: '[[The|El]] [[new|nuevo]] [[phone|teléfono]] [[is|es]] [[more useful|más útil]] [[than|que]] [[the|el]] [[old|viejo]] [[one|uno]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[it is much more useful than that one|es mucho más útil que ese]]".',
  },
  {
    question: '[[The|El]] [[old|viejo]] [[phone|teléfono]] [[has|tiene]] [[a|una]] [[better|mejor]] [[camera|cámara]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[The|El]] [[new|nuevo]] [[phone|teléfono]] [[has|tiene]] [[a|una]] [[better|mejor]] [[camera|cámara]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[trip|viaje]]', '[[Comparing|Comparando]] [[two|dos]] [[phones|teléfonos]] [[using|usando]] [[comparatives|comparativos]]', '[[A|Una]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[A|Un]] [[job|trabajo]] [[interview|entrevista]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[compares|compara]] [[two|dos]] [[phones|teléfonos]] [[using|usando]] [[comparatives|comparativos]].',
  },
  {
    question: '[[Which|Cuál]] [[comparative|comparativo]] [[word|palabra]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] "[[bueno|bueno]]"?',
    options: ['[[gooder|más bueno]]', '[[more good|más bueno]]', '[[better|mejor]]', '[[He|Él]] [[doesn\'t|no]] [[use|usa]] [[it|él]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[a better camera|una mejor cámara]]". [[Good|Bueno]] → [[better|mejor]].',
  },
  {
    question: '[[What|Qué]] [[does|dice]] [[he|él]] [[say|decir]] [[about|sobre]] [[the|el]] [[price|precio]] [[of|del]] [[the|el]] [[new|nuevo]] [[phone|teléfono]]?',
    options: ['[[It|Él]] [[is|es]] [[cheaper|más barato]]', '[[It|Él]] [[is|es]] [[more expensive|más caro]] [[than|que]] [[the|el]] [[old|viejo]] [[one|uno]]', '[[It|Él]] [[is|es]] [[same|igual]]', '[[He|Él]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I think the new phone is more expensive than the old one|Creo que el teléfono nuevo es más caro que el viejo]]".',
  },
  {
    question: '[[How many|Cuántos]] [[comparatives|comparativos]] [[does|menciona]] [[the|el]] [[speaker|hablante]] [[mention|mencionar]]?',
    options: ['[[two|dos]]', '[[four|cuatro]]', '[[six|seis]] [[or|o]] [[more|más]]', '[[one|uno]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[uses|usa]]: [[bigger|más grande]], [[lighter|más ligero]], [[better|mejor]], [[more powerful|más potente]], [[more expensive|más caro]], [[more useful|más útil]], [[faster|más rápido]].',
  },
  {
    question: '[[Which|Cuál]] [[word|palabra]] [[connects|conecta]] [[the|los]] [[two|dos]] [[things|cosas]] [[in|en]] [[each|cada]] [[comparison|comparación]]?',
    options: ['[[that|ese]]', '[[than|que]]', '[[then|entonces]]', '[[the|el]]'],
    correctAnswer: 1,
    explanation: '[[Than|Que]] [[connects|conecta]] [[the|los]] [[two|dos]] [[things|cosas]] [[we|que]] [[compare|comparamos]].',
  },
];

export const UNIT_5_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u5-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Comparatives',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));

/**
 * Unidad 12 B1 — Lección 4: Comprensión auditiva (Second conditional, hypothetical situations)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[If|Si]] [[I|yo]] [[had|tuviera]] [[more time|más tiempo]], [[I|yo]] [[would learn|aprendería]] [[to play|a tocar]] [[the guitar|la guitarra]]. [[I|Yo]] [[always|siempre]] [[dream|sueño]] [[about|con]] [[that|eso]]. [[What if|Qué pasaría si]] [[we|nosotros]] [[could|pudiéramos]] [[travel|viajar]] [[back in time|atrás en el tiempo]]? [[I|Yo]] [[would visit|visitaría]] [[ancient Rome|la Roma antigua]]. [[If|Si]] [[you|tú]] [[were|fueras]] [[me|yo]], [[what|qué]] [[would|harías]] [[you do|tú]]? [[I|Yo]] [[would probably|probablemente]] [[take|tomaría]] [[a year off|un año libre]] [[and|y]] [[travel|viajar]] [[the world|por el mundo]]. [[In an ideal world|En un mundo ideal]], [[work|el trabajo]] [[would be|sería]] [[more flexible|más flexible]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[would the person learn|aprendería la persona]] [[if they had more time|si tuviera más tiempo]]?', options: ['[[to drive|a conducir]]', '[[to play the guitar|a tocar la guitarra]]', '[[to cook|a cocinar]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[I would learn to play the guitar|aprendería a tocar la guitarra]]".' },
  { question: '[[What|Qué]] [[does the person always dream about|con qué sueña siempre la persona]]?', options: ['[[learning the guitar|aprender la guitarra]]', '[[travelling|viajar]]', '[[working less|trabajar menos]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I always dream about that|siempre sueño con eso]]" [[referring to the guitar|refiriéndose a la guitarra]].' },
  { question: '[[Where|Dónde]] [[would the person visit|visitaría la persona]] [[if they could travel back in time|si pudiera viajar atrás en el tiempo]]?', options: ['[[ancient Greece|la Grecia antigua]]', '[[ancient Rome|la Roma antigua]]', '[[ancient Egypt|el Egipto antiguo]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[I would visit ancient Rome|visitaría la Roma antigua]]".' },
  { question: '[[What|Qué]] [[would the person probably do|haría probablemente la persona]] [[if they were you|si fuera tú]]?', options: ['[[start a business|empezar un negocio]]', '[[take a year off and travel the world|tomar un año libre y viajar por el mundo]]', '[[study more|estudiar más]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[I would probably take a year off and travel the world|probablemente tomaría un año libre y viajaría por el mundo]]".' },
  { question: '[[In an ideal world|En un mundo ideal]], [[what|qué]] [[would work be|sería el trabajo]]?', options: ['[[shorter|más corto]]', '[[more flexible|más flexible]]', '[[better paid|mejor pagado]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[work would be more flexible|el trabajo sería más flexible]]".' },
  { question: '[[The speaker|El hablante]] [[uses|usa]] [[second conditional|segundo condicional]] [[throughout|a lo largo]] [[the listening|de la escucha]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[if I had|si tuviera]], [[would learn|aprendería]], [[would visit|visitaría]].' },
  { question: '[[The phrase|La frase]] "[[What if|Qué pasaría si]]" [[introduces|introduce]] [[a hypothetical question|una pregunta hipotética]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[What if|Qué pasaría si]] [[asks about imaginary situations|pregunta sobre situaciones imaginarias]].' },
  { question: '[[If you were me|Si tú fueras yo]] [[is a fixed expression|es una expresión fija]] [[for giving advice|para dar consejos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[If I were you|Si yo fuera tú]] [[or similar|o similar]] [[is common for advice|es común para consejos]].' },
  { question: '[[The speaker|El hablante]] [[would not|no]] [[travel|viajaría]] [[if they had time|si tuviera tiempo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They would take a year off and travel|tomarían un año libre y viajarían]].' },
  { question: '[[Which conditional|Qué condicional]] [[is used|se usa]] [[for hypothetical present|para presente hipotético]]?', options: ['[[first|primero]]', '[[second|segundo]]', '[[third|tercero]]'], correctAnswer: 1, explanation: '[[Second conditional|Segundo condicional]] [[for unreal present|para presente irreal]].' },
  { question: '[[The main topic|El tema principal]] [[is|es]] [[hypothetical situations and dreams|situaciones hipotéticas y sueños]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The listening|La escucha]] [[focuses on|se centra en]] [[imaginary situations|situaciones imaginarias]].' },
  { question: '[[The speaker|El hablante]] [[would visit|visitaría]] [[the future|el futuro]] [[if they could time travel|si pudiera viajar en el tiempo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They would visit ancient Rome|visitarían la Roma antigua]] [[(the past)|(el pasado)]].' },
  { question: '[[In an ideal world|En un mundo ideal]] [[introduces|introduce]] ____.', options: ['[[a real situation|una situación real]]', '[[a hypothetical situation|una situación hipotética]]', '[[a past event|un evento pasado]]'], correctAnswer: 1, explanation: '[[Hypothetical situation|Situación hipotética]]. [[Ideal world|Mundo ideal]] [[is imaginary|es imaginario]].' },
  { question: '[[The speaker|El hablante]] [[dreams|sueña]] [[about|con]] ____.', options: ['[[playing the guitar|tocar la guitarra]]', '[[visiting Rome|visitar Roma]]', '[[both|ambos]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I always dream about that|siempre sueño con eso]]" [[referring to the guitar|refiriéndose a la guitarra]].' },
  { question: '[[What|Qué]] [[structure|estructura]] [[does "if I had" use|usa "if I had"]]?', options: ['[[first conditional|primer condicional]]', '[[second conditional|segundo condicional]]', '[[zero conditional|condicional cero]]'], correctAnswer: 1, explanation: '[[Second conditional|Segundo condicional]]: [[if + past simple|if + pasado simple]].' },
];

export const UNIT_12_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u12-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Hypothetical',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));

/**
 * Unidad 52 B1 — Lección 3: Comprensión lectora (Passive & reported speech)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Passive voice|La voz pasiva]] [[and|y]] [[reported speech|estilo indirecto]] [[are|son]] [[important|importantes]] [[grammar|gramaticales]] [[structures|estructuras]] [[in|en]] [[English|inglés]]. [[The passive|La pasiva]] [[is used|se usa]] [[when|cuando]] [[we|nosotros]] [[want|queremos]] [[to|a]] [[focus|enfocarnos]] [[on|en]] [[the action|la acción]] [[not|no]] [[the doer|el agente]]. [[For example|Por ejemplo]]: [[The letter was sent yesterday|la carta fue enviada ayer]]. [[Reported speech|El estilo indirecto]] [[is used|se usa]] [[when|cuando]] [[we|nosotros]] [[report|reportamos]] [[what|lo que]] [[someone|alguien]] [[said|dijo]]. [[She said that she was tired|dijo que estaba cansada]]. [[When|Cuando]] [[we|nosotros]] [[report|reportamos]] [[speech|discurso]] [[we|nosotros]] [[change|cambiamos]] [[the tense|el tiempo]] [[usually|normalmente]] [[one step|un paso]] [[back|atrás]]. [[We|Nosotros]] [[also|también]] [[change|cambiamos]] [[pronouns|pronombres]] [[and|y]] [[time expressions|expresiones de tiempo]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[are passive voice and reported speech|son la voz pasiva y el estilo indirecto]]?', options: ['[[Unimportant structures|estructuras sin importancia]]', '[[Important grammar structures|estructuras gramaticales importantes]]', '[[Rare structures|estructuras raras]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[important grammar structures|estructuras gramaticales importantes]]".' },
  { question: '[[When|Cuándo]] [[is the passive used|se usa la pasiva]]?', options: ['[[When we focus on the doer|cuando nos enfocamos en el agente]]', '[[When we focus on the action|cuando nos enfocamos en la acción]]', '[[When we focus on the time|cuando nos enfocamos en el tiempo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[when we want to focus on the action not the doer|cuando queremos enfocarnos en la acción no el agente]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the example|el ejemplo]] [[for|para]] [[passive|pasiva]] [[in the text|en el texto]]?', options: ['[[The letter was sent yesterday|la carta fue enviada ayer]]', '[[She said that she was tired|dijo que estaba cansada]]', '[[We change the tense|cambiamos el tiempo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[The letter was sent yesterday|la carta fue enviada ayer]]".' },
  { question: '[[When|Cuándo]] [[is reported speech used|se usa el estilo indirecto]]?', options: ['[[When we invent something|cuando inventamos algo]]', '[[When we report what someone said|cuando reportamos lo que alguien dijo]]', '[[When we ask questions|cuando hacemos preguntas]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[when we report what someone said|cuando reportamos lo que alguien dijo]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the example|el ejemplo]] [[for|para]] [[reported speech|estilo indirecto]] [[in the text|en el texto]]?', options: ['[[The letter was sent|la carta fue enviada]]', '[[She said that she was tired|dijo que estaba cansada]]', '[[We change pronouns|cambiamos pronombres]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[She said that she was tired|dijo que estaba cansada]]".' },
  { question: '[[When|Cuándo]] [[we report speech|reportamos discurso]] [[we change the tense|cambiamos el tiempo]] [[one step back|un paso atrás]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[we change the tense usually one step back|cambiamos el tiempo normalmente un paso atrás]]".' },
  { question: '[[We|Nosotros]] [[also|también]] [[change|cambiamos]] [[pronouns|pronombres]] [[when|cuando]] [[reporting|reportamos]] [[speech|discurso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[We also change pronouns|también cambiamos pronombres]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Letters|Cartas]]', '[[Passive voice and reported speech|Voz pasiva y estilo indirecto]]', '[[Tenses|Tiempos]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[explains|explica]] [[both structures|ambas estructuras]].' },
  { question: '[[The passive|La pasiva]] [[focuses|se enfoca]] [[on|en]] [[the action|la acción]] [[not|no]] [[the doer|el agente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[focus on the action not the doer|enfocarse en la acción no el agente]]".' },
  { question: '[[What|Qué]] [[do we change|cambiamos]] [[when|cuando]] [[reporting|reportamos]] [[speech|discurso]]?', options: ['[[Only pronouns|solo pronombres]]', '[[The tense, pronouns and time expressions|el tiempo, pronombres y expresiones de tiempo]]', '[[Nothing|nada]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[we change the tense usually one step back. We also change pronouns and time expressions|cambiamos el tiempo normalmente un paso atrás. También cambiamos pronombres y expresiones de tiempo]]".' },
  { question: '[[The text|El texto]] [[gives|da]] [[examples|ejemplos]] [[for|para]] [[both|ambas]] [[structures|estructuras]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The letter was sent|La carta fue enviada]] [[and|y]] [[She said that she was tired|dijo que estaba cansada]].' },
  { question: '[[Reported speech|Estilo indirecto]] [[uses|usa]] [[the exact|las palabras]] [[exact words|exactas]] [[someone said|alguien dijo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Reported speech|Estilo indirecto]] [[changes| cambia]] [[the words|las palabras]] [[and|y]] [[tense|tiempo]].' },
  { question: '[[What|Qué]] [[does "focus on"|significa "enfocarse en"]] [[mean|significa]]?', options: ['[[Ignore|ignorar]]', '[[Pay attention to|prestar atención a]]', '[[Forget|olvidar]]'], correctAnswer: 1, explanation: '[[Focus on|Enfocarse en]] [[means|significa]] [[pay attention to|prestar atención a]].' },
  { question: '[[The passive|La pasiva]] [[is used|se usa]] [[in|en]] [[English|inglés]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[important grammar structures in English|estructuras gramaticales importantes en inglés]]".' },
  { question: '[[We|Nosotros]] [[change|cambiamos]] [[time expressions|expresiones de tiempo]] [[when|cuando]] [[reporting|reportamos]] [[speech|discurso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[We also change pronouns and time expressions|también cambiamos pronombres y expresiones de tiempo]]".' },
];

export const UNIT_52_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u52-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Passive & Reported Speech',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));

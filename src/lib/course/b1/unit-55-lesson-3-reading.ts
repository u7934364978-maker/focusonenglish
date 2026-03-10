/**
 * Unidad 55 B1 — Lección 3: Comprensión lectora (Repaso 51–54)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My name|Mi nombre]] [[is|es]] [[Anna|Ana]] [[and|y]] [[I|yo]] [[have been studying|he estado estudiando]] [[English|inglés]] [[for two years|durante dos años]]. [[Last month|El mes pasado]] [[I|yo]] [[was told|me dijeron]] [[that|que]] [[my exam|mi examen]] [[had been postponed|había sido pospuesto]]. [[If|Si]] [[I|yo]] [[had known|hubiera sabido]] [[earlier|antes]], [[I|yo]] [[would have relaxed|me habría relajado]] [[more|más]]. [[English|El inglés]] [[is spoken|se habla]] [[in many countries|en muchos países]] — [[that|eso]] [[is|es]] [[a fact|un hecho]]. [[You|Tú]] [[must practice|debes practicar]] [[every day|cada día]] [[to improve|para mejorar]]. [[If|Si]] [[I|yo]] [[were|fuera]] [[you|tú]], [[I|yo]] [[would watch|vería]] [[films|películas]] [[in English|en inglés]]. [[Next week|La próxima semana]] [[I|yo]] [[am taking|estoy haciendo]] [[the PET exam|el examen PET]]. [[I|Yo]] [[hope|espero]] [[I|yo]] [[will pass|aprobaré]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Cuál]] [[is the speaker\'s name|es el nombre del hablante]]?', options: ['[[Ana|Ana]]', '[[Anna|Anna]]', '[[Annie|Annie]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My name is Anna|mi nombre es Anna]]".' },
  { question: '[[How long|Cuánto tiempo]] [[has Anna been studying English|ha estado estudiando inglés Anna]]?', options: ['[[One year|Un año]]', '[[Two years|Dos años]]', '[[Three years|Tres años]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[for two years|durante dos años]]".' },
  { question: '[[What|Qué]] [[was Anna told|le dijeron a Anna]] [[about|sobre]] [[the exam|el examen]]?', options: ['[[It was cancelled|Fue cancelado]]', '[[It had been postponed|Había sido pospuesto]]', '[[It was easy|Era fácil]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[my exam had been postponed|mi examen había sido pospuesto]]".' },
  { question: '[[What|Qué]] [[conditional|condicional]] [[does Anna use|usa Anna]] [[for regret|para arrepentimiento]]?', options: ['[[First|Primero]]', '[[Second|Segundo]]', '[[Third|Tercero]]'], correctAnswer: 2, explanation: '[[Third conditional|Tercer condicional]]: "[[If I had known|si hubiera sabido]]... [[I would have relaxed|me habría relajado]]".' },
  { question: '[[What|Qué]] [[advice|consejo]] [[does Anna give|da Anna]] [[about films|sobre películas]]?', options: ['[[Don\'t watch them|No las veas]]', '[[Watch films in English|Ver películas en inglés]]', '[[Only watch once|Solo ver una vez]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I would watch films in English|vería películas en inglés]]".' },
  { question: '[[Anna|Anna]] [[uses|usa]] [[passive voice|voz pasiva]] [[for|para]] [[English being spoken|el inglés siendo hablado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[English is spoken in many countries|el inglés se habla en muchos países]]".' },
  { question: '[[Anna|Anna]] [[must practice|debe practicar]] [[every day|cada día]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[You must practice every day|debes practicar cada día]]".' },
  { question: '[[When|Cuándo]] [[is Anna taking|está haciendo Anna]] [[the PET exam|el examen PET]]?', options: ['[[Last week|La semana pasada]]', '[[Next week|La próxima semana]]', '[[Next month|El próximo mes]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Next week I am taking the PET exam|la próxima semana estoy haciendo el examen PET]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Food|Comida]]', '[[Learning English and exam preparation|Aprender inglés y preparación del examen]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla sobre]] [[learning English and exam|aprender inglés y examen]].' },
  { question: '[[Reported speech|Estilo indirecto]] [[is used|se usa]] [[for|para]] [[the exam being postponed|el examen siendo pospuesto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I was told that my exam had been postponed|me dijeron que mi examen había sido pospuesto]]".' },
  { question: '[[Second conditional|Segundo condicional]] [[is used|se usa]] [[for|para]] [[the advice about films|el consejo sobre películas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[If I were you, I would watch|si fuera tú, vería]]".' },
  { question: '[[Present continuous|Presente continuo]] [[is used|se usa]] [[for|para]] [[future exam|examen futuro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I am taking the PET exam|estoy haciendo el examen PET]]".' },
  { question: '[[Anna|Anna]] [[would have relaxed|se habría relajado]] [[if|si]] [[she|ella]] [[had known earlier|hubiera sabido antes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I would have relaxed more|me habría relajado más]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[only|solo]] [[one tense|un tiempo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[It uses|Usa]] [[many tenses and structures|muchos tiempos y estructuras]].' },
  { question: '[[How many|Cuántos]] [[grammar topics|temas gramaticales]] [[does the text cover|cubre el texto]]?', options: ['[[One|Uno]]', '[[Two|Dos]]', '[[Four or more|Cuatro o más]]'], correctAnswer: 2, explanation: '[[Several|Varios]]: [[conditionals|condicionales]], [[passive|pasiva]], [[reported speech|estilo indirecto]], [[modals|modales]], [[tenses|tiempos]].' },
];

export const UNIT_55_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u55-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Review 51–54',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));

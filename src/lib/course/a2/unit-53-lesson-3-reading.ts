/**
 * Unidad 53 — Lección 3: Comprensión lectora (Modals: Should & Shouldn't)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[doctor|médico]] [[gave|dio]] [[me|me]] [[some|algunos]] [[advice|consejos]] [[last|la pasada]] [[week|semana]]. [[I|Yo]] [[should|debería]] [[exercise|hacer ejercicio]] [[more|más]] [[often|a menudo]] [[and|y]] [[I|yo]] [[shouldn't|no debería]] [[eat|comer]] [[so much|tanta]] [[junk food|comida basura]]. [[She|Ella]] [[said|dijo]] [[I|yo]] [[should|debería]] [[sleep|dormir]] [[at least|al menos]] [[seven|siete]] [[hours|horas]] [[a|por]] [[night|noche]]. [[I|Yo]] [[shouldn't|no debería]] [[stay|quedarme]] [[up|despierto]] [[late|tarde]] [[watching|viendo]] [[TV|televisión]]. [[She|Ella]] [[also|también]] [[said|dijo]] [[I|yo]] [[should|debería]] [[drink|beber]] [[more|más]] [[water|agua]] [[and|y]] [[avoid|evitar]] [[sugary|azucaradas]] [[drinks|bebidas]]. [[I|Yo]] [[think|creo]] [[she|ella]] [[is|es]] [[right|correcta]]. [[I|Yo]] [[will|voy a]] [[try|intentar]] [[to|a]] [[follow|seguir]] [[her|sus]] [[advice|consejos]] [[and|y]] [[improve|mejorar]] [[my|mi]] [[health|salud]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Quién]] [[gave|dio]] [[the|el]] [[writer|autor]] [[advice|consejos]]?', options: ['[[A friend|Un amigo]]', '[[A doctor|Un médico]]', '[[A teacher|Un profesor]]', '[[A parent|Un padre]]'], correctAnswer: 1, explanation: '[[My doctor gave me some advice|Mi médico me dio algunos consejos]].' },
  { question: '[[What|Qué]] [[should|debería]] [[the|el]] [[writer|autor]] [[do|hacer]] [[more|más]]?', options: ['[[Watch TV|Ver la tele]]', '[[Exercise|Hacer ejercicio]]', '[[Eat junk food|Comer comida basura]]', '[[Stay up late|Quedarse despierto tarde]]'], correctAnswer: 1, explanation: '[[I should exercise more often|Debería hacer ejercicio más a menudo]].' },
  { question: '[[What|Qué]] [[shouldn't|no debería]] [[the|el]] [[writer|autor]] [[eat|comer]]?', options: ['[[Vegetables|Verduras]]', '[[Fruit|Fruta]]', '[[So much junk food|Tanta comida basura]]', '[[Salad|Ensalada]]'], correctAnswer: 2, explanation: "[[I shouldn't eat so much junk food|No debería comer tanta comida basura]]." },
  { question: '[[How many|Cuántas]] [[hours|horas]] [[should|debería]] [[the|el]] [[writer|autor]] [[sleep|dormir]]?', options: ['[[Five|Cinco]]', '[[Six|Seis]]', '[[At least seven|Al menos siete]]', '[[Ten|Diez]]'], correctAnswer: 2, explanation: '[[At least seven hours a night|Al menos siete horas por noche]].' },
  { question: '[[What|Qué]] [[shouldn't|no debería]] [[the|el]] [[writer|autor]] [[do|hacer]] [[at night|por la noche]]?', options: ['[[Sleep|Dormir]]', '[[Stay up late watching TV|Quedarse despierto tarde viendo la tele]]', '[[Exercise|Hacer ejercicio]]', '[[Read|Leer]]'], correctAnswer: 1, explanation: "[[I shouldn't stay up late watching TV|No debería quedarme despierto tarde viendo la tele]]." },
  { question: '[[What|Qué]] [[should|debería]] [[the|el]] [[writer|autor]] [[drink|beber]] [[more|más]]?', options: ['[[Coffee|Café]]', '[[Water|Agua]]', '[[Soda|Refresco]]', '[[Juice|Zumo]]'], correctAnswer: 1, explanation: '[[I should drink more water|Debería beber más agua]].' },
  { question: '[[What|Qué]] [[should|debería]] [[the|el]] [[writer|autor]] [[avoid|evitar]]?', options: ['[[Water|Agua]]', '[[Sugary drinks|Bebidas azucaradas]]', '[[Vegetables|Verduras]]', '[[Fruit|Fruta]]'], correctAnswer: 1, explanation: '[[Avoid sugary drinks|Evitar bebidas azucaradas]].' },
  { question: '[[Does|Cree]] [[the|el]] [[writer|autor]] ____ ____ ____ ____ ____?', options: ['[[the doctor is right|que el médico tiene razón]]', '[[the doctor is wrong|que el médico se equivoca]]', '[[he doesn\'t need advice|que no necesita consejos]]', '[[advice is boring|que los consejos son aburridos]]'], correctAnswer: 0, explanation: '[[I think she is right|Creo que tiene razón]].' },
  { question: '[[Will|Va]] [[the|el]] [[writer|autor]] ____ ____ ____ ____ ____?', options: ['[[try to follow the advice|intentar seguir los consejos]]', '[[ignore the advice|ignorar los consejos]]', '[[never see the doctor again|nunca volver a ver al médico]]', '[[eat more junk food|comer más comida basura]]'], correctAnswer: 0, explanation: '[[I will try to follow her advice|Voy a intentar seguir sus consejos]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[text|texto]] [[is|es]]?', options: ['[[Travel|Viajes]]', '[[Health advice from a doctor|Consejos de salud de un médico]]', '[[Work|Trabajo]]', '[[School|Escuela]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is about|trata de]] [[health advice|consejos de salud]].' },
  { question: '[[Which|Cuál]] [[modal|modal]] [[is|se]] [[used|usa]] [[for|para]] [[advice|consejos]]?', options: ['[[Must|Must]]', '[[Should and shouldn\'t|Should y shouldn\'t]]', '[[Can|Can]]', '[[Have to|Have to]]'], correctAnswer: 1, explanation: '[[Should and shouldn\'t|Should y shouldn\'t]] [[for|para]] [[advice|consejos]].' },
  { question: '[[True or False|Verdadero o Falso]]: [[The|El]] [[writer|autor]] [[will|va a]] [[ignore|ignorar]] [[the|los]] [[advice|consejos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[I will try to follow her advice|Voy a intentar seguir sus consejos]].' },
  { question: '[[The|El]] [[doctor|médico]] [[gave|dio]] ____ ____ ____ ____.', options: ['[[advice about health|consejos sobre salud]]', '[[advice about work|consejos sobre trabajo]]', '[[advice about travel|consejos sobre viajes]]', '[[no advice|ningún consejo]]'], correctAnswer: 0, explanation: '[[Advice about exercise, food, sleep, water|Consejos sobre ejercicio, comida, sueño, agua]].' },
  { question: '[[Should|Debería]] [[expresses|expresa]] ____ ____ ____ ____ ____.', options: ['[[advice or suggestion|consejo o sugerencia]]', '[[obligation|obligación]]', '[[prohibition|prohibición]]', '[[permission|permiso]]'], correctAnswer: 0, explanation: '[[Should|Should]] = [[advice|consejo]].' },
];

export const UNIT_53_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u53-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Modals: Should & Shouldn\'t',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));

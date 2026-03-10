/**
 * Unidad 30 B1 — Lección 4: Comprensión auditiva (Repaso 26–29)
 * 15 actividades - Mixed content from units 26-29
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[My|Mi]] [[city|ciudad]] [[has|tiene]] [[many|muchos]] [[interesting|interesantes]] [[buildings|edificios]]. [[There is|Hay]] [[a|una]] [[cathedral|catedral]] [[and|y]] [[an|un]] [[old|viejo]] [[church|iglesia]]. [[I|Yo]] [[can|puedo]] [[either|o]] [[visit|visitar]] [[the|el]] [[museum|museo]] [[or|o]] [[the|la]] [[library|biblioteca]]. [[Both|Ambos]] [[are|son]] [[near|cerca]] [[the|del]] [[station|estación]]. [[Last|El]] [[year|año pasado]] [[I|yo]] [[taught|me enseñé]] [[myself|a mí mismo]] [[to|a]] [[cook|cocinar]]. [[I|Yo]] [[don\'t|no]] [[eat|como]] [[much|mucho]] [[meat|carne]] [[but|pero]] [[I|yo]] [[have|tengo]] [[a lot of|muchos]] [[vegetarian|vegetarianas]] [[recipes|recetas]]. [[We|Nosotros]] [[both|ambos]] [[prefer|preferimos]] [[eating|comer]] [[at|en]] [[home|casa]] [[and|y]] [[we|nosotros]] [[enjoy|disfrutamos]] [[ourselves|a nosotros mismos]] [[when|cuando]] [[cooking|cocinamos]] [[together|juntos]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the city have|tiene la ciudad]]?', options: ['[[many interesting buildings|muchos edificios interesantes]]', '[[a small park|un parque pequeño]]', '[[few shops|pocas tiendas]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[My city has many interesting buildings|mi ciudad tiene muchos edificios interesantes]]".' },
  { question: '[[What|Qué]] [[two buildings|dos edificios]] [[are mentioned|se mencionan]]?', options: ['[[cathedral and church|catedral e iglesia]]', '[[museum and library|museo y biblioteca]]', '[[station and museum|estación y museo]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[There is a cathedral and an old church|hay una catedral y una iglesia vieja]]".' },
  { question: '[[What|Qué]] [[two options|dos opciones]] [[can they choose|puede elegir]]?', options: ['[[museum or library|museo o biblioteca]]', '[[cathedral or church|catedral o iglesia]]', '[[station or museum|estación o museo]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[I can either visit the museum or the library|puedo o visitar el museo o la biblioteca]]".' },
  { question: '[[Where|Dónde]] [[are both|están ambos]]?', options: ['[[near the station|cerca de la estación]]', '[[near the cathedral|cerca de la catedral]]', '[[in the centre|en el centro]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[Both are near the station|ambos están cerca de la estación]]".' },
  { question: '[[What|Qué]] [[did they teach themselves last year|se enseñó el año pasado]]?', options: ['[[to cook|a cocinar]]', '[[to play guitar|a tocar la guitarra]]', '[[to speak English|a hablar inglés]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[I taught myself to cook|me enseñé a cocinar]]".' },
  { question: '[[What|Qué]] [[do they have a lot of|tienen muchos]]?', options: ['[[vegetarian recipes|recetas vegetarianas]]', '[[meat dishes|platos de carne]]', '[[buildings|edificios]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[I have a lot of vegetarian recipes|tengo muchas recetas vegetarianas]]".' },
  { question: '[[What|Qué]] [[do they both prefer|prefieren ambos]]?', options: ['[[eating at home|comer en casa]]', '[[eating in restaurants|comer en restaurantes]]', '[[visiting museums|visitar museos]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[We both prefer eating at home|ambos preferimos comer en casa]]".' },
  { question: '[[Which quantifier|Qué cuantificador]] [[is used for "meat"|se usa para "carne"]]?', options: ['[[much|mucho]]', '[[many|muchos]]', '[[a few|unos pocos]]'], correctAnswer: 0, explanation: '[[Much|Mucho]] [[with uncountable|con incontable]] (meat).' },
  { question: '[[They|Ellos]] [[eat|comen]] [[a lot of meat|mucha carne]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They don\'t eat much meat|No comen mucha carne]].' },
  { question: '[[They enjoy themselves|Disfrutan]] [[when cooking together|cuando cocinan juntos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[we enjoy ourselves when cooking together|disfrutamos cuando cocinamos juntos]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Work|Trabajo]]', '[[City buildings, choices and cooking|Edificios de la ciudad, elecciones y cocina]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[buildings|edificios]], [[choices|elecciones]] [[and|y]] [[cooking|comida]].' },
  { question: '[[Which article|Qué artículo]] [[is used|se usa]] [[for "church"|para "iglesia"]]?', options: ['[[an|un]]', '[[a|un]]', '[[the|la]]'], correctAnswer: 0, explanation: '[[An|Un]] [[before vowel sound|antes de sonido vocálico]] (old).' },
  { question: '[[Which reflexive pronoun|Qué pronombre reflexivo]] [[is used for "we"|se usa para "nosotros"]]?', options: ['[[ourselves|nosotros mismos]]', '[[themselves|ellos mismos]]', '[[yourself|tú mismo]]'], correctAnswer: 0, explanation: '[[Ourselves|A nosotros mismos]] [[for we|para nosotros]].' },
  { question: '[[Both|Ambos]] [[museum and library|museo y biblioteca]] [[are|están]] [[near the station|cerca de la estación]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Both are near the station|ambos están cerca de la estación]]".' },
  { question: '[[What|Qué]] [[structure|estructura]] [[is used for museum or library|se usa para museo o biblioteca]]?', options: ['[[either...or|o...o]]', '[[both...and|y...y]]', '[[neither...nor|ni...ni]]'], correctAnswer: 0, explanation: '[[Either A or B|O A o B]] [[for choice|para elección]].' },
];

export const UNIT_30_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u30-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Review 26-29',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));

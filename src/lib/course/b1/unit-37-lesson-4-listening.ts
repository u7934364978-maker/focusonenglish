/**
 * Unidad 37 B1 — Lección 4: Comprensión auditiva (Compound adjectives, Travel)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Maria|María]] [[and|y]] [[I|yo]] [[want|quiero]] [[to tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[last|último]] [[holiday|vacaciones]]. [[We|Nosotros]] [[booked|reservamos]] [[a|un]] [[three-day|de tres días]] [[cruise|crucero]] [[to|a]] [[the|las]] [[Greek islands|islas griegas]]. [[The|El]] [[ship|barco]] [[had|tenía]] [[air-conditioned|con aire acondicionado]] [[cabins|cabinas]] [[and|y]] [[a|un]] [[five-star|de cinco estrellas]] [[restaurant|restaurante]]. [[Our|Nuestro]] [[tour guide|guía turístico]] [[was|era]] [[a|una]] [[30-year-old|de 30 años]] [[woman|mujer]] [[who|que]] [[spoke|hablaba]] [[perfect|perfecto]] [[English|inglés]]. [[We|Nosotros]] [[visited|visitamos]] [[some|algunas]] [[off the beaten track|fuera de lo común]] [[beaches|playas]] [[that|que]] [[were|eran]] [[incredibly|increíblemente]] [[peaceful|tranquilas]]. [[It was|Era]] [[a|un]] [[truly|verdaderamente]] [[unforgettable|inolvidable]] [[experience|experiencia]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did Maria book|reservó María]]?', options: ['[[a flight|un vuelo]]', '[[a three-day cruise|un crucero de tres días]]', '[[a hotel|un hotel]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[We booked a three-day cruise|reservamos un crucero de tres días]]".' },
  { question: '[[Where|Dónde]] [[did the cruise go|fue el crucero]]?', options: ['[[the Caribbean|el Caribe]]', '[[the Greek islands|las islas griegas]]', '[[the Mediterranean|el Mediterráneo]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[a three-day cruise to the Greek islands|un crucero de tres días a las islas griegas]]".' },
  { question: '[[What|Qué]] [[did the ship have|tenía el barco]]?', options: ['[[no cabins|sin cabinas]]', '[[air-conditioned cabins|cabinas con aire acondicionado]]', '[[basic rooms|habitaciones básicas]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The ship had air-conditioned cabins|el barco tenía cabinas con aire acondicionado]]".' },
  { question: '[[What|Qué]] [[type of restaurant|tipo de restaurante]] [[did the ship have|tenía el barco]]?', options: ['[[a basic restaurant|un restaurante básico]]', '[[a five-star restaurant|un restaurante de cinco estrellas]]', '[[no restaurant|sin restaurante]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[a five-star restaurant|un restaurante de cinco estrellas]]".' },
  { question: '[[How old|Cuántos años]] [[was the tour guide|tenía el guía turístico]]?', options: ['[[20 years old|20 años]]', '[[30 years old|30 años]]', '[[40 years old|40 años]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[a 30-year-old woman|una mujer de 30 años]]".' },
  { question: '[[What|Qué]] [[kind of beaches|tipo de playas]] [[did they visit|visitaron]]?', options: ['[[crowded beaches|playas abarrotadas]]', '[[off the beaten track beaches|playas fuera de lo común]]', '[[city beaches|playas urbanas]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[some off the beaten track beaches|algunas playas fuera de lo común]]".' },
  { question: '[[What|Qué]] [[were the beaches like|eran las playas]]?', options: ['[[noisy|ruidosas]]', '[[incredibly peaceful|increíblemente tranquilas]]', '[[crowded|abarrotadas]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[that were incredibly peaceful|que eran increíblemente tranquilas]]".' },
  { question: '[[Maria|María]] [[went on|hizo]] [[a cruise|un crucero]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[We booked a three-day cruise|reservamos un crucero de tres días]]".' },
  { question: '[[The cruise|El crucero]] [[lasted|duró]] [[five days|cinco días]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[It lasted three days|Duró tres días]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Work|Trabajo]]', '[[Maria\'s cruise holiday to Greece|Las vacaciones en crucero de María a Grecia]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[Maria\'s cruise to the Greek islands|el crucero de María a las islas griegas]].' },
  { question: '[[The tour guide|El guía turístico]] [[spoke|hablaba]] [[perfect English|inglés perfecto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[who spoke perfect English|que hablaba inglés perfecto]]".' },
  { question: '[[Which compound adjective|Qué adjetivo compuesto]] [[describes the cruise|describe el crucero]]?', options: ['[[five-star|de cinco estrellas]]', '[[three-day|de tres días]]', '[[air-conditioned|con aire acondicionado]]'], correctAnswer: 1, explanation: '[[Three-day|De tres días]] [[describes the cruise|describe el crucero]].' },
  { question: '[[The experience|La experiencia]] [[was|era]] [[unforgettable|inolvidable]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[a truly unforgettable experience|una experiencia verdaderamente inolvidable]]".' },
  { question: '[[The ship|El barco]] [[had|tenía]] [[air-conditioned cabins|cabinas con aire acondicionado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[The ship had air-conditioned cabins|el barco tenía cabinas con aire acondicionado]]".' },
  { question: '[[They|Ellos]] [[visited|visitaron]] [[popular tourist beaches|playas turísticas populares]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They visited off the beaten track beaches|Visitaron playas fuera de lo común]].' },
];

export const UNIT_37_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u37-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Travel & Descriptions',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));

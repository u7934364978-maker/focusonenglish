/**
 * Unidad 57 B1 — Lección 3: Comprensión lectora (Clothes & colours)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[love|me encanta]] [[shopping for clothes|comprar ropa]]. [[Last weekend|El fin de semana pasado]] [[I|yo]] [[bought|compré]] [[a beautiful dress|un vestido bonito]] [[which|que]] [[was made|fue hecho]] [[of cotton|de algodón]]. [[It|Él]] [[is|es]] [[dark blue|azul oscuro]] [[and|y]] [[goes well with|hace juego con]] [[light colours|colores claros]]. [[My friend|Mi amiga]] [[told me|me dijo]] [[that|que]] [[I should|debería]] [[try on|probarme]] [[clothes|ropa]] [[before buying|antes de comprar]]. [[Although|Aunque]] [[the jacket|la chaqueta]] [[was expensive|era cara]], [[I|yo]] [[bought it|la compré]] [[because|porque]] [[it|él]] [[was the most comfortable|era la más cómoda]] [[in the shop|de la tienda]]. [[Bright colours|Los colores brillantes]] [[make me feel|me hacen sentir]] [[happy|feliz]]. [[Next month|El próximo mes]] [[I|yo]] [[am going to|voy a]] [[buy|comprar]] [[a new coat|un abrigo nuevo]] [[for winter|para el invierno]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the person love|le encanta a la persona]]?', options: ['[[Cooking|Cocinar]]', '[[Shopping for clothes|Comprar ropa]]', '[[Reading|Leer]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I love shopping for clothes|me encanta comprar ropa]]".' },
  { question: '[[What|Qué]] [[did the person buy|compró la persona]] [[last weekend|el fin de semana pasado]]?', options: ['[[A jacket|Una chaqueta]]', '[[A beautiful dress|Un vestido bonito]]', '[[A coat|Un abrigo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I bought a beautiful dress|compré un vestido bonito]]".' },
  { question: '[[What|De qué]] [[material|material]] [[was the dress made|estaba hecho el vestido]]?', options: ['[[Leather|Cuero]]', '[[Cotton|Algodón]]', '[[Plastic|Plástico]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[was made of cotton|fue hecho de algodón]]".' },
  { question: '[[What|Qué]] [[colour|color]] [[is the dress|es el vestido]]?', options: ['[[Light blue|Azul claro]]', '[[Dark blue|Azul oscuro]]', '[[Red|Rojo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[It is dark blue|es azul oscuro]]".' },
  { question: '[[What|Qué]] [[advice|consejo]] [[did the friend give|dio la amiga]]?', options: ['[[To buy more|Comprar más]]', '[[To try on clothes before buying|Probarse ropa antes de comprar]]', '[[To avoid shopping|Evitar comprar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I should try on clothes before buying|debería probarme ropa antes de comprar]]".' },
  { question: '[[The person|La persona]] [[bought|compró]] [[the jacket|la chaqueta]] [[although|aunque]] [[it was expensive|era cara]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Although the jacket was expensive, I bought it|aunque la chaqueta era cara, la compré]]".' },
  { question: '[[Bright colours|Los colores brillantes]] [[make the person feel happy|hacen sentir feliz a la persona]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Bright colours make me feel happy|los colores brillantes me hacen sentir feliz]]".' },
  { question: '[[When|Cuándo]] [[is the person going to buy|va a comprar la persona]] [[a new coat|un abrigo nuevo]]?', options: ['[[This month|Este mes]]', '[[Next month|El próximo mes]]', '[[Last month|El mes pasado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Next month I am going to buy a new coat|el próximo mes voy a comprar un abrigo nuevo]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Sport|Deporte]]', '[[Clothes shopping and preferences|Compras de ropa y preferencias]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla sobre]] [[clothes and shopping|ropa y compras]].' },
  { question: '[[Passive voice|Voz pasiva]] [[is used|se usa]] [[for|para]] [[the dress|el vestido]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[was made of cotton|fue hecho de algodón]]".' },
  { question: '[[Reported speech|Estilo indirecto]] [[is used|se usa]] [[for|para]] [[the friend\'s advice|el consejo de la amiga]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[My friend told me that I should|mi amiga me dijo que debería]]".' },
  { question: '[[The dress|El vestido]] [[goes well with|hace juego con]] [[light colours|colores claros]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[goes well with light colours|hace juego con colores claros]]".' },
  { question: '[[Although|Although]] [[introduces|introduce]] [[a contrast|un contraste]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Expensive but bought anyway|Caro pero lo compró de todos modos]].' },
  { question: '[[The jacket|La chaqueta]] [[was the most comfortable|era la más cómoda]] [[in the shop|de la tienda]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[it was the most comfortable in the shop|era la más cómoda de la tienda]]".' },
  { question: '[[How many|Cuántos]] [[clothing items|prendas]] [[does the text mention|menciona el texto]]?', options: ['[[One|Una]]', '[[Two|Dos]]', '[[Four or more|Cuatro o más]]'], correctAnswer: 2, explanation: '[[Several|Varias]]: [[dress|vestido]], [[jacket|chaqueta]], [[coat|abrigo]].' },
];

export const UNIT_57_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u57-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Clothes & Colours',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));

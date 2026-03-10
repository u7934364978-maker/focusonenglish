/**
 * Unidad 52 — Lección 4: Comprensión auditiva (Modals: Mustn't & Don't have to)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Welcome|Bienvenido]] [[to|a]] [[the|la]] [[library|biblioteca]]! [[Here|Aquí]] [[are|son]] [[some|algunas]] [[rules|reglas]]. [[You|Tú]] [[mustn't|no debes]] [[talk|hablar]] [[loudly|en voz alta]] [[—|—]] [[it|es]] [[a|una]] [[quiet|silencio]] [[zone|zona]]. [[You|Tú]] [[don't have to|no tienes que]] [[bring|traer]] [[your|tu]] [[own|propio]] [[books|libros]] [[—|—]] [[we|nosotros]] [[have|tenemos]] [[many|muchos]] [[here|aquí]]. [[You|Tú]] [[mustn't|no debes]] [[eat|comer]] [[or|o]] [[drink|beber]] [[inside|dentro]] [[—|—]] [[it|es]] [[to|para]] [[protect|proteger]] [[the|los]] [[books|libros]]. [[You|Tú]] [[don't have to|no tienes que]] [[pay|pagar]] [[for|para]] [[a|una]] [[membership|membresía]] [[—|—]] [[it|es]] [[free|gratis]] [[for|para]] [[students|estudiantes]]. [[You|Tú]] [[mustn't|no debes]] [[take|sacar]] [[books|libros]] [[without|sin]] [[checking out|registrar]]. [[You|Tú]] [[don't have to|no tienes que]] [[return|devolver]] [[books|libros]] [[the same day|el mismo día]] [[—|—]] [[you|tú]] [[can|puedes]] [[keep|quedarte]] [[them|ellos]] [[for|por]] [[two|dos]] [[weeks|semanas]]. [[Enjoy|Disfruta]] [[your|tu]] [[visit|visita]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[is|está]] [[the|el]] [[speaker|hablante]]?', options: ['[[At a school|En una escuela]]', '[[At a library|En una biblioteca]]', '[[At a hospital|En un hospital]]', '[[At an office|En una oficina]]'], correctAnswer: 1, explanation: '[[Welcome to the library|Bienvenido a la biblioteca]].' },
  { question: '[[Can|Pueden]] [[people|las personas]] [[talk|hablar]] [[loudly|en voz alta]] [[in|en]] [[the|la]] [[library|biblioteca]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Sometimes|A veces]]', '[[Only in some areas|Solo en algunas áreas]]'], correctAnswer: 1, explanation: "[[You mustn't talk loudly|No debes hablar en voz alta]]." },
  { question: '[[Do|Tienen que]] [[people|las personas]] ____ ____ ____ ____ [[bring|traer]] [[their own books|sus propios libros]]?', options: ['[[have to|tener que]]', '[[don\'t have to|no tener que]]', '[[must|deber]]', '[[mustn\'t|no deber]]'], correctAnswer: 1, explanation: "[[You don't have to bring your own books|No tienes que traer tus propios libros]]." },
  { question: '[[Can|Pueden]] [[people|las personas]] [[eat|comer]] [[inside|dentro]] [[the|la]] [[library|biblioteca]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Only snacks|Solo snacks]]', '[[Only in break|Solo en el recreo]]'], correctAnswer: 1, explanation: "[[You mustn't eat or drink inside|No debes comer o beber dentro]]." },
  { question: '[[Why|Por qué]] [[mustn't|no deben]] [[people|las personas]] [[eat|comer]] [[inside|dentro]]?', options: ['[[Boss says so|El jefe lo dice]]', '[[To protect the books|Para proteger los libros]]', '[[No reason|Sin razón]]', '[[It is dirty|Está sucio]]'], correctAnswer: 1, explanation: '[[It is to protect the books|Es para proteger los libros]].' },
  { question: '[[Do|Tienen que]] [[students|los estudiantes]] ____ ____ ____ ____ [[pay|pagar]] [[for|para]] [[membership|membresía]]?', options: ['[[have to|tener que]]', '[[don\'t have to|no tener que]]', '[[must|deber]]', '[[mustn\'t|no deber]]'], correctAnswer: 1, explanation: "[[It is free for students|Es gratis para estudiantes]]." },
  { question: '[[Can|Pueden]] [[people|las personas]] [[take|sacar]] [[books|libros]] [[without|sin]] [[checking out|registrar]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Sometimes|A veces]]', '[[Only one|Solo uno]]'], correctAnswer: 1, explanation: "[[You mustn't take books without checking out|No debes sacar libros sin registrar]]." },
  { question: '[[Do|Tienen que]] [[people|las personas]] ____ ____ ____ ____ [[return|devolver]] [[books|libros]] [[the same day|el mismo día]]?', options: ['[[have to|tener que]]', '[[don\'t have to|no tener que]]', '[[must|deber]]', '[[mustn\'t|no deber]]'], correctAnswer: 1, explanation: "[[You don't have to return books the same day|No tienes que devolver libros el mismo día]]." },
  { question: '[[How long|Cuánto tiempo]] [[can|pueden]] [[people|las personas]] [[keep|quedarse]] [[books|libros]]?', options: ['[[One|Una]] [[week|semana]]', '[[Two|Dos]] [[weeks|semanas]]', '[[One|Un]] [[month|mes]]', '[[One|Un]] [[day|día]]'], correctAnswer: 1, explanation: '[[You can keep them for two weeks|Puedes quedártelos por dos semanas]].' },
  { question: '[[The|El]] [[library|biblioteca]] [[is|es]] ____ ____ ____ ____ ____.', options: ['[[a quiet zone|una zona de silencio]]', '[[a noisy place|un lugar ruidoso]]', '[[a restaurant|un restaurante]]', '[[a gym|un gimnasio]]'], correctAnswer: 0, explanation: '[[It is a quiet zone|Es una zona de silencio]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[audio|audio]] [[is|es]]?', options: ['[[Food|Comida]]', '[[Library rules: mustn\'t and don\'t have to|Reglas de biblioteca: mustn\'t y don\'t have to]]', '[[Travel|Viajes]]', '[[Sports|Deportes]]'], correctAnswer: 1, explanation: '[[The|El]] [[audio|audio]] [[is about|trata de]] [[library rules|reglas de biblioteca]].' },
  { question: '[[Which|Cuáles]] [[modals|modales]] [[are|se]] [[used|usan]]?', options: ['[[Can and could|Can y could]]', '[[Mustn\'t and don\'t have to|Mustn\'t y don\'t have to]]', '[[Should|Should]]', '[[Will|Will]]'], correctAnswer: 1, explanation: '[[Mustn\'t and don\'t have to|Mustn\'t y don\'t have to]].' },
  { question: '[[True or False|Verdadero o Falso]]: [[Students|Los estudiantes]] [[must|deben]] [[pay|pagar]] [[for|para]] [[library|biblioteca]] [[membership|membresía]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: "[[It is free for students|Es gratis para estudiantes]]." },
  { question: '[[True or False|Verdadero o Falso]]: [[People|Las personas]] [[must|deben]] [[return|devolver]] [[books|libros]] [[the same day|el mismo día]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: "[[You don't have to return books the same day|No tienes que devolver libros el mismo día]]." },
  { question: '[[Don\'t have to|No tiene que]] [[means|significa]] ____ ____ ____ ____ ____.', options: ['[[no obligation|sin obligación]]', '[[prohibition|prohibición]]', '[[strong obligation|obligación fuerte]]', '[[permission|permiso]]'], correctAnswer: 0, explanation: "[[Don't have to|Don't have to]] = [[no obligation|sin obligación]]." },
];

export const UNIT_52_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u52-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Modals: Mustn\'t & Don\'t have to',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));

/**
 * Niveles del videojuego de inglés.
 * Cada nivel = un camino con paradas; en cada parada el jugador supera un reto de inglés para que el gato avance.
 */

export interface LevelStop {
  id: string;
  questionEs: string;
  questionEn: string;
  options: string[];
  correctIndex: number;
  /** Pista opcional si falla */
  hintEs?: string;
}

export interface GameLevel {
  id: string;
  titleEs: string;
  titleEn: string;
  storyEs: string;
  storyEn: string;
  /** Imagen del gato (sprite) */
  catImagePath: string;
  /** Número de paradas = número de retos */
  stops: LevelStop[];
  /** Texto al completar el nivel */
  completeEs: string;
  completeEn: string;
}

/** Nivel 1: El gato recorre la calle buscando comida. En cada parada debe responder en inglés. */
export const LEVEL_1: GameLevel = {
  id: 'nivel-1',
  titleEs: 'En la calle',
  titleEn: 'On the street',
  storyEs: 'El gato tiene hambre. Ayúdale a llegar al final de la calle respondiendo en inglés.',
  storyEn: 'The cat is hungry. Help him reach the end of the street by answering in English.',
  catImagePath: '/game-assets/cat-looking-for-food.png',
  stops: [
    {
      id: 'stop-1',
      questionEs: '¿Qué está haciendo el gato?',
      questionEn: 'What is the cat doing?',
      options: ['Looking for food', 'Sleeping', 'Playing'],
      correctIndex: 0,
      hintEs: 'Tiene hambre.',
    },
    {
      id: 'stop-2',
      questionEs: 'Elige la palabra correcta: comida',
      questionEn: 'Choose the word for food:',
      options: ['Food', 'Water', 'Sleep'],
      correctIndex: 0,
    },
    {
      id: 'stop-3',
      questionEs: 'Completa: "I am ____" (tengo hambre)',
      questionEn: 'Complete: "I am ____" (hungry)',
      options: ['hungry', 'happy', 'sleepy'],
      correctIndex: 0,
    },
    {
      id: 'stop-4',
      questionEs: '¿Dónde está el gato?',
      questionEn: 'Where is the cat?',
      options: ['On the street', 'In the house', 'In the water'],
      correctIndex: 0,
    },
    {
      id: 'stop-5',
      questionEs: '¿Qué quiere el gato?',
      questionEn: 'What does the cat want?',
      options: ['Food', 'A ball', 'To sleep'],
      correctIndex: 0,
      hintEs: '¡Casi llegas!',
    },
  ],
  completeEs: '¡Bien hecho! El gato ha encontrado comida.',
  completeEn: 'Well done! The cat has found food.',
};

export const GAME_LEVELS: GameLevel[] = [LEVEL_1];

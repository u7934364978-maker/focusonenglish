/**
 * Escenas narrativas del juego de inglés (gato, calle, comida, etc.).
 * Cada escena: vídeo/imagen + texto + actividad de comprensión o vocabulario.
 */

export interface SceneActivity {
  type: 'multiple-choice';
  questionEn: string;
  questionEs: string;
  options: string[];
  correctIndex: number;
}

export interface GameScene {
  id: string;
  titleEs: string;
  titleEn: string;
  /** Frase corta antes del vídeo (opcional) */
  introEs?: string;
  introEn?: string;
  narrativeEs: string;
  narrativeEn: string;
  /** Ruta al vídeo (o imagen) desde public */
  mediaPath: string;
  /** Si el vídeo falla, se muestra esta imagen */
  imageFallbackPath?: string;
  mediaType: 'video' | 'image';
  activity: SceneActivity;
}

/** Escena 1: El gato camina por la calle. El alumno lo ve desde atrás. Busca comida. */
export const ESCENA_1: GameScene = {
  id: 'escena-1',
  titleEs: 'En la calle',
  titleEn: 'On the street',
  introEs: 'Mira al gato.',
  introEn: 'Look at the cat.',
  narrativeEs: 'El gato tiene hambre. Lo ves por detrás mientras camina por la calle. Va buscando comida.',
  narrativeEn: 'The cat is hungry. You see him from behind as he walks down the street. He is looking for food.',
  mediaPath: '/game-assets/cat-walking-for-food.mp4',
  imageFallbackPath: '/game-assets/cat-looking-for-food.png',
  mediaType: 'video',
  activity: {
    type: 'multiple-choice',
    questionEn: 'What is the cat doing?',
    questionEs: '¿Qué está haciendo el gato?',
    options: ['Looking for food', 'Sleeping', 'Playing with a ball'],
    correctIndex: 0,
  },
};

export const GAME_SCENES: GameScene[] = [ESCENA_1];

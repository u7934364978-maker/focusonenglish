/**
 * Niveles del videojuego visual (sin texto).
 * Solo vídeo Runway + imágenes Leonardo. El jugador elige tocando una imagen.
 */

export interface VisualRound {
  /** Rutas a 3 imágenes (Leonardo). El jugador elige la correcta. */
  imagePaths: [string, string, string];
  /** Índice correcto (0, 1 o 2). Sin texto: el contexto es el vídeo anterior. */
  correctIndex: number;
}

export interface VisualGameLevel {
  id: string;
  /** Vídeo (Runway) que se reproduce primero. Sin texto. */
  videoPath: string;
  /** Rondas: tras el vídeo, se muestran 3 imágenes; tap en la correcta para avanzar. */
  rounds: VisualRound[];
  /** Imagen del gato para HUD o transición (Leonardo). */
  catImagePath: string;
}

/** Nivel 1: Vídeo del gato buscando comida (Runway) → elige la comida (Leonardo). Sin texto. */
export const VISUAL_LEVEL_1: VisualGameLevel = {
  id: 'visual-1',
  videoPath: '/game-assets/cat-walking-for-food.mp4',
  catImagePath: '/game-assets/cat-looking-for-food.png',
  rounds: [
    {
      imagePaths: [
        '/game-assets/choice-food.png',
        '/game-assets/choice-ball.png',
        '/game-assets/choice-water.png',
      ],
      correctIndex: 0,
    },
  ],
};

/** Pool de miniactividades para el paseo infinito. Misma actividad (elige comida) en bucle. */
export const INFINITE_WALK_ACTIVITIES: VisualRound[] = [
  {
    imagePaths: [
      '/game-assets/choice-food.png',
      '/game-assets/choice-ball.png',
      '/game-assets/choice-water.png',
    ],
    correctIndex: 0,
  },
];

export const VISUAL_LEVELS: VisualGameLevel[] = [VISUAL_LEVEL_1];

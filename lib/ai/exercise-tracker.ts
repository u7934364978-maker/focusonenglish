// ============================================
// SISTEMA DE TRACKING DE EJERCICIOS
// ============================================
// Evita que se generen ejercicios repetidos

import { ExerciseType, CEFRLevel } from '@/lib/exercise-types';

export interface ExerciseSignature {
  type: ExerciseType;
  level: CEFRLevel;
  contentHash: string;
  timestamp: Date;
}

export interface UserExerciseHistory {
  userId?: string; // Optional: for logged-in users
  sessionId: string; // For anonymous users
  exercises: ExerciseSignature[];
  createdAt: Date;
  lastUpdated: Date;
}

// ============================================
// EXERCISE TRACKER CLASS
// ============================================

export class ExerciseTracker {
  private history: Map<string, UserExerciseHistory>;
  private maxHistoryPerUser: number;

  constructor(maxHistoryPerUser: number = 100) {
    this.history = new Map();
    this.maxHistoryPerUser = maxHistoryPerUser;
  }

  /**
   * Genera un hash simple del contenido del ejercicio
   */
  private generateContentHash(content: any): string {
    const contentStr = JSON.stringify(content);
    let hash = 0;
    for (let i = 0; i < contentStr.length; i++) {
      const char = contentStr.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString(36);
  }

  /**
   * Obtiene la clave del usuario (userId o sessionId)
   */
  private getUserKey(userId?: string, sessionId?: string): string {
    return userId || sessionId || 'anonymous';
  }

  /**
   * Registra un ejercicio completado
   */
  trackExercise(
    exercise: any,
    exerciseType: ExerciseType,
    level: CEFRLevel,
    userId?: string,
    sessionId?: string
  ): void {
    const userKey = this.getUserKey(userId, sessionId);
    const contentHash = this.generateContentHash(exercise);

    // Obtener o crear historial del usuario
    let userHistory = this.history.get(userKey);
    
    if (!userHistory) {
      userHistory = {
        userId,
        sessionId: sessionId || userKey,
        exercises: [],
        createdAt: new Date(),
        lastUpdated: new Date()
      };
      this.history.set(userKey, userHistory);
    }

    // Agregar ejercicio al historial
    const signature: ExerciseSignature = {
      type: exerciseType,
      level,
      contentHash,
      timestamp: new Date()
    };

    userHistory.exercises.push(signature);
    userHistory.lastUpdated = new Date();

    // Mantener solo los últimos N ejercicios
    if (userHistory.exercises.length > this.maxHistoryPerUser) {
      userHistory.exercises = userHistory.exercises.slice(-this.maxHistoryPerUser);
    }
  }

  /**
   * Verifica si un ejercicio ya fue usado por el usuario
   */
  isExerciseUsed(
    exercise: any,
    exerciseType: ExerciseType,
    level: CEFRLevel,
    userId?: string,
    sessionId?: string
  ): boolean {
    const userKey = this.getUserKey(userId, sessionId);
    const userHistory = this.history.get(userKey);

    if (!userHistory) {
      return false;
    }

    const contentHash = this.generateContentHash(exercise);

    return userHistory.exercises.some(
      ex => ex.contentHash === contentHash && 
            ex.type === exerciseType && 
            ex.level === level
    );
  }

  /**
   * Obtiene ejercicios usados recientemente por el usuario
   */
  getRecentExercises(
    exerciseType: ExerciseType,
    level: CEFRLevel,
    userId?: string,
    sessionId?: string,
    limit: number = 10
  ): ExerciseSignature[] {
    const userKey = this.getUserKey(userId, sessionId);
    const userHistory = this.history.get(userKey);

    if (!userHistory) {
      return [];
    }

    return userHistory.exercises
      .filter(ex => ex.type === exerciseType && ex.level === level)
      .slice(-limit);
  }

  /**
   * Genera información sobre ejercicios recientes para el prompt de IA
   */
  getExclusionPrompt(
    exerciseType: ExerciseType,
    level: CEFRLevel,
    userId?: string,
    sessionId?: string
  ): string {
    const recentExercises = this.getRecentExercises(
      exerciseType, 
      level, 
      userId, 
      sessionId, 
      5
    );

    if (recentExercises.length === 0) {
      return '';
    }

    return `\n\nIMPORTANT: The user has recently completed ${recentExercises.length} similar exercises. 
Generate NEW and DIFFERENT content. Avoid repeating:
- Similar topics or contexts
- Same grammatical structures in focus
- Identical vocabulary themes
- Similar sentence patterns

Make this exercise feel fresh and engaging with new examples and contexts.`;
  }

  /**
   * Limpia el historial de un usuario
   */
  clearUserHistory(userId?: string, sessionId?: string): void {
    const userKey = this.getUserKey(userId, sessionId);
    this.history.delete(userKey);
  }

  /**
   * Obtiene estadísticas del usuario
   */
  getUserStats(userId?: string, sessionId?: string): {
    totalExercises: number;
    exercisesByType: Record<ExerciseType, number>;
    exercisesByLevel: Record<CEFRLevel, number>;
  } {
    const userKey = this.getUserKey(userId, sessionId);
    const userHistory = this.history.get(userKey);

    const stats = {
      totalExercises: 0,
      exercisesByType: {} as Record<ExerciseType, number>,
      exercisesByLevel: {} as Record<CEFRLevel, number>
    };

    if (!userHistory) {
      return stats;
    }

    stats.totalExercises = userHistory.exercises.length;

    userHistory.exercises.forEach(ex => {
      // Count by type
      stats.exercisesByType[ex.type] = (stats.exercisesByType[ex.type] || 0) + 1;
      
      // Count by level
      stats.exercisesByLevel[ex.level] = (stats.exercisesByLevel[ex.level] || 0) + 1;
    });

    return stats;
  }

  /**
   * Limpia ejercicios antiguos (más de 7 días)
   */
  cleanupOldExercises(daysToKeep: number = 7): void {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);

    this.history.forEach((userHistory, userKey) => {
      userHistory.exercises = userHistory.exercises.filter(
        ex => ex.timestamp > cutoffDate
      );

      // Si no quedan ejercicios, eliminar el usuario completo
      if (userHistory.exercises.length === 0) {
        this.history.delete(userKey);
      } else {
        userHistory.lastUpdated = new Date();
      }
    });
  }

  /**
   * Obtiene el tamaño total del tracker
   */
  getSize(): { users: number; totalExercises: number } {
    let totalExercises = 0;
    
    this.history.forEach(userHistory => {
      totalExercises += userHistory.exercises.length;
    });

    return {
      users: this.history.size,
      totalExercises
    };
  }
}

// ============================================
// SINGLETON INSTANCE
// ============================================

let trackerInstance: ExerciseTracker | null = null;

export function getExerciseTracker(): ExerciseTracker {
  if (!trackerInstance) {
    trackerInstance = new ExerciseTracker(100); // Keep last 100 exercises per user
    
    // Cleanup old exercises every hour
    setInterval(() => {
      trackerInstance?.cleanupOldExercises(7); // Keep 7 days of history
    }, 60 * 60 * 1000); // 1 hour
  }
  return trackerInstance;
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Genera un session ID único para usuarios anónimos
 */
export function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

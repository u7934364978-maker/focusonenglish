// ============================================
// HERRAMIENTA DE RESET DE PROGRESO
// ============================================
// Script para resetear el progreso de un usuario específico

import { createClient } from '@supabase/supabase-js';

// Configurar Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface ResetOptions {
  userId: string;
  resetType: 'full' | 'progress-only' | 'stats-only';
}

/**
 * Resetea el progreso del usuario
 */
export async function resetUserProgress(options: ResetOptions) {
  const { userId, resetType } = options;

  console.log(`🔄 Reseteando progreso para usuario: ${userId}`);
  console.log(`📋 Tipo de reset: ${resetType}`);

  try {
    if (resetType === 'full' || resetType === 'progress-only') {
      // 1. Resetear progreso de lecciones
      const { error: lessonsError } = await supabase
        .from('user_lesson_progress')
        .delete()
        .eq('user_id', userId);

      if (lessonsError) {
        console.error('❌ Error reseteando progreso de lecciones:', lessonsError);
      } else {
        console.log('✅ Progreso de lecciones reseteado');
      }

      // 2. Resetear progreso de ejercicios
      const { error: exercisesError } = await supabase
        .from('user_exercise_progress')
        .delete()
        .eq('user_id', userId);

      if (exercisesError) {
        console.error('❌ Error reseteando progreso de ejercicios:', exercisesError);
      } else {
        console.log('✅ Progreso de ejercicios reseteado');
      }

      // 3. Resetear sesiones de práctica
      const { error: sessionsError } = await supabase
        .from('practice_sessions')
        .delete()
        .eq('user_id', userId);

      if (sessionsError) {
        console.error('❌ Error reseteando sesiones de práctica:', sessionsError);
      } else {
        console.log('✅ Sesiones de práctica reseteadas');
      }
    }

    if (resetType === 'full' || resetType === 'stats-only') {
      // 4. Resetear estadísticas generales
      const { error: statsError } = await supabase
        .from('user_stats')
        .update({
          total_time_spent: 0,
          exercises_completed: 0,
          lessons_completed: 0,
          streak_days: 0,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', userId);

      if (statsError) {
        console.error('❌ Error reseteando estadísticas:', statsError);
      } else {
        console.log('✅ Estadísticas reseteadas');
      }
    }

    console.log('🎉 Reset completado exitosamente');
    return { success: true };

  } catch (error) {
    console.error('❌ Error general en reset:', error);
    return { success: false, error };
  }
}

/**
 * Obtiene el ID de usuario por email
 */
export async function getUserIdByEmail(email: string): Promise<string | null> {
  const { data, error } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    .single();

  if (error) {
    console.error('❌ Error buscando usuario:', error);
    return null;
  }

  return data?.id || null;
}

/**
 * Script principal para ejecutar desde terminal
 */
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log(`
📖 Uso:
  npm run reset-progress <email> <tipo>

Donde:
  <email> = Email del usuario (ej: admin@focus-english.com)
  <tipo>  = full | progress-only | stats-only

Ejemplos:
  npm run reset-progress admin@focus-english.com full
  npm run reset-progress user@test.com progress-only
    `);
    process.exit(1);
  }

  const email = args[0];
  const resetType = args[1] as 'full' | 'progress-only' | 'stats-only';

  if (!['full', 'progress-only', 'stats-only'].includes(resetType)) {
    console.error('❌ Tipo de reset inválido. Usa: full, progress-only o stats-only');
    process.exit(1);
  }

  console.log('🔍 Buscando usuario...');
  const userId = await getUserIdByEmail(email);

  if (!userId) {
    console.error(`❌ Usuario con email ${email} no encontrado`);
    process.exit(1);
  }

  console.log(`✅ Usuario encontrado: ${userId}`);

  const result = await resetUserProgress({ userId, resetType });

  if (result.success) {
    console.log('✅ Operación completada exitosamente');
    process.exit(0);
  } else {
    console.error('❌ Operación fallida');
    process.exit(1);
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main();
}

export default { resetUserProgress, getUserIdByEmail };

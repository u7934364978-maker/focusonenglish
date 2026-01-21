#!/usr/bin/env ts-node

/**
 * Script de Verificación de Configuración de Supabase
 * 
 * Este script verifica que:
 * 1. Las variables de entorno de Supabase estén configuradas
 * 2. La conexión a Supabase funcione correctamente
 * 3. Las tablas necesarias existan
 * 4. Las políticas RLS estén configuradas
 * 
 * Uso:
 *   npm run verify-supabase
 *   o
 *   ts-node scripts/verify-supabase-setup.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Cargar variables de entorno
dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

interface VerificationResult {
  step: string;
  status: 'success' | 'error' | 'warning';
  message: string;
  details?: any;
}

const results: VerificationResult[] = [];

function logResult(result: VerificationResult) {
  results.push(result);
  const icon = result.status === 'success' ? '✅' : result.status === 'error' ? '❌' : '⚠️';
  console.log(`${icon} ${result.step}: ${result.message}`);
  if (result.details) {
    console.log(`   Details:`, result.details);
  }
}

async function verifyEnvironmentVariables() {
  console.log('\n📋 PASO 1: Verificando Variables de Entorno\n');

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    logResult({
      step: 'NEXT_PUBLIC_SUPABASE_URL',
      status: 'error',
      message: 'Variable no configurada',
      details: 'Necesitas configurar NEXT_PUBLIC_SUPABASE_URL en tu archivo .env.local'
    });
    return false;
  }

  if (!supabaseUrl.includes('supabase.co')) {
    logResult({
      step: 'NEXT_PUBLIC_SUPABASE_URL',
      status: 'warning',
      message: 'URL no parece ser de Supabase',
      details: `URL actual: ${supabaseUrl}`
    });
  } else {
    logResult({
      step: 'NEXT_PUBLIC_SUPABASE_URL',
      status: 'success',
      message: 'Configurada correctamente',
      details: supabaseUrl
    });
  }

  if (!supabaseAnonKey) {
    logResult({
      step: 'NEXT_PUBLIC_SUPABASE_ANON_KEY',
      status: 'error',
      message: 'Variable no configurada',
      details: 'Necesitas configurar NEXT_PUBLIC_SUPABASE_ANON_KEY en tu archivo .env.local'
    });
    return false;
  }

  if (!supabaseAnonKey.startsWith('eyJ')) {
    logResult({
      step: 'NEXT_PUBLIC_SUPABASE_ANON_KEY',
      status: 'warning',
      message: 'Key no parece ser un JWT válido',
      details: 'Las keys de Supabase deben empezar con "eyJ"'
    });
  } else {
    logResult({
      step: 'NEXT_PUBLIC_SUPABASE_ANON_KEY',
      status: 'success',
      message: 'Configurada correctamente',
      details: `${supabaseAnonKey.substring(0, 20)}...`
    });
  }

  if (!supabaseServiceKey) {
    logResult({
      step: 'SUPABASE_SERVICE_ROLE_KEY',
      status: 'error',
      message: 'Variable no configurada',
      details: 'Necesitas configurar SUPABASE_SERVICE_ROLE_KEY en tu archivo .env.local'
    });
    return false;
  }

  if (!supabaseServiceKey.startsWith('eyJ')) {
    logResult({
      step: 'SUPABASE_SERVICE_ROLE_KEY',
      status: 'warning',
      message: 'Key no parece ser un JWT válido',
      details: 'Las keys de Supabase deben empezar con "eyJ"'
    });
  } else {
    logResult({
      step: 'SUPABASE_SERVICE_ROLE_KEY',
      status: 'success',
      message: 'Configurada correctamente',
      details: `${supabaseServiceKey.substring(0, 20)}...`
    });
  }

  return true;
}

async function verifySupabaseConnection() {
  console.log('\n🔌 PASO 2: Verificando Conexión a Supabase\n');

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Intentar una consulta simple
    const { data, error } = await supabase.from('users').select('count');

    if (error) {
      if (error.message.includes('does not exist')) {
        logResult({
          step: 'Conexión a Supabase',
          status: 'warning',
          message: 'Conexión exitosa, pero tabla "users" no existe',
          details: 'Necesitas crear las tablas en Supabase'
        });
      } else {
        logResult({
          step: 'Conexión a Supabase',
          status: 'error',
          message: 'Error al conectar',
          details: error.message
        });
        return false;
      }
    } else {
      logResult({
        step: 'Conexión a Supabase',
        status: 'success',
        message: 'Conexión exitosa',
        details: 'Cliente Supabase funcionando correctamente'
      });
    }

    return true;
  } catch (error: any) {
    logResult({
      step: 'Conexión a Supabase',
      status: 'error',
      message: 'Error inesperado al conectar',
      details: error.message
    });
    return false;
  }
}

async function verifyTables() {
  console.log('\n📊 PASO 3: Verificando Tablas de Base de Datos\n');

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  const requiredTables = ['users', 'user_profiles', 'subscriptions', 'user_progress'];

  for (const tableName of requiredTables) {
    try {
      const { data, error } = await supabase.from(tableName).select('*').limit(1);

      if (error) {
        if (error.message.includes('does not exist')) {
          logResult({
            step: `Tabla "${tableName}"`,
            status: 'warning',
            message: 'Tabla no existe',
            details: `Necesitas crear la tabla "${tableName}" en Supabase`
          });
        } else {
          logResult({
            step: `Tabla "${tableName}"`,
            status: 'error',
            message: 'Error al verificar',
            details: error.message
          });
        }
      } else {
        logResult({
          step: `Tabla "${tableName}"`,
          status: 'success',
          message: 'Tabla existe y es accesible',
          details: `${data?.length || 0} registros encontrados`
        });
      }
    } catch (error: any) {
      logResult({
        step: `Tabla "${tableName}"`,
        status: 'error',
        message: 'Error inesperado',
        details: error.message
      });
    }
  }
}

async function printSQLCommands() {
  console.log('\n📝 COMANDOS SQL PARA CREAR TABLAS\n');
  console.log('Si las tablas no existen, ejecuta estos comandos en Supabase SQL Editor:\n');

  const sqlCommands = `
-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT,
  image TEXT,
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de perfiles de usuario
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  country TEXT,
  level TEXT,
  goal TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Tabla de suscripciones
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan_id TEXT NOT NULL,
  status TEXT NOT NULL,
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de progreso del usuario
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  score NUMERIC,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, course_id, lesson_id)
);

-- Índices para mejorar rendimiento
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);

-- Políticas RLS (Row Level Security)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Política: Los usuarios solo pueden ver su propia información
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" ON user_profiles
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view own subscription" ON subscriptions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view own progress" ON user_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON user_progress
  FOR ALL USING (auth.uid() = user_id);
`;

  console.log(sqlCommands);
}

async function printSummary() {
  console.log('\n' + '='.repeat(60));
  console.log('📊 RESUMEN DE VERIFICACIÓN');
  console.log('='.repeat(60) + '\n');

  const successCount = results.filter(r => r.status === 'success').length;
  const warningCount = results.filter(r => r.status === 'warning').length;
  const errorCount = results.filter(r => r.status === 'error').length;

  console.log(`✅ Exitosos: ${successCount}`);
  console.log(`⚠️  Advertencias: ${warningCount}`);
  console.log(`❌ Errores: ${errorCount}\n`);

  if (errorCount === 0 && warningCount === 0) {
    console.log('🎉 ¡PERFECTO! Tu configuración de Supabase está lista para producción.\n');
    console.log('Próximos pasos:');
    console.log('1. Configura las mismas variables en Cloudflare Pages');
    console.log('2. Mergea el PR #54');
    console.log('3. Despliega a producción\n');
  } else if (errorCount === 0) {
    console.log('⚠️  Configuración funcional pero con advertencias.');
    console.log('Revisa las advertencias arriba y corrígelas si es necesario.\n');
  } else {
    console.log('❌ Hay errores que debes corregir antes de continuar.');
    console.log('Revisa los errores arriba y sigue las instrucciones.\n');
  }

  console.log('📚 Para más información, consulta:');
  console.log('   - SUPABASE_AUTH_MIGRATION.md');
  console.log('   - CLOUDFLARE_DEPLOY_FINAL.md');
  console.log('   - INSTRUCCIONES_PARA_TI.md\n');
}

async function main() {
  console.log('🔍 Focus English - Verificación de Configuración de Supabase\n');
  console.log('Este script verificará tu configuración de Supabase...\n');

  const hasEnvVars = await verifyEnvironmentVariables();

  if (!hasEnvVars) {
    console.log('\n❌ No se puede continuar sin las variables de entorno.');
    console.log('\nPara configurar:');
    console.log('1. Copia .env.example a .env.local');
    console.log('2. Obtén tus credenciales de https://app.supabase.com');
    console.log('3. Completa las variables NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY y SUPABASE_SERVICE_ROLE_KEY\n');
    process.exit(1);
  }

  const isConnected = await verifySupabaseConnection();

  if (isConnected) {
    await verifyTables();
    await printSQLCommands();
  }

  await printSummary();
}

main().catch(error => {
  console.error('\n❌ Error inesperado:', error);
  process.exit(1);
});

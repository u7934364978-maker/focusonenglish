#!/usr/bin/env ts-node

/**
 * Script de Testing de Conexión a Supabase
 * 
 * Este script verifica que la conexión a Supabase funcione correctamente
 * y que todas las tablas estén configuradas.
 * 
 * Uso:
 *   npx ts-node test-supabase-connection.ts
 */

import { supabase, supabaseAdmin } from './lib/supabase/client';

interface TestResult {
  name: string;
  passed: boolean;
  message?: string;
  data?: any;
}

const results: TestResult[] = [];

function logTest(result: TestResult) {
  results.push(result);
  const icon = result.passed ? '✅' : '❌';
  console.log(`${icon} ${result.name}`);
  if (result.message) {
    console.log(`   ${result.message}`);
  }
  if (result.data) {
    console.log(`   Data:`, result.data);
  }
  console.log();
}

async function testSupabaseConnection() {
  console.log('🧪 TESTING SUPABASE CONNECTION\n');
  console.log('='.repeat(60));
  console.log();

  // Test 1: Verificar variables de entorno
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
      throw new Error('Variables de entorno no configuradas');
    }

    logTest({
      name: 'Test 1: Environment Variables',
      passed: true,
      message: 'All Supabase environment variables are set'
    });
  } catch (error: any) {
    logTest({
      name: 'Test 1: Environment Variables',
      passed: false,
      message: error.message
    });
    return;
  }

  // Test 2: Conexión básica con cliente público
  try {
    const { data, error } = await supabase
      .from('users')
      .select('count')
      .limit(1);

    if (error) throw error;

    logTest({
      name: 'Test 2: Public Client Connection',
      passed: true,
      message: 'Successfully connected with anon key'
    });
  } catch (error: any) {
    logTest({
      name: 'Test 2: Public Client Connection',
      passed: false,
      message: error.message
    });
  }

  // Test 3: Conexión con cliente admin
  try {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('id, email')
      .limit(1);

    if (error) throw error;

    logTest({
      name: 'Test 3: Admin Client Connection',
      passed: true,
      message: 'Successfully connected with service role key'
    });
  } catch (error: any) {
    logTest({
      name: 'Test 3: Admin Client Connection',
      passed: false,
      message: error.message
    });
  }

  // Test 4: Verificar tabla 'users'
  try {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('*')
      .limit(1);

    if (error) throw error;

    logTest({
      name: 'Test 4: Table "users" exists',
      passed: true,
      message: `Table accessible, ${data?.length || 0} rows returned`
    });
  } catch (error: any) {
    logTest({
      name: 'Test 4: Table "users" exists',
      passed: false,
      message: error.message
    });
  }

  // Test 5: Verificar tabla 'password_reset_tokens'
  try {
    const { data, error } = await supabaseAdmin
      .from('password_reset_tokens')
      .select('*')
      .limit(1);

    if (error) throw error;

    logTest({
      name: 'Test 5: Table "password_reset_tokens" exists',
      passed: true,
      message: `Table accessible, ${data?.length || 0} rows returned`
    });
  } catch (error: any) {
    logTest({
      name: 'Test 5: Table "password_reset_tokens" exists',
      passed: false,
      message: error.message
    });
  }

  // Test 6: Verificar tabla 'subscriptions'
  try {
    const { data, error } = await supabaseAdmin
      .from('subscriptions')
      .select('*')
      .limit(1);

    if (error) throw error;

    logTest({
      name: 'Test 6: Table "subscriptions" exists',
      passed: true,
      message: `Table accessible, ${data?.length || 0} rows returned`
    });
  } catch (error: any) {
    logTest({
      name: 'Test 6: Table "subscriptions" exists',
      passed: false,
      message: 'Table might not exist yet (optional for MVP)'
    });
  }

  // Test 7: Verificar tabla 'course_progress'
  try {
    const { data, error } = await supabaseAdmin
      .from('course_progress')
      .select('*')
      .limit(1);

    if (error) throw error;

    logTest({
      name: 'Test 7: Table "course_progress" exists',
      passed: true,
      message: `Table accessible, ${data?.length || 0} rows returned`
    });
  } catch (error: any) {
    logTest({
      name: 'Test 7: Table "course_progress" exists',
      passed: false,
      message: 'Table might not exist yet (optional for MVP)'
    });
  }

  // Test 8: Insertar usuario de prueba
  try {
    const testEmail = `test-${Date.now()}@focusenglish.com`;
    
    const { data, error } = await supabaseAdmin
      .from('users')
      .insert({
        email: testEmail,
        name: 'Test User',
        password_hash: '$2a$10$testHashForTestingPurposes'
      })
      .select()
      .single();

    if (error) throw error;

    // Limpiar inmediatamente
    await supabaseAdmin
      .from('users')
      .delete()
      .eq('id', data.id);

    logTest({
      name: 'Test 8: Insert & Delete Test User',
      passed: true,
      message: `User created and deleted successfully (ID: ${data.id})`
    });
  } catch (error: any) {
    logTest({
      name: 'Test 8: Insert & Delete Test User',
      passed: false,
      message: error.message
    });
  }

  // Test 9: Contar registros en tablas
  try {
    const { data: usersData } = await supabaseAdmin
      .from('users')
      .select('*', { count: 'exact', head: true });

    const { data: tokensData } = await supabaseAdmin
      .from('password_reset_tokens')
      .select('*', { count: 'exact', head: true });

    logTest({
      name: 'Test 9: Database Statistics',
      passed: true,
      data: {
        total_users: usersData || 0,
        total_tokens: tokensData || 0
      }
    });
  } catch (error: any) {
    logTest({
      name: 'Test 9: Database Statistics',
      passed: false,
      message: error.message
    });
  }

  // Resumen final
  console.log('='.repeat(60));
  console.log('\n📊 SUMMARY\n');
  
  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed).length;
  const total = results.length;

  console.log(`Total tests: ${total}`);
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log();

  if (failed === 0) {
    console.log('🎉 ALL TESTS PASSED! Supabase is ready to use.\n');
  } else {
    console.log('⚠️  SOME TESTS FAILED. Please check the configuration.\n');
    console.log('Next steps:');
    console.log('1. Make sure .env.local exists with Supabase credentials');
    console.log('2. Create missing tables in Supabase Dashboard → SQL Editor');
    console.log('3. Check SUPABASE_SETUP_GUIDE.md for detailed instructions\n');
  }
}

// Ejecutar tests
testSupabaseConnection().catch(console.error);

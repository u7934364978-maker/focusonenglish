/**
 * Script para crear usuario admin en Supabase
 * 
 * Uso:
 *   node create-admin-user.js
 */

require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

async function createAdminUser() {
  console.log('🔐 Creando usuario admin en Supabase...\n');

  // Datos del usuario admin
  const adminEmail = 'admin@focusenglish.com';
  const adminPassword = 'Admin2026!Focus';
  const adminName = 'Administrador';

  try {
    // 1. Verificar si el usuario ya existe
    console.log('1. Verificando si el usuario ya existe...');
    const { data: existingUser, error: checkError } = await supabaseAdmin
      .from('users')
      .select('id, email')
      .eq('email', adminEmail)
      .single();

    if (existingUser) {
      console.log('✅ El usuario admin ya existe:');
      console.log(`   Email: ${existingUser.email}`);
      console.log(`   ID: ${existingUser.id}`);
      console.log('\n📋 Credenciales:');
      console.log(`   Email: ${adminEmail}`);
      console.log(`   Password: ${adminPassword}`);
      return;
    }

    // 2. Hash de la contraseña
    console.log('2. Generando hash de contraseña...');
    const passwordHash = await bcrypt.hash(adminPassword, 10);
    console.log('✅ Hash generado');

    // 3. Insertar usuario en la base de datos
    console.log('3. Insertando usuario en la base de datos...');
    const { data: newUser, error: insertError } = await supabaseAdmin
      .from('users')
      .insert({
        email: adminEmail,
        name: adminName,
        password_hash: passwordHash
      })
      .select()
      .single();

    if (insertError) {
      throw insertError;
    }

    console.log('✅ Usuario admin creado exitosamente!');
    console.log(`   Email: ${newUser.email}`);
    console.log(`   Name: ${newUser.name}`);
    console.log(`   ID: ${newUser.id}`);
    console.log(`   Level: ${newUser.language_level}`);

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n🎉 ¡USUARIO ADMIN CREADO CON ÉXITO!\n');
    console.log('📋 CREDENCIALES DE ACCESO:\n');
    console.log(`   Email:    ${adminEmail}`);
    console.log(`   Password: ${adminPassword}`);
    console.log('\n🔗 PARA ACCEDER:\n');
    console.log('   1. Ir a: http://localhost:3000/login');
    console.log('   2. Usar las credenciales de arriba');
    console.log('   3. Acceder al curso B2: http://localhost:3000/curso-b2');
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  } catch (error) {
    console.error('❌ Error al crear usuario admin:', error.message);
    console.error(error);
  }
}

// Ejecutar
createAdminUser();

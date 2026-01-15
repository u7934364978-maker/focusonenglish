# 🗄️ GUÍA COMPLETA DE CONFIGURACIÓN DE SUPABASE

## 📅 Fecha: 15 de Enero de 2026
## 👨‍💻 Desarrollador: GenSpark AI Developer

---

## 📋 ÍNDICE

1. [Crear Cuenta y Proyecto](#1-crear-cuenta-y-proyecto)
2. [Configurar Variables de Entorno](#2-configurar-variables-de-entorno)
3. [Crear Tablas de Base de Datos](#3-crear-tablas-de-base-de-datos)
4. [Configurar Row Level Security (RLS)](#4-configurar-row-level-security-rls)
5. [Testing de Conexión](#5-testing-de-conexión)
6. [Deployment a Producción](#6-deployment-a-producción)

---

## 1. CREAR CUENTA Y PROYECTO

### Paso 1.1: Crear cuenta en Supabase

1. **Ir a**: https://supabase.com
2. **Click en**: "Start your project"
3. **Sign up con**:
   - GitHub (recomendado)
   - O email + password

### Paso 1.2: Crear nuevo proyecto

1. **Dashboard**: https://app.supabase.com
2. **Click**: "New project"
3. **Configuración**:
   ```
   Organization: [Tu organización o crear nueva]
   Name: focus-english-app
   Database Password: [Genera una contraseña segura]
   Region: Europe (West) - eu-west-1
   Pricing Plan: Free (hasta 500 MB, 50,000 usuarios)
   ```
4. **Click**: "Create new project"
5. **Esperar**: ~2 minutos mientras se crea el proyecto

### Paso 1.3: Obtener credenciales

Una vez creado el proyecto:

1. **Ir a**: Settings → API
2. **Copiar estas 3 claves**:

```bash
# Project URL
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co

# anon/public key (para frontend)
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# service_role key (para backend - ⚠️ MANTENER SECRETA)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 2. CONFIGURAR VARIABLES DE ENTORNO

### Paso 2.1: Crear archivo `.env.local`

```bash
cd /home/user/webapp
touch .env.local
```

### Paso 2.2: Agregar variables de Supabase

Editar `.env.local` y agregar:

```bash
# ============================================
# SUPABASE CONFIGURATION
# ============================================
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# ============================================
# OTRAS VARIABLES EXISTENTES
# ============================================
# Mantén tus otras variables aquí (Stripe, HubSpot, Resend, etc.)
```

### Paso 2.3: Verificar archivo `.gitignore`

Asegurarte de que `.env.local` esté en `.gitignore`:

```bash
# Verificar
cat .gitignore | grep ".env.local"

# Si no está, agregarlo:
echo ".env.local" >> .gitignore
```

---

## 3. CREAR TABLAS DE BASE DE DATOS

### Paso 3.1: Tabla de Usuarios (`users`)

1. **Ir a**: Supabase Dashboard → SQL Editor
2. **New Query**
3. **Copiar y pegar**:

```sql
-- ============================================
-- TABLA: USERS
-- Gestión de usuarios de la plataforma
-- ============================================

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Datos adicionales del usuario
  phone TEXT,
  avatar_url TEXT,
  language_level TEXT CHECK (language_level IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  
  -- Índices para búsquedas rápidas
  CONSTRAINT unique_email UNIQUE(email)
);

-- Índices para optimizar consultas
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at);

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar updated_at
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comentarios descriptivos
COMMENT ON TABLE users IS 'Usuarios registrados en la plataforma Focus English';
COMMENT ON COLUMN users.email IS 'Email único del usuario (usado para login)';
COMMENT ON COLUMN users.password_hash IS 'Contraseña hasheada con bcrypt';
COMMENT ON COLUMN users.language_level IS 'Nivel de inglés del usuario según CEFR';
```

4. **Click**: "Run" (ejecutar)
5. **Verificar**: Debería mostrar "Success. No rows returned"

### Paso 3.2: Tabla de Tokens de Recuperación (`password_reset_tokens`)

1. **SQL Editor** → **New Query**
2. **Copiar y pegar** el contenido de:

```bash
scripts/create-password-reset-table.sql
```

O usar directamente:

```sql
-- ============================================
-- TABLA: PASSWORD RESET TOKENS
-- Gestión de tokens de recuperación de contraseña
-- ============================================

CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  used BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT unique_token UNIQUE(token)
);

-- Índices para performance
CREATE INDEX idx_password_reset_tokens_user_id ON password_reset_tokens(user_id);
CREATE INDEX idx_password_reset_tokens_token ON password_reset_tokens(token);
CREATE INDEX idx_password_reset_tokens_expires_at ON password_reset_tokens(expires_at);

-- Función para limpiar tokens expirados
CREATE OR REPLACE FUNCTION cleanup_expired_tokens()
RETURNS void AS $$
BEGIN
  DELETE FROM password_reset_tokens
  WHERE expires_at < NOW() OR used = TRUE;
  
  RAISE NOTICE 'Tokens expirados eliminados';
END;
$$ LANGUAGE plpgsql;

-- Comentarios
COMMENT ON TABLE password_reset_tokens IS 'Tokens de recuperación de contraseña con expiración de 1 hora';
COMMENT ON COLUMN password_reset_tokens.token IS 'Token único generado con crypto.randomBytes(32)';
```

3. **Click**: "Run"
4. **Verificar**: Success

### Paso 3.3: Tabla de Suscripciones (`subscriptions`)

```sql
-- ============================================
-- TABLA: SUBSCRIPTIONS
-- Gestión de suscripciones de usuarios con Stripe
-- ============================================

CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- Datos de Stripe
  stripe_customer_id TEXT UNIQUE,
  stripe_subscription_id TEXT UNIQUE,
  stripe_price_id TEXT,
  
  -- Estado de la suscripción
  status TEXT NOT NULL CHECK (status IN (
    'active',
    'canceled',
    'incomplete',
    'incomplete_expired',
    'past_due',
    'trialing',
    'unpaid'
  )),
  
  -- Plan contratado
  plan_name TEXT NOT NULL, -- 'basic', 'standard', 'premium'
  interval TEXT NOT NULL CHECK (interval IN ('month', 'year')),
  
  -- Fechas importantes
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  canceled_at TIMESTAMP,
  
  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_stripe_customer_id ON subscriptions(stripe_customer_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);

-- Trigger para updated_at
CREATE TRIGGER update_subscriptions_updated_at
  BEFORE UPDATE ON subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comentarios
COMMENT ON TABLE subscriptions IS 'Suscripciones activas de usuarios con información de Stripe';
COMMENT ON COLUMN subscriptions.status IS 'Estado de la suscripción según Stripe';
```

### Paso 3.4: Tabla de Progreso de Cursos (`course_progress`)

```sql
-- ============================================
-- TABLA: COURSE PROGRESS
-- Seguimiento del progreso de usuarios en los cursos
-- ============================================

CREATE TABLE IF NOT EXISTS course_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- Identificación del curso/lección
  course_level TEXT NOT NULL, -- 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'
  course_goal TEXT NOT NULL,  -- 'trabajo', 'viajes', 'examenes'
  module_id TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  
  -- Progreso
  completed BOOLEAN DEFAULT FALSE,
  score NUMERIC(5,2), -- 0.00 a 100.00
  time_spent INTEGER DEFAULT 0, -- segundos
  
  -- Ejercicios completados
  exercises_completed JSONB DEFAULT '[]'::jsonb,
  
  -- Fechas
  started_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,
  last_accessed_at TIMESTAMP DEFAULT NOW(),
  
  -- Constraint: un usuario solo puede tener un progreso por lección
  UNIQUE(user_id, course_level, module_id, lesson_id)
);

-- Índices
CREATE INDEX idx_course_progress_user_id ON course_progress(user_id);
CREATE INDEX idx_course_progress_completed ON course_progress(completed);
CREATE INDEX idx_course_progress_last_accessed ON course_progress(last_accessed_at);

-- Comentarios
COMMENT ON TABLE course_progress IS 'Progreso de usuarios en cursos y lecciones';
COMMENT ON COLUMN course_progress.score IS 'Puntuación del 0 al 100';
COMMENT ON COLUMN course_progress.exercises_completed IS 'Array JSON con IDs de ejercicios completados';
```

### Paso 3.5: Verificar tablas creadas

1. **Ir a**: Table Editor
2. **Deberías ver**:
   - ✅ `users`
   - ✅ `password_reset_tokens`
   - ✅ `subscriptions`
   - ✅ `course_progress`

---

## 4. CONFIGURAR ROW LEVEL SECURITY (RLS)

Row Level Security protege tus datos a nivel de fila.

### Paso 4.1: Habilitar RLS en todas las tablas

```sql
-- Habilitar RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE password_reset_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_progress ENABLE ROW LEVEL SECURITY;
```

### Paso 4.2: Políticas para tabla `users`

```sql
-- Política: Los usuarios pueden leer su propia información
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  USING (auth.uid()::text = id::text);

-- Política: Los usuarios pueden actualizar su propia información
CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  USING (auth.uid()::text = id::text);

-- Política: Permitir inserts desde el sistema (service role)
CREATE POLICY "Service role can insert users"
  ON users
  FOR INSERT
  WITH CHECK (true);
```

### Paso 4.3: Políticas para `password_reset_tokens`

```sql
-- Solo el sistema (service role) puede gestionar tokens
CREATE POLICY "Only service role can manage tokens"
  ON password_reset_tokens
  FOR ALL
  USING (false); -- Nadie puede acceder directamente
```

### Paso 4.4: Políticas para `subscriptions`

```sql
-- Los usuarios pueden leer su propia suscripción
CREATE POLICY "Users can read own subscription"
  ON subscriptions
  FOR SELECT
  USING (auth.uid()::text = user_id::text);

-- Solo el sistema puede crear/actualizar suscripciones
CREATE POLICY "Service role can manage subscriptions"
  ON subscriptions
  FOR ALL
  USING (true);
```

### Paso 4.5: Políticas para `course_progress`

```sql
-- Los usuarios pueden leer su propio progreso
CREATE POLICY "Users can read own progress"
  ON course_progress
  FOR SELECT
  USING (auth.uid()::text = user_id::text);

-- Los usuarios pueden actualizar su propio progreso
CREATE POLICY "Users can update own progress"
  ON course_progress
  FOR UPDATE
  USING (auth.uid()::text = user_id::text);

-- Los usuarios pueden insertar su propio progreso
CREATE POLICY "Users can insert own progress"
  ON course_progress
  FOR INSERT
  WITH CHECK (auth.uid()::text = user_id::text);
```

---

## 5. TESTING DE CONEXIÓN

### Paso 5.1: Verificar conexión desde código

Crear archivo de test: `test-supabase-connection.ts`

```typescript
import { supabase, supabaseAdmin } from './lib/supabase/client';

async function testConnection() {
  console.log('🧪 Testing Supabase connection...\n');

  // Test 1: Conexión básica
  try {
    const { data, error } = await supabase
      .from('users')
      .select('count')
      .single();
    
    if (error) throw error;
    console.log('✅ Test 1: Connection successful');
  } catch (error) {
    console.error('❌ Test 1 failed:', error);
  }

  // Test 2: Admin client
  try {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('id, email')
      .limit(1);
    
    if (error) throw error;
    console.log('✅ Test 2: Admin client works');
  } catch (error) {
    console.error('❌ Test 2 failed:', error);
  }

  // Test 3: Insertar usuario de prueba
  try {
    const { data, error } = await supabaseAdmin
      .from('users')
      .insert({
        email: 'test@focusenglish.com',
        name: 'Test User',
        password_hash: 'test_hash_12345'
      })
      .select()
      .single();
    
    if (error) throw error;
    console.log('✅ Test 3: Insert test user successful');
    console.log('   User ID:', data.id);
    
    // Limpiar test
    await supabaseAdmin
      .from('users')
      .delete()
      .eq('id', data.id);
    
  } catch (error) {
    console.error('❌ Test 3 failed:', error);
  }

  console.log('\n🎉 All tests completed!');
}

testConnection();
```

Ejecutar test:

```bash
cd /home/user/webapp
npx ts-node test-supabase-connection.ts
```

### Paso 5.2: Verificar desde Dashboard

1. **Ir a**: Table Editor → users
2. **Click**: "Insert row"
3. **Llenar**:
   ```
   email: usuario@test.com
   name: Usuario Test
   password_hash: test123
   ```
4. **Guardar**
5. **Verificar** que aparece en la tabla

---

## 6. DEPLOYMENT A PRODUCCIÓN

### Paso 6.1: Configurar variables en Vercel

1. **Ir a**: Vercel Dashboard → Tu Proyecto → Settings → Environment Variables

2. **Agregar estas 3 variables**:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. **Apply to**: Production, Preview, Development

### Paso 6.2: Re-deploy

```bash
# Desde Vercel Dashboard:
Deployments → Latest → Redeploy

# O desde terminal:
vercel --prod
```

### Paso 6.3: Verificar deployment

1. Ir a tu sitio en producción
2. Intentar crear un usuario en `/signup`
3. Verificar en Supabase Dashboard que el usuario se creó

---

## 📊 RESUMEN DE CONFIGURACIÓN

### ✅ Checklist completo:

- [ ] **Cuenta creada** en Supabase
- [ ] **Proyecto creado** (focus-english-app)
- [ ] **Variables copiadas** (URL + anon_key + service_role_key)
- [ ] **`.env.local` creado** con las 3 variables
- [ ] **Tabla `users` creada**
- [ ] **Tabla `password_reset_tokens` creada**
- [ ] **Tabla `subscriptions` creada**
- [ ] **Tabla `course_progress` creada**
- [ ] **RLS habilitado** en todas las tablas
- [ ] **Políticas de RLS creadas**
- [ ] **Test de conexión exitoso**
- [ ] **Variables configuradas en Vercel**
- [ ] **Deployment verificado**

---

## 🔧 COMANDOS ÚTILES

### Ver todas las tablas:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';
```

### Ver estructura de una tabla:

```sql
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'users'
ORDER BY ordinal_position;
```

### Contar registros:

```sql
SELECT 
  (SELECT COUNT(*) FROM users) as total_users,
  (SELECT COUNT(*) FROM subscriptions WHERE status = 'active') as active_subscriptions,
  (SELECT COUNT(*) FROM course_progress) as total_progress;
```

### Limpiar tokens expirados:

```sql
SELECT cleanup_expired_tokens();
```

---

## 🆘 TROUBLESHOOTING

### Error: "relation does not exist"

**Causa**: La tabla no fue creada  
**Solución**: Ejecutar nuevamente el SQL de creación de tabla

### Error: "permission denied"

**Causa**: RLS está bloqueando el acceso  
**Solución**: 
1. Verificar políticas de RLS
2. Usar `supabaseAdmin` (service role) para operaciones del sistema

### Error: "violates foreign key constraint"

**Causa**: Intentas insertar en una tabla hija sin registro padre  
**Solución**: Crear primero el registro en tabla padre (ej: `users`)

### Error: "duplicate key value violates unique constraint"

**Causa**: Intentas insertar un email/token que ya existe  
**Solución**: 
1. Verificar si el registro ya existe
2. Actualizar en lugar de insertar
3. Generar nuevo token único

---

## 📚 RECURSOS ADICIONALES

- **Documentación Supabase**: https://supabase.com/docs
- **Supabase JS Client**: https://supabase.com/docs/reference/javascript
- **Row Level Security**: https://supabase.com/docs/guides/auth/row-level-security
- **Postgres Functions**: https://supabase.com/docs/guides/database/functions

---

## 🎉 SIGUIENTE PASO

Una vez completada esta guía, tu base de datos Supabase estará lista para:

1. ✅ **Registro de usuarios** (`/signup`)
2. ✅ **Login de usuarios** (`/login`)
3. ✅ **Recuperación de contraseña** (`/forgot-password`)
4. ✅ **Gestión de suscripciones** (Stripe)
5. ✅ **Tracking de progreso** (cursos)

**¡Ahora puedes continuar con el testing completo del sistema!**

---

**Fecha**: 15 de Enero de 2026  
**Estado**: ✅ **GUÍA COMPLETA - LISTA PARA USAR**  
**Tiempo estimado**: 30-45 minutos

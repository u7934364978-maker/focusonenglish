# 🔐 Database Migration: Add Password Salt Column

## ⚠️ ACCIÓN REQUERIDA

Para completar la migración a Edge Runtime, necesitas añadir una columna `password_salt` a la tabla `users` en Supabase.

## 📋 SQL Migration

```sql
-- Add password_salt column to users table
ALTER TABLE users 
ADD COLUMN password_salt TEXT;

-- Add comment for documentation
COMMENT ON COLUMN users.password_salt IS 'Salt usado para hashear la contraseña con PBKDF2';
```

## 🎯 Razón

Cloudflare Edge Runtime no soporta `bcrypt` (módulo de Node.js). Hemos migrado a usar **Web Crypto API** con **PBKDF2** que requiere almacenar el salt por separado.

## 🔄 Cómo Aplicar la Migración

### Opción 1: Supabase Dashboard (Recomendado)

1. Ir a https://app.supabase.com/
2. Seleccionar tu proyecto
3. Ir a **SQL Editor**
4. Copiar y pegar el SQL de arriba
5. Ejecutar

### Opción 2: Supabase CLI

```bash
supabase migration new add_password_salt
# Pegar el SQL en el archivo generado
supabase db push
```

## ⚡ Usuarios Existentes

### Migración de Usuarios con Bcrypt Existente

Si ya tienes usuarios con contraseñas hasheadas con bcrypt, necesitarás una estrategia de migración gradual:

```sql
-- Marcar usuarios que necesitan actualizar contraseña
ALTER TABLE users ADD COLUMN needs_password_reset BOOLEAN DEFAULT FALSE;

-- Marcar todos los usuarios existentes
UPDATE users 
SET needs_password_reset = TRUE 
WHERE password_salt IS NULL;
```

### Opción A: Reset Forzado (Más Seguro)

Enviar email a todos los usuarios para que reseteen su contraseña:

```typescript
// Script para enviar emails de reset
const usersNeedingReset = await supabase
  .from('users')
  .select('email, name')
  .is('password_salt', null);

for (const user of usersNeedingReset.data) {
  await sendPasswordResetEmail(user.email, user.name);
}
```

### Opción B: Migración Lazy (Al Login)

Modificar el endpoint de login para detectar usuarios con bcrypt y migrarlos:

```typescript
// En /api/auth/login
import bcrypt from 'bcryptjs'; // Solo para migración
import { hashPassword, verifyPassword } from '@/lib/edge-crypto';

// Verificar contraseña
let isValid = false;

if (!user.password_salt) {
  // Usuario antiguo con bcrypt
  isValid = await bcrypt.compare(password, user.password_hash);
  
  if (isValid) {
    // Migrar a PBKDF2
    const { hash, salt } = await hashPassword(password);
    await supabase
      .from('users')
      .update({ 
        password_hash: hash, 
        password_salt: salt,
        needs_password_reset: false 
      })
      .eq('id', user.id);
  }
} else {
  // Usuario nuevo con PBKDF2
  isValid = await verifyPassword(password, user.password_hash, user.password_salt);
}
```

## 📝 Estado de Migración

- ✅ `lib/edge-crypto.ts` creado con funciones PBKDF2
- ✅ `/api/auth/register` migrado a usar `hashPassword`
- ✅ `/api/auth/reset-password` migrado a usar `hashPassword`  
- ✅ `/api/auth/forgot-password` migrado a usar `generateRandomToken`
- ⏳ Migración de base de datos pendiente
- ⏳ Migración de usuarios existentes pendiente

## 🧪 Testing

Después de aplicar la migración, probar:

```bash
# 1. Registrar nuevo usuario
curl -X POST https://tu-sitio.pages.dev/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com", 
    "password": "TestPassword123"
  }'

# 2. Verificar que se guardó con salt
# En Supabase Dashboard > Table Editor > users
# Verificar que password_salt no es NULL

# 3. Probar login
curl -X POST https://tu-sitio.pages.dev/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "TestPassword123"
  }'
```

## 📚 Referencias

- [PBKDF2 Spec](https://datatracker.ietf.org/doc/html/rfc2898)
- [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- [Cloudflare Workers Crypto](https://developers.cloudflare.com/workers/runtime-apis/web-crypto/)

---

**Creado**: 2026-01-20  
**Estado**: Pendiente de Aplicación  
**Prioridad**: Alta

# 🔐 Migration Plan: NextAuth → Supabase Auth

## ⚠️ DECISION CRÍTICA

**NextAuth NO es compatible con Cloudflare Edge Runtime** porque:
- ❌ Requiere módulos de Node.js (crypto, bcrypt, jose)
- ❌ Adaptadores no son Edge-compatible
- ❌ Manejo de sesiones requiere servidor Node.js

## ✅ SOLUCIÓN: Migrar a Supabase Auth

Supabase Auth es:
- ✅ 100% Edge compatible
- ✅ Ya tienes Supabase configurado
- ✅ Incluye email/password + OAuth (Google, GitHub, etc.)
- ✅ Manejo de sesiones con JWT
- ✅ Reset password incluido
- ✅ Email confirmation incluido

## 📋 Plan de Migración

### Fase 1: Setup de Supabase Auth (30 min)

1. **Habilitar Supabase Auth en Dashboard**
   ```
   1. Ir a https://app.supabase.com/
   2. Seleccionar proyecto
   3. Authentication → Settings
   4. Habilitar Email & Password
   5. Configurar Site URL: https://focusonenglish.pages.dev
   6. Configurar Redirect URLs: https://focusonenglish.pages.dev/**
   ```

2. **Configurar Email Templates**
   ```
   Authentication → Email Templates
   - Confirm signup
   - Reset password
   - Magic link
   ```

3. **Configurar OAuth Providers (Opcional)**
   ```
   Authentication → Providers
   - Google OAuth
   - GitHub OAuth
   ```

### Fase 2: Crear Nuevo Auth System (1 hora)

#### 2.1 Crear `lib/supabase-client.ts`

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});
```

#### 2.2 Crear `lib/auth-helpers.ts` (Edge-compatible)

```typescript
'use client';

import { supabase } from './supabase-client';

export async function signUp(email: string, password: string, name: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name } // Metadata
    }
  });
  
  return { data, error };
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  
  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function resetPassword(email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://focusonenglish.pages.dev/reset-password'
  });
  
  return { data, error };
}

export async function updatePassword(newPassword: string) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword
  });
  
  return { data, error };
}

export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  return { session: data.session, error };
}

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  return { user: data.user, error };
}
```

### Fase 3: Migrar Endpoints API (1 hora)

#### 3.1 ELIMINAR archivos de API custom:
- ❌ `app/api/auth/register/route.ts`
- ❌ `app/api/auth/forgot-password/route.ts`  
- ❌ `app/api/auth/reset-password/route.ts`
- ❌ `app/api/auth/[...nextauth]/route.ts`
- ❌ `lib/auth.ts`

#### 3.2 CREAR nuevo middleware para proteger rutas:

`middleware.ts`:
```typescript
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  
  const {
    data: { session },
  } = await supabase.auth.getSession();
  
  // Rutas protegidas
  const protectedRoutes = ['/dashboard', '/profile', '/practica'];
  const isProtectedRoute = protectedRoutes.some(route => 
    req.nextUrl.pathname.startsWith(route)
  );
  
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  
  return res;
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/practica/:path*']
};
```

### Fase 4: Actualizar Frontend (30 min)

#### 4.1 Actualizar `app/login/page.tsx`

```typescript
'use client';

import { useState } from 'react';
import { signIn } from '@/lib/auth-helpers';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { data, error } = await signIn(email, password);
    
    if (error) {
      setError(error.message);
      return;
    }
    
    router.push('/dashboard');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Tu form actual */}
    </form>
  );
}
```

#### 4.2 Actualizar `app/signup/page.tsx`

Similar al login pero llamando `signUp()`.

#### 4.3 Actualizar `app/dashboard/page.tsx`

```typescript
'use client';

import { useEffect, useState } from 'react';
import { getUser, signOut } from '@/lib/auth-helpers';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
    const loadUser = async () => {
      const { user, error } = await getUser();
      if (error || !user) {
        router.push('/login');
        return;
      }
      setUser(user);
    };
    
    loadUser();
  }, [router]);
  
  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };
  
  if (!user) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user.email}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
```

### Fase 5: Migración de Datos (Si hay usuarios existentes)

```sql
-- En Supabase SQL Editor

-- 1. Copiar usuarios de tabla custom a auth.users
INSERT INTO auth.users (
  id,
  email,
  encrypted_password, -- Supabase usa bcrypt por defecto
  email_confirmed_at,
  created_at,
  updated_at
)
SELECT
  id,
  email,
  password_hash,
  COALESCE(email_verified_at, created_at),
  created_at,
  updated_at
FROM users
WHERE password_hash IS NOT NULL;

-- 2. Actualizar metadata
UPDATE auth.users
SET raw_user_meta_data = jsonb_build_object(
  'name', (SELECT name FROM users WHERE users.id = auth.users.id)
);
```

**NOTA**: Los usuarios existentes necesitarán resetear su contraseña si usábamos PBKDF2 en lugar de bcrypt.

### Fase 6: Testing (30 min)

- [ ] Registrar nuevo usuario
- [ ] Login con usuario
- [ ] Acceder a ruta protegida (/dashboard)
- [ ] Sign out
- [ ] Reset password flow
- [ ] Google OAuth (si configurado)
- [ ] GitHub OAuth (si configurado)

### Fase 7: Cleanup (15 min)

```bash
# Remover dependencias innecesarias
npm uninstall next-auth @auth/supabase-adapter bcryptjs @types/bcryptjs

# Verificar que no queden referencias
grep -r "next-auth" app/
grep -r "bcrypt" app/
```

## 📊 Comparación: NextAuth vs Supabase Auth

| Feature | NextAuth | Supabase Auth |
|---------|----------|---------------|
| Edge Compatible | ❌ No | ✅ Sí |
| Email/Password | ✅ | ✅ |
| OAuth (Google, GitHub) | ✅ | ✅ |
| Reset Password | Manual | ✅ Built-in |
| Email Confirmation | Manual | ✅ Built-in |
| Session Management | Server-side | JWT (Edge-compatible) |
| Magic Links | ❌ | ✅ |
| Phone Auth | ❌ | ✅ |
| Multi-factor Auth (2FA) | ❌ | ✅ |
| Admin UI | ❌ | ✅ Dashboard |

## ⚡ Ventajas de Supabase Auth

1. **100% Edge Compatible** - Funciona en Cloudflare Pages
2. **Menos Código** - No necesitas crear endpoints custom
3. **Más Features** - Magic links, phone auth, 2FA incluidos
4. **Admin Dashboard** - Gestión de usuarios visual
5. **Email Templates** - Personalizables desde dashboard
6. **Rate Limiting** - Protección anti-abuse incluida
7. **Audit Logs** - Registro de actividad de usuarios

## ⏱️ Timeline Estimado

- **Fase 1**: 30 min - Setup de Supabase Auth
- **Fase 2**: 1 hora - Crear nuevo auth system  
- **Fase 3**: 1 hora - Migrar endpoints API
- **Fase 4**: 30 min - Actualizar frontend
- **Fase 5**: 30 min - Migración de datos (si aplica)
- **Fase 6**: 30 min - Testing
- **Fase 7**: 15 min - Cleanup

**TOTAL**: ~4 horas

## 🎯 Resultado Final

Después de esta migración tendrás:
- ✅ Sistema de auth 100% Edge-compatible
- ✅ Compatible con Cloudflare Pages
- ✅ Menos código para mantener
- ✅ Más features out-of-the-box
- ✅ Dashboard de admin incluido

## 🚀 ¿Procedemos?

Di "sí" para que empiece con Fase 1, o "no" si prefieres otra opción (como Vercel).

---

**Creado**: 2026-01-20  
**Estado**: Propuesta - Esperando Aprobación  
**Tiempo Estimado**: 4 horas  
**Beneficios**: Full Edge Compatibility + More Features

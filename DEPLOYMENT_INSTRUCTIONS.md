# 🚀 Guía de Despliegue en Vercel - Focus English

**Fecha:** 15 de Enero de 2026  
**Repositorio:** https://github.com/u7934364978-maker/focusonenglish  
**Última actualización:** Commit `87a50b8`

---

## ✅ Estado Actual del Proyecto

### Código en GitHub
- ✅ Todo commiteado y pusheado
- ✅ Rama: `main`
- ✅ Último commit: `87a50b8 Merge remote-tracking branch 'origin/main'`

### Funcionalidades Listas
- ✅ Curso B2 completo (18 lecciones)
- ✅ Sistema de autenticación (NextAuth + Supabase)
- ✅ Página de entrada `/signin` 
- ✅ Recuperación de contraseñas
- ✅ Base de datos configurada
- ✅ Usuario admin creado

---

## 🎯 OPCIÓN 1: Deployment Manual desde Vercel Dashboard (RECOMENDADO)

### Paso 1: Acceder a Vercel
1. Ir a: **https://vercel.com/new**
2. Login con tu cuenta de GitHub

### Paso 2: Importar Repositorio
1. Click en **"Import Git Repository"**
2. Buscar: `u7934364978-maker/focusonenglish`
3. Click **"Import"**

### Paso 3: Configurar Proyecto

**Framework Preset:** Next.js  
**Root Directory:** `./` (dejar por defecto)  
**Build Command:** `npm run build` (automático)  
**Output Directory:** `.next` (automático)  
**Install Command:** `npm install` (automático)  

### Paso 4: Variables de Entorno (CRÍTICO)

Click en **"Environment Variables"** y añadir estas variables:

#### ✅ OBLIGATORIAS (Supabase - Ya configuradas)
```bash
NEXT_PUBLIC_SUPABASE_URL=https://llceljzcilrzpdhfcsat.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsY2VsanpjaWxyenBkaGZjc2F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyMzc2NDIsImV4cCI6MjA4MzgxMzY0Mn0.4L4eEn06kyrfqJIDYrCQS23uGJ_WCIb1nwqpwfL8hTA
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsY2VsanpjaWxyenBkaGZjc2F0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2ODIzNzY0MiwiZXhwIjoyMDgzODEzNjQyfQ.RgWmXl9p2R7JaoUxiTjLkcKuaxc6YDegcDyl0LV3ecI
```

#### ✅ OBLIGATORIAS (NextAuth)
```bash
NEXTAUTH_URL=https://tu-proyecto.vercel.app
NEXTAUTH_SECRET=generado-con-openssl-rand-base64-32
```

**Generar NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

#### ✅ OBLIGATORIA (Site URL)
```bash
NEXT_PUBLIC_SITE_URL=https://www.focus-on-english.com
```

#### 🔧 OPCIONALES (HubSpot - si las tienes)
```bash
HUBSPOT_ACCESS_TOKEN=tu_token_aqui
HUBSPOT_PORTAL_ID=147592708
HUBSPOT_API_URL=https://api.hubapi.com
```

#### 🔧 OPCIONALES (Stripe - para pagos futuros)
```bash
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

#### 🔧 OPCIONALES (Resend - para emails)
```bash
RESEND_API_KEY=re_...
```

### Paso 5: Deploy
1. Click **"Deploy"**
2. Esperar 2-3 minutos ⏳
3. ✅ Deployment completo

### Paso 6: Obtener URL
Vercel te dará una URL como:
```
https://focusonenglish-xxx.vercel.app
```

### Paso 7: Actualizar NEXTAUTH_URL
1. Copiar la URL de Vercel
2. Ir a **Project Settings** → **Environment Variables**
3. Editar `NEXTAUTH_URL` con la URL real
4. Redeploy (Vercel lo hará automático)

---

## 🎯 OPCIÓN 2: Deployment con CLI (Avanzado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Seguir instrucciones en pantalla
```

---

## 🔧 Configuración de Dominio Personalizado

### Si quieres usar `www.focus-on-english.com`:

#### En Vercel:
1. Ir a **Project Settings** → **Domains**
2. Añadir `www.focus-on-english.com`
3. Vercel te dará instrucciones de DNS

#### En Cloudflare (tu DNS):
```
Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
Proxy: Desactivado (DNS only)
```

```
Tipo: A
Nombre: @
Valor: 76.76.21.21
Proxy: Desactivado (DNS only)
```

#### Esperar SSL:
- 5-20 minutos para certificado SSL
- Vercel lo gestiona automáticamente

---

## ✅ Verificación Post-Deployment

### 1. Probar Home
```
https://tu-proyecto.vercel.app/
```
- Debe mostrar "Coming Soon" page
- Debe tener botón "¿Ya tienes acceso?"

### 2. Probar Sign In
```
https://tu-proyecto.vercel.app/signin
```
- Debe cargar página de login
- Diseño violeta/púrpura

### 3. Probar Autenticación
**Credenciales de prueba:**
```
Email: admin@focusenglish.com
Password: Admin2026!Focus
```

Después del login debe redirigir a:
```
https://tu-proyecto.vercel.app/curso-b2
```

### 4. Probar Curso B2
- Debe mostrar dashboard con 3 módulos
- Click en cualquier lección
- Debe cargar contenido completo

### 5. Verificar Base de Datos
Ir a Supabase Dashboard:
```
https://llceljzcilrzpdhfcsat.supabase.co
```
- Table Editor → `users`
- Debe aparecer el usuario admin

---

## 🚨 Solución de Problemas

### Error: "NEXTAUTH_URL is not defined"
**Solución:** Añadir variable `NEXTAUTH_URL` en Vercel con la URL de producción

### Error: "Database connection failed"
**Solución:** Verificar que las 3 variables de Supabase están en Vercel

### Error: "Build failed"
**Solución:** Verificar que `npm run build` funciona localmente primero

### Error: 404 en `/curso-b2`
**Solución:** Verificar que estás autenticado. Probar logout y login de nuevo.

---

## 📊 Monitoreo Post-Deployment

### Logs en Vercel:
```
Dashboard → Tu Proyecto → Deployments → Ver Logs
```

### Analytics en Vercel:
```
Dashboard → Tu Proyecto → Analytics
```

### Base de Datos en Supabase:
```
https://llceljzcilrzpdhfcsat.supabase.co
→ Table Editor
```

---

## 🎯 Auto-Deployment (Bonus)

Una vez conectado a Vercel:
- ✅ Cada `git push` a `main` → Deploy automático
- ✅ Preview deployments para PRs
- ✅ Rollback con un click

---

## 📝 Resumen Ejecutivo

### Para desplegar AHORA:
1. Ir a https://vercel.com/new
2. Importar `u7934364978-maker/focusonenglish`
3. Añadir las 3 variables de Supabase (copiar de arriba)
4. Generar y añadir `NEXTAUTH_SECRET`
5. Añadir `NEXTAUTH_URL` (con URL temporal de Vercel)
6. Click **Deploy**
7. Esperar 2-3 minutos
8. ✅ Listo para probar

### URLs para probar después del deployment:
- `/` - Home (Coming Soon)
- `/signin` - Login de alumnos
- `/curso-b2` - Curso B2 (requiere auth)
- `/forgot-password` - Recuperar contraseña

---

## 🎁 Recursos Adicionales

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Supabase Dashboard:** https://llceljzcilrzpdhfcsat.supabase.co
- **GitHub Repo:** https://github.com/u7934364978-maker/focusonenglish

---

## ✅ Checklist Final

- [ ] Código en GitHub actualizado
- [ ] Proyecto importado en Vercel
- [ ] Variables de entorno configuradas
- [ ] Primer deployment exitoso
- [ ] URL de Vercel funcionando
- [ ] Login con admin@focusenglish.com funciona
- [ ] Curso B2 carga correctamente
- [ ] (Opcional) Dominio personalizado configurado
- [ ] (Opcional) SSL activo

---

**¿Necesitas ayuda?** Consulta los otros archivos de documentación:
- `SUPABASE_SETUP_GUIDE.md` - Configuración de base de datos
- `DEPLOYMENT_GUIDE_SUPABASE.md` - Guía completa de deployment
- `ESTADO_FINAL_PROYECTO.md` - Estado del proyecto

---

**Última actualización:** 15 de Enero de 2026  
**Estado:** ✅ LISTO PARA PRODUCCIÓN

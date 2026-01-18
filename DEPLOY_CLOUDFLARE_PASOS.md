# 🚀 DEPLOY A CLOUDFLARE PAGES - PASOS DETALLADOS

## Estado del Proyecto
✅ **Código sincronizado con GitHub**
✅ **Repositorio:** https://github.com/u7934364978-maker/focusonenglish
✅ **Branch:** main
✅ **Next.js 15** con App Router configurado

---

## 📋 PASOS PARA DEPLOY

### 1️⃣ Acceder a Cloudflare Dashboard

1. Ve a: **https://dash.cloudflare.com/**
2. Inicia sesión con tu cuenta
3. Si no tienes cuenta, créala gratis (solo necesitas email)

### 2️⃣ Crear Proyecto en Pages

1. En el menú lateral izquierdo, haz clic en **"Workers & Pages"**
2. Haz clic en **"Create application"**
3. Selecciona la pestaña **"Pages"**
4. Haz clic en **"Connect to Git"**

### 3️⃣ Conectar Repositorio GitHub

1. Haz clic en **"Connect GitHub"**
2. Autoriza Cloudflare a acceder a tu GitHub
3. Selecciona el repositorio: **`u7934364978-maker/focusonenglish`**
4. Haz clic en **"Begin setup"**

### 4️⃣ Configurar Build Settings

**Nombre del proyecto:**
```
focusonenglish
```

**Production branch:**
```
main
```

**Framework preset:**
```
Next.js
```

**Build command:**
```
npm run build
```

**Build output directory:**
```
.next
```

**Root directory:**
```
/
```

**Node version:**
```
20.x
```

### 5️⃣ Configurar Variables de Entorno

Haz clic en **"Environment variables"** y añade las siguientes:

#### 🔐 Variables OBLIGATORIAS:

```env
# Autenticación NextAuth
NEXTAUTH_SECRET=<GENERA_UNO_NUEVO>
NEXTAUTH_URL=https://focusonenglish.pages.dev

# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=<TU_URL_SUPABASE>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<TU_ANON_KEY>
SUPABASE_SERVICE_ROLE_KEY=<TU_SERVICE_ROLE_KEY>
```

#### 🎯 Variables OPCIONALES (si las usas):

```env
# OpenAI para ejercicios IA
OPENAI_API_KEY=<TU_KEY_OPENAI>

# Stripe para pagos
STRIPE_SECRET_KEY=<TU_STRIPE_SECRET>
STRIPE_PUBLISHABLE_KEY=<TU_STRIPE_PUBLIC>
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<TU_STRIPE_PUBLIC>

# HubSpot CRM
HUBSPOT_ACCESS_TOKEN=<TU_HUBSPOT_TOKEN>
HUBSPOT_PORTAL_ID=<TU_HUBSPOT_PORTAL_ID>

# Email Resend
RESEND_API_KEY=<TU_RESEND_KEY>
```

**💡 Para generar NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```
O usa: https://generate-secret.vercel.app/32

**📝 IMPORTANTE:** 
- Para cada variable, selecciona tanto **"Production"** como **"Preview"**
- Puedes añadir las variables opcionales más tarde si las necesitas

### 6️⃣ Iniciar Deploy

1. Revisa que todo esté configurado correctamente
2. Haz clic en **"Save and Deploy"**
3. Cloudflare comenzará el build automáticamente
4. Espera 3-5 minutos

### 7️⃣ Verificar Deployment

Una vez completado:

1. Tu URL será: **https://focusonenglish.pages.dev**
2. Cloudflare te mostrará el enlace al sitio
3. Prueba estas rutas principales:
   - ✅ `/` - Página principal
   - ✅ `/cursos` - Listado de cursos
   - ✅ `/aula` - Sistema de aula virtual
   - ✅ `/test-nivel` - Test de diagnóstico
   - ✅ `/cuenta/login` - Login

---

## 🔄 DEPLOY AUTOMÁTICO CONFIGURADO

Una vez completada la configuración inicial, cada vez que hagas:

```bash
git add .
git commit -m "Nuevos cambios"
git push origin main
```

**Cloudflare automáticamente:**
1. ✅ Detecta el push a GitHub
2. ✅ Ejecuta el build
3. ✅ Despliega a producción
4. ✅ Te notifica cuando está listo (≈3 minutos)

---

## 🌐 DOMINIO PERSONALIZADO (Opcional)

Si tienes un dominio propio:

1. Ve a tu proyecto en Cloudflare Pages
2. Haz clic en **"Custom domains"**
3. Haz clic en **"Set up a custom domain"**
4. Ingresa tu dominio (ej: `focusenglish.com`)
5. Sigue las instrucciones para configurar DNS

---

## 🔍 MONITOREO

Para ver el estado de tus deployments:

1. Ve a **Deployments** en tu proyecto
2. Verás el historial completo de builds
3. Puedes ver logs de cada deployment
4. Puedes hacer rollback a versiones anteriores si es necesario

---

## 📊 ANALYTICS

Cloudflare Pages incluye analytics gratuitos:

1. Ve a la sección **"Analytics"** en tu proyecto
2. Verás:
   - 📈 Requests por día
   - 🌍 Tráfico por país
   - ⚡ Tiempos de respuesta
   - 🚨 Errores 4xx/5xx

---

## ✅ VENTAJAS DE CLOUDFLARE PAGES

- **Gratis ilimitado** (bandwidth, requests)
- **500 builds/mes** incluidos
- **CDN global** - 300+ ubicaciones
- **SSL automático** - HTTPS forzado
- **Preview deployments** - URL única por PR
- **Rollback instantáneo** - Volver a versión anterior
- **Analytics incluido** - Métricas en tiempo real

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### ❌ Build Failed

**Causa:** Errores de TypeScript o dependencias

**Solución:** 
```bash
# Prueba el build localmente primero
npm run build

# Si hay errores, corrígelos y push
git add .
git commit -m "Fix: corregir errores de build"
git push origin main
```

### ❌ Página en Blanco

**Causa:** Variables de entorno faltantes

**Solución:**
1. Ve a Settings → Environment variables
2. Verifica que NEXTAUTH_SECRET esté configurado
3. Verifica que NEXTAUTH_URL apunte a tu URL de Cloudflare
4. Haz un "Retry deployment"

### ❌ 500 Internal Server Error

**Causa:** Error en alguna API route o función server-side

**Solución:**
1. Ve a Deployments → View logs del último deploy
2. Busca el error específico en los logs
3. Corrige el error en el código
4. Push a GitHub para nuevo deploy

---

## 🎯 URL FINAL DEL PROYECTO

Una vez desplegado, tu aplicación estará en:

```
https://focusonenglish.pages.dev
```

Y podrás acceder desde cualquier parte del mundo con:
- ✅ SSL automático (HTTPS)
- ✅ CDN global (ultra rápido)
- ✅ Bandwidth ilimitado
- ✅ 99.9% uptime

---

## 📞 RECURSOS ÚTILES

- **Dashboard:** https://dash.cloudflare.com/
- **Docs:** https://developers.cloudflare.com/pages/
- **Status:** https://www.cloudflarestatus.com/
- **Support:** https://community.cloudflare.com/

---

## 🎉 RESUMEN

1. ✅ Código ya está en GitHub
2. ⏳ Conecta GitHub a Cloudflare Pages (5 min)
3. ⏳ Configura variables de entorno (5 min)
4. ⏳ Deploy inicial (3-5 min)
5. ✅ Deploy automático configurado para futuros pushes

**Tiempo total:** ≈15 minutos para setup inicial

---

**¿Necesitas ayuda?** Si encuentras algún error durante el deploy, comparte:
1. Screenshot de los logs del build
2. Mensaje de error específico
3. Te ayudaré a resolverlo


# 🚀 GUÍA COMPLETA: MIGRAR DE VERCEL A CLOUDFLARE PAGES

## 📋 ÍNDICE
1. [Preparación del Proyecto](#1-preparación-del-proyecto)
2. [Configuración en Cloudflare](#2-configuración-en-cloudflare)
3. [Deployment Automático](#3-deployment-automático)
4. [Variables de Entorno](#4-variables-de-entorno)
5. [Verificación y Testing](#5-verificación-y-testing)
6. [Solución de Problemas](#6-solución-de-problemas)

---

## 1. PREPARACIÓN DEL PROYECTO

### Paso 1.1: Instalar Wrangler CLI (Opcional)

```bash
npm install -g wrangler
# o
npx wrangler --version
```

### Paso 1.2: Verificar Configuración de Next.js

Tu proyecto ya está configurado correctamente con Next.js 15. Cloudflare Pages soporta:
- ✅ Next.js 13, 14, 15
- ✅ App Router (que ya usas)
- ✅ API Routes
- ✅ Server Components

### Paso 1.3: Crear archivo de configuración de Cloudflare (Opcional)

Aunque no es obligatorio, puedes crear `wrangler.toml` en la raíz:

```toml
name = "focus-english"
compatibility_date = "2024-01-01"
pages_build_output_dir = ".vercel/output/static"

[site]
bucket = ".vercel/output/static"
```

**NO NECESITAS ESTE ARCHIVO** - Cloudflare Pages lo detecta automáticamente.

---

## 2. CONFIGURACIÓN EN CLOUDFLARE

### Paso 2.1: Acceder a Cloudflare Dashboard

1. Ve a: **https://dash.cloudflare.com/**
2. Inicia sesión con tu cuenta (o créala si no tienes)
3. Si no tienes cuenta, regístrate gratis

### Paso 2.2: Ir a Pages

1. En el menú lateral izquierdo, haz clic en **"Workers & Pages"**
2. Haz clic en **"Create application"**
3. Selecciona la pestaña **"Pages"**
4. Haz clic en **"Connect to Git"**

### Paso 2.3: Conectar GitHub

1. Haz clic en **"Connect GitHub"**
2. Autoriza Cloudflare a acceder a tu GitHub
3. Selecciona el repositorio: **`u7934364978-maker/focusonenglish`**
4. Haz clic en **"Begin setup"**

---

## 3. DEPLOYMENT AUTOMÁTICO

### Paso 3.1: Configuración del Build

Cloudflare detectará automáticamente que es Next.js. Verifica que tenga:

**Framework preset:**
```
Next.js
```

**Build command:** (Cloudflare lo detecta automáticamente)
```bash
npm run build
```

**Build output directory:** (Cloudflare lo detecta automáticamente)
```
.vercel/output/static
```

**Root directory:**
```
/
```

### Paso 3.2: Configuración de Producción vs Preview

**Production branch:**
```
main
```

**Preview deployments:**
- ✅ Enable automatic preview deployments
- Se creará un preview para cada Pull Request

### Paso 3.3: Iniciar el Deploy

1. Haz clic en **"Save and Deploy"**
2. Cloudflare comenzará el build automáticamente
3. Espera 3-5 minutos (primera vez puede tardar más)

---

## 4. VARIABLES DE ENTORNO

### Paso 4.1: Configurar Variables de Entorno

Mientras se hace el build, configura las variables de entorno:

1. Ve a **Settings** → **Environment variables**
2. Añade las siguientes variables:

#### 🔐 Variables Obligatorias:

```env
# Autenticación (OBLIGATORIO)
NEXTAUTH_SECRET=
NEXTAUTH_URL=https://tu-proyecto.pages.dev

# Base de Datos Supabase (OBLIGATORIO)
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# OpenAI para ejercicios (RECOMENDADO)
OPENAI_API_KEY=

# Stripe para pagos (SI LO USAS)
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# HubSpot CRM (SI LO USAS)
HUBSPOT_ACCESS_TOKEN=
HUBSPOT_PORTAL_ID=

# Email (SI LO USAS)
RESEND_API_KEY=
```

### Paso 4.2: Generar NEXTAUTH_SECRET

```bash
# Opción 1: Con OpenSSL
openssl rand -base64 32

# Opción 2: Online
# Ve a: https://generate-secret.vercel.app/32
```

### Paso 4.3: Configurar para Production y Preview

Para cada variable:
1. **Variable name:** Nombre de la variable
2. **Value:** El valor secreto
3. **Environment:** Selecciona **"Production"** y **"Preview"**
4. Haz clic en **"Add variable"**

---

## 5. VERIFICACIÓN Y TESTING

### Paso 5.1: Ver el Build

1. Ve a **Deployments**
2. Haz clic en el deployment más reciente
3. Verás:
   - 🟢 **Success** - Build exitoso
   - 🔴 **Failed** - Revisa los logs

### Paso 5.2: Acceder a tu Aplicación

Una vez completado, tu URL será:
```
https://focus-english-[hash].pages.dev
```

O si configuraste un dominio personalizado:
```
https://tu-dominio.com
```

### Paso 5.3: Probar Rutas Clave

Verifica estas URLs:

```
✅ https://tu-proyecto.pages.dev/
✅ https://tu-proyecto.pages.dev/aula
✅ https://tu-proyecto.pages.dev/aula/b2
✅ https://tu-proyecto.pages.dev/aula/b2/mixed-practice?count=5
✅ https://tu-proyecto.pages.dev/test-nivel
```

---

## 6. SOLUCIÓN DE PROBLEMAS

### ❌ Error: "Build failed"

**Causa:** Errores de TypeScript o dependencias faltantes

**Solución:**
```bash
# Localmente, ejecuta:
npm run build

# Arregla los errores que aparezcan
# Luego push a GitHub
```

### ❌ Error: "Module not found"

**Causa:** Dependencias en devDependencies en lugar de dependencies

**Solución:** Mueve todas las dependencias necesarias a `dependencies`:
```json
{
  "dependencies": {
    "lucide-react": "^0.562.0",
    // ... todas las que se usen en runtime
  }
}
```

### ❌ Error: "Cannot find module '@/...'"

**Causa:** Alias de TypeScript no configurado

**Solución:** Verifica `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### ❌ Página en blanco

**Causa:** Variables de entorno faltantes

**Solución:** Ve a Settings → Environment Variables y añade todas las obligatorias

---

## 7. CONFIGURACIÓN AVANZADA

### Paso 7.1: Dominio Personalizado

1. Ve a **Custom domains**
2. Haz clic en **"Set up a custom domain"**
3. Ingresa tu dominio: `focusenglish.com`
4. Sigue las instrucciones para configurar DNS

### Paso 7.2: Configurar DNS

Si tu dominio está en Cloudflare:
1. Se configurará automáticamente
2. Solo haz clic en **"Activate domain"**

Si tu dominio está en otro proveedor:
1. Añade un CNAME record:
   ```
   CNAME @ focus-english-xxx.pages.dev
   ```

### Paso 7.3: Habilitar SSL/TLS

Cloudflare Pages tiene SSL automático:
- ✅ SSL Universal (gratuito)
- ✅ HTTPS forzado automáticamente
- ✅ Certificados renovados automáticamente

---

## 8. COMPARATIVA: VERCEL vs CLOUDFLARE

| Característica | Vercel | Cloudflare Pages |
|---------------|---------|------------------|
| **Velocidad** | Rápido | Más rápido (red global) |
| **Precio Free** | 100GB bandwidth | Ilimitado |
| **Builds/mes** | 6,000 min | 500 builds |
| **SSL** | Automático | Automático |
| **Dominio custom** | ✅ | ✅ |
| **Edge Functions** | ✅ | ✅ |
| **CDN Global** | ✅ | ✅ (275+ ciudades) |

---

## 9. AUTOMATIZACIÓN COMPLETA

### Despliegue Automático Configurado ✅

Una vez configurado, cada vez que hagas:

```bash
git add .
git commit -m "Nuevos cambios"
git push origin main
```

**Cloudflare automáticamente:**
1. Detecta el push
2. Ejecuta el build
3. Despliega a producción
4. Te notifica cuando está listo

---

## 10. REDEPLOY MANUAL

Si necesitas redesplegar sin hacer cambios:

### Opción 1: Desde Dashboard
1. Ve a **Deployments**
2. Haz clic en **"Retry deployment"** en el último deploy

### Opción 2: Commit vacío
```bash
git commit --allow-empty -m "Trigger redeploy"
git push origin main
```

---

## 11. MONITOREO Y ANALYTICS

### Ver Analytics

1. Ve a tu proyecto en Cloudflare
2. Haz clic en **"Analytics"**
3. Verás:
   - 📊 Requests por día
   - 🌍 Tráfico por país
   - ⚡ Tiempos de respuesta
   - 🚨 Errores

---

## 12. ROLLBACK (Volver a Versión Anterior)

Si algo sale mal:

1. Ve a **Deployments**
2. Busca un deployment exitoso anterior
3. Haz clic en los **tres puntos (...)** 
4. Selecciona **"Rollback to this deployment"**

---

## ✅ CHECKLIST FINAL

- [ ] Cuenta de Cloudflare creada
- [ ] Repositorio conectado desde GitHub
- [ ] Variables de entorno configuradas (NEXTAUTH_SECRET, NEXTAUTH_URL, etc.)
- [ ] Primer deployment completado exitosamente
- [ ] Probado la URL principal
- [ ] Probado ruta /aula
- [ ] Probado sistema de ejercicios mixtos
- [ ] SSL activo (https://)
- [ ] Dominio personalizado configurado (opcional)

---

## 🎯 URLS IMPORTANTES

**Dashboard de Cloudflare:**
```
https://dash.cloudflare.com/
```

**Tu aplicación desplegada:**
```
https://focus-english-xxx.pages.dev
```

**Documentación de Cloudflare Pages:**
```
https://developers.cloudflare.com/pages/
```

---

## 📞 NECESITAS AYUDA

Si encuentras algún error:
1. Comparte screenshot de los logs del build
2. Comparte el mensaje de error exacto
3. Te ayudaré a resolverlo específicamente

---

## 🎉 LISTO

Siguiendo estos pasos, tu aplicación estará desplegada en Cloudflare Pages y funcionando correctamente con:

✅ Sistema de ejercicios mixtos
✅ Todas las rutas funcionando
✅ Deploy automático en cada push
✅ SSL automático
✅ CDN global (ultra rápido)
✅ Bandwidth ilimitado (gratis)

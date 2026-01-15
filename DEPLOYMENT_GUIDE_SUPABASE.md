# 🚀 GUÍA DE DESPLIEGUE COMPLETA - Vercel + Supabase

## 📅 Fecha: 15 de Enero de 2026
## 🎯 Objetivo: Desplegar Focus English con Supabase configurado

---

## ✅ PRE-REQUISITOS

Antes de desplegar, asegúrate de tener:

- [x] Repositorio en GitHub actualizado
- [x] Cuenta en Vercel (https://vercel.com)
- [x] Supabase configurado con credenciales
- [x] HubSpot Access Token (opcional, para formularios)
- [x] Stripe Keys (opcional, para pagos)
- [x] Resend API Key (opcional, para emails)

---

## 🚀 PASO 1: PREPARAR DEPLOYMENT

### 1.1 Verificar que el código está actualizado

```bash
cd /home/user/webapp
git status
# Debe mostrar: "nothing to commit, working tree clean"
```

### 1.2 Verificar variables necesarias

```bash
cat .env.local
```

Debes tener estas variables (las copiaremos a Vercel):

```env
# ✅ SUPABASE (OBLIGATORIO)
NEXT_PUBLIC_SUPABASE_URL=https://llceljzcilrzpdhfcsat.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# ⚠️ HUBSPOT (Opcional - para formulario signup)
HUBSPOT_ACCESS_TOKEN=your_token
HUBSPOT_PORTAL_ID=147592708
HUBSPOT_API_URL=https://api.hubapi.com

# ⚠️ STRIPE (Opcional - para pagos)
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# ⚠️ RESEND (Opcional - para emails)
RESEND_API_KEY=re_...

# ⚠️ NEXTAUTH (Opcional - para autenticación OAuth)
NEXTAUTH_URL=https://www.focus-on-english.com
NEXTAUTH_SECRET=your_secret

# SITE URL
NEXT_PUBLIC_SITE_URL=https://www.focus-on-english.com
```

---

## 🌐 PASO 2: DESPLEGAR A VERCEL

### 2.1 Instalar Vercel CLI (si no lo tienes)

```bash
npm install -g vercel
```

### 2.2 Login en Vercel

```bash
vercel login
```

### 2.3 Desplegar (opción 1 - CLI)

```bash
cd /home/user/webapp
vercel --prod
```

El CLI te preguntará:
- Set up and deploy? **Y**
- Which scope? **[Tu cuenta]**
- Link to existing project? **N** (si es primera vez) o **Y** (si ya existe)
- What's your project's name? **focus-english** o **focusonenglish**
- In which directory is your code located? **.//** (presiona Enter)
- Want to override settings? **N**

### 2.4 Desplegar (opción 2 - Dashboard)

Si prefieres usar la interfaz web:

1. **Ir a**: https://vercel.com/new
2. **Import Git Repository**
3. **Seleccionar**: `u7934364978-maker/focusonenglish`
4. **Click**: Import
5. **Continuar con configuración** (ver paso 3)

---

## ⚙️ PASO 3: CONFIGURAR VARIABLES DE ENTORNO EN VERCEL

### 3.1 Acceder a Settings

```
https://vercel.com/[tu-usuario]/focusonenglish/settings/environment-variables
```

### 3.2 Agregar Variables OBLIGATORIAS

#### ✅ SUPABASE (3 variables - OBLIGATORIAS)

```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://llceljzcilrzpdhfcsat.supabase.co
Environments: ✅ Production ✅ Preview ✅ Development
```

```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsY2VsanpjaWxyenBkaGZjc2F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyMzc2NDIsImV4cCI6MjA4MzgxMzY0Mn0.4L4eEn06kyrfqJIDYrCQS23uGJ_WCIb1nwqpwfL8hTA
Environments: ✅ Production ✅ Preview ✅ Development
```

```
Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsY2VsanpjaWxyenBkaGZjc2F0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2ODIzNzY0MiwiZXhwIjoyMDgzODEzNjQyfQ.RgWmXl9p2R7JaoUxiTjLkcKuaxc6YDegcDyl0LV3ecI
Environments: ✅ Production ✅ Preview ✅ Development
```

#### ✅ SITE URL

```
Name: NEXT_PUBLIC_SITE_URL
Value: https://www.focus-on-english.com
Environments: ✅ Production ✅ Preview ✅ Development
```

### 3.3 Agregar Variables OPCIONALES (si las necesitas)

#### HubSpot (para formulario signup)

```
HUBSPOT_ACCESS_TOKEN=[tu_token]
HUBSPOT_PORTAL_ID=147592708
HUBSPOT_API_URL=https://api.hubapi.com
```

#### Stripe (para pagos)

```
STRIPE_SECRET_KEY=[tu_stripe_secret_key]
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=[tu_stripe_publishable_key]
STRIPE_WEBHOOK_SECRET=[tu_webhook_secret]
```

#### Resend (para emails)

```
RESEND_API_KEY=[tu_resend_api_key]
```

#### NextAuth (para OAuth)

```
NEXTAUTH_URL=https://www.focus-on-english.com
NEXTAUTH_SECRET=[tu_secret_generado]
```

---

## 🔄 PASO 4: RE-DEPLOY CON VARIABLES

Después de agregar las variables de entorno:

### Opción A: Desde Dashboard

1. **Ir a**: Deployments
2. **Click en los 3 puntos** del último deployment
3. **Click**: Redeploy
4. **Confirmar**: Redeploy

### Opción B: Desde CLI

```bash
vercel --prod --force
```

### Opción C: Push a GitHub (auto-deploy)

```bash
git commit --allow-empty -m "trigger: redeploy with env vars"
git push origin main
```

---

## 🌐 PASO 5: CONFIGURAR DOMINIO PERSONALIZADO

### 5.1 Agregar Dominio en Vercel

1. **Ir a**: Settings → Domains
2. **Add Domain**:
   - `www.focus-on-english.com`
   - `focus-on-english.com` (redirect to www)

### 5.2 Configurar DNS en Cloudflare

```
Type: CNAME
Name: www
Target: cname.vercel-dns.com
Proxy: ❌ DNS only (gris)
```

```
Type: A
Name: @
IPv4: 76.76.21.21
Proxy: ❌ DNS only (gris)
```

⚠️ **IMPORTANTE**: Proxy DEBE estar GRIS (DNS only)

### 5.3 Esperar Verificación (5-20 min)

Vercel verificará y emitirá certificado SSL automáticamente.

---

## ✅ PASO 6: VERIFICAR DEPLOYMENT

### 6.1 Verificar Build

```bash
# Ver logs de deployment
vercel logs [deployment-url]
```

### 6.2 Probar URL temporal

```
https://focusonenglish-xxx.vercel.app
```

Verificar:
- ✅ Homepage carga correctamente
- ✅ Bandera 🇪🇸 visible
- ✅ Precios en EUR
- ✅ No errores en console

### 6.3 Probar Funcionalidad

#### Test 1: Signup

```
https://www.focus-on-english.com/signup
```

1. Registrar usuario de prueba
2. Verificar mensaje de éxito
3. Comprobar en Supabase Dashboard que el usuario se creó

#### Test 2: Login

```
https://www.focus-on-english.com/login
```

1. Intentar login con usuario creado
2. Verificar autenticación

#### Test 3: Forgot Password

```
https://www.focus-on-english.com/forgot-password
```

1. Solicitar recuperación de contraseña
2. Verificar que el token se crea en Supabase

---

## 🧪 PASO 7: TESTING EN PRODUCCIÓN

### 7.1 Test de Base de Datos

```bash
# Ver usuarios en Supabase
# Dashboard → Table Editor → users
```

### 7.2 Test de Autenticación

1. Registrar usuario nuevo
2. Login con credenciales
3. Logout
4. Forgot password
5. Reset password

### 7.3 Test de Performance

```
https://pagespeed.web.dev/
```

Analiza tu sitio y verifica:
- Performance Score > 90
- SEO Score > 95
- Accessibility > 90

---

## 🔒 PASO 8: SEGURIDAD

### 8.1 Verificar Variables Secretas

En Vercel Settings → Environment Variables:

✅ Las siguientes NO deben ser públicas:
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `HUBSPOT_ACCESS_TOKEN`
- `RESEND_API_KEY`
- `NEXTAUTH_SECRET`

✅ Solo estas pueden ser públicas (NEXT_PUBLIC_*):
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_SITE_URL`

### 8.2 Configurar CORS en Supabase (si es necesario)

1. Ir a Supabase Dashboard → Settings → API
2. Agregar tu dominio a CORS allowed origins:
   ```
   https://www.focus-on-english.com
   https://focusonenglish.vercel.app
   ```

---

## 📊 PASO 9: MONITOREO

### 9.1 Configurar Analytics en Vercel

```
Settings → Analytics → Enable
```

### 9.2 Configurar Alertas

- Deployment failures
- Error rate > 1%
- Response time > 2s

---

## 🎉 CHECKLIST FINAL

### Deployment
- [ ] Código en GitHub actualizado
- [ ] Build exitoso en Vercel
- [ ] Variables de entorno configuradas
- [ ] URL temporal funcionando

### Supabase
- [ ] Conexión a base de datos funcionando
- [ ] Tabla users operativa
- [ ] Tabla password_reset_tokens operativa
- [ ] RLS configurado correctamente

### Dominio
- [ ] DNS configurado en Cloudflare
- [ ] Certificado SSL activo
- [ ] www.focus-on-english.com funcionando
- [ ] Redirect de dominio raíz funcionando

### Funcionalidad
- [ ] Signup funcionando
- [ ] Login funcionando
- [ ] Logout funcionando
- [ ] Forgot password funcionando
- [ ] Reset password funcionando

### Seguridad
- [ ] Variables secretas no expuestas
- [ ] HTTPS funcionando
- [ ] CORS configurado
- [ ] RLS activo en Supabase

---

## 🆘 TROUBLESHOOTING

### Build Error en Vercel

```bash
# Ver logs detallados
vercel logs --follow

# Common issues:
# - Missing dependencies → verificar package.json
# - TypeScript errors → npm run build localmente
# - Environment variables → verificar en Settings
```

### Error de Conexión a Supabase

```bash
# Verificar variables en Vercel:
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

### Error 500 en Producción

```bash
# Ver logs en tiempo real
vercel logs [deployment-url] --follow

# Verificar en Supabase:
# - RLS policies
# - Table permissions
# - API keys válidas
```

### SSL no funciona

```bash
# Verificar en Cloudflare:
# - Proxy DESACTIVADO (gris)
# - DNS records correctos
# - Esperar 10-20 minutos
```

---

## 📚 RECURSOS

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Supabase Dashboard**: https://llceljzcilrzpdhfcsat.supabase.co
- **GitHub Repo**: https://github.com/u7934364978-maker/focusonenglish
- **Documentación Vercel**: https://vercel.com/docs
- **Documentación Supabase**: https://supabase.com/docs

---

## 🚀 COMANDOS RÁPIDOS

```bash
# Deploy a producción
vercel --prod

# Deploy con variables actualizadas
vercel --prod --force

# Ver logs
vercel logs --follow

# Ver estado del proyecto
vercel inspect [deployment-url]

# Listar deployments
vercel ls

# Rollback a deployment anterior
vercel rollback [deployment-url]
```

---

**Fecha**: 15 de Enero de 2026  
**Estado**: ✅ LISTO PARA DEPLOYMENT  
**Tiempo estimado**: 15-20 minutos  

¡Buena suerte con el despliegue! 🚀

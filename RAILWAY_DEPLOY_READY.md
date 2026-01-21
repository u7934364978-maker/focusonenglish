# 🚂 RAILWAY DEPLOY - LISTO PARA DESPEGAR

## ✅ Estado Actual

- **Repositorio**: https://github.com/u7934364978-maker/focusonenglish
- **Branch**: main
- **Último commit**: ef22f42 - "docs: Añadir guía completa de deploy en Railway como alternativa a Vercel"
- **Estado**: ✅ Código sincronizado y listo para deploy

---

## 🚀 DEPLOY EN RAILWAY (10 MINUTOS)

### **Paso 1: Crear Cuenta en Railway**
1. Ve a: **https://railway.app/**
2. Click en **"Start a New Project"**
3. Login con tu cuenta de **GitHub**

### **Paso 2: Crear Proyecto desde GitHub**
1. Click en **"Deploy from GitHub repo"**
2. Selecciona: **`u7934364978-maker/focusonenglish`**
3. Railway detectará automáticamente que es Next.js
4. Click en **"Deploy Now"**

### **Paso 3: Configurar Variables de Entorno**

⚠️ **IMPORTANTE**: Añade estas variables ANTES del primer deploy:

```bash
# Autenticación NextAuth
NEXTAUTH_SECRET=QWS4m1S6L2jQdxM2K8wDX8MDEfTdm7I12VPuCvkyZOk=
NEXTAUTH_URL=https://tu-proyecto.up.railway.app

# Supabase (OBLIGATORIO - Reemplaza con tus valores)
NEXT_PUBLIC_SUPABASE_URL=https://tuprojectid.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key_aqui

# OpenAI API (OBLIGATORIO para ejercicios)
OPENAI_API_KEY=sk-...tu_api_key_aqui

# Stripe (OPCIONAL - Solo si usas pagos)
STRIPE_SECRET_KEY=sk_...
STRIPE_PUBLISHABLE_KEY=pk_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_WEBHOOK_SECRET=whsec_...

# HubSpot (OPCIONAL - Solo si usas CRM)
HUBSPOT_ACCESS_TOKEN=pat-...
HUBSPOT_PORTAL_ID=12345678

# Resend (OPCIONAL - Solo si usas emails)
RESEND_API_KEY=re_...
```

### **Paso 4: Deploy Automático**
1. Railway iniciará el build automáticamente
2. Espera **3-5 minutos** para el primer deploy
3. Railway mostrará logs en tiempo real
4. Cuando termine, verás: ✅ **"Deployment successful"**

### **Paso 5: Obtener URL de Producción**
1. Click en tu proyecto en Railway
2. Ve a la pestaña **"Settings"**
3. Busca la sección **"Domains"**
4. Tu URL será algo como: `https://focusonenglish-production.up.railway.app`

### **Paso 6: Actualizar NEXTAUTH_URL**
1. Copia tu URL de Railway (del paso anterior)
2. Ve a **Settings → Variables**
3. Actualiza la variable: `NEXTAUTH_URL=https://tu-url-railway.up.railway.app`
4. Railway hará un redeploy automático (1-2 minutos)

---

## 🔄 Deploy Automático Configurado

Cada vez que hagas `git push` a la rama `main`:
1. Railway detecta el cambio (30 segundos)
2. Inicia build automático (2-3 minutos)
3. Deploy a producción (30 segundos)
4. **Total: ~3 minutos** desde push hasta live

---

## 💰 Pricing de Railway

### **Plan Starter - $5/mes**
- ✅ 500 horas de ejecución/mes
- ✅ 100 GB de egress/mes
- ✅ 8 GB RAM
- ✅ 8 vCPU
- ✅ Deploy ilimitados
- ✅ Variables de entorno ilimitadas
- ✅ SSL automático
- ✅ PostgreSQL incluido (si lo necesitas)

### **Trial Gratuito**
- $5 de crédito gratis
- Sin tarjeta de crédito
- Perfecto para probar

---

## 📊 Comparación: Railway vs Vercel

| Característica | Railway | Vercel |
|----------------|---------|--------|
| **Precio Hobby** | $5/mes | Gratis |
| **Precio Pro** | $20/mes | $20/mes |
| **Next.js 15** | ✅ Completo | ✅ Completo |
| **API Routes** | ✅ Nativas | ✅ Nativas |
| **NextAuth** | ✅ Funciona | ✅ Funciona |
| **OpenAI API** | ✅ Segura | ✅ Segura |
| **Deploy desde GitHub** | ✅ Automático | ✅ Automático |
| **SSL Automático** | ✅ Incluido | ✅ Incluido |
| **PostgreSQL** | ✅ Incluido | ❌ Separado |
| **Logs en tiempo real** | ✅ Excelentes | ✅ Buenos |

---

## 🎯 Ventajas de Railway para tu App

### 1. **Compatible al 100% con tu código**
- Next.js 15 App Router ✅
- API Routes para IA ✅
- NextAuth ✅
- OpenAI integration ✅
- Todas las evaluaciones ✅

### 2. **No necesitas cambiar NADA del código**
- Cero configuración
- Railway detecta Next.js automáticamente
- Build y deploy "mágicos"

### 3. **Mejor precio que Vercel**
- $5/mes vs $20/mes de Vercel Pro
- Incluye PostgreSQL gratis
- Más recursos por menos dinero

### 4. **Developer Experience excelente**
- Logs en tiempo real
- Deploy previews automáticos
- Rollback en 1 click
- Métricas de performance

---

## ✅ Checklist de Deploy

- [x] Código sincronizado en GitHub
- [x] Guía de deploy creada
- [x] Variables de entorno documentadas
- [x] NEXTAUTH_SECRET generado
- [ ] Cuenta de Railway creada
- [ ] Proyecto conectado a GitHub
- [ ] Variables de entorno configuradas
- [ ] Primer deploy completado
- [ ] NEXTAUTH_URL actualizada
- [ ] Sitio verificado en producción

---

## 🔧 Troubleshooting

### **Build Failed - Missing Dependencies**
```bash
# Railway ejecuta automáticamente:
npm install
npm run build
```

**Solución**: Verifica que `package.json` esté en la raíz del proyecto ✅

### **500 Error - Environment Variables**
**Problema**: Variables de entorno no configuradas

**Solución**:
1. Ve a Railway Settings → Variables
2. Añade todas las variables obligatorias
3. Redeploy automático

### **NextAuth Error - NEXTAUTH_URL**
**Problema**: NEXTAUTH_URL apunta a URL incorrecta

**Solución**:
1. Copia tu URL de Railway
2. Actualiza variable: `NEXTAUTH_URL=https://tu-url.up.railway.app`
3. Redeploy

### **OpenAI Timeout**
**Problema**: Requests de OpenAI tardan mucho

**Solución**: Railway tiene timeout de 5 minutos (suficiente)
- Verifica tu API key de OpenAI
- Revisa los logs en Railway

---

## 📱 Verificar Deploy

### **Rutas principales a probar**:
1. **Landing**: https://tu-url.up.railway.app/
2. **Cursos**: https://tu-url.up.railway.app/cursos
3. **Aula**: https://tu-url.up.railway.app/aula
4. **Test**: https://tu-url.up.railway.app/test-nivel
5. **Login**: https://tu-url.up.railway.app/cuenta/login

### **Features críticas**:
- ✅ Ejercicios se generan correctamente
- ✅ Evaluaciones con IA funcionan
- ✅ Autenticación con NextAuth
- ✅ Progreso del usuario se guarda

---

## 🌐 Dominio Personalizado (Opcional)

### **Paso 1: Configurar en Railway**
1. Ve a Settings → Domains
2. Click en **"Custom Domain"**
3. Añade tu dominio: `focusenglish.com`

### **Paso 2: Configurar DNS**
Railway te dará un CNAME:
```
CNAME focusenglish.com → tu-proyecto.up.railway.app
```

### **Paso 3: Actualizar NEXTAUTH_URL**
```bash
NEXTAUTH_URL=https://focusenglish.com
```

---

## 📚 Recursos Útiles

- **Railway Dashboard**: https://railway.app/
- **Repositorio**: https://github.com/u7934364978-maker/focusonenglish
- **Docs Railway**: https://docs.railway.app/
- **Soporte Railway**: https://help.railway.app/

---

## 🎉 Resumen

✅ **Tu app está lista para Railway**
- Código sincronizado ✅
- Documentación completa ✅
- Variables de entorno preparadas ✅
- Compatible al 100% ✅

⏱️ **Tiempo estimado**: 10-15 minutos
💰 **Costo**: $5/mes (trial gratis disponible)

---

## 🚀 Próximo Paso

**Ir a Railway y desplegar**: https://railway.app/

¿Necesitas ayuda durante el deploy? Estoy aquí para ayudarte! 🙌

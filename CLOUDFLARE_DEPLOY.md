# 🚀 Despliegue en Cloudflare Pages - Focus English

## ✅ Estado del Proyecto

- **Repositorio**: https://github.com/u7934364978-maker/focusonenglish
- **Rama**: main
- **Commits**: Todos pusheados y sincronizados
- **Sistema Mixto**: Implementado y funcional

---

## 📋 GUÍA PASO A PASO PARA CLOUDFLARE PAGES

### **PASO 1: Acceder a Cloudflare Dashboard**

1. Ve a: **https://dash.cloudflare.com/**
2. Inicia sesión con tu cuenta
3. En el menú lateral izquierdo, busca: **Workers & Pages**
4. Click en **Workers & Pages**

---

### **PASO 2: Crear Nueva Aplicación**

1. Click en el botón azul: **Create application**
2. Selecciona la pestaña: **Pages**
3. Click en: **Connect to Git**

---

### **PASO 3: Conectar GitHub**

1. Autoriza Cloudflare a acceder a tu GitHub
2. Busca y selecciona el repositorio: **u7934364978-maker/focusonenglish**
3. Click en: **Begin setup**

---

### **PASO 4: Configuración del Build**

**Configuración automática detectada:**

```
Framework preset: Next.js
Build command: npm run build
Output directory: .vercel/output/static
Branch de producción: main
```

**⚠️ IMPORTANTE - Verifica estos valores:**

| Campo | Valor |
|-------|-------|
| **Project name** | `focus-english` (o el que prefieras) |
| **Production branch** | `main` |
| **Framework preset** | `Next.js` |
| **Build command** | `npm run build` |
| **Build output directory** | `.vercel/output/static` |
| **Root directory** | `/` (dejar vacío) |

---

### **PASO 5: Variables de Entorno (CRÍTICO)**

Antes de hacer deploy, configura estas variables:

#### **Variables OBLIGATORIAS:**

```bash
# 1. Generar NEXTAUTH_SECRET
# En tu terminal local, ejecuta:
openssl rand -base64 32

# 2. Agregar en Cloudflare:
NEXTAUTH_SECRET=<pega_el_resultado_aqui>
NEXTAUTH_URL=https://focus-english.pages.dev
```

#### **Variables OPCIONALES (Recomendadas):**

```bash
# API Keys para generación de ejercicios con IA
OPENAI_API_KEY=sk-proj-...
GEMINI_API_KEY=AIza...

# Supabase (si usas autenticación)
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# Stripe (si usas pagos)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# HubSpot CRM (si usas el CRM)
HUBSPOT_ACCESS_TOKEN=pat-...
HUBSPOT_PORTAL_ID=147592708
```

**📍 Cómo agregar variables en Cloudflare:**

1. Durante el setup inicial: Scroll hacia abajo → **Environment variables**
2. O después del deploy: Settings → Environment Variables
3. Click **Add variable**
4. Nombre: `NEXTAUTH_SECRET`
5. Value: (pega el valor generado)
6. Environment: **Production** y **Preview**
7. Click **Add variable**
8. Repite para cada variable

---

### **PASO 6: Deploy Inicial**

1. Verifica toda la configuración
2. Click en el botón grande: **Save and Deploy**
3. Espera 2-5 minutos mientras Cloudflare:
   - Clona el repositorio
   - Instala dependencias (`npm install`)
   - Ejecuta el build (`npm run build`)
   - Despliega los archivos estáticos

---

### **PASO 7: Verificar el Despliegue**

**Una vez completado el deploy:**

1. Cloudflare te mostrará la URL: `https://focus-english-xxx.pages.dev`
2. Click en **Visit site** para abrir tu aplicación
3. Verifica que funciona correctamente:
   - ✅ Página principal: `/`
   - ✅ Sistema de Aula: `/aula`
   - ✅ Práctica Mixta: `/aula/b2/mixed-practice`
   - ✅ Test de Nivel: `/test-nivel`
   - ✅ Blog: `/blog`

---

## 🔧 Configuraciones Adicionales

### **Dominio Personalizado (Opcional)**

Si tienes un dominio (ej: `focusenglish.com`):

1. En el dashboard del proyecto → **Custom domains**
2. Click **Set up a custom domain**
3. Escribe tu dominio: `focusenglish.com`
4. Cloudflare te dará instrucciones DNS
5. Actualiza los registros DNS en tu proveedor de dominio
6. Espera la verificación (puede tomar hasta 24 horas)

**Actualizar NEXTAUTH_URL:**
```
NEXTAUTH_URL=https://focusenglish.com
```

---

### **Redeploy Automático**

Cada vez que hagas `git push` a la rama `main`, Cloudflare automáticamente:
1. Detecta el cambio
2. Ejecuta el build
3. Despliega la nueva versión

**No necesitas hacer nada más** después del setup inicial.

---

### **Rollback (Volver a Versión Anterior)**

Si algo sale mal:

1. Ve al dashboard del proyecto
2. Click en **Deployments**
3. Encuentra el deployment anterior que funcionaba
4. Click en **...** → **Rollback to this deployment**

---

## 🐛 Solución de Problemas Comunes

### **Error: Build failed**

**Causa**: Falta configurar variables de entorno obligatorias

**Solución**:
1. Ve a Settings → Environment Variables
2. Agrega `NEXTAUTH_SECRET` y `NEXTAUTH_URL`
3. Click **Retry deployment**

---

### **Error: Cannot read property of undefined**

**Causa**: Falta alguna API key (OPENAI_API_KEY o GEMINI_API_KEY)

**Solución**:
1. Agrega las API keys en Environment Variables
2. O desactiva temporalmente las funciones que las requieren

---

### **Error: Pages not loading correctly**

**Causa**: Output directory incorrecto

**Solución**:
1. Ve a Settings → Builds & deployments
2. Verifica que **Build output directory** sea: `.vercel/output/static`
3. Retry deployment

---

### **Error: 404 en rutas dinámicas**

**Causa**: Next.js no está configurado correctamente para Cloudflare

**Solución**:
- Verifica que `next.config.js` tenga `output: 'standalone'`
- Usa `getStaticProps` o `getServerSideProps` correctamente

---

## 📊 Monitoreo y Analytics

### **Ver Logs de Build**

1. Dashboard del proyecto → **Deployments**
2. Click en el deployment más reciente
3. Click en **View build logs**
4. Revisa errores o warnings

### **Analytics (Gratis con Cloudflare)**

1. Dashboard del proyecto → **Analytics**
2. Verás:
   - Visitas totales
   - Páginas más visitadas
   - Tiempo de carga
   - Errores

---

## ✅ Checklist Final

Antes de considerar el deploy completo, verifica:

- [ ] Build exitoso en Cloudflare
- [ ] Aplicación cargando en la URL de Cloudflare
- [ ] Variables de entorno configuradas
- [ ] Página principal `/` funciona
- [ ] Sistema de Aula `/aula` carga
- [ ] Práctica Mixta `/aula/b2/mixed-practice?count=5` funciona
- [ ] Test de Nivel `/test-nivel` responde
- [ ] Blog `/blog` muestra artículos
- [ ] No hay errores en la consola del navegador
- [ ] API de ejercicios `/api/generate-exercise` responde

---

## 🎯 URLs Finales

Una vez desplegado, tu aplicación estará disponible en:

**URL de Cloudflare Pages:**
```
https://focus-english-xxx.pages.dev
```

**Rutas del Sistema de Ejercicios Mixtos:**
```
https://focus-english-xxx.pages.dev/aula
https://focus-english-xxx.pages.dev/aula/a1/mixed-practice
https://focus-english-xxx.pages.dev/aula/a2/mixed-practice
https://focus-english-xxx.pages.dev/aula/b1/mixed-practice
https://focus-english-xxx.pages.dev/aula/b2/mixed-practice
https://focus-english-xxx.pages.dev/aula/c1/mixed-practice
https://focus-english-xxx.pages.dev/aula/c2/mixed-practice
```

**Otras Rutas Importantes:**
```
https://focus-english-xxx.pages.dev/test-nivel
https://focus-english-xxx.pages.dev/blog
https://focus-english-xxx.pages.dev/cursos
https://focus-english-xxx.pages.dev/contacto
```

---

## 📚 Recursos Adicionales

- **Documentación Cloudflare Pages**: https://developers.cloudflare.com/pages/
- **Documentación Next.js**: https://nextjs.org/docs
- **GitHub Repository**: https://github.com/u7934364978-maker/focusonenglish

---

## 🎉 ¡Listo!

Tu aplicación **Focus English** con el **Sistema de Ejercicios Mixtos** ya está desplegada en Cloudflare Pages.

**Próximos pasos recomendados:**

1. Probar todas las funcionalidades en producción
2. Configurar un dominio personalizado
3. Monitorear analytics y logs
4. Compartir la URL con usuarios de prueba
5. Recopilar feedback y hacer mejoras

---

**¿Necesitas ayuda?** Revisa esta documentación o consulta los logs de build en el dashboard de Cloudflare.

**Última actualización**: 2026-01-18
**Versión del Sistema Mixto**: 1.0.0

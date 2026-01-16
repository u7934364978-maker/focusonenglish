# 🚀 GUÍA DE DEPLOYMENT - FOCUS ENGLISH

## ✅ PRE-DEPLOYMENT CHECKLIST

- [x] Código commiteado en GitHub
- [x] Documentación completa
- [x] Redirects 301 configurados
- [x] Sitemap actualizado
- [ ] Deploy a producción ← **SIGUIENTE PASO**
- [ ] Verificar redirects
- [ ] Enviar sitemap a Google

---

## 📋 PASO 1: DEPLOY A VERCEL

### Opción A: Deploy Automático (Recomendado)

Si tienes Vercel conectado a tu repositorio de GitHub:

1. **Vercel detectará automáticamente el nuevo push**
   - Ve a: https://vercel.com/dashboard
   - Busca tu proyecto: `focusonenglish`
   - El deploy debería iniciarse automáticamente

2. **Monitorear el Deploy**
   ```
   Estado: Building...
   Tiempo estimado: 2-3 minutos
   ```

3. **Verificar Deploy Exitoso**
   - Estado: ✅ Ready
   - URL: https://focus-on-english.com
   - Preview URL: https://focusonenglish.vercel.app

### Opción B: Deploy Manual

Si necesitas hacer deploy manual:

```bash
# 1. Instalar Vercel CLI (si no lo tienes)
npm i -g vercel

# 2. Login a Vercel
vercel login

# 3. Deploy a producción
vercel --prod

# 4. Confirmar configuración
# Project name: focusonenglish
# Region: fra1 (Frankfurt - Europa)
```

---

## 📋 PASO 2: VERIFICAR REDIRECTS 301

Una vez deployado, verifica que los redirects funcionen:

### Redirects a Verificar:

```bash
# Autenticación
curl -I https://focus-on-english.com/login
# Debe redirigir a: /cuenta/login (301)

curl -I https://focus-on-english.com/signin
# Debe redirigir a: /cuenta/login (301)

curl -I https://focus-on-english.com/register
# Debe redirigir a: /cuenta/registro (301)

curl -I https://focus-on-english.com/signup
# Debe redirigir a: /cuenta/registro (301)

curl -I https://focus-on-english.com/forgot-password
# Debe redirigir a: /cuenta/recuperar (301)

# Otras rutas
curl -I https://focus-on-english.com/diagnostico
# Debe redirigir a: /test-nivel (301)

curl -I https://focus-on-english.com/contact
# Debe redirigir a: /contacto (301)
```

### Verificación Manual en Browser:

1. **Abre Chrome DevTools** (F12)
2. **Ve a la pestaña Network**
3. **Prueba cada URL:**
   - https://focus-on-english.com/login
   - https://focus-on-english.com/register
   - https://focus-on-english.com/diagnostico
   
4. **Verifica Status Code: 301**
5. **Verifica Location header: nueva URL**

---

## 📋 PASO 3: VERIFICAR NUEVAS PÁGINAS

### Landing Pages:

Verifica que estas páginas carguen correctamente:

- ✅ https://focus-on-english.com/cursos/trabajo
- ✅ https://focus-on-english.com/cursos/viajes
- ✅ https://focus-on-english.com/cursos/examenes

### Rutas Unificadas:

- ✅ https://focus-on-english.com/cuenta/login
- ✅ https://focus-on-english.com/cuenta/registro
- ✅ https://focus-on-english.com/test-nivel
- ✅ https://focus-on-english.com/contacto

### Checklist de Verificación:

Para cada página, verifica:
- [ ] Carga sin errores (200 OK)
- [ ] Diseño responsive (mobile + desktop)
- [ ] Navegación funciona
- [ ] CTAs visibles y funcionales
- [ ] Imágenes cargan correctamente
- [ ] No hay errores en consola

---

## 📋 PASO 4: ENVIAR SITEMAP A GOOGLE

### 4.1 Verificar Sitemap

Primero, comprueba que el sitemap esté accesible:

```bash
curl https://focus-on-english.com/sitemap.xml
```

Debería devolver XML con ~50 URLs.

### 4.2 Google Search Console

1. **Accede a Google Search Console**
   - URL: https://search.google.com/search-console

2. **Selecciona tu propiedad:**
   - focus-on-english.com

3. **Enviar Sitemap:**
   - Ve a: `Sitemaps` en el menú lateral
   - Click en "Add a new sitemap"
   - Introduce: `sitemap.xml`
   - Click "Submit"

4. **Verificar Estado:**
   - Estado: Pending → Success
   - URLs discovered: ~50
   - Tiempo: 24-48 horas para indexación completa

### 4.3 URLs Prioritarias para Indexar

Si quieres acelerar la indexación, envía manualmente estas URLs en Search Console:

**Alta Prioridad:**
- https://focus-on-english.com/
- https://focus-on-english.com/cursos/trabajo
- https://focus-on-english.com/cursos/viajes
- https://focus-on-english.com/cursos/examenes
- https://focus-on-english.com/test-nivel

**Media Prioridad:**
- https://focus-on-english.com/planes
- https://focus-on-english.com/blog
- https://focus-on-english.com/contacto

---

## 📋 PASO 5: TESTING POST-DEPLOYMENT

### 5.1 Lighthouse Audit

Ejecuta Lighthouse en Chrome DevTools:

1. Abre Chrome DevTools (F12)
2. Ve a la pestaña "Lighthouse"
3. Selecciona:
   - [x] Performance
   - [x] Accessibility
   - [x] Best Practices
   - [x] SEO
4. Click "Generate report"

**Objetivos:**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

### 5.2 Core Web Vitals

Verifica en PageSpeed Insights:
- URL: https://pagespeed.web.dev/

**Objetivos:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### 5.3 Mobile Responsiveness

Prueba en diferentes dispositivos:
- [ ] iPhone (375px)
- [ ] iPad (768px)
- [ ] Desktop (1920px)

### 5.4 Browser Testing

Prueba en diferentes navegadores:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## 📋 PASO 6: MONITOREO POST-DEPLOYMENT

### 6.1 Configurar Alertas

En Vercel Dashboard:
1. Ve a tu proyecto
2. Settings → Notifications
3. Activa:
   - [x] Deployment Failed
   - [x] Domain Configuration Changed
   - [x] Usage Alerts

### 6.2 Google Analytics

Verifica que GA esté rastreando:
1. Ve a GA Dashboard
2. Real-Time → Overview
3. Deberías ver tráfico en las nuevas páginas

### 6.3 Error Monitoring

Monitorea errores en:
- Vercel Dashboard → Logs
- Browser Console
- Google Search Console → Coverage

---

## 📊 MÉTRICAS A MONITOREAR

### Semana 1 (Días 1-7):

**Técnicas:**
- [ ] 0 errores 404
- [ ] 0 errores 500
- [ ] Uptime > 99.9%
- [ ] Redirects funcionando al 100%

**UX:**
- [ ] Bounce rate < 50%
- [ ] Navegación sin errores
- [ ] Formularios funcionando

**SEO:**
- [ ] Sitemap indexado
- [ ] Páginas principales en Google
- [ ] No caída de tráfico orgánico

### Mes 1 (Días 8-30):

**Conversión:**
- [ ] Test nivel completions > 20%
- [ ] Tasa de conversión > 2.5%
- [ ] Tiempo en sitio > 3:00

**Engagement:**
- [ ] Páginas/sesión > 2.5
- [ ] Usuarios nuevos estables
- [ ] CTR de landing pages > 3%

**SEO:**
- [ ] 50+ páginas indexadas
- [ ] Keywords posicionando
- [ ] Backlinks estables

---

## 🚨 TROUBLESHOOTING

### Problema: Deploy Falla

**Solución:**
```bash
# Verificar logs en Vercel
vercel logs [deployment-url]

# Errores comunes:
# - Build error → Verificar next.config.js
# - Module not found → npm install
# - Syntax error → Verificar TypeScript
```

### Problema: Redirects no funcionan

**Solución:**
1. Verificar next.config.js tiene los redirects
2. Hacer redeploy: `vercel --prod`
3. Limpiar cache de Vercel
4. Verificar con curl -I

### Problema: Sitemap no se indexa

**Solución:**
1. Verificar formato XML correcto
2. Verificar accesibilidad: `/sitemap.xml`
3. Reenviar en Search Console
4. Esperar 24-48 horas

### Problema: Páginas nuevas no aparecen

**Solución:**
1. Verificar build exitoso
2. Limpiar cache de navegador
3. Verificar archivo existe en `/app/cursos/...`
4. Redeploy si necesario

---

## ✅ CHECKLIST FINAL

### Pre-Deployment:
- [x] Código en GitHub
- [x] Tests locales pasados
- [x] Documentación actualizada
- [x] Redirects configurados

### Deployment:
- [ ] Deploy a Vercel exitoso
- [ ] URL de producción accesible
- [ ] Todas las páginas cargan

### Verificación:
- [ ] Redirects 301 funcionando
- [ ] Nuevas landing pages activas
- [ ] Navegación sin errores
- [ ] Mobile responsive OK

### SEO:
- [ ] Sitemap enviado a Google
- [ ] Metadata verificada
- [ ] Lighthouse > 90
- [ ] Core Web Vitals OK

### Monitoreo:
- [ ] Analytics funcionando
- [ ] Error tracking activo
- [ ] Alertas configuradas
- [ ] Métricas baseline capturadas

---

## 📞 CONTACTO Y SOPORTE

**Si encuentras problemas:**

1. **Vercel Support:**
   - https://vercel.com/support
   - Support chat en dashboard

2. **Documentación:**
   - Next.js: https://nextjs.org/docs
   - Vercel: https://vercel.com/docs

3. **GitHub Issues:**
   - https://github.com/u7934364978-maker/focusonenglish/issues

---

## 📚 RECURSOS ÚTILES

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Platform](https://vercel.com/docs)
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

---

**Generado:** 2026-01-16  
**Proyecto:** Focus English  
**Estado:** Ready for Deployment 🚀

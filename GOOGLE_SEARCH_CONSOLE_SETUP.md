# 🔍 Guía de Configuración: Google Search Console

**Fecha de implementación:** 15 de enero de 2026  
**Estado:** ✅ Listo para configurar  
**Tiempo estimado:** 15-20 minutos

---

## 📋 Requisitos Previos

✅ Dominio verificado: `focus-on-english.com`  
✅ Acceso a la cuenta de Google del propietario del dominio  
✅ Acceso al hosting/DNS del dominio (para verificación)  

---

## 🚀 Paso 1: Crear Propiedad en Google Search Console

### 1.1 Acceder a Google Search Console

1. Ve a: **https://search.google.com/search-console**
2. Inicia sesión con la cuenta de Google del propietario
3. Haz clic en **"Añadir propiedad"**

### 1.2 Seleccionar Tipo de Propiedad

**Opción recomendada:** Propiedad de dominio (cubre todas las URLs)

- **URL que debes introducir:** `focus-on-english.com`  
  _(Sin `https://` ni `www`)_

**Ventajas:**
- Cubre automáticamente:
  - `https://focus-on-english.com`
  - `https://www.focus-on-english.com`
  - Todos los subdominios
  - HTTP y HTTPS

---

## 🔐 Paso 2: Verificar la Propiedad del Dominio

Google te proporcionará un **registro TXT DNS** para verificar la propiedad.

### 2.1 Copiar el Registro TXT

Ejemplo del registro que recibirás:
```
google-site-verification=ABC123xyz789...
```

### 2.2 Añadir el Registro DNS

**Dónde:** Panel de control del hosting/DNS (Vercel, Cloudflare, GoDaddy, etc.)

**Configuración:**
- **Tipo:** TXT
- **Nombre/Host:** `@` (o deja en blanco si tu proveedor lo requiere)
- **Valor:** `google-site-verification=ABC123xyz789...` (el que te dio Google)
- **TTL:** 3600 (1 hora) o automático

### 2.3 Esperar Propagación DNS

⏱️ **Tiempo estimado:** 5-30 minutos (puede tardar hasta 24h)

**Comprobar propagación DNS:**
```bash
# En terminal/CMD:
nslookup -type=TXT focus-on-english.com

# O usar herramienta online:
# https://mxtoolbox.com/TXTLookup.aspx
```

### 2.4 Confirmar Verificación

1. Vuelve a Google Search Console
2. Haz clic en **"Verificar"**
3. Si aparece ✅ **"Propiedad verificada"** → ¡Listo!

---

## 📊 Paso 3: Enviar el Sitemap

### 3.1 URL del Sitemap

Nuestro sitemap está en:
```
https://focus-on-english.com/sitemap.xml
```

### 3.2 Enviar a Google Search Console

1. En el menú lateral, ve a **"Sitemaps"**
2. Introduce la URL del sitemap:
   ```
   sitemap.xml
   ```
   _(Solo escribe `sitemap.xml`, no la URL completa)_
3. Haz clic en **"Enviar"**
4. Espera a que Google lo procese (puede tardar 1-7 días)

**Estado ideal:**
- ✅ **Estado:** Correcto
- 📄 **URLs descubiertas:** ~50-100 (dependerá del contenido)

---

## 🔧 Paso 4: Configuración Adicional Recomendada

### 4.1 Enlaces Internacionales (hreflang)

**No aplicable** (solo tenemos versión en español de momento)

Si en el futuro añades versión en inglés:
```html
<link rel="alternate" hreflang="es" href="https://focus-on-english.com/blog/..." />
<link rel="alternate" hreflang="en" href="https://focus-on-english.com/en/blog/..." />
```

### 4.2 Configurar Tasa de Rastreo

**Recomendación:** Dejar en automático (Google optimiza por ti)

Si tienes problemas de rendimiento:
1. Ve a **"Configuración" → "Rastreo"**
2. Ajusta la tasa de rastreo (solo si es necesario)

### 4.3 Asociar con Google Analytics 4 (GA4)

**Muy recomendado** para métricas integradas:

1. En Search Console, ve a **"Configuración" → "Asociaciones"**
2. Haz clic en **"Asociar"** junto a Google Analytics
3. Selecciona tu propiedad GA4
4. Confirma la asociación

**Beneficios:**
- Ver datos de Search Console en GA4
- Correlacionar tráfico orgánico con conversiones
- Informes unificados

---

## 📈 Paso 5: Monitorear Resultados

### 5.1 Métricas Clave (primeras 4 semanas)

| Métrica | Objetivo Semana 1 | Objetivo Semana 4 |
|---------|-------------------|-------------------|
| **URLs indexadas** | 10-20 | 50-80 |
| **Impresiones** | 100-500 | 1,000-3,000 |
| **Clics** | 5-20 | 50-150 |
| **CTR promedio** | 2-5% | 3-7% |
| **Posición media** | 30-50 | 15-30 |

### 5.2 Informes Importantes

**1. Rendimiento (Performance)**
- Ve a **"Rendimiento"** en el menú lateral
- Revisa:
  - **Clics:** Número de visitas desde Google
  - **Impresiones:** Veces que apareció tu sitio en resultados
  - **CTR:** % de clics sobre impresiones
  - **Posición media:** Ranking promedio en Google

**2. Cobertura (Coverage)**
- Ve a **"Cobertura"** o **"Páginas"**
- Revisa:
  - ✅ **Válidas:** URLs indexadas correctamente
  - ⚠️ **Con advertencias:** URLs indexadas pero con problemas menores
  - ❌ **Errores:** URLs que no se pueden indexar
  - 🚫 **Excluidas:** URLs bloqueadas por robots.txt o noindex

**3. Experiencia (Experience)**
- Ve a **"Experiencia" → "Core Web Vitals"**
- Revisa:
  - **LCP (Largest Contentful Paint):** < 2.5s ✅
  - **FID (First Input Delay):** < 100ms ✅
  - **CLS (Cumulative Layout Shift):** < 0.1 ✅

**4. Mejoras (Enhancements)**
- Ve a **"Mejoras" → "Datos estructurados"**
- Verifica que Google detecte:
  - ✅ `EducationalOrganization` (Schema.org)
  - ✅ `Course` (para páginas de cursos)
  - ✅ `Article` (para blog posts)
  - ✅ `FAQPage` (si aplica)

---

## 🐛 Solución de Problemas Comunes

### Problema 1: "Propiedad no verificada"

**Causa:** El registro TXT DNS no se ha propagado o está mal configurado

**Solución:**
1. Verifica que el registro TXT esté en la zona DNS correcta
2. Usa `nslookup -type=TXT focus-on-english.com` para comprobar
3. Espera 1-2 horas más para propagación DNS
4. Asegúrate de que no haya registros TXT duplicados

### Problema 2: "Sitemap no se puede leer"

**Causa:** Error en el formato del sitemap o URL incorrecta

**Solución:**
1. Verifica que el sitemap esté accesible:
   ```
   curl https://focus-on-english.com/sitemap.xml
   ```
2. Valida el sitemap:
   - **Herramienta:** https://www.xml-sitemaps.com/validate-xml-sitemap.html
3. Asegúrate de que el sitemap esté en formato XML válido
4. Verifica que `robots.txt` permita el acceso:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://focus-on-english.com/sitemap.xml
   ```

### Problema 3: "Muchas URLs excluidas"

**Causa:** Robots.txt bloqueando rutas o etiquetas `noindex`

**Solución:**
1. Revisa `robots.txt`:
   ```
   https://focus-on-english.com/robots.txt
   ```
2. Asegúrate de que las rutas importantes no estén bloqueadas:
   ```
   User-agent: *
   Allow: /
   Allow: /blog/
   Disallow: /api/
   Disallow: /auth/
   Disallow: /diagnostico
   Disallow: /checkout/
   ```
3. Verifica que las páginas importantes **NO** tengan:
   ```html
   <meta name="robots" content="noindex">
   ```

### Problema 4: "Core Web Vitals en rojo"

**Causa:** Rendimiento del sitio lento (imágenes pesadas, JS bloqueante, etc.)

**Solución:**
1. Optimiza imágenes:
   - Usa WebP en lugar de PNG/JPG
   - Comprime con herramientas como TinyPNG
   - Implementa lazy loading: `<img loading="lazy">`
2. Minimiza JavaScript:
   - Carga scripts de forma asíncrona: `<script async>`
   - Usa code splitting en Next.js
3. Activa caché del navegador:
   - Configura headers `Cache-Control` en Vercel
4. Usa un CDN para assets estáticos

---

## 📅 Checklist de Implementación

### Semana 1: Configuración Inicial
- [ ] Crear propiedad en Google Search Console
- [ ] Verificar dominio con registro TXT DNS
- [ ] Enviar sitemap.xml
- [ ] Asociar con Google Analytics 4
- [ ] Configurar alertas de errores

### Semana 2-4: Monitoreo y Optimización
- [ ] Revisar informe de Cobertura (arreglar errores)
- [ ] Monitorear Core Web Vitals (optimizar si es necesario)
- [ ] Verificar datos estructurados (Schema.org)
- [ ] Analizar primeras keywords en Rendimiento
- [ ] Solicitar indexación manual de artículos clave

### Mes 2-3: Crecimiento
- [ ] Analizar queries de búsqueda (qué busca la gente)
- [ ] Optimizar títulos y descripciones basándose en CTR
- [ ] Identificar oportunidades de contenido (low-hanging fruit)
- [ ] Crear contenido para keywords con alta impresión pero bajo CTR
- [ ] Configurar alertas para caídas de tráfico

---

## 🎯 KPIs de Éxito (6 meses)

| Métrica | Mes 1 | Mes 3 | Mes 6 |
|---------|-------|-------|-------|
| **URLs indexadas** | 50+ | 100+ | 150+ |
| **Impresiones/mes** | 2,000 | 10,000 | 30,000 |
| **Clics/mes** | 100 | 500 | 2,000 |
| **CTR promedio** | 3-5% | 5-7% | 7-10% |
| **Posición media** | 30-40 | 15-25 | 10-20 |
| **Keywords Top 10** | 5 | 20 | 50 |

---

## 📚 Recursos Adicionales

**Documentación oficial:**
- Google Search Console Help: https://support.google.com/webmasters
- Guía de SEO de Google: https://developers.google.com/search/docs
- Centro de Datos Estructurados: https://developers.google.com/search/docs/advanced/structured-data

**Herramientas recomendadas:**
- **Rich Results Test:** https://search.google.com/test/rich-results
- **PageSpeed Insights:** https://pagespeed.web.dev
- **Lighthouse:** https://developers.google.com/web/tools/lighthouse
- **Schema Markup Validator:** https://validator.schema.org

---

## ✅ Estado Actual de Implementación

### Completado ✅
- [x] Robots.txt corregido (URL correcta: `focus-on-english.com`)
- [x] Sitemap.xml generado dinámicamente
- [x] Schema.org Organization implementado
- [x] Schema.org Website implementado
- [x] Metadata Open Graph completa
- [x] Prioridades de sitemap optimizadas

### Pendiente ⏳
- [ ] **Verificar dominio en Google Search Console** (requiere acceso DNS)
- [ ] Enviar sitemap a Google Search Console
- [ ] Configurar Google Analytics 4 (si aún no existe)
- [ ] Asociar GA4 con Search Console
- [ ] Implementar Schema.org para páginas de cursos individuales
- [ ] Añadir Schema.org Article a posts del blog

---

**¿Necesitas ayuda?**  
Contacta con el equipo técnico si tienes problemas con:
- Acceso al panel DNS
- Verificación del dominio
- Configuración de Google Analytics
- Optimización de Core Web Vitals

---

**Última actualización:** 15 de enero de 2026  
**Autor:** Focus English - Equipo Técnico

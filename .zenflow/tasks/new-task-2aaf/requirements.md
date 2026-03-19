# PRD: Mejora del Posicionamiento en Google

## Contexto y Problema

El sitio **Focus English** (focus-on-english.com) aparece bien posicionado en Bing pero no en Google para las mismas palabras clave. Este es un patrón conocido con causas específicas y solucionables.

---

## Por qué Bing posiciona mejor que Google

### Diferencias fundamentales entre ambos buscadores

**1. Antigüedad del dominio y "Google Sandbox"**
Google aplica un período de observación a dominios nuevos (fundado en 2024 según el schema). Durante ese período limita el ranking aunque el contenido sea de calidad. Bing no tiene un sandbox equivalente y posiciona dominios nuevos con mayor facilidad.

**2. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)**
Google evalúa muy rigurosamente la autoridad para sitios de educación (clasificados como YMYL - Your Money or Your Life). Bing es menos exigente. Google necesita ver:
- Autores con perfiles verificables y credenciales reales
- Señales de autoridad externa (menciones, backlinks de calidad)
- Historial demostrable de la organización

**3. Backlinks y autoridad de dominio**
Google pondera mucho más la calidad y cantidad de backlinks entrantes. Bing da más peso al contenido de la página directamente. Sin una estrategia activa de link building, Google limita el ranking.

**4. Core Web Vitals**
Google usa Core Web Vitals (LCP, INP, CLS) como factor de ranking. Bing no tiene el mismo peso para estas métricas. Cualquier problema de rendimiento impacta en Google pero no en Bing.

**5. Señales sociales**
Bing integra directamente señales de redes sociales (LinkedIn, Facebook) para confirmar la autoridad de un dominio. El schema.org muestra que @focusonenglish existe en Instagram, TikTok y YouTube, pero estas plataformas tienen menos peso para Google que para Bing.

**6. Helpful Content Update de Google**
Google desde 2022-2024 penaliza contenido percibido como generado principalmente para SEO o con AI sin valor añadido real. Bing no tiene esta restricción tan agresiva.

---

## Problemas Técnicos Identificados en el Código

### Críticos

**1. Falta de imagen OG real**
- En `/public/` solo existe `og-image-placeholder.txt`, no un `og-image.jpg` real
- El schema de artículos en `schema.tsx` referencia `https://www.focus-on-english.com/og-image.jpg` que no existe
- Las imágenes OG usan URLs externas de Pexels en lugar de assets propios

**2. Ausencia de `logo.png`**
- El schema `OrganizationSchema` referencia `https://www.focus-on-english.com/logo.png`
- Este archivo no existe en `/public/`, lo que invalida el structured data para Google

**3. Canonical tags inconsistentes**
- De 89 páginas existentes, solo 16 tienen canonical URL declarada
- Las páginas sin canonical crean riesgo de contenido duplicado para Google

**4. Robots.ts bloquea contenido valioso**
- El archivo robots deniega el acceso a `/curso-a1/`, `/curso-a2/`, `/curso-b1/`, `/curso-b2/`, `/curso/`
- Google no puede indexar las páginas de los cursos, que son el producto principal y contenido de alta autoridad
- Estas páginas bloqueadas contienen los esquemas `CourseSchema` que no llegan a Google

**5. La imagen social de `OrganizationSchema`**
- El campo `sameAs` en el schema apunta a perfiles sociales, pero Google necesita verificar que esas páginas efectivamente referencian de vuelta al dominio

### Moderados

**6. Ausencia de hreflang**
- El sitio está en español pero el dominio es en inglés (focus-on-english.com)
- Sin `hreflang="es"` y `hreflang="es-ES"` declarados, Google puede interpretar el idioma objetivo de forma incorrecta

**7. Imágenes de blog externas**
- Las imágenes del blog usan Pexels CDN externo; Google prefiere assets propios para asegurar disponibilidad permanente y mejor señal de control del contenido

---

## Objetivos del Proyecto

### Objetivo Principal
Corregir los problemas técnicos y estratégicos que impiden a Google posicionar el sitio al mismo nivel que Bing, priorizando las acciones de mayor impacto.

### Objetivos Específicos

1. **Corregir errores de structured data**: Crear los assets faltantes (`logo.png`, `og-image.jpg`) y validar todos los schemas en Google Rich Results Test
2. **Aplicar canonical URLs en todas las páginas**: Garantizar que las 89 páginas del sitio tengan canonical declarado correctamente
3. **Revisar la política de robots**: Evaluar qué páginas de cursos deben ser indexables y ajustar robots.ts
4. **Mejorar señales E-E-A-T**: Reforzar los perfiles de autores, añadir credenciales verificables y páginas "Sobre nosotros" con información institucional clara
5. **Estrategia de backlinks**: Identificar oportunidades de link building relevante (medios educativos, directorios de academias en España)
6. **Core Web Vitals**: Verificar métricas actuales en Google Search Console y resolver cualquier issue de LCP/CLS/INP

---

## Usuarios y Casos de Uso

### Usuario Objetivo
Administrador/propietario del sitio que quiere que las páginas del sitio aparezcan en resultados de Google para términos como:
- "cursos de inglés online España"
- "preparación Cambridge B2"
- "aprender inglés online"

### Caso de Uso Principal
Un hispanohablante en España busca cursos de inglés en Google y el sitio aparece en la primera página de resultados (actualmente aparece en Bing pero no en Google para las mismas búsquedas).

---

## Métricas de Éxito

- Las páginas clave aparecen en las primeras 3 páginas de Google para palabras clave objetivo
- Google Search Console no muestra errores de structured data
- Coverage en Google: >90% de las URLs del sitemap son indexadas correctamente
- Core Web Vitals en verde para las páginas principales
- Incremento de tráfico orgánico desde Google en 3-6 meses

---

## Restricciones y Asunciones

- **Restricción**: El Google Sandbox para dominios nuevos es temporal y no controlable técnicamente; se resolverá con el tiempo y con consistencia de contenido de calidad
- **Asunción**: El sitio genera contenido original y de valor, no penalizado por el Helpful Content Update
- **Asunción**: Los cursos bloqueados en robots.ts están bloqueados intencionalmente para usuarios no autenticados, pero podría ser conveniente tener landing pages de marketing indexables para cada curso

---

## Priorización de Acciones

| Prioridad | Acción | Impacto | Esfuerzo |
|-----------|--------|---------|---------|
| P0 | Crear `logo.png` y `og-image.jpg` reales | Alto | Bajo |
| P0 | Aplicar canonical URLs en todas las páginas | Alto | Medio |
| P1 | Revisar robots.ts para desbloquear páginas de cursos | Alto | Bajo |
| P1 | Añadir hreflang `es` y `es-ES` en layout | Medio | Bajo |
| P2 | Reforzar perfiles de autores (E-E-A-T) | Alto | Alto |
| P2 | Estrategia activa de backlinks | Alto | Alto |
| P3 | Core Web Vitals audit y corrección | Medio | Medio |

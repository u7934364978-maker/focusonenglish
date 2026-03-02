# Spec and build

## Configuration
- **Artifacts Path**: `.zenflow/tasks/new-task-8769`

---

## Agent Instructions

Ask the user questions when anything is unclear or needs their input. This includes:
- Ambiguous or incomplete requirements
- Technical decisions that affect architecture or user experience
- Trade-offs that require business context

Do not make assumptions on important decisions — get clarification first.

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Technical Specification

Full spec saved to `.zenflow/tasks/new-task-8769/spec.md`.

**Root cause identified**: 15 artículos en `src/content/blog/gramatica/` tienen `category: metodos` en el frontmatter. El sistema genera URLs en `/blog/metodos/[slug]` pero las canonicals apuntan a `/blog/gramatica/[slug]` (404). Google desindexó todos esos artículos.

**Complejidad**: Hard (múltiples causas combinadas: canonical→404, canibalización, performance)

---

### [x] Step: Fix Category Frontmatter en carpeta gramatica (CRÍTICO)
<!-- chat-id: ac8b520d-2324-463f-a819-89c747ea9f18 -->

Corregir los 15 archivos `.md` en `src/content/blog/gramatica/` que tienen `category: metodos` incorrecto.

- Cambiar `category: metodos` → `category: gramatica` en todos los archivos de la carpeta `gramatica/`
- Archivos afectados:
  - `condicionales-ingles-guia-completa.md`
  - `gramatica-ingles-b1-guia.md`
  - `guia-maestra-reported-speech.md`
  - `passive-reporting-verbs-guia-avanzada.md`
  - `phrasal-verbs-guia-b2.md`
  - `preposiciones-movimiento-ingles.md`
  - `present-perfect-vs-past-simple.md`
  - `relative-clauses-guia-definitiva.md`
  - `reported-speech-ejercicios-pdf.md`
  - `reported-speech-guia-uso.md`
  - `reported-speech-questions-commands.md`
  - `reporting-verbs-patterns-list.md`
  - `verbos-modales-ingles-guia.md`
  - `voz-pasiva-avanzada-guia.md`
  - `voz-pasiva-ingles-guia.md`
- Verificar que las canonicals en frontmatter ya apunten a `/blog/gramatica/[slug]` (correcto tras el fix)
- Run: `npm run build` para confirmar que las rutas `/blog/gramatica/[slug]` se generan
- Run: `npm run lint`

---

### [x] Step: Fix Canibalización de Keywords — Apps
<!-- chat-id: 8f5fc74b-1f8c-4d7b-bf3f-2cfdcd10a4a4 -->

Reducir canibalización entre artículos de apps para aprender inglés:

- `src/content/blog/metodos/apps-ingles-gratuitas-vs-pago.md`:
  - Eliminar keywords duplicadas con `apps-vs-cursos-ingles.md`
  - Dejar solo keywords de intención "gratis vs pago": `apps para aprender ingles gratis`, `duolingo gratis vs premium`
- `src/content/blog/metodos/apps-vs-cursos-ingles.md`:
  - Eliminar keywords duplicadas
  - Dejar solo keywords de intención "academia vs app": `academia ingles online vs app`, `aprender ingles C1`, `mejor metodo ingles`
  - Añadir `canonical` explícito si no tiene
- Verificar que `mejor-app-aprender-ingles.md` sea el artículo más fuerte con las keywords principales
- Run: `npm run lint`

---

### [ ] Step: Fix robots.ts — Añadir Allows Explícitos

Ampliar `src/app/robots.ts` para incluir explícitamente las páginas SEO importantes:

- Añadir al array `allow`: `/aprender-ingles`, `/aplicaciones-para-aprender-ingles`, `/certificaciones-ingles-oficiales`, `/frases-en-ingles/`, `/planes`, `/test-nivel`, `/contacto`, `/herramientas/`
- Verificar que el robots.txt generado en producción no bloquee ninguna página indexable
- Run: `npm run build` y verificar `/robots.txt`

---

### [ ] Step: Fix layout.tsx — Eliminar setInterval Bloqueante

Mejorar performance eliminando código problemático en `src/app/layout.tsx`:

- Eliminar el bloque `setInterval` con `checkDevTools` (ejecuta `console.clear()` cada 1 segundo)
- Mantener las otras protecciones básicas si el cliente lo requiere (contextmenu, atajos de teclado)
- Verificar que la página sigue funcionando correctamente
- Run: `npm run build` y `npm run lint`

---

### [ ] Step: Reporte Final

Escribir `{@artifacts_path}/report.md` con:
- Resumen de todos los cambios realizados
- Diagnóstico de causa raíz confirmado
- Cambios en código con referencias a archivos
- Pasos de verificación completados
- Próximos pasos recomendados (resubmit sitemap en GSC, monitoreo 4-8 semanas)

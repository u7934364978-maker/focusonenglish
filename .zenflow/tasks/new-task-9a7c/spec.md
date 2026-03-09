# Technical Specification: Relleno de Clusters del Blog

## Contexto técnico

- **Framework**: Next.js (TypeScript)
- **Contenido**: Archivos `.md` con frontmatter YAML en `src/content/blog/{categoria}/` y `src/content/hubs/`
- **Lógica de vinculación**: `getArticlesByKeyword(hubSlug)` en `src/lib/blog.ts` filtra artículos comparando `slugify(keyword) === slugify(hubSlug)` para cada keyword del artículo
- **Función `slugify`**: convierte texto a slug (minúsculas, sin acentos, espacios → `-`, solo alfanumérico y `-`)

## Alcance del trabajo

La tarea tiene **dos partes**:

### Parte 1 — Quick wins: Corrección de tagging (4 hubs)

No se necesita nuevo código. Solo editar el frontmatter de 11 artículos existentes para añadir la keyword exacta del hub.

**Regla**: para que un artículo aparezca en el hub `{slug}.md`, debe tener en su lista `keywords` alguna string cuyo `slugify()` sea igual a `{slug}`.

#### Hub `phrasal-verbs` — añadir keyword `phrasal verbs`

| Archivo | Ruta |
|---------|------|
| `phrasal-verbs-trabajo.md` | `src/content/blog/gramatica/` |
| `phrasal-verbs-with-put.md` | `src/content/blog/gramatica/` |
| `phrasal-verbs-principiantes.md` | `src/content/blog/gramatica/` |
| `phrasal-verbs-with-get.md` | `src/content/blog/gramatica/` |
| `phrasal-verbs-c1-avanzados.md` | `src/content/blog/gramatica/` |
| `phrasal-verbs-guia-b2.md` | `src/content/blog/gramatica/` |

> Nota: estos artículos ya tienen `phrasal verbs ingles` que slugifica a `phrasal-verbs-ingles` — no coincide con `phrasal-verbs`. Hay que añadir `phrasal verbs` (sin "ingles").

#### Hub `reported-speech` — añadir keyword `reported speech`

| Archivo | Ruta |
|---------|------|
| `reported-speech-cambridge-exams.md` | `src/content/blog/examenes/` |
| `reported-speech-ejercicios-pdf.md` | `src/content/blog/gramatica/` |
| `guia-maestra-reported-speech.md` | `src/content/blog/gramatica/` |
| `reported-speech-guia-uso.md` | `src/content/blog/gramatica/` |
| `reported-speech-questions-commands.md` | `src/content/blog/gramatica/` |

#### Hub `voz-pasiva-ingles` — añadir keyword `voz pasiva ingles`

| Archivo | Ruta |
|---------|------|
| `voz-pasiva-ingles-guia.md` | `src/content/blog/gramatica/` |
| `voz-pasiva-avanzada-guia.md` | `src/content/blog/gramatica/` |

#### Hub `present-perfect-vs-past-simple` — añadir keyword `present perfect vs past simple`

| Archivo | Ruta |
|---------|------|
| `present-perfect-vs-past-simple.md` | `src/content/blog/gramatica/` |

### Parte 2 — Estrategia de nuevos artículos (22 hubs vacíos + 18 escasos)

Esta parte es trabajo de contenido, no de código. La especificación define el orden de prioridad para guiar la creación de artículos.

#### Prioridad ALTA — Hubs vacíos con alta intención de búsqueda

1. `cv-ingles` → 1 artículo en `trabajo/` sobre cómo redactar un CV en inglés
2. `entrevista-trabajo-ingles` → 2-3 artículos en `trabajo/` (preguntas frecuentes, preparación, frases clave)
3. `pronunciacion-ingles-guia-completa` → 2 artículos en `gramatica/` o `metodos/`
4. `fonetica-inglesa-basica` → 2 artículos en `gramatica/`
5. `ingles-americano-vs-britanico` → 1-2 artículos en `metodos/`
6. `ingles-juridico-legal` → 1 artículo en `trabajo/`
7. `ingles-para-marketing` → 1-2 artículos en `trabajo/`

#### Prioridad MEDIA — Hubs vacíos temáticos

8. `mejores-apps-ingles-gratis` → 1 artículo en `metodos/`
9. `mejores-peliculas-series-ingles` → 1 artículo en `metodos/`
10. `mejores-libros-aprender-ingles` → 1 artículo en `metodos/`
11. `aprender-ingles-con-chatgpt` → 1 artículo en `metodos/`
12. `ingles-para-compras` → 1 artículo en `viajes/`
13. `ingles-para-deportes` → 1 artículo en `metodos/`
14. `mudarse-al-extranjero-guia-ingles` → 1 artículo en `viajes/`
15. `ingles-en-la-cocina` → 1 artículo en `viajes/`
16. `ingles-universitario-academico` → 1 artículo en `examenes/`
17. `guia-erasmus-estudios-extranjero` → 1 artículo en `metodos/`
18. `becas-solicitudes-ingles` → 1 artículo en `examenes/`
19. `acentos-ingles-diferencias` → 1 artículo en `metodos/`
20. `ingles-para-ligar-y-citas` → 1 artículo en `metodos/`
21. `ingles-para-camareros-y-hosteleria` → 1 artículo en `viajes/trabajo`
22. `ingles-real-estate-inmobiliario` → 1 artículo en `trabajo/`
23. `ingles-universitario-academico` → 1 artículo en `examenes/`

#### Prioridad MEDIA — Hubs con 1-2 artículos (ampliar a 3+)

Orden por potencial SEO:

1. `emails-profesionales-ingles` (1 art.) → 2 más en `trabajo/`
2. `entrevista-de-trabajo-en-ingles` (1 art.) → 2 más en `trabajo/`
3. `job-interview-english` (2 art.) → 1-2 más en `trabajo/`
4. `presentaciones-en-ingles` (2 art.) → 1-2 más en `trabajo/`
5. `verbos-modales-ingles` (1 art.) → 2 más en `gramatica/`
6. `ejercicios-condicionales-ingles` (1 art.) → 2 más en `gramatica/`
7. `niveles-ingles-mcer` (2 art.) → 1-2 más en `metodos/`
8. `fluidez-ingles-avanzado` (1 art.) → 2 más en `metodos/`
9. `slang-in-english` (1 art.) → 2 más en `metodos/`
10. `ingles-para-viajar` (2 art.) → 1-2 más en `viajes/`
11. `ingles-medico` (1 art.) → 2 más en `trabajo/`
12. `ingles-para-ingenieros` (1 art.) → 2 más en `trabajo/`
13. `ingles-para-atencion-al-cliente` (1 art.) → 2 más en `trabajo/`
14. `cambridge-english-2026` (1 art.) → 2 más en `examenes/`
15. `aptis-general-b1` (1 art.) → 2 más en `examenes/`
16. `ielts-vs-toefl-2026` (1 art.) → 2 más en `examenes/`
17. `ingles-moderno-internet` (1 art.) → 2 más en `metodos/`
18. `cultura-anglosajona` (1 art.) → 2 más en `metodos/`

## Convención para nuevos artículos

Cada artículo nuevo debe incluir en su frontmatter exactamente la keyword del hub al que pertenece:

```yaml
keywords:
  - {hub-slug con espacios en lugar de guiones}
  - ... otras keywords específicas del artículo
```

Ejemplo para hub `cv-ingles`:
```yaml
keywords:
  - cv ingles
  - como hacer un cv en ingles
  - curriculum vitae en ingles
  - plantilla cv ingles
```

## Cambios en código

**Ninguno**. La lógica de `getArticlesByKeyword` en `src/lib/blog.ts` ya funciona correctamente. Solo se editan archivos de contenido (`.md`).

## Fases de entrega

### Fase 1 — Tagging fixes (inmediato, alto impacto)
- Editar los 11 artículos existentes con la keyword faltante del hub
- **Verificación**: ejecutar `node -e "const {getArticlesByKeyword} = require('./src/lib/blog'); console.log(getArticlesByKeyword('phrasal-verbs').map(a=>a.slug))"` o similar para confirmar artículos aparecen

### Fase 2 — Nuevos artículos prioridad ALTA
- Crear 8-12 artículos para los hubs vacíos de alta intención de búsqueda (trabajo, gramática)

### Fase 3 — Nuevos artículos prioridad MEDIA
- Completar los hubs temáticos vacíos restantes y ampliar los hubs escasos

## Verificación

- `npm run lint` — verificar que los archivos .md no rompan el build
- `npm run build` — confirmar que la aplicación compila correctamente tras los cambios
- Revisión manual de las páginas hub en el navegador para confirmar que los artículos aparecen listados

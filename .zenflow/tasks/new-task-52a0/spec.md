# Technical Specification: 30 Cluster Articles for 3 Pronunciation/Phonetics Hubs

## Technical Context

- **Framework**: Next.js (static content rendered from Markdown files)
- **Content format**: Markdown with YAML frontmatter
- **Content location**: `src/content/blog/{category}/` (articles) and `src/content/hubs/` (hubs)
- **No build commands needed**: pure content creation — no code changes, no tests required
- **No new dependencies**: existing Next.js content pipeline processes `.md` files automatically

---

## Frontmatter Schema

### Blog articles (cluster) — required fields (based on `fonetica-inglesa-basica.md`, `reglas-pronunciacion-ingles.md`)

```yaml
---
title: '...'
description: >-
  ...
readTime: X min
excerpt: >-
  ...
keywords:
  - keyword1
  - keyword2
author: sara-mendez | david-torres
date: 'YYYY-MM-DD'
updatedDate: 'YYYY-MM-DD'
image: 'https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg'
category: gramatica | metodos
faqs:
  - question: '...'
    answer: '...'
---
```

### Hub files — required fields (based on existing hubs)

```yaml
---
title: '...'
description: >-
  ...
---
```

Hubs do NOT include readTime, excerpt, keywords, author, date, image, or faqs.

---

## Article Structure Pattern

Each cluster article follows this structure:
1. Introductory paragraph (no H1 — title comes from frontmatter)
2. `---` separator after intro
3. Sections with `##` and `###` headers
4. Tables where relevant (IPA charts, comparisons, examples)
5. Practical examples with English words + IPA notation when applicable
6. `---` separator before FAQs
7. FAQs section using `###` for each question

**Tone guidelines** (derived from existing articles):
- Conversational, direct — uses "tú" register
- Specific English examples with IPA symbols
- Avoids AI-style lists like "En primer lugar, en segundo lugar, en conclusión"
- Varies sentence length; mixes short punchy sentences with longer explanations
- Can use personal perspective ("he comprobado que…", "lo que me sorprende es…")
- Mentions "Focus English" naturally, not repetitively
- No mention of article word count

---

## Hub Update Pattern

Reference: `mejores-apps-ingles-gratis.md` — section "📚 Profundiza más"

Each hub needs a final section added:

```markdown
## 📚 Profundiza más

- [Article title](/blog/category/slug)
- [Article title](/blog/category/slug)
...
```

Existing orphan articles must also be linked in their respective hubs.

---

## Files to Create

### Hub 1: `fonetica-inglesa-basica` (9 new articles)

| File | Author | Date |
|------|--------|------|
| `src/content/blog/gramatica/schwa-ingles-sonido-clave.md` | david-torres | 2026-02-05 |
| `src/content/blog/gramatica/vocales-cortas-largas-ingles.md` | sara-mendez | 2026-02-08 |
| `src/content/blog/gramatica/consonantes-th-ingles.md` | david-torres | 2026-02-11 |
| `src/content/blog/gramatica/diptongos-ingles-lista-completa.md` | sara-mendez | 2026-02-14 |
| `src/content/blog/gramatica/word-stress-ingles-reglas.md` | david-torres | 2026-02-17 |
| `src/content/blog/gramatica/pares-minimos-ingles.md` | sara-mendez | 2026-02-20 |
| `src/content/blog/gramatica/letras-mudas-ingles-lista.md` | david-torres | 2026-02-23 |
| `src/content/blog/gramatica/ipa-ingles-como-leer.md` | sara-mendez | 2026-02-26 |
| `src/content/blog/gramatica/silabas-ingles-division.md` | david-torres | 2026-03-01 |

### Hub 2: `pronunciacion-ingles-guia-completa` (9 new articles)

| File | Author | Date |
|------|--------|------|
| `src/content/blog/gramatica/connected-speech-ingles.md` | sara-mendez | 2026-02-04 |
| `src/content/blog/gramatica/entonacion-ingles.md` | david-torres | 2026-02-07 |
| `src/content/blog/gramatica/ritmo-ingles-stress-timed.md` | sara-mendez | 2026-02-10 |
| `src/content/blog/metodos/shadowing-tecnica-ingles.md` | david-torres | 2026-02-13 |
| `src/content/blog/gramatica/reduccion-vocales-ingles.md` | sara-mendez | 2026-02-16 |
| `src/content/blog/metodos/ejercicios-pronunciacion-ingles.md` | david-torres | 2026-02-19 |
| `src/content/blog/gramatica/pronunciacion-r-ingles.md` | sara-mendez | 2026-02-22 |
| `src/content/blog/metodos/como-mejorar-acento-ingles.md` | david-torres | 2026-02-25 |
| `src/content/blog/gramatica/pronunciacion-terminaciones-ingles.md` | sara-mendez | 2026-02-28 |

### Hub 3: `acentos-ingles-diferencias` (10 new articles)

| File | Author | Date |
|------|--------|------|
| `src/content/blog/metodos/ingles-britanico-acentos-regionales.md` | david-torres | 2026-02-03 |
| `src/content/blog/metodos/general-american-acento.md` | sara-mendez | 2026-02-06 |
| `src/content/blog/metodos/acento-ingles-australiano.md` | david-torres | 2026-02-09 |
| `src/content/blog/metodos/acento-ingles-irlandes.md` | sara-mendez | 2026-02-12 |
| `src/content/blog/metodos/cockney-acento-ingles.md` | david-torres | 2026-02-15 |
| `src/content/blog/metodos/ingles-escoces-caracteristicas.md` | sara-mendez | 2026-02-18 |
| `src/content/blog/metodos/acento-ingles-sudafricano.md` | david-torres | 2026-02-21 |
| `src/content/blog/metodos/acento-canadiense-ingles.md` | sara-mendez | 2026-02-24 |
| `src/content/blog/metodos/como-entender-acentos-ingles.md` | david-torres | 2026-02-27 |
| `src/content/blog/metodos/ingles-lingua-franca-acentos.md` | sara-mendez | 2026-03-02 |

---

## Files to Modify (Hubs)

### `src/content/hubs/fonetica-inglesa-basica.md`
Add a "Profundiza más" section linking to the existing cluster article + 9 new ones:
- `/blog/gramatica/fonetica-inglesa-basica` (existing)
- 9 new articles listed above

### `src/content/hubs/pronunciacion-ingles-guia-completa.md`
Add a "Profundiza más" section linking to:
- `/blog/gramatica/pronunciacion-ingles-guia-completa` (existing)
- `/blog/metodos/reglas-pronunciacion-ingles` (orphan → adopt)
- 9 new articles listed above

### `src/content/hubs/acentos-ingles-diferencias.md`
Add a "Profundiza más" section linking to:
- `/blog/metodos/acentos-ingles-diferencias` (orphan → adopt)
- 10 new articles listed above

---

## Interlinking Strategy

Each article must include:
1. A link back to its hub (using the hub's URL path, e.g., `/hubs/fonetica-inglesa-basica`)
2. 1–2 links to related cluster articles within the same hub when contextually appropriate

---

## Pexels Image IDs (suggested by topic)

Use real Pexels photo URLs. Examples by topic:
- Phonetics/IPA: `https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg`
- Speaking/mouth: `https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg`
- British flag/UK: `https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg`
- USA/American: `https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg`
- Australia: `https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg`
- Microphone/speaking: `https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg`
- Books/study: `https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg`
- Classroom: `https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg`

Each article should use a contextually relevant image URL. Different articles should ideally use different image IDs.

---

## Delivery Phases

### Phase 1 — Hub 1: fonetica-inglesa-basica (9 articles + hub update)
Create 9 cluster articles and update `fonetica-inglesa-basica.md` hub.

### Phase 2 — Hub 2: pronunciacion-ingles-guia-completa (9 articles + hub update)
Create 9 cluster articles and update `pronunciacion-ingles-guia-completa.md` hub (including orphan link).

### Phase 3 — Hub 3: acentos-ingles-diferencias (10 articles + hub update)
Create 10 cluster articles and update `acentos-ingles-diferencias.md` hub (including orphan link).

---

## Verification

- No build/lint/test commands needed — purely content files
- Manual verification checklist per article:
  - [ ] Frontmatter complete (all required fields present)
  - [ ] ~1500 words (count without frontmatter)
  - [ ] Link to hub present in body
  - [ ] No mention of word count in body
  - [ ] No "En primer lugar / en segundo lugar / en conclusión" patterns
  - [ ] IPA symbols used where relevant
  - [ ] FAQs: 2–4 entries, realistic questions
- Manual verification checklist per hub:
  - [ ] "Profundiza más" section added
  - [ ] All cluster articles linked (existing + new + orphans where applicable)

# Technical Specification - 10 Educational Blog Articles

## Technical Context
- **Language**: Markdown / YAML
- **Platform**: Next.js (App Router)
- **Directory Structure**: 
  - `src/content/blog/viajes/` for travel articles.
  - `src/content/blog/trabajo/` for work-related articles.
- **Dependencies**: The project uses `gray-matter` for parsing frontmatter and `react-markdown` for rendering.

## Implementation Approach
1. **Article Identification**: Define 10 unique topics (5 travel, 5 work) that naturally incorporate the keyword "clases de inglés".
2. **SEO Optimization**: Each article will include a specific keyword list and meta-description in the `excerpt` field.
3. **Consistency**: Use the established `Focus English Team` author and 2026-02-01 date for all articles.

## Content Plan

### Travel (viajes)
1. `como-preparar-ingles-viaje-largo.md`: Tips for long-term travelers.
2. `ingles-aeropuertos-checklist.md`: Comprehensive airport communication guide.
3. `supervivencia-ingles-transporte-publico.md`: Navigating transport in English-speaking cities.
4. `frases-ingles-emergencias-viajes.md`: Critical phrases for unexpected situations.
5. `cultura-y-etiqueta-paises-anglosajones.md`: Beyond language: social norms for travelers.

### Work (trabajo)
1. `ingles-entrevistas-remotas-exito.md`: Preparing for international remote job interviews.
2. `redaccion-emails-profesionales-ingles.md`: Standard templates and etiquette for corporate emails.
3. `ingles-presentaciones-impacto.md`: Key vocabulary for business presentations.
4. `negociacion-ingles-tecnicas-clave.md`: How to negotiate terms and salaries in English.
5. `ingles-networking-eventos-internacionales.md`: Mastering small talk and professional connections.

## Delivery Phases
- **Phase 1**: Travel articles (5 files).
- **Phase 2**: Work articles (5 files).

## Verification
- Run `npm run audit-blog-seo` (if available/applicable based on file list) to ensure metadata consistency.
- Manual check of keyword density for "clases de inglés".

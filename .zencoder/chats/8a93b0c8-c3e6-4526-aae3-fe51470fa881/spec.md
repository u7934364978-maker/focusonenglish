# Technical Specification - Academic Content Expansion

## Technical Context
- **Framework**: Next.js 15 (App Router).
- **Content**: Markdown files in `src/content/blog/`.
- **Styling**: Tailwind CSS.
- **Rendering**: `react-markdown` with `remark-gfm` for tables.

## Implementation Approach
- **Markdown Files**: Each article is a `.md` file with YAML Frontmatter.
- **Downloadable Material**: We will implement a specific Markdown structure at the end of each article that is optimized for printing.
- **SEO Optimization**: Use `keywords` and `description` fields in Frontmatter. Integrate keywords naturally in headers and body text.
- **Cambridge Tone**: Use professional academic vocabulary and clear structure.

## Source Code Structure Changes
- Modify existing files in `src/content/blog/metodos/`.
- Create new files in `src/content/blog/metodos/` and `src/content/blog/trabajo/`.

## Articles to be Modified
1. `src/content/blog/metodos/phrasal-verbs-guia-b2.md`
2. `src/content/blog/metodos/present-perfect-vs-past-simple.md`
3. `src/content/blog/metodos/verbos-modales-ingles-guia.md`
4. `src/content/blog/metodos/preposiciones-movimiento-ingles.md`
5. `src/content/blog/metodos/voz-pasiva-ingles-guia.md`
6. `src/content/blog/metodos/reglas-pronunciacion-ingles.md`
7. `src/content/blog/metodos/vocabulario-ropa-ingles.md`

## New Articles to be Created
1. `src/content/blog/metodos/condicionales-ingles-guia-completa.md`
2. `src/content/blog/metodos/reported-speech-guia-uso.md`
3. `src/content/blog/metodos/voz-pasiva-avanzada-guia.md`
4. `src/content/blog/metodos/relative-clauses-guia-definitiva.md`
5. `src/content/blog/trabajo/vocabulario-negocios-ingles-profesional.md`

## Delivery Phases
1. **Phase 1: Existing Articles Expansion**: Update the 7 existing articles with more content and lists.
2. **Phase 2: New Articles Creation**: Implement the 5 new topics.
3. **Phase 3: Final SEO Audit**: Ensure all keywords are correctly placed.

## Verification Approach
- **Linting**: Run `npm run lint` if available.
- **Manual Review**: Check Markdown rendering (tables, headers).
- **SEO Validation**: Verify Frontmatter keywords.

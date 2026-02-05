# Technical Specification: SEO Optimization for "cv en ingles ejemplos"

## Technical Context
- **Framework**: Next.js 15 (App Router)
- **Content**: Markdown files in `src/content/blog/`
- **Current File**: `src/content/blog/trabajo/cv-ingles-guia.md`

## Analysis of Current Status
The website is currently on page 8 for the query "cv en ingles ejemplos" because:
1. **Intent Gap**: The article is a text-heavy guide. Users searching for "ejemplos" expect visual templates or copy-paste examples.
2. **Missing Specifics**: While it mentions sections, it doesn't provide full CV examples (e.g., for a waiter, an engineer, a student).
3. **Keyword Density**: The exact phrase "ejemplos de cv en inglés" is not used prominently in headings.
4. **Time Factor**: The article was published very recently (Jan 30, 2026). Google needs time to crawl, index, and assess the "dwell time" of users on the page.

## Implementation Approach
1. **Add visual examples**: Create 3 distinct CV examples within the markdown file using tables or clear sections.
2. **Add downloadable templates**: Link to PDF/Word versions of these examples (mock links for now or actual files if available).
3. **Keyword Optimization**: 
   - Rename H1 to lead with target keywords.
   - Add an H2 specifically named "Ejemplos de CV en inglés por perfiles".
4. **Enhance Metadata**: 
   - Update `keywords` in the frontmatter.
   - Improve the `excerpt` to include "ejemplos listos para descargar".

## Source Code Structure Changes
- Modify `src/content/blog/trabajo/cv-ingles-guia.md`.

## Verification Approach
- Check the page locally to ensure the new sections look good.
- Run `npm run lint` to ensure markdown/code integrity.
- Use a local SEO analyzer (if available) or manual check of meta tags.

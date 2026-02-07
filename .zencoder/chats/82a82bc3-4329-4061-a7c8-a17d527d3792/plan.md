# Plan - SEO Image Error Fixes

## Implementation Tasks

### 1. Fix Local OG Image (400 Error)
- [x] Read `public/blog/og-image.jpg` content to confirm it's SVG (Done during investigation)
- [x] Convert `public/blog/og-image.jpg` (SVG) to a real JPEG (1200x630) using `magick`
- [x] Verify the file is now a JPEG: `file public/blog/og-image.jpg`

### 2. Fix Broken Pexels Images (404 Error)
- [x] Update `src/content/blog/metodos/voz-pasiva-ingles-guia.md`: Replace broken Pexels image `5943714` with a valid alternative.
- [x] Update `src/content/blog/metodos/voz-pasiva-avanzada-guia.md`: Replace broken Pexels image `5943714` with a valid alternative.
- [x] Update `src/content/blog/examenes/guia-b2-first-fce.md`: Replace broken Pexels image `3762224` with a valid alternative.
- [x] Search for other occurrences of these IDs or other Pexels 404s if any.

### 3. Verification
- [x] Check if images are referenced correctly in the markdown files.
- [ ] Run `npm run build` (optional but recommended if possible).
- [x] Final check of the affected URLs if a local dev server can be started (or just trust the file fixes).

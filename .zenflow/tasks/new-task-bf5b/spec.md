# Technical Specification: Fix 404 Errors

## Difficulty: easy

## Technical Context
- **Framework**: Next.js 15 App Router (TypeScript)
- **Routing**: File-based routing in `src/app/`
- **Redirects**: Configured in `next.config.js` via `async redirects()`
- **Blog topics**: Dynamic route at `/blog/temas/[keyword]` reads hub files and article keywords

## Root Causes of 404 Errors

### 1. `/blog/temas/[keyword]` (majority of 404s)
The page calls `notFound()` when no articles or hub content match the keyword. Many keywords requested by users/crawlers don't have corresponding hub files or article keywords.

### 2. `/ads.txt`
Missing file in `public/`. Crawlers and monitoring tools regularly check for this.

### 3. `/favicon.ico` and `/logo.png`
Static assets not present in `public/`. Next.js serves `icon.svg` via App Router but not as `favicon.ico`.

### 4. Specific missing pages/old URLs
- `/proximamente`, `/about` - old pages no longer exist
- `/.well-known/apple-app-site-association`, `/apple-app-site-association` - Apple app association files not needed
- `/blog/pronunciacion`, `/blog/Gramática` - old blog category URLs
- `/blog/ingles-profesional-sectores`, `/blog/preparar-examenes-oficiales`, `/blog/ingles-esencial-viajar` - old blog posts
- `/blog/tiempos-verbales-ingles-a1-presente`, `/blog/vocabulario-esencial-ingles-a1-principiantes`, `/blog/gramatica-basica-ingles-a1-principiantes` - moved/deleted posts

## Implementation Approach

### Files Modified
1. `src/app/blog/temas/[keyword]/page.tsx` - Change `notFound()` → `redirect('/blog')` for missing keywords
2. `next.config.js` - Add 301 redirects for all specific missing URLs
3. `public/ads.txt` - Create minimal ads.txt file

### Changes
- **`/blog/temas/[keyword]`**: Replace `notFound()` with `redirect('/blog')` so crawlers and users get a proper 301 redirect to the blog index instead of a 404
- **`/ads.txt`**: Create empty `public/ads.txt` (serves the file, stops 404)
- **Redirects**: Add 14 new 301 redirects in `next.config.js` for specific missing pages

## Verification
- Deploy and verify no more 404s for the listed URLs
- Confirm `/blog/temas/unknown-keyword` redirects to `/blog` (302 from Next.js `redirect()`)
- Confirm `/ads.txt` returns 200

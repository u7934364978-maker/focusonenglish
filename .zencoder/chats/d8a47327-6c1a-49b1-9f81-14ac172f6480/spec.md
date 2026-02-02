# Technical Specification - URL Removal for SEO Optimization

## 1. Technical Context
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Routing**: `src/app` directory
- **Configuration**: `next.config.js` for redirects

## 2. Implementation Approach

### 2.1 File System Changes
- Delete `src/app/cursos` directory and all its contents.
    - This covers `/cursos`, `/cursos/trabajo`, `/cursos/viajes`, `/cursos/examenes`, and their sub-paths.
- Delete `src/app/diagnostico` (if it exists, though it wasn't found in previous `find`, I should double check or just rely on redirect removal).
- Note: `src/app/test-nivel` should REMAIN as it is the current successor for `/diagnostico`.

### 2.2 Redirect Implementation (`next.config.js`)
- Remove the following redirects from `async redirects()`:
    - `/diagnostico` -> `/test-nivel` (Change to `/` if `/diagnostico` is to be eliminated completely, but better to keep redirecting to `/test-nivel` if it's the same content. Wait, user wants to "eliminate" it. If I redirect it to home, it's safer for SEO).
    - `/trabajo/:nivel` -> `/cursos/trabajo/:nivel`
    - `/viajes/:nivel` -> `/cursos/viajes/:nivel`
    - `/examenes/:nivel` -> `/cursos/examenes/:nivel`
    - `/certificaciones` -> `/cursos`
- Add new "Elimination" redirects (301):
    - `/cursos/:path*` -> `/`
    - `/diagnostico` -> `/`
    - `/cursos-especializados` -> `/`

### 2.3 Sitemap and Robots.txt
- **`src/app/sitemap.ts`**:
    - Remove hardcoded URLs for `/cursos`, `/cursos/trabajo`, `/cursos/viajes`, `/cursos/examenes`.
    - Remove the `courseUrls` array elements that point to `/cursos/*`.
    - Keep `/curso/ingles-*` as they seem to be the actual course pages.
- **`src/app/robots.ts`**:
    - Remove `/cursos/` from the `allow` list.

### 2.4 Navigation Update
- **`src/components/sections/Navigation.tsx`**:
    - Remove the "Cursos" dropdown menu.
    - Replace or remove links to `/cursos`, `/cursos/trabajo`, etc.
    - If "Cursos" link is still needed, point it to `/planes` or another relevant landing page, or just remove the whole "Cursos" section from nav if requested. (User said "eliminate all these url", implying the entry points should also go).

## 3. Verification Plan
- **Build**: Run `npm run build` to ensure no broken imports or missing files cause build failures.
- **Redirects**: Manually verify (if possible in dev) or trust `next.config.js` logic.
- **Sitemap**: Check `/sitemap.xml` in dev mode.
- **Lint**: Run `npm run lint`.

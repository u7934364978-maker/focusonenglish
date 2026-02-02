# Technical Specification - SEO Fixes

## 1. Technical Context
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **SEO Tools**: `next/link`, `Metadata` API

## 2. Implementation Approach

### 2.1 Link Sanitization (Fixing 3XX Internal Links)
We will perform a global replacement of legacy routes with their final destinations to avoid unnecessary redirects.

| Legacy Route | New Route |
|--------------|-----------|
| `/diagnostico` | `/test-nivel` |
| `/contact` | `/contacto` |
| `/signin` | `/cuenta/login` |
| `/login` | `/cuenta/login` |
| `/register` | `/cuenta/registro` |
| `/signup` | `/cuenta/registro` |
| `/forgot-password` | `/cuenta/recuperar` |
| `/cursos-especializados` | `/cursos` |

### 2.2 Fixing 4XX Errors
- **Create `/src/app/cursos/page.tsx`**: A new landing page that aggregates course categories (Trabajo, Viajes, Exámenes). This page will reuse components from the homepage for consistency.
- **Update `Navigation.tsx`**: Ensure the "Cursos" link points to `/cursos`.
- **Update `src/app/contacto/page.tsx`**: Change `/cursos-especializados` to `/cursos`.

### 2.3 Canonical URL Fix (Fixing 3XX Canonicals)
- **Update `src/app/layout.tsx`**:
    - Change `alternates: { canonical: '/' }` to a dynamic absolute URL approach if possible, or ensure it uses the full domain `https://www.focus-on-english.com/` without causing redirects.
    - Since Next.js `metadataBase` is already set to `https://www.focus-on-english.com`, using `canonical: '/'` should resolve to `https://www.focus-on-english.com/`. We need to verify if the server forces a trailing slash or removes it, and match that in the canonical.
- **Update `robots.ts` and `robots.txt`**: Synchronize disallow rules and ensure they don't block pages we want to index.

### 2.4 Middleware Update
- Update `src/middleware.ts` to reflect the correct paths for authentication checks.

## 3. Delivery Phases

### Phase 1: Link & Redirect Cleanup
- Replace all legacy `href` and `Link` targets.
- Update `middleware.ts`.

### Phase 2: Page Restoration
- Implement `src/app/cursos/page.tsx`.
- Fix the broken link in `Contacto` page.

### Phase 3: Metadata & Robots Alignment
- Update `src/app/layout.tsx` canonical.
- Synchronize `robots.ts` and `public/robots.txt`.

## 4. Verification Plan
- **Lint**: `npm run lint`
- **Typecheck**: `npm run typecheck`
- **Manual Check**: Verify that clicking "Test de Nivel" in Navigation doesn't trigger a redirect in the Network tab.

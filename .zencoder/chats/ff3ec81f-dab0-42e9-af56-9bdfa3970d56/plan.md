# Implementation Plan - SEO Fixes

## Phase 1: Link & Redirect Cleanup (Fixing 3XX Internal Links)

1.  [x] **Replace legacy routes in codebase**:
    - [x] Replace `/diagnostico` with `/test-nivel` in:
        - `src/app/planes/page.tsx`
        - `src/app/contacto/page.tsx`
        - `src/app/robots.ts`
        - Any other occurrence.
    - [x] Replace `/contact` with `/contacto` in:
        - `src/app/planes/page.tsx`
        - `src/app/success/page.tsx`
        - Any other occurrence.
    - [x] Replace `/login` and `/signin` with `/cuenta/login`.
    - [x] Replace `/signup` and `/register` with `/cuenta/registro` (specifically in `src/app/planes/page.tsx` and `middleware.ts`).
    - [x] Replace `/forgot-password` with `/cuenta/recuperar` (specifically in `src/app/reset-password/page.tsx`).

2.  [x] **Update `middleware.ts`**:
    - [x] Clean up `PUBLIC_ROUTES` to remove legacy paths (`/signin`, `/signup`, etc.).

## Phase 2: Page Restoration (Fixing 4XX Errors)

3.  [x] **Create `/src/app/cursos/page.tsx`**:
    - [x] Design a simple landing page that lists the three main categories (Trabajo, Viajes, Exámenes).
    - [x] Reuse the course grid pattern from `src/app/page.tsx`.

4.  [x] **Fix specific broken links**:
    - [x] Update `src/app/contacto/page.tsx`: replace `/cursos-especializados` with `/cursos`.
    - [x] Update `src/components/sections/Navigation.tsx`: ensure the "Cursos" link points to `/cursos` if it doesn't already.

## Phase 3: Metadata & Robots Alignment (Fixing 3XX Canonicals)

5.  [x] **Update Canonical URLs**:
    - [x] `src/app/layout.tsx`: Update `alternates.canonical` to be fully qualified `https://focus-on-english.com/` (ensuring no trailing slash mismatch with server config).
    - [x] `src/app/blog/[category]/[slug]/page.tsx`: Update `alternates.canonical` to use the full domain to avoid 3XX redirects on relative paths.

6.  [x] **Synchronize Robots configuration**:
    - [x] Update `src/app/robots.ts` to match the current site structure and `robots.txt`.
    - [x] Ensure `public/robots.txt` is handled solely by `robots.ts`.

## Phase 4: Verification

7.  [x] **Final checks**:
    - [x] Run `npm run lint` and `npm run typecheck`.
    - [ ] Manually verify the most critical paths (Home -> Cursos -> Course Detail).

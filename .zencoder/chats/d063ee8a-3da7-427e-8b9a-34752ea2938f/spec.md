# Technical Specification - Travel Preparation Course Implementation

## Technical Context
- **Framework**: Next.js 15 (App Router)
- **Content**: Rise 360 static export (HTML/JS/CSS)
- **Storage**: Local `public` directory for static assets.

## Implementation Approach
1. **Static Asset Deployment**:
    - Move all files from `src/content/content 2/` to `public/courses/viajes/preparacion/`.
    - This allows Next.js to serve them as static assets at `/courses/viajes/preparacion/index.html`.

2. **Course Page (Iframe Wrapper)**:
    - Create a new page `src/app/cursos/viajes/preparacion/page.tsx`.
    - This page will use the `Navigation` and `Footer` (if available) components.
    - It will render a full-screen (or large) iframe pointing to the static `index.html`.
    - Add a "Back to Dashboard" button for better UX.

3. **Landing Page**:
    - Since `/cursos/viajes` currently doesn't have a page, create `src/app/cursos/viajes/page.tsx`.
    - This page will act as a landing page for all travel-related courses, including the new preparation course.

4. **Navigation Updates**:
    - Update `src/components/sections/Navigation.tsx` to ensure the "Inglés para Viajar" link points to `/cursos/viajes`.
    - Update `src/app/page.tsx` (Homepage) to point to `/cursos/viajes`.

## Data Model / API Changes
- No database changes required for this phase.
- No API changes required.

## Delivery Phases
1. **Phase 1: File Setup**: Move static files and verify they are servable.
2. **Phase 2: Course Page**: Create the iframe wrapper page.
3. **Phase 3: Landing Page & Links**: Create the `/cursos/viajes` page and update all links.

## Verification Approach
- **Manual Verification**: Navigate to `/cursos/viajes/preparacion` and verify the Rise course loads and is interactive.
- **Link Check**: Verify all links to "Inglés para Viajar" point correctly.
- **Lint/Typecheck**: Run `npm run lint` and `npm run typecheck` (if available) to ensure no regressions.

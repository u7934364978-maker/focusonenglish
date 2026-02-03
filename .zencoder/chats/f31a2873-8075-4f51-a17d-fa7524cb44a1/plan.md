# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements
Create a Product Requirements Document (PRD) based on the feature description.
Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/f31a2873-8075-4f51-a17d-fa7524cb44a1/requirements.md`.

### [x] Step: Technical Specification
Create a technical specification based on the PRD.
Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/f31a2873-8075-4f51-a17d-fa7524cb44a1/spec.md`.

### [x] Step: Planning
Create a detailed implementation plan.
Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/f31a2873-8075-4f51-a17d-fa7524cb44a1/plan.md`.

### [x] Step: Implementation

1.  **[x] Task: Update src/app/contacto/page.tsx**
    - Replace `href="/cursos"` with `href="/"`
    - Verification: `grep "/cursos" src/app/contacto/page.tsx` (Completed)

2.  **[x] Task: Update src/app/blog/[category]/[slug]/page.tsx**
    - Replace `href="/metodologia"` with `href="/"`
    - Verification: `grep "/metodologia" src/app/blog/[category]/[slug]/page.tsx` (Completed)

3.  **[x] Task: Update src/components/sections/HeroSection.tsx**
    - Replace `href="/certificaciones"` with `href="/"`
    - Verification: `grep "/certificaciones" src/components/sections/HeroSection.tsx` (Completed)

4.  **[x] Task: Update README.md**
    - Replace `/signup` with `/cuenta/registro`
    - Verification: `grep "/signup" README.md` (Completed)

5.  **[x] Task: Update scripts/test-resend.js**
    - Replace `/forgot-password` with `/cuenta/recuperar`
    - Verification: `grep "/forgot-password" scripts/test-resend.js` (Completed)

6.  **[x] Task: Final Global Verification**
    - Run global grep for all old paths: `/signin`, `/signup`, `/login`, `/register`, `/contact`, `/forgot-password`, `/metodologia`, `/diagnostico`, `/certificaciones`, `/estudiante/dashboard`, `/cursos-especializados`, `/cursos`
    - Ensure only `next.config.js` and `middleware.ts` contain these strings as sources/matchers. (Completed)

7.  **[x] Task: Verification with Lint**
    - Run `npm run lint` (Completed - existing lint issues unrelated to changes)

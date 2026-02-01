# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements
### [x] Step: Technical Specification
### [x] Step: Planning

### [ ] Step: Implementation

1. **[x] Move static files to public directory**
    - Move files from `src/content/content 2/` to `public/courses/viajes/preparacion/`
    - Verification: Check if `public/courses/viajes/preparacion/index.html` exists

2. **[x] Create the course iframe wrapper page**
    - Create `src/app/cursos/viajes/preparacion/page.tsx`
    - Use `Navigation` component and an iframe pointing to `/courses/viajes/preparacion/index.html`
    - Verification: Navigate to `/cursos/viajes/preparacion` in a browser (if possible) or verify file content

3. **[x] Create the "Inglés para Viajar" landing page**
    - Create `src/app/cursos/viajes/page.tsx`
    - Design a simple landing page that introduces the "Travel Preparation Course"
    - Verification: Navigate to `/cursos/viajes`

4. **[x] Update navigation links**
    - Ensure all "Inglés para Viajar" links in `src/components/sections/Navigation.tsx` and `src/app/page.tsx` point to `/cursos/viajes` or directly to the course.
    - Verification: Click the links in the UI

5. **[x] Final Verification**
    - Run `npm run lint`
    - Verify everything works as expected

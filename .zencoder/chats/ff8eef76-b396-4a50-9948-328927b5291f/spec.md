# Technical Specification - Administration A1 Course Embedding

## Technical Context
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS

## Implementation Approach
1. **Move Assets**:
   - Copy all files from `scorm_package_1.2/` to `public/courses/administracion/a1/`.
2. **Create Course Page**:
   - Create the directory structure: `src/app/cursos/trabajo/administracion/a1/trimestre1/semana01/`.
   - Create `page.tsx` within this directory.
3. **Embed SCORM Course**:
   - Use an `iframe` component in `page.tsx`.
   - Set the `src` of the iframe to `/courses/administracion/a1/index.html`.
   - Ensure the layout is full-screen with the `Navigation` component at the top.

## File Structure Changes
- `public/courses/administracion/a1/` (New directory with SCORM files)
- `src/app/cursos/trabajo/administracion/a1/trimestre1/semana01/page.tsx` (New page)

## Verification
- Manual verification by navigating to the new route.
- Ensure the iframe loads the Coursebox content correctly.

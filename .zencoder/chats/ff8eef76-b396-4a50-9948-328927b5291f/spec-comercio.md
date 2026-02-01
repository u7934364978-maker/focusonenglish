# Technical Specification - Foreign Trade A1 Course Embedding

## Implementation Approach
1. **Move Assets (Optional/Reference)**:
   - Copy `inglesA1comercioexterior` to `public/courses/comercio-exterior/a1/` for archival.
2. **Create Course Page**:
   - Route: `src/app/cursos/trabajo/comercio-exterior/a1/trimestre1/semana01/page.tsx`.
   - Use `iframe` with `src="https://my.coursebox.ai/courses/196716/about"`.
3. **Update Navigation**:
   - Edit `src/components/sections/Navigation.tsx`.
   - Add a new submenu group for "Comercio Exterior" next to "Administración".

## File Structure Changes
- `src/app/cursos/trabajo/comercio-exterior/a1/trimestre1/semana01/page.tsx`
- `src/components/sections/Navigation.tsx` (Modified)

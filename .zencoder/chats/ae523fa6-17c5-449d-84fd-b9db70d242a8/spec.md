# Technical Specification - SEO Indexing Fix

## Implementation Approach

### 1. Homepage Enhancements (`src/app/page.tsx`)
- **Category Links in Hero/Cards**: Add direct links to `/blog/trabajo`, `/blog/viajes`, and `/blog/examenes` in their respective cards in the "Elige Tu Camino" section.
- **Blog Section Header**: Update the tags below the Blog title to include links to the four main categories:
    - Trabajo: `/blog/trabajo`
    - Viajes: `/blog/viajes`
    - Exámenes: `/blog/examenes`
    - Métodos: `/blog/metodos`

### 2. Footer Enhancements (`src/components/sections/Footer.tsx`)
- Expand the "Recursos" column or add a new "Blog" column to include:
    - Inglés para Trabajar (`/blog/trabajo`)
    - Inglés para Viajar (`/blog/viajes`)
    - Preparación Exámenes (`/blog/examenes`)
    - Métodos de Estudio (`/blog/metodos`)

### 3. Sitemap Review (`src/app/sitemap.ts`)
- The current implementation seems solid as it dynamically pulls articles and categories.
- We will ensure that priorities are correctly set (Categories: 0.8, Articles: 0.7).
- No major changes needed unless we find "ghost" categories.

### 4. Content Verification
- We will verify that `categoryMetadata` in `src/app/blog/[category]/page.tsx` is comprehensive to ensure category pages have enough text.

## Verification Approach
- **Visual Check**: Verify that links appear correctly on the Homepage and Footer.
- **Link Integrity**: Ensure all new links point to existing routes.
- **Sitemap Generation**: Run `npm run build` or check the sitemap dynamically to ensure categories are listed with the intended priorities.
- **Linting**: Run `npm run lint` to ensure no regressions.

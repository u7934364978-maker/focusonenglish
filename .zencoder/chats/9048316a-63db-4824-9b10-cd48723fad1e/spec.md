# Technical Specification: Rename "SEO" Category

The goal is to rename the blog category currently named "SEO" to something more descriptive and aligned with user search intent, such as "Cursos y Guías de Inglés".

## Technical Context
- **Framework**: Next.js 15
- **Content**: Markdown files in `src/content/blog/seo/`
- **Logic**: Category metadata is managed in `src/app/blog/[category]/page.tsx`

## Implementation Approach
1.  **Rename Category Title**: Add a new entry for `seo` in the `categoryMetadata` object within `src/app/blog/[category]/page.tsx`.
2.  **Proposed Metadata**:
    - **Name**: "Cursos y Guías de Inglés"
    - **Description**: "Aprende con nuestras guías completas por niveles y cursos especializados para profesionales y viajeros."
    - **Icon**: "🎓"
    - **Color**: "from-blue-600 to-indigo-600" (to differentiate from other categories)

## Source Code Structure Changes
- Modified: `src/app/blog/[category]/page.tsx`

## Data Model / API / Interface Changes
- No changes to the data model, only the presentation layer for the "seo" category slug.

## Verification Approach
1.  **Visual Verification**: The category page `/blog/seo` should now display "Cursos y Guías de Inglés" instead of "Seo".
2.  **Linting**: Run `npm run lint` to ensure no regressions.

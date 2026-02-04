# Technical Specification: SEO Strategy for Domain Authority

## 1. Technical Context
- **Framework**: Next.js 15 (App Router).
- **Language**: TypeScript.
- **Content Management**: Markdown/MDX with `gray-matter`.
- **Styling**: Tailwind CSS.
- **Icons**: `lucide-react`.

## 2. Implementation Approach

### A. Core Components for SEO
- **SEO Metadata**: Utilize Next.js `generateMetadata` in `src/app/blog/[...slug]/page.tsx` (if not already implemented) to ensure dynamic meta tags based on frontmatter.
- **JSON-LD Component**: Create/update a component to inject FAQ and Article schema dynamically.

### B. Topic Clustering Logic
We will group the 3116 keywords into thematic "Hubs" using the existing blog structure:
- `/blog/metodos` -> Hub: "Aprender Inglés Gratis" & "Inglés desde Cero".
- `/blog/trabajo` -> Hub: "Inglés Profesional".
- `/blog/viajes` -> Hub: "Inglés para Viajeros".

### C. Automated Internal Linking
- **Keyword Linker**: Develop a utility script to suggest internal links within blog posts based on a defined keyword-to-URL mapping.
- **Related Posts**: Implement a "Related Content" section at the end of each post using shared keywords to increase crawl depth.

## 3. Proposed Changes

### Source Code Changes
- **`src/components/seo/JsonLd.tsx`**: New component for structured data.
- **`src/utils/seo-utils.ts`**: Utilities for keyword density and link suggestions.
- **`src/content/blog/`**: Organization of existing and new Markdown files to follow the Hub-and-Spoke model.

### Data Model Changes
- Extend blog frontmatter to include:
  - `primaryKeyword`: The main target keyword for the post.
  - `pillarPage`: Boolean flag to identify Hub pages.
  - `relatedKeywords`: Array of supporting keywords.

## 4. Delivery Phases

### Phase 1: Foundation (Current)
- Organize existing content into Hubs.
- Audit all existing posts using `scripts/audit-blog-seo.mjs`.

### Phase 2: Technical SEO Optimization
- Implement JSON-LD and Metadata enhancements.
- Optimize internal linking structure.

### Phase 3: Content Expansion
- Generate new targeted content for high-volume keywords identified in the 3116 list.

## 5. Verification Approach
- **Lint**: `npm run lint`
- **SEO Audit**: `node scripts/audit-blog-seo.mjs`
- **Build**: `npm run build` to ensure static generation of all SEO-optimized pages.

# Product Requirements Document (PRD) - SEO Indexing Fix

## Problem Statement
Google Search Console reports 27 URLs as "Discovered - currently not indexed" and 1 URL as "Crawled - currently not indexed". These URLs are primarily blog category pages and specific blog articles. This prevents the content from appearing in search results, reducing organic traffic.

## Objective
Increase the indexation rate of blog category and article pages by improving internal linking, ensuring content quality, and optimizing the sitemap.

## Target URLs
- Category pages: `/blog/metodos`, `/blog/trabajo`, `/blog/viajes`, `/blog/examenes`.
- Article pages: Various articles within these categories.

## Proposed Solutions

### 1. Internal Linking (Internal Boost)
- **Homepage Integration**: Add a dedicated section or links to the 4 main blog categories from the homepage.
- **Footer Enhancement**: Add direct links to the 4 blog categories in the Footer.
- **Cross-Linking**: Ensure articles within the same silo link to each other (already partially done via `SEOInterlinking` and `RelatedArticles`).

### 2. Sitemap Optimization
- Review `src/app/sitemap.ts` to ensure only high-value pages are included.
- Currently, it seems to include everything. We might want to lower priority or remove very low-value pages if any are identified.

### 3. Content Quality Check
- Ensure category pages have descriptive text (already present in `categoryMetadata`).
- Verify that articles are not "thin content".

### 4. Manual Inspection (Recommendation for User)
- Request manual indexing for the top 5-10 most important URLs via Search Console.

## Functional Requirements
- The Homepage should have a new section or links that point to `/blog/trabajo`, `/blog/viajes`, `/blog/examenes`, and `/blog/metodos`.
- The Footer should include these category links under a "Blog" or "Recursos" heading.
- The `sitemap.ts` should be reviewed for any potential low-value URLs that might be diluting crawl budget.

## Success Metrics
- Reduction in "Discovered - currently not indexed" URLs in Google Search Console.
- Successful indexation of targeted category pages.

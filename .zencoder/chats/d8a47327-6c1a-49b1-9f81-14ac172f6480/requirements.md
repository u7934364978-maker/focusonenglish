# Product Requirements Document (PRD) - URL Removal for SEO Optimization

## 1. Objective
Remove specific legacy and redundant URLs from the focus-on-english.com website to optimize SEO, reduce crawl budget waste, and focus search engines on high-value content.

## 2. Scope
The following URLs and their sub-paths must be removed/decommissioned:
- `https://www.focus-on-english.com/cursos`
- `https://www.focus-on-english.com/cursos/trabajo` (and all levels: a1, a2, b1, b2, c1, c2)
- `https://www.focus-on-english.com/cursos/viajes` (and all levels: a1, a2, b1, b2, c1, c2)
- `https://www.focus-on-english.com/cursos/examenes` (and all levels: a1, a2, b1, b2, c1, c2)
- `https://www.focus-on-english.com/cursos/viajes/preparacion`
- `https://www.focus-on-english.com/diagnostico`
- `https://www.focus-on-english.com/cursos-especializados`

## 3. Functional Requirements

### 3.1 Route Deletion
- Delete physical route files and directories in `src/app` that correspond to the URLs in scope.
- Ensure that dynamic routes (if any) that might be serving these URLs are also addressed.

### 3.2 Redirect Management
- Update `next.config.js` to:
    - Remove existing redirects that point TO the deleted URLs.
    - Implement 301 redirects FROM the deleted URLs to the most relevant successor page (likely the Homepage `/` or `/planes`) to preserve SEO authority.

### 3.3 Sitemap and Robots.txt Update
- Remove all decommissioned URLs from `src/app/sitemap.ts`.
- Update `src/app/robots.ts` to reflect the changes in the `allow`/`disallow` rules.

### 3.4 Internal Link Cleanup
- Search and remove/update all internal links pointing to the decommissioned URLs in:
    - `Navigation` component.
    - `Footer` component (if applicable).
    - Other landing pages or sections.

## 4. Non-Functional Requirements
- **SEO Integrity**: Use 301 permanent redirects to ensure search engines update their index and pass "link juice" to the homepage.
- **User Experience**: Ensure no 404 errors are encountered by users following old links from external sources or bookmarks.

## 5. Success Criteria
- Decommissioned URLs either return a 301 redirect to the homepage or a 404 (if no redirect is desired, though 301 is preferred for SEO).
- Sitemap no longer contains the decommissioned URLs.
- Navigation menus no longer contain links to these URLs.
- Build passes without errors.

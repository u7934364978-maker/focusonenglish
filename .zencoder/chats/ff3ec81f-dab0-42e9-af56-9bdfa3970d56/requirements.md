# Product Requirements Document (PRD) - SEO Fixes

## 1. Objective
Fix identified SEO issues in the Focus English platform, specifically addressing 237 HTTP 4XX errors and 69 3XX canonical URL issues reported in the audit.

## 2. Identified Issues

### 2.1 HTTP 4XX Errors (Broken Links)
- **Problem**: Several links point to non-existent pages.
- **Confirmed Instances**:
    - `/cursos-especializados`: Referenced in `src/app/contacto/page.tsx`.
    - `/cursos`: Referenced in `src/components/sections/Navigation.tsx` (the page `src/app/cursos/page.tsx` does not exist).
    - Potential others in blog content or other components.

### 2.2 HTTP 3XX Errors (Redirecting Links/Canonicals)
- **Problem**: Links and canonical tags point to URLs that return 301/302 redirects instead of the final 200 OK destination.
- **Confirmed Instances**:
    - `/diagnostico` -> Redirects to `/test-nivel`.
    - `/contact` -> Redirects to `/contacto`.
    - `/login` -> Redirects to `/cuenta/login`.
    - `/register` / `/signup` -> Redirects to `/cuenta/registro`.
    - `/signin` -> Redirects to `/cuenta/login`.
    - `/forgot-password` -> Redirects to `/cuenta/recuperar`.

### 2.3 Canonical Tag Issues
- **Problem**: 69 canonical URLs return 3XX status codes.
- **Confirmed Instances**:
    - Root layout (`src/app/layout.tsx`) sets a global canonical to `/`, which might be causing issues if subpages don't correctly override it with self-referencing absolute URLs that avoid redirects (e.g., ensuring no trailing slashes if the site doesn't use them).

## 3. Requirements

### 3.1 Link Sanitization
- Update all internal links to point directly to the final 200 OK destination.
- **Specific Tasks**:
    - Replace all occurrences of `/diagnostico` with `/test-nivel`.
    - Replace all occurrences of `/contact` with `/contacto`.
    - Replace all occurrences of `/login` with `/cuenta/login`.
    - Replace all occurrences of `/register`, `/signup`, `/signin` with `/cuenta/registro` (or appropriate final URL).
    - Replace `/cursos-especializados` with `/cursos` (once fixed) or `#cursos`.

### 3.2 Page Restoration/Redirection
- Decide if `/cursos` should have its own page or if it should redirect to the home page's courses section.
- Requirement: Ensure `/cursos` returns a 200 OK or is redirected correctly via `next.config.js` if intended.

### 3.3 Canonical Tag Optimization
- Update metadata generation to ensure every page has a self-referencing canonical tag.
- Ensure canonical URLs do not include redirects (e.g., check for trailing slashes).

## 4. Acceptance Criteria
- 0 internal links point to 3XX redirect sources.
- 0 internal links point to 4XX error pages.
- Canonical tags on all pages point to 200 OK URLs.
- `robots.txt` alignment with the site structure.

## 5. Verification Plan
- Run a local crawl (if possible) or manually verify fixed links.
- Check `next.config.js` redirects and ensure they are only for legacy/external support, not used in internal code.

# Technical Specification - Sector Administración

## Technical Context
- **Language**: TypeScript
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Implementation Approach

### 1. Curriculum Data Migration
- Rename `src/lib/sectors/finance-curriculum.ts` to `src/lib/sectors/admin-curriculum.ts`.
- Update the variable name from `FINANCE_SECTOR_CURRICULUM` to `ADMIN_SECTOR_CURRICULUM`.
- Replace the content with curriculum focused on Administration (A1-C2).
- Update `src/lib/sectors/index.ts` to import `ADMIN_SECTOR_CURRICULUM` and replace `finanzas` key with `administracion`.

### 2. Content Directory Migration
- Rename directory `src/content/cursos/trabajo/finanzas/` to `src/content/cursos/trabajo/administracion/`.
- Perform a global search and replace of `finanzas` with `administracion` within the JSON/Markdown files in that directory to fix internal links.

### 3. Navigation Update
- Modify `src/components/sections/Navigation.tsx`:
    - Replace text "Banca y Finanzas" with "Administración".
    - Update links from `/cursos/trabajo/finanzas/...` to `/cursos/trabajo/administracion/...`.

### 4. Search and Replace
- Search for any remaining instances of "finanzas", "Banca y Finanzas", or "finance" in routes and labels, and replace them with "administracion" or "Administración" as appropriate.

## Delivery Phases

### Phase 1: Data and Content
1. Create `admin-curriculum.ts` and update `sectors/index.ts`.
2. Rename the content directory.
3. Update internal links in content files.

### Phase 2: UI and Navigation
1. Update `Navigation.tsx` (Desktop and Mobile).
2. Verify all links point to the new routes.

### Phase 3: Verification
1. Run `npm run lint` and `npm run build` (or equivalent) to ensure no broken links or type errors.
2. Manually verify the navigation menu.

## Verification Approach
- **Linting**: Run project's lint command.
- **Manual Check**: Verify that `/cursos/trabajo/administracion` routes load correctly and show the new curriculum.

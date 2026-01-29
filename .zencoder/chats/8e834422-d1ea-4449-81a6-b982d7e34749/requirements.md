# Product Requirements Document (PRD) - Sector Administración

## Introduction
The goal of this task is to replace the existing "Banca y Finanzas" sector with a new "Administración" sector in the Focus English platform. This involves updating navigation, renaming directories, and generating a new curriculum tailored for administrative professionals.

## Scope
- **Navigation Update**: Replace "Banca y Finanzas" with "Administración" in `src/components/sections/Navigation.tsx` (Desktop and Mobile).
- **URL Routing**: Change all `/cursos/trabajo/finanzas/*` routes to `/cursos/trabajo/administracion/*`.
- **Directory Structure**: Rename `src/content/cursos/trabajo/finanzas/` to `src/content/cursos/trabajo/administracion/`.
- **Curriculum Update**: Replace `FINANCE_SECTOR_CURRICULUM` in `src/lib/sectors/finance-curriculum.ts` (and possibly rename the file/variable) with an `ADMIN_SECTOR_CURRICULUM`.
- **Content Generation**: Generate representative administrative English curriculum for levels A1, A2, B1, B2, C1, and C2.
- **Glossary**: Update `src/content/cursos/trabajo/glossary.json` or related files if they contain finance-specific terms.

## Functional Requirements
1. The navigation menu must show "Administración" instead of "Banca y Finanzas".
2. Clicking on administration levels should lead to `/cursos/trabajo/administracion/...`.
3. The content shown for the administration sector should be relevant to office management, human resources, logistics, and general business administration.
4. Old finance links should ideally redirect or be completely removed/replaced.

## Technical Requirements
- **Next.js**: Ensure routes are correctly handled in the `app` or `pages` directory (wherever courses are defined).
- **Curriculum Data**: The new curriculum must follow the `CurriculumModule[]` structure defined in the project.
- **Typescript**: Ensure all types are respected during the transition.

## Assumptions
- The "Banca y Finanzas" content is no longer needed and can be completely replaced.
- The structure of levels (A1-C2) and trimestres remains the same.

## Open Questions
- Should we rename `finance-curriculum.ts` to `admin-curriculum.ts` or keep a generic name? (Assuming renaming for clarity).

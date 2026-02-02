# Technical Specification: English A2 Course

## Technical Context
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Data Storage**: JSON files for course content (standard units), Supabase for database-backed units (if needed).
- **UI Library**: Tailwind CSS, Framer Motion, Lucide React.
- **Components**: `PremiumUnitViewer`.

## Implementation Approach

### 1. Data Structure
- Create `src/content/cursos/ingles-a2/` folder.
- Each unit will be a JSON file named `unit1.json` to `unit30.json`.
- The structure will follow the `UnitData` type defined in `src/types/premium-course.ts`.

### 2. Page Routing
- Create `src/app/curso/ingles-a2/page.tsx`:
    - List all units by reading the `src/content/cursos/ingles-a2/` directory.
    - Display cards for each unit with title and level (A2).
- Create `src/app/curso/ingles-a2/[unitId]/page.tsx`:
    - Dynamic route to display a specific unit.
    - Load unit data from JSON file.
    - Render using `PremiumUnitViewer`.

### 3. Content Generation
- Generate content for 30 units covering the Cambridge A2 syllabus.
- Each unit will include:
    - Learning outcomes.
    - Mastery tags.
    - Interaction blocks (Multiple Choice, Matching, etc.).
    - Scripted dialogues and narrations.

## Source Code Structure Changes
- `src/content/cursos/ingles-a2/` (New directory)
- `src/app/curso/ingles-a2/` (New directory)
- `src/app/curso/ingles-a2/page.tsx` (New file)
- `src/app/curso/ingles-a2/[unitId]/page.tsx` (New file)

## Delivery Phases
1. **Infrastructure**: Create directories and basic page routing for A2.
2. **Unit 1-10 Implementation**: Content generation and validation.
3. **Unit 11-20 Implementation**: Content generation and validation.
4. **Unit 21-30 Implementation**: Content generation and validation.
5. **Final Integration**: Navigation checks and UI polish.

## Verification Approach
- **Linting**: Run `npm run lint` to ensure code quality.
- **Type Checking**: Run `npm run typecheck` (or `tsc`).
- **Manual Verification**: Navigate through `http://localhost:3000/curso/ingles-a2` and test various interaction types in the units.

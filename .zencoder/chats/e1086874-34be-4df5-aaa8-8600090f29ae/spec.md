# Technical Specification - English B1 Course

## Technical Context
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: `PremiumUnitViewer`, `Navigation`
- **Data Source**: Local JSON files in `src/content/cursos/ingles-b1/`
- **Type Definitions**: `UnitData` from `@/types/premium-course`

## Implementation Approach
We will replicate the structure of the `ingles-a1` course, which has proven effective for rendering interactive content.

### 1. File System Structure
- **Content**: Create `src/content/cursos/ingles-b1/` and populate it with `unit1.json` through `unit6.json`.
- **Routes**:
    - `src/app/curso/ingles-b1/page.tsx`: Course landing page listing all units.
    - `src/app/curso/ingles-b1/[unitId]/page.tsx`: Individual unit lesson page.

### 2. Components & Logic
- **Course Page**: Will use `fs` to read the directory, parse titles/levels from JSON, and display a grid of `Link` components.
- **Unit Page**: Will use `fs` to read the specific unit JSON and pass it to the `PremiumUnitViewer` component.
- **Audio Generation**: We will need to ensure `audioUrl` fields in JSON point to valid paths. Initially, we will use placeholders or reference the generation script if needed.

### 3. Data Model
The B1 units will follow the existing `UnitData` interface. Each unit will include:
- `course` metadata (title, level, duration)
- `learning_outcomes`
- `mastery_tags`
- `blocks` with interactions and video content.

## Source Code Structure Changes
```text
src/
├── app/
│   └── curso/
│       └── ingles-b1/
│           ├── [unitId]/
│           │   └── page.tsx (New)
│           └── page.tsx (New)
└── content/
    └── cursos/
        └── ingles-b1/
            ├── unit1.json (New)
            ├── unit2.json (New)
            ├── ...
            └── unit6.json (New)
```

## Delivery Phases
1. **Phase 1: Infrastructure**: Create directories and basic route files (skeleton).
2. **Phase 2: Content Creation**: Generate/Write the JSON files for Units 1-6 with B1 level content (Cambridge standard).
3. **Phase 3: Integration & Testing**: Ensure all interactions render correctly and navigation works.

## Verification Approach
- **Visual Verification**: Navigate to `/curso/ingles-b1` and verify grid rendering.
- **Interaction Testing**: Open each unit and verify `PremiumUnitViewer` correctly renders the interactions.
- **Linting**: Run `npm run lint` to ensure no regressions.
- **Validation**: Use `npm run validate-exercises` if applicable to check JSON schema compliance.

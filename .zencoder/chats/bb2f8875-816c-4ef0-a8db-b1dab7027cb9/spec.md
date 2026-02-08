# Technical Specification: Course Engine Consolidation

## 1. Technical Context
- **Language**: TypeScript
- **Validation**: Zod (standard for the project)
- **Data Formats**: JSON (primary), TypeScript (legacy/backups)
- **Persistence**: File System + Supabase

## 2. Implementation Approach

### 2.1. Unified Schema Architecture
We will create a central schema file `src/lib/course-engine/schema.ts` that defines:
- `BaseExerciseSchema`: Common fields (`id`, `title`, `instructions`, `points`).
- `ExerciseTypeSchemas`: Specific schemas for each type (e.g., `MultipleChoiceSchema`, `MatchingSchema`).
- `CourseUnitSchema`: The top-level structure containing metadata, modules, lessons, and exercises.

### 2.2. The CourseEngine Class
Location: `src/lib/course-engine/index.ts`

```typescript
export class CourseEngine {
  // Methods
  static validateUnit(data: any): ValidationResult;
  static normalizeUnit(data: any): any;
  static async loadUnit(id: string): Promise<CourseUnit>;
}
```

### 2.3. Universal Validation Script
A new script `scripts/validate-courses.mjs` will replace:
- `scripts/validate-exercises.mjs`
- `scripts/audit-generic.mjs`
- `scripts/audit_courses.py`

It will recursively scan `src/content/cursos/` and report all Zod validation errors in a unified format.

## 3. Source Code Structure Changes
- **New Directory**: `src/lib/course-engine/` (Core logic)
- **Updated**: `src/lib/services/course-service.ts` (Use the new engine)
- **New**: `scripts/validate-courses.mjs` (Universal tool)

## 4. Delivery Phases

### Phase 1: Core Engine & Schemas
- Define the universal Zod schemas.
- Implement `CourseEngine.validate()` and `CourseEngine.normalize()`.
- Create the universal validation script.

### Phase 2: Content Standardization
- Run the validation script on all 188+ JSON files.
- Batch fix errors using `CourseEngine.normalize()`.
- Convert key `.ts` data files to `.json` where appropriate.

### Phase 3: Service Integration
- Refactor `course-service.ts` to use `CourseEngine`.
- Ensure legacy support for existing course IDs.

## 5. Verification Approach
- **Linting**: `npm run lint` must pass.
- **Validation**: `node scripts/validate-courses.mjs` must show 0 errors.
- **Testing**: Manual verification of a few units (A1, B2, TOEFL) in the dev environment.

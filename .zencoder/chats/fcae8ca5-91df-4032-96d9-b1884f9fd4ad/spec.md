# Technical Specification - Cambridge B1 Preliminary Course Adaptation

## 1. Technical Context
- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS.
- **Content Storage**: JSON files in `src/content/cursos/ingles-b1/`.
- **Rendering Engine**: `PremiumUnitViewer` and `PremiumCourseSession`.
- **AI Evaluation**: Existing API routes (`/api/evaluate-writing`, `/api/evaluate-speaking`, etc.).

## 2. Implementation Approach

### 2.1. Syllabus & Metadata Update
- Update all 30 `unit*.json` files in `src/content/cursos/ingles-b1/` to match the new syllabus defined in `syllabus-b1.md`.
- Each JSON file will include:
    - `unit_title`: New title from the syllabus.
    - `learning_outcomes`: Specific PET goals.
    - `blocks`: Exercises mapped to PET Paper parts.

### 2.2. Extending `PremiumCourseSession`
The `PremiumCourseSession` component needs to support new interaction types to match Cambridge PET parts:

1.  **`multiple_matching`** (Reading Part 2): 
    - Input: Array of 5 profiles and 8 descriptions.
    - UI: Select profile, then select matching description.
2.  **`gapped_text`** (Reading Part 4):
    - Input: Main text with `[GAP X]` markers and a list of paragraphs (A-G).
    - UI: Dropdowns or selection in the text flow.
3.  **`multiple_choice_cloze`** (Reading Part 5):
    - Input: Text with gaps and 4 options per gap.
4.  **`open_cloze`** (Reading Part 6):
    - Input: Text with gaps where the user must type 1 word.
5.  **`listening_image_mc`** (Listening Part 1):
    - Input: Audio + 3 image options.

### 2.3. Task Mapping
| PET Part | Interaction Type | Component / Strategy |
|----------|------------------|----------------------|
| Reading P1 | `multiple_choice` | Existing |
| Reading P2 | `multiple_matching` | **New** logic in `PremiumCourseSession` |
| Reading P3 | `multiple_choice` | Existing (with long stimulus) |
| Reading P4 | `gapped_text` | **New** logic in `PremiumCourseSession` |
| Reading P5 | `multiple_choice_cloze` | **New** logic in `PremiumCourseSession` |
| Reading P6 | `open_cloze` | `transformation` (Existing) or **New** logic |
| Writing P1/2 | `short_writing` | Existing + `/api/evaluate-writing` |
| Listening P1 | `listening_image_mc`| **New** logic (images in options) |
| Listening P2/4| `multiple_choice` | Existing + Audio |
| Listening P3 | `transformation` | Existing (Gap fill) |
| Speaking P1-4 | `speaking` | Existing + `/api/evaluate-speaking` |

## 3. Data Model Changes
The `PremiumInteraction` type in `src/types/premium-course.ts` should be updated to include new types and fields.

### `src/types/premium-course.ts` additions:
```typescript
export type PremiumInteractionType = 
  | ... existing types ...
  | 'multiple_matching'
  | 'gapped_text'
  | 'multiple_choice_cloze'
  | 'listening_image_mc';

export interface PremiumInteraction {
  // ... existing fields ...
  main_text?: string; // For gapped_text and cloze
  profiles?: any[]; // For multiple_matching
  paragraphs?: any[]; // For gapped_text
  gaps?: any[]; // For cloze
}
```

## 4. Delivery Phases
1.  **Phase 1**: Update unit titles and metadata in all 30 JSON files.
2.  **Phase 2**: Extend `PremiumCourseSession` with new interaction types.
3.  **Phase 3**: Implement/Update content for Units 1-6 (Module 1).
4.  **Phase 4**: Complete remaining modules.

## 5. Verification
- **Linting**: `npm run lint`
- **Manual Verification**: Access `http://localhost:3000/curso/ingles-b1/unit1` etc. and test the new interaction types.

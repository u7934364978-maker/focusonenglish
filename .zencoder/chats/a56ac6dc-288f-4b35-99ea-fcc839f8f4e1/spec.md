# Technical Specification - Crossword Improvements

## Technical Context
- **Frontend**: Next.js 15, React 19, TypeScript.
- **Styling**: Tailwind CSS.
- **Icons**: Lucide React.
- **Content**: JSON files in `src/content/cursos/ingles-a1/`.

## Implementation Approach

### 1. Component Enhancements (`CrosswordExercise.tsx`)
- **State Management**:
    - Add `showErrors: boolean` state.
    - Add `revealedCells: Set<string>` (or similar) to track which cells are revealed.
- **Methods**:
    - `handleCheckSolution()`: Compares `userGrid` with `grid` and sets `showErrors` to true.
    - `handleRevealSolution()`: Fills `userGrid` with correct letters from `grid`.
- **UI Changes**:
    - Add "Comprobar" button.
    - Add "Ver Solución" button.
    - Add visual feedback for errors (red border/text when `showErrors` is true).

### 2. Content Audit & Fix Script
- Create a utility script (e.g., `scripts/fix-crosswords.ts`) to:
    - Parse all A1 JSON files.
    - Validate crossword items (checking for overlapping letter conflicts).
    - Provide a way to re-generate or manually fix coordinates.
    - Since generating a crossword grid programmatically is non-trivial, I will manually fix the identified conflicts in the first few units and potentially use a simplified generator for others or use an AI-assisted approach to suggest valid coordinates.

### 3. Data Schema
- The existing schema for `crossword` type in `ExerciseType` seems sufficient:
    ```typescript
    interface CrosswordItem {
      word: string;
      clue: string;
      direction: 'across' | 'down';
      row: number;
      col: number;
    }
    ```
- No changes needed to the data structure itself, only to the *content* of the JSON files.

## Verification Plan
- **Manual Testing**: Open several units with crosswords and verify the "Check" and "Reveal" buttons work.
- **Automated Validation**: The script `fix-crosswords.ts` will serve as a validation tool to ensure no conflicts exist in the final JSON files.
- **Lint/Build**: Run `npm run lint` and `npm run build` to ensure no regressions.

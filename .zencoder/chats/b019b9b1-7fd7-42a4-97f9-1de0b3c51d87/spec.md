# Technical Specification - Multiple Choice Randomization

## Technical Context
- Language: TypeScript / JavaScript
- Course Data: `src/lib/course/b2/unit-*.ts`
- Exercise Types: `multiple-choice`, `reading-comprehension`
- Data Formats:
  1. Index-based: `correctAnswer: number` (e.g., `0`)
  2. Value-based: `correctAnswer: string` (e.g., `"Option text"`)

## Implementation Approach
We will create a Node.js script that:
1. Iterates through all B2 unit files.
2. Uses regex or a basic parser to locate exercise objects of type `multiple-choice` or `reading-comprehension`.
3. For each found exercise:
   - Identifies the current correct answer.
   - Shuffles the `options` array using the Fisher-Yates algorithm.
   - Updates the `correctAnswer` accordingly:
     - If it was an index, find the new index of the original correct answer.
     - If it was a string, ensure it still matches the correct string (or update it if the string itself was slightly modified, though usually it's an exact match).
4. Writes the updated content back to the files.

### Shuffling Logic
```javascript
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
```

### File Processing
The script will use `fs.readFileSync` and `fs.writeFileSync`. Since these are `.ts` files but structured as JS objects, we can use a combination of regex and string manipulation to avoid breaking the TypeScript syntax.

## Source Code Changes
- No changes to application code (components/logic).
- Updates to `src/lib/course/b2/unit-1.ts` through `unit-30.ts`.

## Verification Plan
1. Run the `check_mc_randomization.mjs` script after implementation to confirm balanced distribution.
2. Manual spot check via `/debug/b2-preview/[unitId]`.

# Full SDD workflow - Audio Verification

## Workflow Steps

### [x] Step: Requirements

Verify all audio files for listening exercises in `/curso/ingles-a1` are created.

1. Review existing codebase to identify content structure and audio storage.
2. Define verification script to automate checking all units.

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/106a6685-d49e-4bb9-a067-1339705b54aa/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD.

1. Identify all JSON unit files in `src/content/cursos/ingles-a1/`.
2. Extract all `audioUrl` references from these files.
3. Check existence of corresponding files in the `public` directory.

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/106a6685-d49e-4bb9-a067-1339705b54aa/spec.md`.

### [x] Step: Planning

Create a detailed implementation plan based on `spec.md`.

1. **Task 1: Implement extraction logic**: Write the function to recursively find `audioUrl` in a JSON object.
2. **Task 2: Implement file scanning**: Write the logic to read all `unit*.json` files and collect URLs.
3. **Task 3: Implement verification**: Write the logic to check file existence in `public/`.
4. **Task 4: Report generation**: Format the output for the console.

### [ ] Step: Implementation

1. **Create verification script**: Implement `scripts/verify-a1-audio.mjs` with the planned tasks. [./scripts/verify-a1-audio.mjs](./scripts/verify-a1-audio.mjs)
2. **Run verification**: Execute `node scripts/verify-a1-audio.mjs` and identify missing audio files.
3. **Verify results**: Present the list of missing files to the user for confirmation.

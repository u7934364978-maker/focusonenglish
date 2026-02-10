# Technical Specification - Blog Content Cleanup

## Technical Context
- **Language**: Spanish (content)
- **Format**: Markdown with YAML frontmatter.
- **Location**: `src/content/blog/` and `src/content/hubs/`.

## Implementation Approach
We will use a search-and-replace strategy followed by manual refinement for the identified files. 

### Key Replacements / Rephrasings:
1.  **AI English Tutor** -> **Ejercicios de práctica inteligente** or **Plataforma de práctica integral**.
2.  **Conversar con nuestra IA** -> **Practicar con ejercicios interactivos**.
3.  **Hablar con un tutor de IA** -> **Mejorar tu speaking con ejercicios guiados**.
4.  **Simulador de Inmersión con IA** -> **Simulador de situaciones reales con ejercicios**.
5.  **Focus English IA** -> **Focus English (Ejercicios de Práctica)**.

### Content Adjustments:
- Remove descriptions of "emotional intelligence" or "patience of a saint" when referring to the platform.
- Focus on the variety of exercises: grammar, vocabulary, listening, reading, and speaking.
- Ensure the "Speaking" part is described as "speaking practice exercises" (e.g., repeating, recording, answering prompts) rather than "conversing with a tutor".

## Source Code Structure Changes
None. Only markdown content changes.

## Verification Approach
1.  **Automated Search**: Run `grep` to ensure no "tutor IA" or "conversar con IA" remains.
2.  **Manual Review**: Read the updated versions of the most "IA-heavy" articles (e.g., `aprender-ingles-ia-guia.md`) to ensure they still make sense.
3.  **Build Check**: Run `npm run build` to ensure no markdown syntax errors were introduced.

## Delivery Phases
1.  **Phase 1: Identification**: Finalize the list of files and specific snippets to change.
2.  **Phase 2: Global Replacements**: Apply common rephrasings across all files.
3.  **Phase 3: Deep Clean**: Manually edit articles that focus entirely on IA (like the two I read).
4.  **Phase 4: Verification**: Final check and confirmation.

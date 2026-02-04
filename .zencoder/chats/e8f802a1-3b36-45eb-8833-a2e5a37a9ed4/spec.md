# Technical Specification: Expansion of 'negociaciones-b2' Course

## Technical Context
- **Language**: TypeScript
- **Dependencies**: Next.js, OpenAI (for future audio generation if needed), `EnhancedSpeakingExercise` component.
- **Data Files**: 
    - `src/lib/b2-neg-m1-l1.ts`
    - `src/lib/b2-neg-m1-l2.ts`
    - `src/lib/b2-neg-m2-l1.ts`
    - `src/lib/b2-neg-m3-l1.ts`

## Implementation Approach
1.  **Data Structure**: Add new objects of type `ListeningExercise` and `SpeakingExercise` (mapped to `speaking` type in `exercise-types.ts`) to the respective lesson files.
2.  **Exercise Integration**: Update the `ALL_EXERCISES` array in each file to include the new content.
3.  **Speaking Exercise Details**: 
    - Use `type: 'speaking'` to trigger `EnhancedSpeakingExercise`.
    - Provide `prompt`, `expectedResponse`, `targetWords`, and `hints` for each.
4.  **Listening Exercise Details**:
    - Use `type: 'listening-comprehension'`.
    - Provide `audioUrl` (placeholders for now), `transcript`, and `questions`.

## Proposed Content

### Module 1, Lesson 1: The Preparation Phase
- **Listening 2**: "The Power of Leverage". Focus on identifying leverage points.
- **Speaking 1**: "Presenting the BATNA". Student must explain their BATNA to their team.

### Module 1, Lesson 2: Opening the Negotiation
- **Listening 2**: "Handling a Hostile Opening". Focus on maintaining professionalism.
- **Speaking 1**: "Proposing the Agenda". Student must lead the meeting opening.

### Module 2, Lesson 1: The Art of Bargaining
- **Listening 2**: "Creative Concessions". Focus on non-monetary trade-offs.
- **Speaking 1**: "Hypothetical Bargaining". Student must use second conditional to explore a deal.

### Module 3, Lesson 1: Reaching Agreement & Closing
- **Listening 2**: "The Final Hurdles". Focus on resolving last-minute issues.
- **Speaking 1**: "Summarizing the Agreement". Student must confirm the final terms verbally.

## Verification Plan
- **Linting**: Run `npm run lint` (or equivalent) to ensure no syntax errors in the TS files.
- **Manual Verification**: Check the course in the UI to ensure the new exercises render correctly and the AI speaking component loads as expected.

# Spec and build

## Agent Instructions

Ask the user questions when anything is unclear or needs their input. This includes:

- Ambiguous or incomplete requirements
- Technical decisions that affect architecture or user experience
- Trade-offs that require business context

Do not make assumptions on important decisions — get clarification first.

---

## Workflow Steps

### [x] Step: Technical Specification

Assess the task's difficulty, as underestimating it leads to poor outcomes.

- easy: Straightforward implementation, trivial bug fix or feature
- medium: Moderate complexity, some edge cases or caveats to consider
- hard: Complex logic, many caveats, architectural considerations, or high-risk changes

Create a technical specification for the task that is appropriate for the complexity level:

- Review the existing codebase architecture and identify reusable components.
- Define the implementation approach based on established patterns in the project.
- Identify all source code files that will be created or modified.
- Define any necessary data model, API, or interface changes.
- Describe verification steps using the project's test and lint commands.

Save the output to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/2dda4afe-7c64-43de-b62d-9c974ea721df/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach
- Source code structure changes
- Data model / API / interface changes
- Verification approach

If the task is complex enough, create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/2dda4afe-7c64-43de-b62d-9c974ea721df/spec.md`:

- Break down the work into concrete tasks (incrementable, testable milestones)
- Each task should reference relevant contracts and include verification steps
- Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function).

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/2dda4afe-7c64-43de-b62d-9c974ea721df/plan.md`. If the feature is trivial and doesn't warrant this breakdown, keep the Implementation step below as is.

---

### [x] Step: Display A2 Grammar Content

Display all 60 A2 units with their grammatical content organized by module in the chat.

1. Extract data from `src/lib/a2-syllabus.ts` ✅
2. Format and present in clear, scannable structure ✅
3. Organize by Module (1-10) ✅
4. List grammar topics for each unit ✅
5. Include vocabulary preview ✅
6. After completion, save formatted output to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/2dda4afe-7c64-43de-b62d-9c974ea721df/a2-grammar-content.md` ✅

---

### [x] Step: Create A2 Unit 1 (60 Exercises)

Create Unit 1 of A2 course with 60 exercises following A1 structure.

1. ✅ Create `/src/lib/course/a2/unit-1.ts`
2. ✅ Structure: 60 exercises organized in 4 sections
   - Section 1 (e1-e10): Subject Pronouns
   - Section 2 (e11-e25): Be Verb Affirmative  
   - Section 3 (e26-e40): Be Verb Negative
   - Section 4 (e41-e60): Be Verb Questions
3. ✅ Exercise types: multiple-choice, sentence-building
4. ✅ Difficulty progression: easy → medium → hard
5. ✅ All exercises include: id, type, level, topic, transcript, content, audioUrl
6. ✅ Grammar topics covered: Subject pronouns, Be verb (all forms)

---

### [ ] Step: Create A2 Units 2-60

Continue building remaining 59 units following same structure and difficulty progression.

Next units to build:
- Unit 2: Personal Information (Question words, Be verb negatives/questions)
- Unit 3: Family Members (Possessive adjectives, Saxon Genitive)
- Unit 4: Describing Appearance (Have got, Adjective order)
- ... (continue for all 60 units)

Instructions for each unit:
1. Reference grammar topics from `a2-syllabus.ts`
2. Create 60 exercises with 4 sections (Vocab + Grammar)
3. Follow A1 exercise structure and patterns
4. Include varied contexts and practical examples
5. Maintain consistent difficulty progression

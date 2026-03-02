# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: 5bf83cd0-accc-4ef2-ba3a-a5511ba5120d -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: 4dfbfe4a-36dc-453f-8f6e-946deb29a506 -->

Create a technical specification based on the PRD in `{@artifacts_path}/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `{@artifacts_path}/spec.md` with:
- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning
<!-- chat-id: 11614f8f-d8db-47c1-ab80-99df026c691e -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

### [ ] Step: Replace B30_V1 exercises in unit30.json

File: `src/content/cursos/ingles-a1/unit30.json`

Replace the 8 trivial exercises in block B30_V1, preserving interaction_ids and keeping I2, I7 unchanged:
- **I1**: `matching` (rooms→translations) → `fill_blanks` ("We cook dinner in the ________." / kitchen)
- **I3**: `matching` (body parts→translations) → `categorization` (Head: Eyes, Nose, Mouth, Ears / Body: Arm, Leg, Hand, Foot)
- **I4**: `multiple_choice` ("¿Cómo se dice 'camisa'?") → `fill_blanks` ("It is cold today. He is wearing a warm ________ and a scarf." / jacket)
- **I5**: `matching` (animals→translations) → `categorization` (Pets: Rabbit, Dog, Cat, Fish / Wild: Lion, Tiger, Horse, Bird)
- **I6**: `matching` (clothes→translations) → `fill_blanks` ("She is wearing a blue ________ and black shoes." / skirt)
- **I8**: `matching` (neighbourhood→translations) → `fill_blanks` ("I need medicine. Let's go to the ________." / pharmacy)
- **I9**: `multiple_choice` ("¿Qué parte del cuerpo usas para ver?") → `fill_blanks` ("She has beautiful green ________ and long hair." / eyes)
- **I10**: `matching` (adjectives→translations) → `fill_blanks` ("This house has lots of natural light. It is a very ________ house." / bright)

All new exercises must include: `mastery_tag: "vocabulary"`, `complexity`, `concept_tags`.

Verify: `python3 -c "import json; json.load(open('src/content/cursos/ingles-a1/unit30.json'))"` passes.

### [ ] Step: Replace B30_V2 exercises in unit30.json

File: `src/content/cursos/ingles-a1/unit30.json`

Replace the 6 trivial exercises in block B30_V2, keeping I5, I7, I8, I10 unchanged:
- **I1**: `matching` (animals→translations) → `categorization` (Farm: Cow, Horse, Pig, Chicken / Wild: Elephant, Tiger, Lion, Bear)
- **I2**: `matching` (clothes→translations) → `fill_blanks` ("It is summer. She is wearing a light ________ and sandals." / dress)
- **I3**: `matching` (face parts→translations) → `fill_blanks` ("He has a big ________ and small ears." / nose)
- **I4**: `matching` (furniture→translations) → `fill_blanks` ("I can see my face in the ________." / mirror)
- **I6**: `matching` (places→translations) → `categorization` (Health & Education: Hospital, School, Pharmacy, Library / Leisure & Food: Restaurant, Park, Cinema, Café)
- **I9**: `matching` (leg/foot parts→translations) → `short_writing` (describe a person's clothing, stimulus: "She / He is wearing ________.")

All new exercises must include: `mastery_tag: "vocabulary"`, `complexity`, `concept_tags`.

Verify: JSON parse passes.

### [ ] Step: Replace B30_V3 exercises in unit30.json

File: `src/content/cursos/ingles-a1/unit30.json`

Replace all 10 exercises in block B30_V3 (all are trivial matching or trivial MC):
- **I1**: `matching` (neighbourhood→translations) → `fill_blanks` ("I want to borrow a book. I am going to the ________." / library)
- **I2**: `multiple_choice` ("¿Qué te pones en los pies?") → `fill_blanks` ("My ________ are too small. I need to buy new ones." / shoes)
- **I3**: `matching` (living room furniture→translations) → `categorization` (Living Room: Sofa, Television, Armchair, Rug / Bedroom: Bed, Wardrobe, Pillow, Mirror)
- **I4**: `multiple_choice` ("¿Cómo se dice 'espejo'?") → `fill_blanks` ("She looks at herself in the ________ every morning." / mirror)
- **I5**: `matching` (arm/hand body parts→translations) → `fill_blanks` ("He broke his ________ playing football and now he can't write." / arm)
- **I6**: `multiple_choice` ("¿Cuál es un animal de granja?") → `multiple_choice` reformulated ("¿Qué animal produce leche en una granja?" / Cow, Tiger, Dog → o1)
- **I7**: `matching` (winter clothes→translations) → `categorization` (Winter: Jacket, Scarf, Gloves, Boots / Summer: T-shirt, Shorts, Dress, Sandals)
- **I8**: `multiple_choice` ("¿Cómo se dice 'cocina'?") → `fill_blanks` ("We prepare all our food in the ________." / kitchen)
- **I9**: `matching` (body parts→translations) → `short_writing` (describe your house: two rooms and what's in them)
- **I10**: `multiple_choice` ("¿Qué usas cuando llueve?") → `multiple_choice` reformulated ("It is raining outside. What do you put on before going out?" / Raincoat, Sunglasses, Shorts → o1)

All new exercises must include: `mastery_tag: "vocabulary"`, `complexity`, `concept_tags`.

### [ ] Step: Validate unit30.json

Run validation to confirm the file is correct:
1. `python3 -c "import json; json.load(open('src/content/cursos/ingles-a1/unit30.json'))"` — confirms valid JSON
2. `npm run validate-exercises` — confirms no missing fields or placeholder text
3. Confirm total exercises per block = 10 (unchanged)
4. Confirm all `interaction_id` values are preserved

Fix any issues found before marking complete.

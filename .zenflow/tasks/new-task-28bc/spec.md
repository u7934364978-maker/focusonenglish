# Technical Specification: Reemplazar Ejercicios Triviales de la Unidad 30

## Technical Context

- **File to modify**: `src/content/cursos/ingles-a1/unit30.json`
- **Language**: JSON (no code compilation required)
- **Validation**: `npm run validate-exercises` (checks for missing fields and placeholder text), JSON well-formedness
- **Reference unit for patterns**: `src/content/cursos/ingles-a1/unit29.json`

## Implementation Approach

### Single-file edit
All changes are confined to `src/content/cursos/ingles-a1/unit30.json`. No code, no new files. The `interaction_id` of every exercise is **preserved** to avoid breaking any external references.

### Exercise type schemas (derived from unit29.json)

**`fill_blanks`**
```json
{
  "interaction_id": "U30_Vx_Ix",
  "type": "fill_blanks",
  "prompt_es": "Completa la frase: 'She is wearing a ________ dress.'",
  "stimulus_en": "Sentence shown to student with blank",
  "correct_answer": "target_word",
  "options": ["target_word", "distractor1", "distractor2", "distractor3"],
  "mastery_tag": "vocabulary",
  "complexity": 3,
  "concept_tags": ["vocabulary", "adjectives"]
}
```
- `prompt_es`: instruction in Spanish + full English sentence with `________`
- `correct_answer`: the single correct word (string)
- `options`: 3–4 plausible options including the correct answer (all from the same semantic field)
- `complexity`: 3 for contextual vocabulary

**`categorization`**
```json
{
  "interaction_id": "U30_Vx_Ix",
  "type": "categorization",
  "prompt_es": "Clasifica los animales:",
  "categories": [
    { "id": "c1", "title": "Farm Animals", "items": ["Cow", "Horse", "Pig", "Chicken"] },
    { "id": "c2", "title": "Wild Animals", "items": ["Lion", "Tiger", "Elephant", "Bear"] }
  ],
  "correct_answer": "categorization_logic",
  "mastery_tag": "vocabulary",
  "complexity": 2,
  "concept_tags": ["vocabulary", "animals"]
}
```
- `correct_answer` is always the literal string `"categorization_logic"`
- `items`: 4 items per category, all of them English words the student has seen
- `complexity`: 2 for recognition-based categorization

**`short_writing`**
```json
{
  "interaction_id": "U30_Vx_Ix",
  "type": "short_writing",
  "prompt_es": "Describe qué ropa llevas hoy (al menos 2 prendas).",
  "stimulus_en": "I am wearing ________.",
  "correct_answer": "I am wearing [clothing items].",
  "mastery_tag": "vocabulary",
  "complexity": 4,
  "concept_tags": ["vocabulary", "clothes", "present_continuous"]
}
```
- `complexity`: 4 for productive writing

**`multiple_choice` (improved)**
```json
{
  "interaction_id": "U30_Vx_Ix",
  "type": "multiple_choice",
  "prompt_es": "Oración completa en contexto con blank o pregunta de comprensión.",
  "options": [
    { "id": "o1", "text": "Correct option" },
    { "id": "o2", "text": "Plausible distractor" },
    { "id": "o3", "text": "Plausible distractor" }
  ],
  "correct_answer": "o1",
  "mastery_tag": "vocabulary",
  "complexity": 2,
  "concept_tags": ["vocabulary", "relevant_tag"]
}
```

---

## Complete Replacement Map

### Block B30_V1 — "Vocabulary Review: My World"

**Exercises to keep unchanged**: I2, I7

**I1** (was: matching rooms → translations) → `fill_blanks`
- Sentence: "We cook dinner in the ________."
- Options: kitchen, bedroom, bathroom, living room
- correct_answer: "kitchen"
- concept_tags: ["vocabulary", "rooms"]

**I3** (was: matching body parts → translations) → `categorization`
- Category 1 "Head": Eyes, Nose, Mouth, Ears
- Category 2 "Body": Arm, Leg, Hand, Foot
- concept_tags: ["vocabulary", "body_parts"]

**I4** (was: MC "¿Cómo se dice 'camisa'?") → `fill_blanks`
- Sentence: "It is cold today. He is wearing a warm ________ and a scarf."
- Options: jacket, shirt, dress, skirt
- correct_answer: "jacket"
- concept_tags: ["vocabulary", "clothes"]

**I5** (was: matching animals → translations) → `categorization`
- Category 1 "Pets": Rabbit, Dog, Cat, Fish
- Category 2 "Wild Animals": Lion, Tiger, Horse, Bird
- concept_tags: ["vocabulary", "animals"]

**I6** (was: matching clothes → translations) → `fill_blanks`
- Sentence: "She is wearing a blue ________ and black shoes."
- Options: skirt, jacket, socks, shirt
- correct_answer: "skirt"
- concept_tags: ["vocabulary", "clothes"]

**I8** (was: matching neighbourhood places → translations) → `fill_blanks`
- Sentence: "I need medicine. Let's go to the ________."
- Options: pharmacy, library, cinema, bank
- correct_answer: "pharmacy"
- concept_tags: ["vocabulary", "neighbourhood"]

**I9** (was: MC "¿Qué parte del cuerpo usas para ver?") → `fill_blanks`
- Sentence: "She has beautiful green ________ and long hair."
- Options: eyes, ears, nose, mouth
- correct_answer: "eyes"
- concept_tags: ["vocabulary", "body_parts"]

**I10** (was: matching adjectives → translations) → `fill_blanks`
- (as per PRD example) Sentence: "This house has lots of natural light. It is a very ________ house."
- Options: bright, cozy, modern, traditional
- correct_answer: "bright"
- concept_tags: ["vocabulary", "adjectives"]

---

### Block B30_V2 — "Comprehensive Vocabulary Review"

**Exercises to keep unchanged**: I5, I7, I8, I10

**I1** (was: matching more animals → translations) → `categorization`
- Category 1 "Farm Animals": Cow, Horse, Pig, Chicken
- Category 2 "Wild Animals": Elephant, Tiger, Lion, Bear
- concept_tags: ["vocabulary", "animals"]

**I2** (was: matching more clothes → translations) → `fill_blanks`
- Sentence: "It is summer. She is wearing a light ________ and sandals."
- Options: dress, jeans, jacket, scarf
- correct_answer: "dress"
- concept_tags: ["vocabulary", "clothes"]

**I3** (was: matching face parts → translations) → `fill_blanks`
- Sentence: "He has a big ________ and small ears."
- Options: nose, mouth, hand, knee
- correct_answer: "nose"
- concept_tags: ["vocabulary", "body_parts"]

**I4** (was: matching furniture → translations) → `fill_blanks`
- Sentence: "I can see my face in the ________."
- Options: mirror, lamp, shelf, sofa
- correct_answer: "mirror"
- concept_tags: ["vocabulary", "furniture"]

**I6** (was: matching places → translations) → `categorization`
- Category 1 "Health & Education": Hospital, School, Pharmacy, Library
- Category 2 "Leisure & Food": Restaurant, Park, Cinema, Café
- concept_tags: ["vocabulary", "neighbourhood"]

**I9** (was: matching leg/foot body parts → translations) → `short_writing`
- prompt_es: "Describe a una persona: ¿qué ropa lleva y qué color tiene? Escribe al menos una oración completa."
- stimulus_en: "She / He is wearing ________."
- correct_answer: "She/He is wearing [colour] [clothing item]."
- concept_tags: ["vocabulary", "clothes", "present_continuous"]

---

### Block B30_V3 — "Final Vocabulary Check"

**Exercises to keep unchanged**: I2, I4, I6, I8, I10

**I1** (was: matching neighbourhood places → translations) → `fill_blanks`
- Sentence: "I want to borrow a book. I am going to the ________."
- Options: library, supermarket, pharmacy, park
- correct_answer: "library"
- concept_tags: ["vocabulary", "neighbourhood"]

**I2** (was: MC "¿Qué te pones en los pies?") → `fill_blanks` (replacement as per PRD)
- Sentence: "My ________ are too small. I need to buy new ones."
- Options: shoes, hat, shirt, gloves
- correct_answer: "shoes"
- concept_tags: ["vocabulary", "clothes"]

**I3** (was: matching living room furniture → translations) → `categorization`
- Category 1 "Living Room": Sofa, Television, Armchair, Rug
- Category 2 "Bedroom": Bed, Wardrobe, Pillow, Mirror
- concept_tags: ["vocabulary", "furniture", "rooms"]

**I4** (was: MC "¿Cómo se dice 'espejo'?") → `fill_blanks`
- Sentence: "She looks at herself in the ________ every morning."
- Options: mirror, window, door, shelf
- correct_answer: "mirror"
- concept_tags: ["vocabulary", "furniture"]

**I5** (was: matching arm/hand body parts → translations) → `fill_blanks`
- Sentence: "He broke his ________ playing football and now he can't write."
- Options: arm, leg, nose, ear
- correct_answer: "arm"
- concept_tags: ["vocabulary", "body_parts"]

**I6** (was: MC "¿Cuál es un animal de granja?") → `multiple_choice` (reformulated with context)
- prompt_es: "¿Qué animal produce leche en una granja?"
- Options: Cow, Tiger, Dog
- correct_answer: "o1" (Cow)
- concept_tags: ["vocabulary", "animals"]

**I7** (was: matching winter clothes → translations) → `categorization`
- Category 1 "Winter": Jacket, Scarf, Gloves, Boots
- Category 2 "Summer": T-shirt, Shorts, Dress, Sandals
- concept_tags: ["vocabulary", "clothes"]

**I8** (was: MC "¿Cómo se dice 'cocina'?") → `fill_blanks`
- Sentence: "We prepare all our food in the ________."
- Options: kitchen, bedroom, bathroom, garden
- correct_answer: "kitchen"
- concept_tags: ["vocabulary", "rooms"]

**I9** (was: matching more body parts → translations) → `short_writing`
- prompt_es: "Describe tu casa: menciona dos habitaciones y qué hay en ellas."
- stimulus_en: "In my house there is a ________ and a ________."
- correct_answer: "In my house there is a [room] and a [room]. In the [room] there is/are [furniture]."
- concept_tags: ["vocabulary", "rooms", "furniture"]

**I10** (was: MC "¿Qué usas cuando llueve?") → `multiple_choice` (contextual reformulation)
- prompt_es: "It is raining outside. What do you put on before going out?"
- Options: Raincoat, Sunglasses, Shorts
- correct_answer: "o1"
- concept_tags: ["vocabulary", "clothes"]

---

## Metadata Standards for New Exercises

Every new/modified exercise must include:
- `mastery_tag`: `"vocabulary"` for all replacements in V1/V2/V3 blocks
- `complexity`: 
  - `fill_blanks` with options → `3`
  - `categorization` → `2`
  - `short_writing` → `4`
  - `multiple_choice` contextual → `2`
- `concept_tags`: array of 2–3 strings from: `vocabulary`, `rooms`, `furniture`, `body_parts`, `clothes`, `animals`, `neighbourhood`, `adjectives`, `present_continuous`

## Source Code Changes

| File | Change |
|------|--------|
| `src/content/cursos/ingles-a1/unit30.json` | Replace 28 trivial exercises in B30_V1, B30_V2, B30_V3 |

No other files change.

## Verification

1. `python3 -c "import json; json.load(open('src/content/cursos/ingles-a1/unit30.json'))"` — confirms valid JSON
2. `npm run validate-exercises` — confirms no missing fields or placeholder text
3. Manual count: total exercises per block = 10 (unchanged)
4. All `interaction_id` values are preserved (same as original)

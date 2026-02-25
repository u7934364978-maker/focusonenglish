import fs from 'fs';
import path from 'path';

const unit1 = {
  "course": {
    "unit_id": "unit1",
    "unit_title": "Greetings and Personal Information",
    "level": "A1",
    "total_duration_minutes": 60,
    "language_ui": "es-ES",
    "target_language": "en"
  },
  "learning_outcomes": [
    "Use common greetings and farewells correctly",
    "Introduce yourself and provide basic personal information",
    "Use the verb 'to be' in affirmative forms with subject pronouns",
    "Apply possessive adjectives (my, your) in context"
  ],
  "blocks": [] as any[]
};

// Helper to create interaction IDs
let interactionCount = 1;
const getNextId = () => `A1_U1_I${interactionCount++}`;

// 1. VOCABULARY: Greetings (15 exercises)
const greetingsBlock = {
  "block_id": "B1",
  "title": "Greetings and Farewells",
  "content": [] as any[]
};

// 1.1 Matching (Recognition) - 3 exercises
for (let i = 0; i < 3; i++) {
  greetingsBlock.content.push({
    "interaction_id": getNextId(),
    "type": "matching",
    "prompt_es": "Relaciona los saludos con su traducción:",
    "pairs": [
      { "id": "p1", "left": "[[Hello|Hola]]", "right": "Hola" },
      { "id": "p2", "left": "[[Good morning|Buenos días]]", "right": "Buenos días" },
      { "id": "p3", "left": "[[Good afternoon|Buenas tardes]]", "right": "Buenas tardes" },
      { "id": "p4", "left": "[[Good evening|Buenas noches (saludo)]]", "right": "Buenas noches (saludo)" }
    ],
    "correct_answer": { "p1": "p1", "p2": "p2", "p3": "p3", "p4": "p4" },
    "mastery_tag": "vocabulary:greetings",
    "complexity": 1
  });
}

// 1.2 Multiple Choice (Context) - 6 exercises
const greetingScenarios = [
  { en: "[[Good morning|Buenos días]], how are you?", es: "Buenos días, ¿cómo estás?", ans: "Good morning" },
  { en: "[[Good afternoon|Buenas tardes]], Mr. Smith.", es: "Buenas tardes, Sr. Smith.", ans: "Good afternoon" },
  { en: "[[Hello|Hola]], my name is John.", es: "Hola, mi nombre es John.", ans: "Hello" },
  { en: "[[Goodbye|Adiós]], see you tomorrow!", es: "¡Adiós, nos vemos mañana!", ans: "Goodbye" },
  { en: "[[Good night|Buenas noches (despedida)]], sleep well.", es: "Buenas noches, duerme bien.", ans: "Good night" },
  { en: "[[Hi|Hola (informal)]], I am Sarah.", es: "Hola, soy Sarah.", ans: "Hi" }
];

greetingScenarios.forEach(s => {
  greetingsBlock.content.push({
    "interaction_id": getNextId(),
    "type": "multiple_choice",
    "prompt_es": `Traduce: "${s.es}"`,
    "stimulus_en": s.en.replace(s.ans, "________"),
    "options": [
      { "id": "o1", "text": `[[${s.ans}|${s.ans === 'Good morning' ? 'Buenos días' : s.ans === 'Good afternoon' ? 'Buenas tardes' : s.ans === 'Hello' ? 'Hola' : s.ans === 'Goodbye' ? 'Adiós' : s.ans === 'Good night' ? 'Buenas noches' : 'Hola'}]]` },
      { "id": "o2", "text": "[[Wrong|Incorrecto]]" },
      { "id": "o3", "text": "[[Another|Otro]]" }
    ].sort(() => Math.random() - 0.5),
    "correct_answer": "o1",
    "mastery_tag": "vocabulary:greetings",
    "complexity": 2
  });
});

// 1.3 Sentence Building (Production) - 6 exercises
for (let i = 0; i < 6; i++) {
  greetingsBlock.content.push({
    "interaction_id": getNextId(),
    "type": "reorder_words",
    "prompt_es": "Ordena la frase: 'Hola, mi nombre es John'",
    "options": [
      { "id": "w1", "text": "[[Hello|Hola]]" },
      { "id": "w2", "text": "[[my|mi]]" },
      { "id": "w3", "text": "[[name|nombre]]" },
      { "id": "w4", "text": "[[is|es]]" },
      { "id": "w5", "text": "John" }
    ],
    "correct_answer": ["w1", "w2", "w3", "w4", "w5"],
    "mastery_tag": "vocabulary:introductions",
    "complexity": 3
  });
}

unit1.blocks.push(greetingsBlock);

// 2. PERSONAL INFO & PERSONAL PRONOUNS (20 exercises)
const infoBlock = {
  "block_id": "B2",
  "title": "Personal Information",
  "content": [] as any[]
};

// 2.1 Vocabulary: Personal info (5 exercises)
for (let i = 0; i < 5; i++) {
    infoBlock.content.push({
        "interaction_id": getNextId(),
        "type": "matching",
        "prompt_es": "Relaciona los datos personales:",
        "pairs": [
          { "id": "p1", "left": "[[Name|Nombre]]", "right": "Nombre" },
          { "id": "p2", "left": "[[Surname|Apellido]]", "right": "Apellido" },
          { "id": "p3", "left": "[[First name|Primer nombre]]", "right": "Primer nombre" },
          { "id": "p4", "left": "[[Last name|Apellido]]", "right": "Apellido" }
        ],
        "correct_answer": { "p1": "p1", "p2": "p2", "p3": "p3", "p4": "p4" },
        "mastery_tag": "vocabulary:personal_info"
    });
}

// 2.2 Grammar: Subject Pronouns (15 exercises)
const pronouns = [
    { en: "[[I|Yo]] [[am|soy]] a [[student|estudiante]].", es: "Yo soy estudiante.", ans: "[[I|Yo]]" },
    { en: "[[You|Tú]] [[are|eres]] [[my|mi]] [[friend|amigo]].", es: "Tú eres mi amigo.", ans: "[[You|Tú]]" },
    { en: "[[He|Él]] [[is|es]] a [[teacher|profesor]].", es: "Él es profesor.", ans: "[[He|Él]]" },
    { en: "[[She|Ella]] [[is|es]] [[happy|feliz]].", es: "Ella es feliz.", ans: "[[She|Ella]]" },
    { en: "[[It|Ello]] [[is|es]] a [[book|libro]].", es: "Es un libro.", ans: "[[It|Ello]]" },
    { en: "[[We|Nosotros]] [[are|estamos]] [[here|aquí]].", es: "Nosotros estamos aquí.", ans: "[[We|Nosotros]]" },
    { en: "[[They|Ellos]] [[are|son]] [[students|estudiantes]].", es: "Ellos son estudiantes.", ans: "[[They|Ellos]]" }
];

for (let i = 0; i < 15; i++) {
    const p = pronouns[i % pronouns.length];
    infoBlock.content.push({
        "interaction_id": getNextId(),
        "type": "multiple_choice",
        "prompt_es": `Completa con el pronombre correcto para: "${p.es}"`,
        "stimulus_en": p.en.replace(p.ans, "________"),
        "options": [
            { "id": "o1", "text": p.ans },
            { "id": "o2", "text": "[[Wrong1|Incorrecto1]]" },
            { "id": "o3", "text": "[[Wrong2|Incorrecto2]]" }
        ].sort(() => Math.random() - 0.5),
        "correct_answer": "o1",
        "mastery_tag": "grammar:pronouns"
    });
}

unit1.blocks.push(infoBlock);

// 3. GRAMMAR: Verb 'to be' & Possessives (25 exercises)
const grammarBlock = {
    "block_id": "B3",
    "title": "Verb 'to be' and Possessives",
    "content": [] as any[]
};

// 3.1 Verb 'to be' (15 exercises)
const toBeForms = [
    { en: "I [[am|soy]] [[John|John]].", ans: "[[am|soy]]" },
    { en: "[[You|Tú]] [[are|eres]] a [[student|estudiante]].", ans: "[[are|eres]]" },
    { en: "[[He|Él]] [[is|es]] [[my|mi]] [[friend|amigo]].", ans: "[[is|es]]" },
    { en: "[[She|Ella]] [[is|es]] a [[teacher|profesor]].", ans: "[[is|es]]" },
    { en: "[[It|Ello]] [[is|es]] a [[pen|bolígrafo]].", ans: "[[is|es]]" },
    { en: "[[We|Nosotros]] [[are|somos]] [[happy|felices]].", ans: "[[are|somos]]" },
    { en: "[[They|Ellos]] [[are|son]] [[busy|ocupados]].", ans: "[[are|son]]" }
];

for (let i = 0; i < 15; i++) {
    const f = toBeForms[i % toBeForms.length];
    grammarBlock.content.push({
        "interaction_id": getNextId(),
        "type": "transformation",
        "prompt_es": "Completa con 'am', 'is' o 'are':",
        "stimulus_en": f.en.replace(f.ans, "________"),
        "correct_answer": f.ans.replace(/\[\[|\]\]/g, '').split('|')[0],
        "mastery_tag": "grammar:to_be"
    });
}

// 3.2 Possessive Adjectives: My, Your (10 exercises)
const possessives = [
    { en: "[[My|Mi]] [[name|nombre]] [[is|es]] David.", ans: "[[My|Mi]]" },
    { en: "[[What|Qué]] [[is|es]] [[your|tu]] [[name|nombre]]?", ans: "[[your|tu]]" }
];

for (let i = 0; i < 10; i++) {
    const p = possessives[i % possessives.length];
    grammarBlock.content.push({
        "interaction_id": getNextId(),
        "type": "multiple_choice",
        "prompt_es": "Elige el posesivo correcto:",
        "stimulus_en": p.en.replace(p.ans, "________"),
        "options": [
            { "id": "o1", "text": p.ans },
            { "id": "o2", "text": p.ans.includes('My') ? "[[Your|Tu]]" : "[[My|Mi]]" }
        ].sort(() => Math.random() - 0.5),
        "correct_answer": "o1",
        "mastery_tag": "grammar:possessives"
    });
}

unit1.blocks.push(grammarBlock);

// 4. SPECIALIZED: Listening & Speaking (15 exercises)
const specialBlock = {
    "block_id": "B4",
    "title": "Listening and Speaking Practice",
    "content": [] as any[]
};

// 4.1 Listening (8 exercises)
for (let i = 0; i < 8; i++) {
    specialBlock.content.push({
        "interaction_id": getNextId(),
        "type": "listening_dictation",
        "prompt_es": "Escucha y escribe la palabra que falta:",
        "audio_url": `/audio/a1/unit1/exercise_${i}.mp3`,
        "transcript_template": "[[Hello|Hola]], [[my|mi]] [[name|nombre]] [[is|es]] ________.",
        "correct_answer": "John",
        "mastery_tag": "listening"
    });
}

// 4.2 Speaking (7 exercises)
for (let i = 0; i < 7; i++) {
    specialBlock.content.push({
        "interaction_id": getNextId(),
        "type": "speaking-analysis",
        "prompt_es": "Repite la siguiente frase:",
        "stimulus_en": "[[Nice to meet you|Encantado de conocerte]].",
        "referenceText": "[[Nice to meet you|Encantado de conocerte]]",
        "mastery_tag": "speaking"
    });
}

unit1.blocks.push(specialBlock);

// FINAL CHECK
console.log(`Total exercises generated: ${interactionCount - 1}`);

fs.writeFileSync(
  path.join(process.cwd(), 'src/content/cursos/ingles-a1/unit1.json'),
  JSON.stringify(unit1, null, 2)
);
console.log("✅ Unit 1 fixed and saved!");

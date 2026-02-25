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

let interactionCount = 1;
const getNextId = () => `A1_U1_I${interactionCount++}`;

// 1. GREETINGS & FAREWELLS (15 exercises)
const greetingsBlock = {
  "block_id": "B1",
  "title": "Greetings and Farewells",
  "content": [] as any[]
};

// Variety in greetings
const greetingPairs = [
    { en: "[[Hello|Hola]]", es: "Hola" },
    { en: "[[Good morning|Buenos días]]", es: "Buenos días" },
    { en: "[[Good afternoon|Buenas tardes]]", es: "Buenas tardes" },
    { en: "[[Good evening|Buenas noches (saludo)]]", es: "Buenas noches (saludo)" },
    { en: "[[Goodbye|Adiós]]", es: "Adiós" },
    { en: "[[Bye|Chao]]", es: "Chao" },
    { en: "[[Hi|Hola (informal)]]", es: "Hola (informal)" },
    { en: "[[Good night|Buenas noches (despedida)]]", es: "Buenas noches (despedida)" }
];

// 3 Matching
for (let i = 0; i < 3; i++) {
  const startIdx = (i * 4) % greetingPairs.length;
  const currentPairs = greetingPairs.slice(startIdx, startIdx + 4);
  if (currentPairs.length < 4) currentPairs.push(...greetingPairs.slice(0, 4 - currentPairs.length));

  greetingsBlock.content.push({
    "interaction_id": getNextId(),
    "type": "matching",
    "prompt_es": "Relaciona los saludos con su traducción:",
    "pairs": currentPairs.map((p, idx) => ({ id: `p${idx+1}`, left: p.en, right: p.es })),
    "correct_answer": { "p1": "p1", "p2": "p2", "p3": "p3", "p4": "p4" },
    "mastery_tag": "vocabulary:greetings",
    "complexity": 1
  });
}

// 6 Multiple Choice
const scenarios = [
    { en: "[[Good morning|Buenos días]], how are you?", es: "Buenos días, ¿cómo estás?", ans: "[[Good morning|Buenos días]]", wrong: ["[[Good night|Buenas noches]]", "[[Goodbye|Adiós]]"] },
    { en: "[[Hello|Hola]], I am a teacher.", es: "Hola, soy profesor.", ans: "[[Hello|Hola]]", wrong: ["[[Bye|Chao]]", "[[Surname|Apellido]]"] },
    { en: "[[Goodbye|Adiós]], see you soon!", es: "¡Adiós, nos vemos pronto!", ans: "[[Goodbye|Adiós]]", wrong: ["[[Hi|Hola]]", "[[Name|Nombre]]"] },
    { en: "[[Good night|Buenas noches]], sleep well.", es: "Buenas noches, duerme bien.", ans: "[[Good night|Buenas noches]]", wrong: ["[[Good morning|Buenos días]]", "[[Hello|Hola]]"] },
    { en: "[[Hi|Hola]], my name is David.", es: "Hola, mi nombre es David.", ans: "[[Hi|Hola]]", wrong: ["[[Bye|Chao]]", "[[Teacher|Profesor]]"] },
    { en: "[[Good afternoon|Buenas tardes]], class.", es: "Buenas tardes, clase.", ans: "[[Good afternoon|Buenas tardes]]", wrong: ["[[Good evening|Buenas noches]]", "[[Hi|Hola]]"] }
];

scenarios.forEach(s => {
  greetingsBlock.content.push({
    "interaction_id": getNextId(),
    "type": "multiple_choice",
    "prompt_es": `¿Cómo dirías en inglés: "${s.es}"?`,
    "stimulus_en": s.en.replace(s.ans.split('|')[0].replace('[[', ''), "________"),
    "options": [
      { "id": "o1", "text": s.ans },
      { "id": "o2", "text": s.wrong[0] },
      { "id": "o3", "text": s.wrong[1] }
    ].sort(() => Math.random() - 0.5),
    "correct_answer": "o1",
    "mastery_tag": "vocabulary:greetings",
    "complexity": 2
  });
});

// 6 Sentence Building
const sentences = [
    { es: "Hola, mi nombre es John", words: ["[[Hello|Hola]]", "[[my|mi]]", "[[name|nombre]]", "[[is|es]]", "John"] },
    { es: "Buenos días, soy Sarah", words: ["[[Good morning|Buenos días]]", "[[I|yo]]", "[[am|soy]]", "Sarah"] },
    { es: "Adiós, nos vemos pronto", words: ["[[Goodbye|Adiós]]", "[[see|vemos]]", "[[you|te]]", "[[soon|pronto]]"] },
    { es: "Hola, ¿cómo estás?", words: ["[[Hi|Hola]]", "[[how|cómo]]", "[[are|estás]]", "[[you|tú]]"] },
    { es: "Buenas tardes, Sr. Jones", words: ["[[Good afternoon|Buenas tardes]]", "[[Mr|Sr]]", "Jones"] },
    { es: "Buenas noches, adiós", words: ["[[Good night|Buenas noches]]", "[[goodbye|adiós]]"] }
];

sentences.forEach(s => {
    greetingsBlock.content.push({
        "interaction_id": getNextId(),
        "type": "reorder_words",
        "prompt_es": `Ordena la frase: "${s.es}"`,
        "options": s.words.map((w, idx) => ({ id: `w${idx+1}`, text: w })),
        "correct_answer": s.words.map((_, idx) => `w${idx+1}`),
        "mastery_tag": "vocabulary:introductions",
        "complexity": 3
    });
});

unit1.blocks.push(greetingsBlock);

// 2. PERSONAL INFO & PRONOUNS (20 exercises)
const infoBlock = {
  "block_id": "B2",
  "title": "Personal Information & Pronouns",
  "content": [] as any[]
};

const infoPairs = [
    { en: "[[Name|Nombre]]", es: "Nombre" },
    { en: "[[Surname|Apellido]]", es: "Apellido" },
    { en: "[[Email|Correo electrónico]]", es: "Correo electrónico" },
    { en: "[[Phone number|Número de teléfono]]", es: "Número de teléfono" },
    { en: "[[First name|Primer nombre]]", es: "Primer nombre" },
    { en: "[[Last name|Apellido]]", es: "Apellido" }
];

for (let i = 0; i < 5; i++) {
    const startIdx = i % infoPairs.length;
    const currentPairs = infoPairs.slice(startIdx, startIdx + 4);
    if (currentPairs.length < 4) currentPairs.push(...infoPairs.slice(0, 4 - currentPairs.length));

    infoBlock.content.push({
        "interaction_id": getNextId(),
        "type": "matching",
        "prompt_es": "Vocabulario de información personal:",
        "pairs": currentPairs.map((p, idx) => ({ id: `p${idx+1}`, left: p.en, right: p.es })),
        "correct_answer": { "p1": "p1", "p2": "p2", "p3": "p3", "p4": "p4" },
        "mastery_tag": "vocabulary:personal_info"
    });
}

const pronounExercises = [
    { en: "[[I|Yo]] [[am|soy]] [[happy|feliz]].", es: "Yo soy feliz.", ans: "[[I|Yo]]" },
    { en: "[[You|Tú]] [[are|eres]] [[smart|inteligente]].", es: "Tú eres inteligente.", ans: "[[You|Tú]]" },
    { en: "[[He|Él]] [[is|es]] [[tall|alto]].", es: "Él es alto.", ans: "[[He|Él]]" },
    { en: "[[She|Ella]] [[is|es]] [[fast|rápida]].", es: "Ella es rápida.", ans: "[[She|Ella]]" },
    { en: "[[It|Ello]] [[is|es]] [[cold|frío]].", es: "Hace frío / Es frío.", ans: "[[It|Ello]]" },
    { en: "[[We|Nosotros]] [[are|estamos]] [[ready|listos]].", es: "Nosotros estamos listos.", ans: "[[We|Nosotros]]" },
    { en: "[[They|Ellos]] [[are|son]] [[late|tarde/retrasados]].", es: "Ellos llegan tarde.", ans: "[[They|Ellos]]" }
];

for (let i = 0; i < 15; i++) {
    const ex = pronounExercises[i % pronounExercises.length];
    infoBlock.content.push({
        "interaction_id": getNextId(),
        "type": "multiple_choice",
        "prompt_es": `Completa con el pronombre para: "${ex.es}"`,
        "stimulus_en": ex.en.replace(ex.ans, "________"),
        "options": [
            { "id": "o1", "text": ex.ans },
            { "id": "o2", "text": "[[Me|A mí]]" },
            { "id": "o3", "text": "[[My|Mi]]" }
        ].sort(() => Math.random() - 0.5),
        "correct_answer": "o1",
        "mastery_tag": "grammar:pronouns"
    });
}

unit1.blocks.push(infoBlock);

// 3. VERB TO BE & POSSESSIVES (25 exercises)
const grammarBlock = {
    "block_id": "B3",
    "title": "Verb 'to be' and Possessives",
    "content": [] as any[]
};

const toBeForms = [
    { en: "I [[am|soy]] [[from|de]] [[Spain|España]].", ans: "am" },
    { en: "You [[are|eres]] [[my|mi]] [[teacher|profesor]].", ans: "are" },
    { en: "He [[is|es]] [[my|mi]] [[brother|hermano]].", ans: "is" },
    { en: "She [[is|es]] [[my|mi]] [[sister|hermana]].", ans: "is" },
    { en: "It [[is|es]] [[a|un]] [[cat|gato]].", ans: "is" },
    { en: "We [[are|estamos]] [[friends|amigos]].", ans: "are" },
    { en: "They [[are|son]] [[doctors|doctores]].", ans: "are" }
];

for (let i = 0; i < 15; i++) {
    const f = toBeForms[i % toBeForms.length];
    grammarBlock.content.push({
        "interaction_id": getNextId(),
        "type": "transformation",
        "prompt_es": "Completa con 'am', 'is' o 'are':",
        "stimulus_en": f.en.replace(f.ans, "________"),
        "correct_answer": f.ans,
        "mastery_tag": "grammar:to_be"
    });
}

const possessives = [
    { en: "[[My|Mi]] [[name|nombre]] [[is|es]] David.", ans: "[[My|Mi]]" },
    { en: "[[Your|Tu]] [[surname|apellido]] [[is|es]] Smith.", ans: "[[Your|Tu]]" },
    { en: "[[My|Mi]] [[friend|amigo]] [[is|es]] [[here|aquí]].", ans: "[[My|Mi]]" },
    { en: "[[Your|Tu]] [[teacher|profesor]] [[is|es]] [[nice|amable]].", ans: "[[Your|Tu]]" }
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

// 4. LISTENING & SPEAKING (15 exercises)
const specialBlock = {
    "block_id": "B4",
    "title": "Listening and Speaking Practice",
    "content": [] as any[]
};

const listeningItems = [
    { transcript: "[[Hello|Hola]], [[my|mi]] [[name|nombre]] [[is|es]] [[John|John]].", missing: "John" },
    { transcript: "[[Good morning|Buenos días]], [[how|cómo]] [[are|estás]] [[you|tú]]?", missing: "morning" },
    { transcript: "[[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]].", missing: "student" },
    { transcript: "[[He|Él]] [[is|es]] [[my|mi]] [[friend|amigo]].", missing: "friend" }
];

for (let i = 0; i < 8; i++) {
    const item = listeningItems[i % listeningItems.length];
    specialBlock.content.push({
        "interaction_id": getNextId(),
        "type": "listening_dictation",
        "prompt_es": "Escucha y escribe la palabra que falta:",
        "audio_url": `/audio/a1/unit1/exercise_${i}.mp3`,
        "transcript_template": item.transcript.replace(item.missing, "________"),
        "correct_answer": item.missing,
        "mastery_tag": "listening"
    });
}

const speakingSentences = [
    "[[Nice to meet you|Encantado de conocerte]].",
    "[[Hello|Hola]], [[my|mi]] [[name|nombre]] [[is|es]] David.",
    "[[Good morning|Buenos días]], [[how|cómo]] [[are|estás]] [[you|tú]]?",
    "[[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]].",
    "[[She|Ella]] [[is|es]] [[my|mi]] [[teacher|profesor]]."
];

for (let i = 0; i < 7; i++) {
    const s = speakingSentences[i % speakingSentences.length];
    specialBlock.content.push({
        "interaction_id": getNextId(),
        "type": "speaking-analysis",
        "prompt_es": "Repite la siguiente frase:",
        "stimulus_en": s,
        "referenceText": s,
        "mastery_tag": "speaking"
    });
}

unit1.blocks.push(specialBlock);

console.log(`Total exercises generated: ${interactionCount - 1}`);

fs.writeFileSync(
  path.join(process.cwd(), 'src/content/cursos/ingles-a1/unit1.json'),
  JSON.stringify(unit1, null, 2)
);
console.log("✅ Unit 1 fully corrected and saved!");

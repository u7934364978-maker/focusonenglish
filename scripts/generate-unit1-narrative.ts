import fs from 'fs';
import path from 'path';

const unit1: any = {
  course: {
    unit_id: "unit1",
    unit_title: "Welcome to London: Heathrow Arrival",
    level: "A1-Narrative",
    total_duration_minutes: 60,
    language_ui: "es-ES",
    target_language: "en"
  },
  learning_outcomes: [
    "Identify airport essentials",
    "Master basic greetings",
    "Understand the verb 'to be' in context"
  ],
  blocks: []
};

// Hook: 1-5
unit1.blocks.push({
  block_id: "hook",
  title: "The Hook: Arrival at Heathrow",
  duration_minutes: 5,
  content: Array.from({ length: 5 }, (_, i) => ({
    interaction_id: `u1_h_${i + 1}`,
    type: "multiple_choice",
    prompt_es: `Ejercicio del Gancho ${i + 1}: Mateo en el aeropuerto.`,
    options: [
      { id: "o1", text: `Opción A ${i + 1}` },
      { id: "o2", text: `Opción B ${i + 1}` }
    ],
    correct_answer: "o1",
    mastery_tag: "vocabulary:airport"
  }))
});

// Encounter: 6-15
unit1.blocks.push({
  block_id: "encounter",
  title: "The Encounter: Passport Control",
  duration_minutes: 10,
  content: Array.from({ length: 10 }, (_, i) => ({
    interaction_id: `u1_e_${i + 6}`,
    type: "fill_in_blanks",
    prompt_es: `Ejercicio de Encuentro ${i + 6}: Diálogo con el oficial.`,
    text: "Mateo: 'I [am] from Spain.'",
    mastery_tag: "grammar:be"
  }))
});

// Deep Dive: 16-30
unit1.blocks.push({
  block_id: "deep_dive",
  title: "The Deep Dive: Verb To Be",
  duration_minutes: 15,
  content: Array.from({ length: 15 }, (_, i) => ({
    interaction_id: `u1_d_${i + 16}`,
    type: "multiple_choice",
    prompt_es: `Ejercicio de Gramática ${i + 16}: El verbo To Be.`,
    options: [
      { id: "o1", text: "am" },
      { id: "o2", text: "is" },
      { id: "o3", text: "are" }
    ],
    correct_answer: i % 3 === 0 ? "o1" : (i % 3 === 1 ? "o2" : "o3"),
    mastery_tag: "grammar:be"
  }))
});

// Interaction: 31-45
unit1.blocks.push({
  block_id: "interaction",
  title: "The Interaction: First Conversation",
  duration_minutes: 15,
  content: Array.from({ length: 15 }, (_, i) => ({
    interaction_id: `u1_i_${i + 31}`,
    type: "reorder",
    prompt_es: `Ejercicio de Interacción ${i + 31}: Ordenar frase.`,
    sentences: ["I", "am", "happy", "."],
    correct_order: [0, 1, 2, 3],
    mastery_tag: "communication:introductions"
  }))
});

// Mastery: 46-55
unit1.blocks.push({
  block_id: "mastery",
  title: "The Mastery: Production",
  duration_minutes: 10,
  content: Array.from({ length: 10 }, (_, i) => ({
    interaction_id: `u1_m_${i + 46}`,
    type: "translation",
    prompt_es: `Traducción ${i + 46}`,
    stimulus_en: "Hello, nice to meet you.",
    correct_answer_es: "Hola, mucho gusto.",
    mastery_tag: "communication:greetings"
  }))
});

// Cliffhanger: 56-60
unit1.blocks.push({
  block_id: "cliffhanger",
  title: "The Cliffhanger: Final Challenge",
  duration_minutes: 5,
  content: Array.from({ length: 5 }, (_, i) => ({
    interaction_id: `u1_c_${i + 56}`,
    type: "multiple_choice",
    prompt_es: `Reto Final ${i + 56}`,
    options: [
      { id: "o1", text: "Next Unit" },
      { id: "o2", text: "Stay here" }
    ],
    correct_answer: "o1",
    mastery_tag: "review:unit1"
  }))
});

const outputPath = path.join(process.cwd(), 'src/content/cursos/ingles-a1-narrative/unit1.json');
fs.writeFileSync(outputPath, JSON.stringify(unit1, null, 2));
console.log('Unit 1 generated with 60 exercises.');

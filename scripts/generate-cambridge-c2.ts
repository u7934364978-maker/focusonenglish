import fs from 'fs';
import path from 'path';

const syllabusC2 = [
  {
    id: 1,
    title: "Nuance and Subtlety",
    grammar: "Precise word choice and connotation",
    vocabulary: "Advanced synonyms, shades of meaning",
    interactions: [
      {
        type: "multiple_choice",
        prompt_es: "Elige el verbo que mejor describe caminar con arrogancia:",
        question_en: "He ______ into the room, clearly proud of his recent promotion.",
        options: [
          { id: "a", text: "swaggered" },
          { id: "b", text: "shuffled" },
          { id: "c", text: "trudged" },
          { id: "d", text: "strolled" }
        ],
        correct_answer: "a",
        mastery_tag: "vocabulary"
      },
      {
        type: "transformation",
        prompt_es: "Completa con el adjetivo preciso (relacionado con el clima):",
        stimulus_en: "The morning air was ______ (unpleasantly cold and damp).",
        correct_answer: "raw",
        mastery_tag: "vocabulary"
      }
    ]
  },
  {
    id: 2,
    title: "Idiomaticity (Proficiency)",
    grammar: "Complex idioms and fixed expressions",
    vocabulary: "Metaphors, binominal expressions",
    interactions: [
      {
        type: "multiple_choice",
        prompt_es: "Elige la expresión idiomática correcta:",
        question_en: "The two candidates are ______ in the polls; it's impossible to say who will win.",
        options: [
          { id: "a", text: "neck and neck" },
          { id: "b", text: "head and shoulders" },
          { id: "c", text: "hand and foot" },
          { id: "d", text: "eye to eye" }
        ],
        correct_answer: "a",
        mastery_tag: "vocabulary"
      },
      {
        type: "multiple_choice",
        prompt_es: "Completa el binomio:",
        question_en: "The peace and ______ of the countryside was a welcome relief from the city.",
        options: [
          { id: "a", text: "quiet" },
          { id: "b", text: "calm" },
          { id: "c", text: "silence" },
          { id: "d", text: "rest" }
        ],
        correct_answer: "a",
        mastery_tag: "vocabulary"
      }
    ]
  },
  {
    id: 3,
    title: "Rhetorical Devices",
    grammar: "Parallelism and Emphasis",
    vocabulary: "Formal and Literary devices",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Completa para crear una estructura paralela enfática:",
        stimulus_en: "Not only did he lose his job, but ______ (he/also/lose) his house.",
        correct_answer: "he also lost",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Transforma usando inversión literaria:",
        stimulus_en: "The castle stood on the hill. -> On the hill ______ the castle.",
        correct_answer: "stood",
        mastery_tag: "grammar"
      }
    ]
  },
  {
    id: 4,
    title: "Open Cloze (Complex)",
    grammar: "Structural precision",
    vocabulary: "Prepositions and Particles",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Completa con la preposición correcta en esta estructura compleja:",
        stimulus_en: "There is no doubt as ______ the validity of the results.",
        correct_answer: "to",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Completa la frase hecha:",
        stimulus_en: "He was ______ the verge of tears when he heard the news.",
        correct_answer: "on",
        mastery_tag: "vocabulary"
      }
    ]
  },
  {
    id: 5,
    title: "Subjunctive and Formal Structures",
    grammar: "The Subjunctive Mood and Archaisms",
    vocabulary: "Legal and highly formal language",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Completa usando el subjuntivo formal:",
        stimulus_en: "It is essential that he ______ (be) informed immediately.",
        correct_answer: "be",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Completa la estructura formal condicional:",
        stimulus_en: "______ it not for your help, I would have failed.",
        correct_answer: "Were",
        mastery_tag: "grammar"
      }
    ]
  }
];

const outputDir = 'src/content/cursos/ingles-c2';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

syllabusC2.forEach(unit => {
  const unitData = {
    course: {
      language_ui: "es-ES",
      target_language: "en",
      level: "C2",
      unit_id: `U${unit.id}`,
      unit_title: unit.title,
      total_duration_minutes: 60
    },
    learning_outcomes: [
      `Master ${unit.grammar} at CPE level`,
      `Expand vocabulary in ${unit.vocabulary}`,
      "Achieve near-native precision and stylistic control"
    ],
    mastery_tags: ["grammar", "vocabulary", "cpe-practice", "style"],
    blocks: [
      {
        block_id: `C2_U${unit.id}_BLOCK_1`,
        title: `Proficiency Practice: ${unit.title}`,
        duration_minutes: 60,
        content: unit.interactions.map((inter, idx) => ({
          interaction_id: `C2_U${unit.id}_I${idx + 1}`,
          ...inter
        }))
      }
    ]
  };

  fs.writeFileSync(
    path.join(outputDir, `unit${unit.id}.json`),
    JSON.stringify(unitData, null, 2),
    'utf-8'
  );
});

console.log(`Generated ${syllabusC2.length} high-quality C2 units.`);

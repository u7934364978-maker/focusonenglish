import fs from 'fs';
import path from 'path';

const syllabusC1 = [
  {
    id: 1,
    title: "Register and Style",
    grammar: "Formal vs Informal Register",
    vocabulary: "Phrasal verbs and their formal equivalents",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Sustituye el phrasal verb por una opción más formal:",
        stimulus_en: "The committee decided to ______ (put off) the meeting until next month.",
        correct_answer: "postpone",
        mastery_tag: "grammar"
      },
      {
        type: "multiple_choice",
        prompt_es: "Elige la opción más adecuada para un contexto académico:",
        question_en: "The results of the study ______ that further research is required.",
        options: [
          { id: "a", text: "indicate" },
          { id: "b", text: "show up" },
          { id: "c", text: "point out" },
          { id: "d", text: "say" }
        ],
        correct_answer: "a",
        mastery_tag: "vocabulary"
      }
    ]
  },
  {
    id: 2,
    title: "Advanced Inversion",
    grammar: "Inversion after negative adverbials",
    vocabulary: "Rhetorical devices, Sophisticated adverbs",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Completa la oración usando inversión:",
        stimulus_en: "Never ______ I witnessed such a display of talent in my entire career.",
        correct_answer: "have",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Completa con la forma invertida correcta:",
        stimulus_en: "Hardly ______ (the performance/start) when the power went out.",
        correct_answer: "had the performance started",
        mastery_tag: "grammar"
      }
    ]
  },
  {
    id: 3,
    title: "Conditional Nuances",
    grammar: "Mixed conditionals and alternatives to 'if'",
    vocabulary: "Risk and Probability",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Completa con el condicional mixto adecuado:",
        stimulus_en: "If I ______ (study) harder at school, I would have a better job now.",
        correct_answer: "had studied",
        mastery_tag: "grammar"
      },
      {
        type: "multiple_choice",
        prompt_es: "Elige la alternativa a 'if' correcta:",
        question_en: "______ you follow the safety instructions, you shouldn't have any problems.",
        options: [
          { id: "a", text: "Provided that" },
          { id: "b", text: "Unless" },
          { id: "c", text: "Suppose" },
          { id: "d", text: "In case" }
        ],
        correct_answer: "a",
        mastery_tag: "grammar"
      }
    ]
  },
  {
    id: 4,
    title: "Complex Passives",
    grammar: "Impersonal and Causative Passives",
    vocabulary: "Reports and Statements",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Transforma a la forma impersonal pasiva:",
        stimulus_en: "People say he is a genius. -> He is ______ to be a genius.",
        correct_answer: "said",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Completa con la forma causative passive:",
        stimulus_en: "The CEO had his speech ______ (write) by a professional ghostwriter.",
        correct_answer: "written",
        mastery_tag: "grammar"
      }
    ]
  },
  {
    id: 5,
    title: "Word Formation (Advanced)",
    grammar: "Suffixes, Prefixes and Internal changes",
    vocabulary: "Abstract nouns, Complex adjectives",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Completa con la forma correcta de la palabra entre paréntesis:",
        stimulus_en: "The ______ (discover) of the new planet was a major milestone.",
        correct_answer: "discovery",
        mastery_tag: "vocabulary"
      },
      {
        type: "transformation",
        prompt_es: "Completa con la forma correcta:",
        stimulus_en: "His behaviour was completely ______ (justify) and caused a lot of anger.",
        correct_answer: "unjustifiable",
        mastery_tag: "vocabulary"
      }
    ]
  },
  {
    id: 6,
    title: "Collocations and Idioms",
    grammar: "Fixed expressions and collocations",
    vocabulary: "Professional and Academic collocations",
    interactions: [
      {
        type: "multiple_choice",
        prompt_es: "Elige la colocación correcta:",
        question_en: "The company needs to ______ a decision before the end of the week.",
        options: [
          { id: "a", text: "reach" },
          { id: "b", text: "do" },
          { id: "c", text: "get" },
          { id: "d", text: "arrive" }
        ],
        correct_answer: "a",
        mastery_tag: "vocabulary"
      },
      {
        type: "multiple_choice",
        prompt_es: "Elige el idiom adecuado:",
        question_en: "He's always ______ the bush instead of getting to the point.",
        options: [
          { id: "a", text: "beating around" },
          { id: "b", text: "hitting around" },
          { id: "c", text: "walking around" },
          { id: "d", text: "running around" }
        ],
        correct_answer: "a",
        mastery_tag: "vocabulary"
      }
    ]
  },
  {
    id: 7,
    title: "Relative Clauses (Advanced)",
    grammar: "Reduced relative clauses and formal relative pronouns",
    vocabulary: "Defining and Non-defining context",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Completa con el pronombre relativo adecuado:",
        stimulus_en: "The person to ______ you should speak is the manager.",
        correct_answer: "whom",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Transforma usando una cláusula relativa reducida:",
        stimulus_en: "The students who are living in the dorms are happy. -> The students ______ in the dorms are happy.",
        correct_answer: "living",
        mastery_tag: "grammar"
      }
    ]
  },
  {
    id: 8,
    title: "Speculating about the Past",
    grammar: "Modal verbs for past speculation and deduction",
    vocabulary: "History and Detective work",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Completa con el modal de pasado adecuado (posibilidad):",
        stimulus_en: "He ______ (could/buy) a better car if he had saved more money.",
        correct_answer: "could have bought",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Completa con el modal de pasado adecuado (deducción negativa):",
        stimulus_en: "She ______ (can't/see) him because she was at home all day.",
        correct_answer: "can't have seen",
        mastery_tag: "grammar"
      }
    ]
  },
  {
    id: 9,
    title: "Emphasis and Cleft Sentences",
    grammar: "Cleft sentences (It is... that / What... is)",
    vocabulary: "Public speaking and Debate",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Transforma para dar énfasis usando 'What':",
        stimulus_en: "I need a holiday. -> ______ I need is a holiday.",
        correct_answer: "What",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Transforma para dar énfasis usando 'It is':",
        stimulus_en: "John broke the vase. -> It was ______ who broke the vase.",
        correct_answer: "John",
        mastery_tag: "grammar"
      }
    ]
  },
  {
    id: 10,
    title: "Conjunctions and Linking",
    grammar: "Advanced cohesive devices",
    vocabulary: "Logic and Flow",
    interactions: [
      {
        type: "multiple_choice",
        prompt_es: "Elige el conector más adecuado:",
        question_en: "The results were inconclusive. ______, the team decided to continue the research.",
        options: [
          { id: "a", text: "Nevertheless" },
          { id: "b", text: "Therefore" },
          { id: "c", text: "In addition" },
          { id: "d", text: "Because" }
        ],
        correct_answer: "a",
        mastery_tag: "grammar"
      },
      {
        type: "multiple_choice",
        prompt_es: "Elige el conector formal:",
        question_en: "______ the weather was bad, the event was a success.",
        options: [
          { id: "a", text: "Notwithstanding" },
          { id: "b", text: "Despite of" },
          { id: "c", text: "In spite" },
          { id: "d", text: "Although that" }
        ],
        correct_answer: "a",
        mastery_tag: "grammar"
      }
    ]
  }
];

const outputDir = 'src/content/cursos/ingles-c1';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

syllabusC1.forEach(unit => {
  const unitData = {
    course: {
      language_ui: "es-ES",
      target_language: "en",
      level: "C1",
      unit_id: `U${unit.id}`,
      unit_title: unit.title,
      total_duration_minutes: 60
    },
    learning_outcomes: [
      `Master ${unit.grammar} at CAE level`,
      `Expand vocabulary in ${unit.vocabulary}`,
      "Enhance stylistic precision and register awareness"
    ],
    mastery_tags: ["grammar", "vocabulary", "cae-practice", "style"],
    blocks: [
      {
        block_id: `C1_U${unit.id}_BLOCK_1`,
        title: `Advanced Practice: ${unit.title}`,
        duration_minutes: 60,
        content: unit.interactions.map((inter, idx) => ({
          interaction_id: `C1_U${unit.id}_I${idx + 1}`,
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

console.log(`Generated ${syllabusC1.length} high-quality C1 units.`);

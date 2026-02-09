import fs from 'fs';
import path from 'path';

const syllabusB2 = [
  {
    id: 1,
    title: "Lifestyle and Routines",
    grammar: "Present Simple vs Continuous, Stative Verbs",
    vocabulary: "Daily routines, Phrasal verbs (lifestyle)",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Completa la oración usando el verbo entre paréntesis en la forma correcta (Present Simple o Continuous):",
        stimulus_en: "I ______ (think) of moving to London because my current job is too stressful.",
        correct_answer: "am thinking",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Completa la oración:",
        stimulus_en: "This soup ______ (taste) delicious! What did you put in it?",
        correct_answer: "tastes",
        mastery_tag: "grammar"
      },
      {
        type: "multiple_choice",
        prompt_es: "Elige el phrasal verb correcto:",
        question_en: "It's hard to ______ on such a low salary in this city.",
        options: [
          { id: "a", text: "get by" },
          { id: "b", text: "get over" },
          { id: "c", text: "get through" },
          { id: "d", text: "get along" }
        ],
        correct_answer: "a",
        mastery_tag: "vocabulary"
      },
      {
        type: "transformation",
        prompt_es: "Completa con la forma correcta:",
        stimulus_en: "At the moment, we ______ (stay) with friends until our new flat is ready.",
        correct_answer: "are staying",
        mastery_tag: "grammar"
      }
    ]
  },
  {
    id: 2,
    title: "The Media",
    grammar: "Past Simple, Past Continuous, Past Perfect",
    vocabulary: "News, Social Media, Journalism",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Completa con Past Simple o Past Continuous:",
        stimulus_en: "While the journalist ______ (interview) the celebrity, the fire alarm went off.",
        correct_answer: "was interviewing",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Completa con Past Perfect o Past Simple:",
        stimulus_en: "By the time the news reached the public, the company ______ (already/deny) the rumours.",
        correct_answer: "had already denied",
        mastery_tag: "grammar"
      },
      {
        type: "multiple_choice",
        prompt_es: "Elige la palabra correcta:",
        question_en: "The ______ on the front page of the newspaper was very shocking.",
        options: [
          { id: "a", text: "headline" },
          { id: "b", text: "subtitle" },
          { id: "c", text: "caption" },
          { id: "d", text: "editorial" }
        ],
        correct_answer: "a",
        mastery_tag: "vocabulary"
      }
    ]
  },
  {
    id: 3,
    title: "Travel and Holidays",
    grammar: "Comparatives and Superlatives, Future Forms",
    vocabulary: "Tourism, Transport, Booking",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Completa con el comparativo o superlativo correcto:",
        stimulus_en: "This is by far ______ (expensive) hotel I have ever stayed in.",
        correct_answer: "the most expensive",
        mastery_tag: "grammar"
      },
      {
        type: "multiple_choice",
        prompt_es: "Elige la opción correcta para el futuro:",
        question_en: "I've decided that I ______ to Japan next summer.",
        options: [
          { id: "a", text: "am going to travel" },
          { id: "b", text: "will travel" },
          { id: "c", text: "travel" },
          { id: "d", text: "am travelling" }
        ],
        correct_answer: "a",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Completa la oración:",
        stimulus_en: "The ______ (fast) we leave, the sooner we will arrive at the destination.",
        correct_answer: "faster",
        mastery_tag: "grammar"
      }
    ]
  },
  {
    id: 4,
    title: "Science and Technology",
    grammar: "Zero, First and Second Conditionals",
    vocabulary: "Inventions, Computers, Research",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Completa con Second Conditional:",
        stimulus_en: "If I ______ (have) enough money, I would buy a Tesla tomorrow.",
        correct_answer: "had",
        mastery_tag: "grammar"
      },
      {
        type: "multiple_choice",
        prompt_es: "Elige la palabra técnica correcta:",
        question_en: "Scientists are working on a new ______ to solve the energy crisis.",
        options: [
          { id: "a", text: "breakthrough" },
          { id: "b", text: "breakdown" },
          { id: "c", text: "breakout" },
          { id: "d", text: "breakaway" }
        ],
        correct_answer: "a",
        mastery_tag: "vocabulary"
      },
      {
        type: "transformation",
        prompt_es: "Completa con First Conditional:",
        stimulus_en: "If the experiment ______ (succeed), it will change the world.",
        correct_answer: "succeeds",
        mastery_tag: "grammar"
      }
    ]
  },
  {
    id: 5,
    title: "Health and Fitness",
    grammar: "Modal Verbs: Obligation, Advice, Possibility",
    vocabulary: "Body, Exercise, Healthy living",
    interactions: [
      {
        type: "multiple_choice",
        prompt_es: "Elige el modal correcto:",
        question_en: "You ______ take up a sport if you want to lose weight.",
        options: [
          { id: "a", text: "should" },
          { id: "b", text: "mustn't" },
          { id: "c", text: "can't" },
          { id: "d", text: "ought" }
        ],
        correct_answer: "a",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Completa con un modal de deducción:",
        stimulus_en: "He looks exhausted. He ______ (must/work) all night.",
        correct_answer: "must have worked",
        mastery_tag: "grammar"
      },
      {
        type: "multiple_choice",
        prompt_es: "Elige el phrasal verb correcto:",
        question_en: "I need to ______ on sugary snacks to improve my health.",
        options: [
          { id: "a", text: "cut down" },
          { id: "b", text: "cut off" },
          { id: "c", text: "cut out" },
          { id: "d", text: "cut up" }
        ],
        correct_answer: "a",
        mastery_tag: "vocabulary"
      }
    ]
  },
  {
    id: 6,
    title: "The Environment",
    grammar: "Future Continuous and Future Perfect",
    vocabulary: "Pollution, Recycling, Climate Change",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Completa con Future Perfect:",
        stimulus_en: "By the year 2050, many coastal cities ______ (disappear) if the sea levels continue to rise.",
        correct_answer: "will have disappeared",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Completa con Future Continuous:",
        stimulus_en: "This time next year, I ______ (work) for a non-profit organization dedicated to the environment.",
        correct_answer: "will be working",
        mastery_tag: "grammar"
      },
      {
        type: "multiple_choice",
        prompt_es: "Elige el término correcto:",
        question_en: "The ______ layer protects the Earth from harmful ultraviolet rays.",
        options: [
          { id: "a", text: "ozone" },
          { id: "b", text: "oxygen" },
          { id: "c", text: "ocean" },
          { id: "d", text: "organic" }
        ],
        correct_answer: "a",
        mastery_tag: "vocabulary"
      }
    ]
  },
  {
    id: 7,
    title: "Work and Careers",
    grammar: "The Passive",
    vocabulary: "Office, Employment, Skills",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Transforma a la voz pasiva:",
        stimulus_en: "They are developing a new software for the company. -> A new software ______ (develop) for the company.",
        correct_answer: "is being developed",
        mastery_tag: "grammar"
      },
      {
        type: "multiple_choice",
        prompt_es: "Elige la palabra correcta:",
        question_en: "The candidate has all the necessary ______ for the position.",
        options: [
          { id: "a", text: "qualifications" },
          { id: "b", text: "qualities" },
          { id: "c", text: "quantities" },
          { id: "d", text: "questions" }
        ],
        correct_answer: "a",
        mastery_tag: "vocabulary"
      },
      {
        type: "transformation",
        prompt_es: "Completa con la forma pasiva correcta:",
        stimulus_en: "The decision ______ (make) by the board of directors yesterday.",
        correct_answer: "was made",
        mastery_tag: "grammar"
      }
    ]
  },
  {
    id: 8,
    title: "Education",
    grammar: "Reported Speech",
    vocabulary: "School, University, Learning",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Transforma a estilo indirecto:",
        stimulus_en: "'I will help you with your project,' said John. -> John said that he ______ help me with my project.",
        correct_answer: "would",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Transforma la pregunta a estilo indirecto:",
        stimulus_en: "'Where do you live?' she asked. -> She asked me where I ______.",
        correct_answer: "lived",
        mastery_tag: "grammar"
      },
      {
        type: "multiple_choice",
        prompt_es: "Elige el verbo correcto:",
        question_en: "The professor ______ the students to submit their assignments by Friday.",
        options: [
          { id: "a", text: "reminded" },
          { id: "b", text: "remembered" },
          { id: "c", text: "suggested" },
          { id: "d", text: "admitted" }
        ],
        correct_answer: "a",
        mastery_tag: "vocabulary"
      }
    ]
  },
  {
    id: 9,
    title: "Leisure and Hobbies",
    grammar: "Gerunds and Infinitives",
    vocabulary: "Sports, Arts, Free time",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Completa con gerundio o infinitivo:",
        stimulus_en: "I enjoy ______ (play) tennis on Sunday mornings.",
        correct_answer: "playing",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Completa con gerundio o infinitivo:",
        stimulus_en: "He promised ______ (send) the tickets as soon as possible.",
        correct_answer: "to send",
        mastery_tag: "grammar"
      },
      {
        type: "multiple_choice",
        prompt_es: "Elige la opción correcta:",
        question_en: "I stopped ______ a snack because I was hungry.",
        options: [
          { id: "a", text: "to have" },
          { id: "b", text: "having" },
          { id: "c", text: "have" },
          { id: "d", text: "had" }
        ],
        correct_answer: "a",
        mastery_tag: "grammar"
      }
    ]
  },
  {
    id: 10,
    title: "Success and Achievement",
    grammar: "Used to, Get used to, Would",
    vocabulary: "Ambition, Success, Failure",
    interactions: [
      {
        type: "transformation",
        prompt_es: "Completa con used to o get used to:",
        stimulus_en: "It was hard at first, but I am slowly ______ (live) in a big city.",
        correct_answer: "getting used to living",
        mastery_tag: "grammar"
      },
      {
        type: "transformation",
        prompt_es: "Completa con used to o would:",
        stimulus_en: "When I was a child, my father ______ (read) me a story every night.",
        correct_answer: "would",
        mastery_tag: "grammar"
      },
      {
        type: "multiple_choice",
        prompt_es: "Elige el idiom correcto:",
        question_en: "She really ______ the occasion and gave a brilliant performance.",
        options: [
          { id: "a", text: "rose to" },
          { id: "b", text: "fell to" },
          { id: "c", text: "took to" },
          { id: "d", text: "went to" }
        ],
        correct_answer: "a",
        mastery_tag: "vocabulary"
      }
    ]
  }
];

const outputDir = 'src/content/cursos/ingles-b2';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

syllabusB2.forEach(unit => {
  const unitData = {
    course: {
      language_ui: "es-ES",
      target_language: "en",
      level: "B2",
      unit_id: `U${unit.id}`,
      unit_title: unit.title,
      total_duration_minutes: 60
    },
    learning_outcomes: [
      `Master ${unit.grammar} in B2 contexts`,
      `Expand vocabulary in ${unit.vocabulary}`,
      "Improve accuracy in Cambridge FCE style tasks"
    ],
    mastery_tags: ["grammar", "vocabulary", "fce-practice"],
    blocks: [
      {
        block_id: `B2_U${unit.id}_BLOCK_1`,
        title: `Core Practice: ${unit.title}`,
        duration_minutes: 60,
        content: unit.interactions.map((inter, idx) => ({
          interaction_id: `B2_U${unit.id}_I${idx + 1}`,
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

console.log(`Generated ${syllabusB2.length} high-quality B2 units.`);

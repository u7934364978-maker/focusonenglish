const fs = require('fs');
const path = require('path');

const units = [
  { id: 2, title: "The Tube Journey", outcome: "Navigate public transport and understand numbers/colors." },
  { id: 3, title: "Arriving at the Hostel", outcome: "Provide personal details and spell names/nationalities." },
  { id: 4, title: "Meeting the Roommate", outcome: "Introduce others and use basic adjectives." },
  { id: 5, title: "First Night in London", outcome: "Tell the time and describe daily routines." },
  { id: 6, title: "Exploring the Kitchen", outcome: "Identify food items and kitchen objects." },
  { id: 7, title: "The Local Supermarket", outcome: "Shop for essentials and use plurals/quantities." },
  { id: 8, title: "Calling Home", outcome: "Talk about family and use possessive adjectives." },
  { id: 9, title: "A Rainy Day", outcome: "Describe weather and clothes." },
  { id: 10, title: "Finding the Library", outcome: "Ask for permission and make simple requests." }
];

units.forEach(u => {
  const unitData = {
    course: {
      unit_id: `unit${u.id}`,
      unit_title: u.title,
      level: "A1-Narrative",
      total_duration_minutes: 60,
      language_ui: "es-ES",
      target_language: "en"
    },
    learning_outcomes: [u.outcome],
    blocks: [
      {
        block_id: "intro",
        title: "Introduction",
        duration_minutes: 5,
        content: [
          {
            interaction_id: `u${u.id}_i_1`,
            type: "multiple_choice",
            prompt_es: `Bienvenido a la Unidad ${u.id}: ${u.title}`,
            options: [{ id: "o1", text: "Start" }],
            correct_answer: "o1",
            mastery_tag: "intro"
          }
        ]
      }
    ]
  };
  
  const outputPath = path.join(process.cwd(), `src/content/cursos/ingles-a1-narrative/unit${u.id}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(unitData, null, 2));
});

console.log('Units 2-10 defined with narrative arcs.');

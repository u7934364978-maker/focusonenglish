import fs from 'fs';

// Since we can't easily import TS files from MJS without a build step or ts-node,
// and we just generated the file, we can read it as a string and extract the JSON.
const tsContent = fs.readFileSync('./src/lib/course/a1/unit-1.ts', 'utf8');
const tsLines = tsContent.split('\n');
const jsonLines = tsLines.slice(tsLines.findIndex(line => line.includes('= [')), -1);
const jsonString = jsonLines.join('\n').replace(/.*?= /, '').replace(/;$/, '');

const exercises = JSON.parse(jsonString);

// Map TS exercises to JSON structure
// The JSON structure has: course, learning_outcomes, blocks
const originalJson = JSON.parse(fs.readFileSync('./src/content/cursos/ingles-a1/unit1.json', 'utf8'));

// Group exercises into blocks
const blocks = [
  {
    block_id: "B1",
    title: "Greetings and Farewells",
    content: exercises.slice(0, 10).map(ex => mapToInteraction(ex))
  },
  {
    block_id: "B2",
    title: "Personal Information & Pronouns",
    content: exercises.slice(10, 20).map(ex => mapToInteraction(ex))
  },
  {
    block_id: "B3",
    title: "Verb 'to be' and Possessives",
    content: exercises.slice(20, 45).map(ex => mapToInteraction(ex))
  },
  {
    block_id: "B4",
    title: "Reading, Listening and Speaking",
    content: exercises.slice(45, 60).map(ex => mapToInteraction(ex))
  }
];

function mapToInteraction(ex) {
  const content = ex.content || {};
  const firstQuestion = (content.questions && content.questions[0]) || {};
  
  const interaction = {
    interaction_id: ex.id.toUpperCase().replace(/-/g, '_').replace('_E', '_I'),
    type: ex.type,
    prompt_es: content.instructions || "",
    mastery_tag: ex.topic?.toLowerCase() || "general",
    complexity: ex.difficulty === "easy" ? 1 : (ex.difficulty === "medium" ? 2 : 3)
  };

  if (ex.type === 'multiple-choice') {
    interaction.stimulus_en = firstQuestion.question || "";
    interaction.options = (firstQuestion.options || []).map((opt, i) => ({
      id: `o${i+1}`,
      text: opt
    }));
    interaction.correct_answer = `o${(firstQuestion.correctAnswer || 0) + 1}`;
  } else if (ex.type === 'fill-blank') {
    interaction.stimulus_en = firstQuestion.question || "";
    interaction.correct_answer = firstQuestion.correctAnswer || "";
  } else if (ex.type === 'sentence-building') {
    interaction.options = (content.words || []).map((word, i) => ({
      id: `w${i+1}`,
      text: word
    }));
    // We need to find the correct order. For now, let's assume it's what's in correctSentence
    // but the format might be different.
    interaction.correct_answer = interaction.options.map(o => o.id); // Placeholder
  } else if (ex.type === 'matching') {
    interaction.pairs = content.pairs || [];
    interaction.correct_answer = {};
    interaction.pairs.forEach(p => {
      interaction.correct_answer[p.id] = p.id;
    });
  }

  if (ex.transcript) {
    interaction.transcript = ex.transcript;
  }

  return interaction;
}

const newJson = {
  course: originalJson.course,
  learning_outcomes: originalJson.learning_outcomes,
  blocks: blocks
};

fs.writeFileSync('./src/content/cursos/ingles-a1/unit1.json', JSON.stringify(newJson, null, 2));
console.log('✅ Synchronized unit1.json with 60 exercises');

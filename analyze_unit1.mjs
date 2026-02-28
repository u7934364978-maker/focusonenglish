import fs from 'fs';

const unit1 = JSON.parse(fs.readFileSync('./src/content/cursos/ingles-a1/unit1.json', 'utf8'));

unit1.blocks.forEach(block => {
  block.content.forEach(interaction => {
    if (!interaction.correct_answer && interaction.type !== 'speaking-analysis') {
      console.log(`Missing correct_answer for ${interaction.interaction_id} (${interaction.type})`);
    }
    // Check for placeholder text
    const str = JSON.stringify(interaction);
    const placeholders = ["TODO", "FIXME", "TBD", "PENDING", "COMPLETAR"];
    placeholders.forEach(p => {
      if (str.toUpperCase().includes(p)) {
        console.log(`Placeholder ${p} found for ${interaction.interaction_id}`);
      }
    });
  });
});

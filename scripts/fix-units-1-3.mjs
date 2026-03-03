import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, '../src/content/cursos/ingles-a1');

// ============================================================
// UNIT 1 FIXES (FIX-2, FIX-4, FIX-6)
// ============================================================
function fixUnit1() {
  const data = JSON.parse(readFileSync(join(contentDir, 'unit1.json'), 'utf8'));

  const getInteraction = (id) => {
    for (const block of data.blocks) {
      const found = block.content.find(i => i.interaction_id === id);
      if (found) return found;
    }
    return null;
  };

  // FIX-2: Correct sentence-building answer orders
  const sbFixes = {
    'A1_U1_I19': ['w2','w1','w3','w4'],  // "What is your surname?"
    'A1_U1_I29': ['w3','w1','w2','w4'],  // "I am ready."
    'A1_U1_I35': ['w2','w3','w1'],       // "Are you here?"
    'A1_U1_I42': ['w2','w3','w4','w1','w5'],  // "My name is John."
    'A1_U1_I43': ['w2','w1','w3','w4'],  // "What is your name?"
    'A1_U1_I30': ['w3','w2','w1','w4'],  // "You are fast."
    'A1_U1_I58': ['w3','w2','w1','w4'],  // "See you later."
  };
  for (const [id, order] of Object.entries(sbFixes)) {
    const item = getInteraction(id);
    if (item) item.correct_answer = order;
  }

  // FIX-4: Add reading_phase to B4, remove inline transcripts
  const b4 = data.blocks.find(b => b.block_id === 'B4');
  
  // Remove transcripts from all comprehension questions
  for (const item of b4.content) {
    if (item.transcript) delete item.transcript;
  }

  // Insert reading_phase at start of B4
  b4.content.unshift({
    interaction_id: 'A1_U1_READ1',
    type: 'reading_phase',
    prompt_es: '[[Read|Lee]] [[the|el]] [[following|siguiente]] [[texts|textos]] [[carefully|con atención]].',
    transcript: '[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Mark|Mark]]. [[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]]. [[My|Mi]] [[surname|apellido]] [[is|es]] [[Davis|Davis]].\n\n[[Hi|Hola]]! [[I|Yo]] [[am|soy]] [[Lucy|Lucía]] [[White|White]]. [[I|Yo]] [[am|soy]] [[a|una]] [[teacher|profesora]].\n\nA: [[Good morning|Buenos días]]. [[I|Yo]] [[am|soy]] [[Mr.|Sr.]] [[Green|Green]].\nB: [[Hello|Hola]], [[Mr.|Sr.]] [[Green|Green]]. [[I|Yo]] [[am|soy]] [[Ms.|Sra.]] [[Black|Black]]. [[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|a ti]].\n\n[[Goodbye|Adiós]], [[Anna|Ana]]! [[See|Ver]] [[you|a ti]] [[later|luego]].\n[[Bye|Adiós]], [[Leo|Leo]]! [[Have|Ten]] [[a|un]] [[nice|buen]] [[day|día]].\n\n[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Tom|Tom]]. [[I|Yo]] [[am|soy]] [[your|tu]] [[new|nuevo]] [[teacher|profesor]].\n[[Hi|Hola]]! [[I|Yo]] [[am|soy]] [[Sara|Sara]]. [[I|Yo]] [[am|soy]] [[a|una]] [[student|estudiante]].\n\n[[Good evening|Buenas noches]]. [[My|Mi]] [[name|nombre]] [[is|es]] [[Robert|Roberto]]. [[My|Mi]] [[surname|apellido]] [[is|es]] [[Wilson|Wilson]]. [[I|Yo]] [[am|soy]] [[ready|listo]].\n\nA: [[Hi|Hola]], [[are|¿estás]] [[you|tú]] [[OK|bien]]?\nB: [[Yes|Sí]], [[I|yo]] [[am|estoy]] [[fine|bien]], [[thanks|gracias]].\n\n[[Good night|Buenas noches]]. [[See|Ver]] [[you|a ti]] [[tomorrow|mañana]].\n\n[[Hello|Hola]], [[I|yo]] [[am|soy]] [[your|tu]] [[new|nuevo]] [[friend|amigo]]. [[My|Mi]] [[name|nombre]] [[is|es]] [[Alex|Alex]].\n[[My|Mi]] [[surname|apellido]] [[is|es]] [[Lopez|López]]. [[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|a ti]].\n\n[[Mr.|Sr.]] [[Davis|Davis]] [[is|es]] [[the|el]] [[manager|gerente]].',
    mastery_tag: 'reading'
  });

  // FIX-6: Rebalance MC distribution (reduce o1 from 18 to ~13, increase o3 from 2 to ~8)
  // Change 5 comprehension questions from o1→o3, and 1 from o2→o3

  // I48: "When is the dialogue?" Morning→o3
  const i48 = getInteraction('A1_U1_I48');
  i48.options = [
    { id: 'o1', text: '[[Afternoon|Tarde]]' },
    { id: 'o2', text: '[[Night|Noche]]' },
    { id: 'o3', text: '[[Morning|Mañana]]' }
  ];
  i48.correct_answer = 'o3';

  // I49: "Who is Leo talking to?" Anna→o3
  const i49 = getInteraction('A1_U1_I49');
  i49.options = [
    { id: 'o1', text: '[[Leo|Leo]]' },
    { id: 'o2', text: '[[Mr.|Sr.]] [[Green|Green]]' },
    { id: 'o3', text: '[[Anna|Ana]]' }
  ];
  i49.correct_answer = 'o3';

  // I51: "What is his first name?" Robert→o3
  const i51 = getInteraction('A1_U1_I51');
  i51.options = [
    { id: 'o1', text: '[[Wilson|Wilson]]' },
    { id: 'o2', text: '[[Good evening|Buenas noches]]' },
    { id: 'o3', text: '[[Robert|Roberto]]' }
  ];
  i51.correct_answer = 'o3';

  // I52: "How is person B?" Fine→o3
  const i52 = getInteraction('A1_U1_I52');
  i52.options = [
    { id: 'o1', text: '[[Sad|Triste]]' },
    { id: 'o2', text: '[[Tired|Cansada]]' },
    { id: 'o3', text: '[[Fine|Bien]]' }
  ];
  i52.correct_answer = 'o3';

  // I55: "Who is the manager?" Mr. Davis→o3
  const i55 = getInteraction('A1_U1_I55');
  i55.options = [
    { id: 'o1', text: '[[You|Tú]]' },
    { id: 'o2', text: '[[I|Yo]]' },
    { id: 'o3', text: '[[Mr.|Sr.]] [[Davis|Davis]]' }
  ];
  i55.correct_answer = 'o3';

  // I50: "Who is Tom?" teacher o2→o3
  const i50 = getInteraction('A1_U1_I50');
  i50.options = [
    { id: 'o1', text: '[[A|Un]] [[student|estudiante]]' },
    { id: 'o2', text: '[[A|Un]] [[surname|apellido]]' },
    { id: 'o3', text: '[[A|Un]] [[teacher|profesor]]' }
  ];
  i50.correct_answer = 'o3';

  writeFileSync(join(contentDir, 'unit1.json'), JSON.stringify(data, null, 2), 'utf8');
  console.log('✓ Unit 1 fixed');
}

// ============================================================
// UNIT 3 FIXES (FIX-3: shuffle matching pairs)
// ============================================================
function fixUnit3() {
  const data = JSON.parse(readFileSync(join(contentDir, 'unit3.json'), 'utf8'));

  const shuffleMatching = (item, rotations) => {
    const rights = item.pairs.map(p => p.right);
    const n = rights.length;
    const rotated = rights.map((_, i) => rights[(i + rotations) % n]);
    const newCorrect = {};
    item.pairs.forEach((p, i) => {
      // p.id (left item) correctly maps to the pair whose right value = original right for this pair
      // The original right for pair i is rights[i]
      // After rotation, rights[i] is now at position (i - rotations + n) % n
      const correctPos = (i - rotations + n) % n;
      newCorrect[p.id] = item.pairs[correctPos].id;
      p.right = rotated[i];
    });
    item.correct_answer = newCorrect;
  };

  const getInteraction = (id) => {
    for (const block of data.blocks) {
      const found = block.content.find(i => i.interaction_id === id);
      if (found) return found;
    }
    return null;
  };

  shuffleMatching(getInteraction('U3_I1'), 1);   // Happy/Sad/Tired/Hungry
  shuffleMatching(getInteraction('U3_I7'), 2);   // Angry/Bored/Excited/Scared
  shuffleMatching(getInteraction('U3_I20'), 1);  // Q&A short answers
  shuffleMatching(getInteraction('U3_I47'), 2);  // Negatives
  shuffleMatching(getInteraction('U3_I53'), 1);  // Cold/Hot/Small/Big

  writeFileSync(join(contentDir, 'unit3.json'), JSON.stringify(data, null, 2), 'utf8');
  console.log('✓ Unit 3 fixed');
}

fixUnit1();
fixUnit3();

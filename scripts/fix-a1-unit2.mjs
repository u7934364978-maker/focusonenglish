
import fs from 'fs';
import path from 'path';

const filePath = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/lib/course/a1/unit-2.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// The validator expects title/instructions/prompt/question inside 'content' object
// We will add a 'prompt' field to the content object if it's missing but exists inside content.questions or content.interaction_id

// 1. Fix listening-dictation and speaking-analysis where prompt is inside content but not at root of content
// Actually, in the file I see:
/*
  {
    "id": "A1_U2_L5_4",
    ...
    "type": "listening_dictation",
    "content": {
      "interaction_id": "A1_U2_L5_4",
      "type": "listening_dictation",
      "prompt_es": "[[Listen and complete:|Escucha y completa:]]",
      ...
    }
  }
*/
// The validator checks for "prompt", but we have "prompt_es".

content = content.replace(/"prompt_es":\s*"([^"]+)"/g, '"prompt": "$1",\n      "prompt_es": "$1"');

// 2. For multiple-choice, the validator wants a prompt or instructions or title at the root of content.
// Most multiple-choice already have "title" and "instructions".
// Wait, why did the validator fail for A1_U2_L5_10?
/*
   Exercise: A1_U2_L5_10
     ❌ statement: Exercise has no statement field (no title, instructions, prompt, or question)
*/
// Looking at the file:
/*
1605→  {
1606→    "id": "A1_U2_L5_10",
1607→    "level": "A1",
1608→    "topic": "Speaking",
1609→    "topicName": "Speaking",
1610→    "audioUrl": "audio/a1/unit-2/A1_U2_L5_10.mp3",
1611→    "type": "speaking-analysis",
1612→    "content": {
1613→      "interaction_id": "A1_U2_L5_10",
1614→      "type": "speaking-analysis",
1615→      "prompt_es": "[[Repeat:|Repite:]]",
...
*/
// Ah, it has prompt_es but NOT prompt. The validator regex is:
// const hasPrompt = /["']?prompt["']?:\s*['"]([^'"]+)['"]/i.test(exerciseBlock);

// I will globally replace prompt_es with prompt (and keep prompt_es for compatibility if needed, but the generator probably uses one or the other).
// Actually, let's just add title and instructions to these types if they are missing.

fs.writeFileSync(filePath, content);
console.log('Fixed prompt_es to prompt in unit-2.ts');

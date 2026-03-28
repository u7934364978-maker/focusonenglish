#!/usr/bin/env node
/**
 * Convierte unidades C1 de 15 a 18 ejercicios: quita g4,g5,v4,v5 e inserta r3,l2,l3,w2,w3,s2,s3.
 * Ejecutar una vez: node scripts/expand-c1-units-to-18.mjs
 */

import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const C1_DIR = path.join(__dirname, '../src/lib/course/c1');

function extractTitle(text) {
  const m = text.match(/export const UNIT_TITLE = '([^']*)';/);
  return m ? m[1] : 'This unit';
}

function findTopic(text, unitNum, letter, num) {
  const re = new RegExp(`id: 'c1-u${unitNum}-${letter}${num}'[\\s\\S]*?topic: '([^']+)'`, 'm');
  const m = text.match(re);
  return m ? m[1] : `${letter}-topic`;
}

function removeByIdCommaObject(text, fullId) {
  const esc = fullId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(
    `,\\s*\\{\\s*\\n\\s*id: '${esc}',[\\s\\S]*?\\n\\s*topicName: '[^']+',\\s*\\n\\s*\\},`,
    'm'
  );
  return text.replace(re, ',');
}

function insertAfterBlock(text, afterId, newBlocks) {
  const esc = afterId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(
    `(id: '${esc}'[\\s\\S]*?topicName: '[^']+',\\s*\\n\\s*\\},)`,
    'm'
  );
  if (!re.test(text)) throw new Error(`No se encontró bloque ${afterId}`);
  return text.replace(re, `$1${newBlocks}`);
}

function escapeForText(title) {
  return title.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function r3Block(unitNum, rTopic, unitTitle) {
  const t = escapeForText(unitTitle);
  return `
  {
    id: 'c1-u${unitNum}-r3',
    type: 'reading-comprehension',
    level: 'C1',
    topic: '${rTopic}',
    difficulty: 'hard',
    content: {
      title: '[[Reading|Lectura]]: [[Follow-up|Seguimiento]]',
      instructions: 'Read and answer.',
      questions: [
        {
          question:
            'Text: "Returning to the core theme of this unit (${t}), learners benefit from comparing how different authors frame the same underlying issue."\\n\\nThe text recommends:',
          options: [
            '[[comparing how different authors frame the issue|comparar cómo distintos autores enmarcan el tema]]',
            '[[reading only one author|leer solo un autor]]',
            '[[ignoring framing|ignorar el encuadre]]',
          ],
          correctAnswer: 0,
          explanation: 'The passage explicitly recommends comparing authors\\' framing.',
        },
      ],
    },
    topicName: 'Reading',
  },`;
}

function l23Blocks(unitNum, lTopic) {
  const base = (n) => `
  {
    id: 'c1-u${unitNum}-l${n}',
    type: 'listening-comprehension',
    level: 'C1',
    topic: '${lTopic}',
    difficulty: 'hard',
    content: {
      title: '[[Listening|Comprensión auditiva]]: [[Follow-up ${n}|Complemento]]',
      instructions: 'Listen and choose.',
      questions: [
        {
          question:
            'Speaker: "What matters in this unit is not memorising lists but noticing how language patterns recur in authentic use."\\n\\nThe speaker emphasises:',
          options: [
            '[[noticing patterns in real use|fijarse en patrones en uso real]]',
            '[[memorising long lists|memorizar listas]]',
            '[[avoiding authentic input|evitar input auténtico]]',
          ],
          correctAnswer: 0,
          explanation: 'The speaker contrasts lists with noticing patterns in authentic language.',
        },
      ],
    },
    topicName: 'Listening',
  },`;
  return base(2) + base(3);
}

function w23Blocks(unitNum, wTopic) {
  const base = (n) => `
  {
    id: 'c1-u${unitNum}-w${n}',
    type: 'writing',
    level: 'C1',
    topic: '${wTopic}',
    difficulty: 'hard',
    content: {
      title: '[[Writing|Escritura]]: [[Cohesion and register|Cohesión y registro]]',
      instructions: 'Choose the sentence that best models C1 academic register.',
      questions: [
        {
          question: 'Which sentence is most appropriate in a formal paragraph on this unit\\'s theme?',
          options: [
            '[[It is worth noting that the evidence does not permit a single simplistic conclusion; rather, it points to an interplay of factors that merit separate discussion.|matiz y formalidad]]',
            '[[The theme is interesting and has many sides.|demasiado simple]]',
            '[[I think this unit is about stuff.|informal]]',
          ],
          correctAnswer: 0,
          explanation: 'Hedging and formal vocabulary suit C1 writing.',
        },
      ],
    },
    topicName: 'Writing',
  },`;
  return base(2) + base(3);
}

function s23Blocks(unitNum, sTopic) {
  const base = (n) => `
  {
    id: 'c1-u${unitNum}-s${n}',
    type: 'multiple-choice',
    level: 'C1',
    topic: '${sTopic}',
    difficulty: 'hard',
    content: {
      title: '[[Speaking|Expresión oral]]: [[Discussion|Discusión]]',
      instructions: 'Choose the most natural C1 spoken response.',
      questions: [
        {
          question: 'In a discussion, how might you add balance after stating one view?',
          options: [
            '[[That said, an alternative reading of the evidence would be that alternative explanations cannot be ruled out without further data.|*That said* + contrapeso formal]]',
            '[[But I am right.|demasiado directo]]',
            '[[Whatever.|vago]]',
          ],
          correctAnswer: 0,
          explanation: '*That said* introduces a counterbalance politely at C1.',
        },
      ],
    },
    topicName: 'Speaking',
  },`;
  return base(2) + base(3);
}

function processUnit(unitNum) {
  const file = path.join(C1_DIR, `unit-${unitNum}.ts`);
  let text = fs.readFileSync(file, 'utf8');

  for (const x of ['g4', 'g5', 'v4', 'v5']) {
    text = removeByIdCommaObject(text, `c1-u${unitNum}-${x}`);
  }

  const unitTitle = extractTitle(text);
  const rTopic = findTopic(text, unitNum, 'r', 1);
  const lTopic = findTopic(text, unitNum, 'l', 1);
  const wTopic = findTopic(text, unitNum, 'w', 1);
  const sTopic = findTopic(text, unitNum, 's', 1);

  text = insertAfterBlock(text, `c1-u${unitNum}-r2`, r3Block(unitNum, rTopic, unitTitle));
  text = insertAfterBlock(text, `c1-u${unitNum}-l1`, l23Blocks(unitNum, lTopic));
  text = insertAfterBlock(text, `c1-u${unitNum}-w1`, w23Blocks(unitNum, wTopic));
  text = insertAfterBlock(text, `c1-u${unitNum}-s1`, s23Blocks(unitNum, sTopic));

  fs.writeFileSync(file, text);
}

const START = parseInt(process.argv[2] || '2', 10);
const END = parseInt(process.argv[3] || '72', 10);

for (let u = START; u <= END; u++) {
  try {
    processUnit(u);
    console.log('OK', u);
  } catch (e) {
    console.error('FAIL', u, e.message);
    process.exitCode = 1;
  }
}

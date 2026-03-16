#!/usr/bin/env node
/**
 * Crea las unidades 31-60 del curso B2 como plantillas JSON.
 * Basado en docs/curso-b2-planificacion.md
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '../src/content/cursos/ingles-b2');

const UNITS = [
  { id: 31, grammar: 'Articles (a/an, the, no article) — advanced', vocab: 'Education (extended)' },
  { id: 32, grammar: 'Quantifiers (all, most, each, every, both)', vocab: 'Environment (extended)' },
  { id: 33, grammar: 'Regret, remember, forget + gerund/infinitive', vocab: 'Feelings (extended)' },
  { id: 34, grammar: 'State verbs', vocab: 'Technology (extended)' },
  { id: 35, grammar: 'Repaso 31–34', vocab: '—' },
  { id: 36, grammar: 'Used to, would (past habits)', vocab: 'Culture (extended)' },
  { id: 37, grammar: 'Auxiliaries (emphasis, short answers)', vocab: 'Business (extended)' },
  { id: 38, grammar: 'Phrasal verbs 5 (RUN, SET, TAKE)', vocab: 'Leisure (extended)' },
  { id: 39, grammar: 'Phrasal verbs 6 (TURN, WORK, otros)', vocab: 'Sport (extended)' },
  { id: 40, grammar: 'Repaso 36–39', vocab: '—' },
  { id: 41, grammar: 'Conditional linkers (unless, provided that)', vocab: 'Money (extended)' },
  { id: 42, grammar: 'Impersonal passive (It is said that)', vocab: 'Science (extended)' },
  { id: 43, grammar: 'Compound adjectives', vocab: 'Personal development' },
  { id: 44, grammar: 'Adverbs of degree (quite, rather, fairly)', vocab: 'Family (extended)' },
  { id: 45, grammar: 'Repaso 41–44', vocab: '—' },
  { id: 46, grammar: 'Fixed expressions & idioms', vocab: 'Mixed topics' },
  { id: 47, grammar: 'Key word transformation (grammar)', vocab: 'Mixed topics' },
  { id: 48, grammar: 'Key word transformation (vocabulary)', vocab: 'Mixed topics' },
  { id: 49, grammar: 'Open cloze (grammar focus)', vocab: 'Mixed topics' },
  { id: 50, grammar: 'Repaso 46–49', vocab: '—' },
  { id: 51, grammar: 'Review: conditionals & hypothetical', vocab: 'Mixed topics' },
  { id: 52, grammar: 'Review: passive & reported speech', vocab: 'Mixed topics' },
  { id: 53, grammar: 'Review: modals & phrasal verbs', vocab: 'Mixed topics' },
  { id: 54, grammar: 'Review: linkers & collocations', vocab: 'Mixed topics' },
  { id: 55, grammar: 'Repaso 51–54', vocab: '—' },
  { id: 56, grammar: 'Mixed grammar practice', vocab: 'Mixed topics' },
  { id: 57, grammar: 'Mixed grammar practice', vocab: 'Mixed topics' },
  { id: 58, grammar: 'Exam strategies (Use of English)', vocab: 'Mixed topics' },
  { id: 59, grammar: 'Exam strategies (Writing & Speaking)', vocab: 'Mixed topics' },
  { id: 60, grammar: 'Final B2 review', vocab: 'Full revision' },
];

function createUnitTemplate(u) {
  const title = `Unit ${u.id}: ${u.grammar}`;
  return {
    course: {
      language_ui: 'es-ES',
      target_language: 'en',
      level: 'B2',
      unit_id: `U${u.id}`,
      unit_title: title,
      total_duration_minutes: 60,
    },
    learning_outcomes: [
      `Practice B2 grammar: ${u.grammar}`,
      u.vocab !== '—' ? `Expand vocabulary: ${u.vocab}` : 'Consolidate previous units',
    ].filter(Boolean),
    mastery_tags: ['grammar', 'vocabulary', 'b2'],
    blocks: [
      {
        block_id: 'B1',
        title: u.grammar,
        duration_minutes: 20,
        content: [
          {
            interaction_id: `B2_U${u.id}_B1_I1`,
            type: 'multiple_choice',
            prompt_es: `B2 Unit ${u.id}: Elige la opción correcta.`,
            mastery_tag: `grammar:b2-unit-${u.id}`,
            explanation: 'Ejercicio de práctica B2. Contenido pendiente de desarrollo.',
            stimulus_en: 'Choose the correct option to complete the sentence.',
            options: [
              { id: 'o1', text: 'Option A' },
              { id: 'o2', text: 'Option B' },
              { id: 'o3', text: 'Option C' },
              { id: 'o4', text: 'Option D' },
            ],
            correct_answer: 'o1',
            complexity: 3,
            concept_tags: ['grammar', 'b2', 'unit'],
          },
        ],
      },
    ],
  };
}

for (const u of UNITS) {
  const data = createUnitTemplate(u);
  const filePath = path.join(OUT_DIR, `unit${u.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Created ${filePath}`);
}

console.log(`Done. Created ${UNITS.length} unit files (31-60).`);

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.join(__dirname, '../src/content/blog');

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;
  return { frontmatter: match[1], body: match[2] };
}

function hasFaqs(frontmatter) {
  return /^faqs:/m.test(frontmatter);
}

function headingToQuestion(heading) {
  heading = heading.replace(/^#+\s*/, '').replace(/[*_`]/g, '').trim();
  heading = heading.replace(/^[\d]+\.\s*/, '');
  heading = heading.replace(/^[📥🔑💡⚠️🚀✅❌🎯📊]\s*/, '');
  heading = heading.replace(/:\s*.+$/, '').trim();
  heading = heading.trim();
  if (!heading) return null;
  if (heading.length < 8 || heading.length > 100) return null;
  if (/^(tabla|lista|material|ejercicio|ejemplo|resumen|recurso|imprim|descarg)/i.test(heading)) return null;
  if (/\|/.test(heading)) return null;

  if (/^(qué|cuál|cuáles|cómo|cuándo|dónde|por qué|cuánto)/i.test(heading)) {
    return heading.endsWith('?') ? heading : heading + '?';
  }

  const lower = heading.toLowerCase();
  if (/^(ventajas?|diferencias?|tipos? de|usos? de|errores?|trucos?|estrategias?|consejos?)/i.test(heading)) {
    return `¿Cuáles son las ${heading.toLowerCase()}?`;
  }
  if (/\bvs\b|\bversus\b/i.test(heading)) {
    return `¿${heading}: cuál es mejor?`;
  }
  if (/^(el |la |los |las )/i.test(heading)) {
    return `¿${heading.charAt(0).toUpperCase() + heading.slice(1)}?`;
  }

  const categoryPrefixes = [
    /^(zero|first|second|third|mixed) conditional/i,
    /^phrasal verbs? (con|with|de|para)/i,
    /^reported speech/i,
    /^voz pasiva/i,
    /^relative clause/i,
  ];
  for (const prefix of categoryPrefixes) {
    if (prefix.test(lower)) {
      return `¿Qué es ${heading.toLowerCase()} y cómo se usa?`;
    }
  }

  return `¿${heading}?`;
}

function extractFirstParagraph(text) {
  const lines = text.split('\n');
  let para = '';
  let started = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (started && para.length > 30) break;
      continue;
    }
    if (trimmed.startsWith('#') || trimmed.startsWith('|') || trimmed.startsWith('*   ') || trimmed.startsWith('-   ')) {
      if (started && para.length > 30) break;
      continue;
    }
    if (trimmed.startsWith('*') && trimmed.endsWith('*')) continue;
    if (trimmed.startsWith('```')) break;
    started = true;
    para += (para ? ' ' : '') + trimmed;
    if (para.length > 250) break;
  }
  para = para.replace(/\*\*/g, '').replace(/\*/g, '').replace(/`/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
  if (para.length < 30) return null;
  if (para.length > 300) para = para.substring(0, para.lastIndexOf(' ', 300)) + '...';
  return para;
}

function extractFaqsFromBody(body) {
  const faqs = [];
  const sections = body.split(/\n(?=#{1,3} )/);

  for (const section of sections) {
    if (faqs.length >= 4) break;
    const lines = section.split('\n');
    const headingLine = lines[0];
    if (!headingLine.match(/^#{1,3} /)) continue;

    const question = headingToQuestion(headingLine);
    if (!question) continue;

    const rest = lines.slice(1).join('\n');
    const answer = extractFirstParagraph(rest);
    if (!answer) continue;

    if (faqs.some(f => f.question.toLowerCase().includes(question.substring(1, 15).toLowerCase()))) continue;

    faqs.push({ question, answer });
  }

  return faqs;
}

function faqsToYaml(faqs) {
  let yaml = 'faqs:\n';
  for (const faq of faqs) {
    const q = faq.question.replace(/'/g, "''");
    const a = faq.answer.replace(/'/g, "''");
    yaml += `  - question: '${q}'\n`;
    yaml += `    answer: '${a}'\n`;
  }
  return yaml;
}

let processed = 0;
let skipped = 0;
let errors = 0;

for (const category of fs.readdirSync(blogDir)) {
  const catDir = path.join(blogDir, category);
  if (!fs.statSync(catDir).isDirectory()) continue;

  for (const file of fs.readdirSync(catDir)) {
    if (!file.endsWith('.md')) continue;
    const filePath = path.join(catDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = parseFrontmatter(content);
    if (!parsed) { errors++; continue; }

    if (hasFaqs(parsed.frontmatter)) { skipped++; continue; }

    const faqs = extractFaqsFromBody(parsed.body);
    if (faqs.length < 2) {
      console.log(`⚠️  ${category}/${file}: solo ${faqs.length} FAQs extraídas, omitido`);
      skipped++;
      continue;
    }

    const faqYaml = faqsToYaml(faqs);
    const newFrontmatter = parsed.frontmatter.trimEnd() + '\n' + faqYaml;
    const newContent = `---\n${newFrontmatter}\n---\n${parsed.body}`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ ${category}/${file}: ${faqs.length} FAQs añadidas`);
    processed++;
  }
}

console.log(`\n📊 Resultado: ${processed} artículos actualizados, ${skipped} omitidos, ${errors} errores`);

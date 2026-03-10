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

function hasReadTime(frontmatter) {
  return /^readTime:/m.test(frontmatter);
}

function countWords(text) {
  return text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]+`/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#*_>\-|]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 0).length;
}

function calcReadTime(wordCount) {
  const minutes = Math.ceil(wordCount / 200);
  return `${minutes} min`;
}

function injectReadTime(frontmatter, readTime) {
  if (/^excerpt:/m.test(frontmatter)) {
    return frontmatter.replace(/^(excerpt:)/m, `readTime: ${readTime}\n$1`);
  }
  if (/^keywords:/m.test(frontmatter)) {
    return frontmatter.replace(/^(keywords:)/m, `readTime: ${readTime}\n$1`);
  }
  return frontmatter + `\nreadTime: ${readTime}`;
}

let updated = 0;
let skipped = 0;

const categories = fs.readdirSync(blogDir).filter(d =>
  fs.statSync(path.join(blogDir, d)).isDirectory()
);

for (const cat of categories) {
  const catDir = path.join(blogDir, cat);
  const files = fs.readdirSync(catDir).filter(f => f.endsWith('.md'));

  for (const file of files) {
    const filePath = path.join(catDir, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const parsed = parseFrontmatter(raw);
    if (!parsed) continue;

    if (hasReadTime(parsed.frontmatter)) {
      skipped++;
      continue;
    }

    const wordCount = countWords(parsed.body);
    const readTime = calcReadTime(wordCount);
    const newFrontmatter = injectReadTime(parsed.frontmatter, readTime);
    const newContent = `---\n${newFrontmatter}\n---\n${parsed.body}`;
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✅ ${cat}/${file} → ${readTime} (${wordCount} words)`);
    updated++;
  }
}

console.log(`\nDone: ${updated} updated, ${skipped} already had readTime`);

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DIR = path.join(__dirname, '../src/content/blog');

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      if (file.endsWith('.md') || file.endsWith('.mdx')) {
        arrayOfFiles.push(filePath);
      }
    }
  });

  return arrayOfFiles;
}

const audit = () => {
  console.log('🚀 Iniciando Auditoría de Longitud del Blog...\n');
  const files = getAllFiles(BLOG_DIR);
  const results = [];

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const { content: body } = matter(content);
    const fileName = path.relative(BLOG_DIR, file);
    
    // Count words (simple space-based)
    const words = body.trim().split(/\s+/).length;
    results.push({ fileName, words });
  });

  // Sort by word count (descending)
  results.sort((a, b) => b.words - a.words);

  results.forEach(res => {
    const status = res.words >= 750 ? '✅' : '❌';
    console.log(`${status} ${res.fileName}: ${res.words} palabras`);
  });

  const underCount = results.filter(r => r.words < 750).length;
  console.log(`\n📊 Auditoría completada. ${underCount} artículos por debajo de 750 palabras de un total de ${results.length}.`);
};

audit();

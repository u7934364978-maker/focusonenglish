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
  console.log('🚀 Iniciando Auditoría SEO del Blog...\n');
  const files = getAllFiles(BLOG_DIR);
  let issuesCount = 0;

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const { data, content: body } = matter(content);
    const fileName = path.relative(BLOG_DIR, file);
    const issues = [];

    // 1. Frontmatter Checks
    if (!data.title) issues.push('Falta Título (title)');
    if (!data.excerpt || data.excerpt.length < 50) issues.push('Extracto (excerpt) ausente o demasiado corto (< 50 caracteres)');
    if (!data.keywords || !Array.isArray(data.keywords) || data.keywords.length === 0) issues.push('Faltan Palabras Clave (keywords)');
    if (!data.category) issues.push('Falta Categoría (category)');
    if (!data.image) issues.push('Falta Imagen Principal (image)');
    if (!data.author) issues.push('Falta Autor (author)');

    const hasFaqs = data.faqs && Array.isArray(data.faqs) && data.faqs.length > 0;

    // 2. Content Checks
    const headings = body.match(/^#+ /gm) || [];
    if (headings.length === 0) issues.push('No tiene encabezados (h1, h2, etc)');
    
    const h1Count = body.match(/^# /gm)?.length || 0;
    if (h1Count > 0) issues.push('Contiene H1 en el cuerpo (el título ya actúa como H1)');

    const images = body.match(/!\[(.*?)\]\((.*?)\)/g) || [];
    images.forEach(img => {
      if (img.includes('![]')) {
        issues.push('Imagen en contenido sin texto ALT');
      }
    });

    if (issues.length > 0) {
      console.log(`❌ ${fileName}:`);
      issues.forEach(issue => console.log(`   - ${issue}`));
      issuesCount += issues.length;
    } else {
      const faqStatus = hasFaqs ? ' [+FAQ Schema]' : '';
      console.log(`✅ ${fileName}: Optimizado${faqStatus}`);
    }
  });

  console.log(`\n📊 Auditoría completada. Se encontraron ${issuesCount} problemas.`);
};

audit();

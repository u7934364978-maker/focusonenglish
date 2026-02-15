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
  console.log('🚀 Iniciando Auditoría Detallada del Blog...\n');
  const files = getAllFiles(BLOG_DIR);
  const results = [];

  const allowedTopics = ['gramática', 'vocabulario', 'comprensión lectora', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
  const forbiddenKeywords = [
    'clases en vivo', 'profesores nativos', 'clases particulares', 'conversación', 
    'speaking', 'listening', 'comprensión auditiva', 'expresión oral', 'expresión escrita',
    'tutores', 'clases grupales', 'certificado oficial', 'título oficial'
  ];

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const { data, content: body } = matter(content);
    const fileName = path.relative(BLOG_DIR, file);
    const slug = path.basename(file).replace(/\.mdx?$/, '');
    const issues = {
      missingImage: !data.image,
      brokenLinks: [],
      selfLinks: [],
      falsePromises: []
    };

    // 1. Image Check
    if (!data.image) {
      // already marked
    }

    // 2. Links Check
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    while ((match = linkRegex.exec(body)) !== null) {
      const link = match[2];
      if (link.startsWith('/') || !link.startsWith('http')) {
        // Internal link
        const linkSlug = link.replace(/^\/(blog\/[^\/]+\/)?/, '').replace(/\/$/, '');
        if (linkSlug === slug || link === '#' || link === '') {
          issues.selfLinks.push(link);
        }
        // Basic check for existence if it's a blog link
        if (link.includes('/blog/')) {
           // This would require more complex logic to verify all blog slugs
           // For now, let's just flag self-links and empty links
        }
      }
    }

    // 3. False Promises Check
    forbiddenKeywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      if (regex.test(body)) {
        issues.falsePromises.push(keyword);
      }
    });

    if (issues.missingImage || issues.selfLinks.length > 0 || issues.falsePromises.length > 0) {
      results.push({
        fileName,
        slug,
        ...issues
      });
    }
  });

  // Print results
  console.log('## Informe de Auditoría\n');
  
  console.log('### Artículos sin imagen:');
  results.filter(r => r.missingImage).forEach(r => console.log(`- ${r.fileName}`));

  console.log('\n### Artículos con links a sí mismos o vacíos:');
  results.filter(r => r.selfLinks.length > 0).forEach(r => {
    console.log(`- ${r.fileName}: ${r.selfLinks.join(', ')}`);
  });

  console.log('\n### Artículos con posibles "falsas promesas":');
  results.filter(r => r.falsePromises.length > 0).forEach(r => {
    console.log(`- ${r.fileName}: ${r.falsePromises.join(', ')}`);
  });
};

audit();

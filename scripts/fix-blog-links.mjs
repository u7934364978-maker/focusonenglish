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

const fixSelfLinks = (body, slug) => {
  // Matches [text](/blog/.../slug) or [text](/blog/slug) or [text](slug)
  const selfLinkRegex = new RegExp(`\\[([^\\]]+)\\]\\((?:/blog/[^/]+/)?${slug}/?\\)`, 'g');
  return body.replace(selfLinkRegex, '$1');
};

const forbiddenKeywords = [
    'clases en vivo', 'profesores nativos', 'clases particulares', 'conversación', 
    'speaking', 'listening', 'comprensión auditiva', 'expresión oral', 'expresión escrita',
    'tutores', 'clases grupales', 'certificado oficial', 'título oficial'
];

const auditAndFix = () => {
  const files = getAllFiles(BLOG_DIR);
  const flagged = [];

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const { data, content: body } = matter(content);
    const slug = path.basename(file).replace(/\.mdx?$/, '');
    
    let newBody = fixSelfLinks(body, slug);
    
    // Check for false promises
    const foundKeywords = [];
    forbiddenKeywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      if (regex.test(newBody)) {
        foundKeywords.push(keyword);
      }
    });

    if (newBody !== body) {
      const newFileContent = matter.stringify(newBody, data);
      fs.writeFileSync(file, newFileContent);
      console.log(`✅ Fixed self-links in ${path.relative(BLOG_DIR, file)}`);
    }

    if (foundKeywords.length > 0) {
      flagged.push({
        file: path.relative(BLOG_DIR, file),
        keywords: foundKeywords
      });
    }
  });

  console.log('\n### Articles requiring manual review for false promises:');
  flagged.forEach(f => {
    console.log(`- ${f.file}: ${f.keywords.join(', ')}`);
  });
};

auditAndFix();

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const HUBS_DIR = path.join(__dirname, '../src/content/hubs');

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

// AI is now strictly forbidden
const forbiddenKeywords = [
    'clases en vivo', 'profesores nativos', 'clases particulares', 
    'tutores', 'clases grupales', 'certificado oficial', 'título oficial',
    ' IA ', ' AI ', 'Inteligencia Artificial', 'algoritmo', 'tutor IA', 'bot de charla', 'chatbot',
    'IA-powered', 'generado por IA', 'herramienta de IA'
];

const auditAndClean = () => {
    const blogFiles = getAllFiles(BLOG_DIR);
    const hubFiles = getAllFiles(HUBS_DIR);
    const allFiles = [...blogFiles, ...hubFiles];

    allFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf-8');
        const { data, content: body } = matter(content);
        
        const lines = body.split('\n');
        const filteredLines = lines.filter(line => {
            const hasForbidden = forbiddenKeywords.some(kw => {
                const regex = new RegExp(kw, 'gi');
                return regex.test(line);
            });
            
            if (hasForbidden) {
                // Remove the line if it mentions AI or other forbidden topics
                return false;
            }
            return true;
        });
        
        let newBody = filteredLines.join('\n');

        // Update "Why Focus English" sections or similar conclusions to emphasize professional courses
        if (newBody.includes('Focus English')) {
            const specializedMention = "Además de nuestros niveles A1-C2, ofrecemos cursos especializados en Hostelería, Administración, Logística y Viajes, con miles de ejercicios prácticos de gramática, vocabulario y comprensión lectora.";
            if (!newBody.includes('Hostelería')) {
                newBody = newBody.replace(/### ¿Por qué elegir Focus English.*?\n(.*?)\n\n/s, `### ¿Por qué elegir Focus English?\n\n${specializedMention}\n\n`);
            }
        }

        if (newBody !== body) {
            const newFileContent = matter.stringify(newBody, data);
            fs.writeFileSync(file, newFileContent);
            console.log(`🧹 Cleaned & Updated ${path.relative(path.join(__dirname, '..'), file)}`);
        }
    });
};

auditAndClean();

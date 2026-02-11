import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'src/content/blog');
const HUBS_DIR = path.join(ROOT_DIR, 'src/content/hubs');
const APP_DIR = path.join(ROOT_DIR, 'src/app');

const BASE_URL = "https://www.focus-on-english.com";

// Helper to get all markdown files
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

// Helper to get all static routes from src/app
function getStaticRoutes(dirPath, currentRoute = '', routes = new Set()) {
  if (!fs.existsSync(dirPath)) return routes;
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Skip dynamic routes, api, and private folders
      if (file.startsWith('[') || file.startsWith('(') || file === 'api' || file === '_components') {
        return;
      }
      getStaticRoutes(filePath, `${currentRoute}/${file}`, routes);
    } else if (file === 'page.tsx' || file === 'page.js') {
      routes.add(currentRoute || '/');
    }
  });

  return routes;
}

// Normalize category logic (mimicking src/lib/blog.ts)
function normalizeCategory(category) {
  return category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

// Slugify logic (mimicking src/lib/blog.ts)
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function getValidRoutes() {
  // Start with automatically discovered static routes
  const routes = getStaticRoutes(APP_DIR);
  console.log('DEBUG: Discovered static routes:', Array.from(routes).sort());
  
  // Add some known routes that might be nested or tricky
  routes.add('/cuenta/login');
  routes.add('/cuenta/registro');
  routes.add('/cuenta/recuperar');
  routes.add('/cuenta/resetear');

  // 1. Blog Articles and Categories
  const blogFiles = getAllFiles(BLOG_DIR);
  const categories = new Set();

  blogFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const { data } = matter(content);
    const slug = path.basename(file).replace(/\.mdx?$/, "");
    const category = normalizeCategory(data.category || "General");
    
    routes.add(`/blog/${category}/${slug}`);
    categories.add(category);
  });

  categories.forEach(cat => {
    routes.add(`/blog/${cat}`);
  });

  // 2. Keyword Hubs
  const keywords = new Set();
  // From articles
  blogFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const { data } = matter(content);
    if (data.keywords && Array.isArray(data.keywords)) {
      data.keywords.forEach(k => keywords.add(k.toLowerCase()));
    }
  });

  // From hub files
  if (fs.existsSync(HUBS_DIR)) {
    const hubFiles = fs.readdirSync(HUBS_DIR);
    hubFiles.forEach(file => {
      if (file.endsWith(".md")) {
        const hubName = file.replace(".md", "").replace(/-/g, " ");
        keywords.add(hubName);
      }
    });
  }

  keywords.forEach(k => {
    routes.add(`/blog/temas/${slugify(k)}`);
  });

  return routes;
}

function extractLinks(content) {
  const links = [];
  
  // Markdown links: [text](url)
  const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  while ((match = mdLinkRegex.exec(content)) !== null) {
    links.push(match[2]);
  }

  // HTML links: <a href="url">
  const htmlLinkRegex = /<a\s+(?:[^>]*?\s+)?href=["']([^"']+)["']/gi;
  while ((match = htmlLinkRegex.exec(content)) !== null) {
    links.push(match[1]);
  }

  return links;
}

function normalizeUrl(url) {
  if (!url) return '';
  // Remove anchor
  let normalized = url.split('#')[0];
  // Remove query params
  normalized = normalized.split('?')[0];
  // Remove trailing slash
  if (normalized.endsWith('/') && normalized.length > 1) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}

async function checkExternalLink(url) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const response = await fetch(url, { 
      method: 'HEAD',
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    if (response.status === 405 || response.status === 501) {
      const getResponse = await fetch(url, { 
        method: 'GET',
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }
      });
      return getResponse.status;
    }
    
    return response.status;
  } catch (error) {
    return 'ERROR';
  }
}

async function main() {
  console.log('🔍 Discovering valid routes...');
  const validRoutes = await getValidRoutes();
  console.log(`✅ Discovered ${validRoutes.size} valid internal routes.`);

  const blogFiles = getAllFiles(BLOG_DIR);
  const hubFiles = getAllFiles(HUBS_DIR);
  const allFiles = [...blogFiles, ...hubFiles];

  console.log(`\n📄 Scanning ${allFiles.length} files for links...`);

  const results = [];
  let totalLinksFound = 0;
  
  // Track external links to avoid checking the same one multiple times
  const externalStatusCache = new Map();

  for (const file of allFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const { content: body } = matter(content);
    const links = extractLinks(body);
    
    const relativePath = path.relative(ROOT_DIR, file);
    
    for (const link of links) {
      totalLinksFound++;
      
      // Skip mailto and tel
      if (link.startsWith('mailto:') || link.startsWith('tel:')) continue;

      let type = 'external';
      let isBroken = false;
      let status = 'OK';

      if (link.startsWith('/') || link.startsWith(BASE_URL) || !link.startsWith('http')) {
        if (link.startsWith('http') && !link.startsWith(BASE_URL)) {
          // It's external
        } else {
          type = 'internal';
          const internalPath = link.startsWith(BASE_URL) 
            ? link.replace(BASE_URL, '') 
            : link;
          
          const normalizedInternalPath = normalizeUrl(internalPath) || '/';
          
          if (normalizedInternalPath === '/test-nivel') {
            console.log(`DEBUG: Checking /test-nivel. In set? ${validRoutes.has(normalizedInternalPath)}`);
          }

          if (!validRoutes.has(normalizedInternalPath)) {
            isBroken = true;
            status = '404';
          }
        }
      } 
      
      if (type === 'external' || (link.startsWith('http') && !link.startsWith(BASE_URL))) {
        type = 'external';
        const normalizedExternal = link.split('#')[0];
        
        if (externalStatusCache.has(normalizedExternal)) {
          status = externalStatusCache.get(normalizedExternal);
        } else {
          process.stdout.write(`  Checking external: ${normalizedExternal.slice(0, 50)}... `);
          status = await checkExternalLink(normalizedExternal);
          console.log(status);
          externalStatusCache.set(normalizedExternal, status);
        }
        
        if (status >= 400 || status === 'ERROR') {
          isBroken = true;
        }
      }

      if (isBroken) {
        results.push({
          file: relativePath,
          link: link,
          type: type,
          status: status
        });
      }
    }
  }

  console.log(`\n✅ Finished scanning ${totalLinksFound} links.`);

  if (results.length > 0) {
    console.log(`\n❌ Found ${results.length} broken or suspicious links:`);
    
    // Group by file
    const grouped = results.reduce((acc, curr) => {
      if (!acc[curr.file]) acc[curr.file] = [];
      acc[curr.file].push(curr);
      return acc;
    }, {});

    for (const [file, issues] of Object.entries(grouped)) {
      console.log(`\n📄 File: ${file}`);
      issues.forEach(issue => {
        console.log(`  - [${issue.status}] ${issue.type}: ${issue.link}`);
      });
    }
  } else {
    console.log('\n✅ No broken links found!');
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

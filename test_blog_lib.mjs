import { getBlogArticles } from './src/lib/blog.ts';
try {
  const articles = getBlogArticles();
  console.log('Successfully fetched', articles.length, 'articles');
} catch (e) {
  console.error('Error fetching articles:', e);
}

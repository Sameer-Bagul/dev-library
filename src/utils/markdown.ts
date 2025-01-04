import { resolve } from 'path';

// Import all markdown files using the correct path pattern
const markdownFiles = import.meta.glob('/src/data/notes/**/*.md', { 
  as: 'raw',
  eager: true 
});

export async function getNoteContent(category?: string, subcategory?: string, noteId?: string): Promise<string> {
  if (!category || !subcategory || !noteId) {
    return '';
  }

  const path = `/src/data/notes/${category}/${subcategory}/${noteId}.md`;
  
  try {
    // Access the content directly since we're using eager loading
    const content = markdownFiles[path] || '';
    return content;
  } catch (error) {
    console.error('Error loading markdown content:', error);
    return '';
  }
}

export function extractTableOfContents(content: string): { id: string; title: string; level: number; }[] {
  if (!content) return [];
  
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const id = title.toLowerCase().replace(/[^\w]+/g, '-');
    toc.push({ id, title, level });
  }

  return toc;
}

export function getReadingTime(content: string): number {
  if (!content) return 0;
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
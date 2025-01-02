import { Note } from '../types';

interface NoteMetadata {
  id: string;
  title: string;
  path: string;
  category: string;
  subcategory?: string;
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function extractTableOfContents(content: string): { id: string; title: string; level: number }[] {

  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: { id: string; title: string; level: number }[] = [];
  
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2];
    const id = title.toLowerCase().replace(/[^\w]+/g, '-');
    toc.push({ id, title, level });
  }
  
  return toc;
}

export function getAllNotes(): NoteMetadata[] {
  const notes: NoteMetadata[] = [
    {
      id: 'introduction',
      title: 'Introduction to Frontend',
      path: '/frontend/getting-started/introduction',
      category: 'Frontend',
      subcategory: 'Getting Started'
    },
    {
      id: 'html-fundamentals',
      title: 'HTML Fundamentals',
      path: '/frontend/html/fundamentals',
      category: 'Frontend',
      subcategory: 'HTML'
    },
    {
      id: 'css-fundamentals',
      title: 'CSS Fundamentals',
      path: '/frontend/css/fundamentals',
      category: 'Frontend',
      subcategory: 'CSS'
    },
    {
      id: 'javascript-basics',
      title: 'JavaScript Basics',
      path: '/frontend/javascript/basics',
      category: 'Frontend',
      subcategory: 'JavaScript'
    },
    {
      id: 'javascript-advanced',
      title: 'Advanced JavaScript',
      path: '/frontend/javascript/advanced',
      category: 'Frontend',
      subcategory: 'JavaScript'
    },
    {
      id: 'testing-fundamentals',
      title: 'Testing Fundamentals',
      path: '/frontend/testing/fundamentals',
      category: 'Frontend',
      subcategory: 'Testing'
    }
  ];
  
  return notes;
}

export function searchNotes(query: string): NoteMetadata[] {
  const notes = getAllNotes();
  const searchTerm = query.toLowerCase();
  
  return notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm) ||
    note.category.toLowerCase().includes(searchTerm) ||
    (note.subcategory && note.subcategory.toLowerCase().includes(searchTerm))
  );
}
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownRenderer from './MarkdownRenderer';
import TableOfContents from './TableOfContents';
import ChapterNavigation from './ChapterNavigation';
import { Clock, Calendar } from 'lucide-react';
import { extractTableOfContents, formatDate, getReadingTime, getAllNotes } from '../utils/noteUtils';

export default function NoteView() {
  const { category, subcategory, noteId } = useParams();
  const [content, setContent] = useState('');
  const [currentSection, setCurrentSection] = useState('');
  
  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`/src/data/notes/${category}/${subcategory}/${noteId}.md`);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error loading note:', error);
        setContent('# Note not found\n\nSorry, the requested note could not be loaded.');
      }
    };
    
    loadContent();
  }, [category, subcategory, noteId]);

  const toc = extractTableOfContents(content);
  const readingTime = getReadingTime(content);

  // Get adjacent notes for navigation
  const notes = getAllNotes();
  const currentIndex = notes.findIndex(note => note.path === `/${category}/${subcategory}/${noteId}`);
  const previousNote = currentIndex > 0 ? notes[currentIndex - 1] : undefined;
  const nextNote = currentIndex < notes.length - 1 ? notes[currentIndex + 1] : undefined;

  return (
    <div className="grid grid-cols-12 gap-8">
      <article className="col-span-9 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-8">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(new Date().toISOString())}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{readingTime} min read</span>
          </div>
        </div>
        
        <MarkdownRenderer content={content} />
        
        <ChapterNavigation
          previousChapter={previousNote ? {
            slug: previousNote.path,
            title: previousNote.title
          } : undefined}
          nextChapter={nextNote ? {
            slug: nextNote.path,
            title: nextNote.title
          } : undefined}
        />
      </article>
      
      <aside className="col-span-3">
        <TableOfContents items={toc} currentSection={currentSection} />
      </aside>
    </div>
  );
}
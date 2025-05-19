import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MarkdownRenderer from './MarkdownRenderer';
import TableOfContents from './TableOfContents';
import Pagination from './Pagination';
import ProgressBar from './ProgressBar';
import { Clock, Calendar, BookOpen, ArrowLeft, FileText, Loader2 } from 'lucide-react';
import { 
  extractTableOfContents, 
  formatDate, 
  getReadingTime,
  getAdjacentNotes,
} from '../utils/noteUtils';
import { getNoteContent } from '../utils/fileSystem';

export default function NoteView() {
  const { '*': path } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  const loadContent = useCallback(async () => {
    try {
      setIsLoading(true);
      setError('');
      
      if (!path) {
        throw new Error('No path specified');
      }

      const noteContent = await getNoteContent('/' + path);
      if (!noteContent) {
        throw new Error('Note not found');
      }

      setContent(noteContent);
      setError('');
      setRetryCount(0);
    } catch (err) {
      console.error('Error loading note:', err);
      setError(err instanceof Error ? err.message : 'Failed to load the note content.');
      setContent('');
    } finally {
      setIsLoading(false);
    }
  }, [path]);

  useEffect(() => {
    loadContent();
  }, [path, loadContent]);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    loadContent();
  };

  const headings = extractTableOfContents(content);
  const readingTime = getReadingTime(content);
  const { previous, next } = getAdjacentNotes('/' + (path || ''));

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4 animate-fade-in">
        <Loader2 className="w-8 h-8 text-[var(--accent-primary)] animate-spin" />
        <p className="text-[var(--text-secondary)] animate-pulse">Loading note content...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] max-w-md mx-auto text-center py-8 px-4 animate-fade-in">
        <div className="glass-effect p-8 w-full rounded-xl">
          <h2 className="text-xl font-semibold text-red-400 mb-3">Error Loading Note</h2>
          <p className="text-[var(--text-secondary)] mb-6">{error}</p>
          <div className="space-y-3">
            <button 
              onClick={handleRetry}
              disabled={retryCount >= 3}
              className="w-full px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-2"
            >
              {retryCount >= 3 ? 'Too many retries' : 'Try Again'}
            </button>
            <button 
              onClick={() => navigate('/')}
              className="w-full px-4 py-2 bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ProgressBar />
      <div className="grid grid-cols-12 gap-8 animate-fade-in">
        <article className="col-span-12 lg:col-span-9">
          {/* File Path Indicator */}
          <div className="glass-effect mb-6 flex items-center gap-2 text-sm text-[var(--text-tertiary)] p-4 rounded-lg">
            <FileText className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="truncate">{path}</span>
          </div>

          {/* Note Content */}
          <div className="gradient-border overflow-hidden relative">
            {/* Note Metadata */}
            <div className="p-6 border-b border-[var(--border-primary)] bg-[var(--bg-secondary)] bg-opacity-50">
              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-tertiary)]">
                <div className="flex items-center gap-2 hover-lift">
                  <Calendar className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>{formatDate(new Date().toISOString())}</span>
                </div>
                <div className="flex items-center gap-2 hover-lift">
                  <Clock className="w-4 h-4 text-[var(--accent-secondary)]" />
                  <span>{readingTime} min read</span>
                </div>
                <div className="flex items-center gap-2 hover-lift">
                  <BookOpen className="w-4 h-4 text-[var(--accent-tertiary)]" />
                  <span className="truncate max-w-[200px]">
                    {path?.split('/').slice(0, -1).join(' / ')}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Note Content */}
            <div className="p-8">
              <div className="prose dark:prose-invert max-w-none">
                <MarkdownRenderer content={content} />
              </div>
            </div>
            
            {/* Pagination */}
            <div className="border-t border-[var(--border-primary)]">
              <div className="p-6">
                <Pagination previousNote={previous} nextNote={next} />
              </div>
            </div>
          </div>
        </article>
        
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 glass-effect rounded-xl overflow-hidden">
            <TableOfContents headings={headings} />
          </div>
        </aside>
      </div>
    </>
  );
}
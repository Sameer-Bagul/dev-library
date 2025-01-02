import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ChapterNavigationProps {
  previousChapter?: {
    slug: string;
    title: string;
  };
  nextChapter?: {
    slug: string;
    title: string;
  };
}

export default function ChapterNavigation({ previousChapter, nextChapter }: ChapterNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
      {previousChapter ? (
        <Link
          to={`/note/${previousChapter.slug}`}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <div>
            <div className="text-sm">Previous</div>
            <div className="text-base font-medium">{previousChapter.title}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}
      
      {nextChapter && (
        <Link
          to={`/note/${nextChapter.slug}`}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-right"
        >
          <div>
            <div className="text-sm">Next</div>
            <div className="text-base font-medium">{nextChapter.title}</div>
          </div>
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
import { useEffect, useState, useCallback } from 'react';
import { ChevronRight, Hash, ChevronDown } from 'lucide-react';
import { TOCItem } from '../utils/markdown';

interface TableOfContentsProps {
  headings: TOCItem[];
}

export default function TableOfContents({ headings = [] }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(true);
  const [visibleItems, setVisibleItems] = useState<number>(10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const showMore = () => {
    setVisibleItems(prev => prev + 10);
  };

  const displayedHeadings = isExpanded ? headings.slice(0, visibleItems) : headings.slice(0, 5);
  const hasMore = isExpanded && visibleItems < headings.length;

  return (
    <nav className="p-4 rounded-lg">
      {/* Header */}
      <button 
        onClick={toggleExpand}
        className="flex items-center gap-2 w-full mb-4 pb-2 border-b border-[var(--border-primary)] text-[var(--text-primary)]"
      >
        <Hash className="w-5 h-5 text-[var(--accent-primary)]" />
        <h2 className="text-lg font-semibold flex-1">On This Page</h2>
        {isExpanded ? (
          <ChevronDown className="w-4 h-4 text-[var(--text-tertiary)]" />
        ) : (
          <ChevronRight className="w-4 h-4 text-[var(--text-tertiary)]" />
        )}
      </button>

      {/* TOC Items */}
      <div className={`space-y-1 transition-all duration-300 ${isExpanded ? 'max-h-[70vh]' : 'max-h-40'} overflow-y-auto custom-scrollbar`}>
        {displayedHeadings.map((heading) => {
          const isActive = heading.id === activeId;
          
          return (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={`
                group w-full flex items-center py-2 px-3 rounded-md text-left
                transition-all duration-200
                ${isActive 
                  ? 'bg-[var(--accent-primary)] bg-opacity-10 text-[var(--text-primary)] font-medium' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'}
              `}
              style={{
                paddingLeft: `${(heading.level - 1) * 12 + 12}px`
              }}
            >
              <ChevronRight
                className={`
                  w-4 h-4 mr-2 flex-shrink-0
                  transition-transform duration-200
                  ${isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--text-tertiary)]'}
                  ${isActive ? 'rotate-90' : 'group-hover:text-[var(--accent-primary)]'}
                `}
              />
              <span className="text-sm truncate">
                {heading.text.replace(/^\*\*|\*\*$/g, '')}
              </span>
            </button>
          );
        })}

        {/* Show More Button */}
        {hasMore && (
          <button
            onClick={showMore}
            className="w-full text-center py-2 text-sm text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition-colors"
          >
            Show More...
          </button>
        )}
      </div>
    </nav>
  );
}
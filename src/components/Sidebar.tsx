import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronRight,   
  Folder, 
  FolderOpen, 
  File, 
  FileText,
  FolderTree,
  X
} from 'lucide-react';
import { getCategories, getNotesByCategory, getSubcategories, getNotesBySubcategory } from '../utils/navigationUtils';

export default function Sidebar() {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [expandedSubcategories, setExpandedSubcategories] = useState<Record<string, boolean>>({});
  const [isAllExpanded, setIsAllExpanded] = useState(false);
  
  const categories = getCategories();

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleSubcategory = (subcategory: string) => {
    setExpandedSubcategories(prev => ({
      ...prev,
      [subcategory]: !prev[subcategory]
    }));
  };

  const toggleAllCategories = () => {
    const newState = !isAllExpanded;
    setIsAllExpanded(newState);
    
    const newExpandedState = categories.reduce((acc, category) => {
      acc[category] = newState;
      return acc;
    }, {} as Record<string, boolean>);
    
    setExpandedCategories(newExpandedState);
    
    const allSubcategories = categories.flatMap(category => getSubcategories(category));
    const newSubcategoriesState = allSubcategories.reduce((acc, subcategory) => {
      acc[subcategory] = newState;
      return acc;
    }, {} as Record<string, boolean>);
    
    setExpandedSubcategories(newSubcategoriesState);
  };

  // Add subtle background pattern
  const patternStyle = {
    backgroundImage: `radial-gradient(var(--text-tertiary) 1px, transparent 1px)`,
    backgroundSize: '24px 24px',
  };

  return (
    <aside className="w-72 h-screen fixed left-0 top-0 bg-[var(--bg-primary)] border-r border-[var(--border-primary)] overflow-hidden shadow-xl">
      {/* Background Pattern */}
      <div className="absolute inset-0" style={patternStyle} />

      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-6 bg-[var(--bg-secondary)] border-b border-[var(--border-primary)]">
          <Link to="/" className="flex items-center gap-3 group">
            <FolderTree className="w-6 h-6 text-[var(--accent-primary)] group-hover:text-[var(--accent-hover)] transition-colors" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              DevNotes
            </h1>
          </Link>
          <button
            onClick={toggleAllCategories}
            className="p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
            title={isAllExpanded ? "Collapse All" : "Expand All"}
          >
            {isAllExpanded ? (
              <X className="w-4 h-4 text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]" />
            )}
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto custom-scrollbar space-y-0.5 p-3">
          {categories.map(category => {
            const isExpanded = expandedCategories[category];
            const subcategories = getSubcategories(category);
            const categoryNotes = getNotesByCategory(category);
            const hasContent = subcategories.length > 0 || categoryNotes.length > 0;

            return (
              <div key={category} className="relative group/category">
                <button
                  onClick={() => toggleCategory(category)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                    transition-all duration-200 ease-in-out
                    ${isExpanded 
                      ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' 
                      : 'hover:bg-[var(--bg-tertiary)] hover:bg-opacity-50 text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }
                    ${!hasContent && 'opacity-60'}
                  `}
                >
                  {isExpanded ? (
                    <FolderOpen className="w-5 h-5 text-[var(--accent-primary)]" />
                  ) : (
                    <Folder className="w-5 h-5 text-[var(--accent-primary)]" />
                  )}
                  <span className="flex-1 text-left text-sm font-medium truncate">
                    {category}
                  </span>
                  {hasContent && (
                    <ChevronRight 
                      className={`w-4 h-4 text-[var(--text-tertiary)] transition-transform duration-200 
                      ${isExpanded ? 'rotate-90 text-[var(--text-secondary)]' : 'group-hover/category:text-[var(--text-secondary)]'}`} 
                    />
                  )}
                </button>

                {/* Dropdown Content */}
                {isExpanded && (
                  <div className="ml-3 mt-1 mb-2 space-y-0.5">
                    {/* Direct category notes */}
                    {categoryNotes.map(note => (
                      <Link
                        key={note.id}
                        to={note.path.slice(1)}
                        className={`
                          flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                          transition-all duration-200 group/note
                          ${location.pathname === '/' + note.path.slice(1)
                            ? 'bg-[var(--accent-primary)] bg-opacity-10 text-[var(--accent-primary)]'
                            : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:bg-opacity-50 hover:text-[var(--text-primary)]'
                          }
                        `}
                        title={note.title}
                      >
                        {location.pathname === '/' + note.path.slice(1) ? (
                          <FileText className="w-4 h-4 flex-shrink-0 text-[var(--accent-primary)]" />
                        ) : (
                          <File className="w-4 h-4 flex-shrink-0 text-[var(--text-tertiary)] group-hover/note:text-[var(--text-secondary)]" />
                        )}
                        <span className="truncate">{note.title}</span>
                      </Link>
                    ))}

                    {/* Subcategories */}
                    {subcategories.map(subcategory => {
                      const isSubcategoryExpanded = expandedSubcategories[subcategory];
                      const subcategoryNotes = getNotesBySubcategory(category, subcategory);

                      return (
                        <div key={subcategory} className="space-y-0.5">
                          <button
                            onClick={() => toggleSubcategory(subcategory)}
                            className={`
                              w-full flex items-center gap-3 px-3 py-2 rounded-lg
                              transition-all duration-200 group/subcategory
                              ${isSubcategoryExpanded 
                                ? 'bg-[var(--bg-tertiary)] bg-opacity-50 text-[var(--text-primary)]' 
                                : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:bg-opacity-30 hover:text-[var(--text-primary)]'
                              }
                            `}
                          >
                            {isSubcategoryExpanded ? (
                              <FolderOpen className="w-4 h-4 text-[var(--accent-primary)]" />
                            ) : (
                              <Folder className="w-4 h-4 text-[var(--accent-primary)]" />
                            )}
                            <span className="flex-1 text-left text-sm truncate">
                              {subcategory}
                            </span>
                            <ChevronRight 
                              className={`w-3 h-3 text-[var(--text-tertiary)] transition-transform duration-200 
                              ${isSubcategoryExpanded ? 'rotate-90 text-[var(--text-secondary)]' : 'group-hover/subcategory:text-[var(--text-secondary)]'}`} 
                            />
                          </button>

                          {isSubcategoryExpanded && (
                            <div className="ml-3 space-y-0.5 mt-1 mb-2">
                              {subcategoryNotes.map(note => (
                                <Link
                                  key={note.id}
                                  to={note.path.slice(1)}
                                  className={`
                                    flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                                    transition-all duration-200 group/subnote
                                    ${location.pathname === '/' + note.path.slice(1)
                                      ? 'bg-[var(--accent-primary)] bg-opacity-10 text-[var(--accent-primary)]'
                                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:bg-opacity-50 hover:text-[var(--text-primary)]'
                                    }
                                  `}
                                  title={note.title}
                                >
                                  {location.pathname === '/' + note.path.slice(1) ? (
                                    <FileText className="w-4 h-4 flex-shrink-0 text-[var(--accent-primary)]" />
                                  ) : (
                                    <File className="w-4 h-4 flex-shrink-0 text-[var(--text-tertiary)] group-hover/subnote:text-[var(--text-secondary)]" />
                                  )}
                                  <span className="truncate">{note.title}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
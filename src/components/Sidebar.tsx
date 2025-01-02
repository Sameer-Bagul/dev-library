import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Code, Database, FileCode2, Globe, Home, Layout, Server, ChevronDown, ChevronRight } from 'lucide-react';
import { getAllNotes } from '../utils/noteUtils';

const iconMap = {
  home: Home,
  layout: Layout,
  server: Server,
  database: Database,
  code: Code,
  globe: Globe,
  'file-code2': FileCode2,
  book: Book,
};

export default function Sidebar() {
  const location = useLocation();
  const notes = getAllNotes();
  
  // Group notes by category and subcategory
  const groupedNotes = notes.reduce((acc, note) => {
    if (!acc[note.category]) {
      acc[note.category] = {};
    }
    if (!acc[note.category][note.subcategory || 'Other']) {
      acc[note.category][note.subcategory || 'Other'] = [];
    }
    acc[note.category][note.subcategory || 'Other'].push(note);
    return acc;
  }, {} as Record<string, Record<string, typeof notes>>);

  // State to handle open categories and subcategories
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  const [openSubcategories, setOpenSubcategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const toggleSubcategory = (subcategory: string) => {
    setOpenSubcategories((prev) => ({ ...prev, [subcategory]: !prev[subcategory] }));
  };

  return (
    <div className="w-64 h-screen bg-white/10 backdrop-blur-lg border-r border-gray-200/20 p-4 fixed left-0 top-0 overflow-y-auto">
      <div className="flex items-center gap-2 mb-8">
        <FileCode2 className="w-8 h-8 text-indigo-500" />
        <h1 className="text-xl font-bold text-white">DevNotes</h1>
      </div>
      
      <nav className="space-y-6">
        {Object.entries(groupedNotes).map(([category, subcategories]) => (
          <div key={category} className="space-y-2">
            <button
              className="flex justify-between items-center w-full text-sm font-semibold text-gray-400 uppercase tracking-wider px-4"
              onClick={() => toggleCategory(category)}
            >
              {category}
              {openCategories[category] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
            
            {openCategories[category] &&
              Object.entries(subcategories).map(([subcategory, notes]) => (
                <div key={subcategory} className="ml-4">
                  <button
                    className="flex justify-between items-center w-full text-xs font-medium text-gray-500 px-4 py-1"
                    onClick={() => toggleSubcategory(`${category}-${subcategory}`)}
                  >
                    {subcategory}
                    {openSubcategories[`${category}-${subcategory}`] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                  
                  {openSubcategories[`${category}-${subcategory}`] &&
                    notes.map((note) => (
                      <Link
                        key={note.id}
                        to={note.path}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                          location.pathname === note.path
                            ? 'bg-indigo-500/20 text-indigo-400'
                            : 'text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {note.title}
                      </Link>
                    ))}
                </div>
              ))}
          </div>
        ))}
      </nav>
    </div>
  );
}

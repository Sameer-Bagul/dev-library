import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import NoteView from './components/NoteView';
import { Moon, Sun, Search, X } from 'lucide-react';
import { searchNotes } from './utils/noteUtils';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ReturnType<typeof searchNotes>>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchNotes(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Router>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? 'dark bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'
        }`}
      >
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-64 p-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                {/* Search Input */}
                <div className="relative flex-1 max-w-lg">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className={`w-full pl-10 pr-10 py-2 rounded-lg shadow-sm focus:outline-none ${
                      darkMode
                        ? 'bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500'
                        : 'bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500'
                    }`}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSearchResults([]);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                  {searchResults.length > 0 && (
                    <div
                      className={`absolute w-full mt-2 rounded-lg shadow-lg z-50 overflow-hidden ${
                        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
                      }`}
                    >
                      {searchResults.map((result) => (
                        <a
                          key={result.id}
                          href={result.path}
                          className={`block px-4 py-3 hover:bg-indigo-500/20 ${
                            darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-indigo-600'
                          }`}
                        >
                          <div className="font-medium">{result.title}</div>
                          <div className="text-sm">
                            {result.category} {result.subcategory && `• ${result.subcategory}`}
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-lg transition-all ${
                    darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>

              {/* Routes */}
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="text-center py-20">
                      <h1 className="text-4xl font-bold mb-4 animate-fade-in">
                        Welcome to <span className="text-indigo-500">DevNotes</span>
                      </h1>
                      <p className="text-lg max-w-2xl mx-auto">
                        Your comprehensive resource for programming and development notes.
                        Choose a category from the sidebar to get started.
                      </p>
                    </div>
                  }
                />
                <Route path="/:category/:subcategory/:noteId" element={<NoteView />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

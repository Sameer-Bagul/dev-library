import React from 'react';
import Sidebar from './Sidebar';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${theme}`}>
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 ml-72">
          {/* Top Navigation Bar */}
          <nav className="fixed top-0 right-0 left-72 h-16 bg-[var(--bg-secondary)] border-b border-[var(--border-primary)] z-40 px-6">
            <div className="h-full flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Menu className="w-5 h-5 text-[var(--text-tertiary)]" />
                <div className="h-6 w-px bg-[var(--border-primary)]" />
                <div className="text-sm text-[var(--text-secondary)]">
                  Documentation / Getting Started
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-[var(--accent-primary)]" />
                  ) : (
                    <Moon className="w-5 h-5 text-[var(--accent-primary)]" />
                  )}
                </button>
              </div>
            </div>
          </nav>

          {/* Main Content Area */}
          <div className="pt-16 min-h-screen bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto p-8 animate-fade-in">
              {/* Page Header */}
              <div className="glass-effect mb-8 p-6 rounded-xl">
                <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Welcome to DevNotes
                </h1>
                <p className="text-[var(--text-secondary)]">
                  Your comprehensive resource for programming and development notes.
                </p>
              </div>

              {/* Main Content */}
              <div className="gradient-border p-6">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

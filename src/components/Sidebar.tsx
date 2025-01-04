import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { getSubjects, getTopicsBySubject, getNotesByTopic } from '../utils/noteUtils';

export default function Sidebar() {
  const location = useLocation();
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({
    'Frontend Development': true // Open by default
  });
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});
  
  const subjects = getSubjects();

  const toggleSubject = (subject: string) => {
    setExpandedSubjects(prev => ({
      ...prev,
      [subject]: !prev[subject]
    }));
  };

  const toggleTopic = (topic: string) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-[var(--color-sidebar)] border-r border-[var(--color-border)] overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-8">
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">DevNotes</h1>
        </div>
        
        <nav className="space-y-2">
          {subjects.map(subject => {
            const topics = getTopicsBySubject(subject);
            const isSubjectExpanded = expandedSubjects[subject];

            return (
              <div key={subject} className="space-y-1">
                <button
                  onClick={() => toggleSubject(subject)}
                  className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
                >
                  <span className="flex-1 text-left text-sm font-medium">{subject}</span>
                  {isSubjectExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                {isSubjectExpanded && (
                  <div className="ml-4 space-y-1">
                    {topics.map(topic => {
                      const notes = getNotesByTopic(subject, topic);
                      const isTopicExpanded = expandedTopics[topic];

                      return (
                        <div key={topic} className="space-y-1">
                          <button
                            onClick={() => toggleTopic(topic)}
                            className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
                          >
                            {isTopicExpanded ? (
                              <ChevronDown className="w-3 h-3" />
                            ) : (
                              <ChevronRight className="w-3 h-3" />
                            )}
                            <span className="flex-1 text-left text-sm">{topic}</span>
                          </button>

                          {isTopicExpanded && notes.length > 0 && (
                            <div className="ml-4 space-y-1">
                              {notes.map(note => (
                                <Link
                                  key={note.id}
                                  to={note.path}
                                  className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm transition-colors ${
                                    location.pathname === note.path
                                      ? 'bg-[var(--color-accent)] text-white'
                                      : 'text-[var(--color-text-tertiary)] hover:bg-[var(--color-bg-secondary)]'
                                  }`}
                                >
                                  <span>Chapter {note.chapter}: {note.title}</span>
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
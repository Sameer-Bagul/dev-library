import React, { ReactNode } from 'react';

interface CustomScrollbarProps {
  children: ReactNode;
  className?: string;
}

export default function CustomScrollbar({ children, className = '' }: CustomScrollbarProps) {
  return (
    <div className={`custom-scrollbar ${className}`}>
      <style>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: var(--accent-primary) var(--bg-secondary);
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: var(--bg-secondary);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--accent-primary);
          border-radius: 3px;
          transition: all 0.2s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--accent-hover);
        }
        
        .custom-scrollbar::-webkit-scrollbar-corner {
          background: transparent;
        }
      `}</style>
      {children}
    </div>
  );
} 
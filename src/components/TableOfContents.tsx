import React from 'react';
import { Link } from 'react-router-dom';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  currentSection?: string;
}

export default function TableOfContents({ items, currentSection }: TableOfContentsProps) {
  return (
    <nav className="sticky top-8 p-4 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10">
      <h3 className="text-lg font-semibold text-white mb-4">Table of Contents</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 1) * 1}rem` }}
          >
            <Link
              to={`#${item.id}`}
              className={`text-sm ${
                currentSection === item.id
                  ? 'text-indigo-400 font-medium'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../contexts/ThemeContext';
import { Check, Copy, Terminal, Code2 } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  fileName?: string;
}

export default function CodeBlock({
  code,
  language,
  showLineNumbers = true,
  fileName,
}: CodeBlockProps) {
  const { theme } = useTheme();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="group relative rounded-[var(--radius-lg)] overflow-hidden glass-effect ">
      {/* Code Block Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)]">
        
        <div className="flex items-center gap-2">
          {language === 'bash' || language === 'shell' ? (
            <Terminal className="w-4 h-4 text-[var(--accent-primary)]" />
          ) : (
            <Code2 className="w-4 h-4 text-[var(--accent-primary)]" />
          )}
          <span className="text-sm font-medium text-[var(--text-secondary)]">
            {fileName || language}
          </span>
        </div>
        
        <div className="flex items-center gap-2 px-10">
          <button
            onClick={handleCopy}
            className={`
              flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium
              transition-all duration-200 ease-in-out hover-lift
              ${
                isCopied
                  ? 'bg-[var(--success)] bg-opacity-10 text-[var(--primary)] '
                  : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }
            `}
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="relative">
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent pointer-events-none" />
        <SyntaxHighlighter
          language={language}
          style={theme === 'dark' ? dracula : oneLight}
          showLineNumbers={showLineNumbers}
          wrapLines={true}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'var(--bg-secondary)',
            fontSize: '0.875rem',
            borderRadius: 0,
          }}
          lineNumberStyle={{
            minWidth: '2.5em',
            paddingRight: '1em',
            color: 'var(--text-tertiary)',
            userSelect: 'none',
          }}
          className="custom-scrollbar !bg-[var(--bg-secondary)] !border-0"
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>

      {/* Language Badge */}
      <div className="absolute top-0 right-0 px-2 py-1 text-xs font-medium text-[var(--text-secondary)] bg-[var(--bg-tertiary)] rounded-bl transform translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-200">
        {language}
      </div>
    </div>
  );
} 
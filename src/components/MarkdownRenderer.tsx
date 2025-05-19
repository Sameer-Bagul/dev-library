import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { Link2, Quote } from 'lucide-react';
import CodeBlock from './CodeBlock';
import { slugify } from '../utils/markdown';
import { useTheme } from '../contexts/ThemeContext';

interface MarkdownRendererProps {
  content: string;
}

function cleanHeadingText(text: string): string {
  return text
    .replace(/^\*\*|\*\*$/g, '') // Remove bold markers
    .replace(/^\*|\*$/g, '')     // Remove italic markers
    .replace(/^`|`$/g, '')       // Remove inline code markers
    .trim();
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const { theme } = useTheme();

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      className="prose max-w-none"
      components={{
        h1: ({ children }) => {
          const text = cleanHeadingText(children?.toString() || '');
          const id = slugify(text);
          return (
            <h1 id={id} className="group relative text-4xl font-bold mt-8 mb-4 pb-4 border-b border-[var(--border-primary)] text-[var(--text-primary)]">
              <span>{children}</span>
              <a
                href={`#${id}`}
                className="absolute -left-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Link to ${text}`}
              >
                <Link2 className="w-4 h-4 text-[var(--accent-primary)]" />
              </a>
            </h1>
          );
        },
        h2: ({ children }) => {
          const text = cleanHeadingText(children?.toString() || '');
          const id = slugify(text);
          return (
            <h2 id={id} className="group relative text-3xl font-bold mt-8 mb-4 text-[var(--text-primary)]">
              <span>{children}</span>
              <a
                href={`#${id}`}
                className="absolute -left-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Link to ${text}`}
              >
                <Link2 className="w-4 h-4 text-[var(--accent-primary)]" />
              </a>
            </h2>
          );
        },
        h3: ({ children }) => {
          const text = cleanHeadingText(children?.toString() || '');
          const id = slugify(text);
          return (
            <h3 id={id} className="group relative text-2xl font-semibold mt-6 mb-3 text-[var(--text-primary)]">
              <span>{children}</span>
              <a
                href={`#${id}`}
                className="absolute -left-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Link to ${text}`}
              >
                <Link2 className="w-4 h-4 text-[var(--accent-primary)]" />
              </a>
            </h3>
          );
        },
        h4: ({ children }) => {
          const text = cleanHeadingText(children?.toString() || '');
          const id = slugify(text);
          return (
            <h4 id={id} className="group relative text-xl font-semibold mt-4 mb-2 text-[var(--text-primary)]">
              <span>{children}</span>
              <a
                href={`#${id}`}
                className="absolute -left-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Link to ${text}`}
              >
                <Link2 className="w-4 h-4 text-[var(--accent-primary)]" />
              </a>
            </h4>
          );
        },
        strong: ({ children }) => (
          <strong className="font-bold text-[var(--text-primary)]">
            {children}
          </strong>
        ),
        em: ({ children }) => (
          <em className="italic text-[var(--text-secondary)]">
            {children}
          </em>
        ),
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || '');
          const isInline = inline || !match;

          return isInline ? (
            <code
              className="bg-[var(--bg-tertiary)] text-[var(--accent-primary)] px-1.5 py-0.5 rounded-[var(--radius-sm)] text-sm font-mono border border-[var(--border-primary)]"
              {...props}
            >
              {children}
            </code>
          ) : (
            <CodeBlock
              code={String(children).replace(/\n$/, '')}
              language={match[1]}
              showLineNumbers={true}
            />
          );
        },
        p: ({ children }) => (
          <p className="text-[var(--text-secondary)] leading-7 mb-4 transition-colors">
            {children}
          </p>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-[var(--accent-primary)] hover:text-[var(--accent-hover)] underline-offset-4 hover:underline transition-colors"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {children}
          </a>
        ),
        ul: ({ children }) => (
          <ul className="list-disc marker:text-[var(--accent-primary)] list-outside pl-6 space-y-2 mb-4">
            {children}
          </ul>
        ),
        ol: ({ children, start }) => (
          <ol
            start={start}
            className="list-decimal marker:text-[var(--accent-primary)] list-outside pl-6 space-y-2 mb-4"
          >
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li
            className="text-[var(--text-secondary)] transition-colors"
          >
            {children}
          </li>
        ),
        blockquote: ({ children }) => (
          <div className="relative my-6 overflow-hidden">
            <blockquote className="relative glass-effect px-6 py-4 rounded-[var(--radius-lg)]">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent-primary)]" />
              <Quote className="absolute right-4 bottom-4 w-12 h-12 text-[var(--accent-primary)] opacity-10" />
              <div className="relative text-[var(--text-secondary)] italic">
                {children}
              </div>
            </blockquote>
          </div>
        ),
        img: ({ src, alt }) => (
          <div className="my-6">
            <img
              src={src}
              alt={alt}
              className="rounded-[var(--radius-lg)] shadow-lg hover-scale transition-transform"
            />
            {alt && (
              <p className="mt-2 text-center text-sm text-[var(--text-tertiary)]">
                {alt}
              </p>
            )}
          </div>
        ),
        table: ({ children }) => (
          <div className="my-6 overflow-x-auto glass-effect rounded-[var(--radius-lg)]">
            <table className="w-full border-collapse">
              {children}
            </table>
          </div>
        ),
        th: ({ children }) => (
          <th className="p-3 text-left border-b border-[var(--border-primary)] font-semibold text-[var(--text-primary)]">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="p-3 border-b border-[var(--border-primary)] text-[var(--text-secondary)]">
            {children}
          </td>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

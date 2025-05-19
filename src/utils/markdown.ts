export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

function cleanMarkdownText(text: string): string {
  return text
    .replace(/^\*\*|\*\*$/g, '') // Remove bold markers
    .replace(/^\*|\*$/g, '')     // Remove italic markers
    .replace(/^`|`$/g, '')       // Remove inline code markers
    .trim();
}

export function extractTableOfContents(content: string): TOCItem[] {
  if (!content || typeof content !== 'string') return [];

  try {
    // Match all headings (h1-h6) from markdown content
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      
      if (text) {  // Only add if there's actual text content
        const cleanText = cleanMarkdownText(text);
        const id = slugify(cleanText);
        headings.push({ id, text: cleanText, level });
      }
    }

    return headings;
  } catch (error) {
    console.error('Error extracting table of contents:', error);
    return [];
  }
}

export function getReadingTime(content: string): number {
  if (!content || typeof content !== 'string') return 0;

  try {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  } catch (error) {
    console.error('Error calculating reading time:', error);
    return 1;
  }
}

export function slugify(text: string): string {
  if (!text || typeof text !== 'string') return '';

  try {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
      .replace(/^-|-$/g, '')       // Remove leading/trailing hyphens
      .replace(/^[0-9]/, 'n$0');   // Prefix numbers with 'n' to make valid HTML IDs
  } catch (error) {
    console.error('Error slugifying text:', error);
    return '';
  }
}

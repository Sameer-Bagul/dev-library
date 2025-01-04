export interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface NoteMetadata {
  id: string;
  title: string;
  path: string;
  chapter: number;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
import { ReactElement } from 'react';

export interface TagType {
    slug: string;
    name: string;
    color: string;
}

export interface UrlPreviewType {
    thumb?: string;
    url: string;
    title?: string;
}

export interface NoteType {
    title?: string;
    permalink: string;
    body: string; // HTML
    tags: TagType[];
}

interface EditorTypeProps {
    note: NoteType;
    updateNote(note: NoteType): void;
}

export type EditorType = React.ComponentType<EditorTypeProps>;

export interface NoteFrameChild {
    note: NoteType;
    updateNote(note: NoteType): void;
}

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
    body: string; // HTML
    tags: TagType[];
}
import { ReactElement } from "react";

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

export type EditorType = React.ComponentType<{ note: NoteType }>;

export interface NoteFrameChild {
    note: NoteType;
    popup(props: PopupState): void;
}

export interface PopupState {
  content?: ReactElement;
  onClose?(): void;
}

import React from 'react';
import { NoteType } from '../../types';

const MarkdownEditor: React.FC<{ note: NoteType }> = ({ note }) => (
    <div>Editor here!</div>
);

export default React.memo(MarkdownEditor);
import React from 'react';
import NoteFrame from './NoteFrame';
import { NoteFrameChild } from '../../types';
import MarkdownEditor from '../Editors/MarkdownEditor';

const MarkdownNote: React.FC<NoteFrameChild> = ({ note, popup }) => (
    <NoteFrame note={note} Editor={MarkdownEditor} popup={popup}>
        <div dangerouslySetInnerHTML={{ __html: note.body }}></div>
    </NoteFrame>
);

export default React.memo(MarkdownNote);

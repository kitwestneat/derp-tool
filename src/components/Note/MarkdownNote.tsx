import React from 'react';
import NoteFrame from './NoteFrame';
import { NoteFrameChild } from '../../types';
import MarkdownEditor from '../Editors/MarkdownEditor';

const MarkdownNote: React.FC<NoteFrameChild> = (props) => (
    <NoteFrame Editor={MarkdownEditor} {...props}>
        <div dangerouslySetInnerHTML={{ __html: props.note.body }}></div>
    </NoteFrame>
);

export default React.memo(MarkdownNote);

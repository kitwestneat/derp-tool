import React from 'react';
import NoteFrame from './NoteFrame';
import { NoteFrameChild } from '../../types';
import MarkdownEditor from '../Editors/MarkdownEditor';

const HtmlNote: React.FC<NoteFrameChild> = (props) => (
    <NoteFrame {...props} Editor={MarkdownEditor}>
        <div dangerouslySetInnerHTML={{ __html: props.note.body }}></div>
    </NoteFrame>
);

export default React.memo(HtmlNote);

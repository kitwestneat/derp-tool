import React from 'react';
import NoteFrame from './NoteFrame';
import { NoteFrameChild } from '../../types';
import { gotoUrl } from '../../util';
import MarkdownEditor from '../Editors/MarkdownEditor';

const MemeNote: React.FC<NoteFrameChild> = props => (
    <NoteFrame {...props} Editor={MarkdownEditor}>
        <img
            className='link'
            src={props.note.body}
            alt='meme'
            onClick={() => gotoUrl(props.note.body)}
        />
    </NoteFrame>
);

export default React.memo(MemeNote);

import React from 'react';
import NoteFrame from './NoteFrame';
import { NoteType } from '../../types';

const MemeNote: React.FC<NoteType> = React.memo(({ body, title, tags }) => (
    <NoteFrame title={title} tags={tags}>
        <img src={body} alt="meme" />
    </NoteFrame>
));

export default MemeNote;

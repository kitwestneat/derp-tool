import * as React from 'react';
import { getNoteType } from './note-factory';
import { NoteFrameChild } from '../../types';

const index: React.FC<NoteFrameChild> = props => {
    const Comp = getNoteType(props.note.body);

    return <Comp {...props} />;
};
export default index;

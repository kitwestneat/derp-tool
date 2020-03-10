import * as React from 'react';
import { getNoteType } from './note-factory';
import { NoteType } from '../../types';

const index: React.FC<NoteType> = React.memo(note => {
    const Comp = getNoteType(note.body);
    return <Comp {...note} />;
});
export default index;

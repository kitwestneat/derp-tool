import * as React from 'react';
import Popup from 'reactjs-popup';
import { NoteType, NoteFrameChild, EditorType } from '../../types';

function saveNote(note: NoteType) {
    console.log('saving', note);
}

interface Props extends NoteFrameChild {
    Editor: EditorType;
}

const NoteActions: React.FC<Props> = ({ note, Editor, updateNote }) => (
    <div className='actions'>
        <Popup modal trigger={<div className='link'>edit</div>}>
            <Editor note={note} updateNote={updateNote} />
        </Popup>
    </div>
);

export default React.memo(NoteActions);

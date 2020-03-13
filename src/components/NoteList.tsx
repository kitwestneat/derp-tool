import React from 'react';
import Note from './Note';
import { NoteType, PopupState } from '../types';

interface Props {
    notes: NoteType[];
    popup(props: PopupState): void;
}

const NoteList: React.FC<Props> = ({ notes, popup }: Props) => (
    <div className='note-list'>
        {notes.map(note => (
            <Note note={note} popup={popup} />
        ))}
    </div>
);

export default NoteList;

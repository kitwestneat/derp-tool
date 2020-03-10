import React from 'react';
import Note from './Note';
import { NoteType } from '../types';

interface Props {
    notes: NoteType[];
}

const NoteList: React.FC<Props> = ({ notes }: Props) => (
    <div className="note-list">
        {notes.map(note => (
            <Note {...note} />
        ))}
    </div>
);

export default NoteList;

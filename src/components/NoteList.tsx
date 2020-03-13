import React from 'react';
import Note from './Note';
import { NoteType } from '../types';

interface Props {
    notes: NoteType[];
    setNotes(notes: NoteType[]): void;
}

const NoteList: React.FC<Props> = ({ notes, setNotes }: Props) => (
    <div className='note-list'>
        {notes.map(
            (note, i) => (
                console.log('notemap, note', note),
                (
                    <Note
                        note={note}
                        updateNote={(newNote: NoteType) => {
                            debugger;
                            Object.assign(notes[i], newNote);
                            setNotes(Array.from(notes));
                        }}
                    />
                )
            )
        )}
    </div>
);

export default NoteList;

import * as React from 'react';
import { EditorType, NoteFrameChild } from '../../types';
import { gotoUrl } from '../../util';
import NoteActions from './NoteActions';

interface Props extends NoteFrameChild {
    Editor: EditorType;
}

const NoteFrame: React.FC<Props> = ({ note, Editor, updateNote, children }) => {
    const { permalink, title, tags } = note;
    const [hover, setHover] = React.useState(false);

    return (
        <div
            className='note'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className='noteHeader'>
                <div onClick={() => gotoUrl(permalink)}> {title} </div>
                {hover && <NoteActions note={note} updateNote={updateNote} Editor={Editor} />}
            </div>
            <div className='noteBody'>{children}</div>
            <div className='noteTags'>
                {tags.map(({ name, color }) => (
                    <div className='noteOneTag' style={{ backgroundColor: color }}>
                        {name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoteFrame;

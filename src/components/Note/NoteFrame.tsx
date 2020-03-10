import * as React from 'react';
import { NoteType } from '../../types';

const NoteFrame: React.FC<Omit<NoteType, 'body'>> = React.memo(({ title, tags, children }) => (
    <div className='note'>
        <div className='noteHeader'>{title}</div>
        <div className='noteBody'>{children}</div>
        <div className='noteTags'>
            {tags.map(({ name, color }) => (
                <div className='noteOneTag' style={{ backgroundColor: color }}>
                    {name}
                </div>
            ))}
        </div>
    </div>
));

export default NoteFrame;

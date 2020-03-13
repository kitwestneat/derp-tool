import * as React from 'react';
import { EditorType, NoteFrameChild, NoteType } from '../../types';
import { gotoUrl } from '../../util';

interface Props extends NoteFrameChild {
    Editor: EditorType;
}

function saveNote(note: NoteType) {
    console.log('saving', note);
}

const NoteFrame: React.FC<Props> = ({ note, Editor, popup, children }) => {
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
                <div className='actions'>
                    {hover && (
                        <div
                            className='link'
                            onClick={() =>
                                popup({
                                    content: <Editor note={note} />,
                                    onClose: () => saveNote(note)
                                })
                            }
                        >
                            edit
                        </div>
                    )}
                </div>
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

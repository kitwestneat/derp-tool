import React from 'react';
import NoteFrame from './NoteFrame';
import { NoteType } from '../../types';

const HtmlNote: React.FC<NoteType> = React.memo(({ body, title, tags }) => (
    <NoteFrame title={title} tags={tags}>
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </NoteFrame>
));

export default HtmlNote;

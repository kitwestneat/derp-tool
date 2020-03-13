import React from 'react';
import NoteFrame from './NoteFrame';
import { UrlPreviewType, NoteFrameChild } from '../../types';
import { gotoUrl } from '../../util';
import MarkdownEditor from '../Editors/MarkdownEditor';

function getPreview(body: string): UrlPreviewType {
    try {
        const urlCache = JSON.parse(body) as Partial<UrlPreviewType>;

        if (urlCache.thumb && urlCache.title && urlCache.url) {
            return urlCache as UrlPreviewType;
        }
    } catch (e) {}

    return {
        url: body
    };
}

const UrlNote: React.FC<NoteFrameChild> = props => {
    const preview = getPreview(props.note.body);

    return (
        <NoteFrame {...props} Editor={MarkdownEditor}>
            <div onClick={() => gotoUrl(preview.url)}>
                {preview.title && <div className='note-url-title'>{preview.title}</div>}
                <div className='note-url'>{preview.url}</div>
            </div>
        </NoteFrame>
    );
};

export default React.memo(UrlNote);

import React from 'react';
import NoteFrame from './NoteFrame';
import { NoteType, UrlPreviewType } from '../../types';

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

const UrlNote: React.FC<NoteType> = React.memo(({ body, title, tags }) => {
    const preview = getPreview(body);

    return (
        <NoteFrame title={title} tags={tags}>
            <div>
                <div><a href={preview.url}>{preview.title || preview.url}</a></div>
            </div>
        </NoteFrame>
    );
});

export default UrlNote;

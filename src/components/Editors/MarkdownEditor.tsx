import React from 'react';
import ReactMarkdown from 'react-markdown';
import ReactMde from 'react-mde';
import { EditorType } from '../../types';
import 'react-mde/lib/styles/css/react-mde-all.css';

const MarkdownEditor: EditorType = ({ note, updateNote }) => {
    const [selectedTab, setSelectedTab] = React.useState<'write' | 'preview'>('write');

    const onChange = (val: string) => {
        console.log('val', val);
        updateNote({
            ...note,
            body: val
        });
    };

    console.log('MarkdownEditor', note);

    return (
        <ReactMde
            value={note.body}
            onChange={onChange}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={markdown =>
                Promise.resolve(<ReactMarkdown source={markdown} />)
            }
        />
    );
};

export default MarkdownEditor;

import React, { useState } from 'react';

import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import NoteList from './components/NoteList';
import { notes } from './test-data';

function App() {
    const [noteState, setNotes] = useState(notes);

    return (
        <Container>
            <Header />
            <NoteList notes={noteState} setNotes={setNotes} />
        </Container>
    );
}

export default App;

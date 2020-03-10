import React from 'react';

import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import NoteList from './components/NoteList';
import { notes } from './test-data';

function App() {
  return (
    <Container>
      <Header />
      <NoteList notes={notes} />
    </Container>
  );
}

export default App;

import React, { useState } from 'react';
import Popup from 'reactjs-popup';

import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import NoteList from './components/NoteList';
import { notes } from './test-data';
import { PopupState } from './types';

function App() {
    const [popupState, setPopupState] = useState<PopupState>({});
    const popupOnClose = () => {
        popupState.onClose && popupState.onClose();
        setPopupState({});
    };

    const popup = (props: PopupState) => setPopupState(props);

    return (
        <Container>
            <Header />
            <NoteList notes={notes} popup={popup} />
            <Popup open={!!popupState.content} closeOnDocumentClick={true} onClose={popupOnClose}>
                {popupState.content || <div />}
            </Popup>
        </Container>
    );
}

export default App;

import React, { useState, useEffect } from 'react';
import Header from './containers/header-container/header.container'
import AddNote from './containers/add-notes/add-notes.container'
import NotesList from './components/notes-list/notes-list.component'
import UpdateNote from './components/update-note/update-note.component'
import { autoExpand } from './utils'

import './App.scss';

function App() {

  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const noteSelected = note => {
    setShowModal(true)
    setSelectedNote(note)
    console.log(note, ' is selected!');
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedNote(null)
    console.log('No note is selected and modal is not active!<br>Show Modal: ', showModal);
  }

  useEffect(() => {

    document.addEventListener('input', event => {
      if (event.target.tagName.toLowerCase() !== 'textarea') {
        return
      }
      autoExpand(event.target)
    }, false)

  }, [])
  return (
    <div className="app">
      <Header></Header>
      <AddNote></AddNote>
      <NotesList selected={noteSelected}></NotesList>
      {showModal &&
        <UpdateNote modal={closeModal} note={selectedNote} />
      }
    </div>
  );
}

export default App;

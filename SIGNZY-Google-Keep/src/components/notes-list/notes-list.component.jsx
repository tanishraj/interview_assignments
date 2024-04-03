import React, { useState, useEffect } from "react";
import Note from "../note/note.component";
import { db } from "../../utils/firebase";

import "./notes-list.style.scss";

function NotesList({ selected }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    db.getNotes((snapshot) => {
      const notes = snapshot.val();
      setNotes(
        Object.keys(notes)
          .map((i) => notes[i])
          .reverse()
      );
    });
  }, []);

  return (
    <div className="notes">
      {notes.map((note, index) => (
        <Note key={index} selected={selected} index={index} note={note} />
      ))}
    </div>
  );
}

export default NotesList;

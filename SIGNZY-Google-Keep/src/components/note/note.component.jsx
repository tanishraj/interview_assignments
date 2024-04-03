import React from "react";
import PropTypes from "prop-types";
import EditIcon from "../edit-icon/edit-icon.component";

import "./note.style.scss";

function Note({ note, index, selected }) {
  const hasNotes = note.title || note.content;

  const editNote = () => {
    selected(note);
  };

  //console.log(note)

  return (
    <div className="note" index={index}>
      <div onClick={editNote}>
        <EditIcon />
      </div>
      {hasNotes ? (
        <div>
          {note.title && <h1>{note.title}</h1>}
          {note.content && <p>{note.content}</p>}
        </div>
      ) : (
        <div className="empty">Empty Note</div>
      )}
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
};

export default Note;

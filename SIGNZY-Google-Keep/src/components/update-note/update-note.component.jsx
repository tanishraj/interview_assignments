/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { db } from "../../utils/firebase";
import DeleteIcon from "../delete-icon/delete-icon.component";

import "./update-note.style.scss";

function UpdateNote({ note, index, modal }) {
  //state
  const [mutableNote, setMutableNote] = useState(note);
  const [id, setId] = useState(mutableNote.id);
  const [title, setTitle] = useState(mutableNote.title);
  const [content, setContent] = useState(mutableNote.content);

  // close modal
  const dismissModal = () => {
    modal();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    db.updateNote(
      id,
      title,
      content,
      () => {
        dismissModal();
        console.log("note updated");
      },
      (err) => {
        console.error(err);
      }
    );
  };

  const handleDelete = (e) => {
    e.preventDefault();

    if (window.confirm("Do you really want to delete this note?")) {
      db.deleteNote(id).then(
        () => {
          dismissModal();
          console.log("note deleted");
        },
        (err) => {
          console.error(err);
        }
      );
    }
  };

  return (
    <div>
      {note && (
        <div className="modal-backdrop" onClick={dismissModal} id="modalBox">
          <div
            className="modal"
            role="dialog"
            aria-labelledby="modalTitle"
            aria-describedby="modalContent"
          >
            <form
              onSubmit={handleSubmit}
              onClick={stopPropagation}
              className="edit-form"
            >
              <input
                id="modalTitle"
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                value={title}
                placeholder="Title"
              />

              <textarea
                id="modalContent"
                onChange={(e) => setContent(e.target.value)}
                value={content}
                name="content"
                placeholder="Add a note..."
                rows="8"
              />

              <footer className="modal-footer">
                <button
                  onClick={handleDelete}
                  type="button"
                  className="delete-button"
                >
                  <DeleteIcon />
                </button>
                <button type="submit" className="submit-button">
                  <span>Done</span>
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateNote;

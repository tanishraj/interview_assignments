import React, { useState } from "react";
import { db } from "../../utils/firebase";

import "./add-note-form.style.scss";

function AddNoteForm() {
  const [titleFieldVisible, setTitleFieldVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const showTitleField = () => {
    setTitleFieldVisible(true);
  };

  const hideTitleField = () => {
    setTitleFieldVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title || content) {
      db.createNote(title.trim(), content.trim()).then(
        () => {
          setTitle("");
          setContent("");
          setTitleFieldVisible("false");
        },
        (e) => console.log(e)
      );

      setTitle("");
      setContent("");
      setTitleFieldVisible("false");
    }
  };

  return (
    <div>
      <div className="create-form">
        {titleFieldVisible && (
          <div className="backdrop" onClick={hideTitleField} />
        )}

        <form onSubmit={handleSubmit} className="create-note">
          {titleFieldVisible && (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onFocus={showTitleField}
              name="title"
              placeholder="Title"
            />
          )}

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={showTitleField}
            name="content"
            placeholder="Take a note..."
          />
          <button type="Submit">
            <span>&#43;</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNoteForm;

import React from "react";

const Notes = ({ notes }) => {
  return (
    <div>
      {notes.map((note) => (
        <li key={note.id}>{note.content}</li>
      ))}
    </div>
  );
};

export default Notes;

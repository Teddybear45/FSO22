import logo from "./logo.svg";
import { useState, useEffect } from "react";

import noteService from "./services/notes";

import "./App.css";

import axios from "axios";
import Note from "./components/Note";

function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    console.log("effect");
    noteService.getAll().then((response) => {
      console.log("promise fulfilled");
      console.log(response);
      setNotes(response);
    });
  };

  useEffect(hook, []);
  console.log("render", notes.length, "notes");

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    // todo: get rid of this axios request for a service
    axios.post("http://localhost:3001/notes", noteObject).then((res) => {
      setNotes(notes.concat(noteObject));
      setNewNote("");
    });
  };
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const toggleImportanceOf = (id) => {
    console.log("importance of " + id + " needs to be toggled");

    const url = `http://localhost:3001/notes/${id}`;

    const note = notes.find((note) => note.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((res) => {
        setNotes(notes.map((n) => (n.id !== id ? n : res.data)));
      })
      .catch((error) => {
        alert(`the note '${note.content}' was already deleted from server`);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((n) => (
          <Note
            key={n.id}
            note={n}
            toggleImportance={() => toggleImportanceOf(n.id)}
          />
        ))}
      </ul>

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

import Note from "./components/Notes";

function App({ notes }) {
  return (
    <div>
      <h1>Notes</h1>
      <Note notes={notes}/>
    </div>
  );
}

export default App;

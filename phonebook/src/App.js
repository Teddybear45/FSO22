import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import phonebookService from "./services/phonebook";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const hook = () => {
    phonebookService.getAll().then((res) => {
      setPersons(res);
    });
  };
  useEffect(hook, []);

  const handleNameChange = (event) => {
    event.preventDefault();

    setNewName(event.target.value);
  };
  const handleSubmitPerson = (event) => {
    event.preventDefault();

    if (persons.filter((person) => person.name === newName).length) {
      alert(`${newName} already exists`);
      setNewName("");
      setNewNumber("");
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      phonebookService.create(newPerson).then((res) => {
        setNewName("");
        setNewNumber("");
        setPersons(persons.concat(res));
      });
    }
  };

  const handleNumberChange = (event) => {
    event.preventDefault();

    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    event.preventDefault();

    setFilter(event.target.value);
  };

  const personsToShow = persons.filter((person) =>
    person.name.includes(filter)
  );

  const handleDelete = (event) => {
    console.log(event.target);
    phonebookService.remove(event.target.value);

    // RACE CONDITION NEED TO FIX ****************
    //todo fix. latency. not right method
    phonebookService.getAll().then((res) => {
      setPersons(res);
    });
    
  };
  
  // todo create update(put) method


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter: <input value={filter} onChange={handleFilterChange} />
      </div>

      <h2>add a new</h2>
      <form onSubmit={handleSubmitPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.name}>
            {person.name}: {person.number}{" "}
            <button onClick={handleDelete} value={person.id}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

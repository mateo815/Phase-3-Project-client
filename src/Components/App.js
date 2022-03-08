import React, { useEffect, useState } from "react";
import EntryContainer from "./EntryContainer";
import NewEntryForm from "./NewEntryForm";

function App() {
  const [entries, setEntries] = useState([]);
  const [showForm, setShowForm] = useState(true)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/entries")
      .then((r) => r.json())
      .then(setEntries);
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  console.log(entries)
  console.log(users)

  function handleHide() {
    setShowForm((showForm) => !showForm)
  }

  return (
    <div className="App">
      <header> Hello there!</header>
      <div className="sidebar">
        <button onClick={handleHide} > Show/Hide </button>
        {showForm ? <NewEntryForm entries={entries} setEntries={setEntries} /> : !showForm}
        <header className="App-header">
          <p>Hello from React</p>
        </header>
        <EntryContainer users={users} />
      </div>
    </div>
  );
}

export default App;

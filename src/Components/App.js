import React, { useEffect, useState } from "react";
import EntryContainer from "./EntryContainer";
import NewEntryForm from "./NewEntryForm";
import UserContainer from "./UserContainer";

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

  console.log("entries", entries)
  console.log("users", users)

  function handleHide() {
    setShowForm((showForm) => !showForm)
  }

  return (
    <div className="app">
      {/* <header> How You Feelin? </header> */}
      <div className="sidebar">
        <button onClick={handleHide} > Show/Hide </button>
        {showForm ? <NewEntryForm setEntries={setEntries} /> : !showForm}
        <UserContainer users={users} />
      </div>
      <EntryContainer users={users} entries={entries} />
    </div>
  );
}

export default App;

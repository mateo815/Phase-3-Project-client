import React, { useEffect, useState } from "react";
import EntryContainer from "./EntryContainer";
import NewEntryForm from "./NewEntryForm";
import UserContainer from "./UserContainer";
import Header from './Header';

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

  function handleDeleteEntry(deletedEntry) {
    const updatedEntries = entries.filter((entry) => entry.id !== deletedEntry.id);
    setEntries(updatedEntries);
  }

  function handleAddEntry(newEntry) {
    setEntries([newEntry, ...entries])
  }

  return (
   <div>
      <Header />
    <div className="app">
      <div className="sidebar">
        <button onClick={handleHide} > Create a New Entry </button>
        {showForm ? <NewEntryForm onAddEntry={handleAddEntry} /> : !showForm}
        <UserContainer users={users} />
      </div>
      <EntryContainer entries={entries} handleDeleteEntry={handleDeleteEntry} />
    </div>
   </div>
  );
}

export default App;

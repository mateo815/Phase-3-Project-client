import React, { useEffect, useState } from "react";
import './App.css';



function App() {
  const [entries, setEntries] = useState([]);
  const [showForm, setShowForm] = useState(true)

  useEffect(() => {
    fetch("http://localhost:9292/entries")
      .then((r) => r.json())
      .then(setEntries);
  }, []);

  console.log(entries)

  function handleHide() {
    setShowForm((showForm) => !showForm)
  }

  return (
    <div className="App">
      <div className="sidebar">
        <button onClick={handleHide} > Show/Hide </button>
        {showForm ? <NewEntryForm entries={entries} setEntries={setEntries} /> : !showForm}
        <header className="App-header">
          <p>Hello from React</p>
        </header>
        <EntryContainer entries={entries} />
      </div>
    </div>
  );
}

export default App;

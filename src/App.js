import React, {useEffect, useState} from "react";

import './App.css';



function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/entries")
      .then((r) => r.json())
      .then(setEntries);
  }, []);

  console.log(entries)

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello from React</p>
      </header>
    </div>
  );
}

export default App;

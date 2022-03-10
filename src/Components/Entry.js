import React from 'react'

function Entry({entry, onDeleteEntry}) {

  function handleClick() {
      fetch(`http://localhost:9292/entries/${entry.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => onDeleteEntry(entry));
    }
  // make a delete handler and also useEffect for delete fetch
  return (
    <div className="div-entry">
      <h2>{entry.date}</h2>
      <p>
        <strong>{entry.emotion}</strong>
      </p>
      <p>{entry.note}</p>
      <button onClick={handleClick}>🗑️</button>
    </div>
  )
}

export default Entry
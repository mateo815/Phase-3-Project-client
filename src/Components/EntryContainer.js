import React from 'react'
import Entry from "./Entry"


function EntryContainer({entries, handleDeleteEntry}) {
 
  

  const allEntries = entries.map((entry) => (
    <Entry key={entry.id} entry={entry} onDeleteEntry={handleDeleteEntry}/>
  ))

  


  
  return (
    <div className="entries-container">
      {allEntries}  </div>
  )
}
export default EntryContainer
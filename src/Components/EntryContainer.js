import React from 'react'
import Entry from "./Entry"
import User from "./User"

function EntryContainer({entries}) {
 
  const allEntries = entries.map((e) => (
    <Entry key={e.id} e={e} />
  ))


  
  return (
    <div className="entries-container">
      {allEntries}  </div>
  )
}
export default EntryContainer
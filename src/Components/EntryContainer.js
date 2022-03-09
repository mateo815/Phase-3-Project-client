import React from 'react'
import Entry from "./Entry"

function EntryContainer({entries}) {
  const allEntries = entries.map((e) => (
    <Entry key={e.id} e={e} />
  ))

  return (
    <div>{allEntries}</div>
  )
}

export default EntryContainer
import React from 'react'

function Entry({e}) {
  return (
    <div>
      <h2>{e.user_id}</h2>
      <h3>{e.date}</h3>
      <p>{e.emotion}</p>
      <p>{e.note}</p>
    </div>
  )
}

export default Entry
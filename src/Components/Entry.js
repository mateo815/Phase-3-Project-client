import React from 'react'

function Entry({e}) {

  // make a delete handler and also useEffect for delete fetch
  return (
    <div>
      <h2>{e.user_id}</h2>
      <p>{e.date}</p>
      <p>
        <strong>{e.emotion}</strong>
      </p>
      <p>{e.note}</p>
      <button>

      </button>
    </div>
  )
}

export default Entry
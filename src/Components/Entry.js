import React, { useState } from "react";

function Entry({ e }) {

    const [feel, setFeel] = useState(true)

    function handleFeel() {
        setFeel((feel) => !feel)
    }

    return (
        <div>
            <h2>e.title</h2>
            <p>hello</p>
            <p>
                <strong> - Fill in </strong>
            </p>
            <button onClick={handleFeel}> {feel ? "Show" : "Hide"}
            </button>
        </div>
    )
}

export default Entry;
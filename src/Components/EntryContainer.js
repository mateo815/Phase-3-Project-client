import React from "react";
import Entry from "./Entry";


function EntryContainer({ entries }) {


    const entryList = entries.map((e) => (
        <Entry
            key={e.id}
            e={e}/>
    ))


    return (
        <div className="entry-container">
           {entryList}
        </div>

    );
}
export default EntryContainer;
import React from "react";
import Entry from "./Entry";


function EntryContainer({ users }) {

    

    const userList = users.map((u) => (
        <Entry
            key={u.id}
            u={u}/>
    ))


    return (
        <div className="entry-container">
           {userList}
        </div>

    );
}
export default EntryContainer;
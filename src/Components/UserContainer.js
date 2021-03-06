import React from "react";
import User from "./User";


function UserContainer({ users }) {

    const userList = users.map((u) => (
        <User
            key={u.id}
            u={u}/>
    ))
    return (
        <div >
           {userList}
        </div>

    );
}
export default UserContainer;
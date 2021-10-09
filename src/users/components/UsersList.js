import React from "react";

import UsersListElement from "./UserListElement";

function UsersList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <UsersListElement key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;

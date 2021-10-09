import React from "react";

function UserListElement({ user }) {
  return (
    <h3>
      {user.id} {user.name}
    </h3>
  );
}

export default UserListElement;

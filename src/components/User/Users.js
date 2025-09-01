import React from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";

const Users = (props) => {
  return (
    <div>
      <AddUser />
      <UserList />
    </div>
  );
};

export default Users;

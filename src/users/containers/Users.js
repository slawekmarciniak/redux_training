import React from "react";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";
import UsersList from "../components/UsersList";

const UsersContainer = (props) => {
  console.log(props);
  const fetchData = () => {
    props.fetchUsers();
  };

  return (
    <div className="container">
      <h2>Users</h2>
      <button onClick={fetchData}>Fetch Users</button>
      <UsersList users={props.users} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

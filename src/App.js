import React, { useState } from 'react';

import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import Modal from './components/UI/Modal';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    console.log(user);
    setUsers((prevState) => {
      return [...prevState, user];
    });
  };

  return (
    <div>
      {/* <Modal /> */}
      <h1>Add A User</h1>
      <UserForm onAddUser={addUserHandler} />
      <UserList items={users} />
    </div>
  );
};

export default App;

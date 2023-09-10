import React from 'react';

import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import Modal from './components/UI/Modal';

const App = () => {
  return (
    <div>
      {/* <Modal /> */}
      <h1>Add A User</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;

import React, { useState } from 'react';

import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import Modal from './components/UI/Modal';

const App = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [validationMessage, setValidationMessage] = useState(
    'Something went wrong! Please check your inputs and try again.'
  );

  const addUserHandler = (user) => {
    console.log(user);
    setUsers((prevState) => {
      return [...prevState, user];
    });
  };

  const removeUserHandler = (id) => {
    setUsers((prevState) => {
      return prevState.filter((user) => user.id !== id);
    });
  };

  const openModalHandler = (message) => {
    setValidationMessage(message);
    setModal(true);
  };

  const closeModalHandler = () => {
    setModal(false);
  };

  return (
    <div>
      {modal && (
        <Modal
          onClose={closeModalHandler}
          message={validationMessage}
          buttonText={'Close'}
        />
      )}
      <h1>List Your Family Members</h1>
      <UserForm onAddUser={addUserHandler} onInvalid={openModalHandler} />
      <UserList
        items={users}
        onRemoveUser={removeUserHandler}
        title={'My Family Members'}
        noData={'No family members added yet.'}
      />
    </div>
  );
};

export default App;

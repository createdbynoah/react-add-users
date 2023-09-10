import React, { useState } from 'react';

import Card from '../UI/Card';

const UserForm = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
  });

  const inputChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      id: (Math.random() * 1000).toString(),
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    props.onAddUser(formData);
    resetHandler();
  };

  const resetHandler = () => {
    setFormData({
      username: '',
      age: '',
    });
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={inputChangeHandler}
            name="username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            value={formData.age}
            onChange={inputChangeHandler}
            name="age"
          />
        </div>
        <div className="form-button">
          <button type="submit" className="button">
            Add User
          </button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;

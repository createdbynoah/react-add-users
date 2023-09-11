import React, { useState } from 'react';

import Card from '../UI/Card';

const UserForm = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const inputChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      id: (Math.random() * 1000).toString(),
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (validateUsername() && validateAge()) {
      setFormIsValid(true);
      props.onAddUser(formData);
      resetHandler();
    }
  };

  const validateUsername = () => {
    if (formData.username.trim().length === 0) {
      props.onInvalid('Please enter a valid name.');
      return false;
    }
    return true;
  };

  const validateAge = () => {
    if (formData.age.trim().length === 0) {
      props.onInvalid('Please enter a valid age.');
      return false;
    } else if (+formData.age < 1) {
      props.onInvalid('Please enter a valid age (> 0).');
      return false;
    }
    return true;
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
          <label htmlFor="username">Name</label>
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
            Add
          </button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;

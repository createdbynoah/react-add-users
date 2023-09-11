import React, { useState } from 'react';

import classes from './UserForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

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
        <div className={classes['input-group']}>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            value={formData.username}
            onChange={inputChangeHandler}
            name="username"
          />
        </div>
        <div className={classes['input-group']}>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            value={formData.age}
            onChange={inputChangeHandler}
            name="age"
          />
        </div>
        <div className={classes['form-button']}>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;

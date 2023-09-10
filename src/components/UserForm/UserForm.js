import React from 'react';

import Card from '../UI/Card';

const UserForm = () => {
  return (
    <Card>
      <form>
        <div className="input-group">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Age (Years)</label>
          <input type="number" />
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

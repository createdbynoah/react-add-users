import React from 'react';

import Card from '../UI/Card';

const UserList = (props) => {
  return (
    <Card>
      <h2 className="user-title">Users</h2>
      <ul className="user-list">
        <li>Max (28 years old)</li>
        <li>Max (28 years old)</li>
      </ul>
      <p className="message-none">No users added.</p>
    </Card>
  );
};

export default UserList;

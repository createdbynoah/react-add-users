import React from 'react';

import Card from '../UI/Card';

const UserList = (props) => {
  return (
    <Card>
      <h2 className="user-title">Users</h2>
      <ul className="user-list">
        {props.items.map((user) => (
          <li key={user.id} className="user-item">
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
      {!props.items.length && <p className="message-none">No users added.</p>}
    </Card>
  );
};

export default UserList;

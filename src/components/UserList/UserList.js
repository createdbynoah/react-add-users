import React from 'react';

import classes from './UserList.module.css';
import Card from '../UI/Card';

const UserList = (props) => {
  const handleItemClick = (id) => {
    props.onRemoveUser(id);
  };

  return (
    <Card>
      <h2 className={classes['user-title']}>{props.title}</h2>
      <ul className={classes['user-list']}>
        {props.items.map((user) => (
          <li
            key={user.id}
            className={classes['user-item']}
            onClick={() => handleItemClick(user.id)}
          >
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
      {!props.items.length && (
        <p className={classes['message-none']}>{props.noData}</p>
      )}
    </Card>
  );
};

export default UserList;

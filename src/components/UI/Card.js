import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      {props.title && <div className="card__header">{props.title}</div>}
      <div className="card__content">{props.children}</div>
    </div>
  );
};

export default Card;

import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      {props.title && (
        <header className={`card__header ${props.className}`}>
          {props.title}
        </header>
      )}
      <div className="card__content">{props.children}</div>
    </div>
  );
};

export default Card;

import React from 'react';

import Card from './Card';

const Modal = (props) => {
  const dismissHandler = () => {
    props.onClose();
  };
  return (
    <div className="overlay" onClick={dismissHandler}>
      <Card title="Error" classes={'modal danger'}>
        <p>{props.message}</p>
        <div className="modal-button">
          <button className="button danger" onClick={dismissHandler}>
            {props.buttonText ? props.buttonText : 'Dismiss'}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;

import React from 'react';

import Card from './Card';
import Button from './Button';

const Modal = (props) => {
  const dismissHandler = () => {
    props.onClose();
  };
  return (
    <div className="overlay" onClick={dismissHandler}>
      <Card title="Error" className={'modal danger'}>
        <p>{props.message}</p>
        <div className="modal-button">
          <Button onBtnClick={dismissHandler} className="danger" type="button">
            {props.buttonText ? props.buttonText : 'Dismiss'}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;

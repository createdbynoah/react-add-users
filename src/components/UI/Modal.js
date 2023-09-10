import React from 'react';

import Card from './Card';

const Modal = (props) => {
  return (
    <div className="overlay">
      <Card title="Confirm">
        <p>Are you sure?</p>
        <div className="modal-button">
          <button className="button">Dismiss</button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;

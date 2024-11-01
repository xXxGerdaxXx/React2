import React from 'react';

const AlertBox = ({ message, onClose, type }) => {
  return (
    <div className="alertbox-overlay">
      <div className={`alertbox-content ${type === 'success' ? 'alertbox-success' : 'alertbox-error'}`}>
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default AlertBox;

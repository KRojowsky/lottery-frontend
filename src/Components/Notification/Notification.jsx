import React from 'react';
import './Notification.scss';

const Notification = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className={`notification ${type}`}>
        {message}
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </>
  );
};

export default Notification;

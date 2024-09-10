import React, { useState } from 'react';
import axios from 'axios';
import './StatusCheck.scss';

const StatusCheck = ({ show, onClose }) => {
  const [statusPhone, setStatusPhone] = useState('');
  const [statusReceipt, setStatusReceipt] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [statusClass, setStatusClass] = useState('');

  const handleCheckStatus = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8000/api/members/status/', {
        phone: statusPhone,
        receipt: statusReceipt
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        const { exists } = response.data;
        if (exists) {
          setStatusMessage('Zgłoszenie o podanym numerze paragonu i numerze telefonu zostało pomyślnie zgłoszone.');
          setStatusClass('success'); 
        } else {
          setStatusMessage('Nie znaleziono zgłoszenia dla podanego numeru paragonu i telefonu.');
          setStatusClass('error');
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setStatusMessage('Nie znaleziono zgłoszenia dla podanego numeru paragonu i telefonu.');
        setStatusClass('error');
      } else {
        setStatusMessage('Wystąpił błąd podczas sprawdzania statusu zgłoszenia.');
        setStatusClass('error');
      }
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h3>Sprawdź status zgłoszenia</h3>
        <form onSubmit={handleCheckStatus}>
          <input
            type="text"
            className="form-control"
            placeholder="Numer telefonu"
            value={statusPhone}
            onChange={(e) => setStatusPhone(e.target.value)}
            required
          />
          <input
            type="text"
            className="form-control"
            placeholder="Numer paragonu"
            value={statusReceipt}
            onChange={(e) => setStatusReceipt(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">Sprawdź</button>
        </form>
        {statusMessage && <p className={`status-message ${statusClass}`}>{statusMessage}</p>}
        <button className="close-popup" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default StatusCheck;

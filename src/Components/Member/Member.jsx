import React, { useState } from 'react';
import axios from 'axios';
import './Member.scss';
import receiptImage from '../../assets/receipt.png';
import Notification from '../notification/Notification'; // Ścieżka importu

const Member = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [receipt, setReceipt] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [rodoAccepted, setRodoAccepted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [notification, setNotification] = useState({ type: '', message: '' });

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{9}$/;
    return phoneRegex.test(number);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validatePhoneNumber(phone)) {
      setNotification({ type: 'error', message: 'Numer telefonu powinien się składać z dokładnie 9 cyfr.' });
      return;
    }

    if (!termsAccepted || !rodoAccepted) {
      setNotification({ type: 'error', message: 'Musisz potwierdzić swój wiek, zaakceptować regulamin i klauzulę informacyjną.' });
      return;
    }

    const data = { first_name: firstName, last_name: lastName, phone, email, receipt };

    try {
      await axios.post('https://lotteryapi.onrender.com/api/members/create/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setNotification({ type: 'success', message: 'Dołączenie do loterii zakończonie sukcesem. Powodzenia!' });
      setFirstName('');
      setLastName('');
      setPhone('');
      setEmail('');
      setReceipt('');
      setTermsAccepted(false);
      setRodoAccepted(false);
    } catch (error) {
      setNotification({ type: 'error', message: 'Wystąpił błąd podczas zgłaszania Twojego uczestnictwa w loterii. Spróbuj ponownie.' });
    }
  };

  const closeNotification = () => {
    setNotification({ type: '', message: '' });
  };

  return (
    <section className="section member">
      <div className="container">
        <h2 className="title">Weź udział</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              id="firstName"
              className="form-control"
              placeholder="Imię"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              id="lastName"
              className="form-control"
              placeholder="Nazwisko"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              id="phone"
              className="form-control"
              placeholder="Numer telefonu"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Adres e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              id="receipt"
              className="form-control"
              placeholder="Numer paragonu"
              value={receipt}
              onChange={(e) => setReceipt(e.target.value)}
              required
            />
            <button id="receipt-btn" type="button" className='btn btn-link' onClick={() => setShowPopup(true)}>Gdzie znajdę numer paragonu?</button>
          </div>
          <div className="checkbox-row">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              required
            />
            <label htmlFor="terms">
              Oświadczam, że jestem osobą <b>pełnoletnią i mam ukończone 18 lat</b>.
            </label>
          </div>
          <div className="checkbox-row">
            <input
              type="checkbox"
              id="rodo"
              checked={rodoAccepted}
              onChange={() => setRodoAccepted(!rodoAccepted)}
              required
            />
            <label htmlFor="rodo">
              Zapoznałam/-em się z regulaminem loterii <b>„LOTERII ŚWIĄTECZNEJ MI-STORE”</b> wraz z zawartą w nim klauzulą informacyjną dotyczącą przetwarzania danych osobowych i akceptuję jego wszystkie postanowienia.
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Wyślij</button>
        </form>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={receiptImage} alt="Receipt Example" />
            <button className="close-popup" onClick={() => setShowPopup(false)}>X</button>
          </div>
        </div>
      )}

      <Notification
        message={notification.message}
        type={notification.type}
        onClose={closeNotification}
      />
    </section>
  );
};

export default Member;
